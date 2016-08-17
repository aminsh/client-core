/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.core", "./kendo.color", "./kendo.drawing"], e)
}(function () {
    return function (e, t) {
        e.PDFMixin = {
            extend: function (e) {
                e.events.push("pdfExport"), e.options.pdf = this.options, e.saveAsPDF = this.saveAsPDF, e._drawPDF = this._drawPDF, e._drawPDFShadow = this._drawPDFShadow
            },
            options: {
                fileName: "Export.pdf",
                proxyURL: "",
                paperSize: "auto",
                allPages: !1,
                landscape: !1,
                margin: null,
                title: null,
                author: null,
                subject: null,
                keywords: null,
                creator: "Kendo UI PDF Generator",
                date: null
            },
            saveAsPDF: function () {
                var n, i = new t.Deferred,
                    o = i.promise(),
                    r = {
                        promise: o
                    };
                if (!this.trigger("pdfExport", r)) return n = this.options.pdf, n.multiPage = n.allPages, this._drawPDF(i).then(function (t) {
                    return e.drawing.exportPDF(t, n)
                }).done(function (t) {
                    e.saveAs({
                        dataURI: t,
                        fileName: n.fileName,
                        proxyURL: n.proxyURL,
                        forceProxy: n.forceProxy,
                        proxyTarget: n.proxyTarget
                    }), i.resolve()
                }).fail(function (e) {
                    i.reject(e)
                }), o
            },
            _drawPDF: function () {
                return e.drawing.drawDOM(this.wrapper)
            },
            _drawPDFShadow: function (n) {
                var i, o, r;
                return n = n || {}, i = this.wrapper, o = t("<div class='k-pdf-export-shadow'>"), n.width && o.css({
                    width: n.width,
                    overflow: "visible"
                }), i.before(o), o.append(n.content || i.clone(!0, !0)), r = e.drawing.drawDOM(o), r.always(function () {
                    o.remove()
                }), r
            }
        }
    }(kendo, window.kendo.jQuery),
        function (e, t, n) {
            "use strict";

            function i() {
                function e() {
                    var t, o, r;
                    for (t = 0; arguments.length > t; ++t) {
                        if (o = arguments[t], o === n) throw Error("Cannot output undefined to PDF");
                        if (o instanceof b) o.beforeRender(e), o.render(e);
                        else if (V(o)) g(o, e);
                        else if (p(o)) m(o, e);
                        else if ("number" == typeof o) {
                            if (isNaN(o)) throw Error("Cannot output NaN to PDF");
                            r = o.toFixed(7), r.indexOf(".") >= 0 && (r = r.replace(/\.?0+$/, "")), "-0" == r && (r = "0"), i.writeString(r)
                        } else /string|boolean/.test(typeof o) ? i.writeString(o + "") : "function" == typeof o.get ? i.write(o.get()) : "object" == typeof o && (o ? e(new q(o)) : i.writeString("null"))
                    }
                }

                var t = 0,
                    i = B();
                return e.writeData = function (e) {
                    i.write(e)
                }, e.withIndent = function (n) {
                    ++t, n(e), --t
                }, e.indent = function () {
                    e(it, h("", 2 * t, "  ")), e.apply(null, arguments)
                }, e.offset = function () {
                    return i.offset()
                }, e.toString = function () {
                    throw Error("FIX CALLER")
                }, e.get = function () {
                    return i.get()
                }, e.stream = function () {
                    return i
                }, e
            }

            function o(e, t) {
                var n = e.beforeRender,
                    i = e.render;
                e.beforeRender = function () {
                }, e.render = function (e) {
                    e(t, " 0 R")
                }, e.renderFull = function (o) {
                    e._offset = o.offset(), o(t, " 0 obj "), n.call(e, o), i.call(e, o), o(" endobj")
                }
            }

            function r(e) {
                var t, n = e("paperSize", at.a4);
                if (!n) return {};
                if ("string" == typeof n && (n = at[n.toLowerCase()], null == n)) throw Error("Unknown paper size");
                return n[0] = y(n[0]), n[1] = y(n[1]), e("landscape", !1) && (n = [Math.max(n[0], n[1]), Math.min(n[0], n[1])]), t = e("margin"), t && ("string" == typeof t || "number" == typeof t ? (t = y(t, 0), t = {
                    left: t,
                    top: t,
                    right: t,
                    bottom: t
                }) : t = {
                    left: y(t.left, 0),
                    top: y(t.top, 0),
                    right: y(t.right, 0),
                    bottom: y(t.bottom, 0)
                }, e("addMargin") && (n[0] += t.left + t.right, n[1] += t.top + t.bottom)), {
                    paperSize: n,
                    margin: t
                }
            }

            function a(e) {
                function t(t, n) {
                    return e && null != e[t] ? e[t] : n
                }

                var n, a, s = this,
                    l = i(),
                    c = 0,
                    d = [];
                s.getOption = t, s.attach = function (e) {
                    return d.indexOf(e) < 0 && (o(e, ++c), d.push(e)), e
                }, s.pages = [], s.FONTS = {}, s.IMAGES = {}, s.GRAD_COL_FUNCTIONS = {}, s.GRAD_OPC_FUNCTIONS = {}, s.GRAD_COL = {}, s.GRAD_OPC = {}, n = s.attach(new Y), a = s.attach(new Q), n.setPages(a), s.addPage = function (e) {
                    var t, n, o, l = r(function (t, n) {
                            return e && null != e[t] ? e[t] : n
                        }),
                        c = l.paperSize,
                        d = l.margin,
                        h = c[0],
                        u = c[1];
                    return d && (h -= d.left + d.right, u -= d.top + d.bottom), t = new $(i(), null, !0), n = {
                        Contents: s.attach(t),
                        Parent: a,
                        MediaBox: [0, 0, c[0], c[1]]
                    }, o = new J(s, n), o._content = t, a.addPage(s.attach(o)), o.transform(1, 0, 0, -1, 0, c[1]), d && (o.translate(d.left, d.top), o.rect(0, 0, h, u), o.clip()), s.pages.push(o), o
                }, s.render = function () {
                    var e, i;
                    for (l("%PDF-1.4", it, "%?�????????", it, it), e = 0; d.length > e; ++e) d[e].renderFull(l), l(it, it);
                    for (i = l.offset(), l("xref", it, 0, " ", d.length + 1, it), l("0000000000 65535 f ", it), e = 0; d.length > e; ++e) l(u(d[e]._offset, 10), " 00000 n ", it);
                    return l(it), l("trailer", it), l(new q({
                        Size: d.length + 1,
                        Root: n,
                        Info: new q({
                            Producer: new U(t("producer", "Kendo UI PDF Generator")),
                            Title: new U(t("title", "")),
                            Author: new U(t("author", "")),
                            Subject: new U(t("subject", "")),
                            Keywords: new U(t("keywords", "")),
                            Creator: new U(t("creator", "Kendo UI PDF Generator")),
                            CreationDate: t("date", new Date)
                        })
                    }), it, it), l("startxref", it, i, it), l("%%EOF", it), l.stream().offset(0)
                }
            }

            function s(t, n) {
                function i() {
                    e.console && (e.console.error ? e.console.error("Cannot load URL: %s", t) : e.console.log("Cannot load URL: %s", t)), n(null)
                }

                var o = new XMLHttpRequest;
                o.open("GET", t, !0), nt && (o.responseType = "arraybuffer"), o.onload = function () {
                    200 == o.status || 304 == o.status ? n(nt ? new Uint8Array(o.response) : new VBArray(o.responseBody).toArray()) : i()
                }, o.onerror = i, o.send(null)
            }

            function l(e, t) {
                var n = st[e];
                n ? t(n) : s(e, function (n) {
                    if (null == n) throw Error("Cannot load font from " + e);
                    var i = new tt.pdf.TTFFont(n);
                    st[e] = i, t(i)
                })
            }

            function c(e, t) {
                function i(e) {
                    c.src = e, c.complete && !tt.support.browser.msie ? r() : (c.onload = r, c.onerror = o)
                }

                function o() {
                    t(lt[e] = "TAINTED")
                }

                function r() {
                    var i, r, l, d, h, u, f, p, g, m, v, _;
                    if (s && /^image\/jpe?g$/i.test(s.type)) return i = new FileReader, i.onload = function () {
                        c = new C(c.width, c.height, B(new Uint8Array(this.result))), URL.revokeObjectURL(a), t(lt[e] = c)
                    }, i.readAsArrayBuffer(s), n;
                    r = document.createElement("canvas"), r.width = c.width, r.height = c.height, l = r.getContext("2d"), l.drawImage(c, 0, 0);
                    try {
                        d = l.getImageData(0, 0, c.width, c.height)
                    } catch (w) {
                        return o()
                    } finally {
                        a && URL.revokeObjectURL(a)
                    }
                    for (h = !1, u = B(), f = B(), p = d.data, g = 0; p.length > g;) u.writeByte(p[g++]), u.writeByte(p[g++]), u.writeByte(p[g++]), m = p[g++], 255 > m && (h = !0), f.writeByte(m);
                    h ? c = new S(c.width, c.height, u, f) : (v = r.toDataURL("image/jpeg"), v = v.substr(v.indexOf(";base64,") + 8), _ = B(), _.writeBase64(v), _.offset(0), c = new C(c.width, c.height, _)), t(lt[e] = c)
                }

                var a, s, l, c = lt[e];
                c ? t(c) : (c = new Image, /^data:/i.test(e) || (c.crossOrigin = "Anonymous"), nt && !/^data:/i.test(e) ? (l = new XMLHttpRequest, l.onload = function () {
                    s = l.response, a = URL.createObjectURL(s), i(a)
                }, l.onerror = o, l.open("GET", e, !0), l.responseType = "blob", l.send()) : i(e))
            }

            function d(e) {
                return function (t, n) {
                    var i = t.length,
                        o = i;
                    if (0 === i) return n();
                    for (; o-- > 0;) e(t[o], function () {
                        0 === --i && n()
                    })
                }
            }

            function h(e, t, n) {
                for (; t > e.length;) e = n + e;
                return e
            }

            function u(e, t) {
                return h(e + "", t, "0")
            }

            function f(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function p(e) {
                return e instanceof Date
            }

            function g(e, t) {
                t("["), e.length > 0 && t.withIndent(function () {
                    for (var n = 0; e.length > n; ++n) n > 0 && n % 8 === 0 ? t.indent(e[n]) : t(" ", e[n])
                }), t(" ]")
            }

            function m(e, t) {
                t("(D:", u(e.getUTCFullYear(), 4), u(e.getUTCMonth() + 1, 2), u(e.getUTCDate(), 2), u(e.getUTCHours(), 2), u(e.getUTCMinutes(), 2), u(e.getUTCSeconds(), 2), "Z)")
            }

            function v(e) {
                return e * (72 / 25.4)
            }

            function _(e) {
                return v(10 * e)
            }

            function w(e) {
                return 72 * e
            }

            function y(e, n) {
                var i, o;
                if ("number" == typeof e) return e;
                if ("string" == typeof e && (i = /^\s*([0-9.]+)\s*(mm|cm|in|pt)\s*$/.exec(e), i && (o = t(i[1]), !isNaN(o)))) return "pt" == i[2] ? o : {
                    mm: v,
                    cm: _,
                    "in": w
                }[i[2]](o);
                if (null != n) return n;
                throw Error("Can't parse unit: " + e)
            }

            function b() {
            }

            function x(e, t, n) {
                n || (n = b), e.prototype = new n;
                for (var i in t) f(t, i) && (e.prototype[i] = t[i]);
                return e
            }

            function k(e) {
                return f(G, e) ? G[e] : G[e] = new j(e)
            }

            function C(e, t, n) {
                this.asStream = function () {
                    var i = new $(n, {
                        Type: k("XObject"),
                        Subtype: k("Image"),
                        Width: e,
                        Height: t,
                        BitsPerComponent: 8,
                        ColorSpace: k("DeviceRGB"),
                        Filter: k("DCTDecode")
                    });
                    return i._resourceName = k("I" + ++ot), i
                }
            }

            function S(e, t, n, i) {
                this.asStream = function (o) {
                    var r = new $(i, {
                            Type: k("XObject"),
                            Subtype: k("Image"),
                            Width: e,
                            Height: t,
                            BitsPerComponent: 8,
                            ColorSpace: k("DeviceGray")
                        }, !0),
                        a = new $(n, {
                            Type: k("XObject"),
                            Subtype: k("Image"),
                            Width: e,
                            Height: t,
                            BitsPerComponent: 8,
                            ColorSpace: k("DeviceRGB"),
                            SMask: o.attach(r)
                        }, !0);
                    return a._resourceName = k("I" + ++ot), a
                }
            }

            function T(e) {
                return e.map(function (e) {
                    return V(e) ? T(e) : "number" == typeof e ? (Math.round(1e3 * e) / 1e3).toFixed(3) : e
                }).join(" ")
            }

            function D(e, t, n, i, o, r, a) {
                var s = T([t, n, i, o, r, a]),
                    l = e.GRAD_COL_FUNCTIONS[s];
                return l || (l = e.GRAD_COL_FUNCTIONS[s] = e.attach(new q({
                    FunctionType: 2,
                    Domain: [0, 1],
                    Range: [0, 1, 0, 1, 0, 1],
                    N: 1,
                    C0: [t, n, i],
                    C1: [o, r, a]
                }))), l
            }

            function A(e, t, n) {
                var i = T([t, n]),
                    o = e.GRAD_OPC_FUNCTIONS[i];
                return o || (o = e.GRAD_OPC_FUNCTIONS[i] = e.attach(new q({
                    FunctionType: 2,
                    Domain: [0, 1],
                    Range: [0, 1],
                    N: 1,
                    C0: [t],
                    C1: [n]
                }))), o
            }

            function P(e, t) {
                function n(e) {
                    return 1 == e.length ? e[0] : {
                        FunctionType: 3,
                        Functions: e,
                        Domain: [0, 1],
                        Bounds: h,
                        Encode: u
                    }
                }

                var i, o, r, a, s, l = !1,
                    c = [],
                    d = [],
                    h = [],
                    u = [];
                for (i = 1; t.length > i; ++i) o = t[i - 1], r = t[i], a = o.color, s = r.color, d.push(D(e, a.r, a.g, a.b, s.r, s.g, s.b)), (1 > a.a || 1 > s.a) && (l = !0), h.push(r.offset), u.push(0, 1);
                if (l)
                    for (i = 1; t.length > i; ++i) o = t[i - 1], r = t[i], a = o.color, s = r.color, c.push(A(e, a.a, s.a));
                return h.pop(), {
                    hasAlpha: l,
                    colors: n(d),
                    opacities: l ? n(c) : null
                }
            }

            function E(e, t, n, i, o, r) {
                var a, s, l;
                return r || (l = [t].concat(i), n.forEach(function (e) {
                    l.push(e.offset, e.color.r, e.color.g, e.color.b)
                }), s = T(l), a = e.GRAD_COL[s]), a || (a = new q({
                    Type: k("Shading"),
                    ShadingType: t ? 3 : 2,
                    ColorSpace: k("DeviceRGB"),
                    Coords: i,
                    Domain: [0, 1],
                    Function: o,
                    Extend: [!0, !0]
                }), e.attach(a), a._resourceName = "S" + ++ot, s && (e.GRAD_COL[s] = a)), a
            }

            function M(e, t, n, i, o, r) {
                var a, s, l;
                return r || (l = [t].concat(i), n.forEach(function (e) {
                    l.push(e.offset, e.color.a)
                }), s = T(l), a = e.GRAD_OPC[s]), a || (a = new q({
                    Type: k("ExtGState"),
                    AIS: !1,
                    CA: 1,
                    ca: 1,
                    SMask: {
                        Type: k("Mask"),
                        S: k("Luminosity"),
                        G: e.attach(new $("/a0 gs /s0 sh", {
                            Type: k("XObject"),
                            Subtype: k("Form"),
                            FormType: 1,
                            BBox: r ? [r.left, r.top + r.height, r.left + r.width, r.top] : [0, 1, 1, 0],
                            Group: {
                                Type: k("Group"),
                                S: k("Transparency"),
                                CS: k("DeviceGray"),
                                I: !0
                            },
                            Resources: {
                                ExtGState: {
                                    a0: {
                                        CA: 1,
                                        ca: 1
                                    }
                                },
                                Shading: {
                                    s0: {
                                        ColorSpace: k("DeviceGray"),
                                        Coords: i,
                                        Domain: [0, 1],
                                        ShadingType: t ? 3 : 2,
                                        Function: o,
                                        Extend: [!0, !0]
                                    }
                                }
                            }
                        }))
                    }
                }), e.attach(a), a._resourceName = "O" + ++ot, s && (e.GRAD_OPC[s] = a)), a
            }

            function I(e, t, n) {
                var i = "radial" == t.type,
                    o = P(e, t.stops),
                    r = i ? [t.start.x, t.start.y, t.start.r, t.end.x, t.end.y, t.end.r] : [t.start.x, t.start.y, t.end.x, t.end.y],
                    a = E(e, i, t.stops, r, o.colors, t.userSpace && n),
                    s = o.hasAlpha ? M(e, i, t.stops, r, o.opacities, t.userSpace && n) : null;
                return {
                    hasAlpha: o.hasAlpha,
                    shading: a,
                    opacity: s
                }
            }

            function B(t) {
                function n() {
                    return T >= D
                }

                function i() {
                    return D > T ? t[T++] : 0
                }

                function o(e) {
                    b(T), t[T++] = 255 & e, T > D && (D = T)
                }

                function r() {
                    return i() << 8 | i()
                }

                function a(e) {
                    o(e >> 8), o(e)
                }

                function s() {
                    var e = r();
                    return e >= 32768 ? e - 65536 : e
                }

                function l(e) {
                    a(0 > e ? e + 65536 : e)
                }

                function c() {
                    return 65536 * r() + r()
                }

                function d(e) {
                    a(e >>> 16 & 65535), a(65535 & e)
                }

                function h() {
                    var e = c();
                    return e >= 2147483648 ? e - 4294967296 : e
                }

                function u(e) {
                    d(0 > e ? e + 4294967296 : e)
                }

                function f() {
                    return c() / 65536
                }

                function p(e) {
                    d(Math.round(65536 * e))
                }

                function g() {
                    return h() / 65536
                }

                function m(e) {
                    u(Math.round(65536 * e))
                }

                function v(e) {
                    return y(e, i)
                }

                function _(e) {
                    return String.fromCharCode.apply(String, v(e))
                }

                function w(e) {
                    for (var t = 0; e.length > t; ++t) o(e.charCodeAt(t))
                }

                function y(e, t) {
                    for (var n = Array(e), i = 0; e > i; ++i) n[i] = t();
                    return n
                }

                var b, x, k, C, S, T = 0,
                    D = 0;
                return null == t ? t = nt ? new Uint8Array(256) : [] : D = t.length, b = nt ? function (e) {
                    if (e >= t.length) {
                        var n = new Uint8Array(Math.max(e + 256, 2 * t.length));
                        n.set(t, 0), t = n
                    }
                } : function () {
                }, x = nt ? function () {
                    return new Uint8Array(t.buffer, 0, D)
                } : function () {
                    return t
                }, k = nt ? function (e) {
                    if ("string" == typeof e) return w(e);
                    var n = e.length;
                    b(T + n), t.set(e, T), T += n, T > D && (D = T)
                } : function (e) {
                    if ("string" == typeof e) return w(e);
                    for (var t = 0; e.length > t; ++t) o(e[t])
                }, C = nt ? function (e, n) {
                    if (t.buffer.slice) return new Uint8Array(t.buffer.slice(e, e + n));
                    var i = new Uint8Array(n);
                    return i.set(new Uint8Array(t.buffer, e, n)), i
                } : function (e, n) {
                    return t.slice(e, e + n)
                }, S = {
                    eof: n,
                    readByte: i,
                    writeByte: o,
                    readShort: r,
                    writeShort: a,
                    readLong: c,
                    writeLong: d,
                    readFixed: f,
                    writeFixed: p,
                    readShort_: s,
                    writeShort_: l,
                    readLong_: h,
                    writeLong_: u,
                    readFixed_: g,
                    writeFixed_: m,
                    read: v,
                    write: k,
                    readString: _,
                    writeString: w,
                    times: y,
                    get: x,
                    slice: C,
                    offset: function (e) {
                        return null != e ? (T = e, S) : T
                    },
                    skip: function (e) {
                        T += e
                    },
                    toString: function () {
                        throw Error("FIX CALLER.  BinaryStream is no longer convertible to string!")
                    },
                    length: function () {
                        return D
                    },
                    saveExcursion: function (e) {
                        var t = T;
                        try {
                            return e()
                        } finally {
                            T = t
                        }
                    },
                    writeBase64: function (t) {
                        e.atob ? w(e.atob(t)) : k(rt.decode(t))
                    },
                    base64: function () {
                        return rt.encode(x())
                    }
                }
            }

            function z(e) {
                return e.replace(/^\s*(['"])(.*)\1\s*$/, "$2")
            }

            function L(e) {
                var t, n = /^\s*((normal|italic)\s+)?((normal|small-caps)\s+)?((normal|bold|\d+)\s+)?(([0-9.]+)(px|pt))(\/(([0-9.]+)(px|pt)|normal))?\s+(.*?)\s*$/i,
                    i = n.exec(e);
                return i ? (t = i[8] ? parseInt(i[8], 10) : 12, {
                    italic: i[2] && "italic" == i[2].toLowerCase(),
                    variant: i[4],
                    bold: i[6] && /bold|700/i.test(i[6]),
                    fontSize: t,
                    lineHeight: i[12] ? "normal" == i[12] ? t : parseInt(i[12], 10) : null,
                    fontFamily: i[14].split(/\s*,\s*/g).map(z)
                }) : {
                    fontSize: 12,
                    fontFamily: "sans-serif"
                }
            }

            function F(e) {
                function t(t) {
                    return e.bold && (t += "|bold"), e.italic && (t += "|italic"), t.toLowerCase()
                }

                var n, i, o, r = e.fontFamily;
                if (r instanceof Array)
                    for (o = 0; r.length > o && (n = t(r[o]), !(i = et[n])); ++o);
                else i = et[r.toLowerCase()];
                for (;
                    "function" == typeof i;) i = i();
                return i || (i = "Times-Roman"), i
            }

            function R(e, t) {
                e = e.toLowerCase(), et[e] = function () {
                    return et[t]
                }, et[e + "|bold"] = function () {
                    return et[t + "|bold"]
                }, et[e + "|italic"] = function () {
                    return et[t + "|italic"]
                }, et[e + "|bold|italic"] = function () {
                    return et[t + "|bold|italic"]
                }
            }

            function O(e, t) {
                if (1 == arguments.length)
                    for (var n in e) f(e, n) && O(n, e[n]);
                else switch (e = e.toLowerCase(), et[e] = t, e) {
                    case "dejavu sans":
                        et["sans-serif"] = t;
                        break;
                    case "dejavu sans|bold":
                        et["sans-serif|bold"] = t;
                        break;
                    case "dejavu sans|italic":
                        et["sans-serif|italic"] = t;
                        break;
                    case "dejavu sans|bold|italic":
                        et["sans-serif|bold|italic"] = t;
                        break;
                    case "dejavu serif":
                        et.serif = t;
                        break;
                    case "dejavu serif|bold":
                        et["serif|bold"] = t;
                        break;
                    case "dejavu serif|italic":
                        et["serif|italic"] = t;
                        break;
                    case "dejavu serif|bold|italic":
                        et["serif|bold|italic"] = t;
                        break;
                    case "dejavu mono":
                        et.monospace = t;
                        break;
                    case "dejavu mono|bold":
                        et["monospace|bold"] = t;
                        break;
                    case "dejavu mono|italic":
                        et["monospace|italic"] = t;
                        break;
                    case "dejavu mono|bold|italic":
                        et["monospace|bold|italic"] = t
                }
            }

            function H(e, t) {
                var n = e[0],
                    i = e[1],
                    o = e[2],
                    r = e[3],
                    a = e[4],
                    s = e[5],
                    l = t[0],
                    c = t[1],
                    d = t[2],
                    h = t[3],
                    u = t[4],
                    f = t[5];
                return [n * l + i * d, n * c + i * h, o * l + r * d, o * c + r * h, a * l + s * d + u, a * c + s * h + f]
            }

            function N(e) {
                return 1 === e[0] && 0 === e[1] && 0 === e[2] && 1 === e[3] && 0 === e[4] && 0 === e[5]
            }

            var V, U, W, j, G, q, $, Y, Q, X, K, Z, J, et, tt = e.kendo,
                nt = !!e.Uint8Array,
                it = "\n",
                ot = 0,
                rt = function () {
                    var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
                    return {
                        decode: function (t) {
                            for (var n, i, o, r, a, s, l, c = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""), d = 0, h = c.length, u = []; h > d;) n = e.indexOf(c.charAt(d++)), i = e.indexOf(c.charAt(d++)), o = e.indexOf(c.charAt(d++)), r = e.indexOf(c.charAt(d++)), a = n << 2 | i >>> 4, s = (15 & i) << 4 | o >>> 2, l = (3 & o) << 6 | r, u.push(a), 64 != o && u.push(s), 64 != r && u.push(l);
                            return u
                        },
                        encode: function (t) {
                            for (var n, i, o, r, a, s, l, c = 0, d = t.length, h = ""; d > c;) n = t[c++], i = t[c++], o = t[c++], r = n >>> 2, a = (3 & n) << 4 | i >>> 4, s = (15 & i) << 2 | o >>> 6, l = 63 & o, c - d == 2 ? s = l = 64 : c - d == 1 && (l = 64), h += e.charAt(r) + e.charAt(a) + e.charAt(s) + e.charAt(l);
                            return h
                        }
                    }
                }(),
                at = {
                    a0: [2383.94, 3370.39],
                    a1: [1683.78, 2383.94],
                    a2: [1190.55, 1683.78],
                    a3: [841.89, 1190.55],
                    a4: [595.28, 841.89],
                    a5: [419.53, 595.28],
                    a6: [297.64, 419.53],
                    a7: [209.76, 297.64],
                    a8: [147.4, 209.76],
                    a9: [104.88, 147.4],
                    a10: [73.7, 104.88],
                    b0: [2834.65, 4008.19],
                    b1: [2004.09, 2834.65],
                    b2: [1417.32, 2004.09],
                    b3: [1000.63, 1417.32],
                    b4: [708.66, 1000.63],
                    b5: [498.9, 708.66],
                    b6: [354.33, 498.9],
                    b7: [249.45, 354.33],
                    b8: [175.75, 249.45],
                    b9: [124.72, 175.75],
                    b10: [87.87, 124.72],
                    c0: [2599.37, 3676.54],
                    c1: [1836.85, 2599.37],
                    c2: [1298.27, 1836.85],
                    c3: [918.43, 1298.27],
                    c4: [649.13, 918.43],
                    c5: [459.21, 649.13],
                    c6: [323.15, 459.21],
                    c7: [229.61, 323.15],
                    c8: [161.57, 229.61],
                    c9: [113.39, 161.57],
                    c10: [79.37, 113.39],
                    executive: [521.86, 756],
                    folio: [612, 936],
                    legal: [612, 1008],
                    letter: [612, 792],
                    tabloid: [792, 1224]
                },
                st = {
                    "Times-Roman": !0,
                    "Times-Bold": !0,
                    "Times-Italic": !0,
                    "Times-BoldItalic": !0,
                    Helvetica: !0,
                    "Helvetica-Bold": !0,
                    "Helvetica-Oblique": !0,
                    "Helvetica-BoldOblique": !0,
                    Courier: !0,
                    "Courier-Bold": !0,
                    "Courier-Oblique": !0,
                    "Courier-BoldOblique": !0,
                    Symbol: !0,
                    ZapfDingbats: !0
                },
                lt = {},
                ct = d(l),
                dt = d(c);
            a.prototype = {
                loadFonts: ct,
                loadImages: dt,
                getFont: function (e) {
                    var t = this.FONTS[e];
                    if (!t) {
                        if (t = st[e], !t) throw Error("Font " + e + " has not been loaded");
                        t = this.attach(t === !0 ? new X(e) : new K(this, t)), this.FONTS[e] = t
                    }
                    return t
                },
                getImage: function (e) {
                    var t = this.IMAGES[e];
                    if (!t) {
                        if (t = lt[e], !t) throw Error("Image " + e + " has not been loaded");
                        if ("TAINTED" === t) return null;
                        t = this.IMAGES[e] = this.attach(t.asStream(this))
                    }
                    return t
                },
                getOpacityGS: function (e, n) {
                    var i, o, r, a = t(e).toFixed(3);
                    return e = t(a), a += n ? "S" : "F", i = this._opacityGSCache || (this._opacityGSCache = {}), o = i[a], o || (r = {
                        Type: k("ExtGState")
                    }, n ? r.CA = e : r.ca = e, o = this.attach(new q(r)), o._resourceName = k("GS" + ++ot), i[a] = o), o
                },
                dict: function (e) {
                    return new q(e)
                },
                name: function (e) {
                    return k(e)
                },
                stream: function (e, t) {
                    return new $(t, e)
                }
            }, V = Array.isArray || function (e) {
                return e instanceof Array
            }, b.prototype.beforeRender = function () {
            }, U = x(function (e) {
                this.value = e
            }, {
                render: function (e) {
                    var t, n = "",
                        i = this.escape();
                    for (t = 0; i.length > t; ++t) n += String.fromCharCode(255 & i.charCodeAt(t));
                    e("(", n, ")")
                },
                escape: function () {
                    return this.value.replace(/([\(\)\\])/g, "\\$1")
                },
                toString: function () {
                    return this.value
                }
            }), W = x(function (e) {
                this.value = e
            }, {
                render: function (e) {
                    e("<");
                    for (var t = 0; this.value.length > t; ++t) e(u(this.value.charCodeAt(t).toString(16), 4));
                    e(">")
                }
            }, U), j = x(function (e) {
                this.name = e
            }, {
                render: function (e) {
                    e("/" + this.escape())
                },
                escape: function () {
                    return this.name.replace(/[^\x21-\x7E]/g, function (e) {
                        return "#" + u(e.charCodeAt(0).toString(16), 2)
                    })
                },
                toString: function () {
                    return this.name
                }
            }), G = {}, j.get = k, q = x(function (e) {
                this.props = e
            }, {
                render: function (e) {
                    var t = this.props,
                        n = !0;
                    e("<<"), e.withIndent(function () {
                        for (var i in t) f(t, i) && !/^_/.test(i) && (n = !1, e.indent(k(i), " ", t[i]))
                    }), n || e.indent(), e(">>")
                }
            }), $ = x(function (e, t, n) {
                if ("string" == typeof e) {
                    var i = B();
                    i.write(e), e = i
                }
                this.data = e, this.props = t || {}, this.compress = n
            }, {
                render: function (t) {
                    var n = this.data.get(),
                        i = this.props;
                    this.compress && e.pako && "function" == typeof e.pako.deflate && (i.Filter ? i.Filter instanceof Array || (i.Filter = [i.Filter]) : i.Filter = [], i.Filter.unshift(k("FlateDecode")), n = e.pako.deflate(n)), i.Length = n.length, t(new q(i), " stream", it), t.writeData(n), t(it, "endstream")
                }
            }), Y = x(function (e) {
                e = this.props = e || {}, e.Type = k("Catalog")
            }, {
                setPages: function (e) {
                    this.props.Pages = e
                }
            }, q), Q = x(function () {
                this.props = {
                    Type: k("Pages"),
                    Kids: [],
                    Count: 0
                }
            }, {
                addPage: function (e) {
                    this.props.Kids.push(e), this.props.Count++
                }
            }, q), X = x(function (e) {
                this.props = {
                    Type: k("Font"),
                    Subtype: k("Type1"),
                    BaseFont: k(e)
                }, this._resourceName = k("F" + ++ot)
            }, {
                encodeText: function (e) {
                    return new U(e + "")
                }
            }, q), K = x(function (e, t, n) {
                var i, o;
                n = this.props = n || {}, n.Type = k("Font"), n.Subtype = k("Type0"), n.Encoding = k("Identity-H"), this._pdf = e, this._font = t, this._sub = t.makeSubset(), this._resourceName = k("F" + ++ot), i = t.head, this.name = t.psName, o = this.scale = t.scale, this.bbox = [i.xMin * o, i.yMin * o, i.xMax * o, i.yMax * o], this.italicAngle = t.post.italicAngle, this.ascent = t.ascent * o, this.descent = t.descent * o, this.lineGap = t.lineGap * o, this.capHeight = t.os2.capHeight || this.ascent, this.xHeight = t.os2.xHeight || 0, this.stemV = 0, this.familyClass = (t.os2.familyClass || 0) >> 8, this.isSerif = this.familyClass >= 1 && 7 >= this.familyClass, this.isScript = 10 == this.familyClass, this.flags = (t.post.isFixedPitch ? 1 : 0) | (this.isSerif ? 2 : 0) | (this.isScript ? 8 : 0) | (0 !== this.italicAngle ? 64 : 0) | 32
            }, {
                encodeText: function (e) {
                    return new W(this._sub.encodeText(e + ""))
                },
                getTextWidth: function (e, t) {
                    var n, i, o = 0,
                        r = this._font.cmap.getUnicodeEntry().codeMap;
                    for (n = 0; t.length > n; ++n) i = r[t.charCodeAt(n)], o += this._font.widthOfGlyph(i || 0);
                    return o * e / 1e3
                },
                beforeRender: function () {
                    var e, t, n, o, r = this,
                        a = r._sub,
                        s = a.render(),
                        l = new $(B(s), {
                            Length1: s.length
                        }, !0),
                        c = r._pdf.attach(new q({
                            Type: k("FontDescriptor"),
                            FontName: k(r._sub.psName),
                            FontBBox: r.bbox,
                            Flags: r.flags,
                            StemV: r.stemV,
                            ItalicAngle: r.italicAngle,
                            Ascent: r.ascent,
                            Descent: r.descent,
                            CapHeight: r.capHeight,
                            XHeight: r.xHeight,
                            FontFile2: r._pdf.attach(l)
                        })),
                        d = a.ncid2ogid,
                        h = a.firstChar,
                        u = a.lastChar,
                        f = [];
                    !function p(e, t) {
                        if (u >= e) {
                            var n = d[e];
                            null == n ? p(e + 1) : (t || f.push(e, t = []), t.push(r._font.widthOfGlyph(n)), p(e + 1, t))
                        }
                    }(h), e = new q({
                        Type: k("Font"),
                        Subtype: k("CIDFontType2"),
                        BaseFont: k(r._sub.psName),
                        CIDSystemInfo: new q({
                            Registry: new U("Adobe"),
                            Ordering: new U("Identity"),
                            Supplement: 0
                        }),
                        FontDescriptor: c,
                        FirstChar: h,
                        LastChar: u,
                        DW: Math.round(r._font.widthOfGlyph(0)),
                        W: f,
                        CIDToGIDMap: r._pdf.attach(r._makeCidToGidMap())
                    }), t = r.props, t.BaseFont = k(r._sub.psName), t.DescendantFonts = [r._pdf.attach(e)], n = new Z(h, u, a.subset), o = new $(i(), null, !0), o.data(n), t.ToUnicode = r._pdf.attach(o)
                },
                _makeCidToGidMap: function () {
                    return new $(B(this._sub.cidToGidMap()), null, !0)
                }
            }, q), Z = x(function (e, t, n) {
                this.firstChar = e, this.lastChar = t, this.map = n
            }, {
                render: function (e) {
                    e.indent("/CIDInit /ProcSet findresource begin"), e.indent("12 dict begin"), e.indent("begincmap"), e.indent("/CIDSystemInfo <<"), e.indent("  /Registry (Adobe)"), e.indent("  /Ordering (UCS)"), e.indent("  /Supplement 0"), e.indent(">> def"), e.indent("/CMapName /Adobe-Identity-UCS def"), e.indent("/CMapType 2 def"), e.indent("1 begincodespacerange"), e.indent("  <0000><ffff>"), e.indent("endcodespacerange");
                    var t = this;
                    e.indent(t.lastChar - t.firstChar + 1, " beginbfchar"), e.withIndent(function () {
                        var n, i;
                        for (n = t.firstChar; t.lastChar >= n; ++n) i = t.map[n], e.indent("<", u(n.toString(16), 4), ">", "<", u(i.toString(16), 4), ">")
                    }), e.indent("endbfchar"), e.indent("endcmap"), e.indent("CMapName currentdict /CMap defineresource pop"), e.indent("end"), e.indent("end")
                }
            }), J = x(function (e, t) {
                this._pdf = e, this._rcount = 0, this._textMode = !1, this._fontResources = {}, this._gsResources = {}, this._xResources = {}, this._patResources = {}, this._shResources = {}, this._opacity = 1, this._matrix = [1, 0, 0, 1, 0, 0], this._annotations = [], this._font = null, this._fontSize = null, this._contextStack = [], t = this.props = t || {}, t.Type = k("Page"), t.ProcSet = [k("PDF"), k("Text"), k("ImageB"), k("ImageC"), k("ImageI")], t.Resources = new q({
                    Font: new q(this._fontResources),
                    ExtGState: new q(this._gsResources),
                    XObject: new q(this._xResources),
                    Pattern: new q(this._patResources),
                    Shading: new q(this._shResources)
                }), t.Annots = this._annotations
            }, {
                _out: function () {
                    this._content.data.apply(null, arguments)
                },
                transform: function (e, t, n, i, o, r) {
                    N(arguments) || (this._matrix = H(arguments, this._matrix), this._out(e, " ", t, " ", n, " ", i, " ", o, " ", r, " cm"), this._out(it))
                },
                translate: function (e, t) {
                    this.transform(1, 0, 0, 1, e, t)
                },
                scale: function (e, t) {
                    this.transform(e, 0, 0, t, 0, 0)
                },
                rotate: function (e) {
                    var t = Math.cos(e),
                        n = Math.sin(e);
                    this.transform(t, n, -n, t, 0, 0)
                },
                beginText: function () {
                    this._textMode = !0, this._out("BT", it)
                },
                endText: function () {
                    this._textMode = !1, this._out("ET", it)
                },
                _requireTextMode: function () {
                    if (!this._textMode) throw Error("Text mode required; call page.beginText() first")
                },
                _requireFont: function () {
                    if (!this._font) throw Error("No font selected; call page.setFont() first")
                },
                setFont: function (e, t) {
                    this._requireTextMode(), null == e ? e = this._font : e instanceof K || (e = this._pdf.getFont(e)), null == t && (t = this._fontSize), this._fontResources[e._resourceName] = e, this._font = e, this._fontSize = t, this._out(e._resourceName, " ", t, " Tf", it)
                },
                setTextLeading: function (e) {
                    this._requireTextMode(), this._out(e, " TL", it)
                },
                setTextRenderingMode: function (e) {
                    this._requireTextMode(), this._out(e, " Tr", it)
                },
                showText: function (e, t) {
                    var n, i;
                    this._requireFont(), e.length > 1 && t && this._font instanceof K && (n = this._font.getTextWidth(this._fontSize, e), i = t / n * 100, this._out(i, " Tz ")), this._out(this._font.encodeText(e), " Tj", it)
                },
                showTextNL: function (e) {
                    this._requireFont(), this._out(this._font.encodeText(e), " '", it)
                },
                addLink: function (e, t) {
                    var n = this._toPage({
                            x: t.left,
                            y: t.bottom
                        }),
                        i = this._toPage({
                            x: t.right,
                            y: t.top
                        });
                    this._annotations.push(new q({
                        Type: k("Annot"),
                        Subtype: k("Link"),
                        Rect: [n.x, n.y, i.x, i.y],
                        Border: [0, 0, 0],
                        A: new q({
                            Type: k("Action"),
                            S: k("URI"),
                            URI: new U(e)
                        })
                    }))
                },
                setStrokeColor: function (e, t, n) {
                    this._out(e, " ", t, " ", n, " RG", it)
                },
                setOpacity: function (e) {
                    this.setFillOpacity(e), this.setStrokeOpacity(e), this._opacity *= e
                },
                setStrokeOpacity: function (e) {
                    if (1 > e) {
                        var t = this._pdf.getOpacityGS(this._opacity * e, !0);
                        this._gsResources[t._resourceName] = t, this._out(t._resourceName, " gs", it)
                    }
                },
                setFillColor: function (e, t, n) {
                    this._out(e, " ", t, " ", n, " rg", it)
                },
                setFillOpacity: function (e) {
                    if (1 > e) {
                        var t = this._pdf.getOpacityGS(this._opacity * e, !1);
                        this._gsResources[t._resourceName] = t, this._out(t._resourceName, " gs", it)
                    }
                },
                gradient: function (e, t) {
                    var n, i, o;
                    this.save(), this.rect(t.left, t.top, t.width, t.height), this.clip(), e.userSpace || this.transform(t.width, 0, 0, t.height, t.left, t.top), n = I(this._pdf, e, t), i = n.shading._resourceName, this._shResources[i] = n.shading, n.hasAlpha && (o = n.opacity._resourceName, this._gsResources[o] = n.opacity, this._out("/" + o + " gs ")), this._out("/" + i + " sh", it), this.restore()
                },
                setDashPattern: function (e, t) {
                    this._out(e, " ", t, " d", it)
                },
                setLineWidth: function (e) {
                    this._out(e, " w", it)
                },
                setLineCap: function (e) {
                    this._out(e, " J", it)
                },
                setLineJoin: function (e) {
                    this._out(e, " j", it)
                },
                setMitterLimit: function (e) {
                    this._out(e, " M", it)
                },
                save: function () {
                    this._contextStack.push(this._context()), this._out("q", it)
                },
                restore: function () {
                    this._out("Q", it), this._context(this._contextStack.pop())
                },
                moveTo: function (e, t) {
                    this._out(e, " ", t, " m", it)
                },
                lineTo: function (e, t) {
                    this._out(e, " ", t, " l", it)
                },
                bezier: function (e, t, n, i, o, r) {
                    this._out(e, " ", t, " ", n, " ", i, " ", o, " ", r, " c", it)
                },
                bezier1: function (e, t, n, i) {
                    this._out(e, " ", t, " ", n, " ", i, " y", it)
                },
                bezier2: function (e, t, n, i) {
                    this._out(e, " ", t, " ", n, " ", i, " v", it)
                },
                close: function () {
                    this._out("h", it)
                },
                rect: function (e, t, n, i) {
                    this._out(e, " ", t, " ", n, " ", i, " re", it)
                },
                ellipse: function (e, t, n, i) {
                    function o(t) {
                        return e + t
                    }

                    function r(e) {
                        return t + e
                    }

                    var a = .5522847498307936;
                    this.moveTo(o(0), r(i)), this.bezier(o(n * a), r(i), o(n), r(i * a), o(n), r(0)), this.bezier(o(n), r(-i * a), o(n * a), r(-i), o(0), r(-i)), this.bezier(o(-n * a), r(-i), o(-n), r(-i * a), o(-n), r(0)), this.bezier(o(-n), r(i * a), o(-n * a), r(i), o(0), r(i))
                },
                circle: function (e, t, n) {
                    this.ellipse(e, t, n, n)
                },
                stroke: function () {
                    this._out("S", it)
                },
                nop: function () {
                    this._out("n", it)
                },
                clip: function () {
                    this._out("W n", it)
                },
                clipStroke: function () {
                    this._out("W S", it)
                },
                closeStroke: function () {
                    this._out("s", it)
                },
                fill: function () {
                    this._out("f", it)
                },
                fillStroke: function () {
                    this._out("B", it)
                },
                drawImage: function (e) {
                    var t = this._pdf.getImage(e);
                    t && (this._xResources[t._resourceName] = t, this._out(t._resourceName, " Do", it))
                },
                comment: function (e) {
                    var t = this;
                    e.split(/\r?\n/g).forEach(function (e) {
                        t._out("% ", e, it)
                    })
                },
                _context: function (e) {
                    return null == e ? {
                        opacity: this._opacity,
                        matrix: this._matrix
                    } : (this._opacity = e.opacity, this._matrix = e.matrix, n)
                },
                _toPage: function (e) {
                    var t = this._matrix,
                        n = t[0],
                        i = t[1],
                        o = t[2],
                        r = t[3],
                        a = t[4],
                        s = t[5];
                    return {
                        x: n * e.x + o * e.y + a,
                        y: i * e.x + r * e.y + s
                    }
                }
            }, q), et = {
                serif: "Times-Roman",
                "serif|bold": "Times-Bold",
                "serif|italic": "Times-Italic",
                "serif|bold|italic": "Times-BoldItalic",
                "sans-serif": "Helvetica",
                "sans-serif|bold": "Helvetica-Bold",
                "sans-serif|italic": "Helvetica-Oblique",
                "sans-serif|bold|italic": "Helvetica-BoldOblique",
                monospace: "Courier",
                "monospace|bold": "Courier-Bold",
                "monospace|italic": "Courier-Oblique",
                "monospace|bold|italic": "Courier-BoldOblique",
                zapfdingbats: "ZapfDingbats",
                "zapfdingbats|bold": "ZapfDingbats",
                "zapfdingbats|italic": "ZapfDingbats",
                "zapfdingbats|bold|italic": "ZapfDingbats"
            }, R("Times New Roman", "serif"), R("Courier New", "monospace"), R("Arial", "sans-serif"), R("Helvetica", "sans-serif"), R("Verdana", "sans-serif"), R("Tahoma", "sans-serif"), R("Georgia", "sans-serif"), R("Monaco", "monospace"), R("Andale Mono", "monospace"), tt.pdf = {
                Document: a,
                BinaryStream: B,
                defineFont: O,
                parseFontDef: L,
                getFontURL: F,
                loadFonts: ct,
                loadImages: dt,
                getPaperOptions: r,
                TEXT_RENDERING_MODE: {
                    fill: 0,
                    stroke: 1,
                    fillAndStroke: 2,
                    invisible: 3,
                    fillAndClip: 4,
                    strokeAndClip: 5,
                    fillStrokeClip: 6,
                    clip: 7
                }
            }
        }(window, parseFloat),
        function (e) {
            "use strict";

            function t(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function n(e) {
                return Object.keys(e).sort(function (e, t) {
                    return e - t
                }).map(parseFloat)
            }

            function i(e) {
                var t, n, i;
                for (this.raw = e, this.scalerType = e.readLong(), this.tableCount = e.readShort(), this.searchRange = e.readShort(), this.entrySelector = e.readShort(), this.rangeShift = e.readShort(), t = this.tables = {}, n = 0; this.tableCount > n; ++n) i = {
                    tag: e.readString(4),
                    checksum: e.readLong(),
                    offset: e.readLong(),
                    length: e.readLong()
                }, t[i.tag] = i
            }

            function o(e) {
                function n(e, t) {
                    this.definition = t, this.length = t.length, this.offset = t.offset, this.file = e, this.rawData = e.raw, this.parse(e.raw)
                }

                n.prototype.raw = function () {
                    return this.rawData.slice(this.offset, this.length)
                };
                for (var i in e) t(e, i) && (n[i] = n.prototype[i] = e[i]);
                return n
            }

            function r() {
                var e, t = "",
                    n = _ + "";
                for (e = 0; n.length > e; ++e) t += String.fromCharCode(n.charCodeAt(e) - 48 + 65);
                return ++_, t
            }

            function a(e) {
                this.font = e, this.subset = {}, this.unicodes = {}, this.ogid2ngid = {
                    0: 0
                }, this.ngid2ogid = {
                    0: 0
                }, this.ncid2ogid = {}, this.next = this.firstChar = 1, this.nextGid = 1, this.psName = r() + "+" + this.font.psName
            }

            function s(e, t) {
                var n, i, o, r, a = this,
                    s = a.contents = y(e);
                if ("ttcf" == s.readString(4)) {
                    if (!t) throw Error("Must specify a name for TTC files");
                    for (n = s.readLong(), i = s.readLong(), o = 0; i > o; ++o)
                        if (r = s.readLong(), s.saveExcursion(function () {
                                s.offset(r), a.parse()
                            }), a.psName == t) return;
                    throw Error("Font " + t + " not found in collection")
                }
                s.offset(0), a.parse()
            }

            var l, c, d, h, u, f, p, g, m, v, _, w = e.kendo.pdf,
                y = w.BinaryStream;
            i.prototype = {
                readTable: function (e, t) {
                    var n = this.tables[e];
                    if (!n) throw Error("Table " + e + " not found in directory");
                    return this[e] = n.table = new t(this, n)
                },
                render: function (e) {
                    var n, i, o, r, a, s, l, c, d = Object.keys(e).length,
                        h = Math.pow(2, Math.floor(Math.log(d) / Math.LN2)),
                        u = 16 * h,
                        f = Math.floor(Math.log(h) / Math.LN2),
                        p = 16 * d - u,
                        g = y();
                    g.writeLong(this.scalerType), g.writeShort(d), g.writeShort(u), g.writeShort(f), g.writeShort(p), n = 16 * d, i = g.offset() + n, o = null, r = y();
                    for (a in e)
                        if (t(e, a))
                            for (s = e[a], g.writeString(a), g.writeLong(this.checksum(s)), g.writeLong(i), g.writeLong(s.length), r.write(s), "head" == a && (o = i), i += s.length; i % 4;) r.writeByte(0), i++;
                    return g.write(r.get()), l = this.checksum(g.get()), c = 2981146554 - l, g.offset(o + 8), g.writeLong(c), g.get()
                },
                checksum: function (e) {
                    e = y(e);
                    for (var t = 0; !e.eof();) t += e.readLong();
                    return 4294967295 & t
                }
            }, l = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.revision = e.readLong(), this.checkSumAdjustment = e.readLong(), this.magicNumber = e.readLong(), this.flags = e.readShort(), this.unitsPerEm = e.readShort(), this.created = e.read(8), this.modified = e.read(8), this.xMin = e.readShort_(), this.yMin = e.readShort_(), this.xMax = e.readShort_(), this.yMax = e.readShort_(), this.macStyle = e.readShort(), this.lowestRecPPEM = e.readShort(), this.fontDirectionHint = e.readShort_(), this.indexToLocFormat = e.readShort_(), this.glyphDataFormat = e.readShort_()
                },
                render: function (e) {
                    var t = y();
                    return t.writeLong(this.version), t.writeLong(this.revision), t.writeLong(0), t.writeLong(this.magicNumber), t.writeShort(this.flags), t.writeShort(this.unitsPerEm), t.write(this.created), t.write(this.modified), t.writeShort_(this.xMin), t.writeShort_(this.yMin), t.writeShort_(this.xMax), t.writeShort_(this.yMax), t.writeShort(this.macStyle), t.writeShort(this.lowestRecPPEM), t.writeShort_(this.fontDirectionHint), t.writeShort_(e), t.writeShort_(this.glyphDataFormat), t.get()
                }
            }), c = o({
                parse: function (e) {
                    e.offset(this.offset);
                    var t = this.file.head.indexToLocFormat;
                    this.offsets = 0 === t ? e.times(this.length / 2, function () {
                        return 2 * e.readShort()
                    }) : e.times(this.length / 4, e.readLong)
                },
                offsetOf: function (e) {
                    return this.offsets[e]
                },
                lengthOf: function (e) {
                    return this.offsets[e + 1] - this.offsets[e]
                },
                render: function (e) {
                    var t, n = y(),
                        i = e[e.length - 1] > 65535;
                    for (t = 0; e.length > t; ++t) i ? n.writeLong(e[t]) : n.writeShort(e[t] / 2);
                    return {
                        format: i ? 1 : 0,
                        table: n.get()
                    }
                }
            }), d = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.ascent = e.readShort_(), this.descent = e.readShort_(), this.lineGap = e.readShort_(), this.advanceWidthMax = e.readShort(), this.minLeftSideBearing = e.readShort_(), this.minRightSideBearing = e.readShort_(), this.xMaxExtent = e.readShort_(), this.caretSlopeRise = e.readShort_(), this.caretSlopeRun = e.readShort_(), this.caretOffset = e.readShort_(), e.skip(8), this.metricDataFormat = e.readShort_(), this.numOfLongHorMetrics = e.readShort()
                },
                render: function (e) {
                    var t = y();
                    return t.writeLong(this.version), t.writeShort_(this.ascent), t.writeShort_(this.descent), t.writeShort_(this.lineGap), t.writeShort(this.advanceWidthMax), t.writeShort_(this.minLeftSideBearing), t.writeShort_(this.minRightSideBearing), t.writeShort_(this.xMaxExtent), t.writeShort_(this.caretSlopeRise), t.writeShort_(this.caretSlopeRun), t.writeShort_(this.caretOffset), t.write([0, 0, 0, 0, 0, 0, 0, 0]), t.writeShort_(this.metricDataFormat), t.writeShort(e.length), t.get()
                }
            }), h = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readLong(), this.numGlyphs = e.readShort(), this.maxPoints = e.readShort(), this.maxContours = e.readShort(), this.maxComponentPoints = e.readShort(), this.maxComponentContours = e.readShort(), this.maxZones = e.readShort(), this.maxTwilightPoints = e.readShort(), this.maxStorage = e.readShort(), this.maxFunctionDefs = e.readShort(), this.maxInstructionDefs = e.readShort(), this.maxStackElements = e.readShort(), this.maxSizeOfInstructions = e.readShort(), this.maxComponentElements = e.readShort(), this.maxComponentDepth = e.readShort()
                },
                render: function (e) {
                    var t = y();
                    return t.writeLong(this.version), t.writeShort(e.length), t.writeShort(this.maxPoints), t.writeShort(this.maxContours), t.writeShort(this.maxComponentPoints), t.writeShort(this.maxComponentContours), t.writeShort(this.maxZones), t.writeShort(this.maxTwilightPoints), t.writeShort(this.maxStorage), t.writeShort(this.maxFunctionDefs), t.writeShort(this.maxInstructionDefs), t.writeShort(this.maxStackElements), t.writeShort(this.maxSizeOfInstructions), t.writeShort(this.maxComponentElements), t.writeShort(this.maxComponentDepth), t.get()
                }
            }), u = o({
                parse: function (e) {
                    var t, n, i;
                    e.offset(this.offset), t = this.file, n = t.hhea, this.metrics = e.times(n.numOfLongHorMetrics, function () {
                        return {
                            advance: e.readShort(),
                            lsb: e.readShort_()
                        }
                    }), i = t.maxp.numGlyphs - t.hhea.numOfLongHorMetrics, this.leftSideBearings = e.times(i, e.readShort_)
                },
                forGlyph: function (e) {
                    var t = this.metrics,
                        n = t.length;
                    return n > e ? t[e] : {
                        advance: t[n - 1].advance,
                        lsb: this.leftSideBearings[e - n]
                    }
                },
                render: function (e) {
                    var t, n, i = y();
                    for (t = 0; e.length > t; ++t) n = this.forGlyph(e[t]), i.writeShort(n.advance), i.writeShort_(n.lsb);
                    return i.get()
                }
            }), f = function () {
                function e(e) {
                    this.raw = e
                }

                function n(e) {
                    var t, n, o;
                    for (this.raw = e, t = this.glyphIds = [], n = this.idOffsets = []; ;) {
                        if (o = e.readShort(), n.push(e.offset()), t.push(e.readShort()), !(o & a)) break;
                        e.skip(o & i ? 4 : 2), o & l ? e.skip(8) : o & s ? e.skip(4) : o & r && e.skip(2)
                    }
                }

                var i, r, a, s, l, c;
                return e.prototype = {
                    compound: !1,
                    render: function () {
                        return this.raw.get()
                    }
                }, i = 1, r = 8, a = 32, s = 64, l = 128, c = 256, n.prototype = {
                    compound: !0,
                    render: function (e) {
                        var t, n, i = y(this.raw.get());
                        for (t = 0; this.glyphIds.length > t; ++t) n = this.glyphIds[t], i.offset(this.idOffsets[t]), i.writeShort(e[n]);
                        return i.get()
                    }
                }, o({
                    parse: function () {
                        this.cache = {}
                    },
                    glyphFor: function (i) {
                        var o, r, a, s, l, c, d, h, u, f, p, g = this.cache;
                        return t(g, i) ? g[i] : (o = this.file.loca, r = o.lengthOf(i), 0 === r ? g[i] = null : (a = this.rawData, s = this.offset + o.offsetOf(i), l = y(a.slice(s, r)), c = l.readShort_(), d = l.readShort_(), h = l.readShort_(), u = l.readShort_(), f = l.readShort_(), p = g[i] = -1 == c ? new n(l) : new e(l), p.numberOfContours = c, p.xMin = d, p.yMin = h, p.xMax = u, p.yMax = f, p))
                    },
                    render: function (e, t, n) {
                        var i, o, r, a = y(),
                            s = [];
                        for (i = 0; t.length > i; ++i) o = t[i], r = e[o], s.push(a.offset()), r && a.write(r.render(n));
                        return s.push(a.offset()), {
                            table: a.get(),
                            offsets: s
                        }
                    }
                })
            }(), p = function () {
                function e(e, t) {
                    this.text = e, this.length = e.length, this.platformID = t.platformID, this.platformSpecificID = t.platformSpecificID, this.languageID = t.languageID, this.nameID = t.nameID
                }

                return o({
                    parse: function (t) {
                        var n, i, o, r, a, s, l, c;
                        for (t.offset(this.offset), n = t.readShort(), i = t.readShort(), o = this.offset + t.readShort(), r = t.times(i, function () {
                            return {
                                platformID: t.readShort(),
                                platformSpecificID: t.readShort(),
                                languageID: t.readShort(),
                                nameID: t.readShort(),
                                length: t.readShort(),
                                offset: t.readShort() + o
                            }
                        }), a = this.strings = {}, s = 0; r.length > s; ++s) l = r[s], t.offset(l.offset), c = t.readString(l.length), a[l.nameID] || (a[l.nameID] = []), a[l.nameID].push(new e(c, l));
                        this.postscriptEntry = a[6][0], this.postscriptName = this.postscriptEntry.text.replace(/[^\x20-\x7F]/g, "")
                    },
                    render: function (n) {
                        var i, o, r, a, s, l, c = this.strings,
                            d = 0;
                        for (i in c) t(c, i) && (d += c[i].length);
                        o = y(), r = y(), o.writeShort(0), o.writeShort(d), o.writeShort(6 + 12 * d);
                        for (i in c)
                            if (t(c, i))
                                for (a = 6 == i ? [new e(n, this.postscriptEntry)] : c[i], s = 0; a.length > s; ++s) l = a[s], o.writeShort(l.platformID), o.writeShort(l.platformSpecificID), o.writeShort(l.languageID), o.writeShort(l.nameID), o.writeShort(l.length), o.writeShort(r.offset()), r.writeString(l.text);
                        return o.write(r.get()), o.get()
                    }
                })
            }(), g = function () {
                var e = ".notdef .null nonmarkingreturn space exclam quotedbl numbersign dollar percent ampersand quotesingle parenleft parenright asterisk plus comma hyphen period slash zero one two three four five six seven eight nine colon semicolon less equal greater question at A B C D E F G H I J K L M N O P Q R S T U V W X Y Z bracketleft backslash bracketright asciicircum underscore grave a b c d e f g h i j k l m n o p q r s t u v w x y z braceleft bar braceright asciitilde Adieresis Aring Ccedilla Eacute Ntilde Odieresis Udieresis aacute agrave acircumflex adieresis atilde aring ccedilla eacute egrave ecircumflex edieresis iacute igrave icircumflex idieresis ntilde oacute ograve ocircumflex odieresis otilde uacute ugrave ucircumflex udieresis dagger degree cent sterling section bullet paragraph germandbls registered copyright trademark acute dieresis notequal AE Oslash infinity plusminus lessequal greaterequal yen mu partialdiff summation product pi integral ordfeminine ordmasculine Omega ae oslash questiondown exclamdown logicalnot radical florin approxequal Delta guillemotleft guillemotright ellipsis nonbreakingspace Agrave Atilde Otilde OE oe endash emdash quotedblleft quotedblright quoteleft quoteright divide lozenge ydieresis Ydieresis fraction currency guilsinglleft guilsinglright fi fl daggerdbl periodcentered quotesinglbase quotedblbase perthousand Acircumflex Ecircumflex Aacute Edieresis Egrave Iacute Icircumflex Idieresis Igrave Oacute Ocircumflex apple Ograve Uacute Ucircumflex Ugrave dotlessi circumflex tilde macron breve dotaccent ring cedilla hungarumlaut ogonek caron Lslash lslash Scaron scaron Zcaron zcaron brokenbar Eth eth Yacute yacute Thorn thorn minus multiply onesuperior twosuperior threesuperior onehalf onequarter threequarters franc Gbreve gbreve Idotaccent Scedilla scedilla Cacute cacute Ccaron ccaron dcroat".split(/\s+/g);
                return o({
                    parse: function (e) {
                        var t, n;
                        switch (e.offset(this.offset), this.format = e.readLong(), this.italicAngle = e.readFixed_(), this.underlinePosition = e.readShort_(), this.underlineThickness = e.readShort_(), this.isFixedPitch = e.readLong(), this.minMemType42 = e.readLong(), this.maxMemType42 = e.readLong(), this.minMemType1 = e.readLong(), this.maxMemType1 = e.readLong(), this.format) {
                            case 65536:
                            case 196608:
                                break;
                            case 131072:
                                for (t = e.readShort(), this.glyphNameIndex = e.times(t, e.readShort), this.names = [], n = this.offset + this.length; e.offset() < n;) this.names.push(e.readString(e.readByte()));
                                break;
                            case 151552:
                                t = e.readShort(), this.offsets = e.read(t);
                                break;
                            case 262144:
                                this.map = e.times(this.file.maxp.numGlyphs, e.readShort)
                        }
                    },
                    glyphFor: function (t) {
                        switch (this.format) {
                            case 65536:
                                return e[t] || ".notdef";
                            case 131072:
                                var n = this.glyphNameIndex[t];
                                return e.length > n ? e[n] : this.names[n - e.length] || ".notdef";
                            case 151552:
                            case 196608:
                                return ".notdef";
                            case 262144:
                                return this.map[t] || 65535
                        }
                    },
                    render: function (t) {
                        var n, i, o, r, a, s, l;
                        if (196608 == this.format) return this.raw();
                        for (n = y(this.rawData.slice(this.offset, 32)), n.writeLong(131072), n.offset(32), i = [], o = [], r = 0; t.length > r; ++r) a = t[r], s = this.glyphFor(a), l = e.indexOf(s), l >= 0 ? i.push(l) : (i.push(e.length + o.length), o.push(s));
                        for (n.writeShort(t.length), r = 0; i.length > r; ++r) n.writeShort(i[r]);
                        for (r = 0; o.length > r; ++r) n.writeByte(o[r].length), n.writeString(o[r]);
                        return n.get()
                    }
                })
            }(), m = function () {
                function e(e, t) {
                    var n = this;
                    n.platformID = e.readShort(), n.platformSpecificID = e.readShort(), n.offset = t + e.readLong(), e.saveExcursion(function () {
                        var t, i, o, r, a, s, l, c, d, h, u, f, p;
                        switch (e.offset(n.offset), n.format = e.readShort(), n.length = e.readShort(), n.language = e.readShort(), n.isUnicode = 3 == n.platformID && 1 == n.platformSpecificID && 4 == n.format || 0 === n.platformID && 4 == n.format, n.codeMap = {}, n.format) {
                            case 0:
                                for (t = 0; 256 > t; ++t) n.codeMap[t] = e.readByte();
                                break;
                            case 4:
                                for (i = e.readShort() / 2, e.skip(6), o = e.times(i, e.readShort), e.skip(2), r = e.times(i, e.readShort), a = e.times(i, e.readShort_), s = e.times(i, e.readShort), l = (n.length + n.offset - e.offset()) / 2, c = e.times(l, e.readShort), t = 0; i > t; ++t)
                                    for (d = r[t], h = o[t], u = d; h >= u; ++u) 0 === s[t] ? f = u + a[t] : (p = s[t] / 2 - (i - t) + (u - d), f = c[p] || 0, 0 !== f && (f += a[t])), n.codeMap[u] = 65535 & f
                        }
                    })
                }

                function t(e, t) {
                    function i(n) {
                        return t[e[n]]
                    }

                    var o, r, a, s, l, c, d, h, u, f, p, g, m, v, _, w, b, x = n(e),
                        k = [],
                        C = [],
                        S = null,
                        T = null;
                    for (o = 0; x.length > o; ++o) r = x[o], a = i(r), s = a - r, (null == S || s !== T) && (S && C.push(S), k.push(r), T = s), S = r;
                    for (S && C.push(S), C.push(65535), k.push(65535), l = k.length, c = 2 * l, d = 2 * Math.pow(2, Math.floor(Math.log(l) / Math.LN2)), h = Math.log(d / 2) / Math.LN2, u = c - d, f = [], p = [], g = [], o = 0; l > o; ++o) {
                        if (m = k[o], v = C[o], 65535 == m) {
                            f.push(0), p.push(0);
                            break
                        }
                        if (_ = i(m), m - _ >= 32768)
                            for (f.push(0), p.push(2 * (g.length + l - o)), w = m; v >= w; ++w) g.push(i(w));
                        else f.push(_ - m), p.push(0)
                    }
                    return b = y(), b.writeShort(3), b.writeShort(1), b.writeLong(12), b.writeShort(4), b.writeShort(16 + 8 * l + 2 * g.length), b.writeShort(0), b.writeShort(c), b.writeShort(d), b.writeShort(h), b.writeShort(u), C.forEach(b.writeShort), b.writeShort(0), k.forEach(b.writeShort), f.forEach(b.writeShort_), p.forEach(b.writeShort), g.forEach(b.writeShort), b.get()
                }

                return o({
                    parse: function (t) {
                        var n, i = this,
                            o = i.offset;
                        t.offset(o), i.version = t.readShort(), n = t.readShort(), i.unicodeEntry = null, i.tables = t.times(n, function () {
                            var n = new e(t, o);
                            return n.isUnicode && (i.unicodeEntry = n), n
                        })
                    },
                    render: function (e, n) {
                        var i = y();
                        return i.writeShort(0), i.writeShort(1), i.write(t(e, n)), i.get()
                    },
                    getUnicodeEntry: function () {
                        if (!this.unicodeEntry) throw Error("Font doesn't have an Unicode encoding");
                        return this.unicodeEntry
                    }
                })
            }(), v = o({
                parse: function (e) {
                    e.offset(this.offset), this.version = e.readShort(), this.averageCharWidth = e.readShort_(), this.weightClass = e.readShort(), this.widthClass = e.readShort(), this.type = e.readShort(), this.ySubscriptXSize = e.readShort_(), this.ySubscriptYSize = e.readShort_(), this.ySubscriptXOffset = e.readShort_(), this.ySubscriptYOffset = e.readShort_(), this.ySuperscriptXSize = e.readShort_(), this.ySuperscriptYSize = e.readShort_(), this.ySuperscriptXOffset = e.readShort_(), this.ySuperscriptYOffset = e.readShort_(), this.yStrikeoutSize = e.readShort_(), this.yStrikeoutPosition = e.readShort_(), this.familyClass = e.readShort_(), this.panose = e.times(10, e.readByte), this.charRange = e.times(4, e.readLong), this.vendorID = e.readString(4), this.selection = e.readShort(), this.firstCharIndex = e.readShort(), this.lastCharIndex = e.readShort(), this.version > 0 && (this.ascent = e.readShort_(), this.descent = e.readShort_(), this.lineGap = e.readShort_(), this.winAscent = e.readShort(), this.winDescent = e.readShort(), this.codePageRange = e.times(2, e.readLong), this.version > 1 && (this.xHeight = e.readShort(), this.capHeight = e.readShort(), this.defaultChar = e.readShort(), this.breakChar = e.readShort(), this.maxContext = e.readShort()))
                },
                render: function () {
                    return this.raw()
                }
            }), _ = 1e5, a.prototype = {
                use: function (e) {
                    var t, n, i, o, r;
                    if ("string" == typeof e) {
                        for (n = "", i = 0; e.length > i; ++i) t = this.use(e.charCodeAt(i)), n += String.fromCharCode(t);
                        return n
                    }
                    return t = this.unicodes[e], t || (t = this.next++, this.subset[t] = e, this.unicodes[e] = t, o = this.font.cmap.getUnicodeEntry().codeMap[e], o && (this.ncid2ogid[t] = o, null == this.ogid2ngid[o] && (r = this.nextGid++, this.ogid2ngid[o] = r, this.ngid2ogid[r] = o))), t
                },
                encodeText: function (e) {
                    return this.use(e)
                },
                glyphIds: function () {
                    return n(this.ogid2ngid)
                },
                glyphsFor: function (e, t) {
                    var n, i, o;
                    for (t || (t = {}), n = 0; e.length > n; ++n) i = e[n], t[i] || (o = t[i] = this.font.glyf.glyphFor(i), o && o.compound && this.glyphsFor(o.glyphIds, t));
                    return t
                },
                render: function () {
                    var e, i, o, r, a, s, l, c, d = this.glyphsFor(this.glyphIds());
                    for (e in d) t(d, e) && (e = parseInt(e, 10), null == this.ogid2ngid[e] && (i = this.nextGid++, this.ogid2ngid[e] = i, this.ngid2ogid[i] = e));
                    return o = n(this.ngid2ogid), r = o.map(function (e) {
                        return this.ngid2ogid[e]
                    }, this), a = this.font, s = a.glyf.render(d, r, this.ogid2ngid), l = a.loca.render(s.offsets), this.lastChar = this.next - 1, c = {
                        cmap: m.render(this.ncid2ogid, this.ogid2ngid),
                        glyf: s.table,
                        loca: l.table,
                        hmtx: a.hmtx.render(r),
                        hhea: a.hhea.render(r),
                        maxp: a.maxp.render(r),
                        post: a.post.render(r),
                        name: a.name.render(this.psName),
                        head: a.head.render(l.format),
                        "OS/2": a.os2.render()
                    }, this.font.directory.render(c)
                },
                cidToGidMap: function () {
                    var e, t, n, i = y(),
                        o = 0;
                    for (e = this.firstChar; this.next > e; ++e) {
                        for (; e > o;) i.writeShort(0), o++;
                        t = this.ncid2ogid[e], t ? (n = this.ogid2ngid[t], i.writeShort(n)) : i.writeShort(0), o++
                    }
                    return i.get()
                }
            }, s.prototype = {
                parse: function () {
                    var e = this.directory = new i(this.contents);
                    this.head = e.readTable("head", l), this.loca = e.readTable("loca", c), this.hhea = e.readTable("hhea", d), this.maxp = e.readTable("maxp", h), this.hmtx = e.readTable("hmtx", u), this.glyf = e.readTable("glyf", f), this.name = e.readTable("name", p), this.post = e.readTable("post", g), this.cmap = e.readTable("cmap", m), this.os2 = e.readTable("OS/2", v), this.psName = this.name.postscriptName, this.ascent = this.os2.ascent || this.hhea.ascent, this.descent = this.os2.descent || this.hhea.descent, this.lineGap = this.os2.lineGap || this.hhea.lineGap, this.scale = 1e3 / this.head.unitsPerEm
                },
                widthOfGlyph: function (e) {
                    return this.hmtx.forGlyph(e).advance * this.scale
                },
                makeSubset: function () {
                    return new a(this)
                }
            }, w.TTFFont = s
        }(window),
        function (e, t) {
            "use strict";

            function n(t, n) {
                function i(e, t, n) {
                    return n || (n = d), n.pdf && null != n.pdf[e] ? n.pdf[e] : t
                }

                function o() {
                    function o(e) {
                        var t, n, o, r, l, c = e.options,
                            d = S(e),
                            h = d.bbox;
                        e = d.root, t = i("paperSize", i("paperSize", "auto"), c), n = !1, "auto" == t && (h ? (o = h.getSize(), t = [o.width, o.height], n = !0, r = h.getOrigin(), d = new T.Group, d.transform(new D.Matrix(1, 0, 0, 1, -r.x, -r.y)), d.append(e), e = d) : t = "A4"), l = a.addPage({
                            paperSize: t,
                            margin: i("margin", i("margin"), c),
                            addMargin: n,
                            landscape: i("landscape", i("landscape", !1), c)
                        }), s(e, l, a)
                    }

                    if (!(--r > 0)) {
                        var a = new e.pdf.Document({
                            producer: i("producer"),
                            title: i("title"),
                            author: i("author"),
                            subject: i("subject"),
                            keywords: i("keywords"),
                            creator: i("creator"),
                            date: i("date")
                        });
                        h ? t.children.forEach(o) : o(t), n(a.render(), a)
                    }
                }

                var r, l = [],
                    c = [],
                    d = t.options,
                    h = i("multiPage");
                t.traverse(function (t) {
                    a({
                        Image: function (e) {
                            c.indexOf(e.src()) < 0 && c.push(e.src())
                        },
                        Text: function (t) {
                            var n = e.pdf.parseFontDef(t.options.font),
                                i = e.pdf.getFontURL(n);
                            l.indexOf(i) < 0 && l.push(i)
                        }
                    }, t)
                }), r = 2, e.pdf.loadFonts(l, o), e.pdf.loadImages(c, o)
            }

            function i(e, t) {
                n(e, function (e) {
                    t("data:application/pdf;base64," + e.base64())
                })
            }

            function o(e, t) {
                n(e, function (e) {
                    t(new Blob([e.get()], {
                        type: "application/pdf"
                    }))
                })
            }

            function r(t, n, r, a) {
                window.Blob && !e.support.browser.safari ? o(t, function (t) {
                    e.saveAs({
                        dataURI: t,
                        fileName: n
                    }), a && a(t)
                }) : i(t, function (t) {
                    e.saveAs({
                        dataURI: t,
                        fileName: n,
                        proxyURL: r
                    }), a && a(t)
                })
            }

            function a(e, t) {
                var n = e[t.nodeType];
                return n ? n.call.apply(n, arguments) : t
            }

            function s(e, t, n) {
                var i, o, r;
                e.options._pdfDebug && t.comment("BEGIN: " + e.options._pdfDebug), i = e.transform(), o = e.opacity(), t.save(), null != o && 1 > o && t.setOpacity(o), l(e, t, n), c(e, t, n), d(e, t, n), i && (r = i.matrix(), t.transform(r.a, r.b, r.c, r.d, r.e, r.f)), a({
                    Path: m,
                    MultiPath: v,
                    Circle: _,
                    Arc: w,
                    Text: y,
                    Image: x,
                    Group: b
                }, e, t, n), t.restore(), e.options._pdfDebug && t.comment("END: " + e.options._pdfDebug)
            }

            function l(e, t) {
                var n, i, o, r, a, s, l = e.stroke && e.stroke();
                if (l) {
                    if (n = l.color) {
                        if (n = C(n), null == n) return;
                        t.setStrokeColor(n.r, n.g, n.b), 1 != n.a && t.setStrokeOpacity(n.a)
                    }
                    if (i = l.width, null != i) {
                        if (0 === i) return;
                        t.setLineWidth(i)
                    }
                    o = l.dashType, o && t.setDashPattern(P[o], 0), r = l.lineCap, r && t.setLineCap(E[r]), a = l.lineJoin, a && t.setLineJoin(M[a]), s = l.opacity, null != s && t.setStrokeOpacity(s)
                }
            }

            function c(e, t) {
                var n, i, o = e.fill && e.fill();
                if (o && !(o instanceof T.Gradient)) {
                    if (n = o.color) {
                        if (n = C(n), null == n) return;
                        t.setFillColor(n.r, n.g, n.b), 1 != n.a && t.setFillOpacity(n.a)
                    }
                    i = o.opacity, null != i && t.setFillOpacity(i)
                }
            }

            function d(e, t, n) {
                var i = e.clip();
                i && (g(i, t, n), t.clip())
            }

            function h(e) {
                return e && (e instanceof T.Gradient || e.color && !/^(none|transparent)$/i.test(e.color) && (null == e.width || e.width > 0) && (null == e.opacity || e.opacity > 0))
            }

            function u(e, t, n, i) {
                var o, r, a, s, l, c, d, h = e.fill();
                return h instanceof T.Gradient ? (i ? t.clipStroke() : t.clip(), o = h instanceof T.RadialGradient, o ? (r = {
                    x: h.center().x,
                    y: h.center().y,
                    r: 0
                }, a = {
                    x: h.center().x,
                    y: h.center().y,
                    r: h.radius()
                }) : (r = {
                    x: h.start().x,
                    y: h.start().y
                }, a = {
                    x: h.end().x,
                    y: h.end().y
                }), s = {
                    type: o ? "radial" : "linear",
                    start: r,
                    end: a,
                    userSpace: h.userSpace(),
                    stops: h.stops.elements().map(function (e) {
                        var t, n = e.offset();
                        return n = /%$/.test(n) ? parseFloat(n) / 100 : parseFloat(n), t = C(e.color()), t.a *= e.opacity(), {
                            offset: n,
                            color: t
                        }
                    })
                }, l = e.rawBBox(), c = l.topLeft(), d = l.getSize(), l = {
                    left: c.x,
                    top: c.y,
                    width: d.width,
                    height: d.height
                }, t.gradient(s, l), !0) : void 0
            }

            function f(e, t, n) {
                h(e.fill()) && h(e.stroke()) ? u(e, t, n, !0) || t.fillStroke() : h(e.fill()) ? u(e, t, n, !1) || t.fill() : h(e.stroke()) ? t.stroke() : t.nop()
            }

            function p(e, t) {
                var n, i, o, r = e.segments;
                if (4 == r.length && e.options.closed) {
                    for (n = [], i = 0; r.length > i; ++i) {
                        if (r[i].controlIn()) return !1;
                        n[i] = r[i].anchor()
                    }
                    if (o = n[0].y == n[1].y && n[1].x == n[2].x && n[2].y == n[3].y && n[3].x == n[0].x || n[0].x == n[1].x && n[1].y == n[2].y && n[2].x == n[3].x && n[3].y == n[0].y) return t.rect(n[0].x, n[0].y, n[2].x - n[0].x, n[2].y - n[0].y), !0
                }
            }

            function g(e, t, n) {
                var i, o, r, a, s, l, c = e.segments;
                if (0 !== c.length && !p(e, t, n)) {
                    for (o = 0; c.length > o; ++o) r = c[o], a = r.anchor(), i ? (s = i.controlOut(), l = r.controlIn(), s && l ? t.bezier(s.x, s.y, l.x, l.y, a.x, a.y) : t.lineTo(a.x, a.y)) : t.moveTo(a.x, a.y), i = r;
                    e.options.closed && t.close()
                }
            }

            function m(e, t, n) {
                g(e, t, n), f(e, t, n)
            }

            function v(e, t, n) {
                var i, o = e.paths;
                for (i = 0; o.length > i; ++i) g(o[i], t, n);
                f(e, t, n)
            }

            function _(e, t, n) {
                var i = e.geometry();
                t.circle(i.center.x, i.center.y, i.radius), f(e, t, n)
            }

            function w(e, t, n) {
                var i, o = e.geometry().curvePoints();
                for (t.moveTo(o[0].x, o[0].y), i = 1; o.length > i;) t.bezier(o[i].x, o[i++].y, o[i].x, o[i++].y, o[i].x, o[i++].y);
                f(e, t, n)
            }

            function y(t, n) {
                var i, o = e.pdf.parseFontDef(t.options.font),
                    r = t._position;
                t.fill() && t.stroke() ? i = A.fillAndStroke : t.fill() ? i = A.fill : t.stroke() && (i = A.stroke), n.transform(1, 0, 0, -1, r.x, r.y + o.fontSize), n.beginText(), n.setFont(e.pdf.getFontURL(o), o.fontSize), n.setTextRenderingMode(i), n.showText(t.content(), t._pdfRect ? t._pdfRect.width() : null), n.endText()
            }

            function b(e, t, n) {
                var i, o;
                for (e._pdfLink && t.addLink(e._pdfLink.url, e._pdfLink), i = e.children, o = 0; i.length > o; ++o) s(i[o], t, n)
            }

            function x(e, t) {
                var n, i, o, r = e.src();
                r && (n = e.rect(), i = n.getOrigin(), o = n.getSize(), t.transform(o.width, 0, 0, -o.height, i.x, i.y + o.height), t.drawImage(r))
            }

            function k(e, n) {
                var i, o = t.Deferred();
                for (i in n) e.options.set("pdf." + i, n[i]);
                return T.pdf.toDataURL(e, o.resolve), o.promise()
            }

            function C(t) {
                var n = e.parseColor(t, !0);
                return n ? n.toRGB() : null
            }

            function S(e) {
                function t(e) {
                    return l = !0, e
                }

                function n(e) {
                    return e.visible() && e.opacity() > 0 && (h(e.fill()) || h(e.stroke()))
                }

                function i(e) {
                    var t, n, i = [];
                    for (t = 0; e.length > t; ++t) n = s(e[t]), null != n && i.push(n);
                    return i
                }

                function o(e, t) {
                    var n, i = c,
                        o = d;
                    e.transform() && (d = d.multiplyCopy(e.transform().matrix())), n = e.clip(), n && (n = n.bbox(), n && (n = n.bbox(d), c = c ? D.Rect.intersect(c, n) : n));
                    try {
                        return t()
                    } finally {
                        c = i, d = o
                    }
                }

                function r(e) {
                    if (null == c) return !1;
                    var t = e.rawBBox().bbox(d);
                    return c && t && (t = D.Rect.intersect(t, c)), t
                }

                function s(s) {
                    return o(s, function () {
                        if (!(s instanceof T.Group || s instanceof T.MultiPath)) {
                            var o = r(s);
                            if (!o) return t(null);
                            u = u ? D.Rect.union(u, o) : o
                        }
                        return a({
                            Path: function (e) {
                                return 0 !== e.segments.length && n(e) ? e : t(null)
                            },
                            MultiPath: function (e) {
                                if (!n(e)) return t(null);
                                var o = new T.MultiPath(e.options);
                                return o.paths = i(e.paths), 0 === o.paths.length ? t(null) : o
                            },
                            Circle: function (e) {
                                return n(e) ? e : t(null)
                            },
                            Arc: function (e) {
                                return n(e) ? e : t(null)
                            },
                            Text: function (e) {
                                return /\S/.test(e.content()) && n(e) ? e : t(null)
                            },
                            Image: function (e) {
                                return e.visible() && e.opacity() > 0 ? e : t(null)
                            },
                            Group: function (n) {
                                var o = new T.Group(n.options);
                                return o.children = i(n.children), o._pdfLink = n._pdfLink, n === e || 0 !== o.children.length || n._pdfLink ? o : t(null)
                            }
                        }, s)
                    })
                }

                var l, c = !1,
                    d = D.Matrix.unit(),
                    u = null;
                do l = !1, e = s(e); while (e && l);
                return {
                    root: e,
                    bbox: u
                }
            }

            var T = e.drawing,
                D = e.geometry,
                A = e.pdf.TEXT_RENDERING_MODE,
                P = {
                    dash: [4],
                    dashDot: [4, 2, 1, 2],
                    dot: [1, 2],
                    longDash: [8, 2],
                    longDashDot: [8, 2, 1, 2],
                    longDashDotDot: [8, 2, 1, 2, 1, 2],
                    solid: []
                },
                E = {
                    butt: 0,
                    round: 1,
                    square: 2
                },
                M = {
                    miter: 0,
                    round: 1,
                    bevel: 2
                };
            e.deepExtend(T, {
                exportPDF: k,
                pdf: {
                    toDataURL: i,
                    toBlob: o,
                    saveAs: r,
                    toStream: n
                }
            })
        }(window.kendo, window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});
