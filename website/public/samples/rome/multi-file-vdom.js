(function(global) {
	"use strict";
	// rome/react.tsx

	function ___R$$priv$rome$react_tsx$createElement(type, props, ...children) {
		return { type: type, props: props, children: children };
	}
	const ___R$rome$react_tsx$default = {
		createElement: ___R$$priv$rome$react_tsx$createElement
	};

	// rome/other.tsx

	const ___R$rome$other_tsx$default = () =>
		___R$rome$react_tsx$default.createElement("h1", null, "Hello World");

	// rome/test.tsx

	const ___R$rome$test_tsx = {};
	async function ___R$$priv$rome$test_tsx$App(props) {
		return ___R$rome$react_tsx$default.createElement(
			"div",
			{ id: "app" },
			await ___R$rome$other_tsx$default()
		);
	}

	___R$$priv$rome$test_tsx$App({}).then(console.log);

	return ___R$rome$test_tsx;
})(typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : this);
