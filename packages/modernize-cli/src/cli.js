#!/usr/bin/env node

import path from 'path';
import { promises as fs } from 'fs';
import sade from 'sade';
import * as kl from 'kolorist';
import glob from 'tiny-glob';
import babel from '@babel/core';
import modernizePreset from 'babel-preset-modernize/dist/standalone.js';
import { minify } from 'terser';
import lebab from 'lebab';
import kb from 'pretty-bytes';
import gzipSize from 'gzip-size';
import Table from 'cli-table3';

sade('modernize-cli <...files>', true)
	.option('files', 'JS files to convert to modern syntax')
	.option('cwd', 'Filenames will be made relative to this before copying')
	.option('out', 'Directory to write converted code to')
	.option('dirmap', 'Replacement directory names to use when writing output', 'dist,build')
	.option('webpack', 'Attempt to deconstruct webpack bundles', false)
	.option('loose', 'Enable "loose mode" syntax upgrades based on common assumptions', false)
	.option('compress', 'Minify the result using Terser', true)
	.option('lebab', 'Attempt to upgrade syntax level using Lebab', false)
	.option('html', 'A glob pattern that matches HTML files to create -modern.html versions of')
	.option('verbose', 'Output verbose logs', false)
	.option('dry', 'List files that would have been transformed and exit without doing anything', false)
	.action(async (_, opts) => {
		opts.files = [].concat(_ || [], opts.files || []);
		opts.dirmap = opts.dirmap.split(/\s*,\s*/).reduce((map, p) => {
			const parts = p.split('=');
			map[parts[0]] = parts[1] || (parts[0] + '-modern');
			return map;
		}, {});
		// console.log(opts.dirmap);
		try {
			await run(opts);
		} catch (err) {
			process.stderr.write(kl.red((process.env.DEBUG ? err.stack : err.message) || err + '') + '\n');
			process.exit(err.code || 1);
		}
	})
	.parse(process.argv);

async function modernize(code, filename, cwd, presetConfig) {
	return (await babel.transformAsync(code, {
		cwd,
		babelrc: false,
		comments: false,
		compact: true,
		minified: true,
		configFile: false,
		filename,
		filenameRelative: path.basename(filename),
		presets: [
			[modernizePreset, presetConfig]
		]
	})).code;
}

async function runLebab(code) {
	const result = lebab.transform(
		code,
		[
			// safe: https://github.com/lebab/lebab#safe-transforms
			'arrow', 'arrow-return', 'for-of', 'for-each', 'arg-rest', 'arg-spread', 'obj-method', 'obj-shorthand', 'no-strict', 'exponent', 'multi-var',
			// unsafe: https://github.com/lebab/lebab#unsafe-transforms
			'let',
			'class',
			'template',
			'destruct-param',
			'default-param',
			'includes'
		]
	);
	if (result.warnings) for (const w of result.warnings) console.warn(w);
	return result.code;
}

async function run({ files, cwd, out, dirmap, compress, lebab, webpack, loose, html, stats, dry, verbose }) {
	cwd = path.resolve(cwd || '');
	out = path.resolve(out || cwd);

	const pattern = files.length > 1 ? `{${files.join(',')}}` : files[0];
	let allFiles = await glob(pattern, { filesOnly: true, absolute: true, cwd });

	// filter out files matched from within the output directory:
	if (out !== cwd) {
		allFiles = allFiles.filter(file => !file.startsWith(out + path.sep));
	}

	const sharedRoot = cwd || allFiles.map(p => path.dirname(p)).reduce((root, file) => {
		let out = [];
		let a = root.split(path.sep);
		let b = file.split(path.sep);
		for (let i=0; i<Math.min(a.length, b.length); i++) {
			if (a[i] !== b[i]) break;
			out.push(a[i]);
		}
		return out.join(path.sep);
	});
	allFiles = allFiles.map(p => path.relative(sharedRoot, p));

	const outRoot = path.resolve(out, path.relative(cwd, sharedRoot));
	await fs.mkdir(outRoot, { recursive: true });
	if (dry) {
		return console.log({
			cwd: cwd,
			out: outRoot,
			commonPath: path.relative(cwd, sharedRoot),
			files: allFiles
		});
	}

	const fileData = [];
	// const fileData = await Promise.all(allFiles.map(file => fs.readFile(path.resolve(sharedRoot, file), 'utf-8')));

	// you love it
	if (!verbose) {
		var oldLog = console.log;
		var oldWarn = console.log;
		var logs = [];
		var warnings = [];
		console.log = (...args) => logs.push(args);
		console.warn = (...args) => warnings.push(args);
	}

	// const lebabOutput = fileData.map(runLebab);

	const modernizeConfig = { webpack, loose };

	// const transpiled = await Promise.all(allFiles.map(async file => {
	const transpiled = (allFiles.map(async (file, index) => {
		const fullpath = path.resolve(sharedRoot, file);
		const code = fileData[index] = await fs.readFile(fullpath, 'utf-8');
		// const code = fileData[index];
		// const code = await lebabOutput[index];
		let modern = await modernize(code, fullpath, sharedRoot, modernizeConfig);
		// modern = await modernize(modern, fullpath, sharedRoot, modernizeConfig);

		if (lebab) modern = await runLebab(modern);
		return modern;
	}));

	// const lebabOutput = transpiled.map(async code => runLebab(await code));

	/** @type {import('terser').MinifyOptions} */
	const TERSER_OPTS = {
		ecma: 2017,
		nameCache: {},
		safari10: false,
		sourceMap: false,
		mangle: true,
		compress: {
			passes: 10,
			arrows: true
		}
	};
	/** @type {import('terser').MinifyOptions} */
	const TERSER_OPTS_ES5 = {
		...TERSER_OPTS,
		ecma: 5,
		nameCache: {},
		safari10: true,
		compress: {
			passes: 10,
		}
	};

	if (stats) {
		var table = new Table({
			head: [
				'Filename',
				'Original',
				compress && 'Original (min)',
				// 'Lebab',
				// compress && 'Lebab (min)',
				'Modern',
				compress && 'Modern (min)'
			].filter(Boolean).map(kl.blue).map(kl.bold)
		});
	} else {
		var table = new Table({
			head: [
				'Filename',
				'Size (minified, uncompressed)',
			].map(kl.blue).map(kl.bold)
		});
	}

	const writes = [];

	for (let i=0; i<allFiles.length; i++) {
		const file = allFiles[i];
		const modern = await transpiled[i];
		// const lebabed = await lebabOutput[i];
		const orig = fileData[i];

		if (compress) {
			var [
				origMinified,
				// lebabedMinified,
				minified
			] = await Promise.all([
				stats && minify(orig, TERSER_OPTS_ES5).then(m => m.code),
				// minify(lebabed, TERSER_OPTS).then(m => m.code),
				minify(modern, TERSER_OPTS).then(m => m.code)
			]);
		}

		if (stats) {
			// const origMinified = (await minify(orig, TERSER_OPTS_ES5)).code;
			// const minified = (await minify(modern, TERSER_OPTS)).code;
			const [
				origGz,
				origMinifiedGz,
				// lebabedGz,
				// lebabedMinifiedGz,
				modernGz,
				minifiedGz
			] = await Promise.all([
				gzipSize(orig),
				compress && gzipSize(origMinified),
				// gzipSize(lebabed),
				// compress && gzipSize(lebabedMinified),
				gzipSize(modern),
				compress && gzipSize(minified)
			]);

			table.push([
				kl.white(file) + '\n' + kl.cyan('  ↪ gzip:'),
				kl.white(kb(orig.length)) + '\n' + kl.cyan(kb(origGz)),
				compress && kl.white(kb(origMinified.length)) + '\n' + kl.cyan(kb(origMinifiedGz)),
				// kl.white(kb(lebabed.length)) + '\n' + kl.cyan(kb(lebabedGz)),
				// compress && kl.white(kb(lebabedMinified.length)) + '\n' + kl.cyan(kb(lebabedMinifiedGz)),
				kl.white(kb(modern.length)) + '\n' + kl.cyan(kb(modernGz)),
				compress && kl.white(kb(minified.length)) + '\n' + kl.cyan(kb(minifiedGz))
			].filter(Boolean));
		} else {
			// console.info(`${file}: ${prettyBytes(minified.length)}`);
			table.push([file, kb(minified.length)]);
		}

		const fullpath = path.resolve(sharedRoot, file);
		const outpath = path.normalize(path.resolve(outRoot, file).split(path.sep).map(p => p in dirmap ? dirmap[p] : p).join(path.sep));
		// console.info(`${file} --> ${outpath}`);
		if (fullpath === outpath) {
			throw Error(`Refusing to overwrite ${file}: please configure input-to-output filename mapping via --dirmap or --out.`);
		}
		if (path.dirname(outpath) !== outRoot) await fs.mkdir(path.dirname(outpath), { recursive: true });
		writes.push(fs.writeFile(outpath, minified));
	}

	await Promise.all(writes);

	if (!verbose) {
		console.log = oldLog;
		console.warn = oldWarn;
		if (warnings.length) {
			console.log(kl.yellow(`⚠️ ${warnings.length} warnings.`));
		}
	}

	let writtenHtmlFiles;
	if (html) {
		const htmlFiles = await glob(html, { filesOnly: true, absolute: true, cwd });
		writtenHtmlFiles = await Promise.all(htmlFiles.map(async file => {
			const dir = path.dirname(file);
			let html = await fs.readFile(file, 'utf-8');
			console.log(dir, allFiles);
			const relatives = allFiles.map(jsFile => path.relative(dir, path.join(sharedRoot, jsFile)));
			html = html.replace(/(?:(['"`])(.*?)\1|( src=)([^\s'"]+))/g, (s, q, a, p, b) => {
				const filename = (a || b).replace(/^\.?\//g, '');
				console.log(filename, relatives);
				const index = relatives.indexOf(filename);
				if (index === -1) return s;
				const fullPath = allFiles[index];
				const modernPath = path.normalize(path.resolve(outRoot, fullPath).split(path.sep).map(p => p in dirmap ? dirmap[p] : p).join(path.sep))
				return (p || q || '') + './' + path.relative(dir, modernPath) + (q || '');
			});
			const modernFile = path.join(dir, path.basename(file, '.html') + '-modern.html');
			if (modernFile === file) throw Error(`Refusing to overwrite HTML file ${file}.`);
			await fs.writeFile(modernFile, html);
			return path.relative(cwd, modernFile);
		}));
	}

	console.log(table.toString());

	if (writtenHtmlFiles) {
		console.log('Wrote ' + writtenHtmlFiles.length + ' modern HTML files:\n ‣ ' + writtenHtmlFiles.join('\n ‣ '));
	}
}
