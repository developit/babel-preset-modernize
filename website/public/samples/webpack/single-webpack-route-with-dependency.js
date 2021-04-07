(window.webpackJsonp = window.webpackJsonp || []).push([
	[0], {
		0: function(e, n, o) {
			function createElement(type, props, ...children) {
				return {
					type,
					props,
					children
				};
			}

			o.d(n, 'a', function() {
				return createElement;
			});
			o.d(n, 'default', function() {
				return 42;
			});
			// n.v = 1;
		},
		4: function(e, n, o) {
			"use strict";

			o.r(n), o.d(n, "default", function() {
				return i;
			});
			var t = o(0);
			console.log(t.default);
			var x = Object(t.a)("b", null, "yes");

			function i() {
				return Object(t.a)("div", {
					id: "home"
				}, Object(t.a)("pre", null, "Is this a lovely website?", x));
			}
		}
	}
]);
