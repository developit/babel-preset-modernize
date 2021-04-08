import './worker-fills.js';
import { minify } from 'terser';
import { gzip } from 'pako/lib/deflate';
import presetModernize from 'babel-preset-modernize/dist/standalone.js';
import beautify from 'js-beautify';

const RPC_METHODS = {
	applyTransformations
};

addEventListener('message', async e => {
	const { id, method, params } = e.data;
	const response = { id };
	try {
		response.result = await RPC_METHODS[method](...(params || []));
	} catch (err) {
		response.error = String((err && err.stack) || err);
	}
	postMessage(response);
});

// import prettier from 'prettier/standalone';
// import prettierBabel from 'prettier/parser-babylon';
// const PRETTIER_PLUGINS = [
// 	prettierBabel
// ];

/** @type {import('@babel/standalone')} */
let babel;
let withBabel = import('@babel/standalone').then(b => {
	babel = b;
	initBabel(b);
	return babel;
});

function initBabel(babel) {
	// for when this gets loaded on the main thread
	try {
		babel.disableScriptTags();
	} catch (e) {}

	babel.registerPreset('babel-preset-modernize', presetModernize);
	// babel.registerPreset('@babel/preset-modules', presetModules);
}
// initBabel(babel);

// function toLocalPlugin(plugin) {
// 	if (Array.isArray(plugin)) {
// 		plugin[0] = toLocalPlugin(plugin[0]);
// 		return plugin;
// 	}
// 	if (plugin in babel.availablePlugins) {
// 		return babel.availablePlugins[plugin];
// 	}
// 	if (plugin[0] === '/') {
// 		for (const name in babel.availablePlugins) {
// 			if (plugin[0].indexOf(name) !== -1) {
// 				return name;
// 			}
// 		}
// 	}
// 	return plugin;
// }

// function bundledPreset(preset) {
// 	return function() {
// 		const config = preset.apply(this, arguments);
// 		if (config.plugins) {
// 			config.plugins = config.plugins.map(toLocalPlugin);
// 		}
// 		return config;
// 	};
// }

// Promise.all(presetModernize({ assertVersion() {} }, {}).plugins.map(async pluginEntry => {
// 	const plugin = Array.isArray(pluginEntry) ? pluginEntry[0] : pluginEntry;
// 	const name = path.basename(plugin);
// 	const m = await import(

// 		/* webpackMode: "eager" */
// 		/* webpackExclude: /\btest\b/ */
// 		`../../../../babel-preset-modernize/src/plugins/${name}`
// 	);
// 	babel.registerPlugin(plugin, m.default || m);
// })).then(() => {
// 	babel.registerPreset('babel-preset-modernize', bundledPreset(presetModernize));
// });

// Promise.all(presetModules({ assertVersion() {} }, {}).plugins.map(async pluginEntry => {
// 	const plugin = Array.isArray(pluginEntry) ? pluginEntry[0] : pluginEntry;
// 	const name = path.basename(plugin);
// 	const m = await import(

// 		/* webpackMode: "eager" */
// 		`@babel/preset-modules/lib/plugins/${name}`
// 	);
// 	babel.registerPlugin(plugin, m.default || m);
// })).then(() => {
// 	babel.registerPreset('@babel/preset-modules', bundledPreset(presetModernize));
// });

// self.babel = babel;

function toCjs(code, filename) {
	const result = babel.transform(code, {
		retainLines: true,
		// sourceMaps: 'inline',
		sourceMaps: false,
		filename,
		sourceType: 'module',
		plugins: [
			// ['transform-modules-commonjs', { loose: true, noInterop: true }],
			function({ types: t, template }) {
				return {
					name: 'wrap',
					visitor: {
						ExportDefaultDeclaration(path) {
							const decl = path.node.declaration;
							if (!decl.id) {
								decl.id = path.scope.generateUidIdentifier('default');
							}
							path.replaceWith(decl);
							path.scope.getProgramParent().path.pushContainer('body', t.expressionStatement(t.clone(decl.id)));
							path.stop();
						}
					}
				};
			}
		]
	});
	return result.code;
}

function createTransform($) {
	return self.eval($ + '\n//# sourceURL=custom-transform.js');
}

const TRANSFORMS = {
	async parse({ code }, options, globalOptions) {
		await withBabel;
		const { ast, sourceType } = babel.transform(code, {
			ast: true,
			code: false
		});
		return { ast, sourceType };
	},
	async babel({ code, ast }, { customTransform, ...options }, globalOptions) {
		await withBabel;
		const errors = globalOptions.errors;
		let ret;
		let customTransformName = '_custom_transform_';
		options.wrapPluginVisitorMethod = function(transform, nodeType, fn) {
			return function(path) {
				const loc = (path.node.loc && path.node.loc.start) || path.node.loc;
				try {
					return fn.apply(this, arguments);
				} catch (err) {
					let message = (err && (err.stack || err.message)) || String(err);
					const custom = transform === customTransformName;
					const pos = { line: loc.line, column: loc.column };
					const detail = Object.defineProperty({}, 'path', { value: path });
					if (custom) {
						console.error(`Error in custom transform ${nodeType}() visitor at [${loc.line}:${loc.column}] `, detail);
						const m = err.stack.match(/custom-transform\.js:(\d+):(\d+)/);
						if (m) {
							pos.line = m[1] | 0;
							pos.column = m[2] | 0;
						}
					} else {
						message = `Error in ${transform} at ${nodeType}: ${message}`;
						console.error(`Error in ${transform} at ${nodeType} [${loc.line}:${loc.column}] `, detail);
					}
					errors.push({ transform, custom, nodeType, message, loc: pos });
					if (options.continue === true) console.error(err);
					else throw err;
				}
			};
		};

		if (customTransform) {
			options.plugins = [].concat(options.plugins || []);
			const tf = createTransform(toCjs(customTransform, 'custom-transform.js'));
			options.plugins.push(function() {
				const ret = tf.apply(this, arguments);
				if (ret.name) customTransformName = ret.name;
				else ret.name = customTransformName;
				return ret;
			});
		}
		if (ast) {
			ret = babel.transformFromAst(ast, code, {
				sourceMaps: globalOptions.sourceMap,
				parserOpts: {
					ranges: false
				},
				...options
			});
		} else {
			ret = babel.transform(code, {
				//inputSourceMap: map,
				sourceMaps: globalOptions.sourceMap,
				ast: globalOptions.ast,
				...options
			});
		}
		return {
			code: ret.code,
			map: ret.map,
			ast: ret.ast,
			sourceType: ret.sourceType,
			errors
		};
	},
	async terser({ code }, options, globalOptions) {
		const out = await minify(code, {
			...options,
			sourceMap: globalOptions.sourceMap
		});
		return out;
	},
	// prettier({ code }, options, globalOptions) {
	// 	const result = prettier.format(code, {
	// 		parser: 'babel',
	// 		plugins: PRETTIER_PLUGINS,
	// 		...options
	// 	});
	// 	return { code: result };
	// },
	beautify({ code }, options, globalOptions) {
		return { code: beautify(code) };
	},
	gzip(input) {
		const compressed = gzip(input.code);
		input.size = compressed.byteLength || compressed.length;
		return input;
	}
};

async function transformOnce(source, transformation, globalOptions) {
	const [transform, options] = transformation;
	const start = Date.now();
	const result = await TRANSFORMS[transform](source, options, globalOptions);
	const time = Date.now() - start;
	(result.transforms || (result.transforms = [])).push({ transform, time });
	return result;
}

async function applyTransformations(code, transformations, options = {}) {
	const globalOptions = {
		sourceMap: options.sourceMap === true,
		ast: options.ast === true,
		continue: options.continue === true,
		errors: []
	};
	let source = { code };
	const start = Date.now();
	const outputs = [];
	for (let i = 0; i < transformations.length; i++) {
		const transformation = transformations[i];
		try {
			const prev = source;
			source = await transformOnce(source, transformation, globalOptions);
			if (source !== prev) {
				if (!('code' in source)) {
					source = { ...source, code: prev.code };
				}
				outputs.push(source);
			}
		} catch (error) {
			Object.defineProperty(error, 'message', {
				enumerable: true,
				value: `Error in "${transformation[0]}" transform:\n${error.message}`
			});
			Object.defineProperty(error, 'stack', { enumerable: true, value: error.stack + '' });
			setTimeout(() => {
				throw error;
			});
			source = { error };
			outputs.push(source);
			if (!globalOptions.continue) {
				break;
			}
		}
	}

	const output = {
		...source,
		time: Date.now() - start,
		errors: outputs.reduce((t, o) => t.concat(o.errors || []), globalOptions.errors),
		ast: (outputs.filter(o => o.ast)[0] || {}).ast,
		transforms: outputs.reduce((t, o) => t.concat(o.transforms), [])
	};

	if (outputs[0].ast === output.ast) delete outputs[0].ast;

	for (let i = outputs.length; i--; ) {
		if (outputs[i].size != null) {
			output.size = outputs[i].size;
			break;
		}
	}

	if (options.code === false) delete output.code;

	if (options.stages) {
		output.stages = outputs;
	}

	if (!prev) {
		prev = output;
		return { result: output };
	}

	// const [result, patches] = produceWithPatches(draft => {
	// 	Object.assign(draft, output);
	// })(prev);

	// const patches = [];
	// generatePatches(output, prev, '', patches);

	const patches = diff(output, prev);

	// console.log(JSON.stringify(output).length, JSON.stringify(patches).length);

	prev = output;
	return { patches };
}

let prev;

function diff(obj, old) {
	if (typeof obj === 'object') {
		const isArray = Array.isArray(obj);

		if (!old || typeof old !== 'object' || isArray !== Array.isArray(old)) {
			return obj;
		}

		if (isArray) {
			let out;
			let i = 0;
			if (obj.length === 0) return obj;
			const max = Math.min(obj.length, old.length);
			for (; i < max; i++) {
				const differs = different(obj[i], old[i]);
				if (differs) break;
			}
			// for previously-empty arrays, hint at newness by using an Array
			const useArray = old.length === 0;
			const offset = obj.length - old.length;
			for (let j = obj.length; j-- > i; ) {
				const oldJ = j - offset;
				if (oldJ >= 0) {
					const differs = different(obj[j], old[oldJ]);
					if (differs) {
						if (!out) out = useArray ? [] : {};
						out[j] = diff(obj[j], old[oldJ]);
						// patches.push([path + '.' + j, obj[j]]);
						// generatePatches(obj[j], old[oldJ], pfx + j, patches);
					}
				} else {
					if (!out) out = useArray ? [] : {};
					out[j] = obj[j];
					// patches.push([pfx + j, obj[j]]);
				}
			}
			return out;
		}

		let out;
		for (let key in obj) {
			if (!(key in old) || obj[key] !== old[key]) {
				if (!out) out = {};
				// `undefined` means removed.
				// missing means unchanged.
				const r = diff(obj[key], old[key]);
				if (r !== undefined) {
					out[key] = r;
				}
			}
		}
		for (let key in old) {
			if (obj == null || !(key in obj)) {
				if (!out) out = {};
				// `undefined` means removed.
				// missing means unchanged.
				out[key] = undefined;
			}
		}
		return out;
	} else if (obj != old) {
		return obj;
	}
}

/*
function generatePatches (obj, old, path, patches) {
	if (typeof obj === 'object') {
		const isArray = Array.isArray(obj);
		const pfx = path ? (path + '.') : '';

		if (typeof old !== 'object' || (isArray !== Array.isArray(old))) {
			patches.push([path, obj]);
			return;
		}

		if (isArray) {
			let i = 0;
			const max = Math.min(obj.length, old.length);
			for ( ; i<max; i++) {
				const differs = different(obj[i], old[i]);
				if (differs) break;
			}
			const offset = obj.length - old.length;
			for (let j = obj.length; j-- >= i; ) {
				const oldJ = j - offset;
				if (oldJ >= 0) {
					const differs = different(obj[j], old[oldJ]);
					if (differs) {
						// patches.push([path + '.' + j, obj[j]]);
						generatePatches(obj[j], old[oldJ], pfx + j, patches);
					}
				}
				else {
					patches.push([pfx + j, obj[j]]);
				}
			}
		}
		else {
			for (let key in obj) {
				if (!(key in old)) {
					patches.push([pfx + key, obj[key]]);
				}
				else if (obj[key] !== old[key]) {
					generatePatches(obj[key], old[key], pfx + key, patches);
				}
			}
			for (let key in old) {
				if (obj == null || !(key in obj)) {
					patches.push([pfx + key]);
				}
			}
		}
	}
	else if (obj != old) {
		patches.push([path, obj]);
	}
}
*/

function different(obj, old) {
	for (let key in obj) {
		if (old == null || !(key in old) || obj[key] !== old[key]) {
			return true;
		}
	}
	for (let key in old) {
		if (obj == null || !(key in obj)) {
			return true;
		}
	}
	return false;
}
