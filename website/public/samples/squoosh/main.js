(self.webpackJsonp = self.webpackJsonp || []).push([
    [2], Array(19).concat([function(e, t, n) {
        "use strict";

        function o(e, t) {
            for (const n in e)
                if (e[n] !== t[n])
                    return !1;
            for (const n in t)
                if (!(n in e))
                    return !1;
            return !0
        }

        function i(e, t) {
            const n = e.getContext("2d");
            if (!n)
                throw Error("Canvas not initialized");
            n.clearRect(0, 0, e.width, e.height),
                n.putImageData(t, 0, 0)
        }
        async function s(e, t, n) {
            const o = document.createElement("canvas");
            o.width = e.width,
                o.height = e.height;
            const i = o.getContext("2d");
            if (!i)
                throw Error("Canvas not initialized");
            let s;
            if (i.putImageData(e, 0, 0),
                "toBlob" in o)
                s = await new Promise(e => o.toBlob(e, t, n));
            else {
                const e = o.toDataURL(t, n),
                    i = /data:([^;]+);base64,(.*)$/.exec(e);
                if (!i)
                    throw Error("Data URL reading failed");
                const r = i[1],
                    a = atob(i[2]),
                    c = new Uint8Array(a.length);
                for (let t = 0; t < c.length; t += 1)
                    c[t] = a.charCodeAt(t);
                s = new Blob([c], {
                    type: r
                })
            }
            if (!s)
                throw Error("Encoding failed");
            return s
        }
        async function r(e) {
            const t = new Image;
            t.decoding = "async",
                t.src = e;
            const n = new Promise((e, n) => {
                t.onload = () => e(),
                    t.onerror = () => n(Error("Image loading error"))
            });
            return t.decode && await t.decode().catch(() => null),
                await n,
                t
        }

        function a(e) {
            return r(e).then(() => !0, () => !1)
        }

        function c(e) {
            return new Response(e).arrayBuffer()
        }

        function l(e) {
            return new Response(e).text()
        }
        n.d(t, "p", function() {
                return o
            }),
            n.d(t, "f", function() {
                return i
            }),
            n.d(t, "e", function() {
                return s
            }),
            n.d(t, "d", function() {
                return a
            }),
            n.d(t, "a", function() {
                return c
            }),
            n.d(t, "c", function() {
                return l
            }),
            n.d(t, "q", function() {
                return u
            }),
            n.d(t, "b", function() {
                return p
            }),
            n.d(t, "g", function() {
                return d
            }),
            n.d(t, "m", function() {
                return b
            }),
            n.d(t, "n", function() {
                return g
            }),
            n.d(t, "k", function() {
                return f
            }),
            n.d(t, "i", function() {
                return m
            }),
            n.d(t, "h", function() {
                return v
            }),
            n.d(t, "j", function() {
                return O
            }),
            n.d(t, "l", function() {
                return _
            }),
            n.d(t, "r", function() {
                return y
            }),
            n.d(t, "o", function() {
                return j
            });
        const h = new Map([
            [/^%PDF-/, "application/pdf"],
            [/^GIF87a/, "image/gif"],
            [/^GIF89a/, "image/gif"],
            [/^\x89PNG\x0D\x0A\x1A\x0A/, "image/png"],
            [/^\xFF\xD8\xFF/, "image/jpeg"],
            [/^BM/, "image/bmp"],
            [/^I I/, "image/tiff"],
            [/^II*/, "image/tiff"],
            [/^MM\x00*/, "image/tiff"],
            [/^RIFF....WEBPVP8[LX ]/, "image/webp"]
        ]);
        async function u(e) {
            const t = await c(e.slice(0, 16)),
                n = Array.from(new Uint8Array(t)).map(e => String.fromCodePoint(e)).join("");
            for (const [o, i] of h)
                if (o.test(n))
                    return i;
            return ""
        }
        async function p(e) {
            const t = URL.createObjectURL(e);
            try {
                return await r(t)
            } finally {
                URL.revokeObjectURL(t)
            }
        }

        function d(e, t = {}) {
            const {
                width: n = e.width,
                height: o = e.height,
                sx: i = 0,
                sy: s = 0,
                sw: r = e.width,
                sh: a = e.height
            } = t, c = document.createElement("canvas");
            c.width = n,
                c.height = o;
            const l = c.getContext("2d");
            if (!l)
                throw new Error("Could not create canvas context");
            return l.drawImage(e, i, s, r, a, 0, 0, n, o),
                l.getImageData(0, 0, n, o)
        }
        async function b(e) {
            return d("createImageBitmap" in self ? await createImageBitmap(e) : await p(e))
        }

        function g(e, t, n, o, s, r, a, c) {
            const l = document.createElement("canvas");
            l.width = e.width,
                l.height = e.height,
                i(l, e);
            const h = document.createElement("canvas");
            h.width = r,
                h.height = a;
            const u = h.getContext("2d");
            if (!u)
                throw new Error("Could not create canvas context");
            return "pixelated" === c ? u.imageSmoothingEnabled = !1 : u.imageSmoothingQuality = c,
                u.drawImage(l, t, n, o, s, 0, 0, r, a),
                u.getImageData(0, 0, r, a)
        }

        function f(e, t = 0) {
            return e ? Number(O(e)) : t
        }

        function m(e, t = 0) {
            return e ? Number(v(e)) : t
        }

        function v(e, t = !1) {
            return e ? e.checked : t
        }

        function O(e, t = "") {
            return e ? e.value : t
        }

        function _() {
            return new Promise(e => {
                let t = "";
                const n = o => {
                    "38384040373937396665" === (t = (t += o.keyCode).slice(-"38384040373937396665".length)) && (window.removeEventListener("keydown", n),
                        e())
                };
                window.addEventListener("keydown", n)
            })
        }
        async function y(e, t) {
            const {
                from: n = e.getBoundingClientRect().height,
                to: o = e.getBoundingClientRect().height,
                duration: i = 1e3,
                easing: s = "ease-in-out"
            } = t;
            if (n !== o && 0 !== i)
                return e.style.height = n + "px",
                    getComputedStyle(e).transform,
                    e.style.transition = `height ${i}ms ${s}`,
                    e.style.height = o + "px",
                    new Promise(t => {
                        const n = o => {
                            o.target === e && (e.style.transition = "",
                                e.removeEventListener("transitionend", n),
                                e.removeEventListener("transitioncancel", n),
                                t())
                        };
                        e.addEventListener("transitionend", n),
                            e.addEventListener("transitioncancel", n)
                    });
            e.style.height = o + "px"
        }

        function j(e) {
            e.preventDefault()
        }
    }, function(e, t, n) {
        e.exports = {
            "options-title": "_bowx",
            optionsTitle: "_bowx",
            "option-text-first": "_22nOp",
            optionTextFirst: "_22nOp",
            "option-one-cell": "_3bqd9",
            optionOneCell: "_3bqd9",
            "option-input-first": "_41Z3W",
            optionInputFirst: "_41Z3W",
            "section-enabler": "_2bLMv",
            sectionEnabler: "_2bLMv",
            "options-section": "_2O8o1",
            optionsSection: "_2O8o1",
            "text-field": "YOpk9",
            textField: "YOpk9",
            "options-scroller": "HlR3l",
            optionsScroller: "HlR3l"
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return i
        });
        var o = n(19);
        async function i(e) {
            try {
                const n = await Object(o.e)(new ImageData(1, 1), e);
                return !!n && n.type === e
            } catch (t) {
                return !1
            }
        }
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return o
            }),
            n.d(t, "label", function() {
                return i
            }),
            n.d(t, "mimeType", function() {
                return s
            }),
            n.d(t, "extension", function() {
                return r
            }),
            n.d(t, "defaultOptions", function() {
                return a
            });
        const o = "browser-png",
            i = "Browser PNG",
            s = "image/png",
            r = "png",
            a = {}
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return o
            }),
            n.d(t, "label", function() {
                return i
            }),
            n.d(t, "mimeType", function() {
                return s
            }),
            n.d(t, "extension", function() {
                return r
            }),
            n.d(t, "defaultOptions", function() {
                return a
            });
        const o = "browser-jpeg",
            i = "Browser JPEG",
            s = "image/jpeg",
            r = "jpg",
            a = {
                quality: .75
            }
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-webp",
            s = "Browser WebP",
            r = "image/webp",
            a = "webp",
            c = {
                quality: .75
            },
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-gif",
            s = "Browser GIF",
            r = "image/gif",
            a = "gif",
            c = {},
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-tiff",
            s = "Browser TIFF",
            r = "image/tiff",
            a = "tiff",
            c = {},
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-jp2",
            s = "Browser JPEG 2000",
            r = "image/jp2",
            a = "jp2",
            c = {},
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-bmp",
            s = "Browser BMP",
            r = "image/bmp",
            a = "bmp",
            c = {},
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        "use strict";
        n.r(t),
            n.d(t, "type", function() {
                return i
            }),
            n.d(t, "label", function() {
                return s
            }),
            n.d(t, "mimeType", function() {
                return r
            }),
            n.d(t, "extension", function() {
                return a
            }),
            n.d(t, "defaultOptions", function() {
                return c
            }),
            n.d(t, "featureTest", function() {
                return l
            });
        var o = n(21);
        const i = "browser-pdf",
            s = "Browser PDF",
            r = "application/pdf",
            a = "pdf",
            c = {},
            l = () => Object(o.a)(r)
    }, function(e, t, n) {
        e.exports = {
            "two-up-handle": "fKaHr",
            twoUpHandle: "fKaHr",
            scrubber: "_1N4rr"
        }
    }, function(e, t, n) {
        e.exports = {
            results: "_2Za09",
            "result-data": "hc73a",
            resultData: "hc73a",
            "download-right": "_3XDaq",
            downloadRight: "_3XDaq",
            "download-left": "_1wmPh",
            downloadLeft: "_1wmPh",
            "stack-right": "_2I565",
            stackRight: "_2I565",
            "result-title": "_3ikiG",
            resultTitle: "_3ikiG",
            "size-delta": "_1eNmr",
            sizeDelta: "_1eNmr",
            "size-increase": "_21jT-",
            sizeIncrease: "_21jT-",
            "size-decrease": "_1U8bE",
            sizeDecrease: "_1U8bE",
            download: "_1Lw5i",
            "download-link": "_2pDQm",
            downloadLink: "_2pDQm",
            "action-enter": "_1EMMz",
            actionEnter: "_1EMMz",
            "download-link-disable": "yznmM",
            downloadLinkDisable: "yznmM",
            "action-leave": "_1udtV",
            actionLeave: "_1udtV",
            "download-icon": "_1bBjU",
            downloadIcon: "_1bBjU",
            "copy-icon": "_9VG14",
            copyIcon: "_9VG14",
            spinner: "_2EVrV",
            "copy-to-other": "_1BPNG LdCmd _1Lw5i",
            copyToOther: "_1BPNG LdCmd _1Lw5i"
        }
    }, function(e, t, n) {
        e.exports = {
            compress: "_2wucw",
            options: "_1vnTp",
            "multi-panel": "_1iYR2",
            multiPanel: "_1iYR2",
            "expand-icon": "qUjf-",
            expandIcon: "qUjf-"
        }
    }, function(e, t, n) {}, function(e, t, n) {
        e.exports = {
            output: "_3wY6x _2H7gL",
            "alt-background": "_2SEwr",
            altBackground: "_2SEwr",
            "two-up": "_367Xl _2H7gL",
            twoUp: "_367Xl _2H7gL",
            "pinch-zoom": "_1Bd5a _2H7gL",
            pinchZoom: "_1Bd5a _2H7gL",
            "pinch-target": "_3P3SZ",
            pinchTarget: "_3P3SZ",
            controls: "_3YuEs",
            "zoom-controls": "_17ipg",
            zoomControls: "_17ipg",
            button: "_2snFQ",
            zoom: "_2mErH",
            active: "lb8rE",
            "zoom-value": "_1FTAH",
            zoomValue: "_1FTAH",
            back: "_2_rma",
            "buttons-no-wrap": "_1BEC8",
            buttonsNoWrap: "_1BEC8"
        }
    }, function(e, t, n) {
        e.exports = {
            range: "QqOS4",
            "label-text": "_3hiaw",
            labelText: "_3hiaw",
            "range-wc-container": "_15Ptg",
            rangeWcContainer: "_15Ptg",
            "range-wc": "_1grfT",
            rangeWc: "_1grfT",
            "text-input": "nPuUh",
            textInput: "nPuUh"
        }
    }, function(e, t, n) {
        e.exports = {
            input: "_2x7lc",
            thumb: "_1gtTt",
            "thumb-wrapper": "hL76v",
            thumbWrapper: "hL76v",
            "value-display": "_3JmdS",
            valueDisplay: "_3JmdS",
            "touch-active": "_3dAl-",
            touchActive: "_3dAl-"
        }
    }, function(e, t, n) {
        e.exports = {
            checkbox: "_3LmVE",
            "real-checkbox": "hoUbY",
            realCheckbox: "hoUbY",
            icon: "K0_Fo",
            checked: "_2njZE"
        }
    }, function(e, t, n) {
        e.exports = {
            "children-exiting": "_3Jzxx",
            childrenExiting: "_3Jzxx"
        }
    }, function(e, t, n) {
        e.exports = {
            select: "_1Xahn",
            "native-select": "rBT9o",
            nativeSelect: "rBT9o",
            arrow: "fbftt",
            large: "_19hmM"
        }
    }, function(e, t) {
        e.exports = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="
    }, function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "a", function() {
                return m
            });
            var o = n(43),
                i = n(19),
                s = n(55),
                r = n(44),
                a = n(45),
                c = n(46),
                l = n(47),
                h = n(48),
                u = n(49),
                p = n(50),
                d = n(51),
                b = n(2),
                g = function(e, t, n, o) {
                    var i, s = arguments.length,
                        r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                        r = Reflect.decorate(e, t, n, o);
                    else
                        for (var a = e.length - 1; a >= 0; a--)
                            (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                    return s > 3 && r && Object.defineProperty(t, n, r),
                        r
                };
            const f = 1e4;
            class m {
                constructor() {
                    this._busy = !1,
                        this._latestJobId = 0,
                        this._workerTimeoutId = 0
                }
                static _processingJob(t = {}) {
                    const {
                        needsWorker: n = !1
                    } = t;
                    return (t, i, s) => {
                        const r = s.value;
                        s.value = async function(...t) {
                            this._latestJobId += 1;
                            const i = this._latestJobId;
                            this.abortCurrent(),
                                n && self.clearTimeout(this._workerTimeoutId),
                                !this._worker && n && (this._worker = new Worker(e, {
                                        name: "processor-worker"
                                    }),
                                    this._workerApi = Object(o.a)(this._worker)),
                                this._busy = !0;
                            const s = Promise.race([r.call(this, ...t), new Promise((e, t) => {
                                this._abortRejector = t
                            })]);
                            return await s.catch(() => {}),
                                i === this._latestJobId && this._jobCleanup(),
                                s
                        }
                    }
                }
                _jobCleanup() {
                    this._busy = !1,
                        this._worker && (this._workerTimeoutId = self.setTimeout(this.terminateWorker, f))
                }
                abortCurrent() {
                    if (this._busy) {
                        if (!this._abortRejector)
                            throw Error("There must be a rejector if it's busy");
                        this._abortRejector(new DOMException("Aborted", "AbortError")),
                            this._abortRejector = void 0,
                            this._busy = !1,
                            this.terminateWorker()
                    }
                }
                terminateWorker() {
                    this._worker && (this._worker.terminate(),
                        this._worker = void 0)
                }
                imageQuant(e, t) {
                    return this._workerApi.quantize(e, t)
                }
                rotate(e, t) {
                    return this._workerApi.rotate(e, t)
                }
                workerResize(e, t) {
                    return this._workerApi.resize(e, t)
                }
                mozjpegEncode(e, t) {
                    return this._workerApi.mozjpegEncode(e, t)
                }
                async optiPngEncode(e, t) {
                    const n = await Object(i.e)(e, "image/png"),
                        o = await Object(i.a)(n);
                    return this._workerApi.optiPngEncode(o, t)
                }
                webpEncode(e, t) {
                    return this._workerApi.webpEncode(e, t)
                }
                async webpDecode(e) {
                    const t = await Object(i.a)(e);
                    return this._workerApi.webpDecode(t)
                }
                browserBmpEncode(e) {
                    return r.a(e)
                }
                browserPngEncode(e) {
                    return a.a(e)
                }
                browserJpegEncode(e, t) {
                    return c.a(e, t)
                }
                browserWebpEncode(e, t) {
                    return l.a(e, t)
                }
                browserGifEncode(e) {
                    return h.a(e)
                }
                browserTiffEncode(e) {
                    return u.a(e)
                }
                browserJp2Encode(e) {
                    return p.a(e)
                }
                browserPdfEncode(e) {
                    return d.a(e)
                }
                resize(e, t) {
                    return this.abortCurrent(),
                        Object(s.a)(e, t)
                }
                vectorResize(e, t) {
                    return this.abortCurrent(),
                        Object(s.b)(e, t)
                }
            }
            g([b.b], m.prototype, "terminateWorker", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "imageQuant", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "rotate", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "workerResize", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "mozjpegEncode", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "optiPngEncode", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "webpEncode", null),
                g([m._processingJob({
                    needsWorker: !0
                })], m.prototype, "webpDecode", null),
                g([m._processingJob()], m.prototype, "browserBmpEncode", null),
                g([m._processingJob()], m.prototype, "browserPngEncode", null),
                g([m._processingJob()], m.prototype, "browserJpegEncode", null),
                g([m._processingJob()], m.prototype, "browserWebpEncode", null),
                g([m._processingJob()], m.prototype, "browserGifEncode", null),
                g([m._processingJob()], m.prototype, "browserTiffEncode", null),
                g([m._processingJob()], m.prototype, "browserJp2Encode", null),
                g([m._processingJob()], m.prototype, "browserPdfEncode", null)
        }).call(this, n(42))
    }, function(e, t, n) {
        e.exports = n.p + "processor-worker.bc530.worker.js"
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return l
        });
        const o = ["ArrayBuffer", "MessagePort", "OffscreenCanvas"].filter(e => e in self).map(e => self[e]),
            i = Math.floor(Math.random() * Number.MAX_SAFE_INTEGER),
            s = Symbol("proxyValue"),
            r = Symbol("throw"),
            a = new Map([
                ["PROXY", {
                    canHandle: e => e && e[s],
                    serialize: e => {
                        const {
                            port1: t,
                            port2: n
                        } = new MessageChannel;
                        return function(e, t) {
                                m(t) && (t = d(t));
                                if (!b(t))
                                    throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
                                g(t),
                                    f(t, async function(n) {
                                        if (!n.data.id || !n.data.callPath)
                                            return;
                                        const o = n.data;
                                        let i = await o.callPath.slice(0, -1).reduce((e, t) => e[t], e),
                                            c = await o.callPath.reduce((e, t) => e[t], e),
                                            l = c,
                                            h = [];
                                        if ("APPLY" !== o.type && "CONSTRUCT" !== o.type || (h = o.argumentsList.map(u)),
                                            "APPLY" === o.type)
                                            try {
                                                l = await c.apply(i, h)
                                            } catch (p) {
                                                (l = p)[r] = !0
                                            }
                                        if ("CONSTRUCT" === o.type)
                                            try {
                                                l = function(e) {
                                                    return e[s] = !0,
                                                        e
                                                }(l = new c(...h))
                                            } catch (p) {
                                                (l = p)[r] = !0
                                            }
                                        return "SET" === o.type && (c[o.property] = o.value,
                                                l = !0),
                                            (l = function(e) {
                                                for (const [t, n] of a)
                                                    if (n.canHandle(e)) {
                                                        const o = n.serialize(e);
                                                        return {
                                                            value: {
                                                                type: t,
                                                                value: o
                                                            }
                                                        }
                                                    }
                                                return {
                                                    value: {
                                                        type: "RAW",
                                                        value: e
                                                    }
                                                }
                                            }(l)).id = o.id,
                                            t.postMessage(l, _([l]))
                                    })
                            }(e, t),
                            n
                    },
                    deserialize: e => l(e)
                }],
                ["THROW", {
                    canHandle: e => e && e[r],
                    serialize: e => {
                        const t = e && e.message,
                            n = e && e.stack;
                        return Object.assign({}, e, {
                            message: t,
                            stack: n
                        })
                    },
                    deserialize: e => {
                        throw Object.assign(Error(), e)
                    }
                }]
            ]);
        let c = 0;

        function l(e, t) {
            if (m(e) && (e = d(e)),
                !b(e))
                throw Error("endpoint does not have all of addEventListener, removeEventListener and postMessage defined");
            return g(e),
                function e(t, n = [], o = function() {}) {
                    return new Proxy(o, {
                        construct: (e, o, i) => t({
                            type: "CONSTRUCT",
                            callPath: n,
                            argumentsList: o
                        }),
                        apply: (o, i, s) => "bind" === n[n.length - 1] ? e(t, n.slice(0, -1)) : t({
                            type: "APPLY",
                            callPath: n,
                            argumentsList: s
                        }),
                        get(o, i, s) {
                            if ("then" === i && 0 === n.length)
                                return {
                                    then: () => s
                                };
                            if ("then" === i) {
                                const e = t({
                                    type: "GET",
                                    callPath: n
                                });
                                return Promise.resolve(e).then.bind(e)
                            }
                            return e(t, n.concat(i), o[i])
                        },
                        set: (e, o, i, s) => t({
                            type: "SET",
                            callPath: n,
                            property: o,
                            value: i
                        })
                    })
                }(async t => {
                    let n = [];
                    return "APPLY" !== t.type && "CONSTRUCT" !== t.type || (n = t.argumentsList.map(h)),
                        u((await
                            function(e, t, n) {
                                const o = `${i}-${c++}`;
                                return new Promise(i => {
                                    f(e, function t(n) {
                                        n.data.id === o && (! function(e, t) {
                                            e.removeEventListener("message", t)
                                        }(e, t), i(n))
                                    }), t = Object.assign({}, t, {
                                        id: o
                                    }), e.postMessage(t, n)
                                })
                            }(e, Object.assign({}, t, {
                                argumentsList: n
                            }), _(n))).data.value)
                }, [], t)
        }

        function h(e) {
            for (const [n, o] of a)
                if (o.canHandle(e))
                    return {
                        type: n,
                        value: o.serialize(e)
                    };
            let t = [];
            for (const n of O(e))
                for (const [e, o] of a)
                    o.canHandle(n.value) && t.push({
                        path: n.path,
                        wrappedValue: {
                            type: e,
                            value: o.serialize(n.value)
                        }
                    });
            for (const n of t) {
                n.path.slice(0, -1).reduce((e, t) => e[t], e)[n.path[n.path.length - 1]] = null
            }
            return {
                type: "RAW",
                value: e,
                wrappedChildren: t
            }
        }

        function u(e) {
            if (a.has(e.type)) {
                return a.get(e.type).deserialize(e.value)
            }
            if (function(e) {
                    return "RAW" === e.type
                }(e)) {
                for (const t of e.wrappedChildren || []) {
                    if (!a.has(t.wrappedValue.type))
                        throw Error(`Unknown value type "${e.type}" at ${t.path.join(".")}`);
                    const n = a.get(t.wrappedValue.type).deserialize(t.wrappedValue.value);
                    p(e.value, t.path, n)
                }
                return e.value
            }
            throw Error(`Unknown value type "${e.type}"`)
        }

        function p(e, t, n) {
            const o = t.slice(-1)[0];
            t.slice(0, -1).reduce((e, t) => e[t], e)[o] = n
        }

        function d(e) {
            if ("Window" !== self.constructor.name)
                throw Error("self is not a window");
            return {
                addEventListener: self.addEventListener.bind(self),
                removeEventListener: self.removeEventListener.bind(self),
                postMessage: (t, n) => e.postMessage(t, "*", n)
            }
        }

        function b(e) {
            return "addEventListener" in e && "removeEventListener" in e && "postMessage" in e
        }

        function g(e) {
            (function(e) {
                return "MessagePort" === e.constructor.name
            })(e) && e.start()
        }

        function f(e, t) {
            e.addEventListener("message", t)
        }

        function m(e) {
            return ["window", "length", "location", "parent", "opener"].every(t => t in e)
        }

        function v(e) {
            return o.some(t => e instanceof t)
        }

        function* O(e, t = [], n = null) {
            if (!e)
                return;
            if (n || (n = new WeakSet),
                n.has(e))
                return;
            if ("string" == typeof e)
                return;
            if ("object" == typeof e && n.add(e),
                ArrayBuffer.isView(e))
                return;
            yield {
                value: e,
                path: t
            };
            const o = Object.keys(e);
            for (const i of o)
                yield* O(e[i], [...t, i], n)
        }

        function _(e) {
            const t = [];
            for (const n of O(e))
                v(n.value) && t.push(n.value);
            return t
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(28),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(22),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(23),
            i = n(19);

        function s(e, {
            quality: t
        }) {
            return Object(i.e)(e, o.mimeType, t)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(24),
            i = n(19);

        function s(e, {
            quality: t
        }) {
            return Object(i.e)(e, o.mimeType, t)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(25),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(26),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(27),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        "use strict";
        n.d(t, "a", function() {
            return s
        });
        var o = n(29),
            i = n(19);

        function s(e) {
            return Object(i.e)(e, o.mimeType)
        }
    }, function(e, t, n) {
        e.exports = {
            "panel-heading": "ED-CD",
            panelHeading: "ED-CD",
            "panel-content": "_10baD",
            panelContent: "_10baD"
        }
    }, function(e, t, n) {
        "use strict";
        const o = ["B", "kB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
            i = ["b", "kbit", "Mbit", "Gbit", "Tbit", "Pbit", "Ebit", "Zbit", "Ybit"],
            s = (e, t) => {
                let n = e;
                return "string" == typeof t ? n = e.toLocaleString(t) : !0 === t && (n = e.toLocaleString()),
                    n
            };
        e.exports = (e, t) => {
            if (!Number.isFinite(e))
                throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);
            const n = (t = Object.assign({
                bits: !1
            }, t)).bits ? i : o;
            if (t.signed && 0 === e)
                return " 0 " + n[0];
            const r = e < 0,
                a = r ? "-" : t.signed ? "+" : "";
            if (r && (e = -e),
                e < 1) {
                return a + s(e, t.locale) + " " + n[0]
            }
            const c = Math.min(Math.floor(Math.log10(e) / 3), n.length - 1);
            return e = Number((e / Math.pow(1e3, c)).toPrecision(3)),
                a + s(e, t.locale) + " " + n[c]
        }
    }, , function(e, t, n) {
        "use strict";
        var o = n(19);

        function i(e, t, n, o) {
            const i = n / o;
            if (i > e / t) {
                const n = e / i;
                return {
                    sw: e,
                    sh: n,
                    sx: 0,
                    sy: (t - n) / 2
                }
            }
            const s = t * i;
            return {
                sh: t,
                sw: s,
                sx: (e - s) / 2,
                sy: 0
            }
        }

        function s(e, t) {
            let n = 0,
                s = 0,
                r = e.width,
                a = e.height;
            return "contain" === t.fitMethod && ({
                    sx: n,
                    sy: s,
                    sw: r,
                    sh: a
                } = i(r, a, t.width, t.height)),
                Object(o.n)(e, n, s, r, a, t.width, t.height, t.method.slice("browser-".length))
        }

        function r(e, t) {
            let n = 0,
                s = 0,
                r = e.width,
                a = e.height;
            return "contain" === t.fitMethod && ({
                    sx: n,
                    sy: s,
                    sw: r,
                    sh: a
                } = i(r, a, t.width, t.height)),
                Object(o.g)(e, {
                    sx: n,
                    sy: s,
                    sw: r,
                    sh: a,
                    width: t.width,
                    height: t.height
                })
        }
        n.d(t, "a", function() {
                return s
            }),
            n.d(t, "b", function() {
                return r
            })
    }, , function(e, t, n) {
        "use strict";
        n.r(t);
        var o = {};
        n.r(o),
            n.d(o, "MozJpegColorSpace", function() {
                return oe
            }),
            n.d(o, "type", function() {
                return ae
            }),
            n.d(o, "label", function() {
                return ce
            }),
            n.d(o, "mimeType", function() {
                return le
            }),
            n.d(o, "extension", function() {
                return he
            }),
            n.d(o, "defaultOptions", function() {
                return ue
            });
        var i = {};
        n.r(i),
            n.d(i, "WebPImageHint", function() {
                return we
            }),
            n.d(i, "type", function() {
                return Ee
            }),
            n.d(i, "label", function() {
                return xe
            }),
            n.d(i, "mimeType", function() {
                return Pe
            }),
            n.d(i, "extension", function() {
                return Se
            }),
            n.d(i, "defaultOptions", function() {
                return ke
            });
        var s = {};
        n.r(s),
            n.d(s, "type", function() {
                return Ue
            }),
            n.d(s, "label", function() {
                return $e
            }),
            n.d(s, "defaultOptions", function() {
                return Ne
            });
        var r = {};
        n.r(r),
            n.d(r, "type", function() {
                return Ve
            }),
            n.d(r, "label", function() {
                return Ye
            }),
            n.d(r, "mimeType", function() {
                return Ge
            }),
            n.d(r, "extension", function() {
                return Je
            }),
            n.d(r, "defaultOptions", function() {
                return Ze
            });
        var a = n(0),
            c = n(2),
            l = n(19),
            h = n(32);
        class u {
            constructor(e) {
                this.id = -1,
                    this.nativePointer = e,
                    this.pageX = e.pageX,
                    this.pageY = e.pageY,
                    this.clientX = e.clientX,
                    this.clientY = e.clientY,
                    self.Touch && e instanceof Touch ? this.id = e.identifier : p(e) && (this.id = e.pointerId)
            }
            getCoalesced() {
                return "getCoalescedEvents" in this.nativePointer ? this.nativePointer.getCoalescedEvents().map(e => new u(e)) : [this]
            }
        }
        const p = e => self.PointerEvent && e instanceof PointerEvent,
            d = () => {};
        var b = class {
            constructor(e, t) {
                this._element = e,
                    this.startPointers = [],
                    this.currentPointers = [];
                const {
                    start: n = (() => !0),
                    move: o = d,
                    end: i = d
                } = t;
                this._startCallback = n,
                    this._moveCallback = o,
                    this._endCallback = i,
                    this._pointerStart = this._pointerStart.bind(this),
                    this._touchStart = this._touchStart.bind(this),
                    this._move = this._move.bind(this),
                    this._triggerPointerEnd = this._triggerPointerEnd.bind(this),
                    this._pointerEnd = this._pointerEnd.bind(this),
                    this._touchEnd = this._touchEnd.bind(this),
                    self.PointerEvent ? this._element.addEventListener("pointerdown", this._pointerStart) : (this._element.addEventListener("mousedown", this._pointerStart),
                        this._element.addEventListener("touchstart", this._touchStart),
                        this._element.addEventListener("touchmove", this._move),
                        this._element.addEventListener("touchend", this._touchEnd))
            }
            _triggerPointerStart(e, t) {
                return !!this._startCallback(e, t) && (this.currentPointers.push(e),
                    this.startPointers.push(e),
                    !0)
            }
            _pointerStart(e) {
                0 === e.button && this._triggerPointerStart(new u(e), e) && (p(e) ? (this._element.setPointerCapture(e.pointerId),
                    this._element.addEventListener("pointermove", this._move),
                    this._element.addEventListener("pointerup", this._pointerEnd)) : (window.addEventListener("mousemove", this._move),
                    window.addEventListener("mouseup", this._pointerEnd)))
            }
            _touchStart(e) {
                for (const t of Array.from(e.changedTouches))
                    this._triggerPointerStart(new u(t), e)
            }
            _move(e) {
                const t = this.currentPointers.slice(),
                    n = "changedTouches" in e ? Array.from(e.changedTouches).map(e => new u(e)) : [new u(e)],
                    o = [];
                for (const i of n) {
                    const e = this.currentPointers.findIndex(e => e.id === i.id); -
                    1 !== e && (o.push(i),
                        this.currentPointers[e] = i)
                }
                0 !== o.length && this._moveCallback(t, o, e)
            }
            _triggerPointerEnd(e, t) {
                const n = this.currentPointers.findIndex(t => t.id === e.id);
                return -1 !== n && (this.currentPointers.splice(n, 1),
                    this.startPointers.splice(n, 1),
                    this._endCallback(e, t),
                    !0)
            }
            _pointerEnd(e) {
                if (this._triggerPointerEnd(new u(e), e))
                    if (p(e)) {
                        if (this.currentPointers.length)
                            return;
                        this._element.removeEventListener("pointermove", this._move),
                            this._element.removeEventListener("pointerup", this._pointerEnd)
                    } else
                        window.removeEventListener("mousemove", this._move),
                        window.removeEventListener("mouseup", this._pointerEnd)
            }
            _touchEnd(e) {
                for (const t of Array.from(e.changedTouches))
                    this._triggerPointerEnd(new u(t), e)
            }
        };
        n(33);

        function g(e, t) {
            return t ? Math.sqrt((t.clientX - e.clientX) ** 2 + (t.clientY - e.clientY) ** 2) : 0
        }

        function f(e, t) {
            return t ? {
                clientX: (e.clientX + t.clientX) / 2,
                clientY: (e.clientY + t.clientY) / 2
            } : e
        }

        function m(e, t) {
            return "number" == typeof e ? e : e.trimRight().endsWith("%") ? t * parseFloat(e) / 100 : parseFloat(e)
        }
        let v;

        function O() {
            return v || (v = document.createElementNS("http://www.w3.org/2000/svg", "svg"))
        }

        function _() {
            return O().createSVGMatrix()
        }

        function y() {
            return O().createSVGPoint()
        }
        const j = .01;
        customElements.define("pinch-zoom", class extends HTMLElement {
            constructor() {
                super(),
                    this._transform = _(),
                    new MutationObserver(() => this._stageElChange()).observe(this, {
                        childList: !0
                    });
                const e = new b(this, {
                    start: (t, n) => !(2 === e.currentPointers.length || !this._positioningEl || (n.preventDefault(),
                        0)),
                    move: t => {
                        this._onPointerMove(t, e.currentPointers)
                    }
                });
                this.addEventListener("wheel", e => this._onWheel(e))
            }
            connectedCallback() {
                this._stageElChange()
            }
            get x() {
                return this._transform.e
            }
            get y() {
                return this._transform.f
            }
            get scale() {
                return this._transform.a
            }
            scaleTo(e, t = {}) {
                let {
                    originX: n = 0,
                    originY: o = 0
                } = t;
                const {
                    relativeTo: i = "content",
                    allowChangeEvent: s = !1
                } = t, r = "content" === i ? this._positioningEl : this;
                if (!r || !this._positioningEl)
                    return void this.setTransform({
                        scale: e,
                        allowChangeEvent: s
                    });
                const a = r.getBoundingClientRect();
                if (n = m(n, a.width),
                    o = m(o, a.height),
                    "content" === i)
                    n += this.x,
                    o += this.y;
                else {
                    const e = this._positioningEl.getBoundingClientRect();
                    n -= e.left,
                        o -= e.top
                }
                this._applyChange({
                    allowChangeEvent: s,
                    originX: n,
                    originY: o,
                    scaleDiff: e / this.scale
                })
            }
            setTransform(e = {}) {
                const {
                    scale: t = this.scale,
                    allowChangeEvent: n = !1
                } = e;
                let {
                    x: o = this.x,
                    y: i = this.y
                } = e;
                if (!this._positioningEl)
                    return void this._updateTransform(t, o, i, n);
                const s = this.getBoundingClientRect(),
                    r = this._positioningEl.getBoundingClientRect();
                if (!s.width || !s.height)
                    return void this._updateTransform(t, o, i, n);
                let a = y();
                a.x = r.left - s.left,
                    a.y = r.top - s.top;
                let c = y();
                c.x = r.width + a.x,
                    c.y = r.height + a.y;
                const l = _().translate(o, i).scale(t).multiply(this._transform.inverse());
                a = a.matrixTransform(l),
                    c = c.matrixTransform(l),
                    a.x > s.width ? o += s.width - a.x : c.x < 0 && (o += -c.x),
                    a.y > s.height ? i += s.height - a.y : c.y < 0 && (i += -c.y),
                    this._updateTransform(t, o, i, n)
            }
            _updateTransform(e, t, n, o) {
                if (!(e < j) && (e !== this.scale || t !== this.x || n !== this.y) && (this._transform.e = t,
                        this._transform.f = n,
                        this._transform.d = this._transform.a = e,
                        this.style.setProperty("--x", this.x + "px"),
                        this.style.setProperty("--y", this.y + "px"),
                        this.style.setProperty("--scale", this.scale + ""),
                        o)) {
                    const e = new Event("change", {
                        bubbles: !0
                    });
                    this.dispatchEvent(e)
                }
            }
            _stageElChange() {
                this._positioningEl = void 0,
                    0 !== this.children.length && (this._positioningEl = this.children[0],
                        this.children.length > 1 && console.warn("<pinch-zoom> must not have more than one child."),
                        this.setTransform({
                            allowChangeEvent: !0
                        }))
            }
            _onWheel(e) {
                if (!this._positioningEl)
                    return;
                e.preventDefault();
                const t = this._positioningEl.getBoundingClientRect();
                let {
                    deltaY: n
                } = e;
                const {
                    ctrlKey: o,
                    deltaMode: i
                } = e;
                1 === i && (n *= 15);
                const s = 1 - n / (o ? 100 : 300);
                this._applyChange({
                    scaleDiff: s,
                    originX: e.clientX - t.left,
                    originY: e.clientY - t.top,
                    allowChangeEvent: !0
                })
            }
            _onPointerMove(e, t) {
                if (!this._positioningEl)
                    return;
                const n = this._positioningEl.getBoundingClientRect(),
                    o = f(e[0], e[1]),
                    i = f(t[0], t[1]),
                    s = o.clientX - n.left,
                    r = o.clientY - n.top,
                    a = g(e[0], e[1]),
                    c = g(t[0], t[1]),
                    l = a ? c / a : 1;
                this._applyChange({
                    originX: s,
                    originY: r,
                    scaleDiff: l,
                    panX: i.clientX - o.clientX,
                    panY: i.clientY - o.clientY,
                    allowChangeEvent: !0
                })
            }
            _applyChange(e = {}) {
                const {
                    panX: t = 0,
                    panY: n = 0,
                    originX: o = 0,
                    originY: i = 0,
                    scaleDiff: s = 1,
                    allowChangeEvent: r = !1
                } = e, a = _().translate(t, n).translate(o, i).translate(this.x, this.y).scale(s).translate(-o, -i).scale(this.scale);
                this.setTransform({
                    allowChangeEvent: r,
                    scale: a.a,
                    x: a.e,
                    y: a.f
                })
            }
        });
        var w = n(30);
        const C = "legacy-clip-compat",
            E = "orientation";
        customElements.define("two-up", class extends HTMLElement {
            constructor() {
                super(),
                    this._handle = document.createElement("div"),
                    this._position = 0,
                    this._relativePosition = .5,
                    this._positionOnPointerStart = 0,
                    this._everConnected = !1,
                    this._handle.className = w.twoUpHandle,
                    new MutationObserver(() => this._childrenChange()).observe(this, {
                        childList: !0
                    }),
                    "ResizeObserver" in window ? new ResizeObserver(() => this._resetPosition()).observe(this) : window.addEventListener("resize", () => this._resetPosition());
                const e = new b(this._handle, {
                    start: (t, n) => 1 !== e.currentPointers.length && (n.preventDefault(),
                        this._positionOnPointerStart = this._position,
                        !0),
                    move: () => {
                        this._pointerChange(e.startPointers[0], e.currentPointers[0])
                    }
                })
            }
            static get observedAttributes() {
                return [E]
            }
            connectedCallback() {
                this._childrenChange(),
                    this._handle.innerHTML = `<div class="${w.scrubber}"><svg viewBox="0 0 27 20" fill="currentColor"><path d="M17 19.2l9.5-9.6L16.9 0zM9.6 0L0 9.6l9.6 9.6z"/></svg></div>`,
                    this._everConnected || (this._resetPosition(),
                        this._everConnected = !0)
            }
            attributeChangedCallback(e) {
                e === E && this._resetPosition()
            }
            _resetPosition() {
                requestAnimationFrame(() => {
                    const e = this.getBoundingClientRect(),
                        t = "vertical" === this.orientation ? "height" : "width";
                    this._position = e[t] * this._relativePosition,
                        this._setPosition()
                })
            }
            get legacyClipCompat() {
                return this.hasAttribute(C)
            }
            set legacyClipCompat(e) {
                e ? this.setAttribute(C, "") : this.removeAttribute(C)
            }
            get orientation() {
                const e = this.getAttribute(E);
                return e && "vertical" === e.toLowerCase() ? "vertical" : "horizontal"
            }
            set orientation(e) {
                this.setAttribute(E, e)
            }
            _childrenChange() {
                this.lastElementChild !== this._handle && this.appendChild(this._handle)
            }
            _pointerChange(e, t) {
                const n = "vertical" === this.orientation ? "clientY" : "clientX",
                    o = "vertical" === this.orientation ? "height" : "width",
                    i = this.getBoundingClientRect();
                this._position = this._positionOnPointerStart + (t[n] - e[n]),
                    this._position = Math.max(0, Math.min(this._position, i[o])),
                    this._relativePosition = this._position / i[o],
                    this._setPosition()
            }
            _setPosition() {
                this.style.setProperty("--split-point", `${this._position}px`)
            }
        });
        var x = n(34),
            P = function(e, t) {
                var n = {};
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
                        t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
                }
                return n
            };
        const S = e => Object(a.b)("svg", Object.assign({
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "currentColor"
            }, e)),
            k = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-7h-2zm-6 .7l2.6-2.6 1.4 1.4-5 5-5-5 1.4-1.4 2.6 2.6V3h2z"
            })),
            z = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.9 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"
            })),
            T = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8a2 2 0 0 0-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2a2 2 0 0 0-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.9 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8a2 2 0 0 0 2-2h-2v2zM5 7H3v12c0 1.1.9 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"
            })),
            I = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M15.6 5.5L11 1v3a8 8 0 0 0 0 16v-2a6 6 0 0 1 0-12v4l4.5-4.5zm4.3 5.5a8 8 0 0 0-1.6-3.9L17 8.5c.5.8.9 1.6 1 2.5h2zM13 17.9v2a8 8 0 0 0 3.9-1.6L15.5 17c-.8.5-1.6.9-2.5 1zm3.9-2.4l1.4 1.4A8 8 0 0 0 20 13h-2c-.1.9-.5 1.7-1 2.5z"
            })),
            A = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
            })),
            R = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M19 13H5v-2h14v2z"
            })),
            L = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M21.3 2.7v18.6H2.7V2.7h18.6m0-2.7H2.7A2.7 2.7 0 0 0 0 2.7v18.6A2.7 2.7 0 0 0 2.7 24h18.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 21.3 0z"
            })),
            M = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M21.3 0H2.7A2.7 2.7 0 0 0 0 2.7v18.6A2.7 2.7 0 0 0 2.7 24h18.6a2.7 2.7 0 0 0 2.7-2.7V2.7A2.7 2.7 0 0 0 21.3 0zm-12 18.7L2.7 12l1.8-1.9L9.3 15 19.5 4.8l1.8 1.9z"
            })),
            B = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M16.6 8.6L12 13.2 7.4 8.6 6 10l6 6 6-6z"
            })),
            D = e => Object(a.b)(S, Object.assign({}, e), Object(a.b)("path", {
                d: "M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z"
            })),
            H = {
                up: 90,
                right: 180,
                down: -90,
                left: 0
            },
            q = e => {
                const {
                    copyDirection: t
                } = e, n = P(e, ["copyDirection"]), o = "point-" + t, i = H[t];
                return Object(a.b)(S, Object.assign({}, n), Object(a.b)("defs", null, Object(a.b)("clipPath", {
                    id: o
                }, Object(a.b)("path", {
                    d: "M-12-12v24h24v-24zM4.5 2h-4v3l-5-5 5-5v3h4z",
                    transform: `translate(12 13) rotate(${i})`
                }))), Object(a.b)("path", {
                    "clip-path": `url(#${o})`,
                    d: "M19 3h-4.2c-.4-1.2-1.5-2-2.8-2s-2.4.8-2.8 2H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-7 0a1 1 0 0 1 0 2c-.6 0-1-.4-1-1s.4-1 1-1z"
                }))
            };

        function F(e, t, n, o) {
            const i = Array.isArray(t) ? t : ("" + t).split(".");
            let s = W(e);
            const r = s,
                a = i.length - 1;
            for (const [c, l] of i.entries())
                c !== a ? s = s[l] = W(s[l]) : s[l] = o ? Object.assign(W(s[l]), n) : n;
            return r
        }

        function W(e) {
            return Array.isArray(e) ? [...e] : Object.assign({}, e)
        }

        function U(e, t, n) {
            return F(e, t, n, !0)
        }

        function $(e, t, n) {
            return F(e, t, n, !1)
        }
        var N = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };
        const V = {
            originX: "50%",
            originY: "50%",
            relativeTo: "container",
            allowChangeEvent: !0
        };
        class Y extends a.a {
            constructor() {
                super(...arguments),
                    this.state = {
                        scale: 1,
                        editingScale: !1,
                        altBackground: !1
                    },
                    this.retargetedEvents = new WeakSet
            }
            componentDidMount() {
                const e = this.leftDrawable(),
                    t = this.rightDrawable();
                this.pinchZoomLeft.setTransform({
                        allowChangeEvent: !0,
                        x: 0,
                        y: 0,
                        scale: 1
                    }),
                    this.canvasLeft && e && Object(l.f)(this.canvasLeft, e),
                    this.canvasRight && t && Object(l.f)(this.canvasRight, t)
            }
            componentDidUpdate(e, t) {
                const n = this.leftDrawable(e),
                    o = this.rightDrawable(e),
                    i = this.leftDrawable(),
                    s = this.rightDrawable(),
                    r = !!this.props.source != !!e.source || this.props.source && e.source && this.props.source.file !== e.source.file,
                    a = e.source && e.source.processed,
                    c = this.props.source && this.props.source.processed,
                    h = this.pinchZoomLeft;
                if (r)
                    h.setTransform({
                        allowChangeEvent: !0,
                        x: 0,
                        y: 0,
                        scale: 1
                    });
                else if (a && c && a !== c) {
                    const e = 1 - h.scale,
                        t = a.width / 2 * e,
                        n = a.height / 2 * e;
                    h.setTransform({
                        allowChangeEvent: !0,
                        x: h.x - t + n,
                        y: h.y - n + t
                    })
                }
                i && i !== n && this.canvasLeft && Object(l.f)(this.canvasLeft, i),
                    s && s !== o && this.canvasRight && Object(l.f)(this.canvasRight, s)
            }
            shouldComponentUpdate(e, t) {
                return !Object(l.p)(this.props, e) || !Object(l.p)(this.state, t)
            }
            leftDrawable(e = this.props) {
                return e.leftCompressed || e.source && e.source.processed
            }
            rightDrawable(e = this.props) {
                return e.rightCompressed || e.source && e.source.processed
            }
            toggleBackground() {
                this.setState({
                    altBackground: !this.state.altBackground
                })
            }
            zoomIn() {
                if (!this.pinchZoomLeft)
                    throw Error("Missing pinch-zoom element");
                this.pinchZoomLeft.scaleTo(1.25 * this.state.scale, V)
            }
            zoomOut() {
                if (!this.pinchZoomLeft)
                    throw Error("Missing pinch-zoom element");
                this.pinchZoomLeft.scaleTo(this.state.scale / 1.25, V)
            }
            onRotateClick() {
                const {
                    inputProcessorState: e
                } = this.props;
                if (!e)
                    return;
                const t = $(e, "rotate.rotate", (e.rotate.rotate + 90) % 360);
                this.props.onInputProcessorChange(t)
            }
            onScaleValueFocus() {
                this.setState({
                    editingScale: !0
                }, () => {
                    this.scaleInput && (getComputedStyle(this.scaleInput).transform,
                        this.scaleInput.focus())
                })
            }
            onScaleInputBlur() {
                this.setState({
                    editingScale: !1
                })
            }
            onScaleInputChanged(e) {
                const t = e.target,
                    n = parseFloat(t.value);
                if (!isNaN(n)) {
                    if (!this.pinchZoomLeft)
                        throw Error("Missing pinch-zoom element");
                    this.pinchZoomLeft.scaleTo(n / 100, V)
                }
            }
            onPinchZoomLeftChange(e) {
                if (!this.pinchZoomRight || !this.pinchZoomLeft)
                    throw Error("Missing pinch-zoom element");
                this.setState({
                        scale: this.pinchZoomLeft.scale
                    }),
                    this.pinchZoomRight.setTransform({
                        scale: this.pinchZoomLeft.scale,
                        x: this.pinchZoomLeft.x,
                        y: this.pinchZoomLeft.y
                    })
            }
            onRetargetableEvent(e) {
                const t = e.target;
                if (!this.pinchZoomLeft)
                    throw Error("Missing pinch-zoom element");
                if ("wheel" !== e.type && t.closest(`.${w.twoUpHandle}`))
                    return;
                if (this.retargetedEvents.has(e))
                    return;
                e.stopImmediatePropagation(),
                    e.preventDefault();
                const n = new e.constructor(e.type, e);
                this.retargetedEvents.add(n),
                    this.pinchZoomLeft.dispatchEvent(n),
                    "touchend" === e.type && document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur()
            }
            render({
                mobileView: e,
                leftImgContain: t,
                rightImgContain: n,
                source: o,
                onBack: i
            }, {
                scale: s,
                editingScale: r,
                altBackground: l
            }) {
                const h = this.leftDrawable(),
                    u = this.rightDrawable(),
                    p = o && o.processed;
                return Object(a.b)("div", {
                    class: `${x.output} ${l ? x.altBackground : ""}`
                }, Object(a.b)("two-up", {
                    "legacy-clip-compat": !0,
                    class: x.twoUp,
                    orientation: e ? "vertical" : "horizontal",
                    onTouchStartCapture: this.onRetargetableEvent,
                    onTouchEndCapture: this.onRetargetableEvent,
                    onTouchMoveCapture: this.onRetargetableEvent,
                    onPointerDownCapture: this.onRetargetableEvent,
                    onMouseDownCapture: this.onRetargetableEvent,
                    onWheelCapture: this.onRetargetableEvent
                }, Object(a.b)("pinch-zoom", {
                    class: x.pinchZoom,
                    onChange: this.onPinchZoomLeftChange,
                    ref: Object(c.c)(this, "pinchZoomLeft")
                }, Object(a.b)("canvas", {
                    class: x.pinchTarget,
                    ref: Object(c.c)(this, "canvasLeft"),
                    width: h && h.width,
                    height: h && h.height,
                    style: {
                        width: p && p.width,
                        height: p && p.height,
                        objectFit: t ? "contain" : ""
                    }
                })), Object(a.b)("pinch-zoom", {
                    class: x.pinchZoom,
                    ref: Object(c.c)(this, "pinchZoomRight")
                }, Object(a.b)("canvas", {
                    class: x.pinchTarget,
                    ref: Object(c.c)(this, "canvasRight"),
                    width: u && u.width,
                    height: u && u.height,
                    style: {
                        width: p && p.width,
                        height: p && p.height,
                        objectFit: n ? "contain" : ""
                    }
                }))), Object(a.b)("div", {
                    class: x.back
                }, Object(a.b)("button", {
                    class: x.button,
                    onClick: i
                }, Object(a.b)(D, null))), Object(a.b)("div", {
                    class: x.controls
                }, Object(a.b)("div", {
                    class: x.zoomControls
                }, Object(a.b)("button", {
                    class: x.button,
                    onClick: this.zoomOut
                }, Object(a.b)(R, null)), r ? Object(a.b)("input", {
                    type: "number",
                    step: "1",
                    min: "1",
                    max: "1000000",
                    ref: Object(c.c)(this, "scaleInput"),
                    class: x.zoom,
                    value: Math.round(100 * s),
                    onInput: this.onScaleInputChanged,
                    onBlur: this.onScaleInputBlur
                }) : Object(a.b)("span", {
                    class: x.zoom,
                    tabIndex: 0,
                    onFocus: this.onScaleValueFocus
                }, Object(a.b)("span", {
                    class: x.zoomValue
                }, Math.round(100 * s)), "%"), Object(a.b)("button", {
                    class: x.button,
                    onClick: this.zoomIn
                }, Object(a.b)(A, null))), Object(a.b)("div", {
                    class: x.buttonsNoWrap
                }, Object(a.b)("button", {
                    class: x.button,
                    onClick: this.onRotateClick,
                    title: "Rotate image"
                }, Object(a.b)(I, null)), Object(a.b)("button", {
                    class: `${x.button} ${l ? x.active : ""}`,
                    onClick: this.toggleBackground,
                    title: "Change canvas color"
                }, l ? Object(a.b)(T, null) : Object(a.b)(z, null)))))
            }
        }
        N([c.b], Y.prototype, "toggleBackground", null),
            N([c.b], Y.prototype, "zoomIn", null),
            N([c.b], Y.prototype, "zoomOut", null),
            N([c.b], Y.prototype, "onRotateClick", null),
            N([c.b], Y.prototype, "onScaleValueFocus", null),
            N([c.b], Y.prototype, "onScaleInputBlur", null),
            N([c.b], Y.prototype, "onScaleInputChanged", null),
            N([c.b], Y.prototype, "onPinchZoomLeftChange", null),
            N([c.b], Y.prototype, "onRetargetableEvent", null);
        var G = n(20),
            J = n(35),
            Z = n(36),
            X = function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                return s > 3 && r && Object.defineProperty(t, n, r),
                    r
            };
        const Q = ["focus", "blur"],
            K = ["input", "change"],
            ee = ["name", "min", "max", "step", "value", "disabled"],
            te = ["name", "min", "max", "step", "value", "disabled"];
        class ne extends HTMLElement {
            constructor() {
                super(),
                    this._ignoreChange = !1,
                    this._input = document.createElement("input"),
                    this._input.type = "range",
                    this._input.className = Z.input;
                const e = new b(this._input, {
                    start: () => 0 === e.currentPointers.length && (this._input.classList.add(Z.touchActive),
                        !0),
                    end: () => {
                        this._input.classList.remove(Z.touchActive)
                    }
                });
                for (const t of Q)
                    this._input.addEventListener(t, this._retargetEvent, !0);
                for (const t of K)
                    this._input.addEventListener(t, this._update, !0)
            }
            static get observedAttributes() {
                return te
            }
            connectedCallback() {
                this.contains(this._input) || (this.innerHTML = `<div class="${Z.thumbWrapper}">` + `<div class="${Z.thumb}"></div>` + `<div class="${Z.valueDisplay}"></div>` + "</div>",
                    this.insertBefore(this._input, this.firstChild),
                    this._valueDisplay = this.querySelector("." + Z.valueDisplay),
                    this._update())
            }
            get labelPrecision() {
                return this.getAttribute("label-precision") || ""
            }
            set labelPrecision(e) {
                this.setAttribute("label-precision", e)
            }
            attributeChangedCallback(e, t, n) {
                this._ignoreChange || (null === n ? this._input.removeAttribute(e) : this._input.setAttribute(e, n),
                    this._reflectAttributes(),
                    this._update())
            }
            _retargetEvent(e) {
                e.stopImmediatePropagation();
                const t = new Event(e.type, e);
                this.dispatchEvent(t)
            }
            _update() {
                const e = Number(this.value) || 0,
                    t = Number(this.min) || 0,
                    n = Number(this.max) || 100,
                    o = Number(this.labelPrecision) || function(e) {
                        const t = e.split(".")[1];
                        return t ? t.length : 0
                    }(this.step) || 0,
                    i = 100 * (e - t) / (n - t),
                    s = o ? e.toFixed(o) : Math.round(e).toString();
                this._valueDisplay.textContent = s,
                    this.style.setProperty("--value-percent", i + "%"),
                    this.style.setProperty("--value-width", "" + s.length)
            }
            _reflectAttributes() {
                this._ignoreChange = !0;
                for (const e of te)
                    this._input.hasAttribute(e) ? this.setAttribute(e, this._input.getAttribute(e)) : this.removeAttribute(e);
                this._ignoreChange = !1
            }
        }
        X([c.b], ne.prototype, "_retargetEvent", null),
            X([c.b], ne.prototype, "_update", null);
        for (const Dt of ee)
            Object.defineProperty(ne.prototype, Dt, {
                get() {
                    return this._input[Dt]
                },
                set(e) {
                    this._input[Dt] = e,
                        this._reflectAttributes(),
                        this._update()
                }
            });
        customElements.define("range-input", ne);
        var oe, ie = function(e, t) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                var i = 0;
                for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
                    t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
            }
            return n
        };
        class se extends a.a {
                onTextInput(e) {
                    const t = e.target;
                    if (!t.value.trim())
                        return;
                    this.rangeWc.value = t.value;
                    const {
                        onInput: n
                    } = this.props;
                    n && n(e)
                }
                render(e) {
                    const {
                        children: t
                    } = e, n = ie(e, ["children"]), {
                        value: o,
                        min: i,
                        max: s,
                        step: r
                    } = e;
                    return Object(a.b)("label", {
                        class: J.range
                    }, Object(a.b)("span", {
                        class: J.labelText
                    }, t), Object(a.b)("div", {
                        class: J.rangeWcContainer
                    }, Object(a.b)("range-input", Object.assign({
                        ref: Object(c.c)(this, "rangeWc"),
                        class: J.rangeWc
                    }, n))), Object(a.b)("input", {
                        type: "number",
                        class: J.textInput,
                        value: o,
                        min: i,
                        max: s,
                        step: r,
                        onInput: this.onTextInput
                    }))
                }
            }
            (function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                s > 3 && r && Object.defineProperty(t, n, r)
            })([c.b], se.prototype, "onTextInput", null);
        class re extends a.a {
                onChange(e) {
                    const t = e.currentTarget.closest("form"),
                        n = {
                            level: Object(l.k)(t.level)
                        };
                    this.props.onChange(n)
                }
                render({
                    options: e
                }) {
                    return Object(a.b)("form", {
                        class: G.optionsSection,
                        onSubmit: l.o
                    }, Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "level",
                        min: "0",
                        max: "7",
                        step: "1",
                        value: e.level,
                        onInput: this.onChange
                    }, "Effort:")))
                }
            }
            (function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                s > 3 && r && Object.defineProperty(t, n, r)
            })([c.b], re.prototype, "onChange", null),
            function(e) {
                e[e.GRAYSCALE = 1] = "GRAYSCALE",
                    e[e.RGB = 2] = "RGB",
                    e[e.YCbCr = 3] = "YCbCr"
            }(oe || (oe = {}));
        const ae = "mozjpeg",
            ce = "MozJPEG",
            le = "image/jpeg",
            he = "jpg",
            ue = {
                quality: 75,
                baseline: !1,
                arithmetic: !1,
                progressive: !0,
                optimize_coding: !0,
                smoothing: 0,
                color_space: oe.YCbCr,
                quant_table: 3,
                trellis_multipass: !1,
                trellis_opt_zero: !1,
                trellis_opt_table: !1,
                trellis_loops: 1,
                auto_subsample: !0,
                chroma_subsample: 2,
                separate_chroma_quality: !1,
                chroma_quality: 75
            };
        var pe = n(37);
        class de extends a.a {
            render(e) {
                return Object(a.b)("div", {
                    class: pe.checkbox
                }, e.checked ? Object(a.b)(M, {
                    class: `${pe.icon} ${pe.checked}`
                }) : Object(a.b)(L, {
                    class: pe.icon
                }), Object(a.b)("input", Object.assign({
                    class: pe.realCheckbox,
                    type: "checkbox"
                }, e)))
            }
        }
        var be = n(38);
        class ge extends a.a {
            constructor() {
                super(...arguments),
                    this.state = {
                        outgoingChildren: []
                    },
                    this.lastElHeight = 0
            }
            componentWillReceiveProps(e) {
                const t = this.props.children;
                !e.children[0] && t[0] && this.setState({
                    outgoingChildren: t
                })
            }
            componentWillUpdate(e) {
                const t = this.props.children,
                    n = e.children;
                t[0] && n[0] || !t[0] && !n[0] || (this.lastElHeight = this.base.getBoundingClientRect().height)
            }
            async componentDidUpdate(e) {
                const t = this.props.children,
                    n = e.children;
                if (t[0] && n[0] || !t[0] && !n[0])
                    return;
                this.base.style.height = "",
                    this.base.style.overflow = "hidden";
                const o = t[0] ? this.base.getBoundingClientRect().height : 0;
                await Object(l.r)(this.base, {
                        duration: 300,
                        from: this.lastElHeight,
                        to: o
                    }),
                    this.base.style.height = "",
                    this.base.style.overflow = "",
                    this.state.outgoingChildren[0] && this.setState({
                        outgoingChildren: []
                    })
            }
            render(e, {
                outgoingChildren: t
            }) {
                const n = e.children,
                    o = !n[0] && t[0];
                return Object(a.b)("div", {
                    class: o ? be.childrenExiting : ""
                }, n[0] ? n : t)
            }
        }
        var fe = n(39),
            me = function(e, t) {
                var n = {};
                for (var o in e)
                    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (o = Object.getOwnPropertySymbols(e); i < o.length; i++)
                        t.indexOf(o[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[i]) && (n[o[i]] = e[o[i]])
                }
                return n
            };
        class ve extends a.a {
            render(e) {
                const {
                    large: t
                } = e, n = me(e, ["large"]);
                return Object(a.b)("div", {
                    class: fe.select
                }, Object(a.b)("select", Object.assign({
                    class: `${fe.nativeSelect} ${t ? fe.large : ""}`
                }, n)), Object(a.b)("svg", {
                    class: fe.arrow,
                    viewBox: "0 0 10 5"
                }, Object(a.b)("path", {
                    d: "M0 0l5 5 5-5z"
                })))
            }
        }
        var Oe = function(e, t, n) {
            var o = t.split("."),
                i = e.__lsc || (e.__lsc = {});
            return i[t + n] || (i[t + n] = function(t) {
                for (var i = t && t.target || this, s = {}, r = s, a = "string" == typeof n ? function(e, t, n, o) {
                        for (o = 0,
                            t = t.split ? t.split(".") : t; e && o < t.length;)
                            e = e[t[o++]];
                        return void 0 === e ? n : e
                    }(t, n) : i.nodeName ? i.type.match(/^che|rad/) ? i.checked : i.value : t, c = 0; c < o.length - 1; c++)
                    r = r[o[c]] || (r[o[c]] = !c && e.state[o[c]] || {});
                r[o[c]] = a,
                    e.setState(s)
            })
        };
        class _e extends a.a {
                constructor() {
                    super(...arguments),
                        this.state = {
                            showAdvanced: !1
                        }
                }
                onChange(e) {
                    const t = e.currentTarget.closest("form"),
                        {
                            options: n
                        } = this.props,
                        o = Object.assign({}, this.props.options, {
                            baseline: Object(l.h)(t.baseline, n.baseline),
                            progressive: Object(l.h)(t.progressive, n.progressive),
                            optimize_coding: Object(l.h)(t.optimize_coding, n.optimize_coding),
                            trellis_multipass: Object(l.h)(t.trellis_multipass, n.trellis_multipass),
                            trellis_opt_zero: Object(l.h)(t.trellis_opt_zero, n.trellis_opt_zero),
                            trellis_opt_table: Object(l.h)(t.trellis_opt_table, n.trellis_opt_table),
                            auto_subsample: Object(l.h)(t.auto_subsample, n.auto_subsample),
                            separate_chroma_quality: Object(l.h)(t.separate_chroma_quality, n.separate_chroma_quality),
                            quality: Object(l.k)(t.quality, n.quality),
                            chroma_quality: Object(l.k)(t.chroma_quality, n.chroma_quality),
                            chroma_subsample: Object(l.k)(t.chroma_subsample, n.chroma_subsample),
                            smoothing: Object(l.k)(t.smoothing, n.smoothing),
                            color_space: Object(l.k)(t.color_space, n.color_space),
                            quant_table: Object(l.k)(t.quant_table, n.quant_table),
                            trellis_loops: Object(l.k)(t.trellis_loops, n.trellis_loops)
                        });
                    this.props.onChange(o)
                }
                render({
                    options: e
                }, {
                    showAdvanced: t
                }) {
                    return Object(a.b)("form", {
                        class: G.optionsSection,
                        onSubmit: l.o
                    }, Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "quality",
                        min: "0",
                        max: "100",
                        value: e.quality,
                        onInput: this.onChange
                    }, "Quality:")), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        checked: t,
                        onChange: Oe(this, "showAdvanced")
                    }), "Show advanced settings"), Object(a.b)(ge, null, t ? Object(a.b)("div", null, Object(a.b)("label", {
                        class: G.optionTextFirst
                    }, "Channels:", Object(a.b)(ve, {
                        name: "color_space",
                        value: e.color_space,
                        onChange: this.onChange
                    }, Object(a.b)("option", {
                        value: oe.GRAYSCALE
                    }, "Grayscale"), Object(a.b)("option", {
                        value: oe.RGB
                    }, "RGB"), Object(a.b)("option", {
                        value: oe.YCbCr
                    }, "YCbCr"))), Object(a.b)(ge, null, e.color_space === oe.YCbCr ? Object(a.b)("div", null, Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "auto_subsample",
                        checked: e.auto_subsample,
                        onChange: this.onChange
                    }), "Auto subsample chroma"), Object(a.b)(ge, null, e.auto_subsample ? null : Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "chroma_subsample",
                        min: "1",
                        max: "4",
                        value: e.chroma_subsample,
                        onInput: this.onChange
                    }, "Subsample chroma by:"))), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "separate_chroma_quality",
                        checked: e.separate_chroma_quality,
                        onChange: this.onChange
                    }), "Separate chroma quality"), Object(a.b)(ge, null, e.separate_chroma_quality ? Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "chroma_quality",
                        min: "0",
                        max: "100",
                        value: e.chroma_quality,
                        onInput: this.onChange
                    }, "Chroma quality:")) : null)) : null), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "baseline",
                        checked: e.baseline,
                        onChange: this.onChange
                    }), "Pointless spec compliance"), Object(a.b)(ge, null, e.baseline ? null : Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "progressive",
                        checked: e.progressive,
                        onChange: this.onChange
                    }), "Progressive rendering")), Object(a.b)(ge, null, e.baseline ? Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "optimize_coding",
                        checked: e.optimize_coding,
                        onChange: this.onChange
                    }), "Optimize Huffman table") : null), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "smoothing",
                        min: "0",
                        max: "100",
                        value: e.smoothing,
                        onInput: this.onChange
                    }, "Smoothing:")), Object(a.b)("label", {
                        class: G.optionTextFirst
                    }, "Quantization:", Object(a.b)(ve, {
                        name: "quant_table",
                        value: e.quant_table,
                        onChange: this.onChange
                    }, Object(a.b)("option", {
                        value: "0"
                    }, "JPEG Annex K"), Object(a.b)("option", {
                        value: "1"
                    }, "Flat"), Object(a.b)("option", {
                        value: "2"
                    }, "MSSIM-tuned Kodak"), Object(a.b)("option", {
                        value: "3"
                    }, "ImageMagick"), Object(a.b)("option", {
                        value: "4"
                    }, "PSNR-HVS-M-tuned Kodak"), Object(a.b)("option", {
                        value: "5"
                    }, "Klein et al"), Object(a.b)("option", {
                        value: "6"
                    }, "Watson et al"), Object(a.b)("option", {
                        value: "7"
                    }, "Ahumada et al"), Object(a.b)("option", {
                        value: "8"
                    }, "Peterson et al"))), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "trellis_multipass",
                        checked: e.trellis_multipass,
                        onChange: this.onChange
                    }), "Trellis multipass"), Object(a.b)(ge, null, e.trellis_multipass ? Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "trellis_opt_zero",
                        checked: e.trellis_opt_zero,
                        onChange: this.onChange
                    }), "Optimize zero block runs") : null), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "trellis_opt_table",
                        checked: e.trellis_opt_table,
                        onChange: this.onChange
                    }), "Optimize after trellis quantization"), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "trellis_loops",
                        min: "1",
                        max: "50",
                        value: e.trellis_loops,
                        onInput: this.onChange
                    }, "Trellis quantization passes:"))) : null))
                }
            }
            (function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                s > 3 && r && Object.defineProperty(t, n, r)
            })([c.b], _e.prototype, "onChange", null);
        var ye = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };

        function je(e = {}) {
            const {
                min: t = 0,
                max: n = 100,
                step: o = 1
            } = e;
            class i extends a.a {
                onChange(e) {
                    const t = e.currentTarget;
                    this.props.onChange({
                        quality: Number(t.value)
                    })
                }
                render({
                    options: e
                }) {
                    return Object(a.b)("div", {
                        class: G.optionsSection
                    }, Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "quality",
                        min: t,
                        max: n,
                        step: o || "any",
                        value: e.quality,
                        onInput: this.onChange
                    }, "Quality:")))
                }
            }
            return ye([c.b], i.prototype, "onChange", null),
                i
        }
        var we, Ce = je({
            min: 0,
            max: 1,
            step: .01
        });
        ! function(e) {
            e[e.WEBP_HINT_DEFAULT = 0] = "WEBP_HINT_DEFAULT",
                e[e.WEBP_HINT_PICTURE = 1] = "WEBP_HINT_PICTURE",
                e[e.WEBP_HINT_PHOTO = 2] = "WEBP_HINT_PHOTO",
                e[e.WEBP_HINT_GRAPH = 3] = "WEBP_HINT_GRAPH"
        }(we || (we = {}));
        const Ee = "webp",
            xe = "WebP",
            Pe = "image/webp",
            Se = "webp",
            ke = {
                quality: 75,
                target_size: 0,
                target_PSNR: 0,
                method: 4,
                sns_strength: 50,
                filter_strength: 60,
                filter_sharpness: 0,
                filter_type: 1,
                partitions: 0,
                segments: 4,
                pass: 1,
                show_compressed: 0,
                preprocessing: 0,
                autofilter: 0,
                partition_limit: 0,
                alpha_compression: 1,
                alpha_filtering: 1,
                alpha_quality: 100,
                lossless: 0,
                exact: 0,
                image_hint: 0,
                emulate_jpeg_size: 0,
                thread_level: 0,
                low_memory: 0,
                near_lossless: 100,
                use_delta_palette: 0,
                use_sharp_yuv: 0
            };
        const ze = [
                [0, 0],
                [1, 20],
                [2, 25],
                [3, 30],
                [3, 50],
                [4, 50],
                [4, 75],
                [4, 90],
                [5, 90],
                [6, 100]
            ],
            Te = 6;

        function Ie(e, t) {
            const n = ze.findIndex(([n, o]) => n === t && o === e);
            return -1 !== n ? n : Te
        }
        class Ae extends a.a {
                constructor() {
                    super(...arguments),
                        this.state = {
                            showAdvanced: !1
                        }
                }
                onChange(e) {
                    const t = e.currentTarget.closest("form"),
                        n = Object(l.i)(t.lossless),
                        {
                            options: o
                        } = this.props,
                        i = Object(l.k)(t.lossless_preset, Ie(o.quality, o.method)),
                        s = Object.assign({}, o, {
                            lossless: n,
                            quality: n ? ze[i][1] : Object(l.k)(t.quality, o.quality),
                            method: n ? ze[i][0] : Object(l.k)(t.method_input, o.method),
                            image_hint: Object(l.i)(t.image_hint, o.image_hint) ? we.WEBP_HINT_GRAPH : we.WEBP_HINT_DEFAULT,
                            exact: Object(l.i)(t.exact, o.exact),
                            alpha_compression: Object(l.i)(t.alpha_compression, o.alpha_compression),
                            autofilter: Object(l.i)(t.autofilter, o.autofilter),
                            filter_type: Object(l.i)(t.filter_type, o.filter_type),
                            use_sharp_yuv: Object(l.i)(t.use_sharp_yuv, o.use_sharp_yuv),
                            near_lossless: 100 - Object(l.k)(t.near_lossless, 100 - o.near_lossless),
                            alpha_quality: Object(l.k)(t.alpha_quality, o.alpha_quality),
                            alpha_filtering: Object(l.k)(t.alpha_filtering, o.alpha_filtering),
                            sns_strength: Object(l.k)(t.sns_strength, o.sns_strength),
                            filter_strength: Object(l.k)(t.filter_strength, o.filter_strength),
                            filter_sharpness: 7 - Object(l.k)(t.filter_sharpness, 7 - o.filter_sharpness),
                            pass: Object(l.k)(t.pass, o.pass),
                            preprocessing: Object(l.k)(t.preprocessing, o.preprocessing),
                            segments: Object(l.k)(t.segments, o.segments),
                            partitions: Object(l.k)(t.partitions, o.partitions)
                        });
                    this.props.onChange(s)
                }
                _losslessSpecificOptions(e) {
                    return Object(a.b)("div", {
                        key: "lossless"
                    }, Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "lossless_preset",
                        min: "0",
                        max: "9",
                        value: Ie(e.quality, e.method),
                        onInput: this.onChange
                    }, "Effort:")), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "near_lossless",
                        min: "0",
                        max: "100",
                        value: "" + (100 - e.near_lossless),
                        onInput: this.onChange
                    }, "Slight loss:")), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "image_hint",
                        checked: e.image_hint === we.WEBP_HINT_GRAPH,
                        onChange: this.onChange
                    }), "Discrete tone image"))
                }
                _lossySpecificOptions(e) {
                    const {
                        showAdvanced: t
                    } = this.state;
                    return Object(a.b)("div", {
                        key: "lossy"
                    }, Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "method_input",
                        min: "0",
                        max: "6",
                        value: e.method,
                        onInput: this.onChange
                    }, "Effort:")), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "quality",
                        min: "0",
                        max: "100",
                        step: "0.1",
                        value: e.quality,
                        onInput: this.onChange
                    }, "Quality:")), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        checked: t,
                        onChange: Oe(this, "showAdvanced")
                    }), "Show advanced settings"), Object(a.b)(ge, null, t ? Object(a.b)("div", null, Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "alpha_compression",
                        checked: !!e.alpha_compression,
                        onChange: this.onChange
                    }), "Compress alpha"), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "alpha_quality",
                        min: "0",
                        max: "100",
                        value: e.alpha_quality,
                        onInput: this.onChange
                    }, "Alpha quality:")), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "alpha_filtering",
                        min: "0",
                        max: "2",
                        value: e.alpha_filtering,
                        onInput: this.onChange
                    }, "Alpha filter quality:")), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "autofilter",
                        checked: !!e.autofilter,
                        onChange: this.onChange
                    }), "Auto adjust filter strength"), Object(a.b)(ge, null, e.autofilter ? null : Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "filter_strength",
                        min: "0",
                        max: "100",
                        value: e.filter_strength,
                        onInput: this.onChange
                    }, "Filter strength:"))), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "filter_type",
                        checked: !!e.filter_type,
                        onChange: this.onChange
                    }), "Strong filter"), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "filter_sharpness",
                        min: "0",
                        max: "7",
                        value: 7 - e.filter_sharpness,
                        onInput: this.onChange
                    }, "Filter sharpness:")), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "use_sharp_yuv",
                        checked: !!e.use_sharp_yuv,
                        onChange: this.onChange
                    }), "Sharp RGB→YUV conversion"), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "pass",
                        min: "1",
                        max: "10",
                        value: e.pass,
                        onInput: this.onChange
                    }, "Passes:")), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "sns_strength",
                        min: "0",
                        max: "100",
                        value: e.sns_strength,
                        onInput: this.onChange
                    }, "Spacial noise shaping:")), Object(a.b)("label", {
                        class: G.optionTextFirst
                    }, "Preprocess:", Object(a.b)(ve, {
                        name: "preprocessing",
                        value: e.preprocessing,
                        onChange: this.onChange
                    }, Object(a.b)("option", {
                        value: "0"
                    }, "None"), Object(a.b)("option", {
                        value: "1"
                    }, "Segment smooth"), Object(a.b)("option", {
                        value: "2"
                    }, "Pseudo-random dithering"))), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "segments",
                        min: "1",
                        max: "4",
                        value: e.segments,
                        onInput: this.onChange
                    }, "Segments:")), Object(a.b)("div", {
                        class: G.optionOneCell
                    }, Object(a.b)(se, {
                        name: "partitions",
                        min: "0",
                        max: "3",
                        value: e.partitions,
                        onInput: this.onChange
                    }, "Partitions:"))) : null))
                }
                render({
                    options: e
                }) {
                    return Object(a.b)("form", {
                        class: G.optionsSection,
                        onSubmit: l.o
                    }, Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "lossless",
                        checked: !!e.lossless,
                        onChange: this.onChange
                    }), "Lossless"), e.lossless ? this._losslessSpecificOptions(e) : this._lossySpecificOptions(e), Object(a.b)("label", {
                        class: G.optionInputFirst
                    }, Object(a.b)(de, {
                        name: "exact",
                        checked: !!e.exact,
                        onChange: this.onChange
                    }), "Preserve transparent data"))
                }
            }
            (function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                s > 3 && r && Object.defineProperty(t, n, r)
            })([c.b], Ae.prototype, "onChange", null);
        var Re = je({
                min: 0,
                max: 1,
                step: .01
            }),
            Le = function(e, t, n, o) {
                var i, s = arguments.length,
                    r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                    r = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)
                        (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
                return s > 3 && r && Object.defineProperty(t, n, r),
                    r
            };
        const Me = Object(l.l)();
        class Be extends a.a {
            constructor() {
                super(...arguments),
                    this.state = {
                        extendedSettings: !1
                    }
            }
            componentDidMount() {
                Me.then(() => {
                    this.setState({
                        extendedSettings: !0
                    })
                })
            }
            onChange(e) {
                const t = e.currentTarget.closest("form"),
                    {
                        options: n
                    } = this.props,
                    o = {
                        zx: Object(l.k)(t.zx, n.zx),
                        maxNumColors: Object(l.k)(t.maxNumColors, n.maxNumColors),
                        dither: Object(l.k)(t.dither)
                    };
                this.props.onChange(o)
            }
            render({
                options: e
            }, {
                extendedSettings: t
            }) {
                return Object(a.b)("form", {
                    class: G.optionsSection,
                    onSubmit: l.o
                }, Object(a.b)(ge, null, t ? Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Type:", Object(a.b)(ve, {
                    name: "zx",
                    value: "" + e.zx,
                    onChange: this.onChange
                }, Object(a.b)("option", {
                    value: "0"
                }, "Standard"), Object(a.b)("option", {
                    value: "1"
                }, "ZX"))) : null), Object(a.b)(ge, null, e.zx ? null : Object(a.b)("div", {
                    class: G.optionOneCell
                }, Object(a.b)(se, {
                    name: "maxNumColors",
                    min: "2",
                    max: "256",
                    value: e.maxNumColors,
                    onInput: this.onChange
                }, "Colors:"))), Object(a.b)("div", {
                    class: G.optionOneCell
                }, Object(a.b)(se, {
                    name: "dither",
                    min: "0",
                    max: "1",
                    step: "0.01",
                    value: e.dither,
                    onInput: this.onChange
                }, "Dithering:")))
            }
        }
        Le([c.b], Be.prototype, "onChange", null);
        const De = ["triangle", "catrom", "mitchell", "lanczos3", "hqx"];

        function He(e) {
            return De.includes(e.method)
        }
        var qe = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };
        const Fe = [.25, .3333, .5, 1, 2, 3, 4];
        class We extends a.a {
            constructor(e) {
                super(e),
                    this.state = {
                        maintainAspect: !0
                    },
                    this.presetWidths = {},
                    this.presetHeights = {},
                    this.generatePresetValues(e.inputWidth, e.inputHeight)
            }
            reportOptions() {
                const e = this.form,
                    t = e.width,
                    n = e.height,
                    {
                        options: o
                    } = this.props;
                if (!t.checkValidity() || !n.checkValidity())
                    return;
                const i = {
                    width: Object(l.k)(t),
                    height: Object(l.k)(n),
                    method: e.resizeMethod.value,
                    premultiply: Object(l.h)(e.premultiply, !0),
                    linearRGB: Object(l.h)(e.linearRGB, !0),
                    fitMethod: Object(l.j)(e.fitMethod, o.fitMethod)
                };
                this.props.onChange(i)
            }
            onChange() {
                this.reportOptions()
            }
            getAspect() {
                return this.props.inputWidth / this.props.inputHeight
            }
            componentDidUpdate(e, t) {
                !t.maintainAspect && this.state.maintainAspect && (this.form.height.value = Math.round(Number(this.form.width.value) / this.getAspect()),
                    this.reportOptions())
            }
            componentWillReceiveProps(e) {
                this.props.inputWidth === e.inputWidth && this.props.inputHeight === e.inputHeight || this.generatePresetValues(e.inputWidth, e.inputHeight)
            }
            onWidthInput() {
                if (this.state.maintainAspect) {
                    const e = Object(l.k)(this.form.width);
                    this.form.height.value = Math.round(e / this.getAspect())
                }
                this.reportOptions()
            }
            onHeightInput() {
                if (this.state.maintainAspect) {
                    const e = Object(l.k)(this.form.height);
                    this.form.width.value = Math.round(e * this.getAspect())
                }
                this.reportOptions()
            }
            generatePresetValues(e, t) {
                for (const n of Fe)
                    this.presetWidths[n] = Math.round(e * n),
                    this.presetHeights[n] = Math.round(t * n)
            }
            getPreset() {
                const {
                    width: e,
                    height: t
                } = this.props.options;
                for (const n of Fe)
                    if (e === this.presetWidths[n] && t === this.presetHeights[n])
                        return n;
                return "custom"
            }
            onPresetChange(e) {
                const t = e.target;
                if ("custom" === t.value)
                    return;
                const n = Number(t.value);
                this.form.width.value = Math.round(this.props.inputWidth * n) + "",
                    this.form.height.value = Math.round(this.props.inputHeight * n) + "",
                    this.reportOptions()
            }
            render({
                options: e,
                isVector: t
            }, {
                maintainAspect: n
            }) {
                return Object(a.b)("form", {
                    ref: Object(c.c)(this, "form"),
                    class: G.optionsSection,
                    onSubmit: l.o
                }, Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Method:", Object(a.b)(ve, {
                    name: "resizeMethod",
                    value: e.method,
                    onChange: this.onChange
                }, t && Object(a.b)("option", {
                    value: "vector"
                }, "Vector"), Object(a.b)("option", {
                    value: "lanczos3"
                }, "Lanczos3"), Object(a.b)("option", {
                    value: "mitchell"
                }, "Mitchell"), Object(a.b)("option", {
                    value: "catrom"
                }, "Catmull-Rom"), Object(a.b)("option", {
                    value: "triangle"
                }, "Triangle (bilinear)"), Object(a.b)("option", {
                    value: "hqx"
                }, "hqx (pixel art)"), Object(a.b)("option", {
                    value: "browser-pixelated"
                }, "Browser pixelated"), Object(a.b)("option", {
                    value: "browser-low"
                }, "Browser low quality"), Object(a.b)("option", {
                    value: "browser-medium"
                }, "Browser medium quality"), Object(a.b)("option", {
                    value: "browser-high"
                }, "Browser high quality"))), Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Preset:", Object(a.b)(ve, {
                    value: this.getPreset(),
                    onChange: this.onPresetChange
                }, Fe.map(e => Object(a.b)("option", {
                    value: e
                }, 100 * e, "%")), Object(a.b)("option", {
                    value: "custom"
                }, "Custom"))), Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Width:", Object(a.b)("input", {
                    required: !0,
                    class: G.textField,
                    name: "width",
                    type: "number",
                    min: "1",
                    value: "" + e.width,
                    onInput: this.onWidthInput
                })), Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Height:", Object(a.b)("input", {
                    required: !0,
                    class: G.textField,
                    name: "height",
                    type: "number",
                    min: "1",
                    value: "" + e.height,
                    onInput: this.onHeightInput
                })), Object(a.b)(ge, null, He(e) ? Object(a.b)("label", {
                    class: G.optionInputFirst
                }, Object(a.b)(de, {
                    name: "premultiply",
                    checked: e.premultiply,
                    onChange: this.onChange
                }), "Premultiply alpha channel") : null, He(e) ? Object(a.b)("label", {
                    class: G.optionInputFirst
                }, Object(a.b)(de, {
                    name: "linearRGB",
                    checked: e.linearRGB,
                    onChange: this.onChange
                }), "Linear RGB") : null), Object(a.b)("label", {
                    class: G.optionInputFirst
                }, Object(a.b)(de, {
                    name: "maintainAspect",
                    checked: n,
                    onChange: Oe(this, "maintainAspect")
                }), "Maintain aspect ratio"), Object(a.b)(ge, null, n ? null : Object(a.b)("label", {
                    class: G.optionTextFirst
                }, "Fit method:", Object(a.b)(ve, {
                    name: "fitMethod",
                    value: e.fitMethod,
                    onChange: this.onChange
                }, Object(a.b)("option", {
                    value: "stretch"
                }, "Stretch"), Object(a.b)("option", {
                    value: "contain"
                }, "Contain")))))
            }
        }
        qe([c.b], We.prototype, "onChange", null),
            qe([c.b], We.prototype, "onWidthInput", null),
            qe([c.b], We.prototype, "onHeightInput", null),
            qe([c.b], We.prototype, "onPresetChange", null);
        const Ue = "identity",
            $e = "Original image",
            Ne = {},
            Ve = "png",
            Ye = "OptiPNG",
            Ge = "image/png",
            Je = "png",
            Ze = {
                level: 2
            };
        var Xe = n(22),
            Qe = n(23),
            Ke = n(24),
            et = n(25),
            tt = n(26),
            nt = n(27),
            ot = n(28),
            it = n(29);
        const st = {
                [Ue]: s,
                [Ve]: r,
                [ae]: o,
                [Ee]: i,
                [Xe.type]: Xe,
                [Qe.type]: Qe,
                [Ke.type]: Ke,
                [ot.type]: ot,
                [et.type]: et,
                [tt.type]: tt,
                [nt.type]: nt,
                [it.type]: it
            },
            rt = Array.from(Object.values(st)),
            at = Promise.resolve().then(async () => {
                const e = {};
                return await Promise.all(rt.map(async t => {
                        const n = !("featureTest" in t) || await t.featureTest();
                        e[t.type] = n
                    })),
                    e
            });
        var ct = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };
        const lt = {
            [Ue]: void 0,
            [Ve]: re,
            [ae]: _e,
            [Ee]: Ae,
            [Xe.type]: void 0,
            [Qe.type]: Ce,
            [Ke.type]: Re,
            [ot.type]: void 0,
            [et.type]: void 0,
            [tt.type]: void 0,
            [nt.type]: void 0,
            [it.type]: void 0
        };
        class ht extends a.a {
            constructor() {
                super(),
                    this.state = {
                        encoderSupportMap: void 0
                    },
                    at.then(e => this.setState({
                        encoderSupportMap: e
                    }))
            }
            onEncoderTypeChange(e) {
                const t = e.currentTarget.value;
                this.props.onEncoderTypeChange(t)
            }
            onPreprocessorEnabledChange(e) {
                const t = e.currentTarget,
                    n = t.name.split(".")[0];
                this.props.onPreprocessorOptionsChange($(this.props.preprocessorState, `${n}.enabled`, t.checked))
            }
            onQuantizerOptionsChange(e) {
                this.props.onPreprocessorOptionsChange(U(this.props.preprocessorState, "quantizer", e))
            }
            onResizeOptionsChange(e) {
                this.props.onPreprocessorOptionsChange(U(this.props.preprocessorState, "resize", e))
            }
            render({
                source: e,
                encoderState: t,
                preprocessorState: n,
                onEncoderOptionsChange: o
            }, {
                encoderSupportMap: i
            }) {
                const s = lt[t.type];
                return Object(a.b)("div", {
                    class: G.optionsScroller
                }, Object(a.b)(ge, null, t.type === Ue ? null : Object(a.b)("div", null, Object(a.b)("h3", {
                    class: G.optionsTitle
                }, "Edit"), Object(a.b)("label", {
                    class: G.sectionEnabler
                }, Object(a.b)(de, {
                    name: "resize.enable",
                    checked: !!n.resize.enabled,
                    onChange: this.onPreprocessorEnabledChange
                }), "Resize"), Object(a.b)(ge, null, n.resize.enabled ? Object(a.b)(We, {
                    isVector: Boolean(e && e.vectorImage),
                    inputWidth: e ? e.processed.width : 1,
                    inputHeight: e ? e.processed.height : 1,
                    options: n.resize,
                    onChange: this.onResizeOptionsChange
                }) : null), Object(a.b)("label", {
                    class: G.sectionEnabler
                }, Object(a.b)(de, {
                    name: "quantizer.enable",
                    checked: !!n.quantizer.enabled,
                    onChange: this.onPreprocessorEnabledChange
                }), "Reduce palette"), Object(a.b)(ge, null, n.quantizer.enabled ? Object(a.b)(Be, {
                    options: n.quantizer,
                    onChange: this.onQuantizerOptionsChange
                }) : null))), Object(a.b)("h3", {
                    class: G.optionsTitle
                }, "Compress"), Object(a.b)("section", {
                    class: `${G.optionOneCell} ${G.optionsSection}`
                }, i ? Object(a.b)(ve, {
                    value: t.type,
                    onChange: this.onEncoderTypeChange,
                    large: !0
                }, rt.filter(e => i[e.type]).map(e => Object(a.b)("option", {
                    value: e.type
                }, e.label))) : Object(a.b)(ve, {
                    large: !0
                }, Object(a.b)("option", null, "Loading…"))), Object(a.b)(ge, null, s ? Object(a.b)(s, {
                    options: t.options,
                    onChange: o
                }) : null))
            }
        }
        ct([c.b], ht.prototype, "onEncoderTypeChange", null),
            ct([c.b], ht.prototype, "onPreprocessorEnabledChange", null),
            ct([c.b], ht.prototype, "onQuantizerOptionsChange", null),
            ct([c.b], ht.prototype, "onResizeOptionsChange", null);
        const ut = 5;
        class pt {
            constructor() {
                this._entries = []
            }
            add(e) {
                if (e.encoderState.type === Ue)
                    throw Error("Cannot cache identity encodes");
                this._entries.unshift(e),
                    this._entries.length > ut && this._entries.pop()
            }
            match(e, t, n) {
                const o = this._entries.findIndex(o => {
                    if (o.sourceData !== e)
                        return !1;
                    if (o.encoderState.type !== n.type)
                        return !1;
                    for (const e in t)
                        if (!Object(l.p)(t[e], o.preprocessorState[e]))
                            return !1;
                    return !!Object(l.p)(n.options, o.encoderState.options)
                });
                if (-1 === o)
                    return;
                const i = this._entries[o];
                return 0 !== o && (this._entries.splice(o, 1),
                    this._entries.unshift(i)), {
                    data: i.data,
                    preprocessed: i.preprocessed,
                    file: i.file
                }
            }
        }
        const dt = {
            quantizer: Object.assign({
                enabled: !1
            }, {
                zx: 0,
                maxNumColors: 256,
                dither: 1
            }),
            resize: Object.assign({
                enabled: !1
            }, {
                width: 1,
                height: 1,
                method: "lanczos3",
                fitMethod: "stretch",
                premultiply: !0,
                linearRGB: !0
            })
        };
        var bt = n(40),
            gt = n.n(bt);
        const ft = Object(l.d)(gt.a);
        async function mt(e, t) {
            const n = await Object(l.q)(e);
            try {
                return "image/webp" !== n || await ft ? await Object(l.m)(e) : await t.webpDecode(e)
            } catch (o) {
                throw Error("Couldn't decode image")
            }
        }
        var vt = n(41),
            Ot = n(52);
        const _t = "open-one-only";

        function yt(e) {
            const t = e.closest("multi-panel > *, a, button");
            if (t && t.classList.contains(Ot.panelHeading))
                return t
        }
        async function jt(e) {
            const t = e.nextElementSibling;
            if (!t)
                return;
            const n = t.getBoundingClientRect().height;
            e.removeAttribute("content-expanded"),
                t.setAttribute("aria-expanded", "false"),
                await null,
                await Object(l.r)(t, {
                    from: n,
                    to: 0,
                    duration: 300
                }),
                t.style.height = ""
        }
        customElements.define("multi-panel", class extends HTMLElement {
            static get observedAttributes() {
                return [_t]
            }
            constructor() {
                super(),
                    this.addEventListener("click", this._onClick),
                    this.addEventListener("keydown", this._onKeyDown),
                    new MutationObserver(() => this._childrenChange()).observe(this, {
                        childList: !0
                    })
            }
            connectedCallback() {
                this._childrenChange()
            }
            attributeChangedCallback(e, t, n) {
                e === _t && null === n && this._closeAll({
                    exceptFirst: !0
                })
            }
            _onClick(e) {
                const t = yt(e.target);
                t && this._toggle(t)
            }
            _onKeyDown(e) {
                const t = document.activeElement,
                    n = yt(t);
                if (!n)
                    return;
                if (t !== n)
                    return;
                if (e.altKey)
                    return;
                let o;
                switch (e.key) {
                    case "ArrowLeft":
                    case "ArrowUp":
                        o = this._prevHeading();
                        break;
                    case "ArrowRight":
                    case "ArrowDown":
                        o = this._nextHeading();
                        break;
                    case "Home":
                        o = this._firstHeading();
                        break;
                    case "End":
                        o = this._lastHeading();
                        break;
                    case "Enter":
                    case " ":
                    case "Spacebar":
                        this._toggle(n);
                        break;
                    default:
                        return
                }
                e.preventDefault(),
                    o && (t.setAttribute("tabindex", "-1"),
                        o.setAttribute("tabindex", "0"),
                        o.focus())
            }
            _toggle(e) {
                e && (e.hasAttribute("content-expanded") ? jt(e) : (this.openOneOnly && this._closeAll(),
                    async function(e) {
                        const t = e.nextElementSibling;
                        if (!t)
                            return;
                        const n = t.getBoundingClientRect().height;
                        e.setAttribute("content-expanded", ""),
                            t.setAttribute("aria-expanded", "true");
                        const o = t.getBoundingClientRect().height;
                        await null,
                        await Object(l.r)(t, {
                                from: n,
                                to: o,
                                duration: 300
                            }),
                            t.style.height = ""
                    }(e)))
            }
            _closeAll(e = {}) {
                const {
                    exceptFirst: t = !1
                } = e;
                let n = [...this.children].filter(e => e.matches("[content-expanded]"));
                t && (n = n.slice(1));
                for (const o of n)
                    jt(o)
            }
            _childrenChange() {
                let e = !1,
                    t = this.firstElementChild;
                for (; t;) {
                    const n = t.nextElementSibling,
                        o = Math.random().toString(36).substr(2, 9);
                    if (!n) {
                        console.error("<multi-panel> requires an even number of element children.");
                        break
                    }
                    t.classList.remove(Ot.panelContent),
                        n.classList.remove(Ot.panelHeading),
                        t.removeAttribute("aria-expanded"),
                        t.removeAttribute("content-expanded"),
                        n.removeAttribute("tabindex"),
                        t.classList.add(Ot.panelHeading),
                        n.classList.add(Ot.panelContent),
                        t.id = `panel-heading-${o}`,
                        t.setAttribute("aria-controls", `panel-content-${o}`),
                        n.id = `panel-content-${o}`,
                        n.setAttribute("aria-labelledby", `panel-heading-${o}`),
                        "0" === t.getAttribute("tabindex") ? e = !0 : t.setAttribute("tabindex", "-1"),
                        n.setAttribute("aria-expanded", t.hasAttribute("content-expanded") ? "true" : "false"),
                        t = n.nextElementSibling
                }!e && this.firstElementChild && this.firstElementChild.setAttribute("tabindex", "0"),
                    this.openOneOnly && this._closeAll({
                        exceptFirst: !0
                    })
            }
            _prevHeading() {
                if (this.firstElementChild === document.activeElement)
                    return this.firstElementChild;
                const e = document.activeElement.previousElementSibling;
                return e ? e.previousElementSibling : void 0
            }
            _nextHeading() {
                const e = document.activeElement.nextElementSibling;
                if (e)
                    return e.nextElementSibling
            }
            _firstHeading() {
                return this.firstElementChild
            }
            _lastHeading() {
                const e = this.lastElementChild;
                if (e && e.classList.contains(Ot.panelHeading))
                    return e;
                const t = this.lastElementChild;
                return t ? t.previousElementSibling : void 0
            }
            get openOneOnly() {
                return this.hasAttribute(_t)
            }
            set openOneOnly(e) {
                e ? this.setAttribute(_t, "") : this.removeAttribute(_t)
            }
        });
        var wt = n(31),
            Ct = n(53);
        class Et extends a.a {
            render({
                blob: e,
                compareTo: t
            }) {
                let n;
                if (t) {
                    const o = e.size / t.size;
                    if (o > 1) {
                        const e = Math.round(100 * (o - 1)) + "%";
                        n = Object(a.b)("span", {
                            class: `${wt.sizeDelta} ${wt.sizeIncrease}`
                        }, "0%" === e ? "slightly" : e, " bigger")
                    } else if (o < 1) {
                        const e = Math.round(100 * (1 - o)) + "%";
                        n = Object(a.b)("span", {
                            class: `${wt.sizeDelta} ${wt.sizeDecrease}`
                        }, "0%" === e ? "slightly" : e, " smaller")
                    } else
                        n = Object(a.b)("span", {
                            class: wt.sizeDelta
                        }, "no change")
                }
                return Object(a.b)("span", null, Ct(e.size), " ", n)
            }
        }
        n(7);
        var xt = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };
        const Pt = {
                "stack-right": wt.stackRight,
                "download-right": wt.downloadRight,
                "download-left": wt.downloadLeft
            },
            St = 500;
        class kt extends a.a {
            constructor() {
                super(...arguments),
                    this.state = {
                        showLoadingState: !1
                    },
                    this.loadingTimeoutId = 0
            }
            componentDidUpdate(e, t) {
                e.loading && !this.props.loading ? (clearTimeout(this.loadingTimeoutId),
                    this.setState({
                        showLoadingState: !1
                    })) : !e.loading && this.props.loading && (this.loadingTimeoutId = self.setTimeout(() => this.setState({
                    showLoadingState: !0
                }), St))
            }
            onCopyToOtherClick(e) {
                e.preventDefault(),
                    this.props.onCopyToOtherClick()
            }
            onDownload() {
                const e = Math.round(this.props.source.file.size / 1024),
                    t = Math.round(this.props.imageFile.size / 1024),
                    n = Math.round(t / e * 1e3);
                ga("send", "event", "compression", "download", {
                    metric1: e,
                    metric2: t,
                    metric3: n
                })
            }
            render({
                source: e,
                imageFile: t,
                downloadUrl: n,
                children: o,
                copyDirection: i,
                buttonPosition: s
            }, {
                showLoadingState: r
            }) {
                return Object(a.b)("div", {
                    class: `${wt.results} ${Pt[s]}`
                }, Object(a.b)("div", {
                    class: wt.resultData
                }, o[0] ? Object(a.b)("div", {
                    class: wt.resultTitle
                }, o) : null, !t || r ? "Working…" : Object(a.b)(Et, {
                    blob: t,
                    compareTo: e && t !== e.file ? e.file : void 0
                })), Object(a.b)("button", {
                    class: wt.copyToOther,
                    title: "Copy settings to other side",
                    onClick: this.onCopyToOtherClick
                }, Object(a.b)(q, {
                    class: wt.copyIcon,
                    copyDirection: i
                })), Object(a.b)("div", {
                    class: wt.download
                }, n && t && Object(a.b)("a", {
                    class: `${wt.downloadLink} ${r ? wt.downloadLinkDisable : ""}`,
                    href: n,
                    download: t.name,
                    title: "Download",
                    onClick: this.onDownload
                }, Object(a.b)(k, {
                    class: wt.downloadIcon
                })), r && Object(a.b)("loading-spinner", {
                    class: wt.spinner
                })))
            }
        }
        xt([c.b], kt.prototype, "onCopyToOtherClick", null),
            xt([c.b], kt.prototype, "onDownload", null);
        const zt = {
            rotate: {
                rotate: 0
            }
        };
        n.d(t, "default", function() {
            return Bt
        });
        var Tt = function(e, t, n, o) {
            var i, s = arguments.length,
                r = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
                r = Reflect.decorate(e, t, n, o);
            else
                for (var a = e.length - 1; a >= 0; a--)
                    (i = e[a]) && (r = (s < 3 ? i(r) : s > 3 ? i(t, n, r) : i(t, n)) || r);
            return s > 3 && r && Object.defineProperty(t, n, r),
                r
        };
        async function It(e, t, n) {
            let o = e;
            return 0 !== t.rotate.rotate && (o = await n.rotate(o, t.rotate)),
                o
        }

        function At(e, t) {
            let n = Object.assign({}, e);
            for (const o of [0, 1]) {
                const t = e.sides[o].downloadUrl;
                t && URL.revokeObjectURL(t),
                    n = U(e, `sides.${o}`, {
                        preprocessed: void 0,
                        file: void 0,
                        downloadUrl: void 0,
                        data: void 0,
                        encodedSettings: void 0
                    })
            }
            return n
        }
        const Rt = ["Top", "Bottom"],
            Lt = ["download-left", "download-right"],
            Mt = document.title;
        class Bt extends a.a {
            constructor(e) {
                super(e),
                    this.widthQuery = window.matchMedia("(max-width: 599px)"),
                    this.state = {
                        source: void 0,
                        loading: !1,
                        loadingCounter: 0,
                        sides: [{
                            latestSettings: {
                                preprocessorState: dt,
                                encoderState: {
                                    type: Ue,
                                    options: Ne
                                }
                            },
                            loadingCounter: 0,
                            loadedCounter: 0,
                            loading: !1
                        }, {
                            latestSettings: {
                                preprocessorState: dt,
                                encoderState: {
                                    type: ae,
                                    options: ue
                                }
                            },
                            loadingCounter: 0,
                            loadedCounter: 0,
                            loading: !1
                        }],
                        mobileView: this.widthQuery.matches
                    },
                    this.encodeCache = new pt,
                    this.leftProcessor = new vt.a,
                    this.rightProcessor = new vt.a,
                    this.updateImageTimeoutIds = [void 0, void 0],
                    this.widthQuery.addListener(this.onMobileWidthChange),
                    this.updateFile(e.file),
                    n.e(0).then(n.bind(null, 56)).then(({
                        mainAppLoaded: e
                    }) => e())
            }
            onMobileWidthChange() {
                this.setState({
                    mobileView: this.widthQuery.matches
                })
            }
            onEncoderTypeChange(e, t) {
                this.setState({
                    sides: $(this.state.sides, `${e}.latestSettings.encoderState`, {
                        type: t,
                        options: st[t].defaultOptions
                    })
                })
            }
            onPreprocessorOptionsChange(e, t) {
                this.setState({
                    sides: $(this.state.sides, `${e}.latestSettings.preprocessorState`, t)
                })
            }
            onEncoderOptionsChange(e, t) {
                this.setState({
                    sides: $(this.state.sides, `${e}.latestSettings.encoderState.options`, t)
                })
            }
            updateDocumentTitle(e = "") {
                document.title = e ? `${e} - ${Mt}` : Mt
            }
            componentWillReceiveProps(e) {
                e.file !== this.props.file && this.updateFile(e.file)
            }
            componentWillUnmount() {
                this.updateDocumentTitle()
            }
            componentDidUpdate(e, t) {
                const {
                    source: n,
                    sides: o
                } = this.state, i = !!n != !!t.source || n && t.source && n.processed !== t.source.processed;
                for (const [s, r] of o.entries()) {
                    const e = t.sides[s].latestSettings,
                        n = r.latestSettings.encoderState !== e.encoderState,
                        o = r.latestSettings.preprocessorState !== e.preprocessorState;
                    (i || n || o) && this.queueUpdateImage(s, {
                        skipPreprocessing: !i && !o
                    })
                }
            }
            async onCopyToOtherClick(e) {
                const t = (e + 1) % 2,
                    n = this.state.sides[t],
                    o = Object.assign({}, this.state.sides[e]);
                o.file && (o.downloadUrl = URL.createObjectURL(o.file)),
                    this.setState({
                        sides: $(this.state.sides, t, o)
                    }),
                    "undo" === await this.props.showSnack("Settings copied across", {
                        timeout: 5e3,
                        actions: ["undo", "dismiss"]
                    }) && this.setState({
                        sides: $(this.state.sides, t, n)
                    })
            }
            async onInputProcessorChange(e) {
                const t = this.state.source;
                if (!t)
                    return;
                const n = t.inputProcessorState.rotate.rotate % 180 != e.rotate.rotate % 180,
                    o = this.state.loadingCounter + 1,
                    i = this.leftProcessor;
                this.setState({
                        loadingCounter: o,
                        loading: !0,
                        source: $(t, "inputProcessorState", e)
                    }),
                    this.leftProcessor.abortCurrent(),
                    this.rightProcessor.abortCurrent();
                try {
                    const r = await It(t.decoded, e, i);
                    if (this.state.loadingCounter !== o)
                        return;
                    let a = Object.assign({}, this.state, {
                        loading: !1
                    });
                    if (a = At(a = $(a, "source.processed", r), a.source),
                        n)
                        for (const e of [0, 1]) {
                            const t = a.sides[e].latestSettings.preprocessorState.resize;
                            a = U(a, `sides.${e}.latestSettings.preprocessorState.resize`, {
                                width: t.height,
                                height: t.width
                            })
                        }
                    this.setState(a)
                } catch (s) {
                    if ("AbortError" === s.name)
                        return;
                    if (console.error(s),
                        this.state.loadingCounter !== o)
                        return;
                    this.props.showSnack("Processing error"),
                        this.setState({
                            loading: !1
                        })
                }
            }
            async updateFile(e) {
                const t = this.state.loadingCounter + 1,
                    n = this.leftProcessor;
                this.setState({
                        loadingCounter: t,
                        loading: !0
                    }),
                    this.leftProcessor.abortCurrent(),
                    this.rightProcessor.abortCurrent();
                try {
                    let i, s;
                    e.type.startsWith("image/svg+xml") ? (s = await async function(e) {
                            const t = new DOMParser,
                                n = await Object(l.c)(e),
                                o = t.parseFromString(n, "image/svg+xml"),
                                i = o.documentElement;
                            if (i.hasAttribute("width") && i.hasAttribute("height")) return Object(l.b)(e);
                            const s = i.getAttribute("viewBox");
                            if (null === s) throw Error("SVG must have width/height or viewBox");
                            const r = s.split(/\s+/);
                            i.setAttribute("width", r[2]), i.setAttribute("height", r[3]);
                            const a = (new XMLSerializer).serializeToString(o);
                            return Object(l.b)(new Blob([a], {
                                type: "image/svg+xml"
                            }))
                        }(e),
                        i = Object(l.g)(s)) : i = await mt(e, n);
                    const r = await It(i, zt, n);
                    if (this.state.loadingCounter !== t)
                        return;
                    let a = Object.assign({}, this.state, {
                        source: {
                            decoded: i,
                            file: e,
                            vectorImage: s,
                            processed: r,
                            inputProcessorState: zt
                        },
                        loading: !1
                    });
                    a = At(a, a.source);
                    for (const e of [0, 1])
                        a = U(a, `sides.${e}.latestSettings.preprocessorState.resize`, {
                            width: r.width,
                            height: r.height,
                            method: s ? "vector" : "lanczos3"
                        });
                    this.updateDocumentTitle(e.name),
                        this.setState(a)
                } catch (o) {
                    if ("AbortError" === o.name)
                        return;
                    if (console.error(o),
                        this.state.loadingCounter !== t)
                        return;
                    this.props.showSnack("Invalid image"),
                        this.setState({
                            loading: !1
                        })
                }
            }
            queueUpdateImage(e, t = {}) {
                clearTimeout(this.updateImageTimeoutIds[e]),
                    this.updateImageTimeoutIds[e] = self.setTimeout(() => {
                        this.updateImage(e, t).catch(e => {
                            console.error(e)
                        })
                    }, 100)
            }
            async updateImage(e, t = {}) {
                const {
                    skipPreprocessing: n = !1
                } = t, {
                    source: o
                } = this.state;
                if (!o)
                    return;
                const i = this.state.sides[e].loadingCounter + 1;
                let s = U(this.state.sides, e, {
                    loadingCounter: i,
                    loading: !0
                });
                this.setState({
                    sides: s
                });
                const r = s[e],
                    a = r.latestSettings;
                let l, h, u;
                const p = this.encodeCache.match(o.processed, a.preprocessorState, a.encoderState),
                    d = 0 === e ? this.leftProcessor : this.rightProcessor;
                if (d.abortCurrent(),
                    p)
                    ({
                        file: l,
                        preprocessed: h,
                        data: u
                    } = p);
                else
                    try {
                        a.encoderState.type === Ue ? (l = o.file,
                            u = o.processed) : (h = n && r.preprocessed ? r.preprocessed : await async function(e, t, n) {
                                let o = e.processed;
                                if (t.resize.enabled)
                                    if ("vector" === t.resize.method && e.vectorImage) o = n.vectorResize(e.vectorImage, t.resize);
                                    else if (function(e) {
                                        return "hqx" === e.method
                                    }(t.resize)) {
                                    o = await n.workerResize(o, t.resize), n.terminateWorker();
                                    const e = Object.assign({}, t.resize, {
                                        method: "catrom"
                                    });
                                    o = await n.workerResize(o, e)
                                } else o = He(t.resize) ? await n.workerResize(o, t.resize) : n.resize(o, t.resize);
                                return t.quantizer.enabled && (o = await n.imageQuant(o, t.quantizer)), o
                            }(o, a.preprocessorState, d),
                            l = await async function(e, t, n, o) {
                                    const i = await (() => {
                                            switch (t.type) {
                                                case Ve:
                                                    return o.optiPngEncode(e, t.options);
                                                case ae:
                                                    return o.mozjpegEncode(e, t.options);
                                                case Ee:
                                                    return o.webpEncode(e, t.options);
                                                case Xe.type:
                                                    return o.browserPngEncode(e);
                                                case Qe.type:
                                                    return o.browserJpegEncode(e, t.options);
                                                case Ke.type:
                                                    return o.browserWebpEncode(e, t.options);
                                                case et.type:
                                                    return o.browserGifEncode(e);
                                                case tt.type:
                                                    return o.browserTiffEncode(e);
                                                case nt.type:
                                                    return o.browserJp2Encode(e);
                                                case ot.type:
                                                    return o.browserBmpEncode(e);
                                                case it.type:
                                                    return o.browserPdfEncode(e);
                                                default:
                                                    throw Error(`Unexpected encoder ${JSON.stringify(t)}`)
                                            }
                                        })(),
                                        s = st[t.type];
                                    return new c.a([i], n.replace(/.[^.]*$/, `.${s.extension}`), {
                                        type: s.mimeType
                                    })
                                }(h, a.encoderState, o.file.name, d),
                                u = await mt(l, d),
                                this.encodeCache.add({
                                    data: u,
                                    preprocessed: h,
                                    file: l,
                                    sourceData: o.processed,
                                    encoderState: a.encoderState,
                                    preprocessorState: a.preprocessorState
                                }))
                    } catch (g) {
                        if ("AbortError" === g.name)
                            return;
                        throw this.props.showSnack(`Processing error (type=${a.encoderState.type}): ${g}`),
                            g
                    }
                const b = this.state.sides[e];
                i < b.loadedCounter || (b.downloadUrl && URL.revokeObjectURL(b.downloadUrl),
                    s = U(this.state.sides, e, {
                        file: l,
                        data: u,
                        preprocessed: h,
                        downloadUrl: URL.createObjectURL(l),
                        loading: s[e].loadingCounter !== i,
                        loadedCounter: i,
                        encodedSettings: a
                    }),
                    this.setState({
                        sides: s
                    }))
            }
            render({
                onBack: e
            }, {
                loading: t,
                sides: n,
                source: o,
                mobileView: i
            }) {
                const [s, r] = n, [c, l] = n.map(e => e.data), u = n.map((e, t) => Object(a.b)(ht, {
                    source: o,
                    mobileView: i,
                    preprocessorState: e.latestSettings.preprocessorState,
                    encoderState: e.latestSettings.encoderState,
                    onEncoderTypeChange: this.onEncoderTypeChange.bind(this, t),
                    onEncoderOptionsChange: this.onEncoderOptionsChange.bind(this, t),
                    onPreprocessorOptionsChange: this.onPreprocessorOptionsChange.bind(this, t)
                })), p = i ? ["down", "up"] : ["right", "left"], d = n.map((e, n) => Object(a.b)(kt, {
                    downloadUrl: e.downloadUrl,
                    imageFile: e.file,
                    source: o,
                    loading: t || e.loading,
                    copyDirection: p[n],
                    onCopyToOtherClick: this.onCopyToOtherClick.bind(this, n),
                    buttonPosition: i ? "stack-right" : Lt[n]
                }, i ? [Object(a.b)(B, {
                    class: h.expandIcon,
                    key: "expand-icon"
                }), `${Rt[n]} (${st[e.latestSettings.encoderState.type].label})`] : null)), b = s.encodedSettings || s.latestSettings, g = r.encodedSettings || r.latestSettings, f = b.preprocessorState.resize.enabled && "contain" === b.preprocessorState.resize.fitMethod, m = g.preprocessorState.resize.enabled && "contain" === g.preprocessorState.resize.fitMethod;
                return Object(a.b)("div", {
                    class: h.compress
                }, Object(a.b)(Y, {
                    source: o,
                    mobileView: i,
                    leftCompressed: c,
                    rightCompressed: l,
                    leftImgContain: f,
                    rightImgContain: m,
                    onBack: e,
                    inputProcessorState: o && o.inputProcessorState,
                    onInputProcessorChange: this.onInputProcessorChange
                }), i ? Object(a.b)("div", {
                    class: h.options
                }, Object(a.b)("multi-panel", {
                    class: h.multiPanel,
                    "open-one-only": !0
                }, d[0], u[0], d[1], u[1])) : [Object(a.b)("div", {
                    class: h.options,
                    key: "options0"
                }, u[0], d[0]), Object(a.b)("div", {
                    class: h.options,
                    key: "options1"
                }, u[1], d[1])])
            }
        }
        Tt([c.b], Bt.prototype, "onMobileWidthChange", null),
            Tt([c.b], Bt.prototype, "onInputProcessorChange", null),
            Tt([c.b], Bt.prototype, "updateFile", null)
    }])
]);
//# sourceMappingURL=main-app.2c433.js.map
