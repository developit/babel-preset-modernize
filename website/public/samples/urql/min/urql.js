import {
	_ as e,
	d as r
} from './index-9bb95fa6.js';
export {
	C as CombinedError, d as createRequest, f as formatDocument, b as makeErrorResult, m as makeResult, s as stringifyVariables
}
	from './index-9bb95fa6.js';
import {
	toPromise as t,
	scan as n,
	switchMap as a,
	fromValue as o,
	concat as u,
	map as c
} from 'wonka';
import {
	createClient as i
} from './core.js';
export {
	Client,
	cacheExchange,
	composeExchanges,
	createClient,
	debugExchange,
	dedupExchange,
	defaultExchanges,
	fallbackExchangeIO,
	fetchExchange,
	ssrExchange,
	subscriptionExchange
}
	from './core.js';
import {
	createContext as l,
	useContext as x,
	useState as h,
	useCallback as v,
	useMemo as g,
	useRef as p
} from 'react';
import {
	useOperator as y
} from 'react-wonka';
let E = l(i({
		url: '/graphql'
	})),
	q = E.Provider,
	k = E.Consumer,
	j = function () {
		return x(E);
	},
	I = {
		fetching: !1,
		stale: !1,
		error: void 0,
		data: void 0,
		extensions: void 0
	},
	P = function (n) {
		let a = j(),
			o = h(I),
			u = o[1];

		function c(e) {
			return u({
				fetching: !1,
				stale: !!e.stale,
				data: e.data,
				error: e.error,
				extensions: e.extensions
			}), e;
		}
		return [o[0], v((o, i) => {
			u(e(e({}, I), {
				fetching: !0
			}));
			let s = r(n, o);
			return t(a.executeMutation(s, i || {})).then(c);
		}, [a, n, u])];
	},
	R = function (e, t) {
		let n = p(void 0);
		return g(() => {
			let a = r(e, t);
			return void 0 !== n.current && n.current.key === a.key ? n.current : (n.current = a, a);
		}, [e, t]);
	};

function w(r, t) {
	return e(e(e({}, r), {
		stale: !1
	}), t);
}

function M(e) {
	return {
		fetching: !1,
		stale: !!e.stale,
		data: e.data,
		error: e.error,
		extensions: e.extensions
	};
}

function Q(e) {
	return e ? u([o({
		fetching: !0
	}), c(M)(e), o({
		fetching: !1
	})]) : o({
		fetching: !1
	});
}

function S(e) {
	return n(w, I)(a(Q)(e));
}
let D = function (r) {
	let t = j(),
		n = R(r.query, r.variables),
		a = v((a) => t.executeQuery(n, e(e({
			requestPolicy: r.requestPolicy,
			pollInterval: r.pollInterval
		}, r.context), a)), [t, n, r.requestPolicy, r.pollInterval, r.context]),
		o = y(S, g(() => r.pause ? null : a(), [r.pause, a]), I),
		u = o[1];
	return [o[0], v((e) => u(a(e)), [u, a])];
};

function O(e) {
	return {
		fetching: !0,
		stale: !!e.stale,
		data: e.data,
		error: e.error,
		extensions: e.extensions
	};
}

function V(e) {
	return e ? u([o({
		fetching: !0
	}), c(O)(e), o({
		fetching: !1
	})]) : o({
		fetching: !1
	});
}
let _ = function (r, t) {
	let o = j(),
		u = p(t);
	u.current = t;
	let c = R(r.query, r.variables),
		i = v((t) => o.executeSubscription(c, e(e({}, r.context), t)), [o, c, r.context]);

	function s(r, t) {
		let n = u.current,
			a = void 0 !== t.data ? 'function' == typeof n ? n(r.data, t.data) : t.data : r.data;
		return e(e(e(e({}, r), {
			stale: !1
		}), t), {
			data: a
		});
	}
	let f = y((e) => n(s, I)(a(V)(e)), g(() => r.pause ? null : i(), [r.pause, i]), I),
		l = f[1];
	return [f[0], v((e) => l(i(e)), [l, i])];
};

function z(r) {
	let t = P(r.query),
		n = t[1];
	return r.children(e(e({}, t[0]), {
		executeMutation: n
	}));
}

function A(r) {
	let t = D(r),
		n = t[1];
	return r.children(e(e({}, t[0]), {
		executeQuery: n
	}));
}

function B(r) {
	let t = _(r, r.handler),
		n = t[1];
	return r.children(e(e({}, t[0]), {
		executeSubscription: n
	}));
}
export {
	k as Consumer, E as Context, z as Mutation, q as Provider, A as Query, B as Subscription, j as useClient, P as useMutation, D as useQuery, _ as useSubscription
};
