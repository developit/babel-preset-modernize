import { babel } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-template-literals', () => {
	it('should transform well-formed string.concat calls', () => {
		expect(babel(`'a'.concat(foo);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}\`;"`);

		expect(babel(`'a'.concat(foo, 'b');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\`;"`);

		expect(babel(`'a'.concat(foo, 'b', bar);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}\`;"`);

		expect(babel(`'a'.concat(foo, 'b', bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}c\`;"`);
	});

	it('should transform allow expressions of any type', () => {
		expect(babel(`'a'.concat([foo]);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${[foo]}\`;"`);

		expect(babel(`'a'.concat({ foo });`, CONFIG)).toMatchInlineSnapshot(`"\`a\${{ foo }}\`;"`);
	});

	it('should merge repeated concats into one template string', () => {
		expect(babel(`'a'.concat(foo, 'b').concat(bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}c\`;"`);

		expect(babel(`'a'.concat(foo, 'b').concat(bar);`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}b\${bar}\`;"`);

		expect(babel(`'a'.concat(foo).concat(bar, 'c');`, CONFIG)).toMatchInlineSnapshot(`"\`a\${foo}\${bar}c\`;"`);

		expect(babel(`'a'.concat(foo).concat(bar).concat(baz);`, CONFIG)).toMatchInlineSnapshot(
			`"\`a\${foo}\${bar}\${baz}\`;"`
		);

		expect(babel(`"foo".concat(a).concat(b, " ").concat(c);`, CONFIG)).toMatchInlineSnapshot(
			`"\`foo\${a}\${b} \${c}\`;"`
		);
	});

	it('should ignore non-transpiled string concat', () => {
		expect(babel(`'a'.concat();`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat();"`);

		expect(babel(`'a'.concat(foo, bar);`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat(foo, bar);"`);

		expect(babel(`'a'.concat(foo, ['b']);`, CONFIG)).toMatchInlineSnapshot(`"'a'.concat(foo, ['b']);"`);
	});

	it('should ignore non-strings', () => {
		expect(babel(`[1].concat(2);`, CONFIG)).toMatchInlineSnapshot(`"[1].concat(2);"`);
	});
});
