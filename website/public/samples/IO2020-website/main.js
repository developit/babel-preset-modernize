!function(e) {
    function t(t) {
        for (var o, i, s = t[0], l = t[1], c = t[2], d = 0, h = []; d < s.length; d++)
            i = s[d],
            Object.prototype.hasOwnProperty.call(a, i) && a[i] && h.push(a[i][0]),
            a[i] = 0;
        for (o in l)
            Object.prototype.hasOwnProperty.call(l, o) && (e[o] = l[o]);
        for (u && u(t); h.length; )
            h.shift()();
        return r.push.apply(r, c || []),
        n()
    }
    function n() {
        for (var e, t = 0; t < r.length; t++) {
            for (var n = r[t], o = !0, s = 1; s < n.length; s++) {
                var l = n[s];
                0 !== a[l] && (o = !1)
            }
            o && (r.splice(t--, 1),
            e = i(i.s = n[0]))
        }
        return e
    }
    var o = {}
      , a = {
        0: 0
    }
      , r = [];
    function i(t) {
        if (o[t])
            return o[t].exports;
        var n = o[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, i),
        n.l = !0,
        n.exports
    }
    i.e = function(e) {
        var t = []
          , n = a[e];
        if (0 !== n)
            if (n)
                t.push(n[2]);
            else {
                var o = new Promise((function(t, o) {
                    n = a[e] = [t, o]
                }
                ));
                t.push(n[2] = o);
                var r, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                s.src = function(e) {
                    return i.p + "" + ({
                        1: "pwacompat"
                    }[e] || e) + ".ca470059135daa71f730.bundle.js"
                }(e);
                var l = new Error;
                r = function(t) {
                    s.onerror = s.onload = null,
                    clearTimeout(c);
                    var n = a[e];
                    if (0 !== n) {
                        if (n) {
                            var o = t && ("load" === t.type ? "missing" : t.type)
                              , r = t && t.target && t.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + o + ": " + r + ")",
                            l.name = "ChunkLoadError",
                            l.type = o,
                            l.request = r,
                            n[1](l)
                        }
                        a[e] = void 0
                    }
                }
                ;
                var c = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: s
                    })
                }
                ), 12e4);
                s.onerror = s.onload = r,
                document.head.appendChild(s)
            }
        return Promise.all(t)
    }
    ,
    i.m = e,
    i.c = o,
    i.d = function(e, t, n) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, t) {
        if (1 & t && (e = i(e)),
        8 & t)
            return e;
        if (4 & t && "object" == typeof e && e && e.__esModule)
            return e;
        var n = Object.create(null);
        if (i.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: e
        }),
        2 & t && "string" != typeof e)
            for (var o in e)
                i.d(n, o, function(t) {
                    return e[t]
                }
                .bind(null, o));
        return n
    }
    ,
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return i.d(t, "a", t),
        t
    }
    ,
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    i.p = "/io/",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var s = window.webpackJsonp = window.webpackJsonp || []
      , l = s.push.bind(s);
    s.push = t,
    s = s.slice();
    for (var c = 0; c < s.length; c++)
        t(s[c]);
    var u = l;
    r.push([350, 2]),
    n()
}([, function(e, t, n) {
    "use strict";
    var o, a = n(31), r = n(101), i = {
        title: "Google I/O 2020",
        description: "Due to concerns around the coronavirus (COVID-19), and in accordance with health guidance from the CDC, WHO and other health authorities, we have decided to cancel the physical Google I/O event at Shoreline Amphitheatre."
    }, s = [{
        url: "/io/faq",
        title: "FAQs - ".concat(i.title),
        description: "Find answers to the most common questions about I/O 2020."
    }], l = n(27), c = n.n(l);
    !function(e) {
        e.red = "#EA4335",
        e.redbg = "#D93025",
        e.reddark = "#A50E0E",
        e.yellow = "#FBBC04",
        e.yellowdark = "#E37400",
        e.yellowfocus = "#F29900",
        e.blue = "#1A73E8",
        e.bluedark = "#174EA6",
        e.bluefocus = "#1967D2",
        e.green = "#34A853",
        e.greenbg = "#1D873B",
        e.greendark = "#0D652D",
        e.greensustainability = "#1d873b",
        e.white = "#ffffff",
        e.graylogo = "#5f6368",
        e.gray = "rgba(32, 33, 36, 0.9)",
        e.black = "#3c4043"
    }(o || (o = {}));
    var u, d = {
        RED: o.red,
        RED_BG: o.redbg,
        RED_DARK: o.reddark,
        YELLOW: o.yellow,
        YELLOW_DARK: o.yellowdark,
        YELLOW_FOCUS: o.yellowfocus,
        BLUE: o.blue,
        BLUE_DARK: o.bluedark,
        BLUE_FOCUS: o.bluefocus,
        GREEN: o.green,
        GREEN_BG: o.greenbg,
        GREEN_DARK: o.greendark,
        GREEN_SUSTAINABILITY: o.greensustainability,
        BLACK: o.black,
        GRAY_LOGO: o.graylogo,
        GRAY: o.gray,
        WHITE: o.white
    }, h = {
        BLUE: {
            BACKGROUND: d.BLUE,
            FOREGROUND: d.YELLOW,
            TERTIARY: d.BLUE_DARK,
            TEXT: d.WHITE,
            BUTTON_TEXT: d.BLUE_DARK,
            BUTTON_FOCUS_BG: d.YELLOW_FOCUS,
            NAV_LOGO: d.WHITE,
            ID: "Blue"
        },
        GREEN: {
            BACKGROUND: d.GREEN_BG,
            FOREGROUND: d.YELLOW,
            TERTIARY: d.GREEN_DARK,
            TEXT: d.WHITE,
            BUTTON_TEXT: d.GREEN_DARK,
            BUTTON_FOCUS_BG: d.YELLOW_FOCUS,
            NAV_LOGO: d.WHITE,
            ID: "Green"
        },
        YELLOW: {
            BACKGROUND: d.YELLOW,
            FOREGROUND: d.BLUE,
            TERTIARY: d.YELLOW_DARK,
            TEXT: d.GRAY,
            BUTTON_TEXT: d.WHITE,
            BUTTON_FOCUS_BG: d.BLUE_FOCUS,
            ID: "Yellow"
        },
        RED: {
            BACKGROUND: d.RED_BG,
            FOREGROUND: d.YELLOW,
            TERTIARY: d.RED_DARK,
            TEXT: d.WHITE,
            BUTTON_TEXT: d.RED_DARK,
            BUTTON_FOCUS_BG: d.YELLOW_FOCUS,
            NAV_LOGO: d.WHITE,
            ID: "Red"
        },
        SUSTAINABILITY: {
            BACKGROUND: d.GREEN_SUSTAINABILITY,
            FOREGROUND: d.WHITE,
            TERTIARY: d.GREEN_DARK,
            TEXT: d.WHITE,
            BUTTON_TEXT: d.WHITE,
            NAV_LOGO: d.WHITE,
            ID: "Green"
        }
    }, p = ("".concat(a.c, "/feed"),
    "".concat(a.c, "/live"),
    "".concat(a.c, "/map"),
    c()({}, "".concat(a.c, "/sustainability"), h.SUSTAINABILITY)), f = ("".concat(a.c, "/live"),
    "".concat(a.c, "/map"),
    function(e) {
        return g(e) || b(e) || v(e)
    }
    ), g = function(e) {
        return Object(r.m)(e) === a.c
    }, b = function(e) {
        return Object(r.m)(e) === "".concat(a.c, "/live")
    }, v = function(e) {
        return Object(r.m)(e) === "".concat(a.c, "/map")
    }, m = {
        mobile: 370,
        tablet: 600,
        laptop: 800,
        desktop: 1024,
        desktopLarge: 1280,
        desktopXlarge: 2400
    };
    !function(e) {
        e.SCROLL = "optimizedScroll",
        e.RESIZE = "optimizedResize"
    }(u || (u = {}));
    var y = function(e, t, n) {
        var o = !1;
        n.addEventListener(e, (function(e) {
            o || (o = !0,
            window.requestAnimationFrame((function() {
                n.dispatchEvent(new CustomEvent(t,{
                    detail: {
                        originalEvent: e
                    }
                })),
                o = !1
            }
            )))
        }
        ))
    };
    "undefined" != typeof window && (y("resize", u.RESIZE, window),
    y("scroll", u.SCROLL, window));
    var O, j, k = function(e) {
        var t = new Date(e)
          , n = t.getHours()
          , o = t.getMinutes()
          , a = n > 11 ? "pm" : "am";
        return ["".concat(n % 12 || 12, ":").concat(function(e) {
            return e < 10 ? "0".concat(e) : "".concat(e)
        }(o)), a]
    }, S = function(e) {
        var t = Math.floor(e)
          , n = t > 12 ? t - 12 : t
          , o = 60 * (e - t)
          , a = o > 10 ? "".concat(o) : "0".concat(o)
          , r = e >= 12 ? "PM" : "AM";
        return "".concat(n, ":").concat(a, " ").concat(r)
    }, w = function(e) {
        return e.toLocaleDateString("en-US", {
            weekday: "short"
        })
    }, _ = function(e) {
        return e.toLocaleString("en-US", {
            month: "long"
        })
    }, C = function(e) {
        return "".concat(e.toLocaleString("en-US", {
            day: "numeric"
        }))
    }, M = (O = new Date,
    j = O.getTime(),
    1e3 * Math.floor(j / 1e3) - Date.parse(function(e) {
        var t = {
            day: "2-digit",
            hour12: !1,
            hour: "2-digit",
            minute: "2-digit",
            month: "long",
            second: "2-digit",
            timeZone: "America/Los_Angeles",
            year: "numeric"
        };
        return new Intl.DateTimeFormat("en-US",t).format(e)
    }(O))), H = function(e) {
        return e - M
    }, L = function(e) {
        return new Date(H(+e))
    }, T = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
          , n = {
            day: "numeric",
            month: "long"
        };
        return t || (n.weekday = "long"),
        e.toLocaleDateString("en-US", n)
    }, A = n(10);
    A.c.liveExperienceStart,
    A.c.liveExperienceStart,
    A.c.preShowStart,
    A.c.preShowStart,
    A.c.mainKeynoteStart,
    A.c.mainKeynoteStart,
    A.c.day1LunchStart,
    A.c.devKeynoteStart,
    A.c.day1SessionsStart,
    A.c.day1SessionsStart,
    A.c.day1Start,
    A.c.day1End,
    A.c.day1AfterHoursStart,
    A.c.day1End,
    A.c.day2Start,
    A.c.day2Start,
    A.c.day2End,
    A.c.day2ConcertStart,
    A.c.day2End,
    A.c.day3Start,
    A.c.day3Start,
    A.c.day3End,
    A.c.day3End,
    A.c.conferenceComplete,
    A.c.liveExperienceEnd,
    n(94);
    n.d(t, "s", (function() {
        return a.s
    }
    )),
    n.d(t, "b", (function() {
        return a.b
    }
    )),
    n.d(t, "a", (function() {
        return a.a
    }
    )),
    n.d(t, "r", (function() {
        return a.r
    }
    )),
    n.d(t, "i", (function() {
        return a.m
    }
    )),
    n.d(t, "f", (function() {
        return a.h
    }
    )),
    n.d(t, "g", (function() {
        return a.k
    }
    )),
    n.d(t, "h", (function() {
        return a.l
    }
    )),
    n.d(t, "c", (function() {
        return a.c
    }
    )),
    n.d(t, "m", (function() {
        return a.q
    }
    )),
    n.d(t, "k", (function() {
        return a.o
    }
    )),
    n.d(t, "j", (function() {
        return a.n
    }
    )),
    n.d(t, "e", (function() {
        return a.g
    }
    )),
    n.d(t, "l", (function() {
        return a.p
    }
    )),
    n.d(t, "v", (function() {
        return a.t
    }
    )),
    n.d(t, "T", (function() {
        return r.j
    }
    )),
    n.d(t, "U", (function() {
        return r.k
    }
    )),
    n.d(t, "K", (function() {
        return r.d
    }
    )),
    n.d(t, "L", (function() {
        return r.e
    }
    )),
    n.d(t, "M", (function() {
        return r.f
    }
    )),
    n.d(t, "X", (function() {
        return r.n
    }
    )),
    n.d(t, "P", (function() {
        return r.h
    }
    )),
    n.d(t, "S", (function() {
        return r.i
    }
    )),
    n.d(t, "Y", (function() {
        return r.o
    }
    )),
    n.d(t, "I", (function() {
        return r.c
    }
    )),
    n.d(t, "H", (function() {
        return r.b
    }
    )),
    n.d(t, "O", (function() {
        return r.g
    }
    )),
    n.d(t, "W", (function() {
        return r.m
    }
    )),
    n.d(t, "V", (function() {
        return r.l
    }
    )),
    n.d(t, "D", (function() {
        return r.a
    }
    )),
    n.d(t, "A", (function() {
        return i
    }
    )),
    n.d(t, "z", (function() {
        return s
    }
    )),
    n.d(t, "q", (function() {
        return p
    }
    )),
    n.d(t, "Q", (function() {
        return f
    }
    )),
    n.d(t, "N", (function() {
        return g
    }
    )),
    n.d(t, "R", (function() {
        return b
    }
    )),
    n.d(t, "w", (function() {
        return m
    }
    )),
    n.d(t, "u", (function() {
        return u
    }
    )),
    n.d(t, "p", (function() {
        return 1e3
    }
    )),
    n.d(t, "o", (function() {
        return 6e4
    }
    )),
    n.d(t, "n", (function() {
        return 36e5
    }
    )),
    n.d(t, "C", (function() {
        return k
    }
    )),
    n.d(t, "B", (function() {
        return S
    }
    )),
    n.d(t, "E", (function() {
        return w
    }
    )),
    n.d(t, "J", (function() {
        return _
    }
    )),
    n.d(t, "F", (function() {
        return C
    }
    )),
    n.d(t, "y", (function() {
        return H
    }
    )),
    n.d(t, "x", (function() {
        return L
    }
    )),
    n.d(t, "G", (function() {
        return T
    }
    )),
    n.d(t, "d", (function() {
        return d
    }
    )),
    n.d(t, "t", (function() {
        return h
    }
    ))
}
, , , , , , , , , function(e, t, n) {
    "use strict";
    var o, a, r, i = n(14), s = n.n(i), l = n(11), c = n.n(l), u = n(16), d = n.n(u), h = n(2), p = n.n(h), f = n(3), g = n.n(f), b = n(9), v = n.n(b), m = n(1), y = n(4), O = {
        liveExperienceStart: +new Date("2020-05-12T17:00:00.000Z"),
        day1: +new Date("2020-05-13T07:00:00.000Z"),
        day1Start: +new Date("2020-05-13T16:00:00.000Z"),
        preShowStart: +new Date("2020-05-13T16:20:00.000Z"),
        mainKeynoteStart: +new Date("2020-05-13T17:00:00.000Z"),
        mainKeynoteEnd: +new Date("2020-05-13T18:30:00.000Z"),
        day1LunchStart: +new Date("2020-05-13T18:30:00.000Z"),
        devKeynoteStart: +new Date("2020-05-13T19:45:00.000Z"),
        devKeynoteEnd: +new Date("2020-05-13T20:45:00.000Z"),
        day1SessionsStart: +new Date("2020-05-13T21:00:00.000Z"),
        day1AfterHoursStart: +new Date("2020-05-14T02:00:00.000Z"),
        day1End: +new Date("2020-05-14T05:00:00.000Z"),
        day2: +new Date("2020-05-14T07:00:00.000Z"),
        day2Start: +new Date("2020-05-14T15:30:00.000Z"),
        day2ConcertStart: +new Date("2020-05-09T03:30:00.000Z"),
        day2End: +new Date("2020-05-09T05:00:00.000Z"),
        day3: +new Date("2020-05-09T07:00:00.000Z"),
        day3Start: +new Date("2020-05-09T15:30:00.000Z"),
        day3End: +new Date("2020-05-09T23:30:00.000Z"),
        conferenceComplete: +new Date("2020-05-10T00:00:00.000Z"),
        liveExperienceEnd: +new Date("2020-05-10T19:00:00.000Z")
    }, j = {
        day1BreakfastStart: +new Date("2020-05-13T14:00:00.000Z"),
        day1BreakfastEnd: +new Date("2020-05-13T16:30:00.000Z"),
        day1LunchStart: O.day1LunchStart,
        day1LunchEnd: +new Date("2020-05-13T20:00:00.000Z"),
        day1DinnerStart: +new Date("2020-05-14T02:00:00.000Z"),
        day1DinnerEnd: +new Date("2020-05-14T03:30:00.000Z"),
        day2BreakfastStart: +new Date("2020-05-13T14:00:00.000Z"),
        day2BreakfastEnd: +new Date("2020-05-13T16:30:00.000Z"),
        day2LunchStart: O.day1LunchStart,
        day2LunchEnd: +new Date("2020-05-13T21:00:00.000Z"),
        day2DinnerStart: +new Date("2020-05-14T02:00:00.000Z"),
        day2DinnerEnd: +new Date("2020-05-14T03:30:00.000Z"),
        day3BreakfastStart: +new Date("2020-05-13T14:00:00.000Z"),
        day3BreakfastEnd: +new Date("2020-05-13T16:30:00.000Z"),
        day3LunchStart: O.day1LunchStart,
        day3LunchEnd: +new Date("2020-05-13T21:00:00.000Z")
    }, k = n(94), S = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : v()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }, w = 1e3;
    !function(e) {
        e[e.BeforeLiveExperience = 0] = "BeforeLiveExperience",
        e[e.PreEvent = 1] = "PreEvent",
        e[e.PreShow = 2] = "PreShow",
        e[e.MainKeynote = 3] = "MainKeynote",
        e[e.Day1Lunch = 4] = "Day1Lunch",
        e[e.DevKeynote = 5] = "DevKeynote",
        e[e.Day1Sessions = 6] = "Day1Sessions",
        e[e.Day1AfterHours = 7] = "Day1AfterHours",
        e[e.Day1Complete = 8] = "Day1Complete",
        e[e.Day2Sessions = 9] = "Day2Sessions",
        e[e.Day2Concert = 10] = "Day2Concert",
        e[e.Day2Complete = 11] = "Day2Complete",
        e[e.Day3Sessions = 12] = "Day3Sessions",
        e[e.Day3Complete = 13] = "Day3Complete",
        e[e.ConferenceComplete = 14] = "ConferenceComplete",
        e[e.LiveExperienceEnd = 15] = "LiveExperienceEnd"
    }(o || (o = {})),
    function(e) {
        e[e.NotDuringConference = 0] = "NotDuringConference",
        e[e.Day1 = 1] = "Day1",
        e[e.Day2 = 2] = "Day2",
        e[e.Day3 = 3] = "Day3"
    }(a || (a = {})),
    function(e) {
        e[e.NotDuringMeal = 0] = "NotDuringMeal",
        e[e.Breakfast = 1] = "Breakfast",
        e[e.Lunch = 2] = "Lunch",
        e[e.Dinner = 3] = "Dinner"
    }(r || (r = {}));
    var _ = function() {
        function e() {
            var t = this;
            p()(this, e),
            this.currentTime = +new Date,
            this.interval = w,
            this.intervalMultiplier = 1,
            k.a && m.T && (this.initFirebase(),
            this.worker = new Worker("".concat("/io/", "assets/time-worker.js")),
            this.worker.onmessage = function(e) {
                var n = e.data;
                return t.updateTime(n)
            }
            )
        }
        var t;
        return g()(e, [{
            key: "initFirebase",
            value: (t = d()(c.a.mark((function e() {
                var t, o;
                return c.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Promise.resolve().then(n.bind(null, 200));
                        case 2:
                            return t = e.sent,
                            o = t.Firebase,
                            e.next = 6,
                            o.getInstance();
                        case 6:
                            this.firebase = e.sent,
                            this.firebase.onKeynoteStatusUpdate = this.updateKeynoteStatus;
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "isBetween",
            value: function(e, t) {
                return this.currentTime >= e && this.currentTime < t
            }
        }, {
            key: "isCustomTimeBetween",
            value: function(e, t, n) {
                return e >= t && e < n
            }
        }, {
            key: "isSessionCompleted",
            value: function(e) {
                return this.currentTime > +e.endTime
            }
        }, {
            key: "isSessionLive",
            value: function(e) {
                return this.isBetween(+e.startTime, +e.endTime)
            }
        }, {
            key: "isSessionStreaming",
            value: function(e) {
                return this.isSessionLive(e) && e.livestream
            }
        }, {
            key: "getOverline",
            value: function(e) {
                var t;
                if (this.isSessionLive(e))
                    t = "Happening now";
                else {
                    var n = Object(m.C)(+e.startTime)
                      , o = "".concat(n[0]).replace(":00", "")
                      , a = n[1]
                      , r = "".concat(o).concat(a);
                    t = "Coming up at ".concat(r)
                }
                return t
            }
        }, {
            key: "getMealPhase",
            value: function(e) {
                return this.isCustomTimeBetween(e, j.day1BreakfastStart, j.day1BreakfastEnd) || this.isCustomTimeBetween(e, j.day2BreakfastStart, j.day2BreakfastEnd) || this.isCustomTimeBetween(e, j.day3BreakfastStart, j.day3BreakfastEnd) ? r.Breakfast : this.isCustomTimeBetween(e, j.day1LunchStart, j.day1LunchEnd) || this.isCustomTimeBetween(e, j.day2LunchStart, j.day2LunchEnd) || this.isCustomTimeBetween(e, j.day3LunchStart, j.day3LunchEnd) ? r.Lunch : this.isCustomTimeBetween(e, j.day1DinnerStart, j.day1DinnerEnd) || this.isCustomTimeBetween(e, j.day2DinnerStart, j.day2DinnerEnd) ? r.Dinner : r.NotDuringMeal
            }
        }, {
            key: "updateTime",
            value: function(e) {
                k.b ? this.currentTime += e : this.currentTime += 1e3 * this.intervalMultiplier
            }
        }, {
            key: "setTime",
            value: function(e) {
                this.currentTime = e
            }
        }, {
            key: "setSpeedInterval",
            value: function(e) {
                k.b ? this.postToWorker("update", {
                    multiplier: e
                }) : (clearInterval(this.timer),
                this.intervalMultiplier = e,
                this.start())
            }
        }, {
            key: "updateKeynoteStatus",
            value: function(e) {
                this.keynotesStatus = e
            }
        }, {
            key: "start",
            value: function() {
                k.b ? this.postToWorker("start") : this.timer = setInterval(this.updateTime, this.interval / this.intervalMultiplier)
            }
        }, {
            key: "postToWorker",
            value: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (m.T) {
                    var n = JSON.stringify(s()({
                        command: e
                    }, t));
                    this.worker.postMessage(n)
                }
            }
        }, {
            key: "currentHour",
            get: function() {
                return Math.floor(this.currentTime / m.n)
            }
        }, {
            key: "currentMinutes",
            get: function() {
                return Math.floor(this.currentTime / m.o)
            }
        }, {
            key: "currentTimePDT",
            get: function() {
                return Object(m.y)(this.currentTime)
            }
        }, {
            key: "currentHourPDT",
            get: function() {
                return Math.floor(this.currentTimePDT / m.n)
            }
        }, {
            key: "currentMinutesPDT",
            get: function() {
                return Math.floor(this.currentTimePDT / m.o)
            }
        }, {
            key: "currentDay",
            get: function() {
                return this.isBetween(O.day1, O.day2) ? a.Day1 : this.isBetween(O.day2, O.day3) ? a.Day2 : this.isBetween(O.day3, O.conferenceComplete) ? a.Day3 : a.NotDuringConference
            }
        }, {
            key: "currentConferencePhase",
            get: function() {
                var e = this.currentTime;
                return e < O.liveExperienceStart ? o.BeforeLiveExperience : e >= O.liveExperienceStart && e < O.preShowStart ? o.PreEvent : e >= O.preShowStart && e < O.mainKeynoteStart ? o.PreShow : e >= O.mainKeynoteStart && !this.hasMainKeynoteEnded && e < O.devKeynoteStart ? o.MainKeynote : e < O.devKeynoteStart ? o.Day1Lunch : e >= O.devKeynoteStart && !this.hasDeveloperKeynoteEnded && e < O.day1SessionsStart ? o.DevKeynote : e < O.day1AfterHoursStart ? o.Day1Sessions : e >= O.day1AfterHoursStart && e < O.day1End ? o.Day1AfterHours : e >= O.day1End && e < O.day2Start ? o.Day1Complete : e >= O.day2Start && e < O.day2ConcertStart ? o.Day2Sessions : e >= O.day2ConcertStart && e < O.day2End ? o.Day2Concert : e >= O.day2End && e < O.day3Start ? o.Day2Complete : e >= O.day3Start && e < O.day3End ? o.Day3Sessions : e >= O.day3End && e < O.conferenceComplete ? o.Day3Complete : e >= O.conferenceComplete && e < O.liveExperienceEnd ? o.ConferenceComplete : e >= O.liveExperienceEnd ? o.LiveExperienceEnd : void 0
            }
        }, {
            key: "isLiveExperience",
            get: function() {
                return this.currentConferencePhase > o.BeforeLiveExperience && this.currentConferencePhase < o.LiveExperienceEnd
            }
        }, {
            key: "shouldDisplayCountdown",
            get: function() {
                return this.currentTime < O.mainKeynoteStart + 20 * m.p
            }
        }, {
            key: "isKeynotePlaying",
            get: function() {
                return this.currentConferencePhase === o.MainKeynote || this.currentConferencePhase === o.DevKeynote
            }
        }, {
            key: "hasMainKeynoteEnded",
            get: function() {
                return !!this.keynotesStatus && this.keynotesStatus.mainKeynoteEnded
            }
        }, {
            key: "hasDeveloperKeynoteEnded",
            get: function() {
                return !!this.keynotesStatus && this.keynotesStatus.developerKeynoteEnded
            }
        }]),
        e
    }();
    S([y.l], _.prototype, "currentTime", void 0),
    S([y.l], _.prototype, "keynotesStatus", void 0),
    S([y.e], _.prototype, "currentHour", null),
    S([y.e], _.prototype, "currentMinutes", null),
    S([y.e], _.prototype, "currentTimePDT", null),
    S([y.e], _.prototype, "currentHourPDT", null),
    S([y.e], _.prototype, "currentMinutesPDT", null),
    S([y.e], _.prototype, "currentDay", null),
    S([y.e], _.prototype, "currentConferencePhase", null),
    S([y.e], _.prototype, "isLiveExperience", null),
    S([y.e], _.prototype, "shouldDisplayCountdown", null),
    S([y.e], _.prototype, "isKeynotePlaying", null),
    S([y.e], _.prototype, "hasMainKeynoteEnded", null),
    S([y.e], _.prototype, "hasDeveloperKeynoteEnded", null),
    S([y.d.bound], _.prototype, "updateTime", null),
    S([y.d.bound], _.prototype, "setTime", null),
    S([y.d.bound], _.prototype, "setSpeedInterval", null),
    S([y.d.bound], _.prototype, "updateKeynoteStatus", null),
    n.d(t, "a", (function() {
        return o
    }
    )),
    n.d(t, "b", (function() {
        return a
    }
    )),
    n.d(t, "d", (function() {
        return r
    }
    )),
    n.d(t, "e", (function() {
        return _
    }
    )),
    n.d(t, "c", (function() {
        return O
    }
    ))
}
, , , , , , , , function(e, t, n) {
    e.exports = {
        infoRaw: "infoRaw__2jPoi",
        tabTitle: "tabTitle__3FYyU",
        travelSemicircle: "travelSemicircle__3Quvn",
        travelShapes: "travelShapes__36rJB",
        travelImageLeftWrapper: "travelImageLeftWrapper__eJL2A",
        travelImageRightWrapper: "travelImageRightWrapper__ubQ1P",
        travelCircleMobile: "travelCircleMobile__2aC6V",
        travelSquareMobile: "travelSquareMobile__3VAmc",
        travelImageRight: "travelImageRight__LkcIc",
        travelImageLeft: "travelImageLeft__7Oi80",
        travelCircle: "travelCircle__fbW0i",
        travelSquare: "travelSquare__3ry5I",
        gettingToIO: "gettingToIO__jdsng",
        gettingToIoTitle: "gettingToIoTitle__3T6xn",
        travelInfo: "travelInfo__QZ_tZ",
        travelInfoHeading: "travelInfoHeading___dfbE",
        travelInfoColHeading: "travelInfoColHeading__26jmT",
        travelAccordionHeading: "travelAccordionHeading__1W9Od",
        travelAccordionBlock: "travelAccordionBlock__6BvlP",
        accordionBodyWrapper: "accordionBodyWrapper__u4UzX",
        localTravelInfoSection: "localTravelInfoSection__SUAqX",
        travelHeroShapes: "travelHeroShapes__3Ve-w",
        heroImage: "heroImage__5gPRB",
        heroShape: "heroShape__1RgRW",
        shapeSection: "shapeSection__11c87",
        rideShapeSection: "rideShapeSection__1t6Xz",
        semiCircleImage: "semiCircleImage__1RDP1",
        photoSection: "photoSection__1LTjS",
        imageWrapper: "imageWrapper__2MhTa",
        shapeRow: "shapeRow__2gto4",
        lowerShapeGroup: "lowerShapeGroup__3_X-1",
        upperShapeGroupMobile: "upperShapeGroupMobile__3jEe9"
    }
}
, function(e, t, n) {
    e.exports = {
        sessionItem: "sessionItem__15Y45",
        sessionItemRow: "sessionItemRow__36S6E",
        sessionItemRowDefault: "sessionItemRowDefault__2_4ED",
        reserveControls: "reserveControls__1rSnD",
        sessionItemCard: "sessionItemCard__2N3aN",
        sessionInfoOverline: "sessionInfoOverline__z5wZ8",
        title: "title__18xB4",
        sessionItemActions: "sessionItemActions__1imgd",
        sessionInfo: "sessionInfo__2v7BZ",
        sessionSpeakers: "sessionSpeakers__2I0oc",
        sessionItemMeta: "sessionItemMeta__2AFSB",
        sessionItemFeedCard: "sessionItemFeedCard__KwmeG",
        sessionMeta: "sessionMeta__ZeSSn",
        truncatedTagLabel: "truncatedTagLabel__1gtRx",
        sessionLiveIndicator: "sessionLiveIndicator__uoVaD",
        sessionItemLive: "sessionItemLive__Mx4IF",
        sessionRoom: "sessionRoom__3QpNk",
        sessionItemRowCompact: "sessionItemRowCompact__3kRpN"
    }
}
, function(e, t, n) {
    e.exports = {
        hero: "hero__1Z0C1",
        heroContent: "heroContent__cWL9h",
        heroTitle: "heroTitle__OVmfw",
        shapeContainer: "shapeContainer__3jqQX",
        shape: "shape__3eIiR",
        paragraphs: "paragraphs__3MlWs",
        imageWrapper: "imageWrapper__2y2eQ",
        infoRaw: "infoRaw__3Dxy-",
        infoRawWithShape: "infoRawWithShape__1ou5O",
        infoHeading: "infoHeading__UlPpd",
        ctaInfoHeading: "ctaInfoHeading__3kft3",
        infoBlock: "infoBlock__3L8Ab",
        sustainabilityInfoSection: "sustainabilityInfoSection__3msey",
        shapeSection: "shapeSection__33Wk-",
        shapeSectionImage: "shapeSectionImage__2LXUc",
        shapeWrapper: "shapeWrapper__36hZb"
    }
}
, function(e, t) {
    e.exports = {
        hero: {
            title: "Join us at Shoreline Amphitheatre in Mountain View, CA as we celebrate\nproduct and platform innovations at Google.\n",
            button: {
                label: "Get schedule notifications",
                href: "https://photos.google.com/share/AF1QipPVl8f866ZT5Diq8Fzt7BWYBJu9wEqXzvX9Obf5SS1cBM1qv1FDH_xePvnPqq0tBA?key=eWpkZnE4bTl1cTd3UWp2MFB0azlJU3BHcnRpVjFB"
            }
        },
        tabs: [{
            label: "Event",
            slug: "event"
        }, {
            label: "Travel",
            slug: "travel"
        }],
        event: {
            title: "On May 12-14, we'll be taking over Shoreline with technical sessions, hands-on demos, Google experts, and some fun evening events.\n",
            imageLeft: {
                props: {
                    src: "//storage.googleapis.com/io-19-assets/images/attending/codelabs.jpg",
                    src2x: "//storage.googleapis.com/io-19-assets/images/attending/codelabs_2x.jpg",
                    alt: "Codelabs I/O 2018"
                }
            },
            imageRight: {
                props: {
                    src: "//storage.googleapis.com/io-19-assets/images/attending/audience.jpg",
                    src2x: "//storage.googleapis.com/io-19-assets/images/attending/audience_2x.jpg",
                    alt: "Audience during keynote I/O 2018"
                }
            },
            explore: {
                title: "What to expect & explore",
                description: "I/O features hands-on learning, Google's latest developer products, and technical talks given by the engineers who are developing our latest APIs and tools — plus a few surprises along the way.\n",
                grid: [{
                    title: "Sandbox",
                    SVG: "Sprinkler",
                    SVGColor: "Red",
                    description: "Dedicated spaces to explore, learn, and play with our latest products and platforms via interactive demos, physical installations, and more.\n"
                }, {
                    title: "Office Hours & App Reviews",
                    SVG: "FruitPlatter",
                    SVGColor: "Blue",
                    description: "Office Hours provide the chance to meet one-on-one with Google experts to ask all your technical questions, and App Reviews are the opportunity to receive advice and tips on your specific app-related projects.\n"
                }, {
                    title: "Codelabs",
                    SVG: "SunRays",
                    SVGColor: "Green",
                    description: "Get hands-on experience in our ready-to-code kiosks. Here, you'll have everything you need to learn about the latest and greatest Google technologies via self-paced tutorials, or bring your own machine and take your work home with you. Google staff will be on hand for helpful advice and to provide direction if you get stuck.\n"
                }, {
                    title: "Workshops",
                    SVG: "PickUpSticks",
                    SVGColor: "Yellow",
                    description: "Join Google-led interactive workshops to apply what you've seen and learned about at I/O. Come build on what you've heard throughout the week.\n"
                }]
            },
            hero: {
                title: "On May 12-14, we'll be taking over Shoreline with technical sessions,\nhands-on demos, Google experts, and some fun evening events.\n",
                maskedImage: {
                    src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-event-01-1x.jpg",
                    src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-event-01-2x.jpg",
                    alt: "I/O 2020 event"
                },
                sections: [{
                    title: "What to expect & explore",
                    text: "I/O features hands-on learning. Google's latest developer products, and\ntechnical talks given by the engineers who are developing our latest\nAPIs and tools — plus a few surprises along the way.\n"
                }]
            }
        },
        travel: {
            title: "We've pulled together all the travel, booking, and transportation information you need for a great I/O 2020 experience.\n",
            imageLeft: {
                props: {
                    src: "//storage.googleapis.com/io-19-assets/images/attending/signs.jpg",
                    src2x: "//storage.googleapis.com/io-19-assets/images/attending/signs_2x.jpg",
                    alt: "Signs from I/O 2018"
                }
            },
            imageRight: {
                props: {
                    src: "//storage.googleapis.com/io-19-assets/images/attending/dome.jpg",
                    src2x: "//storage.googleapis.com/io-19-assets/images/attending/dome_2x.jpg",
                    alt: "I/O 2018 event"
                }
            },
            hotelMap: "https://www.google.com/maps/d/embed?mid=12Qj7gXZSokgkT2N73QHDkrLmBEJx2OAn",
            info: {
                title: "Getting to I/O",
                items: [{
                    heading: "Getting to Mountain View",
                    description: 'Here are the three major airports in the Bay Area with international airline service.<br><br> <div class="attendingInfoAirports">\n  <div><h4>SFO</h4><h6 aria-level="5">24 miles</h6>\n  <a href="https://www.google.com/maps/dir/San+Francisco+International+Airport,+San+Francisco,+CA+94128/Shoreline+Amphitheatre,+Amphitheatre+Parkway,+Mountain+View,+CA/@37.5206703,-122.3803144,11z/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x808f778c55555555:0xa4f25c571acded3f!2m2!1d-122.3789554!2d37.6213129!1m5!1m1!1s0x808fb9f776f5e165:0x1ddf014a1b553f3d!2m2!1d-122.0807647!2d37.4267703!2m3!6e0!7e2!8j1463556000!3e0?hl=en" native target="_blank" rel="noopener noreferrer">\n  San Francisco International Airport\n  </a></div>\n  <div><h4>OAK</h4><h6 aria-level="5">32 miles</h6>\n  <a href="https://www.google.com/maps/dir/Oakland+International+Airport,+Oakland,+CA/Shoreline+Amphitheatre,+Amphitheatre+Parkway,+Mountain+View,+CA/@37.5755915,-122.270249,11z/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x808f845402c0a641:0xb0630c0f03017460!2m2!1d-122.2197428!2d37.7125689!1m5!1m1!1s0x808fb9f776f5e165:0x1ddf014a1b553f3d!2m2!1d-122.0807647!2d37.4267703!2m3!6e0!7e2!8j1463556000!3e0?hl=en" native target="_blank" rel="noopener noreferrer">\n  Oakland International Airport\n  </a></div>\n  <div><h4>SJC</h4><h6 aria-level="5">12 miles</h6>\n  <a href="https://www.google.com/maps/dir/San+Jose+International+Airport-Sjc,+Airport+Boulevard,+San+Jose,+CA,+United+States/Shoreline+Amphitheatre,+Amphitheatre+Parkway,+Mountain+View,+CA/@37.3954744,-122.0741791,12z/data=!3m1!4b1!4m18!4m17!1m5!1m1!1s0x808fcbc3fab3c59b:0xbcfa443f6df67e3e!2m2!1d-121.9289375!2d37.3639472!1m5!1m1!1s0x808fb9f776f5e165:0x1ddf014a1b553f3d!2m2!1d-122.0807647!2d37.4267703!2m3!6e0!7e2!8j1463556000!3e0?hl=en" native target="_blank" rel="noopener noreferrer">\n  San Jose International Airport\n  </a></div>\n</div>\n'
                }, {
                    heading: "Getting to Shoreline",
                    description: 'As I/O continues to work to reduce traffic congestion and our carbon emissions, Google I/O 2020 has again committed to be a "No Parking" event.* This decision has been carefully considered and we are offering many options to arrive at the event without requiring a personal vehicle. <br><br> We will be providing more information as the event approaches. <br><br> *Accessibility parking will be available.\n'
                }],
                accordionsGroup1: {
                    items: [{
                        heading: "Shuttle service",
                        anchor: "shuttle-service",
                        description: "Free event shuttles from all event recommended hotels will be provided for Google I/O attendees. There will also be select service from San Francisco, Mountain View Caltrain, San Jose, and other Bay Area locations. We are increasing shuttle frequency and capacity at the Mountain View Caltrain station this year. <br><br> Please check back closer to the event for pick-up schedules and additional shuttle pick-up locations. The full shuttle schedule will be posted closer to the event.\n"
                    }, {
                        heading: "Off-site parking",
                        anchor: "off-site-parking",
                        description: "Free off-site parking will be provided at Levi's Stadium. Free shuttles from Levi's will be provided to/from Google I/O.<br><br>Please indicate on your registration form if you have any ADA or special assistance requirements, and the planning team will follow up with you directly.\n"
                    }, {
                        heading: "Public transportation",
                        anchor: "public-transportation",
                        description: 'Public transportation to the area is accessible via: <br><br> <div class="attendingInfoTransport">\n  <a href="http://www.caltrain.com/" native target="_blank" rel="noopener noreferrer">Caltrain</a> <span>Regional rail system</span>\n  <a href="http://www.vta.org/getting-around/interactive-light-rail-map" native target="_blank" rel="noopener noreferrer">VTA</a> <span>Light rail system servicing the South Bay</span>\n  <a href="https://www.bart.gov/" native target="_blank" rel="noopener noreferrer">BART</a> <span>Bay Area Rapid Transit</span>\n  <a href="https://www.amtrak.com/home" native target="_blank" rel="noopener noreferrer">AMTRAK</a> <span>Regional rail system</span>\n  <a href="https://acerail.com/" native target="_blank" rel="noopener noreferrer">ACE</a> <span>Altamont Corridor rail system</span>\n</div> <br> Public transit doesn\'t go directly to Google I/O. Stay tuned for the exact transportation locations serviced by Google I/O event shuttles.\n'
                    }]
                },
                accordionsGroup2: {
                    items: [{
                        heading: "Biking",
                        anchor: "biking",
                        description: "Complimentary valet bike parking will be available at Shoreline Amphitheatre in Parking Lot A, near registration. The Silicon Valley Bicycle Coalition will provide secure valet parking for your bicycle from 7am until the event ends each day. <br> <br> Check Google Maps for the best bike maps and directions. There are two trails: Stevens Creek Trail and Permanente Creek Trail, that are convenient for bike riders heading to Shoreline Amphitheatre.\n"
                    }],
                    imageLeft: {
                        src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-travel-02-1x.jpg",
                        src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-travel-02-2x.jpg"
                    }
                },
                accordionsGroup3: {
                    items: [{
                        heading: "Ridesharing",
                        anchor: "ridesharing",
                        description: 'We will be offering subsidized use of Lyft Line and Uber Pool to/from Shoreline. Redemption code details will be shared closer to the event. <div class="attendingInfoRidesharing">\n  <div>\n    <b role="heading" aria-level="6">Lyft Line</b>\n    Download the Lyft app (<a href="https://play.google.com/store/apps/details?id=me.lyft.android&hl=enor" native target="_blank" rel="noopener noreferrer">Android</a>, <a href="https://itunes.apple.com/us/app/lyft-taxi-app-alternative/id529379082?mt=8" native target="_blank" rel="noopener noreferrer">iOS</a>) and use <a href="https://help.lyft.com/hc/en-us/articles/115013078848-About-Shared-rides" native target="_blank" rel="noopener noreferrer">Lyft Shared</a> using Code: <b>IO2020</b> to share a ride with others going the same way.\n  </div>\n  <div>\n    <b role="heading" aria-level="6">Airport Transfers</b>\n    Airport transfers to SFO and SJC from Google I/O will be provided on the last day of the event. Airport transfers will NOT be provided on any other dates.\n  </div>\n</div>\n'
                    }]
                }
            },
            hero: {
                title: "We've pulled together all the travel, booking, and transportation\ninformation you need for a great I/O 2020 experience.\n",
                maskedImage: {
                    src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-travel-01-1x.jpg",
                    src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/attending/attending-travel-01-2x.jpg",
                    alt: "I/O 2020 experience"
                },
                sections: [{
                    title: "What to bring for the event",
                    text: "Google I/O is an outdoor event. While this is a big part of what\nmakes I/O special, it also means there are some things to consider.\nSessions will happen inside of climate-controlled tents, but sunscreen,\nsunglasses, a hat, and an extra layer for the evening are recommended.\nI/O is a casual event, so keep this in mind when deciding what to wear.\n"
                }, {
                    title: "Hotels",
                    text: "We have room blocks at several local hotels. The list of hotels will\nbe updated regularly. Please use the map below to find the hotel that\nis best for you.\n"
                }]
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o = n(48);
    n.d(t, "a", (function() {
        return o.c
    }
    )),
    n.d(t, "b", (function() {
        return o.d
    }
    ))
}
, function(e, t, n) {
    e.exports = {
        eventFilters: "eventFilters__3iR7N",
        filtersSection: "filtersSection__2359t",
        filtersSectionGrey: "filtersSectionGrey__1TgLI",
        filterSwitches: "filterSwitches__1CR_8",
        filtersSwitch: "filtersSwitch__2PJgr",
        header: "header__2veg0",
        headerTitle: "headerTitle__2g_Nu",
        resetButton: "resetButton__3EqFO",
        twoCols: "twoCols__1hst8",
        tagButton: "tagButton__XuqVF",
        tag: "tag__79Ld4"
    }
}
, function(e, t, n) {
    e.exports = {
        agenda: "agenda__2Cuil",
        calendar: "calendar__3ASh5",
        timeBar: "timeBar__b9M84",
        timeWithSuffix: "timeWithSuffix__2uPth",
        timeWithoutSuffix: "timeWithoutSuffix__3FB5s",
        day: "day__2Fs_v",
        date: "date__HrqQp",
        dateWeekday: "dateWeekday__c6J_B",
        dateDayNumber: "dateDayNumber__KJVBf",
        row: "row__WRVvc",
        eventIcon: "eventIcon__3jIwU",
        eventLabel: "eventLabel__1xNJF",
        eventTitle: "eventTitle__2IhWF",
        formattedEventTime: "formattedEventTime__1x2iy",
        event: "event__YGTKe",
        eventGrey: "eventGrey__JYwoo",
        eventRed: "eventRed__2g88B",
        eventBlue: "eventBlue__3pTyG",
        eventYellow: "eventYellow__1FduS",
        eventGreen: "eventGreen__2A2MQ",
        eventRedBorder: "eventRedBorder__237a4",
        eventDarkBlue: "eventDarkBlue__3iEqq"
    }
}
, function(e, t, n) {
    e.exports = {
        hero: "hero__5N3o2",
        heroTitle: "heroTitle__1BMQE",
        heroMiddleRow: "heroMiddleRow__2t1Rm",
        heroBottomRow: "heroBottomRow__1SUEq",
        maskShape: "maskShape__1_4WL",
        yellowPurpleShapes: "yellowPurpleShapes__6Bst8",
        purpleSquare: "purpleSquare__30xGc",
        yellowSemicircle: "yellowSemicircle___yP_W",
        heroVideoWrapper: "heroVideoWrapper__3hg_1",
        heroVideo: "heroVideo__3lkVJ",
        upcomingSessions: "upcomingSessions__kelL8",
        banner: "banner__3AA7m",
        bannerImageBottom: "bannerImageBottom__2xZfz",
        bannerImageTop: "bannerImageTop__2iua_",
        bannerImage: "bannerImage__kadfk",
        tweets: "tweets__3FMXi"
    }
}
, function(e, t, n) {
    e.exports = {
        content: "content__1Mpg-",
        contentWithVideo: "contentWithVideo__13SVQ",
        title: "title__2lywV",
        time: "time__2FhRi",
        roomName: "roomName__3sPAc",
        livestreamIcon: "livestreamIcon__3ZLQu",
        ctas: "ctas__2oizh",
        description: "description__2hkXJ",
        summary: "summary__1zQdN",
        speakers: "speakers__2S0Zr",
        relatedEvents: "relatedEvents__1TF2G",
        tags: "tags__2zsEK",
        fabsMobile: "fabsMobile__2e_aq",
        reserveMobile: "reserveMobile__2aOb-",
        fabsDesktop: "fabsDesktop__3YRtg",
        reserveDesktop: "reserveDesktop__2fVF8",
        rateSession: "rateSession__1ebFx",
        rateSessionButton: "rateSessionButton__3s4lP",
        rateSessionButtonDisabled: "rateSessionButtonDisabled__22nzC"
    }
}
, , function(e, t, n) {
    e.exports = {
        Countdown__wrapper: "Countdown__wrapper__CXSxt",
        Countdown: "Countdown__223sL",
        Countdown__timeleft: "Countdown__timeleft__2cdb_",
        Countdown__col: "Countdown__col__1cQBm",
        Countdown__ShapeWheel: "Countdown__ShapeWheel__B4RH_",
        "Countdown__ShapeGrid--minutes": "Countdown__ShapeGrid--minutes__2jkHi",
        "Countdown__ShapeGrid--hours": "Countdown__ShapeGrid--hours__3zwfC",
        "Countdown__ShapeGrid--weeks": "Countdown__ShapeGrid--weeks__35oy5"
    }
}
, function(e, t, n) {
    e.exports = {
        liveGrid: "liveGrid__3PQPZ",
        heading: "heading__2xhnn",
        controls: "controls__GnW4Y",
        channelsGutter: "channelsGutter__1xeWZ",
        column: "column__MXGzy",
        channelHeading: "channelHeading__2a8Rp",
        channelCell: "channelCell__1nasF",
        columns: "columns__3IJJH",
        columnHeader: "columnHeader__2-2YP",
        cell: "cell__1McNO",
        sessionHolder: "sessionHolder__IvR_s",
        sessionItem: "sessionItem__2IXuX",
        pastBlock: "pastBlock__re0CZ",
        sessionItemFiltered: "sessionItemFiltered__3PfMW",
        fillerBlock: "fillerBlock__1fFSU"
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "s", (function() {
        return i
    }
    )),
    n.d(t, "b", (function() {
        return s
    }
    )),
    n.d(t, "a", (function() {
        return l
    }
    )),
    n.d(t, "d", (function() {
        return c
    }
    )),
    n.d(t, "r", (function() {
        return u
    }
    )),
    n.d(t, "i", (function() {
        return d
    }
    )),
    n.d(t, "j", (function() {
        return h
    }
    )),
    n.d(t, "m", (function() {
        return p
    }
    )),
    n.d(t, "h", (function() {
        return f
    }
    )),
    n.d(t, "k", (function() {
        return g
    }
    )),
    n.d(t, "l", (function() {
        return b
    }
    )),
    n.d(t, "c", (function() {
        return v
    }
    )),
    n.d(t, "q", (function() {
        return m
    }
    )),
    n.d(t, "o", (function() {
        return y
    }
    )),
    n.d(t, "n", (function() {
        return O
    }
    )),
    n.d(t, "e", (function() {
        return o
    }
    )),
    n.d(t, "f", (function() {
        return a
    }
    )),
    n.d(t, "g", (function() {
        return r
    }
    )),
    n.d(t, "p", (function() {
        return j
    }
    )),
    n.d(t, "t", (function() {
        return k
    }
    ));
    var o, a, r, i = !1, s = "https://storage.googleapis.com/io-19-assets/", l = ("https://storage.googleapis.com/io-2019.appspot.com/extended-map/extended-map.json?cb=".concat(Date.now()),
    {
        SESSIONS: "https://firebasestorage.googleapis.com/v0/b/io2019-festivus/o/sessions.json?alt=media&token=725ac9a8-2400-4aec-afe0-ff098629c08b"
    }), c = "https://firebasestorage.googleapis.com/v0/b/io2019-festivus/o", u = "".concat(s, "images/schedule/session-details"), d = "https://storage.googleapis.com/io-2018.appspot.com/v1/map/tiles/day/blank.png", h = "https://storage.googleapis.com/io-2018.appspot.com/v1/map/tiles/night1/blank.png", p = "https://storage.googleapis.com/io-2018.appspot.com/v1/map/assets/location_blue_dot.svg", f = ("https://storage.googleapis.com/io-2019.appspot.com/map/map_markers_concert.json?cb=".concat(Date.now()),
    "https://storage.googleapis.com/io-2019.appspot.com/map/map_markers_day.json?cb=".concat(Date.now()),
    "https://storage.googleapis.com/io-2019.appspot.com/map/map_markers_night.json?cb=".concat(Date.now()),
    "https://storage.googleapis.com/io-2019.appspot.com/map"), g = 24, b = 28, v = "/io", m = 64, y = 320, O = y / (16 / 9);
    !function(e) {
        e[e.Space = 32] = "Space",
        e[e.Enter = 13] = "Enter",
        e[e.Escape = 27] = "Escape",
        e[e.Tab = 9] = "Tab"
    }(o || (o = {})),
    function(e) {
        e.Space = "Space",
        e.Enter = "Enter",
        e.Escape = "Escape",
        e.Tab = "Tab"
    }(a || (a = {})),
    function(e) {
        e[e.Space = 0] = "Space",
        e[e.Enter = 1] = "Enter",
        e[e.Tab = 2] = "Tab",
        e[e.Escape = 3] = "Escape"
    }(r || (r = {}));
    var j = {
        dialog: "dialog",
        sessionOrSpeaker: "sessionOrSpeaker"
    }
      , k = "https://www.youtube.com/playlist?list=PLOU2XLYxmsILVTiOlMJdo7RQS55jYhsMi"
}
, function(e, t, n) {
    e.exports = {
        hero: "hero__3Kew1",
        centerBlockAside: "centerBlockAside__1VBr-",
        centerBlockAsideShape: "centerBlockAsideShape__12aHJ",
        mainShapes: "mainShapes__2n5B5",
        find: "find__1e7mz",
        photoSection: "photoSection__1v2G6",
        imageWrapper: "imageWrapper__13K3q",
        shapeRow: "shapeRow__38-Ap",
        host: "host__2ddpA",
        hostButtons: "hostButtons__3Byf8",
        button: "button__3UNst",
        lowerShapeGroup: "lowerShapeGroup__3ztu5",
        upperShapeGroupMobile: "upperShapeGroupMobile__1EPWA",
        hiddenPickUpSticks: "hiddenPickUpSticks__3myBT"
    }
}
, function(e, t, n) {
    e.exports = {
        feedHero: "feedHero__14fuh",
        tagline: "tagline__2uRzy",
        copy: "copy__1pYmn",
        hasDarkBg: "hasDarkBg__TeHF-",
        infoBottom: "infoBottom__rNEf7",
        watchButton: "watchButton__2fnd1",
        hasImageBg: "hasImageBg__3wCGb",
        imageBg: "imageBg__2LvIx",
        height1: "height1__q9_AR",
        height2: "height2__1r6pn",
        height3: "height3__MoJ5F",
        preEvent: "preEvent__2TqMF",
        header: "header__3oLNM",
        logoColor: "logoColor__151Yv",
        logoWhite: "logoWhite__4UGsf",
        videoFullWidth: "videoFullWidth__1CK-b",
        playButtonWrapper: "playButtonWrapper__CdKD_",
        playButton: "playButton__1aEOb"
    }
}
, , function(e, t, n) {
    e.exports = {
        userAvatar: "userAvatar__3OBE-",
        userAvatarDesktop: "userAvatarDesktop__30JJd",
        signInHeading: "signInHeading__PsM_3",
        signInBody: "signInBody__2rEwZ",
        signInButtonRow: "signInButtonRow__1m8JN",
        userName: "userName__1cKa8",
        userEmail: "userEmail__1mSJL",
        signOutButtonRow: "signOutButtonRow__1dR6_",
        closeButtonRight: "closeButtonRight__30KLA",
        userAvatarMobile: "userAvatarMobile__2gBle",
        userInfo: "userInfo__3oEaX",
        signOutButtonRowMobile: "signOutButtonRowMobile__qgMF9",
        userNameMobile: "userNameMobile__2KM2-",
        userEmailMobile: "userEmailMobile__3ew0k",
        loggedInMessage: "loggedInMessage__oLGnE"
    }
}
, function(e, t, n) {
    e.exports = {
        extendedFormPage: "extendedFormPage__90ECF",
        formContent: "formContent__2q36W",
        section: "section__3MKW8",
        header: "header__2ocQW",
        intro: "intro__24z0r",
        mapSection: "mapSection__2RJ8e",
        mapWrapper: "mapWrapper__2qzj2",
        steps: "steps__3NiMY",
        flex: "flex__2oVaW",
        googleMapWrapper: "googleMapWrapper__1WAvv",
        buttonWrapper: "buttonWrapper__3PE_f",
        form: "form__2OlC9"
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", (function() {
        return o
    }
    )),
    n.d(t, "a", (function() {
        return r
    }
    )),
    n.d(t, "c", (function() {
        return i
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return l
    }
    )),
    n.d(t, "h", (function() {
        return c
    }
    )),
    n.d(t, "i", (function() {
        return u
    }
    )),
    n.d(t, "j", (function() {
        return d
    }
    )),
    n.d(t, "k", (function() {
        return h
    }
    )),
    n.d(t, "d", (function() {
        return p
    }
    )),
    n.d(t, "g", (function() {
        return f
    }
    ));
    var o = {
        apiKey: "AIzaSyD_5UYjcH5cAl2VCNxHmL_EMXm9oseqoyA",
        authDomain: "".concat("events-dev-62d2e", ".firebaseapp.com"),
        databaseURL: "https://".concat("events-dev-62d2e", ".firebaseio.com"),
        projectId: "events-dev-62d2e",
        storageBucket: "".concat("events-dev-62d2e", ".appspot.com"),
        messagingSenderId: "447780894619"
    }
      , a = "/google_io_events/2019"
      , r = "".concat(a, "/codelabs")
      , i = "".concat(a, "/keynotes/status")
      , s = "".concat(a, "/queue")
      , l = "".concat(a, "/rooms")
      , c = "".concat(a, "/scheduleSummary")
      , u = "".concat(a, "/speakers")
      , d = "".concat(a, "/tags")
      , h = "".concat(a, "/users")
      , p = "placeInLine"
      , f = "sendFeedback"
}
, function(e, t, n) {
    e.exports = {
        navContent: "navContent__1cn90",
        navContentRed: "navContentRed__kF3VU",
        navContentBlue: "navContentBlue__lACPA",
        navContentGreen: "navContentGreen__13G_s",
        navContentOpened: "navContentOpened__30xqt",
        navContentCompact: "navContentCompact__1TvLt",
        navLogo: "navLogo__5ARf7",
        innerSpan: "innerSpan__3CYI7",
        navContentLeft: "navContentLeft__3NsVq",
        navList: "navList__3hlfa",
        navListItem: "navListItem__1FzrY",
        navContentDefault: "navContentDefault__1U3AK",
        navContentRight: "navContentRight__2AigV",
        white: "white__xeNFm",
        navEventInfo: "navEventInfo__2MsI-",
        skipToContent: "skipToContent__2O4FX"
    }
}
, function(e, t, n) {
    e.exports = {
        ShapeWheel: "ShapeWheel__3h5dR",
        ShapeWheel__label: "ShapeWheel__label__1ROGV",
        "ShapeWheel__label--1": "ShapeWheel__label--1__3FUSy",
        "ShapeWheel__label--2": "ShapeWheel__label--2__20rwH",
        "ShapeWheel__label--3": "ShapeWheel__label--3__3-6oT",
        "ShapeWheel__label--4": "ShapeWheel__label--4__3TgB4",
        "ShapeWheel__layout-wrapper": "ShapeWheel__layout-wrapper__1T2tu",
        "ShapeWheel__interaction-wrapper": "ShapeWheel__interaction-wrapper__16tz_",
        "ShapeWheel__interaction-wrapper--keyfocus": "ShapeWheel__interaction-wrapper--keyfocus__-tPJm",
        ShapeWheel__wheel: "ShapeWheel__wheel__2yDK6",
        "ShapeWheel__shape-wrapper--line": "ShapeWheel__shape-wrapper--line__2PARF",
        "ShapeWheel__shape-wrapper--noodle": "ShapeWheel__shape-wrapper--noodle__1wL1U",
        "ShapeWheel__shape-wrapper--slice": "ShapeWheel__shape-wrapper--slice__Ow0Bp",
        "ShapeWheel__shape-wrapper--dash": "ShapeWheel__shape-wrapper--dash__3I1zl",
        "ShapeWheel__shape--noodle": "ShapeWheel__shape--noodle__2U-1e",
        "ShapeWheel__shape--dash": "ShapeWheel__shape--dash__2ayoK",
        "ShapeWheel__sizeref-wrapper": "ShapeWheel__sizeref-wrapper__1FImF",
        ShapeWheel__sizeref: "ShapeWheel__sizeref__13Q48",
        "ShapeWheel__sizeref--line": "ShapeWheel__sizeref--line__2mdx4",
        "ShapeWheel__sizeref--noodle": "ShapeWheel__sizeref--noodle__1vtGl",
        "ShapeWheel__sizeref--slice": "ShapeWheel__sizeref--slice__1piRf",
        "ShapeWheel__sizeref--dash": "ShapeWheel__sizeref--dash__2o7eM",
        ShapeWheel__sizeref__shape: "ShapeWheel__sizeref__shape__2gQM-"
    }
}
, function(e, t, n) {
    e.exports = {
        container: "container__1EXBB",
        title: "title__3SxI8",
        cards: "cards__CS5vK",
        card: "card__3wzdQ",
        banner: "banner__2L77c"
    }
}
, function(e, t, n) {
    e.exports = {
        stickyNav: "stickyNav__n0B9M",
        scheduleCards: "scheduleCards__2Qkxb",
        scheduleSubtitle: "scheduleSubtitle__3uENo",
        overviewSubtitle: "overviewSubtitle__27rbw",
        eventsSubtitle: "eventsSubtitle__10Mm5",
        filterMobileFab: "filterMobileFab__6RxDj",
        filterBelt: "filterBelt__1He2t",
        toolbarFabs: "toolbarFabs__2wOHC",
        toolbarMyIO: "toolbarMyIO__3rKJk"
    }
}
, function(e, t, n) {
    e.exports = {
        twitterTabs: "twitterTabs__Y_E7B",
        feedContainer: "feedContainer__OkUV4",
        tweetWrapper: "tweetWrapper__3LHPQ",
        tweetWrapperNoTweetsLeft: "tweetWrapperNoTweetsLeft__1GgH4",
        tweetColumn: "tweetColumn__1DuA4",
        tweet: "tweet__3amYw",
        feedInTabs: "feedInTabs__3Nsgx",
        feedHeading: "feedHeading__DJasB",
        showMoreFooter: "showMoreFooter__18xlQ"
    }
}
, function(e, t, n) {
    e.exports = {
        root: "root__2DbUt",
        toolbar: "toolbar__2fj-o",
        header: "header__1nb5P",
        headerVisible: "headerVisible__24LKt",
        videoPlayer: "videoPlayer__2hatx",
        fullSize: "fullSize__2qWHO",
        closed: "closed__1_qIq",
        videoContainer: "videoContainer__1Pxxi",
        minimizedControlsWrapper: "minimizedControlsWrapper__2XHzj",
        minimizedControls: "minimizedControls__35jCr",
        pipRestoreButton: "pipRestoreButton__7Cpm_",
        video: "video__3JVI-",
        videoDisabled: "videoDisabled__289UZ",
        card: "card__1gvhJ"
    }
}
, function(e, t) {
    e.exports = {
        watchButton: {
            label: "Watch the Google Keynote",
            href: "https://youtu.be/TQSaPsKHPqs?t=290"
        },
        preEvent: {
            tagline: "Starting soon"
        },
        mainKeynote: {
            tagline: "Google Keynote in progress"
        },
        lunch: {
            tagline: "Stay tuned for the Developer Keynote"
        },
        devKeynote: {
            tagline: "Developer Keynote in progress",
            currentlyPlaying: "Developer Keynote"
        },
        day1Progress: {
            tagline: "Day 1 in progress"
        },
        day1Complete: {
            tagline: "Day 1 is complete\nSee you tomorrow at 8:30 AM PDT\n"
        },
        day2Progress: {
            tagline: "Day 2 in progress"
        },
        day2Complete: {
            tagline: "Day 2 is complete\nSee you tomorrow at 8:30 AM PDT\n"
        },
        day3Progress: {
            tagline: "Day 3 in progress"
        },
        day3Complete: {
            tagline: "I/O 2019: It's a wrap.\nThank you for joining us! We hope you see you again next year.\n"
        },
        photoBackground: {
            src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-keynote-updated_2x.jpg",
            src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-keynote-updated_2x.jpg",
            mobile: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-keynote-updated_mobile.jpg"
        },
        graphicBackground: {
            src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-complete_1x.png",
            src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-complete_2x.png",
            mobile: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/feed-hero-bg-complete_mobile.png"
        }
    }
}
, function(e, t, n) {
    e.exports = {
        registrationHero: "registrationHero__paKJc",
        faqRaw: "faqRaw__3f_nS",
        heroTitle: "heroTitle__3Mx3h",
        heroTitleContent: "heroTitleContent__BurZJ",
        heroRegistrationCallout: "heroRegistrationCallout__1_-RX",
        heroShapes: "heroShapes__1nO_1",
        beltHeading: "beltHeading__3qpks",
        twoColBelt: "twoColBelt__3JHq4",
        twoColBeltGroup: "twoColBeltGroup__8uBiO",
        notificationsIcon: "notificationsIcon__2AxuV",
        ticketTypesWrapper: "ticketTypesWrapper__38y_B",
        ticketTypesContainer: "ticketTypesContainer__lobeY",
        ticketShape: "ticketShape__bFsqx",
        ticketType: "ticketType__2hGr-",
        ticketPrice: "ticketPrice__1amef",
        ticketTypeDesc: "ticketTypeDesc__xiGCl",
        termsAndConditions: "termsAndConditions__20NK5"
    }
}
, , function(e, t) {
    e.exports = {
        hero: {
            heading: "Register your Google I/O Extended event"
        },
        intro: {
            heading: "How it works",
            subheading: "This page will help you fill out the I/O Extended registration form by pre-populating it with your event's location information.\n"
        },
        steps: {
            heading: "Steps to register your Extended event",
            items: ["Create a PUBLIC rsvp page (on a platform of your choice) for your 2020 I/O Extended event.", "In the map below, search for the address of your event and select the result that best matches your location from the dropdown.", "Visually confirm the pin is at your event’s location. If it’s not correct, adjust the marker by dragging it to the correct location on the map. If Google Maps cannot find your location, double-click the map and move the pin to the correct location.", "Once you're finished, click \"Go to registration form.\" You'll be directed to the I/O Extended registration form with your location information pre-populated.", 'Fill out the entire I/O Extended registration form, agree to the Terms and Conditions at the bottom, and click "Submit."'],
            footnote: "You're all finished! Your event will be featured on the 2020 Extended map on the I/O website within a week of your submission."
        },
        map: {
            heading: "First, tell us where your event is",
            formUrl: "https://docs.google.com/forms/d/e/1FAIpQLSfjtnNbzZ7sfDJGRptSxnYLnrJGYog8leINd9_KAbWaN5Fpkg/viewform",
            placeholder: "Enter the address of your event",
            cta: {
                label: "Go to registration form",
                href: "https://docs.google.com/forms/d/e/1FAIpQLSfjtnNbzZ7sfDJGRptSxnYLnrJGYog8leINd9_KAbWaN5Fpkg/viewform"
            }
        }
    }
}
, function(e, t, n) {
    "use strict";
    var o, a, r;
    n(37);
    !function(e) {
        e.CANCEL_DENIED_CUTOFF = "CANCEL_DENIED_CUTOFF",
        e.CANCEL_DENIED_UNKNOWN = "CANCEL_DENIED_UNKNOWN",
        e.CANCEL_SUCCEEDED = "CANCEL_SUCCEEDED",
        e.RESERVE_DENIED_CLASH = "RESERVE_DENIED_CLASH",
        e.RESERVE_DENIED_CUTOFF = "RESERVE_DENIED_CUTOFF",
        e.RESERVE_DENIED_UNKNOWN = "RESERVE_DENIED_UNKNOWN",
        e.RESERVE_SUCCEEDED = "RESERVE_SUCCEEDED",
        e.RESERVE_WAITLISTED = "RESERVE_WAITLISTED",
        e.SWAP_DENIED_CLASH = "SWAP_DENIED_CLASH",
        e.SWAP_DENIED_CUTOFF = "SWAP_DENIED_CUTOFF",
        e.SWAP_DENIED_UNKNOWN = "SWAP_DENIED_UNKNOWN",
        e.SWAP_SUCCEEDED = "SWAP_SUCCEEDED",
        e.SWAP_WAITLISTED = "SWAP_WAITLISTED",
        e.UNKNOWN = "UNKNOWN"
    }(o || (o = {})),
    function(e) {
        e.NONE = "NONE",
        e.RESERVED = "RESERVED",
        e.WAITLISTED = "WAITLISTED"
    }(a || (a = {})),
    function(e) {
        e.CANCEL = "CANCEL",
        e.RESERVE = "RESERVE",
        e.SWAP = "SWAP"
    }(r || (r = {}));
    var i = n(200);
    n.d(t, "c", (function() {
        return o
    }
    )),
    n.d(t, "d", (function() {
        return a
    }
    )),
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return i.Firebase
    }
    ))
}
, function(e, t, n) {
    e.exports = {
        home: "home__108pG",
        heroWrapper: "heroWrapper__7BosH",
        hero: "hero__3FjgL",
        logo: "logo__152Xc",
        description: "description__1QuC8",
        descriptionBlue: "descriptionBlue__19jQm",
        descriptionRed: "descriptionRed__3uogC",
        descriptionGreen: "descriptionGreen__1syWM",
        descriptionYellow: "descriptionYellow__35MbK",
        descriptionThemeColored: "descriptionThemeColored__1pF0k",
        info: "info__1F-fH",
        countdown: "countdown__3tgbz",
        quoteContainer: "quoteContainer__OJK6L",
        quote: "quote__AycxD",
        exploreTheThemes: "exploreTheThemes__35Lg-",
        joinUs: "joinUs__1DBOW",
        videoPlayerSection: "videoPlayerSection__2eUTf",
        videoSection: "videoSection__13kx7",
        shapeSection: "shapeSection__SXpKX",
        videoWrapper: "videoWrapper__1tqll",
        maskedImage: "maskedImage__1BNuZ",
        previewImage: "previewImage__bdA7T",
        videoTitle: "videoTitle__QyU0Q",
        videoPlayerShapes: "videoPlayerShapes__G3LK4",
        radialAndDoubleSemiCircle: "radialAndDoubleSemiCircle__V-goC",
        doubleSemiCircle: "doubleSemiCircle__3NweW"
    }
}
, function(e, t, n) {
    e.exports = {
        tabList: "tabList__2rq2j",
        fadeIn: "fadeIn__10hh8",
        activeTab: "activeTab__2ftbo",
        disabledTab: "disabledTab__wF4ap",
        tabListItem: "tabListItem__3t0lj",
        tab: "tab__3-tlr"
    }
}
, function(e, t) {
    e.exports = {
        hero: {
            title1: "A more ",
            title2: "sustainable I/O",
            paragraphs: ["At Google, we’re committed to building sustainability into everything we do.  You might already know that we’ve been carbon neutral since 2007, and our operations have been matched by 100% renewable energy since 2017.", "Big gatherings like I/O typically leave a large footprint on the environment.  In 2019 we eliminated parking, used biodiesel blends in generators, and distributed refillable water bottles in an effort to cut down on emissions and waste.  But we knew there was a lot more work to be done.", "For 2020, we’ve identified some key areas where we can achieve meaningful, large-scale reductions in waste and emissions footprints."],
            image: {
                src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/sustainability/sustainability-01-1x.jpg",
                src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/sustainability/sustainability-01-2x.jpg",
                alt: "Sustainability in 2020"
            }
        },
        info: {
            title: "Our ongoing initiatives",
            group1: {
                items: [{
                    heading: "Offsetting travel emissions",
                    anchor: "offsetting-travel-emmisions",
                    description: "Attendee air travel is typically the largest contributor to the emissions footprint of any international gathering - and I/O is no exception. <br><br>That's why, in 2020, we're buying carbon offsets for every mile of air travel for all of our attendees. While it's not a perfect process, carbon offsetting helps. For every mile flown, we help fund high-quality offset projects that reduce emissions - like methane reclamation at landfills.\n"
                }, {
                    heading: "In-town transportation",
                    anchor: "in-town-transportation",
                    description: 'Since 2019, I/O has been a "No Parking" event.* This reduces congestion as well as emissions. Be sure to take advantage of our Shuttle and Public Transit options to arrive in style - and without a car.<br><br>*Accessiblity parking will be available\n'
                }, {
                    heading: "Reduced single-use disposables",
                    anchor: "reduced-single-use-disposables",
                    description: "Go H2O-crazy at our Hydration Stations with your I/O 2020 reusable water bottle - and use it forever. You'll also find less disposable packaging around the food you eat.\n"
                }]
            },
            group2: {
                items: [{
                    heading: "Fewer, better build materials",
                    anchor: "fewer-better-build-materials",
                    description: "Building I/O is a lot like building a village - and that takes a lot of energy and materials. In 2020, we're reusing many of the elements we build for I/O 2018 and 2019, and paring down the amount of things we build from scratch. When we do build from scratch, we’re on the hunt for local materials with low invested energy and fewer virgin materials.\n"
                }, {
                    heading: "Cleaner electricity",
                    anchor: "cleaner-electricity",
                    description: "Shoreline Amphitheatre is powered by Silicon Valley Clean Energy, which means that our grid power is sourced from renewables. In 2019, we used biodiesel blends in auxillary generators to reduce our emissions footprint. For 2020, we're optimizing our production process to use more clean grid power - and significantly reduce our dependence on diesel generators.\n"
                }, {
                    heading: "Eating local and plant-forward",
                    anchor: "eating-local-and-plant-forward",
                    description: "Plant-based menus provide a lot of environmental benefits - they require less land, water, and fuel  to produce. The catering team is working to provide delicious local, plant-forward meal options at I/O.\n"
                }, {
                    heading: "More from less",
                    anchor: "more-from-less",
                    description: "Our sustainability story is still evolving. Over the long term the I/O team is moving towards a zero-waste, net-zero emissions model. Come back to this page, as I/O approaches, for more info on how we're reducing our environmental footprint.\n"
                }, {
                    SVG: "TwoBirds",
                    SVGColor: "Green",
                    description: 'Have ideas for how we can do better by the planet? Email us at <a href="mailto:sustainableevents@google.com" target="_blank" rel="noopener noreferrer"> sustainableevents@google.com</a>.<br> Thanks!\n'
                }],
                imageLeft: {
                    props: {
                        src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/sustainability/sustainability-02-1x.jpg",
                        src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/sustainability/sustainability-02-2x.jpg",
                        alt: "Sustainability in 2020"
                    }
                }
            }
        }
    }
}
, , function(e, t, n) {
    e.exports = {
        codelabsTitle: "codelabsTitle__3EzOx",
        codelabsSubtitle: "codelabsSubtitle__3I_1P",
        codelabsCta: "codelabsCta__LXSaG",
        codelabsCards: "codelabsCards__ckzFb",
        cardLink: "cardLink__2fDRZ",
        card: "card__gwsz5",
        cardIcon: "cardIcon__O6HJM",
        cardMeta: "cardMeta__22gR5",
        cardTitle: "cardTitle__22vSM",
        cardMetaTags: "cardMetaTags__5ywVX"
    }
}
, function(e, t, n) {
    e.exports = {
        modal: "modal__16aMA",
        modalDialog: "modalDialog__35TUW",
        modalOpen: "modalOpen__2ut82",
        modalMain: "modalMain__3U5Dg",
        modalContent: "modalContent__Ln9fE",
        modalContentFullscreen: "modalContentFullscreen__iomxx",
        modalContentCentered: "modalContentCentered__1UbZk",
        modalContentSheet: "modalContentSheet__1L1WS",
        closeButton: "closeButton__14rms",
        backButton: "backButton__3Ahj7"
    }
}
, function(e, t, n) {
    e.exports = {
        imageTop: "imageTop__8q7z7",
        content: "content__1CDVx",
        heading: "heading__NrkBa",
        speakerImage: "speakerImage__2vS15",
        speakerPlaceholderImage: "speakerPlaceholderImage__3Rc_L",
        speakerName: "speakerName___ZAbq",
        socialLinks: "socialLinks__2_oJO",
        socialLink: "socialLink__3U0dW",
        bio: "bio__2zivH",
        summary: "summary__13QjM",
        sessions: "sessions__3AOaP"
    }
}
, function(e, t) {
    e.exports = {
        title: "Schedule",
        tabs: [{
            label: "Overview",
            slug: "overview"
        }, {
            label: "Events",
            slug: "events"
        }],
        overview: {
            subtitle: "I/O features developer Sessions, Sandboxes, Codelabs, Office Hours, and App Reviews that are your chance to chat with experts, ask questions, and receive one-on-one help from Googlers. We also have some fun activities reserved for After Dark!\n"
        },
        events: {
            subtitle: "The schedule can be updated up until the event, so check back often and opt in to receive notifications. All signed-in users can bookmark events, and attendees can also reserve seats and rate Sessions.\n\nAll times are in PDT (Pacific Daylight Time).\n"
        },
        scheduleCardsLabel: "Schedule items",
        cards: [{
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/mixed1-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n",
            topics: ["TopicAccessibility", "TopicARVR"]
        }, {
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/mixed2-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n",
            topics: ["TopicAndroidPlay", "TopicDesign"]
        }, {
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/mixed3-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n",
            topics: ["TopicCloud"]
        }, {
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/blue-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n"
        }, {
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/red-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n"
        }, {
            imageSrc: "https://storage.googleapis.com/io-19-assets/images/card-backgrounds/yellow-card.png",
            title: "Title goes here",
            description: "Join us to learn about product and platform innovation at Google, starting with a live kickoff from Google CEO Sundar Pichai.\n"
        }]
    }
}
, , function(e, t, n) {
    e.exports = {
        hero: "hero__23fUY",
        attendingHeroGrid: "attendingHeroGrid__AE_Fb",
        travelHeroGrid: "travelHeroGrid__2YZQY",
        heroText: "heroText__2pnV9",
        travelHeroTextSection: "travelHeroTextSection__ICECv"
    }
}
, function(e, t) {
    e.exports = {
        hero: {
            heading: "Get your free .dev&nbsp;domain!",
            textBlocks: [{
                text: "As our gift to you, enjoy a .dev domain for one year, at no charge*. .dev is a secure domain for developers and technology. From tools to platforms, programming languages to blogs, .dev is a home for all the interesting things that you build.\n"
            }, {
                text: "<small>*Standard-price domains only, offer will expire May 10, 2019.</small>"
            }],
            images: {
                alt: "A diverse group of people on their computers",
                sources: [{
                    size: "1024w",
                    src: "https://storage.googleapis.com/io-19-assets/images/dev/hero-1024.png"
                }, {
                    size: "1200w",
                    src: "https://storage.googleapis.com/io-19-assets/images/dev/hero-1200.png"
                }, {
                    size: "2880w",
                    src: "https://storage.googleapis.com/io-19-assets/images/dev/hero-2880.png"
                }]
            }
        },
        get: {
            heading: "Get your .dev domain",
            subheading: "Register your .dev domain through one of our partners. They’ll help you redeem your coupon code and get started.\n",
            partners: [{
                name: "Google Domains",
                logo: "https://storage.googleapis.com/io-19-assets/images/dev/google-domains-logo.png",
                href: "https://domains.google/tld/dev/offer/",
                body: "Free name for 1 year, then $12/year. Free SSL certificate included."
            }, {
                name: "Yay.com",
                logo: "https://storage.googleapis.com/io-19-assets/images/dev/yay-logo.png",
                href: "https://www.yay.com/dev/",
                body: "Free name for 1 year, then $13.99/year. Free SSL certificate included."
            }]
        }
    }
}
, function(e, t, n) {
    e.exports = {
        devPage: "devPage__3xchs",
        devHero: "devHero__L9rAz",
        devHeroDescription: "devHeroDescription__3Vtkp",
        devHeroImage: "devHeroImage__1Yhwo",
        devGet: "devGet__2HDS2",
        devGetHeading: "devGetHeading__1UqOC",
        devGetPartners: "devGetPartners__YjFSa",
        devGetPartner: "devGetPartner__jvZb6",
        devGetPartnerDetails: "devGetPartnerDetails__1nWXr",
        devGetPartnerHeader: "devGetPartnerHeader__3P2pi"
    }
}
, function(e, t, n) {
    e.exports = {
        ShapeGrid: "ShapeGrid__RuSuF",
        ShapeGrid__3: "ShapeGrid__3__23j6j",
        ShapeGrid__4: "ShapeGrid__4__1QYip",
        ShapeGrid__label: "ShapeGrid__label__1APnx",
        "ShapeGrid__label--1": "ShapeGrid__label--1__1C7Wi",
        "ShapeGrid__label--2": "ShapeGrid__label--2__PUg-f",
        "ShapeGrid__label--3": "ShapeGrid__label--3__1iZtI",
        "ShapeGrid__label--4": "ShapeGrid__label--4__xhFM_",
        "ShapeGrid__label--4--weeks": "ShapeGrid__label--4--weeks__1s220",
        ShapeGrid__shapes: "ShapeGrid__shapes___C7rd",
        "ShapeGrid__shapes--keyfocus": "ShapeGrid__shapes--keyfocus__8TcEq",
        "ShapeGrid__shapes--minutes": "ShapeGrid__shapes--minutes__G0uui",
        "ShapeGrid__shapes--hours": "ShapeGrid__shapes--hours__30Tba",
        "ShapeGrid__shapes--weeks": "ShapeGrid__shapes--weeks__1YxEZ",
        ShapeWrapper: "ShapeWrapper__2yBDi",
        "ShapeWrapper--noodle": "ShapeWrapper--noodle__1-O67",
        "ShapeWrapper--line": "ShapeWrapper--line__HjvsH",
        "ShapeWrapper--slice": "ShapeWrapper--slice__bS9Pj",
        "ShapeWrapper--dash": "ShapeWrapper--dash___CqBI",
        "ShapeWrapper--dash--weeks": "ShapeWrapper--dash--weeks__1n0iu"
    }
}
, function(e, t, n) {
    e.exports = {
        Shape: "Shape__2e1cd",
        Shape__path: "Shape__path__2RcpR"
    }
}
, function(e, t, n) {
    e.exports = {
        fab: "fab__3aFFB",
        fabLowered: "fabLowered__2rXPw",
        fabRaised: "fabRaised__3rXIi",
        fabDefault: "fabDefault__3qTEY",
        fabHighlighted: "fabHighlighted__26z5l",
        fabColored: "fabColored__zedPE",
        fabCompact: "fabCompact__3gktb",
        fabIcon: "fabIcon__38Zs_",
        fabNotRaised: "fabNotRaised__mnfN_",
        fabFlat: "fabFlat__2nhyh",
        disabled: "disabled__oo__R"
    }
}
, function(e, t, n) {
    e.exports = {
        button: "button__KMwXw",
        disabled: "disabled__2A-3W",
        buttonContent: "buttonContent__3KeCc",
        buttonWithIcon: "buttonWithIcon__32y_i",
        buttonWithSvg: "buttonWithSvg__18VR7",
        buttonIcon: "buttonIcon__3nJrK",
        buttonFill: "buttonFill__8D3XL",
        buttonHairline: "buttonHairline__1ALC8",
        toggled: "toggled__1f6sO",
        buttonProtected: "buttonProtected__1p7ud",
        buttonLeftAlign: "buttonLeftAlign__2RpB9",
        buttonText: "buttonText__mJa1Q",
        buttonTextWhite: "buttonTextWhite__1dr3b"
    }
}
, function(e, t, n) {
    e.exports = {
        header: "header__2zieC",
        headerContent: "headerContent__2cwGd",
        headerPopupVisible: "headerPopupVisible__PqhmE",
        hamburgerButtonWrapper: "hamburgerButtonWrapper__307xu",
        hamburgerButton: "hamburgerButton__2YXdz",
        white: "white__2wlcH",
        hamburgerLogo: "hamburgerLogo__2QIWO",
        headerShadow: "headerShadow__25Oah",
        headerHidden: "headerHidden__1vR4A"
    }
}
, function(e, t, n) {
    e.exports = {
        tabs: "tabs__3Y8CU",
        tabList: "tabList__3nSec",
        flushLeft: "flushLeft__1ZeHW",
        tab: "tab__2ZQ38",
        activeTab: "activeTab__11u8B",
        disabledTab: "disabledTab__2HFn9"
    }
}
, function(e, t, n) {
    e.exports = {
        tabTitle: "tabTitle__MGeWe",
        eventShapes: "eventShapes__261O1",
        eventTriangle: "eventTriangle__1Ap7-",
        eventAudience: "eventAudience__2K5qP",
        eventCodelabs: "eventCodelabs__3eFg9",
        eventRedLines: "eventRedLines__18QN5",
        eventAudienceMask: "eventAudienceMask__1rEMw",
        eventCodelabsMask: "eventCodelabsMask__1_EXl",
        exploreHeader: "exploreHeader__32EOc",
        exploreGrid: "exploreGrid__20YHk",
        exploreQuadrant: "exploreQuadrant__2LXVa",
        exploreIcon: "exploreIcon__3On9g",
        quadrantText: "quadrantText__1mHdr",
        heroImage: "heroImage__1pABY",
        heroShape: "heroShape__1vpvF"
    }
}
, function(e, t, n) {
    e.exports = {
        card: "card__2hG2b",
        backgroundImage: "backgroundImage__WE7uh",
        cardBanner: "cardBanner__17Jwl",
        cardRatio: "cardRatio__1KWsA",
        cardBannerImage: "cardBannerImage__1NZSt",
        cardChips: "cardChips__Jyvl4",
        cardTitle: "cardTitle__1jt4T",
        cardContent: "cardContent__1bhLS"
    }
}
, function(e, t) {
    e.exports = {
        title: "I/O Extended events help developers from around the world take part in the I/O experience.\n",
        aside: {
            subtitle: "In 2019, developers hosted over 500 extended viewing parties and many more joined online.\n",
            imageProps: {
                src: "https://storage.googleapis.com/io-19-assets/images/extended/viewing-party.jpg",
                alt: "Hero image"
            }
        },
        host: {
            title: "Host an event",
            description: "We can help you bring developers together to host your own I/O Extended event. Read the organizer guide to learn more about Extended events and how to join the organizer community. Don't forget to submit your event via the form below in order to appear on our map. You might even be featured at I/O!\n",
            buttons: [{
                label: "Submit event",
                href: "/io/extended/form/",
                type: "Fill"
            }, {
                label: "Organizer guide coming soon",
                href: "https://docs.google.com/presentation/d/e/2PACX-1vReWDtj-yASOho5q7XC6lYY8af9wRa13-81mPaoSRodiRoCw4MKJnQExQ8GxyNyCQiPZpBprznPG4ex/pub?slide=id.g62811f3b0_18",
                type: "Hairline",
                external: !0,
                disabled: !0
            }]
        },
        image: {
            src: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/extended/extended-01-1x.jpg",
            src2x: "//storage.googleapis.com/io-2020-266123.appspot.com/assets/extended/extended-01-2x.jpg"
        }
    }
}
, function(e, t, n) {
    e.exports = {
        block: "block__1AMCW",
        content: "content__3CpuX",
        title: "title__1JFbc",
        keynotesHolder: "keynotesHolder__10g0A",
        keynoteTitle: "keynoteTitle__SVqym",
        keynoteTime: "keynoteTime__1MLio",
        timeLabel: "timeLabel__3yZWD"
    }
}
, function(e, t, n) {
    e.exports = {
        stickyEnabled: "stickyEnabled__2vcq5",
        stickyWithNav: "stickyWithNav__17BCP",
        proxy: "proxy__9A7kq",
        banner: "banner__2RhUV",
        isHidden: "isHidden__CIji6",
        isVisible: "isVisible__1cddB"
    }
}
, , function(e, t, n) {
    e.exports = {
        wrapper: "wrapper__3rpWh",
        reserve: "reserve__21knr",
        reserveBackground: "reserveBackground__2I2yW",
        reserveFull: "reserveFull__2dtoA",
        reserveWaitlisted: "reserveWaitlisted__32fCj",
        reserveNone: "reserveNone__3cxdL",
        reserveStroke: "reserveStroke__lAfDQ",
        hovered: "hovered__2p9X5",
        reserveReserved: "reserveReserved__3OP8-"
    }
}
, function(e, t) {
    e.exports = {
        google: {
            link: {
                label: "Google I/O Hashtag",
                href: "https://twitter.com/hashtag/googleio",
                external: !0
            }
        },
        footer_message: "Keep in touch with Google Developers for the latest I/O announcements",
        hashtag_animation: {
            src: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/global/hashtag-logo.gif",
            altText: "Google Logo hashtag animation"
        },
        footer_social: [{
            svg: "Twitter",
            label: "Google Developers on Twitter",
            href: "https://twitter.com/googledevs",
            external: !0
        }, {
            svg: "Facebook",
            label: "Google Developers on Facebook",
            href: "https://www.facebook.com/Google-Developers-967415219957038/",
            external: !0
        }, {
            svg: "Google_Developers",
            label: "Google Developers Blog",
            href: "https://developers.googleblog.com/",
            external: !0
        }, {
            svg: "Instagram",
            label: "Google Developers on Instagram",
            href: "https://instagram.com/googledevs",
            external: !0
        }, {
            svg: "YouTube",
            label: "Google Developers on YouTube",
            href: "https://www.youtube.com/user/GoogleDevelopers",
            external: !0
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        dialog: "dialog__3JpOz",
        withinSheet: "withinSheet__399kJ",
        heading: "heading__2rNUm",
        body: "body__1u6Li",
        actionButtons: "actionButtons__28NKM",
        actionButtonsDouble: "actionButtonsDouble__D5odH",
        actionButtonsSingle: "actionButtonsSingle__1DG2V",
        actionButtonsMultiple: "actionButtonsMultiple__IDl40"
    }
}
, function(e, t, n) {
    e.exports = {
        container: "container__3r9b0",
        containerDrawerOpen: "containerDrawerOpen__ILfAL",
        authPopupVisible: "authPopupVisible__UBlKu",
        userAuthButton: "userAuthButton__Q8fII",
        userAuthButtonOnDarkBg: "userAuthButtonOnDarkBg__1ITZS",
        userImage: "userImage__3J8A_",
        signInButton: "signInButton__JC_rW"
    }
}
, function(e, t, n) {
    e.exports = {
        customize: "customize__3AlVl",
        actionButtons: "actionButtons__2DXLB",
        customizeList: "customizeList__sFg_3",
        customizeListIcon: "customizeListIcon__1uyTU"
    }
}
, function(e, t, n) {
    e.exports = {
        dateHeading: "dateHeading__1_lZg",
        timeHeading: "timeHeading__SG55H",
        timePeriod: "timePeriod__1oZBb",
        sessionContainer: "sessionContainer__1izyC",
        noSessionsMessage: "noSessionsMessage__9JNc_",
        sessionListDefault: "sessionListDefault__3NOpV",
        sessionsGroup: "sessionsGroup__1JkGb",
        sessionListCompact: "sessionListCompact__3UTJ3"
    }
}
, function(e, t, n) {
    e.exports = {
        signedInNoSessions: "signedInNoSessions__3ReiN",
        placeholderCard: "placeholderCard__1qoWt",
        sessionInfo: "sessionInfo__3Xp-1",
        button: "button__3Mmzm",
        dayComplete: "dayComplete__tz-fQ",
        meal: "meal__2gmuu",
        day3Complete: "day3Complete__1dg52"
    }
}
, function(e, t, n) {
    e.exports = {
        cards: "cards__1Tldz",
        hideScrollbar: "hideScrollbar__G1ASv",
        isArchived: "isArchived__A_fjJ",
        heading: "heading__36huO",
        carouselControlsWrapper: "carouselControlsWrapper__3VzYr"
    }
}
, function(e, t, n) {
    e.exports = {
        wrapper: "wrapper__2Yjdx",
        control: "control__1zL_T",
        carouselWrapper: "carouselWrapper__295Se",
        carousel: "carousel__29rOz",
        slide: "slide__2OH4y",
        hidden: "hidden__3nhh2"
    }
}
, function(e, t) {
    e.exports = {
        hero: {
            title: "I/O '19 was a success!<br /> Check out featured Sessions, and see what people had to say on social about #io19\n",
            maskedImage: {
                src: "//storage.googleapis.com/io-19-assets/images/recap/hero_1x.jpg",
                src2x: "//storage.googleapis.com/io-19-assets/images/recap/hero_2x.jpg"
            },
            video: {
                youtubeId: "lyRPyRKHO8M"
            }
        },
        liveVideosBanner: {
            title: "See what happened throughout the event from I/O Live.\n",
            button: {
                label: "Watch I/O Live videos",
                href: "https://www.youtube.com/playlist?list=PLOU2XLYxmsIJJVnHWmd1qfr0Caq4VZCu4"
            }
        },
        photosBanner: {
            title: "See photos from featured talks, Sandboxes, After Dark fun, and other highlights from I/O 2019.\n",
            button: {
                label: "See all conference photos",
                href: "https://photos.google.com/share/AF1QipPVl8f866ZT5Diq8Fzt7BWYBJu9wEqXzvX9Obf5SS1cBM1qv1FDH_xePvnPqq0tBA?key=eWpkZnE4bTl1cTd3UWp2MFB0azlJU3BHcnRpVjFB"
            }
        },
        twitterFeedHeading: "Experience some of<br />the highlights of #io19\n",
        carousel: [{
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-1_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-1_2x.jpg"
        }, {
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-2_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-2_2x.jpg"
        }, {
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-3_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-3_2x.jpg"
        }, {
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-4_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-4_2x.jpg"
        }, {
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-5_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-5_2x.jpg"
        }, {
            _1x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-6_1x.jpg",
            _2x: "https://storage.googleapis.com/io-19-assets/images/recap/carousels/carousel-6_2x.jpg"
        }]
    }
}
, , function(e, t) {
    e.exports = {
        map: {
            button: {
                label: "Explore the grounds",
                href: "/io/map"
            },
            day: {
                image: {
                    src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/MapDayBanner.png",
                    src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/MapDayBanner@2x.png",
                    src3x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/MapDayBanner@3x.png"
                }
            },
            night: {
                image: {
                    src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/MapNightBanner.png",
                    src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/MapNightBanner@2x.png"
                }
            }
        },
        guides: {
            title: "In between sessions, watch the I/O Live Show for exclusive interviews, festival highlights, and more.\n",
            beforeConferenceEnd: {
                youtubeID: "irpNzosHbPU",
                button: {
                    label: "Watch the Live Show"
                }
            },
            afterConferenceEnd: {
                button: {
                    label: "View all I/O Live videos",
                    href: "http://g.co/io/guides"
                }
            },
            image: {
                src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/Guides.png",
                src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/Guides@2x.png"
            }
        },
        concert: {
            title: "Concert livestreamed from I/O\nWed, May 8, 8:30PM PDT\n",
            button: {
                label: {
                    beforeLive: "Learn more",
                    live: "Tune in"
                },
                href: "http://g.co/io/guides"
            },
            preConcert: {
                image: {
                    src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/ConcertBefore.png",
                    src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/ConcertBefore@2x.png"
                }
            },
            duringConcert: {
                image: {
                    src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/ConcertDuring.png",
                    src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/ConcertDuring@2x.png"
                }
            }
        },
        photos: {
            title: "Check out photos from Sessions, Sandboxes, After Dark fun, and other highlights from I/O 2019",
            button: {
                label: "See #io2019 photos",
                href: "https://photos.google.com/share/AF1QipPVl8f866ZT5Diq8Fzt7BWYBJu9wEqXzvX9Obf5SS1cBM1qv1FDH_xePvnPqq0tBA?key=eWpkZnE4bTl1cTd3UWp2MFB0azlJU3BHcnRpVjFB"
            },
            image: {
                src: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/Photos.png",
                src2x: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/explore/Photos@2x.png"
            }
        }
    }
}
, , function(e, t, n) {
    e.exports = {
        footerWrapper: "footerWrapper__1HZ-9",
        footer: "footer__35eRw",
        footerLogo: "footerLogo__1-3E_",
        footerLinks: "footerLinks__1KAMJ",
        footerLink: "footerLink__1E229",
        footerRow: "footerRow__7rz1V",
        footerFab: "footerFab__HXjsR"
    }
}
, function(e, t, n) {
    e.exports = {
        footer: "footer__t72ux",
        footerLine: "footerLine__YSeL5",
        footerLogo: "footerLogo__2Cq2_",
        footerMessage: "footerMessage__2qwsY",
        footerInfo: "footerInfo__3xVuK",
        footerSocial: "footerSocial__3qfRC",
        footerSocialLink: "footerSocialLink__1_nQq"
    }
}
, function(e, t, n) {
    e.exports = {
        tweet: "tweet__7gmmk",
        header: "header__1EdY0",
        headerByGoogle: "headerByGoogle__S5-HA",
        body: "body__it-Dg",
        inlineImage: "inlineImage__3SaBh",
        footer: "footer__d3NJM"
    }
}
, function(e, t, n) {
    e.exports = {
        backgroundEmbed: "backgroundEmbed__vYcF3",
        videoPlayerWrapper: "videoPlayerWrapper__26Rrv",
        overlayContainer: "overlayContainer__1R6RY",
        videoPlayer: "videoPlayer__2aJbZ",
        videoPlayerButtonWrapper: "videoPlayerButtonWrapper__3OxH1",
        videoPlayerText: "videoPlayerText__3EVXK",
        videoPlayerImage: "videoPlayerImage__6qeND"
    }
}
, function(e, t, n) {
    e.exports = {
        speaker: "speaker__3X7H_",
        imageWrapper: "imageWrapper__3TOjR",
        image: "image__hQgS-",
        imagePlaceholder: "imagePlaceholder__3R0MD",
        info: "info__2raBu",
        speakerInfoWrapper: "speakerInfoWrapper__3LzJR"
    }
}
, function(e, t, n) {
    e.exports = {
        mapWrapper: "mapWrapper__2Pf0m",
        mapWrapperWithDrawer: "mapWrapperWithDrawer__3aeJ1",
        mapControls: "mapControls__3ipVb",
        mapControlsWithDrawer: "mapControlsWithDrawer__32SzG",
        mapWrapperNight: "mapWrapperNight__1XR0o",
        ioMap: "ioMap__2F4Lp"
    }
}
, , , function(e, t, n) {
    "use strict";
    var o;
    n.d(t, "b", (function() {
        return r
    }
    )),
    n.d(t, "a", (function() {
        return i
    }
    )),
    function(e) {
        e.Phase0 = "Phase0",
        e.Phase1 = "Phase1",
        e.Phase2 = "Phase2",
        e.Phase3 = "Phase3",
        e.Phase4 = "Phase4",
        e.Phase5 = "Phase5"
    }(o || (o = {}));
    var a = o.Phase1
      , r = a === o.Phase4
      , i = a === o.Phase3
}
, function(e, t, n) {
    e.exports = {
        popup: "popup__3ZZg9",
        popupVisible: "popupVisible__k3EUE",
        arrow: "arrow__ikO0f",
        closeButton: "closeButton__1gXyC",
        popupContent: "popupContent__vDTd-",
        popupParent: "popupParent__esllH"
    }
}
, function(e, t, n) {
    e.exports = {
        container: "container__35I_n",
        title: "title__PSJpf",
        buttons: "buttons__29iQA",
        submitButton: "submitButton__1MI7w",
        question: "question__50-l-"
    }
}
, function(e, t, n) {
    e.exports = {
        snackbar: "snackbar__36g5h",
        snackbarWithFab: "snackbarWithFab__3sfnf",
        snack: "snack__3oCS4",
        snackEntering: "snackEntering__1R81h",
        snackLeaving: "snackLeaving__1Kdis",
        text: "text__19Q2D",
        button: "button__3_bcI"
    }
}
, function(e, t, n) {
    e.exports = {
        drawer: "drawer__bzxLk",
        drawerOpened: "drawerOpened__3gl4g",
        drawerInner: "drawerInner__1bfy8",
        drawerCloseButton: "drawerCloseButton__E0foV",
        darkUnderlay: "darkUnderlay__1RBQ5"
    }
}
, function(e, t, n) {
    e.exports = {
        filterBelt: "filterBelt__zR15A",
        filters: "filters__2sOYS",
        filtersTitle: "filtersTitle__3D0Rl",
        tagButton: "tagButton__LO4NC",
        clearButton: "clearButton__1ThpN",
        clearButtonMobile: "clearButtonMobile__2KUp2"
    }
}
, , function(e, t, n) {
    "use strict";
    n.d(t, "j", (function() {
        return a
    }
    )),
    n.d(t, "k", (function() {
        return r
    }
    )),
    n.d(t, "d", (function() {
        return i
    }
    )),
    n.d(t, "e", (function() {
        return s
    }
    )),
    n.d(t, "f", (function() {
        return c
    }
    )),
    n.d(t, "n", (function() {
        return u
    }
    )),
    n.d(t, "h", (function() {
        return d
    }
    )),
    n.d(t, "i", (function() {
        return h
    }
    )),
    n.d(t, "o", (function() {
        return p
    }
    )),
    n.d(t, "c", (function() {
        return f
    }
    )),
    n.d(t, "b", (function() {
        return g
    }
    )),
    n.d(t, "g", (function() {
        return b
    }
    )),
    n.d(t, "m", (function() {
        return v
    }
    )),
    n.d(t, "l", (function() {
        return m
    }
    )),
    n.d(t, "a", (function() {
        return y
    }
    ));
    var o = n(31)
      , a = "undefined" != typeof window
      , r = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.filter(Boolean).map((function(e) {
            return e.trim()
        }
        )).join(" ")
    }
      , i = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Date.now().toString();
        return "".concat(e, "-").concat(Math.round(1e10 * Math.random()))
    }
      , s = function(e, t) {
        return 0 === e.length ? [] : e.reduce((function(e, n) {
            return e[n[t]] = e[n[t]] || [],
            e[n[t]].push(n),
            e
        }
        ), {})
    }
      , l = new Map
      , c = function(e) {
        return "string" == typeof e ? t(e) : Promise.all(e.map((function(e) {
            return t(e)
        }
        )));
        function t(e) {
            var t = l.get(e);
            if (t)
                return t;
            var n = document.createElement("script");
            n.src = e,
            document.head.appendChild(n);
            var o = new Promise((function(e, t) {
                n.onload = e,
                n.onerror = t
            }
            ));
            return l.set(e, o),
            o
        }
    }
      , u = function(e) {
        return e.charAt(0) + e.slice(1).toLowerCase()
    }
      , d = function(e, t) {
        var n, a;
        switch (t) {
        case o.g.Space:
            n = o.f.Space,
            a = o.e.Space;
            break;
        case o.g.Enter:
            n = o.f.Enter,
            a = o.e.Enter;
            break;
        case o.g.Escape:
            n = o.f.Escape,
            a = o.e.Escape;
            break;
        case o.g.Tab:
            n = o.f.Tab,
            a = o.e.Tab
        }
        return e.charCode === a || e.code === n
    }
      , h = function(e, t) {
        return t.indexOf(e.replace(/\/$/, "")) > -1
    }
      , p = function(e) {
        return e.toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
    }
      , f = function(e) {
        for (var t = 0; e; )
            t += e.offsetTop + e.clientTop,
            e = e.offsetParent;
        return t
    }
      , g = function(e, t) {
        for (var n = 0; e; )
            n += e.offsetLeft + e.clientLeft,
            e = e.parentElement.className.includes(t) ? null : e.offsetParent;
        return n
    }
      , b = function() {
        return !!a && /iPad|iPhone/.test(navigator.userAgent)
    }
      , v = function(e) {
        return e.replace(/\/$/, "")
    }
      , m = function(e) {
        var t = e.lastIndexOf("/");
        return e.slice(t + 1)
    }
      , y = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        return Array.isArray(e) ? e[t] : e
    }
}
, , , function(e, t) {
    e.exports = {
        google: {
            link: {
                label: "Google homepage",
                href: "https://www.google.com/",
                external: !0
            }
        },
        footer_links: [{
            label: "I/O 2019 Recap",
            href: "https://events.google.com/io2019",
            external: !0
        }, {
            label: "FAQ",
            href: "/io/faq"
        }, {
            label: "Google Developers",
            href: "https://developers.google.com/",
            external: !0
        }, {
            label: "Privacy & Terms",
            href: "https://policies.google.com/terms",
            external: !0
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        infoRaw: "infoRaw__2ICvn",
        tabs: "tabs__2zron",
        attendingHero: "attendingHero__6I6KR",
        heroIcon: "heroIcon__acYsY",
        heroText: "heroText__22eac",
        attendingHeroText: "attendingHeroText__3qod4",
        notificationsIcon: "notificationsIcon__1deG7"
    }
}
, function(e, t, n) {
    e.exports = {
        tag: "tag__1_rA1",
        bullet: "bullet__3MOn9",
        bulletMarker: "bulletMarker__qG22w",
        toggled: "toggled__hQDAo",
        iconClose: "iconClose__1sgnR"
    }
}
, function(e, t) {
    e.exports = {
        signIn: {
            heading: "Sign in to customize your schedule",
            body: "Sign in to save events, reserve seats, and rate events (if attending). Actions will be synced from your account across app and site.\n",
            buttonSignIn: "Customize",
            buttonDismiss: "Not now"
        },
        signInMobile: {
            heading: "Sign in to customize your schedule",
            body: "Sign in to save events, reserve seats, and rate sessions (if an attendee). Actions will be synced from your account across app and site.\n",
            buttonSignIn: "Sign in",
            buttonDismiss: "Not now"
        }
    }
}
, function(e, t, n) {
    e.exports = {
        videoTop: "videoTop__2vPr9",
        videoTopPlayIcon: "videoTopPlayIcon__1nall",
        videoPlayer: "videoPlayer__wyoR2",
        videoLabel: "videoLabel__28XhN",
        imageTop: "imageTop__6L9vU"
    }
}
, function(e, t, n) {
    e.exports = {
        block: "block__36Ty-",
        blockWithBorders: "blockWithBorders__2emjz",
        image: "image__xu803",
        title: "title__2iEVk",
        darkMode: "darkMode__3lxXE"
    }
}
, function(e, t) {
    e.exports = {
        hero: {
            heading: "Ticket drawing is: <span>Closed</span><br>Registration is: <span>Opening for invitees soon</span>\n"
        },
        belt: {
            sections: [{
                heading: "Registered attendees",
                body: "View, download, and modify your ticket details online.",
                cta: {
                    href: "https://events.withgoogle.com/io2020/registrations/my-ticket/",
                    label: "View ticket",
                    external: !0
                }
            }, {
                heading: "Ticket drawing",
                body: "Sorry, we’re no longer accepting applications for Google I/O 2020 tickets. You can still join in remotely via I/O Extended and our livestream.\n",
                cta: {
                    href: "https://events.google.com/io/extended",
                    label: "Learn more"
                }
            }]
        },
        ticketTypes: {
            title: "Ticket types",
            tickets: [{
                title: "General admission",
                description: "I/O welcomes anyone who pursues development and tech as a career, side occupation, or hobby.\n",
                price: "$1,150"
            }, {
                title: "Community",
                description: 'To be eligible, you must be an active member/partner of one of the <a target="_blank" rel="noopener noreferrer" href="https://developers.google.com/programs/" native>Google Developers programs</a>.\n',
                price: "$750"
            }, {
                title: "Academic",
                description: 'To be eligible, you must be an active full-time student, professor, faculty or staff member at a high school or institution of higher learning, including those graduating in 2020 prior to the event. See <a href="/io/registration/#registration-terms-and-conditions">terms and conditions</a>.\n',
                price: "$375"
            }]
        },
        termsAndConditions: [{
            body: 'View the full <a href="/io/registration/#registration-terms-and-conditions">Registration Terms and Conditions</a>\n'
        }, {
            body: 'Still have questions? Email <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n'
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        shuttleRouteTable: "shuttleRouteTable__3Bjbp",
        scheduleHeaderRow: "scheduleHeaderRow__3Lwdz",
        tableHeader: "tableHeader__34Spa",
        scheduleBaseHeaderRow: "scheduleBaseHeaderRow__3HWQA"
    }
}
, , , , , function(e, t, n) {
    e.exports = {
        bodyScrollFixed: "bodyScrollFixed__3qjir",
        bodyScrollFixedIOS: "bodyScrollFixedIOS__1Fo3j"
    }
}
, function(e, t, n) {
    e.exports = {
        main: "main__VkZxT",
        fourOhFour: "fourOhFour__DrFs6",
        radial: "radial__1IHxB",
        rotate: "rotate__1sSVz",
        errorMessage: "errorMessage__12Ey5"
    }
}
, function(e, t, n) {
    e.exports = {
        maskedImageContainer: "maskedImageContainer__1mdkO",
        maskedImageStairs: "maskedImageStairs__3iilP",
        maskedImageContainerRatio: "maskedImageContainerRatio__2eY1e",
        maskedImageSawtooth: "maskedImageSawtooth__2ms_S",
        maskedImageSemiCircle: "maskedImageSemiCircle__3eW41",
        maskedImageCircle: "maskedImageCircle__1mhSa",
        maskedImageSemiCircleBottom: "maskedImageSemiCircleBottom__3sOen",
        maskedImageSemiCircleTop: "maskedImageSemiCircleTop__3G0dj",
        maskedImageSemiCircleBottomOverlay: "maskedImageSemiCircleBottomOverlay__9IOyg",
        maskedImageSemiCircleTopOverlay: "maskedImageSemiCircleTopOverlay__2YHEB",
        maskedImageSquare: "maskedImageSquare__32rRi"
    }
}
, function(e, t, n) {
    e.exports = {
        wrapper: "wrapper__2IwGi",
        bookmark: "bookmark__1E90F",
        hovered: "hovered__2sFAf",
        bookmarkAdded: "bookmarkAdded__3N17s"
    }
}
, function(e, t, n) {
    e.exports = {
        question: "question__3cI9x",
        stars: "stars__1sh4T",
        starDescriptions: "starDescriptions__3pLkV"
    }
}
, function(e, t) {
    e.exports = {
        signedInNoSessions: {
            title: "My I/O Schedule",
            description: "There’s nothing saved here. Star events to add them to your My I/O livestream schedule.",
            buttonLabel: "View the Live Schedule"
        },
        dayComplete: {
            title: "We will return tomorrow at 8:30 AM PDT."
        },
        day3Complete: {
            title: "Thanks for watching.\nSee you next year!\n"
        },
        customize: {
            title: "Customize your livestream experience"
        }
    }
}
, function(e, t, n) {
    e.exports = {
        concertCard: "concertCard__1AZLn",
        beforeConcert: "beforeConcert__27WY7",
        duringConcert: "duringConcert__1KsmQ"
    }
}
, function(e, t, n) {
    e.exports = {
        switch: "switch__mJ7eY",
        icon: "icon__1eyT1",
        on: "on__29P0k",
        track: "track__3TS1d"
    }
}
, function(e, t, n) {
    e.exports = {
        header: "header__jnGer",
        stickyNav: "stickyNav__tKb9R",
        grid: "grid__FkR9N",
        filterFab: "filterFab__2-csh"
    }
}
, , , , , , , , , function(e, t, n) {
    e.exports = {
        focusStyle: "focusStyle__aCHnr",
        gifFocusStyle: "gifFocusStyle__1e7HT",
        navFocusStyle: "navFocusStyle__31zKl"
    }
}
, function(e, t, n) {
    e.exports = {
        accordionHeader: "accordionHeader__2hDlf",
        accordionHeaderIsOpen: "accordionHeaderIsOpen__1oeR3",
        accordionBody: "accordionBody__3GgTP",
        accordionBodyText: "accordionBodyText__eeytD"
    }
}
, function(e, t) {
    e.exports = {
        title: "Codelabs",
        subtitle: "Learn about the latest and greatest Google technologies on our ready-to-code kiosks equipped with the newest hardware from Android Auto, TensorFlow, Cast, and more! Expect over 100 new and updated codelabs from your favorite product area with kiosks equipped with all the software you'll need to get coding faster. Or if you prefer, bring your own machine and take your work home with you. Google staff is available to talk you through steps if you get stuck or answer any questions.\n",
        codelabsCardsLabel: "Codelabs items",
        cards: [{
            imageSrc: "https://firebasestorage.googleapis.com/v0/b/io2019-festivus/o/images%2Fcodelabs%2Far-core.png?alt=media&token=56575049-d20a-4b7d-8216-f3f4c00dba24",
            title: "Recognize text, facial features, and objects in images with ML Kit for Firebase",
            description: "In this codelab, you’ll build an Android app with ML Kit for Firebase that uses on-device and cloud Machine Learning to recognize text, facial features, and objects in images.\n",
            duration: 40,
            link: "https://codelabs.developers.google.com/codelabs/mlkit-android/"
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        map: "map__2aaBw",
        mapElement: "mapElement__DVftG"
    }
}
, function(e, t) {
    e.exports = {
        Canceled: {
            items: [{
                title: "How can I stay informed on the latest from Google I/O?",
                body: 'To stay up-to-date on the latest information on Google I/O, be sure to frequently visit the <a href="/io">Google I/O 2020 website</a>.'
            }, {
                title: "Will you refund the cost of my ticket?",
                body: "Yes, I/O tickets will be refunded in full. You should expect a statement credit of $1,150 for General Admission tickets and $375 for Academic tickets.\n"
            }, {
                title: "When can I expect a refund for my ticket?",
                body: 'You will receive a full refund by March 13, 2020. If you don’t see the credit on your statement by then, please reach out to <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n'
            }, {
                title: "Is there a receipt for my cancellation?",
                body: "Yes, you will receive a confirmation email as soon as we process your cancellation. No action is required on your part.\n"
            }, {
                title: "I bought a flight and reserved a hotel, will you reimburse me?",
                body: "We are unable to reimburse you for the cost of travel that has already been booked for I/O.\n"
            }, {
                title: "I was so excited to come, any chance I can come next year instead?",
                body: "Yes, all guests who have already registered for I/O 2020 will be automatically extended an invitation for I/O 2021. We look forward to seeing you there.\n"
            }]
        },
        General: {
            heading: "General FAQ",
            items: [{
                title: "When and where is Google I/O 2020?",
                body: "The 2020 developer event will be held from May 12 – 14 at Shoreline Amphitheatre in Mountain View, California."
            }, {
                title: "Am I allowed to register for I/O if I am in an area at risk for Novel Coronavirus (COVID-19)?",
                body: "As of February 20, 2020, anyone is welcome to register for I/O. However, please keep in mind that current or future mandated travel restrictions may make it impossible to join the event in person. Please consult your local government guidance regarding coronavirus and travel restrictions. We will allow all I/O registrants to cancel their registration up to April 15, 2020, without financial penalty, so that travel decisions can be made based on what is best for the health and safety of all attendees. If you are not able to attend Google I/O, we will continue to offer livestream to join remotely.\n"
            }, {
                title: "How can I stay informed on the latest from Google I/O?",
                body: 'To stay up-to-date on the latest information on Sessions, speakers, and overall activities, be sure to frequently visit the <a href="https://events.google.com/io/" target="_blank" rel="noopener noreferrer">Google I/O 2020 website</a>, the <a href="http://googledevelopers.blogspot.com/" target="_blank" rel="noopener noreferrer">Google Developers Blog</a>, and follow us on <a href="https://twitter.com/googledevs" target="_blank" rel="noopener noreferrer">Twitter</a>, <a href="https://www.facebook.com/Google-Developers-967415219957038/" target="_blank" rel="noopener noreferrer">Facebook</a>, and <a href="https://www.instagram.com/googledevs" target="_blank" rel="noopener noreferrer">Instagram</a>. You can also follow and join the social conversation about Google I/O 2020 via the official <a href="https://twitter.com/search?q=%23GoogleIO&src=typd" target="_blank" rel="noopener noreferrer">#GoogleIO</a> hashtag. In addition, we\'ll be emailing important information to all registered attendees, along with check-in instructions prior to the event.\n'
            }, {
                title: "Is there an I/O 2020 mobile app?",
                body: "Yes, there will be I/O 2020 mobile apps for Android and iOS as well as a mobile PWA. The I/O 2020 mobile apps will be released closer to the event. You will be able find all the info you need about I/O using the app or this site.\n"
            }, {
                title: "What do event tickets include?",
                body: "Registration for Google I/O includes three full days of Sessions, Codelabs, Demos, App Reviews, Office Hours, admission to the evening events, and attendance at the Keynotes. We also provide complimentary breakfast, lunch, and snacks each day. In addition, attendees receive an event badge and may be offered additional gifts. If you aren't sure whether the professional guidelines for your school, university, organization, or agency would allow you to accept these items, please check with your local ethics officer before the event. The food and gifts are optional, so it may be possible to attend Google I/O even if you cannot accept any giveaways."
            }, {
                title: "How can I get my hands on a ticket?",
                body: "There are two ways to get a ticket: by applying to the ticket drawing (now closed) or via invitation.\n"
            }, {
                title: "I'm traveling to the US from another country. How do I get a visa letter to attend I/O?",
                body: 'If you require a visa letter regarding your Google I/O attendance, please indicate so when completing the registration form and we\'ll email it to you within 7 business days. If you haven\'t received your letter or have questions regarding the process, you can contact <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer"> io@google.com</a>. Google won\'t be able to contact an embassy on your behalf.'
            }, {
                title: "Is Google still offering help with visa letters during the current travel restriction mandates related to COVID-19?",
                body: 'As of February 20, 2020, Google will continue to provide letters of support for Business Visitor Visa applications for travel to I/O. Please note that this policy will continue to be reevaluated as information related to the coronavirus from the CDC and <a href="https://www.who.int/ith/2019-nCoV_advice_for_international_traffic/en/" target="_blank" rel="noopener noreferrer">WHO</a> becomes available (please consult your local government guidance regarding coronavirus and travel restrictions).\n'
            }, {
                title: "I got an invitation, but when I try to register, it says the event is full.",
                body: 'An invitation is not a guarantee for a ticket. Tickets are available first-come, first-served. You can still join in on the fun remotely via <a href="/io/extended/">I/O Extended</a> and our livestream.\n'
            }, {
                title: "I already confirmed my ticket, but something came up and I won't be able to attend anymore. Can I cancel?",
                body: 'Yes, you can cancel your ticket until April 15 via your <a href="https://events.withgoogle.com/io2020/registrations/my-ticket/" target="_blank" rel="noopener noreferrer">I/O profile page</a>. After that date, sales are final and refunds can no longer be issued.\n'
            }, {
                title: "I registered for I/O under my nickname. Will I be able to attend I/O?",
                body: "No. We'll need to verify your registration details against a government-issued photo ID when you come to pick-up your badge.\n"
            }, {
                title: "I'm under 18 years old. Do I need a parental consent form to attend?",
                body: "Attendees must be at least 16 years of age to attend Google I/O. Attendees under 18 years of age (16 and 17 years) do not require an adult to accompany them; however, they must provide a signed version of the parental consent form received via email in advance of the event. In addition, Google does not offer chaperone tickets for 16 and 17-year-old attendees. The official parental consent form will be emailed to you closer to the event, and you must return a signed version over email before picking up your badge onsite.\n"
            }, {
                title: "I need a receipt for my ticket purchase.",
                body: 'You can access your purchase receipt on your <a href="https://events.withgoogle.com/io2020/registrations/my-ticket/" target="_blank" rel="noopener noreferrer">I/O profile page</a> at any time. If you need additional information in the receipt, please contact <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>, and we\'ll do our best to accommodate your request. <br><br> View the full <a href="/io/faq#registration-terms-and-conditions">Registration Terms and Conditions</a>.<br>Still have questions? Email <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n'
            }, {
                title: "Registration Terms and Conditions",
                id: "registration-terms-and-conditions",
                body: '<ul>\n  <li>Each individual may purchase only one ticket. Tickets for Google I/O are for the full three-day event, and no single-day tickets are available.\n  </li>\n  <li>The following cards will be accepted as a method of payment: Amex, Discover, JCB, Mastercard, and Visa.\n  </li>\n  <li>You may not register on behalf of anyone else.\n  </li>\n  <li>Google I/O tickets must be used by the original registrant and are non-transferable.\n  </li>\n  <li>By registering and accepting any discounts, gifts, or items of value related to Google I/O, you certify that you are able to do so in compliance with applicable laws and the internal rules of your organization.\n  </li>\n  <li>Tickets may not be sold, bartered, auctioned, or transferred in any way, and doing so may result in Google rendering the ticket null and void without any responsibility to Google.\n  </li>\n  <li>At check-in, we will verify your photo ID prior to assigning you your Google I/O badge. We are OK with government-issued licenses, passports, and other forms of identification. If you do not have proper identification, you will not be able to receive a badge and will not be admitted into the event. Please make sure to register using the name that matches the government-issued photo ID you will be presenting when you check in to the event.\n  </li>\n  <li>If you buy an academic ticket and cannot provide academic documentation during check-in at Google I/O, you will not be admitted or offered a refund, nor will you be able to convert your ticket to general admission. Please be sure to bring a current school ID or other proof that you are qualified to receive this special rate when you check in at the event.\n  </li>\n  <li>Ticket purchases can be refunded through April 15, 2020, via your <a href="https://events.withgoogle.com/io2020/registrations/my-ticket/" target="_blank" rel="noopener noreferrer">I/O profile page</a>.\n  </li>\n  <li>After April 15, 2020, all ticket sales are final. There will be no refunds or exchanges regardless of weather conditions, session availability, or any other circumstance.\n  </li>\n  <li>Attendees must be at least 16 years of age to attend Google I/O. Attendees under 18 years of age (16 and 17 years) do not require an adult to accompany them; however, they must provide a signed version of the parental consent form received via email in advance of the event.  In addition, Google does not offer chaperone tickets for 16 and 17-year-old attendees.\n  </li>\n  <li>Attendees are not permitted to bring guests to Google I/O or to the evening events. If you have someone traveling with you, they will need to register themselves and purchase an attendee ticket.\n  </li>\n  <li>Photographs and/or video taken at Google I/O by Google, or others on behalf of Google, may include your image or likeness. You agree that Google may use such photographs and/or video for any purpose without compensation to you.\n  </li>\n  <li>All information entered into the registration form must be correct and accurate to the best of your knowledge. All information must be entered in English. Some of the information entered (such as name, company, and the photo you upload), will be displayed on the attendee badge.\n  </li>\n  <li>By registering for a ticket you acknowledge that your information will be used in accordance with <a href="https://www.google.com/intl/en/policies/" target="_blank" rel="noopener noreferrer">Google\'s Privacy Policy and Terms of Service</a>.\n  </li>\n  <li>Google I/O badges will contain NFC or other RFID technologies to help us serve attendees and determine participation in various Sessions and activities.\n  </li>\n  <li>In order to facilitate the use of attendee badges at Google I/O, Google uses its third party provider, Aventri, to provide access control and badge printing services. By registering for Google I/O, you are consenting to have your information (name, company, image, guest type, customer ID, keynote seat assignment, material redemption eligibility, t-shirt size, and session attendance) shared with Aventri. All of your data shared with Aventri will be deleted by Aventri four weeks after Google I/O 2020.\n  </li>\n  <li><strong>Badge Technology:</strong> In order to help Google understand which event experiences at Google I/O are well attended and to also ensure the event is safe and secure, Google will utilize both Near Field Communications (“<strong>NFC</strong>”) and Radio-frequency identification (“<strong>RFID</strong>”) technology (optional). RFID will <strong>only</strong> be utilized in the Keynote area of Google I/O. By registering for Google I/O, you consent to having a badge that utilizes NFC technology as this is mandatory for the safety and security of all Google I/O attendees and staff. If you want your badge to utilize RFID technology, you must explicitly opt-in by checking the box on the registration form related to RFID technology, please note this is <strong>not</strong> required to attend Google I/O and is completely optional.\n  </li>\n  <li><strong>NFC Badge Technology:</strong> NFC is a short-range wireless connectivity standard that uses magnetic field induction to enable communication between devices when they are touched together, or brought within a few centimeters of each other. The NFC chip is embedded inside your badge and is encoded using Aventri\'s proprietary encoding format. While attending Google I/O you will scan your badge with the embedded NFC chip to Aventri\'s Access Control and Swag applications so that Google can understand which event experiences are well attended while maintaining the safety and security of the event. Your individualized data will be accessible by a small team of Google employees and Aventri (less than five people) for the purposes of supporting your event registration. Outside of this small team, your information will be reported within Google in aggregate to understand attendance trends and metrics.\n  </li>\n  <li><strong>RFID Badge Technology:</strong> Radio-frequency identification (<strong>RFID</strong>) uses electromagnetic fields to automatically identify and track <strong>tags</strong> attached to objects. The <strong>tags</strong> contain electronically stored information. Passive <strong>tags</strong> collect energy from a nearby <strong>RFID</strong> reader\'s interrogating radio waves. If you opt-in to a badge that utilizes RFID technology, the RFID tag will be embedded into your Google I/O badge. This will then allow you to be passively scanned from antennas set up in the Keynote area of Google I/O. Google and Aventri will track your attendance in the Keynote and the data will be recorded in <strong>aggregate</strong> only. For clarity, neither Google nor Aventri will have access to individual location and/or movement data. You may opt out of having your Google I/O attendee badge utilize the RFID technology at any time before the event by reaching out to <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a> and at any time during the event by visiting the Help Desk onsite at check-in for Google I/O.\n  </li>\n  <li>All registered attendees agree to allow Google to contact them regarding their registration and attendance at the event. By registering for a ticket, you agree to allow Google to communicate with you via email with information regarding the event.\n  </li>\n  <li>Attendance at Google I/O is not allowed by the following:<ul><li>residents of embargoed countries;</li><li>individuals ordinarily resident in embargoed countries; or</li><li>individuals otherwise prohibited by applicable export controls and sanctions programs.</li></ul>\n  </li>\n  <li>You agree to be solely responsible for your own safety, belongings, and well-being while participating in Google I/O. Google LLC and its affiliates will not be liable for your participation in Google I/O.\n  </li>\n  <li>No solicitation or selling of items or services is allowed at Google I/O. Any attendee conducting these activities may be removed from the event.\n  </li>\n  <li>Applicants and attendees can request the deletion of their registration data after the event ends by emailing <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n  </li>\n</ul>\n'
            }]
        },
        Drawing: {
            heading: "Drawing FAQ",
            items: [{
                title: "I'm not a developer, but I really want to attend I/O. Can I apply?",
                body: "Yes! Whether it's your career, your passion, or something you're just curious about, all are welcome to apply."
            }, {
                title: "Will I be able to apply after February 25, 5pm PST?",
                body: "No. That's the final deadline for applications for the 2020 event. Don't leave it for the last minute!"
            }, {
                title: "How does the ticket drawing work?",
                body: "Anyone interested in development as a career or as a passion is welcome to apply between 10am PST on February 20, 2020 and 5pm PST on February 25, 2020. The order in which ticket applications are received has no bearing on the final outcome — so no rush, you'll have plenty of time to apply! Once the window closes, we'll randomly select applicants from among all of the qualified applications and notify those selected via email on February 26, 2020.<br>To submit an application you'll need to:<br><br><ul><li>Sign in with a <a href=\"https://accounts.google.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Google account</a> or Gmail address of your choosing.</li> <li>Complete the required form fields, including which ticket type you're applying for (General Admission: $1,150; Academic Admission: $375).</li> <li>Provide payment details. Your card will only be charged if you're selected on February 26. If you're not selected, the pre-authorization payment will be automatically released by your bank within 7 days.</li> </ul><br><br>Once you've successfully completed the application, you'll reach a confirmation screen and receive an email confirming your application submission shortly thereafter.\n"
            }, {
                title: "I really want to be selected! Can I submit more than one application to increase my chances of winning?",
                body: "To give everyone an equal chance of being selected, only one application per person is allowed."
            }, {
                title: "If I apply the moment the drawing opens, do my chances of being selected increase?",
                body: "No need to rush. The selection is random and done after the application period closes."
            }, {
                title: "I'm a student. Can I register? Do I get a discount?",
                body: "If you qualify as an active full-time student, professor, faculty, or staff at a high school or institution of higher education, you can apply for an Academic ticket at a discounted rate of $375. When you check in at the event, you'll need to provide a current school ID, transcript, credential, or another form of documentation which demonstrates that you're qualified to receive this special rate. If you buy an academic ticket and can't provide academic documentation when you arrive at Google I/O, you won't be admitted or offered a refund, nor will you be able to convert your ticket to General Admission."
            }, {
                title: "When I apply, will my card be charged immediately?",
                body: "No. We'll place a pre-authorization for the ticket value on your card, but you'll only be charged if you're selected on February 26. If you're not selected, the pre-authorization will be automatically released after a maximum of 7 days."
            }, {
                title: "How will I know if you've received my application?",
                body: "Once you've successfully completed your application, you'll reach a confirmation screen. You'll also receive an email confirming your application submission shortly thereafter."
            }, {
                title: "If I'm selected, can I cancel and get a refund later on?",
                body: 'Yes, you can cancel your ticket until April 15 via your <a href="https://events.withgoogle.com/io2020/registrations/my-ticket/">I/O profile page</a>. After that date, sales are final, and refunds can no longer be issued.\n'
            }, {
                title: "The suspense is killing me! When will results be announced?",
                body: 'Don\'t worry, you won\'t be in the dark for long. Check your inbox on February 26th to find out the results!<br><br>View the full <a href="https://events.google.com/io/faq#registration">Registration Terms and Conditions</a>.<br>Still have questions? Email <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n'
            }]
        },
        Extended: {
            heading: "Extended FAQ",
            items: [{
                title: "Will the Sessions be livestreamed?  What if I can't follow the event in real time?\n",
                body: 'The two Keynotes and all Sessions will be livestreamed on the event website\'s homepage during the three days of the festival. If you\'re busy at work or on the other side of the planet with a tricky time difference, you can watch the session recordings later on the <a href="https://www.youtube.com/user/GoogleDevelopers" target="_blank" rel="noopener noreferrer">Google Developers YouTube channel</a>.\n'
            }, {
                title: "I want to celebrate I/O with my community!  Any ideas?",
                body: '<p>Yes! Every year, developers around the world host Google I/O Extended events. During these events, organizers can livestream the event and host their own sessions including hackathons, codelabs, demos, and more.</p> <p>If you\'re joining us as an I/O Extended host this year, here are the steps you should take to get started:</p> <ul class="default-whitespace">\n  <li>Check back closer to I/O for our Organizer Guide which has tips\n  and suggestions on how to host a successful event</li>\n  <li><a href="/io/extended/form/">Register</a> your public event on\n  the I/O website for increased visibility.</li>\n  <li>Use the official #GoogleIOExtended hashtag on all your social posts\n  related to I/O Extended for easier discoverability.</li>\n</ul> <p>Note: I/O Extended hosts can request the deletion of their personal and/or event data after the event ends by emailing <a href="mailto:io@google.com" native target="_blank" rel="noopener noreferrer">io@google.com</a>. If you simply want to attend an I/O Extended event, <a href="/io/extended/">browse our map</a> to find one near you and RSVP! For questions about the I/O Extended program, contact us at <a href="mailto:ioextended@google.com" target="_blank" rel="noopener noreferrer" native>ioextended@google.com</a>.</p>\n'
            }, {
                title: "Can I embed the I/O livestream on my site?",
                body: "Yes. The I/O Live widget allows you to deliver the I/O livestream and/or official #GoogleIO social feed directly to your audience. We'll share more details on how to embed the I/O Live widget on your website soon.\n"
            }]
        },
        Event: {
            heading: "Event FAQ",
            items: [{
                title: "Google's Event Community Guidelines and Anti-Harassment Policy\n",
                body: '<p>Google is dedicated to providing a harassment-free and inclusive event experience for everyone regardless of gender identity and expression, sexual orientation, disabilities, neurodiversity, physical appearance, body size, ethnicity, nationality, race, age, religion, or other protected category. In an effort to make the event as inclusive as possible, gender-neutral bathrooms will be offered throughout the venue.</p> <p>We don\'t tolerate harassment of event participants in any form.</p> <p>Google takes violations of our policy seriously and will respond appropriately. For more information on Google\'s Event Community Guidelines and Anti-Harassment Policy, please see <a href="https://www.google.com/events/policy/anti-harassmentpolicy.html" target="_blank" rel="noopener noreferrer"> here.</a></p> <p>All participants of Google events must abide by the following policy:</p> <p><strong>Be excellent to each other.</strong> Treat everyone with respect. Participate while acknowledging that everyone deserves to be here — and each of us has the right to enjoy our experience without fear of harassment, discrimination, or condescension, whether blatant or via micro-aggressions. Jokes shouldn\'t demean others. Consider what you are saying and how it would feel if it were said to or about you.</p> <p><strong>Speak up if you see or hear something.</strong> Harassment is not tolerated, and you are empowered to politely engage when you or others are disrespected. The person making you feel uncomfortable may not be aware of what they are doing, and politely bringing their behavior to their attention is encouraged.</p> <p><strong>Practice saying "Yes and" to each other.</strong> It\'s a theatre improv technique to build on each other\'s ideas. We all benefit when we create together.</p> <p>We have a <strong>ZERO TOLERANCE POLICY</strong> for harassment of any kind, including but not limited to:</p> <ul class="default-whitespace">\n  <li>Stalking/following</li>\n  <li>Deliberate intimidation</li>\n  <li>Harassing photography or recording</li>\n  <li>Sustained disruption of talks or other events</li>\n  <li>Offensive verbal language</li>\n  <li>Verbal language that reinforces social structures of domination</li>\n  <li>Sexual imagery and language in public spaces</li>\n  <li>Inappropriate physical contact</li>\n  <li>Unwelcome sexual or physical attention</li>\n</ul> <p><strong>In relation to, but not limited to:</strong></p> <ul class="default-whitespace">\n  <li>Neurodiversity</li>\n  <li>Race</li>\n  <li>Color</li>\n  <li>National origin</li>\n  <li>Gender identity</li>\n  <li>Gender expression</li>\n  <li>Sexual orientation</li>\n  <li>Age</li>\n  <li>Body size</li>\n  <li>Disabilities</li>\n  <li>Appearance</li>\n  <li>Religion</li>\n  <li>Pregnancy</li>\n</ul>\n<p>Participants asked to stop any harassing behavior are expected to comply immediately. Our zero-tolerance policy means that we\'ll look into and review every alleged violation of our Event Community Guidelines and Anti-Harassment Policy and respond appropriately. We empower and encourage you to report any behavior that makes you or others feel uncomfortable by finding a Google staff member or by emailing <a href="mailto:googleiocommunity@google.com" target="_blank" rel="noopener noreferrer"> googleiocommunity@google.com</a>.</p> <p>Event staff will be happy to help participants contact hotel/venue security or local law enforcement, provide escorts, or otherwise assist those experiencing discomfort or harassment to feel safe for the duration of the event. We value your attendance.</p> <p>This policy extends to Sessions, forums, workshops, Codelabs, social media, parties, hallway conversations, all attendees, partners, sponsors, volunteers, event staff, etc. You catch our drift. Google reserves the right to refuse admittance to, or remove any person from, any Google-hosted event (including future Google events) at any time in its sole discretion. This includes, but is not limited to, attendees behaving in a disorderly manner or failing to comply with this policy, and the terms and conditions herein. If a participant engages in harassing or uncomfortable behavior, the conference organizers may take any action they deem appropriate, including a warning or expelling the offender from the conference with no refund.</p>\n'
            }]
        }
    }
}
, function(e, t, n) {
    e.exports = {
        faqSection: "faqSection__2vYoD",
        faqGroup: "faqGroup__3rXkR",
        faqRaw: "faqRaw__22Tj7"
    }
}
, function(e, t, n) {
    e.exports = {
        archivedCard: "archivedCard__3a-lw",
        darkOverlay: "darkOverlay__2vPqq",
        watchButton: "watchButton__1n_Nq"
    }
}
, function(e, t, n) {
    e.exports = {
        tabs: "tabs__Nd5Rc",
        recap: "recap__3n7D7"
    }
}
, function(e, t, n) {
    e.exports = {
        hoverZone: "hoverZone__3WssX",
        hovered: "hovered__1E97R",
        default: "default__wE6cM"
    }
}
, function(e, t, n) {
    e.exports = {
        banner: "banner__qUvv_",
        mapCard: "mapCard__2SUOq"
    }
}
, function(e, t) {
    e.exports = {
        title: "Livestream Schedule",
        ctaFullSchedule: "View full schedule"
    }
}
, function(e, t, n) {
    e.exports = {
        title: "title__35r2A",
        image: "image__3Tcc4"
    }
}
, function(e, t) {
    e.exports = {
        title: "Shuttles",
        tabs: [{
            label: "May 6",
            slug: "may-6"
        }, {
            label: "May 7",
            slug: "may-7"
        }, {
            label: "May 8",
            slug: "may-8"
        }, {
            label: "May 9",
            slug: "may-9"
        }],
        routes: [{
            heading: "Hotel shuttles"
        }, {
            name: "Residence Inn Palo Alto, Sheraton Palo Alto",
            color: "#004589",
            altColor: "#7fa2c4",
            textColor: "white",
            schedules: {
                "may-7": [{
                    base: "Residence Inn Palo Alto Los Altos",
                    trips: [{
                        departure: "6:45 AM",
                        arrival: "7:15 AM"
                    }, {
                        departure: "7:45 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }]
                }, {
                    base: "Sheraton Palo Alto",
                    trips: [{
                        departure: "6:45 AM",
                        arrival: "7:15 AM"
                    }, {
                        departure: "7:15 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:45 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "8:15 AM",
                        arrival: "8:45 AM"
                    }, {
                        departure: "8:45 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:15 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Residence Inn Palo Alto Los Altos",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Sheraton Palo Alto",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Residence Inn Palo Alto Los Altos",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }]
                }, {
                    base: "Sheraton Palo Alto",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            name: "Domain Hotel, Wild Palms Hotel, Hyatt House San Jose Cupertino",
            color: "#00c976",
            altColor: "#7fe4ba",
            textColor: "white",
            schedules: {
                "may-7": [{
                    base: "Domain Hotel",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Wild Palms",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Hyatt House San Jose / Cupertino",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Domain Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Wild Palms",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Hyatt House San Jose / Cupertino",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Domain Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Wild Palms",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Hyatt House San Jose / Cupertino",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:00 PM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            name: "Plaza Suites Silicon Valley, Avatar Hotel",
            color: "#ac00bc",
            altColor: "#d57fdd",
            textColor: "white",
            schedules: {
                "may-7": [{
                    base: "Plaza Suites",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Avatar Hotel",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Plaza Suites",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Avatar Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Plaza Suites",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Avatar Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:00 PM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            name: "Grand Hotel Silicon Valley, Hotel Avante",
            color: "#e17900",
            altColor: "#f0bc7f",
            textColor: "white",
            schedules: {
                "may-7": [{
                    base: "Grand Hotel",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }]
                }, {
                    base: "Hotel Avante",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Grand Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Hotel Avante",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Grand Hotel",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Hotel Avante",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:00 PM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            name: "Country Inn & Suites, Aloft Santa Clara",
            color: "#007dda",
            altColor: "#7fbeec",
            textColor: "white",
            schedules: {
                "may-7": [{
                    base: "Country Inn & Suites By Radisson",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Aloft Santa Clara",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Country Inn & Suites By Radisson",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Aloft Santa Clara",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Country Inn & Suites By Radisson",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Aloft Santa Clara",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:00 PM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            name: "Best Western Crestview, Towneplace Suites Sunnyvale, Couryard Sunnyvale",
            color: "#f8e698",
            altColor: "#fbf2cb",
            textColor: "#3C4043",
            schedules: {
                "may-7": [{
                    base: "Best Western Crestview",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Towneplace Suites Sunnyvale/MTV",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }, {
                    base: "Courtyard Sunnyvale MTV",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }]
                }],
                "may-8": [{
                    base: "Best Western Crestview",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Towneplace Suites Sunnyvale/MTV",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }, {
                    base: "Courtyard Sunnyvale MTV",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Best Western Crestview",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Towneplace Suites Sunnyvale/MTV",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }, {
                    base: "Courtyard Sunnyvale MTV",
                    trips: [{
                        departure: "7:30 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop to/from Shoreline Amphitheatre",
                    from: "6:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30- 45 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "11:00 AM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:00 PM",
                    to: "5:00 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "5:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "1:30 PM",
                    to: "4:30 PM",
                    frequency: "Every Hour"
                }]
            }
        }, {
            heading: {
                "may-6": "San Francisco and Oakland shuttles",
                "may-7": "San Francisco, Millbrae & Oakland shuttles",
                "may-8": "San Francisco, Millbrae & Oakland shuttles",
                "may-9": "San Francisco, Millbrae & Oakland shuttles"
            }
        }, {
            name: "Westin St. Francis Union Square, Hyatt Embarcadero",
            color: "white",
            altColor: "white",
            textColor: "#3C4043",
            schedules: {
                "may-6": [{
                    base: "Hyatt Regency Embarcadero",
                    trips: [{
                        departure: "6:00 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "1:00 PM"
                    }, {
                        departure: "1:00 PM",
                        arrival: "2:00 PM"
                    }, {
                        departure: "2:00 PM",
                        arrival: "3:00 PM"
                    }, {
                        departure: "3:00 PM",
                        arrival: "4:15 PM"
                    }]
                }, {
                    base: "Westin St. Francis Union Square",
                    trips: [{
                        departure: "6:00 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "1:00 PM"
                    }, {
                        departure: "1:00 PM",
                        arrival: "2:00 PM"
                    }, {
                        departure: "2:00 PM",
                        arrival: "3:00 PM"
                    }, {
                        departure: "3:00 PM",
                        arrival: "4:15 PM"
                    }]
                }],
                "may-7": [{
                    base: "Millbrae Bart",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:30 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:50 AM"
                    }]
                }, {
                    base: "Hyatt Regency Embarcadero",
                    trips: [{
                        departure: "6:20 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "6:40 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "9:00 AM"
                    }]
                }, {
                    base: "Westin St. Francis Union Square",
                    trips: [{
                        departure: "6:20 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "6:40 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "9:00 AM"
                    }]
                }],
                "may-8": [{
                    base: "Millbrae Bart",
                    trips: [{
                        departure: "7:00 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }]
                }, {
                    base: "Hyatt Regency Embarcadero",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:30 AM"
                    }]
                }, {
                    base: "Westin St. Francis Union Square",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:30 AM"
                    }]
                }],
                "may-9": [{
                    base: "Millbrae Bart",
                    trips: [{
                        departure: "7:00 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }]
                }, {
                    base: "Hyatt Regency Embarcadero",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:30 AM"
                    }]
                }, {
                    base: "Westin St. Francis Union Square",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:30 AM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "7:30 AM",
                    to: "5:30 PM",
                    frequency: "Every Hour"
                }],
                "may-7": [{
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "6:00 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "6:00 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "1:30 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "2:00 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }, {
            name: "Oakland, Lake Merritt BART",
            color: "#222222",
            altColor: "#909090",
            textColor: "white",
            schedules: {
                "may-6": [{
                    base: "Oakland - Lake Merritt BART",
                    trips: [{
                        departure: "6:00 AM",
                        arrival: "7:15 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:30 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "1:00 PM"
                    }, {
                        departure: "1:00 PM",
                        arrival: "2:00 PM"
                    }, {
                        departure: "2:00 PM",
                        arrival: "3:00 PM"
                    }, {
                        departure: "3:00 PM",
                        arrival: "4:15 PM"
                    }]
                }],
                "may-7": [{
                    base: "Oakland - Lake Merritt BART",
                    trips: [{
                        departure: "6:00 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "6:20 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "6:40 AM",
                        arrival: "9:00 AM"
                    }]
                }],
                "may-8": [{
                    base: "Oakland - Lake Merritt BART",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:00 AM"
                    }]
                }],
                "may-9": [{
                    base: "Oakland - Lake Merritt BART",
                    trips: [{
                        departure: "6:40 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "7:20 AM",
                        arrival: "9:00 AM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "7:30 AM",
                    to: "5:30 PM",
                    frequency: "Every Hour"
                }],
                "may-7": [{
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "6:00 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Evening loop from Shoreline Amphitheatre",
                    from: "6:00 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "1:30 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "2:00 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }, {
            heading: {
                "may-6": "Caltrain and Avaya Stadium shuttles",
                "may-7": "Caltrain and Avaya Stadium shuttles",
                "may-8": "Caltrain and Avaya Stadium shuttles",
                "may-9": "Caltrain, Avaya Stadium Shuttles, and airport shuttles."
            }
        }, {
            name: "Mountain View Caltrain",
            color: "#55565b",
            altColor: "#aaaaad",
            textColor: "white",
            schedules: {
                "may-6": [{
                    base: "MTV Caltrain",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "6:45 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "7:15 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "8:45 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:30 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:15 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "11:45 AM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:15 PM"
                    }, {
                        departure: "12:30 PM",
                        arrival: "12:45 PM"
                    }, {
                        departure: "1:00 PM",
                        arrival: "1:15 PM"
                    }, {
                        departure: "1:30 PM",
                        arrival: "1:45 PM"
                    }, {
                        departure: "2:00 PM",
                        arrival: "2:15 PM"
                    }, {
                        departure: "2:30 PM",
                        arrival: "2:45 PM"
                    }, {
                        departure: "3:00 PM",
                        arrival: "3:15 PM"
                    }, {
                        departure: "3:30 PM",
                        arrival: "3:45 PM"
                    }, {
                        departure: "4:00 PM",
                        arrival: "4:15 PM"
                    }, {
                        departure: "4:30 PM",
                        arrival: "4:45 PM"
                    }, {
                        departure: "5:00 PM",
                        arrival: "5:15 PM"
                    }, {
                        departure: "5:30 PM",
                        arrival: "5:45 PM"
                    }]
                }],
                "may-7": [{
                    base: "MTV Caltrain",
                    trips: [{
                        departure: "6:45 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:15 AM",
                        arrival: "7:30 AM"
                    }, {
                        departure: "7:45 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:15 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:45 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:15 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "9:45 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:15 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:45 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:15 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:45 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:15 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:45 PM",
                        arrival: "1:00 PM"
                    }]
                }],
                "may-8": [{
                    base: "MTV Caltrain",
                    trips: [{
                        departure: "7:45 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:15 AM",
                        arrival: "8:45 AM"
                    }, {
                        departure: "8:45 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:15 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "9:45 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:15 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:45 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:15 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:45 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:15 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:45 PM",
                        arrival: "1:00 PM"
                    }]
                }],
                "may-9": [{
                    base: "MTV Caltrain",
                    trips: [{
                        departure: "7:45 AM",
                        arrival: "8:00 AM"
                    }, {
                        departure: "8:15 AM",
                        arrival: "8:45 AM"
                    }, {
                        departure: "8:45 AM",
                        arrival: "9:15 AM"
                    }, {
                        departure: "9:15 AM",
                        arrival: "9:45 AM"
                    }, {
                        departure: "9:45 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:15 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:45 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:15 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:45 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:15 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:45 PM",
                        arrival: "1:00 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "7:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }, {
            name: "Avaya Stadium Parking",
            color: "#f90000",
            altColor: "#fc7f7f",
            textColor: "white",
            schedules: {
                "may-6": [{
                    base: "Avaya Stadium",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "7:30 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:15 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:30 PM",
                        arrival: "1:00 PM"
                    }, {
                        departure: "1:00 PM",
                        arrival: "1:30 PM"
                    }, {
                        departure: "1:30 PM",
                        arrival: "2:00 PM"
                    }, {
                        departure: "2:00 PM",
                        arrival: "2:30 PM"
                    }, {
                        departure: "2:30 PM",
                        arrival: "3:00 PM"
                    }, {
                        departure: "3:00 PM",
                        arrival: "3:30 PM"
                    }, {
                        departure: "3:30 PM",
                        arrival: "4:00 PM"
                    }, {
                        departure: "4:00 PM",
                        arrival: "4:30 PM"
                    }, {
                        departure: "4:30 PM",
                        arrival: "5:00 PM"
                    }, {
                        departure: "5:00 PM",
                        arrival: "5:30 PM"
                    }, {
                        departure: "5:30 PM",
                        arrival: "6:00 PM"
                    }]
                }],
                "may-7": [{
                    base: "Avaya Stadium",
                    trips: [{
                        departure: "6:30 AM",
                        arrival: "7:00 AM"
                    }, {
                        departure: "7:00 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:30 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:30 PM",
                        arrival: "1:00 PM"
                    }]
                }],
                "may-8": [{
                    base: "Avaya Stadium",
                    trips: [{
                        departure: "7:15 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:30 PM",
                        arrival: "1:00 PM"
                    }]
                }],
                "may-9": [{
                    base: "Avaya Stadium",
                    trips: [{
                        departure: "7:15 AM",
                        arrival: "7:45 AM"
                    }, {
                        departure: "7:30 AM",
                        arrival: "8:30 AM"
                    }, {
                        departure: "8:00 AM",
                        arrival: "9:00 AM"
                    }, {
                        departure: "8:30 AM",
                        arrival: "9:30 AM"
                    }, {
                        departure: "9:00 AM",
                        arrival: "10:00 AM"
                    }, {
                        departure: "9:30 AM",
                        arrival: "10:15 AM"
                    }, {
                        departure: "10:00 AM",
                        arrival: "10:45 AM"
                    }, {
                        departure: "10:30 AM",
                        arrival: "11:00 AM"
                    }, {
                        departure: "11:00 AM",
                        arrival: "11:30 AM"
                    }, {
                        departure: "11:30 AM",
                        arrival: "12:00 PM"
                    }, {
                        departure: "12:00 PM",
                        arrival: "12:30 PM"
                    }, {
                        departure: "12:30 PM",
                        arrival: "1:00 PM"
                    }]
                }]
            },
            loops: {
                "may-6": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "7:30 AM",
                    to: "7:00 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-7": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-8": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "10:30 PM",
                    frequency: "Every 30 Minutes"
                }],
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }, {
            name: "San Francisco Airport (SFO)",
            color: "white",
            altColor: "white",
            textColor: "#3C4043",
            loops: {
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "1:30 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "2:00 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }, {
            name: "San Jose Airport (SJC)",
            color: "white",
            altColor: "white",
            textColor: "#3C4043",
            loops: {
                "may-9": [{
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "12:30 PM",
                    to: "1:30 PM",
                    frequency: "Every Hour"
                }, {
                    title: "Daytime loop from Shoreline Amphitheatre",
                    from: "2:00 PM",
                    to: "4:30 PM",
                    frequency: "Every 30 Minutes"
                }]
            }
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        marketingLayout: "marketingLayout__qGN2c",
        liveLayout: "liveLayout__3BirU",
        homepageLayout: "homepageLayout__1i8pL",
        liveAuth: "liveAuth__2oudV",
        mobileOverflowHidden: "mobileOverflowHidden__11dgt"
    }
}
, , , , , , , , , , , , , , function(e, t, n) {
    e.exports = {
        tooltip: "tooltip__1s5Jp",
        tooltipActive: "tooltipActive__1EV8X"
    }
}
, , , function(e, t, n) {
    e.exports = {
        darkUnderlay: "darkUnderlay__17Khf",
        darkUnderlayVisible: "darkUnderlayVisible__1qVfJ"
    }
}
, function(e, t, n) {
    e.exports = {
        fillRed: "fillRed__QMz3i",
        fillGreen: "fillGreen__2EUlI",
        fillDarkGreen: "fillDarkGreen__2Q2hR",
        fillBlue: "fillBlue__31I82",
        fillNone: "fillNone__1odqf",
        fillWhite: "fillWhite__gfCPN",
        fillYellow: "fillYellow__15SoT",
        strokeBlue: "strokeBlue__1M9c4",
        strokeGreen: "strokeGreen__3dpnm",
        strokeDarkGreen: "strokeDarkGreen__1d0D7",
        strokeNone: "strokeNone__102Yv",
        strokeWhite: "strokeWhite__2t20e",
        strokeYellow: "strokeYellow__21JQ0"
    }
}
, function(e, t, n) {
    e.exports = {
        lazyLoader: "lazyLoader__1BLbg",
        active: "active__26B8I"
    }
}
, function(e, t, n) {
    e.exports = {
        circular: "circular__1G-b-",
        rotate: "rotate__3-XL9",
        path: "path__XzftR",
        dash: "dash__3VlCl"
    }
}
, function(e, t, n) {
    e.exports = {
        wrapper: "wrapper__11Cy_",
        sessionLiveIndicator: "sessionLiveIndicator__Y11C7"
    }
}
, function(e, t, n) {
    e.exports = {
        toolbar: "toolbar__BPzS8",
        pipIcon: "pipIcon__3DIwI",
        toolbarButton: "toolbarButton__3M0Db"
    }
}
, function(e, t, n) {
    e.exports = {
        guides: "guides__2QR8B"
    }
}
, function(e, t, n) {
    e.exports = {
        tab: "tab__3ESuv",
        activeTab: "activeTab__1zExf"
    }
}
, function(e, t, n) {
    e.exports = {
        container: "container__3t64w",
        content: "content__2C2-K"
    }
}
, function(e, t, n) {
    e.exports = {
        appGrid: "appGrid__PXZWo",
        appIcon: "appIcon__2W62z"
    }
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "Firebase", (function() {
        return b
    }
    ));
    var o = n(14)
      , a = n.n(o)
      , r = n(11)
      , i = n.n(r)
      , s = n(16)
      , l = n.n(s)
      , c = n(2)
      , u = n.n(c)
      , d = n(3)
      , h = n.n(d)
      , p = n(37)
      , f = n(1)
      , g = n(22)
      , b = function() {
        function e() {
            u()(this, e),
            this.codelabsData = [],
            this.eventSnapshotUnsubscribers = [],
            this.loaded = !1,
            this.roomsData = [],
            this.sessionsData = [],
            this.speakersData = [],
            this.tagsData = [],
            this.userEventsData = []
        }
        var t, n, o, r, s, c, d, b, v, m;
        return h()(e, [{
            key: "getLoadingPromise",
            value: (m = l()(i.a.mark((function e() {
                var t = this;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Object(f.M)(["https://www.gstatic.com/firebasejs/5.8.6/firebase-app.js"]);
                        case 2:
                            return e.next = 4,
                            Object(f.M)(["https://www.gstatic.com/firebasejs/5.8.6/firebase-auth.js", "https://www.gstatic.com/firebasejs/5.8.6/firebase-firestore.js", "https://www.gstatic.com/firebasejs/5.8.6/firebase-functions.js"]);
                        case 4:
                            return f.T && window.firebase,
                            this.firebase = firebase.initializeApp(p.b),
                            this.firestore = this.firebase.firestore(),
                            this.functions = this.firebase.functions(),
                            this.auth = this.firebase.auth(),
                            this.authProvider = new firebase.auth.GoogleAuthProvider,
                            this.auth.useDeviceLanguage(),
                            this.auth.onAuthStateChanged((function(e) {
                                return t.handleAuthStateChanged(e)
                            }
                            )),
                            this.loaded = !0,
                            e.abrupt("return", this);
                        case 14:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return m.apply(this, arguments)
            }
            )
        }, {
            key: "signInAnonymously",
            value: (v = l()(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.auth.currentUser) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", this.auth.signInAnonymously());
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return v.apply(this, arguments)
            }
            )
        }, {
            key: "listenForEventData",
            value: (b = l()(i.a.mark((function e() {
                var t = this;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!(this.eventSnapshotUnsubscribers.length > 0)) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            this.eventSnapshotUnsubscribers.push(this.firestore.collection(p.a).onSnapshot((function(e) {
                                t.codelabsData = e.docs.map((function(e) {
                                    return e.data()
                                }
                                )),
                                t.onCodelabsUpdate && t.onCodelabsUpdate(t.codelabsData)
                            }
                            ))),
                            this.eventSnapshotUnsubscribers.push(this.firestore.collection(p.h).onSnapshot((function(e) {
                                t.sessionsData = e.docs.map((function(e) {
                                    return e.data()
                                }
                                )),
                                t.onSessionsUpdate && t.onSessionsUpdate(t.sessionsData)
                            }
                            ))),
                            this.eventSnapshotUnsubscribers.push(this.firestore.collection(p.i).onSnapshot((function(e) {
                                t.speakersData = e.docs.map((function(e) {
                                    return e.data()
                                }
                                )),
                                t.onSpeakersUpdate && t.onSpeakersUpdate(t.speakersData)
                            }
                            ))),
                            this.eventSnapshotUnsubscribers.push(this.firestore.collection(p.f).onSnapshot((function(e) {
                                t.roomsData = e.docs.map((function(e) {
                                    return e.data()
                                }
                                )),
                                t.onRoomsUpdate && t.onRoomsUpdate(t.roomsData)
                            }
                            ))),
                            this.eventSnapshotUnsubscribers.push(this.firestore.collection(p.j).onSnapshot((function(e) {
                                t.tagsData = e.docs.map((function(e) {
                                    return e.data()
                                }
                                )),
                                t.onTagsUpdate && t.onTagsUpdate(t.tagsData)
                            }
                            ))),
                            this.eventSnapshotUnsubscribers.push(this.firestore.doc(p.c).onSnapshot((function(e) {
                                t.keynotesStatusData = e.data(),
                                t.onKeynoteStatusUpdate && t.onKeynoteStatusUpdate(t.keynotesStatusData)
                            }
                            )));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return b.apply(this, arguments)
            }
            )
        }, {
            key: "signIn",
            value: (d = l()(i.a.mark((function e() {
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.authenticatedUser) {
                                e.next = 9;
                                break
                            }
                            return e.prev = 1,
                            e.next = 4,
                            this.auth.signInWithPopup(this.authProvider);
                        case 4:
                            e.next = 9;
                            break;
                        case 6:
                            e.prev = 6,
                            e.t0 = e.catch(1),
                            console.warn("Failed to sign user in with Firebase:", e.t0);
                        case 9:
                            return e.abrupt("return", this.user);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[1, 6]])
            }
            ))),
            function() {
                return d.apply(this, arguments)
            }
            )
        }, {
            key: "signOut",
            value: (c = l()(i.a.mark((function e() {
                var t;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.unsubscribeSnapshots(),
                            t = !0,
                            e.prev = 2,
                            e.next = 5,
                            this.auth.signOut();
                        case 5:
                            e.next = 11;
                            break;
                        case 7:
                            e.prev = 7,
                            e.t0 = e.catch(2),
                            t = !1,
                            console.warn("Failed to sign user out with Firebase:", e.t0);
                        case 11:
                            return e.abrupt("return", t);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[2, 7]])
            }
            ))),
            function() {
                return c.apply(this, arguments)
            }
            )
        }, {
            key: "getAttendeeStatus",
            value: (s = l()(i.a.mark((function e() {
                var t, n, o, a;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.authenticatedUser) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return", !1);
                        case 2:
                            return e.next = 4,
                            this.user.getIdToken();
                        case 4:
                            return t = e.sent,
                            e.next = 7,
                            fetch("https://events-dev-62d2e.appspot.com/_ah/api/registration/v1/register", {
                                headers: {
                                    Authorization: "Bearer ".concat(t)
                                }
                            });
                        case 7:
                            if (!(n = e.sent).ok) {
                                e.next = 15;
                                break
                            }
                            return e.next = 11,
                            n.json();
                        case 11:
                            return o = e.sent,
                            e.abrupt("return", o.registered || !1);
                        case 15:
                            return e.next = 17,
                            n.text();
                        case 17:
                            throw a = e.sent,
                            new Error(a);
                        case 19:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "setStarred",
            value: function(e, t) {
                return this.firestore.collection(p.k).doc(this.authenticatedUser.uid).collection("events").doc(e).set({
                    isStarred: t
                }, {
                    merge: !0
                })
            }
        }, {
            key: "makeReservationRequest",
            value: (r = l()(i.a.mark((function e(t) {
                var n, o = this;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (!this.reservationRequestInProgress) {
                                e.next = 2;
                                break
                            }
                            throw new Error("Another registration is currently in progress");
                        case 2:
                            return this.reservationRequestInProgress = !0,
                            n = t.sessionId || t.reserveSessionId,
                            t.requestId = "iowa-".concat(Object(f.K)()),
                            t.timestamp = (new Date).getTime(),
                            e.next = 8,
                            this.firestore.collection(p.e).doc(this.authenticatedUser.uid).set(t);
                        case 8:
                            return e.abrupt("return", new Promise((function(e) {
                                var t = o.firestore.collection(p.e).doc(o.authenticatedUser.uid).onSnapshot((function(a) {
                                    if (!1 === a.metadata.hasPendingWrites && void 0 === a.data()) {
                                        o.reservationRequestInProgress = !1,
                                        t();
                                        var r = o.userEventsData.find((function(e) {
                                            return e.id === n
                                        }
                                        ));
                                        r && r.reservationResult ? e(r.reservationResult.requestResult) : e(g.a.UNKNOWN)
                                    }
                                }
                                ))
                            }
                            )));
                        case 9:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "makePlaceInLineCall",
            value: (o = l()(i.a.mark((function e(t) {
                var n, o;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = this.functions.httpsCallable(p.d),
                            e.next = 3,
                            n({
                                sessionId: t
                            });
                        case 3:
                            return o = e.sent,
                            e.abrupt("return", o.data.placeInLine);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "makeFeedbackCall",
            value: (n = l()(i.a.mark((function e(t) {
                var n, o;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = this.functions.httpsCallable(p.g),
                            e.next = 3,
                            n(t);
                        case 3:
                            return o = e.sent,
                            e.abrupt("return", o.data);
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "unsubscribeSnapshots",
            value: function() {
                this.eventSnapshotUnsubscribers.forEach((function(e) {
                    return e()
                }
                )),
                this.userEventsUnsubscriber && this.userEventsUnsubscriber()
            }
        }, {
            key: "handleAuthStateChanged",
            value: (t = l()(i.a.mark((function e(t) {
                var n = this;
                return i.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.user = t,
                            this.user) {
                                e.next = 4;
                                break
                            }
                            return e.next = 4,
                            this.signInAnonymously();
                        case 4:
                            this.listenForEventData(),
                            this.authenticatedUser && (this.userEventsUnsubscriber && this.userEventsUnsubscriber(),
                            this.userEventsUnsubscriber = this.firestore.collection(p.k).doc(this.authenticatedUser.uid).collection("events").onSnapshot((function(e) {
                                n.userEventsData = e.docs.map((function(e) {
                                    return a()(a()({}, e.data()), {
                                        id: e.id
                                    })
                                }
                                )),
                                n.onUserEventsUpdate && n.onUserEventsUpdate(n.userEventsData)
                            }
                            ))),
                            this.onUserUpdate && this.onUserUpdate(this.authenticatedUser);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "authenticatedUser",
            get: function() {
                return this.user && !this.user.isAnonymous ? this.user : void 0
            }
        }], [{
            key: "getInstance",
            value: function() {
                return this.instance || (this.instance = new e,
                this.instance.loadingPromise = this.instance.getLoadingPromise()),
                this.instance.loadingPromise
            }
        }]),
        e
    }()
}
, , , , , , , , function(e, t, n) {
    e.exports = {
        logo: "logo__3dyGg",
        logoWhite: "logoWhite__2LZE2",
        logoBlue: "logoBlue__2hidy",
        logoTextPath: "logoTextPath__3pJ43",
        logoIconPath: "logoIconPath__aAPcD"
    }
}
, function(e, t) {
    e.exports = {
        title: "I/O 2020",
        navItems: [{
            label: "Home",
            route: "/io/"
        }, {
            label: "FAQ",
            route: "/io/faq/"
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        rawContent: "rawContent__3uy6o"
    }
}
, function(e, t) {
    e.exports = {
        title: "Frequently asked questions"
    }
}
, function(e, t, n) {
    e.exports = {
        faqPage: "faqPage__2-WzM"
    }
}
, function(e, t) {
    e.exports = {
        customize: {
            heading: "Customize your schedule",
            buttonDismiss: "Got it",
            list: [{
                label: "View only your events",
                image: "Toggle"
            }, {
                label: "Save an event",
                image: "Bookmark"
            }, {
                label: "Reserve a session seat (attendees only)",
                image: "Reserve"
            }]
        }
    }
}
, function(e, t, n) {
    e.exports = {
        star: "star__DIzMw"
    }
}
, function(e, t) {
    e.exports = {
        questions: [{
            question: "How would you rate the overall quality of the Session?"
        }, {
            question: "How would you describe the content of the Session based on your expectations / Session description?"
        }, {
            question: "How would you rate the speaker(s)?"
        }, {
            question: "How relevant was the Session to your projects?",
            low: "Not very",
            high: "Extremely"
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        cards: "cards__1_G_U",
        card: "card__mVcBk"
    }
}
, , , function(e, t) {
    e.exports = {
        hero: {
            date: "May 12-14, 2020",
            location: "Shoreline Amphitheatre",
            city: "Mountain View, CA",
            description: 'Due to concerns around the coronavirus (COVID-19), and in accordance with health guidance from the <a href="https://www.cdc.gov/coronavirus/2019-ncov/index.html" target="_blank" rel="noopener noreferrer">CDC</a>, <a href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019" target="_blank" rel="noopener noreferrer">WHO</a>, and other health authorities, we have decided to cancel the physical Google I/O event at Shoreline Amphitheatre. <br><br> All guests who have purchased tickets to I/O 2020 will receive a full refund by March 13, 2020. If you don’t see the credit on your statement by then, please reach out to <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>. Guests who have registered for I/O 2020 will not need to enter next year’s drawing and will be automatically granted the option of purchasing an I/O 2021 ticket. <br><br> Over the coming weeks, we will explore other ways to evolve Google I/O to best connect with our developer community. <br><br> For additional questions, please contact <a href="mailto:io@google.com" target="_blank" rel="noopener noreferrer">io@google.com</a>.\n'
        },
        videoRecap: {
            title: "Find out what happened at I/O 2019",
            video: {
                id: "lyRPyRKHO8M",
                label: "I/O 2019 Keynote",
                image: {
                    src: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-04-1x.jpg",
                    src2x: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-04-2x.jpg",
                    alt: "I/O 2019 Keynote"
                }
            },
            image_left: {
                src: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-02-1x.jpg",
                src2x: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-02-2x.jpg",
                alt: "I/O 2019 Recap"
            },
            image_right: {
                src: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-03-1x.jpg",
                src2x: "https://storage.googleapis.com/io-2020-266123.appspot.com/assets/home/homepage-03-2x.jpg",
                alt: "I/O 2019 Recap"
            },
            cta: {
                href: "https://events.google.com/io2019/recap/",
                label: "Check out the I/O '19 recap",
                external: !0
            }
        },
        exploreTheThemes: [{
            title: "Platforms",
            desc: "Utilize platforms that connect you to billions of users around the world."
        }, {
            title: "Grow & Earn",
            desc: "Acquire and engage new users; grow meaningful monetization streams."
        }, {
            title: "Building on Mobile",
            desc: "Apply infrastructure and services to take your mobile apps to the next level."
        }, {
            title: "Beyond Mobile",
            desc: "Expand onto new screens and push the limits of what's possible."
        }],
        quote: "I/O unites developers from around the globe for talks, hands-on learning with Google experts, and a first look at Google's latest developer products and platforms.\n"
    }
}
, function(e, t, n) {
    e.exports = {
        timeIndicator: "timeIndicator__1U_Se"
    }
}
, function(e, t, n) {
    e.exports = {
        mapControls: "mapControls__2b-Zn"
    }
}
, , function(e, t, n) {
    e.exports = {
        content: "content__1cXvV"
    }
}
, function(e, t, n) {
    e.exports = {
        header: "header__3Rra1"
    }
}
, function(e, t, n) {
    e.exports = {
        sandbox: "sandbox__3JvkY",
        title: "title__NXOEl",
        content: "content__3nKy-"
    }
}
, function(e, t, n) {
    e.exports = {
        liveSnackbar: "liveSnackbar__1px_C"
    }
}
, function(e, t) {
    e.exports = {
        days: [{
            datetime: "2019-05-06T00:00:00-07:00",
            events: [{
                start: 7,
                end: 19,
                title: "Badge pick-up",
                color: "grey",
                svg: "Shield"
            }]
        }, {
            datetime: "2019-05-07T00:00:00-07:00",
            events: [{
                start: 7,
                end: 9.5,
                title: "Breakfast",
                color: "red",
                svg: "Utensils"
            }, {
                start: 11.5,
                end: 13,
                title: "Lunch",
                color: "red",
                svg: "Utensils",
                shifted: !0
            }, {
                start: 7,
                end: 19,
                title: "Badge pick-up",
                color: "grey",
                svg: "Shield"
            }, {
                start: 10,
                end: 11.5,
                title: "Google keynote",
                shortTitle: "Keynote",
                color: "yellow",
                svg: "Star",
                hideIconInDesktop: !0
            }, {
                start: 12.75,
                end: 13.75,
                title: "Developer Keynote",
                shortTitle: "Keynote",
                color: "yellow",
                svg: "Star",
                shifted: !0,
                hideIconInDesktop: !0
            }, {
                start: 14,
                end: 19,
                title: "Sessions",
                svg: "Slash",
                color: "green"
            }, {
                start: 14,
                end: 19,
                title: "Codelabs",
                color: "blue",
                svg: "Code"
            }, {
                start: 14,
                end: 19,
                title: "Sandboxes",
                color: "blue",
                svg: "Wrench"
            }, {
                start: 14,
                end: 19,
                title: "Office Hours & App Reviews",
                color: "blue",
                svg: "TwoPeople"
            }, {
                start: 11.5,
                end: 19.5,
                title: "I/O Store",
                color: "redBorder",
                svg: "Shop"
            }, {
                start: 18.5,
                end: 22,
                title: "After Dark",
                color: "darkBlue",
                svg: "Moon"
            }]
        }, {
            datetime: "2019-05-08T00:00:00-07:00",
            events: [{
                start: 8,
                end: 10,
                title: "Breakfast",
                color: "red",
                svg: "Utensils"
            }, {
                start: 11.5,
                end: 14.5,
                title: "Lunch",
                color: "red",
                svg: "Utensils",
                shifted: !0
            }, {
                start: 8,
                end: 19,
                title: "Badge pick-up",
                color: "grey",
                svg: "Shield"
            }, {
                start: 8.5,
                end: 19.5,
                title: "Sessions",
                svg: "Slash",
                color: "green"
            }, {
                start: 8.5,
                end: 19,
                title: "Codelabs",
                color: "blue",
                svg: "Code"
            }, {
                start: 8.5,
                end: 19,
                title: "Sandboxes",
                color: "blue",
                svg: "Wrench"
            }, {
                start: 8.5,
                end: 19,
                title: "Office Hours & App Reviews",
                color: "blue",
                svg: "TwoPeople"
            }, {
                start: 8,
                end: 20,
                title: "I/O Store",
                color: "redBorder",
                svg: "Shop"
            }, {
                start: 20,
                end: 22,
                title: "Concert",
                color: "darkBlue",
                svg: "Music"
            }]
        }, {
            datetime: "2019-05-09T00:00:00-07:00",
            events: [{
                start: 8,
                end: 10,
                title: "Breakfast",
                color: "red",
                svg: "Utensils"
            }, {
                start: 11.5,
                end: 14.5,
                title: "Lunch",
                color: "red",
                svg: "Utensils",
                shifted: !0
            }, {
                start: 8,
                end: 16,
                title: "Badge pick-up",
                color: "grey",
                svg: "Shield"
            }, {
                start: 8.5,
                end: 16.5,
                title: "Sessions",
                svg: "Slash",
                color: "green"
            }, {
                start: 8.5,
                end: 16,
                title: "Codelabs",
                color: "blue",
                svg: "Code"
            }, {
                start: 8.5,
                end: 16,
                title: "Sandboxes",
                color: "blue",
                svg: "Wrench"
            }, {
                start: 8.5,
                end: 16,
                title: "Office Hours & App Reviews",
                color: "blue",
                svg: "TwoPeople"
            }, {
                start: 8,
                end: 17,
                title: "I/O Store",
                color: "redBorder",
                svg: "Shop"
            }]
        }]
    }
}
, function(e, t, n) {
    e.exports = {
        heading: "heading__Ars3I"
    }
}
, function(e, t, n) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n.r(t);
    n(229);
    var o, a, r, i = n(0), s = n(14), l = n.n(s), c = n(2), u = n.n(c), d = n(3), h = n.n(d), p = n(5), f = n.n(p), g = n(6), b = n.n(g), v = n(7), m = n.n(v), y = n(9), O = n.n(y), j = n(93), k = n.n(j), S = n(85), w = n(8), _ = n(1), C = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.ariaLabel
                  , n = e.children
                  , o = e.classNames;
                return Object(i.h)("i", {
                    "aria-label": t,
                    "aria-hidden": !t,
                    class: Object(_.U)("material-icons", o)
                }, n)
            }
        }]),
        t
    }(i.Component), M = n(160), H = n.n(M), L = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                active: !1
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "onMouseover",
            value: function(e, t) {
                this.state.active || this.setState({
                    active: !0
                });
                var n = t.getBoundingClientRect()
                  , o = n.top + n.height
                  , a = n.left + (n.width / 2 - e.offsetWidth / 2);
                "static" === t.style.position && (t.style.position = "relative"),
                e.style.top = "".concat(o, "px"),
                e.style.left = "".concat(a, "px")
            }
        }, {
            key: "onMouseout",
            value: function() {
                this.state.active && this.setState({
                    active: !1
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                if (_.T) {
                    var t = this.el;
                    this.parent = null !== t ? t.parentNode : null,
                    null !== this.parent && (this.onMouseoverHandler = function() {
                        return e.onMouseover(t, e.parent)
                    }
                    ,
                    this.onMouseoutHandler = function() {
                        return e.onMouseout()
                    }
                    ,
                    this.parent.addEventListener("mouseover", this.onMouseoverHandler, {
                        passive: !0
                    }),
                    this.parent.addEventListener("mouseout", this.onMouseoutHandler, {
                        passive: !0
                    }))
                }
            }
        }, {
            key: "componentOnUnmount",
            value: function() {
                this.parent.removeEventListener("mouseover", this.onMouseoverHandler),
                this.parent.removeEventListener("mouseout", this.onMouseoutHandler)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.ariaLabel
                  , o = t.label
                  , a = this.state.active;
                return Object(i.h)("div", {
                    ref: function(t) {
                        return e.el = t
                    },
                    class: Object(_.U)(H.a.tooltip, a && H.a.tooltipActive),
                    "aria-label": n || o,
                    "aria-hidden": a
                }, o || this.props.children)
            }
        }]),
        t
    }(i.Component), T = n(63), A = n.n(T), I = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Flat = "Flat",
        e.Lowered = "Lowered",
        e.Raised = "Raised"
    }(o || (o = {})),
    function(e) {
        e.Default = "Default",
        e.Highlighted = "Highlighted",
        e.Colored = "Colored",
        e.NotRaised = "NotRaised"
    }(a || (a = {})),
    function(e) {
        e[e.Default = 0] = "Default",
        e[e.Compact = 1] = "Compact"
    }(r || (r = {}));
    var x = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).clickHandler = e.onClickHandler.bind(k()(e)),
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "onClickHandler",
            value: function(e) {
                if (this.props.disabled)
                    return e.preventDefault(),
                    !1;
                this.props.onClick && this.props.onClick(e)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.ariaLabel
                  , n = e.ariaPressed
                  , o = e.classNames
                  , a = e.disabled
                  , s = e.icon
                  , l = e.elevation
                  , c = e.href
                  , u = e.type
                  , d = e.layout
                  , h = e.onMouseEnter
                  , p = e.onMouseLeave
                  , f = e.tooltip
                  , g = e.UIStore
                  , b = [A.a.fab, A.a["fab".concat(l)], A.a["fab".concat(u)], o, d === r.Compact && A.a.fabCompact, a && A.a.disabled]
                  , v = _.U.apply(void 0, b);
                return c ? Object(i.h)("a", {
                    class: v,
                    onMouseEnter: h,
                    onMouseLeave: p,
                    onClick: this.clickHandler,
                    href: c,
                    "aria-label": t,
                    "data-g-on": this.props.gaOn,
                    "data-g-event-category": this.props.gaCategory || this.props.location.pathname,
                    "data-g-event-label": this.props.gaLabel || t,
                    "data-g-event-action": this.props.gaEventAction
                }, Object(i.h)(C, {
                    classNames: A.a.fabIcon
                }, s), this.props.children) : Object(i.h)("button", {
                    class: v,
                    onMouseEnter: h,
                    onMouseLeave: p,
                    onClick: this.clickHandler,
                    disabled: a,
                    "aria-pressed": n,
                    "aria-label": t,
                    "data-g-on": this.props.gaOn,
                    "data-g-event-category": this.props.gaCategory || this.props.location.pathname,
                    "data-g-event-label": this.props.gaLabel || t,
                    "data-g-event-action": this.props.gaEventAction
                }, s && Object(i.h)(C, {
                    classNames: A.a.fabIcon
                }, s), Object(i.h)("span", {
                    style: {
                        pointerEvents: "none"
                    }
                }, this.props.children), f && !g.Screen.isLessThanLaptop && Object(i.h)(L, null, f))
            }
        }]),
        t
    }(i.Component);
    x.defaultProps = {
        disabled: !1,
        elevation: o.Lowered,
        gaEventAction: "click",
        gaOn: "click",
        layout: r.Default,
        type: a.Default
    },
    x = I([S.h, Object(w.b)("UIStore"), w.c], x);
    var D, R = n(133), E = n.n(R), P = n(30), B = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Default = "Default",
        e.Nav = "Nav",
        e.Gif = "Gif"
    }(D || (D = {}));
    var U = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e, t, n = this.props, o = n.href, a = n.ariaHidden, r = n.ariaLabel, s = n.ariaCurrent, l = n.ariaPressed, c = n.ariaSelected, u = n.ariaRole, d = n.external, h = n.id, p = n.isRouterLink, f = n.native, g = n.onClick, b = n.onKeyPress, v = n.routerLinkWrapperClassnames, m = n.styleOverrides, y = n.tabIndex, O = n.focusType, j = n.classNames, k = d ? "_blank" : null, S = d ? "noopener noreferrer" : null;
                return O === D.Nav ? e = E.a.navFocusStyle : O === D.Gif ? e = E.a.gifFocusStyle : O && (e = E.a.focusStyle),
                void 0 !== y ? t = y : a && (t = -1),
                p ? Object(i.h)("span", {
                    "data-g-on": this.props.gaOn,
                    "data-g-event-category": this.props.gaCategory || this.props.location.pathname,
                    "data-g-event-label": this.props.gaLabel || r || o,
                    "data-g-event-action": this.props.gaEventAction,
                    class: v
                }, Object(i.h)(P.b, {
                    id: h,
                    to: o,
                    href: o,
                    target: k,
                    rel: S,
                    class: Object(_.U)(e),
                    "aria-label": r,
                    "aria-current": s,
                    "aria-role": u,
                    role: u,
                    "aria-pressed": l,
                    "aria-selected": c,
                    onClick: function(e) {
                        g && g(e)
                    },
                    onKeyPress: function(e) {
                        b && b(e)
                    },
                    "aria-hidden": a,
                    tabIndex: void 0 !== t && t,
                    native: "".concat(f || void 0 !== d)
                }, Object(i.h)("span", {
                    tabIndex: -1,
                    class: Object(_.U)(j),
                    style: m
                }, this.props.children))) : Object(i.h)("a", {
                    class: Object(_.U)(e, j),
                    id: h,
                    href: o,
                    target: k,
                    rel: S,
                    "aria-label": r,
                    "aria-current": s,
                    "aria-role": u,
                    role: u,
                    "aria-pressed": l,
                    "aria-selected": c,
                    "data-g-on": this.props.gaOn,
                    "data-g-event-category": this.props.gaCategory || this.props.location.pathname,
                    "data-g-event-label": this.props.gaLabel || r || o,
                    "data-g-event-action": this.props.gaEventAction,
                    onClick: function(e) {
                        g && g(e)
                    },
                    onKeyPress: function(e) {
                        b && b(e)
                    },
                    "aria-hidden": a,
                    tabIndex: void 0 !== t && t,
                    style: m
                }, this.props.children)
            }
        }]),
        t
    }(i.Component);
    U.defaultProps = {
        gaOn: "click",
        gaEventAction: "click"
    },
    U = B([S.h], U);
    var F = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            width: "158",
            height: "52",
            viewBox: "0 -1 158 52",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n    ", Object(i.h)("path", {
            d: "M60.767 26.69c0-4.56-3.312-7.681-7.152-7.681-3.84 0-7.153 3.12-7.153 7.68 0 4.514 3.313 7.682 7.153 7.682 3.84 0 7.152-3.168 7.152-7.681zm5.569 0c0 7.297-5.713 12.673-12.721 12.673-7.01 0-12.721-5.376-12.721-12.673 0-7.344 5.712-12.673 12.72-12.673 7.009 0 12.722 5.329 12.722 12.673zm22.431 0c0-4.56-3.312-7.681-7.152-7.681-3.84 0-7.153 3.12-7.153 7.68 0 4.514 3.313 7.682 7.153 7.682 3.84 0 7.152-3.168 7.152-7.681m5.569 0c0 7.297-5.713 12.673-12.721 12.673-7.01 0-12.721-5.376-12.721-12.673 0-7.344 5.712-12.673 12.72-12.673 7.009 0 12.722 5.329 12.722 12.673m21.933.048c0-4.464-2.977-7.729-6.77-7.729-3.838 0-7.055 3.265-7.055 7.73 0 4.416 3.216 7.631 7.055 7.631 3.794 0 6.77-3.215 6.77-7.632zm4.895-11.953V37.54c0 9.361-5.52 13.201-12.047 13.201-6.145 0-9.842-4.128-11.234-7.489l4.849-2.016c.864 2.065 2.975 4.513 6.385 4.513 4.175 0 6.767-2.593 6.767-7.44v-1.825h-.19c-1.25 1.536-3.65 2.88-6.674 2.88-6.337 0-12.145-5.52-12.145-12.625 0-7.153 5.808-12.72 12.145-12.72 3.025 0 5.425 1.343 6.674 2.831h.19v-2.064h5.28zm4.451 23.81h5.5v-37h-5.5zm13.926-12.289l11.33-4.705c-.625-1.584-2.497-2.688-4.705-2.688-2.832 0-6.769 2.497-6.625 7.393m13.298 4.561l4.32 2.88c-1.392 2.064-4.753 5.616-10.56 5.616-7.202 0-12.579-5.568-12.579-12.673 0-7.537 5.425-12.673 11.954-12.673 6.577 0 9.793 5.232 10.848 8.064l.576 1.441-16.945 7.01c1.296 2.543 3.313 3.838 6.145 3.838 2.832 0 4.8-1.392 6.241-3.503M38.087 17.836a21.92 21.92 0 0 1 .268 3.43c0 4.032-1.104 9.025-4.657 12.577-3.456 3.6-7.872 5.52-13.729 5.52C9.12 39.364 0 30.532 0 19.683 0 8.832 9.12 0 19.97 0c6 0 10.272 2.352 13.49 5.425l-3.794 3.792c-2.304-2.16-5.424-3.84-9.697-3.84-7.92 0-14.113 6.384-14.113 14.305 0 7.92 6.193 14.305 14.113 14.305 5.136 0 8.065-2.064 9.937-3.936 1.536-1.537 2.574-3.815 2.96-6.84H19.968v-5.375h18.118z",
            "fill-rule": "evenodd"
        }, []), "\n"])
    }
      , N = n(104)
      , W = n.n(N)
      , G = n(86)
      , V = n.n(G)
      , z = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "resetScroll",
            value: function(e) {
                _.T && (e.preventDefault(),
                window.scrollTo(0, 0),
                document.getElementById("home-link").focus())
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return Object(i.h)("footer", {
                    class: Object(_.U)(V.a.footerWrapper)
                }, Object(i.h)("div", {
                    class: "max-width ".concat(V.a.footer)
                }, Object(i.h)("div", {
                    class: "".concat(V.a.footerLogo)
                }, Object(i.h)(U, {
                    href: W.a.google.link.href,
                    external: W.a.google.link.external,
                    gaLabel: W.a.google.link.label,
                    ariaLabel: W.a.google.link.label,
                    gaCategory: "Footer",
                    focusType: D.Default
                }, Object(i.h)(F, null))), Object(i.h)("div", {
                    class: "".concat(V.a.footerRow)
                }, Object(i.h)("div", {
                    class: "".concat(V.a.footerLinks)
                }, W.a.footer_links.map((function(e) {
                    return Object(i.h)("div", {
                        class: "".concat(V.a.footerLink)
                    }, Object(i.h)(U, {
                        href: e.href,
                        external: e.external,
                        gaCategory: "Footer",
                        gaLabel: e.label,
                        focusType: D.Default
                    }, e.label))
                }
                )))), Object(i.h)(x, {
                    classNames: V.a.footerFab,
                    icon: "keyboard_arrow_up",
                    elevation: o.Raised,
                    ariaLabel: "Back to top",
                    gaCategory: "Footer",
                    onClick: function(t) {
                        return e.resetScroll(t)
                    },
                    href: "#"
                })))
            }
        }]),
        t
    }(i.Component)
      , q = n(163)
      , Z = n.n(q)
      , K = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Y = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.visible
                  , n = e.onClick
                  , o = e.classNames;
                return t && Object(i.h)("div", {
                    "data-g-on": "click",
                    "data-g-event-category": this.props.gaCategory || this.props.location.pathname,
                    "data-g-event-label": "Close modal",
                    "data-g-event-action": "click",
                    "aria-label": "Close modal",
                    role: "button",
                    tabIndex: 0,
                    class: Object(_.U)(Z.a.darkUnderlay, Z.a.darkUnderlayVisible, o),
                    onClick: n
                })
            }
        }]),
        t
    }(i.Component);
    Y.defaultProps = {
        visible: !1
    },
    Y = K([S.h], Y);
    var J, X, Q = n(207), $ = n.n(Q), ee = n(17), te = n.n(ee), ne = n(64), oe = n.n(ne), ae = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Fill = "Fill",
        e.Hairline = "Hairline",
        e.Protected = "Protected",
        e.Text = "Text",
        e.Svg = "Svg"
    }(J || (J = {})),
    function(e) {
        e.DefaultBlue = "DefaultBlue",
        e.White = "White"
    }(X || (X = {}));
    var re = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "onClickHandler",
            value: function(e) {
                this.props.stopPropagation && e.stopPropagation(),
                this.props.disabled ? e.preventDefault() : this.props.onClick && this.props.onClick()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.ariaLabel
                  , n = e.ariaHidden
                  , o = e.classNames
                  , a = e.disabled
                  , r = e.textColor
                  , s = e.href
                  , l = e.icon
                  , c = e.iconSvg
                  , u = e.styleOverrides
                  , d = e.toggled
                  , h = e.leftAlign
                  , p = void 0 !== h && h
                  , f = e.type
                  , g = oe.a["button".concat(f)]
                  , b = oe.a["buttonText".concat(r)]
                  , v = [oe.a.button, g, b];
                o && (v = [].concat(te()(v), [o])),
                l && (v = [].concat(te()(v), [oe.a.buttonWithIcon])),
                c && (v = [].concat(te()(v), [oe.a.buttonWithSvg])),
                p && (v = [].concat(te()(v), [oe.a.buttonLeftAlign])),
                d && (v = [].concat(te()(v), [oe.a.toggled, "toggled"])),
                a && (v = [].concat(te()(v), [oe.a.disabled]));
                var m = Object(i.h)("span", null, l && Object(i.h)(C, {
                    classNames: oe.a.buttonIcon
                }, l), c && c, this.props.children)
                  , y = void 0 === d ? void 0 : d.toString();
                return s ? Object(i.h)(U, {
                    ariaHidden: n,
                    tabIndex: n && -1,
                    ariaLabel: t,
                    ariaPressed: y,
                    href: s,
                    classNames: _.U.apply(void 0, te()(v)),
                    onClick: this.onClickHandler.bind(this),
                    gaOn: this.props.gaOn,
                    gaCategory: this.props.gaCategory || this.props.location && this.props.location.pathname,
                    gaLabel: this.props.gaLabel || t,
                    gaEventAction: this.props.gaEventAction,
                    external: this.props.external,
                    styleOverrides: u
                }, m) : Object(i.h)("button", {
                    "aria-hidden": n,
                    tabIndex: n && -1,
                    "aria-label": t,
                    "aria-pressed": y,
                    class: _.U.apply(void 0, te()(v)),
                    disabled: a,
                    onClick: this.onClickHandler.bind(this),
                    "data-g-on": this.props.gaOn,
                    "data-g-event-category": this.props.gaCategory || this.props.location && this.props.location.pathname,
                    "data-g-event-label": this.props.gaLabel || t,
                    "data-g-event-action": this.props.gaEventAction,
                    style: u
                }, m)
            }
        }]),
        t
    }(i.Component);
    re.defaultProps = {
        disabled: !1,
        textColor: X.DefaultBlue,
        type: J.Fill,
        gaOn: "click",
        gaEventAction: "click"
    },
    re = ae([S.h], re);
    var ie, se = n(208), le = n.n(se), ce = function(e) {
        var t = e.color
          , n = e.colorGoogle
          , o = e.classnames
          , a = Object(_.K)()
          , r = n || (t || _.d.GRAY_LOGO);
        return Object(i.h)("svg", {
            className: Object(_.U)(le.a.logo, o),
            width: "190",
            height: "44",
            viewBox: "0 0 190 44",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M6.10352e-05 20.0242C6.10352e-05 11.7865 6.9095 5.07811 15.1621 5.07811C18.9918 5.01523 22.685 6.49931 25.4069 9.19558L22.5126 12.077C20.5415 10.1753 17.9005 9.12752 15.1621 9.16138C9.15184 9.16138 4.45366 14.0019 4.45366 20.0242C4.45366 26.0465 9.14355 30.8843 15.1621 30.8843C19.0609 30.8843 21.2808 29.318 22.7033 27.8943C23.8703 26.7267 24.6327 25.0471 24.926 22.7692H15.1621V18.6749H28.896C29.0514 19.5198 29.1246 20.3779 29.1146 21.2374C29.1146 24.2982 28.2783 28.0881 25.5806 30.7872C22.951 33.5094 19.5987 34.953 15.1621 34.953C6.9095 34.953 6.10352e-05 28.2619 6.10352e-05 20.0242Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M40.2047 15.7219C34.8861 15.7219 30.552 19.7678 30.552 25.3431C30.552 30.9184 34.8861 34.953 40.2047 34.953C45.5233 34.953 49.8577 30.8701 49.8577 25.3317C49.8577 19.7934 45.5233 15.7219 40.2047 15.7219ZM40.2047 31.1744C37.2904 31.1744 34.7779 28.7687 34.7779 25.3431C34.7779 21.918 37.2904 19.5115 40.2047 19.5115C43.1189 19.5115 45.6314 21.8806 45.6314 25.3431C45.6314 28.8053 43.1189 31.1772 40.2047 31.1772V31.1744Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M61.2634 15.7219C55.9448 15.7219 51.6104 19.7678 51.6104 25.3431C51.6104 30.9184 55.9448 34.953 61.2634 34.953C66.5821 34.953 70.9161 30.8701 70.9161 25.3317C70.9161 19.7934 66.5821 15.7219 61.2634 15.7219ZM61.2634 31.1744C58.3492 31.1744 55.8367 28.7687 55.8367 25.3431C55.8367 21.918 58.3492 19.5115 61.2634 19.5115C64.1777 19.5115 66.6902 21.8806 66.6902 25.3431C66.6902 28.8053 64.1777 31.1772 61.2634 31.1772V31.1744Z",
            fill: r
        }), Object(i.h)("mask", {
            id: "".concat(a),
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "190",
            height: "44"
        }, Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M0 43.6091H189.919V0H0V43.6091Z",
            fill: "white"
        })), Object(i.h)("g", {
            mask: "url(#".concat(a, ")")
        }, Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M94.032 34.3834H98.258V6.10039H94.032V34.3834Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M94.032 34.3834H98.258V6.10039H94.032V34.3834Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M109.844 31.1773C107.695 31.1773 106.164 30.192 105.182 28.262L118.042 22.9399L117.609 21.8552C116.807 19.7051 114.368 15.733 109.376 15.733C104.385 15.733 100.307 19.6339 100.307 25.3546C100.307 30.7475 104.388 34.9759 109.852 34.9759C113.071 34.9925 116.083 33.3871 117.866 30.7047L114.587 28.518C113.486 30.1126 111.992 31.1773 109.844 31.1773ZM109.516 19.4405C111.192 19.4405 112.612 20.2775 113.085 21.4821L104.488 25.0527C104.377 21.3339 107.365 19.4405 109.513 19.4405H109.516Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M87.1114 16.3055V17.8687H86.9663C86.0184 16.7297 84.1972 15.7189 81.9037 15.7189C77.0943 15.7189 72.6863 19.9473 72.6863 25.3775C72.6863 30.8074 77.0943 34.9528 81.9037 34.9528C84.1972 34.9528 86.0184 33.9334 86.9663 32.7661H87.1114V34.15C87.1114 37.8318 85.1451 39.7992 81.989 39.7992C79.4023 39.7992 77.8 37.94 77.1513 36.3823L73.4718 37.9144C74.8889 41.3783 78.2681 43.6324 82.0087 43.6089C86.9632 43.6089 91.1526 40.6936 91.1526 33.5862V16.3055H87.1114ZM82.2737 31.1773C79.3598 31.1773 76.9178 28.7346 76.9178 25.3827C76.9178 22.0314 79.3598 19.5145 82.2737 19.5145C85.1879 19.5145 87.3957 21.9917 87.3957 25.3827C87.3957 28.774 85.1451 31.1773 82.2678 31.1773H82.2737Z",
            fill: r
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M131.332 34.4653H145.858V5.41362H131.332V34.4653Z",
            fill: t || _.d.BLUE
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M174.909 4.92946C166.619 4.92946 159.899 11.6496 159.899 19.9391C159.899 28.229 166.619 34.9491 174.909 34.9491C183.199 34.9491 189.919 28.229 189.919 19.9391C189.919 11.6496 183.199 4.92946 174.909 4.92946Z",
            fill: t || _.d.BLUE
        }), Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M150.628 40.7653L148.572 40.3186L157.337 -7.62939e-05L159.393 0.446251L150.628 40.7653Z",
            fill: t || _.d.BLUE
        })))
    }, ue = function(e) {
        var t = e.color
          , n = e.classnames;
        return Object(i.h)("svg", {
            class: Object(_.U)(n),
            width: "150",
            height: "105",
            viewBox: "0 0 150 105",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, Object(i.h)("path", {
            d: "M37.1906 13.856H0V88.2348H37.1906V13.856Z",
            fill: t || _.d.BLUE
        }), Object(i.h)("path", {
            d: "M111.571 12.6184C90.3449 12.6184 73.1426 29.8202 73.1426 51.046C73.1426 72.2718 90.3449 89.4736 111.571 89.4736C132.798 89.4736 150 72.2718 150 51.046C149.991 29.8202 132.789 12.6184 111.571 12.6184Z",
            fill: t || _.d.BLUE
        }), Object(i.h)("path", {
            d: "M66.5529 3.28033e-05L44.1367 103.225L49.4001 104.368L71.8163 1.14295L66.5529 3.28033e-05Z",
            fill: t || _.d.BLUE
        }))
    }, de = n(209), he = n.n(de), pe = n(38), fe = n.n(pe), ge = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e[e.Compact = 0] = "Compact",
        e[e.Default = 1] = "Default"
    }(ie || (ie = {}));
    var be = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).closeCompactNavTimeout = function() {
                e.props.UIStore.Header.closeCompactNav(),
                document.body.focus()
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidUpdate",
            value: function() {
                var e = this.props.UIStore.Header.compactNavOpened
                  , t = this.props.UIStore.Screen.isLessThanDesktop;
                e && this.el.focus(),
                e && !t && this.closeCompactNavTimeout()
            }
        }, {
            key: "isNavSelected",
            value: function(e, t) {
                if (e && t)
                    return Object(_.W)(e) === Object(_.W)(t) || $()(e.split("/"), t.split("/")).filter((function(e) {
                        return e.length && "io" !== e
                    }
                    )).length > 0
            }
        }, {
            key: "renderNavItems",
            value: function(e, t, n) {
                var o = this
                  , a = n && null !== n && this.props.layout !== ie.Compact;
                return t.map((function(t) {
                    var r = e && o.isNavSelected(e, t.route);
                    return Object(i.h)("li", {
                        onClick: function() {
                            return o.closeCompactNavTimeout()
                        },
                        class: Object(_.U)(fe.a.navListItem),
                        selected: r
                    }, Object(i.h)(U, {
                        focusType: o.props.layout !== ie.Compact && D.Nav,
                        isRouterLink: !0,
                        ariaLabel: t.label,
                        ariaCurrent: r,
                        onClick: function() {
                            return o.closeCompactNavTimeout()
                        },
                        gaCategory: "Nav",
                        gaLabel: t.label,
                        href: t.route,
                        classNames: fe.a.innerSpan,
                        styleOverrides: a && {
                            color: n.TEXT
                        }
                    }, t.label))
                }
                ))
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                Object(_.P)(e, _.e.Space) ? (e.preventDefault(),
                this.props.UIStore.Header.compactNavOpened && this.el.focus()) : Object(_.P)(e, _.e.Escape) && this.closeCompactNavTimeout()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.layout
                  , a = t.UIStore
                  , r = t.selectedRoute
                  , s = t.visible
                  , l = a.Theme.headerTheme
                  , c = !a.Header.compactNavOpened && a.Screen.isLessThanDesktop;
                return Object(i.h)("div", {
                    class: Object(_.U)(fe.a.navContent, n, o === ie.Compact && fe.a.navContentCompact, o === ie.Compact && s && fe.a.navContentOpened, o === ie.Default && fe.a.navContentDefault, l && fe.a["navContent".concat(l.ID)]),
                    style: l && o !== ie.Compact && {
                        backgroundColor: l.BACKGROUND
                    },
                    "aria-hidden": c,
                    onKeyDown: function(t) {
                        return e.onKeyDown(t)
                    },
                    ref: function(t) {
                        return e.el = t
                    },
                    tabIndex: 0
                }, s && Object(i.h)("nav", {
                    class: "".concat(fe.a.navContentLeft)
                }, Object(i.h)(re, {
                    gaLabel: "Skip to content",
                    gaCategory: "Accessibility Button",
                    classNames: fe.a.skipToContent,
                    onClick: function() {
                        return a.Header.compactNavOpened && e.closeCompactNavTimeout()
                    },
                    href: "#app-wrapper",
                    type: J.Fill
                }, "Skip To Page Content"), Object(i.h)("div", {
                    class: fe.a.navLogo,
                    ref: function(t) {
                        return e.logoEl = t
                    }
                }, Object(i.h)(U, {
                    focusType: o !== ie.Compact && D.Nav,
                    isRouterLink: !0,
                    href: _.c,
                    gaCategory: "Nav",
                    gaLabel: "Home",
                    ariaLabel: "Home",
                    ariaHidden: c,
                    onClick: function() {
                        return e.closeCompactNavTimeout()
                    },
                    classNames: fe.a.innerSpan
                }, o !== ie.Compact && l ? Object(i.h)(ce, {
                    color: l.NAV_LOGO
                }) : Object(i.h)(ce, null))), Object(i.h)("ul", {
                    class: fe.a.navList
                }, this.renderNavItems(r, he.a.navItems, a.Theme.headerTheme), l && o !== ie.Compact && Object(i.h)("style", null, ".".concat(fe.a.navContent, " a:focus [class*='innerSpan'], .").concat(fe.a.navContent, " a:active [class*='innerSpan'] { background-color: ").concat(l.TERTIARY, "; }")))))
            }
        }]),
        t
    }(i.Component);
    be.defaultProps = {
        layout: ie.Default
    },
    be = ge([Object(w.b)("UIStore"), w.c], be);
    var ve = n(65)
      , me = n.n(ve)
      , ye = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Oe = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).setTheme = function() {
                var t = e.props
                  , n = t.location
                  , o = t.UIStore
                  , a = Object(_.W)(n.pathname);
                a in _.q ? o.Theme.setHeaderTheme(_.q[a]) : o.Theme.resetAllThemes()
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                _.T && (this.onBodyScrollHandler = this.onBodyScroll.bind(this),
                window.addEventListener(_.u.SCROLL, this.onBodyScrollHandler, !1)),
                this.setTheme()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props.location;
                e.location.pathname !== t.pathname && this.setTheme()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && window.removeEventListener(_.u.SCROLL, this.onBodyScrollHandler, !1)
            }
        }, {
            key: "onBodyScroll",
            value: function(e) {
                var t = this.props
                  , n = t.UIStore
                  , o = t.location
                  , a = Object(_.W)(o.pathname);
                if (!n.Header.compactNavOpened && null !== this.el) {
                    var r = window.scrollY > this.el.offsetHeight && window.scrollY > this.lastRecordedScrollY
                      , i = n.Popup.visible
                      , s = window.scrollY > this.el.offsetHeight;
                    n.Header.setNavHidden(r && !i),
                    n.Header.setNavScrolled(s),
                    this.lastRecordedScrollY = window.scrollY,
                    window.scrollY > n.Header.currentHeroHeight ? n.Theme.setHeaderTheme(null) : _.q[a] ? n.Theme.setHeaderTheme(_.q[a]) : null !== n.Theme.homeHeroTheme && n.Theme.setHeaderTheme(n.Theme.homeHeroTheme)
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.UIStore
                  , o = t.location
                  , a = t.selectedRoute
                  , r = n.Theme.headerTheme;
                return Object(i.h)("div", {
                    class: Object(_.U)(me.a.header, n.Header.navScrolled && !n.Header.hasStickyElement && me.a.headerShadow, n.Header.navHidden && !n.Header.compactNavOpened && me.a.headerHidden, n.Popup.visible && me.a.headerPopupVisible),
                    ref: function(t) {
                        return e.el = t
                    },
                    role: n.Screen.isLessThanDesktop && "dialog"
                }, Object(i.h)("div", {
                    class: me.a.headerContent,
                    style: r && {
                        backgroundColor: r.BACKGROUND
                    }
                }, n.Screen.isLessThanDesktop && Object(i.h)("div", {
                    class: Object(_.U)(me.a.hamburgerButtonWrapper)
                }, Object(i.h)("button", {
                    "aria-label": "Open navigation",
                    class: Object(_.U)(me.a.hamburgerButton),
                    "data-g-on": "click",
                    "data-g-event-category": "Nav",
                    "data-g-event-label": "Mobile menu button",
                    "data-g-event-action": "click",
                    onClick: n.Header.openCompactNav,
                    ref: function(t) {
                        return e.mobileButton = t
                    },
                    style: r && {
                        color: r.TEXT
                    }
                }, Object(i.h)(C, null, "menu")), Object(i.h)(U, {
                    isRouterLink: !0,
                    href: _.c,
                    gaCategory: "Nav",
                    gaLabel: "Home",
                    ariaLabel: "Home",
                    classNames: Object(_.U)(me.a.hamburgerLogo),
                    id: "home-link"
                }, Object(i.h)(ce, {
                    color: r && r.NAV_LOGO,
                    colorGoogle: r && r.NAV_LOGO
                }))), Object(i.h)(be, {
                    selectedRoute: o.pathname || a,
                    visible: n.Screen.isLessThanDesktop && n.Header.compactNavOpened || !n.Screen.isLessThanDesktop,
                    layout: n.Screen.isLessThanDesktop ? ie.Compact : ie.Default
                }), Object(i.h)(Y, {
                    classNames: me.a.darkUnderlay,
                    onClick: n.Header.closeCompactNav,
                    visible: n.Header.compactNavOpened && n.Screen.isLessThanDesktop
                })))
            }
        }]),
        t
    }(i.Component);
    Oe = ye([S.h, Object(w.b)("UIStore"), w.c], Oe);
    var je = n(116)
      , ke = n.n(je)
      , Se = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , we = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).bodyScrollPosition = 0,
            e.updateCurrentHeroHeight = function() {
                var t = document.getElementById("hero");
                if (t && null !== t) {
                    var n = t.getBoundingClientRect().height;
                    e.props.UIStore.Header.setCurrentHeroHeight(n)
                }
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "updateFixedBody",
            value: function() {
                if (_.T) {
                    var e = this.props.UIStore
                      , t = e.isBodyFixed;
                    e.Screen.setWindowDimensions(window.innerWidth, window.innerHeight);
                    var n = document.body.scrollTop || document.documentElement.scrollTop;
                    n > 0 && (this.bodyScrollPosition = n),
                    t ? this.fixAndInterceptScroll() : this.releaseInterceptScroll()
                }
            }
        }, {
            key: "fixAndInterceptScroll",
            value: function() {
                document.body.classList.add(ke.a.bodyScrollFixed),
                Object(_.O)() && (document.body.classList.add(ke.a.bodyScrollFixedIOS),
                document.body.style.top = -this.bodyScrollPosition + "px")
            }
        }, {
            key: "releaseInterceptScroll",
            value: function() {
                document.body.classList.remove(ke.a.bodyScrollFixed),
                Object(_.O)() && (document.body.classList.remove(ke.a.bodyScrollFixedIOS),
                document.body.style.top = "0",
                window.scrollTo(0, this.bodyScrollPosition))
            }
        }, {
            key: "onResize",
            value: function() {
                var e = this.props.UIStore;
                e.Screen.setWindowDimensions(window.innerWidth, window.innerHeight),
                this.updateCurrentHeroHeight(),
                !e.Screen.isLessThanLaptop && e.isBodyFixed && this.releaseInterceptScroll()
            }
        }, {
            key: "componentWillMount",
            value: function() {
                this.updateFixedBody(),
                _.T && (this.resizeHandler = this.onResize.bind(this),
                window.addEventListener("optimizedResize", this.resizeHandler, !1))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                _.T && (this.props.UIStore.Screen.setWindowDimensions(window.innerWidth, window.innerHeight),
                this.updateCurrentHeroHeight())
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                this.updateFixedBody()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && window.removeEventListener("optimizedResize", this.resizeHandler, !1)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.UIStore;
                return _.T && (window.isBodyFixed = e.isBodyFixed,
                window.isMobile = e.Screen.isMobile),
                Object(i.h)("div", {
                    style: {
                        display: "none"
                    }
                })
            }
        }]),
        t
    }(i.Component);
    we = Se([Object(w.b)("UIStore"), w.c], we);
    var _e, Ce, Me, He = n(117), Le = n.n(He), Te = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                _.T && setTimeout((function() {
                    window.scrollTo(0, 0)
                }
                ), 0)
            }
        }, {
            key: "render",
            value: function() {
                return null
            }
        }]),
        t
    }(i.Component), Ae = n(27), Ie = n.n(Ae), xe = n(164), De = n.n(xe);
    !function(e) {
        e.DoubleSemiCircle = "DoubleSemiCircle",
        e.DoubleSemiCircleOutline = "DoubleSemiCircleOutline",
        e.HourGlass = "HourGlass",
        e.BullsEye = "BullsEye",
        e.SunRays = "SunRays",
        e.QuadCircles = "QuadCircles",
        e.DoubleNoodle = "DoubleNoodle",
        e.TriRect = "TriRect",
        e.FruitPlatter = "FruitPlatter",
        e.Sprinkler = "Sprinkler",
        e.Noodle = "Noodle",
        e.QuadRect = "QuadRect",
        e.XMarksTheSpot = "XMarksTheSpot",
        e.Lattice = "Lattice",
        e.Radial = "Radial",
        e.PickUpSticks = "PickUpSticks",
        e.RingPop = "RingPop",
        e.TwoBirds = "TwoBirds"
    }(Ce || (Ce = {})),
    function(e) {
        e.None = "None",
        e.Green = "Green",
        e.DarkGreen = "DarkGreen",
        e.Red = "Red",
        e.Yellow = "Yellow",
        e.Blue = "Blue",
        e.White = "White"
    }(Me || (Me = {}));
    var Re = (_e = {},
    Ie()(_e, Ce.BullsEye, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "125",
            height: "125",
            viewBox: "0 0 125 125",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n  ", Object(i.h)("path", {
            d: "M62.4948 101.211C83.8769 101.211 101.21 83.877 101.21 62.495C101.21 41.1129 83.8769 23.7794 62.4948 23.7794C41.1128 23.7794 23.7793 41.1129 23.7793 62.495C23.7793 83.877 41.1128 101.211 62.4948 101.211Z",
            "stroke-miterlimit": "10"
        }, []), "\n  ", Object(i.h)("path", {
            d: "M62.4949 121.99C95.3531 121.99 121.99 95.3531 121.99 62.4949C121.99 29.6368 95.3531 3 62.4949 3C29.6368 3 3 29.6368 3 62.4949C3 95.3531 29.6368 121.99 62.4949 121.99Z",
            "stroke-miterlimit": "10"
        }, []), "\n  ", Object(i.h)("path", {
            d: "M62.4942 81.6962C73.0987 81.6962 81.6954 73.0995 81.6954 62.4949C81.6954 51.8904 73.0987 43.2937 62.4942 43.2937C51.8896 43.2937 43.293 51.8904 43.293 62.4949C43.293 73.0995 51.8896 81.6962 62.4942 81.6962Z",
            "stroke-miterlimit": "10"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.DoubleSemiCircle, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "126",
            height: "120",
            viewBox: "0 0 126 120",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n  ", Object(i.h)("path", {
            d: "M60.7096 0.860511C28.0372 0.550002 1.30888 26.8353 0.998873 59.5467C0.688863 92.2582 26.9319 119.043 59.5909 119.353L60.7096 0.860511Z"
        }, []), "\n  ", Object(i.h)("path", {
            d: "M125.004 0.861671C92.3318 0.551162 65.6035 26.8364 65.2935 59.5479C64.9835 92.2594 91.2266 119.044 123.886 119.355L125.004 0.861671Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.DoubleSemiCircleOutline, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "84",
            height: "85",
            viewBox: "0 0 84 85",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M5.25579 47.9959L78.1364 48.6494C77.1726 56.4706 73.4883 63.7098 67.5309 69.3379L67.5307 69.3381C60.6284 75.8663 51.4686 79.4606 41.7442 79.4606H41.3902C22.5141 79.2894 7.08289 65.4775 5.25579 47.9959ZM1.10199 43.6403L0.602387 43.6358L0.59752 44.1354C0.385993 65.8477 18.6502 83.5767 41.3486 83.778H41.3531H41.3538H41.3546H41.3554H41.3561H41.3569H41.3577H41.3584H41.3592H41.3599H41.3607H41.3615H41.3622H41.363H41.3638H41.3645H41.3653H41.3661H41.3668H41.3676H41.3684H41.3691H41.3699H41.3706H41.3714H41.3722H41.3729H41.3737H41.3745H41.3752H41.376H41.3768H41.3775H41.3783H41.379H41.3798H41.3806H41.3813H41.3821H41.3829H41.3836H41.3844H41.3852H41.3859H41.3867H41.3875H41.3882H41.389H41.3897H41.3905H41.3913H41.392H41.3928H41.3936H41.3943H41.3951H41.3959H41.3966H41.3974H41.3981H41.3989H41.3997H41.4004H41.4012H41.402H41.4027H41.4035H41.4043H41.405H41.4058H41.4065H41.4073H41.4081H41.4088H41.4096H41.4104H41.4111H41.4119H41.4127H41.4134H41.4142H41.415H41.4157H41.4165H41.4172H41.418H41.4188H41.4195H41.4203H41.4211H41.4218H41.4226H41.4234H41.4241H41.4249H41.4256H41.4264H41.4272H41.4279H41.4287H41.4295H41.4302H41.431H41.4318H41.4325H41.4333H41.4341H41.4348H41.4356H41.4363H41.4371H41.4379H41.4386H41.4394H41.4402H41.4409H41.4417H41.4425H41.4432H41.444H41.4447H41.4455H41.4463H41.447H41.4478H41.4486H41.4493H41.4501H41.4509H41.4516H41.4524H41.4532H41.4539H41.4547H41.4554H41.4562H41.457H41.4577H41.4585H41.4593H41.46H41.4608H41.4616H41.4623H41.4631H41.4638H41.4646H41.4654H41.4661H41.4669H41.4677H41.4684H41.4692H41.47H41.4707H41.4715H41.4723H41.473H41.4738H41.4745H41.4753H41.4761H41.4768H41.4776H41.4784H41.4791H41.4799H41.4807H41.4814H41.4822H41.4829H41.4837H41.4845H41.4852H41.486H41.4868H41.4875H41.4883H41.4891H41.4898H41.4906H41.4914H41.4921H41.4929H41.4936H41.4944H41.4952H41.4959H41.4967H41.4975H41.4982H41.499H41.4998H41.5005H41.5013H41.502H41.5028H41.5036H41.5043H41.5051H41.5059H41.5066H41.5074H41.5082H41.5089H41.5097H41.5105H41.5112H41.512H41.5127H41.5135H41.5143H41.515H41.5158H41.5166H41.5173H41.5181H41.5189H41.5196H41.5204H41.5211H41.5219H41.5227H41.5234H41.5242H41.525H41.5257H41.5265H41.5273H41.528H41.5288H41.5296H41.5303H41.5311H41.5318H41.5326H41.5334H41.5341H41.5349H41.5357H41.5364H41.5372H41.538H41.5387H41.5395H41.5402H41.541H41.5418H41.5425H41.5433H41.5441H41.5448H41.5456H41.5464H41.5471H41.5479H41.5487H41.5494H41.5502H41.5509H41.5517H41.5525H41.5532H41.554H41.5548H41.5555H41.5563H41.5571H41.5578H41.5586H41.5593H41.5601H41.5609H41.5616H41.5624H41.5632H41.5639H41.5647H41.5655H41.5662H41.567H41.5678H41.5685H41.5693H41.57H41.5708H41.5716H41.5723H41.5731H41.5739H41.5746H41.5754H41.5762H41.5769H41.5777H41.5784H41.5792H41.58H41.5807H41.5815H41.5823H41.583H41.5838H41.5846H41.5853H41.5861H41.5869H41.5876H41.5884H41.5891H41.5899H41.5907H41.5914H41.5922H41.593H41.5937H41.5945H41.5953H41.596H41.5968H41.5975H41.5983H41.5991H41.5998H41.6006H41.6014H41.6021H41.6029H41.6037H41.6044H41.6052H41.606H41.6067H41.6075H41.6082H41.609H41.6098H41.6105H41.6113H41.6121H41.6128H41.6136H41.6144H41.6151H41.6159H41.6166H41.6174H41.6182H41.6189H41.6197H41.6205H41.6212H41.622H41.6228H41.6235H41.6243H41.6251H41.6258H41.6266H41.6273H41.6281H41.6289H41.6296H41.6304H41.6312H41.6319H41.6327H41.6335H41.6342H41.635H41.6357H41.6365H41.6373H41.638H41.6388H41.6396H41.6403H41.6411H41.6419H41.6426H41.6434H41.6442H41.6449H41.6457H41.6464H41.6472H41.648H41.6487H41.6495H41.6503H41.651H41.6518H41.6526H41.6533H41.6541H41.6548H41.6556H41.6564H41.6571H41.6579H41.6587H41.6594H41.6602H41.661H41.6617H41.6625H41.6633H41.664H41.6648H41.6655H41.6663H41.6671H41.6678H41.6686H41.6694H41.6701H41.6709H41.6717H41.6724H41.6732H41.6739H41.6747H41.6755H41.6762H41.677H41.6778H41.6785H41.6793H41.6801H41.6808H41.6816H41.6824H41.6831H41.6839H41.6846H41.6854H41.6862H41.6869H41.6877H41.6885H41.6892H41.69H41.6908H41.6915H41.6923H41.693H41.6938H41.6946H41.6953H41.6961H41.6969H41.6976H41.6984H41.6992H41.6999H41.7007H41.7015H41.7022H41.703H41.7037H41.7045H41.7053H41.706H41.7068H41.7076H41.7083H41.7091H41.7099H41.7106H41.7114H41.7121H41.7129H41.7137H41.7144H41.7152H41.716H41.7167H41.7175H41.7183H41.719H41.7198H41.7206H41.7213H41.7221H41.7228H41.7236H41.7244H41.7251H41.7259H41.7267H41.7274H41.7282H41.729H41.7297H41.7305H41.7312H41.732H41.7328H41.7335H41.7343H41.7351H41.7358H41.7366H41.7374H41.7381H41.7389H41.7397H41.7404H41.7412H41.7419H41.7427H41.7435H41.7442C64.2579 83.778 82.662 66.4609 82.8736 44.875L82.8785 44.3746L82.3781 44.3701L1.10199 43.6403Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M1.10291 1.50014L0.603363 1.49571L0.598497 1.99525C0.386969 23.7077 18.6513 41.4283 41.3496 41.6296H41.354H41.3548H41.3556H41.3563H41.3571H41.3579H41.3586H41.3594H41.3602H41.3609H41.3617H41.3624H41.3632H41.364H41.3647H41.3655H41.3663H41.367H41.3678H41.3686H41.3693H41.3701H41.3709H41.3716H41.3724H41.3731H41.3739H41.3747H41.3754H41.3762H41.377H41.3777H41.3785H41.3793H41.38H41.3808H41.3815H41.3823H41.3831H41.3838H41.3846H41.3854H41.3861H41.3869H41.3877H41.3884H41.3892H41.39H41.3907H41.3915H41.3922H41.393H41.3938H41.3945H41.3953H41.3961H41.3968H41.3976H41.3984H41.3991H41.3999H41.4007H41.4014H41.4022H41.4029H41.4037H41.4045H41.4052H41.406H41.4068H41.4075H41.4083H41.4091H41.4098H41.4106H41.4113H41.4121H41.4129H41.4136H41.4144H41.4152H41.4159H41.4167H41.4175H41.4182H41.419H41.4198H41.4205H41.4213H41.422H41.4228H41.4236H41.4243H41.4251H41.4259H41.4266H41.4274H41.4282H41.4289H41.4297H41.4304H41.4312H41.432H41.4327H41.4335H41.4343H41.435H41.4358H41.4366H41.4373H41.4381H41.4389H41.4396H41.4404H41.4411H41.4419H41.4427H41.4434H41.4442H41.445H41.4457H41.4465H41.4473H41.448H41.4488H41.4495H41.4503H41.4511H41.4518H41.4526H41.4534H41.4541H41.4549H41.4557H41.4564H41.4572H41.458H41.4587H41.4595H41.4602H41.461H41.4618H41.4625H41.4633H41.4641H41.4648H41.4656H41.4664H41.4671H41.4679H41.4686H41.4694H41.4702H41.4709H41.4717H41.4725H41.4732H41.474H41.4748H41.4755H41.4763H41.4771H41.4778H41.4786H41.4793H41.4801H41.4809H41.4816H41.4824H41.4832H41.4839H41.4847H41.4855H41.4862H41.487H41.4877H41.4885H41.4893H41.49H41.4908H41.4916H41.4923H41.4931H41.4939H41.4946H41.4954H41.4962H41.4969H41.4977H41.4984H41.4992H41.5H41.5007H41.5015H41.5023H41.503H41.5038H41.5046H41.5053H41.5061H41.5068H41.5076H41.5084H41.5091H41.5099H41.5107H41.5114H41.5122H41.513H41.5137H41.5145H41.5153H41.516H41.5168H41.5175H41.5183H41.5191H41.5198H41.5206H41.5214H41.5221H41.5229H41.5237H41.5244H41.5252H41.5259H41.5267H41.5275H41.5282H41.529H41.5298H41.5305H41.5313H41.5321H41.5328H41.5336H41.5343H41.5351H41.5359H41.5366H41.5374H41.5382H41.5389H41.5397H41.5405H41.5412H41.542H41.5428H41.5435H41.5443H41.545H41.5458H41.5466H41.5473H41.5481H41.5489H41.5496H41.5504H41.5512H41.5519H41.5527H41.5534H41.5542H41.555H41.5557H41.5565H41.5573H41.558H41.5588H41.5596H41.5603H41.5611H41.5619H41.5626H41.5634H41.5641H41.5649H41.5657H41.5664H41.5672H41.568H41.5687H41.5695H41.5703H41.571H41.5718H41.5725H41.5733H41.5741H41.5748H41.5756H41.5764H41.5771H41.5779H41.5787H41.5794H41.5802H41.581H41.5817H41.5825H41.5832H41.584H41.5848H41.5855H41.5863H41.5871H41.5878H41.5886H41.5894H41.5901H41.5909H41.5916H41.5924H41.5932H41.5939H41.5947H41.5955H41.5962H41.597H41.5978H41.5985H41.5993H41.6001H41.6008H41.6016H41.6023H41.6031H41.6039H41.6046H41.6054H41.6062H41.6069H41.6077H41.6085H41.6092H41.61H41.6107H41.6115H41.6123H41.613H41.6138H41.6146H41.6153H41.6161H41.6169H41.6176H41.6184H41.6192H41.6199H41.6207H41.6214H41.6222H41.623H41.6237H41.6245H41.6253H41.626H41.6268H41.6276H41.6283H41.6291H41.6298H41.6306H41.6314H41.6321H41.6329H41.6337H41.6344H41.6352H41.636H41.6367H41.6375H41.6383H41.639H41.6398H41.6405H41.6413H41.6421H41.6428H41.6436H41.6444H41.6451H41.6459H41.6467H41.6474H41.6482H41.6489H41.6497H41.6505H41.6512H41.652H41.6528H41.6535H41.6543H41.6551H41.6558H41.6566H41.6574H41.6581H41.6589H41.6596H41.6604H41.6612H41.6619H41.6627H41.6635H41.6642H41.665H41.6658H41.6665H41.6673H41.668H41.6688H41.6696H41.6703H41.6711H41.6719H41.6726H41.6734H41.6742H41.6749H41.6757H41.6765H41.6772H41.678H41.6787H41.6795H41.6803H41.681H41.6818H41.6826H41.6833H41.6841H41.6849H41.6856H41.6864H41.6871H41.6879H41.6887H41.6894H41.6902H41.691H41.6917H41.6925H41.6933H41.694H41.6948H41.6956H41.6963H41.6971H41.6978H41.6986H41.6994H41.7001H41.7009H41.7017H41.7024H41.7032H41.704H41.7047H41.7055H41.7062H41.707H41.7078H41.7085H41.7093H41.7101H41.7108H41.7116H41.7124H41.7131H41.7139H41.7147H41.7154H41.7162H41.7169H41.7177H41.7185H41.7192H41.72H41.7208H41.7215H41.7223H41.7231H41.7238H41.7246H41.7253H41.7261H41.7269H41.7276H41.7284H41.7292H41.7299H41.7307H41.7315H41.7322H41.733H41.7338H41.7345H41.7353H41.736H41.7368H41.7376H41.7383H41.7391H41.7399H41.7406H41.7414H41.7422H41.7429H41.7437H41.7444H41.7452C64.2588 41.6296 82.663 24.3125 82.8745 2.72657L82.8794 2.22613L82.379 2.22169L1.10291 1.50014ZM41.3825 37.3204C22.515 37.1492 7.08388 23.3374 5.25676 5.85572L78.1374 6.50925C77.1736 14.3305 73.4893 21.5697 67.5319 27.1977C60.6208 33.7262 51.4608 37.3204 41.7365 37.3204H41.3825Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.HourGlass, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "131",
            height: "125",
            viewBox: "0 0 131 125",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n    ", Object(i.h)("path", {
            d: "M0.917969 124.878C35.2905 124.977 63.2439 97.192 63.3429 62.835C63.4418 28.478 35.644 0.537346 1.27145 0.438416L0.917969 124.878Z"
        }, []), "\n    ", Object(i.h)("path", {
            d: "M130.999 0.000263364C96.6268 -0.0986667 68.6735 27.6866 68.5745 62.0436C68.4755 96.4006 96.2733 124.341 130.646 124.44L130.999 0.000263364Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.SunRays, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "290",
            height: "290",
            viewBox: "0 0 290 290",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M290 132.907H244.571V154.99H290V132.907Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M154.991 0H132.907V45.4285H154.991V0Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M81.1512 14.4312L62.0269 25.473L84.7411 64.814L103.865 53.7723L81.1512 14.4312Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M24.4216 63.8411L13.3799 82.9655L52.721 105.68L63.7627 86.5554L24.4216 63.8411Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M45.4285 135.01H0V157.093H45.4285V135.01Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M53.7722 186.127L14.4312 208.841L25.4729 227.966L64.814 205.252L53.7722 186.127Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M86.5477 226.237L63.8335 265.578L82.9578 276.62L105.672 237.279L86.5477 226.237Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M157.093 244.572H135.009V290H157.093V244.572Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M205.251 225.179L186.127 236.221L208.841 275.562L227.966 264.52L205.251 225.179Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M237.271 184.328L226.229 203.452L265.571 226.167L276.612 207.042L237.271 184.328Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M264.52 62.0268L225.179 84.7411L236.22 103.865L275.562 81.1511L264.52 62.0268Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M207.035 13.3875L184.32 52.7286L203.445 63.7703L226.159 24.4292L207.035 13.3875Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.QuadCircles, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M9.27222 4.79248C9.27222 2.22754 7.19656 0.148246 4.63611 0.148247C2.07566 0.148247 -3.14021e-07 2.22755 -2.02296e-07 4.79248C-9.05708e-08 7.35742 2.07566 9.43671 4.63611 9.43671C7.19656 9.43671 9.27222 7.35742 9.27222 4.79248Z",
            "stroke-width": "0"
        }, []), "\n", Object(i.h)("path", {
            d: "M9.27222 15.09C9.27222 12.5251 7.19656 10.4458 4.63611 10.4458C2.07566 10.4458 -3.14572e-07 12.5251 -2.02651e-07 15.09C-9.07301e-08 17.655 2.07566 19.7343 4.63611 19.7343C7.19656 19.7343 9.27222 17.655 9.27222 15.09Z",
            "stroke-width": "0"
        }, []), "\n", Object(i.h)("path", {
            d: "M19.8235 4.79248C19.8235 2.22754 17.7478 0.148246 15.1874 0.148247C12.6269 0.148247 10.5513 2.22755 10.5513 4.79248C10.5513 7.35742 12.6269 9.43671 15.1874 9.43671C17.7478 9.43671 19.8235 7.35742 19.8235 4.79248Z",
            "stroke-width": "0"
        }, []), "\n", Object(i.h)("path", {
            d: "M19.8235 15.0904C19.8235 12.5254 17.7478 10.4462 15.1874 10.4462C12.6269 10.4462 10.5513 12.5254 10.5513 15.0904C10.5513 17.6553 12.6269 19.7346 15.1874 19.7346C17.7478 19.7346 19.8235 17.6553 19.8235 15.0904Z",
            "stroke-width": "0"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.DoubleNoodle, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "269",
            height: "269",
            viewBox: "0 0 269 269",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M34.5215 0.655273C34.7831 129.364 139.381 233.891 267.787 233.891C267.957 233.891 268.114 233.891 268.271 233.891L268.336 268.48C268.153 268.48 267.957 268.48 267.774 268.48C120.361 268.48 0.300869 148.487 0 0.720795L34.5215 0.655273Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M114.736 0.48053C114.814 41.4394 130.826 79.921 159.788 108.822C188.671 137.644 227.012 153.516 267.773 153.516C267.878 153.516 267.996 153.516 268.1 153.516L268.166 188.105C268.035 188.105 267.904 188.105 267.76 188.105C217.803 188.105 170.828 168.667 135.417 133.331C99.9147 97.9036 80.3058 50.7583 80.2012 0.559158L114.736 0.48053Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.TriRect, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "21",
            height: "16",
            viewBox: "0 0 21 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M10.1525 0.55957H0.292969V5.36105H10.1525V0.55957Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M20.1164 5.2879H10.2568V10.0894H20.1164V5.2879Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M10.1525 10.219H0.292969V15.0205H10.1525V10.219Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.FruitPlatter, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "286",
            height: "284",
            viewBox: "0 0 286 284",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M96.5631 138.123C87.1125 112.304 58.5143 99.0288 32.6866 108.488C6.85899 117.947 -6.40753 146.537 3.05156 172.364L96.5631 138.123Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M107.05 168.098C83.2114 154.398 52.7775 162.608 39.069 186.455C25.3606 210.303 33.5788 240.728 57.4263 254.437L107.05 168.098Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M134.366 184.322C107.297 189.149 89.2629 215.011 94.0902 242.079C98.9174 269.148 124.779 287.182 151.848 282.355L134.366 184.322Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M165.709 179.189C148.074 200.291 150.878 231.685 171.981 249.32C193.083 266.955 224.477 264.151 242.112 243.048L165.709 179.189Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M186.421 155.112C186.472 182.614 208.807 204.863 236.308 204.804C263.81 204.744 286.06 182.418 286.001 154.916L186.421 155.112Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M186.812 123.352C204.531 144.386 235.943 147.072 256.969 129.352C277.994 111.632 280.689 80.221 262.969 59.1951L186.812 123.352Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M166.703 98.7737C193.797 103.499 219.582 85.3627 224.308 58.2773C229.033 31.1918 210.897 5.39815 183.803 0.672852L166.703 98.7737Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M135.496 92.8756C159.284 79.0822 167.384 48.6142 153.59 24.8263C139.797 1.0383 109.329 -7.06949 85.5322 6.72395L135.496 92.8756Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M107.789 108.411C117.147 82.5497 103.77 54.0024 77.9079 44.6538C52.0462 35.3052 23.5075 48.6737 14.1504 74.5354L107.789 108.411Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.Sprinkler, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "130",
            height: "134",
            viewBox: "0 0 130 134",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M77.4229 13.518L78.4635 13.4233L78.3232 12.3878L77.0329 2.86572L76.9043 1.91658L75.9505 2.00419C53.2472 4.08953 37.6338 25.8534 40.9315 50.3194L41.0595 51.269L42.0137 51.1816L50.7518 50.3813L51.7904 50.2862L51.6517 49.2525C49.1998 30.9741 60.8468 15.0263 77.4229 13.518Z",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M118.481 51.6956L119.068 52.5587L119.905 51.9349L127.598 46.202L128.366 45.6296L127.827 44.8375C114.996 25.9859 88.4039 22.8676 68.6007 37.6242L67.8335 38.1959L68.3708 38.9876L73.3033 46.2557L73.8898 47.1199L74.7277 46.4965C89.5354 35.4783 109.116 37.9316 118.481 51.6956Z",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M104.988 106.133L104.518 107.065L105.469 107.495L114.224 111.447L115.096 111.841L115.528 110.986C125.803 90.6209 115.629 65.8528 93.1278 55.6931L92.2546 55.2988L91.8233 56.1543L87.8707 63.9941L87.4007 64.9264L88.3524 65.3558C105.147 72.9333 112.483 91.2674 104.988 106.133Z",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M50.85 120.708L49.8068 120.749L49.892 121.789L50.676 131.36L50.7542 132.315L51.7117 132.278C74.4985 131.387 91.238 110.473 89.206 85.8725L89.1272 84.9182L88.1703 84.9556L79.3995 85.2986L78.3563 85.3394L78.442 86.3799C79.9544 104.752 67.4901 120.064 50.85 120.708Z",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M11.842 80.4224L11.3009 79.5294L10.4321 80.1086L2.4453 85.4332L1.64841 85.9644L2.14479 86.7835C13.9674 106.292 40.3641 110.783 60.9161 97.0766L61.713 96.5451L61.2163 95.726L56.6594 88.2129L56.1176 87.3196L55.2488 87.9C39.9019 98.1525 20.4685 94.6585 11.842 80.4224Z",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M28.1721 26.7875L28.6908 25.8812L27.763 25.4022L19.2208 20.9923L18.3695 20.5528L17.894 21.3845C6.57628 41.1779 15.4285 66.4531 37.3805 77.7788L38.2317 78.218L38.7071 77.3865L43.068 69.759L43.5861 68.8527L42.6584 68.374C26.2767 59.9205 19.9072 41.2276 28.1721 26.7875Z",
            "stroke-miterlimit": "10"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.Noodle, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "125",
            height: "125",
            viewBox: "0 0 125 125",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M97.356 0.464355L124.597 0.464355C124.597 69.0473 68.6989 124.851 0.000457764 124.851L0.000457764 97.6562C53.6949 97.6562 97.356 54.0554 97.356 0.464355Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.QuadRect, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "124",
            height: "123",
            viewBox: "0 0 124 123",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M0.000144958 29.9819L61.6738 29.9819L61.6738 3.24249e-05L0.000144958 3.24249e-05L0.000144958 29.9819Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M62.3263 59.5071L124 59.5071V29.5252L62.3263 29.5252L62.3263 59.5071Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M0.000144958 90.2981L61.6738 90.2981L61.6738 60.3162L0.000144958 60.3162L0.000144958 90.2981Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M62.3263 122.016L124 122.016V92.0342H62.3263L62.3263 122.016Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.XMarksTheSpot, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "125",
            height: "126",
            viewBox: "0 0 125 126",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M62.7658 42.8327L20.8008 0.867676L0.40244 21.266L42.3675 63.231L62.7658 42.8327Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M123.823 21.2694L103.425 0.871094L61.4598 42.8361L81.8581 63.2345L123.823 21.2694Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M62.7694 83.4982L42.3711 63.0999L0.406068 105.065L20.8044 125.463L62.7694 83.4982Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M125 105.066L83.0352 63.1008L62.6368 83.4992L104.602 125.464L125 105.066Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.Lattice, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "125",
            height: "126",
            viewBox: "0 0 125 126",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M32.0293 1.00024L2.99994 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M62.0166 1.00024L32.974 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M34.1318 1.00025L63.1611 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M4.59697 1.00025L33.6397 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M91.9902 1.00024L62.9476 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M121.964 1.00024L92.9212 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M93.1868 1L122.23 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M63.6526 1.00025L92.6953 125",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.Radial, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "83",
            height: "82",
            viewBox: "0 0 83 82",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M81.6869 50.74L1.1875 31.6828"
        }, []), "\n", Object(i.h)("path", {
            d: "M31.9126 81.4653L50.9698 0.965972"
        }, []), "\n", Object(i.h)("path", {
            d: "M55.2831 80.1858L27.5913 2.23699"
        }, []), "\n", Object(i.h)("path", {
            d: "M2.4668 55.0615L80.4156 27.3697"
        }, []), "\n", Object(i.h)("path", {
            d: "M73.0013 67.95L9.88135 14.4814"
        }, []), "\n", Object(i.h)("path", {
            d: "M14.7031 72.7714L68.1716 9.65139"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.PickUpSticks, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "289",
            height: "291",
            viewBox: "0 0 289 291",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M282.465 123.098L282.445 122.599L281.945 122.618L5.76204 133.509L5.26244 133.528L5.28214 134.028L6.46021 163.904L6.47991 164.404L6.97951 164.384L283.163 153.494L283.662 153.474L283.643 152.975L282.465 123.098Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M276.627 128.881L277.38 147.635L12.3168 158.085L11.5645 139.331L276.627 128.881ZM287.328 117.317L276.182 117.763L11.1465 128.213L0 128.658L0.445859 139.805L1.19825 158.559L1.6441 169.705L12.7906 169.259L277.854 158.782L289 158.336L288.554 147.189L287.802 128.435L287.328 117.317Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M26.4851 71.7933L26.0308 71.5846L25.822 72.0389L13.3386 99.2094L13.1299 99.6638L13.5842 99.8725L264.753 215.271L265.207 215.48L265.416 215.026L277.9 187.855L278.108 187.401L277.654 187.192L26.4851 71.7933Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M29.0218 79.6416L270.064 190.41L262.234 207.464L21.1914 96.6957L29.0218 79.6416ZM23.5601 64.8447L18.9064 74.9601L11.076 92.0142L6.42236 102.13L16.5378 106.783L257.58 217.551L267.696 222.205L272.349 212.09L280.18 195.035L284.833 184.92L274.718 180.266L33.6755 69.4983L23.5601 64.8447Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M69.5723 28.5268L69.2487 28.1456L68.8675 28.4691L46.0715 47.8177L45.6903 48.1412L46.0138 48.5224L224.875 259.253L225.199 259.634L225.58 259.311L248.376 239.962L248.757 239.639L248.434 239.258L69.5723 28.5268Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M68.5451 36.7L240.201 238.953L225.905 251.102L54.2497 48.8497L68.5451 36.7ZM69.8269 20.9835L61.3277 28.2009L47.0324 40.3505L38.5332 47.5678L45.7505 56.067L217.406 258.32L224.623 266.819L233.123 259.602L247.418 247.452L255.917 240.235L248.7 231.735L77.0442 29.4827L69.8269 20.9835Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M126.054 7.09971L125.922 6.61751L125.44 6.74971L96.6041 14.6554L96.1219 14.7876L96.2541 15.2698L169.335 281.834L169.468 282.316L169.95 282.184L198.786 274.279L199.268 274.146L199.136 273.664L126.054 7.09971Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M121.706 14.0727L191.79 269.912L173.705 274.872L103.621 19.0329L121.706 14.0727ZM129.509 0.390442L118.753 3.31639L100.667 8.27657L89.9111 11.2304L92.865 21.9867L162.948 277.826L165.902 288.582L176.659 285.628L194.744 280.668L205.5 277.714L202.546 266.958L132.463 11.1189L129.509 0.390442Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M155.741 5.95445L155.248 5.8704L155.164 6.3633L108.7 278.843L108.616 279.336L109.109 279.42L138.585 284.446L139.078 284.53L139.162 284.037L185.626 11.5577L185.71 11.0648L185.217 10.9807L155.741 5.95445Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M160.216 12.8742L178.719 16.023L134.133 277.519L115.63 274.37L160.216 12.8742ZM151.075 0L149.208 10.9793L104.623 272.475L102.756 283.455L113.735 285.322L132.238 288.47L143.217 290.338L145.084 279.358L189.67 17.8622L191.537 6.88294L180.558 5.01591L162.083 1.86703L151.075 0Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M210.288 23.3269L209.877 23.0424L209.592 23.4536L52.3183 250.769L52.0338 251.18L52.445 251.464L77.0351 268.478L77.4463 268.762L77.7308 268.351L235.005 41.0359L235.289 40.6247L234.878 40.3402L210.288 23.3269Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M211.4 31.4884L226.838 42.1612L75.9149 260.297L60.477 249.625L211.4 31.4884ZM208.586 15.967L202.232 25.1349L51.3091 243.299L44.9556 252.467L54.1235 258.821L69.5614 269.493L78.7294 275.847L85.0828 266.679L236.006 48.4868L242.359 39.3188L233.192 32.9653L217.754 22.2926L208.586 15.967Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M259.495 63.5133L259.242 63.0817L258.811 63.3341L20.2183 202.891L19.7867 203.143L20.0391 203.575L35.1358 229.385L35.3883 229.816L35.8199 229.564L274.412 90.0074L274.844 89.7549L274.591 89.3233L259.495 63.5133Z",
            fill: "white",
            stroke: "white"
        }, []), "\n", Object(i.h)("path", {
            d: "M257.063 71.3933L266.538 87.5836L37.5618 221.508L28.0873 205.318L257.063 71.3933ZM261.076 56.1505L251.462 61.7795L22.4583 195.704L12.8445 201.333L18.4734 210.947L27.9479 227.137L33.5769 236.751L43.1907 231.122L272.167 97.1974L281.781 91.5684L276.152 81.9546L266.677 65.7643L261.076 56.1505Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.RingPop, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "127",
            height: "127",
            viewBox: "0 0 127 127",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M89.5374 74.6832C110.161 74.6832 126.879 57.9648 126.879 37.3416C126.879 16.7184 110.161 0 89.5374 0C68.9142 0 52.1958 16.7184 52.1958 37.3416C52.1958 57.9648 68.9142 74.6832 89.5374 74.6832Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M38.5135 56.83C55.9026 56.83 70.0622 70.9766 70.0622 88.3787C70.0622 105.781 55.9029 119.914 38.5135 119.914C21.1243 119.914 6.9648 105.768 6.9648 88.3655C6.9648 70.9635 21.111 56.83 38.5135 56.83ZM38.5135 50.5371C17.6083 50.5371 0.671875 67.4733 0.671875 88.3655C0.671875 109.257 17.608 126.207 38.5135 126.207C59.4188 126.207 76.3551 109.271 76.3551 88.3655C76.3551 67.4598 59.4052 50.5371 38.5135 50.5371Z"
        }, []), "\n"])
    }
    )),
    Ie()(_e, Ce.TwoBirds, (function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "113",
            height: "111",
            viewBox: "0 0 113 111",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M99.44 1.52588e-05H113C113 34.2381 85.1782 62.0833 50.9689 62.0833V48.5119C77.6964 48.5119 99.44 26.7381 99.44 1.52588e-05Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M99.44 111H113C113 76.7619 85.1782 48.9167 50.9689 48.9167V62.4881C77.6964 62.4881 99.44 84.25 99.44 111Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M48.471 1.52588e-05H62.031C62.031 34.2381 34.2092 62.0833 -5.34058e-05 62.0833V48.5119C26.7274 48.5119 48.471 26.7381 48.471 1.52588e-05Z"
        }, []), "\n", Object(i.h)("path", {
            d: "M48.471 111H62.031C62.031 76.7619 34.2092 48.9167 -5.34058e-05 48.9167V62.4881C26.7274 62.4881 48.471 84.25 48.471 111Z"
        }, []), "\n"])
    }
    )),
    _e)
      , Ee = function(e) {
        var t = e.type
          , n = e.color
          , o = e.fill
          , a = e.rotation
          , r = e.strokeWidth
          , s = e.classes
          , l = e.width
          , c = e.height
          , u = Re[t]
          , d = {
            height: c || "auto",
            width: l || "100%"
        };
        return a && (d.transform = "rotate(".concat(a, "deg)")),
        null !== r && (d.strokeWidth = r),
        Object(i.h)(u, {
            className: Object(_.U)(De.a["fill".concat(o || n)], De.a["stroke".concat(n)], s),
            style: d
        })
    }
      , Pe = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
          , t = e.additionalStyles
          , n = e.errorMessage;
        return Object(i.h)("main", {
            class: Le.a.main,
            style: t
        }, Object(i.h)("div", {
            class: Le.a.fourOhFour
        }, "4", Object(i.h)("div", {
            class: Le.a.radial
        }, Object(i.h)(Ee, {
            type: Ce.Radial,
            color: Me.Blue,
            width: "257px"
        })), "4"), n && Object(i.h)("h5", {
            class: Le.a.errorMessage
        }, n))
    }
      , Be = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)("div", null, Object(i.h)(Te, null), Object(i.h)(Pe, {
                    errorMessage: "Error: The URL you requested could not be found."
                }))
            }
        }]),
        t
    }(i.Component)
      , Ue = n(165)
      , Fe = n.n(Ue)
      , Ne = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                loaded: !1
            },
            e.lazyObserver = function(t) {
                var n = new IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        if (t.isIntersecting) {
                            var o = t.target.children[0];
                            if ("VIDEO" === o.tagName) {
                                var a = t.target.children[0];
                                a.querySelector("source").src = e.props.src,
                                a.load(),
                                e.setState({
                                    loaded: !0
                                }),
                                n.unobserve(t.target)
                            } else if ("IMG" === o.tagName) {
                                var r = t.target.children[0]
                                  , i = new Image;
                                i.addEventListener("load", (function() {
                                    e.setState({
                                        loaded: !0
                                    }),
                                    r.src = i.src,
                                    n.unobserve(t.target)
                                }
                                )),
                                i.src = e.props.src
                            }
                        }
                    }
                    ))
                }
                ),{
                    rootMargin: "500px"
                });
                return n.observe(t)
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                this.lazyObserver(this.lazyRef)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.children;
                return Object(i.h)("div", {
                    class: Object(_.U)(Fe.a.lazyLoader, this.state.loaded && Fe.a.active),
                    ref: function(t) {
                        return e.lazyRef = t
                    }
                }, t)
            }
        }]),
        t
    }(i.Component)
      , We = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentWillUnmount",
            value: function() {
                var e;
                e = this,
                Promise.resolve(e).then(Ge)
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this.props, n = t.alt, o = t.ariaHidden, a = t.src, r = t.src2x, s = t.srcset, l = t.sizes;
                return r ? e = r ? "".concat(r, " 2x, ").concat(a, " 1x") : "" : s && (e = s),
                Object(i.h)("img", {
                    alt: n || "",
                    "aria-hidden": o,
                    class: this.props.classNames || "",
                    src: a,
                    sizes: l,
                    srcset: e
                })
            }
        }]),
        t
    }(i.Component);
    function Ge(e) {
        e.nextBase = e.__b = null
    }
    var Ve, ze = n(74), qe = n.n(ze), Ze = n(87), Ke = n.n(Ze), Ye = {
        Twitter: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                width: "41",
                height: "41",
                viewBox: "0 0 41 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M20.4848 40.1746C31.4333 40.1746 40.3089 31.2991 40.3089 20.3505C40.3089 9.40193 31.4333 0.526367 20.4848 0.526367C9.53621 0.526367 0.660645 9.40193 0.660645 20.3505C0.660645 31.2991 9.53621 40.1746 20.4848 40.1746Z",
                fill: "#1A73E8"
            }, []), "\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M29.4057 15.0548C28.7857 15.3335 28.1195 15.5218 27.4201 15.6065C28.1339 15.1729 28.6821 14.4863 28.9402 13.6683C28.2722 14.0698 27.5324 14.3613 26.7449 14.5184C26.1143 13.8376 25.2158 13.4121 24.2215 13.4121C22.3122 13.4121 20.7643 14.9807 20.7643 16.9153C20.7643 17.1899 20.7949 17.4572 20.8538 17.7136C17.9807 17.5675 15.4334 16.1728 13.7283 14.0534C13.4307 14.5708 13.2602 15.1726 13.2602 15.8146C13.2602 17.03 13.8705 18.1022 14.7982 18.7305C14.2315 18.7123 13.6984 18.5547 13.2323 18.2923C13.2321 18.3069 13.232 18.3216 13.232 18.3363C13.232 20.0337 14.4237 21.4496 16.0052 21.7715C15.715 21.8515 15.4096 21.8943 15.0944 21.8943C14.8716 21.8943 14.655 21.8724 14.4439 21.8314C14.8839 23.2233 16.1606 24.2361 17.6734 24.2645C16.4902 25.204 14.9996 25.764 13.3799 25.764C13.1008 25.764 12.8256 25.7475 12.5552 25.7151C14.0852 26.7091 15.9023 27.289 17.8546 27.289C24.2135 27.289 27.6907 21.9509 27.6907 17.3215C27.6907 17.1696 27.6873 17.0185 27.6807 16.8683C28.3561 16.3744 28.9422 15.7574 29.4057 15.0548Z",
                fill: "white"
            }, []), "\n"])
        },
        Facebook: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                width: "40",
                height: "41",
                viewBox: "0 0 40 41",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M17.2289 31.1351H21.6854V20.3495H24.6583L25.0522 16.6331H21.6854L21.69 14.7723C21.69 13.8036 21.7825 13.2835 23.1729 13.2835H25.031V9.56649H22.0574C18.4858 9.56649 17.2289 11.3698 17.2289 14.4016V16.6331H15.0027V20.3502H17.2289V31.1351ZM20.0273 40.1747C9.07905 40.1747 0.203125 31.2988 0.203125 20.3506C0.203125 9.40175 9.07905 0.526489 20.0273 0.526489C30.9755 0.526489 39.8514 9.40175 39.8514 20.3506C39.8514 31.2988 30.9755 40.1747 20.0273 40.1747Z",
                fill: "#1A73E8"
            }, []), "\n"])
        },
        Google_Developers: function(e) {
            var t = e.styles
              , n = Object.assign({}, e);
            return delete n.styles,
            Object(i.h)("svg", Object.assign({
                version: "1.1",
                id: "svg-GoogleDevelopersBlue-2pfGa-G",
                xmlns: "http://www.w3.org/2000/svg",
                "xmlns:xlink": "http://www.w3.org/1999/xlink",
                x: "0px",
                y: "0px",
                viewBox: "0 0 41 41",
                style: "enable-background:new 0 0 41 41;",
                "xml:space": "preserve"
            }, n), ["\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                fill: "#1A73E8",
                d: "M20.6,40.2c10.9,0,19.8-8.9,19.8-19.8c0-10.9-8.9-19.8-19.8-19.8C9.6,0.5,0.7,9.4,0.7,20.4\n\tC0.7,31.3,9.6,40.2,20.6,40.2z"
            }, []), "\n", Object(i.h)("g", {}, ["\n\t", Object(i.h)("path", {
                class: [t && t.st1 || "st1"].join(" "),
                d: "M17.9,23l-7.4-4.3c-0.3-0.2-0.7-0.3-1.1-0.3c-0.7,0-1.4,0.4-1.8,1.1c-0.6,1-0.2,2.3,0.8,2.9l7.4,4.3\n\t\tc0.3,0.2,0.7,0.3,1.1,0.3c0.7,0,1.4-0.4,1.8-1.1C19.3,24.8,18.9,23.5,17.9,23z",
                fill: "white"
            }, []), "\n\t", Object(i.h)("path", {
                class: [t && t.st1 || "st1"].join(" "),
                d: "M32.7,18.7l-7.4-4.3c-0.3-0.2-0.7-0.3-1.1-0.3c-0.7,0-1.4,0.4-1.8,1.1c-0.6,1-0.2,2.3,0.8,2.9l7.4,4.3\n\t\tc0.3,0.2,0.7,0.3,1.1,0.3c0.7,0,1.4-0.4,1.8-1.1C34.1,20.5,33.8,19.3,32.7,18.7z",
                fill: "white"
            }, []), "\n\t", Object(i.h)("g", {}, ["\n\t\t", Object(i.h)("path", {
                class: [t && t.st1 || "st1"].join(" "),
                d: "M30.3,22.8l-3.5-2L23.2,23c-1,0.6-1.4,1.9-0.8,2.9c0.4,0.7,1.1,1.1,1.8,1.1c0.4,0,0.7-0.1,1.1-0.3l6-3.4\n\t\t\tC31,23.1,30.6,23,30.3,22.8z",
                fill: "white"
            }, []), "\n\t"]), "\n\t", Object(i.h)("g", {}, ["\n\t\t", Object(i.h)("path", {
                class: [t && t.st1 || "st1"].join(" "),
                d: "M10.8,18.2l3.5,2l3.7-2.1c1-0.6,1.4-1.9,0.8-2.9c-0.6-1-1.9-1.4-2.9-0.8l-6,3.4C10.2,17.9,10.5,18,10.8,18.2z\n\t\t\t",
                fill: "white"
            }, []), "\n\t"]), "\n"]), "\n"])
        },
        Instagram: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M19.8241 39.6783C30.7727 39.6783 39.6483 30.8027 39.6483 19.8542C39.6483 8.90559 30.7727 0.0300293 19.8241 0.0300293C8.87556 0.0300293 0 8.90559 0 19.8542C0 30.8027 8.87556 39.6783 19.8241 39.6783Z",
                fill: "#1A73E8"
            }, []), "\n", Object(i.h)("path", {
                d: "M19.9996 11.8017C22.6698 11.8017 22.9858 11.812 24.0404 11.86C25.0153 11.9045 25.5448 12.0672 25.8973 12.2042C26.3641 12.3856 26.6971 12.6023 27.0472 12.952C27.3973 13.3021 27.614 13.6351 27.795 14.1019C27.932 14.4544 28.0947 14.9839 28.1392 15.9588C28.1872 17.0131 28.1975 17.3294 28.1975 19.9996C28.1975 22.6698 28.1872 22.9857 28.1392 24.0404C28.0947 25.0153 27.932 25.5448 27.795 25.8973C27.6136 26.3641 27.3969 26.6971 27.0472 27.0472C26.6971 27.3973 26.3641 27.614 25.8973 27.795C25.5448 27.932 25.0153 28.0947 24.0404 28.1392C22.9861 28.1872 22.6698 28.1975 19.9996 28.1975C17.3294 28.1975 17.0131 28.1872 15.9588 28.1392C14.9839 28.0947 14.4544 27.932 14.1019 27.795C13.6351 27.6136 13.3021 27.3969 12.952 27.0472C12.6019 26.6971 12.3852 26.3641 12.2042 25.8973C12.0672 25.5448 11.9045 25.0153 11.86 24.0404C11.812 22.9861 11.8017 22.6698 11.8017 19.9996C11.8017 17.3294 11.812 17.0135 11.86 15.9588C11.9045 14.9839 12.0672 14.4544 12.2042 14.1019C12.3856 13.6351 12.6023 13.3021 12.952 12.952C13.3021 12.6019 13.6351 12.3852 14.1019 12.2042C14.4544 12.0672 14.9839 11.9045 15.9588 11.86C17.0135 11.812 17.3294 11.8017 19.9996 11.8017ZM19.9996 10C17.2838 10 16.9432 10.0115 15.8766 10.0603C14.8124 10.1088 14.0857 10.2779 13.4494 10.5251C12.7916 10.7808 12.234 11.1225 11.6782 11.6786C11.1225 12.2344 10.7804 12.792 10.5251 13.4494C10.2779 14.0857 10.1088 14.8124 10.0603 15.8766C10.0115 16.9432 10 17.2838 10 19.9996C10 22.7154 10.0115 23.056 10.0603 24.1226C10.1088 25.1868 10.2779 25.9135 10.5251 26.5498C10.7808 27.2076 11.1225 27.7653 11.6786 28.321C12.2347 28.8771 12.792 29.2188 13.4498 29.4745C14.0857 29.7217 14.8128 29.8908 15.877 29.9393C16.9436 29.9881 17.2842 29.9996 20 29.9996C22.7158 29.9996 23.0564 29.9881 24.123 29.9393C25.1872 29.8908 25.9143 29.7217 26.5502 29.4745C27.208 29.2188 27.7656 28.8771 28.3214 28.321C28.8775 27.7649 29.2192 27.2076 29.4749 26.5498C29.7221 25.9139 29.8912 25.1868 29.9397 24.1226C29.9885 23.056 30 22.7154 30 19.9996C30 17.2838 29.9885 16.9432 29.9397 15.8766C29.8912 14.8124 29.7221 14.0853 29.4749 13.4494C29.2192 12.7916 28.8775 12.234 28.3214 11.6782C27.7653 11.1221 27.208 10.7804 26.5502 10.5247C25.9135 10.2779 25.1868 10.1088 24.1226 10.0603C23.056 10.0115 22.7154 10 19.9996 10Z",
                fill: "white"
            }, []), "\n", Object(i.h)("path", {
                d: "M19.9995 14.8647C17.1634 14.8647 14.8647 17.1638 14.8647 19.9995C14.8647 22.8352 17.1638 25.1343 19.9995 25.1343C22.8352 25.1343 25.1343 22.8352 25.1343 19.9995C25.1343 17.1638 22.8356 14.8647 19.9995 14.8647ZM19.9995 23.3326C18.1585 23.3326 16.6664 21.8401 16.6664 19.9995C16.6664 18.1585 18.1589 16.6664 19.9995 16.6664C21.8401 16.6664 23.3326 18.1589 23.3326 19.9995C23.3326 21.8405 21.8405 23.3326 19.9995 23.3326Z",
                fill: "white"
            }, []), "\n", Object(i.h)("path", {
                d: "M25.3376 15.8615C26.0003 15.8615 26.5376 15.3243 26.5376 14.6616C26.5376 13.9989 26.0003 13.4617 25.3376 13.4617C24.6749 13.4617 24.1377 13.9989 24.1377 14.6616C24.1377 15.3243 24.6749 15.8615 25.3376 15.8615Z",
                fill: "white"
            }, []), "\n"])
        },
        YouTube: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                width: "40",
                height: "40",
                viewBox: "0 0 40 40",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n", Object(i.h)("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M19.8241 39.6783C30.7727 39.6783 39.6483 30.8027 39.6483 19.8542C39.6483 8.90559 30.7727 0.0300293 19.8241 0.0300293C8.87556 0.0300293 0 8.90559 0 19.8542C0 30.8027 8.87556 39.6783 19.8241 39.6783Z",
                fill: "#1A73E8"
            }, []), "\n", Object(i.h)("path", {
                d: "M29.5818 15.1858C29.3523 14.3255 28.6739 13.6481 27.8136 13.4177C26.2545 13 20 13 20 13C20 13 13.7455 13 12.1864 13.4177C11.3261 13.6481 10.6477 14.3255 10.4182 15.1858C10 16.7461 10 20 10 20C10 20 10 23.2539 10.4182 24.8142C10.6477 25.6745 11.3261 26.3519 12.1864 26.5823C13.7455 27 20 27 20 27C20 27 26.2545 27 27.8136 26.5823C28.6739 26.3519 29.3523 25.6745 29.5818 24.8142C30 23.2539 30 20 30 20C30 20 30 16.7461 29.5818 15.1858ZM17.9545 22.9547V17.0453L23.1818 20L17.9545 22.9547Z",
                fill: "white"
            }, []), "\n"])
        }
    }, Je = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)("section", {
                    class: "".concat(Ke.a.footer)
                }, Object(i.h)("div", {
                    class: Ke.a.footerLine
                }), Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-1-lg col-4-lg col-4", Ke.a.footerInfo)
                }, Object(i.h)("p", {
                    class: "".concat(Ke.a.footerMessage)
                }, qe.a.footer_message), Object(i.h)("div", {
                    class: "".concat(Ke.a.footerSocial)
                }, qe.a.footer_social.map((function(e) {
                    var t = Ye[e.svg];
                    return Object(i.h)("div", {
                        class: "".concat(Ke.a.footerSocialLink)
                    }, Object(i.h)(U, {
                        href: e.href,
                        external: e.external,
                        ariaLabel: e.label,
                        gaLabel: e.label,
                        gaCategory: "".concat("Prefooter", ": Social"),
                        focusType: D.Default
                    }, Object(i.h)(t, null)))
                }
                )))), Object(i.h)("div", {
                    class: Object(_.U)("col-offset-7-lg col-4-lg col-4", Ke.a.footerLogo)
                }, Object(i.h)(U, {
                    href: qe.a.google.link.href,
                    external: qe.a.google.link.external,
                    ariaLabel: qe.a.google.link.label,
                    gaLabel: qe.a.google.link.label,
                    gaCategory: "Prefooter",
                    focusType: D.Gif
                }, Object(i.h)(Ne, {
                    src: qe.a.hashtag_animation.src
                }, Object(i.h)(We, {
                    src: null,
                    alt: qe.a.hashtag_animation.altText
                }))))))
            }
        }]),
        t
    }(i.Component), Xe = n(66), Qe = n.n(Xe), $e = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e[e.Default = 0] = "Default",
        e[e.Routed = 1] = "Routed"
    }(Ve || (Ve = {}));
    var et = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                activeTabIndex: 0
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "isTabLinkActive",
            value: function(e, t) {
                var n = this.props
                  , o = n.basePath
                  , a = n.defaultTabSlug
                  , r = this.getTabPath(o, e.slug)
                  , i = t === o && r === "".concat(o, "/").concat(a, "/");
                return Object(_.S)(r, t) || i
            }
        }, {
            key: "getTabPath",
            value: function(e, t) {
                return "".concat(e, "/").concat(t, "/")
            }
        }, {
            key: "onKeyPress",
            value: function(e, t) {
                (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) && this.updateTab(t, e)
            }
        }, {
            key: "updateTab",
            value: function(e, t) {
                t && t.preventDefault(),
                this.props.disabledTabIndexes.includes(e) || this.setState({
                    activeTabIndex: e
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.updateTab(this.props.defaultActiveTab)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props.defaultActiveTab;
                t !== e.defaultActiveTab && this.updateTab(t)
            }
        }, {
            key: "render",
            value: function(e, t) {
                var n, o = this, a = e.basePath, r = e.disabledTabIndexes, s = e.flushLeft, l = e.tabItems, c = e.location, u = e.type, d = t.activeTabIndex, h = c.pathname.replace(/\/$/, "");
                return u == Ve.Default && (n = Object(i.cloneElement)(this.props.children[d], {
                    key: d
                })),
                Object(i.h)("section", {
                    class: Object(_.U)(Qe.a.tabs, this.props.classNames)
                }, Object(i.h)("div", {
                    class: !s && "grid"
                }, Object(i.h)("ul", {
                    class: Object(_.U)(Qe.a.tabList, !s && "col-11-lg col-offset-1-lg", s && Qe.a.flushLeft),
                    role: "tablist"
                }, l.map((function(e, t) {
                    var n = r.includes(t);
                    return Object(i.h)("li", {
                        class: Qe.a.tabListItem,
                        role: "presentation",
                        "aria-hidden": n
                    }, u === Ve.Default && Object(i.h)(U, {
                        onClick: function(e) {
                            return o.updateTab(t, e)
                        },
                        onKeyPress: function(e) {
                            return o.onKeyPress(e, t)
                        },
                        classNames: "".concat(Object(_.U)(Qe.a.tab, n && Qe.a.disabledTab, d === t && Qe.a.activeTab)),
                        ariaHidden: n,
                        ariaDisabled: n,
                        ariaLabel: e.label,
                        ariaSelected: d === t,
                        ariaRole: "tab",
                        role: "tab",
                        gaOn: o.props.gaOn,
                        gaCategory: "".concat(o.props.gaCategory || c.pathname, ": Tabs"),
                        gaLabel: "Tab: ".concat(e.label),
                        gaEventAction: o.props.gaEventAction,
                        tabIndex: n ? -1 : 0,
                        focusType: D.Default
                    }, e.label), u === Ve.Routed && Object(i.h)(S.b, {
                        path: o.getTabPath(a, e.slug)
                    }, Object(i.h)(U, {
                        isRouterLink: !0,
                        classNames: "".concat(Object(_.U)(Qe.a.tab, o.isTabLinkActive(e, h) && Qe.a.activeTab)),
                        href: o.getTabPath(a, e.slug),
                        ariaLabel: e.label,
                        ariaSelected: o.isTabLinkActive(e, h),
                        ariaRole: "tab",
                        role: "tab",
                        gaOn: o.props.gaOn,
                        gaCategory: "".concat(o.props.gaCategory || a, ": Tabs"),
                        gaLabel: "Tab: ".concat(e.label),
                        gaEventAction: o.props.gaEventAction,
                        focusType: D.Default
                    }, e.label)))
                }
                )))), Object(i.h)("article", {
                    role: "tabpanel"
                }, u === Ve.Default && n, u === Ve.Routed && this.props.children))
            }
        }]),
        t
    }(i.Component);
    et.defaultProps = {
        defaultActiveTab: 0,
        disabledTabIndexes: [],
        gaEventAction: "click",
        gaOn: "click",
        type: Ve.Default
    },
    et = $e([S.h], et);
    var tt, nt, ot = n(21), at = n.n(ot), rt = n(118), it = n.n(rt);
    !function(e) {
        e.Circle = "Circle",
        e.SawTooth = "Sawtooth",
        e.SemiCircle = "SemiCircle",
        e.Square = "Square",
        e.Stairs = "Stairs"
    }(tt || (tt = {})),
    function(e) {
        e.Top = "Top",
        e.Bottom = "Bottom"
    }(nt || (nt = {}));
    var st = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props
                  , t = e.shape
                  , n = e.rotation;
                this.className = [it.a["".concat("maskedImage", "Container")], it.a["".concat("maskedImage" + t)]].concat(te()(n ? [it.a["".concat("maskedImage" + t + n)]] : [])).join(" ")
            }
        }, {
            key: "shouldComponentUpdate",
            value: function() {
                return !1
            }
        }, {
            key: "render",
            value: function(e) {
                return Object(i.h)("div", {
                    class: Object(_.U)(this.className, e.classNames)
                }, Object(i.h)("div", {
                    class: it.a.maskedImageContainerRatio
                }, Object(i.h)(We, l()({}, e))))
            }
        }]),
        t
    }(i.Component)
      , lt = n(58)
      , ct = n.n(lt)
      , ut = function(e) {
        return "Travel" === e.type ? Object(i.h)("section", {
            class: Object(_.U)(ct.a.hero)
        }, Object(i.h)("div", {
            class: Object(_.U)(ct.a.travelHeroGrid, "grid")
        }, Object(i.h)("div", {
            class: Object(_.U)("col-offset-1-lg col-6-lg col-4", ct.a.heroText)
        }, Object(i.h)("h2", {
            class: ct.a.travelHeroTextSection
        }, e.heroInfo.title), e.isLessThanDesktop && e.children, e.heroInfo.sections.map((function(e) {
            return Object(i.h)("div", {
                class: Object(_.U)(ct.a.heroText, ct.a.travelHeroTextSection)
            }, Object(i.h)("h3", null, e.title), Object(i.h)("p", null, e.text))
        }
        ))), !e.isLessThanDesktop && e.children)) : Object(i.h)("section", {
            class: Object(_.U)(ct.a.hero)
        }, Object(i.h)("div", {
            class: Object(_.U)(ct.a.attendingHeroGrid, "grid")
        }, Object(i.h)("div", {
            class: Object(_.U)("col-offset-1-lg col-6-lg col-4", ct.a.heroText)
        }, Object(i.h)("h2", null, e.heroInfo.title)), e.children, e.heroInfo.sections.map((function(e) {
            return Object(i.h)("div", {
                class: Object(_.U)("col-offset-1-lg col-6-lg col-4", ct.a.heroText)
            }, Object(i.h)("h3", null, e.title), Object(i.h)("p", null, e.text))
        }
        ))))
    }
      , dt = n(67)
      , ht = n.n(dt)
      , pt = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , ft = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("section", null, Object(i.h)(Te, null), Object(i.h)(ut, {
                    heroInfo: at.a.event.hero
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-8-lg col-3-lg col-2", ht.a.heroImage)
                }, Object(i.h)(st, {
                    shape: tt.Circle,
                    src: "".concat(at.a.event.hero.maskedImage.src),
                    src2x: "".concat(at.a.event.hero.maskedImage.src2x),
                    alt: "".concat(at.a.event.hero.maskedImage.alt)
                })), Object(i.h)("div", {
                    class: Object(_.U)("col-offset-8-lg col-3-lg col-2", ht.a.heroShape)
                }, Object(i.h)(Ee, {
                    type: Ce.DoubleSemiCircle,
                    color: Me.Green,
                    width: "50%",
                    classes: Object(_.U)(ht.a.heroShape, "hiddenLtDesktop")
                }), Object(i.h)(Ee, {
                    type: Ce.DoubleNoodle,
                    color: Me.Red,
                    rotation: e ? 0 : 90,
                    width: e ? "100%" : "50%",
                    classes: ht.a.heroShape
                }))), Object(i.h)("div", {
                    class: Object(_.U)("grid", ht.a.whatToExpect)
                }, Object(i.h)("div", {
                    class: "".concat(ht.a.exploreGrid, " col-10-lg col-offset-1-lg")
                }, at.a.event.explore.grid.map((function(e) {
                    return Object(i.h)("div", {
                        class: "".concat(ht.a.exploreQuadrant, " grid")
                    }, Object(i.h)("div", {
                        class: "".concat(ht.a.exploreIcon, " col-md-1")
                    }, Object(i.h)(Ee, {
                        type: e.SVG,
                        color: e.SVGColor,
                        width: "82px",
                        height: "82px"
                    })), Object(i.h)("div", {
                        class: Object(_.U)("col-md-3 col-4", ht.a.quadrantText)
                    }, Object(i.h)("h5", {
                        "aria-level": "4"
                    }, e.title), Object(i.h)("p", null, e.description)))
                }
                )))))
            }
        }]),
        t
    }(i.Component);
    ft = pt([Object(w.b)("UIStore")], ft);
    var gt, bt = n(105), vt = n.n(bt), mt = n(210), yt = n.n(mt), Ot = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = Object(_.D)(this.props.children)
                  , t = this.props.classNames
                  , n = [yt.a.rawContent, t].join(" ");
                return Object(i.h)("div", {
                    class: n,
                    dangerouslySetInnerHTML: {
                        __html: e
                    }
                })
            }
        }]),
        t
    }(i.Component), jt = n(132), kt = n.n(jt), St = n(134), wt = n.n(St);
    !function(e) {
        e.Header = "Header",
        e.Body = "Body"
    }(gt || (gt = {}));
    var _t = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).naturalHeight = null,
            e.state = {
                isOpen: !1
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                _.T && (this.windowDimensions = {
                    width: window.innerWidth,
                    height: window.innerHeight
                },
                this.uniqueId = Object(_.K)("accordion"),
                this.resizeHandler = this.onResize.bind(this),
                window.addEventListener(_.u.RESIZE, this.resizeHandler),
                window.addEventListener("orientationchange", this.resizeHandler))
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return t.isOpen !== this.state.isOpen
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                var e = this.state.isOpen ? this.collapsableElement.scrollHeight : 0;
                this.collapsableElement.style.maxHeight = e + "px"
            }
        }, {
            key: "onResize",
            value: function() {
                _.T && window.innerWidth !== this.windowDimensions.width && (this.naturalHeight = this.collapsableElement.children[0].clientHeight,
                this.forceUpdate(),
                this.windowDimensions = {
                    width: window.innerWidth,
                    height: window.innerHeight
                })
            }
        }, {
            key: "toggle",
            value: function() {
                this.setState({
                    isOpen: !this.state.isOpen
                })
            }
        }, {
            key: "onKeyPress",
            value: function(e) {
                (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) && (e.preventDefault(),
                this.toggle(),
                this.state.isOpen && this.collapsableElement.focus())
            }
        }, {
            key: "getToggleClass",
            value: function(e) {
                var t = [wt.a["accordion".concat(e)]];
                return this.state.isOpen && t.push(wt.a["accordion".concat(e, "IsOpen")]),
                t.join(" ")
            }
        }, {
            key: "getTabIndex",
            value: function() {
                return this.state.isOpen ? 0 : -1
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.title
                  , o = t.anchor
                  , a = this.state.isOpen
                  , r = kt()({
                    class: wt.a.accordion,
                    id: o
                });
                return Object(i.h)("section", l()({}, r), Object(i.h)("div", {
                    "aria-controls": this.uniqueId,
                    "aria-expanded": "".concat(a),
                    class: this.getToggleClass(gt.Header),
                    onClick: function() {
                        return e.toggle()
                    },
                    onKeyPress: function(t) {
                        return e.onKeyPress(t)
                    },
                    ref: function(t) {
                        return e.headerElement = t
                    },
                    role: "button",
                    "data-g-on": "click",
                    "data-g-event-category": "Accordion",
                    "data-g-event-label": "Toggle accordion",
                    "data-g-event-action": "click",
                    tabIndex: 0
                }, Object(i.h)("h5", null, n), Object(i.h)(C, {
                    "aria-hidden": "true"
                }, "keyboard_arrow_down")), Object(i.h)("div", {
                    ref: function(t) {
                        return e.collapsableElement = t
                    },
                    class: this.getToggleClass(gt.Body),
                    key: this.uniqueId
                }, this.props.children))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && (window.removeEventListener(_.u.RESIZE, this.resizeHandler),
                window.removeEventListener("orientationchange", this.resizeHandler))
            }
        }]),
        t
    }(i.Component)
      , Ct = n(18)
      , Mt = n.n(Ct)
      , Ht = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Lt = function(e, t) {
        return e.map((function(e) {
            return t ? Object(i.h)(_t, {
                title: e.heading,
                anchor: e.anchor
            }, Object(i.h)("div", {
                class: Mt.a.accordionBodyWrapper
            }, Object(i.h)(Ot, {
                classNames: "".concat(Mt.a.infoRaw)
            }, e.description))) : Object(i.h)("div", {
                class: "".concat(Mt.a.travelAccordionBlock)
            }, Object(i.h)("div", {
                class: "".concat(Mt.a.travelAccordionHeading)
            }, Object(i.h)("h3", null, e.heading)), Object(i.h)("div", null, Object(i.h)(Ot, {
                classNames: "".concat(Mt.a.infoRaw)
            }, e.description)))
        }
        ))
    }
      , Tt = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen
                  , t = e.isLessThanLaptop
                  , n = e.isLessThanDesktop;
                return Object(i.h)(i.Fragment, null, Object(i.h)("div", {
                    class: Object(_.U)("grid", Mt.a.localTravelInfoSection)
                }, Object(i.h)("div", {
                    class: "col-6-lg col-offset-1-lg"
                }, n && Object(i.h)("section", {
                    class: Object(_.U)(Mt.a.photoSection)
                }, Object(i.h)("div", {
                    className: Object(_.U)("col-3", Mt.a.imageWrapper)
                }, Object(i.h)(st, {
                    shape: tt.SemiCircle,
                    rotation: nt.Bottom,
                    src: at.a.travel.info.accordionsGroup2.imageLeft.src,
                    src2x: at.a.travel.info.accordionsGroup2.imageLeft.src2x
                })), Object(i.h)("div", {
                    className: Mt.a.upperShapeGroupMobile
                }, Object(i.h)("div", {
                    className: Mt.a.shapeRow
                }, Object(i.h)(Ee, {
                    width: "100%",
                    type: Ce.TriRect,
                    color: Me.Red,
                    rotation: 90
                })), Object(i.h)(Ee, {
                    width: "100%",
                    type: Ce.QuadCircles,
                    color: Me.Yellow
                }))), Lt(at.a.travel.info.accordionsGroup1.items, t)), !n && Object(i.h)("div", {
                    class: Object(_.U)("col-3-lg col-offset-8-lg", Mt.a.shapeSection)
                }, Object(i.h)("div", null, Object(i.h)(Ee, {
                    type: Ce.FruitPlatter,
                    color: Me.Red,
                    classes: Mt.a.shape,
                    width: "90%"
                })), Object(i.h)("div", {
                    class: "fullWidth"
                }, Object(i.h)(Ee, {
                    type: Ce.Lattice,
                    color: Me.Green,
                    width: "45%",
                    classes: Mt.a.shape
                })), Object(i.h)("div", {
                    class: Object(_.U)(Mt.a.fullWidth, "flexEnd")
                }, Object(i.h)(Ee, {
                    type: Ce.QuadCircles,
                    color: Me.Blue,
                    width: "45%",
                    classes: Mt.a.shape
                })), Object(i.h)("div", null, Object(i.h)(Ee, {
                    type: Ce.DoubleNoodle,
                    color: Me.Yellow,
                    width: "90%"
                }))), Object(i.h)("div", {
                    class: "grid"
                }, !n && Object(i.h)("div", {
                    class: Object(_.U)("col-4-lg col-offset-1-lg", Mt.a.semiCircleImage)
                }, Object(i.h)(st, {
                    shape: tt.SemiCircle,
                    rotation: nt.Bottom,
                    src: at.a.travel.info.accordionsGroup2.imageLeft.src,
                    src2x: at.a.travel.info.accordionsGroup2.imageLeft.src2x
                })), Object(i.h)("div", {
                    class: "col-6-lg col-offset-5-lg"
                }, Lt(at.a.travel.info.accordionsGroup2.items, t))), Object(i.h)("div", {
                    class: Object(_.U)("grid")
                }, function(e) {
                    return e ? null : Object(i.h)("div", {
                        class: Object(_.U)("col-3-lg col-offset-1-lg", Mt.a.shapeSection, Mt.a.rideShapeSection)
                    }, Object(i.h)(Ee, {
                        type: Ce.QuadRect,
                        color: Me.Green,
                        classes: Mt.a.shape,
                        width: "42%"
                    }), Object(i.h)("div", {
                        class: "spaceBetween"
                    }, Object(i.h)(Ee, {
                        type: Ce.Noodle,
                        color: Me.Yellow,
                        classes: Mt.a.shape,
                        width: "42%"
                    }), Object(i.h)(Ee, {
                        type: Ce.Sprinkler,
                        color: Me.Blue,
                        strokeWidth: 2,
                        classes: Mt.a.shape,
                        width: "42%"
                    })), Object(i.h)("div", {
                        class: "flexEnd"
                    }, Object(i.h)(Ee, {
                        type: Ce.XMarksTheSpot,
                        color: Me.Red,
                        classes: Mt.a.shape,
                        width: "42%"
                    })))
                }(n), Object(i.h)("div", {
                    class: "col-6-lg col-offset-5-lg"
                }, Lt(at.a.travel.info.accordionsGroup3.items, t)))))
            }
        }]),
        t
    }(i.Component);
    Tt = Ht([Object(w.b)("UIStore"), w.c], Tt);
    var At = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , It = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("section", null, Object(i.h)(Te, null), Object(i.h)(ut, {
                    heroInfo: at.a.travel.hero,
                    type: "Travel",
                    isLessThanDesktop: e
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-8-lg col-3-lg col-4", Mt.a.travelHeroShapes)
                }, Object(i.h)("div", {
                    class: Mt.a.heroImage
                }, Object(i.h)(st, {
                    shape: tt.Circle,
                    src: "".concat(at.a.travel.hero.maskedImage.src),
                    src2x: "".concat(at.a.travel.hero.maskedImage.src2x),
                    alt: "".concat(at.a.travel.hero.maskedImage.alt)
                })), Object(i.h)("div", {
                    class: Mt.a.heroShape
                }, Object(i.h)(Ee, {
                    type: Ce.TwoBirds,
                    color: Me.Blue,
                    width: "100%"
                })))), Object(i.h)("div", {
                    class: Object(_.U)(Mt.a.gettingToIO)
                }, Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("h1", {
                    class: Object(_.U)(Mt.a.gettingToIoTitle, "col-offset-1-lg col-10-lg col-4")
                }, at.a.travel.info.title), Object(i.h)("div", {
                    class: "col-offset-1-lg col-10-lg col-4"
                }, Object(i.h)("iframe", {
                    title: "I/O 2020 Hotel Map",
                    "aria-label": "I/O 2020 Hotel Map",
                    src: at.a.travel.hotelMap,
                    frameBorder: "0",
                    width: "100%",
                    height: "550"
                }))), Object(i.h)("div", {
                    class: "".concat(Mt.a.travelInfo)
                }, Object(i.h)("div", {
                    class: "".concat(Mt.a.travelInfo, " grid")
                }, at.a.travel.info.items.map((function(e, t) {
                    return Object(i.h)("div", {
                        class: "".concat(Mt.a.travelInfoHeading, " ").concat(t % 2 == 0 ? "col-offset-1-lg" : "", " col-5-lg col-4")
                    }, Object(i.h)("h3", {
                        class: Mt.a.travelInfoColHeading
                    }, e.heading), Object(i.h)("div", null, Object(i.h)(Ot, {
                        classNames: "".concat(Mt.a.infoRaw)
                    }, e.description)))
                }
                ))))), Object(i.h)(Tt, {
                    content: at.a.travel
                }))
            }
        }]),
        t
    }(i.Component);
    It = At([Object(w.b)("UIStore")], It);
    var xt = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Dt = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("div", {
                    class: "page"
                }, Object(i.h)(Te, null), function(e) {
                    var t = at.a.hero;
                    return Object(i.h)("section", {
                        class: Object(_.U)(vt.a.attendingHero)
                    }, Object(i.h)("div", {
                        class: "grid"
                    }, Object(i.h)("div", {
                        class: Object(_.U)("col-offset-1-lg col-3-lg col-4", vt.a.heroIcon)
                    }, Object(i.h)(Ee, {
                        type: Ce.Radial,
                        color: Me.Yellow,
                        strokeWidth: e ? 2 : 1,
                        height: e ? "44vw" : "328px",
                        width: e ? "44vw" : "328px"
                    })), Object(i.h)("div", {
                        class: Object(_.U)("col-offset-5-lg col-7-lg col-4", vt.a.heroText, vt.a.attendingHeroText)
                    }, Object(i.h)("h2", null, t.title))))
                }(e), Object(i.h)(et, {
                    classNames: vt.a.tabs,
                    basePath: "/io/attending",
                    defaultTabSlug: "event",
                    tabItems: at.a.tabs,
                    gaCategory: "Attending",
                    type: Ve.Routed
                }, Object(i.h)(S.e, null, Object(i.h)(S.b, {
                    path: "".concat("/io/attending", "/").concat(at.a.tabs[0].slug),
                    component: ft
                }), Object(i.h)(S.b, {
                    path: "".concat("/io/attending", "/").concat(at.a.tabs[1].slug),
                    component: It
                }), Object(i.h)(S.b, {
                    exact: !0,
                    path: "".concat("/io/attending"),
                    component: ft
                }))), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component);
    Dt = xt([Object(w.b)("UIStore"), w.c], Dt);
    var Rt = n(135)
      , Et = n.n(Rt)
      , Pt = n(53)
      , Bt = n.n(Pt)
      , Ut = n(68)
      , Ft = n.n(Ut)
      , Nt = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Wt = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderContent",
            value: function() {
                var e = this.props
                  , t = e.title
                  , n = e.button
                  , o = e.bannerImageSrc
                  , a = e.backgroundImage;
                return Object(i.h)("div", null, Object(i.h)("div", {
                    class: Ft.a.cardContent
                }, t && Object(i.h)("h4", {
                    class: "".concat(Ft.a.cardTitle)
                }, t), this.props.children), o && Object(i.h)("div", {
                    class: Ft.a.cardBanner
                }, Object(i.h)("div", {
                    class: Ft.a.cardRatio
                }, Object(i.h)(We, {
                    src: o,
                    classNames: Ft.a.cardBannerImage,
                    ariaHidden: !0
                }))), n && Object(i.h)("div", {
                    class: Ft.a.button
                }, n), a && Object(i.h)("div", {
                    class: Ft.a.backgroundImage
                }, a))
            }
        }, {
            key: "onKeyPress",
            value: function(e) {
                var t = this.props.onClick;
                t ? (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) && t(e) : e.preventDefault()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.ariaRole
                  , o = t.ariaLabel
                  , a = t.classNames
                  , r = t.href
                  , s = t.external
                  , l = t.onClick
                  , c = t.gaCategory
                  , u = t.gaLabel
                  , d = t.routerLinkWrapperClassnames;
                return r ? Object(i.h)(U, {
                    isRouterLink: !s,
                    ariaLabel: o,
                    onClick: l,
                    href: r,
                    role: n,
                    classNames: Object(_.U)(Ft.a.card, a),
                    routerLinkWrapperClassnames: !s && d,
                    external: s,
                    gaCategory: c,
                    gaLabel: u || o
                }, this.renderContent()) : Object(i.h)("div", {
                    "aria-label": o,
                    tabIndex: l && 0,
                    onClick: l,
                    onKeyPress: function(t) {
                        return e.onKeyPress(t)
                    },
                    role: n,
                    class: Object(_.U)(Ft.a.card, a),
                    "data-g-on": l && "click",
                    "data-g-event-category": l && (c || this.props.location.pathname),
                    "data-g-event-label": l && u,
                    "data-g-event-action": l && "click"
                }, this.renderContent())
            }
        }]),
        t
    }(i.Component);
    Wt = Nt([S.h], Wt);
    var Gt = n(106)
      , Vt = n.n(Gt)
      , zt = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "hasBulletStyle",
            value: function() {
                return "topic" === this.props.category || "type" === this.props.category
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.ariaLabel
                  , n = e.ariaRole
                  , o = e.classNames
                  , a = (e.category,
                e.color)
                  , r = e.fontColor
                  , s = e.label
                  , l = (e.tag,
                e.toggled);
                return Object(i.h)("span", {
                    "aria-label": t || s,
                    role: n,
                    className: "".concat(o, " ").concat(Vt.a.tag, " ").concat(this.hasBulletStyle() && Vt.a.bullet, " ").concat(l && Vt.a.toggled),
                    style: l && {
                        backgroundColor: a,
                        color: r
                    }
                }, this.hasBulletStyle() && Object(i.h)("span", {
                    class: Vt.a.bulletMarker,
                    style: {
                        backgroundColor: a
                    }
                }), s, l && Object(i.h)(C, {
                    classNames: Vt.a.iconClose
                }, Object(i.h)("span", {
                    style: {
                        color: r
                    }
                }, "close")))
            }
        }]),
        t
    }(i.Component);
    zt.defaultProps = {
        toggled: !1
    };
    var qt = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Zt = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.SessionStore;
                return Object(i.h)("div", {
                    class: "".concat(Bt.a.codelabs, " page")
                }, Object(i.h)(Te, null), Object(i.h)("section", {
                    class: "grid"
                }, Object(i.h)("h2", {
                    class: "d3 col-10-lg col-offset-1-lg ".concat(Bt.a.codelabsTitle)
                }, Et.a.title)), Object(i.h)("section", {
                    className: "grid"
                }, Object(i.h)("div", {
                    className: "h6 col-10-lg col-offset-1-lg ".concat(Bt.a.codelabsSubtitle)
                }, Et.a.subtitle), Object(i.h)("div", {
                    className: "h6 col-10-lg col-offset-1-lg ".concat(Bt.a.codelabsCta)
                }, Object(i.h)(re, {
                    type: J.Hairline,
                    href: "https://g.co/io/codelabs",
                    external: !0
                }, "See all codelabs"))), Object(i.h)("section", {
                    role: "list",
                    "aria-label": Et.a.codelabsCardsLabel,
                    className: "grid ".concat(Bt.a.codelabsCards)
                }, e.codelabs.map((function(e) {
                    return Object(i.h)(U, {
                        href: e.url,
                        classNames: "col-4-lg ".concat(Bt.a.cardLink),
                        external: !0
                    }, Object(i.h)(Wt, {
                        classNames: Bt.a.card,
                        ariaRole: "listitem"
                    }, Object(i.h)(We, {
                        classNames: Bt.a.cardIcon,
                        src: e.icon_url
                    }), Object(i.h)("div", {
                        class: Bt.a.cardMeta
                    }, Object(i.h)("h5", {
                        className: Bt.a.cardTitle
                    }, e.title), Object(i.h)("span", null, "Duration: ", e.duration, "min"), Object(i.h)("span", {
                        class: Bt.a.cardMetaTags
                    }, e.tags.filter((function(e) {
                        return "type" !== e.category
                    }
                    )).map((function(e) {
                        return Object(i.h)(zt, {
                            category: e.category,
                            color: e.color,
                            fontColor: e.fontColor,
                            label: e.name,
                            tag: e.tag
                        })
                    }
                    )))), Object(i.h)("div", null, e.description)))
                }
                ))), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component);
    Zt = qt([Object(w.b)("SessionStore"), w.c], Zt);
    var Kt = n(59)
      , Yt = n.n(Kt)
      , Jt = n(60)
      , Xt = n.n(Jt)
      , Qt = function(e) {
        var t = e.data;
        return Object(i.h)(U, {
            classNames: Xt.a.devGetPartner,
            href: t.href,
            external: !0
        }, Object(i.h)("header", {
            class: Xt.a.devGetPartnerHeader
        }, Object(i.h)(We, {
            src: t.logo,
            alt: t.name
        })), Object(i.h)("div", {
            class: Xt.a.devGetPartnerDetails
        }, Object(i.h)("h6", null, t.name), Object(i.h)("p", null, t.body), Object(i.h)("div", null, Object(i.h)("span", null, t.name))))
    }
      , $t = (i.Component,
    n(69))
      , en = n.n($t)
      , tn = n(32)
      , nn = n.n(tn)
      , on = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , an = function(e, t) {
        var n = {};
        for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
                t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
        }
        return n
    }
      , rn = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen
                  , t = e.isLessThanDesktop;
                e.isMobile;
                return Object(i.h)("div", {
                    class: "page"
                }, Object(i.h)(Te, null), Object(i.h)("section", {
                    class: "".concat(nn.a.hero, " grid")
                }, Object(i.h)("h1", {
                    class: "col-4 col-offset-1-lg col-8-lg"
                }, en.a.title)), function(e) {
                    return e ? Object(i.h)("section", {
                        class: Object(_.U)(nn.a.photoSection)
                    }, Object(i.h)("div", {
                        className: Object(_.U)("col-3", nn.a.imageWrapper)
                    }, Object(i.h)(We, {
                        src: en.a.image.src,
                        src2x: en.a.image.src2x
                    })), Object(i.h)("div", {
                        className: nn.a.upperShapeGroupMobile
                    }, Object(i.h)("div", {
                        className: nn.a.shapeRow
                    }, Object(i.h)(Ee, {
                        width: "100%",
                        type: Ce.QuadRect,
                        color: Me.Blue,
                        rotation: 90
                    })), Object(i.h)(Ee, {
                        width: "100%",
                        type: Ce.RingPop,
                        color: Me.Yellow,
                        rotation: 90
                    }))) : Object(i.h)("section", {
                        class: Object(_.U)("grid", nn.a.photoSection)
                    }, Object(i.h)("div", {
                        className: Object(_.U)("col-7-lg col-offset-1-lg", nn.a.imageWrapper)
                    }, Object(i.h)(We, {
                        src: en.a.image.src,
                        src2x: en.a.image.src2x
                    })), Object(i.h)("div", {
                        className: "col-3-lg col-offset-9-lg"
                    }, Object(i.h)("div", {
                        className: Object(_.U)("spaceBetween", nn.a.shapeRow)
                    }, Object(i.h)(Ee, {
                        width: "43%",
                        type: Ce.QuadRect,
                        color: Me.Blue
                    }), Object(i.h)(Ee, {
                        width: "43%",
                        type: Ce.RingPop,
                        color: Me.Yellow
                    })), Object(i.h)(Ee, {
                        width: "100%",
                        type: Ce.PickUpSticks,
                        color: Me.Red
                    })))
                }(t), Object(i.h)("section", {
                    class: "grid"
                }, !t && Object(i.h)("div", {
                    className: Object(_.U)("col-3-lg", nn.a.lowerShapeGroup)
                }, Object(i.h)("div", {
                    className: nn.a.shapeRow
                }, Object(i.h)(Ee, {
                    width: "38%",
                    type: Ce.TwoBirds,
                    color: Me.Green
                })), Object(i.h)("div", {
                    className: Object(_.U)("spaceBetween", nn.a.shapeRow)
                }, Object(i.h)(Ee, {
                    rotation: -90,
                    width: "38%",
                    type: Ce.DoubleSemiCircle,
                    color: Me.Red
                }), Object(i.h)(Ee, {
                    width: "38%",
                    type: Ce.Lattice,
                    rotation: 90,
                    color: Me.Blue
                })), Object(i.h)("div", {
                    className: Object(_.U)("flexEnd", nn.a.shapeRow)
                }, Object(i.h)(Ee, {
                    width: "38%",
                    type: Ce.XMarksTheSpot,
                    color: Me.Yellow
                }))), Object(i.h)("div", {
                    class: "".concat(nn.a.centerBlockAside, " col-7-lg col-offset-4-lg")
                }, Object(i.h)("h2", null, en.a.aside.subtitle), t && Object(i.h)("div", {
                    className: nn.a.hiddenPickUpSticks
                }, Object(i.h)(Ee, {
                    width: "50%",
                    type: Ce.PickUpSticks,
                    color: Me.Red
                })), Object(i.h)("div", {
                    class: "".concat(nn.a.host)
                }, Object(i.h)("h3", null, en.a.host.title), Object(i.h)("p", null, en.a.host.description), Object(i.h)("div", {
                    className: nn.a.hostButtons
                }, en.a.host.buttons.map((function(e) {
                    var t = e.label
                      , n = an(e, ["label"]);
                    return Object(i.h)(re, l()({
                        gaCategory: "Extended",
                        gaLabel: t,
                        classNames: nn.a.button
                    }, n), t)
                }
                ))), Object(i.h)("div", {
                    class: "".concat(nn.a.blueSemicircle, " col-offset-8-lg col-4-lg hiddenLtDesktop"),
                    "aria-hidden": "true"
                })))), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component);
    rn = on([Object(w.b)("UIStore"), w.c], rn);
    var sn = n(11)
      , ln = n.n(sn)
      , cn = n(16)
      , un = n.n(cn)
      , dn = n(136)
      , hn = n.n(dn)
      , pn = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , fn = {
        center: {
            lat: 39.8282,
            lng: -98.5795
        },
        scrollwheel: !1,
        zoom: 2,
        zoomControl: !0,
        minZoom: 2,
        mapTypeControl: !1,
        scaleControl: !1,
        streetViewControl: !1,
        rotateControl: !1,
        fullscreenControl: !1
    }
      , gn = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                formDisabled: !0
            },
            e.marker = null,
            e.markers = [],
            e
        }
        var n;
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: (n = un()(ln.a.mark((function e() {
                var t = this;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (_.T) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4,
                            this.props.MapStore.loadAPI();
                        case 4:
                            this.map = new google.maps.Map(this.mapElement,fn),
                            this.autocomplete = new google.maps.places.Autocomplete(this.searchElement),
                            this.onPlaceChangeListener = google.maps.event.addListener(this.autocomplete, "place_changed", (function(e) {
                                return t.onPlaceChange(e)
                            }
                            )),
                            this.props.markerData && this.populateMarkers();
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.map && (this.onPlaceChangeListener.remove(),
                this.removeMarkers())
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.props.markerData && this.populateMarkers()
            }
        }, {
            key: "removeMarkers",
            value: function() {
                this.markers.forEach((function(e) {
                    google.maps.event.clearInstanceListeners(e),
                    e.setMap(null)
                }
                ))
            }
        }, {
            key: "populateMarkers",
            value: function() {
                var e = this;
                if (this.map) {
                    this.removeMarkers();
                    var t, n = this.props.markerData, o = function(e) {
                        var t = e.url ? '<a data-g-on="click"\n              data-g-event-category="Live map"\n              data-g-event-label="'.concat(e.url, '"\n              data-g-event-action="click" class="googlemap__infowindow-link" target="_blank" href="').concat(e.url, '">View details</a>') : "";
                        return '\n      <div class="googlemap__infowindow">\n        <div class="googlemap__infowindow-title">'.concat(e.title, "</div>\n        ").concat(t, "\n      </div>")
                    };
                    n.forEach((function(n) {
                        var a = new google.maps.Marker({
                            position: n.position,
                            map: e.map,
                            title: n.title,
                            icon: n.icon,
                            zIndex: n.zIndex || 0
                        });
                        a.addListener("click", (function() {
                            t && t.close(),
                            (t = new google.maps.InfoWindow({
                                content: o(n)
                            })).open(e.map, a)
                        }
                        )),
                        e.markers.push(a)
                    }
                    ))
                }
            }
        }, {
            key: "onPlaceChange",
            value: function(e) {
                var t = this.autocomplete.getPlace();
                t && t.geometry && (t.geometry.viewport ? this.map.fitBounds(t.geometry.viewport) : (this.map.setCenter(t.geometry.location),
                this.map.setZoom(9)),
                this.marker && this.marker.setMap(null),
                this.marker = new google.maps.Marker({
                    draggable: !0,
                    position: t.geometry.location,
                    map: this.map
                }),
                this.props.onPlaceChanged && this.props.onPlaceChanged(this.autocomplete.getPlace(), e))
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.mapWrapperClasses
                  , a = t.inputClasses
                  , r = t.showSearchIcon
                  , s = t.placeholder
                  , l = void 0 === s ? "Enter location" : s;
                return Object(i.h)("section", {
                    class: Object(_.U)(hn.a.map, n)
                }, Object(i.h)("div", {
                    class: a
                }, Object(i.h)("input", {
                    ref: function(t) {
                        return e.searchElement = t
                    },
                    placeholder: l
                }), r && Object(i.h)(C, null, "search")), Object(i.h)("div", {
                    class: Object(_.U)(hn.a.wrapper, o)
                }, Object(i.h)("div", {
                    class: hn.a.mapElement,
                    ref: function(t) {
                        return e.mapElement = t
                    }
                })), this.props.children)
            }
        }]),
        t
    }(i.Component);
    gn = pn([Object(w.b)("MapStore")], gn);
    var bn = n(47)
      , vn = n.n(bn)
      , mn = n(36)
      , yn = n.n(mn)
      , On = (i.Component,
    n(211))
      , jn = n.n(On)
      , kn = n(212)
      , Sn = n.n(kn)
      , wn = n(137)
      , _n = n.n(wn)
      , Cn = n(138)
      , Mn = n.n(Cn)
      , Hn = function(e) {
        return Object(i.h)("section", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "".concat(Mn.a.faqSection, " col-10-lg col-offset-1-lg")
        }, e.include.map((function(e) {
            return Object(i.h)("div", {
                class: Mn.a.faqGroup
            }, _n.a[e].heading && Object(i.h)("h2", null, _n.a[e].heading), _n.a[e].items.map((function(e) {
                return Object(i.h)(_t, {
                    title: e.title,
                    anchor: e.id
                }, Object(i.h)(Ot, {
                    classNames: Mn.a.faqRaw
                }, e.body))
            }
            )))
        }
        ))))
    }
      , Ln = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)("div", {
                    class: "page ".concat(Sn.a.faqPage)
                }, Object(i.h)("header", {
                    class: "grid"
                }, Object(i.h)("h1", {
                    class: "d3 col-9-lg col-offset-1-lg"
                }, jn.a.title)), Object(i.h)(Hn, {
                    include: ["Canceled"],
                    hideHeading: !0
                }))
            }
        }]),
        t
    }(i.Component)
      , Tn = n(15)
      , An = n.n(Tn)
      , In = n(13)
      , xn = n(12)
      , Dn = function(e, t, n, o) {
        var a = function(e, t, n, o) {
            return Math.atan2(n - e, o - t)
        }(e, t, n, o) * (-180 / Math.PI);
        return a < 0 && (a = 180 + (180 + a)),
        a
    }
      , Rn = n(61)
      , En = n.n(Rn)
      , Pn = _.T && "ontouchstart"in window || (_.T && navigator.msMaxTouchPoints || _.T && navigator.maxTouchPoints) > 2
      , Bn = function(e, t, n) {
        if (!e || !e.getBoundingClientRect)
            return 0;
        var o, a, r, i, s = e.getBoundingClientRect(), l = s.left + s.width / 2, c = s.top + s.height / 2;
        return o = t[0],
        a = t[1],
        r = l,
        i = c,
        Math.sqrt(Math.pow(o - r, 2) + Math.pow(a - i, 2)) > s.width * n ? 0 : Dn(t[0], t[1], l, c)
    }
      , Un = Object(xn.h)((function(e) {
        var t = e.label
          , n = e.labelColor
          , o = e.shapeCount
          , a = e.color
          , r = e.bgColor
          , s = e.strokeColor
          , l = e.shape
          , c = e.activeShapeCount
          , u = e.onClick
          , d = e.className
          , h = e.gridName
          , p = e.shapeName
          , f = e.labelPosition
          , g = void 0 === f ? 1 : f
          , b = e.enableKeyboardFocus
          , v = e.triggerDistance
          , m = void 0 === v ? 1.5 : v
          , y = new Array(o).fill(null)
          , O = Object(In.j)([0, 0])
          , j = An()(O, 2)
          , k = j[0]
          , S = j[1]
          , w = Object(In.j)("".concat(c))
          , C = An()(w, 2)
          , M = C[0]
          , H = C[1]
          , L = Object(In.i)()
          , T = function(e) {
            e.preventDefault();
            var t = e.targetTouches ? e.targetTouches[0].pageX : e.pageX
              , n = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            S([t, n - window.scrollY])
        };
        Object(In.f)((function() {
            H(1 === c.toString().split("").length ? "0".concat(c) : "".concat(c))
        }
        ), [c]);
        var A = l;
        return Object(i.h)("div", {
            className: Object(_.U)(En.a.ShapeGrid, En.a["ShapeGrid__".concat(g)], d)
        }, t && Object(i.h)("h3", {
            className: Object(_.U)(En.a.ShapeGrid__label, En.a["ShapeGrid__label--".concat(g)]),
            style: {
                color: n
            },
            "aria-hidden": "true"
        }, M, " ", t), Object(i.h)("div", {
            className: Object(_.U)(En.a.ShapeGrid__shapes, En.a["ShapeGrid__shapes--".concat(h)], b && En.a["ShapeGrid__shapes--keyfocus"]),
            onMouseMove: Pn ? null : T,
            onTouchMove: T,
            onClick: u,
            onKeyDown: function(e) {
                e.keyCode !== bo.ENTER && e.keyCode !== bo.SPACE || u()
            },
            ref: L,
            tabIndex: 0,
            role: "button",
            "aria-label": "Activate to change the abstract visual representation of ".concat(t)
        }, y.map((function(e, t) {
            var n = function(e, t) {
                var n = Object(In.j)(null)
                  , o = An()(n, 2)
                  , a = o[0]
                  , r = o[1];
                return [a, Object(In.a)((function(n) {
                    null !== n && r(Bn(n, e, t))
                }
                ), [e])]
            }(k, m)
              , o = An()(n, 2)
              , l = o[0]
              , u = o[1];
            return Object(i.h)(A, {
                ref: u,
                color: a,
                bgColor: r,
                strokeColor: s,
                isActive: c <= t,
                triggerAngle: l,
                className: Object(_.U)(En.a.ShapeWrapper, En.a["ShapeWrapper--".concat(p)], En.a["ShapeWrapper--".concat(p, "--").concat(h)])
            })
        }
        ))))
    }
    ));
    function Fn(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : .3;
        return Math.pow(2, -10 * e) * Math.sin((e - t / 4) * (2 * Math.PI) / t) + 1
    }
    var Nn, Wn = n(39), Gn = n.n(Wn), Vn = Object(xn.h)((function(e) {
        var t = e.label
          , n = e.shapeCount
          , o = e.shape
          , a = e.shapeName
          , r = e.offset
          , s = e.color
          , l = e.labelColor
          , c = e.currentTime
          , u = e.onClick
          , d = e.className
          , h = e.labelPosition
          , p = void 0 === h ? 1 : h
          , f = e.enableKeyboardFocus
          , g = Object(In.i)(null)
          , b = Object(In.j)(null)
          , v = An()(b, 2)
          , m = v[0]
          , y = v[1]
          , O = Object(In.j)("undefined" != typeof window ? window.innerWidth : 0)
          , j = An()(O, 2)
          , k = j[0]
          , S = j[1]
          , w = Object(In.j)(!1)
          , C = An()(w, 2)
          , M = C[0]
          , H = C[1]
          , L = Object(In.j)(!1)
          , T = An()(L, 2)
          , A = T[0]
          , I = T[1]
          , x = Object(In.j)(0)
          , D = An()(x, 2)
          , R = D[0]
          , E = D[1]
          , P = Object(In.j)([0, 0])
          , B = An()(P, 2)
          , U = B[0]
          , F = B[1]
          , N = Object(In.j)(null)
          , W = An()(N, 2)
          , G = W[0]
          , V = W[1]
          , z = Object(In.j)(0)
          , q = An()(z, 2)
          , Z = q[0]
          , K = q[1]
          , Y = Object(In.j)(new Array(n).fill(null))
          , J = An()(Y, 2)
          , X = J[0]
          , Q = J[1]
          , $ = Object(In.j)([0, 0])
          , ee = An()($, 2)
          , te = ee[0]
          , ne = ee[1]
          , oe = Object(In.i)()
          , ae = Object(In.j)("".concat(c))
          , re = An()(ae, 2)
          , ie = re[0]
          , se = re[1]
          , le = function() {
            S(window.innerWidth)
        }
          , ce = function() {
            requestAnimationFrame(le)
        };
        Object(In.f)((function() {
            ce(),
            window.addEventListener("resize", ce)
        }
        ), []),
        Object(In.f)((function() {
            y(g.current.getBoundingClientRect()),
            ne([oe.current.getBoundingClientRect().width, oe.current.getBoundingClientRect().height])
        }
        ), [o, n, k]),
        Object(In.f)((function() {
            var e = new Array(n).fill(null);
            Q(e.map((function(e, t) {
                return o = m ? m.width / 2 : 0,
                a = t / n,
                i = r ? te[0] : te[0] / 2.5,
                s = r ? te[1] : 0,
                c = (l = 360 * a) * Math.PI / 180,
                u = i * Math.cos(c) + s * Math.sin(c),
                d = -s * Math.cos(c) + i * Math.sin(c),
                {
                    left: "".concat(u + o, "px"),
                    position: "absolute",
                    top: "".concat(d + o, "px"),
                    transform: "translate(-50%, -50%) rotate(".concat(l, "deg)"),
                    transformOrigin: "50% 50%"
                };
                var o, a, i, s, l, c, u, d
            }
            )))
        }
        ), [te]);
        var ue = function(e) {
            H(!0),
            K(0),
            V(R);
            var t = e.targetTouches ? e.targetTouches[0].pageX : e.pageX
              , n = e.targetTouches ? e.targetTouches[0].pageY : e.pageY;
            F([t, n - window.scrollY])
        }
          , de = function() {
            H(!1),
            E(G),
            V(null)
        }
          , he = function(e) {
            if (M && m) {
                e.preventDefault();
                var t, n = e.targetTouches ? e.targetTouches[0].pageX : e.pageX, o = e.targetTouches ? e.targetTouches[0].pageY : e.pageY, a = o - window.scrollY, r = n - U[0], i = a - U[1], s = Math.abs(r) > Math.abs(i) ? r : i, l = Math.abs(r) > Math.abs(i) ? 0 : 1;
                0 === l ? t = a <= m.top + m.height / 2 ? 1 : -1 : 1 === l && (t = n <= m.left + m.width / 2 ? -1 : 1);
                var c = s * t / 2
                  , u = G ? G + c : R + c;
                K(Z + Math.max(Math.abs(c), t)),
                V(u),
                F([n, o])
            }
        }
          , pe = function() {
            I(!1),
            K(0)
        }
          , fe = function(e) {
            if (!M && !A) {
                I(!0);
                var t = performance.now()
                  , n = 750 + Z;
                !function o() {
                    var a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                      , r = a - t
                      , i = Math.min(r / n, 1)
                      , s = Fn(i, .5) * (R + 10 + Z - e) + e;
                    E(s),
                    r <= n && !M ? requestAnimationFrame(o) : requestAnimationFrame(pe)
                }(t)
            }
        };
        Object(In.d)((function() {
            M || A || (K(0),
            fe(R)),
            se(1 === c.toString().split("").length ? "0".concat(c) : "".concat(c))
        }
        ), [c]),
        Object(In.d)((function() {
            M || fe(R)
        }
        ), [M]);
        var ge = o;
        return Object(i.h)("div", {
            className: Object(_.U)(Gn.a.ShapeWheel, d)
        }, t && Object(i.h)("h3", {
            className: Object(_.U)(Gn.a.ShapeWheel__label, Gn.a["ShapeWheel__label--".concat(p)]),
            style: {
                color: l
            },
            "aria-hidden": "true"
        }, ie, " ", t), Object(i.h)("div", {
            className: Gn.a["ShapeWheel__layout-wrapper"]
        }, Object(i.h)("div", {
            className: Object(_.U)(Gn.a["ShapeWheel__interaction-wrapper"], f && Gn.a["ShapeWheel__interaction-wrapper--keyfocus"]),
            ref: g,
            onMouseMove: he,
            onTouchMove: he,
            onMouseEnter: ue,
            onTouchStart: ue,
            onMouseLeave: de,
            onTouchEnd: de,
            onClick: u,
            onKeyDown: function(e) {
                e.keyCode !== bo.ENTER && e.keyCode !== bo.SPACE || u()
            },
            tabIndex: 0,
            role: "button",
            "aria-label": "Activate to change the abstract visual representation of ".concat(t)
        }, Object(i.h)("div", {
            className: Gn.a["ShapeWheel__sizeref-wrapper"]
        }, Object(i.h)("span", {
            className: Object(_.U)(Gn.a.ShapeWheel__sizeref, Gn.a["ShapeWheel__sizeref--".concat(a)]),
            ref: oe
        }, Object(i.h)(ge, {
            className: Gn.a.ShapeWheel__sizeref__shape
        }))), Object(i.h)("div", {
            className: Gn.a.ShapeWheel__wheel,
            style: {
                height: m ? "".concat(m.width, "px") : "auto",
                transform: "rotate(".concat(G || R, "deg)")
            }
        }, X.map((function(e, t) {
            return Object(i.h)("div", {
                className: Gn.a["ShapeWheel__shape-wrapper--".concat(a)],
                style: e,
                key: t
            }, Object(i.h)(ge, {
                color: s,
                className: Object(_.U)(Gn.a["Shape--".concat(a)], Gn.a["ShapeWheel__shape--".concat(a)]),
                filled: !0
            }))
        }
        ))))))
    }
    )), zn = n(62), qn = n.n(zn), Zn = function(e, t) {
        var n = {};
        for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
                t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
        }
        return n
    }, Kn = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = void 0 === n ? "currentColor" : n
          , a = e.strokeColor
          , r = e.fillColor
          , s = e.filled
          , c = void 0 !== s && s
          , u = e.className
          , d = Zn(e, ["color", "strokeColor", "fillColor", "filled", "className"]);
        return Object(i.h)("svg", l()({
            className: Object(_.U)(qn.a.Shape, "string" == typeof u && u),
            viewBox: "0 0 120 120",
            width: "100%",
            height: "100%",
            ref: t
        }, d), Object(i.h)("path", {
            className: qn.a.Shape__path,
            stroke: a || o,
            "stroke-width": "10",
            fill: c ? o : r || "#fff",
            d: "M4 52h112v16H4z",
            "fill-rule": "evenodd"
        }))
    }
    )), Yn = Object(xn.h)(Kn), Jn = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = void 0 === n ? "currentColor" : n
          , a = (e.filled,
        e.className)
          , r = Zn(e, ["color", "filled", "className"]);
        return Object(i.h)("svg", l()({
            className: Object(_.U)(qn.a.Shape, "string" == typeof a && a),
            viewBox: "0 0 132 10",
            width: "100%",
            height: "100%",
            ref: t
        }, r), Object(i.h)("path", {
            className: qn.a.Shape__path,
            fill: o,
            d: "M0 0h132v10H0z",
            "fill-rule": "evenodd"
        }))
    }
    )), Xn = Object(xn.h)(Jn), Qn = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = void 0 === n ? "currentColor" : n
          , a = e.strokeColor
          , r = e.fillColor
          , s = e.filled
          , c = void 0 !== s && s
          , u = e.className
          , d = Zn(e, ["color", "strokeColor", "fillColor", "filled", "className"]);
        return Object(i.h)("svg", l()({
            className: Object(_.U)(qn.a.Shape, "string" == typeof u && u),
            viewBox: "0 0 120 120",
            width: "100%",
            height: "100%",
            ref: t
        }, d), Object(i.h)("path", {
            className: qn.a.Shape__path,
            d: "M5 115C5 54.345 54.344 5 115 5v24.049c-47.397 0-85.952 38.562-85.952 85.951H5z",
            stroke: a || o,
            "stroke-width": "10",
            fill: c ? o : r || "#fff",
            "fill-rule": "evenodd"
        }))
    }
    )), $n = Object(xn.h)(Qn), eo = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = void 0 === n ? "currentColor" : n
          , a = e.strokeColor
          , r = e.fillColor
          , s = e.filled
          , c = void 0 !== s && s
          , u = e.className
          , d = Zn(e, ["color", "strokeColor", "fillColor", "filled", "className"]);
        return Object(i.h)("svg", l()({
            className: Object(_.U)(qn.a.Shape, "string" == typeof u && u),
            width: "100%",
            height: "100%",
            viewBox: "0 0 120 120",
            ref: t
        }, d), Object(i.h)("path", {
            className: qn.a.Shape__path,
            d: "M5 5h110v55H5z",
            stroke: a || o,
            "stroke-width": "10",
            fill: c ? o : r || "#fff",
            "fill-rule": "evenodd"
        }))
    }
    )), to = Object(xn.h)(eo), no = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = void 0 === n ? "currentColor" : n
          , a = e.strokeColor
          , r = e.fillColor
          , s = e.filled
          , c = void 0 !== s && s
          , u = e.className
          , d = Zn(e, ["color", "strokeColor", "fillColor", "filled", "className"]);
        return Object(i.h)("svg", l()({
            className: Object(_.U)(qn.a.Shape, "string" == typeof u && u),
            width: "100%",
            height: "100%",
            viewBox: "0 0 120 120",
            ref: t
        }, d), Object(i.h)("path", {
            className: qn.a.Shape__path,
            d: "M33 115c30.376 0 55-24.624 55-55S63.376 5 33 5v110z",
            fill: c ? o : r || "#fff",
            "fill-rule": "evenodd",
            stroke: a || o,
            "stroke-width": "10"
        }))
    }
    )), oo = Object(xn.h)(no), ao = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = e.strokeColor
          , a = (e.bgColor,
        e.className)
          , r = e.isActive
          , s = void 0 !== r && r
          , l = e.triggerAngle
          , c = void 0 === l ? 0 : l
          , u = Object(In.j)(!1)
          , d = An()(u, 2)
          , h = d[0]
          , p = d[1]
          , f = Object(In.j)(null)
          , g = An()(f, 2)
          , b = g[0]
          , v = g[1]
          , m = Object(In.j)(!0)
          , y = An()(m, 2)
          , O = y[0]
          , j = y[1]
          , k = Object(In.i)(null);
        return Object(In.d)((function() {
            !h && 0 !== c && c && (p(!0),
            O && j(!1),
            b || v(-300),
            setTimeout((function() {
                p(!1)
            }
            ), 200),
            k.current && (clearTimeout(k.current),
            k.current = null),
            k.current = setTimeout((function() {
                v(null),
                j(!0)
            }
            ), 800))
        }
        ), [c]),
        Object(i.h)("div", {
            className: a,
            style: {
                perspective: "1000px",
                perspectiveOrigin: "center"
            },
            ref: t
        }, Object(i.h)(to, {
            color: n,
            fillColor: s && o,
            strokeColor: s && o,
            filled: !s,
            style: {
                transform: "translateZ(".concat(b || 0, "px)")
            }
        }))
    }
    )), ro = Object(xn.h)(ao), io = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = e.strokeColor
          , a = (e.bgColor,
        e.className)
          , r = e.isActive
          , s = void 0 !== r && r
          , l = e.triggerAngle
          , c = void 0 === l ? 0 : l
          , u = Object(In.j)(!1)
          , d = An()(u, 2)
          , h = d[0]
          , p = d[1]
          , f = Object(In.j)(null)
          , g = An()(f, 2)
          , b = g[0]
          , v = g[1]
          , m = Object(In.j)(s ? 0 : 180)
          , y = An()(m, 2)
          , O = y[0]
          , j = y[1]
          , k = Object(In.j)(!0)
          , S = An()(k, 2)
          , w = S[0]
          , _ = S[1]
          , C = Object(In.i)(null);
        return Object(In.d)((function() {
            !h && 0 !== c && c && (p(!0),
            v(c),
            w && _(!1),
            setTimeout((function() {
                p(!1)
            }
            ), 200),
            C.current && (clearTimeout(C.current),
            C.current = null),
            C.current = setTimeout((function() {
                v(null),
                _(!0)
            }
            ), 2e3))
        }
        ), [c]),
        Object(In.d)((function() {
            j(s ? 0 : 180)
        }
        ), [s]),
        Object(i.h)("div", {
            className: a,
            ref: t
        }, Object(i.h)($n, {
            color: n,
            fillColor: s && o,
            strokeColor: s && o,
            filled: !s,
            style: {
                transform: "rotate(".concat(w ? O : -b, "deg)")
            }
        }))
    }
    )), so = Object(xn.h)(io), lo = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = e.strokeColor
          , a = (e.bgColor,
        e.className)
          , r = e.isActive
          , s = void 0 !== r && r
          , l = e.triggerAngle
          , c = void 0 === l ? 0 : l
          , u = Object(In.j)(!1)
          , d = An()(u, 2)
          , h = d[0]
          , p = d[1]
          , f = Object(In.j)(null)
          , g = An()(f, 2)
          , b = g[0]
          , v = g[1]
          , m = Object(In.j)(s ? -1 : 1)
          , y = An()(m, 2)
          , O = y[0]
          , j = y[1]
          , k = Object(In.j)(!0)
          , S = An()(k, 2)
          , w = S[0]
          , _ = S[1]
          , C = Object(In.i)(null);
        return Object(In.d)((function() {
            !h && 0 !== c && c && (p(!0),
            w && _(!1),
            v(b ? -b : -O),
            setTimeout((function() {
                p(!1)
            }
            ), 200),
            C.current && (clearTimeout(C.current),
            C.current = null),
            C.current = setTimeout((function() {
                v(null),
                _(!0)
            }
            ), 2e3))
        }
        ), [c]),
        Object(In.d)((function() {
            j(s ? -1 : 1)
        }
        ), [s]),
        Object(i.h)("div", {
            className: a,
            ref: t
        }, Object(i.h)(oo, {
            color: n,
            fillColor: s && o,
            strokeColor: s && o,
            filled: !s,
            style: {
                transform: "scaleX(".concat(w ? O : b, ")")
            }
        }))
    }
    )), co = Object(xn.h)(lo), uo = Object(xn.g)((function(e, t) {
        var n = e.color
          , o = e.strokeColor
          , a = (e.bgColor,
        e.className)
          , r = e.isActive
          , s = void 0 !== r && r
          , l = e.triggerAngle
          , c = void 0 === l ? 0 : l
          , u = Object(In.j)(!1)
          , d = An()(u, 2)
          , h = d[0]
          , p = d[1]
          , f = Object(In.j)(null)
          , g = An()(f, 2)
          , b = g[0]
          , v = g[1]
          , m = Object(In.j)(s ? -26.5 : 26.5)
          , y = An()(m, 2)
          , O = y[0]
          , j = y[1]
          , k = Object(In.j)(!0)
          , S = An()(k, 2)
          , w = S[0]
          , _ = S[1]
          , C = Object(In.i)(null);
        return Object(In.d)((function() {
            !h && 0 !== c && c && (p(!0),
            w && _(!1),
            v(b ? 180 - b : 180 - O),
            setTimeout((function() {
                p(!1)
            }
            ), 200),
            C.current && (clearTimeout(C.current),
            C.current = null),
            C.current = setTimeout((function() {
                v(null),
                _(!0)
            }
            ), 2e3))
        }
        ), [c]),
        Object(In.d)((function() {
            j(s ? -26.5 : 26.5)
        }
        ), [s]),
        Object(i.h)("div", {
            className: a,
            ref: t
        }, Object(i.h)(Yn, {
            color: n,
            fillColor: s && o,
            strokeColor: s && o,
            filled: !s,
            style: {
                transform: "rotate(".concat(w ? O : b, "deg)")
            }
        }))
    }
    )), ho = Object(xn.h)(uo), po = n(28), fo = n.n(po), go = function(e, t) {
        var n = {};
        for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
            var a = 0;
            for (o = Object.getOwnPropertySymbols(e); a < o.length; a++)
                t.indexOf(o[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[a]) && (n[o[a]] = e[o[a]])
        }
        return n
    }, bo = {
        ENTER: 13,
        SPACE: 32,
        TAB: 9
    }, vo = "seconds", mo = "minutes", yo = "hours", Oo = "weeks";
    !function(e) {
        e.LINE = "line",
        e.NOODLE = "noodle",
        e.DASH = "dash",
        e.SLICE = "slice"
    }(Nn || (Nn = {}));
    var jo = "line"
      , ko = "noodle"
      , So = "dash"
      , wo = "slice"
      , _o = [{
        shape: Xn,
        interactiveShape: ho,
        wheelShapeCount: 12,
        name: jo,
        theme: _.t.BLUE
    }, {
        shape: $n,
        interactiveShape: so,
        wheelShapeCount: 8,
        name: ko,
        theme: _.t.GREEN
    }, {
        shape: to,
        interactiveShape: ro,
        wheelShapeCount: 12,
        name: So,
        theme: _.t.YELLOW
    }, {
        shape: oo,
        interactiveShape: co,
        wheelShapeCount: 9,
        name: wo,
        theme: _.t.RED
    }]
      , Co = function(e) {
        var t = e.weeksRemaining
          , n = e.daysRemaining
          , o = e.hoursRemaining
          , a = e.minutesRemaining
          , r = e.secondsRemaining
          , s = e.theme
          , l = e.secondsShape
          , c = e.minutesShape
          , u = e.hoursShape
          , d = e.weeksShape
          , h = e.onClick
          , p = e.enableKeyboardFocus
          , f = n ? "".concat(n, " days") : "".concat(t, " weeks");
        return Object(i.h)("div", {
            className: fo.a.Countdown
        }, Object(i.h)("h3", {
            className: fo.a.Countdown__timeleft
        }, "".concat(f, ", ").concat(o, " hours, ").concat(a, " minutes, ").concat(r, " seconds ").concat("until Google I/O 2020")), Object(i.h)(Vn, {
            shapeCount: l.wheelShapeCount,
            currentTime: r,
            onClick: function() {
                return h(vo)
            },
            color: s ? s.FOREGROUND : _.d.RED,
            shape: l.shape,
            offset: l.name !== jo,
            shapeName: l.name,
            className: fo.a.Countdown__ShapeWheel,
            labelPosition: 1,
            labelColor: s ? s.TEXT : _.d.GRAY,
            enableKeyboardFocus: p
        }), Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 60,
            shape: c.interactiveShape,
            activeShapeCount: a,
            color: s ? s.FOREGROUND : _.d.BLUE,
            bgColor: s && s.BACKGROUND,
            strokeColor: s && s.TERTIARY,
            onClick: function() {
                return h(mo)
            },
            shapeName: c.name,
            className: fo.a["Countdown__ShapeGrid--minutes"],
            gridName: mo,
            labelPosition: 2,
            enableKeyboardFocus: p,
            triggerDistance: c.name === wo ? 1 : void 0
        }), Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 24,
            shape: u.interactiveShape,
            activeShapeCount: o,
            color: s ? s.FOREGROUND : _.d.GREEN,
            bgColor: s && s.BACKGROUND,
            strokeColor: s && s.TERTIARY,
            onClick: function() {
                return h(yo)
            },
            shapeName: u.name,
            className: Object(_.U)(fo.a["Countdown__ShapeGrid--hours"], fo.a["Countdown__ShapeGrid--lower"]),
            gridName: yo,
            labelPosition: 4,
            enableKeyboardFocus: p,
            triggerDistance: u.name === wo ? 1 : void 0
        }), Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 12,
            shape: d.interactiveShape,
            activeShapeCount: n || t,
            color: s ? s.FOREGROUND : _.d.YELLOW,
            bgColor: s && s.BACKGROUND,
            strokeColor: s && s.TERTIARY,
            onClick: function() {
                return h(Oo)
            },
            shapeName: d.name,
            className: Object(_.U)(fo.a["Countdown__ShapeGrid--weeks"], fo.a["Countdown__ShapeGrid--lower"]),
            gridName: Oo,
            labelPosition: 3,
            enableKeyboardFocus: p,
            triggerDistance: d.name === wo ? 1 : void 0
        }))
    }
      , Mo = function(e) {
        var t = e.weeksRemaining
          , n = e.daysRemaining
          , o = e.hoursRemaining
          , a = e.minutesRemaining
          , r = e.secondsRemaining
          , s = e.theme
          , l = e.secondsShape
          , c = e.minutesShape
          , u = e.hoursShape
          , d = e.weeksShape
          , h = e.onClick
          , p = e.enableKeyboardFocus
          , f = n ? "".concat(n, " days") : "".concat(t, " weeks");
        return Object(i.h)("div", {
            className: fo.a.Countdown
        }, Object(i.h)("h3", {
            className: fo.a.Countdown__timeleft
        }, "".concat(f, " weeks, ").concat(o, " hours, ").concat(a, " minutes, ").concat(r, " seconds ").concat("until Google I/O 2020")), Object(i.h)("div", {
            className: fo.a.Countdown__col
        }, Object(i.h)(Vn, {
            shapeCount: l.wheelShapeCount,
            currentTime: r,
            onClick: function() {
                return h(vo)
            },
            shape: l.shape,
            offset: l.name !== jo,
            shapeName: l.name,
            className: fo.a.Countdown__ShapeWheel,
            labelPosition: 1,
            color: s ? s.FOREGROUND : _.d.RED,
            labelColor: s ? s.TEXT : _.d.GRAY,
            enableKeyboardFocus: p
        }), Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 12,
            shape: d.interactiveShape,
            activeShapeCount: n || t,
            color: s ? s.FOREGROUND : _.d.YELLOW,
            strokeColor: s && s.TERTIARY,
            bgColor: s && s.BACKGROUND,
            onClick: function() {
                return h(Oo)
            },
            shapeName: d.name,
            className: Object(_.U)(fo.a["Countdown__ShapeGrid--weeks"], fo.a["Countdown__ShapeGrid--lower"]),
            gridName: Oo,
            labelPosition: 4,
            enableKeyboardFocus: p,
            triggerDistance: d.name === wo ? 1 : void 0
        })), Object(i.h)("div", {
            className: fo.a.Countdown__col
        }, Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 60,
            shape: c.interactiveShape,
            activeShapeCount: a,
            color: s ? s.FOREGROUND : _.d.BLUE,
            bgColor: s && s.BACKGROUND,
            strokeColor: s && s.TERTIARY,
            onClick: function() {
                return h(mo)
            },
            shapeName: c.name,
            className: fo.a["Countdown__ShapeGrid--minutes"],
            gridName: mo,
            labelPosition: 2,
            triggerDistance: c.name === wo ? 1 : void 0
        }), Object(i.h)(Un, {
            labelColor: s ? s.TEXT : _.d.GRAY,
            shapeCount: 24,
            shape: u.interactiveShape,
            activeShapeCount: o,
            color: s ? s.FOREGROUND : _.d.GREEN,
            strokeColor: s && s.TERTIARY,
            bgColor: s && s.BACKGROUND,
            onClick: function() {
                return h(yo)
            },
            shapeName: u.name,
            className: Object(_.U)(fo.a["Countdown__ShapeGrid--hours"], fo.a["Countdown__ShapeGrid--lower"]),
            gridName: yo,
            labelPosition: 3,
            enableKeyboardFocus: p,
            triggerDistance: u.name === wo ? 1 : void 0
        })))
    }
      , Ho = function(e) {
        var t = e.mobile
          , n = e.theme
          , o = e.onChangeTheme
          , a = go(e, ["mobile", "theme", "onChangeTheme"])
          , r = Object(In.j)(!1)
          , s = An()(r, 2)
          , c = s[0]
          , u = s[1]
          , d = Object(In.j)(_o.indexOf(_o.find((function(e) {
            return e.name === jo
        }
        ))))
          , h = An()(d, 2)
          , p = h[0]
          , f = h[1]
          , g = Object(In.j)(_o.indexOf(_o.find((function(e) {
            return e.name === ko
        }
        ))))
          , b = An()(g, 2)
          , v = b[0]
          , m = b[1]
          , y = Object(In.j)(_o.indexOf(_o.find((function(e) {
            return e.name === So
        }
        ))))
          , O = An()(y, 2)
          , j = O[0]
          , k = O[1]
          , S = Object(In.j)(_o.indexOf(_o.find((function(e) {
            return e.name === wo
        }
        ))))
          , w = An()(S, 2)
          , _ = w[0]
          , C = w[1]
          , M = Object(In.j)(n)
          , H = An()(M, 2)
          , L = H[0]
          , T = H[1]
          , A = Object(In.i)(null)
          , I = function(e) {
            var t = 0
              , n = null;
            switch (e) {
            case "seconds":
                t = p,
                n = f;
                break;
            case "minutes":
                t = v,
                n = m;
                break;
            case "hours":
                t = j,
                n = k;
                break;
            case "weeks":
                t = _,
                n = C
            }
            n && (t + 1 > _o.length - 1 ? n(0) : n(t + 1))
        };
        Object(In.d)((function() {
            A.current && (clearTimeout(A.current),
            A.current = null),
            A.current = setTimeout((function() {
                var e = null;
                1 === (new Set).add(_o[p].name).add(_o[v].name).add(_o[j].name).add(_o[_].name).size && (e = _o[p].theme),
                o ? o(e) : T(e),
                A.current = null
            }
            ), 250)
        }
        ), [p, v, j, _]),
        Object(In.d)((function() {
            T(n)
        }
        ), [n]);
        var x = Object(In.j)(!1)
          , D = An()(x, 2)
          , R = D[0]
          , E = D[1];
        return Object(In.f)((function() {
            u(!0);
            window.addEventListener("keydown", (function e(t) {
                t.keyCode !== bo.TAB || R || (E(!0),
                window.removeEventListener("keydown", e))
            }
            ))
        }
        ), []),
        t ? Object(i.h)("div", {
            className: fo.a.Countdown__wrapper,
            style: {
                opacity: c ? 1 : 0
            }
        }, Object(i.h)(Mo, l()({
            secondsShape: _o[p],
            minutesShape: _o[v],
            hoursShape: _o[j],
            weeksShape: _o[_],
            onClick: I,
            theme: L,
            enableKeyboardFocus: R
        }, a))) : Object(i.h)("div", {
            className: fo.a.Countdown__wrapper,
            style: {
                opacity: c ? 1 : 0
            }
        }, Object(i.h)(Co, l()({
            secondsShape: _o[p],
            minutesShape: _o[v],
            hoursShape: _o[j],
            weeksShape: _o[_],
            theme: L,
            onClick: I,
            enableKeyboardFocus: R
        }, a)))
    }
      , Lo = function(e, t) {
        var n = new Date
          , o = e ? e / 1e3 : Date.now() / 1e3
          , a = Math.max(t / 1e3 - o, 0)
          , r = Math.floor(a / 86400 / 7)
          , i = Math.floor(a / 86400)
          , s = Math.floor((a - 86400 * i) / 3600)
          , l = Math.floor((a - 86400 * i - 3600 * s) / 60);
        return [n, a, r, i, s, l, Math.floor(a - 86400 * i - 3600 * s - 60 * l)]
    }
      , To = n(10)
      , Ao = n(42)
      , Io = n.n(Ao)
      , xo = n(88)
      , Do = n.n(xo)
      , Ro = function(e) {
        var t = e.source
          , n = e.classNames
          , o = e.fromGoogle
          , a = 1e3 * t.created
          , r = Object(_.y)(a)
          , s = new Date(r)
          , l = Object(_.J)(s)
          , c = Object(_.F)(s)
          , u = Object(_.C)(r).join(" ");
        return Object(i.h)("section", {
            class: Object(_.U)(Do.a.tweet, n),
            role: "listitem",
            "aria-label": "Tweet by ".concat(t.user_name, ".")
        }, Object(i.h)("header", {
            class: Object(_.U)(Do.a.header, o && Do.a.headerByGoogle)
        }, Object(i.h)("img", {
            src: t.user_image_url,
            width: "24",
            height: "24",
            "aria-hidden": !0
        }), Object(i.h)("h6", null, t.user_name)), Object(i.h)("p", {
            class: Do.a.body
        }, Object(i.h)(Ot, {
            classNames: Do.a.bodyContent
        }, t.html), function(e) {
            if (e.image_url) {
                var t = e.image_url.media_url;
                return Object(i.h)("img", {
                    src: t,
                    class: Do.a.inlineImage,
                    "aria-hidden": !0
                })
            }
        }(t)), Object(i.h)("footer", {
            class: Do.a.footer
        }, t.source_name, " / ", l, " ", c, " - ", u))
    }
      , Eo = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Po = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.UIStore
                  , n = e.TwitterStore
                  , o = e.tweets;
                if (t.Screen.isMobile)
                    return Object(i.h)("div", {
                        class: Io.a.tweetWrapper
                    }, o.map((function(e) {
                        return Object(i.h)(Ro, {
                            fromGoogle: n.isTweetFromGoogle(e),
                            classNames: Io.a.tweet,
                            source: e
                        })
                    }
                    )));
                var a = [[], []];
                return o.forEach((function(e, t) {
                    a[t % 2].push(e)
                }
                )),
                Object(i.h)("div", {
                    class: Io.a.tweetWrapper
                }, a.map((function(e) {
                    return Object(i.h)("div", {
                        class: Io.a.tweetColumn
                    }, e.map((function(e) {
                        return Object(i.h)(Ro, {
                            fromGoogle: n.isTweetFromGoogle(e),
                            classNames: Io.a.tweet,
                            source: e
                        })
                    }
                    )))
                }
                )))
            }
        }]),
        t
    }(i.Component);
    Po = Eo([Object(w.b)("TwitterStore", "UIStore")], Po);
    var Bo = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Uo = function(e) {
        var t = new Date(Object(_.y)(e));
        return [Object(_.J)(t), +Object(_.F)(t)]
    }
      , Fo = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        var n;
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: (n = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.props.TwitterStore.load();
                        case 2:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.title
                  , n = e.TwitterStore
                  , o = e.splitIntoTabs;
                return Object(i.h)("section", {
                    class: "".concat(Io.a.feedContainer, " col-12")
                }, Object(i.h)("header", {
                    class: Object(_.U)(Io.a.feedHeading, o && Io.a.feedInTabs)
                }, Object(i.h)("h4", null, Object(i.h)(Ot, null, t))), Object(i.h)("div", {
                    class: Object(_.U)(!o && Io.a.tweetWrapper, !n.hasMoreTweets && Io.a.tweetWrapperNoTweetsLeft),
                    role: "list"
                }, this.renderBody()), Object(i.h)("footer", {
                    class: Io.a.showMoreFooter
                }, n.hasMoreTweets && Object(i.h)(re, {
                    gaCategory: "Twitter Feed",
                    gaLabel: "Load previous posts",
                    type: J.Text,
                    onClick: n.increaseSlice
                }, "Load previous posts")))
            }
        }, {
            key: "renderBody",
            value: function() {
                var e = this.props
                  , t = e.splitIntoTabs
                  , n = e.TwitterStore;
                if (!t)
                    return Object(i.h)(Po, {
                        tweets: n.getTruncatedTweets()
                    });
                var o = Uo(To.c.day1)
                  , a = An()(o, 2)
                  , r = a[0]
                  , s = a[1]
                  , l = Uo(To.c.day2)
                  , c = An()(l, 2)[1]
                  , u = Uo(To.c.day3)
                  , d = An()(u, 2)[1];
                return Object(i.h)(et, {
                    type: Ve.Default,
                    flushLeft: !0,
                    classNames: Io.a.twitterTabs,
                    tabItems: [{
                        label: "".concat(r, " ").concat(s)
                    }, {
                        label: "".concat(r, " ").concat(c)
                    }, {
                        label: "".concat(r, " ").concat(d)
                    }]
                }, Object(i.h)(Po, {
                    tweets: n.getTruncatedTweets(s)
                }), Object(i.h)(Po, {
                    tweets: n.getTruncatedTweets(c)
                }), Object(i.h)(Po, {
                    tweets: n.getTruncatedTweets(d)
                }))
            }
        }]),
        t
    }(i.Component);
    Fo = Bo([Object(w.b)("TwitterStore", "UIStore"), w.c], Fo);
    var No = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "48",
            height: "48",
            viewBox: "0 0 48 48",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M23.9911 0.0584106C10.8596 0.0584106 0.202148 10.7159 0.202148 23.8474C0.202148 36.9789 10.8596 47.6363 23.9911 47.6363C37.1226 47.6363 47.7801 36.9789 47.7801 23.8474C47.7801 10.7159 37.1226 0.0584106 23.9911 0.0584106ZM23.991 42.8786C13.5001 42.8786 4.95985 34.3383 4.95985 23.8474C4.95985 13.3565 13.5001 4.81623 23.991 4.81623C34.4819 4.81623 43.0222 13.3565 43.0222 23.8474C43.0222 34.3383 34.4819 42.8786 23.991 42.8786ZM33.507 23.8474L19.2336 34.5524V13.1424L33.507 23.8474Z",
            fill: "white"
        }, []), "\n", Object(i.h)("mask", {
            id: "svg-PlayVideo-1ZgYb6R",
            "mask-type": "alpha",
            maskUnits: "userSpaceOnUse",
            x: "0",
            y: "0",
            width: "48",
            height: "48"
        }, ["\n", Object(i.h)("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M23.9911 0.0584106C10.8596 0.0584106 0.202148 10.7159 0.202148 23.8474C0.202148 36.9789 10.8596 47.6363 23.9911 47.6363C37.1226 47.6363 47.7801 36.9789 47.7801 23.8474C47.7801 10.7159 37.1226 0.0584106 23.9911 0.0584106ZM23.991 42.8786C13.5001 42.8786 4.95985 34.3383 4.95985 23.8474C4.95985 13.3565 13.5001 4.81623 23.991 4.81623C34.4819 4.81623 43.0222 13.3565 43.0222 23.8474C43.0222 34.3383 34.4819 42.8786 23.991 42.8786ZM33.507 23.8474L19.2336 34.5524V13.1424L33.507 23.8474Z",
            fill: "white"
        }, []), "\n"]), "\n", Object(i.h)("g", {
            mask: "url(#svg-PlayVideo-1ZgYb6R)"
        }, ["\n"]), "\n"])
    }
      , Wo = n(89)
      , Go = n.n(Wo)
      , Vo = n(4)
      , zo = n(75)
      , qo = n.n(zo)
      , Zo = n(101)
      , Ko = function() {
        function e(t) {
            u()(this, e),
            this.focusableElements = [],
            Zo.j && (t && this.trapFocus(t),
            this.tabListener = this.onKeyPressListener.bind(this))
        }
        return h()(e, [{
            key: "trapFocus",
            value: function(e) {
                e.isSameNode(this.el) || (e && (this.el = e),
                this.refreshFocusableElements(!0),
                document.addEventListener("keydown", this.tabListener))
            }
        }, {
            key: "refreshFocusableElements",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.focusableElements = Array.from(this.el.querySelectorAll("[tabindex], [role=button], button, a")),
                e && this.focusElement()
            }
        }, {
            key: "focusElement",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                if (this.focusableElements.length && !(e >= this.focusableElements.length)) {
                    var t = this.focusableElements[e];
                    t && t.focus()
                }
            }
        }, {
            key: "cleanup",
            value: function() {
                Zo.j && (this.el = null,
                this.nextFocusElement = null,
                this.focusableElements = [],
                document.removeEventListener("keydown", this.tabListener))
            }
        }, {
            key: "getEdgeNode",
            value: function(e) {
                return "first" === e ? this.focusableElements[0] : this.focusableElements[this.focusableElements.length - 1]
            }
        }, {
            key: "checkNodePosition",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "first"
                  , t = this.getEdgeNode(e);
                return document.activeElement.isEqualNode(t)
            }
        }, {
            key: "onKeyPressListener",
            value: function(e) {
                this.focusableElements && Object(Zo.h)(e, _.e.Tab) && (this.nextFocusElement && (e.preventDefault(),
                this.nextFocusElement.focus(),
                this.nextFocusElement = null),
                e.shiftKey ? this.checkNodePosition("first") && (this.nextFocusElement = this.getEdgeNode("last")) : this.checkNodePosition("last") && (this.nextFocusElement = this.getEdgeNode("first")))
            }
        }]),
        e
    }()
      , Yo = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                this.aria = new Ko(this.base)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.aria && this.aria.refreshFocusableElements()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.aria && this.aria.cleanup()
            }
        }, {
            key: "getActionButtonClasses",
            value: function() {
                var e = [qo.a.actionButtons];
                switch (this.props.buttons.length) {
                case 0:
                    break;
                case 1:
                    e = [].concat(te()(e), [qo.a.actionButtonsSingle]);
                    break;
                case 2:
                    e = [].concat(te()(e), [qo.a.actionButtonsDouble]);
                    break;
                default:
                    e = [].concat(te()(e), [qo.a.actionButtonsMultiple])
                }
                return e.join(" ")
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.heading
                  , n = e.buttons
                  , o = e.classNames
                  , a = e.withinSheet;
                return Object(i.h)("div", {
                    class: Object(_.U)(qo.a.dialog, o, a && qo.a.withinSheet)
                }, Object(i.h)("h5", {
                    class: qo.a.heading
                }, t), Object(i.h)("div", {
                    class: qo.a.body
                }, this.props.children), Object(i.h)("div", {
                    class: this.getActionButtonClasses()
                }, n))
            }
        }]),
        t
    }(i.Component);
    Yo.defaultProps = {
        withinSheet: !1
    };
    var Jo = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "26",
            height: "29",
            viewBox: "0 0 26 29",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n  ", Object(i.h)("g", {
            fill: "none",
            "fill-rule": "evenodd"
        }, ["\n    ", Object(i.h)("path", {
            d: "M6.07 7h13.86A7.001 7.001 0 0 0 6.07 7z",
            stroke: "#AECBF7",
            "stroke-width": "2"
        }, []), "\n    ", Object(i.h)("path", {
            d: "M21 8H5a8 8 0 1 0 16 0z",
            fill: "#4285F4"
        }, []), "\n    ", Object(i.h)("path", {
            d: "M1.041 28H24.96C24.45 21.84 19.29 17 13 17 6.71 17 1.55 21.84 1.041 28z",
            stroke: "#FDE293",
            "stroke-width": "2"
        }, []), "\n  "]), "\n"])
    }
      , Xo = n(107)
      , Qo = n.n(Xo)
      , $o = n(35)
      , ea = n.n($o)
      , ta = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , na = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "signIn",
            value: function() {
                var e = this.props
                  , t = e.UserStore
                  , n = e.UIStore;
                t.signIn(),
                n.Popup.hide()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.UIStore;
                return Object(i.h)("div", null, Object(i.h)("div", {
                    class: "".concat(ea.a.userAvatar, " ").concat(ea.a.userAvatarDesktop)
                }, Object(i.h)(Jo, null)), Object(i.h)("h5", {
                    class: ea.a.signInHeading
                }, Qo.a.signIn.heading), Object(i.h)("p", {
                    class: ea.a.signInBody
                }, Qo.a.signIn.body), Object(i.h)("div", {
                    class: ea.a.signInButtonRow
                }, Object(i.h)(re, {
                    gaLabel: "Sign In: Customize",
                    gaCategory: "Popup",
                    type: J.Fill,
                    onClick: function() {
                        return e.signIn()
                    }
                }, Qo.a.signIn.buttonSignIn), Object(i.h)(re, {
                    gaCategory: "Sign in popup",
                    gaLabel: "Close",
                    type: J.Text,
                    onClick: function() {
                        return t.Popup.hide()
                    }
                }, Qo.a.signIn.buttonDismiss)))
            }
        }]),
        t
    }(i.Component);
    na = ta([Object(w.b)("UIStore", "UserStore"), w.c], na);
    var oa = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "signOut",
            value: function() {
                var e = this.props
                  , t = e.UserStore
                  , n = e.UIStore;
                t.signOut(),
                n.Popup.hide()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.UserStore;
                if (t.initialized && t.user)
                    return Object(i.h)("div", null, Object(i.h)("h5", {
                        class: ea.a.userName
                    }, t.user.name), Object(i.h)("span", {
                        class: ea.a.userEmail
                    }, t.user.email), Object(i.h)("div", {
                        class: ea.a.signOutButtonRow
                    }, Object(i.h)(re, {
                        gaLabel: "Sign Out",
                        gaCategory: "Popup",
                        type: J.Fill,
                        onClick: function() {
                            return e.signOut()
                        }
                    }, "Sign out")))
            }
        }]),
        t
    }(i.Component);
    oa = ta([Object(w.b)("UIStore", "UserStore"), w.c], oa);
    var aa = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.UIStore
                  , n = e.UserStore
                  , o = Qo.a.signInMobile;
                return Object(i.h)(Yo, {
                    heading: o.heading,
                    buttons: [Object(i.h)(re, {
                        gaCategory: "Sign in mobile",
                        gaLabel: "Close",
                        type: J.Text,
                        onClick: function() {
                            t.Modal.close(_.l.dialog)
                        }
                    }, o.buttonDismiss), Object(i.h)(re, {
                        gaCategory: "Sign in mobile",
                        gaLabel: "Sign in",
                        type: J.Fill,
                        onClick: function() {
                            n.signIn(),
                            t.Modal.close(_.l.dialog)
                        }
                    }, o.buttonSignIn)],
                    classNames: ea.a.customize
                }, Object(i.h)("p", null, o.body))
            }
        }]),
        t
    }(i.Component);
    aa = ta([Object(w.b)("UIStore", "UserStore"), w.c], aa);
    var ra = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "signOut",
            value: function() {
                var e = this.props
                  , t = e.UserStore;
                e.UIStore.Modal.close(_.l.dialog),
                t.signOut()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.UIStore
                  , o = t.UserStore;
                return Object(i.h)("div", null, Object(i.h)("div", {
                    class: "".concat(ea.a.closeButtonRight)
                }, Object(i.h)(x, {
                    gaCategory: "Sign out",
                    gaLabel: "Close",
                    type: a.NotRaised,
                    layout: r.Compact,
                    icon: "close",
                    onClick: function() {
                        return n.Modal.close(_.l.dialog)
                    }
                })), Object(i.h)("div", {
                    class: ea.a.userInfo
                }, Object(i.h)(We, {
                    alt: "".concat(o.user.name, " avatar"),
                    classNames: "".concat(ea.a.userAvatar, " ").concat(ea.a.userAvatarMobile),
                    src: o.initialized && o.user && o.user.photoUrl
                }), o.initialized && o.user && Object(i.h)("div", null, Object(i.h)("h5", {
                    class: ea.a.userNameMobile
                }, o.user.name), Object(i.h)("span", {
                    class: ea.a.userEmailMobile
                }, o.user.email))), Object(i.h)("p", {
                    class: "".concat(ea.a.loggedInMessage)
                }, "You are currently signed into My I/O."), Object(i.h)("div", {
                    class: ea.a.signOutButtonRowMobile
                }, Object(i.h)(re, {
                    gaLabel: "Sign Out",
                    gaCategory: "Modal",
                    type: J.Text,
                    onClick: function() {
                        return e.signOut()
                    }
                }, "Sign out")))
            }
        }]),
        t
    }(i.Component);
    ra = ta([Object(w.b)("UIStore", "UserStore"), w.c], ra);
    var ia, sa, la, ca = n(54), ua = n.n(ca), da = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Default = "Default",
        e.Route = "Route"
    }(ia || (ia = {})),
    function(e) {
        e.Session = "Session",
        e.Dialog = "Dialog"
    }(sa || (sa = {})),
    function(e) {
        e.Fullscreen = "Fullscreen",
        e.Centered = "Centered",
        e.Sheet = "Sheet"
    }(la || (la = {}));
    var ha = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props
                  , t = e.UIStore
                  , n = e.open
                  , o = e.id
                  , a = e.mobileLayout;
                n && !o && t.Modal.push(),
                t.Modal.initializeModalState(o, a)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                this.aria = new Ko(this.base);
                var e = this.props
                  , t = e.open
                  , n = e.UIStore
                  , o = e.id;
                if (t) {
                    var a = o ? {
                        id: o
                    } : null;
                    n.Modal.open(a),
                    this.aria && this.aria.focusElement()
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && (window.removeEventListener(_.u.RESIZE, this.onResizeHandler),
                this.aria && this.aria.cleanup());
                var e = this.props.id;
                this.props.UIStore.Modal.close(e)
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props
                  , n = t.id
                  , o = t.history
                  , a = t.location
                  , r = t.match
                  , i = t.UIStore
                  , s = t.type;
                e.location !== a && "POP" === e.history.action && n && this.closeModal(),
                this.aria && (this.aria.refreshFocusableElements(),
                (i.Modal.openedRoute || i.Modal.collectiveState[n].opened) && this.aria.focusElement());
                var l = r.params.speakerId || r.params.sessionId;
                e.location.pathname !== this.props.location.pathname && s === ia.Route && ("PUSH" === o.action && l ? i.Modal.push() : "POP" === o.action && l ? i.Modal.pop() : "PUSH" === o.action && i.Modal.resetStack());
                var c = !i.Modal.collectiveState[n].opened && !e.UIStore.Modal.collectiveState[n].opened && s !== ia.Default;
                if (l && c) {
                    if (!this.rootEl)
                        return;
                    this.rootEl.scrollTo(0, 0)
                }
            }
        }, {
            key: "goBack",
            value: function(e) {
                e && e.stopPropagation();
                var t = this.props
                  , n = t.history;
                t.UIStore.Modal.stack < 2 ? this.closeModal() : n.goBack()
            }
        }, {
            key: "closeModal",
            value: function() {
                var e = this.props
                  , t = e.baseRoute
                  , n = e.history
                  , o = e.id;
                e.UIStore.Modal.close(o),
                t && n.push(t)
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                Object(_.P)(e, _.e.Escape) && this.closeModal()
            }
        }, {
            key: "renderBackArrow",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.UIStore;
                if (t.showBackButtonControls)
                    return Object(i.h)(x, {
                        ariaLabel: "Close modal",
                        icon: "arrow_back",
                        classNames: ua.a.backButton,
                        type: a.NotRaised,
                        onClick: function(t) {
                            n.Modal.stack > 1 ? e.goBack(t) : n.Screen.isLessThanLaptop && e.closeModal()
                        }
                    })
            }
        }, {
            key: "renderCloseButton",
            value: function() {
                var e = this;
                return Object(i.h)(x, {
                    ariaLabel: "Close modal",
                    icon: "close",
                    classNames: ua.a.closeButton,
                    type: a.NotRaised,
                    onClick: function() {
                        e.closeModal()
                    }
                })
            }
        }, {
            key: "getClassnames",
            value: function() {
                var e = this.props
                  , t = e.id
                  , n = e.open
                  , o = e.UIStore
                  , a = e.styleType
                  , r = e.type
                  , i = [ua.a.modal]
                  , s = !_.T && n
                  , l = o.Modal.openedRoute && r === ia.Route
                  , c = o.Modal.collectiveState[t].opened && r !== ia.Route;
                if ((s || l || c) && i.push(ua.a.modalOpen),
                a === sa.Dialog && i.push(ua.a.modalDialog),
                o.Screen.isLessThanLaptop)
                    switch (o.Modal.collectiveState[t].mobileLayout) {
                    case la.Centered:
                        i.push(ua.a.modalContentCentered);
                        break;
                    case la.Sheet:
                        i.push(ua.a.modalContentSheet);
                        break;
                    default:
                        i.push(ua.a.modalContentFullscreen)
                    }
                return i.join(" ")
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.id
                  , o = t.open
                  , a = t.maxWidth
                  , r = t.mobileLayout
                  , s = t.type
                  , l = t.RateStore
                  , c = t.UIStore
                  , u = !_.T && o
                  , d = c.Modal.openedRoute && s === ia.Route
                  , h = c.Modal.collectiveState[n].opened && s !== ia.Route
                  , p = u || d || h;
                return Object(i.h)("aside", {
                    key: n,
                    id: n,
                    role: "dialog",
                    ref: function(t) {
                        return e.rootEl = t
                    },
                    class: this.getClassnames()
                }, Object(i.h)("div", {
                    class: ua.a.modalMain
                }, Object(i.h)("div", {
                    class: ua.a.modalContent,
                    ref: function(t) {
                        return e.el = t
                    },
                    onKeyDown: function(t) {
                        e.onKeyDown(t)
                    },
                    style: {
                        maxWidth: "".concat(a)
                    }
                }, c.Modal.collectiveState[n].body && s === ia.Default && c.Modal.collectiveState[n].body || this.props.children, (c.Screen.isLessThanLaptop || s === ia.Route && c.Modal.stack > 1) && !l.componentVisible && this.renderBackArrow(), !c.Screen.isLessThanLaptop && ua.a !== sa.Dialog && this.renderCloseButton())), (!c.Screen.isLessThanLaptop || c.Screen.isLessThanLaptop && r !== la.Fullscreen) && Object(i.h)(Y, {
                    onClick: function(t) {
                        return e.closeModal()
                    },
                    visible: p
                }))
            }
        }]),
        t
    }(i.Component);
    ha.defaultProps = {
        maxWidth: "800px",
        showBackButtonControls: !1,
        styleType: sa.Dialog,
        type: ia.Default
    },
    ha = da([S.h, Object(w.b)("UIStore", "RateStore"), w.c], ha);
    var pa = n(95)
      , fa = n.n(pa)
      , ga = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , ba = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "getMainStyles",
            value: function() {
                var e = this.props.parentPosition;
                return !e || e.top + e.height <= 0 ? {
                    top: 50,
                    right: 40
                } : {
                    top: "".concat(e.top + e.height + 20, "px"),
                    right: "".concat(40, "px")
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.UIStore;
                return Object(i.h)("div", {
                    style: this.getMainStyles(),
                    class: Object(_.U)(fa.a.popup, e.Popup.visible && fa.a.popupVisible)
                }, Object(i.h)("div", {
                    class: fa.a.arrow
                }), Object(i.h)("div", {
                    class: fa.a.popupContent
                }, Object(i.h)(x, {
                    ariaLabel: "Close pop up",
                    icon: "close",
                    classNames: fa.a.closeButton,
                    type: a.NotRaised,
                    onClick: function() {
                        return e.Popup.hide()
                    }
                }), this.props.children))
            }
        }]),
        t
    }(i.Component);
    ba = ga([Object(w.b)("UIStore"), w.c], ba);
    var va = function(e, t) {
        var n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2]
          , o = function(o) {
            function a() {
                var e;
                return u()(this, a),
                (e = f()(this, b()(a).apply(this, arguments))).onClick = function() {
                    return e.props.UIStore.Popup.toggle()
                }
                ,
                e.state = {
                    position: null
                },
                e
            }
            return m()(a, o),
            h()(a, [{
                key: "componentDidMount",
                value: function() {
                    if (_.T && this.el) {
                        var e = this.el.getBoundingClientRect();
                        this.setState({
                            position: e
                        })
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var o = this;
                    return Object(i.h)("div", {
                        style: {
                            position: "relative"
                        }
                    }, Object(i.h)("div", {
                        ref: function(e) {
                            return o.el = e
                        },
                        onClick: n ? this.onClick : null
                    }, Object(i.h)(e, l()({
                        classNames: fa.a.popupParent
                    }, this.props))), t && Object(i.h)(t, l()({
                        parentPosition: this.state.position
                    }, this.props)))
                }
            }]),
            a
        }(i.Component);
        return o = ga([Object(w.b)("UIStore"), w.c], o)
    }
      , ma = n(76)
      , ya = n.n(ma)
      , Oa = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , ja = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderSignIn",
            value: function() {
                var e = this.props
                  , t = e.onDarkBackground
                  , n = e.UserStore;
                if (!n.initialized)
                    return !1;
                var o = va((function() {
                    return Object(i.h)(re, {
                        gaCategory: "Sign in",
                        gaLabel: "Sign in",
                        classNames: "".concat(Object(_.U)(ya.a.userAuthButton, ya.a.signInButton)),
                        onClick: function() {
                            return n.signIn()
                        },
                        type: J.Text,
                        textColor: t && X.White
                    }, "Sign in")
                }
                ), (function(e) {
                    return Object(i.h)(ba, l()({}, e), Object(i.h)(na, null))
                }
                ), !1);
                return Object(i.h)(o, null)
            }
        }, {
            key: "renderSignOut",
            value: function() {
                var e = this.props
                  , t = e.onDarkBackground
                  , n = e.UIStore
                  , o = e.UserStore;
                if (o.initialized && o.user) {
                    var a = function(e) {
                        return Object(i.h)(ra, null)
                    }
                      , r = function() {
                        return Object(i.h)(re, {
                            gaCategory: "Sign out",
                            gaLabel: "Open sign out modal",
                            classNames: Object(_.U)(ya.a.userAuthButton, t && ya.a.userAuthButtonOnDarkBg),
                            type: J.Text,
                            onClick: function() {
                                n.Screen.isLessThanLaptop && n.Modal.open({
                                    id: _.l.dialog,
                                    type: ia.Default,
                                    body: Object(i.h)(a, null),
                                    mobileLayout: la.Centered
                                })
                            }
                        }, Object(i.h)(We, {
                            alt: o.user.name,
                            classNames: ya.a.userImage,
                            src: o.user.photoUrl
                        }))
                    }
                      , s = va(r, (function(e) {
                        return Object(i.h)(ba, l()({}, e), Object(i.h)(oa, null))
                    }
                    ));
                    return n.Screen.isLessThanLaptop ? Object(i.h)(r, null) : Object(i.h)(s, null)
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.classNames
                  , n = e.slideWithDrawer
                  , o = e.UserStore
                  , a = e.UIStore;
                if (_.s) {
                    var r = a.Drawer
                      , s = Object(_.U)(t, ya.a.container, n && r.opened && ya.a.containerDrawerOpen, a.Popup.visible && ya.a.authPopupVisible);
                    return Object(i.h)("div", {
                        class: s
                    }, o.isSignedIn ? this.renderSignOut() : this.renderSignIn())
                }
            }
        }]),
        t
    }(i.Component);
    ja = Oa([Object(w.b)("UserStore", "UIStore"), w.c], ja);
    var ka = n(166)
      , Sa = n.n(ka)
      , wa = function(e) {
        var t = e.width
          , n = void 0 === t ? 24 : t;
        return Object(i.h)("div", {
            style: {
                width: n
            }
        }, Object(i.h)("svg", {
            class: Sa.a.circular,
            viewBox: "25 25 50 50"
        }, Object(i.h)("circle", {
            class: Sa.a.path,
            cx: "50",
            "stroke-linecap": "butt",
            cy: "50",
            r: "20",
            fill: "none",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        })))
    }
      , _a = n(119)
      , Ca = n.n(_a)
      , Ma = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ha = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).hovered = !1,
            e.loading = !1,
            e
        }
        var n;
        return m()(t, e),
        h()(t, [{
            key: "setHovered",
            value: function(e) {
                this.hovered = e
            }
        }, {
            key: "updateLoadingState",
            value: function(e) {
                this.loading = e
            }
        }, {
            key: "onClick",
            value: (n = un()(ln.a.mark((function e() {
                var t, n;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = this.props,
                            n = t.UIStore,
                            t.UserStore.isSignedIn) {
                                e.next = 4;
                                break
                            }
                            return n.Screen.isMobile ? n.Modal.open({
                                id: _.l.dialog,
                                body: Object(i.h)(aa, null),
                                mobileLayout: la.Centered
                            }) : (n.Popup.show(),
                            n.Header.setNavHidden(!n.Popup.visible)),
                            e.abrupt("return");
                        case 4:
                            return this.updateLoadingState(!0),
                            e.next = 7,
                            this.props.session.toggleBookmark();
                        case 7:
                            this.updateLoadingState(!1);
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "getRenderIcon",
            value: function() {
                if (this.loading)
                    return Object(i.h)(wa, null);
                var e = this.props
                  , t = e.session
                  , n = e.UserStore
                  , o = [this.hovered && Ca.a.hovered];
                return n.isSignedIn && t.bookmarked && o.push(Ca.a.bookmarkAdded),
                Object(i.h)(C, {
                    classNames: _.U.apply(void 0, o)
                }, n.isSignedIn && t.bookmarked ? "star" : "star_border")
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.session
                  , a = Object(_.U)(Ca.a.bookmark, n, this.hovered && Ca.a.hovered);
                return Object(i.h)(x, l()({}, this.props, {
                    ariaLabel: "Bookmark.",
                    ariaPressed: "".concat(o.bookmarked),
                    classNames: a,
                    onClick: function() {
                        return e.onClick()
                    },
                    onMouseEnter: function() {
                        return e.setHovered(!0)
                    },
                    onMouseLeave: function() {
                        return e.setHovered(!1)
                    },
                    tooltip: this.tooltip,
                    gaLabel: this.tooltip,
                    gaCategory: "Bookmark"
                }), this.getRenderIcon())
            }
        }, {
            key: "tooltip",
            get: function() {
                var e = this.props
                  , t = e.UserStore
                  , n = e.session;
                if (!this.loading)
                    return t.isSignedIn ? n.bookmarked ? "Remove bookmark" : "Add bookmark" : "Sign in to customize"
            }
        }]),
        t
    }(i.Component);
    Ha.defaultProps = {
        type: a.NotRaised,
        elevation: o.Lowered
    },
    Ma([Vo.l], Ha.prototype, "hovered", void 0),
    Ma([Vo.l], Ha.prototype, "loading", void 0),
    Ma([Vo.d], Ha.prototype, "setHovered", null),
    Ma([Vo.d], Ha.prototype, "updateLoadingState", null),
    Ha = Ma([Object(w.b)("UIStore", "UserStore"), w.c], Ha);
    var La, Ta = n(73), Aa = n.n(Ta), Ia = function(e) {
        var t = e.classNames;
        return Object(i.h)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg"
        }, Object(i.h)("g", {
            fill: "none",
            "fill-rule": "evenodd",
            class: t || Aa.a.reserveNone
        }, Object(i.h)("path", {
            class: Aa.a.reserveBackground,
            d: "M22 9.428V6.75c0-.4-.367-.75-.833-.75H2.833c-.463 0-.824.347-.824.75v2.678C3.071 9.821 3.833 10.82 3.833 12c0 1.183-.765 2.183-1.833 2.574v2.676c0 .4.367.75.833.75h18.334c.466 0 .833-.35.833-.75v-2.678c-1.066-.392-1.833-1.392-1.833-2.572 0-1.18.767-2.18 1.833-2.572z",
            "stroke-width": "2"
        }), Object(i.h)("path", {
            class: Aa.a.reserveStroke,
            d: "M14.789 16.057l-2.785-1.79-2.785 1.79.84-3.205L7.5 10.759l3.298-.194L12.004 7.5l1.198 3.073 3.298.194-2.56 2.093z"
        })))
    }, xa = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "20",
            height: "19",
            viewBox: "0 0 20 19",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n  ", Object(i.h)("path", {
            d: "M20 7.24l-7.19-.62L10 0 7.19 6.63 0 7.24l5.46 4.73L3.82 19 10 15.27 16.18 19l-1.63-7.03L20 7.24zm-10 5.849l-3.426 2.068.911-3.9L4.46 8.632l3.991-.346 1.55-3.672 1.558 3.681 3.991.347-3.025 2.624.91 3.9L10 13.09z",
            fill: "#747474",
            "fill-rule": "nonzero"
        }, []), "\n"])
    }, Da = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            width: "56",
            height: "24",
            viewBox: "0 0 56 24",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, t), ["\n    ", Object(i.h)("defs", {}, ["\n        ", Object(i.h)("circle", {
            id: "svg-SlideToggleOn-2S57Tz6",
            cx: "12",
            cy: "12",
            r: "12"
        }, []), "\n        ", Object(i.h)("filter", {
            x: "-64.6%",
            y: "-60.4%",
            width: "229.2%",
            height: "229.2%",
            filterUnits: "objectBoundingBox",
            id: "svg-SlideToggleOn-3weKyHW"
        }, ["\n            ", Object(i.h)("feOffset", {
            dy: "2",
            in: "SourceAlpha",
            result: "shadowOffsetOuter1"
        }, []), "\n            ", Object(i.h)("feGaussianBlur", {
            stdDeviation: "2",
            in: "shadowOffsetOuter1",
            result: "shadowBlurOuter1"
        }, []), "\n            ", Object(i.h)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0",
            in: "shadowBlurOuter1",
            result: "shadowMatrixOuter1"
        }, []), "\n            ", Object(i.h)("feOffset", {
            dy: "1",
            in: "SourceAlpha",
            result: "shadowOffsetOuter2"
        }, []), "\n            ", Object(i.h)("feGaussianBlur", {
            stdDeviation: "5",
            in: "shadowOffsetOuter2",
            result: "shadowBlurOuter2"
        }, []), "\n            ", Object(i.h)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0",
            in: "shadowBlurOuter2",
            result: "shadowMatrixOuter2"
        }, []), "\n            ", Object(i.h)("feOffset", {
            dy: "4",
            in: "SourceAlpha",
            result: "shadowOffsetOuter3"
        }, []), "\n            ", Object(i.h)("feGaussianBlur", {
            stdDeviation: "2.5",
            in: "shadowOffsetOuter3",
            result: "shadowBlurOuter3"
        }, []), "\n            ", Object(i.h)("feColorMatrix", {
            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.14 0",
            in: "shadowBlurOuter3",
            result: "shadowMatrixOuter3"
        }, []), "\n            ", Object(i.h)("feMerge", {}, ["\n                ", Object(i.h)("feMergeNode", {
            in: "shadowMatrixOuter1"
        }, []), "\n                ", Object(i.h)("feMergeNode", {
            in: "shadowMatrixOuter2"
        }, []), "\n                ", Object(i.h)("feMergeNode", {
            in: "shadowMatrixOuter3"
        }, []), "\n            "]), "\n        "]), "\n    "]), "\n    ", Object(i.h)("g", {
            transform: "translate(10 0)",
            fill: "none",
            "fill-rule": "evenodd"
        }, ["\n        ", Object(i.h)("path", {
            d: "M0 0h46v24H0z"
        }, []), "\n        ", Object(i.h)("rect", {
            fill: "#1A73E8",
            opacity: ".3",
            y: "4",
            width: "46",
            height: "17",
            rx: "8.5"
        }, []), "\n        ", Object(i.h)("g", {
            transform: "translate(22)"
        }, ["\n            ", Object(i.h)("use", {
            fill: "#000",
            filter: "url(#svg-SlideToggleOn-3weKyHW)",
            "xlink:href": "#svg-SlideToggleOn-2S57Tz6"
        }, []), "\n            ", Object(i.h)("use", {
            fill: "#1A73E8",
            "xlink:href": "#svg-SlideToggleOn-2S57Tz6"
        }, []), "\n        "]), "\n        ", Object(i.h)("path", {
            fill: "#FFF",
            "fill-rule": "nonzero",
            d: "M40.667 10.16l-4.794-.413L34 5.333l-1.873 4.42-4.794.407 3.64 3.153L29.88 18 34 15.513 38.12 18l-1.087-4.687z"
        }, []), "\n        ", Object(i.h)("path", {
            d: "M26 4h16v16H26z"
        }, []), "\n    "]), "\n"])
    }, Ra = n(213), Ea = n.n(Ra), Pa = n(77), Ba = n.n(Pa), Ua = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }, Fa = "Customize your schedule modal", Na = "Reserve a seat modal", Wa = "Cancel reservation modal", Ga = "Join the waitlist modal", Va = "Leave the waitlist modal", za = "Time block conflict modal";
    !function(e) {
        e[e.close = 0] = "close",
        e[e.open = 1] = "open"
    }(La || (La = {}));
    var qa = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.localStorageKey
                  , n = e.UIStore
                  , o = e.buttonType
                  , a = e.classNames
                  , r = e.gaCategory
                  , s = e.gaLabel;
                return Object(i.h)(re, {
                    gaCategory: r || "Schedule modal",
                    gaLabel: s || "Close modal",
                    classNames: a,
                    type: o,
                    onClick: function() {
                        n.Modal.close(_.l.dialog),
                        t && localStorage.setItem(t, "true")
                    }
                }, this.props.children)
            }
        }]),
        t
    }(i.Component);
    qa.defaultProps = {
        buttonType: J.Text
    },
    qa = Ua([Object(w.b)("UIStore"), w.c], qa);
    var Za = function() {
        var e = Ea.a.customize
          , t = {
            Toggle: Da,
            Bookmark: xa,
            Reserve: Ia
        };
        return Object(i.h)(Yo, {
            heading: e.heading,
            buttons: [Object(i.h)(qa, {
                gaCategory: Fa,
                buttonType: J.Text,
                localStorageKey: "CUSTOMIZE_TUTORIAL"
            }, e.buttonDismiss)],
            classNames: Ba.a.customize
        }, Object(i.h)("ul", {
            class: "".concat(Ba.a.customizeList)
        }, e.list.map((function(e) {
            var n = t[e.image];
            return Object(i.h)("li", null, Object(i.h)("span", {
                class: Ba.a.customizeListIcon,
                "aria-hidden": !0
            }, Object(i.h)(n, null)), Object(i.h)("p", {
                class: "reset"
            }, e.label))
        }
        ))))
    }
      , Ka = function(e) {
        return Object(i.h)(Yo, {
            heading: "Reserve a seat",
            withinSheet: !0,
            buttons: [Object(i.h)(qa, {
                gaCategory: Na,
                buttonType: J.Text
            }, "Cancel")].concat(te()(e.customButtons)),
            classNames: Ba.a.reserve
        }, Object(i.h)("p", null, "You’re about to reserve your first seat for a Session at I/O! Some things to know:"), Object(i.h)("ul", null, Object(i.h)("li", null, "Only one reservation or waitlist is allowed per time block."), Object(i.h)("li", null, "Sessions are no longer reservable one hour before the start time."), Object(i.h)("li", null, "A portion of seats for each Session will still be available first-come, first-served onsite.")))
    }
      , Ya = function(e) {
        return Object(i.h)(Yo, {
            heading: "Cancel your seat reservation?",
            withinSheet: !0,
            buttons: [Object(i.h)(qa, {
                gaCategory: Wa,
                buttonType: J.Text
            }, "Keep my seat")].concat(te()(e.customButtons)),
            classNames: Ba.a.reserve
        }, Object(i.h)("p", null, "You’re about to give up your seat for this Session. Seats might not be available afterwards. Are you sure you want to release your seat for this Session? If you don’t have a seat reserved but still want to attend, all Sessions will have a portion of seats available first-come, first-served onsite."))
    }
      , Ja = function(e) {
        return Object(i.h)(Yo, {
            heading: "Join the waitlist",
            withinSheet: !0,
            buttons: [Object(i.h)(qa, {
                gaCategory: Ga,
                buttonType: J.Text
            }, "Cancel")].concat(te()(e.customButtons)),
            classNames: Ba.a.reserve
        }, Object(i.h)("p", null, "You’re about to join the waitlist for", " ", Object(i.h)("strong", null, e.sessionTitle), ". If a spot opens up later on, we’ll automatically change your reservation status to reserved. A portion of seats for each session will still be available first-come, first-served onsite."), Object(i.h)("p", null, "Only one reservation or waitlist is allowed per time block."))
    }
      , Xa = function(e) {
        return Object(i.h)(Yo, {
            heading: "Leave the waitlist?",
            withinSheet: !0,
            buttons: [Object(i.h)(qa, {
                gaCategory: Va,
                buttonType: J.Text
            }, "Stay in line")].concat(te()(e.customButtons)),
            classNames: Ba.a.reserve
        }, Object(i.h)("p", null, "You have ", Object(i.h)("strong", null, e.peopleAheadInWaitlist), " people ahead of you in line at the moment. Would you like to keep your spot in line, or leave the waitlist for this Session?"), Object(i.h)("p", null, "If you don’t get a confirmed seat for this Session, all rooms will have a portion of seats available first-come, first-served onsite."))
    }
      , Qa = function(e) {
        return Object(i.h)(Yo, {
            heading: "Time block conflict",
            withinSheet: !0,
            buttons: [Object(i.h)(qa, {
                gaCategory: za,
                buttonType: J.Text
            }, "Cancel")].concat(te()(e.customButtons)),
            classNames: Ba.a.reserve
        }, Object(i.h)("p", null, "You already have a reserved seat/are on the waitlist for", " ", Object(i.h)("strong", null, e.sessionTitle), " happening at this time. However, only one reservation per time block is allowed. Do you want to release your current seat reservation/waitlist and move forward with this request?"))
    }
      , $a = n(22)
      , er = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , tr = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).hovered = !1,
            e
        }
        var n, o, a, r, s;
        return m()(t, e),
        h()(t, [{
            key: "onMouseEnter",
            value: function() {
                this.hovered = !0
            }
        }, {
            key: "onMouseLeave",
            value: function() {
                this.hovered = !1
            }
        }, {
            key: "reserveSession",
            value: (s = un()(ln.a.mark((function e() {
                var t, n;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = this.props.session,
                            e.prev = 1,
                            e.next = 4,
                            t.reserve();
                        case 4:
                            n = e.sent,
                            this.handleReservationRequestResult(n),
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(1),
                            this.handleReservationRequestFailure(e.t0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[1, 8]])
            }
            ))),
            function() {
                return s.apply(this, arguments)
            }
            )
        }, {
            key: "cancelReservation",
            value: (r = un()(ln.a.mark((function e() {
                var t, n, o;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = this.props.session,
                            n = t.reservationStatus,
                            e.prev = 2,
                            e.next = 5,
                            t.cancelReservation();
                        case 5:
                            o = e.sent,
                            this.handleReservationRequestResult(o, n),
                            e.next = 12;
                            break;
                        case 9:
                            e.prev = 9,
                            e.t0 = e.catch(2),
                            this.handleReservationRequestFailure(e.t0);
                        case 12:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[2, 9]])
            }
            ))),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "swapReservation",
            value: (a = un()(ln.a.mark((function e(t) {
                var n, o;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return n = this.props.session,
                            e.prev = 1,
                            e.next = 4,
                            n.swapReservation(t.id);
                        case 4:
                            o = e.sent,
                            this.handleReservationRequestResult(o),
                            e.next = 11;
                            break;
                        case 8:
                            e.prev = 8,
                            e.t0 = e.catch(1),
                            this.handleReservationRequestFailure(e.t0);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[1, 8]])
            }
            ))),
            function(e) {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "handleReservationRequestResult",
            value: (o = un()(ln.a.mark((function e(t, n) {
                var o, a, r, i, s;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            o = this.props,
                            a = o.session,
                            r = o.UIStore,
                            e.t0 = t,
                            e.next = e.t0 === $a.a.CANCEL_SUCCEEDED ? 4 : e.t0 === $a.a.RESERVE_SUCCEEDED ? 6 : e.t0 === $a.a.SWAP_SUCCEEDED ? 6 : e.t0 === $a.a.RESERVE_WAITLISTED ? 8 : e.t0 === $a.a.SWAP_WAITLISTED ? 8 : e.t0 === $a.a.CANCEL_DENIED_CUTOFF ? 14 : e.t0 === $a.a.RESERVE_DENIED_CUTOFF ? 14 : e.t0 === $a.a.SWAP_DENIED_CUTOFF ? 14 : e.t0 === $a.a.RESERVE_DENIED_CLASH ? 16 : e.t0 === $a.a.SWAP_DENIED_CLASH ? 16 : e.t0 === $a.a.CANCEL_DENIED_UNKNOWN ? 18 : e.t0 === $a.a.RESERVE_DENIED_UNKNOWN ? 18 : e.t0 === $a.a.SWAP_DENIED_UNKNOWN ? 18 : 20;
                            break;
                        case 4:
                            return n === $a.b.WAITLISTED ? r.Snackbar.show("You’ve been removed from the waitlist for this session.") : r.Snackbar.show("Your seat has been released."),
                            e.abrupt("break", 22);
                        case 6:
                            return r.Snackbar.show("Your seat has been reserved."),
                            e.abrupt("break", 22);
                        case 8:
                            return e.next = 10,
                            a.getPlaceInLine();
                        case 10:
                            return i = e.sent,
                            s = "1" === i ? "person is" : "people are",
                            r.Snackbar.show("You’ve been waitlisted for this session. ".concat(i, " ").concat(s, " ahead of you in line. If a seat opens up, we’ll automatically change your reservation status."), 6e3),
                            e.abrupt("break", 22);
                        case 14:
                            return r.Snackbar.show("We’re sorry, reservation changes are no longer available for this session."),
                            e.abrupt("break", 22);
                        case 16:
                            return r.Snackbar.show("We couldn’t update your reservation, you already have a reservation in the same time slot."),
                            e.abrupt("break", 22);
                        case 18:
                            return this.handleReservationRequestFailure(new Error("Denied result: ".concat(t))),
                            e.abrupt("break", 22);
                        case 20:
                            return this.handleReservationRequestFailure(new Error("Unknown result: ".concat(t))),
                            e.abrupt("break", 22);
                        case 22:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e, t) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "handleReservationRequestFailure",
            value: function(e) {
                var t = this.props
                  , n = t.session
                  , o = t.UIStore;
                console.warn("Failed to reserve session with ID ".concat(n.id), e),
                o.Snackbar.show("We’re sorry, something went wrong, and we couldn’t update your reservation.")
            }
        }, {
            key: "showFirstReservationDialog",
            value: function() {
                var e = this
                  , t = this.props.UIStore;
                t.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Ka, {
                        customButtons: [Object(i.h)(re, {
                            gaCategory: Na,
                            onClick: function() {
                                t.Modal.close(_.l.dialog),
                                e.reserveSession()
                            },
                            type: J.Fill
                        }, "Reserve")]
                    }),
                    mobileLayout: la.Sheet
                })
            }
        }, {
            key: "showReservationConflictDialog",
            value: function(e) {
                var t, n = this, o = this.props, a = o.UIStore;
                o.session;
                a.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Qa, {
                        customButtons: [Object(i.h)(re, {
                            gaCategory: za,
                            onClick: (t = un()(ln.a.mark((function t() {
                                return ln.a.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            a.Modal.close(_.l.dialog),
                                            n.swapReservation(e);
                                        case 2:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t)
                            }
                            ))),
                            function() {
                                return t.apply(this, arguments)
                            }
                            ),
                            type: J.Fill
                        }, "Yes, update reservation")],
                        sessionTitle: e.title
                    }),
                    mobileLayout: la.Sheet
                })
            }
        }, {
            key: "showCancelReservationDialog",
            value: function() {
                var e, t = this, n = this.props, o = n.UIStore;
                n.session;
                o.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Ya, {
                        customButtons: [Object(i.h)(re, {
                            gaCategory: Wa,
                            onClick: (e = un()(ln.a.mark((function e() {
                                return ln.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            o.Modal.close(_.l.dialog),
                                            t.cancelReservation();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            function() {
                                return e.apply(this, arguments)
                            }
                            ),
                            type: J.Fill
                        }, "Release seat")]
                    }),
                    mobileLayout: la.Sheet
                })
            }
        }, {
            key: "showJoinWaitlistDialog",
            value: function() {
                var e, t = this, n = this.props, o = n.UIStore, a = n.session;
                o.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Ja, {
                        customButtons: [Object(i.h)(re, {
                            gaCategory: Ga,
                            onClick: (e = un()(ln.a.mark((function e() {
                                return ln.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            o.Modal.close(_.l.dialog),
                                            t.reserveSession();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            function() {
                                return e.apply(this, arguments)
                            }
                            ),
                            type: J.Fill
                        }, "Join waitlist")],
                        sessionTitle: a.title
                    }),
                    mobileLayout: la.Sheet
                })
            }
        }, {
            key: "showLeaveWaitlistDialog",
            value: function() {
                var e, t = this, n = this.props, o = n.UIStore;
                n.session;
                o.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Xa, {
                        customButtons: [Object(i.h)(re, {
                            gaCategory: Va,
                            onClick: (e = un()(ln.a.mark((function e() {
                                return ln.a.wrap((function(e) {
                                    for (; ; )
                                        switch (e.prev = e.next) {
                                        case 0:
                                            o.Modal.close(_.l.dialog),
                                            t.cancelReservation();
                                        case 2:
                                        case "end":
                                            return e.stop()
                                        }
                                }
                                ), e)
                            }
                            ))),
                            function() {
                                return e.apply(this, arguments)
                            }
                            ),
                            type: J.Fill
                        }, "Leave waitlist")]
                    }),
                    mobileLayout: la.Sheet
                })
            }
        }, {
            key: "getIconAndTooltip",
            value: function() {
                var e = this.props.session
                  , t = Object(_.X)(e.reservationStatus)
                  , n = Aa.a["reserve".concat(t)];
                if (e.reservationRequestPending)
                    return [Object(i.h)(wa, null), null];
                switch (e.reservationStatus) {
                case $a.b.WAITLISTED:
                    return [Object(i.h)(C, {
                        classNames: n
                    }, "hourglass_full"), "Leave waitlist"];
                case $a.b.NONE:
                    return e.sessionFull ? [Object(i.h)(C, {
                        classNames: n
                    }, "hourglass_empty"), "Join waitlist"] : [Object(i.h)(Ia, {
                        classNames: n
                    }), "Reserve seat"];
                case $a.b.RESERVED:
                default:
                    return [Object(i.h)(Ia, {
                        classNames: n
                    }), "Release seat"]
                }
            }
        }, {
            key: "onClick",
            value: (n = un()(ln.a.mark((function e() {
                var t, n, o, a;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            t = this.props,
                            n = t.SessionStore,
                            o = t.session,
                            e.t0 = o.reservationStatus,
                            e.next = e.t0 === $a.b.NONE ? 4 : e.t0 === $a.b.RESERVED ? 7 : e.t0 === $a.b.WAITLISTED ? 9 : 11;
                            break;
                        case 4:
                            return (a = o.getConflict()) ? this.showReservationConflictDialog(a) : 0 === n.reservations.length ? this.showFirstReservationDialog() : o.sessionFull ? this.showJoinWaitlistDialog() : this.reserveSession(),
                            e.abrupt("break", 11);
                        case 7:
                            return this.showCancelReservationDialog(),
                            e.abrupt("break", 11);
                        case 9:
                            return this.showLeaveWaitlistDialog(),
                            e.abrupt("break", 11);
                        case 11:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.UIStore
                  , a = t.UserStore
                  , r = t.session
                  , s = Object(_.U)(Aa.a.reserve, n, this.hovered && Aa.a.hovered, r.reservationRequestPending && Aa.a.indeterminate)
                  , c = this.getIconAndTooltip()
                  , u = An()(c, 2)
                  , d = u[0]
                  , h = u[1];
                return a.initialized && a.isSignedIn && a.user.isAttendee && r.isReservable && Object(i.h)(x, l()({}, this.props, {
                    ariaLabel: "".concat(h, "."),
                    classNames: s,
                    onMouseEnter: function() {
                        return e.onMouseEnter()
                    },
                    onMouseLeave: function() {
                        return e.onMouseLeave()
                    },
                    onClick: function() {
                        return e.onClick()
                    },
                    tooltip: !o.Screen.isMobile && h,
                    gaLabel: "".concat(h),
                    gaCategory: "Reserve"
                }), d)
            }
        }]),
        t
    }(i.Component);
    tr.defaultProps = {
        status: $a.b.NONE,
        type: a.NotRaised,
        elevation: o.Lowered
    },
    er([Vo.l], tr.prototype, "hovered", void 0),
    er([Vo.d], tr.prototype, "onMouseEnter", null),
    er([Vo.d], tr.prototype, "onMouseLeave", null),
    tr = er([Object(w.b)("SessionStore", "UIStore", "UserStore"), w.c], tr);
    var nr = n(167)
      , or = n.n(nr)
      , ar = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , rr = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).clickHandler = e.onClick.bind(k()(e)),
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                this.base.addEventListener("click", this.clickHandler)
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.base.removeEventListener("click", this.clickHandler)
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.session;
                return Object(i.h)("div", {
                    class: or.a.wrapper
                }, _.s && Object(i.h)("div", null, Object(i.h)(tr, {
                    session: e
                }), Object(i.h)(Ha, {
                    session: e
                })), this.isStreaming && Object(i.h)("div", {
                    class: or.a.sessionLiveIndicator,
                    "aria-label": "This event is now streaming live."
                }, "Live"))
            }
        }, {
            key: "onClick",
            value: function(e) {
                e.stopPropagation(),
                this.props.onAction && this.props.onAction()
            }
        }, {
            key: "isStreaming",
            get: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.session;
                return t.isSessionStreaming(n)
            }
        }]),
        t
    }(i.Component);
    ar([Vo.e], rr.prototype, "isStreaming", null),
    rr = ar([Object(w.b)("TimeStore"), w.c], rr);
    var ir = n(214)
      , sr = n.n(ir)
      , lr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.active
                  , n = e.ariaLabel
                  , o = e.index
                  , a = e.onClick
                  , r = e.onMouseEnter
                  , s = e.onMouseLeave;
                return Object(i.h)("button", {
                    "aria-label": n,
                    tabIndex: 0,
                    role: "button",
                    class: Object(_.U)(sr.a.star, A.a.fab),
                    key: "star-".concat(o),
                    onClick: a,
                    onMouseEnter: r,
                    onMouseLeave: s,
                    "data-g-on": "click",
                    "data-g-event-category": "Ratings",
                    "data-g-event-label": n,
                    "data-g-event-action": "click"
                }, t ? Object(i.h)(C, null, "star") : Object(i.h)(C, null, "star_border"))
            }
        }]),
        t
    }(i.Component)
      , cr = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , ur = -1
      , dr = function() {
        function e() {
            u()(this, e),
            this.componentVisible = !1,
            this.submissionPending = !1,
            this.responses = {
                q1: ur,
                q2: ur,
                q3: ur,
                q4: ur
            }
        }
        return h()(e, [{
            key: "updateRating",
            value: function(e, t) {
                this.responses[e] = t
            }
        }, {
            key: "resetResponseData",
            value: function() {
                for (var e in this.responses)
                    this.responses[e] = -1
            }
        }, {
            key: "showComponent",
            value: function() {
                this.componentVisible = !0
            }
        }, {
            key: "hideComponent",
            value: function() {
                this.componentVisible = !1
            }
        }, {
            key: "updatePending",
            value: function(e) {
                this.submissionPending = e
            }
        }, {
            key: "allQuestionsAnswered",
            get: function() {
                for (var e in this.responses)
                    if (this.responses[e] === ur)
                        return !1;
                return !0
            }
        }]),
        e
    }();
    cr([Vo.l], dr.prototype, "componentVisible", void 0),
    cr([Vo.l], dr.prototype, "submissionPending", void 0),
    cr([Vo.l], dr.prototype, "responses", void 0),
    cr([Vo.d], dr.prototype, "updateRating", null),
    cr([Vo.d], dr.prototype, "resetResponseData", null),
    cr([Vo.e], dr.prototype, "allQuestionsAnswered", null),
    cr([Vo.d], dr.prototype, "showComponent", null),
    cr([Vo.d], dr.prototype, "hideComponent", null),
    cr([Vo.d], dr.prototype, "updatePending", null);
    var hr = n(120)
      , pr = n.n(hr)
      , fr = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , gr = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                hoverIndex: ur
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "onMouseEnter",
            value: function(e) {
                var t = this.props
                  , n = t.RateStore
                  , o = t.questionId;
                n.responses[o] > e && this.state.hoverIndex !== e || this.updateHoverIndex(e)
            }
        }, {
            key: "onMouseLeave",
            value: function() {
                var e = this.props
                  , t = e.RateStore
                  , n = e.questionId;
                this.updateHoverIndex(t.responses[n])
            }
        }, {
            key: "setRating",
            value: function(e) {
                var t = this.props
                  , n = t.RateStore
                  , o = t.questionId;
                if (e === n.responses[o])
                    return this.resetHoverIndex(),
                    void n.updateRating(o, ur);
                this.updateHoverIndex(e),
                n.updateRating(o, e)
            }
        }, {
            key: "updateHoverIndex",
            value: function(e) {
                this.setState({
                    hoverIndex: e
                })
            }
        }, {
            key: "resetHoverIndex",
            value: function() {
                this.updateHoverIndex(ur)
            }
        }, {
            key: "starIsActive",
            value: function(e) {
                return e <= this.state.hoverIndex
            }
        }, {
            key: "renderStars",
            value: function() {
                for (var e = this, t = [], n = function(n) {
                    t.push(Object(i.h)(lr, {
                        ariaLabel: "Rating star ".concat(n + 1, " out of ").concat(5),
                        index: n,
                        active: e.starIsActive(n),
                        onMouseEnter: function() {
                            return e.onMouseEnter(n)
                        },
                        onMouseLeave: function() {
                            return e.onMouseLeave()
                        },
                        onClick: function() {
                            return e.setRating(n)
                        }
                    }))
                }, o = 0; o < 5; o++)
                    n(o);
                return t
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.classNames
                  , n = e.lowRatingDescription
                  , o = e.highRatingDescription
                  , a = e.question;
                return Object(i.h)(Wt, {
                    classNames: Object(_.U)(pr.a.row, t)
                }, Object(i.h)("h4", {
                    class: Object(_.U)(pr.a.question, "subtitle-2")
                }, a), Object(i.h)("div", {
                    class: pr.a.stars
                }, this.renderStars()), Object(i.h)("div", {
                    class: pr.a.starDescriptions
                }, Object(i.h)("span", null, n || "Poor"), Object(i.h)("span", null, o || "Outstanding")))
            }
        }]),
        t
    }(i.Component);
    gr = fr([Object(w.b)("RateStore"), w.c], gr);
    var br = n(96)
      , vr = n.n(br)
      , mr = n(215)
      , yr = n.n(mr)
      , Or = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , jr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        var n;
        return m()(t, e),
        h()(t, [{
            key: "onSubmit",
            value: (n = un()(ln.a.mark((function e() {
                var t, n, o, a, r;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = this.props,
                            n = t.RateStore,
                            o = t.SessionStore,
                            a = t.session,
                            r = {
                                sessionId: a.id,
                                responses: Object(Vo.p)(n.responses),
                                client: "WEB"
                            },
                            e.prev = 2,
                            n.updatePending(!0),
                            e.next = 6,
                            o.sendFeedbackData(r);
                        case 6:
                            e.sent,
                            n.updatePending(!1),
                            e.next = 13;
                            break;
                        case 10:
                            e.prev = 10,
                            e.t0 = e.catch(2),
                            console.warn("Error when rating: ", e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[2, 10]])
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this.props
                  , t = e.RateStore
                  , n = e.SessionStore
                  , o = e.session;
                this.gaveFeedbackDisposer = Object(Vo.m)((function() {
                    return n.userEvents
                }
                ), (function(e) {
                    o.gaveFeedback && t.hideComponent()
                }
                ))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.RateStore.resetResponseData(),
                this.gaveFeedbackDisposer()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.session
                  , o = t.RateStore;
                return Object(i.h)("section", {
                    class: Object(_.U)(vr.a.container)
                }, Object(i.h)("h3", {
                    class: vr.a.title
                }, n.title), Object(i.h)("div", {
                    class: Object(_.U)(vr.a.questions)
                }, yr.a.questions.map((function(e, t) {
                    return Object(i.h)(gr, {
                        classNames: vr.a.question,
                        key: "".concat(n.id, "-q").concat(t + 1),
                        questionId: "q".concat(t + 1),
                        question: e.question,
                        lowRatingDescription: e.low,
                        highRatingDescription: e.high
                    })
                }
                ))), Object(i.h)("div", {
                    class: vr.a.buttons
                }, Object(i.h)(re, {
                    gaCategory: "Rate session",
                    gaLabel: "Cancel",
                    type: J.Text,
                    onClick: function() {
                        return o.hideComponent()
                    }
                }, "Cancel"), Object(i.h)(re, {
                    gaCategory: "Rate session",
                    gaLabel: "Submit",
                    classNames: vr.a.submitButton,
                    disabled: !o.allQuestionsAnswered,
                    onClick: function() {
                        return e.onSubmit()
                    },
                    type: J.Fill
                }, "Submit", o.submissionPending && Object(i.h)(wa, null))))
            }
        }]),
        t
    }(i.Component);
    jr = Or([Object(w.b)("RateStore", "SessionStore"), w.c], jr);
    var kr, Sr = n(78), wr = n.n(Sr), _r = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Default = "Default",
        e.Compact = "Compact",
        e.Card = "Card",
        e.FeedCard = "FeedCard"
    }(kr || (kr = {}));
    var Cr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                _.T && (this.timeReactionDisposer = Object(Vo.m)((function() {
                    return e.props.TimeStore.currentMinutes
                }
                ), (function(t) {
                    return e.updateTime()
                }
                )),
                requestAnimationFrame((function() {
                    "scrollRestoration"in history && (history.scrollRestoration = "manual"),
                    e.updateTime()
                }
                )))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.timeReactionDisposer && this.timeReactionDisposer()
            }
        }, {
            key: "updateTime",
            value: function() {
                var e = this.props.TimeStore
                  , t = this.state.activeScheduleBlock;
                this.state.activeScheduleBlock && e.isBetween(+this.state.activeScheduleBlock.startDate, +this.state.activeScheduleBlock.endDate) || this.setState({
                    activeScheduleBlock: this.findActiveBlock()
                });
                var n = this.state.activeScheduleBlock;
                n && t !== n && this.scrollToNow()
            }
        }, {
            key: "findActiveBlock",
            value: function() {
                var e = this.props
                  , t = e.schedule
                  , n = e.TimeStore;
                return t.map((function(e) {
                    return e.timeBlocks
                }
                )).reduce((function(e, t) {
                    return e.concat(t)
                }
                ), []).find((function(e) {
                    return n.isBetween(+e.startDate, +e.endDate)
                }
                ))
            }
        }, {
            key: "scrollToNow",
            value: function() {
                this.state.activeScheduleBlock && this.scrollToBlock(this.state.activeScheduleBlock)
            }
        }, {
            key: "scrollToBlock",
            value: function(e) {
                if (_.T) {
                    this.props.UIStore;
                    var t = this.getBlockElement(e);
                    if (t) {
                        var n = t.getBoundingClientRect().top - 58;
                        window.scrollTo(0, window.pageYOffset + n)
                    }
                }
            }
        }, {
            key: "getBlockElement",
            value: function(e) {
                var t = +e.startDate;
                return this.el.querySelector('[data-timestamp="'.concat(t, '"]'))
            }
        }, {
            key: "renderSessions",
            value: function(e, t) {
                var n = this.props
                  , o = n.baseRoute
                  , a = n.UIStore
                  , r = Object.values(kr).includes(t) ? t : a.Screen.isMobile && kr.Compact;
                return e.sessions.map((function(e) {
                    return Object(i.h)(Ji, {
                        baseRoute: o,
                        layout: r,
                        session: e
                    })
                }
                ))
            }
        }, {
            key: "render",
            value: function() {
                var e, t = this, n = this.props, o = n.schedule, a = n.layout, r = function(e) {
                    var n, o, r, s, l, c = t.props, u = c.TimeStore, d = c.location, h = ["col-1-lg"], p = Object(_.Q)(d.pathname) && u.isLiveExperience ? e.startDate : e.startDateLocal;
                    return a !== kr.Compact && h.push("col-offset-1-lg"),
                    Object(i.h)("header", {
                        class: h.join(" ")
                    }, (n = +p,
                    o = Object(_.C)(n),
                    r = An()(o, 2),
                    s = r[0],
                    l = r[1],
                    Object(i.h)("h3", {
                        class: wr.a.timeHeading,
                        role: "heading",
                        "aria-label": "".concat(s, " ").concat(l.toUpperCase())
                    }, Object(i.h)("span", {
                        "aria-hidden": "true"
                    }, s), Object(i.h)("span", {
                        "aria-hidden": "true",
                        class: wr.a.timePeriod
                    }, l))))
                };
                return e = a === kr.Compact ? wr.a.sessionListCompact : wr.a.sessionListDefault,
                Object(i.h)("div", {
                    class: e,
                    ref: function(e) {
                        return t.el = e
                    }
                }, o.map((function(e) {
                    return Object(i.h)("section", {
                        id: "".concat(Object(_.Y)(Object(_.G)(e.dateLocal, !0))),
                        class: "grid",
                        "data-date": e.date,
                        "data-scroll": !0
                    }, function(e) {
                        var n = t.props
                          , o = n.TimeStore
                          , r = n.location
                          , s = [wr.a.dateHeading]
                          , l = Object(_.Q)(r.pathname) && o.isLiveExperience ? e.date : e.dateLocal;
                        return a === kr.Compact ? s.push("col-12-lg") : s.push("col-offset-1-lg", "col-10-lg"),
                        Object(i.h)("h1", {
                            class: s.join(" ")
                        }, Object(_.G)(l))
                    }(e), 0 === e.timeBlocks.length && Object(i.h)("div", {
                        class: "grid"
                    }, Object(i.h)("section", {
                        class: "col-offset-1-lg col-10-lg"
                    }, Object(i.h)("p", {
                        class: wr.a.noSessionsMessage
                    }, "No sessions exist for this day."))), e.timeBlocks.map((function(e) {
                        return Object(i.h)("div", {
                            class: "grid ".concat(wr.a.sessionsGroup),
                            "data-timestamp": +e.startDate
                        }, r(e), Object(i.h)("section", {
                            class: "col-10-lg ".concat(wr.a.sessionContainer),
                            role: "list"
                        }, t.renderSessions(e, a)))
                    }
                    )))
                }
                )))
            }
        }]),
        t
    }(i.Component);
    Cr.defaultProps = {
        layout: kr.Default
    },
    Cr = _r([S.h, Object(w.b)("UIStore", "TimeStore"), w.c], Cr);
    var Mr = n(102)
      , Hr = n.n(Mr)
      , Lr = n(55)
      , Tr = n.n(Lr)
      , Ar = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ir = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderSocialLink",
            value: function(e, t) {
                return t && t.length ? Object(i.h)(U, {
                    classNames: Tr.a.socialLink,
                    href: "".concat(t),
                    external: !0,
                    native: !0
                }, e) : ""
            }
        }, {
            key: "renderSocialLinks",
            value: function(e) {
                return Object(i.h)("div", {
                    class: Tr.a.socialLinks
                }, this.renderSocialLink("Twitter", e.Twitter), this.renderSocialLink("GitHub", e.GitHub), this.renderSocialLink("LinkedIn", e.LinkedIn), this.renderSocialLink("Website", e.Website))
            }
        }, {
            key: "getTopImageSrc",
            value: function(e) {
                if (e) {
                    var t;
                    switch (e[0].toLowerCase()) {
                    case "a":
                    case "b":
                        t = "ab";
                        break;
                    case "c":
                    case "d":
                        t = "cd";
                        break;
                    case "e":
                    case "f":
                        t = "ef";
                        break;
                    case "g":
                    case "h":
                        t = "gh";
                        break;
                    case "i":
                    case "j":
                        t = "ij";
                        break;
                    case "k":
                    case "l":
                        t = "kl";
                        break;
                    case "m":
                    case "n":
                        t = "mn";
                        break;
                    case "o":
                    case "p":
                        t = "op";
                        break;
                    case "q":
                    case "r":
                        t = "qr";
                        break;
                    case "s":
                    case "t":
                        t = "st";
                        break;
                    case "u":
                    case "v":
                    case "w":
                        t = "uvw";
                        break;
                    case "x":
                    case "y":
                    case "z":
                        t = "xyz";
                        break;
                    default:
                        t = "ab"
                    }
                    return "".concat("https://storage.googleapis.com/io-19-assets/images/schedule/speaker-details", "/").concat(t, ".png")
                }
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.baseRoute
                  , n = e.speaker
                  , o = e.UIStore;
                return n ? Object(i.h)("div", {
                    "aria-label": "".concat(n.name, " ").concat(n.company)
                }, Object(i.h)(Hr.a, {
                    title: "".concat(_.A.title, " - ").concat(n.name),
                    meta: [{
                        name: "description",
                        content: n.bio
                    }, {
                        name: "og:description",
                        content: n.bio
                    }]
                }), Object(i.h)("div", {
                    class: Tr.a.imageTop
                }, Object(i.h)(We, {
                    src: this.getTopImageSrc(n.name),
                    ariaHidden: !0
                })), Object(i.h)("section", {
                    class: Tr.a.content
                }, Object(i.h)("div", {
                    class: Tr.a.heading
                }, Object(i.h)("div", {
                    class: Object(_.U)(Tr.a.speakerImage, !n.thumbnailUrl && Tr.a.speakerPlaceholderImage)
                }, Er(n)), Object(i.h)("div", {
                    class: Tr.a.speakerName
                }, Object(i.h)("h4", null, n.name), Object(i.h)("p", null, n.company))), Object(i.h)("div", {
                    class: Tr.a.summary
                }, n.socialLinks && this.renderSocialLinks(n.socialLinks), Object(i.h)("div", {
                    class: Tr.a.bio
                }, Object(i.h)("p", null, n.bio))), n.sessions && n.sessions.length ? Object(i.h)("div", {
                    class: Tr.a.sessions
                }, Object(i.h)("h6", {
                    class: "overline"
                }, "Sessions"), Object(i.h)(Cr, {
                    baseRoute: t,
                    schedule: n.groupedSessions,
                    layout: qi.Compact
                })) : "")) : Object(i.h)(Pe, {
                    additionalStyles: {
                        minHeight: o.Screen.isMobile ? "calc(100vh - 32px)" : "568px"
                    },
                    errorMessage: "Error: The speaker you requested could not be found."
                })
            }
        }]),
        t
    }(i.Component);
    Ir = Ar([Object(w.b)("UIStore"), w.c], Ir);
    var xr = n(90)
      , Dr = n.n(xr)
      , Rr = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Er = function(e) {
        var t = e.thumbnailUrl;
        return t ? Object(i.h)(We, {
            src: t,
            alt: "Photo of ".concat(e.name)
        }) : Object(i.h)(Jo, {
            alt: "No photo of ".concat(e.name)
        })
    }
      , Pr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderSpeakerInfo",
            value: function() {
                var e = this.props.speaker
                  , t = Dr.a.image;
                return e.thumbnailUrl || (t = Object(_.U)(Dr.a.image, Dr.a.imagePlaceholder)),
                Object(i.h)("section", {
                    class: Dr.a.speaker
                }, Object(i.h)("div", {
                    class: Dr.a.imageWrapper
                }, Object(i.h)("div", {
                    class: t
                }, Er(e))), Object(i.h)("div", {
                    class: Dr.a.info
                }, Object(i.h)("strong", null, e.name), Object(i.h)("span", null, e.company)))
            }
        }, {
            key: "openModal",
            value: function() {
                var e = this.props
                  , t = e.UIStore
                  , n = e.speaker;
                t.Modal.open({
                    id: _.l.sessionOrSpeaker,
                    body: Object(i.h)(Ir, {
                        speaker: n
                    })
                })
            }
        }, {
            key: "onKeyPressOpenModal",
            value: function(e) {
                (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) && this.openModal()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.speaker
                  , o = t.baseRoute;
                return o ? Object(i.h)(U, {
                    isRouterLink: !0,
                    href: "".concat(o, "/speakers/").concat(n.id),
                    gaCategory: "Speakers List",
                    gaLabel: "Speaker: ".concat(n.id)
                }, this.renderSpeakerInfo()) : Object(i.h)("div", {
                    "data-g-on": "click",
                    "data-g-event-category": "Speakers List",
                    "data-g-event-label": "Speaker: ".concat(n.id),
                    "data-g-event-action": "click",
                    class: Dr.a.speakerInfoWrapper,
                    role: "button",
                    tabIndex: 0,
                    onKeyPress: function(t) {
                        return e.onKeyPressOpenModal(t)
                    },
                    onClick: function() {
                        return e.openModal()
                    }
                }, this.renderSpeakerInfo())
            }
        }]),
        t
    }(i.Component);
    Pr = Rr([Object(w.b)("UIStore"), w.c], Pr);
    var Br = n(19)
      , Ur = n.n(Br)
      , Fr = n(139)
      , Nr = n.n(Fr)
      , Wr = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Gr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.session
                  , n = e.VideoStore;
                return Object(i.h)("div", {
                    "aria-label": "Watch video: ".concat(t.title),
                    role: "button",
                    class: Object(_.U)(Ur.a.sessionItem, Ur.a.sessionItemFeedCard, Nr.a.archivedCard),
                    onClick: function() {
                        return n.open(t)
                    },
                    style: {
                        backgroundImage: "url(https://img.youtube.com/vi/".concat(t.videoId, "/mqdefault.jpg)")
                    },
                    "data-g-on": "click",
                    "data-g-event-category": yi,
                    "data-g-event-label": "Archived session card",
                    "data-g-event-action": "click"
                }, Object(i.h)("div", {
                    class: Nr.a.darkOverlay
                }), Object(i.h)(re, {
                    gaCategory: yi,
                    ariaLabel: "Open video for ".concat(t.title),
                    icon: "play_circle_filled",
                    type: J.Text,
                    textColor: X.White,
                    classNames: Nr.a.watchButton,
                    onClick: function() {
                        return n.open(t)
                    }
                }, "Watch"))
            }
        }]),
        t
    }(i.Component);
    Gr = Wr([Object(w.b)("VideoStore"), w.c], Gr);
    var Vr = n(121)
      , zr = n.n(Vr)
      , qr = n(79)
      , Zr = n.n(qr)
      , Kr = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Yr = {
        Breakfast: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/breakfast/Schedule-Breakfast",
        Lunch: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/lunch/Schedule-Lunch",
        Dinner: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/lunch/Schedule-Lunch",
        DayComplete: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/day-complete/DayComplete",
        SignIn: "https://storage.googleapis.com/io-19-assets/images/live-experience/feed/sign-in/CustomizeSchedule"
    }
      , Jr = function() {
        var e = zr.a.signedInNoSessions;
        return Object(i.h)("div", {
            class: Zr.a.signedInNoSessions
        }, Object(i.h)("h5", null, e.title), Object(i.h)("p", null, e.description), Object(i.h)(re, {
            type: J.Text,
            gaCategory: yi,
            gaLabel: e.buttonLabel,
            href: "".concat(_.c, "/live")
        }, e.buttonLabel))
    }
      , Xr = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UserStore;
                return Object(i.h)(re, {
                    gaCategory: yi,
                    gaLabel: "Sign in",
                    type: J.Fill,
                    onClick: function() {
                        return e.signIn()
                    }
                }, "Sign in")
            }
        }]),
        t
    }(i.Component);
    Xr = Kr([Object(w.b)("UserStore"), w.c], Xr);
    var Qr, $r = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.classNames
                  , n = e.title
                  , o = e.button
                  , a = e.image
                  , r = e.overline;
                return Object(i.h)("div", {
                    class: Object(_.U)(Ur.a.sessionItem, Ur.a.sessionItemCard, Ur.a.sessionItemFeedCard, Zr.a.placeholderCard, t)
                }, Object(i.h)("div", {
                    class: Object(_.U)(Ur.a.sessionInfo, Zr.a.sessionInfo)
                }, r && Object(i.h)("div", {
                    class: Ur.a.sessionInfoOverline
                }, r), Object(i.h)("h6", {
                    class: "".concat(Ur.a.title)
                }, n), o && Object(i.h)("div", {
                    class: Zr.a.button
                }, o)), a || Object(i.h)(We, {
                    src: "".concat(Yr.SignIn, ".png"),
                    src2x: "".concat(Yr.SignIn, "@2x.png"),
                    ariaHidden: !0
                }))
            }
        }]),
        t
    }(i.Component), ei = function(e) {
        var t = e.day;
        return Object(i.h)($r, {
            classNames: Object(_.U)(Zr.a.dayComplete, 3 === t && Zr.a.day3Complete),
            overline: "Day 0".concat(t, " complete"),
            title: "".concat(3 === t ? zr.a.day3Complete.title : zr.a.dayComplete.title),
            image: Object(i.h)(We, {
                src: "".concat(Yr.DayComplete, "-").concat(t, ".png"),
                src2x: "".concat(Yr.DayComplete, "-").concat(t, "@2x.png"),
                ariaHidden: !0
            })
        })
    }, ti = function() {
        return Object(i.h)($r, {
            classNames: Object(_.U)(Zr.a.signInFeedCard),
            overline: "MY I/O",
            title: "".concat(zr.a.customize.title),
            button: Object(i.h)(Xr, null)
        })
    }, ni = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e[e.LevelFilter = 0] = "LevelFilter",
        e[e.LivestreamFilter = 1] = "LivestreamFilter",
        e[e.LocationFilter = 2] = "LocationFilter",
        e[e.MyIOFilter = 3] = "MyIOFilter",
        e[e.TrackFilter = 4] = "TrackFilter",
        e[e.TypeFilter = 5] = "TypeFilter"
    }(Qr || (Qr = {}));
    var oi = {
        type: Qr.MyIOFilter,
        match: "my-io"
    }
      , ai = {
        type: Qr.LivestreamFilter,
        match: "livestream"
    }
      , ri = function() {
        function e() {
            u()(this, e),
            this.activeFilters = []
        }
        return h()(e, [{
            key: "applyFilter",
            value: function(e, t) {
                switch (e.type) {
                case Qr.LevelFilter:
                case Qr.TrackFilter:
                case Qr.TypeFilter:
                    return t.tags && t.tags.some((function(t) {
                        return t.slug === String(e.match)
                    }
                    ));
                case Qr.LivestreamFilter:
                    return t.livestream === Boolean(e.match);
                case Qr.LocationFilter:
                    return t.location && t.location.slug === String(e.match);
                case Qr.MyIOFilter:
                    return t.bookmarked || t.reservedOrWaitlisted || t.hasBundledBookmarksOrReservations;
                default:
                    return !1
                }
            }
        }, {
            key: "filterSessions",
            value: function(e) {
                var t = this;
                return 0 === this.activeFilters.length ? e : e.filter((function(e) {
                    return t.activeFiltersByCategory.every((function(n) {
                        return n.some((function(n) {
                            return t.applyFilter(n, e)
                        }
                        ))
                    }
                    ))
                }
                ))
            }
        }, {
            key: "filterSchedule",
            value: function(e) {
                var t = this;
                if (0 === this.activeFilters.length)
                    return e;
                var n = [];
                return e.forEach((function(e) {
                    var o = {
                        date: new Date(e.date.getTime()),
                        dateLocal: new Date(e.dateLocal.getTime()),
                        timeBlocks: []
                    };
                    e.timeBlocks.forEach((function(e) {
                        var n = {
                            startDate: new Date(e.startDate.getTime()),
                            endDate: new Date(e.endDate.getTime()),
                            startDateLocal: new Date(e.startDateLocal.getTime()),
                            sessions: t.filterSessions(e.sessions)
                        };
                        n.sessions.length > 0 && o.timeBlocks.push(n)
                    }
                    )),
                    n.push(o)
                }
                )),
                n
            }
        }, {
            key: "isFilterActive",
            value: function(e) {
                var t = this.findActiveFilter(e);
                return An()(t, 1)[0]
            }
        }, {
            key: "clearFilters",
            value: function() {
                this.activeFilters = []
            }
        }, {
            key: "toggleFilter",
            value: function(e) {
                var t = this.findActiveFilter(e)
                  , n = An()(t, 1)[0];
                this.activeFilters = n ? this.activeFilters.filter((function(t) {
                    return t.match !== e.match
                }
                )) : [].concat(te()(this.activeFilters), [e])
            }
        }, {
            key: "updateActiveFiltersFromParams",
            value: function(e, t) {
                var n = e.replace("?", "").split("&").filter((function(e) {
                    return e.length > 0
                }
                ));
                n.length && (this.activeFilters = n.filter((function(e) {
                    return !e.includes(oi.match) && parseInt(e.split("=")[0])in Qr
                }
                )).map((function(e) {
                    var t = e.split("=");
                    return {
                        type: parseInt(t[0]),
                        match: "".concat(t[1])
                    }
                }
                )))
            }
        }, {
            key: "findActiveFilter",
            value: function(e) {
                var t = !1
                  , n = -1;
                return this.activeFilters.find((function(o, a) {
                    return o.type === e.type && o.match === e.match && (t = !0,
                    n = a),
                    t
                }
                )),
                [t, n]
            }
        }, {
            key: "activeFiltersByCategory",
            get: function() {
                return Object.values(Object(_.L)(this.activeFilters, "type"))
            }
        }, {
            key: "queryParams",
            get: function() {
                return this.activeFilters.filter((function(e) {
                    return e.type !== Qr.MyIOFilter
                }
                )).map((function(e) {
                    return "".concat(e.type, "=").concat(e.match)
                }
                )).join("&")
            }
        }]),
        e
    }();
    ni([Vo.l], ri.prototype, "activeFilters", void 0),
    ni([Vo.e], ri.prototype, "activeFiltersByCategory", null),
    ni([Vo.d], ri.prototype, "clearFilters", null),
    ni([Vo.d], ri.prototype, "toggleFilter", null),
    ni([Vo.e], ri.prototype, "queryParams", null),
    ni([Vo.d], ri.prototype, "updateActiveFiltersFromParams", null);
    var ii = n(216)
      , si = n.n(ii)
      , li = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , ci = function(e) {
        var t = e.children;
        return Object(i.h)("div", {
            role: "listitem",
            class: si.a.card
        }, t)
    }
      , ui = function(e) {
        switch (e) {
        case To.b.Day1:
            return [To.c.mainKeynoteStart, To.c.day1AfterHoursStart];
        case To.b.Day2:
            return [To.c.day2Start, To.c.day2ConcertStart];
        case To.b.Day3:
            return [To.c.day3Start, To.c.day3End]
        }
    }
      , di = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                feedSessions: [],
                isCurrentDay: !0,
                isArchived: !1
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "updateIsArchived",
            value: function() {
                var e = this.props.TimeStore;
                if (this.dayTimes) {
                    var t = e.currentConferencePhase >= To.a.Day3Complete || e.currentTime >= this.dayTimes[1];
                    this.setState({
                        isArchived: t
                    })
                }
            }
        }, {
            key: "updateFeedSessions",
            value: function() {
                var e, t, n, o = this.props, a = o.FilterStore, r = o.SessionStore, i = o.TimeStore, s = o.UserStore;
                this.updateIsArchived(),
                this.state.isArchived ? (t = this.dayTimes[0],
                n = this.dayTimes[1] + _.p) : s.isSignedIn ? (t = i.currentTime,
                n = this.dayTimes[1]) : i.isBetween(this.dayTimes[0], this.dayTimes[1]) ? (t = i.currentTime,
                n = i.currentConferencePhase === To.a.MainKeynote ? i.currentTime + 5 * _.n : i.currentTime + 3 * _.n) : n = (t = this.dayTimes[0]) + 2 * _.n,
                e = r.getSessionsBetweenTime(t, n),
                this.state.isArchived && (e = e.filter((function(e) {
                    return e.isFeatured && e.isArchived
                }
                ))),
                e = s.initialized && s.isSignedIn && i.currentTime < this.dayTimes[1] && !this.state.isArchived ? e.filter((function(e) {
                    return a.applyFilter(oi, e)
                }
                )) : e.filter((function(e) {
                    return e.livestream
                }
                )),
                this.setState({
                    feedSessions: e
                })
            }
        }, {
            key: "renderItems",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.UserStore
                  , o = e.day
                  , a = [];
                return this.state.isArchived || n.isSignedIn || a.push(Object(i.h)(ti, null)),
                this.state.isArchived ? a = a.concat(this.state.feedSessions.map((function(e) {
                    return Object(i.h)(Gr, {
                        session: e
                    })
                }
                ))) : this.state.feedSessions.forEach((function(e, t) {
                    a.push(Object(i.h)(Ji, {
                        ariaRole: "button",
                        session: e,
                        layout: qi.FeedCard,
                        hasTimeOverline: !0
                    }))
                }
                )),
                this.state.isArchived && t.currentConferencePhase < To.a.LiveExperienceEnd && a.push(Object(i.h)(ei, {
                    day: o
                })),
                a.map((function(e) {
                    return Object(i.h)(ci, null, e)
                }
                ))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.day
                  , o = t.TimeStore
                  , a = t.SessionStore
                  , r = t.UserStore;
                this.setState({
                    isCurrentDay: o.currentDay === n
                }),
                this.dayTimes = ui(n),
                this.updateFeedSessions(),
                this.userEventsDisposer = Object(Vo.m)((function(e) {
                    return a.userEvents
                }
                ), (function() {
                    e.updateFeedSessions()
                }
                )),
                this.currentMinutesDisposer = Object(Vo.m)((function() {
                    return o.currentMinutes
                }
                ), (function(t) {
                    e.updateFeedSessions()
                }
                )),
                this.currentDayDisposer = Object(Vo.m)((function() {
                    return o.currentDay
                }
                ), (function(t) {
                    e.setState({
                        isCurrentDay: t === n
                    })
                }
                )),
                this.userSignedInDisposer = Object(Vo.m)((function() {
                    return r.isSignedIn
                }
                ), (function(t) {
                    e.updateFeedSessions()
                }
                ))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                "function" == typeof this.userEventsDisposer && this.userEventsDisposer(),
                "function" == typeof this.currentMinutesDisposer && this.currentMinutesDisposer(),
                "function" == typeof this.currentDayDisposer && this.currentDayDisposer(),
                "function" == typeof this.userSignedInDisposer && this.userSignedInDisposer()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props.day;
                e.day !== this.props.day && (this.dayTimes = ui(t))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.SessionStore
                  , n = e.UserStore;
                if (t.sessions && t.sessions.length && n.initialized)
                    return Object(i.h)("section", null, this.renderItems())
            }
        }]),
        t
    }(i.Component);
    di = li([Object(w.b)("FilterStore", "SessionStore", "TimeStore", "UIStore", "UserStore"), w.c], di);
    var hi = n(80)
      , pi = n.n(hi)
      , fi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , gi = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                isScrolledMaxLeft: !0,
                isScrolledMaxRight: !1,
                scrollLeft: 0,
                scrollableWidth: 1440
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "updateScrollLeft",
            value: function() {
                this.carouselContainer && this.state.scrollLeft !== this.carouselContainer.scrollLeft && this.setState({
                    scrollLeft: this.carouselContainer.scrollLeft
                })
            }
        }, {
            key: "updateScrollableWidth",
            value: function() {
                if (this.carouselContainer) {
                    var e = this.carouselContainer.scrollWidth - this.carouselContainer.clientWidth;
                    e !== this.state.scrollableWidth && 0 !== this.carouselContainer.clientWidth && (this.setState({
                        scrollableWidth: e
                    }),
                    this.updateArrows())
                }
            }
        }, {
            key: "updateArrows",
            value: function() {
                var e = this.state
                  , t = e.scrollLeft
                  , n = e.isScrolledMaxLeft
                  , o = e.isScrolledMaxRight
                  , a = 0 === t
                  , r = t >= e.scrollableWidth;
                n !== a && this.setState({
                    isScrolledMaxLeft: a
                }),
                o !== r && this.setState({
                    isScrolledMaxRight: r
                })
            }
        }, {
            key: "slideCarousel",
            value: function(e) {
                var t = this;
                if (_.T && !this.props.UIStore.Screen.isMobile) {
                    var n = this.carouselContainer.clientWidth
                      , o = (n - n % 392) * e;
                    window.requestAnimationFrame((function() {
                        t.carouselContainer.scrollLeft = t.state.scrollLeft + o
                    }
                    ))
                }
            }
        }, {
            key: "onScroll",
            value: function() {
                this.carouselContainer && this.state.scrollLeft !== this.carouselContainer.scrollLeft && (this.updateScrollLeft(),
                this.updateArrows())
            }
        }, {
            key: "updateScrollState",
            value: function() {
                this.updateScrollableWidth(),
                this.updateArrows()
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                if (_.T && this.carouselContainer) {
                    var t = this.props
                      , n = t.TimeStore
                      , o = t.SessionStore
                      , a = t.UserStore
                      , r = t.day;
                    this.dayTimes = ui(r),
                    this.updateScrollState(),
                    this.scrollHandler = this.onScroll.bind(this),
                    this.carouselContainer.addEventListener("scroll", this.scrollHandler),
                    window.addEventListener(_.u.RESIZE, this.scrollHandler),
                    this.currentMinutesDisposer = Object(Vo.m)((function() {
                        return n.currentMinutes
                    }
                    ), (function() {
                        e.updateScrollState()
                    }
                    )),
                    this.sessionsDisposer = Object(Vo.m)((function() {
                        return o.sessions
                    }
                    ), (function() {
                        e.updateScrollState()
                    }
                    )),
                    this.userEventsDisposer = Object(Vo.m)((function() {
                        return o.userEvents
                    }
                    ), (function() {
                        e.updateScrollState()
                    }
                    )),
                    this.userSignedInDisposer = Object(Vo.m)((function() {
                        return a.isSignedIn
                    }
                    ), (function() {
                        e.updateScrollState()
                    }
                    ))
                }
            }
        }, {
            key: "removeListeners",
            value: function() {
                _.T && (this.carouselContainer && this.carouselContainer.removeEventListener("scroll", this.scrollHandler),
                window.removeEventListener(_.u.RESIZE, this.scrollHandler))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.removeListeners(),
                "function" == typeof this.currentMinutesDisposer && this.currentMinutesDisposer(),
                "function" == typeof this.sessionsDisposer && this.sessionsDisposer(),
                "function" == typeof this.userEventsDisposer && this.userEventsDisposer(),
                "function" == typeof this.userSignedInDisposer && this.userSignedInDisposer()
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return t.scrollableWidth !== this.state.scrollableWidth || t.isScrolledMaxLeft !== this.state.isScrolledMaxLeft || t.isScrolledMaxRight !== this.state.isScrolledMaxRight || e.day !== this.props.day
            }
        }, {
            key: "componentDidUpdate",
            value: function(e, t) {
                this.carouselContainer && this.carouselContainer.scrollWidth > 0 && t.scrollableWidth !== this.carouselContainer.scrollWidth - this.carouselContainer.clientWidth && this.updateScrollState()
            }
        }, {
            key: "renderCta",
            value: function() {
                var e = this.isArchived && _.v
                  , t = e ? _.v : "".concat(_.c, "/live")
                  , n = e ? "See all videos" : "View live schedule";
                return Object(i.h)(re, {
                    classNames: pi.a.viewLive,
                    external: !!e,
                    gaCategory: yi,
                    gaLabel: n,
                    href: t,
                    type: J.Text
                }, n)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.day
                  , s = t.UIStore
                  , l = this.state
                  , c = l.isScrolledMaxLeft
                  , u = l.isScrolledMaxRight;
                return Object(i.h)("div", {
                    class: Object(_.U)(pi.a.list),
                    ref: function(t) {
                        return e.el = t
                    }
                }, !this.isSignedInNoSessions && Object(i.h)("div", {
                    class: pi.a.heading
                }, Object(i.h)("h5", null, this.title), Object(i.h)("div", {
                    class: pi.a.carouselControlsWrapper
                }, this.renderCta(), !s.Screen.isMobile && Object(i.h)("div", {
                    class: pi.a.carouselControls
                }, Object(i.h)(x, {
                    gaCategory: yi,
                    gaLabel: "Carousel back arrow",
                    disabled: c,
                    onClick: function() {
                        return e.slideCarousel(-1)
                    },
                    type: a.Default,
                    elevation: o.Flat,
                    ariaLabel: "View earlier upcoming sessions.",
                    layout: r.Compact,
                    icon: "arrow_back"
                }), Object(i.h)(x, {
                    gaCategory: yi,
                    gaLabel: "Carousel forward arrow",
                    disabled: u,
                    onClick: function() {
                        return e.slideCarousel(1)
                    },
                    type: a.Default,
                    elevation: o.Flat,
                    ariaLabel: "View later upcoming sessions.",
                    layout: r.Compact,
                    icon: "arrow_forward"
                })))), Object(i.h)("div", {
                    class: Object(_.U)(!this.isSignedInNoSessions && pi.a.hideScrollbar, !this.isSignedInNoSessions && "full-bleed-exact", this.isArchived && pi.a.isArchived)
                }, Object(i.h)("div", {
                    role: "list",
                    "aria-orientation": "horizontal",
                    class: "".concat(pi.a.cards),
                    ref: function(t) {
                        return e.carouselContainer = t
                    }
                }, this.isSignedInNoSessions ? Object(i.h)(Jr, null) : Object(i.h)(di, {
                    day: n
                }))))
            }
        }, {
            key: "title",
            get: function() {
                var e = this.props.UserStore;
                return this.isArchived ? "Highlights" : e.initialized && e.isSignedIn ? "My upcoming sessions" : e.initialized && !e.isSignedIn ? "Live & upcoming" : void 0
            }
        }, {
            key: "isSignedInNoSessions",
            get: function() {
                var e = this.props
                  , t = e.day
                  , n = e.SessionStore
                  , o = e.UserStore
                  , a = e.TimeStore
                  , r = e.FilterStore
                  , i = a.currentTime
                  , s = ui(t)[1]
                  , l = n.getSessionsBetweenTime(i, s);
                return l = l.filter((function(e) {
                    return r.applyFilter(oi, e)
                }
                )),
                o.initialized && o.isSignedIn && 0 === l.length && !this.isArchived
            }
        }, {
            key: "isArchived",
            get: function() {
                var e = this.props.TimeStore;
                return !!this.dayTimes && (e.currentConferencePhase >= To.a.Day3Complete || e.currentTime >= this.dayTimes[1])
            }
        }]),
        t
    }(i.Component);
    gi = fi([Object(w.b)("FilterStore", "SessionStore", "TimeStore", "UIStore", "UserStore"), w.c], gi);
    var bi = n(140)
      , vi = n.n(bi)
      , mi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , yi = "Upcoming sessions"
      , Oi = [{
        label: "Day 1"
    }, {
        label: "Day 2"
    }, {
        label: "Day 3"
    }]
      , ji = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "getDisabledTabs",
            value: function() {
                var e = this.props.TimeStore;
                return e.currentDay === To.b.Day1 ? [1, 2] : e.currentDay === To.b.Day2 ? [2] : void 0
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.classNames
                  , n = e.TimeStore
                  , o = e.isRecap;
                if (e.isStorybook || !(n.currentConferencePhase < To.a.Day1Sessions))
                    return Object(i.h)("div", {
                        class: Object(_.U)(vi.a.upcoming, o && vi.a.recap)
                    }, Object(i.h)(et, {
                        classNames: Object(_.U)(vi.a.tabs, t),
                        disabledTabIndexes: this.getDisabledTabs(),
                        gaCategory: yi,
                        defaultActiveTab: n.currentDay >= To.b.Day1 && n.currentDay <= To.b.Day3 ? n.currentDay - 1 : 0,
                        type: Ve.Default,
                        flushLeft: !0,
                        tabItems: Oi
                    }, Object(i.h)("article", null, Object(i.h)(gi, {
                        day: To.b.Day1
                    })), Object(i.h)("article", null, Object(i.h)(gi, {
                        day: To.b.Day2
                    })), Object(i.h)("article", null, Object(i.h)(gi, {
                        day: To.b.Day3
                    }))))
            }
        }]),
        t
    }(i.Component);
    ji = mi([Object(w.b)("TimeStore"), w.c], ji);
    var ki = n(108)
      , Si = n.n(ki)
      , wi = function(e) {
        if (e) {
            var t = ["amphitheatre", "stage-3", "stage-4", "stage-5", "stage-6", "stage-7", "stage-8", "codelabs", "office-hours"]
              , n = "stage-4";
            if (e.location && e.location.name) {
                var o = Object(_.Y)(e.location.name);
                t.includes(o) && (n = o)
            }
            if (e.type && e.type.name) {
                var a = Object(_.Y)(e.type.name);
                t.includes(a) && (n = a)
            }
            return "".concat(_.r, "/").concat(n, ".png")
        }
    }
      , _i = function(e) {
        var t, n, o, a = e.session, r = e.isStreaming, s = e.onVideoClick;
        return r || a.isArchived ? (r ? (t = "Watch livestream.",
        n = "Watch livestream",
        o = "This session is happening now.") : (t = "Watch archived video.",
        n = "Watch archived"),
        Object(i.h)("button", {
            class: Si.a.videoTop,
            "aria-label": t,
            onClick: s,
            "data-g-on": "click",
            "data-g-event-category": "".concat(yi),
            "data-g-event-label": n,
            "data-g-event-action": "click"
        }, Object(i.h)(C, {
            classNames: Si.a.videoTopPlayIcon
        }, "play_circle_filled"), Object(i.h)("div", {
            class: Si.a.videoLabel
        }, o), Object(i.h)(vs, {
            videoId: a.videoId,
            autoplay: r && !a.isArchived,
            classNames: Si.a.videoPlayer
        }))) : Object(i.h)("div", {
            class: Si.a.imageTop
        }, Object(i.h)(We, {
            src: wi(a),
            ariaHidden: !0
        }))
    }
      , Ci = n(26)
      , Mi = n.n(Ci)
      , Hi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Li = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "tags",
            value: function() {
                var e = [];
                return this.props.session.type && e.push(this.props.session.type),
                e = e.concat(this.props.session.topics),
                e = e.concat(this.props.session.levels),
                e
            }
        }, {
            key: "openVideoPlayer",
            value: function() {
                var e = this.props
                  , t = e.session;
                e.VideoStore.open(t)
            }
        }, {
            key: "renderMobileFabs",
            value: function() {
                var e = this.props.session;
                if (_.s)
                    return Object(i.h)("div", {
                        class: Mi.a.fabsMobile
                    }, Object(i.h)("div", {
                        class: Mi.a.reserveMobile
                    }, Object(i.h)(tr, {
                        type: a.Default,
                        session: e
                    })), Object(i.h)("div", {
                        class: Mi.a.fabsMobileLeft
                    }, Object(i.h)(Ha, {
                        session: e
                    })))
            }
        }, {
            key: "renderDesktopFabs",
            value: function() {
                var e = this.props
                  , t = e.session
                  , n = e.UserStore
                  , o = !n.isSignedIn || !n.user.isAttendee || !t.isReservable;
                if (_.s)
                    return Object(i.h)("div", {
                        class: Mi.a.fabsDesktop
                    }, Object(i.h)("div", {
                        class: Mi.a.reserveDesktop
                    }, Object(i.h)(tr, {
                        type: a.Default,
                        session: t
                    }), n.initialized && o && Object(i.h)(Ha, {
                        type: a.Default,
                        session: t
                    })), !o && Object(i.h)("div", {
                        class: Mi.a.bookmarkDesktop
                    }, Object(i.h)(Ha, {
                        type: a.Default,
                        layout: r.Compact,
                        session: t
                    })))
            }
        }, {
            key: "renderSessionInfo",
            value: function() {
                var e = this.props
                  , t = e.SessionStore
                  , n = e.TimeStore
                  , o = e.UIStore
                  , a = e.baseRoute
                  , r = e.location
                  , s = e.session
                  , l = Object(_.Q)(r.pathname) && n.isLiveExperience ? s.startTime : s.startTimeLocal
                  , c = Object(_.Q)(r.pathname) && n.isLiveExperience ? s.endTime : s.endTimeLocal;
                return Object(i.h)("div", null, !o.Screen.isLessThanLaptop && this.renderDesktopFabs(), Object(i.h)("div", {
                    class: Mi.a.summary
                }, Object(i.h)("h3", {
                    class: Mi.a.title
                }, s.title), Object(i.h)("div", {
                    class: Mi.a.timeLocation
                }, Object(i.h)("strong", {
                    class: Mi.a.time
                }, Object(_.E)(l), ". ", Object(_.J)(l), " ", Object(_.F)(l), ", ", Object(_.C)(+l), " -", " ", Object(_.C)(+c)), Object(i.h)("p", {
                    class: Mi.a.roomName
                }, s.location && s.location.name && !!s.location.name.length && Object(i.h)("span", null, s.location.name, Object(i.h)("br", {
                    class: "hiddenGtTablet"
                })), s.levels && !!s.levels.length && Object(i.h)("span", {
                    class: "hiddenGtTablet"
                }, s.levels.map((function(e, t) {
                    return "".concat(e.name).concat(t !== s.levels.length - 1 ? "," : "")
                }
                ))), s.livestream && Object(i.h)(C, {
                    classNames: Mi.a.livestreamIcon
                }, "videocam"), this.renderRateSessionButton())), Object(i.h)("div", {
                    class: Mi.a.description
                }, Object(i.h)("p", null, s.description)), Object(i.h)("div", {
                    class: "".concat(Mi.a.tags, " hiddenLtTablet")
                }, this.tags().map((function(e) {
                    return Object(i.h)(zt, {
                        category: e.category,
                        color: e.color,
                        fontColor: e.fontColor,
                        label: e.name,
                        tag: e.tag
                    })
                }
                )))), !!s.speakers.length && Object(i.h)("div", {
                    class: Mi.a.speakers
                }, Object(i.h)("h6", {
                    class: "overline"
                }, "Speakers"), Object(i.h)("ul", {
                    "aria-label": "Session speakers",
                    class: "reset"
                }, s.speakers.map((function(e) {
                    return Object(i.h)("li", null, Object(i.h)(Pr, {
                        baseRoute: a,
                        speaker: e
                    }))
                }
                )))), !!s.relatedEvents.length && Object(i.h)("div", {
                    class: Mi.a.relatedEvents
                }, Object(i.h)("h6", {
                    class: "overline"
                }, s.shouldBundle ? "Reservations" : "Related events"), Object(i.h)(Cr, {
                    baseRoute: a,
                    schedule: t.buildSchedule(s.relatedEvents),
                    layout: qi.Compact
                })), o.Screen.isLessThanLaptop && this.renderMobileFabs())
            }
        }, {
            key: "toggleRateSession",
            value: function(e) {
                this.setState({
                    rateSessionOpen: e
                })
            }
        }, {
            key: "renderRateSessionButton",
            value: function() {
                var e = this.props
                  , t = e.RateStore
                  , n = e.UserStore
                  , o = e.TimeStore
                  , a = e.session
                  , r = n.initialized && n.isSignedIn && n.user.isAttendee
                  , s = o.isSessionCompleted(a) && !a.isBundle;
                if (r && s)
                    return Object(i.h)("div", {
                        class: Mi.a.rateSessionButton
                    }, Object(i.h)(re, {
                        gaLabel: "Rate session",
                        gaCategory: "".concat("Session Detail"),
                        disabled: a.gaveFeedback,
                        classNames: a.gaveFeedback && Mi.a.rateSessionButtonDisabled,
                        type: J.Fill,
                        icon: "rate_review",
                        onClick: function() {
                            return t.showComponent()
                        }
                    }, a.gaveFeedback ? "Thanks for rating" : "Rate session"))
            }
        }, {
            key: "renderRateSession",
            value: function() {
                var e = this.props.session;
                return Object(i.h)("div", {
                    class: Mi.a.rateSession
                }, Object(i.h)(jr, {
                    session: e
                }))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.RateStore.hideComponent()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.RateStore
                  , o = t.UIStore
                  , a = t.TimeStore
                  , r = t.session;
                if (!r)
                    return Object(i.h)(Pe, {
                        additionalStyles: {
                            minHeight: o.Screen.isMobile ? "calc(100vh - 32px)" : "568px"
                        },
                        errorMessage: "Error: The session you requested could not be found."
                    });
                var s = a.isSessionStreaming(r) || r.isArchived;
                return Object(i.h)("div", {
                    key: "".concat(r.id, "-session-detail")
                }, Object(i.h)(Hr.a, {
                    title: "".concat(_.A.title, " - ").concat(r.title),
                    meta: [{
                        name: "description",
                        content: r.description
                    }, {
                        name: "og:description",
                        content: r.description
                    }]
                }), Object(i.h)(_i, {
                    session: r,
                    isStreaming: a.isSessionStreaming(r),
                    onVideoClick: function() {
                        return e.openVideoPlayer()
                    }
                }), Object(i.h)("section", {
                    class: Object(_.U)(Mi.a.content, s && Mi.a.contentWithVideo)
                }, n.componentVisible ? this.renderRateSession() : this.renderSessionInfo()))
            }
        }]),
        t
    }(i.Component);
    Li = Hi([S.h, Object(w.b)("RateStore", "SessionStore", "UIStore", "UserStore", "TimeStore", "VideoStore"), w.c], Li);
    var Ti = function e(t) {
        u()(this, e),
        this.store = t
    }
      , Ai = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "toJSON",
            value: function() {
                return {
                    id: this.id,
                    name: this.name
                }
            }
        }], [{
            key: "fromFirebaseData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.slug = e.name ? Object(_.Y)(e.name) : "",
                o
            }
        }, {
            key: "fromJsonData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.slug = e.name ? Object(_.Y)(e.name) : "",
                o
            }
        }]),
        t
    }(Ti)
      , Ii = n(48)
      , xi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Di = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        var n, o, a, r, i;
        return m()(t, e),
        h()(t, [{
            key: "getConflict",
            value: function() {
                return this.store.getConflictingSessionForSessionId(this.id)
            }
        }, {
            key: "toggleBookmark",
            value: (i = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.store.setSessionBookmark(this.id, !this.bookmarked);
                        case 2:
                            return e.abrupt("return", this.bookmarked);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return i.apply(this, arguments)
            }
            )
        }, {
            key: "reserve",
            value: (r = un()(ln.a.mark((function e() {
                var t;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.updateReservationPending(!0),
                            e.next = 3,
                            this.store.reserveSession(this.id);
                        case 3:
                            return t = e.sent,
                            this.updateReservationPending(!1),
                            e.abrupt("return", t);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "cancelReservation",
            value: (a = un()(ln.a.mark((function e() {
                var t;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.updateReservationPending(!0),
                            e.next = 3,
                            this.store.cancelSessionReservation(this.id);
                        case 3:
                            return t = e.sent,
                            this.updateReservationPending(!1),
                            e.abrupt("return", t);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "swapReservation",
            value: (o = un()(ln.a.mark((function e(t) {
                var n;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return this.updateReservationPending(!0),
                            e.next = 3,
                            this.store.swapSessionReservation(t, this.id);
                        case 3:
                            return n = e.sent,
                            this.updateReservationPending(!1),
                            e.abrupt("return", n);
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "getPlaceInLine",
            value: (n = un()(ln.a.mark((function e() {
                var t;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (this.reservationStatus === $a.b.WAITLISTED) {
                                e.next = 2;
                                break
                            }
                            throw new Error("getPlaceInLine() failed for session ".concat(this.id, " with a status of ").concat(this.reservationStatus, ". This function can only be called for sessions with a status of waitlisted"));
                        case 2:
                            return e.next = 4,
                            this.store.getPlaceInLineForSessionId(this.id);
                        case 4:
                            if (-1 !== (t = e.sent)) {
                                e.next = 7;
                                break
                            }
                            return e.abrupt("return", "99+");
                        case 7:
                            return e.abrupt("return", String(t));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "updateReservationPending",
            value: function(e) {
                this.reservationRequestPending = e
            }
        }, {
            key: "toJSON",
            value: function() {
                return {
                    description: this.description,
                    doryLink: this.doryLink,
                    endTimestamp: this.endTime.getTime(),
                    id: this.id,
                    isFeatured: this.isFeatured,
                    livestream: this.livestream,
                    room: this.location ? this.location.id : void 0,
                    relatedSessions: this.relatedEventsIDs,
                    speakers: this.speakers.map((function(e) {
                        return e.id
                    }
                    )),
                    startTimestamp: this.startTime.getTime(),
                    tagNames: this.tags.map((function(e) {
                        return e.tag
                    }
                    )),
                    title: this.title,
                    youtubeUrl: this.videoUrl,
                    youtubeVideoType: this.videoType
                }
            }
        }, {
            key: "videoId",
            get: function() {
                return Object(_.V)(this.videoUrl)
            }
        }, {
            key: "bookmarked",
            get: function() {
                return this.store.isSessionBookmarked(this.id)
            }
        }, {
            key: "duration",
            get: function() {
                return this.endTime.getTime() - this.startTime.getTime()
            }
        }, {
            key: "reservedOrWaitlisted",
            get: function() {
                return this.reservationStatus === $a.b.RESERVED || this.reservationStatus === $a.b.WAITLISTED
            }
        }, {
            key: "reservationStatus",
            get: function() {
                return this.store.getReservationStatusForSessionId(this.id)
            }
        }, {
            key: "gaveFeedback",
            get: function() {
                return this.store.isFeedbackCompletedForSession(this.id)
            }
        }, {
            key: "endTimeLocal",
            get: function() {
                return Object(_.x)(this.endTime)
            }
        }, {
            key: "isArchived",
            get: function() {
                return this.videoId && "recording" === this.videoType
            }
        }, {
            key: "isReservable",
            get: function() {
                return !!this.type && ("type_sessions" === this.type.tag || this.shouldBundle && !this.isBundle)
            }
        }, {
            key: "hasBundledBookmarksOrReservations",
            get: function() {
                return !!this.shouldBundle && this.relatedEvents.some((function(e) {
                    return e.bookmarked || e.reservedOrWaitlisted
                }
                ))
            }
        }, {
            key: "levels",
            get: function() {
                return this.tags.filter((function(e) {
                    return "level" === e.category
                }
                ))
            }
        }, {
            key: "relatedEvents",
            get: function() {
                var e = this;
                return this.relatedEventsIDs.map((function(t) {
                    return e.store.getSessionById(t)
                }
                )).filter(Boolean)
            }
        }, {
            key: "shouldBundle",
            get: function() {
                return !!this.type && ("type_appreviews" === this.type.tag || "type_officehours" === this.type.tag || "type_gamereviews" === this.type.tag)
            }
        }, {
            key: "startTimeLocal",
            get: function() {
                return Object(_.x)(this.startTime)
            }
        }, {
            key: "topics",
            get: function() {
                return this.tags.filter((function(e) {
                    return "topic" === e.category
                }
                ))
            }
        }, {
            key: "type",
            get: function() {
                var e = this.tags.find((function(e) {
                    return "type" === e.category
                }
                ));
                return e || null
            }
        }], [{
            key: "fromFirebaseData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.endTime = new Date(e.endTimestamp),
                o.location = Ai.fromFirebaseData(e.room, n),
                o.relatedEventsIDs = e.relatedSessions,
                o.sessionFull = e.sessionFull,
                o.speakers = e.speakers.map((function(e) {
                    return Ri.fromFirebaseData(e, n)
                }
                )),
                o.startTime = new Date(e.startTimestamp),
                o.tags = e.tags.map((function(e) {
                    return Ei.fromFirebaseData(e, n)
                }
                )).filter(Boolean),
                o.videoUrl = e.youtubeUrl,
                o.videoType = e.youtubeVideoType,
                o
            }
        }, {
            key: "fromJsonData",
            value: function(e, n) {
                var o = new t(n);
                return o.description = e.description,
                o.doryLink = e.doryLink,
                o.endTime = new Date(e.endTimestamp),
                o.id = e.id,
                o.isFeatured = e.isFeatured,
                o.livestream = e.livestream,
                o.location = n.getLocationById(e.room),
                o.relatedEventsIDs = e.relatedSessions,
                o.speakers = e.speakers.map((function(e) {
                    return n.getSpeakerById(e)
                }
                )).filter(Boolean),
                o.startTime = new Date(e.startTimestamp),
                o.tags = e.tagNames.map((function(e) {
                    return n.getTagByTagName(e)
                }
                )).filter(Boolean),
                o.title = e.title,
                o.videoUrl = e.youtubeUrl,
                o.videoType = e.youtubeVideoType,
                o
            }
        }]),
        t
    }(Ti);
    xi([Vo.l], Di.prototype, "reservationRequestPending", void 0),
    xi([Vo.d], Di.prototype, "updateReservationPending", null);
    var Ri = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "toJSON",
            value: function() {
                return {
                    bio: this.bio,
                    company: this.company,
                    id: this.id,
                    name: this.name,
                    socialLinks: this.socialLinks,
                    thumbnailUrl: this.thumbnailUrl
                }
            }
        }, {
            key: "sessions",
            get: function() {
                return this.store.getSessionsBySpeakerId(this.id)
            }
        }, {
            key: "groupedSessions",
            get: function() {
                return this.store.buildSchedule(this.sessions)
            }
        }], [{
            key: "fromFirebaseData",
            value: function(e, n) {
                return l()(new t(n), e)
            }
        }, {
            key: "fromJsonData",
            value: function(e, n) {
                return l()(new t(n), e)
            }
        }]),
        t
    }(Ti)
      , Ei = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "toJSON",
            value: function() {
                return {
                    category: this.category,
                    color: this.color,
                    fontColor: this.fontColor,
                    id: this.id,
                    name: this.name,
                    order_in_category: this.order_in_category,
                    tag: this.tag
                }
            }
        }], [{
            key: "fromFirebaseData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.slug = o.tag ? Object(_.Y)(o.tag) : Object(_.Y)(o.name),
                o
            }
        }, {
            key: "fromJsonData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.slug = o.tag ? Object(_.Y)(o.tag) : Object(_.Y)(o.name),
                o
            }
        }]),
        t
    }(Ti)
      , Pi = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "toJSON",
            value: function() {
                return {
                    description: this.description,
                    duration: this.duration,
                    icon: this.icon_url,
                    id: this.id,
                    tagNames: this.tags.map((function(e) {
                        return e.tag
                    }
                    )),
                    title: this.title,
                    link: this.url
                }
            }
        }], [{
            key: "fromFirebaseData",
            value: function(e, n) {
                var o = l()(new t(n), e);
                return o.icon_url = e.icon,
                o.url = e.link,
                o
            }
        }, {
            key: "fromJsonData",
            value: function(e, n) {
                var o = new t(n);
                return o.description = e.description,
                o.duration = e.duration,
                o.icon_url = e.icon,
                o.id = e.id,
                o.tags = e.tagNames.map((function(e) {
                    return n.getTagByTagName(e)
                }
                )).filter(Boolean),
                o.title = e.title,
                o.url = e.link,
                o
            }
        }]),
        t
    }(Ti)
      , Bi = n(217)
      , Ui = n.n(Bi)
      , Fi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ni = ["type_keynotes", "type_sessions", "type_codelabs", "type_lightningtalks", "type_meetups", "type_appreviews", "type_gamereviews", "type_officehours", "type_afterdark"]
      , Wi = function() {
        function e() {
            u()(this, e),
            this.codelabs = [],
            this.liveSchedule = [],
            this.loaded = !1,
            this.locations = [],
            this.schedule = [],
            this.sessions = [],
            this.speakers = [],
            this.tags = [],
            this.userEvents = [],
            _.T ? this.initInBrowser() : this.initInServer()
        }
        var t, n, o, a, r, i;
        return h()(e, [{
            key: "initInBrowser",
            value: (i = un()(ln.a.mark((function e() {
                var t, n, o, a, r, i = this;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (t = window.localStorage.getItem("speakers"),
                            n = window.localStorage.getItem("locations"),
                            o = window.localStorage.getItem("tags"),
                            a = window.localStorage.getItem("codelabs"),
                            r = window.localStorage.getItem("sessions"),
                            t && n && o && a && r)
                                try {
                                    this.handleJsonData({
                                        codelabs: JSON.parse(a),
                                        rooms: JSON.parse(n),
                                        sessions: JSON.parse(r),
                                        speakers: JSON.parse(t),
                                        tags: JSON.parse(o)
                                    }),
                                    Object(Vo.n)((function() {
                                        i.loaded = !0
                                    }
                                    ))
                                } catch (e) {
                                    console.warn("Couldn't retrieve data from cache, possibly due to bad data", e),
                                    this.purgeCache()
                                }
                            return e.next = 8,
                            Ii.a.getInstance();
                        case 8:
                            this.firebase = e.sent,
                            this.firebase.onCodelabsUpdate = this.handleCodelabsUpdate.bind(this),
                            this.firebase.onRoomsUpdate = this.handleRoomsUpdate.bind(this),
                            this.firebase.onSessionsUpdate = this.handleSessionsUpdate.bind(this),
                            this.firebase.onSpeakersUpdate = this.handleSpeakersUpdate.bind(this),
                            this.firebase.onTagsUpdate = this.handleTagsUpdate.bind(this),
                            this.firebase.onUserEventsUpdate = this.updateUserEvents.bind(this);
                        case 15:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return i.apply(this, arguments)
            }
            )
        }, {
            key: "initInServer",
            value: (r = un()(ln.a.mark((function e() {
                var t, n, o = this;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            Ui()(_.a.SESSIONS);
                        case 2:
                            return t = e.sent,
                            e.next = 5,
                            t.json();
                        case 5:
                            (n = e.sent) && this.handleJsonData(n),
                            Object(Vo.n)((function() {
                                o.loaded = !0
                            }
                            ));
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return r.apply(this, arguments)
            }
            )
        }, {
            key: "getSessionById",
            value: function(e) {
                return this.sessions.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "getSessionsByIds",
            value: function(e) {
                var t = this;
                return e.map((function(e) {
                    return t.sessions.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
                )).filter(Boolean)
            }
        }, {
            key: "getSessionsByLocationId",
            value: function(e) {
                return this.sessions.filter((function(t) {
                    return t.location.id === e
                }
                ))
            }
        }, {
            key: "getSessionsBySpeakerId",
            value: function(e) {
                return this.sessions.filter((function(t) {
                    return t.speakers.find((function(t) {
                        return t.id === e
                    }
                    ))
                }
                ))
            }
        }, {
            key: "getSessionsBetweenTime",
            value: function(e, t) {
                return this.sessions.filter((function(n) {
                    var o = +n.endTime - _.p - +n.startTime;
                    return +n.startTime >= e - o && +n.endTime < t
                }
                ))
            }
        }, {
            key: "getSessionsBetweenTimeByLocationId",
            value: function(e, t, n) {
                return this.sessions.filter((function(o) {
                    var a = +o.endTime - _.p - +o.startTime;
                    return +o.startTime >= e - a && +o.endTime < t && o.location.id === n
                }
                ))
            }
        }, {
            key: "getSpeakerById",
            value: function(e) {
                return this.speakers.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "getLocationById",
            value: function(e) {
                return this.locations.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "getLocationBySlug",
            value: function(e) {
                return this.locations.find((function(t) {
                    return t.slug === e
                }
                ))
            }
        }, {
            key: "getTagBySlug",
            value: function(e) {
                return this.tags.find((function(t) {
                    return t.slug === e
                }
                ))
            }
        }, {
            key: "getTagByTagName",
            value: function(e) {
                return this.tags.find((function(t) {
                    return t.tag === e
                }
                ))
            }
        }, {
            key: "getUserEventById",
            value: function(e) {
                return this.userEvents.find((function(t) {
                    return t.id === e
                }
                ))
            }
        }, {
            key: "buildSchedule",
            value: function(e) {
                var t, n, o = [];
                return this.sortSessions(e).forEach((function(e) {
                    t !== e.startTimeLocal.getDate() && (t = e.startTimeLocal.getDate(),
                    o.push({
                        date: e.startTime,
                        dateLocal: e.startTimeLocal,
                        timeBlocks: []
                    }));
                    var a = o[o.length - 1];
                    n !== e.startTime.getTime() && (n = e.startTime.getTime(),
                    a.timeBlocks.push({
                        endDate: e.endTime,
                        startDate: e.startTime,
                        startDateLocal: e.startTimeLocal,
                        sessions: []
                    }));
                    var r = a.timeBlocks[a.timeBlocks.length - 1];
                    r.sessions.push(e),
                    +e.endTime > +r.endDate && (r.endDate = e.endTime)
                }
                )),
                o
            }
        }, {
            key: "isSessionBookmarked",
            value: function(e) {
                var t = this.getUserEventById(e);
                return !!t && Boolean(t.isStarred)
            }
        }, {
            key: "getReservationStatusForSessionId",
            value: function(e) {
                var t = this.getUserEventById(e);
                return t && t.reservationStatus ? t.reservationStatus : Ii.d.NONE
            }
        }, {
            key: "getConflictingSessionForSessionId",
            value: function(e) {
                var t = this
                  , n = this.getSessionById(e)
                  , o = null;
                return this.userEvents.find((function(e) {
                    if (e.id !== n.id && (e.reservationStatus === Ii.d.RESERVED || e.reservationStatus === Ii.d.WAITLISTED)) {
                        var a = t.getSessionById(e.id);
                        if (a && a.startTime.getTime() === n.startTime.getTime())
                            return o = a,
                            !0
                    }
                }
                )),
                o
            }
        }, {
            key: "setSessionBookmark",
            value: (a = un()(ln.a.mark((function e(t, n) {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.firebase.setStarred(t, n);
                        case 2:
                            return e.abrupt("return", n);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e, t) {
                return a.apply(this, arguments)
            }
            )
        }, {
            key: "reserveSession",
            value: (o = un()(ln.a.mark((function e(t) {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.firebase.makeReservationRequest({
                                action: Ii.b.RESERVE,
                                sessionId: t
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "cancelSessionReservation",
            value: (n = un()(ln.a.mark((function e(t) {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.firebase.makeReservationRequest({
                                action: Ii.b.CANCEL,
                                sessionId: t
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "swapSessionReservation",
            value: (t = un()(ln.a.mark((function e(t, n) {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.firebase.makeReservationRequest({
                                action: Ii.b.SWAP,
                                cancelSessionId: t,
                                reserveSessionId: n
                            });
                        case 2:
                            return e.abrupt("return", e.sent);
                        case 3:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e, n) {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "getPlaceInLineForSessionId",
            value: function(e) {
                return this.firebase.makePlaceInLineCall(e)
            }
        }, {
            key: "sendFeedbackData",
            value: function(e) {
                return this.firebase.makeFeedbackCall(e)
            }
        }, {
            key: "isFeedbackCompletedForSession",
            value: function(e) {
                var t = this.getUserEventById(e);
                return !!t && t.gaveFeedback
            }
        }, {
            key: "handleJsonData",
            value: function(e) {
                var t = this
                  , n = e.tags.map((function(e) {
                    return Ei.fromJsonData(e, t)
                }
                ));
                this.updateTags(n);
                var o = e.rooms.map((function(e) {
                    return Ai.fromJsonData(e, t)
                }
                ));
                this.updateLocations(o);
                var a = Object.keys(e.speakers).map((function(n) {
                    return Ri.fromJsonData(e.speakers[n], t)
                }
                ));
                this.updateSpeakers(a);
                var r = e.codelabs.map((function(e) {
                    return Pi.fromJsonData(e, t)
                }
                ));
                this.updateCodelabs(r);
                var i = e.sessions.map((function(e) {
                    return Di.fromJsonData(e, t)
                }
                ));
                this.updateSessions(i)
            }
        }, {
            key: "handleCodelabsUpdate",
            value: function(e) {
                var t = this
                  , n = e.map((function(e) {
                    return Pi.fromFirebaseData(e, t)
                }
                ));
                this.updateCodelabs(n)
            }
        }, {
            key: "handleSessionsUpdate",
            value: function(e) {
                var t = this
                  , n = e.map((function(e) {
                    return Di.fromFirebaseData(e, t)
                }
                ));
                this.updateSessions(n),
                this.loaded || Object(Vo.n)((function() {
                    t.loaded = !0
                }
                ))
            }
        }, {
            key: "handleSpeakersUpdate",
            value: function(e) {
                var t = this
                  , n = e.map((function(e) {
                    return Ri.fromFirebaseData(e, t)
                }
                ));
                this.updateSpeakers(n)
            }
        }, {
            key: "handleRoomsUpdate",
            value: function(e) {
                var t = this
                  , n = e.map((function(e) {
                    return Ai.fromFirebaseData(e, t)
                }
                ));
                this.updateLocations(n)
            }
        }, {
            key: "handleTagsUpdate",
            value: function(e) {
                var t = this
                  , n = e.map((function(e) {
                    return Ei.fromFirebaseData(e, t)
                }
                ));
                this.updateTags(n)
            }
        }, {
            key: "updateCodelabs",
            value: function(e) {
                this.codelabs = e,
                _.T && window.localStorage.setItem("codelabs", JSON.stringify(e))
            }
        }, {
            key: "updateSessions",
            value: function(e) {
                var t = te()(e)
                  , n = [];
                t = t.filter((function(e) {
                    var t = e.startTime.getTime() > 0;
                    return t || n.push(e),
                    t
                }
                )),
                n.length > 0 && console.warn("Invalid sessions found:", n),
                t = (t = (t = t.concat(this.createBundlesByType(e, "type_appreviews"))).concat(this.createBundlesByType(e, "type_officehours"))).concat(this.createBundlesByType(e, "type_gamereviews")),
                this.sessions = this.sortSessionsByTime(t);
                var o = t.filter((function(e) {
                    return !e.shouldBundle || e.isBundle
                }
                ));
                this.schedule = this.buildSchedule(o),
                this.liveSchedule = this.buildSchedule(this.sessionsWithLivestream),
                _.T && window.localStorage.setItem("sessions", JSON.stringify(e))
            }
        }, {
            key: "updateSpeakers",
            value: function(e) {
                this.speakers = e,
                _.T && window.localStorage.setItem("speakers", JSON.stringify(e))
            }
        }, {
            key: "updateLocations",
            value: function(e) {
                this.locations = this.sortLocationsByName(e),
                _.T && window.localStorage.setItem("locations", JSON.stringify(e))
            }
        }, {
            key: "updateTags",
            value: function(e) {
                this.tags = this.sortTagsByName(e),
                _.T && window.localStorage.setItem("tags", JSON.stringify(e))
            }
        }, {
            key: "updateUserEvents",
            value: function(e) {
                this.userEvents = e
            }
        }, {
            key: "sortTagsByName",
            value: function(e) {
                return te()(e).sort((function(e, t) {
                    return Number(e.name.localeCompare(t.name))
                }
                ))
            }
        }, {
            key: "sortLocationsByName",
            value: function(e) {
                return te()(e).sort((function(e, t) {
                    return Number(e.name.localeCompare(t.name))
                }
                ))
            }
        }, {
            key: "sortSessionsByTime",
            value: function(e) {
                return te()(e).sort((function(e, t) {
                    return e.startTime.getTime() - t.startTime.getTime()
                }
                ))
            }
        }, {
            key: "sortSessions",
            value: function(e) {
                return te()(e).sort((function(e, t) {
                    var n = e.startTime.getTime() - t.startTime.getTime();
                    if (0 === n) {
                        var o = e.type && t.type ? Ni.indexOf(e.type.tag) - Ni.indexOf(t.type.tag) : 0;
                        return 0 === o ? e.location.name < t.location.name ? -1 : e.location.name === t.location.name ? 0 : 1 : o
                    }
                    return n
                }
                ))
            }
        }, {
            key: "createBundlesByType",
            value: function(e, t) {
                var n = [];
                e.filter((function(e) {
                    return !e.type || e.type.tag !== t || (n.push(e),
                    !1)
                }
                )),
                n = this.sortSessionsByTime(n);
                var o = Object(_.L)(n, "title")
                  , a = [];
                return Object.values(o).forEach((function(e) {
                    var t;
                    e.forEach((function(e) {
                        t && t.endTime.getTime() === e.startTime.getTime() || (t = new Di(e.store),
                        l()(t, e),
                        t.id = "".concat(e.id, "-bundle"),
                        t.isBundle = !0,
                        t.relatedEventsIDs = [],
                        a.push(t)),
                        t.endTime = e.endTime,
                        t.relatedEventsIDs.push(e.id)
                    }
                    ))
                }
                )),
                a
            }
        }, {
            key: "purgeCache",
            value: function() {
                _.T && (window.localStorage.removeItem("codelabs"),
                window.localStorage.removeItem("sessions"),
                window.localStorage.removeItem("speakers"),
                window.localStorage.removeItem("locations"),
                window.localStorage.removeItem("tags"))
            }
        }, {
            key: "topics",
            get: function() {
                return this.tags.filter((function(e) {
                    return "topic" === e.category
                }
                ))
            }
        }, {
            key: "types",
            get: function() {
                return this.tags.filter((function(e) {
                    return "type" === e.category
                }
                ))
            }
        }, {
            key: "levels",
            get: function() {
                return this.tags.filter((function(e) {
                    return "level" === e.category
                }
                )).sort((function(e, t) {
                    return e.order_in_category - t.order_in_category
                }
                ))
            }
        }, {
            key: "scheduleDays",
            get: function() {
                return this.schedule.map((function(e) {
                    return e.date
                }
                ))
            }
        }, {
            key: "bookmarks",
            get: function() {
                var e = this;
                return this.userEvents.filter((function(e) {
                    return e.isStarred
                }
                )).map((function(t) {
                    return e.getSessionById(t.id)
                }
                ))
            }
        }, {
            key: "reservations",
            get: function() {
                var e = this;
                return this.userEvents.filter((function(e) {
                    return e.reservationStatus === Ii.d.RESERVED || e.reservationStatus === Ii.d.WAITLISTED
                }
                )).map((function(t) {
                    return e.getSessionById(t.id)
                }
                ))
            }
        }, {
            key: "sessionsWithLivestream",
            get: function() {
                return this.sessions.filter((function(e) {
                    return e.livestream
                }
                ))
            }
        }, {
            key: "preShow",
            get: function() {
                return this.getSessionById("1f3827ab-cb6b-42dc-a66f-c3d2052c472e")
            }
        }, {
            key: "mainKeynote",
            get: function() {
                return this.getSessionById("97bccff6-ea91-4516-8f2a-7db75de64607")
            }
        }, {
            key: "devKeynote",
            get: function() {
                return this.getSessionById("0ba929fb-d420-462f-9f86-408d7a54273b")
            }
        }, {
            key: "concert",
            get: function() {
                return this.getSessionById("cfaa6867-8a81-46a3-969f-bd56f43cc247")
            }
        }]),
        e
    }();
    Fi([Vo.l], Wi.prototype, "codelabs", void 0),
    Fi([Vo.l], Wi.prototype, "liveSchedule", void 0),
    Fi([Vo.l], Wi.prototype, "loaded", void 0),
    Fi([Vo.l], Wi.prototype, "locations", void 0),
    Fi([Vo.l], Wi.prototype, "schedule", void 0),
    Fi([Vo.l], Wi.prototype, "sessions", void 0),
    Fi([Vo.l], Wi.prototype, "speakers", void 0),
    Fi([Vo.l], Wi.prototype, "tags", void 0),
    Fi([Vo.l], Wi.prototype, "userEvents", void 0),
    Fi([Vo.e], Wi.prototype, "topics", null),
    Fi([Vo.e], Wi.prototype, "types", null),
    Fi([Vo.e], Wi.prototype, "levels", null),
    Fi([Vo.e], Wi.prototype, "scheduleDays", null),
    Fi([Vo.e], Wi.prototype, "bookmarks", null),
    Fi([Vo.e], Wi.prototype, "reservations", null),
    Fi([Vo.e], Wi.prototype, "sessionsWithLivestream", null),
    Fi([Vo.e], Wi.prototype, "preShow", null),
    Fi([Vo.e], Wi.prototype, "mainKeynote", null),
    Fi([Vo.e], Wi.prototype, "devKeynote", null),
    Fi([Vo.e], Wi.prototype, "concert", null),
    Fi([Vo.d], Wi.prototype, "updateCodelabs", null),
    Fi([Vo.d], Wi.prototype, "updateSessions", null),
    Fi([Vo.d], Wi.prototype, "updateSpeakers", null),
    Fi([Vo.d], Wi.prototype, "updateLocations", null),
    Fi([Vo.d], Wi.prototype, "updateTags", null),
    Fi([Vo.d], Wi.prototype, "updateUserEvents", null);
    var Gi, Vi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Closed = "closed",
        e.FullSize = "fullsize",
        e.PictureInPicture = "pip"
    }(Gi || (Gi = {}));
    var zi = function() {
        function e() {
            var t = this;
            u()(this, e),
            this.mode = Gi.Closed,
            this.muted = !1,
            this.fullScreen = !1,
            this.loadYouTubeApi(),
            _.T && document.addEventListener("fullscreenchange", (function(e) {
                document.fullscreen || t.toggleFullScreen(!1)
            }
            ))
        }
        var t;
        return h()(e, [{
            key: "loadYouTubeApi",
            value: (t = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (_.T) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return e.next = 4,
                            Object(_.M)("https://www.youtube.com/iframe_api");
                        case 4:
                            return e.abrupt("return", new Promise((function(e) {
                                if (YT && YT.Player && YT.Player instanceof Function)
                                    return e();
                                window.onYouTubeIframeAPIReady = e
                            }
                            )));
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e)
            }
            ))),
            function() {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "isSession",
            value: function(e) {
                return e instanceof Di
            }
        }, {
            key: "setMode",
            value: function(e) {
                this.mode = e,
                e == Gi.FullSize && (this.muted = !1),
                e === Gi.PictureInPicture && (this.fullScreen = !1)
            }
        }, {
            key: "setVideo",
            value: function(e) {
                this.target = e
            }
        }, {
            key: "open",
            value: function(e) {
                this.setVideo(e),
                this.isOpen || (this.mode = Gi.FullSize)
            }
        }, {
            key: "close",
            value: function() {
                this.mode = Gi.Closed,
                this.toggleFullScreen(!1)
            }
        }, {
            key: "toggleSound",
            value: function() {
                this.muted = !this.muted
            }
        }, {
            key: "toggleFullScreen",
            value: function(e) {
                this.fullScreen = void 0 !== e ? e : !this.fullScreen
            }
        }, {
            key: "isOpen",
            get: function() {
                return this.mode !== Gi.Closed
            }
        }, {
            key: "videoId",
            get: function() {
                return this.isSession(this.target) ? this.target.videoId : this.target
            }
        }, {
            key: "session",
            get: function() {
                return this.isSession(this.target) ? this.target : null
            }
        }, {
            key: "key",
            get: function() {
                return this.isSession(this.target) ? this.target.id : this.target
            }
        }]),
        e
    }();
    Vi([Vo.l], zi.prototype, "mode", void 0),
    Vi([Vo.l], zi.prototype, "target", void 0),
    Vi([Vo.l], zi.prototype, "muted", void 0),
    Vi([Vo.l], zi.prototype, "fullScreen", void 0),
    Vi([Vo.e], zi.prototype, "isOpen", null),
    Vi([Vo.e], zi.prototype, "videoId", null),
    Vi([Vo.e], zi.prototype, "session", null),
    Vi([Vo.e], zi.prototype, "key", null),
    Vi([Vo.d], zi.prototype, "setMode", null),
    Vi([Vo.d], zi.prototype, "setVideo", null),
    Vi([Vo.d.bound], zi.prototype, "open", null),
    Vi([Vo.d.bound], zi.prototype, "close", null),
    Vi([Vo.d.bound], zi.prototype, "toggleSound", null),
    Vi([Vo.d.bound], zi.prototype, "toggleFullScreen", null);
    var qi, Zi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Default = "Default",
        e.Compact = "Compact",
        e.Card = "Card",
        e.FeedCard = "FeedCard"
    }(qi || (qi = {}));
    var Ki = [qi.Card, qi.FeedCard]
      , Yi = function(e) {
        switch (e) {
        case qi.Compact:
            return Ur.a.sessionItemRowCompact;
        case qi.Card:
            return Ur.a.sessionItemCard;
        case qi.FeedCard:
            return Object(_.U)(Ur.a.sessionItemCard, Ur.a.sessionItemFeedCard);
        case qi.Default:
        default:
            return Ur.a.sessionItemRowDefault
        }
    }
      , Ji = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).tags = [],
            e.onAction = function() {
                var t = e.props
                  , n = t.UserStore
                  , o = t.VideoStore;
                !n.isSignedIn && o.isOpen && o.setMode(Gi.PictureInPicture)
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "getTags",
            value: function() {
                var e = this.props.session
                  , t = [];
                return e.type && t.push(e.type),
                t = t.concat(e.topics)
            }
        }, {
            key: "renderTags",
            value: function() {
                var e = this.props.layout === qi.Card || this.props.layout === qi.FeedCard;
                this.tags = this.getTags();
                var t = this.tags
                  , n = !1;
                e && t.length > 2 && (n = !0,
                t = this.tags.slice(0, 2));
                var o = this.tags.length - t.length;
                return Object(i.h)("span", {
                    class: Object(_.U)(Ur.a.sessionMeta)
                }, t.map((function(e) {
                    return Object(i.h)(zt, {
                        ariaLabel: "".concat(e.category, ": ").concat(e.name, "."),
                        category: e.category,
                        color: e.color,
                        fontColor: e.fontColor,
                        label: e.name,
                        tag: e.tag
                    })
                }
                )), n && Object(i.h)("span", {
                    class: Ur.a.truncatedTagLabel
                }, "+", o, " more"))
            }
        }, {
            key: "renderSessionMeta",
            value: function() {
                var e = this.props
                  , t = e.session
                  , n = e.layout;
                if (!Ki.includes(n))
                    return Object(i.h)("span", {
                        class: Ur.a.sessionRoom
                    }, t.location && Object(i.h)("span", {
                        "aria-label": "Location: ".concat(t.location.name, ".")
                    }, t.location.name), t.livestream && Object(i.h)(C, {
                        ariaLabel: "Has livestream.",
                        classNames: Ur.a.sessionItemLive
                    }, "videocam"))
            }
        }, {
            key: "renderSpeakers",
            value: function() {
                var e = this.props
                  , t = e.session
                  , n = e.layout
                  , o = e.combineSpeakers
                  , a = t.speakers;
                if (!t.speakers.length || !Ki.includes(n))
                    return Object(i.h)("span", {
                        class: Ur.a.sessionSpeakers
                    });
                var r = function(e, t) {
                    return 1 === e.length ? e[0].name : t ? "Multiple speakers" : e.map((function(e) {
                        return e.name
                    }
                    )).join(", ")
                }(a, o);
                return Object(i.h)("span", {
                    "aria-label": "Speakers: ".concat(r, "."),
                    class: Ur.a.sessionSpeakers
                }, r)
            }
        }, {
            key: "openVideoOrModal",
            value: function(e) {
                var t = this.props
                  , n = t.session
                  , o = t.TimeStore
                  , a = t.UIStore
                  , r = t.VideoStore;
                o.isSessionStreaming(n) && !a.Screen.isMobile ? r.isOpen ? r.setVideo(n) : r.open(n) : a.Modal.open({
                    id: _.l.sessionOrSpeaker,
                    body: Object(i.h)(Li, {
                        session: n
                    })
                })
            }
        }, {
            key: "onKeyPress",
            value: function(e) {
                if (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) {
                    if (document.activeElement !== this.el)
                        return;
                    this.openVideoOrModal()
                }
            }
        }, {
            key: "renderSessionInfo",
            value: function() {
                var e, t = this.props, n = t.overline, o = t.session, a = t.hasTimeOverline, r = t.TimeStore;
                return a ? e = r.getOverline(o) : n && (e = n),
                Object(i.h)("section", {
                    class: Ur.a.sessionInfo
                }, e && Object(i.h)("div", {
                    class: Ur.a.sessionInfoOverline
                }, e), Object(i.h)("h6", {
                    "aria-label": "".concat(o.title, "."),
                    class: Ur.a.title
                }, o.title), this.renderSpeakers(), Object(i.h)("div", {
                    class: Ur.a.sessionItemMeta
                }, this.renderSessionMeta(), this.renderTags()))
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.session
                  , a = t.baseRoute
                  , r = t.layout
                  , s = Ki.includes(r);
                return Object(i.h)("div", {
                    ref: function(t) {
                        return e.el = t
                    },
                    role: this.props.ariaRole || "listitem",
                    class: Object(_.U)(Ur.a.sessionItem, Yi(r), n),
                    onClick: function(t) {
                        return !a && e.openVideoOrModal(t)
                    },
                    onKeyPress: function(t) {
                        return !a && e.onKeyPress(t)
                    },
                    tabIndex: !a && 0,
                    "data-g-on": "click",
                    "data-g-event-category": "Sessions List",
                    "data-g-event-label": "Session: ".concat(o.id),
                    "data-g-event-action": "click"
                }, a ? Object(i.h)(U, {
                    isRouterLink: !0,
                    classNames: !s && Ur.a.sessionItemRow,
                    key: "session-item-".concat(o.id),
                    href: "".concat(a, "/").concat(o.id)
                }, this.renderSessionInfo()) : Object(i.h)("div", null, this.renderSessionInfo()), Object(i.h)("div", {
                    class: "".concat(Ur.a.reserveControls)
                }, Object(i.h)(rr, {
                    session: o,
                    onAction: this.onAction
                })))
            }
        }]),
        t
    }(i.Component);
    Ji.defaultProps = {
        layout: qi.Default
    },
    Ji = Zi([Object(w.b)("TimeStore", "UIStore", "VideoStore", "UserStore"), w.c], Ji);
    var Xi = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Qi = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                this.props.VideoStore.loadYouTubeApi().then((function() {
                    return e.buildPlayer()
                }
                )),
                this.disposer = Object(Vo.m)((function() {
                    return e.props.VideoStore.isOpen
                }
                ), (function(t) {
                    e.player && !t && e.player.stopVideo()
                }
                ))
            }
        }, {
            key: "buildPlayer",
            value: function() {
                this.player = new YT.Player(this.videoEl,{
                    height: "100%",
                    playerVars: ms(),
                    videoId: this.props.videoId,
                    width: "100%",
                    events: {
                        onReady: this.onReadyState.bind(this)
                    }
                })
            }
        }, {
            key: "onReadyState",
            value: function() {
                this.player.playVideo()
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = e.muted
                  , n = e.videoId;
                this.player && (t ? this.player.unMute() : this.player.mute(),
                n !== this.props.videoId && this.player.loadVideoById(this.props.videoId))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.disposer()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.classNames
                  , n = void 0 === t ? "" : t;
                return Object(i.h)("div", null, Object(i.h)("div", {
                    ref: function(t) {
                        return e.videoEl = t
                    },
                    className: n
                }))
            }
        }]),
        t
    }(i.Component);
    Qi.displayName = "YouTubePlayer",
    Qi = Xi([Object(w.b)("VideoStore"), w.c], Qi);
    var $i = n(43)
      , es = n.n($i)
      , ts = n(218)
      , ns = n.n(ts)
      , os = n(141)
      , as = n.n(os)
      , rs = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                hovered: !1
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "shouldComponentUpdate",
            value: function(e, t) {
                ns()(e);
                var n = t.hovered;
                return this.state.hovered !== n
            }
        }, {
            key: "onMouseEnter",
            value: function() {
                this.timeout && clearTimeout(this.timeout),
                this.setState({
                    hovered: !0
                })
            }
        }, {
            key: "onMouseLeave",
            value: function() {
                var e = this;
                this.timeout = setTimeout((function() {
                    e.setState({
                        hovered: !1
                    })
                }
                ), 3e3)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.state.hovered;
                return Object(i.h)("div", {
                    onMouseEnter: function() {
                        return e.onMouseEnter()
                    },
                    onMouseLeave: function() {
                        return e.onMouseLeave()
                    },
                    class: Object(_.U)(as.a.hoverZone, t ? as.a.hovered : as.a.default)
                }, this.props.children)
            }
        }]),
        t
    }(i.Component)
      , is = n(168)
      , ss = n.n(is)
      , ls = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , cs = {
        ariaRole: "listitem",
        classNames: ss.a.toolbarButton,
        elevation: o.Lowered,
        layout: r.Compact,
        type: a.NotRaised
    }
      , us = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "setPictureInPicture",
            value: function() {
                this.props.VideoStore.setMode(Gi.PictureInPicture)
            }
        }, {
            key: "toggleFullscreen",
            value: function() {
                this.props.VideoStore.toggleFullScreen()
            }
        }, {
            key: "closePlayer",
            value: function() {
                this.props.VideoStore.close()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.classNames
                  , n = e.UIStore;
                return Object(i.h)("div", {
                    role: "list",
                    "aria-label": "Video player controls.",
                    class: Object(_.U)(ss.a.toolbar, t, "reset")
                }, Object(i.h)(we, null), !n.Screen.isMobile && Object(i.h)(x, l()({
                    ariaLabel: "Picture in picture mode.",
                    icon: "picture_in_picture",
                    onClick: this.setPictureInPicture
                }, cs)), Object(i.h)(x, l()({
                    ariaLabel: "Enter fullscreen mode.",
                    icon: "fullscreen",
                    onClick: this.toggleFullscreen
                }, cs)), Object(i.h)(x, l()({
                    ariaLabel: "Close video player.",
                    icon: "close",
                    onClick: this.closePlayer
                }, cs)))
            }
        }]),
        t
    }(i.Component);
    ls([Vo.d.bound], us.prototype, "setPictureInPicture", null),
    ls([Vo.d.bound], us.prototype, "toggleFullscreen", null),
    ls([Vo.d.bound], us.prototype, "closePlayer", null),
    us = ls([Object(w.b)("VideoStore", "UIStore")], us);
    var ds = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , hs = function() {
        if (_.T) {
            var e = window.innerWidth
              , t = window.innerHeight;
            return {
                x: _.k / e,
                y: _.j / t
            }
        }
    }
      , ps = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).requestFullscreen = function() {
                e.rootEl.requestFullscreen ? e.rootEl.requestFullscreen() : e.rootEl.msRequestFullscreen ? e.rootEl.msRequestFullscreen() : e.rootEl.mozRequestFullScreen ? e.rootEl.mozRequestFullScreen() : e.rootEl.webkitRequestFullscreen && e.rootEl.webkitRequestFullscreen()
            }
            ,
            e.exitFullscreen = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "getRootClass",
            value: function() {
                var e = this.props.VideoStore.mode
                  , t = [es.a.videoPlayer, e === Gi.Closed && es.a.closed, e === Gi.FullSize && es.a.fullSize, e === Gi.PictureInPicture && es.a.pip];
                return _.U.apply(void 0, t)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this;
                _.T && (this.fsDisposer = Object(Vo.m)((function() {
                    return e.props.VideoStore.fullScreen
                }
                ), (function(t) {
                    t ? e.requestFullscreen() : e.exitFullscreen()
                }
                )),
                this.onKeyPressHandler = this.onKeyPress.bind(this),
                document.addEventListener("keydown", this.onKeyPressHandler))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && (this.fsDisposer(),
                document.removeEventListener("keydown", this.onKeyPressHandler))
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.VideoStore
                  , s = t.UIStore;
                if (_.T) {
                    var l, c, u, d, h, p, f = s.Screen, g = n.mode, b = n.target, v = n.muted, m = g === Gi.FullSize, y = g === Gi.PictureInPicture, O = v ? "volume_up" : "volume_mute";
                    return Object(i.h)("div", {
                        style: g === Gi.PictureInPicture ? (l = hs(),
                        c = 24 / l.x,
                        u = 24 / l.y,
                        d = 2 / l.x,
                        h = 2 / l.y,
                        p = 6 / Math.max(l.x, l.y),
                        {
                            padding: "0",
                            transform: "scale(".concat(l.x, ", ").concat(l.y, ") translate(-").concat(c, "px, -").concat(u, "px)"),
                            boxShadow: "".concat(d, "px ").concat(h, "px ").concat(p, "px rgba(0, 0, 0, 0.25)")
                        }) : {},
                        class: this.getRootClass(),
                        ref: function(t) {
                            return e.rootEl = t
                        }
                    }, Object(i.h)(we, null), b && Object(i.h)("div", {
                        class: es.a.videoContainer,
                        key: "".concat(n.key, "-video-player")
                    }, Object(i.h)("div", {
                        class: Object(_.U)(es.a.header, m && es.a.headerVisible)
                    }, !f.isMobile && n.isSession(n.session) && Object(i.h)(rs, null, Object(i.h)("div", {
                        class: "sessionItemCard"
                    }, Object(i.h)(Ji, {
                        overline: "Currently watching",
                        layout: qi.Card,
                        session: b
                    }))), Object(i.h)(us, {
                        classNames: es.a.toolbar
                    })), Object(i.h)("div", {
                        style: function() {
                            return g === Gi.PictureInPicture ? (e = hs(),
                            t = 1 / e.x,
                            n = 1 / e.y,
                            {
                                transform: "scale(".concat(t, ", ").concat(n, ") translateZ(0)"),
                                width: "".concat(_.k, "px"),
                                height: "".concat(_.j, "px")
                            }) : {};
                            var e, t, n
                        }(),
                        class: es.a.videoContainer
                    }, y && Object(i.h)("div", {
                        class: es.a.minimizedControlsWrapper
                    }, Object(i.h)("div", {
                        class: es.a.minimizedControls
                    }, Object(i.h)(x, {
                        icon: O,
                        type: a.Default,
                        layout: r.Compact,
                        elevation: o.Lowered,
                        onClick: n.toggleSound,
                        gaCategory: "".concat("Live Video Player"),
                        gaLabel: "Toggle sound"
                    }), Object(i.h)(x, {
                        icon: "close",
                        type: a.Default,
                        layout: r.Compact,
                        elevation: o.Lowered,
                        onClick: n.close,
                        gaCategory: "".concat("Live Video Player"),
                        gaLabel: "Close"
                    })), Object(i.h)("button", {
                        onClick: function() {
                            return n.setMode(Gi.FullSize)
                        },
                        class: es.a.pipRestoreButton,
                        "data-g-on": "click",
                        "data-g-event-category": "".concat("Live Video Player"),
                        "data-g-event-label": "Go to fullsize",
                        "data-g-event-action": "click"
                    })), n.isOpen && Object(i.h)(Qi, {
                        videoId: n.videoId,
                        muted: n.muted,
                        classNames: es.a.video
                    }))))
                }
            }
        }, {
            key: "onKeyPress",
            value: function(e) {
                Object(_.P)(e, _.e.Escape) && this.props.VideoStore.close()
            }
        }]),
        t
    }(i.Component);
    ps = ds([Object(w.b)("VideoStore", "UIStore"), w.c], ps);
    var fs, gs = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e.Basic = "Basic",
        e.SimpleOverlay = "SimpleOverlay",
        e.DynamicVideo = "DynamicVideo"
    }(fs || (fs = {}));
    var bs = function(e, t) {
        var n = Object.entries(ms(t)).map((function(e) {
            return e.join("=")
        }
        )).join("&");
        return "https://www.youtube-nocookie.com/embed/".concat(e, "?").concat(n)
    }
      , vs = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).state = {
                isPlayed: !1
            },
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.gaCategory
                  , a = t.videoId
                  , r = t.videoLabel
                  , s = t.videoImage
                  , c = t.autoplay
                  , u = void 0 !== c && c
                  , d = t.isBackground
                  , h = t.type
                  , p = t.VideoStore
                  , f = Object(i.h)(No, null)
                  , g = function() {
                    h === fs.SimpleOverlay ? e.setState({
                        isPlayed: !0
                    }) : p.open(a)
                }
                  , b = Object(i.h)("div", null, Object(i.h)("div", {
                    class: Object(_.U)(Go.a.overlayContainer),
                    "aria-hidden": !0,
                    "data-g-event-category": o,
                    "data-g-event-label": "Open video for ".concat(r),
                    onClick: g
                }, Object(i.h)(We, l()({
                    classNames: Go.a.videoPlayerImage
                }, s)), Object(i.h)("div", {
                    class: Go.a.videoPlayerButtonWrapper
                }, Object(i.h)(re, {
                    ariaLabel: "Open video for ".concat(r),
                    gaCategory: o,
                    gaLabel: "Open video for ".concat(r),
                    onClick: g,
                    type: J.Svg,
                    iconSvg: f
                }), Object(i.h)("p", {
                    class: Object(_.U)(Go.a.videoPlayerText)
                }, r))), h === fs.DynamicVideo && Object(i.h)(ps, null))
                  , v = Object(i.h)("iframe", {
                    tabIndex: d && -1,
                    "aria-hidden": d,
                    frameBorder: "0",
                    class: Object(_.U)(Go.a.videoPlayer, d && Go.a.backgroundEmbed),
                    title: "YouTube Video Player",
                    src: bs(a, u)
                })
                  , m = null;
                switch (h) {
                case fs.DynamicVideo:
                    m = b;
                    break;
                case fs.SimpleOverlay:
                    m = this.state.isPlayed ? v : b;
                    break;
                default:
                    m = v
                }
                return Object(i.h)("div", {
                    class: Object(_.U)(n, Go.a.videoPlayerWrapper)
                }, m)
            }
        }]),
        t
    }(i.Component);
    vs = gs([Object(w.b)("VideoStore"), w.c], vs);
    var ms = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!_.T)
            return {};
        var t = {
            controls: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            modestbranding: 1,
            origin: "".concat(window.location.protocol, "//").concat(window.location.host),
            rel: 0
        };
        return e && (t = l()(l()({}, t), {
            autoplay: 1,
            mute: 1
        })),
        t
    }
      , ys = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "150",
            height: "105",
            viewBox: "0 0 150 105",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n    ", Object(i.h)("path", {
            d: "M37.1906 13.856H0V88.2348H37.1906V13.856Z",
            fill: "#4284F3"
        }, []), "\n    ", Object(i.h)("path", {
            d: "M111.571 12.6184C90.3449 12.6184 73.1426 29.8202 73.1426 51.046C73.1426 72.2718 90.3449 89.4736 111.571 89.4736C132.798 89.4736 150 72.2718 150 51.046C149.991 29.8202 132.789 12.6184 111.571 12.6184Z",
            fill: "#4284F3"
        }, []), "\n    ", Object(i.h)("path", {
            d: "M66.5529 3.28033e-05L44.1367 103.225L49.4001 104.368L71.8163 1.14295L66.5529 3.28033e-05Z",
            fill: "#4284F3"
        }, []), "\n"])
    }
      , Os = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            width: "120",
            height: "84",
            viewBox: "0 0 120 84",
            xmlns: "http://www.w3.org/2000/svg",
            "xmlns:xlink": "http://www.w3.org/1999/xlink"
        }, t), ["\n    ", Object(i.h)("defs", {}, ["\n        ", Object(i.h)("path", {
            id: "svg-IOLogoWhite-PEXcK2h",
            d: "M.108.12h61.333v61.443H.108z"
        }, []), "\n    "]), "\n    ", Object(i.h)("g", {
            fill: "none",
            "fill-rule": "evenodd"
        }, ["\n        ", Object(i.h)("path", {
            d: "M0 70.783h29.678V11.322H0v59.461zm2.987-2.993h23.704V14.314H2.987V67.79z",
            fill: "#FFF"
        }, []), "\n        ", Object(i.h)("g", {
            transform: "translate(58.257 10.211)"
        }, ["\n            ", Object(i.h)("mask", {
            id: "svg-IOLogoWhite-1hKyYIJ",
            fill: "#fff"
        }, ["\n                ", Object(i.h)("use", {
            "xlink:href": "#svg-IOLogoWhite-PEXcK2h"
        }, []), "\n            "]), "\n            ", Object(i.h)("path", {
            d: "M30.775.12C13.838.12.108 13.875.108 30.842s13.73 30.72 30.667 30.72S61.44 47.81 61.44 30.843 47.711.12 30.775.12m0 2.973c15.273 0 27.698 12.448 27.698 27.749 0 15.3-12.425 27.748-27.698 27.748-15.274 0-27.699-12.448-27.699-27.748S15.501 3.093 30.775 3.093",
            fill: "#FFF",
            mask: "url(#svg-IOLogoWhite-1hKyYIJ)"
        }, []), "\n        "]), "\n        ", Object(i.h)("path", {
            fill: "#FFF",
            d: "M38.547 83.711l-2.894-.656L54.294.5l2.895.656z"
        }, []), "\n    "]), "\n"])
    }
      , js = n(44)
      , ks = n.n(js)
      , Ss = n(33)
      , ws = n.n(Ss)
      , _s = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Cs = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderIOLogo",
            value: function() {
                return this.props.TimeStore.currentConferencePhase < To.a.MainKeynote ? Object(i.h)("div", {
                    class: ws.a.logoColor
                }, Object(i.h)(ys, null)) : Object(i.h)("div", {
                    class: ws.a.logoWhite
                }, Object(i.h)(Os, null))
            }
        }, {
            key: "renderTagline",
            value: function() {
                return Object(i.h)(Ot, null, this.copy.tagline)
            }
        }, {
            key: "renderWatchKeynoteButton",
            value: function() {
                var e = this.props
                  , t = e.SessionStore
                  , n = e.TimeStore
                  , o = e.VideoStore;
                if (!(n.currentConferencePhase <= To.a.MainKeynote))
                    return Object(i.h)(re, {
                        ariaLabel: "Watch Keynote in full screen",
                        classNames: ws.a.watchButton,
                        gaCategory: "Feed Hero",
                        gaLabel: "Watch Keynote",
                        icon: "play_circle_filled",
                        onClick: function() {
                            return o.open(t.mainKeynote)
                        },
                        stopPropagation: !0,
                        textColor: X.White,
                        type: J.Text
                    }, ks.a.watchButton.label)
            }
        }, {
            key: "renderEmbeddedVideo",
            value: function() {
                if (this.props.TimeStore.isKeynotePlaying && this.backgroundVideoSession)
                    return Object(i.h)("div", {
                        "aria-hidden": !0,
                        class: ws.a.videoFullWidth
                    }, Object(i.h)(vs, {
                        videoId: this.backgroundVideoSession.videoId,
                        isBackground: !0,
                        autoplay: !0
                    }))
            }
        }, {
            key: "renderBackgroundImage",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.UIStore;
                if (!(t.isKeynotePlaying || t.currentConferencePhase < To.a.MainKeynote)) {
                    var o, a = t.currentConferencePhase < To.a.Day3Complete ? ks.a.photoBackground : ks.a.graphicBackground;
                    return o = n.Screen.isMobile ? a.mobile : n.Screen.isLessThanDesktop ? a.src : a.src2x,
                    Object(i.h)("div", {
                        "aria-hidden": !0,
                        class: "".concat(ws.a.imageBg),
                        style: {
                            backgroundImage: "url(".concat(o, ")")
                        }
                    })
                }
            }
        }, {
            key: "openVideo",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.VideoStore;
                if (!t.isKeynotePlaying)
                    return !1;
                n.open(this.backgroundVideoSession)
            }
        }, {
            key: "renderPlayButton",
            value: function() {
                var e = this;
                if (this.props.TimeStore.isKeynotePlaying)
                    return Object(i.h)("div", {
                        class: ws.a.playButtonWrapper
                    }, Object(i.h)(x, {
                        classNames: ws.a.playButton,
                        type: a.Default,
                        icon: "play_arrow",
                        onClick: function() {
                            return e.openVideo()
                        }
                    }))
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return Object(i.h)("section", {
                    class: _.U.apply(void 0, [ws.a.feedHero].concat(te()(this.classes), ["full-bleed-exact"])),
                    onClick: function() {
                        return e.openVideo()
                    }
                }, Object(i.h)("div", {
                    class: "".concat(ws.a.copy, " appWrapperLive")
                }, Object(i.h)("div", {
                    class: ws.a.header
                }, this.renderIOLogo(), Object(i.h)("h2", {
                    class: ws.a.tagline
                }, this.renderTagline()))), this.renderEmbeddedVideo(), this.renderPlayButton(), this.renderBackgroundImage(), Object(i.h)("div", {
                    class: ws.a.infoBottom
                }, this.renderWatchKeynoteButton()))
            }
        }, {
            key: "copy",
            get: function() {
                var e = this.props.TimeStore.currentConferencePhase;
                return e < To.a.MainKeynote ? ks.a.preEvent : e === To.a.MainKeynote ? ks.a.mainKeynote : e === To.a.Day1Lunch ? ks.a.lunch : e === To.a.DevKeynote ? ks.a.devKeynote : e === To.a.Day1Sessions || e === To.a.Day1AfterHours ? ks.a.day1Progress : e === To.a.Day1Complete ? ks.a.day1Complete : e === To.a.Day2Sessions || e === To.a.Day2Concert ? ks.a.day2Progress : e === To.a.Day2Complete ? ks.a.day2Complete : e === To.a.Day3Sessions ? ks.a.day3Progress : e >= To.a.Day3Complete ? ks.a.day3Complete : void 0
            }
        }, {
            key: "classes",
            get: function() {
                var e = this.props.TimeStore
                  , t = e.currentConferencePhase
                  , n = [];
                return t < To.a.MainKeynote && (n = [].concat(te()(n), [ws.a.height1, ws.a.preEvent])),
                e.isKeynotePlaying ? n = [].concat(te()(n), [ws.a.height3, ws.a.hasDarkBg]) : !e.isKeynotePlaying && t > To.a.MainKeynote && (n = [].concat(te()(n), [ws.a.height2])),
                e.currentConferencePhase < To.a.Day3Complete && e.currentConferencePhase > To.a.PreShow && (n = [].concat(te()(n), [ws.a.hasImageBg])),
                n
            }
        }, {
            key: "backgroundVideoSession",
            get: function() {
                var e = this.props
                  , t = e.SessionStore
                  , n = e.TimeStore.currentConferencePhase;
                return n === To.a.MainKeynote ? t.mainKeynote : n === To.a.DevKeynote ? t.devKeynote : void 0
            }
        }]),
        t
    }(i.Component);
    Cs = _s([Object(w.b)("SessionStore", "TimeStore", "UIStore", "VideoStore"), w.c], Cs);
    var Ms = n(97)
      , Hs = n.n(Ms)
      , Ls = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ts = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "getClass",
            value: function() {
                var e = this.props.UIStore.Snackbar.state
                  , t = Hs.a["snack".concat(e)];
                return Object(_.U)(Hs.a.snack, this.props.classNames, t)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.UIStore
                  , o = t.shareWithFab
                  , a = t.classNames
                  , r = n.Snackbar.text
                  , s = o && n.Screen.isMobile ? Hs.a.snackbarWithFab : "";
                if (n.Snackbar.state && "Gone" !== n.Snackbar.state)
                    return Object(i.h)("div", {
                        class: Object(_.U)(Hs.a.snackbar, s, a)
                    }, Object(i.h)("div", {
                        class: this.getClass()
                    }, Object(i.h)("p", {
                        class: Hs.a.text,
                        "aria-live": "polite"
                    }, r), Object(i.h)("button", {
                        class: Hs.a.button,
                        ref: function(t) {
                            return e.button = t
                        },
                        onClick: function() {
                            return n.Snackbar.onActionClick()
                        },
                        "data-g-on": "click",
                        "data-g-event-category": "Snackbar",
                        "data-g-event-label": "".concat(n.Snackbar.buttonText),
                        "data-g-event-action": "click"
                    }, n.Snackbar.buttonText)))
            }
        }]),
        t
    }(i.Component);
    Ts.defaultProps = {
        shareWithFab: !1
    },
    Ts = Ls([Object(w.b)("UIStore"), w.c], Ts);
    var As = n(40)
      , Is = n.n(As)
      , xs = n(84)
      , Ds = n.n(xs)
      , Rs = n(122)
      , Es = n.n(Rs)
      , Ps = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Bs = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).copy = Ds.a.concert,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "renderBackgroundImage",
            value: function() {
                return this.props.TimeStore.currentConferencePhase < To.a.Day2Sessions ? Object(i.h)(We, {
                    src: this.copy.preConcert.image.src,
                    sizes: "(max-width: 596px) 596px, 1192px",
                    srcset: "".concat(this.copy.preConcert.image.src, " 596w, ").concat(this.copy.preConcert.image.src2x, " 1192w"),
                    ariaHidden: !0
                }) : Object(i.h)(We, {
                    src: this.copy.duringConcert.image.src,
                    sizes: "(max-width: 596px) 596px, 1192px",
                    srcset: "".concat(this.copy.duringConcert.image.src, " 596w, ").concat(this.copy.duringConcert.image.src2x, " 1192w"),
                    ariaHidden: !0
                })
            }
        }, {
            key: "openVideoOrModal",
            value: function() {
                var e = this.props
                  , t = e.UIStore
                  , n = e.TimeStore
                  , o = e.VideoStore
                  , a = e.SessionStore;
                n.currentConferencePhase === To.a.Day2Concert ? o.open(a.concert) : t.Modal.open({
                    id: _.l.sessionOrSpeaker,
                    body: Object(i.h)(Li, {
                        session: a.concert
                    }),
                    mobileLayout: la.Fullscreen
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return Object(i.h)(Wt, {
                    classNames: _.U.apply(void 0, [Is.a.card, Es.a.concertCard].concat(te()(this.classNames))),
                    key: "explore-concert-card",
                    backgroundImage: this.renderBackgroundImage(),
                    onClick: function() {
                        return e.openVideoOrModal()
                    },
                    ariaRole: "button",
                    gaCategory: this.props.gaCategory,
                    gaLabel: this.buttonLabel
                }, Object(i.h)("div", {
                    class: Es.a.cardChildren
                }, Object(i.h)("h4", null, this.title), this.button))
            }
        }, {
            key: "buttonLabel",
            get: function() {
                return this.props.TimeStore.currentConferencePhase < To.a.Day2Concert ? this.copy.button.label.beforeLive : this.copy.button.label.live
            }
        }, {
            key: "button",
            get: function() {
                return Object(i.h)(re, {
                    type: J.Text,
                    textColor: X.White
                }, this.buttonLabel)
            }
        }, {
            key: "title",
            get: function() {
                return this.copy.title
            }
        }, {
            key: "classNames",
            get: function() {
                var e = [];
                return e = this.props.TimeStore.currentConferencePhase >= To.a.Day2Sessions ? [].concat(te()(e), [Es.a.duringConcert]) : [].concat(te()(e), [Es.a.beforeConcert])
            }
        }]),
        t
    }(i.Component);
    Bs = Ps([Object(w.b)("UIStore", "SessionStore", "TimeStore", "VideoStore"), w.c], Bs);
    var Us = n(169)
      , Fs = n.n(Us)
      , Ns = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ws = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).copy = Ds.a.guides,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "openVideo",
            value: function() {
                this.props.VideoStore.open(this.copy.beforeConferenceEnd.youtubeID)
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return this.props.TimeStore.currentConferencePhase < To.a.ConferenceComplete ? Object(i.h)(Wt, {
                    gaCategory: this.props.gaCategory,
                    gaLabel: "".concat(this.copy.beforeConferenceEnd.button.label),
                    ariaRole: "button",
                    onClick: function() {
                        return e.openVideo()
                    },
                    classNames: Object(_.U)(Is.a.card, Fs.a.guides),
                    title: this.title,
                    button: this.button,
                    backgroundImage: this.backgroundImage
                }) : Object(i.h)(Wt, {
                    gaCategory: this.props.gaCategory,
                    gaLabel: "".concat(this.copy.afterConferenceEnd.button.label),
                    href: this.guidesHref,
                    external: !0,
                    classNames: Object(_.U)(Is.a.card, Fs.a.guides),
                    title: this.title,
                    button: this.button,
                    backgroundImage: this.backgroundImage
                })
            }
        }, {
            key: "button",
            get: function() {
                return this.props.TimeStore.currentConferencePhase < To.a.ConferenceComplete ? Object(i.h)(re, {
                    type: J.Text,
                    ariaHidden: !0,
                    tabIndex: -1
                }, this.copy.beforeConferenceEnd.button.label) : Object(i.h)(re, {
                    type: J.Text,
                    ariaHidden: !0,
                    tabIndex: -1
                }, this.copy.afterConferenceEnd.button.label)
            }
        }, {
            key: "title",
            get: function() {
                return this.copy.title
            }
        }, {
            key: "backgroundImage",
            get: function() {
                return Object(i.h)(We, {
                    src: this.copy.image.src,
                    sizes: "(max-width: 596px) 596px, 1192px",
                    srcset: "".concat(this.copy.image.src, " 596w, ").concat(this.copy.image.src2x, " 1192w"),
                    ariaHidden: !0
                })
            }
        }, {
            key: "guidesHref",
            get: function() {
                return this.copy.afterConferenceEnd.button.href
            }
        }]),
        t
    }(i.Component);
    Ws = Ns([Object(w.b)("TimeStore", "VideoStore"), w.c], Ws);
    var Gs = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Vs = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).copy = Ds.a.photos,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)(Wt, {
                    gaCategory: this.props.gaCategory,
                    gaLabel: this.copy.button.label,
                    href: this.copy.button.href,
                    external: !0,
                    classNames: Object(_.U)(Is.a.card),
                    title: this.title,
                    button: this.button,
                    backgroundImage: this.backgroundImage
                })
            }
        }, {
            key: "classNames",
            get: function() {}
        }, {
            key: "button",
            get: function() {
                return Object(i.h)(re, {
                    type: J.Text,
                    ariaHidden: !0,
                    tabIndex: -1
                }, this.copy.button.label)
            }
        }, {
            key: "title",
            get: function() {
                return this.copy.title
            }
        }, {
            key: "backgroundImage",
            get: function() {
                return Object(i.h)(We, {
                    src: this.copy.image.src,
                    sizes: "(max-width: 600px) 596px, 1192px",
                    srcset: "".concat(this.copy.image.src, " 596w, ").concat(this.copy.image.src2x, " 1192w"),
                    ariaHidden: !0
                })
            }
        }]),
        t
    }(i.Component);
    Vs = Gs([Object(w.b)("TimeStore"), w.c], Vs);
    var zs, qs = n(142), Zs = n.n(qs), Ks = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    !function(e) {
        e[e.Card = 0] = "Card",
        e[e.Banner = 1] = "Banner"
    }(zs || (zs = {}));
    var Ys = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).copy = Ds.a.map,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.layout
                  , n = e.gaCategory;
                return Object(i.h)(Wt, {
                    gaCategory: "".concat(n),
                    gaLabel: "".concat(this.copy.button.label),
                    href: this.copy.button.href,
                    classNames: _.U.apply(void 0, te()(this.classNames)),
                    routerLinkWrapperClassnames: t === zs.Banner && "full-bleed-exact",
                    button: this.button,
                    backgroundImage: this.backgroundImage
                })
            }
        }, {
            key: "classNames",
            get: function() {
                var e = this.props
                  , t = e.layout
                  , n = e.UIStore
                  , o = [];
                return o = t !== zs.Banner || n.Screen.isLessThanDesktop ? [].concat(te()(o), [Zs.a.card, Zs.a.mapCard, Is.a.card]) : [].concat(te()(o), [Zs.a.banner, Is.a.banner])
            }
        }, {
            key: "button",
            get: function() {
                return Object(i.h)(re, {
                    type: J.Fill,
                    ariaHidden: !0,
                    tabIndex: -1
                }, this.copy.button.label)
            }
        }, {
            key: "backgroundImage",
            get: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.layout;
                if (t.currentConferencePhase === To.a.Day2Concert)
                    return Object(i.h)(We, {
                        src: this.copy.night.image.src,
                        sizes: "(max-width: 596px) 596px, 1192px",
                        srcset: "".concat(this.copy.night.image.src, " 596w, ").concat(this.copy.night.image.src2x, " 1192w"),
                        ariaHidden: !0
                    });
                var o = "(max-width: 596px) 596px, 1192px"
                  , a = "".concat(this.copy.day.image.src, " 596w, ").concat(this.copy.day.image.src2x, " 1192w");
                return n === zs.Banner && (o = "(max-width: 596px) 596px, (max-width: 1192px) 1192px, 2384px",
                a = "".concat(this.copy.day.image.src, " 596w, ").concat(this.copy.day.image.src2x, " 1192w, ").concat(this.copy.day.image.src3x, " 2384w")),
                Object(i.h)(We, {
                    src: this.copy.day.image.src,
                    sizes: o,
                    srcset: a,
                    ariaHidden: !0
                })
            }
        }]),
        t
    }(i.Component);
    Ys.defaultProps = {
        layout: zs.Card
    },
    Ys = Ks([Object(w.b)("TimeStore", "UIStore"), w.c], Ys);
    var Js = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Xs = [Object(i.h)(Ys, {
        layout: zs.Card,
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Bs, {
        gaCategory: "Explore & Participate"
    })]
      , Qs = [Object(i.h)(Ws, {
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Vs, {
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Ys, {
        layout: zs.Card,
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Bs, {
        gaCategory: "Explore & Participate"
    })]
      , $s = [Object(i.h)(Ws, {
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Vs, {
        gaCategory: "Explore & Participate"
    }), Object(i.h)(Ys, {
        layout: zs.Banner,
        gaCategory: "Explore & Participate"
    })]
      , el = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.classNames;
                return Object(i.h)("div", {
                    class: Object(_.U)(Is.a.container, e)
                }, Object(i.h)("h4", {
                    class: Object(_.U)(Is.a.title)
                }, "Explore & Participate"), Object(i.h)("div", {
                    class: _.U.apply(void 0, [Is.a.cards].concat(te()(this.classNames)))
                }, this.renderCards))
            }
        }, {
            key: "classNames",
            get: function() {
                return this.props.classNames ? this.props.classNames.split(" ") : []
            }
        }, {
            key: "renderCards",
            get: function() {
                var e = this.props.TimeStore;
                return e.currentConferencePhase < To.a.Day1Sessions ? Xs : e.currentConferencePhase >= To.a.Day1Sessions && e.currentConferencePhase <= To.a.Day2Concert ? Qs : e.currentConferencePhase > To.a.Day2Concert ? $s : void 0
            }
        }]),
        t
    }(i.Component);
    el = Js([Object(w.b)("TimeStore"), w.c], el);
    var tl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , nl = new Date("May 12, 2019 10:00 PDT")
      , ol = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.UIStore
                  , o = Date.parse(nl.toString())
                  , a = Lo(t.currentTime, o)
                  , r = An()(a, 7)
                  , s = r[0]
                  , l = (r[1],
                r[2])
                  , c = r[3]
                  , u = r[4]
                  , d = r[5]
                  , h = r[6];
                return Object(i.h)("section", {
                    class: "liveExperiencePage"
                }, Object(i.h)(Te, null), Object(i.h)(Cs, null), Object(i.h)(Ho, {
                    weeksRemaining: l,
                    daysRemaining: c <= 12 ? c : null,
                    hoursRemaining: u < 24 ? u : 24 - s.getHours(),
                    minutesRemaining: d > 60 ? d : 60 - s.getMinutes(),
                    secondsRemaining: h < 60 ? h : 60 - s.getSeconds(),
                    mobile: n.Screen.isLessThanLaptop
                }), Object(i.h)(ji, null), Object(i.h)(el, null), Object(i.h)(Fo, {
                    title: "Latest from #io19"
                }), Object(i.h)(Ts, null), Object(i.h)(z, null))
            }
        }]),
        t
    }(i.Component);
    ol = tl([Object(w.b)("TimeStore", "UIStore")], ol);
    var al = n(49)
      , rl = n.n(al)
      , il = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , sl = new Date("May 12, 2020 10:00 PDT")
      , ll = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).changeTheme = function(t) {
                var n = e.props.UIStore;
                n.Theme.setHomeHeroTheme(t),
                n.Theme.setCountdownTheme(t),
                n.Theme.setHeaderTheme(t)
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentWillUnmount",
            value: function() {
                this.props.UIStore.Theme.resetAllThemes()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.TimeStore
                  , o = t.UIStore
                  , a = t.content
                  , r = Date.parse(sl.toString())
                  , s = Lo(n.currentTime, r)
                  , l = An()(s, 7)
                  , c = l[0]
                  , u = (l[1],
                l[2])
                  , d = l[3]
                  , h = l[4]
                  , p = l[5]
                  , f = l[6]
                  , g = o.Theme.homeHeroTheme;
                return Object(i.h)("section", {
                    id: "hero",
                    class: Object(_.U)("full-bleed", rl.a.heroWrapper),
                    style: g && {
                        backgroundColor: g.BACKGROUND
                    }
                }, Object(i.h)("div", {
                    class: Object(_.U)("grid")
                }, Object(i.h)("div", {
                    class: Object(_.U)(rl.a.hero, "col-6-lg col-4")
                }, Object(i.h)("div", {
                    class: "".concat(rl.a.info)
                }, Object(i.h)(ue, {
                    classnames: "".concat(rl.a.logo),
                    color: g && g.FOREGROUND
                }), Object(i.h)("div", {
                    class: Object(_.U)(rl.a.heroSubinfo)
                }, Object(i.h)("p", {
                    class: Object(_.U)(rl.a.description, g && rl.a["description".concat(g.ID)], g && rl.a.descriptionThemeColored),
                    style: g && {
                        color: g.TEXT
                    }
                }, Object(i.h)(Ot, null, a.description))))), Object(i.h)("div", {
                    class: Object(_.U)("col-offset-7-lg col-5-lg col-4", rl.a.countdown)
                }, Object(i.h)(Ho, {
                    weeksRemaining: u,
                    daysRemaining: d <= 12 ? d : null,
                    hoursRemaining: h < 24 ? h : 24 - c.getHours(),
                    minutesRemaining: p > 60 ? p : 60 - c.getMinutes(),
                    secondsRemaining: f < 60 ? f : 60 - c.getSeconds(),
                    mobile: o.Screen.isLessThanLaptop,
                    onChangeTheme: function(t) {
                        return e.changeTheme(t)
                    },
                    theme: o.Theme.countdownTheme
                }))))
            }
        }]),
        t
    }(i.Component);
    ll = il([Object(w.b)("TimeStore", "UIStore"), w.c], ll);
    var cl = n(219)
      , ul = n.n(cl)
      , dl = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)("div", {
                    class: Object(_.U)(rl.a.home, "page")
                }, Object(i.h)(Te, null), Object(i.h)(ll, {
                    content: ul.a.hero
                }), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component)
      , hl = n(98)
      , pl = n.n(hl)
      , fl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , gl = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).aria = new Ko,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "handleClickOutside",
            value: function(e) {
                this.el && this.el.contains(e.target) || !this.props.UIStore.Drawer.opened || this.props.UIStore.Drawer.close()
            }
        }, {
            key: "onKeyDown",
            value: function(e) {
                Object(_.P)(e, _.e.Escape) && this.props.UIStore.Drawer.close()
            }
        }, {
            key: "componentWillMount",
            value: function() {
                (this.props.opened || this.props.UIStore.Drawer.opened) && this.props.UIStore.Drawer.open(),
                _.T && (this.onKeyHandler = this.onKeyDown.bind(this),
                document.addEventListener("keydown", this.onKeyHandler),
                this.props.disableClickClose || (this.clickOutsideHandler = this.handleClickOutside.bind(this),
                document.addEventListener("mousedown", this.clickOutsideHandler, !1)))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                document.removeEventListener("keydown", this.onKeyHandler),
                document.removeEventListener("mousedown", this.clickOutsideHandler, !1)
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                var e = this
                  , t = this.props.UIStore.Drawer.opened;
                setTimeout((function() {
                    t ? e.aria.trapFocus(e.childEl) : e.aria.cleanup()
                }
                ), 32)
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.UIStore;
                return Object(i.h)("div", {
                    "aria-hidden": !t.Drawer.opened,
                    class: t.Drawer.opened && pl.a.drawerOpened,
                    ref: function(t) {
                        return e.el = t
                    },
                    role: "dialog",
                    onKeyDown: function(t) {
                        e.onKeyDown(t)
                    }
                }, Object(i.h)("div", {
                    class: pl.a.drawer
                }, Object(i.h)("div", {
                    class: pl.a.drawerInner,
                    ref: function(t) {
                        return e.childEl = t
                    }
                }, this.props.children), t.Screen.isMobile ? Object(i.h)(x, {
                    classNames: pl.a.drawerCloseButton,
                    ariaLabel: "Close",
                    icon: "keyboard_arrow_down",
                    type: a.NotRaised,
                    onClick: function() {
                        t.Drawer.close()
                    }
                }) : Object(i.h)(x, {
                    classNames: pl.a.drawerCloseButton,
                    ariaLabel: "Close",
                    icon: "close",
                    type: a.NotRaised,
                    onClick: function() {
                        t.Drawer.close()
                    }
                })), t.Screen.isMobile && Object(i.h)(Y, {
                    classNames: pl.a.darkUnderlay,
                    onClick: t.Drawer.close,
                    visible: t.Drawer.opened
                }))
            }
        }]),
        t
    }(i.Component);
    gl = fl([Object(w.b)("UIStore"), w.c], gl);
    var bl = n(23)
      , vl = n.n(bl)
      , ml = n(123)
      , yl = n.n(ml)
      , Ol = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "handleOnKeyPress",
            value: function(e) {
                (Object(_.P)(e, _.e.Enter) || Object(_.P)(e, _.e.Space)) && (e.preventDefault(),
                this.props.onClick(e))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.ariaLabel
                  , n = e.classNames
                  , o = e.icon
                  , a = e.on
                  , r = e.onClick
                  , s = e.gaLabel
                  , l = e.gaCategory;
                return Object(i.h)("div", {
                    "aria-label": t,
                    "aria-checked": a,
                    class: Object(_.U)(yl.a.switch, a && yl.a.on, n),
                    onClick: r,
                    onKeyPress: this.handleOnKeyPress.bind(this),
                    role: "switch",
                    tabIndex: 0,
                    "data-g-on": "click",
                    "data-g-event-category": l || t || "Slide toggle",
                    "data-g-event-label": s || "Toggle",
                    "data-g-event-action": "click"
                }, Object(i.h)("div", {
                    class: yl.a.track
                }), Object(i.h)(C, {
                    classNames: yl.a.icon
                }, o))
            }
        }]),
        t
    }(i.Component);
    Ol.defaultProps = {
        on: !1
    };
    var jl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , kl = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderTagFilters",
            value: function(e, t) {
                var n = this.props.FilterStore;
                return e.map((function(e) {
                    var o = {
                        type: t,
                        match: e.slug
                    }
                      , a = n.isFilterActive(o);
                    return Object(i.h)("li", null, Object(i.h)(re, {
                        gaCategory: "Event Filters",
                        gaLabel: "Toggle filter: ".concat(o.match),
                        toggled: a,
                        classNames: vl.a.tagButton,
                        type: J.Hairline,
                        onClick: function() {
                            n.toggleFilter(o)
                        },
                        styleOverrides: a && "border-color: ".concat(e.color)
                    }, Object(i.h)(zt, {
                        category: e.category,
                        classNames: vl.a.tag,
                        color: e.color,
                        fontColor: e.fontColor,
                        label: e.name,
                        tag: e.tag,
                        toggled: a
                    })))
                }
                ))
            }
        }, {
            key: "renderLocationFilters",
            value: function(e) {
                var t = this.props.FilterStore;
                return e.map((function(e) {
                    var n = {
                        type: Qr.LocationFilter,
                        match: e.slug
                    }
                      , o = t.isFilterActive(n);
                    return Object(i.h)("li", null, Object(i.h)(re, {
                        gaCategory: "Event Filters",
                        gaLabel: "Toggle filter: ".concat(n.match),
                        toggled: o,
                        classNames: vl.a.tagButton,
                        type: J.Hairline,
                        onClick: function() {
                            t.toggleFilter(n)
                        }
                    }, Object(i.h)(zt, {
                        classNames: vl.a.tag,
                        label: e.name,
                        toggled: o
                    })))
                }
                ))
            }
        }, {
            key: "updateParams",
            value: function() {
                var e = this.props
                  , t = e.FilterStore
                  , n = e.history;
                t.activeFilters.length && n.replace(l()(l()({}, n.location), {
                    search: "?".concat(t.queryParams)
                }))
            }
        }, {
            key: "updateFiltersFromParams",
            value: function() {
                var e = this.props
                  , t = e.location
                  , n = e.FilterStore
                  , o = e.UserStore
                  , a = t.search;
                a.length && n.updateActiveFiltersFromParams(a, o.initialized && o.isSignedIn)
            }
        }, {
            key: "componentWillMount",
            value: function() {
                var e = this
                  , t = this.props.FilterStore;
                this.updateParams(),
                this.updateFiltersFromParams(),
                this.activeFiltersDisposer = Object(Vo.m)((function() {
                    return t.activeFilters
                }
                ), (function() {
                    e.updateParams()
                }
                ))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.activeFiltersDisposer()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.filterTypes
                  , n = e.FilterStore
                  , o = e.SessionStore;
                e.UIStore,
                e.UserStore;
                if (o.loaded)
                    return Object(i.h)("section", {
                        class: vl.a.eventFilters,
                        "aria-label": "Filter drawer"
                    }, Object(i.h)("header", {
                        class: "".concat(vl.a.filtersSection, " ").concat(vl.a.header)
                    }, Object(i.h)(re, {
                        gaCategory: "Event Filters",
                        gaLabel: "Reset filters",
                        classNames: vl.a.resetButton,
                        type: J.Text,
                        onClick: function() {
                            n.clearFilters()
                        }
                    }, "Reset"), Object(i.h)("h5", {
                        class: vl.a.headerTitle
                    }, "Filters", n.activeFilters.length > 0 && ": (".concat(n.filterSessions(o.sessions).length, " results)"))), Object(i.h)("div", {
                        class: "".concat(vl.a.filterSwitches)
                    }, _.s && t.includes(Qr.MyIOFilter) && Object(i.h)("div", {
                        className: "".concat(vl.a.filtersSectionGrey, " ").concat(vl.a.filtersSwitch)
                    }, Object(i.h)("h5", null, "My I/O"), Object(i.h)(Ol, {
                        gaCategory: "Event Filters",
                        ariaLabel: "MyIO toggle",
                        icon: "star",
                        on: n.isFilterActive(oi),
                        onClick: function() {
                            n.toggleFilter(oi)
                        }
                    })), t.includes(Qr.LivestreamFilter) && Object(i.h)("div", {
                        className: "".concat(vl.a.filtersSectionGrey, " ").concat(vl.a.filtersSwitch)
                    }, Object(i.h)("h5", null, "Livestream"), Object(i.h)(Ol, {
                        gaCategory: "Event Filters",
                        ariaLabel: "Livestream toggle",
                        icon: "videocam",
                        on: n.isFilterActive(ai),
                        onClick: function() {
                            n.toggleFilter(ai)
                        }
                    }))), t.includes(Qr.TrackFilter) && Object(i.h)("div", {
                        className: vl.a.filtersSection,
                        "aria-label": "Filter by tracks"
                    }, Object(i.h)("h5", null, "Tracks"), Object(i.h)("ul", {
                        className: Object(_.U)(vl.a.twoCols, "reset")
                    }, this.renderTagFilters(o.topics, Qr.TrackFilter))), t.includes(Qr.TypeFilter) && Object(i.h)("div", {
                        className: vl.a.filtersSection,
                        "aria-label": "Filter by type"
                    }, Object(i.h)("h5", null, "Types"), Object(i.h)("ul", {
                        className: Object(_.U)(vl.a.twoCols, "reset")
                    }, this.renderTagFilters(o.types.filter((function(e) {
                        return "type_codelabs" !== e.tag
                    }
                    )), Qr.TypeFilter))), Object(i.h)("div", {
                        class: "".concat(vl.a.filtersSection, " ").concat(vl.a.twoCols)
                    }, t.includes(Qr.LocationFilter) && Object(i.h)("div", {
                        "aria-label": "Filter by location"
                    }, Object(i.h)("h5", null, "Locations"), Object(i.h)("ul", {
                        className: "reset"
                    }, this.renderLocationFilters(o.locations))), t.includes(Qr.LevelFilter) && Object(i.h)("div", {
                        "aria-label": "Filter by level"
                    }, Object(i.h)("h5", null, "Level"), Object(i.h)("ul", {
                        className: "reset"
                    }, this.renderTagFilters(o.levels, Qr.LevelFilter)))))
            }
        }]),
        t
    }(i.Component);
    kl.defaultProps = {
        filterTypes: [Qr.MyIOFilter, Qr.LivestreamFilter, Qr.TrackFilter, Qr.TypeFilter, Qr.LevelFilter, Qr.LocationFilter]
    },
    kl = jl([S.h, Object(w.b)("FilterStore", "SessionStore", "UIStore", "UserStore"), w.c], kl);
    var Sl = n(109)
      , wl = n.n(Sl)
      , _l = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.borders
                  , n = e.darkMode
                  , o = e.imageUrls
                  , a = e.title;
                return Object(i.h)("div", {
                    class: Object(_.U)(wl.a.block, t && wl.a.blockWithBorders, n && wl.a.darkMode)
                }, Object(i.h)("h2", {
                    className: wl.a.title
                }, a), Object(i.h)(We, {
                    classNames: wl.a.image,
                    src: o._1x,
                    src2x: o._2x
                }))
            }
        }]),
        t
    }(i.Component);
    _l.defaultProps = {
        borders: !1,
        darkMode: !1
    };
    var Cl = n(70)
      , Ml = n.n(Cl)
      , Hl = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = Object(_.C)(To.c.mainKeynoteStart)
                  , t = Object(_.C)(To.c.mainKeynoteEnd)
                  , n = Object(_.C)(To.c.devKeynoteStart)
                  , o = Object(_.C)(To.c.devKeynoteEnd);
                return Object(i.h)("div", {
                    class: Ml.a.block
                }, Object(i.h)("div", {
                    class: Ml.a.content
                }, Object(i.h)("h2", {
                    class: Ml.a.title
                }, "I/O starts at", " ", Object(i.h)("span", {
                    class: Ml.a.timeLabel
                }, "".concat(e[0]).concat(e[1])), " ", "on Tuesday, May 7th"), Object(i.h)("div", {
                    class: Ml.a.keynotesHolder
                }, Object(i.h)("div", null, Object(i.h)("h3", {
                    class: Ml.a.keynoteTitle
                }, "Google Keynote"), Object(i.h)("span", {
                    class: Ml.a.keynoteTime
                }, "".concat(e[0]).concat(e[1]), " ", "– ", "".concat(t[0]).concat(t[1]))), Object(i.h)("div", null, Object(i.h)("h3", {
                    class: Ml.a.keynoteTitle
                }, "Developer Keynote"), Object(i.h)("span", {
                    class: Ml.a.keynoteTime
                }, "".concat(n[0]).concat(n[1]), " ", "–", " ", "".concat(o[0]).concat(o[1]))))))
            }
        }]),
        t
    }(i.Component)
      , Ll = "".concat(_.b, "images/live-experience/live/")
      , Tl = function(e) {
        var t = Object(_.C)(e)
          , n = An()(t, 2)
          , o = n[0]
          , a = n[1];
        return "".concat(o, " ").concat(a)
    }
      , Al = {
        component: Object(i.h)(Hl, null),
        startTimestamp: To.c.liveExperienceStart,
        endTimestamp: To.c.mainKeynoteStart
    }
      , Il = [{
        insertAt: To.c.day1LunchStart,
        heading: Tl(To.c.day1LunchStart),
        component: Object(i.h)(_l, {
            borders: !0,
            imageUrls: {
                _1x: "".concat(Ll, "Livestream-Lunch_1x.png"),
                _2x: "".concat(Ll, "Livestream-Lunch_2x.png")
            },
            title: "Lunch break"
        }),
        startTimestamp: To.c.day1LunchStart,
        endTimestamp: To.c.devKeynoteStart
    }, {
        insertAt: To.c.day1AfterHoursStart,
        heading: Tl(To.c.day1AfterHoursStart),
        component: Object(i.h)(_l, {
            darkMode: !0,
            imageUrls: {
                _1x: "".concat(Ll, "Livestream-AfterDark_1x.png"),
                _2x: "".concat(Ll, "Livestream-AfterDark_2x.png")
            },
            title: "I/O livestream will return tomorrow at ".concat(Object(_.C)(To.c.day2Start)[0]).concat(Object(_.C)(To.c.day2Start)[1], ".")
        }),
        startTimestamp: To.c.day1AfterHoursStart,
        endTimestamp: To.c.day2Start
    }, {
        insertAt: To.c.day2End,
        heading: Tl(To.c.day2ConcertStart),
        component: Object(i.h)(_l, {
            darkMode: !0,
            imageUrls: {
                _1x: "".concat(Ll, "Livestream-Concert_1x.png"),
                _2x: "".concat(Ll, "Livestream-Concert_2x.png")
            },
            title: "I/O livestream will return tomorrow at ".concat(Object(_.C)(To.c.day3Start)[0]).concat(Object(_.C)(To.c.day3Start)[1], ".")
        }),
        startTimestamp: To.c.day2ConcertStart,
        endTimestamp: To.c.day3Start
    }]
      , xl = n(220)
      , Dl = n.n(xl)
      , Rl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , El = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.classNames
                  , o = e.setRef
                  , a = Object(_.C)(t.currentMinutes * _.o)
                  , r = An()(a, 1)[0];
                return Object(i.h)("div", {
                    "aria-hidden": "true",
                    className: Object(_.U)(Dl.a.timeIndicator, n),
                    ref: function(e) {
                        return o(e)
                    }
                }, Object(i.h)("span", null, r))
            }
        }]),
        t
    }(i.Component);
    El = Rl([Object(w.b)("TimeStore"), w.c], El);
    var Pl, Bl = n(29), Ul = n.n(Bl), Fl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    };
    function Nl(e) {
        return void 0 !== e.component
    }
    var Wl = ["Amphitheatre", "Stage 1", "Stage 2", "Stage 3", "Stage 4", "Stage 5", "Stage 6", "Stage 7", "Stage 8", "The Garage"]
      , Gl = Pl = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).call(this))).onTodayClickHandler = e.handleTodayClick.bind(k()(e)),
            e.onPrevClickHandler = function() {
                return e.handlePrevNextClick()
            }
            ,
            e.onNextClickHandler = function() {
                return e.handlePrevNextClick(!0)
            }
            ,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this;
                this.timeReactionDisposer = Object(Vo.m)((function() {
                    return e.props.TimeStore.currentMinutes
                }
                ), (function(t) {
                    return e.updateTime()
                }
                )),
                this.scrollEl.style.scrollBehavior = "auto",
                requestAnimationFrame((function() {
                    e.updateTime(),
                    e.scrollEl.style.scrollBehavior = "smooth"
                }
                ))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.timeReactionDisposer()
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                this.blocksEls = Array.from(this.scrollEl.querySelectorAll(".block"))
            }
        }, {
            key: "handleTodayClick",
            value: function() {
                this.scrollToNow()
            }
        }, {
            key: "handlePrevNextClick",
            value: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                  , t = this.blocks.indexOf(this.findScheduleBlockInView());
                if (t += e ? 1 : -1,
                !(!e && t < 0 || e && t >= this.blocks.length - 1)) {
                    var n = this.blocks[t];
                    this.scrollToBlock(n)
                }
            }
        }, {
            key: "updateTime",
            value: function() {
                var e = this.props.TimeStore
                  , t = this.state.activeScheduleBlock;
                this.state.activeScheduleBlock && e.isBetween(this.state.activeScheduleBlock.startTimestamp, this.state.activeScheduleBlock.endTimestamp) || this.setState({
                    activeScheduleBlock: this.findActiveBlock()
                });
                var n = this.state.activeScheduleBlock;
                n && t !== n && this.scrollToNow();
                var o = n && !Nl(n);
                this.timeIndicatorEl.style.display = o ? "block" : "none",
                o && this.updateTimeIndicator()
            }
        }, {
            key: "updateTimeIndicator",
            value: function() {
                var e = this.props.TimeStore
                  , t = this.state.activeScheduleBlock;
                if (t) {
                    var n = this.getBlockElement(t)
                      , o = t.startTimestamp
                      , a = n.offsetLeft
                      , r = e.currentTime - o
                      , i = Pl.getWidthForTime(r);
                    this.timeIndicatorEl.style.transform = "translateX(-50%) translateX(".concat(a + i, "px)")
                }
            }
        }, {
            key: "findActiveBlock",
            value: function() {
                var e = this.props.TimeStore;
                return this.blocks.find((function(t) {
                    return t.startTimestamp && t.endTimestamp && e.isBetween(t.startTimestamp, t.endTimestamp)
                }
                ))
            }
        }, {
            key: "findScheduleBlockInView",
            value: function() {
                var e = this
                  , t = this.blocksEls.findIndex((function(t) {
                    return t.offsetLeft + t.offsetWidth > e.scrollEl.scrollLeft + 20
                }
                ));
                return -1 === t ? null : this.blocks[t]
            }
        }, {
            key: "getBlockElement",
            value: function(e) {
                if (e.startTimestamp) {
                    var t = e.startTimestamp;
                    return this.scrollEl.querySelector('[data-timestamp="'.concat(t, '"]'))
                }
            }
        }, {
            key: "scrollToNow",
            value: function() {
                this.state.activeScheduleBlock && this.scrollToBlock(this.state.activeScheduleBlock)
            }
        }, {
            key: "scrollToBlock",
            value: function(e) {
                var t = this.getBlockElement(e);
                t && (this.scrollEl.scrollLeft = t.offsetLeft - 20)
            }
        }, {
            key: "renderFillerBlock",
            value: function(e) {
                return Object(i.h)("section", {
                    "data-timestamp": e.startTimestamp && e.startTimestamp,
                    class: Object(_.U)("block", Ul.a.fillerBlock)
                }, Object(i.h)("header", {
                    class: Ul.a.columnHeader
                }, e.heading && Object(i.h)("h3", {
                    class: Ul.a.heading
                }, e.heading)), e.component)
            }
        }, {
            key: "renderScheduleBlock",
            value: function(e, t) {
                var n = this
                  , o = this.state.activeScheduleBlock;
                return Object(i.h)("section", {
                    id: e.isDayStart && e.daySlug,
                    "data-scroll": e.isDayStart,
                    "data-timestamp": e.startTimestamp,
                    class: Object(_.U)("block", e.startTimestamp < (o && o.startTimestamp) && Ul.a.pastBlock)
                }, Object(i.h)("header", {
                    class: Ul.a.columnHeader
                }, Object(i.h)("h3", {
                    class: Ul.a.heading
                }, Object(i.h)(Ot, null, e.heading))), Object(i.h)("div", {
                    class: Ul.a.column,
                    role: "list"
                }, e.channels.map((function(t) {
                    var o = t ? Pl.getStyleForSessionHolder(t, e) : Pl.getStyleForEmptyCell(e);
                    return Object(i.h)("div", {
                        class: Ul.a.cell,
                        style: {
                            width: "".concat(Pl.getBlockWidth(e), "px")
                        }
                    }, Object(i.h)("div", {
                        className: t && Ul.a.sessionHolder,
                        style: o
                    }, t && Object(i.h)(Ji, {
                        classNames: Object(_.U)(Ul.a.sessionItem, !n.filteredSessions.includes(t) && Ul.a.sessionItemFiltered),
                        layout: qi.Card,
                        session: t,
                        ariaRole: "button"
                    })))
                }
                ))))
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.classNames;
                return Object(i.h)("section", {
                    class: Object(_.U)(Ul.a.liveGrid, t)
                }, Object(i.h)("div", {
                    class: Ul.a.controls
                }, Object(i.h)(x, {
                    icon: "arrow_back",
                    elevation: o.Flat,
                    type: a.Default,
                    onClick: this.onPrevClickHandler,
                    ariaLabel: "Move to previous time block."
                }), Object(i.h)(x, {
                    icon: "arrow_forward",
                    elevation: o.Flat,
                    type: a.Default,
                    onClick: this.onNextClickHandler,
                    ariaLabel: "Move to next time block."
                }), Object(i.h)(x, {
                    icon: "today",
                    elevation: o.Flat,
                    type: a.Default,
                    onClick: this.onTodayClickHandler,
                    ariaLabel: "Move to current time.",
                    tooltip: "Happening now"
                })), Object(i.h)("div", {
                    className: Ul.a.channelsGutter,
                    "aria-hidden": "true",
                    ref: function(t) {
                        return e.channelGutterEl = t
                    }
                }, Object(i.h)("header", {
                    className: Ul.a.columnHeader
                }, Object(i.h)("div", {
                    className: Object(_.U)(Ul.a.heading, Ul.a.channelHeading)
                }, "Channel")), Object(i.h)("div", {
                    className: Ul.a.column
                }, Wl.map((function(e, t) {
                    return Object(i.h)("div", {
                        className: Ul.a.channelCell
                    }, t < 10 ? "0".concat(t) : t)
                }
                )))), Object(i.h)("div", {
                    id: "grid-scroll-wrapper",
                    className: Ul.a.columns,
                    ref: function(t) {
                        return e.scrollEl = t
                    }
                }, Object(i.h)(El, {
                    setRef: function(t) {
                        return e.timeIndicatorEl = t
                    }
                }), this.blocks.map((function(t, n) {
                    return Nl(t) ? e.renderFillerBlock(t) : e.renderScheduleBlock(t, n)
                }
                ))))
            }
        }, {
            key: "blocks",
            get: function() {
                var e = this.props.SessionStore
                  , t = []
                  , n = 1;
                return t.push(Al),
                e.liveSchedule.forEach((function(o, a) {
                    o.timeBlocks.forEach((function(r, i) {
                        var s = 0 === i ? "Day ".concat(n++, "<br>") : "";
                        s += Pl.getTimeHeaderLabel(+r.startDate);
                        var l = {
                            channels: Pl.sortSessionsInChannels(r.sessions),
                            daySlug: "day-".concat(a + 1),
                            endTimestamp: +r.endDate,
                            heading: s,
                            isDayStart: 0 === i,
                            startTimestamp: +r.startDate
                        };
                        t.push(l);
                        var c = i + 1
                          , u = a + 1
                          , d = c < o.timeBlocks.length ? o.timeBlocks[c] : u < e.liveSchedule.length ? e.liveSchedule[u].timeBlocks[0] : null
                          , h = Il.find((function(e) {
                            return l.endTimestamp <= e.insertAt && (!d || e.insertAt <= d.startDate.getTime())
                        }
                        ));
                        h && t.push(h)
                    }
                    ))
                }
                )),
                t
            }
        }, {
            key: "filteredSessions",
            get: function() {
                var e = this.props
                  , t = e.FilterStore
                  , n = e.SessionStore;
                return t.filterSessions(n.sessionsWithLivestream)
            }
        }], [{
            key: "getTimeHeaderLabel",
            value: function(e) {
                var t = Object(_.C)(e)
                  , n = An()(t, 2)
                  , o = n[0]
                  , a = n[1];
                return "".concat(o, " ").concat(a)
            }
        }, {
            key: "getWidthForTime",
            value: function(e) {
                var t = e / _.n;
                return Math.floor(370 * t)
            }
        }, {
            key: "getBlockWidth",
            value: function(e) {
                var t = e.endTimestamp - e.startTimestamp;
                return Pl.getWidthForTime(t)
            }
        }, {
            key: "getStyleForSessionHolder",
            value: function(e, t) {
                var n = t.startTimestamp - e.startTime.getTime();
                return {
                    left: "".concat(Pl.getWidthForTime(n), "px"),
                    width: "".concat(Pl.getWidthForTime(e.duration), "px")
                }
            }
        }, {
            key: "getStyleForEmptyCell",
            value: function(e) {
                return {
                    left: 0,
                    width: Pl.getWidthForTime(e.endTimestamp - e.startTimestamp)
                }
            }
        }, {
            key: "sortSessionsInChannels",
            value: function(e) {
                var t = Wl.map((function(e) {
                    return null
                }
                ));
                return e.forEach((function(e) {
                    var n = Wl.indexOf(e.location.name);
                    t[n] = e
                }
                )),
                t
            }
        }]),
        t
    }(i.Component);
    Fl([Vo.e], Gl.prototype, "blocks", null),
    Fl([Vo.e], Gl.prototype, "filteredSessions", null),
    Gl = Pl = Fl([Object(w.b)("FilterStore", "SessionStore", "TimeStore"), w.c], Gl);
    var Vl = n(50)
      , zl = n.n(Vl)
      , ql = n(170)
      , Zl = n.n(ql)
      , Kl = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Yl = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).targetEls = [],
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "scrollToTarget",
            value: function(e) {
                var t = this;
                _.T && (this.updateActiveTab(e),
                window.requestAnimationFrame((function() {
                    t.gridEl.scrollLeft = t.targetEl.offsetLeft - 20
                }
                )))
            }
        }, {
            key: "updateActiveTab",
            value: function(e) {
                this.props.UIStore.GridDateTabs.updateActiveTab(e),
                this.targetEl = document.getElementById(e)
            }
        }, {
            key: "updateTargetEls",
            value: function() {
                this.targetEls = Array.from(document.querySelectorAll("[data-scroll]"))
            }
        }, {
            key: "updateActiveTabView",
            value: function() {
                var e = this
                  , t = this.props.UIStore;
                this.targetEls && this.targetEls.forEach((function(n, o) {
                    if (n && e.gridEl) {
                        var a = o < e.targetEls.length - 1 ? e.targetEls[o + 1] : null
                          , r = [0 === o ? 0 : n.offsetLeft - 20 - 1, a ? a.offsetLeft + 20 - 1 : e.gridEl.scrollWidth];
                        e.gridEl.scrollLeft > r[0] && e.gridEl.scrollLeft < r[1] && n.getAttribute("id").length && (t.GridDateTabs.updateActiveTab(n.getAttribute("id")),
                        n.focus())
                    }
                }
                ))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (_.T) {
                    var e = this.props.UIStore;
                    if (this.gridEl = document.getElementById("grid-scroll-wrapper"),
                    this.updateTargetEls(),
                    this.targetEls && this.targetEls.length) {
                        var t = this.targetEls[0].getAttribute("id");
                        e.GridDateTabs.updateActiveTab(t)
                    }
                    this.updateActiveTabViewHandler = this.updateActiveTabView.bind(this),
                    this.gridEl.addEventListener("scroll", this.updateActiveTabViewHandler)
                }
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.gridEl && this.gridEl.removeEventListener("scroll", this.updateActiveTabViewHandler)
            }
        }, {
            key: "componentDidUpdate",
            value: function() {
                _.T && (this.targetEls && this.targetEls.length || this.updateTargetEls())
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.SessionStore
                  , o = t.UIStore
                  , a = t.location;
                return Object(i.h)("section", {
                    class: Object(_.U)(zl.a.tabs, this.props.classNames)
                }, Object(i.h)("ul", {
                    class: "".concat(zl.a.tabList, " col-11-lg col-offset-1-lg"),
                    role: "tablist"
                }, n.sessions && n.sessions.length > 0 && n.scheduleDays.map((function(t, n) {
                    var r = "Day ".concat(n + 1)
                      , s = "day-".concat(n + 1);
                    return Object(i.h)("li", {
                        class: zl.a.tabListItem,
                        role: "presentation"
                    }, Object(i.h)(re, {
                        type: J.Text,
                        classNames: Object(_.U)(zl.a.tab, Zl.a.tab, o.GridDateTabs.activeTabSlug === s && zl.a.activeTab, o.GridDateTabs.activeTabSlug === s && Zl.a.activeTab),
                        ariaLabel: r,
                        ariaSelected: o.GridDateTabs.activeTabSlug === s,
                        ariaRole: "tab",
                        role: "tab",
                        gaOn: e.props.gaOn,
                        gaCategory: "".concat(e.props.gaCategory || a.pathname, ": Grid Date Tabs"),
                        gaLabel: "Tab: ".concat(r),
                        gaEventAction: e.props.gaEventAction,
                        onClick: function() {
                            return e.scrollToTarget(s)
                        }
                    }, r))
                }
                ))))
            }
        }]),
        t
    }(i.Component);
    Yl.defaultProps = {
        gaOn: "click",
        gaEventAction: "click"
    },
    Yl = Kl([S.h, Object(w.b)("SessionStore", "UIStore"), w.c], Yl);
    var Jl = n(143)
      , Xl = n.n(Jl)
      , Ql = n(124)
      , $l = n.n(Ql)
      , ec = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , tc = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).currentRouteParams = "",
            e.hashEl = null,
            e.scrollEls = [],
            e.lastScrollPosition = 0,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "isTabActive",
            value: function(e) {
                return e === this.state.hashInView
            }
        }, {
            key: "scrollToHash",
            value: function() {
                if (null === this.hashEl || !_.T)
                    return !1;
                var e = this.props.UIStore
                  , t = this.hashEl.offsetTop + e.Header.stickyElementHeight;
                t < this.lastScrollPosition && (t -= _.m),
                window.scrollTo(0, t - 2 * e.Header.stickyElementHeight),
                this.lastScrollPosition = t
            }
        }, {
            key: "updateActiveTabView",
            value: function() {
                var e = this;
                if (_.T) {
                    var t = this.props.UIStore
                      , n = t.Header.stickyElementHeight + (t.Header.navHidden ? 0 : _.m) + 1;
                    this.scrollEls.forEach((function(t) {
                        null !== t && (t.offsetTop < window.pageYOffset + n && t.offsetTop + t.offsetHeight > window.pageYOffset && (e.setState({
                            hashInView: t.getAttribute("id")
                        }),
                        t.focus()))
                    }
                    ))
                }
            }
        }, {
            key: "updateRouteParams",
            value: function(e) {
                this.currentRouteParams = "".concat(e.search && e.search.length ? e.search : "")
            }
        }, {
            key: "setHashEl",
            value: function(e) {
                this.hashEl = document.getElementById("".concat(e.replace("#", "")))
            }
        }, {
            key: "componentWillMount",
            value: function() {
                var e = this;
                _.T && (this.sessionsLoadedDisposer = Object(Vo.m)((function() {
                    return e.props.SessionStore.sessions
                }
                ), (function() {
                    e.props.SessionStore.sessions.length && (e.updateActiveTabView(),
                    e.setHashEl(e.props.location.hash),
                    e.scrollToHash())
                }
                )))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.sessionsLoadedDisposer(),
                _.T && window.removeEventListener(_.u.SCROLL, this.updateActiveTabViewHandler)
            }
        }, {
            key: "componentDidMount",
            value: function() {
                if (_.T) {
                    var e = this.props
                      , t = e.SessionStore
                      , n = e.location;
                    if (t.sessions && t.sessions.length)
                        if (this.scrollEls = Array.from(document.querySelectorAll("[data-scroll]")),
                        this.updateRouteParams(n),
                        n.hash && n.hash.length)
                            this.setHashEl(n.hash),
                            this.scrollToHash();
                        else {
                            var o = Object(_.x)(t.scheduleDays[0])
                              , a = Object(_.G)(o, !0)
                              , r = Object(_.Y)(a);
                            this.setState({
                                hashInView: r
                            })
                        }
                    this.updateActiveTabViewHandler = this.updateActiveTabView.bind(this),
                    window.addEventListener(_.u.SCROLL, this.updateActiveTabViewHandler)
                }
            }
        }, {
            key: "componentWillUpdate",
            value: function(e) {
                var t = this.props.location;
                this.setHashEl(e.location.hash),
                t.search === e.location.search && t.pathname === e.location.pathname || this.updateRouteParams(e.location)
            }
        }, {
            key: "shouldComponentUpdate",
            value: function(e, t) {
                return this.props.location.hash !== e.location.hash || this.props.location.search !== e.location.search || this.props.SessionStore.loaded !== e.SessionStore.loaded || this.state.hashInView !== t.hashInView
            }
        }, {
            key: "componentDidUpdate",
            value: function(e) {
                var t = this.props.location;
                this.scrollEls.length || (this.scrollEls = Array.from(document.querySelectorAll("[data-scroll]"))),
                t.hash !== e.location.hash && this.scrollToHash()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.SessionStore
                  , o = t.location;
                return Object(i.h)("section", {
                    class: Object(_.U)(zl.a.tabs, this.props.classNames)
                }, Object(i.h)("ul", {
                    class: "".concat(zl.a.tabList, " col-11-lg col-offset-1-lg"),
                    role: "tablist"
                }, n.loaded && n.scheduleDays.map((function(t) {
                    var n = Object(_.x)(t)
                      , a = Object(_.G)(n, !0)
                      , r = Object(_.Y)(a);
                    return Object(i.h)("li", {
                        class: zl.a.tabListItem,
                        role: "presentation"
                    }, Object(i.h)(U, {
                        isRouterLink: !0,
                        href: "".concat(e.currentRouteParams, "#").concat(r),
                        classNames: Object(_.U)(zl.a.tab, e.isTabActive(r) && zl.a.activeTab),
                        ariaLabel: a,
                        ariaSelected: e.isTabActive(r),
                        ariaRole: "tab",
                        role: "tab",
                        gaOn: e.props.gaOn,
                        gaCategory: "".concat(e.props.gaCategory || o.pathname, ": Scroll Tabs"),
                        gaLabel: "Tab: ".concat(a),
                        gaEventAction: e.props.gaEventAction,
                        onClick: function() {
                            return e.scrollToHash()
                        }
                    }, a))
                }
                ))))
            }
        }]),
        t
    }(i.Component);
    tc.defaultProps = {
        gaOn: "click",
        gaEventAction: "click"
    },
    tc = ec([S.h, Object(w.b)("SessionStore", "UIStore"), w.c], tc);
    var nc = n(71)
      , oc = n.n(nc)
      , ac = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , rc = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).sticky = !1,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                _.T && (this.scrollHandler = this.onScroll.bind(this),
                this.resizeHandler = this.onResize.bind(this),
                window.addEventListener("optimizedScroll", this.scrollHandler, {
                    passive: !0
                }),
                window.addEventListener("optimizedResize", this.resizeHandler),
                this.updateSize())
            }
        }, {
            key: "componentWillUpdate",
            value: function() {
                _.T && (this.onScroll(),
                this.updateSize())
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this.props.UIStore.Header.updateStickyHeight(0),
                _.T && (window.removeEventListener("optimizedScroll", this.scrollHandler),
                window.removeEventListener("optimizedResize", this.resizeHandler))
            }
        }, {
            key: "updateSize",
            value: function() {
                var e = this.baseComponent.offsetHeight
                  , t = this.rootEl.parentElement.offsetWidth;
                this.dimensions = {
                    anchorTop: Object(_.I)(this.rootEl),
                    width: t,
                    height: e
                },
                l()(this.proxyEl.style, {
                    height: e + "px",
                    width: t + "px"
                }),
                this.baseComponent.style.width = t + "px",
                this.props.UIStore.Header.updateStickyHeight(this.sticky ? e : 0)
            }
        }, {
            key: "onScroll",
            value: function() {
                if (this.dimensions && _.T) {
                    var e = this.sticky && !this.navHidden ? 64 : 0;
                    window.scrollY >= this.dimensions.anchorTop - e ? this.sticky || (this.sticky = !0) : this.sticky && (this.sticky = !1)
                }
            }
        }, {
            key: "onResize",
            value: function() {
                this.updateSize()
            }
        }, {
            key: "getProxyStyle",
            value: function() {
                var e = [oc.a.proxy];
                return this.sticky && e.push(oc.a.isVisible),
                e.join(" ")
            }
        }, {
            key: "getWrappedStyle",
            value: function() {
                var e = [];
                return this.sticky ? (e.push(oc.a.stickyEnabled),
                this.navHidden || e.push(oc.a.stickyWithNav),
                e.join(" ")) : ""
            }
        }, {
            key: "getBannerStyle",
            value: function() {
                return this.sticky ? oc.a.banner : oc.a.isHidden
            }
        }, {
            key: "getStickyStyle",
            value: function() {
                var e = [oc.a.sticky].concat(te()(this.props.stickyClass.split(" ")));
                return this.sticky && (e.push(oc.a.stickyEnabled),
                this.navHidden || e.push(oc.a.stickyWithNav)),
                e.filter(Boolean).join(" ")
            }
        }, {
            key: "render",
            value: function() {
                var e = this;
                return Object(i.h)("div", {
                    ref: function(t) {
                        return e.rootEl = t
                    },
                    class: "grid"
                }, Object(i.h)("div", {
                    ref: function(t) {
                        return e.proxyEl = t
                    },
                    class: this.getProxyStyle()
                }), Object(i.h)("div", {
                    class: this.getStickyStyle(),
                    ref: function(t) {
                        return e.baseComponent = t
                    }
                }, Object(i.h)("div", {
                    class: this.getBannerStyle(),
                    style: {
                        backgroundColor: this.props.backgroundColor
                    }
                }), this.props.children))
            }
        }, {
            key: "navHidden",
            get: function() {
                return this.props.UIStore.Header.navHidden
            }
        }]),
        t
    }(i.Component);
    rc.defaultProps = {
        backgroundColor: "#fff",
        stickyClass: ""
    },
    ac([Vo.l], rc.prototype, "sticky", void 0),
    ac([Vo.d], rc.prototype, "onScroll", null),
    rc = ac([Object(w.b)("UIStore"), w.c], rc);
    var ic = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , sc = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.FilterStore
                  , n = e.SessionStore
                  , o = e.UIStore;
                return Object(i.h)("section", {
                    class: "liveExperiencePage"
                }, Object(i.h)(Te, null), Object(i.h)(gl, null, Object(i.h)(kl, {
                    filterTypes: [Qr.LevelFilter, Qr.MyIOFilter, Qr.TrackFilter]
                })), Object(i.h)("header", {
                    class: $l.a.header
                }, Object(i.h)("h1", {
                    className: "h5"
                }, Xl.a.title), Object(i.h)(re, {
                    gaCategory: "Live page",
                    gaLabel: Xl.a.ctaFullSchedule,
                    href: "/io/schedule/events",
                    type: J.Text
                }, Xl.a.ctaFullSchedule)), o.Screen.isLessThanLaptop ? Object(i.h)("div", null, Object(i.h)(rc, {
                    stickyClass: "grid"
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-1-lg", "col-10-lg", $l.a.stickyNav)
                }, Object(i.h)(tc, null))), Object(i.h)(Cr, {
                    schedule: t.filterSchedule(n.liveSchedule)
                })) : Object(i.h)("div", null, Object(i.h)(Yl, null), Object(i.h)(Gl, {
                    classNames: $l.a.grid
                })), Object(i.h)(x, {
                    gaCategory: "Live page",
                    ariaLabel: "Filter sessions",
                    classNames: $l.a.filterFab,
                    icon: "filter_list",
                    onClick: o.Drawer.open,
                    type: a.Colored
                }), Object(i.h)(Ts, null))
            }
        }]),
        t
    }(i.Component);
    sc = ic([Object(w.b)("FilterStore", "SessionStore", "UIStore"), w.c], sc);
    var lc = n(221)
      , cc = n.n(lc)
      , uc = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , dc = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        var n;
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , s = t.UIStore
                  , l = t.MapStore
                  , c = t.TimeStore
                  , u = s.Screen.isSmallMobile;
                return Object(i.h)("div", null, Object(i.h)(we, null), Object(i.h)("div", {
                    class: Object(_.U)(cc.a.mapControls, n),
                    role: "list",
                    "aria-label": "I/O Map controls."
                }, Object(i.h)(x, {
                    icon: "day" === l.variant ? "wb_sunny" : "brightness_2",
                    ariaLabel: this.getToggleLabel(),
                    elevation: o.Raised,
                    onClick: function() {
                        return l.toggleMapVariant(c.currentConferencePhase)
                    },
                    type: a.Colored
                }), Object(i.h)(x, {
                    icon: "my_location",
                    ariaLabel: "Find my location.",
                    elevation: o.Raised,
                    layout: r.Compact,
                    onClick: function() {
                        return e.getLocation()
                    }
                }), !u && [Object(i.h)(x, {
                    icon: "add",
                    ariaLabel: "Zoom in.",
                    elevation: o.Raised,
                    layout: r.Compact,
                    onClick: function() {
                        return e.zoom(1)
                    }
                }), Object(i.h)(x, {
                    icon: "remove",
                    ariaLabel: "Zoom out.",
                    elevation: o.Raised,
                    layout: r.Compact,
                    onClick: function() {
                        return e.zoom(-1)
                    }
                })]))
            }
        }, {
            key: "getToggleLabel",
            value: function() {
                return "day" === this.props.MapStore.variant ? "Switch to night map." : "Switch to day map."
            }
        }, {
            key: "zoom",
            value: function(e) {
                var t = this.props.map;
                if (t) {
                    var n = t.getZoom();
                    t.setZoom(n + 1 * e)
                }
            }
        }, {
            key: "getLocation",
            value: (n = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0,
                            e.next = 3,
                            this.props.MapStore.getLocation();
                        case 3:
                            e.next = 8;
                            break;
                        case 5:
                            e.prev = 5,
                            e.t0 = e.catch(0),
                            this.props.UIStore.Snackbar.show("Permission denied while retrieving your location.");
                        case 8:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this, [[0, 5]])
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }]),
        t
    }(i.Component);
    dc = uc([Object(w.b)("UIStore", "MapStore", "TimeStore"), w.c], dc);
    var hc, pc = n(91), fc = n.n(pc), gc = n(31), bc = {
        lat: 37.4257865,
        lng: -122.07956248
    }, vc = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return l()({
            backgroundColor: "transparent",
            center: bc,
            fullscreenControl: !1,
            mapTypeControl: !1,
            rotateControl: !1,
            scaleControl: !1,
            scrollwheel: !1,
            streetViewControl: !1,
            zoom: 18,
            zoomControl: !0,
            zoomControlOptions: {
                position: google.maps.ControlPosition.RIGHT_TOP
            }
        }, e)
    }, mc = function(e) {
        if (hc || (hc = {
            16: {
                bounds: new google.maps.LatLngBounds(new google.maps.LatLng(37.24904019254828,-123.04826421570776),new google.maps.LatLng(38.269578169047215,-120.77134771180151)),
                x: [10543, 10545],
                y: [25410, 25411],
                center: new google.maps.LatLng(37.752930332269344,-122.17135084700583),
                variants: ["day"]
            },
            17: {
                bounds: new google.maps.LatLngBounds(new google.maps.LatLng(37.40990361534651,-122.11517734360693),new google.maps.LatLng(37.437271334950175,-122.05586833786963)),
                x: [21086, 50821],
                y: [21090, 50823],
                center: new google.maps.LatLng(37.42454727122689,-122.08483351302145),
                variants: ["day"]
            },
            18: {
                bounds: new google.maps.LatLngBounds(new google.maps.LatLng(37.422575848907385,-122.08427427244185),new google.maps.LatLng(37.428147033226864,-122.07285879087446)),
                center: bc,
                x: [42173, 42181],
                y: [101642, 101647],
                variants: ["day", "night"]
            },
            19: {
                bounds: new google.maps.LatLngBounds(new google.maps.LatLng(37.422575848907385,-122.08427427244185),new google.maps.LatLng(37.428147033226864,-122.07285879087446)),
                x: [84345, 84362],
                y: [203285, 203295],
                variants: ["day", "night"]
            }
        }),
        e && hc[e])
            return hc[e]
    }, yc = function(e) {
        var t = "day" === e ? gc.i : gc.j;
        return new google.maps.ImageMapType({
            getTileUrl: function(n, o) {
                var a = function(e, t) {
                    var n = e.x
                      , o = e.y
                      , a = 1 << t;
                    return o < 0 || o >= a ? null : ((n < 0 || n >= a) && (n = (n % a + a) % a),
                    {
                        x: n,
                        y: o
                    })
                }(n, o);
                if (!a)
                    return null;
                var r = mc(o);
                if (!r)
                    return t;
                if (a.x < r.x[0] || a.x > r.x[1] || a.y < r.y[0] || a.y > r.y[1])
                    return t;
                var i = 1;
                return _.T && (i = window.devicePixelRatio),
                function(e, t) {
                    var n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "day", a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 18;
                    switch (Math.round(a)) {
                    case 1:
                        n = 256;
                        break;
                    case 3:
                    case 4:
                        n = 768;
                        break;
                    default:
                        n = 512
                    }
                    var i = "images/maptiles/".concat(o, "/").concat(n, "/").concat(r, "/").concat(e, "_").concat(t, ".png")
                      , s = encodeURIComponent(i);
                    return "".concat(gc.d, "/").concat(s, "?alt=media")
                }(a.x, a.y, e, i, o)
            },
            tileSize: new google.maps.Size(256,256),
            maxZoom: 19,
            minZoom: 17,
            name: "Google I/O"
        })
    }, Oc = function(e) {
        var t = e.properties
          , n = t.title
          , o = t.description
          , a = "";
        return o && (a = "<p>".concat(o, "</p>")),
        '\n  <div class="ioMapInfoWindow">\n    <h6>'.concat(n, "</h6>\n    ").concat(a, "\n  </div>\n  ")
    }, jc = n(222), kc = n.n(jc), Sc = function() {
        function e(t) {
            var n = t.map
              , o = t.store
              , a = t.clickCallback
              , r = t.tweakMode
              , i = void 0 !== r && r;
            u()(this, e),
            this.loaded = !1,
            this.markers = [],
            this.markerClickListeners = [],
            this.tweakMode = !1,
            this.map = n,
            this.mapStore = o,
            this.markerClickCallback = a,
            !0 === i && (console.warn("Map marker tweak mode enabled."),
            this.tweakMode = i),
            this.bindEvents(),
            this.loadMarkers()
        }
        var t;
        return h()(e, [{
            key: "cleanup",
            value: function() {
                this.zoomHandler.remove(),
                this.markerClickCallback = null,
                this.markerClickListeners.forEach((function(e) {
                    e.remove()
                }
                ))
            }
        }, {
            key: "openPopup",
            value: function(e) {
                this.closePopup();
                var t = e.geometry.coordinates
                  , n = An()(t, 2)
                  , o = n[0]
                  , a = n[1]
                  , r = new google.maps.LatLng(a,o);
                this.infoWindow = new google.maps.InfoWindow({
                    content: Oc(e),
                    pixelOffset: new google.maps.Size(0,-24),
                    position: r
                }),
                this.infoWindow.open(this.map),
                this.map.panTo(r)
            }
        }, {
            key: "closePopup",
            value: function() {
                this.infoWindow && this.infoWindow.close()
            }
        }, {
            key: "updateMarkers",
            value: function() {
                this.loaded && (this.clearMarkers(),
                this.populateMap())
            }
        }, {
            key: "loadMarkers",
            value: (t = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2,
                            this.mapStore.loadMarkers();
                        case 2:
                            this.IOMapTagMarker = function(e) {
                                function t(e, n, o, a) {
                                    var r;
                                    return u()(this, t),
                                    (r = f()(this, b()(t).call(this))).minZoom = 0,
                                    r.bounds = e,
                                    r.title = o,
                                    r.minZoom = a,
                                    r.setMap(n),
                                    r
                                }
                                return m()(t, e),
                                h()(t, [{
                                    key: "setVisible",
                                    value: function(e) {
                                        this.div && (e ? this.div.classList.remove("hidden") : this.div.classList.add("hidden"))
                                    }
                                }, {
                                    key: "setFontSize",
                                    value: function(e) {
                                        if (this.div)
                                            switch (e) {
                                            case 17:
                                                this.div.style.fontSize = "10px";
                                                break;
                                            case 18:
                                                this.div.style.fontSize = "11px";
                                                break;
                                            default:
                                                this.div.style.fontSize = "13px"
                                            }
                                    }
                                }, {
                                    key: "onAdd",
                                    value: function() {
                                        var e = this
                                          , t = document.createElement("div");
                                        t.classList.add("ioMapTagMarker"),
                                        t.appendChild(document.createTextNode(this.title)),
                                        l()(t.style, {
                                            position: "absolute",
                                            cursor: "pointer"
                                        }),
                                        this.title.length > 20 && (t.style.maxWidth = "200px"),
                                        this.div = t,
                                        google.maps.event.addDomListener(t, "click", (function() {
                                            google.maps.event.trigger(e, "click")
                                        }
                                        )),
                                        this.getPanes().overlayImage.appendChild(t),
                                        this.getMap().getZoom() < this.minZoom && this.setVisible(!1)
                                    }
                                }, {
                                    key: "draw",
                                    value: function() {
                                        var e = this.getProjection()
                                          , t = e.fromLatLngToDivPixel(this.bounds.getSouthWest())
                                          , n = e.fromLatLngToDivPixel(this.bounds.getNorthEast())
                                          , o = this.div;
                                        o.style.left = t.x + "px",
                                        o.style.top = n.y + "px"
                                    }
                                }, {
                                    key: "onRemove",
                                    value: function() {
                                        this.div && (this.div.parentNode.removeChild(this.div),
                                        this.div = null)
                                    }
                                }]),
                                t
                            }(google.maps.OverlayView),
                            this.populateMap(),
                            this.loaded = !0;
                        case 5:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return t.apply(this, arguments)
            }
            )
        }, {
            key: "bindEvents",
            value: function() {
                this.zoomHandler = google.maps.event.addListener(this.map, "zoom_changed", this.onZoomHandler.bind(this))
            }
        }, {
            key: "clearMarkers",
            value: function() {
                this.markers.forEach((function(e) {
                    return e.setMap(null)
                }
                ))
            }
        }, {
            key: "onZoomHandler",
            value: function() {
                var e = this;
                if (this.markers.length) {
                    var t = this.map.getZoom();
                    this.markers.forEach((function(n) {
                        n.setVisible(t >= n.minZoom),
                        n instanceof e.IOMapTagMarker && n.setFontSize(t)
                    }
                    ))
                }
            }
        }, {
            key: "populateMap",
            value: function() {
                var e = this
                  , t = this.mapStore.variant
                  , n = this.mapStore.markerData[t]
                  , o = function(e) {
                    return /^(sandbox|stage)/i.test(e) ? [_.h, _.h] : [_.g, _.g]
                }
                  , a = n.filter((function(e) {
                    return e.properties.icon
                }
                )).map((function(t) {
                    var n = t.id
                      , a = t.properties
                      , r = a.title
                      , i = a.minZoom
                      , s = void 0 === i ? 0 : i
                      , l = a.icon
                      , c = t.geometry.coordinates
                      , u = {
                        map: e.map,
                        minZoom: s,
                        draggable: e.tweakMode,
                        position: new google.maps.LatLng(c[1],c[0]),
                        visible: e.map.getZoom() >= s,
                        icon: {
                            url: "".concat(_.f, "/icons/").concat(l, ".svg"),
                            scaledSize: kc()(google.maps.Size, te()(o(r)))
                        },
                        title: r
                    }
                      , d = new google.maps.Marker(u);
                    return e.markerClickListeners.push(google.maps.event.addListener(d, "click", (function() {
                        return e.markerClickCallback(t)
                    }
                    ))),
                    e.tweakMode && e.markerClickListeners.push(google.maps.event.addListener(d, "dragend", (function() {
                        var e = d.getPosition();
                        console.table({
                            id: n,
                            title: r,
                            position: "".concat(e.lat(), " ").concat(e.lng())
                        })
                    }
                    ))),
                    d
                }
                ))
                  , r = n.filter((function(e) {
                    return !e.properties.icon
                }
                )).map((function(t) {
                    var n = t.properties
                      , o = n.title
                      , a = n.minZoom
                      , r = void 0 === a ? 0 : a
                      , i = t.geometry.coordinates
                      , s = An()(i, 2)
                      , l = s[0]
                      , c = s[1]
                      , u = new e.IOMapTagMarker(new google.maps.LatLngBounds(new google.maps.LatLng(c,l),new google.maps.LatLng(c,l)),e.map,o,r);
                    return e.markerClickListeners.push(google.maps.event.addListener(u, "click", (function() {
                        return e.markerClickCallback(t)
                    }
                    ))),
                    u
                }
                ));
                this.markers = [].concat(te()(r), te()(a))
            }
        }]),
        e
    }(), wc = n(223), _c = n.n(wc), Cc = function(e) {
        var t = e.children;
        return Object(i.h)("div", {
            class: _c.a.content
        }, t)
    }, Mc = n(224), Hc = n.n(Mc), Lc = function(e) {
        var t = e.marker.properties
          , n = t.description
          , o = t.title;
        return Object(i.h)("section", null, Object(i.h)("header", {
            class: Hc.a.header
        }, Object(i.h)("h5", null, o)), Object(i.h)(Cc, null, Object(i.h)("p", null, Object(i.h)(Ot, null, n))))
    }, Tc = n(171), Ac = n.n(Tc), Ic = n(144), xc = n.n(Ic), Dc = function(e) {
        var t = e.marker
          , n = e.children
          , o = t.properties.title;
        return Object(i.h)("header", {
            class: xc.a.header
        }, Object(i.h)("div", {
            class: xc.a.image
        }, n), Object(i.h)("h3", {
            class: xc.a.title
        }, o))
    }, Rc = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }, Ec = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentWillMount",
            value: function() {
                var e, t = this.props, n = t.SessionStore, o = t.TimeStore, a = t.marker;
                e = o.currentConferencePhase < To.a.Day3Complete && o.currentConferencePhase >= To.a.Day1Sessions ? n.getSessionsBetweenTimeByLocationId(o.currentTime, To.c.day3End, a.id) : n.getSessionsByLocationId(a.id),
                this.locationSchedule = n.buildSchedule(e)
            }
        }, {
            key: "render",
            value: function() {
                var e, t, n = this.props.marker, o = n.properties, a = o.title, r = o.description;
                return Object(i.h)("section", {
                    class: Ac.a.container
                }, Object(i.h)(Dc, {
                    marker: n
                }, Object(i.h)("img", {
                    src: (e = a,
                    t = Object(_.Y)(e),
                    "".concat(_.r, "/").concat(t, ".png"))
                })), Object(i.h)(Cc, null, Object(i.h)("p", {
                    class: Ac.a.stageDescription
                }, Object(i.h)(Ot, null, r)), Object(i.h)(Cr, {
                    layout: qi.Compact,
                    schedule: this.locationSchedule
                })))
            }
        }]),
        t
    }(i.Component);
    Ec = Rc([Object(w.b)("SessionStore", "TimeStore")], Ec);
    var Pc = "".concat(_.f, "/app-icons/formatted")
      , Bc = function(e) {
        return "".concat(Pc, "/").concat(e)
    }
      , Uc = [{
        title: "Accessibility",
        icon: Bc("accessibility.png")
    }, {
        title: "Android",
        icon: Bc("android.png")
    }, {
        title: "Android TV",
        icon: Bc("android-tv.png")
    }, {
        title: "Android for Cars",
        icon: Bc("android-auto.png")
    }, {
        title: "AR",
        icon: Bc("arcore.png")
    }, {
        title: "Flutter",
        icon: Bc("flutter.png")
    }, {
        title: "Assistant",
        icon: Bc("assistant.png")
    }, {
        title: "Certification Lounge",
        icon: Bc("certification-lounge.png")
    }, {
        title: "Firebase",
        icon: Bc("firebase.png")
    }, {
        title: "Cloud",
        icon: Bc("cloud.png")
    }, {
        title: "Codelabs",
        icon: Bc("codelabs.png")
    }, {
        title: "Community Lounge",
        icon: Bc("community-lounge.png")
    }, {
        title: "Experiments",
        icon: Bc("experiments.png")
    }, {
        title: "Material Design",
        icon: Bc("material.png")
    }, {
        title: "ML/AI",
        icon: Bc("ai-ml.png")
    }, {
        title: "Payments",
        icon: Bc("g-pay.png")
    }, {
        title: "Chrome OS",
        icon: Bc("chrome-os.png")
    }, {
        title: "Play",
        icon: Bc("google-play.png")
    }, {
        title: "Web",
        icon: Bc("chrome.png")
    }, {
        title: "Wear OS",
        icon: Bc("wear-os.png")
    }]
      , Fc = {
        A: ["Payments", "Chrome OS", "Web"],
        B: ["AR", "Flutter"],
        C: ["Android", "Play", "Wear OS"],
        D: ["Experiments"],
        E: ["Accessibility", "Material Design"],
        F: ["Cloud", "Firebase"],
        G: ["ML/AI"],
        H: ["Assistant"]
    }
      , Nc = function() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
        return t.length ? t.map((function(e) {
            return Uc.find((function(t) {
                return t.title === e
            }
            ))
        }
        )) : Uc
    }
      , Wc = n(172)
      , Gc = n.n(Wc)
      , Vc = function(e) {
        var t = e.apps.map((function(e) {
            return Object(i.h)("li", null, Object(i.h)("div", {
                class: Gc.a.appIcon
            }, Object(i.h)("img", {
                src: e.icon,
                role: "presentation"
            })), Object(i.h)("span", null, e.title))
        }
        ));
        return Object(i.h)("ul", {
            class: Object(_.U)("reset", Gc.a.appGrid),
            "aria-label": "Covered topics."
        }, t)
    }
      , zc = n(225)
      , qc = n.n(zc)
      , Zc = function(e) {
        var t = e.marker
          , n = t.properties.description
          , o = t.id.toUpperCase().match(/sandbox_(\w)/i)
          , a = An()(o, 2)[1]
          , r = Nc.apply(void 0, te()(Fc[a]));
        return Object(i.h)("section", null, Object(i.h)(Dc, {
            marker: t
        }, Object(i.h)("svg", {
            width: "100%",
            role: "presentation"
        }, Object(i.h)("rect", {
            fill: "#D8D8D8",
            x: "0",
            y: "0",
            width: "100%",
            height: "100%"
        }))), Object(i.h)(Cc, null, Object(i.h)("p", {
            class: qc.a.stageDescription
        }, Object(i.h)(Ot, null, n)), Object(i.h)(Vc, {
            apps: r
        })))
    }
      , Kc = function(e) {
        var t = e.marker
          , n = t.properties.description;
        return Object(i.h)("section", null, Object(i.h)(Dc, {
            marker: t
        }, Object(i.h)("img", {
            src: "".concat(_.r, "/office-hours.png")
        })), Object(i.h)(Cc, null, Object(i.h)("p", null, Object(i.h)(Ot, null, n)), Object(i.h)(Vc, {
            apps: Nc()
        })))
    }
      , Yc = function(e) {
        var t = e.marker
          , n = t.properties.description;
        return Object(i.h)("section", null, Object(i.h)(Dc, {
            marker: t
        }, Object(i.h)("img", {
            src: "".concat(_.r, "/codelabs.png"),
            role: "presentation"
        })), Object(i.h)(Cc, null, Object(i.h)("p", null, Object(i.h)(Ot, null, n)), Object(i.h)(Vc, {
            apps: Nc()
        })))
    }
      , Jc = function() {
        function e() {
            u()(this, e)
        }
        return h()(e, null, [{
            key: "setStore",
            value: function(t) {
                e.store = t
            }
        }, {
            key: "getComponent",
            value: function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (t) {
                    var o, a = t.properties.markerType, r = l()({
                        marker: t
                    }, n);
                    switch (a) {
                    case "codelabs":
                        o = Yc;
                        break;
                    case "stage":
                        o = Ec,
                        r = l()(l()({}, r), {
                            store: e.store
                        });
                        break;
                    case "sandbox":
                        o = Zc;
                        break;
                    case "ohar":
                        o = Kc;
                        break;
                    default:
                        o = Lc
                    }
                    return Object(i.h)(o, l()({}, r))
                }
            }
        }]),
        e
    }()
      , Xc = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Qc = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).reactionDisposers = [],
            e
        }
        var n, o;
        return m()(t, e),
        h()(t, [{
            key: "componentWillMount",
            value: function() {
                var e = this.props
                  , t = e.TimeStore
                  , n = e.MapStore
                  , o = t.currentConferencePhase;
                o === To.a.Day1AfterHours ? n.setVariant("night") : o === To.a.Day2Concert && n.setVariant("concert")
            }
        }, {
            key: "componentDidMount",
            value: (o = un()(ln.a.mark((function e() {
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if (_.T) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            return Jc.setStore(this.props.SessionStore),
                            e.next = 5,
                            this.initializeMap();
                        case 5:
                            this.bindListeners();
                        case 6:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return o.apply(this, arguments)
            }
            )
        }, {
            key: "componentWillUnmount",
            value: function() {
                var e = this.props.UIStore.Drawer;
                this.reactionDisposers.forEach((function(e) {
                    return e()
                }
                )),
                google && (google.maps.event.removeListener(this.zoomChangeHandler),
                google.maps.event.removeListener(this.idleHandler),
                google.maps.event.removeListener(this.dragHandler),
                this.markerHelper.cleanup()),
                e.opened && e.close()
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.classNames
                  , o = t.MapStore
                  , a = t.UIStore
                  , r = a.Drawer
                  , s = a.Screen.isLessThanLaptop
                  , l = Object(_.U)(fc.a.mapWrapper, "day" !== o.variant && fc.a.mapWrapperNight, !s && r.opened && fc.a.mapWrapperWithDrawer, n);
                return Object(i.h)("div", null, Object(i.h)("section", {
                    class: l
                }, Object(i.h)(dc, {
                    map: o.activeMap,
                    classNames: Object(_.U)(fc.a.mapControls, r.opened && fc.a.mapControlsWithDrawer)
                }), Object(i.h)("div", {
                    class: fc.a.ioMap,
                    ref: function(t) {
                        return e.mapEl = t
                    }
                })), Object(i.h)(gl, {
                    disableClickClose: !0,
                    key: this.selectedMarker ? this.selectedMarker.id : 0
                }, Object(i.h)("div", {
                    class: fc.a.drawerContent
                }, Jc.getComponent(this.selectedMarker))))
            }
        }, {
            key: "onMarkerClick",
            value: function(e) {
                var t = this.props.UIStore.Drawer;
                this.selectedMarker = e,
                "popup" === e.properties.markerType ? (this.markerHelper.openPopup(e),
                t.close()) : (this.markerHelper.closePopup(),
                t.open())
            }
        }, {
            key: "initializeMap",
            value: (n = un()(ln.a.mark((function e() {
                var t;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return t = this.props.MapStore,
                            e.next = 3,
                            this.props.MapStore.loadAPI();
                        case 3:
                            this.map = new google.maps.Map(this.mapEl,vc(this.getMapOverrides())),
                            this.map.setMapTypeId("googleIO"),
                            this.currentZoom = this.map.getZoom(),
                            this.props.MapStore.setMap(this.map),
                            this.markerHelper = new Sc({
                                map: this.map,
                                store: t,
                                clickCallback: this.onMarkerClick.bind(this),
                                tweakMode: !1
                            }),
                            this.userLocationMarker = new google.maps.Marker({
                                icon: _.i,
                                visible: !1,
                                map: this.map,
                                position: mc(16).center,
                                title: "You are here"
                            }),
                            this.setTiles(t.variant);
                        case 10:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "bindListeners",
            value: function() {
                var e = this;
                this.zoomChangeHandler = google.maps.event.addListener(this.map, "zoom_changed", this.onZoomChanged.bind(this)),
                this.idleHandler = google.maps.event.addListener(this.map, "idle", this.onMapIdle.bind(this)),
                this.dragHandler = google.maps.event.addListener(this.map, "dragend", this.onMapIdle.bind(this));
                var t = Object(Vo.m)((function() {
                    return e.props.MapStore.variant
                }
                ), (function(t) {
                    return e.setTiles(t)
                }
                ))
                  , n = Object(Vo.m)((function() {
                    return e.props.MapStore.userLocation
                }
                ), (function(t) {
                    t && (clearTimeout(e.userLocationTimeout),
                    mc(16).bounds.contains(t) ? (e.map.panTo(t),
                    e.map.setZoom(19),
                    e.userLocationMarker.setVisible(!0),
                    e.userLocationMarker.setPosition(t),
                    e.userLocationTimeout = setTimeout((function() {
                        e.userLocationMarker.setVisible(!1)
                    }
                    ), 3e4)) : e.props.UIStore.Snackbar.show("Your location is too far from Shoreline Amphitheatre."))
                }
                ));
                this.reactionDisposers.push(t, n)
            }
        }, {
            key: "setTiles",
            value: function(e) {
                var t = this.props.MapStore;
                t.setVariant(e),
                this.map.mapTypes.set("googleIO", yc(t.variant)),
                this.markerHelper.updateMarkers()
            }
        }, {
            key: "getMapOverrides",
            value: function() {
                var e = this.props
                  , t = e.disableInteraction
                  , n = e.center
                  , o = e.zoom
                  , a = e.controls;
                return kt()({
                    center: n,
                    zoom: o,
                    draggable: !t,
                    zoomControl: !t && a,
                    disableDefaultUI: !!t || a
                }, (function(e) {
                    return void 0 !== e
                }
                ))
            }
        }, {
            key: "onZoomChanged",
            value: function() {
                var e = this.map.getZoom();
                mc(e) ? (this.checkBoundsAndReset(),
                this.currentZoom = e) : this.map.setZoom(this.currentZoom)
            }
        }, {
            key: "onMapIdle",
            value: function() {
                this.checkBoundsAndReset()
            }
        }, {
            key: "checkBoundsAndReset",
            value: function() {
                var e = mc(this.map.getZoom()).bounds;
                e.intersects(this.map.getBounds()) || this.map.setCenter(e.center || bc)
            }
        }]),
        t
    }(i.Component);
    Qc.defaultProps = {
        controls: !0,
        disableInteraction: !1
    },
    Xc([Vo.l], Qc.prototype, "selectedMarker", void 0),
    Xc([Vo.d], Qc.prototype, "onMarkerClick", null),
    Qc = Xc([Object(w.b)("MapStore", "SessionStore", "TimeStore", "UIStore"), w.c], Qc);
    var $c = n(226)
      , eu = n.n($c)
      , tu = (i.Component,
    n(81))
      , nu = n.n(tu)
      , ou = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , au = 12
      , ru = 200
      , iu = function(e, t, n, o) {
        return (e /= o / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
    }
      , su = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).scrollPosition = 0,
            e.index = 0,
            e.maxWidth = 0,
            e.imagesLoaded = 0,
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                _.T && (this.bindEvents(),
                this.slides = Array.from(this.el.children))
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                _.T && (window.removeEventListener("resize", this.onResizeHandler),
                this.el.removeEventListener("load", this.onImagesLoadHandler, !0),
                this.el.removeEventListener("scroll", this.onScrollHandler))
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props.imageUrls
                  , n = Object(_.U)(nu.a.carousel, "carouselRoot");
                return Object(i.h)("section", {
                    class: nu.a.wrapper,
                    "data-index": this.index
                }, Object(i.h)(x, {
                    icon: "navigate_before",
                    classNames: Object(_.U)(nu.a.control, this.isAtBeginning && nu.a.hidden),
                    onClick: function() {
                        return e.slide(-1)
                    }
                }), Object(i.h)("div", {
                    class: nu.a.carouselWrapper
                }, Object(i.h)("div", {
                    class: n,
                    ref: function(t) {
                        return e.el = t
                    }
                }, t.map((function(e) {
                    return Object(i.h)("div", {
                        class: nu.a.slide
                    }, Object(i.h)(We, {
                        src: e._1x,
                        src2x: e._2x
                    }))
                }
                )))), Object(i.h)(x, {
                    icon: "navigate_next",
                    classNames: Object(_.U)(nu.a.control, this.isAtEnd && nu.a.hidden),
                    onClick: function() {
                        return e.slide(1)
                    }
                }))
            }
        }, {
            key: "onImageLoad",
            value: function(e) {
                "img" === e.target.tagName.toLowerCase() && this.imagesLoaded++,
                this.imagesLoaded === this.slides.length && this.initSlides()
            }
        }, {
            key: "initSlides",
            value: function() {
                var e = this;
                this.slidePositions = this.slides.map((function(e, t) {
                    return 0 === t ? 0 : Object(_.H)(e, "carouselRoot")
                }
                )),
                Object(Vo.n)((function() {
                    e.maxWidth = e.el.scrollWidth - e.el.clientWidth
                }
                ))
            }
        }, {
            key: "slide",
            value: function(e) {
                this.slides[this.index + e] && (this.index += e,
                this.scrollToSlide())
            }
        }, {
            key: "bindEvents",
            value: function() {
                this.onImagesLoadHandler = this.onImageLoad.bind(this),
                this.onResizeHandler = this.onResize.bind(this),
                this.onScrollHandler = this.onCarouselScroll.bind(this),
                window.addEventListener("resize", this.onResizeHandler),
                this.el.addEventListener("load", this.onImagesLoadHandler, !0),
                this.el.addEventListener("scroll", this.onScrollHandler)
            }
        }, {
            key: "onResize",
            value: function() {
                this.initSlides(),
                this.scrollToSlide()
            }
        }, {
            key: "onCarouselScroll",
            value: function() {
                var e = this;
                Object(Vo.n)((function() {
                    return e.scrollPosition = e.el.scrollLeft
                }
                ))
            }
        }, {
            key: "scrollToSlide",
            value: function() {
                if (this.slidePositions.length) {
                    var e = 0;
                    0 !== this.index && (e = this.slides[this.index - 1].offsetWidth / 2);
                    var t = this.slidePositions[this.index]
                      , n = this
                      , o = this.el.scrollLeft
                      , a = t - o - e
                      , r = 0;
                    !function e() {
                        r += au;
                        var t = iu(r, o, a, ru);
                        i = t,
                        n.el.scrollLeft = i;
                        var i;
                        r < ru && requestAnimationFrame(e)
                    }()
                }
            }
        }, {
            key: "isAtBeginning",
            get: function() {
                return 0 === this.scrollPosition
            }
        }, {
            key: "isAtEnd",
            get: function() {
                return this.scrollPosition >= this.maxWidth
            }
        }]),
        t
    }(i.Component);
    ou([Vo.l], su.prototype, "scrollPosition", void 0),
    ou([Vo.l], su.prototype, "index", void 0),
    ou([Vo.l], su.prototype, "maxWidth", void 0),
    ou([Vo.e], su.prototype, "isAtBeginning", null),
    ou([Vo.e], su.prototype, "isAtEnd", null),
    ou([Vo.d], su.prototype, "slide", null),
    su = ou([Object(w.b)("UIStore"), w.c], su);
    var lu = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            viewBox: "0 0 409 310",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n    ", Object(i.h)("path", {
            d: "M.5 309.5h408V141.589c-36.697 0-70.206 19.769-95.765 49.105V71.18c-43.066 0-85.202 16.773-120.692 44.966V.5C89.841.5 4.233 81.205.5 175.53V309.5z",
            fill: "#A8DAB5",
            "fill-rule": "evenodd"
        }, []), "\n"])
    }
      , cu = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            height: "501",
            viewBox: "0 0 409 501",
            width: "409",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), [Object(i.h)("g", {
            fill: "none",
            "fill-rule": "evenodd",
            "stroke-linecap": "square",
            "stroke-width": "10"
        }, [Object(i.h)("path", {
            d: "m11.929 116.176h267.61v248.957",
            stroke: "#fad2cf"
        }, []), Object(i.h)("path", {
            d: "m11.929 365.133h386.668m-247.025-125.619v-227.584h-139.643m0 227.584v248.647",
            stroke: "#fce8e6"
        }, []), Object(i.h)("path", {
            d: "m11.929 121.176v118.338h386.668v247.647",
            stroke: "#ee675c"
        }, []), Object(i.h)("path", {
            d: "m399.597 488.161h-387.668",
            stroke: "#fce8e6"
        }, []), Object(i.h)("path", {
            d: "m11.929 11.93v104.246",
            stroke: "#fad2cf"
        }, [])])])
    }
      , uu = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 520.91 419"
        }, t), ["\n  ", Object(i.h)("g", {
            fill: "none",
            "stroke-width": "10"
        }, ["\n      ", Object(i.h)("path", {
            d: "M150.7 303.61v110.3h365.21V146a4.66 4.66 0 0 0-6.62-4.22z",
            stroke: "#34a853"
        }, []), "\n      ", Object(i.h)("path", {
            d: "M83.5 232.55v181l290.32.5-1.32-343.89a4.64 4.64 0 0 0-7-4z",
            stroke: "#a8dab5"
        }, []), "\n      ", Object(i.h)("path", {
            d: "M5 414l233-.07V9.67a4.65 4.65 0 0 0-7.24-3.87L5 158.31z",
            stroke: "#ceead6"
        }, []), "\n  "]), "\n"])
    }
      , du = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            "aria-hidden": "true",
            width: "512",
            height: "257",
            viewBox: "0 0 512 257",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n    ", Object(i.h)("path", {
            d: "M488 245c0-128.683-103.87-233-232-233S24 116.317 24 245h464z",
            stroke: "#FBBC04",
            "stroke-width": "10",
            fill: "none"
        }, []), "\n"])
    }
      , hu = n(82)
      , pu = n.n(hu)
      , fu = n(25)
      , gu = n.n(fu)
      , bu = function() {
        return Object(i.h)("section", {
            class: Object(_.U)(gu.a.hero)
        }, Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "col-12 col-6-xl col-offset-1-xl"
        }, Object(i.h)("h1", {
            class: Object(_.U)(gu.a.heroTitle)
        }, Object(i.h)(Ot, null, pu.a.hero.title))), Object(i.h)("div", {
            class: "col-4-xl col-offset-8-xl hiddenLtDesktopLarge"
        }, Object(i.h)(cu, null))), Object(i.h)("div", {
            class: Object(_.U)("grid", gu.a.heroMiddleRow)
        }, Object(i.h)("div", {
            class: Object(_.U)("col-3 col-8-md col-8-lg col-4-xl", gu.a.maskShape)
        }, Object(i.h)(st, {
            shape: tt.Circle,
            src: pu.a.hero.maskedImage.src,
            src2x: pu.a.hero.maskedImage.src2x
        })), Object(i.h)("div", {
            class: Object(_.U)("col-1 col-offset-3 col-offset-8-lg col-4-lg col-2-xl col-offset-5-xl", gu.a.yellowPurpleShapes)
        }, Object(i.h)("div", {
            class: gu.a.purpleSquare
        }), Object(i.h)("div", {
            class: Object(_.U)(gu.a.yellowSemicircle, "hiddenGtDesktopLarge")
        }, Object(i.h)(du, null)))), Object(i.h)("div", {
            class: Object(_.U)("grid", gu.a.heroBottomRow)
        }, Object(i.h)("div", {
            class: Object(_.U)("col-2 col-4-xl col-offset-1-xl hiddenLtDesktopLarge", gu.a.yellowSemicircle)
        }, Object(i.h)(du, null)), Object(i.h)("div", {
            class: Object(_.U)("col-4 col-7-xl col-offset-5-xl", gu.a.heroVideoWrapper)
        }, Object(i.h)(vs, {
            classNames: Object(_.U)(gu.a.heroVideo),
            videoId: pu.a.hero.video.youtubeId
        }))))
    }
      , vu = function() {
        return Object(i.h)("section", {
            class: gu.a.highlights
        }, Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "col-4 col-offset-1-lg col-10-lg"
        }, Object(i.h)(ji, {
            classNames: gu.a.upcomingSessions,
            isRecap: !0
        }))))
    }
      , mu = function() {
        var e = pu.a.liveVideosBanner;
        return Object(i.h)("section", {
            class: Object(_.U)(gu.a.banner)
        }, Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: Object(_.U)("col-offset-1-lg col-4-lg col-1-md col-4", gu.a.bannerImage, gu.a.bannerImageTop, gu.a.greenTrapezoids)
        }, Object(i.h)(uu, null)), Object(i.h)("div", {
            class: "col-offset-7-lg col-5-lg col-3-md col-4"
        }, Object(i.h)("h2", null, e.title), Object(i.h)(re, {
            gaCategory: "Recap",
            gaLabel: e.button.label,
            type: J.Text,
            href: e.button.href
        }, e.button.label))))
    }
      , yu = function() {
        var e = pu.a.photosBanner;
        return Object(i.h)("section", {
            class: Object(_.U)(gu.a.banner)
        }, Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "col-offset-1-lg col-6-lg col-3-md col-4"
        }, Object(i.h)("h2", null, e.title), Object(i.h)(re, {
            gaCategory: "Recap",
            gaLabel: e.button.label,
            type: J.Text,
            href: e.button.href
        }, e.button.label)), Object(i.h)("div", {
            class: Object(_.U)("col-offset-8-lg col-4-lg col-offset-3-md col-1-md col-4", gu.a.bannerImage, gu.a.bannerImageBottom, gu.a.greenPetals)
        }, Object(i.h)(lu, null))))
    }
      , Ou = function() {
        return Object(i.h)("section", {
            class: gu.a.tweets
        }, Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "col-4 col-offset-1-lg col-10-lg"
        }, Object(i.h)(Fo, {
            title: pu.a.twitterFeedHeading,
            splitIntoTabs: !0
        }))))
    }
      , ju = (i.Component,
    function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "467",
            height: "466",
            viewBox: "0 0 467 466",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M214.903 415.395H202.197V421.588H214.903V415.395Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M177.148 378.14H170.967V390.871H177.148V378.14Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M156.493 382.176L151.141 385.273L157.493 396.297L162.846 393.201L156.493 382.176Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M140.616 396.036L137.525 401.399L148.528 407.765L151.619 402.401L140.616 396.036Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M146.491 415.978H133.785V422.172H146.491V415.978Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M148.824 430.294L137.821 436.659L140.912 442.022L151.915 435.657L148.824 430.294Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M157.987 441.551L151.635 452.576L156.987 455.673L163.34 444.648L157.987 441.551Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M177.73 446.688H171.549V459.418H177.73V446.688Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M191.196 441.247L185.844 444.343L192.196 455.368L197.549 452.271L191.196 441.247Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M200.15 429.807L197.06 435.17L208.062 441.535L211.153 436.172L200.15 429.807Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M207.773 395.514L196.771 401.879L199.861 407.242L210.864 400.877L207.773 395.514Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M191.692 381.899L185.339 392.923L190.691 396.02L197.044 384.995L191.692 381.899Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M214.903 415.395H202.197V421.588H214.903V415.395Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M177.148 378.14H170.967V390.871H177.148V378.14Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M156.493 382.176L151.141 385.273L157.493 396.297L162.846 393.201L156.493 382.176Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M140.616 396.036L137.525 401.399L148.528 407.765L151.619 402.401L140.616 396.036Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M146.491 415.978H133.785V422.172H146.491V415.978Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M148.824 430.294L137.821 436.659L140.912 442.022L151.915 435.657L148.824 430.294Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M157.987 441.551L151.635 452.576L156.987 455.673L163.34 444.648L157.987 441.551Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M177.73 446.688H171.549V459.418H177.73V446.688Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M191.196 441.247L185.844 444.343L192.196 455.368L197.549 452.271L191.196 441.247Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M200.15 429.807L197.06 435.17L208.062 441.535L211.153 436.172L200.15 429.807Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M207.773 395.514L196.771 401.879L199.861 407.242L210.864 400.877L207.773 395.514Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M191.692 381.899L185.339 392.923L190.691 396.02L197.044 384.995L191.692 381.899Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M145.856 255.433L132.576 268.739L159.896 296.113L173.176 282.807L145.856 255.433Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M199.644 255.435L172.324 282.809L185.604 296.115L212.924 268.741L199.644 255.435Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M159.896 296.027L132.576 323.401L145.856 336.707L173.176 309.333L159.896 296.027Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M186.369 296.028L173.09 309.334L200.41 336.708L213.689 323.402L186.369 296.028Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M89.1443 294.573C89.3471 273.158 72.1802 255.639 50.8165 255.436C29.4527 255.233 11.9596 272.434 11.7568 293.84L89.1443 294.573Z",
            fill: "#34A853"
        }, []), "\n", Object(i.h)("path", {
            d: "M89.1443 336.715C89.3471 315.3 72.1802 297.781 50.8165 297.577C29.4439 297.374 11.9596 314.575 11.7568 335.981L89.1443 336.715Z",
            fill: "#34A853"
        }, []), "\n", Object(i.h)("path", {
            d: "M29.611 457.651H19.877C19.877 433.047 39.8564 413.037 64.412 413.037V422.79C45.226 422.79 29.611 438.427 29.611 457.651Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M29.611 377.875H19.877C19.877 402.479 39.8564 422.49 64.412 422.49V412.745C45.226 412.745 29.611 397.099 29.611 377.875Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M66.2018 457.651H56.4678C56.4678 433.047 76.4473 413.037 101.003 413.037V422.79C81.808 422.79 66.2018 438.427 66.2018 457.651Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M66.2018 377.875H56.4678C56.4678 402.479 76.4473 422.49 101.003 422.49V412.745C81.808 412.745 66.2018 397.099 66.2018 377.875Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M335.714 150.137C317.26 131.293 287.061 131.01 268.254 149.501C249.447 167.991 249.165 198.25 267.619 217.094L335.714 150.137Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M410.482 217.103C432.882 217.103 451.041 198.908 451.041 176.464C451.041 154.019 432.882 135.825 410.482 135.825C388.083 135.825 369.924 154.019 369.924 176.464C369.924 198.908 388.083 217.103 410.482 217.103Z",
            fill: "#34A853"
        }, []), "\n", Object(i.h)("path", {
            d: "M375.558 11.2481C375.496 32.725 392.83 50.191 414.265 50.2528C435.699 50.3147 453.13 32.9459 453.192 11.469L375.558 11.2481Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M453.465 92.5264C453.527 71.0495 436.193 53.5835 414.758 53.5216C393.324 53.4598 375.893 70.8286 375.831 92.3055L453.465 92.5264Z",
            fill: "#4285F4"
        }, []), "\n", Object(i.h)("path", {
            d: "M275.494 59.538C288.802 59.538 299.591 48.728 299.591 35.3931C299.591 22.0582 288.802 11.2481 275.494 11.2481C262.185 11.2481 251.396 22.0582 251.396 35.3931C251.396 48.728 262.185 59.538 275.494 59.538Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M308.425 47.7792C319.764 47.7792 328.995 57.0201 328.995 68.3903C328.995 79.7516 319.773 89.0014 308.425 89.0014C297.078 89.0014 287.855 79.7604 287.855 68.3903C287.855 57.0201 297.086 47.7792 308.425 47.7792ZM308.425 44.2453C295.12 44.2453 284.328 55.05 284.328 68.3903C284.328 81.7305 295.111 92.5352 308.425 92.5352C321.73 92.5352 332.522 81.7305 332.522 68.3903C332.522 55.05 321.73 44.2453 308.425 44.2453Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M83.1396 1.84813L139.296 221.017",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M220.581 83.3031L1.84668 139.571",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M187.816 28.3166L34.6104 194.557",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M194.174 188.187L28.2627 34.6775",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M135.76 1L86.6758 221.865",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M221.427 136.028L1 86.8458",
            stroke: "#4285F4",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M332.875 309.99H318.662C318.662 274.077 347.82 244.861 383.662 244.861V259.103C355.659 259.094 332.875 281.931 332.875 309.99Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M443.732 306.456C423.929 286.614 391.711 286.614 371.908 306.456L361.856 296.393C387.206 270.994 428.434 270.994 453.783 296.393L443.732 306.456Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M467.001 382.504H452.787C452.787 354.446 430.004 331.617 401.992 331.617V317.376C437.842 317.376 467.001 346.592 467.001 382.504Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M415.579 452.757L405.527 442.694C425.33 422.852 425.33 390.561 405.527 370.719L415.579 360.656C440.919 386.047 440.919 427.366 415.579 452.757Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M329.63 466V451.759C357.633 451.759 380.416 428.93 380.416 400.871H394.629C394.629 436.784 365.471 466 329.63 466Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M305.471 433.515C288.825 433.515 272.178 427.163 259.508 414.468L269.559 404.396C289.362 424.239 321.589 424.239 341.392 404.396L351.443 414.459C338.764 427.172 322.118 433.515 305.471 433.515Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M311.291 393.486C275.449 393.486 246.291 364.27 246.291 328.357H260.504C260.504 356.424 283.287 379.253 311.291 379.253V393.486Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M297.721 350.205C272.381 324.814 272.381 283.495 297.721 258.095L307.772 268.167C287.969 288.009 287.969 320.291 307.772 340.142L297.721 350.205Z",
            fill: "#EA4335"
        }, []), "\n"])
    }
    )
      , ku = function(e) {
        e.styles;
        var t = Object.assign({}, e);
        return delete t.styles,
        Object(i.h)("svg", Object.assign({
            width: "326",
            height: "163",
            viewBox: "0 0 326 163",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg"
        }, t), ["\n", Object(i.h)("path", {
            d: "M243.623 104.572C230.164 90.8533 208.14 90.6475 194.424 104.109C180.708 117.57 180.502 139.598 193.961 153.317L243.623 104.572Z",
            fill: "#FBBC04"
        }, []), "\n", Object(i.h)("path", {
            d: "M271.334 68H264C264 49.495 279.054 34.4452 297.556 34.4452V41.7807C283.1 41.7807 271.334 53.5415 271.334 68Z",
            fill: "#4688F1"
        }, []), "\n", Object(i.h)("path", {
            d: "M271.334 8H264C264 26.505 279.054 41.5548 297.556 41.5548V34.2259C283.1 34.2259 271.334 22.4585 271.334 8Z",
            fill: "#4688F1"
        }, []), "\n", Object(i.h)("path", {
            d: "M298.905 68H291.57C291.57 49.495 306.624 34.4452 325.126 34.4452V41.7807C310.663 41.7807 298.905 53.5415 298.905 68Z",
            fill: "#4688F1"
        }, []), "\n", Object(i.h)("path", {
            d: "M298.905 8H291.57C291.57 26.505 306.624 41.5548 325.126 41.5548V34.2259C310.663 34.2259 298.905 22.4585 298.905 8Z",
            fill: "#4688F1"
        }, []), "\n", Object(i.h)("path", {
            d: "M320.66 123.738C320.66 138.697 308.536 150.823 293.58 150.823C278.625 150.823 266.5 138.697 266.5 123.738C266.5 108.779 278.625 96.6526 293.58 96.6526C308.536 96.6526 320.66 108.779 320.66 123.738Z",
            stroke: "#3AA757",
            "stroke-width": "5"
        }, []), "\n", Object(i.h)("path", {
            d: "M201.574 43.1551C211.281 43.1551 219.149 35.2854 219.149 25.5776C219.149 15.8697 211.281 8 201.574 8C191.868 8 184 15.8697 184 25.5776C184 35.2854 191.868 43.1551 201.574 43.1551Z",
            fill: "#EA4335"
        }, []), "\n", Object(i.h)("path", {
            d: "M225.592 35.0947C233.586 35.0947 240.094 41.5984 240.094 49.5997C240.094 57.5948 233.592 64.1046 225.592 64.1046C217.592 64.1046 211.09 57.6011 211.09 49.5997C211.09 41.5984 217.599 35.0947 225.592 35.0947ZM225.592 31.5221C215.612 31.5221 207.518 39.6118 207.518 49.5997C207.518 59.5874 215.606 67.6772 225.592 67.6772C235.572 67.6772 243.666 59.5876 243.666 49.5997C243.666 39.6118 235.572 31.5221 225.592 31.5221Z",
            fill: "#EA4335",
            stroke: "#E7443C"
        }, []), "\n", Object(i.h)("path", {
            d: "M60.9062 1.61743L101.862 161.173",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M161.144 60.9169L1.61719 101.88",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M137.248 20.8865L25.5127 141.91",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M141.885 137.273L20.8828 25.5172",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M99.2828 1L63.4844 161.79",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n", Object(i.h)("path", {
            d: "M161.762 99.3006L1 63.4958",
            stroke: "#4688F1",
            "stroke-width": "5",
            "stroke-miterlimit": "10"
        }, []), "\n"])
    }
      , Su = n(110)
      , wu = n.n(Su)
      , _u = n(45)
      , Cu = n.n(_u)
      , Mu = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Hu = wu.a.hero
      , Lu = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("section", {
                    class: Object(_.U)("grid", Cu.a.registrationHero)
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-1-lg col-5-lg col-4")
                }, Object(i.h)("h1", {
                    class: Object(_.U)(Cu.a.heroTitle)
                }, Object(i.h)(Ot, {
                    classNames: Object(_.U)(Cu.a.heroTitleContent)
                }, Hu.heading))), Object(i.h)("div", {
                    class: Object(_.U)("col-offset-6-lg col-5-lg col-4")
                }, Object(i.h)("div", {
                    class: Object(_.U)(Cu.a.heroShapes)
                }, e ? Object(i.h)(ku, null) : Object(i.h)(ju, null))))
            }
        }]),
        t
    }(i.Component);
    Lu = Mu([Object(w.b)("UIStore"), w.c], Lu);
    var Tu = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("div", {
                    class: "page"
                }, Object(i.h)(Te, null), Object(i.h)(Lu, null), Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("section", {
                    class: Object(_.U)(Cu.a.twoColBelt, "col-10-lg col-offset-1-lg")
                }, Object(i.h)("div", {
                    class: "grid"
                }, wu.a.belt.sections.map((function(e, t, n) {
                    var o = "col-5-lg";
                    return t === n.length - 1 && (o += " col-offset-6-lg"),
                    Object(i.h)("div", {
                        class: "".concat(o, " ").concat(Cu.a.twoColBeltGroup)
                    }, e.heading && Object(i.h)("h6", {
                        class: Cu.a.beltHeading
                    }, e.heading), e.body && Object(i.h)("p", null, e.body), e.cta && Object(i.h)(re, l()({
                        gaCategory: "Registration",
                        gaLabel: e.cta.label,
                        type: J.Text,
                        leftAlign: !0
                    }, e.cta), e.cta.label))
                }
                )))), Object(i.h)("section", {
                    class: Object(_.U)(Cu.a.ticketTypesWrapper, "col-10-lg col-offset-1-lg")
                }, Object(i.h)("h2", null, wu.a.ticketTypes.title), Object(i.h)("div", {
                    class: Cu.a.ticketTypesContainer
                }, wu.a.ticketTypes.tickets.map((function(e) {
                    return Object(i.h)("div", {
                        class: Cu.a.ticketType
                    }, Object(i.h)("h5", null, e.title), Object(i.h)("p", {
                        class: Cu.a.ticketPrice
                    }, "Price ", e.price), Object(i.h)("p", {
                        class: Cu.a.ticketTypeDesc
                    }, Object(i.h)(Ot, null, e.description)))
                }
                ))))), Object(i.h)(Hn, {
                    include: ["General"]
                }), Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("section", {
                    class: Object(_.U)(Cu.a.termsAndConditions, "col-10-lg col-offset-1-lg")
                }, wu.a.termsAndConditions.map((function(e) {
                    return Object(i.h)(Ot, null, e.body)
                }
                )))), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component);
    Tu = Mu([Object(w.b)("UIStore"), w.c], Tu);
    var Au = n(56)
      , Iu = n.n(Au)
      , xu = n(99)
      , Du = n.n(xu)
      , Ru = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Eu = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "scheduleTagFromFilter",
            value: function(e) {
                var t = this.props.SessionStore;
                if (!t.loaded)
                    return !1;
                var n = {
                    classNames: vl.a.tag,
                    label: "",
                    toggled: !0
                };
                switch (e.type) {
                case Qr.MyIOFilter:
                    n.label = "My I/O";
                    break;
                case Qr.LivestreamFilter:
                    n.label = "Livestream";
                    break;
                case Qr.LocationFilter:
                    var o = t.getLocationBySlug(e.match);
                    o && (n.label = o.name);
                    break;
                case Qr.LevelFilter:
                case Qr.TrackFilter:
                case Qr.TypeFilter:
                    var a = t.getTagBySlug(e.match);
                    a && (n.category = a.category,
                    n.color = a.color,
                    n.fontColor = a.fontColor,
                    n.label = a.name,
                    n.tag = a.tag)
                }
                return Object(i.h)(zt, {
                    category: n.category,
                    classNames: n.classNames,
                    color: n.color,
                    fontColor: n.fontColor,
                    label: n.label,
                    tag: n.tag,
                    toggled: n.toggled
                })
            }
        }, {
            key: "render",
            value: function() {
                var e = this
                  , t = this.props
                  , n = t.FilterStore;
                if (t.SessionStore.loaded)
                    return Object(i.h)("div", {
                        class: Du.a.filterBelt
                    }, Object(i.h)("div", {
                        class: Du.a.filters
                    }, Object(i.h)("span", {
                        class: "".concat(Du.a.filtersTitle)
                    }, "Filters: "), n.activeFilters.map((function(t) {
                        return Object(i.h)(re, {
                            gaLabel: "Toggle filter: ".concat(t.match),
                            gaCategory: "".concat("Filter Belt"),
                            classNames: "".concat(vl.a.tagButton, " ").concat(Du.a.tagButton),
                            onClick: function() {
                                n.toggleFilter(t)
                            },
                            toggled: !0,
                            type: J.Hairline
                        }, e.scheduleTagFromFilter(t))
                    }
                    ))), Object(i.h)("button", {
                        "data-g-on": "click",
                        "data-g-event-category": "".concat("Filter Belt"),
                        "data-g-event-label": "Clear filters",
                        "data-g-event-action": "click",
                        class: Du.a.clearButtonMobile,
                        onClick: function() {
                            n.clearFilters()
                        }
                    }, Object(i.h)(C, null, "cancel")), Object(i.h)(re, {
                        gaCategory: "".concat("Filter Belt"),
                        gaLabel: "Clear filters",
                        classNames: Du.a.clearButton,
                        type: J.Text,
                        onClick: function() {
                            n.clearFilters()
                        }
                    }, "Clear all"))
            }
        }]),
        t
    }(i.Component);
    Eu = Ru([Object(w.b)("FilterStore", "SessionStore"), w.c], Eu);
    var Pu = n(41)
      , Bu = n.n(Pu)
      , Uu = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Fu = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderSessionList",
            value: function() {
                var e = this.props
                  , t = e.FilterStore
                  , n = e.SessionStore;
                if (n.loaded) {
                    var o = t.filterSchedule(n.schedule);
                    return Object(i.h)(Cr, {
                        baseRoute: "".concat(_.c, "/schedule/events"),
                        schedule: o,
                        layout: qi.Default
                    })
                }
                return Object(i.h)("div", {
                    class: "grid",
                    style: {
                        margin: "60px 0"
                    }
                }, Object(i.h)("h6", {
                    class: "col-offset-1-lg col-10-lg"
                }, "Loading schedule..."))
            }
        }, {
            key: "renderSessionModal",
            value: function(e) {
                var t = this.props.SessionStore;
                return t.loaded ? Object(i.h)(Li, {
                    baseRoute: "".concat(Xu, "/events"),
                    session: t.getSessionById(e)
                }) : Object(i.h)("div", null)
            }
        }, {
            key: "renderSpeakerModal",
            value: function(e) {
                var t = this.props.SessionStore;
                return t.loaded ? Object(i.h)(Ir, {
                    baseRoute: "".concat(Xu, "/events"),
                    speaker: t.getSpeakerById(e)
                }) : Object(i.h)("div", null)
            }
        }, {
            key: "renderModal",
            value: function() {
                var e = this.props.match;
                if (e.params.speakerId || e.params.sessionId)
                    return Object(i.h)(ha, {
                        open: !0,
                        styleType: sa.Session,
                        type: ia.Route,
                        baseRoute: "".concat(Xu, "/events/"),
                        showBackButtonControls: !0,
                        mobileLayout: la.Fullscreen
                    }, e.params.sessionId && this.renderSessionModal(e.params.sessionId), e.params.speakerId && this.renderSpeakerModal(e.params.speakerId))
            }
        }, {
            key: "renderFilterBar",
            value: function() {
                if (this.props.FilterStore.activeFilters.length > 0)
                    return Object(i.h)("div", {
                        class: "col-offset-1-lg col-10-lg ".concat(Bu.a.filterBelt)
                    }, Object(i.h)(Eu, null))
            }
        }, {
            key: "updateMyIOFilter",
            value: function() {
                var e = this.props
                  , t = e.FilterStore
                  , n = e.UIStore
                  , o = e.UserStore;
                o.initialized && (o.isSignedIn || t.isFilterActive(oi) ? t.toggleFilter(oi) : n.Popup.show())
            }
        }, {
            key: "renderMyIOToggle",
            value: function() {
                var e = this
                  , t = this.props.FilterStore;
                return Object(i.h)(Ol, {
                    ariaLabel: "MyIO toggle",
                    classNames: Bu.a.toolbarMyIO,
                    icon: "star",
                    on: t.isFilterActive(oi),
                    onClick: function() {
                        return e.updateMyIOFilter()
                    }
                })
            }
        }, {
            key: "renderCustomizeTutorialModal",
            value: function() {
                this.props.UIStore.Modal.open({
                    id: _.l.dialog,
                    body: Object(i.h)(Za, null),
                    mobileLayout: la.Centered
                })
            }
        }, {
            key: "componentDidMount",
            value: function() {
                _.T && this.props.UIStore.Screen.isMobile && !localStorage.getItem("CUSTOMIZE_TUTORIAL") && this.renderCustomizeTutorialModal()
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props.UIStore;
                return Object(i.h)("section", null, Object(i.h)(gl, null, Object(i.h)(kl, null)), this.renderModal(), Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("div", {
                    class: "h6 col-10-lg col-offset-1-lg ".concat(Bu.a.scheduleSubtitle, " ").concat(Bu.a.eventsSubtitle)
                }, Object(i.h)(Ot, null, Iu.a.events.subtitle)), Object(i.h)(rc, {
                    stickyClass: "grid"
                }, Object(i.h)("div", {
                    class: Object(_.U)("col-offset-1-lg", "col-10-lg", Bu.a.stickyNav)
                }, Object(i.h)(tc, null), Object(i.h)("div", {
                    class: Bu.a.toolbarFabs
                }, _.s && !e.Screen.isMobile && this.renderMyIOToggle(), Object(i.h)(x, {
                    ariaLabel: "Filter sessions",
                    classNames: "hiddenLtTablet",
                    icon: "filter_list",
                    onClick: e.Drawer.open,
                    type: a.NotRaised
                }))), !e.Screen.isMobile && this.renderFilterBar()), e.Screen.isMobile && this.renderFilterBar()), this.renderSessionList(), Object(i.h)(x, {
                    ariaLabel: "Filter sessions",
                    classNames: "hiddenGtTablet ".concat(Bu.a.filterMobileFab),
                    icon: "filter_list",
                    onClick: e.Drawer.open,
                    type: a.Colored
                }), Object(i.h)(Ts, null))
            }
        }]),
        t
    }(i.Component);
    Fu = Uu([S.h, Object(w.b)("FilterStore", "SessionStore", "UIStore", "UserStore"), w.c], Fu);
    var Nu = n(227)
      , Wu = n.n(Nu)
      , Gu = n(24)
      , Vu = n.n(Gu)
      , zu = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , qu = {
        Code: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 18 11",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M11.34 9.717L15.48 5.5l-4.14-4.217L12.6 0 18 5.5 12.6 11l-1.26-1.283zm-4.68 0L2.52 5.5l4.14-4.217L5.4 0 0 5.5 5.4 11l1.26-1.283z",
                fill: "#FFF",
                "fill-rule": "evenodd"
            }, []), "\n"])
        },
        Moon: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 13 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M3 0C1.95 0 .95.16 0 .46 4.06 1.73 7 5.52 7 10c0 4.48-2.94 8.27-7 9.54.95.3 1.95.46 3 .46 5.52 0 10-4.48 10-10S8.52 0 3 0z",
                fill: "#FFF",
                "fill-rule": "nonzero"
            }, []), "\n"])
        },
        Music: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 12 18",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M6 0v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V4h4V0H6z",
                fill: "#FFF",
                "fill-rule": "nonzero"
            }, []), "\n"])
        },
        Shield: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 15 19",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M7.5 0L0 3.333v5c0 4.625 3.2 8.95 7.5 10 4.3-1.05 7.5-5.375 7.5-10v-5L7.5 0zM5.833 13.333L2.5 10l1.175-1.175 2.158 2.15 5.492-5.492L12.5 6.667l-6.667 6.666z",
                fill: "#202124",
                "fill-rule": "evenodd"
            }, []), "\n"])
        },
        Shop: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 18 16",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, ["\n        ", Object(i.h)("path", {
                d: "M-3-4h24v24H-3z"
            }, []), "\n        ", Object(i.h)("path", {
                d: "M17 0H1v2h16V0zm1 10V8l-1-5H1L0 8v2h1v6h10v-6h4v6h2v-6h1zm-9 4H3v-4h6v4z",
                fill: "#202124",
                "fill-rule": "nonzero"
            }, []), "\n    "]), "\n"])
        },
        Slash: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 14 20",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, ["\n        ", Object(i.h)("path", {
                d: "M-5-2h24v24H-5z"
            }, []), "\n        ", Object(i.h)("path", {
                fill: "#FFF",
                d: "M11.634-.026l1.732 1-11 19.052-1.732-1z"
            }, []), "\n    "]), "\n"])
        },
        Star: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 19 18",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M9.5 13.774L15.374 18l-2.248-6.824L19 7.043h-7.204L9.5 0 7.204 7.043H0l5.874 4.133L3.626 18z",
                fill: "#202124",
                "fill-rule": "evenodd"
            }, []), "\n"])
        },
        TwoPeople: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 20 14",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("g", {
                fill: "none",
                "fill-rule": "evenodd"
            }, ["\n        ", Object(i.h)("path", {
                d: "M-2-5h24v24H-2z"
            }, []), "\n        ", Object(i.h)("path", {
                d: "M14.5 7c1.38 0 2.49-1.12 2.49-2.5S15.88 2 14.5 2a2.5 2.5 0 0 0 0 5zM7 6c1.66 0 2.99-1.34 2.99-3S8.66 0 7 0C5.34 0 4 1.34 4 3s1.34 3 3 3zm7.5 3C12.67 9 9 9.92 9 11.75V14h11v-2.25C20 9.92 16.33 9 14.5 9zM7 8c-2.33 0-7 1.17-7 3.5V14h7v-2.25c0-.85.33-2.34 2.37-3.47C8.5 8.1 7.66 8 7 8z",
                fill: "#FFF",
                "fill-rule": "nonzero"
            }, []), "\n    "]), "\n"])
        },
        Utensils: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 17 18",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M7.2 6.3H5.4V0H3.6v6.3H1.8V0H0v6.3c0 1.908 1.494 3.456 3.375 3.573V18h2.25V9.873C7.506 9.756 9 8.208 9 6.3V0H7.2v6.3zm4.5-2.7v7.2h2.25V18h2.25V0c-2.484 0-4.5 2.016-4.5 3.6z",
                fill: "#202124",
                "fill-rule": "evenodd"
            }, []), "\n"])
        },
        Wrench: function(e) {
            e.styles;
            var t = Object.assign({}, e);
            return delete t.styles,
            Object(i.h)("svg", Object.assign({
                viewBox: "0 0 18 18",
                xmlns: "http://www.w3.org/2000/svg"
            }, t), ["\n    ", Object(i.h)("path", {
                d: "M5.469 3.147c.3.302-.018.782-.318 1.084L4.003 5.385c-.3.302-.59.431-.89.13L.513 2.9c-.935 1.902-.594 4.345 1.042 5.99 1.478 1.485 3.323 2.186 5.559 1.117l6.906 6.942c.451.453 1.15.888 1.6.435l1.472-1.479c.45-.453.206-1.344-.245-1.797L9.941 7.167c.591-1.772.372-4.107-1.107-5.592C7.185-.083 4.738-.428 2.856.52l2.613 2.626z",
                fill: "#FFF",
                "fill-rule": "evenodd"
            }, []), "\n"])
        }
    }
      , Zu = {
        red: Vu.a.eventRed,
        blue: Vu.a.eventBlue,
        yellow: Vu.a.eventYellow,
        green: Vu.a.eventGreen,
        redBorder: Vu.a.eventRedBorder,
        darkBlue: Vu.a.eventDarkBlue,
        grey: Vu.a.eventGrey
    }
      , Ku = ["7<span>AM</span>", "8", "9", "10", "11", "12<span>PM</span>", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10<span>PM</span>", "11"]
      , Yu = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "getEventStyle",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 6;
                return "grid-column-start: ".concat(Math.ceil(4 * (e - n) - 3), "; grid-column-end: ").concat(Math.ceil(4 * (t - n) - 3), ";")
            }
        }, {
            key: "renderTimeBar",
            value: function() {
                return Object(i.h)("div", {
                    "aria-hidden": "true",
                    class: Vu.a.timeBar
                }, Ku.map((function(e) {
                    var t = e.includes("span") ? "".concat(Vu.a.timeWithSuffix) : "".concat(Vu.a.timeWithoutSuffix);
                    return Object(i.h)("div", null, Object(i.h)(Ot, {
                        classNames: t
                    }, e))
                }
                )))
            }
        }, {
            key: "renderEvent",
            value: function(e, t) {
                var n = this.props.UIStore
                  , o = Object(_.B)(e.start)
                  , a = Object(_.B)(e.end);
                return Object(i.h)("div", {
                    "aria-label": "".concat(e.title, ": from ").concat(o, " to ").concat(a),
                    class: "".concat(Vu.a.event, " ").concat(Zu[e.color]),
                    style: this.getEventStyle(e.start, e.end)
                }, Object(i.h)("span", {
                    "aria-hidden": "true",
                    class: "".concat(Vu.a.eventIcon, " ").concat(e.hideIconInDesktop && "hiddenGtDesktop")
                }, e.svg && Object(i.h)(t, null)), Object(i.h)("div", {
                    "aria-hidden": "true",
                    class: Vu.a.eventLabel
                }, Object(i.h)("span", {
                    class: Vu.a.eventTitle
                }, n.Screen.isLessThanDesktop ? e.title : e.shortTitle || e.title), Object(i.h)("span", {
                    class: "".concat(Vu.a.formattedEventTime, " hiddenGtDesktop")
                }, o, " - ", a)))
            }
        }, {
            key: "renderDay",
            value: function(e) {
                var t = this
                  , n = new Date("".concat(e.datetime))
                  , o = Object(_.E)(n)
                  , a = Object(_.F)(n)
                  , r = n.toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    weekday: "short",
                    year: "numeric"
                });
                return Object(i.h)("div", {
                    class: Vu.a.day
                }, Object(i.h)("h3", {
                    "aria-label": r,
                    class: "".concat(Vu.a.date)
                }, Object(i.h)("div", {
                    "aria-hidden": "true",
                    class: Vu.a.dateWeekday
                }, o), Object(i.h)("div", {
                    "aria-hidden": "true",
                    class: Vu.a.dateDayNumber
                }, a)), e.events.map((function(n, o) {
                    var a = n.svg ? qu[n.svg] : ""
                      , r = e.events[o + 1]
                      , s = r && r.svg ? qu[r.svg] : "";
                    if (!n.shifted)
                        return Object(i.h)("div", {
                            class: "".concat(Vu.a.row)
                        }, t.renderEvent(n, a), r && r.shifted && t.renderEvent(r, s))
                }
                )))
            }
        }, {
            key: "renderEvents",
            value: function() {
                var e = this;
                return Object(i.h)("div", {
                    class: Vu.a.calendarEvents
                }, Wu.a.days.map((function(t) {
                    return e.renderDay(t)
                }
                )))
            }
        }, {
            key: "render",
            value: function() {
                return Object(i.h)("section", {
                    "aria-label": "Overview agenda",
                    class: Vu.a.agenda
                }, Object(i.h)("div", {
                    class: Vu.a.calendar
                }, this.renderTimeBar(), this.renderEvents()))
            }
        }]),
        t
    }(i.Component);
    Yu = zu([Object(w.b)("UIStore"), w.c], Yu);
    var Ju = function() {
        return Object(i.h)("section", null, Object(i.h)(Te, null), Object(i.h)("div", {
            class: "grid"
        }, Object(i.h)("div", {
            class: "h6 col-10-lg col-offset-1-lg ".concat(Bu.a.scheduleSubtitle, " ").concat(Bu.a.overviewSubtitle)
        }, Object(i.h)(Ot, null, Iu.a.events.subtitle))), Object(i.h)(Yu, null))
    }
      , Xu = "/io/schedule"
      , Qu = (i.Component,
    n(111))
      , $u = n.n(Qu)
      , ed = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderHotelSchedule",
            value: function(e) {
                return Object(i.h)("tbody", null, Object(i.h)("tr", {
                    class: $u.a.scheduleBaseHeaderRow,
                    style: {
                        backgroundColor: this.props.routeColorAlt,
                        color: this.props.textColor
                    }
                }, Object(i.h)("th", {
                    colSpan: 2
                }, e.base)), Object(i.h)("tr", {
                    class: $u.a.scheduleHeaderRow
                }, Object(i.h)("th", {
                    scope: "col"
                }, "Departure"), Object(i.h)("th", {
                    scope: "col"
                }, "Arrival at Shoreline Amphitheatre")), e.trips.map(this.renderTrip.bind(this)))
            }
        }, {
            key: "renderTrip",
            value: function(e) {
                return Object(i.h)("tr", null, Object(i.h)("td", null, e.departure), Object(i.h)("td", null, e.arrival))
            }
        }, {
            key: "renderLoop",
            value: function(e) {
                return Object(i.h)("tbody", null, Object(i.h)("tr", {
                    class: $u.a.scheduleHeaderRow
                }, Object(i.h)("th", {
                    colSpan: 2
                }, e.title)), Object(i.h)("tr", null, Object(i.h)("td", null, e.from, " - ", e.to), Object(i.h)("td", null, e.frequency)))
            }
        }, {
            key: "render",
            value: function() {
                var e = this.props
                  , t = e.routeSchedules
                  , n = e.loops
                  , o = e.routeName
                  , a = e.routeColor
                  , r = e.textColor;
                return Object(i.h)("table", {
                    class: $u.a.shuttleRouteTable
                }, Object(i.h)("thead", {
                    class: $u.a.tableHeader
                }, Object(i.h)("tr", {
                    style: {
                        backgroundColor: a,
                        color: r
                    }
                }, Object(i.h)("th", {
                    colSpan: 2
                }, o))), t.map(this.renderHotelSchedule.bind(this)), n.map(this.renderLoop.bind(this)))
            }
        }]),
        t
    }(i.Component);
    ed.defaultProps = {
        routeSchedules: [],
        loops: []
    };
    var td = n(145)
      , nd = n.n(td)
      , od = n(228)
      , ad = n.n(od)
      , rd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , id = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "renderShuttleTables",
            value: function(e) {
                var t = e.match.params.day || this.currentDaySlug
                  , n = nd.a.routes;
                return Object(i.h)("div", {
                    class: "grid"
                }, Object(i.h)("div", {
                    class: "col-8-lg col-offset-2-lg"
                }, n.map((function(e) {
                    if (e.heading) {
                        var n = e.heading[t] || e.heading;
                        return Object(i.h)("h3", {
                            class: ad.a.heading
                        }, n)
                    }
                    var o = e.schedules && e.schedules[t] || []
                      , a = e.loops && e.loops[t] || [];
                    if (o.length > 0 || a.length > 0)
                        return Object(i.h)(ed, {
                            routeName: e.name,
                            routeColor: e.color,
                            routeColorAlt: e.altColor,
                            textColor: e.textColor,
                            routeSchedules: o,
                            loops: a
                        })
                }
                ))))
            }
        }, {
            key: "render",
            value: function() {
                this.props.TimeStore;
                return Object(i.h)("div", {
                    class: "page"
                }, Object(i.h)(Te, null), Object(i.h)("section", {
                    className: "grid"
                }, Object(i.h)("h1", {
                    className: "d3 col-10-lg col-offset-1-lg"
                }, nd.a.title)), Object(i.h)(et, {
                    basePath: "/io/shuttles",
                    defaultTabSlug: this.currentDaySlug,
                    tabItems: nd.a.tabs,
                    gaCategory: "Shuttles",
                    type: Ve.Routed
                }, Object(i.h)(S.e, null, Object(i.h)(S.b, {
                    path: "".concat("/io/shuttles", "/:day?"),
                    render: this.renderShuttleTables.bind(this)
                }))), Object(i.h)(Je, null))
            }
        }, {
            key: "currentDaySlug",
            get: function() {
                var e = this.props.TimeStore;
                switch (e.currentDay) {
                case To.b.Day1:
                    return "may-7";
                case To.b.Day2:
                    return "may-8";
                case To.b.Day3:
                    return "may-9";
                default:
                    return e.currentConferencePhase >= To.a.ConferenceComplete ? "may-9" : "may-6"
                }
            }
        }]),
        t
    }(i.Component);
    id = rd([Object(w.b)("TimeStore"), w.c], id);
    var sd = n(20)
      , ld = n.n(sd)
      , cd = n(51)
      , ud = n.n(cd)
      , dd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , hd = function(e) {
        return e.map((function(e) {
            return Object(i.h)("div", {
                class: "".concat(ld.a.infoBlock)
            }, e.SVG ? Object(i.h)("div", {
                class: ld.a.ctaInfoHeading
            }, Object(i.h)(Ee, {
                type: Ce[e.SVG],
                color: e.SVGColor,
                width: "43px",
                rotation: -90
            }), Object(i.h)(Ot, {
                classNames: "".concat(ld.a.infoRawWithShape)
            }, e.description)) : Object(i.h)("div", {
                class: "".concat(ld.a.infoHeading)
            }, Object(i.h)("h3", null, e.heading), Object(i.h)("div", null, Object(i.h)(Ot, {
                classNames: "".concat(ld.a.infoRaw)
            }, e.description))))
        }
        ))
    }
      , pd = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen.isLessThanDesktop;
                return Object(i.h)("section", null, Object(i.h)("div", {
                    class: Object(_.U)("grid", ld.a.sustainabilityInfoSection)
                }, Object(i.h)("div", {
                    class: "col-6-lg col-offset-1-lg"
                }, Object(i.h)("h2", null, ud.a.info.title), hd(ud.a.info.group1.items)), !e && Object(i.h)("div", {
                    class: Object(_.U)("col-3-lg col-offset-8-lg", ld.a.shapeSection)
                }, Object(i.h)("div", null, Object(i.h)(Ee, {
                    type: Ce.Sprinkler,
                    color: Me.Yellow,
                    classes: ld.a.shape,
                    width: "90%"
                })), Object(i.h)("div", {
                    class: "fullWidth"
                }, Object(i.h)(Ee, {
                    type: Ce.Lattice,
                    color: Me.Blue,
                    width: "45%",
                    classes: ld.a.shape
                })), Object(i.h)("div", {
                    class: Object(_.U)(ld.a.fullWidth, "flexEnd")
                }, Object(i.h)(Ee, {
                    type: Ce.HourGlass,
                    color: Me.Green,
                    width: "45%",
                    classes: ld.a.shape
                }))), Object(i.h)("div", {
                    class: Object(_.U)("grid")
                }, function(e) {
                    return Object(i.h)("div", {
                        class: Object(_.U)("col-3-lg col-offset-1-lg", ld.a.shapeSection)
                    }, Object(i.h)("div", {
                        class: ld.a.shapeSectionImage
                    }, Object(i.h)(st, {
                        shape: tt.SemiCircle,
                        rotation: nt.Bottom,
                        src: ud.a.info.group2.imageLeft.props.src,
                        src2x: ud.a.info.group2.imageLeft.props.src2x
                    })), Object(i.h)("div", {
                        class: ld.a.shapeWrapper
                    }, Object(i.h)("div", {
                        class: ld.a.shape
                    }, Object(i.h)(Ee, {
                        type: Ce.XMarksTheSpot,
                        color: Me.Green,
                        width: e ? "100%" : "45%"
                    })), Object(i.h)("div", {
                        class: e ? ld.a.shape : Object(_.U)(ld.a.fullWidth, "flexEnd")
                    }, Object(i.h)(Ee, {
                        type: Ce.BullsEye,
                        color: e ? Me.Blue : Me.Yellow,
                        fill: Me.None,
                        strokeWidth: 6,
                        width: e ? "100%" : "45%"
                    }))), !e && Object(i.h)("div", null, Object(i.h)(Ee, {
                        type: Ce.DoubleNoodle,
                        color: Me.Red,
                        width: "90%"
                    })))
                }(e), Object(i.h)("div", {
                    class: "col-6-lg col-offset-5-lg"
                }, hd(ud.a.info.group2.items)))))
            }
        }]),
        t
    }(i.Component);
    pd = dd([Object(w.b)("UIStore"), w.c], pd);
    var fd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , gd = Object(i.h)("div", {
        className: Object(_.U)(ld.a.paragraphs, "col-2 col-6-lg col-offset-1-lg")
    }, ud.a.hero.paragraphs.map((function(e) {
        return Object(i.h)("p", null, e)
    }
    )))
      , bd = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.UIStore.Screen;
                return Object(i.h)("section", {
                    id: "hero",
                    className: Object(_.U)(ld.a.hero, "full-bleed")
                }, Object(i.h)("div", {
                    className: Object(_.U)(ld.a.heroContent, "grid")
                }, Object(i.h)("h1", {
                    className: Object(_.U)(ld.a.heroTitle, "col-2 col-6-lg col-offset-1-lg")
                }, Object(i.h)("span", null, ud.a.hero.title1), Object(i.h)("span", null, ud.a.hero.title2)), !e.isLessThanDesktop && gd, Object(i.h)("div", {
                    className: Object(_.U)(ld.a.shapeContainer, "col-2 col-offset-2 col-4-lg col-offset-7-lg")
                }, Object(i.h)("div", {
                    className: "spaceBetween"
                }, Object(i.h)(Ee, {
                    classes: ld.a.shape,
                    type: Ce.QuadCircles,
                    color: Me.Yellow,
                    width: "45%"
                }), Object(i.h)("div", {
                    className: ld.a.imageWrapper
                }, Object(i.h)(st, {
                    shape: tt.Circle,
                    classNames: "".concat(ld.a.shape),
                    src: ud.a.hero.image.src,
                    src2x: ud.a.hero.image.src2x
                }))), Object(i.h)("div", {
                    className: "spaceBetween"
                }, Object(i.h)(Ee, {
                    classes: ld.a.shape,
                    rotation: -90,
                    type: Ce.TwoBirds,
                    color: Me.DarkGreen,
                    width: "45%"
                }), Object(i.h)(Ee, {
                    classes: ld.a.shape,
                    type: Ce.SunRays,
                    color: Me.Yellow,
                    width: "45%"
                }))), e.isLessThanDesktop && gd))
            }
        }]),
        t
    }(i.Component);
    bd = fd([Object(w.b)("UIStore"), w.c], bd);
    var vd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , md = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                return Object(i.h)(i.Fragment, null, Object(i.h)(Te, null), Object(i.h)(bd, null), Object(i.h)(pd, null), Object(i.h)(Je, null))
            }
        }]),
        t
    }(i.Component);
    md = vd([Object(w.b)("UIStore"), w.c], md);
    var yd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Od = function() {
        function e() {
            u()(this, e),
            this.opened = !1
        }
        return h()(e, [{
            key: "open",
            value: function() {
                this.lastActiveElement = document.activeElement,
                this.opened = !0
            }
        }, {
            key: "close",
            value: function() {
                this.lastActiveElement && this.lastActiveElement.focus(),
                this.opened = !1
            }
        }]),
        e
    }();
    yd([Vo.l], Od.prototype, "opened", void 0),
    yd([Vo.d.bound], Od.prototype, "open", null),
    yd([Vo.d.bound], Od.prototype, "close", null);
    var jd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , kd = function() {
        function e() {
            u()(this, e)
        }
        return h()(e, [{
            key: "updateActiveTab",
            value: function(e) {
                this.activeTabSlug = e
            }
        }]),
        e
    }();
    jd([Vo.l], kd.prototype, "activeTabSlug", void 0),
    jd([Vo.d], kd.prototype, "updateActiveTab", null);
    var Sd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , wd = function() {
        function e() {
            u()(this, e),
            this.compactNavOpened = !1,
            this.navHidden = !1,
            this.navScrolled = !1,
            this.stickyElementHeight = 0
        }
        return h()(e, [{
            key: "openCompactNav",
            value: function() {
                this.compactNavOpened = !0
            }
        }, {
            key: "closeCompactNav",
            value: function() {
                this.compactNavOpened = !1
            }
        }, {
            key: "setNavHidden",
            value: function(e) {
                this.navHidden = e
            }
        }, {
            key: "setNavScrolled",
            value: function(e) {
                this.navScrolled = e
            }
        }, {
            key: "updateStickyHeight",
            value: function(e) {
                this.stickyElementHeight = e
            }
        }, {
            key: "setCurrentHeroHeight",
            value: function(e) {
                this.currentHeroHeight = e
            }
        }, {
            key: "hasStickyElement",
            get: function() {
                return 0 !== this.stickyElementHeight
            }
        }]),
        e
    }();
    Sd([Vo.l], wd.prototype, "compactNavOpened", void 0),
    Sd([Vo.l], wd.prototype, "navHidden", void 0),
    Sd([Vo.l], wd.prototype, "navScrolled", void 0),
    Sd([Vo.l], wd.prototype, "stickyElementHeight", void 0),
    Sd([Vo.l], wd.prototype, "currentHeroHeight", void 0),
    Sd([Vo.d.bound], wd.prototype, "openCompactNav", null),
    Sd([Vo.d.bound], wd.prototype, "closeCompactNav", null),
    Sd([Vo.d.bound], wd.prototype, "setNavHidden", null),
    Sd([Vo.d.bound], wd.prototype, "setNavScrolled", null),
    Sd([Vo.d], wd.prototype, "updateStickyHeight", null),
    Sd([Vo.d], wd.prototype, "setCurrentHeroHeight", null),
    Sd([Vo.e], wd.prototype, "hasStickyElement", null);
    var _d = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Cd = function() {
        function e() {
            u()(this, e),
            this.collectiveState = {},
            this.openedRoute = !1,
            this.openedDefault = !1,
            this.stack = 0
        }
        return h()(e, [{
            key: "initializeModalState",
            value: function(e, t) {
                this.collectiveState[e] = {
                    opened: !1,
                    mobileLayout: t
                }
            }
        }, {
            key: "resetModalState",
            value: function(e) {
                this.collectiveState[e] = {
                    opened: !1,
                    body: null,
                    mobileLayout: null
                }
            }
        }, {
            key: "open",
            value: function(e) {
                if (_.T && (this.lastActiveElement = document.activeElement),
                e && e.id && this.collectiveState[e.id]) {
                    var t = e.id;
                    this.collectiveState[t].opened = !0,
                    this.openedDefault = !0,
                    e.body && (this.collectiveState[t].body = e.body),
                    e.mobileLayout && (this.collectiveState[t].mobileLayout = e.mobileLayout)
                } else
                    this.openedRoute = !0
            }
        }, {
            key: "close",
            value: function(e) {
                e && this.collectiveState[e] ? (this.resetModalState(e),
                this.openedDefault = !1) : (this.openedRoute = !1,
                this.resetStack()),
                this.lastActiveElement && this.lastActiveElement.focus()
            }
        }, {
            key: "resetStack",
            value: function() {
                this.stack = 0
            }
        }, {
            key: "pop",
            value: function() {
                this.stack -= 1
            }
        }, {
            key: "push",
            value: function() {
                this.stack += 1
            }
        }]),
        e
    }();
    _d([Vo.l], Cd.prototype, "collectiveState", void 0),
    _d([Vo.l], Cd.prototype, "openedRoute", void 0),
    _d([Vo.l], Cd.prototype, "openedDefault", void 0),
    _d([Vo.l], Cd.prototype, "stack", void 0),
    _d([Vo.d], Cd.prototype, "initializeModalState", null),
    _d([Vo.d], Cd.prototype, "resetModalState", null),
    _d([Vo.d], Cd.prototype, "open", null),
    _d([Vo.d], Cd.prototype, "close", null),
    _d([Vo.d], Cd.prototype, "resetStack", null),
    _d([Vo.d], Cd.prototype, "pop", null),
    _d([Vo.d], Cd.prototype, "push", null);
    var Md = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Hd = function() {
        function e() {
            u()(this, e),
            this.visible = !1
        }
        return h()(e, [{
            key: "show",
            value: function() {
                this.visible = !0
            }
        }, {
            key: "hide",
            value: function() {
                this.visible = !1
            }
        }, {
            key: "toggle",
            value: function() {
                this.visible = !this.visible
            }
        }]),
        e
    }();
    Md([Vo.l], Hd.prototype, "visible", void 0),
    Md([Vo.d], Hd.prototype, "show", null),
    Md([Vo.d], Hd.prototype, "hide", null),
    Md([Vo.d], Hd.prototype, "toggle", null);
    var Ld = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Td = function() {
        function e() {
            u()(this, e),
            this.state = "Gone"
        }
        var t, n;
        return h()(e, [{
            key: "show",
            value: (n = un()(ln.a.mark((function e(t, n, o, a) {
                var r = this;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            return a && (this.onDismissHandler = a),
                            e.next = 3,
                            this.animateOut();
                        case 3:
                            Object(Vo.n)((function() {
                                r.buttonText = o || "Close",
                                r.text = t,
                                r.animateIn(n)
                            }
                            ));
                        case 4:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function(e, t, o, a) {
                return n.apply(this, arguments)
            }
            )
        }, {
            key: "onActionClick",
            value: function() {
                this.onDismissHandler && this.onDismissHandler(),
                this.animateOut()
            }
        }, {
            key: "animateIn",
            value: function() {
                var e = this
                  , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 4e3;
                this.state = "Entering",
                clearTimeout(this.timer),
                this.timer = setTimeout((function() {
                    Object(Vo.n)((function() {
                        e.state = "Leaving"
                    }
                    ))
                }
                ), t)
            }
        }, {
            key: "animateOut",
            value: (t = un()(ln.a.mark((function e() {
                var t = this;
                return ln.a.wrap((function(e) {
                    for (; ; )
                        switch (e.prev = e.next) {
                        case 0:
                            if ("Gone" !== this.state) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (this.state = "Leaving",
                            clearTimeout(this.timer),
                            this.text) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            this.timer = setTimeout((function() {
                                Object(Vo.n)((function() {
                                    t.state = "Gone",
                                    t.text = null,
                                    t.onDismissHandler = null
                                }
                                ))
                            }
                            ), 300);
                        case 7:
                        case "end":
                            return e.stop()
                        }
                }
                ), e, this)
            }
            ))),
            function() {
                return t.apply(this, arguments)
            }
            )
        }]),
        e
    }();
    Ld([Vo.l], Td.prototype, "state", void 0),
    Ld([Vo.l], Td.prototype, "text", void 0),
    Ld([Vo.l], Td.prototype, "buttonText", void 0),
    Ld([Vo.d], Td.prototype, "animateIn", null),
    Ld([Vo.d], Td.prototype, "animateOut", null);
    var Ad = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Id = function() {
        function e() {
            u()(this, e),
            this.homeHeroTheme = null,
            this.headerTheme = null,
            this.countdownTheme = null
        }
        return h()(e, [{
            key: "setHomeHeroTheme",
            value: function(e) {
                this.homeHeroTheme = e
            }
        }, {
            key: "setHeaderTheme",
            value: function(e) {
                this.headerTheme = e
            }
        }, {
            key: "setCountdownTheme",
            value: function(e) {
                this.countdownTheme = e
            }
        }, {
            key: "resetAllThemes",
            value: function() {
                this.countdownTheme = null,
                this.homeHeroTheme = null,
                this.headerTheme = null
            }
        }]),
        e
    }();
    Ad([Vo.l], Id.prototype, "homeHeroTheme", void 0),
    Ad([Vo.l], Id.prototype, "headerTheme", void 0),
    Ad([Vo.l], Id.prototype, "countdownTheme", void 0),
    Ad([Vo.d], Id.prototype, "setHomeHeroTheme", null),
    Ad([Vo.d], Id.prototype, "setHeaderTheme", null),
    Ad([Vo.d], Id.prototype, "setCountdownTheme", null),
    Ad([Vo.d], Id.prototype, "resetAllThemes", null);
    var xd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Dd = function() {
        function e() {
            u()(this, e),
            this.windowDimensions = {
                width: 1440,
                height: 900
            },
            _.T && this.setWindowDimensions(window.innerWidth, window.innerHeight)
        }
        return h()(e, [{
            key: "setWindowDimensions",
            value: function(e, t) {
                this.windowDimensions = {
                    width: e,
                    height: t
                }
            }
        }, {
            key: "isSmallMobile",
            get: function() {
                return this.windowDimensions.width < _.w.mobile
            }
        }, {
            key: "isMobile",
            get: function() {
                return this.windowDimensions.width < _.w.tablet
            }
        }, {
            key: "isLessThanTablet",
            get: function() {
                return this.windowDimensions.width < _.w.tablet
            }
        }, {
            key: "isLessThanLaptop",
            get: function() {
                return this.windowDimensions.width < _.w.laptop
            }
        }, {
            key: "isLessThanDesktop",
            get: function() {
                return this.windowDimensions.width < _.w.desktop
            }
        }, {
            key: "isBodyFixed",
            get: function() {
                return !1
            }
        }]),
        e
    }();
    xd([Vo.l], Dd.prototype, "windowDimensions", void 0),
    xd([Vo.e], Dd.prototype, "isSmallMobile", null),
    xd([Vo.e], Dd.prototype, "isMobile", null),
    xd([Vo.e], Dd.prototype, "isLessThanTablet", null),
    xd([Vo.e], Dd.prototype, "isLessThanLaptop", null),
    xd([Vo.e], Dd.prototype, "isLessThanDesktop", null),
    xd([Vo.d], Dd.prototype, "setWindowDimensions", null),
    xd([Vo.e], Dd.prototype, "isBodyFixed", null);
    var Rd = function() {
        function e() {
            u()(this, e),
            this.Drawer = new Od,
            this.GridDateTabs = new kd,
            this.Header = new wd,
            this.Modal = new Cd,
            this.Popup = new Hd,
            this.Screen = new Dd,
            this.Snackbar = new Td,
            this.Theme = new Id
        }
        return h()(e, [{
            key: "isBodyFixed",
            get: function() {
                return this.Modal.openedRoute || this.Modal.openedDefault || this.Drawer.opened && this.Screen.isMobile || this.Header.compactNavOpened
            }
        }]),
        e
    }();
    xd([Vo.l], Rd.prototype, "Drawer", void 0),
    xd([Vo.l], Rd.prototype, "GridDateTabs", void 0),
    xd([Vo.l], Rd.prototype, "Header", void 0),
    xd([Vo.l], Rd.prototype, "Modal", void 0),
    xd([Vo.l], Rd.prototype, "Popup", void 0),
    xd([Vo.l], Rd.prototype, "Screen", void 0),
    xd([Vo.l], Rd.prototype, "Snackbar", void 0),
    xd([Vo.l], Rd.prototype, "Theme", void 0),
    xd([Vo.e], Rd.prototype, "isBodyFixed", null);
    var Ed = n(146)
      , Pd = n.n(Ed)
      , Bd = function(e, t, n, o) {
        var a, r = arguments.length, i = r < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
        if ("object" === ("undefined" == typeof Reflect ? "undefined" : O()(Reflect)) && "function" == typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, o);
        else
            for (var s = e.length - 1; s >= 0; s--)
                (a = e[s]) && (i = (r < 3 ? a(i) : r > 3 ? a(t, n, i) : a(t, n)) || i);
        return r > 3 && i && Object.defineProperty(t, n, i),
        i
    }
      , Ud = {
        UIStore: new Rd,
        TimeStore: new To.e
    }
      , Fd = function(e) {
        function t() {
            return u()(this, t),
            f()(this, b()(t).apply(this, arguments))
        }
        return m()(t, e),
        h()(t, [{
            key: "componentDidMount",
            value: function() {
                var e = this.props
                  , t = e.history
                  , o = e.location;
                if (Ud.TimeStore.start(),
                o.pathname.match(/(.*)\.html$/)) {
                    var a = o.pathname.split("/").slice(0, -1).join("/");
                    t.push(a)
                }
                n.e(1).then(n.t.bind(null, 351, 7))
            }
        }, {
            key: "render",
            value: function(e) {
                var t = e.location;
                return Object(i.h)("div", {
                    id: "app",
                    class: Pd.a.marketingLayout
                }, Object(i.h)(Oe, null), Object(i.h)(Hr.a, {
                    title: this.metadata.title,
                    meta: [{
                        name: "description",
                        content: this.metadata.description
                    }, {
                        name: "og:title",
                        content: this.metadata.title
                    }, {
                        name: "og:description",
                        content: this.metadata.description
                    }, {
                        name: "og:url",
                        content: this.metadata.prodUrl
                    }, {
                        name: "og:site_name",
                        content: _.A.title
                    }]
                }), Object(i.h)(we, null), Object(i.h)("main", {
                    tabIndex: -1,
                    id: "app-wrapper",
                    class: Object(_.U)("appWrapper", Object(_.N)(t.pathname) && Pd.a.homepageLayout, Object(_.R)(t.pathname) && Pd.a.mobileOverflowHidden)
                }, Object(i.h)(S.e, null, Object(i.h)(S.b, {
                    exact: !0,
                    path: "".concat(_.c),
                    component: dl
                }), Object(i.h)(S.b, {
                    exact: !0,
                    path: "".concat(_.c, "/faq"),
                    component: Ln
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/attending"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/attending/event"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/attending/travel"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/sustainability"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/extended"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/extended/form"),
                    to: "".concat(_.c)
                }), Object(i.h)(S.a, {
                    from: "".concat(_.c, "/registration"),
                    to: "".concat(_.c, "/faq")
                }), Object(i.h)(S.b, {
                    component: Be
                }))), Object(i.h)(z, null))
            }
        }, {
            key: "metadata",
            get: function() {
                var e = this.props.location
                  , t = {
                    url: e.pathname,
                    prodUrl: "https://events.google.com".concat(e.pathname),
                    title: _.A.title,
                    description: _.A.description
                }
                  , n = _.z.find((function(t) {
                    return Object(_.W)(t.url) === Object(_.W)(e.pathname)
                }
                ));
                return n ? l()(t, n) : t
            }
        }]),
        t
    }(i.Component);
    Fd = Bd([S.h], Fd);
    var Nd = function(e) {
        function t() {
            var e;
            return u()(this, t),
            (e = f()(this, b()(t).apply(this, arguments))).staticContext = {},
            e
        }
        return m()(t, e),
        h()(t, [{
            key: "render",
            value: function() {
                var e = this.props.url;
                return Object(i.h)(w.a, l()({}, Ud), "undefined" != typeof window ? Object(i.h)(P.a, null, Object(i.h)(Fd, null)) : Object(i.h)(S.d, {
                    location: "".concat(e),
                    context: this.staticContext
                }, Object(i.h)(Fd, null)))
            }
        }]),
        t
    }(i.Component);
    _.T && function() {
        if (!(_.T && "serviceWorker"in navigator))
            return;
        window.addEventListener("load", (function() {
            navigator.serviceWorker.register(_.c + "/service-worker.js").catch(e=>{
                console.warn("failed to register service worker", e)
            }
            );
            const e = Boolean(navigator.serviceWorker.controller);
            e && window.setTimeout(()=>{
                window.requestAnimationFrame(()=>{
                    (()=>new Promise((e,t)=>{
                        if (!navigator.serviceWorker.controller)
                            return void e(!0);
                        const n = new MessageChannel;
                        navigator.serviceWorker.controller.postMessage("siteIsValid", [n.port2]),
                        n.port1.onmessage = t=>{
                            const {siteIsValid: n} = t.data;
                            e(n)
                        }
                    }
                    ))().then(e=>{
                        e || console.debug("site is getting close to out-of-date")
                    }
                    )
                }
                )
            }
            , 1e4),
            navigator.serviceWorker.addEventListener("controllerchange", ()=>{
                e && (console.debug("got service worker controllerchange, reload"),
                window.location.reload())
            }
            )
        }
        ))
    }();
    var Wd = document.getElementById("app");
    t.default = Object(i.render)(Object(i.h)(Nd, null), document.body, Wd)
}
]);
//# sourceMappingURL=main.ca470059135daa71f730.js.map
