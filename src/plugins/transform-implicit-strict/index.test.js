import { babel, dent } from '../../../test/_util';
import plugin from '.';

const CONFIG = {
	compact: false,
	plugins: [plugin]
};

describe('transform-implicit-strict', () => {
	it('should remove "use strict" directives', () => {
		expect(babel(dent`
			"use strict";
		`, CONFIG)).toMatchInlineSnapshot(``);

		expect(babel(dent`
			function foo() {
				"use strict";
			}
		`, CONFIG)).toMatchInlineSnapshot(`function foo () {}`);
	});

	it('should ignore other directives', () => {
		expect(babel(dent`
			"use strong";
		`, CONFIG)).toMatchInlineSnapshot(`"use strong";`);

		expect(babel(dent`
			function foo() {
				"use strong";
			}
	`, CONFIG)).toMatchInlineSnapshot(`function foo () { "use strong"; }`);
	});
});
