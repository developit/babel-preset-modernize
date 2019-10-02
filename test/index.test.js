import { babel, dent } from './_util';
import preset from '..';

function babelPretty(code) {
	return babel(code, { presets: [preset], compact: false, retainLines: true });
}

describe('babel-preset-optimize', () => {
	it('should be a valid babel plugin', () => {
		expect(preset).toEqual(expect.any(Function));

		expect(preset()).toMatchObject({
			plugins: expect.any(Array)
		});
	});

	it('should pass a smoke test', () => {
		expect(babelPretty(dent`
			const x = 1;
		`)).toMatchSnapshot();
	});
});
