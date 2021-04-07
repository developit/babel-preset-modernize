import { options } from 'preact';

const old = options.vnode;
options.vnode = vnode => {
	Object.defineProperties(vnode, ALIASES);
	if (old) old(vnode);
};

const ALIASES = {
	attributes: {
		configurable: true,
		enumerable: false,
		get() {
			return this.props;
		},
		set(v) {
			this.props = v;
		}
	},
	nodeName: {
		configurable: true,
		enumerable: false,
		get() {
			return this.type;
		},
		set(v) {
			this.type = v;
		}
	}
};
