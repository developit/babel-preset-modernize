import { Component } from 'preact';
import { useRef, useEffect, useState, useCallback } from 'preact/hooks';
import { renderLazily } from '../../lib/lazy-render.js';
import cx from 'clsx';
import style from './style.module.scss';

function scrollIntoViewport(parent, selected) {
	const scrollTop = parent.scrollTop;
	const height = parent.offsetHeight;
	let top = 0;
	let p = selected;
	do {
		top += p.offsetTop || 0;
	} while ((p = p.offsetParent) && parent.contains(p));
	if (top >= scrollTop && top + selected.offsetHeight < scrollTop + height) return;
	const offset = Math.round(height / 2 - selected.offsetHeight / 2);
	top = Math.min(top, top - offset);
	// parent.scrollTo({ top, behavior: 'smooth' });
	parent.scrollTop = top;
}

class AstViewer extends Component {
	shouldComponentUpdate(nextProps) {
		for (let i in nextProps) if (nextProps[i] !== this.props[i]) return true;
		return false;
	}

	// state = {
	// 	tick: 0
	// };

	// shouldComponentUpdate(nextProps, nextState) {
	// 	let apply;
	// 	for (let i in nextProps) {
	// 		if (nextProps[i] !== nextState[i]) {
	// 			(apply || (apply = {}))[i] = nextProps[i];
	// 		}
	// 	}
	// 	if (apply) {
	// 		apply.tick = nextState.tick + 1;
	// 		this.setState(apply);
	// 		return true;
	// 	}
	// 	return nextState.tick !== this.state.tick;
	// }

	// componentDidUpdate(prevProps) {
	// 	if (this.props.selection !== prevProps.selection) {
	// 		if (this.raffing) return;
	// 		this.raffing = true;
	// 		requestAnimationFrame(() => {
	// 			requestAnimationFrame(() => {
	// 				this.raffing = false;
	// 				const selected = this.base.querySelector('[is-selected]');
	// 				if (selected) {
	// 					scrollIntoViewport(this.base, selected);
	// 				}
	// 			});
	// 		});
	// 	}
	// }

	clearSelection = () => {
		this.props.onHighlightChange();
	};

	render({ ast, ...childProps }) {
		// console.log(selection);
		return (
			<div class={style.viewer} onMouseLeave={this.clearSelection}>
				{renderValue(ast.program, childProps)}
			</div>
		);
	}
}

export default renderLazily()(AstViewer);

const NO_SELECTION = {
	start: NaN,
	end: NaN
};

// const TOGGLE = x => !x;
function checkChildSelected(v, selection) {
	if (typeof v === 'object' && v != null) {
		if (Array.isArray(v)) {
			for (const c of v) {
				if (checkChildSelected(c, selection)) return true;
			}
		} else if ('start' in v && 'end' in v) {
			return selection.start >= v.start && selection.end <= v.end;
		}
	}
	return false;
}

const TYPE_NODE = 1;
const TYPE_SIMPLE = 2;
const NODE_CACHE = new WeakMap();
function getNodeAttributes(node) {
	const cached = NODE_CACHE.get(node);
	if (cached != null) return cached;

	let hasChildren = false;
	const attributes = [];
	for (let name in node) {
		const value = node[name];
		if (name === 'error') {
		} else if (name === 'type' || name === 'start' || name === 'end' || name === 'loc') {
		} else if (
			name === 'comments' ||
			name === 'errors' ||
			name === 'leadingComments' ||
			name === 'trailingComments' ||
			name === 'innerComments'
		) {
		} else if (typeof value === 'function') {
		} else if (name === 'extra') {
			// todo
		} else if (typeof value === 'object' && value && (Array.isArray(value) || 'type' in value)) {
			attributes.push({ name, value, type: TYPE_NODE });
			hasChildren = true;
		} else if (value != null) {
			attributes.push({ name, value, type: TYPE_SIMPLE });
		}
	}

	const result = { attributes, hasChildren };
	NODE_CACHE.set(node, result);
	return result;
}

function AstNode({
	node,
	expanded = false,
	selection = NO_SELECTION,
	onSelectionChange,
	highlight,
	onHighlightChange
}) {
	const { attributes, hasChildren } = getNodeAttributes(node);

	// const childIsSelected = attributes.some(v => checkChildSelected(v, selection));
	let childIsSelected = false;
	for (let i in node) if ((childIsSelected = checkChildSelected(node[i], selection))) break;

	const showExpand = attributes.length > 0;

	// showing huge selections is slow and extremely distracting:
	// const isIncluded = selection.start <= node.start && selection.end >= node.end;
	const isIncluded = false;

	const isWithin = selection.start >= node.start && selection.end <= node.end;

	// const isSelected = isWithin && children.length === 0;
	const isSelected = isWithin && !childIsSelected;

	const forceExpand = isIncluded || isWithin;

	// const [isExpanded, toggle] = useReducer(TOGGLE, null);
	let [isExpanded, setExpanded] = useState(null);
	if (isExpanded === null) isExpanded = forceExpand;
	const hasEverExpanded = useRef(isExpanded);
	const base = useRef();
	if (isExpanded) hasEverExpanded.current = true;

	const onHover = useCallback(
		e => {
			e.stopPropagation();
			if (node.type !== 'Program') {
				onHighlightChange(node);
			}
		},
		[onHighlightChange, node]
	);

	const triggerSelect = useCallback(
		e => {
			e.stopPropagation();
			e.preventDefault();
			onSelectionChange(node);
		},
		[onSelectionChange, node]
	);

	const toggle = useCallback(() => {
		setExpanded(!isExpanded);
	}, [isExpanded]);

	useEffect(() => {
		if (isSelected) {
			// yes this is gross. it could be a ref. both are bad.
			const parent = base.current.closest('.' + style.viewer);
			if (parent) scrollIntoViewport(parent.parentNode, base.current);
			// base.current.scrollIntoViewIfNeeded({ behavior: 'smooth' });
		}
	}, [isSelected]);

	// useEffect(() => {
	// 	const shouldExpand = isIncluded || isWithin;
	// 	if (shouldExpand !== isExpanded) {
	// 		if (isWithin) {
	// 			requestAnimationFrame(() => {
	// 				requestAnimationFrame(() => {
	// 					base.current.scrollIntoViewIfNeeded();
	// 				});
	// 			});
	// 		}
	// 		toggle(shouldExpand);
	// 	}
	// }, [isIncluded, isWithin, node]);

	const childProps = {
		selection,
		onSelectionChange,
		highlight,
		onHighlightChange
	};

	return (
		<div
			ref={base}
			class={cx(style.node, hasChildren && style.hasChildren, isSelected && style.highlighted)}
			onMouseOver={onHover}
			onDblClick={triggerSelect}
		>
			<label class={style.title}>
				{hasChildren && <input type="checkbox" checked={isExpanded} onClick={toggle} />}
				{node.type}
			</label>
			<ul class={style.attributes} aria-hidden={hasChildren && isExpanded}>
				{attributes.map(({ name, value }) =>
					hasChildren ? (
						value && <li>{name}</li>
					) : (
						<li>
							{name}: {value != null && renderValue(value)}
						</li>
					)
				)}
			</ul>
			{hasChildren && (
				<div class={style.children} aria-hidden={!isExpanded}>
					{isExpanded &&
						attributes.map(({ name, value }) => (
							<dl>
								<dt>{name}:</dt>
								<dd class={Array.isArray(value) ? style.list : style.single}>
									{Array.isArray(value)
										? [value.length ? value.map(v => renderValue(v, childProps)) : ' ']
										: renderValue(value, childProps)}
								</dd>
							</dl>
						))}
				</div>
			)}
		</div>
	);
}

function renderValue(value, childProps) {
	let s;
	if (typeof value === 'object' && value && 'type' in value) {
		return <AstNode node={value} {...childProps} />;
	}
	if (typeof value === 'string') {
		value = `"${value}"`;
		s = { color: 'black' };
	} else if (typeof value === 'number') {
		s = { color: 'red' };
	} else if (typeof value === 'boolean') {
		s = { color: 'blue' };
	}
	return (
		<span class={style.primitive} style={s}>
			{String(value)}
		</span>
	);
}
