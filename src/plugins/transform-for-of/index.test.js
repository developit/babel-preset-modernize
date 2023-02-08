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

import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-for-of', () => {
	it('should reverse for..of transpiled to iterator protocol and helper', () => {
		expect(
			babel(
				dent`
					function getPath(obj, key) {
						var keys = key.split('.');

						var _iterator = _createForOfIteratorHelper(keys),
								_step;

						try {
							for (_iterator.s(); !(_step = _iterator.n()).done;) {
								var _key = _step.value;

								if (obj == null) {
									return obj;
								}

								obj = obj[_key];
							}
						} catch (err) {
							_iterator.e(err);
						} finally {
							_iterator.f();
						}

						return obj;
					}


					function _createForOfIteratorHelper(o, allowArrayLike) {
						var it;

						if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
							if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
								if (it) o = it;
								var i = 0;

								var F = function () {};

								return {
									s: F,
									n: function () {
										if (i >= o.length) return {
											done: true
										};
										return {
											done: false,
											value: o[i++]
										};
									},
									e: function (e) {
										throw e;
									},
									f: F
								};
							}

							throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
						}
					}	
				`,
				CONFIG
			)
		).toMatchInlineSnapshot(
			dent`"
				function getPath(obj, key) {
						var keys = key.split('.');

						for (var _key of keys) {
								if (obj == null) {
										return obj;
								}

								obj = obj[_key];
						}

						return obj;
				}
			"`
		);
	});
});
