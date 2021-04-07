import { share, onPush, takeWhile, toPromise, take } from 'wonka';

import { GraphQLError, parse, print, visit, Kind } from 'graphql';

function _extends() {
	return (_extends =
		Object.assign ||
		function(target) {
			for (let i = 1; i < arguments.length; i++) {
				let source = arguments[i];
				for (let key in source) {
					if (Object.prototype.hasOwnProperty.call(source, key)) {
						target[key] = source[key];
					}
				}
			}
			return target;
		}).apply(this, arguments);
}

let rehydrateGraphQlError = function(error) {
	if ('string' == typeof error) {
		return new GraphQLError(error);
	}
	else if ('object' == typeof error && error.message) {
		return new GraphQLError(
			error.message,
			error.nodes,
			error.source,
			error.positions,
			error.path,
			error,
			error.extensions || {}
		);
	}
	return error;
};

function _toString() {
	return this.message;
}

let CombinedError = (function(Error) {
	function CombinedError(ref) {
		let networkError = ref.networkError;
		let response = ref.response;
		let normalizedGraphQLErrors = (ref.graphQLErrors || []).map(
			rehydrateGraphQlError
		);
		let message = (function(networkErr, graphQlErrs) {
			let error = '';
			if (void 0 !== networkErr) {
				return (error = '[Network] ' + networkErr.message);
			}
			if (void 0 !== graphQlErrs) {
				graphQlErrs.forEach(err => {
					error += '[GraphQL] ' + err.message + '\n';
				});
			}
			return error.trim();
		})(networkError, normalizedGraphQLErrors);
		Error.call(this, message);
		this.name = 'CombinedError';
		this.message = message;
		this.graphQLErrors = normalizedGraphQLErrors;
		this.networkError = networkError;
		this.response = response;
	}
	if (Error) {
		CombinedError.__proto__ = Error;
	}
	(CombinedError.prototype = Object.create(
		Error && Error.prototype
	)).constructor = CombinedError;
	CombinedError.prototype.toString = _toString;
	return CombinedError;
})(Error);

let phash = function(h, x) {
	h |= 0;
	for (let i = 0, l = 0 | x.length; i < l; i++) {
		h = (h << 5) + h + x.charCodeAt(i);
	}
	return h;
};

let seen = new Set();

var stringify = function(x) {
	if (void 0 === x) {
		return '';
	}
	else if ('number' == typeof x) {
		return isFinite(x) ? '' + x : 'null';
	}
	else if ('object' != typeof x) {
		return JSON.stringify(x);
	}
	else if (null === x) {
		return 'null';
	}
	else if (x.toJSON) {
		return x.toJSON();
	}
	let out = '';
	if (Array.isArray(x)) {
		out = '[';
		for (let i = 0, l = x.length; i < l; i++) {
			if (i > 0) {
				out += ',';
			}
			let value = stringify(x[i]);
			out += value.length > 0 ? value : 'null';
		}
		return (out += ']');
	}
	else if (seen.has(x)) {
		throw new TypeError('Converting circular structure to JSON');
	}
	let keys = Object.keys(x).sort();
	seen.add(x);
	out = '{';
	for (let i$1 = 0, l$1 = keys.length; i$1 < l$1; i$1++) {
		let key = keys[i$1];
		let value$1 = stringify(x[key]);
		if (0 !== value$1.length) {
			if (out.length > 1) {
				out += ',';
			}
			out += stringify(key) + ':' + value$1;
		}
	}
	seen.delete(x);
	return (out += '}');
};

let stringifyVariables = function(x) {
	seen.clear();
	return stringify(x);
};

let hashQuery = function(q) {
	return (x = q.replace(/[\s,]+/g, ' ').trim()), phash(5381, x) >>> 0;
	let x;
};

let docs = Object.create(null);

let createRequest = function(q, vars) {
	let key;
	let query;
	if ('string' == typeof q) {
		key = hashQuery(q);
		query = void 0 !== docs[key] ? docs[key] : parse(q);
	}
	else if (void 0 !== q.__key) {
		key = q.__key;
		query = q;
	}
	else {
		key = hashQuery(print(q));
		query = void 0 !== docs[key] ? docs[key] : q;
	}
	docs[key] = query;
	query.__key = key;
	return {
		key: vars ? phash(key, stringifyVariables(vars)) >>> 0 : key,
		query,
		variables: vars || {}
	};
};

let addMetadata = function(source, meta) {
	return _extends(_extends({}, source), {
		context: _extends(_extends({}, source.context), {
			meta: _extends(_extends({}, source.context.meta), meta)
		})
	});
};

let makeResult = function(operation, result, response) {
	return {
		operation,
		data: result.data,
		error: Array.isArray(result.errors)
			? new CombinedError({
				graphQLErrors: result.errors,
				response
			  })
			: void 0,
		extensions:
			'object' == typeof result.extensions && null !== result.extensions
				? result.extensions
				: void 0
	};
};

let makeErrorResult = function(operation, error, response) {
	return {
		operation,
		data: void 0,
		error: new CombinedError({
			networkError: error,
			response
		}),
		extensions: void 0
	};
};

var collectTypes = function(obj, types) {
	if (void 0 === types) {
		types = [];
	}
	if (Array.isArray(obj)) {
		obj.forEach(inner => {
			collectTypes(inner, types);
		});
	}
	else if ('object' == typeof obj && null !== obj) {
		for (let key in obj) {
			if (Object.prototype.hasOwnProperty.call(obj, key)) {
				let val = obj[key];
				if ('__typename' === key && 'string' == typeof val) {
					types.push(val);
				}
				else if ('object' == typeof val && null !== val) {
					collectTypes(val, types);
				}
			}
		}
	}
	return types;
};

function _ref2(v, i, a) {
	return a.indexOf(v) === i;
}

let collectTypesFromResponse = function(response) {
	return collectTypes(response).filter(_ref2);
};

function _ref3(s) {
	return 'Field' === s.kind && '__typename' === s.name.value;
}

let formatNode = function(n) {
	if (void 0 === n.selectionSet) {
		return !1;
	}
	if (n.selectionSet.selections.some(_ref3)) {
		return n;
	}
	return _extends(_extends({}, n), {
		selectionSet: _extends(_extends({}, n.selectionSet), {
			selections: n.selectionSet.selections.concat([
				{
					kind: Kind.FIELD,
					name: {
						kind: Kind.NAME,
						value: '__typename'
					}
				}
			])
		})
	});
};

let formatDocument = function(astNode) {
	return visit(astNode, {
		Field: formatNode,
		InlineFragment: formatNode
	});
};

let toSuspenseSource = function(source) {
	return function(sink) {
		let shared = share(source);
		let hasResult = !1;
		let hasSuspended = !1;
		onPush(() => (hasResult = !0))(takeWhile(() => !hasSuspended)(shared))(
			sink
		);
		if (!hasResult) {
			hasSuspended = !0;
			sink(0);
			throw toPromise(take(1)(shared));
		}
	};
};

function withPromise(source$) {
	source$.toPromise = function() {
		return toPromise(take(1)(source$));
	};
	return source$;
}

export {
	CombinedError as C,
	_extends as _,
	addMetadata as a,
	makeErrorResult as b,
	collectTypesFromResponse as c,
	createRequest as d,
	formatDocument as f,
	makeResult as m,
	stringifyVariables as s,
	toSuspenseSource as t,
	withPromise as w
};
//# sourceMappingURL=index-9bb95fa6.js.map
