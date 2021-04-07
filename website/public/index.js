// import { hydrate } from 'preact-iso';
import { render } from 'preact';
import './style/index.scss';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/icon/icon.css';
// import './fix-pmc.js';
// import { options } from 'preact';
import App from './components/app.js';

// setTimeout(() => {
// 	// const DESC = {
// 	// 	get() {
// 	// 		return this.class;
// 	// 	},
// 	// 	set(v) {
// 	// 		this.class = v;
// 	// 	}
// 	// };
// 	options.vnode = vnode => {
// 		// if (vnode.type === 'function' && vnode.props) {
// 		// 	let c = vnode.props.className;
// 		// 	if (vnode.props.class && c) {
// 		// 		Object.defineProperty(vnode.props, 'className', DESC);
// 		// 		vnode.props.class = c;
// 		// 	}
// 		// }
// 	};
// });

render(<App />, document.body);

export async function prerender(data) {
	const { default: prerender } = await import('preact-iso/prerender');
	return prerender(<App />);
}
