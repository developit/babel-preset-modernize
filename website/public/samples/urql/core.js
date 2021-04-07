import {
	_ as _extends,
	C as CombinedError,
	a as addMetadata,
	f as formatDocument,
	c as collectTypesFromResponse,
	m as makeResult,
	b as makeErrorResult,
	t as toSuspenseSource,
	w as withPromise,
	d as createRequest
} from './index-9bb95fa6.js';
export {
	C as CombinedError,
	d as createRequest,
	f as formatDocument,
	b as makeErrorResult,
	m as makeResult,
	s as stringifyVariables
} from './index-9bb95fa6.js';
import {
	share,
	filter,
	map,
	tap,
	merge,
	mergeMap,
	takeUntil,
	make,
	switchMap,
	fromValue,
	interval,
	makeSubject,
	publish,
	take,
	onStart,
	onEnd
} from 'wonka';
import { print, Kind } from 'graphql';

let shouldSkip = function(ref) {
	let operationName = ref.operationName;
	return 'subscription' !== operationName && 'query' !== operationName;
};

function _ref(x) {
	return '' + x;
}

let ssrExchange = function(params) {
	let data = {};

	let isCached = function(operation) {
		return !shouldSkip(operation) && void 0 !== data[operation.key];
	};

	function _ref2(op) {
		return !isCached(op);
	}

	function _ref3(op) {
		return (function(operation, result) {
			let error = result.error;
			let deserialized = {
				operation,
				data: result.data,
				extensions: void 0,
				error: void 0
			};

			if (void 0 !== error) {
				deserialized.error = new CombinedError({
					networkError: new Error(error.networkError),
					graphQLErrors: error.graphQLErrors
				});
			}

			return deserialized;
		})(op, data[op.key]);
	}

	function _ref4(op) {
		return isCached(op);
	}

	function _ref5(result) {
		let operation = result.operation;

		if (!shouldSkip(operation)) {
			let serialized = (function(ref) {
				let error = ref.error;
				let result = {
					data: ref.data,
					error: void 0
				};

				if (void 0 !== error) {
					result.error = {
						networkError: '' + error.networkError,
						graphQLErrors: error.graphQLErrors.map(_ref)
					};
				}

				return result;
			})(result);

			data[operation.key] = serialized;
		}
	}

	function _ref6(result) {
		delete data[result.operation.key];
	}

	let ssr = function(ref) {
		let client = ref.client;
		let forward = ref.forward;
		return function(ops$) {
			let isClient =
				params && 'boolean' == typeof params.isClient
					? !!params.isClient
					: !client.suspense;
			let sharedOps$ = share(ops$);
			let forwardedOps$ = forward(filter(_ref2)(sharedOps$));
			let cachedOps$ = map(_ref3)(filter(_ref4)(sharedOps$));

			if (!isClient) {
				forwardedOps$ = tap(_ref5)(forwardedOps$);
			}
			else {
				cachedOps$ = tap(_ref6)(cachedOps$);
			}

			return merge([forwardedOps$, cachedOps$]);
		};
	};

	ssr.restoreData = function(restore) {
		return _extends(data, restore);
	};

	ssr.extractData = function() {
		return _extends({}, data);
	};

	if (params && params.initialState) {
		ssr.restoreData(params.initialState);
	}

	return ssr;
};

let shouldSkip$1 = function(ref) {
	let operationName = ref.operationName;
	return 'mutation' !== operationName && 'query' !== operationName;
};

function _ref$1(operation) {
	return _extends(_extends({}, operation), {
		query: formatDocument(operation.query)
	});
}

function _ref5(op) {
	return addMetadata(op, {
		cacheOutcome: 'miss'
	});
}

function _ref7(op) {
	return shouldSkip$1(op);
}

let cacheExchange = function(ref) {
	let forward = ref.forward;
	let client = ref.client;
	let resultCache = new Map();
	let operationCache = Object.create(null);
	let mapTypeNames = _ref$1;
	let handleAfterMutation = afterMutation(resultCache, operationCache, client);
	let handleAfterQuery = afterQuery(resultCache, operationCache);

	let isOperationCached = function(operation) {
		let requestPolicy = operation.context.requestPolicy;
		return (
			'query' === operation.operationName &&
			'network-only' !== requestPolicy &&
			('cache-only' === requestPolicy || resultCache.has(operation.key))
		);
	};

	function _ref2(operation) {
		let cachedResult = resultCache.get(operation.key);

		let result = _extends(_extends({}, cachedResult), {
			operation: addMetadata(operation, {
				cacheOutcome: cachedResult ? 'hit' : 'miss'
			})
		});

		if ('cache-and-network' === operation.context.requestPolicy) {
			result.stale = !0;
			reexecuteOperation(client, operation);
		}

		return result;
	}

	function _ref3(op) {
		return !shouldSkip$1(op) && isOperationCached(op);
	}

	function _ref4(response) {
		if (response.operation && 'mutation' === response.operation.operationName) {
			handleAfterMutation(response);
		}
		else if (
			response.operation &&
			'query' === response.operation.operationName
		) {
			handleAfterQuery(response);
		}
	}

	function _ref6(op) {
		return !shouldSkip$1(op) && !isOperationCached(op);
	}

	return function(ops$) {
		let sharedOps$ = share(ops$);
		let cachedOps$ = map(_ref2)(filter(_ref3)(sharedOps$));
		let forwardedOps$ = tap(_ref4)(
			forward(
				map(_ref5)(
					merge([
						map(mapTypeNames)(filter(_ref6)(sharedOps$)),
						filter(_ref7)(sharedOps$)
					])
				)
			)
		);
		return merge([cachedOps$, forwardedOps$]);
	};
};

var reexecuteOperation = function(client, operation) {
	return client.reexecuteOperation(
		_extends(_extends({}, operation), {
			context: _extends(_extends({}, operation.context), {
				requestPolicy: 'network-only'
			})
		})
	);
};

var afterMutation = function(resultCache, operationCache, client) {
	function _ref9(key) {
		if (resultCache.has(key)) {
			let operation = resultCache.get(key).operation;
			resultCache.delete(key);
			reexecuteOperation(client, operation);
		}
	}

	return function(response) {
		let pendingOperations = new Set();

		function _ref8(key) {
			pendingOperations.add(key);
		}

		collectTypesFromResponse(response.data).forEach(typeName => {
			let operations =
				operationCache[typeName] || (operationCache[typeName] = new Set());
			operations.forEach(_ref8);
			operations.clear();
		});
		pendingOperations.forEach(_ref9);
	};
};

var afterQuery = function(resultCache, operationCache) {
	return function(response) {
		let operation = response.operation;
		let data = response.data;

		if (null == data) {
			return;
		}

		resultCache.set(operation.key, {
			operation,
			data,
			error: response.error
		});
		collectTypesFromResponse(response.data).forEach(typeName => {
			(operationCache[typeName] || (operationCache[typeName] = new Set())).add(
				operation.key
			);
		});
	};
};

let isSubscriptionOperation = function(operation) {
	return 'subscription' === operation.operationName;
};

function _ref$2(op) {
	return !isSubscriptionOperation(op);
}

let subscriptionExchange = function(ref) {
	let forwardSubscription = ref.forwardSubscription;
	return function(ref) {
		let client = ref.client;
		let forward = ref.forward;
		return function(ops$) {
			let sharedOps$ = share(ops$);
			let subscriptionResults$ = mergeMap(operation => {
				let key = operation.key;
				let teardown$ = filter(
					op => 'teardown' === op.operationName && op.key === key
				)(sharedOps$);
				return takeUntil(teardown$)(
					(function(operation) {
						let observableish = forwardSubscription({
							key: operation.key.toString(36),
							query: print(operation.query),
							variables: operation.variables,
							context: _extends({}, operation.context)
						});
						return make(ref => {
							let next = ref.next;
							let complete = ref.complete;
							let isComplete = !1;
							let sub = observableish.subscribe({
								next(result) {
									return next(makeResult(operation, result));
								},
								error(err) {
									return next(makeErrorResult(operation, err));
								},
								complete() {
									if (!isComplete) {
										client.reexecuteOperation(
											_extends(_extends({}, operation), {
												operationName: 'teardown'
											})
										);
									}

									complete();
								}
							});
							return function() {
								isComplete = !0;
								sub.unsubscribe();
							};
						});
					})(operation)
				);
			})(filter(isSubscriptionOperation)(sharedOps$));
			let forward$ = forward(filter(_ref$2)(sharedOps$));
			return merge([subscriptionResults$, forward$]);
		};
	};
};

function _ref2(result) {
	return console.log('[Exchange debug]: Completed operation: ', result);
}

function _ref3(op) {
	return console.log('[Exchange debug]: Incoming operation: ', op);
}

let debugExchange = function(ref) {
	let forward = ref.forward;

	if ('production' === process.env.NODE_ENV) {
		return function _ref(ops$) {
			return forward(ops$);
		};
	}
	return function _ref4(ops$) {
		return tap(_ref2)(forward(tap(_ref3)(ops$)));
	};
};

let dedupExchange = function(ref) {
	let forward = ref.forward;
	let inFlightKeys = new Set();

	let filterIncomingOperation = function(operation) {
		let key = operation.key;
		let operationName = operation.operationName;

		if ('teardown' === operationName) {
			inFlightKeys.delete(key);
			return !0;
		}
		else if ('query' !== operationName && 'subscription' !== operationName) {
			return !0;
		}

		let isInFlight = inFlightKeys.has(key);
		inFlightKeys.add(key);
		return !isInFlight;
	};

	let afterOperationResult = function(ref) {
		inFlightKeys.delete(ref.operation.key);
	};

	return function(ops$) {
		let forward$ = filter(filterIncomingOperation)(ops$);
		return tap(afterOperationResult)(forward(forward$));
	};
};

function _ref$3(operation) {
	let operationName = operation.operationName;
	return 'query' === operationName || 'mutation' === operationName;
}

let fetchExchange = function(ref) {
	let forward = ref.forward;
	let isOperationFetchable = _ref$3;

	function _ref2(op) {
		return !isOperationFetchable(op);
	}

	return function(ops$) {
		let sharedOps$ = share(ops$);
		let fetchResults$ = mergeMap(operation => {
			let key = operation.key;
			let teardown$ = filter(
				op => 'teardown' === op.operationName && op.key === key
			)(sharedOps$);
			return takeUntil(teardown$)(createFetchSource(operation));
		})(filter(isOperationFetchable)(sharedOps$));
		let forward$ = forward(filter(_ref2)(sharedOps$));
		return merge([fetchResults$, forward$]);
	};
};

function _ref3$1(node) {
	return node.kind === Kind.OPERATION_DEFINITION && node.name;
}

var createFetchSource = function(operation) {
	if (
		'production' !== process.env.NODE_ENV &&
		'subscription' === operation.operationName
	) {
		throw new Error(
			'Received a subscription operation in the httpExchange. You are probably trying to create a subscription. Have you added a subscriptionExchange?'
		);
	}

	return make(ref => {
		let next = ref.next;
		let complete = ref.complete;
		let abortController =
			'undefined' != typeof AbortController ? new AbortController() : void 0;
		let context = operation.context;
		let extraOptions =
			'function' == typeof context.fetchOptions
				? context.fetchOptions()
				: context.fetchOptions || {};
		let operationName =
			void 0 !== (node = operation.query.definitions.find(_ref3$1)) && node.name
				? node.name.value
				: null;
		let node;
		let body = {
			query: print(operation.query),
			variables: operation.variables
		};

		if (null !== operationName) {
			body.operationName = operationName;
		}

		let fetchOptions = _extends(
			_extends(
				{
					body: JSON.stringify(body),
					method: 'POST'
				},
				extraOptions
			),
			{
				headers: _extends(
					{
						'content-type': 'application/json'
					},
					extraOptions.headers
				),
				signal: void 0 !== abortController ? abortController.signal : void 0
			}
		);

		executeFetch(operation, fetchOptions).then(result => {
			if (void 0 !== result) {
				next(result);
			}

			complete();
		});
		return function() {
			if (void 0 !== abortController) {
				abortController.abort();
			}
		};
	});
};

var executeFetch = function(operation, opts) {
	let ref = operation.context;
	let response;
	return (ref.fetch || fetch)(ref.url, opts)
		.then(res => {
			let status = res.status;
			response = res;

			if (status < 200 || status >= ('manual' === opts.redirect ? 400 : 300)) {
				throw new Error(res.statusText);
			}
			else {
				return res.json();
			}
		})
		.then(result => makeResult(operation, result, response))
		.catch(err => {
			if ('AbortError' !== err.name) {
				return makeErrorResult(operation, err, response);
			}
		});
};

function _ref$4() {
	return !1;
}

function _ref2$1(ref) {
	let operationName = ref.operationName;

	if ('teardown' !== operationName && 'production' !== process.env.NODE_ENV) {
		console.warn(
			'No exchange has handled operations of type "' +
				operationName +
				"\". Check whether you've added an exchange responsible for these operations."
		);
	}
}

let fallbackExchangeIO = function(ops$) {
	return filter(_ref$4)(tap(_ref2$1)(ops$));
};

let composeExchanges = function(exchanges) {
	if (1 === exchanges.length) {
		return exchanges[0];
	}

	return function(payload) {
		return exchanges.reduceRight(
			(forward, exchange) =>
				exchange({
					client: payload.client,
					forward
				}),
			payload.forward
		);
	};
};

let defaultExchanges = [dedupExchange, cacheExchange, fetchExchange];

let createClient = function(opts) {
	return new Client(opts);
};

var Client = function Client(opts) {
	let this$1 = this;
	this.activeOperations = Object.create(null);

	this.createOperationContext = function(opts) {
		return _extends(
			_extends(
				{
					url: this$1.url,
					fetchOptions: this$1.fetchOptions,
					fetch: this$1.fetch
				},
				opts
			),
			{
				requestPolicy: (opts || {}).requestPolicy || this$1.requestPolicy
			}
		);
	};

	this.createRequestOperation = function(type, request, opts) {
		return {
			key: request.key,
			query: request.query,
			variables: request.variables,
			operationName: type,
			context: this$1.createOperationContext(opts)
		};
	};

	this.reexecuteOperation = function(operation) {
		if ((this$1.activeOperations[operation.key] || 0) > 0) {
			this$1.dispatchOperation(operation);
		}
	};

	this.executeQuery = function(query, opts) {
		let operation = this$1.createRequestOperation('query', query, opts);
		let response$ = this$1.executeRequestOperation(operation);
		let pollInterval = operation.context.pollInterval;

		if (pollInterval) {
			return switchMap(() => response$)(
				merge([fromValue(0), interval(pollInterval)])
			);
		}

		return response$;
	};

	this.executeSubscription = function(query, opts) {
		let operation = this$1.createRequestOperation('subscription', query, opts);
		return this$1.executeRequestOperation(operation);
	};

	this.executeMutation = function(query, opts) {
		let operation = this$1.createRequestOperation('mutation', query, opts);
		return this$1.executeRequestOperation(operation);
	};

	this.url = opts.url;
	this.fetchOptions = opts.fetchOptions;
	this.fetch = opts.fetch;
	this.suspense = !!opts.suspense;
	this.requestPolicy = opts.requestPolicy || 'cache-first';
	let ref = makeSubject();
	let nextOperation = ref.next;
	this.operations$ = ref.source;
	let queuedOperations = [];
	let isDispatching = !1;

	this.dispatchOperation = function(operation) {
		queuedOperations.push(operation);

		if (!isDispatching) {
			isDispatching = !0;
			let queued;

			while (void 0 !== (queued = queuedOperations.shift())) {
				nextOperation(queued);
			}

			isDispatching = !1;
		}
	};

	this.exchange = composeExchanges(
		void 0 !== opts.exchanges ? opts.exchanges : defaultExchanges
	);
	this.results$ = share(
		this.exchange({
			client: this,
			forward: fallbackExchangeIO
		})(this.operations$)
	);
	publish(this.results$);
};

Client.prototype.onOperationStart = function onOperationStart(operation) {
	let key = operation.key;
	this.activeOperations[key] = (this.activeOperations[key] || 0) + 1;
	this.dispatchOperation(operation);
};

Client.prototype.onOperationEnd = function onOperationEnd(operation) {
	let key = operation.key;
	let prevActive = this.activeOperations[key] || 0;

	if (
		(this.activeOperations[key] = prevActive <= 0 ? 0 : prevActive - 1) <= 0
	) {
		this.dispatchOperation(
			_extends(_extends({}, operation), {
				operationName: 'teardown'
			})
		);
	}
};

Client.prototype.executeRequestOperation = function executeRequestOperation(
	operation
) {
	let this$1 = this;
	let key = operation.key;
	let operationName = operation.operationName;
	let operationResults$ = filter(res => res.operation.key === key)(
		this.results$
	);

	if ('mutation' === operationName) {
		return take(1)(
			onStart(() => this$1.dispatchOperation(operation))(operationResults$)
		);
	}

	let teardown$ = filter(
		op => 'teardown' === op.operationName && op.key === key
	)(this.operations$);
	let result$ = onEnd(() => {
		this$1.onOperationEnd(operation);
	})(
		onStart(() => {
			this$1.onOperationStart(operation);
		})(takeUntil(teardown$)(operationResults$))
	);
	return !1 !== operation.context.suspense &&
		this.suspense &&
		'query' === operationName
		? toSuspenseSource(result$)
		: result$;
};

Client.prototype.query = function query(query$1, variables, context) {
	if (!context || 'boolean' != typeof context.suspense) {
		context = _extends(_extends({}, context), {
			suspense: !1
		});
	}

	return withPromise(
		this.executeQuery(createRequest(query$1, variables), context)
	);
};

Client.prototype.mutation = function mutation(query, variables, context) {
	return withPromise(
		this.executeMutation(createRequest(query, variables), context)
	);
};

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
};
