import terser from 'terser';

export function minify(code, options) {
	return terser.minify(code, options);
}
