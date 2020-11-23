import { babel } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

const b = code => babel(code, CONFIG);

describe('transform-block-scope', () => {
	it('should convert var to let', () => {
		expect(b(`var a;`)).toMatchInlineSnapshot(`"let a;"`);
		expect(b(`var a = 1;`)).toMatchInlineSnapshot(`"let a = 1;"`);
		expect(b(`var a = 1; a;`)).toMatchInlineSnapshot(`
			"let a = 1;
			a;"
		`);
		expect(b(`var a = function(){ return a; }`)).toMatchInlineSnapshot(`
		"let a = function () {
			return a;
		};"
	`);
	});

	it('should exclude var declarations that violate TDZ', () => {
		expect(b(`a; var a = 1;`)).toMatchInlineSnapshot(`
			"a;
			var a = 1;"
		`);
		expect(b(`(a => { var a = 1; })();`)).toMatchInlineSnapshot(`
		"(a => {
			var a = 1;
		})();"
	`);
	});
});
