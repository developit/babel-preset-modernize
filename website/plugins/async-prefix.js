export default function asyncPrefixPlugin() {
	return {
		name: 'async-prefix',
		async resolveId(id, importer) {
			if (!id.startsWith('async!')) return;
			return `${(await this.resolve(id.slice(6), importer)).id}?async`;
		},
		load(id) {
			if (!id.endsWith('?async')) return;
			return `
				import { lazy } from 'preact-iso';
				export default lazy(() => import(${JSON.stringify(id.replace('?async', ''))}));
			`;
		}
	};
}
