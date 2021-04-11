import path from 'path';
import { promises as fs } from 'fs';

export default function treePlugin({ cwd } = {}) {
	return {
		name: 'tree',
		configResolved(config) {
			cwd = cwd || config.cwd;
		},
		async resolveId(id, importer) {
			if (!id.startsWith('tree:')) return;
			id = id.slice(5);
			return `\0tree:${path.relative(cwd, path.resolve(path.dirname(importer), id))}`;
		},
		async load(id) {
			if (!id.startsWith('\0tree:')) return;
			async function dir(f) {
				const list = await Promise.all(
					(await fs.readdir(f, { withFileTypes: true })).map(d => {
						const name = path.join(f, d.name);
						return d.name[0] === '.' ? null : d.isDirectory() ? dir(name) : path.posix.relative(cwd, name);
					})
				);
				return list.flat().filter(Boolean);
			}
			id = path.join(cwd, id.slice(6));
			return 'export default ' + JSON.stringify(await dir(id));
		}
	};
}
