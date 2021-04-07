import { _ as _extends, d as createRequest } from './index-9bb95fa6.js';
export {
	C as CombinedError,
	d as createRequest,
	f as formatDocument,
	b as makeErrorResult,
	m as makeResult,
	s as stringifyVariables
} from './index-9bb95fa6.js';
import { toPromise, scan, switchMap, fromValue, concat, map } from 'wonka';
import { createClient } from './core.js';
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
} from './core.js';
import {
	createContext,
	useContext,
	useState,
	useCallback,
	useMemo,
	useRef
} from 'react';
import { useOperator } from 'react-wonka';
let defaultClient = createClient({
	url: '/graphql'
});
let Context = createContext(defaultClient);
let Provider = Context.Provider;
let Consumer = Context.Consumer;
let hasWarnedAboutDefault = !1;

let useClient = function() {
	let client = useContext(Context);

	if (
		'production' !== process.env.NODE_ENV &&
		client === defaultClient &&
		!hasWarnedAboutDefault
	) {
		hasWarnedAboutDefault = !0;
		console.warn(
			"Default Client: No client has been specified using urql's Provider.This means that urql will be falling back to defaults including making requests to `/graphql`.\nIf that's not what you want, please create a client and add a Provider."
		);
	}

	return client;
};

let initialState = {
	fetching: !1,
	stale: !1,
	error: void 0,
	data: void 0,
	extensions: void 0
};

let useMutation = function(query) {
	let client = useClient();
	let ref = useState(initialState);
	let setState = ref[1];

	function _ref(result) {
		setState({
			fetching: !1,
			stale: !!result.stale,
			data: result.data,
			error: result.error,
			extensions: result.extensions
		});
		return result;
	}

	return [
		ref[0],
		useCallback(
			(variables, context) => {
				setState(
					_extends(_extends({}, initialState), {
						fetching: !0
					})
				);
				let request = createRequest(query, variables);
				return toPromise(client.executeMutation(request, context || {})).then(
					_ref
				);
			},
			[client, query, setState]
		)
	];
};

let useRequest = function(query, variables) {
	let prev = useRef(void 0);
	return useMemo(() => {
		let request = createRequest(query, variables);

		if (void 0 !== prev.current && prev.current.key === request.key) {
			return prev.current;
		}
		prev.current = request;
		return request;
	}, [query, variables]);
};

function _ref(result, partial) {
	return _extends(
		_extends(_extends({}, result), {
			stale: !1
		}),
		partial
	);
}

function _ref2(ref) {
	return {
		fetching: !1,
		stale: !!ref.stale,
		data: ref.data,
		error: ref.error,
		extensions: ref.extensions
	};
}

function _ref3(query$) {
	if (!query$) {
		return fromValue({
			fetching: !1
		});
	}

	return concat([
		fromValue({
			fetching: !0
		}),
		map(_ref2)(query$),
		fromValue({
			fetching: !1
		})
	]);
}

function _ref4(query$$) {
	return scan(_ref, initialState)(switchMap(_ref3)(query$$));
}

let useQuery = function(args) {
	let client = useClient();
	let request = useRequest(args.query, args.variables);
	let makeQuery$ = useCallback(
		opts =>
			client.executeQuery(
				request,
				_extends(
					_extends(
						{
							requestPolicy: args.requestPolicy,
							pollInterval: args.pollInterval
						},
						args.context
					),
					opts
				)
			),
		[client, request, args.requestPolicy, args.pollInterval, args.context]
	);
	let ref = useOperator(
		_ref4,
		useMemo(() => (args.pause ? null : makeQuery$()), [args.pause, makeQuery$]),
		initialState
	);
	let update = ref[1];
	return [
		ref[0],
		useCallback(opts => update(makeQuery$(opts)), [update, makeQuery$])
	];
};

function _ref2$1(ref) {
	return {
		fetching: !0,
		stale: !!ref.stale,
		data: ref.data,
		error: ref.error,
		extensions: ref.extensions
	};
}

function _ref3$1(subscription$) {
	if (!subscription$) {
		return fromValue({
			fetching: !1
		});
	}

	return concat([
		fromValue({
			fetching: !0
		}),
		map(_ref2$1)(subscription$),
		fromValue({
			fetching: !1
		})
	]);
}

let useSubscription = function(args, handler) {
	let client = useClient();
	let handlerRef = useRef(handler);
	handlerRef.current = handler;
	let request = useRequest(args.query, args.variables);
	let makeSubscription$ = useCallback(
		opts =>
			client.executeSubscription(
				request,
				_extends(_extends({}, args.context), opts)
			),
		[client, request, args.context]
	);

	function _ref(result, partial) {
		let handler = handlerRef.current;
		let data =
			void 0 !== partial.data
				? 'function' == typeof handler
					? handler(result.data, partial.data)
					: partial.data
				: result.data;
		return _extends(
			_extends(
				_extends(_extends({}, result), {
					stale: !1
				}),
				partial
			),
			{
				data
			}
		);
	}

	let ref = useOperator(
		subscription$$ =>
			scan(_ref, initialState)(switchMap(_ref3$1)(subscription$$)),
		useMemo(() => (args.pause ? null : makeSubscription$()), [
			args.pause,
			makeSubscription$
		]),
		initialState
	);
	let update = ref[1];
	return [
		ref[0],
		useCallback(opts => update(makeSubscription$(opts)), [
			update,
			makeSubscription$
		])
	];
};

function Mutation(props) {
	let ref = useMutation(props.query);
	let executeMutation = ref[1];
	return props.children(
		_extends(_extends({}, ref[0]), {
			executeMutation
		})
	);
}

function Query(props) {
	let ref = useQuery(props);
	let executeQuery = ref[1];
	return props.children(
		_extends(_extends({}, ref[0]), {
			executeQuery
		})
	);
}

function Subscription(props) {
	let ref = useSubscription(props, props.handler);
	let executeSubscription = ref[1];
	return props.children(
		_extends(_extends({}, ref[0]), {
			executeSubscription
		})
	);
}

export {
	Consumer,
	Context,
	Mutation,
	Provider,
	Query,
	Subscription,
	useClient,
	useMutation,
	useQuery,
	useSubscription
};
