import { useReducer, useEffect } from 'preact/hooks';
import { connect } from 'unistore/preact';
import Editor from '../editor/index.js';
import Output from '../output/index.js';
import { loadExample } from '../../lib/examples.js';
import style from './style.module.scss';

if (typeof customElements !== 'undefined' && !customElements.get('two-up')) {
	// @ts-ignore
	import('two-up-element/dist/two-up-min.js').then(() => {
		// Workaround for layout thrashing when using <two-up> as a split view.
		// PR'd upstream: https://github.com/GoogleChromeLabs/two-up/pull/5
		customElements.get('two-up').prototype.getBoundingClientRect = function() {
			if (this._bounds && this.matches(':active')) return this._bounds;
			return (this._bounds = HTMLElement.prototype.getBoundingClientRect.call(this));
		};
	});
}

const ACTIONS = {
	setCode: (state, code) => ({ code }),
	setError(state, error) {
		let customTransformError = null;
		if (Array.isArray(error)) {
			error = error.filter(e => {
				if (e && e.custom) {
					customTransformError = customTransformError || [];
					customTransformError.push(e);
					return false;
				}
				return true;
			});
		}
		return { error, customTransformError };
	},
	setSelection: (state, selection) => ({ selection }),
	setHighlight: (state, highlight) => ({ highlight }),
	setCustomTransform: (state, customTransform) => ({ customTransform }),
	async setExample(state, example) {
		try {
			return { code: await loadExample(example) };
		} catch (e) {
			console.error(`Unknown example "${example}":`, e);
		}
	}
};

export default connect(
	[
		'code',
		'error',
		'selection',
		'highlight',
		'settings',
		'useCustomTransform',
		'customTransform',
		'customTransformError'
	],
	ACTIONS
)(Main);

function UPDATE_ORIENTATION() {
	if (typeof window === 'undefined') return 'horizontal';
	return window.innerWidth < window.innerHeight ? 'vertical' : 'horizontal';
}

const EMPTY_TRANSFORM = `
export default function ({ types: t, template }) {
	return {
		name: 'custom-transform',
		visitor: {
			Identifier(path, state) {

			}
		}
	}
}
`.trim();

function Main({
	code,
	error,
	selection,
	highlight,
	setCode,
	setError,
	setSelection,
	setHighlight,
	settings,
	useCustomTransform,
	customTransform,
	setCustomTransform,
	customTransformError,
	setExample
}) {
	const [orientation, updateOrientation] = useReducer(UPDATE_ORIENTATION, null);
	const childOrientation = orientation === 'vertical' ? 'horizontal' : 'vertical';

	useEffect(() => {
		addEventListener('resize', updateOrientation);
		return () => removeEventListener('resize', updateOrientation);
	}, []);

	useEffect(() => {
		const [, example] = location.href.match(/[?#&]example=([^&#]+)/) || [];
		if (example && !code) {
			setExample(example);
		}
	}, []);

	if (customTransform === undefined) {
		customTransform = EMPTY_TRANSFORM;
	}

	return (
		<main class={style.main}>
			<two-up orientation={orientation} style={{ '--bar-touch-size': '0' }}>
				<section class={`${style.editors}${useCustomTransform ? ` ${style.customEnabled}` : ''}`}>
					<two-up
						orientation={childOrientation}
						style={useCustomTransform ? {} : { '--bar-size': '0px', '--thumb-size': '0px' }}
					>
						<Editor
							code={code}
							error={error}
							selection={selection}
							highlight={highlight}
							onChange={setCode}
							onSelectionChange={setSelection}
							onHighlightChange={setHighlight}
						/>
						{useCustomTransform && (
							<Editor key="custom" code={customTransform} error={customTransformError} onChange={setCustomTransform} />
						)}
					</two-up>
				</section>
				<Output
					orientation={childOrientation}
					code={code}
					customTransform={useCustomTransform ? customTransform : null}
					onError={setError}
					selection={selection}
					highlight={highlight}
					onSelectionChange={setSelection}
					onHighlightChange={setHighlight}
					settings={settings}
				/>
			</two-up>
		</main>
	);
}
