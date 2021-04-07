! function(e) {
    function t(t) {
        for (var n, o, i = t[0], s = t[1], a = 0, l = []; a < i.length; a++) o = i[a], r[o] && l.push(r[o][0]), r[o] = 0;
        for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (e[n] = s[n]);
        for (c && c(t); l.length;) l.shift()()
    }
    var n = {},
        o = {
            1: 0
        },
        r = {
            1: 0
        };

    function i(t) {
        if (n[t]) return n[t].exports;
        var o = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(o.exports, o, o.exports, i), o.l = !0, o.exports
    }
    i.e = function(e) {
        var t = [];
        o[e] ? t.push(o[e]) : 0 !== o[e] && {
            2: 1
        } [e] && t.push(o[e] = new Promise(function(t, n) {
            for (var r = ({
                    0: "sw-bridge",
                    2: "main-app",
                    3: "wc-polyfill"
                } [e] || e) + "." + {
                    0: "31d6c",
                    2: "7e944",
                    3: "31d6c"
                } [e] + ".css", s = i.p + r, a = document.getElementsByTagName("link"), l = 0; l < a.length; l++) {
                var c = (d = a[l]).getAttribute("data-href") || d.getAttribute("href");
                if ("stylesheet" === d.rel && (c === r || c === s)) return t()
            }
            var p = document.getElementsByTagName("style");
            for (l = 0; l < p.length; l++) {
                var d;
                if ((c = (d = p[l]).getAttribute("data-href")) === r || c === s) return t()
            }
            var u = document.createElement("link");
            u.rel = "stylesheet", u.type = "text/css", u.onload = t, u.onerror = function(t) {
                var r = t && t.target && t.target.src || s,
                    i = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                i.code = "CSS_CHUNK_LOAD_FAILED", i.request = r, delete o[e], u.parentNode.removeChild(u), n(i)
            }, u.href = s, document.getElementsByTagName("head")[0].appendChild(u)
        }).then(function() {
            o[e] = 0
        }));
        var n = r[e];
        if (0 !== n)
            if (n) t.push(n[2]);
            else {
                var s = new Promise(function(t, o) {
                    n = r[e] = [t, o]
                });
                t.push(n[2] = s);
                var a, l = document.createElement("script");
                l.charset = "utf-8", l.timeout = 120, i.nc && l.setAttribute("nonce", i.nc), l.src = function(e) {
                    return i.p + "" + ({
                        0: "sw-bridge",
                        2: "main-app",
                        3: "wc-polyfill"
                    } [e] || e) + "." + {
                        0: "6d7ee",
                        2: "2c433",
                        3: "3e064"
                    } [e] + ".js"
                }(e), a = function(t) {
                    l.onerror = l.onload = null, clearTimeout(c);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type),
                                i = t && t.target && t.target.src,
                                s = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + i + ")");
                            s.type = o, s.request = i, n[1](s)
                        }
                        r[e] = void 0
                    }
                };
                var c = setTimeout(function() {
                    a({
                        type: "timeout",
                        target: l
                    })
                }, 12e4);
                l.onerror = l.onload = a, document.head.appendChild(l)
            } return Promise.all(t)
    }, i.m = e, i.c = n, i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, i.t = function(e, t) {
        if (1 & t && (e = i(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) i.d(n, o, function(t) {
                return e[t]
            }.bind(null, o));
        return n
    }, i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return i.d(t, "a", t), t
    }, i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, i.p = "/", i.oe = function(e) {
        throw console.error(e), e
    };
    var s = self.webpackJsonp = self.webpackJsonp || [],
        a = s.push.bind(s);
    s.push = t, s = s.slice();
    for (var l = 0; l < s.length; l++) t(s[l]);
    var c = a;
    i(i.s = 15)
}([function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return a
    }), n.d(t, "a", function() {
        return R
    }), n.d(t, "d", function() {
        return I
    }), n.d(t, "c", function() {
        return r
    });
    var o = function() {},
        r = {},
        i = [],
        s = [];

    function a(e, t) {
        var n, a, l, c, p = s;
        for (c = arguments.length; c-- > 2;) i.push(arguments[c]);
        for (t && null != t.children && (i.length || i.push(t.children), delete t.children); i.length;)
            if ((a = i.pop()) && void 0 !== a.pop)
                for (c = a.length; c--;) i.push(a[c]);
            else "boolean" == typeof a && (a = null), (l = "function" != typeof e) && (null == a ? a = "" : "number" == typeof a ? a = String(a) : "string" != typeof a && (l = !1)), l && n ? p[p.length - 1] += a : p === s ? p = [a] : p.push(a), n = l;
        var d = new o;
        return d.nodeName = e, d.children = p, d.attributes = null == t ? void 0 : t, d.key = null == t ? void 0 : t.key, void 0 !== r.vnode && r.vnode(d), d
    }

    function l(e, t) {
        for (var n in t) e[n] = t[n];
        return e
    }

    function c(e, t) {
        null != e && ("function" == typeof e ? e(t) : e.current = t)
    }
    var p = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;
    var d = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
        u = [];

    function f(e) {
        !e._dirty && (e._dirty = !0) && 1 == u.push(e) && (r.debounceRendering || p)(h)
    }

    function h() {
        for (var e; e = u.pop();) e._dirty && A(e)
    }

    function m(e, t, n) {
        return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && b(e, t.nodeName) : n || e._componentConstructor === t.nodeName
    }

    function b(e, t) {
        return e.normalizedNodeName === t || e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function g(e) {
        var t = l({}, e.attributes);
        t.children = e.children;
        var n = e.nodeName.defaultProps;
        if (void 0 !== n)
            for (var o in n) void 0 === t[o] && (t[o] = n[o]);
        return t
    }

    function v(e) {
        var t = e.parentNode;
        t && t.removeChild(e)
    }

    function _(e, t, n, o, r) {
        if ("className" === t && (t = "class"), "key" === t);
        else if ("ref" === t) c(n, null), c(o, e);
        else if ("class" !== t || r)
            if ("style" === t) {
                if (o && "string" != typeof o && "string" != typeof n || (e.style.cssText = o || ""), o && "object" == typeof o) {
                    if ("string" != typeof n)
                        for (var i in n) i in o || (e.style[i] = "");
                    for (var i in o) e.style[i] = "number" == typeof o[i] && !1 === d.test(i) ? o[i] + "px" : o[i]
                }
            } else if ("dangerouslySetInnerHTML" === t) o && (e.innerHTML = o.__html || "");
        else if ("o" == t[0] && "n" == t[1]) {
            var s = t !== (t = t.replace(/Capture$/, ""));
            t = t.toLowerCase().substring(2), o ? n || e.addEventListener(t, y, s) : e.removeEventListener(t, y, s), (e._listeners || (e._listeners = {}))[t] = o
        } else if ("list" !== t && "type" !== t && !r && t in e) {
            try {
                e[t] = null == o ? "" : o
            } catch (l) {}
            null != o && !1 !== o || "spellcheck" == t || e.removeAttribute(t)
        } else {
            var a = r && t !== (t = t.replace(/^xlink:?/, ""));
            null == o || !1 === o ? a ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof o && (a ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), o) : e.setAttribute(t, o))
        } else e.className = o || ""
    }

    function y(e) {
        return this._listeners[e.type](r.event && r.event(e) || e)
    }
    var C = [],
        w = 0,
        k = !1,
        x = !1;

    function S() {
        for (var e; e = C.shift();) r.afterMount && r.afterMount(e), e.componentDidMount && e.componentDidMount()
    }

    function L(e, t, n, o, r, i) {
        w++ || (k = null != r && void 0 !== r.ownerSVGElement, x = null != e && !("__preactattr_" in e));
        var s = j(e, t, n, o, i);
        return r && s.parentNode !== r && r.appendChild(s), --w || (x = !1, i || S()), s
    }

    function j(e, t, n, o, r) {
        var i = e,
            s = k;
        if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), E(e, !0))), i.__preactattr_ = !0, i;
        var a = t.nodeName;
        if ("function" == typeof a) return function(e, t, n, o) {
            var r = e && e._component,
                i = r,
                s = e,
                a = r && e._componentConstructor === t.nodeName,
                l = a,
                c = g(t);
            for (; r && !l && (r = r._parentComponent);) l = r.constructor === t.nodeName;
            r && l && (!o || r._component) ? (T(r, c, 3, n, o), e = r.base) : (i && !a && (F(i), e = s = null), r = D(t.nodeName, c, n), e && !r.nextBase && (r.nextBase = e, s = null), T(r, c, 1, n, o), e = r.base, s && e !== s && (s._component = null, E(s, !1)));
            return e
        }(e, t, n, o);
        if (k = "svg" === a || "foreignObject" !== a && k, a = String(a), (!e || !b(e, a)) && (i = function(e, t) {
                var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);
                return n.normalizedNodeName = e, n
            }(a, k), e)) {
            for (; e.firstChild;) i.appendChild(e.firstChild);
            e.parentNode && e.parentNode.replaceChild(i, e), E(e, !0)
        }
        var l = i.firstChild,
            c = i.__preactattr_,
            p = t.children;
        if (null == c) {
            c = i.__preactattr_ = {};
            for (var d = i.attributes, u = d.length; u--;) c[d[u].name] = d[u].value
        }
        return !x && p && 1 === p.length && "string" == typeof p[0] && null != l && void 0 !== l.splitText && null == l.nextSibling ? l.nodeValue != p[0] && (l.nodeValue = p[0]) : (p && p.length || null != l) && function(e, t, n, o, r) {
                var i, s, a, l, c, p = e.childNodes,
                    d = [],
                    u = {},
                    f = 0,
                    h = 0,
                    b = p.length,
                    g = 0,
                    _ = t ? t.length : 0;
                if (0 !== b)
                    for (var y = 0; y < b; y++) {
                        var C = p[y],
                            w = C.__preactattr_,
                            k = _ && w ? C._component ? C._component.__key : w.key : null;
                        null != k ? (f++, u[k] = C) : (w || (void 0 !== C.splitText ? !r || C.nodeValue.trim() : r)) && (d[g++] = C)
                    }
                if (0 !== _)
                    for (var y = 0; y < _; y++) {
                        l = t[y], c = null;
                        var k = l.key;
                        if (null != k) f && void 0 !== u[k] && (c = u[k], u[k] = void 0, f--);
                        else if (h < g)
                            for (i = h; i < g; i++)
                                if (void 0 !== d[i] && m(s = d[i], l, r)) {
                                    c = s, d[i] = void 0, i === g - 1 && g--, i === h && h++;
                                    break
                                } c = j(c, l, n, o), a = p[y], c && c !== e && c !== a && (null == a ? e.appendChild(c) : c === a.nextSibling ? v(a) : e.insertBefore(c, a))
                    }
                if (f)
                    for (var y in u) void 0 !== u[y] && E(u[y], !1);
                for (; h <= g;) void 0 !== (c = d[g--]) && E(c, !1)
            }(i, p, n, o, x || null != c.dangerouslySetInnerHTML),
            function(e, t, n) {
                var o;
                for (o in n) t && null != t[o] || null == n[o] || _(e, o, n[o], n[o] = void 0, k);
                for (o in t) "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || _(e, o, n[o], n[o] = t[o], k)
            }(i, t.attributes, c), k = s, i
    }

    function E(e, t) {
        var n = e._component;
        n ? F(n) : (null != e.__preactattr_ && c(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || v(e), O(e))
    }

    function O(e) {
        for (e = e.lastChild; e;) {
            var t = e.previousSibling;
            E(e, !0), e = t
        }
    }
    var P = [];

    function D(e, t, n) {
        var o, r = P.length;
        for (e.prototype && e.prototype.render ? (o = new e(t, n), R.call(o, t, n)) : ((o = new R(t, n)).constructor = e, o.render = N); r--;)
            if (P[r].constructor === e) return o.nextBase = P[r].nextBase, P.splice(r, 1), o;
        return o
    }

    function N(e, t, n) {
        return this.constructor(e, n)
    }

    function T(e, t, n, o, i) {
        e._disable || (e._disable = !0, e.__ref = t.ref, e.__key = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || i ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, o)), o && o !== e.context && (e.prevContext || (e.prevContext = e.context), e.context = o), e.prevProps || (e.prevProps = e.props), e.props = t, e._disable = !1, 0 !== n && (1 !== n && !1 === r.syncComponentUpdates && e.base ? f(e) : A(e, 1, i)), c(e.__ref, e))
    }

    function A(e, t, n, o) {
        if (!e._disable) {
            var i, s, a, c = e.props,
                p = e.state,
                d = e.context,
                u = e.prevProps || c,
                f = e.prevState || p,
                h = e.prevContext || d,
                m = e.base,
                b = e.nextBase,
                v = m || b,
                _ = e._component,
                y = !1,
                k = h;
            if (e.constructor.getDerivedStateFromProps && (p = l(l({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), m && (e.props = u, e.state = f, e.context = h, 2 !== t && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, d) ? y = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, d), e.props = c, e.state = p, e.context = d), e.prevProps = e.prevState = e.prevContext = e.nextBase = null, e._dirty = !1, !y) {
                i = e.render(c, p, d), e.getChildContext && (d = l(l({}, d), e.getChildContext())), m && e.getSnapshotBeforeUpdate && (k = e.getSnapshotBeforeUpdate(u, f));
                var x, j, O = i && i.nodeName;
                if ("function" == typeof O) {
                    var P = g(i);
                    (s = _) && s.constructor === O && P.key == s.__key ? T(s, P, 1, d, !1) : (x = s, e._component = s = D(O, P, d), s.nextBase = s.nextBase || b, s._parentComponent = e, T(s, P, 0, d, !1), A(s, 1, n, !0)), j = s.base
                } else a = v, (x = _) && (a = e._component = null), (v || 1 === t) && (a && (a._component = null), j = L(a, i, d, n || !m, v && v.parentNode, !0));
                if (v && j !== v && s !== _) {
                    var N = v.parentNode;
                    N && j !== N && (N.replaceChild(j, v), x || (v._component = null, E(v, !1)))
                }
                if (x && F(x), e.base = j, j && !o) {
                    for (var R = e, I = e; I = I._parentComponent;)(R = I).base = j;
                    j._component = R, j._componentConstructor = R.constructor
                }
            }
            for (!m || n ? C.push(e) : y || (e.componentDidUpdate && e.componentDidUpdate(u, f, k), r.afterUpdate && r.afterUpdate(e)); e._renderCallbacks.length;) e._renderCallbacks.pop().call(e);
            w || o || S()
        }
    }

    function F(e) {
        r.beforeUnmount && r.beforeUnmount(e);
        var t = e.base;
        e._disable = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;
        var n = e._component;
        n ? F(n) : t && (null != t.__preactattr_ && c(t.__preactattr_.ref, null), e.nextBase = t, v(t), P.push(e), O(t)), c(e.__ref, null)
    }

    function R(e, t) {
        this._dirty = !0, this.context = t, this.props = e, this.state = this.state || {}, this._renderCallbacks = []
    }

    function I(e, t, n) {
        return L(n, e, {}, !1, t, !1)
    }
    l(R.prototype, {
        setState: function(e, t) {
            this.prevState || (this.prevState = this.state), this.state = l(l({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), t && this._renderCallbacks.push(t), f(this)
        },
        forceUpdate: function(e) {
            e && this._renderCallbacks.push(e), A(this, 2)
        },
        render: function() {}
    })
}, function(e, t, n) {
    e.exports = {
        intro: "_3uLm0",
        "logo-container": "_1tHP5",
        logoContainer: "_1tHP5",
        "logo-sizer": "_11aVd",
        logoSizer: "_11aVd",
        logo: "_3KeUT _2H7gL",
        "open-image-guide": "jFBv2",
        openImageGuide: "jFBv2",
        "select-button": "_2bQqx LdCmd",
        selectButton: "_2bQqx LdCmd",
        hide: "_2zg9i",
        demos: "LP6Ak",
        "demo-item": "_20F7o",
        demoItem: "_20F7o",
        "demo-button": "_2Sbsi LdCmd",
        demoButton: "_2Sbsi LdCmd",
        demo: "c8Jzu",
        "demo-img-container": "UoiIq",
        demoImgContainer: "UoiIq",
        "demo-img-aspect": "_3mU2R",
        demoImgAspect: "_3mU2R",
        "demo-icon": "_2JRAR _2H7gL",
        demoIcon: "_2JRAR _2H7gL",
        "demo-description": "_38in7",
        demoDescription: "_38in7",
        "demo-loading": "_2Es9O _2H7gL",
        demoLoading: "_2Es9O _2H7gL",
        "fade-in": "_2grnD",
        fadeIn: "_2grnD",
        "demo-loading-spinner": "_1a_0Z",
        demoLoadingSpinner: "_1a_0Z",
        "related-links": "_3gHf3",
        relatedLinks: "_3gHf3"
    }
}, function(e, t, n) {
    "use strict";

    function o(e, t, n) {
        return {
            get() {
                const e = n.value.bind(this);
                return Object.defineProperty(this, t, {
                    value: e
                }), e
            }
        }
    }

    function r(e, t) {
        const n = `$$ref_${t}`;
        let o = e[n];
        return o || (o = e[n] = n => {
            e[t] = n
        }), o
    }
    n.d(t, "b", function() {
        return o
    }), n.d(t, "c", function() {
        return r
    }), n.d(t, "a", function() {
        return i
    });
    class i extends Blob {
        constructor(e, t, n) {
            super(e, n), this.name = t
        }
    }
}, function(e, t, n) {
    e.exports = {
        "spinner-circle": "_9Jy_H",
        spinnerCircle: "_9Jy_H",
        "spinner-gap-patch": "_1nAjR",
        spinnerGapPatch: "_1nAjR",
        "spinner-circle-clipper": "_3KwQZ",
        spinnerCircleClipper: "_3KwQZ",
        "spinner-left": "_1IY1K",
        spinnerLeft: "_1IY1K",
        "spinner-left-spin": "_1mpA2",
        spinnerLeftSpin: "_1mpA2",
        "spinner-right": "_2NZxO",
        spinnerRight: "_2NZxO",
        "spinner-right-spin": "_2RQWH",
        spinnerRightSpin: "_2RQWH",
        "spinner-fadeout": "_3bQio",
        spinnerFadeout: "_3bQio",
        "spinner-fade-out": "_3nFtW",
        spinnerFadeOut: "_3nFtW",
        "spinner-container": "_3wvSY",
        spinnerContainer: "_3wvSY",
        "spinner-container-rotate": "_31Lah",
        spinnerContainerRotate: "_31Lah",
        "spinner-layer": "_2MZlg",
        spinnerLayer: "_2MZlg",
        "spinner-fill-unfill-rotate": "LmEjw",
        spinnerFillUnfillRotate: "LmEjw"
    }
}, function(e, t, n) {
    e.exports = {
        app: "RJ1hH",
        drop: "_2oPMy",
        "option-pair": "_3jvWF",
        optionPair: "_3jvWF",
        horizontal: "bTfvG",
        vertical: "-ymc_",
        "app-loader": "_1PDsd",
        appLoader: "_1PDsd"
    }
}, function(e, t, n) {
    e.exports = {
        snackbar: "_1aOul",
        "snackbar-show": "_217Ex",
        snackbarShow: "_217Ex",
        "snackbar-hide": "_2yfcY",
        snackbarHide: "_2yfcY",
        text: "_2zHnX",
        button: "_3rrbz",
        "focus-ring": "_3XJyV",
        focusRing: "_3XJyV"
    }
}, function(e, t, n) {
    e.exports = n.p + "logo.af355.svg"
}, function(e, t, n) {
    "use strict";
    var o = n(3);
    customElements.define("loading-spinner", class extends HTMLElement {
        constructor() {
            super(), this._delayTimeout = 0, Promise.resolve().then(() => {
                this.style.display = "none", this.innerHTML = "" + `<div class="${o.spinnerContainer}">` + `<div class="${o.spinnerLayer}">` + `<div class="${o.spinnerCircleClipper} ${o.spinnerLeft}">` + `<div class="${o.spinnerCircle}"></div>` + "</div>" + `<div class="${o.spinnerGapPatch}">` + `<div class="${o.spinnerCircle}"></div>` + "</div>" + `<div class="${o.spinnerCircleClipper} ${o.spinnerRight}">` + `<div class="${o.spinnerCircle}"></div>` + "</div></div></div>"
            })
        }
        disconnectedCallback() {
            this.style.display = "none", clearTimeout(this._delayTimeout)
        }
        connectedCallback() {
            const e = getComputedStyle(this).getPropertyValue("--delay").trim();
            let t = parseFloat(e);
            /\ds$/.test(e) && (t *= 1e3), this._delayTimeout = self.setTimeout(() => {
                this.style.display = ""
            }, t)
        }
    })
}, function(e, t, n) {
    e.exports = n.p + "demo-large-photo.59e24.jpg"
}, function(e, t, n) {
    e.exports = n.p + "demo-artwork.475e2.jpg"
}, function(e, t, n) {
    e.exports = n.p + "demo-device-screen.0ed57.png"
}, function(e, t, n) {
    e.exports = n.p + "icon-demo-large-photo.b20a8.jpg"
}, function(e, t, n) {
    e.exports = n.p + "icon-demo-artwork.83b0c.jpg"
}, function(e, t, n) {
    e.exports = n.p + "icon-demo-device-screen.33fd7.jpg"
}, function(e, t, n) {
    e.exports = n.p + "icon-demo-logo.4bfd6.png"
}, function(e, t, n) {
    "use strict";

    function o() {
        n(17)
    }
    if ("customElements" in self ? o() : n.e(3).then(n.t.bind(null, 18, 7)).then(o), "undefined" == typeof PRERENDER) {
        window.ga = window.ga || ((...e) => (ga.q = ga.q || []).push(e)), ga("create", "UA-128752250-1", "auto"), ga("set", "transport", "beacon"), ga("send", "pageview");
        const e = document.createElement("script");
        e.src = "https://www.google-analytics.com/analytics.js", document.head.appendChild(e)
    }
}, function(e, t, n) {}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(0);
    const r = {
            enumerable: !1,
            configurable: !0,
            get() {
                return this.class
            },
            set(e) {
                this.class = e
            }
        },
        i = o.c.vnode;
    o.c.vnode = e => {
        const t = e.attributes;
        null != t && ("className" in t && (t.class = t.className), "class" in t && Object.defineProperty(t, "className", r)), null != i && i(e)
    };
    n(16);
    var s = n(2),
        a = n(4);

    function l(e, t, n) {
        const o = Array.from(e);
        let r;
        if ("" === t) return r = o.filter(e => "file" === e.kind), n ? r : [r[0]];
        const i = t.toLowerCase().split(",").map(e => e.split("/").map(e => e.trim())).filter(e => 2 === e.length);
        return r = r = o.filter(e => {
            if ("file" !== e.kind) return !1;
            const [t, n] = e.type.toLowerCase().split("/").map(e => e.trim());
            for (const [o, r] of i)
                if (t === o && ("*" === r || n === r)) return !0;
            return !1
        }), !1 === n && (r = [r[0]]), r
    }

    function c(e, t, n) {
        const o = [];
        return l(e.items, t, n).forEach(e => {
            const t = e.getAsFile();
            null !== t && o.push(t)
        }), o
    }
    class p extends Event {
        constructor(e, t) {
            var n;
            super(e, t), this instanceof(n = p) || Object.setPrototypeOf(this, n.prototype), this._files = t.files, this._action = t.action
        }
        get action() {
            return this._action
        }
        get files() {
            return this._files
        }
    }
    customElements.define("file-drop", class extends HTMLElement {
        constructor() {
            super(), this._dragEnterCount = 0, this._onDragEnter = this._onDragEnter.bind(this), this._onDragLeave = this._onDragLeave.bind(this), this._onDrop = this._onDrop.bind(this), this._onPaste = this._onPaste.bind(this), this.addEventListener("dragover", e => e.preventDefault()), this.addEventListener("drop", this._onDrop), this.addEventListener("dragenter", this._onDragEnter), this.addEventListener("dragend", () => this._reset()), this.addEventListener("dragleave", this._onDragLeave), this.addEventListener("paste", this._onPaste)
        }
        get accept() {
            return this.getAttribute("accept") || ""
        }
        set accept(e) {
            this.setAttribute("accept", e)
        }
        get multiple() {
            return this.getAttribute("multiple")
        }
        set multiple(e) {
            this.setAttribute("multiple", e || "")
        }
        _onDragEnter(e) {
            if (this._dragEnterCount += 1, this._dragEnterCount > 1) return;
            if (null === e.dataTransfer) return void this.classList.add("drop-invalid");
            const t = l(e.dataTransfer.items, this.accept, null !== this.multiple);
            this.classList.add(e.dataTransfer && e.dataTransfer.items.length && void 0 === t[0] ? "drop-invalid" : "drop-valid")
        }
        _onDragLeave() {
            this._dragEnterCount -= 1, 0 === this._dragEnterCount && this._reset()
        }
        _onDrop(e) {
            if (e.preventDefault(), null === e.dataTransfer) return;
            this._reset();
            const t = c(e.dataTransfer, this.accept, null !== this.multiple);
            void 0 !== t && this.dispatchEvent(new p("filedrop", {
                action: "drop",
                files: t
            }))
        }
        _onPaste(e) {
            const t = c(e.clipboardData, this.accept, void 0 !== this.multiple);
            void 0 !== t && this.dispatchEvent(new p("filedrop", {
                action: "paste",
                files: t
            }))
        }
        _reset() {
            this._dragEnterCount = 0, this.classList.remove("drop-valid"), this.classList.remove("drop-invalid")
        }
    });
    var d = n(5);

    function u(e, t) {
        const {
            timeout: n = 0,
            actions: o = ["dismiss"]
        } = t, r = document.createElement("div");
        r.className = d.snackbar, r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true"), r.setAttribute("aria-hidden", "false");
        const i = document.createElement("div");
        i.className = d.text, i.textContent = e, r.appendChild(i);
        const s = new Promise(e => {
            let t;
            for (const n of o) {
                const o = document.createElement("button");
                o.className = d.button, o.textContent = n, o.addEventListener("click", () => {
                    clearTimeout(t), e(n)
                }), r.appendChild(o)
            }
            n && (t = self.setTimeout(() => e(""), n))
        });
        return [r, s]
    }
    customElements.define("snack-bar", class extends HTMLElement {
        constructor() {
            super(...arguments), this._snackbars = [], this._processingQueue = !1
        }
        showSnackbar(e, t = {}) {
            return new Promise(n => {
                this._snackbars.push([e, t, n]), this._processingQueue || this._processQueue()
            })
        }
        async _processQueue() {
            for (this._processingQueue = !0; this._snackbars[0];) {
                const [e, t, n] = this._snackbars[0], [o, r] = u(e, t);
                n(r), this.appendChild(o), await r, o.setAttribute("aria-hidden", "true"), await new Promise(e => {
                    o.addEventListener("animationend", () => e())
                }), o.remove(), this._snackbars.shift()
            }
            this._processingQueue = !1
        }
    });
    n(7);
    var f = n(6),
        h = n.n(f),
        m = n(8),
        b = n.n(m),
        g = n(9),
        v = n.n(g),
        _ = n(10),
        y = n.n(_),
        C = n(11),
        w = n.n(C),
        k = n(12),
        x = n.n(k),
        S = n(13),
        L = n.n(S),
        j = n(14),
        E = n.n(j),
        O = n(1),
        P = function(e, t, n, o) {
            var r, i = arguments.length,
                s = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, n, s) : r(t, n)) || s);
            return i > 3 && s && Object.defineProperty(t, n, s), s
        };
    const D = [{
        description: "Large photo (2.8mb)",
        filename: "photo.jpg",
        url: b.a,
        iconUrl: w.a
    }, {
        description: "Artwork (2.9mb)",
        filename: "art.jpg",
        url: v.a,
        iconUrl: x.a
    }, {
        description: "Device screen (1.6mb)",
        filename: "pixel3.png",
        url: y.a,
        iconUrl: L.a
    }, {
        description: "SVG icon (13k)",
        filename: "squoosh.svg",
        url: h.a,
        iconUrl: E.a
    }];
    class N extends o.a {
        constructor() {
            super(...arguments), this.state = {}
        }
        resetFileInput() {
            this.fileInput.value = ""
        }
        onFileChange(e) {
            const t = e.target,
                n = t.files && t.files[0];
            n && (this.resetFileInput(), this.props.onFile(n))
        }
        onButtonClick() {
            this.fileInput.click()
        }
        async onDemoClick(e, t) {
            try {
                this.setState({
                    fetchingDemoIndex: e
                });
                const t = D[e],
                    o = await fetch(t.url).then(e => e.blob()),
                    r = /[^;]*/.exec(o.type)[0],
                    i = new s.a([o], t.filename, {
                        type: r
                    });
                this.props.onFile(i)
            } catch (n) {
                this.setState({
                    fetchingDemoIndex: void 0
                }), this.props.showSnack("Couldn't fetch demo image")
            }
        }
        render({}, {
            fetchingDemoIndex: e
        }) {
            return Object(o.b)("div", {
                class: O.intro
            }, Object(o.b)("div", null, Object(o.b)("div", {
                class: O.logoSizer
            }, Object(o.b)("div", {
                class: O.logoContainer
            }, Object(o.b)("img", {
                src: h.a,
                class: O.logo,
                alt: "Squoosh",
                decoding: "async"
            }))), Object(o.b)("p", {
                class: O.openImageGuide
            }, "Drag & drop or", " ", Object(o.b)("button", {
                class: O.selectButton,
                onClick: this.onButtonClick
            }, "select an image"), Object(o.b)("input", {
                class: O.hide,
                ref: Object(s.c)(this, "fileInput"),
                type: "file",
                onChange: this.onFileChange
            })), Object(o.b)("p", null, "Or try one of these:"), Object(o.b)("ul", {
                class: O.demos
            }, D.map((t, n) => Object(o.b)("li", {
                key: t.url,
                class: O.demoItem
            }, Object(o.b)("button", {
                class: O.demoButton,
                onClick: this.onDemoClick.bind(this, n)
            }, Object(o.b)("div", {
                class: O.demo
            }, Object(o.b)("div", {
                class: O.demoImgContainer
            }, Object(o.b)("div", {
                class: O.demoImgAspect
            }, Object(o.b)("img", {
                class: O.demoIcon,
                src: t.iconUrl,
                alt: "",
                decoding: "async"
            }), e === n && Object(o.b)("div", {
                class: O.demoLoading
            }, Object(o.b)("loading-spinner", {
                class: O.demoLoadingSpinner
            })))), Object(o.b)("div", {
                class: O.demoDescription
            }, t.description))))))), Object(o.b)("ul", {
                class: O.relatedLinks
            }, Object(o.b)("li", null, Object(o.b)("a", {
                href: "https://github.com/GoogleChromeLabs/squoosh/"
            }, "View the code")), Object(o.b)("li", null, Object(o.b)("a", {
                href: "https://github.com/GoogleChromeLabs/squoosh/issues"
            }, "Report a bug")), Object(o.b)("li", null, Object(o.b)("a", {
                href: "https://github.com/GoogleChromeLabs/squoosh/blob/master/README.md#privacy"
            }, "Privacy"))))
        }
    }
    P([s.b], N.prototype, "resetFileInput", null), P([s.b], N.prototype, "onFileChange", null), P([s.b], N.prototype, "onButtonClick", null), P([s.b], N.prototype, "onDemoClick", null);
    var T = function(e, t, n, o) {
        var r, i = arguments.length,
            s = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, n, o);
        else
            for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(t, n, s) : r(t, n)) || s);
        return i > 3 && s && Object.defineProperty(t, n, s), s
    };
    const A = "/editor",
        F = n.e(2).then(n.bind(null, 57)),
        R = n.e(0).then(n.bind(null, 56));

    function I() {
        window.history.back()
    }
    class U extends o.a {
        constructor() {
            super(), this.state = {
                awaitingShareTarget: new URL(location.href).searchParams.has("share-target"),
                isEditorOpen: !1,
                file: void 0,
                Compress: void 0
            }, F.then(e => {
                this.setState({
                    Compress: e.default
                })
            }).catch(() => {
                this.showSnack("Failed to load app")
            }), R.then(async ({
                offliner: e,
                getSharedImage: t
            }) => {
                if (e(this.showSnack), !this.state.awaitingShareTarget) return;
                const n = await t();
                history.replaceState("", "", "/"), this.openEditor(), this.setState({
                    file: n,
                    awaitingShareTarget: !1
                })
            }), document.body.addEventListener("gesturestart", e => {
                e.preventDefault()
            }), window.addEventListener("popstate", this.onPopState)
        }
        onFileDrop({
            files: e
        }) {
            if (!e || 0 === e.length) return;
            const t = e[0];
            this.openEditor(), this.setState({
                file: t
            })
        }
        onIntroPickFile(e) {
            this.openEditor(), this.setState({
                file: e
            })
        }
        showSnack(e, t = {}) {
            if (!this.snackbar) throw Error("Snackbar missing");
            return this.snackbar.showSnackbar(e, t)
        }
        onPopState() {
            this.setState({
                isEditorOpen: location.pathname === A
            })
        }
        openEditor() {
            if (this.state.isEditorOpen) return;
            const e = new URL(location.href);
            e.pathname = A, history.pushState(null, "", e.href), this.setState({
                isEditorOpen: !0
            })
        }
        render({}, {
            file: e,
            isEditorOpen: t,
            Compress: n,
            awaitingShareTarget: r
        }) {
            const i = r || t && !n;
            return Object(o.b)("div", {
                id: "app",
                class: a.app
            }, Object(o.b)("file-drop", {
                accept: "image/*",
                onfiledrop: this.onFileDrop,
                class: a.drop
            }, i ? Object(o.b)("loading-spinner", {
                class: a.appLoader
            }) : t ? n && Object(o.b)(n, {
                file: e,
                showSnack: this.showSnack,
                onBack: I
            }) : Object(o.b)(N, {
                onFile: this.onIntroPickFile,
                showSnack: this.showSnack
            }), Object(o.b)("snack-bar", {
                ref: Object(s.c)(this, "snackbar")
            })))
        }
    }
    T([s.b], U.prototype, "onFileDrop", null), T([s.b], U.prototype, "onIntroPickFile", null), T([s.b], U.prototype, "showSnack", null), T([s.b], U.prototype, "onPopState", null), T([s.b], U.prototype, "openEditor", null);
    let B = document.getElementById("app_root");
    (B = Object(o.d)(Object(o.b)(U, null), document.body, B)).setAttribute("id", "app_root")
}]);
//# sourceMappingURL=first-interaction.21ecd.js.map
