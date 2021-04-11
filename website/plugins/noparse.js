import { promises as fs } from 'fs';
import path from 'path';
import { createRequire, builtinModules } from 'module';

export default function noParse({ include, exclude = /^$/ }) {
	const req = createRequire(import.meta.url);
	return {
		name: 'noparse',
		resolveId(id, importer) {
			if (id.startsWith('\0noparse:')) return id;
			if (id.startsWith('noparse:')) return '\0' + id;
			if (id.match(include) && !id.match(exclude)) return `\0noparse:${id}`;
		},
		async load(id) {
			if (!id.startsWith('\0noparse:')) return;
			const resolved = req.resolve(id.slice(9));
			const pkgName = id.slice(9).match(/^(@[^/]+\/)?[^/]+/)[0];
			const pkgs = path.posix.normalize(req.resolve(pkgName + '/package.json')).replace(`/${pkgName}/package.json`, '');
			const code = await fs.readFile(resolved, 'utf-8');
			let tokenizer = /(?<![a-z0-9._$'"])require\((.+?)\)/g;
			let token;
			const imports = new Set();
			while ((token = tokenizer.exec(code))) {
				let str;
				try {
					str = new Function('return ' + token[1])();
				} catch (e) {}
				if (str && str.trim() === str) imports.add(str);
				// else console.warn(`Failed to analyze dynamic require() usage in ${id}:\n${token[0]}`);
			}
			let out = '';
			let vars = [...imports].map((str, i) => {
				const name = `$cjs_${i}`;
				let rel = `noparse:${str}`;
				if (str[0] === '.') {
					rel = 'noparse:' + path.posix.relative(pkgs, path.resolve(path.dirname(resolved), str));
				} else if (builtinModules.includes(str.split('/')[0])) {
					rel = str;
				}
				out += `import*as ${name} from${JSON.stringify(rel)};\n`;
				return `${JSON.stringify(str)}:${name}`;
			});
			const namedExports = new Set();
			tokenizer = /(?<![a-z0-9._$'"])(?:module\s*\.)?\s*exports\s*(?:\[\s*['"]([\w$]+)['"]\s*\]|\.\s*([\w$]+))\s*=/g;
			while ((token = tokenizer.exec(code))) namedExports.add(token[1] || token[2]);
			out += `function require(x,i){return (i=require.cache[x]).default||i;}var exports={},module={exports},process={};require.cache={${vars}};`;
			out += `\n${code}`;
			if (!namedExports.has('default')) out += `\nexport default module.exports;`;
			out += [...namedExports].map((e, i) => `var $exp_${i}=module.exports.${e};export{$exp_${i} as ${e}};`).join('\n');
			return out;
		}
	};
}
