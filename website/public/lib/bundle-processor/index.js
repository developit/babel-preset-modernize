// import workerURL from 'bundle:./worker.js';

function deferred() {
	let resolve,
		reject,
		p = new Promise((a, b) => {
			resolve = a;
			reject = b;
		});
	p.resolve = resolve;
	p.reject = reject;
	p.cancel = () => reject({ cancelled: true });
	return p;
}

let RPC_ID = 0;

export default class BundleProcessor {
	constructor() {
		// this.worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
		// const url = new URL('./worker.js', import.meta.url);
		async function worker() {
			let q = [],
				p = q.push.bind(q);
			addEventListener('message', p);
			try {
				await import('./worker.js');
			} finally {
				removeEventListener('message', p);
				q.forEach(e => dispatchEvent(e));
				q.length = 0;
			}
		}
		const code = `(${worker})()`.replace(/import\((.*?)\)/g, `import(new URL($1, ${JSON.stringify(import.meta.url)}))`);
		const url = URL.createObjectURL(new Blob([code], { type: 'text/javascript' }));
		this.worker = new Worker(url, { type: 'module' });
		this.cache = new Map();
		this.next = null;
		this.current = null;
		this.timer = undefined;
		this.processNow = this.processNow.bind(this);
		this.id = 0;
	}

	cacheKey(code, options) {
		return code + '\0' + JSON.stringify(options);
	}

	process(code, options) {
		const cacheKey = this.cacheKey(code, options);
		if (this.cache.has(cacheKey)) {
			if (this.pending) {
				this.pending.cancel();
			}
			return this.cache.get(cacheKey);
		}

		this.next = { code, options };
		if (!this.timer && !this.current) {
			this.timer = setTimeout(this.processNow, 1000);
		}
		if (!this.pending) {
			this.pending = deferred();
		}
		return this.pending;
	}

	processNow() {
		this.timer = undefined;
		if (!this.next) return;
		this.current = this.doProcess(this.next.code, this.next.options);
		this.next = null;
		const done = () => {
			this.pending = this.current = null;
			this.processNow();
		};
		this.current
			.then(v => {
				if (this.pending) {
					this.pending.resolve(v);
				}
				done();
			})
			.catch(err => {
				if (this.pending) {
					this.pending.reject(err);
				}
				done();
			});
	}

	async doProcess(code, options) {
		const {
			modules = false,
			optimize = false,
			babel = false,
			minify = false,
			beautify = false,
			legacy = false,
			ast = false,
			target = null,
			customTransform = null,
			...globalOptions
		} = options;

		const cacheKey = this.cacheKey(code, options);
		if (this.cache.has(cacheKey)) {
			return this.cache.get(cacheKey);
		}

		let resolve;
		this.cache.set(
			cacheKey,
			new Promise(r => {
				resolve = r;
			})
		);

		const result = await this.run(
			code,
			[
				ast && ['parse'],
				babel && [
					'babel',
					{
						presets: [
							modules && '@babel/preset-modules',
							optimize && [
								'babel-preset-modernize',
								{
									module: true,
									loose: true,
									cjs: true,
									webpack: true
								}
							],
							legacy && [
								'env',
								{
									target: target || 'last 2 versions and not dead'
								}
							]
						].filter(Boolean),
						customTransform
					}
				],
				// ['gzip'],
				minify && [
					'terser',
					/** @type {import('terser').MinifyOptions} */ {
						ecma: 2020,
						module: true,
						compress: {
							passes: 2, // 10
							// unsafe: true,
							pure_getters: true,
							hoist_funs: true
							// booleans_as_integers: true
						},
						mangle: {
							// properties: {
							// 	regex: /(^__|^$$)/
							// }
						}
						// output: {
						// 	beautify: true,
						// 	indent_level: 2
						// }
					}
				],
				['gzip'],
				beautify && ['beautify']
			].filter(Boolean),
			globalOptions
		);

		this.cache.set(cacheKey, result);
		resolve(result);
		return result;
	}

	async run(code, transformations, options) {
		// let { result, patches } = await this.worker.applyTransformations(code, transformations, options);
		const id = ++RPC_ID;
		const params = [code, transformations, options];
		let { result, patches } = await new Promise((resolve, reject) => {
			const handler = e => {
				if (e.data.id != id) return;
				this.worker.removeEventListener('message', handler);
				if (e.data.error) reject(Error(e.data.error));
				else resolve(e.data.result);
			};
			this.worker.addEventListener('message', handler);
			this.worker.postMessage({ id, method: 'applyTransformations', params });
		});

		if (patches) {
			result = applyDiff(this.prev, patches);
		}

		this.prev = result;

		return result;
	}
}

function applyDiff(obj, diff) {
	if (typeof obj !== typeof diff) {
		return diff;
	}

	if (typeof diff === 'object') {
		// if (typeof obj !== 'object') {
		// 	return diff;
		// }

		if (Array.isArray(diff)) {
			return diff;
		}

		let out;
		if (Array.isArray(obj)) {
			//out = obj.slice();
			out = obj;
			for (let i in diff) {
				out[i] = applyDiff(obj[i], diff[i]);
			}
		} else {
			//out = Object.assign({}, obj);
			out = obj;
			for (let i in diff) {
				out[i] = applyDiff(obj[i], diff[i]);
			}
		}

		return out;
	}
	return diff;
}
