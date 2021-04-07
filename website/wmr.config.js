// import dir from '@wmr-plugins/directory-import';
import path from 'path';
import { promises as fs } from 'fs';
import { createRequire } from 'module';

/** @returns {Partial<import('wmr').Options>} */
export default config => ({
	plugins: [
		{
			name: 'noparse',
			async resolveId(id, importer) {
				if (!/^(terser|babel-preset-modernize|@babel\/standalone|pako|js-beautify)(\/|$)/.test(id)) return;
				return `\0noparse:${id}`;
			},
			async load(id) {
				if (!id.startsWith('\0noparse:')) return;
				id = id.slice(9);
				const req = createRequire(import.meta.url);
				const resolved = req.resolve(id);
				console.log(id, resolved);
				return await fs.readFile(resolved, 'utf-8');
			}
		},
		{
			name: 'samples',
			async resolveId(id, importer) {
				if (id.startsWith('samples:')) {
					const resolved = await this.resolve(id.slice(8), importer);
					if (resolved) return `\0samples:${resolved.id}`;
				}
			},
			async load(id) {
				if (!id.startsWith('\0samples:')) return;
				async function dir(f) {
					return (await Promise.all(
						(await fs.readdir(f, { withFileTypes: true })).map(d => {
							const name = path.join(f, d.name);
							return d.name[0] === '.' ? null : d.isDirectory() ? dir(name) : path.posix.relative(config.cwd, name);
						})
					))
						.flat()
						.filter(Boolean);
				}
				id = path.join(config.cwd, id.slice(9));
				return 'export default ' + JSON.stringify(await dir(id));
			}
		},
		{
			name: 'async-prefix',
			async resolveId(id, importer) {
				if (id.startsWith('async!')) {
					return `${id.slice(6)}?async`;
					// const resolved = await this.resolve(id.slice(6), importer);
					// if (resolved) return '\0async:' + resolved.id;
				}
			},
			load(id) {
				if (!id.endsWith('?async')) return;
				id = id.replace('?async', '');
				return `
					import { lazy } from 'preact-iso';
					export default lazy(() => import(${JSON.stringify(id)}));
				`;
			}
		}
		// {
		// 	name: 'old-deps',
		// 	async resolveId(id, importer) {
		// 		const dep = id.match(/^@material\/([^/]+)$/);
		// 		if (dep) {
		// 			const path = `${id}/dist/mdc.${dep[1].replace(/-[a-z]/, s => s[1].toUpperCase())}.js`;
		// 			return this.resolve(path, importer);
		// 		}
		// 	}
		// }
	]
});
