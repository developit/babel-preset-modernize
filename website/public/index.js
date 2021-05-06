import { hydrate, prerender as ssr } from 'preact-iso';
import '@material/ripple/dist/mdc.ripple.css';
import '@material/icon-button/dist/mdc.icon-button.css';
import '@rmwc/icon/icon.css';
import App from './components/app.js';

hydrate(<App />);

export const prerender = data => ssr(<App {...data} />);
