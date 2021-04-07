"use strict";

function _extends() {
	_extends = Object.assign || function (target) {
		for (var i = 1; i < arguments.length; i++) {
			var source = arguments[i];
			for (var key in source) {
				if (Object.prototype.hasOwnProperty.call(source, key)) {
					target[key] = source[key];
				}
			}
		}
		return target;
	};
	return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
	if (source == null) return {};
	var target = {};
	var sourceKeys = Object.keys(source);
	var key, i;
	for (i = 0; i < sourceKeys.length; i++) {
		key = sourceKeys[i];
		if (excluded.indexOf(key) >= 0) continue;
		target[key] = source[key];
	}
	return target;
}

var TODOS = function TODOS(_ref, _temp) {
	var _ref2 = _temp === void 0 ? {} : _temp,
		action = _ref2.action,
		data = _ref2.data;

	var text = _ref.text,
		todos = _ref.todos,
		state = _objectWithoutPropertiesLoose(_ref, ["text", "todos"]);

	switch (action) {
		case 'TEXT':
			text = data;
			break;

		case 'COMMIT':
			todos = todos.concat({
				text: text
			});
			text = '';
	}

	return _extends({}, state, {
		text: text,
		todos: todos
	});
};

var INIT = {
	todos: [],
	text: ''
};

export function App(_ref3) {
	var name = _ref3.name,
		children = _ref3.children,
		props = _objectWithoutPropertiesLoose(_ref3, ["name", "children"]);

	var _useReducer = useReducer(TODOS, INIT),
		_useReducer$ = _useReducer[0],
		todos = _useReducer$.todos,
		text = _useReducer$.text,
		dispatch = _useReducer[1];

	return React.createElement("main", props, React.createElement("h2", null, name), React.createElement("form", {
		onSubmit: function onSubmit(e) {
			return dispatch({
				action: 'COMMIT'
			});
		}
	}, React.createElement("input", {
		value: text,
		onChange: function onChange(e) {
			return dispatch({
				action: 'TEXT',
				data: e.target.value
			});
		}
	})), React.createElement("ul", null, todos.map(function (_ref4) {
		var text = _ref4.text;
		return React.createElement("li", null, text);
	})), children);
}

render(React.createElement(App, null), document.body);
