(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
    351: function(e, t) {
        function n(e) {
            var t = 0;
            return function() {
                return t < e.length ? {
                    done: !1,
                    value: e[t++]
                } : {
                    done: !0
                }
            }
        }
        !function() {
            function e(e, t) {
                return e = "__pwacompat_" + e,
                void 0 !== t && (w[e] = t),
                w[e]
            }
            function t() {
                var t = document.head.querySelector('link[rel="manifest"]')
                  , n = t ? t.href : "";
                if (!n)
                    throw 'can\'t find <link rel="manifest" href=".." />\'';
                var r = function(e) {
                    for (var t = {}, n = 0; n < e.length; t = {
                        c: t.c
                    },
                    ++n) {
                        t.c = e[n];
                        try {
                            return new URL("",t.c),
                            function(e) {
                                return function(t) {
                                    return new URL(t || "",e.c).toString()
                                }
                            }(t)
                        } catch (e) {}
                    }
                    return function(e) {
                        return e || ""
                    }
                }([n, window.location])
                  , a = e("manifest");
                if (a)
                    try {
                        i(JSON.parse(a), r)
                    } catch (e) {
                        console.warn("PWACompat error", e)
                    }
                else {
                    var o = new XMLHttpRequest;
                    o.open("GET", n),
                    o.withCredentials = "use-credentials" === t.getAttribute("crossorigin"),
                    o.onload = function() {
                        try {
                            var t = JSON.parse(o.responseText);
                            e("manifest", o.responseText),
                            i(t, r)
                        } catch (e) {
                            console.warn("PWACompat error", e)
                        }
                    }
                    ,
                    o.send(null)
                }
            }
            function r(e, t) {
                for (var n in e = document.createElement(e),
                t)
                    e.setAttribute(n, t[n]);
                return document.head.appendChild(e),
                e
            }
            function a(e, t) {
                t && (!0 === t && (t = "yes"),
                r("meta", {
                    name: e,
                    content: t
                }))
            }
            function o(e) {
                return e = e.sizes.split(/\s+/g).map((function(e) {
                    return "any" === e ? 1 / 0 : parseInt(e, 10) || 0
                }
                )),
                Math.max.apply(Math, e instanceof Array ? e : function(e) {
                    for (var t, n = []; !(t = e.next()).done; )
                        n.push(t.value);
                    return n
                }(function(e) {
                    var t = "undefined" != typeof Symbol && Symbol.iterator && e[Symbol.iterator];
                    return t ? t.call(e) : {
                        next: n(e)
                    }
                }(e)))
            }
            function i(t, n) {
                function i(e, n, r, a) {
                    var o = window.devicePixelRatio
                      , i = f({
                        width: e * o,
                        height: n * o
                    });
                    if (i.scale(o, o),
                    i.fillStyle = x,
                    i.fillRect(0, 0, e, n),
                    i.translate(e / 2, (n - 32) / 2),
                    a && (n = a.width / o,
                    128 < (o = a.height / o) && (n /= o / 128,
                    o = 128),
                    48 <= n && 48 <= o && (i.drawImage(a, n / -2, o / -2, n, o),
                    i.translate(0, o / 2 + 32))),
                    i.fillStyle = _ ? "white" : "black",
                    i.font = "24px HelveticaNeue-CondensedBold",
                    a = t.name || t.short_name || document.title,
                    (o = i.measureText(a).width) < .8 * e)
                        i.fillText(a, o / -2, 0);
                    else
                        for (a = a.split(/\s+/g),
                        o = 1; o <= a.length; ++o) {
                            n = a.slice(0, o).join(" ");
                            var l = i.measureText(n).width;
                            (o === a.length || l > .6 * e) && (i.fillText(n, l / -2, 0),
                            i.translate(0, 24 * 1.2),
                            a.splice(0, o),
                            o = 0)
                        }
                    return function() {
                        var e = i.canvas.toDataURL();
                        return c(r, e),
                        e
                    }
                }
                function c(e, t) {
                    var n = document.createElement("link");
                    n.setAttribute("rel", "apple-touch-startup-image"),
                    n.setAttribute("media", "(orientation: " + e + ")"),
                    n.setAttribute("href", t),
                    document.head.appendChild(n)
                }
                function p(e, t) {
                    var n = window.screen
                      , r = i(n.availWidth, n.availHeight, "portrait", e)
                      , a = i(n.availHeight, n.availWidth, "landscape", e);
                    window.setTimeout((function() {
                        O.p = r(),
                        window.setTimeout((function() {
                            O.l = a(),
                            t()
                        }
                        ), 10)
                    }
                    ), 10)
                }
                function w() {
                    e("iOS", JSON.stringify(O))
                }
                var g = t.icons || []
                  , b = g.filter((function(e) {
                    return (e.f || "").includes("maskable")
                }
                ));
                g.sort((function(e, t) {
                    return o(t) - o(e)
                }
                )),
                b.sort((function(e, t) {
                    return o(t) - o(e)
                }
                ));
                var y = (0 < b.length ? b : g).map((function(e) {
                    var t = {
                        rel: "icon",
                        href: n(e.src),
                        sizes: e.sizes
                    };
                    if (r("link", t),
                    h && !(120 > o(e)))
                        return t.rel = "apple-touch-icon",
                        r("link", t)
                }
                )).filter(Boolean)
                  , S = !!((b = document.head.querySelector('meta[name="viewport"]')) && b.content || "").match(/\bviewport-fit\s*=\s*cover\b/)
                  , k = t.display;
                if (a("mobile-web-app-capable", b = -1 !== d.indexOf(k)),
                function(e, t) {
                    if (h || v) {
                        var n = u(e);
                        if (h)
                            a("apple-mobile-web-app-status-bar-style", t ? "black-translucent" : n ? "black" : "default");
                        else {
                            e: {
                                try {
                                    var r = Windows.UI.ViewManagement.ApplicationView.getForCurrentView().titleBar;
                                    break e
                                } catch (e) {}
                                r = void 0
                            }
                            (t = r) && (t.foregroundColor = l(n ? "black" : "white"),
                            t.backgroundColor = l(e))
                        }
                    }
                }(t.theme_color || "black", S),
                m && (a("application-name", t.short_name),
                a("msapplication-tooltip", t.description),
                a("msapplication-starturl", n(t.start_url || ".")),
                a("msapplication-navbutton-color", t.theme_color),
                (g = g[0]) && a("msapplication-TileImage", n(g.src)),
                a("msapplication-TileColor", t.background_color)),
                document.head.querySelector('[name="theme-color"]') || a("theme-color", t.theme_color),
                h) {
                    var x = t.background_color || "#f8f9fa"
                      , _ = u(x);
                    if ((g = function(e) {
                        var t;
                        return (e || []).filter((function(e) {
                            return "itunes" === e.platform
                        }
                        )).forEach((function(e) {
                            e.id ? t = e.id : (e = e.url.match(/id(\d+)/)) && (t = e[1])
                        }
                        )),
                        t
                    }(t.related_applications)) && a("apple-itunes-app", "app-id=" + g),
                    a("apple-mobile-web-app-capable", b),
                    a("apple-mobile-web-app-title", t.short_name || t.name),
                    b = e("iOS"))
                        try {
                            var C = JSON.parse(b);
                            return c("portrait", C.p),
                            c("landscape", C.l),
                            void y.forEach((function(e) {
                                var t = C.i[e.href];
                                t && (e.href = t)
                            }
                            ))
                        } catch (e) {}
                    var O = {
                        i: {}
                    };
                    !function e() {
                        var n = y.shift();
                        if (n) {
                            var r = new Image;
                            r.crossOrigin = "anonymous",
                            r.onerror = function() {
                                e()
                            }
                            ,
                            r.onload = function() {
                                r.onload = null,
                                p(r, (function() {
                                    var e = t.background_color && s(r, x);
                                    e ? (n.href = e,
                                    O.i[r.src] = e,
                                    function(e) {
                                        function t() {
                                            --n || e()
                                        }
                                        var n = y.length + 1;
                                        t(),
                                        y.forEach((function(e) {
                                            var n = new Image;
                                            n.crossOrigin = "anonymous",
                                            n.onerror = t,
                                            n.onload = function() {
                                                n.onload = null,
                                                e.href = s(n, x, !0),
                                                O.i[n.src] = e.href,
                                                t()
                                            }
                                            ,
                                            n.src = e.href
                                        }
                                        ))
                                    }(w)) : w()
                                }
                                ))
                            }
                            ,
                            r.src = n.href
                        } else
                            p(null, w)
                    }()
                } else
                    a("x5-orientation", g = {
                        por: "portrait",
                        lan: "landscape"
                    }[String(t.orientation || "").substr(0, 3)] || ""),
                    a("screen-orientation", g),
                    "fullscreen" === k ? (a("x5-fullscreen", "true"),
                    a("full-screen", "yes")) : b && (a("x5-page-mode", "app"),
                    a("browsermode", "application"))
            }
            function l(e) {
                return {
                    r: (e = c(e))[0],
                    g: e[1],
                    b: e[2],
                    a: e[3]
                }
            }
            function c(e) {
                var t = f();
                return t.fillStyle = e,
                t.fillRect(0, 0, 1, 1),
                t.getImageData(0, 0, 1, 1).data || []
            }
            function u(e) {
                return e = c(e).map((function(e) {
                    return .03928 > (e /= 255) ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                }
                )),
                3 < Math.abs(1.05 / (.2126 * e[0] + .7152 * e[1] + .0722 * e[2] + .05))
            }
            function s(e, t, n) {
                n = void 0 !== n && n;
                var r = f(e);
                if (r.drawImage(e, 0, 0),
                n || 255 !== r.getImageData(0, 0, 1, 1).data[3])
                    return r.globalCompositeOperation = "destination-over",
                    r.fillStyle = t,
                    r.fillRect(0, 0, e.width, e.height),
                    r.canvas.toDataURL()
            }
            function f(e) {
                var t = (e = void 0 === e ? {
                    width: 1,
                    height: 1
                } : e).height
                  , n = document.createElement("canvas");
                return n.width = e.width,
                n.height = t,
                n.getContext("2d")
            }
            if ("onload"in XMLHttpRequest.prototype && !navigator.h) {
                var d = ["standalone", "fullscreen", "minimal-ui"]
                  , p = navigator.userAgent || ""
                  , h = navigator.vendor && -1 !== navigator.vendor.indexOf("Apple") && (-1 !== p.indexOf("Mobile/") || "standalone"in navigator)
                  , m = !!p.match(/(MSIE |Edge\/|Trident\/)/)
                  , v = "undefined" != typeof Windows;
                try {
                    var w = window.sessionStorage
                } catch (e) {}
                w = w || {},
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            }
        }()
    }
}]);
//# sourceMappingURL=pwacompat.ca470059135daa71f730.bundle.js.map
