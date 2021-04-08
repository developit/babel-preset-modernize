// let ctx = require.context('!!file-loader?name=examples/[name].[hash].txt!../../examples', false, /\.js/);

import files from 'tree:../samples';

// let ctx = require.context('!!file-loader?name=examples/[name].[hash].txt!../../samples', true, /\.js/);
// const EXAMPLES = ctx.keys().map(path => {
const EXAMPLES = files.map(path => {
	const id = path.replace(/(^.*?\/|\.[^.]+$)/g, '');
	const parts = id.replace(/-/g, ' ').split('/');
	const name = parts.pop();
	const group = parts;
	// const mod = ctx(path);
	// return { id, name, group, url: (mod && mod.default) || mod };
	return { id, name, group, url: '/' + path + '?asset' };
});

export function getGroupedExamples() {
	const rootGroup = { examples: [], groups: {}, _offset: 0 };
	for (let i = 0; i < EXAMPLES.length; i++) {
		const item = EXAMPLES[i];
		let thisGroup = rootGroup;
		for (const group of item.group) {
			let newGroup = thisGroup.groups[group];
			if (!newGroup) {
				newGroup = {
					name: group,
					examples: [],
					groups: {}, // lookup table for child groups
					_offset: 0 // offset of last item / first group
				};
				thisGroup.examples.push((thisGroup.groups[group] = newGroup));
			}
			thisGroup = newGroup;
		}
		// always list items first, before groups
		thisGroup.examples.splice(thisGroup._offset++, 0, item);
		// thisGroup.examples.push(item);
	}
	return rootGroup.examples;
}

export function getExamples() {
	return EXAMPLES;
}

export async function loadExample(example) {
	const match = EXAMPLES.filter(e => e.id === example)[0];
	if (!match) throw Error('Unknown example');
	const res = await fetch(match.url);
	const code = await res.text();
	return code;
}
