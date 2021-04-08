import { createRef, Component } from 'preact';
import 'codemirror/lib/codemirror.css';
import style from './style.module.scss';
import BundleProcessor from '../../lib/bundle-processor/index.js';

export default class Editor extends Component {
	input = createRef();

	static getDerivedStateFromProps({ code }) {
		this.allowNext = true;
		return { code: code || '' };
	}

	beautify = () => {
		const { code } = this.state;
		const processor = this.processor || (this.processor = new BundleProcessor());
		processor.process(code, { beautify: true }).then(({ code }) => {
			this.setState({ code });
			this.props.onChange(code);
		});
	};

	// handleInput = e => {
	// 	let code = e.target.value;
	// 	this.setState({ code });
	// 	if (this.props.onChange) {
	// 		this.props.onChange(code);
	// 	}
	// };

	showError(error) {
		clearTimeout(this.showErrorTimer);
		if (this.errors) {
			this.codemirror.operation(() => {
				this.errors.forEach(e => e.clear());
			});
			this.errors.length = 0;
		}

		if (!error) return;
		const errors = [].concat(error);
		if (!errors.length) return;

		this.showErrorTimer = setTimeout(() => {
			this.codemirror.operation(() => {
				if (!this.errors) this.errors = [];
				for (let error of errors) {
					if (!error.loc && 'line' in error) {
						error.loc = { line: error.line, column: error.col };
					}
					let { left } = this.codemirror.cursorCoords({ line: error.loc.line - 1, ch: error.loc.column - 1 }, 'local');
					const div = document.createElement('div');
					div.className = style.lintError;
					const pre = document.createElement('pre');
					pre.style.display = 'block';
					pre.style.paddingLeft = left + 'px';
					pre.textContent = '^';
					div.appendChild(pre);
					const msg = document.createElement('div');
					msg.textContent = error.message.split('\n')[0];
					div.appendChild(msg);
					this.errors.push(this.codemirror.addLineWidget(error.loc.line - 1, div));
				}
			});
		}, 1000);
	}

	componentDidMount() {
		import('./codemirror.js').then(m => {
			const codemirror = m.default;
			this.input.current.style.display = 'none';
			this.codemirror = codemirror(this.base, {
				mode: 'jsx',
				theme: 'one-dark',
				lineNumbers: true,
				indentWithTabs: true,
				tabSize: 2,
				indentUnit: 2,
				showCursorWhenSelecting: true,
				maxHighlightLength: 1000,
				extraKeys: {
					'Cmd-/': 'toggleComment'
				},
				readOnly: this.props.readonly === true,
				...this.props.settings
			});

			this.codemirror.on('changes', () => {
				const code = this.codemirror.getValue();
				this._currentValue = code;
				this.setState({ code });
				if (this.props.onChange) {
					this.props.onChange(code);
				}
			});

			this.codemirror.on('beforeSelectionChange', (editor, selection) => {
				const { onSelectionChange } = this.props;
				if (!onSelectionChange) return;
				let range = selection.ranges[0];
				if (range) {
					onSelectionChange({
						start: editor.indexFromPos(range.anchor),
						end: editor.indexFromPos(range.head)
					});
				} else {
					onSelectionChange(null);
				}
			});

			setTimeout(() => {
				this.codemirror.setValue((this._currentValue = this.props.code || ''));
				requestAnimationFrame(() => {
					requestAnimationFrame(() => {
						this.codemirror.refresh();
					});
				});
			}, 1);
		});
	}

	shouldComponentUpdate(props, state) {
		const editor = this.codemirror;
		if (editor) {
			if (props.error != this.props.error) {
				this.showError(props.error);
			}

			// we avoid using editor.getValue() here for performance reasons
			if (this._currentValue !== state.code) {
				editor.setValue(state.code);
			}

			if (props.selection !== this.props.selection && !selectionsMatch(props.selection, this.props.selection)) {
				editor.setSelection(editor.posFromIndex(props.selection.start), editor.posFromIndex(props.selection.end), {
					scroll: true
				});
			}

			if (props.highlight !== this.props.highlight) {
				// if (this.marking) this.marking
				if (this.marking) {
					this.marking.clear();
				}
				if (props.highlight && !selectionsMatch(props.highlight, props.selection)) {
					try {
						this.marking = editor.markText(
							editor.posFromIndex(props.highlight.start),
							editor.posFromIndex(props.highlight.end),
							{
								css: 'background: #000;' // box-shadow: 0 0 0 1px #000;'
							}
						);
					} catch (e) {
						console.error(e);
					}
				}
			}

			if (this.allowNext) {
				this.allowNext = false;
				return true;
			}
			// return false;
		}
		return state.code !== this.state.code;
	}

	render({ readonly }, { code }) {
		return (
			<div class={style.editor}>
				{!readonly && (
					<button class={style.beautify} onClick={this.beautify}>
						Clean Up
					</button>
				)}
				<textarea
					ref={this.input}
					spellcheck="no"
					autosuggest="off"
					readonly={readonly}
					class={style.input}
					value={code}
					// onInput={this.handleInput}
				/>
			</div>
		);
	}
}

function selectionsMatch(a, b) {
	if (!a || !b) return false;
	return a.start === b.start && a.end === b.end;
}
