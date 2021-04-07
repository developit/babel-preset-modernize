import { h, Component } from 'preact';

/**
 * Make any Preact component render lazily.
 * Think of it like requestIdleCallback + memo().
 *
 * @example
 *   const Cheap = lazy()(props => {
 *     const start = Date.now();
 *     while (Date.now() - start < props.lag);
 *     return <span>{new Date() + ''}</span>;
 *   });
 */
export function renderLazily (options, implementation) {
	return Child => class Lazy extends Component {
		constructor(props) {
			super(props);
			this.pending = false;
			this.state = { props, c: 0 };
		}
		enqueue() {
			if (this.pending) return;
			this.pending = true;
			(implementation || window.requestIdleCallback || setTimeout)(() => {
				this.setState({
					props: this.props,
					c: this.state.c + 1
				}, () => {
					this.pending = false;
				});
			}, options || { timeout: 500 });
		}
		shouldComponentUpdate(nextProps, nextState) {
			if (nextState.c !== this.state.c) return true;
			const { props } = this.state;
			for (let i in nextProps) {
				if (nextProps[i] !== props[i]) {
					this.enqueue(nextProps);
					break;
				}
			}
			return false;
		}
		render() {
			return h(Child, this.state.props);
		}
	};
}
