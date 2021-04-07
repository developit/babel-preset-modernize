import {
	share as r,
	onPush as e,
	takeWhile as t,
	toPromise as n,
	take as o
} from 'wonka';
import {
	GraphQLError as i,
	parse as s,
	print as a,
	visit as u,
	Kind as c
} from 'graphql';

function f() {
	return (f = Object.assign || function (r) {
		for (let e = 1; e < arguments.length; e++) {
			let t = arguments[e];
			for (let n in t) Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
		}
		return r;
	}).apply(this, arguments);
}
let l = function (r) {
	return 'string' == typeof r ? new i(r) : 'object' == typeof r && r.message ? new i(r.message, r.nodes, r.source, r.positions, r.path, r, r.extensions || {}) : r;
};

function p() {
	return this.message;
}
var v = function (r) {
		function e(e) {
			let t, n, o, i = e.networkError,
				s = e.response,
				a = (e.graphQLErrors || []).map(l),
				u = (n = a, o = '', void 0 !== (t = i) ? o = '[Network] ' + t.message : (void 0 !== n && n.forEach(((r) => {
					o += '[GraphQL] ' + r.message + '\n';
				})), o.trim()));
			r.call(this, u), this.name = 'CombinedError', this.message = u, this.graphQLErrors = a, this.networkError = i, this.response = s;
		}
		return r && (e.__proto__ = r), (e.prototype = Object.create(r && r.prototype)).constructor = e, e.prototype.toString = p, e;
	}(Error),
	y = function (r, e) {
		r |= 0;
		for (let t = 0, n = 0 | e.length; t < n; t++) r = (r << 5) + r + e.charCodeAt(t);
		return r;
	},
	h = new Set(),
	d = function (r) {
		if (void 0 === r) return '';
		if ('number' == typeof r) return isFinite(r) ? '' + r : 'null';
		if ('object' != typeof r) return JSON.stringify(r);
		if (null === r) return 'null';
		if (r.toJSON) return r.toJSON();
		let e = '';
		if (Array.isArray(r)) {
			e = '[';
			for (let t = 0, n = r.length; t < n; t++) {
				t > 0 && (e += ',');
				let o = d(r[t]);
				e += o.length > 0 ? o : 'null';
			}
			return e + ']';
		}
		if (h.has(r)) throw new TypeError('Converting circular structure to JSON');
		let i = Object.keys(r).sort();
		h.add(r), e = '{';
		for (let s = 0, a = i.length; s < a; s++) {
			let u = i[s],
				c = d(r[u]);
			0 !== c.length && (e.length > 1 && (e += ','), e += d(u) + ':' + c);
		}
		return h.delete(r), e + '}';
	},
	m = function (r) {
		return h.clear(), d(r);
	},
	g = function (r) {
		return e = r.replace(/[\s,]+/g, ' ').trim(), y(5381, e) >>> 0;
		let e;
	},
	_ = Object.create(null),
	w = function (r, e) {
		let t, n;
		return 'string' == typeof r ? (t = g(r), n = void 0 !== _[t] ? _[t] : s(r)) : void 0 !== r.__key ? (t = r.__key, n = r) : (t = g(a(r)), n = void 0 !== _[t] ? _[t] : r), _[t] = n, n.__key = t, {
			key: e ? y(t, m(e)) >>> 0 : t,
			query: n,
			variables: e || {}
		};
	},
	b = function (r, e) {
		return f(f({}, r), {
			context: f(f({}, r.context), {
				meta: f(f({}, r.context.meta), e)
			})
		});
	},
	k = function (r, e, t) {
		return {
			operation: r,
			data: e.data,
			error: Array.isArray(e.errors) ? new v({
				graphQLErrors: e.errors,
				response: t
			}) : void 0,
			extensions: 'object' == typeof e.extensions && null !== e.extensions ? e.extensions : void 0
		};
	},
	E = function (r, e, t) {
		return {
			operation: r,
			data: void 0,
			error: new v({
				networkError: e,
				response: t
			}),
			extensions: void 0
		};
	},
	O = function (r, e) {
		if (void 0 === e && (e = []), Array.isArray(r)) r.forEach(((r) => {
			O(r, e);
		}));
		else if ('object' == typeof r && null !== r)
			for (let t in r)
				if (Object.prototype.hasOwnProperty.call(r, t)) {
					let n = r[t];
					'__typename' === t && 'string' == typeof n ? e.push(n) : 'object' == typeof n && null !== n && O(n, e);
				} return e;
	};

function j(r, e, t) {
	return t.indexOf(r) === e;
}
let x = function (r) {
	return O(r).filter(j);
};

function S(r) {
	return 'Field' === r.kind && '__typename' === r.name.value;
}
let A = function (r) {
		return void 0 !== r.selectionSet && (r.selectionSet.selections.some(S) ? r : f(f({}, r), {
			selectionSet: f(f({}, r.selectionSet), {
				selections: r.selectionSet.selections.concat([{
					kind: c.FIELD,
					name: {
						kind: c.NAME,
						value: '__typename'
					}
				}])
			})
		}));
	},
	N = function (r) {
		return u(r, {
			Field: A,
			InlineFragment: A
		});
	},
	F = function (i) {
		return function (s) {
			let a = r(i),
				u = !1,
				c = !1;
			if (e((() => u = !0))(t((() => !c))(a))(s), !u) throw c = !0, s(0), n(o(1)(a));
		};
	};

function L(r) {
	return r.toPromise = function () {
		return n(o(1)(r));
	}, r;
}
export {
	v as C, f as _, b as a, E as b, x as c, w as d, N as f, k as m, m as s, F as t, L as w
};
