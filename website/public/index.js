import { hydrate } from 'preact-iso';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/icon/icon.css';
import App from './components/app.js';

hydrate(<App />);

export async function prerender(data) {
	const { default: prerender } = await import('preact-iso/prerender');
	return prerender(<App />);
}
