import { Component } from 'preact';
import BundleProcessor from '../../lib/bundle-processor/index.js';
import AstViewer from '../ast-viewer/index.js';
import style from './style.module.scss';
import Editor from '../editor/index.js';
// import worker from 'workerize-loader!./minify.worker';
// const worker = process.env.NODE_ENV==='development' ? () => require('./minify.worker') : require('workerize-loader!./minify.worker');
// const { minify } = worker();

export default class Output extends Component {
	//shouldComponentUpdate(props, state) {
	//	return props.code !== this.props.code || state.compiled !== this.state.compiled;
	//}

	update({ code, settings, customTransform }) {
		const baseline = this.originalProcessor.process(code, {
			// code: false,
			ast: false,
			babel: false,
			minify: settings.minify,
			beautify: true
		});

		const output = this.processor.process(code, {
			// modules: true,
			ast: true,
			optimize: settings.optimize,
			legacy: false,
			stages: true,
			babel: true,
			beautify: true,
			minify: settings.minify,
			customTransform
		});

		this.setState({ pending: true });
		Promise.all([baseline, output])
			.then(([baseline, result]) => {
				// console.log('got result in ' + (Date.now()-start) + 'ms:', result, baseline);
				if (result.error) {
					this.setState({
						pending: false,
						errors: result.errors,
						error: String((result.error && result.error.stack) || result.error)
					});
				} else {
					this.setState({
						pending: false,
						result,
						baseline,
						originalSize: baseline.size, //result.stages[0].size,
						baselineCode: baseline.code,
						compiled: result.code,
						ast: result.ast,
						size: result.size,
						errors: result.errors,
						error: null //result.error
					});
				}
				if (this.props.onError) {
					this.props.onError([].concat(result.errors || []));
				}
			})
			.catch(reason => {
				if (!reason.cancelled) throw reason;
				this.setState({ pending: false });
				// else console.log('cancelled');
			});
		// minify(code, {
		// 	ecma: 8,
		// 	module: true,
		// 	compress: {
		// 		passes: 3,
		// 		unsafe: true,
		// 		pure_getters: true,
		// 		hoist_funs: true,
		// 		toplevel: true,
		// 		booleans_as_integers: true
		// 	},
		// 	mangle: {
		// 		properties: {
		// 			regex: /(^__|^$$)/
		// 		}
		// 	},
		// 	output: {
		// 		beautify: true,
		// 		indent_level: 2
		// 	}
		// })
		// 	.then(result => {
		// 		if (result.error) {
		// 			const err = new Error(result.error.message);
		// 			Object.assign(err, result.error);
		// 			throw err;
		// 		}
		// 		if (this.props.onError) this.props.onError(null);
		// 		this.setState({ error: '', compiled: result.code, map: result.map });
		// 		minify(result.code).then(compressed => {
		// 			let size =
		// 			this.setState({ minified: compressed.code, size });
		// 		});
		// 	})
		// 	.catch(err => {
		// 		if (this.props.onError) this.props.onError(err);
		// 		this.setState({ error: String(err) });
		// 	});
	}

	componentDidMount() {
		this.processor = new BundleProcessor();
		this.originalProcessor = new BundleProcessor();
		this.update({ code: this.props.code, settings: this.props.settings, customTransform: this.props.customTransform });
	}

	componentWillReceiveProps({ code, settings, customTransform }) {
		if (
			code !== this.props.code ||
			settings !== this.props.settings ||
			customTransform !== this.props.customTransform
		) {
			this.update({ code, settings, customTransform });
		}
	}

	render(
		{ orientation, selection, onSelectionChange, highlight, onHighlightChange },
		{ showBaseline, compiled, result, baseline, ast, originalSize, size, error, errors, pending }
	) {
		const output = showBaseline ? baseline : result;
		const code = output && output.code;

		return (
			<div class={style.output}>
				<two-up orientation={orientation} style={{ '--bar-touch-size': '0' }}>
					<div class={style.ast}>
						{ast && (
							<AstViewer
								ast={ast}
								selection={selection}
								onSelectionChange={onSelectionChange}
								highlight={highlight}
								onHighlightChange={onHighlightChange}
							/>
						)}
					</div>

					<div class={style.code}>
						<div class={style.tabs}>
							Output:
							<button onClick={() => this.setState({ showBaseline: false })}>Compiled + Minified</button>
							<button onClick={() => this.setState({ showBaseline: true })}>Baseline Minified</button>
							{pending && <span style="float: right; padding: 5px 5px 0;">Compiling...</span>}
						</div>
						{/* <textarea class={style.code} value={compiled} readonly /> */}
						<Editor
							code={code}
							class={style.editor}
							readonly
							settings={{
								lineNumbers: false
							}}
						/>

						{output && output.transforms && output.transforms.length > 0 && (
							<div class={style.timings}>
								{output.transforms.map(
									transform =>
										transform && (
											<dl>
												<dt>{transform.transform}</dt>
												<dd>
													<PrettyTime time={transform.time} />
												</dd>
											</dl>
										)
								)}
							</div>
						)}

						{output && output.size != null && (
							<span class={style.size}>
								<PrettySize size={originalSize} />
								{' ➔ '}
								<PrettySize size={output.size} />
								<em>({Math.round(((output.size - originalSize) / originalSize) * 100)}%)</em>
							</span>
						)}
					</div>
				</two-up>

				{error && (
					<div class={style.error}>
						<pre>{error}</pre>
					</div>
				)}
			</div>
		);
	}
}

function PrettySize({ size }) {
	// return size >= 5000 ? `${(size/5000).toFixed(3)}kB` : `${size}b`;
	return size >= 5000 ? [(size / 1000).toFixed(2), <small>kB</small>] : [size, <small>b</small>];
}

function PrettyTime({ time }) {
	return time >= 1500 ? [(time / 1000).toFixed(1), <small>s</small>] : [time, <small>ms</small>];
}
