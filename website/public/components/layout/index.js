import { connect } from 'unistore/preact';
import {
	TopAppBar,
	TopAppBarNavigationIcon,
	TopAppBarTitle,
	TopAppBarActionItem,
	TopAppBarSection,
	TopAppBarRow,
	TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';
import 'preact-material-components/TopAppBar/style.css';
import { FormField } from '@rmwc/formfield';
import '@material/form-field/dist/mdc.form-field.css';
import { Checkbox } from '@rmwc/checkbox';
import '@material/checkbox/dist/mdc.checkbox.css';
import Main from '../main/index.js';
import set from 'clean-set';
import Drawer from 'async!./drawer.js';
import style from './style.module.scss';

// const cancel = e => e && (e.preventDefault(), e.stopPropagation()) && false;

const ACTIONS = {
	openDrawer: () => ({ drawerOpen: true }),
	closeDrawer: () => ({ drawerOpen: false }),
	openMenu: () => ({ menuOpen: true }),
	closeMenu: () => ({ menuOpen: false }),
	toggleMinify: state => set(state, 'settings.minify', !state.settings.minify),
	toggleOptimize: state => set(state, 'settings.optimize', !state.settings.optimize),
	toggleCustomTransform: state => ({ useCustomTransform: !state.useCustomTransform })
};

const Layout = connect(
	['drawerOpen', 'menuOpen', 'settings', 'useCustomTransform'],
	ACTIONS
)(
	({
		menuOpen,
		openDrawer,
		openMenu,
		closeMenu,
		settings = {},
		toggleMinify,
		toggleOptimize,
		useCustomTransform,
		toggleCustomTransform
	}) => (
		<div class="app">
			<TopAppBar>
				<TopAppBarRow>
					<TopAppBarSection align-start>
						<TopAppBarNavigationIcon icon="menu" onClick={openDrawer} />
						<TopAppBarTitle>
							<span style={{ opacity: 0.5 }}>babel-preset-</span>modernize
						</TopAppBarTitle>
					</TopAppBarSection>

					<TopAppBarSection>
						<TopAppBarActionItem
							icon="code"
							title="Github"
							href="https://github.com/developit/babel-preset-modernize"
							target="_blank"
						/>
						<TopAppBarTitle style={{ paddingLeft: 0 }}>
							<a
								class="text-link"
								href="https://github.com/developit/babel-preset-modernize"
								target="_blank"
								rel="noreferrer"
							>
								View on GitHub
							</a>
						</TopAppBarTitle>
					</TopAppBarSection>

					<TopAppBarSection align-end>
						<FormField>
							<Checkbox id="s-minify" checked={settings.minify} onChange={toggleMinify} />
							<label for="s-minify" class={style.checkboxLabel}>
								Minify
							</label>
						</FormField>
						<FormField>
							<Checkbox id="s-optimize" checked={settings.optimize} onChange={toggleOptimize} />
							<label for="s-optimize" class={style.checkboxLabel}>
								Optimize
							</label>
						</FormField>
						<FormField>
							<Checkbox id="s-custom" checked={useCustomTransform} onChange={toggleCustomTransform} />
							<label for="s-custom" class={style.checkboxLabel}>
								Custom Transform
							</label>
						</FormField>
					</TopAppBarSection>
				</TopAppBarRow>
			</TopAppBar>
			<Drawer />
			<TopAppBarFixedAdjust />
			<Main />
		</div>
	)
);

export default Layout;
