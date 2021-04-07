import {
	_ as t,
	C as e,
	a as r,
	f as n,
	c as o,
	m as i,
	b as a,
	t as u,
	w as c,
	d as p
} from './index-9bb95fa6.js';
export {
	C as CombinedError, d as createRequest, f as formatDocument, b as makeErrorResult, m as makeResult, s as stringifyVariables
}
	from './index-9bb95fa6.js';
import {
	share as h,
	filter as v,
	map as l,
	tap as y,
	merge as O,
	mergeMap as x,
	takeUntil as q,
	make as w,
	switchMap as k,
	fromValue as E,
	interval as N,
	makeSubject as g,
	publish as R,
	take as S,
	onStart as P,
	onEnd as j
} from 'wonka';
import {
	print as Q,
	Kind as $
} from 'graphql';
let D = function (t) {
	let e = t.operationName;
	return 'subscription' !== e && 'query' !== e;
};

function I(t) {
	return '' + t;
}
let A = function (r) {
		let n = {},
			o = function (t) {
				return !D(t) && void 0 !== n[t.key];
			};

		function i(t) {
			return !o(t);
		}

		function a(t) {
			let r, o, i;
			return i = {
				operation: t,
				data: (r = n[t.key]).data,
				extensions: void 0,
				error: void 0
			}, void 0 !== (o = r.error) && (i.error = new e({
				networkError: new Error(o.networkError),
				graphQLErrors: o.graphQLErrors
			})), i;
		}

		function u(t) {
			return o(t);
		}

		function c(t) {
			let e = t.operation;
			if (!D(e)) {
				let r = function (t) {
					let e = t.error,
						r = {
							data: t.data,
							error: void 0
						};
					return void 0 !== e && (r.error = {
						networkError: '' + e.networkError,
						graphQLErrors: e.graphQLErrors.map(I)
					}), r;
				}(t);
				n[e.key] = r;
			}
		}

		function s(t) {
			delete n[t.operation.key];
		}
		let f = function (t) {
			let e = t.client,
				n = t.forward;
			return function (t) {
				let o = r && 'boolean' == typeof r.isClient ? !!r.isClient : !e.suspense,
					f = h(t),
					p = n(v(i)(f)),
					d = l(a)(v(u)(f));
				return o ? d = y(s)(d) : p = y(c)(p), O([p, d]);
			};
		};
		return f.restoreData = function (e) {
			return t(n, e);
		}, f.extractData = function () {
			return t({}, n);
		}, r && r.initialState && f.restoreData(r.initialState), f;
	},
	L = function (t) {
		let e = t.operationName;
		return 'mutation' !== e && 'query' !== e;
	};

function T(e) {
	return t(t({}, e), {
		query: n(e.query)
	});
}

function M(t) {
	return r(t, {
		cacheOutcome: 'miss'
	});
}

function _(t) {
	return L(t);
}
var F = function (e) {
		let n = e.forward,
			o = e.client,
			i = new Map(),
			a = Object.create(null),
			u = T,
			c = V(i, a, o),
			s = z(i, a),
			f = function (t) {
				let e = t.context.requestPolicy;
				return 'query' === t.operationName && 'network-only' !== e && ('cache-only' === e || i.has(t.key));
			};

		function p(e) {
			let n = i.get(e.key),
				a = t(t({}, n), {
					operation: r(e, {
						cacheOutcome: n ? 'hit' : 'miss'
					})
				});
			return 'cache-and-network' === e.context.requestPolicy && (a.stale = !0, J(o, e)), a;
		}

		function d(t) {
			return !L(t) && f(t);
		}

		function m(t) {
			t.operation && 'mutation' === t.operation.operationName ? c(t) : t.operation && 'query' === t.operation.operationName && s(t);
		}

		function x(t) {
			return !L(t) && !f(t);
		}
		return function (t) {
			let e = h(t),
				r = l(p)(v(d)(e)),
				o = y(m)(n(l(M)(O([l(u)(v(x)(e)), v(_)(e)]))));
			return O([r, o]);
		};
	},
	J = function (e, r) {
		return e.reexecuteOperation(t(t({}, r), {
			context: t(t({}, r.context), {
				requestPolicy: 'network-only'
			})
		}));
	},
	V = function (t, e, r) {
		function n(e) {
			if (t.has(e)) {
				let n = t.get(e).operation;
				t.delete(e), J(r, n);
			}
		}
		return function (t) {
			let r = new Set();

			function i(t) {
				r.add(t);
			}
			o(t.data).forEach((t) => {
				let r = e[t] || (e[t] = new Set());
				r.forEach(i), r.clear();
			}), r.forEach(n);
		};
	},
	z = function (t, e) {
		return function (r) {
			let n = r.operation,
				i = r.data;
			null != i && (t.set(n.key, {
				operation: n,
				data: i,
				error: r.error
			}), o(r.data).forEach((t) => {
				(e[t] || (e[t] = new Set())).add(n.key);
			}));
		};
	},
	B = function (t) {
		return 'subscription' === t.operationName;
	};

function G(t) {
	return !B(t);
}
let H = function (e) {
		let r = e.forwardSubscription;
		return function (e) {
			let n = e.client,
				o = e.forward;
			return function (e) {
				let u = h(e),
					c = x((e) => {
						let o = e.key,
							c = v((t) => 'teardown' === t.operationName && t.key === o)(u);
						return q(c)(function (e) {
							let o = r({
								key: e.key.toString(36),
								query: Q(e.query),
								variables: e.variables,
								context: t({}, e.context)
							});
							return w((r) => {
								let u = r.next,
									c = r.complete,
									s = !1,
									f = o.subscribe({
										next (t) {
											return u(i(e, t));
										},
										error (t) {
											return u(a(e, t));
										},
										complete () {
											s || n.reexecuteOperation(t(t({}, e), {
												operationName: 'teardown'
											})), c();
										}
									});
								return function () {
									s = !0, f.unsubscribe();
								};
							});
						}(e));
					})(v(B)(u)),
					s = o(v(G)(u));
				return O([c, s]);
			};
		};
	},
	K = function (t) {
		let e = t.forward;
		return function (t) {
			return e(t);
		};
	},
	U = function (t) {
		let e = t.forward,
			r = new Set(),
			n = function (t) {
				let e = t.key,
					n = t.operationName;
				if ('teardown' === n) return r.delete(e), !0;
				if ('query' !== n && 'subscription' !== n) return !0;
				let o = r.has(e);
				return r.add(e), !o;
			},
			o = function (t) {
				r.delete(t.operation.key);
			};
		return function (t) {
			let r = v(n)(t);
			return y(o)(e(r));
		};
	};

function W(t) {
	let e = t.operationName;
	return 'query' === e || 'mutation' === e;
}
let X = function (t) {
	let e = t.forward,
		r = W;

	function n(t) {
		return !r(t);
	}
	return function (t) {
		let o = h(t),
			i = x((t) => {
				let e = t.key,
					r = v((t) => 'teardown' === t.operationName && t.key === e)(o);
				return q(r)(Z(t));
			})(v(r)(o)),
			a = e(v(n)(o));
		return O([i, a]);
	};
};

function Y(t) {
	return t.kind === $.OPERATION_DEFINITION && t.name;
}
var Z = function (e) {
		return w((r) => {
			let n, o = r.next,
				i = r.complete,
				a = 'undefined' != typeof AbortController ? new AbortController() : void 0,
				u = e.context,
				c = 'function' == typeof u.fetchOptions ? u.fetchOptions() : u.fetchOptions || {},
				s = void 0 !== (n = e.query.definitions.find(Y)) && n.name ? n.name.value : null,
				f = {
					query: Q(e.query),
					variables: e.variables
				};
			null !== s && (f.operationName = s);
			let p = t(t({
				body: JSON.stringify(f),
				method: 'POST'
			}, c), {
				headers: t({
					'content-type': 'application/json'
				}, c.headers),
				signal: void 0 !== a ? a.signal : void 0
			});
			return tt(e, p).then((t) => {
				void 0 !== t && o(t), i();
			}),
			function () {
				void 0 !== a && a.abort();
			};
		});
	},
	tt = function (t, e) {
		let r, n = t.context;
		return (n.fetch || fetch)(n.url, e).then((t) => {
			let n = t.status;
			if (r = t, n < 200 || n >= ('manual' === e.redirect ? 400 : 300)) throw new Error(t.statusText);
			return t.json();
		}).then((e) => i(t, e, r)).catch((e) => {
			if ('AbortError' !== e.name) return a(t, e, r);
		});
	};

function et() {
	return !1;
}

function rt(t) {}
var nt = function (t) {
		return v(et)(y(rt)(t));
	},
	ot = function (t) {
		return 1 === t.length ? t[0] : function (e) {
			return t.reduceRight((t, r) => r({
				client: e.client,
				forward: t
			}), e.forward);
		};
	},
	it = [U, F, X],
	at = function (t) {
		return new ut(t);
	},
	ut = function (e) {
		let r = this;
		this.activeOperations = Object.create(null), this.createOperationContext = function (e) {
			return t(t({
				url: r.url,
				fetchOptions: r.fetchOptions,
				fetch: r.fetch
			}, e), {
				requestPolicy: (e || {}).requestPolicy || r.requestPolicy
			});
		}, this.createRequestOperation = function (t, e, n) {
			return {
				key: e.key,
				query: e.query,
				variables: e.variables,
				operationName: t,
				context: r.createOperationContext(n)
			};
		}, this.reexecuteOperation = function (t) {
			(r.activeOperations[t.key] || 0) > 0 && r.dispatchOperation(t);
		}, this.executeQuery = function (t, e) {
			let n = r.createRequestOperation('query', t, e),
				o = r.executeRequestOperation(n),
				i = n.context.pollInterval;
			return i ? k(() => o)(O([E(0), N(i)])) : o;
		}, this.executeSubscription = function (t, e) {
			let n = r.createRequestOperation('subscription', t, e);
			return r.executeRequestOperation(n);
		}, this.executeMutation = function (t, e) {
			let n = r.createRequestOperation('mutation', t, e);
			return r.executeRequestOperation(n);
		}, this.url = e.url, this.fetchOptions = e.fetchOptions, this.fetch = e.fetch, this.suspense = !!e.suspense, this.requestPolicy = e.requestPolicy || 'cache-first';
		let n = g(),
			o = n.next;
		this.operations$ = n.source;
		let i = [],
			a = !1;
		this.dispatchOperation = function (t) {
			if (i.push(t), !a) {
				let e;
				for (a = !0; void 0 !== (e = i.shift());) o(e);
				a = !1;
			}
		}, this.exchange = ot(void 0 !== e.exchanges ? e.exchanges : it), this.results$ = h(this.exchange({
			client: this,
			forward: nt
		})(this.operations$)), R(this.results$);
	};
ut.prototype.onOperationStart = function (t) {
	let e = t.key;
	this.activeOperations[e] = (this.activeOperations[e] || 0) + 1, this.dispatchOperation(t);
}, ut.prototype.onOperationEnd = function (e) {
	let r = e.key,
		n = this.activeOperations[r] || 0;
	(this.activeOperations[r] = n <= 0 ? 0 : n - 1) <= 0 && this.dispatchOperation(t(t({}, e), {
		operationName: 'teardown'
	}));
}, ut.prototype.executeRequestOperation = function (t) {
	let e = this,
		r = t.key,
		n = t.operationName,
		o = v((t) => t.operation.key === r)(this.results$);
	if ('mutation' === n) return S(1)(P(() => e.dispatchOperation(t))(o));
	let i = v((t) => 'teardown' === t.operationName && t.key === r)(this.operations$),
		a = j(() => {
			e.onOperationEnd(t);
		})(P(() => {
			e.onOperationStart(t);
		})(q(i)(o)));
	return !1 !== t.context.suspense && this.suspense && 'query' === n ? u(a) : a;
}, ut.prototype.query = function (e, r, n) {
	return n && 'boolean' == typeof n.suspense || (n = t(t({}, n), {
		suspense: !1
	})), c(this.executeQuery(p(e, r), n));
}, ut.prototype.mutation = function (t, e, r) {
	return c(this.executeMutation(p(t, e), r));
};
export {
	ut as Client, F as cacheExchange, ot as composeExchanges, at as createClient, K as debugExchange, U as dedupExchange, it as defaultExchanges, nt as fallbackExchangeIO, X as fetchExchange, A as ssrExchange, H as subscriptionExchange
};
