import createStore from 'unistore';
import { Provider } from 'unistore/preact';
import Layout from './layout/index.js';

// if (typeof addEventListener !== 'undefined') {
// 	addEventListener('contextmenu', e => {
// 		e.preventDefault();
// 	});
// }

// window.addEventListener(
// 	'selectstart',
// 	e => {
// 		let { target } = e;
// 		let c = 0;
// 		while (target) {
// 			if ('selectionStart' in target) return;
// 			target = target.parentNode;
// 			if (++c > 1000) {
// 				console.log(target);
// 				return;
// 			}
// 		}
// 		e.preventDefault();
// 	},
// 	true
// );

const BLANK_STATE = {
	code: '',
	settings: {
		minify: true,
		optimize: true,
		useCustomTransform: false
	}
};

const KEY = 'mindemo';
function getInitialState() {
	try {
		const state = window.STATE || JSON.parse(localStorage[KEY]);
		for (let i in BLANK_STATE) {
			if (!(i in state)) state[i] = BLANK_STATE[i];
		}
		return state;
	} catch (e) {}
	return BLANK_STATE;
}

let store = createStore(getInitialState());

if (typeof localStorage !== 'undefined') {
	let timer;
	const ric = window.requestIdleCallback || setTimeout.bind(null, 500);
	window.STATE = store.getState();
	store.subscribe(state => {
		window.STATE = state;
		if (!timer) timer = ric(save);
	});
	const save = () => {
		timer = null;
		try {
			localStorage[KEY] = JSON.stringify(window.STATE);
		} catch (e) {}
	};
}

export default function App() {
	return (
		<Provider store={store}>
			<Layout />
		</Provider>
	);
}
