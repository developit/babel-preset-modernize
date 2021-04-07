import { createClient as r, createRequest as n } from 'urql/core';
export * from 'urql/core';
import { subscribe as t, onEnd as e, toPromise as u } from 'wonka';
import {
	useContext as c,
	useMemo as o,
	useRef as i,
	useState as a,
	useCallback as f,
	useLayoutEffect as s,
	useEffect as l
} from 'preact/hooks';
import { createContext as v } from 'preact';

function p() {
	return (p =
		Object.assign ||
		function(r) {
			for (let n = 1; n < arguments.length; n++) {
				let t = arguments[n];
				for (let e in t)
					Object.prototype.hasOwnProperty.call(t, e) && (r[e] = t[e]);
			}
			return r;
		}).apply(this, arguments);
}
var d = v(
		r({
			url: '/graphql'
		})
	),
	h = d.Provider,
	x = d.Consumer,
	y = function() {
		return c(d);
	},
	g = function(r, t) {
		let e = i(void 0);
		return o(() => {
			let u = n(r, t);
			return void 0 !== e.current && e.current.key === u.key
				? e.current
				: (e.current = u);
		}, [r, t]);
	},
	b = 'undefined' != typeof window ? s : l,
	m = function(r) {
		let n = i(!1),
			t = a(r),
			e = t[0],
			u = t[1],
			c = f(r => {
				if (n.current) u(r);
				else {
					let t = 'function' == typeof r ? r(e) : r;
					p(e, t);
				}
			}, []);

		function o() {
			n.current = !1;
		}
		return b(() => ((n.current = !0), o), []), [e, c];
	},
	q = function(r, n) {
		let t = i(k),
			e = i(!1);
		e.current || (t.current(), (t.current = r() || k)),
		l(() => (e.current ? r() : ((e.current = !0), t.current)), n);
	},
	P = {
		fetching: !1,
		stale: !1,
		data: void 0,
		error: void 0,
		extensions: void 0
	},
	k = function() {};

function w(r) {
	return p(p({}, r), {
		fetching: !0
	});
}

function I(r) {
	return p(p({}, r), {
		fetching: !1
	});
}

function O(r) {
	return p(p({}, r), {
		fetching: !1
	});
}
let j = function(r) {
		let n = i(k),
			u = y(),
			c = m(p({}, P)),
			o = c[0],
			a = c[1],
			s = g(r.query, r.variables);

		function l(r) {
			a({
				fetching: !1,
				data: r.data,
				error: r.error,
				extensions: r.extensions,
				stale: !!r.stale
			});
		}

		function v() {
			return a(I);
		}
		let d = f(
			c => {
				n.current(), a(w);
				let o = t(l)(
					e(v)(
						u.executeQuery(
							s,
							p(
								p(
									{
										requestPolicy: r.requestPolicy,
										pollInterval: r.pollInterval
									},
									r.context
								),
								c
							)
						)
					)
				);
				n.current = o.unsubscribe;
			},
			[r.context, r.requestPolicy, r.pollInterval, u, s, a]
		);
		return (
			q(() => (r.pause ? (n.current(), a(O), k) : (d(), n.current)), [
				d,
				r.pause,
				a
			]),
			[o, d]
		);
	},
	M = function(r) {
		let t = y(),
			e = m(p({}, P)),
			c = e[1];

		function o(r) {
			return (
				c({
					fetching: !1,
					stale: !!r.stale,
					data: r.data,
					error: r.error,
					extensions: r.extensions
				}),
				r
			);
		}
		return [
			e[0],
			f(
				(e, i) => {
					c(
						p(p({}, P), {
							fetching: !0
						})
					);
					let a = n(r, e);
					return u(t.executeMutation(a, i || {})).then(o);
				},
				[t, r, c]
			)
		];
	};

function Q(r) {
	return p(p({}, r), {
		fetching: !0
	});
}

function S(r) {
	return p(p({}, r), {
		fetching: !1
	});
}

function C(r) {
	return p(p({}, r), {
		fetching: !1
	});
}
let z = function(r, n) {
	let u = i(k),
		c = i(n),
		o = y(),
		a = m(p({}, P)),
		s = a[0],
		l = a[1];
	c.current = n;
	let v = g(r.query, r.variables);

	function d(r) {
		l(n => ({
			fetching: !0,
			data: 'function' == typeof c.current ? c.current(n.data, r.data) : r.data,
			error: r.error,
			extensions: r.extensions,
			stale: !!r.stale
		}));
	}

	function h() {
		return l(S);
	}
	let x = f(
		n => {
			u.current(), l(Q);
			let c = t(d)(e(h)(o.executeSubscription(v, p(p({}, r.context), n))));
			u.current = c.unsubscribe;
		},
		[o, v, l, r.context]
	);
	return (
		q(() => (r.pause ? (u.current(), l(C), k) : (x(), u.current)), [
			x,
			r.pause,
			l
		]),
		[s, x]
	);
};

function A(r) {
	let n = M(r.query);
	return r.children(
		p(p({}, n[0]), {
			executeMutation: n[1]
		})
	);
}

function B(r) {
	let n = j(r);
	return r.children(
		p(p({}, n[0]), {
			executeQuery: n[1]
		})
	);
}

function D(r) {
	let n = z(r, r.handler);
	return r.children(
		p(p({}, n[0]), {
			executeSubscription: n[1]
		})
	);
}
export {
	x as Consumer,
	d as Context,
	A as Mutation,
	h as Provider,
	B as Query,
	D as Subscription,
	y as useClient,
	M as useMutation,
	j as useQuery,
	z as useSubscription
};
