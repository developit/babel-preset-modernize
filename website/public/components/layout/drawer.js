import { Component } from 'preact';
import { connect } from 'unistore/preact';
import { Drawer, DrawerContent, DrawerHeader } from '@rmwc/drawer';
import '@material/drawer/dist/mdc.drawer.css';
import { List, ListItem, ListItemGraphic } from '@rmwc/List';
import '@material/list/dist/mdc.list.css';
import { getGroupedExamples, loadExample } from '../../lib/examples.js';
import style from './style.module.scss';

// const cancel = e => e && (e.preventDefault(), e.stopPropagation()) && false;

const ACTIONS = {
	openDrawer: () => ({ drawerOpen: true }),
	closeDrawer: () => ({ drawerOpen: false }),
	async loadExample(state, example) {
		const code = await loadExample(example);
		return { code, drawerOpen: false };
	},
	reset() {
		return { code: '', drawerOpen: false };
	}
};

const AppDrawer = connect(
	'drawerOpen',
	ACTIONS
)(
	class AppDrawer extends Component {
		componentDidMount() {
			// this.mounted = true;
		}

		render({ drawerOpen, closeDrawer, loadExample, reset }) {
			// if (!this.mounted) drawerOpen = false;
			return (
				<Drawer modal open={drawerOpen} onClose={closeDrawer}>
					<DrawerHeader className={style.drawerHeader}>
						<h3>Examples</h3>
						<h4>from around the web</h4>
					</DrawerHeader>
					<DrawerContent>
						<List>
							<ListItem onClick={reset}>
								<ListItemGraphic className={style.icon} icon="settings_backup_restore" />
								Reset
							</ListItem>
							{getGroupedExamples().map(item => (
								<Item item={item} loadExample={loadExample} />
							))}
						</List>
					</DrawerContent>
				</Drawer>
			);
		}
	}
);

export default AppDrawer;

function Item({ item, loadExample }) {
	if (item.examples) {
		return <ExampleGroup group={item} loadExample={loadExample} />;
	}
	return <Example example={item} loadExample={loadExample} />;
}

function ExampleGroup({ group, loadExample }) {
	return (
		<div class={style.exampleGroup}>
			<h4>{group.name}</h4>
			{group.examples.map(example => (
				<Item item={example} loadExample={loadExample} />
			))}
		</div>
	);
}

function Example({ example, loadExample }) {
	return (
		<ListItem class={style.item} onClick={() => loadExample(example.id)}>
			<ListItemGraphic className={style.icon} icon="code" />
			{example.name}
		</ListItem>
	);
}
