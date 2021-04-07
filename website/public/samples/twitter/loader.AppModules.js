(window.webpackJsonp = window.webpackJsonp || []).push([
    [132], {
        "+Aie": function(e, t, n) {
            var i;
            ! function(s, o, r) {
                if (s) {
                    for (var a, c = {
                            8: "backspace",
                            9: "tab",
                            13: "enter",
                            16: "shift",
                            17: "ctrl",
                            18: "alt",
                            20: "capslock",
                            27: "esc",
                            32: "space",
                            33: "pageup",
                            34: "pagedown",
                            35: "end",
                            36: "home",
                            37: "left",
                            38: "up",
                            39: "right",
                            40: "down",
                            45: "ins",
                            46: "del",
                            91: "meta",
                            93: "meta",
                            224: "meta"
                        }, l = {
                            106: "*",
                            107: "+",
                            109: "-",
                            110: ".",
                            111: "/",
                            186: ";",
                            187: "=",
                            188: ",",
                            189: "-",
                            190: ".",
                            191: "/",
                            192: "`",
                            219: "[",
                            220: "\\",
                            221: "]",
                            222: "'"
                        }, u = {
                            "~": "`",
                            "!": "1",
                            "@": "2",
                            "#": "3",
                            $: "4",
                            "%": "5",
                            "^": "6",
                            "&": "7",
                            "*": "8",
                            "(": "9",
                            ")": "0",
                            _: "-",
                            "+": "=",
                            ":": ";",
                            '"': "'",
                            "<": ",",
                            ">": ".",
                            "?": "/",
                            "|": "\\"
                        }, h = {
                            option: "alt",
                            command: "meta",
                            return: "enter",
                            escape: "esc",
                            plus: "+",
                            mod: /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? "meta" : "ctrl"
                        }, d = 1; d < 20; ++d) c[111 + d] = "f" + d;
                    for (d = 0; d <= 9; ++d) c[d + 96] = d.toString();
                    g.prototype.bind = function(e, t, n) {
                        return e = e instanceof Array ? e : [e], this._bindMultiple.call(this, e, t, n), this
                    }, g.prototype.unbind = function(e, t) {
                        return this.bind.call(this, e, (function() {}), t)
                    }, g.prototype.trigger = function(e, t) {
                        return this._directMap[e + ":" + t] && this._directMap[e + ":" + t]({}, e), this
                    }, g.prototype.reset = function() {
                        return this._callbacks = {}, this._directMap = {}, this
                    }, g.prototype.stopCallback = function(e, t) {
                        if ((" " + t.className + " ").indexOf(" mousetrap ") > -1) return !1;
                        if (function e(t, n) {
                                return null !== t && t !== o && (t === n || e(t.parentNode, n))
                            }(t, this.target)) return !1;
                        if ("composedPath" in e && "function" == typeof e.composedPath) {
                            var n = e.composedPath()[0];
                            n !== e.target && (t = n)
                        }
                        return "INPUT" == t.tagName || "SELECT" == t.tagName || "TEXTAREA" == t.tagName || t.isContentEditable
                    }, g.prototype.handleKey = function() {
                        var e = this;
                        return e._handleKey.apply(e, arguments)
                    }, g.addKeycodes = function(e) {
                        for (var t in e) e.hasOwnProperty(t) && (c[t] = e[t]);
                        a = null
                    }, g.init = function() {
                        var e = g(o);
                        for (var t in e) "_" !== t.charAt(0) && (g[t] = function(t) {
                            return function() {
                                return e[t].apply(e, arguments)
                            }
                        }(t))
                    }, g.init(), s.Mousetrap = g, e.exports && (e.exports = g), void 0 === (i = function() {
                        return g
                    }.call(t, n, t, e)) || (e.exports = i)
                }

                function p(e, t, n) {
                    e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
                }

                function m(e) {
                    if ("keypress" == e.type) {
                        var t = String.fromCharCode(e.which);
                        return e.shiftKey || (t = t.toLowerCase()), t
                    }
                    return c[e.which] ? c[e.which] : l[e.which] ? l[e.which] : String.fromCharCode(e.which).toLowerCase()
                }

                function b(e) {
                    return "shift" == e || "ctrl" == e || "alt" == e || "meta" == e
                }

                function f(e, t, n) {
                    return n || (n = function() {
                        if (!a)
                            for (var e in a = {}, c) e > 95 && e < 112 || c.hasOwnProperty(e) && (a[c[e]] = e);
                        return a
                    }()[e] ? "keydown" : "keypress"), "keypress" == n && t.length && (n = "keydown"), n
                }

                function _(e, t) {
                    var n, i, s, o = [];
                    for (n = function(e) {
                            return "+" === e ? ["+"] : (e = e.replace(/\+{2}/g, "+plus")).split("+")
                        }(e), s = 0; s < n.length; ++s) i = n[s], h[i] && (i = h[i]), t && "keypress" != t && u[i] && (i = u[i], o.push("shift")), b(i) && o.push(i);
                    return {
                        key: i,
                        modifiers: o,
                        action: t = f(i, o, t)
                    }
                }

                function g(e) {
                    var t = this;
                    if (e = e || o, !(t instanceof g)) return new g(e);
                    t.target = e, t._callbacks = {}, t._directMap = {};
                    var n, i = {},
                        s = !1,
                        r = !1,
                        a = !1;

                    function c(e) {
                        e = e || {};
                        var t, n = !1;
                        for (t in i) e[t] ? n = !0 : i[t] = 0;
                        n || (a = !1)
                    }

                    function l(e, n, s, o, r, a) {
                        var c, l, u, h, d = [],
                            p = s.type;
                        if (!t._callbacks[e]) return [];
                        for ("keyup" == p && b(e) && (n = [e]), c = 0; c < t._callbacks[e].length; ++c)
                            if (l = t._callbacks[e][c], (o || !l.seq || i[l.seq] == l.level) && p == l.action && ("keypress" == p && !s.metaKey && !s.ctrlKey || (u = n, h = l.modifiers, u.sort().join(",") === h.sort().join(",")))) {
                                var m = !o && l.combo == r,
                                    f = o && l.seq == o && l.level == a;
                                (m || f) && t._callbacks[e].splice(c, 1), d.push(l)
                            } return d
                    }

                    function u(e, n, i, s) {
                        t.stopCallback(n, n.target || n.srcElement, i, s) || !1 === e(n, i) && (function(e) {
                            e.preventDefault ? e.preventDefault() : e.returnValue = !1
                        }(n), function(e) {
                            e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
                        }(n))
                    }

                    function h(e) {
                        "number" != typeof e.which && (e.which = e.keyCode);
                        var n = m(e);
                        n && ("keyup" != e.type || s !== n ? t.handleKey(n, function(e) {
                            var t = [];
                            return e.shiftKey && t.push("shift"), e.altKey && t.push("alt"), e.ctrlKey && t.push("ctrl"), e.metaKey && t.push("meta"), t
                        }(e), e) : s = !1)
                    }

                    function d(e, t, o, r) {
                        function l(t) {
                            return function() {
                                a = t, ++i[e], clearTimeout(n), n = setTimeout(c, 1e3)
                            }
                        }

                        function h(t) {
                            u(o, t, e), "keyup" !== r && (s = m(t)), setTimeout(c, 10)
                        }
                        i[e] = 0;
                        for (var d = 0; d < t.length; ++d) {
                            var p = d + 1 === t.length ? h : l(r || _(t[d + 1]).action);
                            f(t[d], p, r, e, d)
                        }
                    }

                    function f(e, n, i, s, o) {
                        t._directMap[e + ":" + i] = n;
                        var r, a = (e = e.replace(/\s+/g, " ")).split(" ");
                        a.length > 1 ? d(e, a, n, i) : (r = _(e, i), t._callbacks[r.key] = t._callbacks[r.key] || [], l(r.key, r.modifiers, {
                            type: r.action
                        }, s, e, o), t._callbacks[r.key][s ? "unshift" : "push"]({
                            callback: n,
                            modifiers: r.modifiers,
                            action: r.action,
                            seq: s,
                            level: o,
                            combo: e
                        }))
                    }
                    t._handleKey = function(e, t, n) {
                        var i, s = l(e, t, n),
                            o = {},
                            h = 0,
                            d = !1;
                        for (i = 0; i < s.length; ++i) s[i].seq && (h = Math.max(h, s[i].level));
                        for (i = 0; i < s.length; ++i)
                            if (s[i].seq) {
                                if (s[i].level != h) continue;
                                d = !0, o[s[i].seq] = 1, u(s[i].callback, n, s[i].combo, s[i].seq)
                            } else d || u(s[i].callback, n, s[i].combo);
                        var p = "keypress" == n.type && r;
                        n.type != a || b(e) || p || c(o), r = d && "keydown" == n.type
                    }, t._bindMultiple = function(e, t, n) {
                        for (var i = 0; i < e.length; ++i) f(e[i], t, n)
                    }, p(e, "keypress", h), p(e, "keydown", h), p(e, "keyup", h)
                }
            }("undefined" != typeof window ? window : null, "undefined" != typeof window ? document : null)
        },
        "6oVL": function(e, t, n) {
            "use strict";
            n("MvUL"), n("Ysgh"), n("kYxP");
            var i = n("KEM+"),
                s = n.n(i),
                o = n("ERkP"),
                r = n("s9SB"),
                a = n.n(r),
                c = n("3XMw"),
                l = n.n(c),
                u = n("cnVF"),
                h = n("Ukpf"),
                d = n("BTou"),
                p = n("mrHL"),
                m = "LoginForm_Login_Button",
                b = n("fEA7"),
                f = n.n(b),
                _ = n("MWbm"),
                g = n("Irs7"),
                y = n("/yvb"),
                S = n("rHpw");
            const v = l.a.e919c3bc;
            class w extends o.Component {
                constructor(...e) {
                    super(...e), s()(this, "_mobileLoginToken", f.a.v1().replace(/-/g, "")), s()(this, "_handleSubmit", () => {
                        const {
                            analytics: e,
                            deregisterServiceWorkerBeforeSubmit: t,
                            onSubmit: n
                        } = this.props;
                        return e.scribe({
                            action: "submit"
                        }), t ? (d.a.deregisterServiceWorker(() => {
                            this._setLoginCookie(), n ? n(this._form.elements) : this._form.submit()
                        }), !1) : (d.a.flushHTMLCache(), this._setLoginCookie(), n ? (n(this._form.elements), !1) : void 0)
                    }), s()(this, "_handleSubmitButtonClick", () => {
                        !1 !== this._handleSubmit() && this._form.submit()
                    }), s()(this, "_setFormRef", e => {
                        e && (this._form = e)
                    }), s()(this, "_setLoginCookie", () => {
                        const e = new Date(Date.now());
                        e.setTime(e.getTime() + 3e5), Object(p.b)(a.a.serialize(u.o, this._mobileLoginToken, {
                            domain: void 0,
                            expires: e,
                            path: "/",
                            secure: !0
                        }))
                    })
                }
                componentDidUpdate(e) {
                    this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                }
                componentDidMount() {
                    h.a.inject("https://twitter.com/i/js_inst?c_name=ui_metrics")
                }
                render() {
                    const {
                        children: e,
                        hideSubmitButton: t,
                        horizontalLayout: n,
                        formActionUrl: i,
                        loginReturnPath: s,
                        submitButtonDisabled: r,
                        submitButtonLabel: a,
                        submitButtonSize: c,
                        submitButtonStyle: l,
                        submitButtonType: u
                    } = this.props, [h, d] = "string" == typeof s ? s.split("?") : [], p = `${encodeURI(h||"/")}${d?"?"+d:""}`, b = o.createElement(_.a, {
                        style: n && E.horizontalFields
                    }, o.createElement("input", {
                        name: "redirect_after_login",
                        type: "hidden",
                        value: p
                    }), o.createElement("input", {
                        name: "remember_me",
                        type: "hidden",
                        value: "1"
                    }), o.createElement("input", {
                        name: "authenticity_token",
                        type: "hidden",
                        value: this._mobileLoginToken
                    }), o.createElement("input", {
                        name: "wfa",
                        type: "hidden",
                        value: "1"
                    }), o.createElement("input", {
                        autoComplete: "off",
                        name: "ui_metrics",
                        type: "hidden"
                    }), e, t ? null : o.createElement(_.a, {
                        style: n && E.loginButtonContainer
                    }, o.createElement(y.a, {
                        disabled: r,
                        onPress: this._handleSubmitButtonClick,
                        size: c,
                        style: l,
                        testID: m,
                        type: u
                    }, a)));
                    return o.createElement(_.a, {
                        style: E.loginForm
                    }, o.createElement("form", {
                        action: i,
                        children: b,
                        method: "post",
                        noValidate: !0,
                        onSubmit: this._handleSubmit,
                        ref: this._setFormRef
                    }))
                }
            }
            s()(w, "defaultProps", {
                autoSubmit: !1,
                deregisterServiceWorkerBeforeSubmit: !1,
                formActionUrl: "/sessions",
                hideSubmitButton: !1,
                submitButtonDisabled: !1,
                submitButtonLabel: v,
                submitButtonType: "primary"
            });
            const E = S.a.create(e => ({
                horizontalFields: {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "stretch"
                },
                loginForm: {
                    width: "100%"
                },
                loginButtonContainer: {
                    flexDirection: "column",
                    justifyContent: "center"
                }
            }));
            t.a = Object(g.a)(w, {
                element: "inline_login_form"
            })
        },
        Ukpf: function(e, t, n) {
            "use strict";
            const i = {
                inject(e) {
                    const t = document.createElement("script");
                    t.async = !0, t.src = e;
                    const n = document.body;
                    n && n.appendChild(t)
                }
            };
            t.a = i
        },
        aD6h: function(e, t, n) {
            "use strict";
            var i = n("KEM+"),
                s = n.n(i),
                o = n("ERkP"),
                r = n("Hde2"),
                a = n("yt7X"),
                c = n("496R");
            class l extends o.PureComponent {
                render() {
                    return this.props.hideEUBanner ? null : o.createElement(r.a, null, o.createElement(a.a, null))
                }
            }
            s()(l, "defaultProps", {
                hideEUBanner: !1
            }), t.a = Object(c.a)(l)
        },
        donR: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "inputDetect", (function() {
                return mt
            })), n.d(t, "BottomEUBanner", (function() {
                return bt
            })), n.d(t, "DtabBar", (function() {
                return ft
            })), n.d(t, "GlobalKeyboardShortcuts", (function() {
                return _t
            })), n.d(t, "LivePipeline", (function() {
                return gt
            })), n.d(t, "ModalSheet", (function() {
                return yt
            })), n.d(t, "SmartLockPrompt", (function() {
                return St
            })), n.d(t, "Seo", (function() {
                return vt
            })), n.d(t, "Toast", (function() {
                return wt
            })), n.d(t, "appReloader", (function() {
                return Et
            })), n.d(t, "badgeTimers", (function() {
                return kt
            })), n.d(t, "bindKeyboardShortcuts", (function() {
                return Tt
            })), n.d(t, "ie11Reflower", (function() {
                return Ct
            })), n.d(t, "multiAccountListFetcher", (function() {
                return It
            })), n.d(t, "redirectEmailUser", (function() {
                return Pt
            })), n.d(t, "scribeExternalReferer", (function() {
                return Ot
            })), n.d(t, "getScreenReaderShortcutsDataAttribute", (function() {
                return Lt
            })), n.d(t, "altSvc", (function() {
                return Dt
            })), n.d(t, "AppInstallOnLandingPrompt", (function() {
                return At
            }));
            var i = {};
            n.r(i), n.d(i, "initialize", (function() {
                return g
            })), n.d(i, "detectedTypes", (function() {
                return y
            })), n.d(i, "detectedType", (function() {
                return S
            })), n.d(i, "register", (function() {
                return v
            })), n.d(i, "registerSome", (function() {
                return w
            })), n.d(i, "registerEvery", (function() {
                return E
            })), n.d(i, "unregister", (function() {
                return k
            })), n.d(i, "reset", (function() {
                return T
            })), n.d(i, "KEYBOARD", (function() {
                return l
            })), n.d(i, "MOUSE", (function() {
                return u
            })), n.d(i, "_private", (function() {
                return C
            }));
            var s = n("3+LL"),
                o = n("KEM+"),
                r = n.n(o),
                a = n("z0MJ"),
                c = n.n(a);
            const l = "keyboard",
                u = "mouse",
                h = ["textarea", "input"];
            let d = [];
            const p = {
                [l]: !1,
                [u]: !1
            };
            class m {
                constructor(e) {
                    r()(this, "_handleTimerEnd", () => {
                        this._count >= 3 && this._handleDetected(), this._reset()
                    }), r()(this, "_handleDetected", () => {
                        this._reset(), this.detach(), this.detected()
                    }), r()(this, "_reset", () => {
                        clearTimeout(this._timer), this._timer = void 0, this._count = 0
                    }), r()(this, "_handleMouseMove", () => {
                        this._count = this._count + 1, this._count >= 3 ? this._handleDetected() : this._timer || (this._timer = setTimeout(this._handleTimerEnd, 500))
                    }), r()(this, "attach", () => {
                        document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("touchend", this._reset)
                    }), r()(this, "detach", () => {
                        document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("touchend", this._reset)
                    }), this.detected = e, this._count = 0
                }
            }
            class b {
                constructor(e) {
                    r()(this, "_handleKeyDown", e => {
                        const {
                            altKey: t,
                            ctrlKey: n,
                            metaKey: i,
                            target: s = {}
                        } = e, o = s instanceof HTMLInputElement ? s.nodeName : void 0;
                        (t || n || i || !((e = "") => -1 !== h.indexOf(e.toLowerCase()))(o)) && (this.detach(), this.detected())
                    }), r()(this, "attach", () => {
                        document.addEventListener("keydown", this._handleKeyDown)
                    }), r()(this, "detach", () => {
                        document.removeEventListener("keydown", this._handleKeyDown)
                    }), this.detected = e
                }
            }

            function f(e) {
                p[e] = !0;
                const t = d.filter(({
                        matches: e
                    }) => e()),
                    n = d.filter(({
                        matches: e
                    }) => !e());
                d = n, t.forEach(({
                    callback: e
                }) => e())
            }
            let _;
            const g = () => {
                    _ = [new b(() => f(l)), new m(() => f(u))], _.forEach(e => e.attach())
                },
                y = () => Object.keys(p).filter(e => p[e]),
                S = e => p[e],
                v = (e, t) => {
                    const n = () => p[t];
                    n() ? c()(e) : d.push({
                        matches: n,
                        callback: e
                    })
                },
                w = (e, t) => {
                    const n = () => t.some(e => p[e]);
                    n() ? c()(e) : d.push({
                        matches: n,
                        callback: e
                    })
                },
                E = (e, t) => {
                    const n = () => t.every(e => p[e]);
                    n() ? c()(e) : d.push({
                        matches: n,
                        callback: e
                    })
                },
                k = e => {
                    const t = d.indexOf(e);
                    t > -1 && d.splice(t, 1)
                },
                T = () => {
                    d = [], Object.keys(p).forEach(e => {
                        p[e] = !1
                    }), _.forEach(e => e.detach())
                },
                C = {
                    MOUSE_INTERVAL_TIME_IN_MS: 500,
                    SUCCESSIVE_MOUSE_EVENTS: 3,
                    detected: f
                };
            var I = n("0KEI");
            var P = (e, t, n) => {
                    if (e.isTrue("responsive_web_alt_svc")) {
                        const e = n(Object(I.d)("APP_INITIALIZATION_ALT_SVC")({}));
                        t.AltSvc.fetch().catch(e)
                    }
                },
                O = n("ERkP"),
                L = n("v6aA"),
                D = (n("x4t0"), n("rxPX"));
            const A = (e, t) => t.location.pathname.includes("/intent/"),
                x = (e, t) => t.location.pathname.includes("/login");
            var R = Object(D.a)().propsFromState(() => ({
                    isIntentRoute: A,
                    isLoginRoute: x
                })).adjustStateProps(({
                    isIntentRoute: e,
                    isLoginRoute: t
                }) => ({
                    hideAppPrompt: e || t
                })),
                B = n("wrlS"),
                M = n("RxYA"),
                U = n("TnY3");
            class j extends O.Component {
                constructor(e, t) {
                    super(e, t), r()(this, "_handleClose", () => {
                        this.setState({
                            showPrompt: !1
                        })
                    });
                    const {
                        loggedInUserId: n
                    } = this.context, i = !e.hideAppPrompt && !n && B.b.isTrue("responsive_web_use_app_prompt_enabled");
                    this.state = {
                        showPrompt: i
                    }
                }
                render() {
                    return this.state.showPrompt ? O.createElement(M.a, {
                        onClose: this._handleClose,
                        onlyShowOnce: !0,
                        useBottomBanner: !0
                    }) : null
                }
            }
            r()(j, "contextType", L.a);
            var N = Object(U.a)(R(j)),
                K = n("RqPI"),
                F = n("k49u"),
                z = n("2g+p"),
                H = n("auX9"),
                W = n("fs1G"),
                X = n("sJRb"),
                q = n("B5iK"),
                Y = n("l0YN");
            const V = (e, t = 1e3) => {
                window.requestIdleCallback ? window.requestIdleCallback(() => e.fire()) : setTimeout(() => e.fire(), t)
            };
            var G = e => {
                    if (!K.e(e.getState())) return;
                    const t = e.dispatch(Object(I.d)("BADGE_TIMERS")({
                            showToast: !1,
                            [F.a.AccessDeniedByBouncer]: {
                                customAction: W.a
                            }
                        })),
                        n = n => e.dispatch(n).catch(t),
                        i = new q.b(3e4).interval(() => {
                            "background" !== z.a.currentState && (n(Object(Y.b)()), Object(H.b)(e.getState()).forEach(n))
                        });
                    i.start(), V(i);
                    const s = new q.b(3e4).interval(() => {
                        "background" !== z.a.currentState && e.dispatch(X.b.fetchInitialOrTop({
                            polling: !0
                        })).catch(t)
                    });
                    s.start(), V(s);
                    z.a.addEventListener("change", e => {
                        "active" === e && (V(i), V(s))
                    })
                },
                J = n("+Aie"),
                Z = n.n(J);
            var $ = n("aD6h"),
                Q = (n("DZ+c"), n("kYxP"), n("Cm4o"), n("Hde2")),
                ee = n("P1r1"),
                te = Object(D.a)().propsFromState(() => ({
                    dtabBarInfo: ee.l
                })).adjustStateProps(({
                    dtabBarInfo: e
                }) => ({
                    dtabAll: e && e.dtabAll,
                    dtabRweb: e && e.dtabRweb,
                    hide: e && e.hide,
                    ttsToken: e && e.ttsToken
                })).propsFromActions(() => ({
                    setDtabBarInfo: ee.A
                })),
                ne = n("8jkQ"),
                ie = n("/yvb"),
                se = n("mw9i"),
                oe = n("t62R"),
                re = n("rHpw");
            class ae extends O.PureComponent {
                constructor(e, t) {
                    super(e, t), r()(this, "_renderButtons", () => O.createElement(O.Fragment, null, O.createElement(ie.a, {
                        onClick: this._handleInfo,
                        size: "small",
                        type: "destructive"
                    }, "Info"), O.createElement(ie.a, {
                        onClick: this._handleClear,
                        size: "small",
                        type: "destructive"
                    }, "Clear"), O.createElement(ie.a, {
                        onClick: this._handleClose,
                        size: "small",
                        type: "destructive"
                    }, "Hide"))), r()(this, "_handleInfo", () => {
                        const e = this._getOverrides();
                        window.prompt(e.join("\n"), window.encodeURIComponent(e.join(";")))
                    }), r()(this, "_getOverrides", () => {
                        const {
                            dtabAll: e,
                            ttsToken: t
                        } = this.props;
                        let n = [];
                        return e && !t ? n = e : t && (n = ["tts_token=" + t]), n.filter(e => !!e)
                    }), r()(this, "_handleClear", () => {
                        const e = "OK to clear overrides?\n" + this._getOverrides().join("\n");
                        if (window.confirm(e)) {
                            const e = new URL(ne.b.get());
                            e.searchParams.set("dtab_local", ""), e.searchParams.set("tts_token", ""), ne.b.navigateTo(e.toString())
                        }
                    }), r()(this, "_handleClose", () => {
                        const {
                            dtabAll: e,
                            dtabRweb: t,
                            ttsToken: n,
                            setDtabBarInfo: i
                        } = this.props;
                        this.setState({
                            show: !1
                        }), i({
                            dtabAll: e,
                            dtabRweb: t,
                            ttsToken: n,
                            hide: !0
                        })
                    }), r()(this, "_shouldShow", () => {
                        const {
                            dtabAll: e,
                            ttsToken: t,
                            hide: n
                        } = this.props;
                        return !(n || !e && !t)
                    }), this.state = {
                        show: this._shouldShow()
                    }
                }
                render() {
                    const {
                        dtabAll: e,
                        ttsToken: t
                    } = this.props, n = t || e ? O.createElement(Q.a, {
                        style: ce.root
                    }, O.createElement(se.a, {
                        isLarge: !0,
                        style: ce.container,
                        withGutter: !0
                    }, O.createElement(oe.c, {
                        color: "whiteOnColor",
                        numberOfLines: 1,
                        size: "small",
                        style: ce.text
                    }, "Staging override is active"), this._renderButtons())) : null;
                    return this.state.show ? n : null
                }
            }
            r()(ae, "defaultProps", {
                hide: !1
            });
            const ce = re.a.create(e => ({
                root: {
                    backgroundColor: e.colors.red
                },
                container: {
                    alignItems: "center",
                    flexDirection: "row",
                    height: e.spaces.xLarge,
                    justifyContent: "space-between"
                },
                text: {
                    width: "100%"
                }
            }));
            var le = te(ae),
                ue = n("OrGc"),
                he = n("rRIm"),
                de = n("aITJ");
            var pe = {
                    init: e => {
                        const t = t => {
                            if ("active" === t && e && e.body) {
                                const t = e.body.style.display;
                                e.body.style.display = "none", e.body.clientHeight, e.body.style.display = t
                            }
                        };
                        de.a.isDesktopOS() && de.a.isIE() && z.a.addEventListener("change", t)
                    }
                },
                me = (n("JtPf"), n("pXBW")),
                be = n("nS6Z");

            function fe(e) {
                return e.json().then(e => e.errors.some(e => 392 === e.code))
            }

            function _e({
                promiseFactory: e,
                condition: t,
                sideEffect: n
            }) {
                return (...i) => {
                    const s = e(...i);
                    return s.then(t).then(e => {
                        e && n()
                    }).then(() => s, () => s)
                }
            }

            function ge(e) {
                return Object.keys(ye(e))
            }

            function ye(e) {
                return e.reduce((e, t) => (e[t] = !0, e), {})
            }
            class Se {
                constructor({
                    makeEventSource: e,
                    callback: t,
                    topics: n
                }) {
                    r()(this, "topics", []), r()(this, "backoffDuration", 0), r()(this, "_handleMessage", ({
                        data: e
                    }) => {
                        try {
                            const t = JSON.parse(e);
                            this.connection && "/system/config" === t.topic && (this.connection.hasConfig = !0), this.callback(t)
                        } catch (e) {}
                    }), r()(this, "_handleError", () => {
                        if (!this.connection || this.connection.eventSource.readyState === this.connection.eventSource.OPEN) return;
                        const e = this.connection;
                        e && e.eventSource.readyState === e.eventSource.CONNECTING && function(e, t) {
                            const n = ye(e),
                                i = Object.keys(n),
                                s = ge(t);
                            return i.length === s.length && s.every(e => n[e])
                        }(e.topics, this._getTopicsForAutoSubscribe()) || (this._cleanup(), this.connection && this.connection.hasConfig ? this.backoffDuration = 1e3 : this.backoffDuration = Math.max(1e3, Math.min(2 * this.backoffDuration, 6e4)), this.backoffTimeoutId = setTimeout(this._connect, this.backoffDuration * (.5 + Math.random())))
                    }), r()(this, "_connect", () => {
                        this._cleanup();
                        const e = this._getTopicsForAutoSubscribe();
                        this.makeEventSource(e).then(t => {
                            if ("object" != typeof t) throw new Error("EventSource must be defined");
                            t.addEventListener("message", this._handleMessage), t.addEventListener("error", this._handleError), this.connection = {
                                eventSource: t,
                                topics: e,
                                hasConfig: !1
                            }
                        }).catch(() => {
                            this._handleError()
                        })
                    }), this.makeEventSource = e, this.callback = t, this.setTopics(n), this._connect()
                }
                setTopics(e) {
                    this.topics = e
                }
                getAutoSubscribedTopics() {
                    return this.connection ? this.connection.topics : []
                }
                _getTopicsForAutoSubscribe() {
                    return this.topics.slice(0, Se.MAX_AUTO_SUBSCRIBE_TOPICS)
                }
                _cleanup() {
                    const e = this.connection;
                    e && (e.eventSource.removeEventListener("message", this._handleMessage), e.eventSource.removeEventListener("error", this._handleError), e.eventSource.close(), this.connection = null), clearTimeout(this.backoffTimeoutId)
                }
                teardown() {
                    this._cleanup()
                }
            }
            r()(Se, "MAX_AUTO_SUBSCRIBE_TOPICS", 20);
            var ve = n("+d3d");
            class we {
                constructor(e) {
                    r()(this, "sessionId", ""), r()(this, "pendingState", {
                        topics: [],
                        forceSubscribeAll: !1
                    }), r()(this, "appliedState", {
                        topics: []
                    }), r()(this, "setTopics", (e = []) => {
                        this.pendingState.topics = ge(e), this._applyPendingState()
                    }), r()(this, "_subscribeAll", () => {
                        this.pendingState.forceSubscribeAll = !0, this._applyPendingState()
                    }), r()(this, "_applyPendingState", () => {
                        const e = this.pendingState.forceSubscribeAll ? this.pendingState.topics : this.pendingState.topics.filter(e => -1 === this.appliedState.topics.indexOf(e)),
                            t = this.appliedState.topics.filter(e => -1 === this.pendingState.topics.indexOf(e)),
                            n = !this.sessionId,
                            i = 0 === e.length && 0 === t.length;
                        n || i || (this.appliedState = {
                            topics: this.pendingState.topics
                        }, this.pendingState = {
                            topics: this.appliedState.topics,
                            forceSubscribeAll: !1
                        }, this.updateSubscriptions({
                            toSubscribe: e,
                            toUnsubscribe: t,
                            sessionId: this.sessionId
                        }))
                    });
                    const {
                        updateSubscriptions: t,
                        throttlePeriod: n = we.UPDATE_SUBSCRIPTIONS_THROTTLE
                    } = e;
                    this.updateSubscriptions = t, this.throttlePeriod = n, null !== n && n >= 0 && (this._applyPendingState = Object(ve.a)(this._applyPendingState, n, {
                        leading: !1
                    }))
                }
                setConfig(e = null, t = []) {
                    if (clearInterval(this.intervalId), !e || !e.config) return;
                    this.sessionId = e.config.session_id, this.appliedState = {
                        topics: t
                    }, this._applyPendingState();
                    const n = (e.config.subscription_ttl_millis || we.DEFAULT_TTL) - we.TIMEOUT_PREEMPT_DURATION;
                    this.intervalId = setInterval(this._subscribeAll, n)
                }
                teardown() {
                    clearInterval(this.intervalId), this.updateSubscriptions({
                        toSubscribe: [],
                        toUnsubscribe: this.appliedState.topics,
                        sessionId: this.sessionId
                    })
                }
            }
            r()(we, "DEFAULT_TTL", 12e4), r()(we, "TIMEOUT_PREEMPT_DURATION", 2e4), r()(we, "UPDATE_SUBSCRIPTIONS_THROTTLE", 1e3);
            class Ee {
                constructor({
                    makeEventSource: e,
                    updateSubscriptions: t
                }) {
                    r()(this, "isSuspended", !1), r()(this, "eventSourceConnector", null), r()(this, "subscriptionsByTopic", {}), r()(this, "_closeEventSource", () => {
                        this._clearExpiryTimeout(), this.livePipelineResubscriber.setConfig(null), this.eventSourceConnector && (this.eventSourceConnector.teardown(), this.eventSourceConnector = null)
                    }), r()(this, "_restartEventSource", () => {
                        this._closeEventSource(), this._reconcileTopics()
                    }), r()(this, "_handleMessage", ({
                        topic: e,
                        payload: t
                    }) => {
                        e === Ee.SYSTEM_CONFIG_TOPIC && this.eventSourceConnector && this.livePipelineResubscriber.setConfig(t, this.eventSourceConnector.getAutoSubscribedTopics());
                        const n = Promise.resolve(t);
                        return (this.subscriptionsByTopic[e] || []).map(e => n.then(e.callback))
                    }), this.makeEventSource = e, this.livePipelineResubscriber = new we({
                        updateSubscriptions: _e({
                            promiseFactory: t,
                            condition: fe,
                            sideEffect: this._restartEventSource
                        })
                    })
                }
                teardown() {
                    this._clearExpiryTimeout(), this.subscriptionsByTopic = {}, this.livePipelineResubscriber.teardown(), this.eventSourceConnector && (this.eventSourceConnector.teardown(), this.eventSourceConnector = null)
                }
                suspend() {
                    this.isSuspended = !0, this._reconcileTopics()
                }
                resume() {
                    this.isSuspended = !1, this._reconcileTopics()
                }
                subscribeTopic(e, t) {
                    if (!e) return {
                        teardown: () => {}
                    };
                    const n = {
                        topic: e,
                        callback: t
                    };
                    return this.subscriptionsByTopic[e] = this.subscriptionsByTopic[e] || [], this.subscriptionsByTopic[e].push(n), this._reconcileTopics(), {
                        teardown: () => {
                            const t = (this.subscriptionsByTopic[e] || []).filter(e => e !== n);
                            0 === t.length ? delete this.subscriptionsByTopic[e] : this.subscriptionsByTopic[e] = t, this._reconcileTopics()
                        }
                    }
                }
                _reconcileTopics() {
                    const e = this.isSuspended ? [] : Object.keys(this.subscriptionsByTopic),
                        t = e.length > 0;
                    t && this._clearExpiryTimeout(), this.livePipelineResubscriber.setTopics(e), this.eventSourceConnector && this.eventSourceConnector.setTopics(e), t && !this.eventSourceConnector ? (this._closeEventSource(), this.eventSourceConnector = new Se({
                        makeEventSource: this.makeEventSource,
                        callback: this._handleMessage,
                        topics: e
                    })) : t || !this.eventSourceConnector || this.connectionExpiryTimeoutId || (this.connectionExpiryTimeoutId = setTimeout(this._closeEventSource, Ee.UNUSED_CONNECTION_EXPIRY))
                }
                _clearExpiryTimeout() {
                    clearTimeout(this.connectionExpiryTimeoutId), this.connectionExpiryTimeoutId = null
                }
            }
            let ke;
            r()(Ee, "SYSTEM_CONFIG_TOPIC", "/system/config"), r()(Ee, "UNUSED_CONNECTION_EXPIRY", 3e4);
            var Te = {
                    isSupported: e => "EventSource" in window && e.isTrue("livepipeline_client_enabled"),
                    isSupportedAndReady(e) {
                        return this.isSupported(e) && !!ke
                    },
                    create(e, t, n) {
                        if (!this.isSupported(e)) throw new Error("This browser does not support LivePipeline");
                        if (ke) throw new Error("LivePipeline should only be initialized once");
                        return ke = new Ee({
                            makeEventSource: e => {
                                const t = (e => {
                                    const t = e.map(encodeURIComponent).join(","),
                                        i = e => `${e}/live_pipeline/events?topic=${t}`,
                                        s = i(be.b),
                                        o = n.getReplacementHost(new URL(s));
                                    return o ? i("https://" + o) : s
                                })(e);
                                return Promise.resolve(new window.EventSource(t, {
                                    withCredentials: !0
                                }))
                            },
                            updateSubscriptions: e => t.LivePipeline.updateSubscriptions(e).catch(e => {
                                if (e)
                                    if (e instanceof me.a && Object(F.c)(e, F.a.SessionNotFound)) ke && ke._restartEventSource();
                                    else if (!(e instanceof me.a) && e instanceof Error) return Promise.reject(e);
                                return Promise.resolve()
                            })
                        }), z.a.addEventListener("change", e => this._handleAppStateChange(e)), ke
                    },
                    get() {
                        if (!ke) throw new Error("LivePipeline instance has not been initialized");
                        return ke
                    },
                    destroy() {
                        ke && ke.teardown(), ke = void 0
                    },
                    _handleAppStateChange(e) {
                        "active" === e ? this.get().resume() : this.get().suspend()
                    }
                },
                Ce = n("pf9B");
            var Ie = e => {
                    const t = Object(I.d)("MULTI_ACCOUNT_LIST_UPDATER"),
                        n = e.dispatch(t({
                            showToast: !1,
                            [F.a.AccessDeniedByBouncer]: {
                                customAction: W.a
                            }
                        })),
                        i = t => e.dispatch(t).catch(n);
                    (window.requestIdleCallback || window.requestAnimationFrame)(() => {
                        i(Object(H.d)()).then(() => {
                            Object(H.b)(e.getState()).forEach(i)
                        })
                    })
                },
                Pe = (n("MvUL"), n("Sp5X"));
            const Oe = ["/login/error", "/i/sms_login"];
            var Le = e => {
                    const t = !K.e(e),
                        n = K.c(e);
                    if (t && n && Pe.a) {
                        const {
                            pathname: e
                        } = Pe.a.location; - 1 === Oe.indexOf(e) && Pe.a.replace({
                            pathname: "/i/sms_login"
                        })
                    }
                },
                De = n("Mx3A"),
                Ae = n("YeIG"),
                xe = n("cnVF"),
                Re = n("mrHL");
            const Be = {
                client: xe.s,
                page: "external",
                action: "referred"
            };
            var Me = (e, t, n) => {
                    const i = e => n.dispatch(Object(I.d)(e)({})),
                        s = Pe.a && Pe.a.location.query,
                        o = De.c({
                            query: s,
                            httpReferer: document.referrer || "",
                            requestUrl: window.location.href
                        });
                    if (Object(Ae.a)(o)) return Promise.resolve();
                    if (o.referer && !ne.b.isExternalUrl(o.referer) && !ne.b.isInternalRedirect(o.referer)) return Promise.resolve();
                    o.referer || (o.referer = ""), o.referral_details_str || (o.referral_details_str = ""), o.referral_type || (o.referral_type = 0);
                    const r = Object(Re.a)("external_referer");
                    r && (o.external_referer_cookie_value = r);
                    const a = o.referral_type === De.a.Access,
                        c = Be;
                    r && a && (c.action = "set_access_referer_cookie");
                    const l = t.createEventObject(c, "client_event", o),
                        u = t.createPayload([l]);
                    let h;
                    h = o ? e.Ocf.referer({
                        landing_url: o.url,
                        referral_details: o.referral_details_str || void 0,
                        referrer_url: o.referer || void 0
                    }).catch(() => i("OCF_EXTERNAL_REFERER")) : Promise.resolve();
                    const d = e.Jot.externalReferer(u).then(e => {
                        const t = De.b(e && e[0]);
                        t && Object(Re.b)(t)
                    }).catch(() => i("SCRIBE_EXTERNAL_REFERER"));
                    return Promise.all([d, h])
                },
                Ue = n("6/RC"),
                je = n("muX9"),
                Ne = n("O6Yq");
            class Ke extends O.PureComponent {
                render() {
                    let e;
                    Ue.canUseDOM && (e = window.location.href);
                    const t = e ? {
                        canonical: Ne.a.getCanonicalUrl(e)
                    } : null;
                    return t ? O.createElement(je.a, null, O.createElement("link", {
                        href: t.canonical,
                        rel: "canonical"
                    })) : null
                }
            }
            var Fe = Object(U.a)(Ke);
            n("IAdD");
            var ze = Object(D.a)().propsFromState(() => ({
                    loginReturnPath: K.h
                })).withAnalytics({
                    component: "smartlock_prompt"
                }),
                He = n("6oVL"),
                We = n("SrIh"),
                Xe = n("BnI0"),
                qe = n("pQ3Z"),
                Ye = n.n(qe),
                Ve = n("MWbm");
            n("aWzz");
            const Ge = ["/settings", "/signup", "/login/error", "/i/flow/signup", "/login/check"];
            class Je extends O.Component {
                constructor(e, t) {
                    super(e, t), this.state = {
                        autoSubmit: !1,
                        password: "",
                        smartLockDisabled: !1,
                        userName: ""
                    }, this._smartLockSupported = !!(window.PasswordCredential && navigator.credentials && navigator.credentials.get) && !t.loggedInUserId, this._isSmartLockDisabledFromCookie = "1" === e.getCookie(xe.u)
                }
                componentDidMount() {
                    "/login/error" === this.props.location.pathname ? Object(Xe.a)() : this._checkShouldDisplayPrompt()
                }
                componentDidUpdate(e) {
                    Ye()(e.location, this.props.location) || this._checkShouldDisplayPrompt()
                }
                render() {
                    const {
                        loginReturnPath: e
                    } = this.props, {
                        autoSubmit: t,
                        password: n,
                        userName: i
                    } = this.state;
                    return this._shouldDisplaySmartLockPrompt() ? O.createElement(Ve.a, {
                        style: Ze.hidden
                    }, O.createElement(He.a, {
                        autoSubmit: t,
                        loginReturnPath: e
                    }, O.createElement("input", {
                        name: "session[username_or_email]",
                        type: "hidden",
                        value: i
                    }), O.createElement("input", {
                        name: "session[password]",
                        type: "hidden",
                        value: n
                    }))) : null
                }
                _scribeAction(e, t) {
                    const {
                        analytics: n
                    } = this.props;
                    n.scribe(Object.assign({}, t, {
                        action: e
                    }))
                }
                _checkShouldDisplayPrompt() {
                    const {
                        location: {
                            pathname: e
                        }
                    } = this.props, {
                        smartLockDisabled: t
                    } = this.state;
                    if (this._shouldDisplaySmartLockPrompt()) {
                        this._scribeAction("impression");
                        const n = (t || this._isSmartLockDisabledFromCookie) && "/login" === e ? "required" : "optional";
                        let i = !0;
                        setTimeout(() => i = !1, 250), navigator.credentials.get({
                            mediation: n,
                            password: !0
                        }).then(e => {
                            if (e) {
                                i ? this._scribeAction("select", {
                                    element: "unmediated"
                                }) : this._scribeAction("select", {
                                    element: "mediated"
                                });
                                const {
                                    id: t,
                                    password: n
                                } = e;
                                this.setState({
                                    autoSubmit: !0,
                                    userName: t,
                                    password: n
                                })
                            } else this._smartLockSupported && this.setState({
                                smartLockDisabled: !0
                            }, Xe.a), i ? this._scribeAction("cancel", {
                                element: "no_credentials"
                            }) : this._scribeAction("cancel", {
                                element: "with_credentials"
                            })
                        }, e => {
                            e && "NotSupportedError" !== e.name && "NotAllowedError" !== e.name && "InvalidStateError" !== e.name && Object(We.a)(e)
                        })
                    }
                }
                _shouldDisplaySmartLockPrompt(e = this.props) {
                    const {
                        loggedInUserId: t
                    } = this.context, {
                        location: {
                            pathname: n
                        }
                    } = e, {
                        smartLockDisabled: i
                    } = this.state, s = "/login" === n || !this._isSmartLockDisabledFromCookie && !i && !Ge.some(e => e === n);
                    return !t && this._smartLockSupported && s
                }
            }
            r()(Je, "contextType", L.a), r()(Je, "defaultProps", {
                getCookie: Re.a
            });
            const Ze = re.a.create(e => ({
                hidden: {
                    display: "none"
                }
            }));
            var $e = Object(U.a)(ze(Je)),
                Qe = n("1YZw"),
                et = Object(D.a)().propsFromState(() => ({
                    toast: Qe.d
                })).propsFromActions(() => ({
                    onClose: Qe.c
                })),
                tt = (n("Ysgh"), n("97Jx")),
                nt = n.n(tt),
                it = n("HPNB"),
                st = n("w0zD"),
                ot = "toast",
                rt = n("0FVZ"),
                at = n("Oe3h"),
                ct = n("cHvH"),
                lt = n("+/1j");
            class ut extends O.Component {
                constructor(...e) {
                    super(...e), r()(this, "_renderAriaOnly", () => {
                        const {
                            text: e
                        } = this.props;
                        return O.createElement(Ve.a, {
                            accessibilityRole: "alert",
                            style: re.a.visuallyHidden,
                            testID: ot
                        }, O.createElement(lt.a, null, e))
                    }), r()(this, "_renderContent", ({
                        windowWidth: e
                    }) => {
                        const {
                            text: t,
                            withAutoDismiss: n,
                            withClearButton: i
                        } = this.props, s = it.a.shouldRenderAsModal(e) ? rt.a.ModalToasts : rt.a.Toasts;
                        return O.createElement(s, null, O.createElement(se.a, null, O.createElement(at.a, null, (s, o) => O.createElement(Ve.a, nt()({
                            ref: s()
                        }, o({
                            accessibilityRole: "alert",
                            style: [ht.root, e > re.a.theme.breakpoints.medium && ht.rootWide],
                            testID: ot
                        })), O.createElement(oe.c, {
                            color: "whiteOnColor",
                            style: ht.titleText
                        }, t), O.createElement(Ve.a, {
                            importantForAccessibility: n ? "no-hide-descendants" : "yes",
                            style: ht.actionButtons
                        }, this._renderActionLabel(), i && O.createElement(st.a, {
                            onClose: this._handleClose,
                            style: ht.closeButton
                        }))))))
                    }), r()(this, "_createTimer", () => {
                        const {
                            actionLabel: e,
                            autoDismissDelay: t,
                            onClose: n,
                            text: i,
                            withAutoDismiss: s
                        } = this.props;
                        if (s) {
                            const s = t || ut.calculateDismissDelay(i, !!e);
                            this._dismissTimer = new q.b(s).timeout(n), this._dismissTimer.start()
                        }
                    }), r()(this, "_handleActionPress", e => {
                        this._stopTimer();
                        const {
                            onAction: t,
                            onClose: n
                        } = this.props;
                        t && t(e), n(e)
                    }), r()(this, "_handleClose", e => {
                        this._stopTimer(), this.props.onClose(e)
                    })
                }
                componentDidMount() {
                    this._createTimer()
                }
                componentWillUnmount() {
                    this._stopTimer()
                }
                render() {
                    return this.props.ariaOnly ? this._renderAriaOnly() : O.createElement(ct.a, null, this._renderContent)
                }
                _renderActionLabel() {
                    const {
                        actionLabel: e,
                        actionLink: t
                    } = this.props;
                    if (e) return O.createElement(oe.c, {
                        children: e,
                        color: "whiteOnColor",
                        link: t,
                        onClick: this._handleActionPress,
                        style: [ht.actionText, !t && ht.actionMargin],
                        weight: "bold",
                        withInteractiveStyling: !0
                    })
                }
                static calculateDismissDelay(e, t) {
                    const n = 1e3 * e.split(" ").length / 5 + 225;
                    return (n < 4e3 ? 4e3 : n) + (t ? 2e3 : 0)
                }
                _stopTimer() {
                    this._dismissTimer && this._dismissTimer.stop()
                }
            }
            r()(ut, "defaultProps", {
                withAutoDismiss: !0,
                withClearButton: !1
            });
            const ht = re.a.create(e => ({
                root: {
                    alignItems: "center",
                    backgroundColor: e.colors.primary,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: e.spaces.xSmall
                },
                rootWide: {
                    alignSelf: "center",
                    borderRadius: e.borderRadii.small,
                    marginBottom: e.spaces.large
                },
                titleText: {
                    flexShrink: 1,
                    paddingHorizontal: e.spaces.xSmall
                },
                actionText: {
                    whiteSpace: "nowrap",
                    marginRight: e.spaces.xSmall
                },
                actionButtons: {
                    flexDirection: "row"
                },
                actionMargin: {
                    marginHorizontal: e.spaces.xSmall
                },
                closeButton: {
                    marginLeft: e.spaces.xSmall,
                    paddingHorizontal: e.spaces.xxSmall
                }
            }));
            var dt = ut;
            var pt = et(({
                onClose: e,
                toast: t
            }) => t ? O.createElement(dt, {
                actionLabel: t.actionLabel,
                actionLink: t.actionLink,
                ariaOnly: t.ariaOnly,
                autoDismissDelay: t.autoDismissDelay,
                key: t.id,
                onAction: t.onAction,
                onClose: e,
                text: t.text,
                withAutoDismiss: t.withAutoDismiss,
                withClearButton: t.withClearButton
            }) : null);
            const mt = i,
                bt = $.a,
                ft = le,
                _t = he.a,
                gt = Te,
                yt = Ce.a,
                St = $e,
                vt = Fe,
                wt = pt,
                Et = s,
                kt = G,
                Tt = function(e, t) {
                    const n = Object.keys(e);
                    let i, s = !1;
                    const o = () => {
                        s || (i = Z()(t), n.forEach(t => {
                            return i.bind(t, (n = e[t], e => {
                                e.preventDefault(), e.stopPropagation(), n(e)
                            }));
                            var n
                        }))
                    };
                    return w(o, [l, u]), () => {
                        s = !0, k(o), i && i.unbind(n)
                    }
                },
                Ct = pe,
                It = Ie,
                Pt = Le,
                Ot = Me,
                Lt = ue.c,
                Dt = P,
                At = N
        },
        rRIm: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return C
            }));
            n("IAdD"), n("LJOr"), n("kYxP");
            var i = n("KEM+"),
                s = n.n(i),
                o = n("ERkP"),
                r = n("sTyV"),
                a = n("rxPX"),
                c = n("G6rE"),
                l = Object(a.a)().propsFromState(() => ({
                    loggedInUser: c.e.selectLoggedInUser
                })).adjustStateProps(({
                    loggedInUser: e
                }) => ({
                    loggedInUserScreenName: e ? e.screen_name : void 0
                })),
                u = n("3XMw"),
                h = n.n(u),
                d = n("V/Zl"),
                p = n("OrGc"),
                m = n("QK5w"),
                b = n("aITJ"),
                f = n("MWbm"),
                _ = n("TnY3"),
                g = n("rHpw"),
                y = n("t62R"),
                S = n("uScj"),
                v = n("BcsE");
            n("aWzz");
            const w = h.a.b47e760d,
                E = h.a.fd2c7b43,
                k = new S.a,
                T = e => {
                    if (e.target instanceof HTMLInputElement) {
                        const t = e.target.tagName.toLowerCase();
                        return "input" === t || "textarea" === t
                    }
                    return !1
                },
                C = e => k.subscribe(e).unsubscribe;
            class I extends o.Component {
                constructor(...e) {
                    super(...e), s()(this, "_bindKeyboardShortcuts", () => {
                        const {
                            history: e,
                            loggedInUserScreenName: t
                        } = this.props, n = t => n => {
                            n.preventDefault(), k._listeners.length ? k.notify(t) : e.push({
                                pathname: "/explore",
                                state: {
                                    searchFocused: !0,
                                    searchPrefill: t
                                }
                            })
                        }, i = {
                            [p.d.search]: n(),
                            [p.d.goToUser]: n("@"),
                            [p.d.openKeyboardShortcuts]: () => e.push("/i/keyboard_shortcuts"),
                            [p.d.goExplore]: () => e.push("/explore"),
                            [p.d.goSettings]: () => e.push("/settings")
                        }, s = t ? {
                            [p.d.goProfile]: () => e.push("/" + t),
                            [p.d.goLikes]: () => e.push(`/${t}/likes`),
                            [p.d.goLists]: () => e.push(`/${t}/lists`)
                        } : {}, o = Object.assign({}, i, s, {
                            [p.d.goHome]: () => e.push("/home"),
                            [p.d.goDisplay]: () => e.push("/i/display"),
                            [p.d.goNotifications]: () => e.push("/notifications"),
                            [p.d.goMentions]: () => e.push("/notifications/mentions"),
                            [p.d.goMessages]: () => e.push("/messages"),
                            [p.d.newMessage]: () => e.push("/messages/compose"),
                            [p.d.newTweet]: () => e.push("/compose/tweet"),
                            [p.d.goBookmarks]: () => e.push("/i/bookmarks")
                        }), a = this.props.loggedInUserScreenName ? o : i;
                        this._unbindKeyboardShortcuts = Object(r.a)(a)
                    }), s()(this, "_handleKeyDown", e => {
                        T(e) || "Backspace" !== e.key || (this._backspaceDown = Date.now(), e.preventDefault(), e.stopPropagation())
                    }), s()(this, "_handleKeyUp", e => {
                        if (!T(e) && "Backspace" === e.key) {
                            e.preventDefault(), e.stopPropagation();
                            const t = this._backspaceDown,
                                n = !!Object(v.a)(t) && Date.now() - t < 500,
                                i = Object(m.a)({}, {
                                    location: this.props.location
                                });
                            n && i ? this.props.history.goBack() : window.close()
                        }
                    })
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts(), b.a.isKaiOS() && Object(d.a)() && (document.addEventListener("keydown", this._handleKeyDown), document.addEventListener("keyup", this._handleKeyUp))
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts(), b.a.isKaiOS() && Object(d.a)() && (document.removeEventListener("keydown", this._handleKeyDown), document.removeEventListener("keyup", this._handleKeyUp))
                }
                render() {
                    return this.props.loggedInUserScreenName ? o.createElement(f.a, {
                        accessibilityRole: "heading",
                        "aria-level": "2",
                        style: g.a.visuallyHidden
                    }, o.createElement(y.c, null, w), o.createElement(y.c, {
                        importantForAccessibility: "no",
                        link: "/i/keyboard_shortcuts"
                    }, E)) : null
                }
            }
            const P = l(I);
            t.a = Object(_.a)(P)
        },
        w0zD: function(e, t, n) {
            "use strict";
            var i = n("KEM+"),
                s = n.n(i),
                o = n("ERkP"),
                r = n("/yvb"),
                a = n("3XMw"),
                c = n.n(a),
                l = n("hOZg");
            const u = c.a.ia5e7487;
            class h extends o.PureComponent {
                render() {
                    const {
                        ariaLabel: e,
                        closeIcon: t,
                        color: n,
                        disabled: i,
                        onClose: s,
                        isOnMedia: a,
                        size: c,
                        style: h
                    } = this.props, d = t || o.createElement(l.a, null);
                    return o.createElement(r.a, {
                        accessibilityLabel: e || u,
                        borderColor: "transparent",
                        color: n,
                        disabled: i,
                        icon: d,
                        onPress: s,
                        size: c,
                        style: h,
                        type: a ? "onMedia" : void 0
                    })
                }
            }
            s()(h, "defaultProps", {
                color: "white",
                disabled: !1,
                size: "normal"
            }), t.a = h
        },
        yt7X: function(e, t, n) {
            "use strict";
            n("kYxP");
            var i = n("KEM+"),
                s = n.n(i),
                o = n("ERkP"),
                r = n("rxPX"),
                a = n("RqPI"),
                c = Object(r.a)().propsFromState(() => ({
                    currentCountry: a.k
                })),
                l = n("s9SB"),
                u = n.n(l),
                h = n("6/RC"),
                d = n.n(h),
                p = n("wrlS"),
                m = n("MWbm"),
                b = n("t62R"),
                f = n("cHvH"),
                _ = n("rHpw"),
                g = n("mw9i"),
                y = n("/yvb"),
                S = n("3XMw"),
                v = n.n(S),
                w = n("cnVF");
            const E = (e, t, n) => {
                    const i = e.indexOf(t.toLowerCase()) > -1,
                        s = n[w.i];
                    return i && "1" !== s
                },
                k = v.a.ia5e7487;
            class T extends o.Component {
                constructor(...e) {
                    super(...e), s()(this, "state", {
                        euWarningIsOpen: !1
                    }), s()(this, "_renderMessage", () => o.createElement(b.c, {
                        color: "white",
                        size: "small"
                    }, o.createElement(v.a.I18NFormatMessage, {
                        $i18n: "i3c34582"
                    }, o.createElement(b.c, {
                        color: "white",
                        link: "https://help.twitter.com/rules-and-policies/twitter-cookies",
                        style: C.link
                    }, v.a.fd0ff73b)))), s()(this, "_handleEUBannerClose", () => {
                        d.a.canUseDOM && (document.cookie = u.a.serialize(w.i, "1", {
                            maxAge: 31536e3,
                            path: "/",
                            domain: ".twitter.com",
                            secure: !0
                        })), this.setState({
                            euWarningIsOpen: !1
                        })
                    })
                }
                componentDidMount() {
                    const {
                        currentCountry: e
                    } = this.props, t = p.b.getArrayValue("responsive_web_eu_countries", []), n = d.a.canUseDOM ? u.a.parse(document.cookie) : {};
                    this.setState({
                        euWarningIsOpen: !!e && E(t, e, n)
                    })
                }
                render() {
                    return this.state.euWarningIsOpen ? o.createElement(f.a, null, ({
                        windowWidth: e
                    }) => {
                        const t = e < _.a.theme.breakpoints.medium;
                        return o.createElement(m.a, {
                            style: [C.root, t && C.rootNarrow]
                        }, o.createElement(g.a, {
                            isLarge: !0,
                            style: [C.container]
                        }, this._renderMessage()), o.createElement(y.a, {
                            onPress: this._handleEUBannerClose,
                            size: "normalCompact",
                            style: [C.closeButton, t && C.closeButtonNarrow],
                            type: "invertedSecondary"
                        }, k))
                    }) : null
                }
            }
            const C = _.a.create(e => ({
                    root: {
                        alignItems: "center",
                        backgroundColor: e.colors.deepGray,
                        boxShadow: e.boxShadows.medium,
                        flexDirection: "row",
                        paddingHorizontal: e.componentDimensions.gutterHorizontal,
                        paddingVertical: e.componentDimensions.gutterVertical,
                        width: "100%"
                    },
                    rootNarrow: {
                        flexDirection: "column"
                    },
                    container: {
                        alignItems: "center",
                        flexShrink: 1
                    },
                    closeButton: {
                        marginLeft: e.spaces.xSmall,
                        marginTop: 0,
                        flexGrow: 0,
                        flexShrink: 0
                    },
                    closeButtonNarrow: {
                        marginLeft: 0,
                        marginTop: e.spaces.xSmall,
                        width: "100%"
                    },
                    link: {
                        textDecorationLine: "underline"
                    }
                })),
                I = c(T);
            t.a = I
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules.6c5c9ae5.js.map
