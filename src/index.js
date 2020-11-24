/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import path from 'path';

/**
 * A preset that transforms unweildy transpiled code into modern source that engines and bundlers can better optimize.
 * @param {Object} [options]
 * @param {boolean} [options.loose=false] Loose mode enables transforms that produce smaller output but may cause issues with certain code.
 * @param {boolean} [options.module=true] Assume code will be run in a Strict Mode or ES Modules environment.
 * @param {boolean} [options.cjs=false] Attempt to convert CommonJS to ES Modules (not enabled by default, can break imports)
 * @param {boolean} [options.webpack=true] Parse and explode Webpack bundles
 */
export default function babelPresetModernize(_, options = {}) {
	const loose = options.loose === true;
	const module = options.module !== false;
	const webpack = options.webpack !== false;
	const cjs = module && options.cjs === true;

	return {
		plugins: [
			path.resolve(__dirname, './plugins/transform-umd-to-cjs'),
			// Currently disabled, causes problems with non-CJS files:
			cjs && path.resolve(__dirname, './plugins/transform-cjs-to-esm'),
			[path.resolve(__dirname, './plugins/transform-arguments'), { loose }],
			path.resolve(__dirname, './plugins/transform-destructuring'),
			path.resolve(__dirname, './plugins/transform-classes'),
			path.resolve(__dirname, './plugins/transform-methods'),
			// too broken:
			// path.resolve(__dirname, './plugins/transform-mangle-identifiers'),
			path.resolve(__dirname, './plugins/transform-fallbacks'),
			path.resolve(__dirname, './plugins/transform-iife-arrows'),
			path.resolve(__dirname, './plugins/transform-implicit-scope'),
			path.resolve(__dirname, './plugins/transform-array-spread'),
			path.resolve(__dirname, './plugins/transform-template-literals'),
			webpack && path.resolve(__dirname, './plugins/transform-optimize-webpack'),
			path.resolve(__dirname, './plugins/transform-remove-polyfills'),
			module && path.resolve(__dirname, './plugins/transform-implicit-strict')
		].filter(Boolean)
	};
}
