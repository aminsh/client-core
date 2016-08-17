/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.color", "./kendo.core"], e)
}(function () {
    return function (e) {
        function t(e) {
            return typeof e !== z
        }

        function n(e, t) {
            var n = i(t);
            return D.round(e * n) / n
        }

        function i(e) {
            return e ? D.pow(10, e) : 1
        }

        function o(e, t, n) {
            return D.max(D.min(e, n), t)
        }

        function r(e) {
            return e * E
        }

        function s(e) {
            return e / E
        }

        function a(e) {
            return "number" == typeof e && !isNaN(e)
        }

        function l(e, n) {
            return t(e) ? e : n
        }

        function c(e) {
            return e * e
        }

        function h(e) {
            var t, n = [];
            for (t in e) n.push(t + e[t]);
            return n.sort().join("")
        }

        function u(e) {
            var t, n = 2166136261;
            for (t = 0; e.length > t; ++t) n += (n << 1) + (n << 4) + (n << 7) + (n << 8) + (n << 24), n ^= e.charCodeAt(t);
            return n >>> 0
        }

        function d(e) {
            return u(h(e))
        }

        function f(e) {
            var t, n = e.length,
                i = I,
                o = B;
            for (t = 0; n > t; t++) o = D.max(o, e[t]), i = D.min(i, e[t]);
            return {
                min: i,
                max: o
            }
        }

        function p(e) {
            return f(e).min
        }

        function g(e) {
            return f(e).max
        }

        function m(e) {
            return _(e).min
        }

        function v(e) {
            return _(e).max
        }

        function _(e) {
            var t, n, i, o = I,
                r = B;
            for (t = 0, n = e.length; n > t; t++) i = e[t], null !== i && isFinite(i) && (o = D.min(o, i), r = D.max(r, i));
            return {
                min: o === I ? void 0 : o,
                max: r === B ? void 0 : r
            }
        }

        function y(e) {
            return e ? e[e.length - 1] : void 0
        }

        function w(e, t) {
            return e.push.apply(e, t), e
        }

        function b(e) {
            return P.template(e, {
                useWithBlock: !1,
                paramName: "d"
            })
        }

        function x(e, n) {
            return t(n) && null !== n ? " " + e + "='" + n + "' " : ""
        }

        function k(e) {
            var t, n = "";
            for (t = 0; e.length > t; t++) n += x(e[t][0], e[t][1]);
            return n
        }

        function C(e) {
            var n, i, o = "";
            for (n = 0; e.length > n; n++) i = e[n][1], t(i) && (o += e[n][0] + ":" + i + ";");
            return "" !== o ? o : void 0
        }

        function S(e) {
            return "string" != typeof e && (e += "px"), e
        }

        function T(e) {
            var t, n, i = [];
            if (e)
                for (t = P.toHyphens(e).split("-"), n = 0; t.length > n; n++) i.push("k-pos-" + t[n]);
            return i.join(" ")
        }

        function A(e) {
            return "" === e || null === e || "none" === e || "transparent" === e || !t(e)
        }

        var D = Math,
            P = window.kendo,
            M = P.deepExtend,
            E = D.PI / 180,
            I = Number.MAX_VALUE,
            B = -Number.MAX_VALUE,
            z = "undefined",
            L = Date.now;
        L || (L = function () {
            return (new Date).getTime()
        }), M(P, {
            util: {
                MAX_NUM: I,
                MIN_NUM: B,
                append: w,
                arrayLimits: f,
                arrayMin: p,
                arrayMax: g,
                defined: t,
                deg: s,
                hashKey: u,
                hashObject: d,
                isNumber: a,
                isTransparent: A,
                last: y,
                limitValue: o,
                now: L,
                objectKey: h,
                round: n,
                rad: r,
                renderAttr: x,
                renderAllAttr: k,
                renderPos: T,
                renderSize: S,
                renderStyle: C,
                renderTemplate: b,
                sparseArrayLimits: _,
                sparseArrayMin: m,
                sparseArrayMax: v,
                sqr: c,
                valueOrDefault: l
            }
        }), P.dataviz.util = P.util
    }(window.kendo.jQuery),
        function () {
            function e(e) {
                var n, i, o, s, a, l, c, h = "",
                    u = 0;
                for (e = t(e); e.length > u;) n = e.charCodeAt(u++), i = e.charCodeAt(u++), o = e.charCodeAt(u++), s = n >> 2, a = (3 & n) << 4 | i >> 4, l = (15 & i) << 2 | o >> 6, c = 63 & o, isNaN(i) ? l = c = 64 : isNaN(o) && (c = 64), h = h + r.charAt(s) + r.charAt(a) + r.charAt(l) + r.charAt(c);
                return h
            }

            function t(e) {
                var t, n, i = "";
                for (t = 0; e.length > t; t++) n = e.charCodeAt(t), 128 > n ? i += o(n) : 2048 > n ? (i += o(192 | n >>> 6), i += o(128 | 63 & n)) : 65536 > n && (i += o(224 | n >>> 12), i += o(128 | n >>> 6 & 63), i += o(128 | 63 & n));
                return i
            }

            var n = window.kendo,
                i = n.deepExtend,
                o = String.fromCharCode,
                r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
            i(n.util, {
                encodeBase64: e,
                encodeUTF8: t
            })
        }(window.kendo.jQuery),
        function (e) {
            var t = Math,
                n = window.kendo,
                i = n.deepExtend,
                o = e.inArray,
                r = {
                    observers: function () {
                        return this._observers = this._observers || []
                    },
                    addObserver: function (e) {
                        return this._observers ? this._observers.push(e) : this._observers = [e], this
                    },
                    removeObserver: function (e) {
                        var t = this.observers(),
                            n = o(e, t);
                        return -1 != n && t.splice(n, 1), this
                    },
                    trigger: function (e, t) {
                        var n, i, o = this._observers;
                        if (o && !this._suspended)
                            for (i = 0; o.length > i; i++) n = o[i], n[e] && n[e](t);
                        return this
                    },
                    optionsChange: function (e) {
                        this.trigger("optionsChange", e)
                    },
                    geometryChange: function (e) {
                        this.trigger("geometryChange", e)
                    },
                    suspend: function () {
                        return this._suspended = (this._suspended || 0) + 1, this
                    },
                    resume: function () {
                        return this._suspended = t.max((this._suspended || 0) - 1, 0), this
                    },
                    _observerField: function (e, t) {
                        this[e] && this[e].removeObserver(this), this[e] = t, t.addObserver(this)
                    }
                };
            i(n, {
                mixins: {
                    ObserversMixin: r
                }
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(e) {
                return null === e ? null : e instanceof m ? e : new m(e)
            }

            function n(e) {
                return e && y.isFunction(e.matrix) ? e.matrix() : e
            }

            function i(e, t, n, i) {
                var o = 0,
                    r = 0;
                return i && (o = v.atan2(i.c * n, i.a * t), 0 !== i.b && (r = v.atan2(i.d * n, i.b * t))), {
                    x: o,
                    y: r
                }
            }

            function o(e, t) {
                for (; t > e;) e += 90;
                return e
            }

            function r(e, t) {
                var n, i, o;
                for (n = 0; t.length > n; n++) i = t[n], o = i.charAt(0).toUpperCase() + i.substring(1, i.length), e["set" + o] = s(i), e["get" + o] = a(i)
            }

            function s(e) {
                return function (t) {
                    return this[e] !== t && (this[e] = t, this.geometryChange()), this
                }
            }

            function a(e) {
                return function () {
                    return this[e]
                }
            }

            function l(e, t, n) {
                e > t && (t += 360);
                var i = v.abs(t - e);
                return n || (i = 360 - i), i
            }

            function c(e, t, n, i, o, r) {
                var s = A((o - e) / n, 3),
                    a = A((r - t) / i, 3);
                return A(T(v.atan2(a, s)))
            }

            function h(e, t, n, i, o, r, s, a) {
                var h, u, d, f, p, g, m, y, w, b, x, k, C, S, T, A, D, P;
                if (t !== i) w = n - e, b = i - t, x = _(o, 2), k = _(r, 2), C = (k * w * (e + n) + x * b * (t + i)) / (2 * x * b), S = C - i, T = -(w * k) / (x * b), p = 1 / x + _(T, 2) / k, g = 2 * (T * S / k - n / x), m = _(n, 2) / x + _(S, 2) / k - 1, y = v.sqrt(_(g, 2) - 4 * p * m), h = (-g - y) / (2 * p), u = C + T * h, d = (-g + y) / (2 * p), f = C + T * d;
                else {
                    if (e === n) return !1;
                    g = -2 * i, m = _((n - e) * r / (2 * o), 2) + _(i, 2) - _(r, 2), y = v.sqrt(_(g, 2) - 4 * m), h = d = (e + n) / 2, u = (-g - y) / 2, f = (-g + y) / 2
                }
                return A = c(h, u, o, r, e, t), D = c(h, u, o, r, n, i), P = l(A, D, a), (s && 180 >= P || !s && P > 180) && (h = d, u = f, A = c(h, u, o, r, e, t), D = c(h, u, o, r, n, i)), {
                    center: new E(h, u),
                    startAngle: A,
                    endAngle: D
                }
            }

            var u, d, f, p, g, m, v = Math,
                _ = v.pow,
                y = window.kendo,
                w = y.Class,
                b = y.deepExtend,
                x = y.mixins.ObserversMixin,
                k = y.util,
                C = k.defined,
                S = k.rad,
                T = k.deg,
                A = k.round,
                D = v.PI / 2,
                P = k.MIN_NUM,
                M = k.MAX_NUM,
                E = w.extend({
                    init: function (e, t) {
                        this.x = e || 0, this.y = t || 0
                    },
                    equals: function (e) {
                        return e && e.x === this.x && e.y === this.y
                    },
                    clone: function () {
                        return new E(this.x, this.y)
                    },
                    rotate: function (e, n) {
                        return this.transform(t().rotate(e, n))
                    },
                    translate: function (e, t) {
                        return this.x += e, this.y += t, this.geometryChange(), this
                    },
                    translateWith: function (e) {
                        return this.translate(e.x, e.y)
                    },
                    move: function (e, t) {
                        return this.x = this.y = 0, this.translate(e, t)
                    },
                    scale: function (e, t) {
                        return C(t) || (t = e), this.x *= e, this.y *= t, this.geometryChange(), this
                    },
                    scaleCopy: function (e, t) {
                        return this.clone().scale(e, t)
                    },
                    transform: function (e) {
                        var t = n(e),
                            i = this.x,
                            o = this.y;
                        return this.x = t.a * i + t.c * o + t.e, this.y = t.b * i + t.d * o + t.f, this.geometryChange(), this
                    },
                    transformCopy: function (e) {
                        var t = this.clone();
                        return e && t.transform(e), t
                    },
                    distanceTo: function (e) {
                        var t = this.x - e.x,
                            n = this.y - e.y;
                        return v.sqrt(t * t + n * n)
                    },
                    round: function (e) {
                        return this.x = A(this.x, e), this.y = A(this.y, e), this.geometryChange(), this
                    },
                    toArray: function (e) {
                        var t = C(e),
                            n = t ? A(this.x, e) : this.x,
                            i = t ? A(this.y, e) : this.y;
                        return [n, i]
                    }
                });
            r(E.fn, ["x", "y"]), b(E.fn, x), E.fn.toString = function (e, t) {
                var n = this.x,
                    i = this.y;
                return C(e) && (n = A(n, e), i = A(i, e)), t = t || " ", n + t + i
            }, E.create = function (e, t) {
                return C(e) ? e instanceof E ? e : 1 === arguments.length && 2 === e.length ? new E(e[0], e[1]) : new E(e, t) : void 0
            }, E.min = function () {
                var e, t, n = k.MAX_NUM,
                    i = k.MAX_NUM;
                for (e = 0; arguments.length > e; e++) t = arguments[e], n = v.min(t.x, n), i = v.min(t.y, i);
                return new E(n, i)
            }, E.max = function () {
                var e, t, n = k.MIN_NUM,
                    i = k.MIN_NUM;
                for (e = 0; arguments.length > e; e++) t = arguments[e], n = v.max(t.x, n), i = v.max(t.y, i);
                return new E(n, i)
            }, E.minPoint = function () {
                return new E(P, P)
            }, E.maxPoint = function () {
                return new E(M, M)
            }, E.ZERO = new E(0, 0), u = w.extend({
                init: function (e, t) {
                    this.width = e || 0, this.height = t || 0
                },
                equals: function (e) {
                    return e && e.width === this.width && e.height === this.height
                },
                clone: function () {
                    return new u(this.width, this.height)
                },
                toArray: function (e) {
                    var t = C(e),
                        n = t ? A(this.width, e) : this.width,
                        i = t ? A(this.height, e) : this.height;
                    return [n, i]
                }
            }), r(u.fn, ["width", "height"]), b(u.fn, x), u.create = function (e, t) {
                return C(e) ? e instanceof u ? e : 1 === arguments.length && 2 === e.length ? new u(e[0], e[1]) : new u(e, t) : void 0
            }, u.ZERO = new u(0, 0), d = w.extend({
                init: function (e, t) {
                    this.setOrigin(e || new E), this.setSize(t || new u)
                },
                clone: function () {
                    return new d(this.origin.clone(), this.size.clone())
                },
                equals: function (e) {
                    return e && e.origin.equals(this.origin) && e.size.equals(this.size)
                },
                setOrigin: function (e) {
                    return this._observerField("origin", E.create(e)), this.geometryChange(), this
                },
                getOrigin: function () {
                    return this.origin
                },
                setSize: function (e) {
                    return this._observerField("size", u.create(e)), this.geometryChange(), this
                },
                getSize: function () {
                    return this.size
                },
                width: function () {
                    return this.size.width
                },
                height: function () {
                    return this.size.height
                },
                topLeft: function () {
                    return this.origin.clone()
                },
                bottomRight: function () {
                    return this.origin.clone().translate(this.width(), this.height())
                },
                topRight: function () {
                    return this.origin.clone().translate(this.width(), 0)
                },
                bottomLeft: function () {
                    return this.origin.clone().translate(0, this.height())
                },
                center: function () {
                    return this.origin.clone().translate(this.width() / 2, this.height() / 2)
                },
                bbox: function (e) {
                    var t = this.topLeft().transformCopy(e),
                        n = this.topRight().transformCopy(e),
                        i = this.bottomRight().transformCopy(e),
                        o = this.bottomLeft().transformCopy(e);
                    return d.fromPoints(t, n, i, o)
                },
                transformCopy: function (e) {
                    return d.fromPoints(this.topLeft().transform(e), this.bottomRight().transform(e))
                }
            }), b(d.fn, x), d.fromPoints = function () {
                var e = E.min.apply(this, arguments),
                    t = E.max.apply(this, arguments),
                    n = new u(t.x - e.x, t.y - e.y);
                return new d(e, n)
            }, d.union = function (e, t) {
                return d.fromPoints(E.min(e.topLeft(), t.topLeft()), E.max(e.bottomRight(), t.bottomRight()))
            }, d.intersect = function (e, t) {
                return e = {
                    left: e.topLeft().x,
                    top: e.topLeft().y,
                    right: e.bottomRight().x,
                    bottom: e.bottomRight().y
                }, t = {
                    left: t.topLeft().x,
                    top: t.topLeft().y,
                    right: t.bottomRight().x,
                    bottom: t.bottomRight().y
                }, t.right >= e.left && e.right >= t.left && t.bottom >= e.top && e.bottom >= t.top ? d.fromPoints(new E(v.max(e.left, t.left), v.max(e.top, t.top)), new E(v.min(e.right, t.right), v.min(e.bottom, t.bottom))) : void 0
            }, f = w.extend({
                init: function (e, t) {
                    this.setCenter(e || new E), this.setRadius(t || 0)
                },
                setCenter: function (e) {
                    return this._observerField("center", E.create(e)), this.geometryChange(), this
                },
                getCenter: function () {
                    return this.center
                },
                equals: function (e) {
                    return e && e.center.equals(this.center) && e.radius === this.radius
                },
                clone: function () {
                    return new f(this.center.clone(), this.radius)
                },
                pointAt: function (e) {
                    return this._pointAt(S(e))
                },
                bbox: function (e) {
                    var t, n, o, r, s = E.maxPoint(),
                        a = E.minPoint(),
                        l = i(this.center, this.radius, this.radius, e);
                    for (t = 0; 4 > t; t++) n = this._pointAt(l.x + t * D).transformCopy(e), o = this._pointAt(l.y + t * D).transformCopy(e), r = new E(n.x, o.y), s = E.min(s, r), a = E.max(a, r);
                    return d.fromPoints(s, a)
                },
                _pointAt: function (e) {
                    var t = this.center,
                        n = this.radius;
                    return new E(t.x - n * v.cos(e), t.y - n * v.sin(e))
                }
            }), r(f.fn, ["radius"]), b(f.fn, x), p = w.extend({
                init: function (e, t) {
                    this.setCenter(e || new E), t = t || {}, this.radiusX = t.radiusX, this.radiusY = t.radiusY || t.radiusX, this.startAngle = t.startAngle, this.endAngle = t.endAngle, this.anticlockwise = t.anticlockwise || !1
                },
                clone: function () {
                    return new p(this.center, {
                        radiusX: this.radiusX,
                        radiusY: this.radiusY,
                        startAngle: this.startAngle,
                        endAngle: this.endAngle,
                        anticlockwise: this.anticlockwise
                    })
                },
                setCenter: function (e) {
                    return this._observerField("center", E.create(e)), this.geometryChange(), this
                },
                getCenter: function () {
                    return this.center
                },
                MAX_INTERVAL: 45,
                pointAt: function (e) {
                    var t = this.center,
                        n = S(e);
                    return new E(t.x + this.radiusX * v.cos(n), t.y + this.radiusY * v.sin(n))
                },
                curvePoints: function () {
                    var e, t, n, i = this.startAngle,
                        o = this.anticlockwise ? -1 : 1,
                        r = [this.pointAt(i)],
                        s = i,
                        a = this._arcInterval(),
                        l = a.endAngle - a.startAngle,
                        c = v.ceil(l / this.MAX_INTERVAL),
                        h = l / c;
                    for (e = 1; c >= e; e++) t = s + o * h, n = this._intervalCurvePoints(s, t), r.push(n.cp1, n.cp2, n.p2), s = t;
                    return r
                },
                bbox: function (e) {
                    for (var t, n, r = this, s = r._arcInterval(), a = s.startAngle, l = s.endAngle, c = i(this.center, this.radiusX, this.radiusY, e), h = T(c.x), u = T(c.y), f = r.pointAt(a).transformCopy(e), p = r.pointAt(l).transformCopy(e), g = E.min(f, p), m = E.max(f, p), v = o(h, a), _ = o(u, a); l > v || l > _;) l > v && (t = r.pointAt(v).transformCopy(e), v += 90), l > _ && (n = r.pointAt(_).transformCopy(e), _ += 90), f = new E(t.x, n.y), g = E.min(g, f), m = E.max(m, f);
                    return d.fromPoints(g, m)
                },
                _arcInterval: function () {
                    var e, t = this.startAngle,
                        n = this.endAngle,
                        i = this.anticlockwise;
                    return i && (e = t, t = n, n = e), (t > n || i && t === n) && (n += 360), {
                        startAngle: t,
                        endAngle: n
                    }
                },
                _intervalCurvePoints: function (e, t) {
                    var n = this,
                        i = n.pointAt(e),
                        o = n.pointAt(t),
                        r = n._derivativeAt(e),
                        s = n._derivativeAt(t),
                        a = (S(t) - S(e)) / 3,
                        l = new E(i.x + a * r.x, i.y + a * r.y),
                        c = new E(o.x - a * s.x, o.y - a * s.y);
                    return {
                        p1: i,
                        cp1: l,
                        cp2: c,
                        p2: o
                    }
                },
                _derivativeAt: function (e) {
                    var t = this,
                        n = S(e);
                    return new E(-t.radiusX * v.sin(n), t.radiusY * v.cos(n))
                }
            }), r(p.fn, ["radiusX", "radiusY", "startAngle", "endAngle", "anticlockwise"]), b(p.fn, x), p.fromPoints = function (e, t, n, i, o, r) {
                var s = h(e.x, e.y, t.x, t.y, n, i, o, r);
                return new p(s.center, {
                    startAngle: s.startAngle,
                    endAngle: s.endAngle,
                    radiusX: n,
                    radiusY: i,
                    anticlockwise: 0 === r
                })
            }, g = w.extend({
                init: function (e, t, n, i, o, r) {
                    this.a = e || 0, this.b = t || 0, this.c = n || 0, this.d = i || 0, this.e = o || 0, this.f = r || 0
                },
                multiplyCopy: function (e) {
                    return new g(this.a * e.a + this.c * e.b, this.b * e.a + this.d * e.b, this.a * e.c + this.c * e.d, this.b * e.c + this.d * e.d, this.a * e.e + this.c * e.f + this.e, this.b * e.e + this.d * e.f + this.f)
                },
                invert: function () {
                    var e = this.a,
                        t = this.b,
                        n = this.c,
                        i = this.d,
                        o = this.e,
                        r = this.f,
                        s = e * i - t * n;
                    return 0 === s ? null : new g(i / s, -t / s, -n / s, e / s, (n * r - i * o) / s, (t * o - e * r) / s)
                },
                clone: function () {
                    return new g(this.a, this.b, this.c, this.d, this.e, this.f)
                },
                equals: function (e) {
                    return e ? this.a === e.a && this.b === e.b && this.c === e.c && this.d === e.d && this.e === e.e && this.f === e.f : !1
                },
                round: function (e) {
                    return this.a = A(this.a, e), this.b = A(this.b, e), this.c = A(this.c, e), this.d = A(this.d, e), this.e = A(this.e, e), this.f = A(this.f, e), this
                },
                toArray: function (e) {
                    var t, n = [this.a, this.b, this.c, this.d, this.e, this.f];
                    if (C(e))
                        for (t = 0; n.length > t; t++) n[t] = A(n[t], e);
                    return n
                }
            }), g.fn.toString = function (e, t) {
                return this.toArray(e).join(t || ",")
            }, g.translate = function (e, t) {
                return new g(1, 0, 0, 1, e, t)
            }, g.unit = function () {
                return new g(1, 0, 0, 1, 0, 0)
            }, g.rotate = function (e, t, n) {
                var i = new g;
                return i.a = v.cos(S(e)), i.b = v.sin(S(e)), i.c = -i.b, i.d = i.a, i.e = t - t * i.a + n * i.b || 0, i.f = n - n * i.a - t * i.b || 0, i
            }, g.scale = function (e, t) {
                return new g(e, 0, 0, t, 0, 0)
            }, g.IDENTITY = g.unit(), m = w.extend({
                init: function (e) {
                    this._matrix = e || g.unit()
                },
                clone: function () {
                    return new m(this._matrix.clone())
                },
                equals: function (e) {
                    return e && e._matrix.equals(this._matrix)
                },
                _optionsChange: function () {
                    this.optionsChange({
                        field: "transform",
                        value: this
                    })
                },
                translate: function (e, t) {
                    return this._matrix = this._matrix.multiplyCopy(g.translate(e, t)), this._optionsChange(), this
                },
                scale: function (e, t, n) {
                    return C(t) || (t = e), n && (n = E.create(n), this._matrix = this._matrix.multiplyCopy(g.translate(n.x, n.y))), this._matrix = this._matrix.multiplyCopy(g.scale(e, t)), n && (this._matrix = this._matrix.multiplyCopy(g.translate(-n.x, -n.y))), this._optionsChange(), this
                },
                rotate: function (e, t) {
                    return t = E.create(t) || E.ZERO, this._matrix = this._matrix.multiplyCopy(g.rotate(e, t.x, t.y)), this._optionsChange(), this
                },
                multiply: function (e) {
                    var t = n(e);
                    return this._matrix = this._matrix.multiplyCopy(t), this._optionsChange(), this
                },
                matrix: function () {
                    return this._matrix
                }
            }), b(m.fn, x), b(y, {
                geometry: {
                    Arc: p,
                    Circle: f,
                    Matrix: g,
                    Point: E,
                    Rect: d,
                    Size: u,
                    Transformation: m,
                    transform: t,
                    toMatrix: n
                }
            }), y.dataviz.geometry = y.geometry
        }(window.kendo.jQuery),
        function (e) {
            var t, n, i, o = e.noop,
                r = Object.prototype.toString,
                s = window.kendo,
                a = s.Class,
                l = s.ui.Widget,
                c = s.deepExtend,
                h = s.util,
                u = h.defined,
                d = l.extend({
                    init: function (e, t) {
                        this.options = c({}, this.options, t), l.fn.init.call(this, e, this.options), this._click = this._handler("click"), this._mouseenter = this._handler("mouseenter"), this._mouseleave = this._handler("mouseleave"), this._visual = new s.drawing.Group, this.options.width && this.element.css("width", this.options.width), this.options.height && this.element.css("height", this.options.height)
                    },
                    options: {
                        name: "Surface"
                    },
                    events: ["click", "mouseenter", "mouseleave", "resize"],
                    draw: function (e) {
                        this._visual.children.push(e)
                    },
                    clear: function () {
                        this._visual.children = []
                    },
                    destroy: function () {
                        this._visual = null, l.fn.destroy.call(this)
                    },
                    exportVisual: function () {
                        return this._visual
                    },
                    getSize: function () {
                        return {
                            width: this.element.width(),
                            height: this.element.height()
                        }
                    },
                    setSize: function (e) {
                        this.element.css({
                            width: e.width,
                            height: e.height
                        }), this._size = e, this._resize()
                    },
                    eventTarget: function (t) {
                        for (var n, i = e(t.touch ? t.touch.initialTouch : t.target); !n && i.length > 0 && (n = i[0]._kendoNode, !i.is(this.element) && 0 !== i.length);) i = i.parent();
                        return n ? n.srcElement : void 0
                    },
                    _resize: o,
                    _handler: function (e) {
                        var t = this;
                        return function (n) {
                            var i = t.eventTarget(n);
                            i && t.trigger(e, {
                                element: i,
                                originalEvent: n
                            })
                        }
                    }
                });
            s.ui.plugin(d), d.create = function (e, t) {
                return i.current.create(e, t)
            }, t = a.extend({
                init: function (e) {
                    this.childNodes = [], this.parent = null, e && (this.srcElement = e, this.observe())
                },
                destroy: function () {
                    var e, t;
                    for (this.srcElement && this.srcElement.removeObserver(this), e = this.childNodes, t = 0; e.length > t; t++) this.childNodes[t].destroy();
                    this.parent = null
                },
                load: o,
                observe: function () {
                    this.srcElement && this.srcElement.addObserver(this)
                },
                append: function (e) {
                    this.childNodes.push(e), e.parent = this
                },
                insertAt: function (e, t) {
                    this.childNodes.splice(t, 0, e), e.parent = this
                },
                remove: function (e, t) {
                    var n, i = e + t;
                    for (n = e; i > n; n++) this.childNodes[n].removeSelf();
                    this.childNodes.splice(e, t)
                },
                removeSelf: function () {
                    this.clear(), this.destroy()
                },
                clear: function () {
                    this.remove(0, this.childNodes.length)
                },
                invalidate: function () {
                    this.parent && this.parent.invalidate()
                },
                geometryChange: function () {
                    this.invalidate()
                },
                optionsChange: function () {
                    this.invalidate()
                },
                childrenChange: function (e) {
                    "add" === e.action ? this.load(e.items, e.index) : "remove" === e.action && this.remove(e.index, e.items.length), this.invalidate()
                }
            }), n = a.extend({
                init: function (e, t) {
                    var n, i;
                    this.prefix = t || "";
                    for (n in e) i = e[n], i = this._wrap(i, n), this[n] = i
                },
                get: function (e) {
                    return s.getter(e, !0)(this)
                },
                set: function (e, t) {
                    var n, i = s.getter(e, !0)(this);
                    i !== t && (n = this._set(e, this._wrap(t, e)), n || this.optionsChange({
                        field: this.prefix + e,
                        value: t
                    }))
                },
                _set: function (e, t) {
                    var i, o, r, a = e.indexOf(".") >= 0;
                    if (a)
                        for (i = e.split("."), o = ""; i.length > 1;) {
                            if (o += i.shift(), r = s.getter(o, !0)(this), r || (r = new n({}, o + "."), r.addObserver(this), this[o] = r), r instanceof n) return r.set(i.join("."), t), a;
                            o += "."
                        }
                    return this._clear(e), s.setter(e)(this, t), a
                },
                _clear: function (e) {
                    var t = s.getter(e, !0)(this);
                    t && t.removeObserver && t.removeObserver(this)
                },
                _wrap: function (e, t) {
                    var i = r.call(e);
                    return null !== e && u(e) && "[object Object]" === i && (e instanceof n || e instanceof a || (e = new n(e, this.prefix + t + ".")), e.addObserver(this)), e
                }
            }), c(n.fn, s.mixins.ObserversMixin), i = function () {
                this._items = []
            }, i.prototype = {
                register: function (e, t, n) {
                    var i = this._items,
                        o = i[0],
                        r = {
                            name: e,
                            type: t,
                            order: n
                        };
                    !o || o.order > n ? i.unshift(r) : i.push(r)
                },
                create: function (e, t) {
                    var n, i, o = this._items,
                        r = o[0];
                    if (t && t.type)
                        for (n = t.type.toLowerCase(), i = 0; o.length > i; i++)
                            if (o[i].name === n) {
                                r = o[i];
                                break
                            }
                    return r ? new r.type(e, t) : void s.logToConsole("Warning: Unable to create Kendo UI Drawing Surface. Possible causes:\n- The browser does not support SVG, VML and Canvas. User agent: " + navigator.userAgent + "\n- The Kendo UI scripts are not fully loaded")
                }
            }, i.current = new i, c(s, {
                drawing: {
                    DASH_ARRAYS: {
                        dot: [1.5, 3.5],
                        dash: [4, 3.5],
                        longdash: [8, 3.5],
                        dashdot: [3.5, 3.5, 1.5, 3.5],
                        longdashdot: [8, 3.5, 1.5, 3.5],
                        longdashdotdot: [8, 3.5, 1.5, 3.5, 1.5, 3.5]
                    },
                    Color: s.Color,
                    BaseNode: t,
                    OptionsStore: n,
                    Surface: d,
                    SurfaceFactory: i
                }
            }), s.dataviz.drawing = s.drawing
        }(window.kendo.jQuery),
        function () {
            var e = window.kendo,
                t = e.deepExtend,
                n = e.util.defined,
                i = "gradient",
                o = {
                    extend: function (e) {
                        e.fill = this.fill, e.stroke = this.stroke
                    },
                    fill: function (e, t) {
                        var o, r = this.options;
                        return n(e) ? (e && e.nodeType != i ? (o = {
                            color: e
                        }, n(t) && (o.opacity = t), r.set("fill", o)) : r.set("fill", e), this) : r.get("fill")
                    },
                    stroke: function (e, t, i) {
                        return n(e) ? (this.options.set("stroke.color", e), n(t) && this.options.set("stroke.width", t), n(i) && this.options.set("stroke.opacity", i), this) : this.options.get("stroke")
                    }
                },
                r = {
                    extend: function (e, t) {
                        e.traverse = function (e) {
                            var n, i, o = this[t];
                            for (n = 0; o.length > n; n++) i = o[n], i.traverse ? i.traverse(e) : e(i);
                            return this
                        }
                    }
                };
            t(e.drawing, {
                mixins: {
                    Paintable: o,
                    Traversable: r
                }
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(e, t) {
                return h.current.measure(e, t)
            }

            var n = document,
                i = window.kendo,
                o = i.Class,
                r = i.deepExtend,
                s = i.util,
                a = s.defined,
                l = 1,
                c = o.extend({
                    init: function (e) {
                        this._size = e, this._length = 0, this._map = {}
                    },
                    put: function (e, t) {
                        var n = this,
                            i = n._map,
                            o = {
                                key: e,
                                value: t
                            };
                        i[e] = o, n._head ? (n._tail.newer = o, o.older = n._tail, n._tail = o) : n._head = n._tail = o, n._length >= n._size ? (i[n._head.key] = null, n._head = n._head.newer, n._head.older = null) : n._length++
                    },
                    get: function (e) {
                        var t = this,
                            n = t._map[e];
                        return n ? (n === t._head && n !== t._tail && (t._head = n.newer, t._head.older = null), n !== t._tail && (n.older && (n.older.newer = n.newer, n.newer.older = n.older), n.older = t._tail, n.newer = null, t._tail.newer = n, t._tail = n), n.value) : void 0
                    }
                }),
                h = o.extend({
                    init: function () {
                        this._cache = new c(1e3)
                    },
                    measure: function (t, i) {
                        var o, r, c, h, u, d = s.objectKey(i),
                            f = s.hashKey(t + d),
                            p = this._cache.get(f);
                        if (p) return p;
                        o = {
                            width: 0,
                            height: 0,
                            baseline: 0
                        }, r = this._measureBox, c = this._baselineMarker.cloneNode(!1);
                        for (h in i) u = i[h], a(u) && (r.style[h] = u);
                        return e(r).text(t), r.appendChild(c), n.body.appendChild(r), (t + "").length && (o.width = r.offsetWidth - l, o.height = r.offsetHeight, o.baseline = c.offsetTop + l), this._cache.put(f, o), r.parentNode.removeChild(r), o
                    }
                });
            h.fn._baselineMarker = e("<div class='k-baseline-marker' style='display: inline-block; vertical-align: baseline;width: " + l + "px; height: " + l + "px;overflow: hidden;' />")[0], h.fn._measureBox = e("<div style='position: absolute !important; top: -4000px !important; width: auto !important; height: auto !important;padding: 0 !important; margin: 0 !important; border: 0 !important;line-height: normal !important; visibility: hidden !important; white-space:nowrap !important;' />")[0], h.current = new h, r(i.drawing, {
                util: {
                    TextMetrics: h,
                    LRUCache: c,
                    measureText: t
                }
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(e, t, n) {
                var i, o, r, s;
                for (o = 0; e.length > o; o++) r = e[o], r.visible() && (s = t ? r.bbox(n) : r.rawBBox(), s && (i = i ? $.union(i, s) : s));
                return i
            }

            function n(e, t) {
                var n, i, o, r;
                for (i = 0; e.length > i; i++) o = e[i], o.visible() && (r = o.clippedBBox(t), r && (n = n ? $.union(n, r) : r));
                return n
            }

            function i(e, t) {
                e.origin.x -= t, e.origin.y -= t, e.size.width += 2 * t, e.size.height += 2 * t
            }

            function o(e, t) {
                for (var n = 0; t.length > n; n++) e[t[n]] = r(t[n])
            }

            function r(e) {
                var t = "_" + e;
                return function (e) {
                    return ot(e) ? (this._observerField(t, e), this.geometryChange(), this) : this[t]
                }
            }

            function s(e, t) {
                for (var n = 0; t.length > n; n++) e[t[n]] = a(t[n])
            }

            function a(e) {
                var t = "_" + e;
                return function (e) {
                    return ot(e) ? (this._observerField(t, q.create(e)), this.geometryChange(), this) : this[t]
                }
            }

            function l(e, t) {
                for (var n = 0; t.length > n; n++) e[t[n]] = c(t[n])
            }

            function c(e) {
                return function (t) {
                    return ot(t) ? (this.options.set(e, t), this) : this.options.get(e)
                }
            }

            function h() {
                return "kdef" + gt++
            }

            function u(e, t, n) {
                x(e, t, n, "x", "width")
            }

            function d(e, t, n) {
                x(e, t, n, "y", "height")
            }

            function f(e) {
                b(w(e), "x", "y", "width")
            }

            function p(e) {
                b(w(e), "y", "x", "height")
            }

            function g(e, t) {
                return v(e, t, "x", "y", "width")
            }

            function m(e, t) {
                return v(e, t, "y", "x", "height")
            }

            function v(e, t, n, i, o) {
                var r, s, a, l, c = [],
                    h = y(e, t, o),
                    u = t.origin.clone();
                for (l = 0; h.length > l; l++)
                    for (a = h[l], r = a[0], u[i] = r.bbox.origin[i], S(u, r.bbox, r.element), r.bbox.origin[n] = u[n], b(a, n, i, o), c.push([]), s = 0; a.length > s; s++) c[l].push(a[s].element);
                return c
            }

            function _(e, t) {
                var n, i, o = e.clippedBBox(),
                    r = o.size,
                    s = t.size;
                (r.width > s.width || r.height > s.height) && (n = J.min(s.width / r.width, s.height / r.height), i = e.transform() || G.transform(), i.scale(n, n), e.transform(i))
            }

            function y(e, t, n) {
                var i, o, r, s, a = t.size[n],
                    l = 0,
                    c = [],
                    h = [],
                    u = function () {
                        h.push({
                            element: i,
                            bbox: r
                        })
                    };
                for (s = 0; e.length > s; s++) i = e[s], r = i.clippedBBox(), r && (o = r.size[n], l + o > a ? h.length ? (c.push(h), h = [], u(), l = o) : (u(), c.push(h), h = [], l = 0) : (u(), l += o));
                return h.length && c.push(h), c
            }

            function w(e) {
                var t, n, i, o = [];
                for (i = 0; e.length > i; i++) t = e[i], n = t.clippedBBox(), n && o.push({
                    element: t,
                    bbox: n
                });
                return o
            }

            function b(e, t, n, i) {
                var o, r, s, a, l;
                if (e.length > 1)
                    for (o = e[0].bbox, r = new q, l = 1; e.length > l; l++) s = e[l].element, a = e[l].bbox, r[t] = o.origin[t] + o.size[i], r[n] = a.origin[n], S(r, a, s), a.origin[t] = r[t], o = a
            }

            function x(e, t, n, i, o) {
                var r, s, a;
                for (n = n || "start", a = 0; e.length > a; a++) r = e[a].clippedBBox(), r && (s = r.origin.clone(), s[i] = k(r.size[o], t, n, i, o), S(s, r, e[a]))
            }

            function k(e, t, n, i, o) {
                var r;
                return r = n == mt ? t.origin[i] : n == vt ? t.origin[i] + t.size[o] - e : t.origin[i] + (t.size[o] - e) / 2
            }

            function C(e, t, n) {
                var i = n.transform() || G.transform(),
                    o = i.matrix();
                o.e += e, o.f += t, n.transform(i)
            }

            function S(e, t, n) {
                C(e.x - t.origin.x, e.y - t.origin.y, n)
            }

            var T, A, D, P, M, E, I, B, z, L, R, F, O, N, V, H, U = window.kendo,
                j = U.Class,
                W = U.deepExtend,
                G = U.geometry,
                q = G.Point,
                $ = G.Rect,
                Y = G.Size,
                Q = G.Matrix,
                X = G.toMatrix,
                K = U.drawing,
                Z = K.OptionsStore,
                J = Math,
                et = J.pow,
                tt = U.util,
                nt = tt.append,
                it = tt.arrayLimits,
                ot = tt.defined,
                rt = tt.last,
                st = tt.valueOrDefault,
                at = U.mixins.ObserversMixin,
                lt = e.inArray,
                ct = [].push,
                ht = [].pop,
                ut = [].splice,
                dt = [].shift,
                ft = [].slice,
                pt = [].unshift,
                gt = 1,
                mt = "start",
                vt = "end",
                _t = "horizontal",
                yt = j.extend({
                    nodeType: "Element",
                    init: function (e) {
                        this._initOptions(e)
                    },
                    _initOptions: function (e) {
                        var t, n;
                        e = e || {}, t = e.transform, n = e.clip, t && (e.transform = G.transform(t)), n && !n.id && (n.id = h()), this.options = new Z(e), this.options.addObserver(this)
                    },
                    transform: function (e) {
                        return ot(e) ? void this.options.set("transform", G.transform(e)) : this.options.get("transform")
                    },
                    parentTransform: function () {
                        for (var e, t, n = this; n.parent;) n = n.parent, e = n.transform(), e && (t = e.matrix().multiplyCopy(t || Q.unit()));
                        return t ? G.transform(t) : void 0
                    },
                    currentTransform: function (e) {
                        var t, n, i = this.transform(),
                            o = X(i);
                        return ot(e) || (e = this.parentTransform()), t = X(e), n = o && t ? t.multiplyCopy(o) : o || t, n ? G.transform(n) : void 0
                    },
                    visible: function (e) {
                        return ot(e) ? (this.options.set("visible", e), this) : this.options.get("visible") !== !1
                    },
                    clip: function (e) {
                        var t = this.options;
                        return ot(e) ? (e && !e.id && (e.id = h()), t.set("clip", e), this) : t.get("clip")
                    },
                    opacity: function (e) {
                        return ot(e) ? (this.options.set("opacity", e), this) : st(this.options.get("opacity"), 1)
                    },
                    clippedBBox: function (e) {
                        var t, n = this._clippedBBox(e);
                        return n ? (t = this.clip(), t ? $.intersect(n, t.bbox(e)) : n) : void 0
                    },
                    _clippedBBox: function (e) {
                        return this.bbox(e)
                    }
                });
            W(yt.fn, at), T = j.extend({
                init: function (e) {
                    e = e || [], this.length = 0, this._splice(0, e.length, e)
                },
                elements: function (e) {
                    return e ? (this._splice(0, this.length, e), this._change(), this) : this.slice(0)
                },
                push: function () {
                    var e = arguments,
                        t = ct.apply(this, e);
                    return this._add(e), t
                },
                slice: ft,
                pop: function () {
                    var e = this.length,
                        t = ht.apply(this);
                    return e && this._remove([t]), t
                },
                splice: function (e, t) {
                    var n = ft.call(arguments, 2),
                        i = this._splice(e, t, n);
                    return this._change(), i
                },
                shift: function () {
                    var e = this.length,
                        t = dt.apply(this);
                    return e && this._remove([t]), t
                },
                unshift: function () {
                    var e = arguments,
                        t = pt.apply(this, e);
                    return this._add(e), t
                },
                indexOf: function (e) {
                    var t, n, i = this;
                    for (t = 0, n = i.length; n > t; t++)
                        if (i[t] === e) return t;
                    return -1
                },
                _splice: function (e, t, n) {
                    var i = ut.apply(this, [e, t].concat(n));
                    return this._clearObserver(i), this._setObserver(n), i
                },
                _add: function (e) {
                    this._setObserver(e), this._change()
                },
                _remove: function (e) {
                    this._clearObserver(e), this._change()
                },
                _setObserver: function (e) {
                    for (var t = 0; e.length > t; t++) e[t].addObserver(this)
                },
                _clearObserver: function (e) {
                    for (var t = 0; e.length > t; t++) e[t].removeObserver(this)
                },
                _change: function () {
                }
            }), W(T.fn, at), A = yt.extend({
                nodeType: "Group",
                init: function (e) {
                    yt.fn.init.call(this, e), this.children = []
                },
                childrenChange: function (e, t, n) {
                    this.trigger("childrenChange", {
                        action: e,
                        items: t,
                        index: n
                    })
                },
                append: function () {
                    return nt(this.children, arguments), this._reparent(arguments, this), this.childrenChange("add", arguments), this
                },
                insertAt: function (e, t) {
                    return this.children.splice(t, 0, e), e.parent = this, this.childrenChange("add", [e], t), this
                },
                remove: function (e) {
                    var t = lt(e, this.children);
                    return t >= 0 && (this.children.splice(t, 1), e.parent = null, this.childrenChange("remove", [e], t)), this
                },
                removeAt: function (e) {
                    if (e >= 0 && this.children.length > e) {
                        var t = this.children[e];
                        this.children.splice(e, 1), t.parent = null, this.childrenChange("remove", [t], e)
                    }
                    return this
                },
                clear: function () {
                    var e = this.children;
                    return this.children = [], this._reparent(e, null), this.childrenChange("remove", e, 0), this
                },
                bbox: function (e) {
                    return t(this.children, !0, this.currentTransform(e))
                },
                rawBBox: function () {
                    return t(this.children, !1)
                },
                _clippedBBox: function (e) {
                    return n(this.children, this.currentTransform(e))
                },
                currentTransform: function (e) {
                    return yt.fn.currentTransform.call(this, e) || null
                },
                _reparent: function (e, t) {
                    var n, i, o;
                    for (n = 0; e.length > n; n++) i = e[n], o = i.parent, o && o != this && o.remove && o.remove(i), i.parent = t
                }
            }), K.mixins.Traversable.extend(A.fn, "children"), D = yt.extend({
                nodeType: "Text",
                init: function (e, t, n) {
                    yt.fn.init.call(this, n), this.content(e), this.position(t || new G.Point), this.options.font || (this.options.font = "12px sans-serif"), ot(this.options.fill) || this.fill("#000")
                },
                content: function (e) {
                    return ot(e) ? (this.options.set("content", e), this) : this.options.get("content")
                },
                measure: function () {
                    var e = K.util.measureText(this.content(), {
                        font: this.options.get("font")
                    });
                    return e
                },
                rect: function () {
                    var e = this.measure(),
                        t = this.position().clone();
                    return new G.Rect(t, [e.width, e.height])
                },
                bbox: function (e) {
                    var t = X(this.currentTransform(e));
                    return this.rect().bbox(t)
                },
                rawBBox: function () {
                    return this.rect().bbox()
                }
            }), K.mixins.Paintable.extend(D.fn), s(D.fn, ["position"]), P = yt.extend({
                nodeType: "Circle",
                init: function (e, t) {
                    yt.fn.init.call(this, t), this.geometry(e || new G.Circle), ot(this.options.stroke) || this.stroke("#000")
                },
                bbox: function (e) {
                    var t = X(this.currentTransform(e)),
                        n = this._geometry.bbox(t),
                        o = this.options.get("stroke.width");
                    return o && i(n, o / 2), n
                },
                rawBBox: function () {
                    return this._geometry.bbox()
                }
            }), K.mixins.Paintable.extend(P.fn), o(P.fn, ["geometry"]), M = yt.extend({
                nodeType: "Arc",
                init: function (e, t) {
                    yt.fn.init.call(this, t), this.geometry(e || new G.Arc), ot(this.options.stroke) || this.stroke("#000")
                },
                bbox: function (e) {
                    var t = X(this.currentTransform(e)),
                        n = this.geometry().bbox(t),
                        o = this.options.get("stroke.width");
                    return o && i(n, o / 2), n
                },
                rawBBox: function () {
                    return this.geometry().bbox()
                },
                toPath: function () {
                    var e, t = new B,
                        n = this.geometry().curvePoints();
                    if (n.length > 0)
                        for (t.moveTo(n[0].x, n[0].y), e = 1; n.length > e; e += 3) t.curveTo(n[e], n[e + 1], n[e + 2]);
                    return t
                }
            }), K.mixins.Paintable.extend(M.fn), o(M.fn, ["geometry"]), E = T.extend({
                _change: function () {
                    this.geometryChange()
                }
            }), I = j.extend({
                init: function (e, t, n) {
                    this.anchor(e || new q), this.controlIn(t), this.controlOut(n)
                },
                bboxTo: function (e, t) {
                    var n, i = this.anchor().transformCopy(t),
                        o = e.anchor().transformCopy(t);
                    return n = this.controlOut() && e.controlIn() ? this._curveBoundingBox(i, this.controlOut().transformCopy(t), e.controlIn().transformCopy(t), o) : this._lineBoundingBox(i, o)
                },
                _lineBoundingBox: function (e, t) {
                    return $.fromPoints(e, t)
                },
                _curveBoundingBox: function (e, t, n, i) {
                    var o = [e, t, n, i],
                        r = this._curveExtremesFor(o, "x"),
                        s = this._curveExtremesFor(o, "y"),
                        a = it([r.min, r.max, e.x, i.x]),
                        l = it([s.min, s.max, e.y, i.y]);
                    return $.fromPoints(new q(a.min, l.min), new q(a.max, l.max))
                },
                _curveExtremesFor: function (e, t) {
                    var n = this._curveExtremes(e[0][t], e[1][t], e[2][t], e[3][t]);
                    return {
                        min: this._calculateCurveAt(n.min, t, e),
                        max: this._calculateCurveAt(n.max, t, e)
                    }
                },
                _calculateCurveAt: function (e, t, n) {
                    var i = 1 - e;
                    return et(i, 3) * n[0][t] + 3 * et(i, 2) * e * n[1][t] + 3 * et(e, 2) * i * n[2][t] + et(e, 3) * n[3][t]
                },
                _curveExtremes: function (e, t, n, i) {
                    var o, r, s = e - 3 * t + 3 * n - i,
                        a = -2 * (e - 2 * t + n),
                        l = e - t,
                        c = J.sqrt(a * a - 4 * s * l),
                        h = 0,
                        u = 1;
                    return 0 === s ? 0 !== a && (h = u = -l / a) : isNaN(c) || (h = (-a + c) / (2 * s), u = (-a - c) / (2 * s)), o = J.max(J.min(h, u), 0), (0 > o || o > 1) && (o = 0), r = J.min(J.max(h, u), 1), (r > 1 || 0 > r) && (r = 1), {
                        min: o,
                        max: r
                    }
                }
            }), s(I.fn, ["anchor", "controlIn", "controlOut"]), W(I.fn, at), B = yt.extend({
                nodeType: "Path",
                init: function (e) {
                    yt.fn.init.call(this, e), this.segments = new E, this.segments.addObserver(this), ot(this.options.stroke) || (this.stroke("#000"), ot(this.options.stroke.lineJoin) || this.options.set("stroke.lineJoin", "miter"))
                },
                moveTo: function (e, t) {
                    return this.suspend(), this.segments.elements([]), this.resume(), this.lineTo(e, t), this
                },
                lineTo: function (e, t) {
                    var n = ot(t) ? new q(e, t) : e,
                        i = new I(n);
                    return this.segments.push(i), this
                },
                curveTo: function (e, t, n) {
                    var i, o;
                    return this.segments.length > 0 && (i = rt(this.segments), o = new I(n, t), this.suspend(), i.controlOut(e), this.resume(), this.segments.push(o)), this
                },
                arc: function (e, t, n, i, o) {
                    var r, s, a, l, c;
                    return this.segments.length > 0 && (r = rt(this.segments), s = r.anchor(), a = tt.rad(e), l = new q(s.x - n * J.cos(a), s.y - i * J.sin(a)), c = new G.Arc(l, {
                        startAngle: e,
                        endAngle: t,
                        radiusX: n,
                        radiusY: i,
                        anticlockwise: o
                    }), this._addArcSegments(c)), this
                },
                arcTo: function (e, t, n, i, o) {
                    var r, s, a;
                    return this.segments.length > 0 && (r = rt(this.segments), s = r.anchor(), a = G.Arc.fromPoints(s, e, t, n, i, o), this._addArcSegments(a)), this
                },
                _addArcSegments: function (e) {
                    var t, n;
                    for (this.suspend(), t = e.curvePoints(), n = 1; t.length > n; n += 3) this.curveTo(t[n], t[n + 1], t[n + 2]);
                    this.resume(), this.geometryChange()
                },
                close: function () {
                    return this.options.closed = !0, this.geometryChange(), this
                },
                bbox: function (e) {
                    var t = X(this.currentTransform(e)),
                        n = this._bbox(t),
                        o = this.options.get("stroke.width");
                    return o && i(n, o / 2), n
                },
                rawBBox: function () {
                    return this._bbox()
                },
                _bbox: function (e) {
                    var t, n, i, o, r = this.segments,
                        s = r.length;
                    if (1 === s) n = r[0].anchor().transformCopy(e), t = new $(n, Y.ZERO);
                    else if (s > 0)
                        for (i = 1; s > i; i++) o = r[i - 1].bboxTo(r[i], e), t = t ? $.union(t, o) : o;
                    return t
                }
            }), K.mixins.Paintable.extend(B.fn), B.fromRect = function (e, t) {
                return new B(t).moveTo(e.topLeft()).lineTo(e.topRight()).lineTo(e.bottomRight()).lineTo(e.bottomLeft()).close()
            }, B.fromPoints = function (e, t) {
                var n, i, o;
                if (e) {
                    for (n = new B(t), i = 0; e.length > i; i++) o = q.create(e[i]), o && (0 === i ? n.moveTo(o) : n.lineTo(o));
                    return n
                }
            }, B.fromArc = function (e, t) {
                var n = new B(t),
                    i = e.startAngle,
                    o = e.pointAt(i);
                return n.moveTo(o.x, o.y), n.arc(i, e.endAngle, e.radiusX, e.radiusY, e.anticlockwise), n
            }, z = yt.extend({
                nodeType: "MultiPath",
                init: function (e) {
                    yt.fn.init.call(this, e), this.paths = new E, this.paths.addObserver(this), ot(this.options.stroke) || this.stroke("#000")
                },
                moveTo: function (e, t) {
                    var n = new B;
                    return n.moveTo(e, t), this.paths.push(n), this
                },
                lineTo: function (e, t) {
                    return this.paths.length > 0 && rt(this.paths).lineTo(e, t), this
                },
                curveTo: function (e, t, n) {
                    return this.paths.length > 0 && rt(this.paths).curveTo(e, t, n), this
                },
                arc: function (e, t, n, i, o) {
                    return this.paths.length > 0 && rt(this.paths).arc(e, t, n, i, o), this
                },
                arcTo: function (e, t, n, i, o) {
                    return this.paths.length > 0 && rt(this.paths).arcTo(e, t, n, i, o), this
                },
                close: function () {
                    return this.paths.length > 0 && rt(this.paths).close(), this
                },
                bbox: function (e) {
                    return t(this.paths, !0, this.currentTransform(e))
                },
                rawBBox: function () {
                    return t(this.paths, !1)
                },
                _clippedBBox: function (e) {
                    return n(this.paths, this.currentTransform(e))
                }
            }), K.mixins.Paintable.extend(z.fn), L = yt.extend({
                nodeType: "Image",
                init: function (e, t, n) {
                    yt.fn.init.call(this, n), this.src(e), this.rect(t || new G.Rect)
                },
                src: function (e) {
                    return ot(e) ? (this.options.set("src", e), this) : this.options.get("src")
                },
                bbox: function (e) {
                    var t = X(this.currentTransform(e));
                    return this._rect.bbox(t)
                },
                rawBBox: function () {
                    return this._rect.bbox()
                }
            }), o(L.fn, ["rect"]), R = j.extend({
                init: function (e, t, n) {
                    this.options = new Z({
                        offset: e,
                        color: t,
                        opacity: ot(n) ? n : 1
                    }), this.options.addObserver(this)
                }
            }), l(R.fn, ["offset", "color", "opacity"]), W(R.fn, at), R.create = function (e) {
                if (ot(e)) {
                    var t;
                    return t = e instanceof R ? e : e.length > 1 ? new R(e[0], e[1], e[2]) : new R(e.offset, e.color, e.opacity)
                }
            }, F = T.extend({
                _change: function () {
                    this.optionsChange({
                        field: "stops"
                    })
                }
            }), O = j.extend({
                nodeType: "gradient",
                init: function (e) {
                    this.stops = new F(this._createStops(e.stops)), this.stops.addObserver(this), this._userSpace = e.userSpace, this.id = h()
                },
                userSpace: function (e) {
                    return ot(e) ? (this._userSpace = e, this.optionsChange(), this) : this._userSpace
                },
                _createStops: function (e) {
                    var t, n = [];
                    for (e = e || [], t = 0; e.length > t; t++) n.push(R.create(e[t]));
                    return n
                },
                addStop: function (e, t, n) {
                    this.stops.push(new R(e, t, n))
                },
                removeStop: function (e) {
                    var t = this.stops.indexOf(e);
                    t >= 0 && this.stops.splice(t, 1)
                }
            }), W(O.fn, at, {
                optionsChange: function (e) {
                    this.trigger("optionsChange", {
                        field: "gradient" + (e ? "." + e.field : ""),
                        value: this
                    })
                },
                geometryChange: function () {
                    this.optionsChange()
                }
            }), N = O.extend({
                init: function (e) {
                    e = e || {}, O.fn.init.call(this, e), this.start(e.start || new q), this.end(e.end || new q(1, 0))
                }
            }), s(N.fn, ["start", "end"]), V = O.extend({
                init: function (e) {
                    e = e || {}, O.fn.init.call(this, e), this.center(e.center || new q), this._radius = ot(e.radius) ? e.radius : 1, this._fallbackFill = e.fallbackFill
                },
                radius: function (e) {
                    return ot(e) ? (this._radius = e, this.geometryChange(), this) : this._radius
                },
                fallbackFill: function (e) {
                    return ot(e) ? (this._fallbackFill = e, this.optionsChange(), this) : this._fallbackFill
                }
            }), s(V.fn, ["center"]), H = A.extend({
                init: function (e, t) {
                    A.fn.init.call(this, U.deepExtend({}, this._defaults, t)), this._rect = e, this._fieldMap = {}
                },
                _defaults: {
                    alignContent: mt,
                    justifyContent: mt,
                    alignItems: mt,
                    spacing: 0,
                    orientation: _t,
                    lineSpacing: 0,
                    wrap: !0
                },
                rect: function (e) {
                    return e ? (this._rect = e, this) : this._rect
                },
                _initMap: function () {
                    var e = this.options,
                        t = this._fieldMap;
                    e.orientation == _t ? (t.sizeField = "width", t.groupsSizeField = "height", t.groupAxis = "x", t.groupsAxis = "y") : (t.sizeField = "height", t.groupsSizeField = "width", t.groupAxis = "y", t.groupsAxis = "x")
                },
                reflow: function () {
                    var e, t, n, i, o, r, s, a, l, c, h, u, d, f, p, g, m, v, _, y, w, b, x, C, T, A;
                    if (this._rect && 0 !== this.children.length) {
                        for (this._initMap(), this.options.transform && this.transform(null), e = this.options, t = this._fieldMap, n = this._rect, i = this._initGroups(), o = i.groups, r = i.groupsSize, s = t.sizeField, a = t.groupsSizeField, l = t.groupAxis, c = t.groupsAxis, h = k(r, n, e.alignContent, c, a), u = new q, d = new q, f = new G.Size, y = 0; o.length > y; y++) {
                            for (v = o[y], u[l] = p = k(v.size, n, e.justifyContent, l, s), u[c] = h, f[s] = v.size, f[a] = v.lineSize, _ = new $(u, f), w = 0; v.bboxes.length > w; w++) m = v.elements[w], g = v.bboxes[w], d[l] = p, d[c] = k(g.size[a], _, e.alignItems, c, a), S(d, g, m), p += g.size[s] + e.spacing;
                            h += v.lineSize + e.lineSpacing
                        }
                        !e.wrap && v.size > n.size[s] && (b = n.size[s] / _.size[s], x = _.topLeft().scale(b, b), C = _.size[a] * b, T = k(C, n, e.alignContent, c, a), A = G.transform(), "x" === l ? A.translate(n.origin.x - x.x, T - x.y) : A.translate(T - x.x, n.origin.y - x.y), A.scale(b, b), this.transform(A))
                    }
                },
                _initGroups: function () {
                    var e, t, n, i = this.options,
                        o = this.children,
                        r = i.lineSpacing,
                        s = this._fieldMap.sizeField,
                        a = -r,
                        l = [],
                        c = this._newGroup(),
                        h = function () {
                            l.push(c), a += c.lineSize + r
                        };
                    for (n = 0; o.length > n; n++) t = o[n], e = o[n].clippedBBox(), t.visible() && e && (i.wrap && c.size + e.size[s] + i.spacing > this._rect.size[s] ? 0 === c.bboxes.length ? (this._addToGroup(c, e, t), h(), c = this._newGroup()) : (h(), c = this._newGroup(), this._addToGroup(c, e, t)) : this._addToGroup(c, e, t));
                    return c.bboxes.length && h(), {
                        groups: l,
                        groupsSize: a
                    }
                },
                _addToGroup: function (e, t, n) {
                    e.size += t.size[this._fieldMap.sizeField] + this.options.spacing, e.lineSize = Math.max(t.size[this._fieldMap.groupsSizeField], e.lineSize), e.bboxes.push(t), e.elements.push(n)
                },
                _newGroup: function () {
                    return {
                        lineSize: 0,
                        size: -this.options.spacing,
                        bboxes: [],
                        elements: []
                    }
                }
            }), W(K, {
                align: u,
                Arc: M,
                Circle: P,
                Element: yt,
                ElementsArray: T,
                fit: _,
                Gradient: O,
                GradientStop: R,
                Group: A,
                Image: L,
                Layout: H,
                LinearGradient: N,
                MultiPath: z,
                Path: B,
                RadialGradient: V,
                Segment: I,
                stack: f,
                Text: D,
                vAlign: d,
                vStack: p,
                vWrap: m,
                wrap: g
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(e) {
                var t = [];
                return e.replace(g, function (e, n) {
                    t.push(parseFloat(n))
                }), t
            }

            function n(e, t, n) {
                var i, o = t ? 0 : 1;
                for (i = 0; e.length > i; i += 2) e.splice(i + o, 0, n)
            }

            function i(e, t) {
                return e && t ? t.scaleCopy(2).translate(-e.x, -e.y) : void 0
            }

            function o(e, t, n) {
                var i = 1 / 3;
                return t = t.clone().scale(2 / 3), {
                    controlOut: t.clone().translateWith(e.scaleCopy(i)),
                    controlIn: t.translateWith(n.scaleCopy(i))
                }
            }

            var r = window.kendo,
                s = r.drawing,
                a = r.geometry,
                l = r.Class,
                c = a.Point,
                h = r.deepExtend,
                u = e.trim,
                d = r.util,
                f = d.last,
                p = /([a-z]{1})([^a-z]*)(z)?/gi,
                g = /[,\s]?(-?(?:\d+\.)?\d+)/g,
                m = "m",
                v = "z",
                _ = l.extend({
                    parse: function (e, n) {
                        var i, o = new s.MultiPath(n),
                            r = new c;
                        return e.replace(p, function (e, n, s, a) {
                            var l = n.toLowerCase(),
                                c = l === n,
                                h = t(u(s));
                            if (l === m && (c ? (r.x += h[0], r.y += h[1]) : (r.x = h[0], r.y = h[1]), o.moveTo(r.x, r.y), h.length > 2 && (l = "l", h.splice(0, 2))), y[l]) y[l](o, {
                                parameters: h,
                                position: r,
                                isRelative: c,
                                previousCommand: i
                            }), a && a.toLowerCase() === v && o.close();
                            else if (l !== m) throw Error("Error while parsing SVG path. Unsupported command: " + l);
                            i = l
                        }), o
                    }
                }),
                y = {
                    l: function (e, t) {
                        var n, i, o = t.parameters,
                            r = t.position;
                        for (n = 0; o.length > n; n += 2) i = new c(o[n], o[n + 1]), t.isRelative && i.translateWith(r), e.lineTo(i.x, i.y), r.x = i.x, r.y = i.y
                    },
                    c: function (e, t) {
                        var n, i, o, r, s = t.parameters,
                            a = t.position;
                        for (r = 0; s.length > r; r += 6) n = new c(s[r], s[r + 1]), i = new c(s[r + 2], s[r + 3]), o = new c(s[r + 4], s[r + 5]), t.isRelative && (i.translateWith(a), n.translateWith(a), o.translateWith(a)), e.curveTo(n, i, o), a.x = o.x, a.y = o.y
                    },
                    v: function (e, t) {
                        var i = t.isRelative ? 0 : t.position.x;
                        n(t.parameters, !0, i), this.l(e, t)
                    },
                    h: function (e, t) {
                        var i = t.isRelative ? 0 : t.position.y;
                        n(t.parameters, !1, i), this.l(e, t)
                    },
                    a: function (e, t) {
                        var n, i, o, r, s, a, l = t.parameters,
                            h = t.position;
                        for (n = 0; l.length > n; n += 7) i = l[n], o = l[n + 1], r = l[n + 3], s = l[n + 4], a = new c(l[n + 5], l[n + 6]), t.isRelative && a.translateWith(h), e.arcTo(a, i, o, r, s), h.x = a.x, h.y = a.y
                    },
                    s: function (e, t) {
                        var n, o, r, s, a, l = t.parameters,
                            h = t.position,
                            u = t.previousCommand;
                        for (("s" == u || "c" == u) && (s = f(f(e.paths).segments).controlIn()), a = 0; l.length > a; a += 4) r = new c(l[a], l[a + 1]), o = new c(l[a + 2], l[a + 3]), t.isRelative && (r.translateWith(h), o.translateWith(h)), n = s ? i(s, h) : h.clone(), s = r, e.curveTo(n, r, o), h.x = o.x, h.y = o.y
                    },
                    q: function (e, t) {
                        var n, i, r, s, a = t.parameters,
                            l = t.position;
                        for (s = 0; a.length > s; s += 4) r = new c(a[s], a[s + 1]), i = new c(a[s + 2], a[s + 3]), t.isRelative && (r.translateWith(l), i.translateWith(l)), n = o(l, r, i), e.curveTo(n.controlOut, n.controlIn, i), l.x = i.x, l.y = i.y
                    },
                    t: function (e, t) {
                        var n, r, s, a, l, h = t.parameters,
                            u = t.position,
                            d = t.previousCommand;
                        for (("q" == d || "t" == d) && (a = f(f(e.paths).segments), r = a.controlIn().clone().translateWith(u.scaleCopy(-1 / 3)).scale(1.5)), l = 0; h.length > l; l += 2) s = new c(h[l], h[l + 1]), t.isRelative && s.translateWith(u), r = r ? i(r, u) : u.clone(), n = o(u, r, s), e.curveTo(n.controlOut, n.controlIn, s), u.x = s.x, u.y = s.y
                    }
                };
            _.current = new _, s.Path.parse = function (e, t) {
                return _.current.parse(e, t)
            }, h(s, {
                PathParser: _
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(e) {
                var t, n, i, o;
                try {
                    t = e.getScreenCTM ? e.getScreenCTM() : null
                } catch (r) {
                }
                t && (n = -t.e % 1, i = -t.f % 1, o = e.style, (0 !== n || 0 !== i) && (o.left = n + "px", o.top = i + "px"))
            }

            function n() {
                var e = document.getElementsByTagName("base")[0],
                    t = "",
                    n = document.location.href,
                    i = n.indexOf("#");
                return e && !h.support.browser.msie && (-1 !== i && (n = n.substring(0, i)), t = n), t
            }

            function i(e) {
                return "url(" + n() + "#" + e + ")"
            }

            function o(e) {
                var t, n, i, o = new z({
                        encodeText: !0
                    }),
                    r = e.clippedBBox();
                return r && (t = r.getOrigin(), n = new f.Group, n.transform(d.transform().translate(-t.x, -t.y)), n.children.push(e), e = n), o.load([e]), i = "<?xml version='1.0' ?><svg style='width: 100%; height: 100%; overflow: hidden;' xmlns='" + P + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>" + o.render() + "</svg>", o.destroy(), i
            }

            function r(t, n) {
                var i = o(t);
                return n && n.raw || (i = "data:image/svg+xml;base64," + g.encodeBase64(i)), e.Deferred().resolve(i).promise()
            }

            function s(e, t) {
                return "clip" == e || "fill" == e && (!t || t.nodeType == C)
            }

            function a(e) {
                if (!e || !e.indexOf || e.indexOf("&") < 0) return e;
                var t = a._element;
                return t.innerHTML = e, t.textContent || t.innerText
            }

            var l, c = document,
                h = window.kendo,
                u = h.deepExtend,
                d = h.geometry,
                f = h.drawing,
                p = f.BaseNode,
                g = h.util,
                m = g.defined,
                v = g.isTransparent,
                _ = g.renderAttr,
                y = g.renderAllAttr,
                w = g.renderTemplate,
                b = e.inArray,
                x = "butt",
                k = f.DASH_ARRAYS,
                C = "gradient",
                S = "none",
                T = ".kendo",
                A = "solid",
                D = " ",
                P = "http://www.w3.org/2000/svg",
                M = "transform",
                E = "undefined",
                I = f.Surface.extend({
                    init: function (e, n) {
                        f.Surface.fn.init.call(this, e, n), this._root = new z(this.options), Q(this.element[0], this._template(this)), this._rootElement = this.element[0].firstElementChild, t(this._rootElement), this._root.attachTo(this._rootElement), this.element.on("click" + T, this._click), this.element.on("mouseover" + T, this._mouseenter), this.element.on("mouseout" + T, this._mouseleave), this.resize()
                    },
                    type: "svg",
                    destroy: function () {
                        this._root && (this._root.destroy(), this._root = null, this._rootElement = null, this.element.off(T)), f.Surface.fn.destroy.call(this)
                    },
                    translate: function (e) {
                        var t = h.format("{0} {1} {2} {3}", Math.round(e.x), Math.round(e.y), this._size.width, this._size.height);
                        this._offset = e, this._rootElement.setAttribute("viewBox", t)
                    },
                    draw: function (e) {
                        f.Surface.fn.draw.call(this, e), this._root.load([e])
                    },
                    clear: function () {
                        f.Surface.fn.clear.call(this), this._root.clear()
                    },
                    svg: function () {
                        return "<?xml version='1.0' ?>" + this._template(this)
                    },
                    exportVisual: function () {
                        var e, t = this._visual,
                            n = this._offset;
                        return n && (e = new f.Group, e.children.push(t), e.transform(d.transform().translate(-n.x, -n.y)), t = e), t
                    },
                    _resize: function () {
                        this._offset && this.translate(this._offset)
                    },
                    _template: w("<svg style='width: 100%; height: 100%; overflow: hidden;' xmlns='" + P + "' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1'>#= d._root.render() #</svg>")
                }),
                B = p.extend({
                    init: function (e) {
                        p.fn.init.call(this, e), this.definitions = {}
                    },
                    destroy: function () {
                        this.element && (this.element._kendoNode = null, this.element = null), this.clearDefinitions(), p.fn.destroy.call(this)
                    },
                    load: function (e, t) {
                        var n, i, o, r, s = this,
                            a = s.element;
                        for (r = 0; e.length > r; r++) i = e[r], o = i.children, n = new Y[i.nodeType](i), m(t) ? s.insertAt(n, t) : s.append(n), n.createDefinitions(), o && o.length > 0 && n.load(o), a && n.attachTo(a, t)
                    },
                    root: function () {
                        for (var e = this; e.parent;) e = e.parent;
                        return e
                    },
                    attachTo: function (e, t) {
                        var n, i = c.createElement("div");
                        Q(i, "<svg xmlns='" + P + "' version='1.1'>" + this.render() + "</svg>"), n = i.firstChild.firstChild, n && (m(t) ? e.insertBefore(n, e.childNodes[t] || null) : e.appendChild(n), this.setElement(n))
                    },
                    setElement: function (e) {
                        var t, n, i = this.childNodes;
                        for (this.element && (this.element._kendoNode = null), this.element = e, this.element._kendoNode = this, n = 0; i.length > n; n++) t = e.childNodes[n], i[n].setElement(t)
                    },
                    clear: function () {
                        var e, t;
                        for (this.clearDefinitions(), this.element && (this.element.innerHTML = ""), e = this.childNodes, t = 0; e.length > t; t++) e[t].destroy();
                        this.childNodes = []
                    },
                    removeSelf: function () {
                        if (this.element) {
                            var e = this.element.parentNode;
                            e && e.removeChild(this.element), this.element = null
                        }
                        p.fn.removeSelf.call(this)
                    },
                    template: w("#= d.renderChildren() #"),
                    render: function () {
                        return this.template(this)
                    },
                    renderChildren: function () {
                        var e, t = this.childNodes,
                            n = "";
                        for (e = 0; t.length > e; e++) n += t[e].render();
                        return n
                    },
                    optionsChange: function (e) {
                        var t = e.field,
                            n = e.value;
                        "visible" === t ? this.css("display", n ? "" : S) : l[t] && s(t, n) ? this.updateDefinition(t, n) : "opacity" === t && this.attr("opacity", n), p.fn.optionsChange.call(this, e)
                    },
                    attr: function (e, t) {
                        this.element && this.element.setAttribute(e, t)
                    },
                    allAttr: function (e) {
                        for (var t = 0; e.length > t; t++) this.attr(e[t][0], e[t][1])
                    },
                    css: function (e, t) {
                        this.element && (this.element.style[e] = t)
                    },
                    allCss: function (e) {
                        for (var t = 0; e.length > t; t++) this.css(e[t][0], e[t][1])
                    },
                    removeAttr: function (e) {
                        this.element && this.element.removeAttribute(e)
                    },
                    mapTransform: function (e) {
                        var t = [];
                        return e && t.push([M, "matrix(" + e.matrix().toString(6) + ")"]), t
                    },
                    renderTransform: function () {
                        return y(this.mapTransform(this.srcElement.transform()))
                    },
                    transformChange: function (e) {
                        e ? this.allAttr(this.mapTransform(e)) : this.removeAttr(M)
                    },
                    mapStyle: function () {
                        var e = this.srcElement.options,
                            t = [
                                ["cursor", e.cursor]
                            ];
                        return e.visible === !1 && t.push(["display", S]), t
                    },
                    renderStyle: function () {
                        return _("style", g.renderStyle(this.mapStyle()))
                    },
                    renderOpacity: function () {
                        return _("opacity", this.srcElement.options.opacity)
                    },
                    createDefinitions: function () {
                        var e, t, n, i, o = this.srcElement,
                            r = this.definitions;
                        if (o) {
                            n = o.options;
                            for (t in l) e = n.get(t), e && s(t, e) && (r[t] = e, i = !0);
                            i && this.definitionChange({
                                action: "add",
                                definitions: r
                            })
                        }
                    },
                    definitionChange: function (e) {
                        this.parent && this.parent.definitionChange(e)
                    },
                    updateDefinition: function (e, t) {
                        var n = this.definitions,
                            o = n[e],
                            r = l[e],
                            s = {};
                        o && (s[e] = o, this.definitionChange({
                            action: "remove",
                            definitions: s
                        }), delete n[e]), t ? (s[e] = t, this.definitionChange({
                            action: "add",
                            definitions: s
                        }), n[e] = t, this.attr(r, i(t.id))) : o && this.removeAttr(r)
                    },
                    clearDefinitions: function () {
                        var e, t = this.definitions;
                        for (e in t) {
                            this.definitionChange({
                                action: "remove",
                                definitions: t
                            }), this.definitions = {};
                            break
                        }
                    },
                    renderDefinitions: function () {
                        return y(this.mapDefinitions())
                    },
                    mapDefinitions: function () {
                        var e, t = this.definitions,
                            n = [];
                        for (e in t) n.push([l[e], i(t[e].id)]);
                        return n
                    }
                }),
                z = B.extend({
                    init: function (e) {
                        B.fn.init.call(this), this.options = e, this.defs = new L
                    },
                    attachTo: function (e) {
                        this.element = e, this.defs.attachTo(e.firstElementChild)
                    },
                    clear: function () {
                        p.fn.clear.call(this)
                    },
                    template: w("#=d.defs.render()##= d.renderChildren() #"),
                    definitionChange: function (e) {
                        this.defs.definitionChange(e)
                    }
                }),
                L = B.extend({
                    init: function () {
                        B.fn.init.call(this), this.definitionMap = {}
                    },
                    attachTo: function (e) {
                        this.element = e
                    },
                    template: w("<defs>#= d.renderChildren()#</defs>"),
                    definitionChange: function (e) {
                        var t = e.definitions,
                            n = e.action;
                        "add" == n ? this.addDefinitions(t) : "remove" == n && this.removeDefinitions(t)
                    },
                    createDefinition: function (e, t) {
                        var n;
                        return "clip" == e ? n = R : "fill" == e && (t instanceof f.LinearGradient ? n = q : t instanceof f.RadialGradient && (n = $)), new n(t)
                    },
                    addDefinitions: function (e) {
                        for (var t in e) this.addDefinition(t, e[t])
                    },
                    addDefinition: function (e, t) {
                        var n, i = this.definitionMap,
                            o = t.id,
                            r = this.element,
                            s = i[o];
                        s ? s.count++ : (n = this.createDefinition(e, t), i[o] = {
                            element: n,
                            count: 1
                        }, this.append(n), r && n.attachTo(this.element))
                    },
                    removeDefinitions: function (e) {
                        for (var t in e) this.removeDefinition(e[t])
                    },
                    removeDefinition: function (e) {
                        var t = this.definitionMap,
                            n = e.id,
                            i = t[n];
                        i && (i.count--, 0 === i.count && (this.remove(b(i.element, this.childNodes), 1), delete t[n]))
                    }
                }),
                R = B.extend({
                    init: function (e) {
                        B.fn.init.call(this), this.srcElement = e, this.id = e.id, this.load([e])
                    },
                    template: w("<clipPath id='#=d.id#'>#= d.renderChildren()#</clipPath>")
                }),
                F = B.extend({
                    template: w("<g#= d.renderTransform() + d.renderStyle() + d.renderOpacity() + d.renderDefinitions()#>#= d.renderChildren() #</g>"),
                    optionsChange: function (e) {
                        e.field == M && this.transformChange(e.value), B.fn.optionsChange.call(this, e)
                    }
                }),
                O = B.extend({
                    geometryChange: function () {
                        this.attr("d", this.renderData()), this.invalidate()
                    },
                    optionsChange: function (e) {
                        switch (e.field) {
                            case "fill":
                                e.value ? this.allAttr(this.mapFill(e.value)) : this.removeAttr("fill");
                                break;
                            case "fill.color":
                                this.allAttr(this.mapFill({
                                    color: e.value
                                }));
                                break;
                            case "stroke":
                                e.value ? this.allAttr(this.mapStroke(e.value)) : this.removeAttr("stroke");
                                break;
                            case M:
                                this.transformChange(e.value);
                                break;
                            default:
                                var t = this.attributeMap[e.field];
                                t && this.attr(t, e.value)
                        }
                        B.fn.optionsChange.call(this, e)
                    },
                    attributeMap: {
                        "fill.opacity": "fill-opacity",
                        "stroke.color": "stroke",
                        "stroke.width": "stroke-width",
                        "stroke.opacity": "stroke-opacity"
                    },
                    content: function () {
                        this.element && (this.element.textContent = this.srcElement.content())
                    },
                    renderData: function () {
                        return this.printPath(this.srcElement)
                    },
                    printPath: function (e) {
                        var t, n, i, o, r, s = e.segments,
                            a = s.length;
                        if (a > 0) {
                            for (t = [], r = 1; a > r; r++) i = this.segmentType(s[r - 1], s[r]), i !== o && (o = i, t.push(i)), t.push("L" === i ? this.printPoints(s[r].anchor()) : this.printPoints(s[r - 1].controlOut(), s[r].controlIn(), s[r].anchor()));
                            return n = "M" + this.printPoints(s[0].anchor()) + D + t.join(D), e.options.closed && (n += "Z"), n
                        }
                    },
                    printPoints: function () {
                        var e, t = arguments,
                            n = t.length,
                            i = [];
                        for (e = 0; n > e; e++) i.push(t[e].toString(3));
                        return i.join(D)
                    },
                    segmentType: function (e, t) {
                        return e.controlOut() && t.controlIn() ? "C" : "L"
                    },
                    mapStroke: function (e) {
                        var t = [];
                        return e && !v(e.color) ? (t.push(["stroke", e.color]), t.push(["stroke-width", e.width]), t.push(["stroke-linecap", this.renderLinecap(e)]), t.push(["stroke-linejoin", e.lineJoin]), m(e.opacity) && t.push(["stroke-opacity", e.opacity]), m(e.dashType) && t.push(["stroke-dasharray", this.renderDashType(e)])) : t.push(["stroke", S]), t
                    },
                    renderStroke: function () {
                        return y(this.mapStroke(this.srcElement.options.stroke))
                    },
                    renderDashType: function (e) {
                        var t, n, i, o = e.width || 1,
                            r = e.dashType;
                        if (r && r != A) {
                            for (t = k[r.toLowerCase()], n = [], i = 0; t.length > i; i++) n.push(t[i] * o);
                            return n.join(" ")
                        }
                    },
                    renderLinecap: function (e) {
                        var t = e.dashType,
                            n = e.lineCap;
                        return t && t != A ? x : n
                    },
                    mapFill: function (e) {
                        var t = [];
                        return e && e.nodeType == C || (e && !v(e.color) ? (t.push(["fill", e.color]), m(e.opacity) && t.push(["fill-opacity", e.opacity])) : t.push(["fill", S])), t
                    },
                    renderFill: function () {
                        return y(this.mapFill(this.srcElement.options.fill))
                    },
                    template: w("<path #= d.renderStyle() # #= d.renderOpacity() # #= kendo.util.renderAttr('d', d.renderData()) # #= d.renderStroke() # #= d.renderFill() # #= d.renderDefinitions() # #= d.renderTransform() #></path>")
                }),
                N = O.extend({
                    renderData: function () {
                        return this.printPath(this.srcElement.toPath())
                    }
                }),
                V = O.extend({
                    renderData: function () {
                        var e, t, n = this.srcElement.paths;
                        if (n.length > 0) {
                            for (e = [], t = 0; n.length > t; t++) e.push(this.printPath(n[t]));
                            return e.join(" ")
                        }
                    }
                }),
                H = O.extend({
                    geometryChange: function () {
                        var e = this.center();
                        this.attr("cx", e.x), this.attr("cy", e.y), this.attr("r", this.radius()), this.invalidate()
                    },
                    center: function () {
                        return this.srcElement.geometry().center
                    },
                    radius: function () {
                        return this.srcElement.geometry().radius
                    },
                    template: w("<circle #= d.renderStyle() # #= d.renderOpacity() # cx='#= d.center().x #' cy='#= d.center().y #' r='#= d.radius() #' #= d.renderStroke() # #= d.renderFill() # #= d.renderDefinitions() # #= d.renderTransform() # ></circle>")
                }),
                U = O.extend({
                    geometryChange: function () {
                        var e = this.pos();
                        this.attr("x", e.x), this.attr("y", e.y), this.invalidate()
                    },
                    optionsChange: function (e) {
                        "font" === e.field ? (this.attr("style", g.renderStyle(this.mapStyle())), this.geometryChange()) : "content" === e.field && O.fn.content.call(this, this.srcElement.content()), O.fn.optionsChange.call(this, e)
                    },
                    mapStyle: function () {
                        var e = O.fn.mapStyle.call(this),
                            t = this.srcElement.options.font;
                        return e.push(["font", h.htmlEncode(t)]), e
                    },
                    pos: function () {
                        var e = this.srcElement.position(),
                            t = this.srcElement.measure();
                        return e.clone().setY(e.y + t.baseline)
                    },
                    content: function () {
                        var e = this.srcElement.content(),
                            t = this.root().options;
                        return t && t.encodeText && (e = a(e), e = h.htmlEncode(e)), e
                    },
                    template: w("<text #= d.renderStyle() # #= d.renderOpacity() # x='#= this.pos().x #' y='#= this.pos().y #' #= d.renderStroke() # #= d.renderTransform() # #= d.renderDefinitions() # #= d.renderFill() #>#= d.content() #</text>")
                }),
                j = O.extend({
                    geometryChange: function () {
                        this.allAttr(this.mapPosition()), this.invalidate()
                    },
                    optionsChange: function (e) {
                        "src" === e.field && this.allAttr(this.mapSource()), O.fn.optionsChange.call(this, e)
                    },
                    mapPosition: function () {
                        var e = this.srcElement.rect(),
                            t = e.topLeft();
                        return [
                            ["x", t.x],
                            ["y", t.y],
                            ["width", e.width() + "px"],
                            ["height", e.height() + "px"]
                        ]
                    },
                    renderPosition: function () {
                        return y(this.mapPosition())
                    },
                    mapSource: function () {
                        return [
                            ["xlink:href", this.srcElement.src()]
                        ]
                    },
                    renderSource: function () {
                        return y(this.mapSource())
                    },
                    template: w("<image preserveAspectRatio='none' #= d.renderStyle() # #= d.renderTransform()# #= d.renderOpacity() # #= d.renderPosition() # #= d.renderSource() # #= d.renderDefinitions()#></image>")
                }),
                W = B.extend({
                    template: w("<stop #=d.renderOffset()# #=d.renderStyle()# />"),
                    renderOffset: function () {
                        return _("offset", this.srcElement.offset())
                    },
                    mapStyle: function () {
                        var e = this.srcElement;
                        return [
                            ["stop-color", e.color()],
                            ["stop-opacity", e.opacity()]
                        ]
                    },
                    optionsChange: function (e) {
                        "offset" == e.field ? this.attr(e.field, e.value) : ("color" == e.field || "opacity" == e.field) && this.css("stop-" + e.field, e.value)
                    }
                }),
                G = B.extend({
                    init: function (e) {
                        B.fn.init.call(this, e), this.id = e.id, this.loadStops()
                    },
                    loadStops: function () {
                        var e, t, n = this.srcElement,
                            i = n.stops,
                            o = this.element;
                        for (t = 0; i.length > t; t++) e = new W(i[t]), this.append(e), o && e.attachTo(o)
                    },
                    optionsChange: function (e) {
                        "gradient.stops" == e.field ? (p.fn.clear.call(this), this.loadStops()) : e.field == C && this.allAttr(this.mapCoordinates())
                    },
                    renderCoordinates: function () {
                        return y(this.mapCoordinates())
                    },
                    mapSpace: function () {
                        return ["gradientUnits", this.srcElement.userSpace() ? "userSpaceOnUse" : "objectBoundingBox"]
                    }
                }),
                q = G.extend({
                    template: w("<linearGradient id='#=d.id#' #=d.renderCoordinates()#>#= d.renderChildren()#</linearGradient>"),
                    mapCoordinates: function () {
                        var e = this.srcElement,
                            t = e.start(),
                            n = e.end(),
                            i = [
                                ["x1", t.x],
                                ["y1", t.y],
                                ["x2", n.x],
                                ["y2", n.y], this.mapSpace()
                            ];
                        return i
                    }
                }),
                $ = G.extend({
                    template: w("<radialGradient id='#=d.id#' #=d.renderCoordinates()#>#= d.renderChildren()#</radialGradient>"),
                    mapCoordinates: function () {
                        var e = this.srcElement,
                            t = e.center(),
                            n = e.radius(),
                            i = [
                                ["cx", t.x],
                                ["cy", t.y],
                                ["r", n], this.mapSpace()
                            ];
                        return i
                    }
                }),
                Y = {
                    Group: F,
                    Text: U,
                    Path: O,
                    MultiPath: V,
                    Circle: H,
                    Arc: N,
                    Image: j
                },
                Q = function (e, t) {
                    e.innerHTML = t
                };
            !function () {
                var e = "<svg xmlns='" + P + "'></svg>",
                    t = c.createElement("div"),
                    n = typeof DOMParser != E;
                t.innerHTML = e, n && t.firstChild.namespaceURI != P && (Q = function (e, t) {
                    var n = new DOMParser,
                        i = n.parseFromString(t, "text/xml"),
                        o = c.adoptNode(i.documentElement);
                    e.innerHTML = "", e.appendChild(o)
                })
            }(), a._element = document.createElement("span"), l = {
                clip: "clip-path",
                fill: "fill"
            }, h.support.svg = function () {
                return c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1")
            }(), h.support.svg && f.SurfaceFactory.current.register("svg", I, 10), u(f, {
                exportSVG: r,
                svg: {
                    ArcNode: N,
                    CircleNode: H,
                    ClipNode: R,
                    DefinitionNode: L,
                    GradientStopNode: W,
                    GroupNode: F,
                    ImageNode: j,
                    LinearGradientNode: q,
                    MultiPathNode: V,
                    Node: B,
                    PathNode: O,
                    RadialGradientNode: $,
                    RootNode: z,
                    Surface: I,
                    TextNode: U,
                    _exportGroup: o
                }
            })
        }(window.kendo.jQuery),
        function (e) {
            function t(t, n) {
                var i, o, r, s, a, l, c = {
                        width: "800px",
                        height: "600px",
                        cors: "Anonymous"
                    },
                    h = t.clippedBBox();
                return h && (i = h.getOrigin(), o = new w.Group, o.transform(y.transform().translate(-i.x, -i.y)), o.children.push(t), t = o, r = h.getSize(), c.width = r.width + "px", c.height = r.height + "px"), n = f(c, n), s = e("<div />").css({
                    display: "none",
                    width: n.width,
                    height: n.height
                }).appendTo(document.body), a = new T(s, n), a.draw(t), l = a.image(), l.always(function () {
                    a.destroy(), s.remove()
                }), l
            }

            function n(e, t) {
                var n, i, o;
                for (o = 0; t.length > o; o++) i = t[o], n = d.parseColor(i.color()), n.a *= i.opacity(), e.addColorStop(i.offset(), n.toCssRgba())
            }

            var i, o, r, s, a, l, c, h, u = document,
                d = window.kendo,
                f = d.deepExtend,
                p = d.util,
                g = p.defined,
                m = p.isTransparent,
                v = p.renderTemplate,
                _ = p.valueOrDefault,
                y = d.geometry,
                w = d.drawing,
                b = w.BaseNode,
                x = "butt",
                k = w.DASH_ARRAYS,
                C = 1e3 / 60,
                S = "solid",
                T = w.Surface.extend({
                    init: function (t, n) {
                        w.Surface.fn.init.call(this, t, n), this.element[0].innerHTML = this._template(this);
                        var o = this.element[0].firstElementChild;
                        o.width = e(t).width(), o.height = e(t).height(), this._rootElement = o, this._root = new i(o)
                    },
                    destroy: function () {
                        w.Surface.fn.destroy.call(this), this._root && (this._root.destroy(), this._root = null)
                    },
                    type: "canvas",
                    draw: function (e) {
                        w.Surface.fn.draw.call(this, e), this._root.load([e], void 0, this.options.cors)
                    },
                    clear: function () {
                        w.Surface.fn.clear.call(this), this._root.clear()
                    },
                    image: function () {
                        var t, n = this._root,
                            i = this._rootElement,
                            o = [];
                        return n.traverse(function (e) {
                            e.loading && o.push(e.loading)
                        }), t = e.Deferred(), e.when.apply(e, o).done(function () {
                            n._invalidate();
                            try {
                                var e = i.toDataURL();
                                t.resolve(e)
                            } catch (o) {
                                t.reject(o)
                            }
                        }).fail(function (e) {
                            t.reject(e)
                        }), t.promise()
                    },
                    _resize: function () {
                        this._rootElement.width = this._size.width, this._rootElement.height = this._size.height, this._root.invalidate()
                    },
                    _template: v("<canvas style='width: 100%; height: 100%;'></canvas>")
                }),
                A = b.extend({
                    init: function (e) {
                        b.fn.init.call(this, e), e && this.initClip()
                    },
                    initClip: function () {
                        var e = this.srcElement.clip();
                        e && (this.clip = e, e.addObserver(this))
                    },
                    clear: function () {
                        this.srcElement && this.srcElement.removeObserver(this), this.clearClip(), b.fn.clear.call(this)
                    },
                    clearClip: function () {
                        this.clip && (this.clip.removeObserver(this), delete this.clip)
                    },
                    setClip: function (e) {
                        this.clip && (e.beginPath(), o.fn.renderPoints(e, this.clip), e.clip())
                    },
                    optionsChange: function (e) {
                        "clip" == e.field && (this.clearClip(), this.initClip()), b.fn.optionsChange.call(this, e)
                    },
                    setTransform: function (e) {
                        if (this.srcElement) {
                            var t = this.srcElement.transform();
                            t && e.transform.apply(e, t.matrix().toArray(6))
                        }
                    },
                    load: function (e, t, n) {
                        var i, o, r, s, a = this;
                        for (s = 0; e.length > s; s++) o = e[s], r = o.children, i = new h[o.nodeType](o, n), r && r.length > 0 && i.load(r, t, n), g(t) ? a.insertAt(i, t) : a.append(i);
                        a.invalidate()
                    },
                    setOpacity: function (e) {
                        if (this.srcElement) {
                            var t = this.srcElement.opacity();
                            g(t) && this.globalAlpha(e, t)
                        }
                    },
                    globalAlpha: function (e, t) {
                        t && e.globalAlpha && (t *= e.globalAlpha), e.globalAlpha = t
                    },
                    visible: function () {
                        var e = this.srcElement;
                        return !e || e && e.options.visible !== !1
                    }
                }),
                D = A.extend({
                    renderTo: function (e) {
                        var t, n, i;
                        if (this.visible()) {
                            for (e.save(), this.setTransform(e), this.setClip(e), this.setOpacity(e), t = this.childNodes, n = 0; t.length > n; n++) i = t[n], i.visible() && i.renderTo(e);
                            e.restore()
                        }
                    }
                });
            w.mixins.Traversable.extend(D.fn, "childNodes"), i = D.extend({
                init: function (t) {
                    D.fn.init.call(this), this.canvas = t, this.ctx = t.getContext("2d"), this.invalidate = d.throttle(e.proxy(this._invalidate, this), C)
                },
                destroy: function () {
                    D.fn.destroy.call(this), this.canvas = null, this.ctx = null
                },
                _invalidate: function () {
                    this.ctx && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.renderTo(this.ctx))
                }
            }), w.mixins.Traversable.extend(i.fn, "childNodes"), o = A.extend({
                renderTo: function (e) {
                    e.save(), this.setTransform(e), this.setClip(e), this.setOpacity(e), e.beginPath(), this.renderPoints(e, this.srcElement), this.setLineDash(e), this.setLineCap(e), this.setLineJoin(e), this.setFill(e), this.setStroke(e), e.restore()
                },
                setFill: function (e) {
                    var t = this.srcElement.options.fill,
                        n = !1;
                    return t && ("gradient" == t.nodeType ? (this.setGradientFill(e, t), n = !0) : m(t.color) || (e.fillStyle = t.color, e.save(), this.globalAlpha(e, t.opacity), e.fill(), e.restore(), n = !0)), n
                },
                setGradientFill: function (e, t) {
                    var i, o, r, s, a = this.srcElement.rawBBox();
                    t instanceof w.LinearGradient ? (o = t.start(), r = t.end(), i = e.createLinearGradient(o.x, o.y, r.x, r.y)) : t instanceof w.RadialGradient && (s = t.center(), i = e.createRadialGradient(s.x, s.y, 0, s.x, s.y, t.radius())), n(i, t.stops), e.save(), t.userSpace() || e.transform(a.width(), 0, 0, a.height(), a.origin.x, a.origin.y), e.fillStyle = i, e.fill(), e.restore()
                },
                setStroke: function (e) {
                    var t = this.srcElement.options.stroke;
                    return t && !m(t.color) && t.width > 0 ? (e.strokeStyle = t.color, e.lineWidth = _(t.width, 1), e.save(), this.globalAlpha(e, t.opacity), e.stroke(), e.restore(), !0) : void 0
                },
                dashType: function () {
                    var e = this.srcElement.options.stroke;
                    return e && e.dashType ? e.dashType.toLowerCase() : void 0
                },
                setLineDash: function (e) {
                    var t, n = this.dashType();
                    n && n != S && (t = k[n], e.setLineDash ? e.setLineDash(t) : (e.mozDash = t, e.webkitLineDash = t))
                },
                setLineCap: function (e) {
                    var t = this.dashType(),
                        n = this.srcElement.options.stroke;
                    t && t !== S ? e.lineCap = x : n && n.lineCap && (e.lineCap = n.lineCap)
                },
                setLineJoin: function (e) {
                    var t = this.srcElement.options.stroke;
                    t && t.lineJoin && (e.lineJoin = t.lineJoin)
                },
                renderPoints: function (e, t) {
                    var n, i, o, r, s, a, l = t.segments;
                    if (0 !== l.length) {
                        for (n = l[0], i = n.anchor(), e.moveTo(i.x, i.y), o = 1; l.length > o; o++) n = l[o], i = n.anchor(), r = l[o - 1], s = r.controlOut(), a = n.controlIn(), s && a ? e.bezierCurveTo(s.x, s.y, a.x, a.y, i.x, i.y) : e.lineTo(i.x, i.y);
                        t.options.closed && e.closePath()
                    }
                }
            }), r = o.extend({
                renderPoints: function (e) {
                    var t, n = this.srcElement.paths;
                    for (t = 0; n.length > t; t++) o.fn.renderPoints(e, n[t])
                }
            }), s = o.extend({
                renderPoints: function (e) {
                    var t = this.srcElement.geometry(),
                        n = t.center,
                        i = t.radius;
                    e.arc(n.x, n.y, i, 0, 2 * Math.PI)
                }
            }), a = o.extend({
                renderPoints: function (e) {
                    var t = this.srcElement.toPath();
                    o.fn.renderPoints.call(this, e, t)
                }
            }), l = o.extend({
                renderTo: function (e) {
                    var t = this.srcElement,
                        n = t.position(),
                        i = t.measure();
                    e.save(), this.setTransform(e), this.setClip(e), this.setOpacity(e), e.beginPath(), e.font = t.options.font, this.setFill(e) && e.fillText(t.content(), n.x, n.y + i.baseline), this.setStroke(e) && (this.setLineDash(e), e.strokeText(t.content(), n.x, n.y + i.baseline)), e.restore()
                }
            }), c = o.extend({
                init: function (t, n) {
                    var i, r;
                    o.fn.init.call(this, t), this.onLoad = e.proxy(this.onLoad, this), this.onError = e.proxy(this.onError, this), this.loading = e.Deferred(), i = this.img = new Image, n && !/^data:/i.test(t.src()) && (i.crossOrigin = n), r = i.src = t.src(), i.complete ? this.onLoad() : (i.onload = this.onLoad, i.onerror = this.onError)
                },
                renderTo: function (e) {
                    "resolved" === this.loading.state() && (e.save(), this.setTransform(e), this.setClip(e), this.drawImage(e), e.restore())
                },
                optionsChange: function (t) {
                    "src" === t.field ? (this.loading = e.Deferred(), this.img.src = this.srcElement.src()) : o.fn.optionsChange.call(this, t)
                },
                onLoad: function () {
                    this.loading.resolve(), this.invalidate()
                },
                onError: function () {
                    this.loading.reject(Error("Unable to load image '" + this.img.src + "'. Check for connectivity and verify CORS headers."))
                },
                drawImage: function (e) {
                    var t = this.srcElement.rect(),
                        n = t.topLeft();
                    e.drawImage(this.img, n.x, n.y, t.width(), t.height())
                }
            }), h = {
                Group: D,
                Text: l,
                Path: o,
                MultiPath: r,
                Circle: s,
                Arc: a,
                Image: c
            }, d.support.canvas = function () {
                return !!u.createElement("canvas").getContext
            }(), d.support.canvas && w.SurfaceFactory.current.register("canvas", T, 20), f(d.drawing, {
                exportImage: t,
                canvas: {
                    ArcNode: a,
                    CircleNode: s,
                    GroupNode: D,
                    ImageNode: c,
                    MultiPathNode: r,
                    Node: A,
                    PathNode: o,
                    RootNode: i,
                    Surface: T,
                    TextNode: l
                }
            })
        }(window.kendo.jQuery),
        function (e) {
            function t() {
                if (u.namespaces && !u.namespaces.kvml) {
                    u.namespaces.add("kvml", "urn:schemas-microsoft-com:vml");
                    var e = u.styleSheets.length > 30 ? u.styleSheets[0] : u.createStyleSheet();
                    e.addRule(".kvml", "behavior:url(#default#VML)")
                }
            }

            function n(e) {
                var t = u.createElement("kvml:" + e);
                return t.className = "kvml", t
            }

            function i(e) {
                var t, n = e.length,
                    i = [];
                for (t = 0; n > t; t++) i.push(e[t].scaleCopy(I).toString(0, ","));
                return i.join(" ")
            }

            function o(e, t) {
                var n, o, s, a, l, c = e.segments,
                    h = c.length;
                if (h > 0) {
                    for (n = [], l = 1; h > l; l++) s = r(c[l - 1], c[l]), s !== a && (a = s, n.push(s)), n.push("l" === s ? i([c[l].anchor()]) : i([c[l - 1].controlOut(), c[l].controlIn(), c[l].anchor()]));
                    return o = "m " + i([c[0].anchor()]) + " " + n.join(" "), e.options.closed && (o += " x"), t !== !0 && (o += " e"), o
                }
            }

            function r(e, t) {
                return e.controlOut() && t.controlIn() ? "c" : "l"
            }

            function s(e) {
                return 0 === e.indexOf("fill") || 0 === e.indexOf(z)
            }

            function a(e, t, n) {
                var i, o = n * P(t.opacity(), 1);
                return i = e ? l(e, t.color(), o) : l(t.color(), "#fff", 1 - o)
            }

            function l(e, t, n) {
                var i = new k(e),
                    o = new k(t),
                    r = c(i.r, o.r, n),
                    s = c(i.g, o.g, n),
                    a = c(i.b, o.b, n);
                return new k(r, s, a).toHex()
            }

            function c(e, t, n) {
                return d.round(n * t + (1 - n) * e)
            }

            var h, u = document,
                d = Math,
                f = d.atan2,
                p = d.ceil,
                g = d.sqrt,
                m = window.kendo,
                v = m.deepExtend,
                _ = e.noop,
                y = m.drawing,
                w = y.BaseNode,
                b = m.geometry,
                x = b.toMatrix,
                k = m.Color,
                C = m.util,
                S = C.isTransparent,
                T = C.defined,
                A = C.deg,
                D = C.round,
                P = C.valueOrDefault,
                M = "none",
                E = ".kendo",
                I = 100,
                B = I * I,
                z = "gradient",
                L = 4,
                R = y.Surface.extend({
                    init: function (e, n) {
                        y.Surface.fn.init.call(this, e, n), t(), this.element.empty(), this._root = new O, this._root.attachTo(this.element[0]), this.element.on("click" + E, this._click), this.element.on("mouseover" + E, this._mouseenter), this.element.on("mouseout" + E, this._mouseleave)
                    },
                    type: "vml",
                    destroy: function () {
                        this._root && (this._root.destroy(), this._root = null, this.element.off(E)), y.Surface.fn.destroy.call(this)
                    },
                    draw: function (e) {
                        y.Surface.fn.draw.call(this, e), this._root.load([e], void 0, null)
                    },
                    clear: function () {
                        y.Surface.fn.clear.call(this), this._root.clear()
                    }
                }),
                F = w.extend({
                    init: function (e) {
                        w.fn.init.call(this, e), this.createElement(), this.attachReference()
                    },
                    observe: _,
                    destroy: function () {
                        this.element && (this.element._kendoNode = null, this.element = null), w.fn.destroy.call(this)
                    },
                    clear: function () {
                        var e, t;
                        for (this.element && (this.element.innerHTML = ""), e = this.childNodes, t = 0; e.length > t; t++) e[t].destroy();
                        this.childNodes = []
                    },
                    removeSelf: function () {
                        this.element && (this.element.parentNode.removeChild(this.element), this.element = null), w.fn.removeSelf.call(this)
                    },
                    createElement: function () {
                        this.element = u.createElement("div")
                    },
                    attachReference: function () {
                        this.element._kendoNode = this
                    },
                    load: function (e, t, n, i) {
                        var o, r, s, a, l, c;
                        for (i = P(i, 1), this.srcElement && (i *= P(this.srcElement.options.opacity, 1)), o = 0; e.length > o; o++) r = e[o], s = r.children, a = r.currentTransform(n), l = i * P(r.options.opacity, 1), c = new st[r.nodeType](r, a, l), s && s.length > 0 && c.load(s, t, a, i), T(t) ? this.insertAt(c, t) : this.append(c), c.attachTo(this.element, t)
                    },
                    attachTo: function (e, t) {
                        T(t) ? e.insertBefore(this.element, e.children[t] || null) : e.appendChild(this.element)
                    },
                    optionsChange: function (e) {
                        "visible" == e.field && this.css("display", e.value !== !1 ? "" : M)
                    },
                    setStyle: function () {
                        this.allCss(this.mapStyle())
                    },
                    mapStyle: function () {
                        var e = [];
                        return this.srcElement && this.srcElement.options.visible === !1 && e.push(["display", M]), e
                    },
                    mapOpacityTo: function (e, t) {
                        var n = P(this.opacity, 1);
                        n *= P(t, 1), e.push(["opacity", n])
                    },
                    attr: function (e, t) {
                        this.element && (this.element[e] = t)
                    },
                    allAttr: function (e) {
                        for (var t = 0; e.length > t; t++) this.attr(e[t][0], e[t][1])
                    },
                    css: function (e, t) {
                        this.element && (this.element.style[e] = t)
                    },
                    allCss: function (e) {
                        for (var t = 0; e.length > t; t++) this.css(e[t][0], e[t][1])
                    }
                }),
                O = F.extend({
                    createElement: function () {
                        F.fn.createElement.call(this), this.allCss([
                            ["width", "100%"],
                            ["height", "100%"],
                            ["position", "relative"],
                            ["visibility", "visible"]
                        ])
                    },
                    attachReference: _
                }),
                N = m.Class.extend({
                    init: function (e, t) {
                        this.srcElement = e, this.observer = t, e.addObserver(this)
                    },
                    geometryChange: function () {
                        this.observer.optionsChange({
                            field: "clip",
                            value: this.srcElement
                        })
                    },
                    clear: function () {
                        this.srcElement.removeObserver(this)
                    }
                }),
                V = F.extend({
                    init: function (e) {
                        F.fn.init.call(this, e), e && this.initClip()
                    },
                    observe: function () {
                        w.fn.observe.call(this)
                    },
                    mapStyle: function () {
                        var e = F.fn.mapStyle.call(this);
                        return this.srcElement && this.srcElement.clip() && e.push(["clip", this.clipRect()]), e
                    },
                    optionsChange: function (e) {
                        "clip" == e.field && (this.clearClip(), this.initClip(), this.setClip()), F.fn.optionsChange.call(this, e)
                    },
                    clear: function () {
                        this.clearClip(), F.fn.clear.call(this)
                    },
                    initClip: function () {
                        this.srcElement.clip() && (this.clip = new N(this.srcElement.clip(), this), this.clip.observer = this)
                    },
                    clearClip: function () {
                        this.clip && (this.clip.clear(), this.clip = null, this.css("clip", this.clipRect()))
                    },
                    setClip: function () {
                        this.clip && this.css("clip", this.clipRect())
                    },
                    clipRect: function () {
                        var e, t, n, i = h,
                            o = this.srcElement.clip();
                        return o && (e = this.clipBBox(o), t = e.topLeft(), n = e.bottomRight(), i = m.format("rect({0}px {1}px {2}px {3}px)", t.y, n.x, n.y, t.x)), i
                    },
                    clipBBox: function (e) {
                        var t = this.srcElement.rawBBox().topLeft(),
                            n = e.rawBBox();
                        return n.origin.translate(-t.x, -t.y), n
                    }
                }),
                H = V.extend({
                    createElement: function () {
                        F.fn.createElement.call(this), this.setStyle()
                    },
                    attachTo: function (e, t) {
                        this.css("display", M), F.fn.attachTo.call(this, e, t), this.srcElement.options.visible !== !1 && this.css("display", "")
                    },
                    _attachTo: function (e) {
                        var t = document.createDocumentFragment();
                        t.appendChild(this.element), e.appendChild(t)
                    },
                    mapStyle: function () {
                        var e = V.fn.mapStyle.call(this);
                        return e.push(["position", "absolute"]), e.push(["white-space", "nowrap"]), e
                    },
                    optionsChange: function (e) {
                        "transform" === e.field && this.refreshTransform(), "opacity" === e.field && this.refreshOpacity(), V.fn.optionsChange.call(this, e)
                    },
                    refreshTransform: function (e) {
                        var t, n = this.srcElement.currentTransform(e),
                            i = this.childNodes,
                            o = i.length;
                        for (this.setClip(), t = 0; o > t; t++) i[t].refreshTransform(n)
                    },
                    currentOpacity: function () {
                        var e = P(this.srcElement.options.opacity, 1);
                        return this.parent && this.parent.currentOpacity && (e *= this.parent.currentOpacity()), e
                    },
                    refreshOpacity: function () {
                        var e, t = this.childNodes,
                            n = t.length,
                            i = this.currentOpacity();
                        for (e = 0; n > e; e++) t[e].refreshOpacity(i)
                    },
                    initClip: function () {
                        if (V.fn.initClip.call(this), this.clip) {
                            var e = this.clip.srcElement.bbox(this.srcElement.currentTransform());
                            e && (this.css("width", e.width() + e.origin.x), this.css("height", e.height() + e.origin.y))
                        }
                    },
                    clipBBox: function (e) {
                        return e.bbox(this.srcElement.currentTransform())
                    },
                    clearClip: function () {
                        V.fn.clearClip.call(this)
                    }
                }),
                U = F.extend({
                    init: function (e, t) {
                        this.opacity = t, F.fn.init.call(this, e)
                    },
                    createElement: function () {
                        this.element = n("stroke"), this.setOpacity()
                    },
                    optionsChange: function (e) {
                        0 === e.field.indexOf("stroke") && this.setStroke()
                    },
                    refreshOpacity: function (e) {
                        this.opacity = e, this.setStroke()
                    },
                    setStroke: function () {
                        this.allAttr(this.mapStroke())
                    },
                    setOpacity: function () {
                        this.setStroke()
                    },
                    mapStroke: function () {
                        var e, t = this.srcElement.options.stroke,
                            n = [];
                        return t && !S(t.color) && 0 !== t.width ? (n.push(["on", "true"]), n.push(["color", t.color]), n.push(["weight", (t.width || 1) + "px"]), this.mapOpacityTo(n, t.opacity), T(t.dashType) && n.push(["dashstyle", t.dashType]), T(t.lineJoin) && n.push(["joinstyle", t.lineJoin]), T(t.lineCap) && (e = t.lineCap.toLowerCase(), "butt" === e && (e = "butt" === e ? "flat" : e), n.push(["endcap", e]))) : n.push(["on", "false"]), n
                    }
                }),
                j = F.extend({
                    init: function (e, t, n) {
                        this.opacity = n, F.fn.init.call(this, e)
                    },
                    createElement: function () {
                        this.element = n("fill"), this.setFill()
                    },
                    optionsChange: function (e) {
                        s(e.field) && this.setFill()
                    },
                    refreshOpacity: function (e) {
                        this.opacity = e, this.setOpacity()
                    },
                    setFill: function () {
                        this.allAttr(this.mapFill())
                    },
                    setOpacity: function () {
                        this.setFill()
                    },
                    attr: function (e, t) {
                        var n, i = this.element;
                        if (i) {
                            for (n = e.split("."); n.length > 1;) i = i[n.shift()];
                            i[n[0]] = t
                        }
                    },
                    mapFill: function () {
                        var e = this.srcElement.fill(),
                            t = [
                                ["on", "false"]
                            ];
                        return e && (e.nodeType == z ? t = this.mapGradient(e) : S(e.color) || (t = this.mapFillColor(e))), t
                    },
                    mapFillColor: function (e) {
                        var t = [
                            ["on", "true"],
                            ["color", e.color]
                        ];
                        return this.mapOpacityTo(t, e.opacity), t
                    },
                    mapGradient: function (e) {
                        var t, n = this.srcElement.options,
                            i = n.fallbackFill || e.fallbackFill && e.fallbackFill();
                        return t = e instanceof y.LinearGradient ? this.mapLinearGradient(e) : e instanceof y.RadialGradient && e.supportVML ? this.mapRadialGradient(e) : i ? this.mapFillColor(i) : [
                            ["on", "false"]
                        ]
                    },
                    mapLinearGradient: function (e) {
                        var t = e.start(),
                            n = e.end(),
                            i = C.deg(f(n.y - t.y, n.x - t.x)),
                            o = [
                                ["on", "true"],
                                ["type", z],
                                ["focus", 0],
                                ["method", "none"],
                                ["angle", 270 - i]
                            ];
                        return this.addColors(o), o
                    },
                    mapRadialGradient: function (e) {
                        var t = this.srcElement.rawBBox(),
                            n = e.center(),
                            i = (n.x - t.origin.x) / t.width(),
                            o = (n.y - t.origin.y) / t.height(),
                            r = [
                                ["on", "true"],
                                ["type", "gradienttitle"],
                                ["focus", "100%"],
                                ["focusposition", i + " " + o],
                                ["method", "none"]
                            ];
                        return this.addColors(r), r
                    },
                    addColors: function (e) {
                        var t, n, i = this.srcElement.options,
                            o = P(this.opacity, 1),
                            r = [],
                            s = i.fill.stops,
                            l = i.baseColor,
                            c = this.element.colors ? "colors.value" : "colors",
                            h = a(l, s[0], o),
                            u = a(l, s[s.length - 1], o);
                        for (n = 0; s.length > n; n++) t = s[n], r.push(d.round(100 * t.offset()) + "% " + a(l, t, o));
                        e.push([c, r.join(",")], ["color", h], ["color2", u])
                    }
                }),
                W = F.extend({
                    init: function (e, t) {
                        this.transform = t, F.fn.init.call(this, e)
                    },
                    createElement: function () {
                        this.element = n("skew"), this.setTransform()
                    },
                    optionsChange: function (e) {
                        "transform" === e.field && this.refresh(this.srcElement.currentTransform())
                    },
                    refresh: function (e) {
                        this.transform = e, this.setTransform()
                    },
                    transformOrigin: function () {
                        return "-0.5,-0.5"
                    },
                    setTransform: function () {
                        this.allAttr(this.mapTransform())
                    },
                    mapTransform: function () {
                        var e = this.transform,
                            t = [],
                            n = x(e);
                        return n ? (n.round(L), t.push(["on", "true"], ["matrix", [n.a, n.c, n.b, n.d, 0, 0].join(",")], ["offset", n.e + "px," + n.f + "px"], ["origin", this.transformOrigin()])) : t.push(["on", "false"]), t
                    }
                }),
                G = V.extend({
                    init: function (e, t, n) {
                        this.fill = this.createFillNode(e, t, n), this.stroke = new U(e, n), this.transform = this.createTransformNode(e, t), V.fn.init.call(this, e)
                    },
                    attachTo: function (e, t) {
                        this.fill.attachTo(this.element), this.stroke.attachTo(this.element), this.transform.attachTo(this.element), F.fn.attachTo.call(this, e, t)
                    },
                    createFillNode: function (e, t, n) {
                        return new j(e, t, n)
                    },
                    createTransformNode: function (e, t) {
                        return new W(e, t)
                    },
                    createElement: function () {
                        this.element = n("shape"), this.setCoordsize(), this.setStyle()
                    },
                    optionsChange: function (e) {
                        s(e.field) ? this.fill.optionsChange(e) : 0 === e.field.indexOf("stroke") ? this.stroke.optionsChange(e) : "transform" === e.field ? this.transform.optionsChange(e) : "opacity" === e.field && (this.fill.setOpacity(), this.stroke.setOpacity()), V.fn.optionsChange.call(this, e)
                    },
                    refreshTransform: function (e) {
                        this.transform.refresh(this.srcElement.currentTransform(e))
                    },
                    refreshOpacity: function (e) {
                        e *= P(this.srcElement.options.opacity, 1), this.fill.refreshOpacity(e), this.stroke.refreshOpacity(e)
                    },
                    mapStyle: function (e, t) {
                        var n, i = V.fn.mapStyle.call(this);
                        return e && t || (e = t = I), i.push(["position", "absolute"], ["width", e + "px"], ["height", t + "px"]), n = this.srcElement.options.cursor, n && i.push(["cursor", n]), i
                    },
                    setCoordsize: function () {
                        this.allAttr([
                            ["coordorigin", "0 0"],
                            ["coordsize", B + " " + B]
                        ])
                    }
                }),
                q = F.extend({
                    createElement: function () {
                        this.element = n("path"), this.setPathData()
                    },
                    geometryChange: function () {
                        this.setPathData()
                    },
                    setPathData: function () {
                        this.attr("v", this.renderData())
                    },
                    renderData: function () {
                        return o(this.srcElement)
                    }
                }),
                $ = G.extend({
                    init: function (e, t, n) {
                        this.pathData = this.createDataNode(e), G.fn.init.call(this, e, t, n)
                    },
                    attachTo: function (e, t) {
                        this.pathData.attachTo(this.element), G.fn.attachTo.call(this, e, t)
                    },
                    createDataNode: function (e) {
                        return new q(e)
                    },
                    geometryChange: function () {
                        this.pathData.geometryChange(), G.fn.geometryChange.call(this)
                    }
                }),
                Y = q.extend({
                    renderData: function () {
                        var e, t, n, i = this.srcElement.paths;
                        if (i.length > 0) {
                            for (e = [], t = 0; i.length > t; t++) n = i.length - 1 > t, e.push(o(i[t], n));
                            return e.join(" ")
                        }
                    }
                }),
                Q = $.extend({
                    createDataNode: function (e) {
                        return new Y(e)
                    }
                }),
                X = W.extend({
                    transformOrigin: function () {
                        var e = this.srcElement.geometry().bbox(),
                            t = e.center(),
                            n = -p(t.x) / p(e.width()),
                            i = -p(t.y) / p(e.height());
                        return n + "," + i
                    }
                }),
                K = G.extend({
                    createElement: function () {
                        this.element = n("oval"), this.setStyle()
                    },
                    createTransformNode: function (e, t) {
                        return new X(e, t)
                    },
                    geometryChange: function () {
                        G.fn.geometryChange.call(this), this.setStyle(), this.refreshTransform()
                    },
                    mapStyle: function () {
                        var e = this.srcElement.geometry(),
                            t = e.radius,
                            n = e.center,
                            i = p(2 * t),
                            o = G.fn.mapStyle.call(this, i, i);
                        return o.push(["left", p(n.x - t) + "px"], ["top", p(n.y - t) + "px"]), o
                    }
                }),
                Z = q.extend({
                    renderData: function () {
                        return o(this.srcElement.toPath())
                    }
                }),
                J = $.extend({
                    createDataNode: function (e) {
                        return new Z(e)
                    }
                }),
                et = q.extend({
                    createElement: function () {
                        q.fn.createElement.call(this), this.attr("textpathok", !0)
                    },
                    renderData: function () {
                        var e = this.srcElement.rect(),
                            t = e.center();
                        return "m " + i([new b.Point(e.topLeft().x, t.y)]) + " l " + i([new b.Point(e.bottomRight().x, t.y)])
                    }
                }),
                tt = F.extend({
                    createElement: function () {
                        this.element = n("textpath"), this.attr("on", !0), this.attr("fitpath", !1), this.setStyle(), this.setString()
                    },
                    optionsChange: function (e) {
                        "content" === e.field ? this.setString() : this.setStyle(), F.fn.optionsChange.call(this, e)
                    },
                    mapStyle: function () {
                        return [
                            ["font", this.srcElement.options.font]
                        ]
                    },
                    setString: function () {
                        this.attr("string", this.srcElement.content())
                    }
                }),
                nt = $.extend({
                    init: function (e, t, n) {
                        this.path = new tt(e), $.fn.init.call(this, e, t, n)
                    },
                    createDataNode: function (e) {
                        return new et(e)
                    },
                    attachTo: function (e, t) {
                        this.path.attachTo(this.element), $.fn.attachTo.call(this, e, t)
                    },
                    optionsChange: function (e) {
                        ("font" === e.field || "content" === e.field) && (this.path.optionsChange(e), this.pathData.geometryChange(e)), $.fn.optionsChange.call(this, e)
                    }
                }),
                it = q.extend({
                    renderData: function () {
                        var e = this.srcElement.rect(),
                            t = (new y.Path).moveTo(e.topLeft()).lineTo(e.topRight()).lineTo(e.bottomRight()).lineTo(e.bottomLeft()).close();
                        return o(t)
                    }
                }),
                ot = W.extend({
                    init: function (e, t, n) {
                        this.opacity = n, W.fn.init.call(this, e, t)
                    },
                    createElement: function () {
                        this.element = n("fill"), this.attr("type", "frame"), this.attr("rotate", !0), this.setOpacity(), this.setSrc(), this.setTransform()
                    },
                    optionsChange: function (e) {
                        "src" === e.field && this.setSrc(), W.fn.optionsChange.call(this, e)
                    },
                    geometryChange: function () {
                        this.refresh()
                    },
                    refreshOpacity: function (e) {
                        this.opacity = e, this.setOpacity()
                    },
                    setOpacity: function () {
                        var e = [];
                        this.mapOpacityTo(e, this.srcElement.options.opacity), this.allAttr(e)
                    },
                    setSrc: function () {
                        this.attr("src", this.srcElement.src())
                    },
                    mapTransform: function () {
                        var e, t, n, i, o, r, s, a, l = this.srcElement,
                            c = l.rawBBox(),
                            h = c.center(),
                            u = I / 2,
                            d = I,
                            p = c.width() / d,
                            m = c.height() / d,
                            v = 0,
                            _ = this.transform;
                        return _ ? (n = x(_), i = g(n.a * n.a + n.b * n.b), o = g(n.c * n.c + n.d * n.d), p *= i, m *= o, r = A(f(n.b, n.d)), s = A(f(-n.c, n.a)), v = (r + s) / 2, 0 !== v ? (a = l.bbox().center(), e = (a.x - u) / d, t = (a.y - u) / d) : (e = (h.x * i + n.e - u) / d, t = (h.y * o + n.f - u) / d)) : (e = (h.x - u) / d, t = (h.y - u) / d), p = D(p, L), m = D(m, L), e = D(e, L), t = D(t, L), v = D(v, L), [
                            ["size", p + "," + m],
                            ["position", e + "," + t],
                            ["angle", v]
                        ]
                    }
                }),
                rt = $.extend({
                    createFillNode: function (e, t, n) {
                        return new ot(e, t, n)
                    },
                    createDataNode: function (e) {
                        return new it(e)
                    },
                    optionsChange: function (e) {
                        ("src" === e.field || "transform" === e.field) && this.fill.optionsChange(e), $.fn.optionsChange.call(this, e)
                    },
                    geometryChange: function () {
                        this.fill.geometryChange(), $.fn.geometryChange.call(this)
                    },
                    refreshTransform: function (e) {
                        $.fn.refreshTransform.call(this, e), this.fill.refresh(this.srcElement.currentTransform(e))
                    }
                }),
                st = {
                    Group: H,
                    Text: nt,
                    Path: $,
                    MultiPath: Q,
                    Circle: K,
                    Arc: J,
                    Image: rt
                };
            m.support.vml = function () {
                var e = m.support.browser;
                return e.msie && 9 > e.version
            }(), h = "inherit", m.support.browser.msie && 8 > m.support.browser.version && (h = "rect(auto auto auto auto)"), m.support.vml && y.SurfaceFactory.current.register("vml", R, 30), v(y, {
                vml: {
                    ArcDataNode: Z,
                    ArcNode: J,
                    CircleTransformNode: X,
                    CircleNode: K,
                    FillNode: j,
                    GroupNode: H,
                    ImageNode: rt,
                    ImageFillNode: ot,
                    ImagePathDataNode: it,
                    MultiPathDataNode: Y,
                    MultiPathNode: Q,
                    Node: F,
                    PathDataNode: q,
                    PathNode: $,
                    RootNode: O,
                    StrokeNode: U,
                    Surface: R,
                    TextNode: nt,
                    TextPathNode: tt,
                    TextPathDataNode: et,
                    TransformNode: W
                }
            })
        }(window.kendo.jQuery),
        function (e, t, n) {
            "use strict";

            function i(n, i) {
                function r(t) {
                    var n = new st.Group,
                        i = t.getBoundingClientRect();
                    return I(n, [1, 0, 0, 1, -i.left, -i.top]), dt._clipbox = !1, dt._matrix = at.Matrix.unit(), dt._stackingContext = {
                        element: t,
                        group: n
                    }, e(t).addClass("k-pdf-export"), et(t, n), e(t).removeClass("k-pdf-export"), n
                }

                function s(t) {
                    return null != t ? ("string" == typeof t && (t = kendo.template(t.replace(/^\s+|\s+$/g, ""))), "function" == typeof t ? function (n) {
                        var i = t(n);
                        return i ? e(i)[0] : void 0
                    } : function () {
                        return e(t).clone()[0]
                    }) : void 0
                }

                function a(n, i, o, r, a, l, c) {
                    function h() {
                        function e() {
                            setTimeout(function () {
                                n({
                                    pages: x,
                                    container: C
                                })
                            }, 10)
                        }

                        var t, i;
                        ("-" != o || a) && u(k), t = g(), k.parentNode.insertBefore(t, k), t.appendChild(k), _ ? (i = x.length, x.forEach(function (t, n) {
                            var o = _({
                                element: t,
                                pageNum: n + 1,
                                totalPages: x.length
                            });
                            o && (t.appendChild(o), d(o, function () {
                                0 === --i && e()
                            }))
                        })) : e()
                    }

                    function u(n) {
                        var i, r, s, l, c = w(n),
                            h = t(b(c, "padding-bottom")),
                            d = t(b(c, "border-bottom-width")),
                            f = S;
                        for (S += h + d, i = !0, r = n.firstChild; r; r = r.nextSibling)
                            if (1 == r.nodeType) {
                                if (i = !1, s = e(r), s.is(o)) {
                                    p(r);
                                    continue
                                }
                                if (!a) {
                                    u(r);
                                    continue
                                }
                                if (!/^(?:static|relative)$/.test(b(w(r), "position"))) continue;
                                l = m(r), 1 == l ? p(r) : l && (s.data("kendoChart") || /^(?:img|tr|iframe|svg|object|canvas|input|textarea|select|video|h[1-6])/i.test(r.tagName)) ? p(r) : u(r)
                            } else 3 == r.nodeType && a && (v(r, i), i = !1);
                        S = f
                    }

                    function f(e) {
                        var t = e.parentNode,
                            n = t.firstChild;
                        if (e === n) return !0;
                        if (e === t.children[0]) {
                            if (7 == n.nodeType || 8 == n.nodeType) return !0;
                            if (3 == n.nodeType) return !/\S/.test(n.data)
                        }
                        return !1
                    }

                    function p(e) {
                        var t, n;
                        return 1 == e.nodeType && e !== k && f(e) ? p(e.parentNode) : (t = g(), n = y.createRange(), n.setStartBefore(k), n.setEndBefore(e), t.appendChild(n.extractContents()), void k.parentNode.insertBefore(t, k))
                    }

                    function g() {
                        var t = y.createElement("KENDO-PDF-PAGE");
                        return e(t).css({
                            display: "block",
                            boxSizing: "content-box",
                            width: r || "auto",
                            padding: l.top + "px " + l.right + "px " + l.bottom + "px " + l.left + "px",
                            position: "relative",
                            height: a || "auto",
                            overflow: a || r ? "hidden" : "visible",
                            clear: "both"
                        }), c && c.pageClassName && (t.className = c.pageClassName), x.push(t), t
                    }

                    function m(e) {
                        var t, n, i = e.getBoundingClientRect();
                        return 0 === i.width || 0 === i.height ? 0 : (t = k.getBoundingClientRect().top, n = a - S, i.height > n ? 3 : i.top - t > n ? 1 : i.bottom - t > n ? 2 : 0)
                    }

                    function v(e, t) {
                        var n, i, o, r, s;
                        /\S/.test(e.data) && (n = e.data.length, i = y.createRange(), i.selectNodeContents(e), o = m(i), o && (r = e, 1 == o ? p(t ? e.parentNode : e) : (!function a(t, n, o) {
                            return i.setEnd(e, n), t == n || n == o ? n : m(i) ? a(t, t + n >> 1, n) : a(n, n + o >> 1, o)
                        }(0, n >> 1, n), !/\S/.test("" + i) && t ? p(e.parentNode) : (r = e.splitText(i.endOffset), s = g(), i.setStartBefore(k), s.appendChild(i.extractContents()), k.parentNode.insertBefore(s, k))), v(r)))
                    }

                    var _ = s(c.template),
                        y = i.ownerDocument,
                        x = [],
                        k = e(i).clone(!0, !0)[0],
                        C = y.createElement("KENDO-PDF-DOCUMENT"),
                        S = 0;
                    e(C).css({
                        display: "block",
                        position: "absolute",
                        boxSizing: "content-box",
                        left: "-10000px",
                        top: "-10000px"
                    }), r && (e(C).css({
                        width: r,
                        paddingLeft: l.left,
                        paddingRight: l.right
                    }), e(k).css({
                        overflow: "hidden"
                    })), C.appendChild(k), i.parentNode.insertBefore(C, i), c.beforePageBreak ? setTimeout(function () {
                        c.beforePageBreak(C, h)
                    }, 15) : setTimeout(h, 15)
                }

                i || (i = {});
                var l = e.Deferred();
                if (n = e(n)[0], !n) return l.reject("No element to export");
                if ("function" != typeof window.getComputedStyle) throw Error("window.getComputedStyle is missing.  You are using an unsupported browser, or running in IE8 compatibility mode.  Drawing HTML is supported in Chrome, Firefox, Safari and IE9+.");
                return kendo.pdf && kendo.pdf.defineFont(o(n.ownerDocument)), d(n, function () {
                    var e, t = i && i.forcePageBreak,
                        o = i && i.paperSize && "auto" != i.paperSize,
                        s = o && kendo.pdf.getPaperOptions(function (e, t) {
                                return e in i ? i[e] : t
                            }),
                        c = o && s.paperSize[0],
                        h = o && s.paperSize[1],
                        u = i.margin && s.margin;
                    t || h ? (u || (u = {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    }), e = new st.Group({
                        pdf: {
                            multiPage: !0,
                            paperSize: o ? s.paperSize : "auto"
                        }
                    }), a(function (t) {
                        if (i.progress) {
                            var n = !1,
                                o = 0;
                            !function s() {
                                t.pages.length > o ? (e.append(r(t.pages[o])), i.progress({
                                    pageNum: ++o,
                                    totalPages: t.pages.length,
                                    cancel: function () {
                                        n = !0
                                    }
                                }), n ? t.container.parentNode.removeChild(t.container) : setTimeout(s)) : (t.container.parentNode.removeChild(t.container), l.resolve(e))
                            }()
                        } else t.pages.forEach(function (t) {
                            e.append(r(t))
                        }), t.container.parentNode.removeChild(t.container), l.resolve(e)
                    }, n, t, c ? c - u.left - u.right : null, h ? h - u.top - u.bottom : null, u, i)) : l.resolve(r(n))
                }), l.promise()
            }

            function o(e) {
                function t(e) {
                    if (e) {
                        var t = null;
                        try {
                            t = e.cssRules
                        } catch (n) {
                        }
                        t && i(e, t)
                    }
                }

                function n(e) {
                    var t, n = b(e.style, "src");
                    return n ? ot(n).reduce(function (e, t) {
                        var n = rt(t);
                        return n && e.push(n), e
                    }, []) : (t = rt(e.cssText), t ? [t] : [])
                }

                function i(e, i) {
                    var r, s, a, l, c, h, u;
                    for (r = 0; i.length > r; ++r) switch (s = i[r], s.type) {
                        case 3:
                            t(s.styleSheet);
                            break;
                        case 5:
                            a = s.style, l = ot(b(a, "font-family")), c = /^(400|bold)$/i.test(b(a, "font-weight")), h = "italic" == b(a, "font-style"), u = n(s), u.length > 0 && o(e, l, c, h, u[0])
                    }
                }

                function o(e, t, n, i, o) {
                    /^data:/i.test(o) || /^[^\/:]+:\/\//.test(o) || /^\//.test(o) || (o = (e.href + "").replace(/[^\/]*$/, "") + o), t.forEach(function (e) {
                        e = e.replace(/^(['"]?)(.*?)\1$/, "$2"), n && (e += "|bold"), i && (e += "|italic"), r[e] = o
                    })
                }

                var r, s;
                for (null == e && (e = document), r = {}, s = 0; e.styleSheets.length > s; ++s) t(e.styleSheets[s]);
                return r
            }

            function r(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }

            function s(e) {
                return e = "_counter_" + e, dt[e]
            }

            function a(e) {
                var t = [],
                    n = dt;
                for (e = "_counter_" + e; n;) r(n, e) && t.push(n[e]), n = Object.getPrototypeOf(n);
                return t.reverse()
            }

            function l(e, t) {
                var n = dt;
                for (e = "_counter_" + e; n && !r(n, e);) n = Object.getPrototypeOf(n);
                n || (n = dt._root), n[e] = (n[e] || 0) + (null == t ? 1 : t)
            }

            function c(e, t) {
                e = "_counter_" + e, dt[e] = null == t ? 0 : t
            }

            function h(e, n, i) {
                var o, r, s;
                for (o = 0; e.length > o;) r = e[o++], s = t(e[o]), isNaN(s) ? n(r, i) : (n(r, s), ++o)
            }

            function u(e, t) {
                var n = kendo.parseColor(e);
                return n && (n = n.toRGB(), t ? n = n.toCssRgba() : 0 === n.a && (n = null)), n
            }

            function d(e, t) {
                function n(e) {
                    ut[e] || (ut[e] = !0, r.push(e))
                }

                function i() {
                    --o <= 0 && t()
                }

                var o, r = [];
                !function s(e) {
                    /^img$/i.test(e.tagName) && n(e.src), it(b(w(e), "background-image")).forEach(function (e) {
                        "url" == e.type && n(e.url)
                    }), lt.call(e.children).forEach(s)
                }(e), o = r.length, 0 === o && i(), r.forEach(function (e) {
                    var t = ut[e] = new Image;
                    /^data:/i.test(e) || (t.crossOrigin = "Anonymous"), t.src = e, t.complete ? i() : (t.onload = i, t.onerror = function () {
                        ut[e] = null, i()
                    })
                })
            }

            function f(e) {
                for (var t = {
                    1: "i",
                    10: "x",
                    100: "c",
                    2: "ii",
                    20: "xx",
                    200: "cc",
                    3: "iii",
                    30: "xxx",
                    300: "ccc",
                    4: "iv",
                    40: "xl",
                    400: "cd",
                    5: "v",
                    50: "l",
                    500: "d",
                    6: "vi",
                    60: "lx",
                    600: "dc",
                    7: "vii",
                    70: "lxx",
                    700: "dcc",
                    8: "viii",
                    80: "lxxx",
                    800: "dccc",
                    9: "ix",
                    90: "xc",
                    900: "cm",
                    1e3: "m"
                }, n = [1e3, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], i = ""; e > 0;) n[0] > e ? n.shift() : (i += t[n[0]], e -= n[0]);
                return i
            }

            function p(e) {
                var t, i = "";
                do t = e % 26, i = String.fromCharCode(97 + t) + i, e = n.floor(e / 26); while (e > 0);
                return i
            }

            function g(e, t, n) {
                var i, o;
                dt = Object.create(dt), dt[e.tagName.toLowerCase()] = {
                    element: e,
                    style: t
                }, i = b(t, "text-decoration"), i && "none" != i && (o = b(t, "color"), i.split(/\s+/g).forEach(function (e) {
                    dt[e] || (dt[e] = o)
                })), y(t) && (dt._stackingContext = {
                    element: e,
                    group: n
                })
            }

            function m() {
                dt = Object.getPrototypeOf(dt)
            }

            function v(e) {
                if (null != dt._clipbox) {
                    var t = e.bbox(dt._matrix);
                    dt._clipbox = dt._clipbox ? at.Rect.intersect(dt._clipbox, t) : t
                }
            }

            function _() {
                var e = dt._clipbox;
                return null == e ? !0 : e ? 0 === e.width() || 0 === e.height() : void 0
            }

            function y(e) {
                function t(t) {
                    return b(e, t)
                }

                return "none" != t("transform") || "static" != t("position") && "auto" != t("z-index") || t("opacity") < 1 ? !0 : void 0
            }

            function w(e, t) {
                return window.getComputedStyle(e, t || null)
            }

            function b(e, t) {
                return e.getPropertyValue(t) || ct.webkit && e.getPropertyValue("-webkit-" + t) || ct.mozilla && e.getPropertyValue("-moz-" + t) || ct.opera && e.getPropertyValue("-o-" + t) || ct.msie && e.getPropertyValue("-ms-" + t)
            }

            function x(e, t, n, i) {
                e.setProperty(t, n, i), ct.webkit ? e.setProperty("-webkit-" + t, n, i) : ct.mozilla ? e.setProperty("-moz-" + t, n, i) : ct.opera ? e.setProperty("-o-" + t, n, i) : ct.msie && (e.setProperty("-ms-" + t, n, i), t = "ms" + t.replace(/(^|-)([a-z])/g, function (e, t, n) {
                    return t + n.toUpperCase()
                }), e[t] = n)
            }

            function k(e) {
                if (ct.msie) {
                    var t = e.getClientRects();
                    if (2 == t.length && 0 === t[1].width) return t[0]
                }
                return e.getBoundingClientRect()
            }

            function C(e, n) {
                return n = "border-" + n, {
                    width: t(b(e, n + "-width")),
                    style: b(e, n + "-style"),
                    color: u(b(e, n + "-color"), !0)
                }
            }

            function S(e, t) {
                var n = e.style.cssText,
                    i = t();
                return e.style.cssText = n, i
            }

            function T(e, n) {
                var i = b(e, "border-" + n + "-radius").split(/\s+/g).map(t);
                return 1 == i.length && i.push(i[0]), L({
                    x: i[0],
                    y: i[1]
                })
            }

            function A(e) {
                var t = e.getBoundingClientRect();
                return t = D(t, "border-*-width", e), t = D(t, "padding-*", e)
            }

            function D(e, n, i) {
                var o, r, s, a, l;
                return "string" == typeof n ? (o = w(i), r = t(b(o, n.replace("*", "top"))), s = t(b(o, n.replace("*", "right"))), a = t(b(o, n.replace("*", "bottom"))), l = t(b(o, n.replace("*", "left")))) : "number" == typeof n && (r = s = a = l = n), {
                    top: e.top + r,
                    right: e.right - s,
                    bottom: e.bottom - a,
                    left: e.left + l,
                    width: e.right - e.left - s - l,
                    height: e.bottom - e.top - a - r
                }
            }

            function P(e) {
                var n, i, o = b(e, "transform");
                return "none" == o ? null : (n = /^\s*matrix\(\s*(.*?)\s*\)\s*$/.exec(o), n ? (i = b(e, "transform-origin"), n = n[1].split(/\s*,\s*/g).map(t), i = i.split(/\s+/g).map(t), {
                    matrix: n,
                    origin: i
                }) : void 0)
            }

            function M(e) {
                return 180 * e / n.PI % 360
            }

            function E(e) {
                var i = t(e);
                return /grad$/.test(e) ? n.PI * i / 200 : /rad$/.test(e) ? i : /turn$/.test(e) ? n.PI * i * 2 : /deg$/.test(e) ? n.PI * i / 180 : void 0
            }

            function I(e, t) {
                return t = new at.Matrix(t[0], t[1], t[2], t[3], t[4], t[5]), e.transform(t), t
            }

            function B(e, t) {
                e.clip(t)
            }

            function z(e, t, n, i) {
                for (var o = new at.Arc([t, n], i).curvePoints(), r = 1; o.length > r;) e.curveTo(o[r++], o[r++], o[r++])
            }

            function L(e) {
                return (0 >= e.x || 0 >= e.y) && (e.x = e.y = 0), e
            }

            function R(e, t, i, o, r) {
                var s = n.max(0, t.x),
                    a = n.max(0, t.y),
                    l = n.max(0, i.x),
                    c = n.max(0, i.y),
                    h = n.max(0, o.x),
                    u = n.max(0, o.y),
                    d = n.max(0, r.x),
                    f = n.max(0, r.y),
                    p = n.min(e.width / (s + l), e.height / (c + u), e.width / (h + d), e.height / (f + a));
                return 1 > p && (s *= p, a *= p, l *= p, c *= p, h *= p, u *= p, d *= p, f *= p), {
                    tl: {
                        x: s,
                        y: a
                    },
                    tr: {
                        x: l,
                        y: c
                    },
                    br: {
                        x: h,
                        y: u
                    },
                    bl: {
                        x: d,
                        y: f
                    }
                }
            }

            function F(e, n, i) {
                var o, r, s, a, l, c, h, u, d = w(e),
                    f = T(d, "top-left"),
                    p = T(d, "top-right"),
                    g = T(d, "bottom-left"),
                    m = T(d, "bottom-right");
                return ("padding" == i || "content" == i) && (o = C(d, "top"), r = C(d, "right"), s = C(d, "bottom"), a = C(d, "left"), f.x -= a.width, f.y -= o.width, p.x -= r.width, p.y -= o.width, m.x -= r.width, m.y -= s.width, g.x -= a.width, g.y -= s.width, "content" == i && (l = t(b(d, "padding-top")), c = t(b(d, "padding-right")), h = t(b(d, "padding-bottom")), u = t(b(d, "padding-left")), f.x -= u, f.y -= l, p.x -= c, p.y -= l, m.x -= c, m.y -= h, g.x -= u, g.y -= h)), "number" == typeof i && (f.x -= i, f.y -= i, p.x -= i, p.y -= i, m.x -= i, m.y -= i, g.x -= i, g.y -= i), O(n, f, p, m, g)
            }

            function O(e, t, n, i, o) {
                var r = R(e, t, n, i, o),
                    s = r.tl,
                    a = r.tr,
                    l = r.br,
                    c = r.bl,
                    h = new st.Path({
                        fill: null,
                        stroke: null
                    });
                return h.moveTo(e.left, e.top + s.y), s.x && z(h, e.left + s.x, e.top + s.y, {
                    startAngle: -180,
                    endAngle: -90,
                    radiusX: s.x,
                    radiusY: s.y
                }), h.lineTo(e.right - a.x, e.top), a.x && z(h, e.right - a.x, e.top + a.y, {
                    startAngle: -90,
                    endAngle: 0,
                    radiusX: a.x,
                    radiusY: a.y
                }), h.lineTo(e.right, e.bottom - l.y), l.x && z(h, e.right - l.x, e.bottom - l.y, {
                    startAngle: 0,
                    endAngle: 90,
                    radiusX: l.x,
                    radiusY: l.y
                }), h.lineTo(e.left + c.x, e.bottom), c.x && z(h, e.left + c.x, e.bottom - c.y, {
                    startAngle: 90,
                    endAngle: 180,
                    radiusX: c.x,
                    radiusY: c.y
                }), h.close()
            }

            function N(e, n) {
                var i = t(e) + "";
                switch (n) {
                    case "decimal-leading-zero":
                        return 2 > i.length && (i = "0" + i), i;
                    case "lower-roman":
                        return f(e);
                    case "upper-roman":
                        return f(e).toUpperCase();
                    case "lower-latin":
                    case "lower-alpha":
                        return p(e - 1);
                    case "upper-latin":
                    case "upper-alpha":
                        return p(e - 1).toUpperCase();
                    default:
                        return i
                }
            }

            function V(e, t) {
                function n(e, t, n) {
                    return n ? (n = n.replace(/^\s*(["'])(.*)\1\s*$/, "$2"), a(e).map(function (e) {
                        return N(e, t)
                    }).join(n)) : N(s(e) || 0, t)
                }

                var i, o = ot(t, /^\s+/),
                    r = [];
                return o.forEach(function (t) {
                    var o;
                    (i = /^\s*(["'])(.*)\1\s*$/.exec(t)) ? r.push(i[2].replace(/\\([0-9a-f]{4})/gi, function (e, t) {
                        return String.fromCharCode(parseInt(t, 16))
                    })) : (i = /^\s*counter\((.*?)\)\s*$/.exec(t)) ? (o = ot(i[1]), r.push(n(o[0], o[1]))) : (i = /^\s*counters\((.*?)\)\s*$/.exec(t)) ? (o = ot(i[1]), r.push(n(o[0], o[2], o[1]))) : r.push((i = /^\s*attr\((.*?)\)\s*$/.exec(t)) ? e.getAttribute(i[1]) || "" : t)
                }), r.join("")
            }

            function H(e) {
                var t, n;
                if (e.cssText) return e.cssText;
                for (t = [], n = 0; e.length > n; ++n) t.push(e[n] + ": " + b(e, e[n]));
                return t.join(";\n")
            }

            function U(e, n) {
                function i(n, i) {
                    var r, s = w(e, n);
                    s.content && "normal" != s.content && "none" != s.content && "0px" != s.width && (r = e.ownerDocument.createElement(ht), r.style.cssText = H(s), r.textContent = V(e, s.content), e.insertBefore(r, i), ":before" != n || /absolute|fixed/.test(b(r.style, "position")) || (r.style.marginLeft = t(b(r.style, "margin-left")) - r.offsetWidth + "px"), o.push(r))
                }

                if (e.tagName == ht) return void j(e, n);
                var o = [];
                i(":before", e.firstChild), i(":after", null), j(e, n), o.forEach(function (t) {
                    e.removeChild(t)
                })
            }

            function j(i, o) {
                function r(e) {
                    var t, n, o, r, s, a;
                    if (/^td$/i.test(i.tagName) && (t = dt.table, t && "collapse" == b(t.style, "border-collapse"))) {
                        if (n = C(t.style, "left").width, o = C(t.style, "top").width, 0 === n && 0 === o) return e;
                        if (r = t.element.getBoundingClientRect(), s = t.element.rows[0].cells[0], a = s.getBoundingClientRect(), a.top == r.top || a.left == r.left) return lt.call(e).map(function (e) {
                            return {
                                left: e.left + n,
                                top: e.top + o,
                                right: e.right + n,
                                bottom: e.bottom + o,
                                height: e.height,
                                width: e.width
                            }
                        })
                    }
                    return e
                }

                function s(e, t, i, r, s, a, l, c) {
                    function h(t, o, r) {
                        var s = n.PI / 2 * t / (t + i),
                            a = {
                                x: o.x - t,
                                y: o.y - i
                            },
                            l = new st.Path({
                                fill: {
                                    color: e
                                },
                                stroke: null
                            }).moveTo(0, 0);
                        I(l, r), z(l, 0, o.y, {
                            startAngle: -90,
                            endAngle: -M(s),
                            radiusX: o.x,
                            radiusY: o.y
                        }), a.x > 0 && a.y > 0 ? (l.lineTo(a.x * n.cos(s), o.y - a.y * n.sin(s)), z(l, 0, o.y, {
                            startAngle: -M(s),
                            endAngle: -90,
                            radiusX: a.x,
                            radiusY: a.y,
                            anticlockwise: !0
                        })) : a.x > 0 ? l.lineTo(a.x, i).lineTo(0, i) : l.lineTo(a.x, i).lineTo(a.x, 0), d.append(l.close())
                    }

                    if (!(0 >= i)) {
                        var u, d = new st.Group;
                        I(d, c), o.append(d), L(a), L(l), u = new st.Path({
                            fill: {
                                color: e
                            },
                            stroke: null
                        }), d.append(u), u.moveTo(a.x ? n.max(a.x, r) : 0, 0).lineTo(t - (l.x ? n.max(l.x, s) : 0), 0).lineTo(t - n.max(l.x, s), i).lineTo(n.max(a.x, r), i).close(), a.x && h(r, a, [-1, 0, 0, 1, a.x, 0]), l.x && h(s, l, [1, 0, 0, 1, t - l.x, 0])
                    }
                }

                function a(t) {
                    var n, r, s = new st.Group;
                    for (B(s, O(t, U, j, $, q)), o.append(s), "A" == i.tagName && i.href && !/^#?$/.test(e(i).attr("href")) && (s._pdfLink = {
                        url: i.href,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left
                    }), X && (n = new st.Path({
                        fill: {
                            color: X.toCssRgba()
                        },
                        stroke: null
                    }), n.moveTo(t.left, t.top).lineTo(t.right, t.top).lineTo(t.right, t.bottom).lineTo(t.left, t.bottom).close(), s.append(n)), r = d.length; --r >= 0;) l(s, t, d[r], g[r % g.length], m[r % m.length], _[r % _.length], y[r % y.length])
                }

                function l(e, n, o, r, s, a, l) {
                    function c(e, n, o, c, h) {
                        function u() {
                            for (; m.origin.x > n.left;) m.origin.x -= o
                        }

                        function d() {
                            for (; m.origin.y > n.top;) m.origin.y -= c
                        }

                        function f() {
                            for (; n.right > m.origin.x;) h(e, m.clone()), m.origin.x += o
                        }

                        var p, g, m, v, _ = o / c,
                            y = n;
                        if ("content-box" == a ? (y = D(y, "border-*-width", i), y = D(y, "padding-*", i)) : "padding-box" == a && (y = D(y, "border-*-width", i)), /^\s*auto(\s+auto)?\s*$/.test(l) || (p = l.split(/\s+/g), o = /%$/.test(p[0]) ? y.width * t(p[0]) / 100 : t(p[0]), c = 1 == p.length || "auto" == p[1] ? o / _ : /%$/.test(p[1]) ? y.height * t(p[1]) / 100 : t(p[1])), g = (s + "").split(/\s+/), 1 == g.length && (g[1] = "50%"), g[0] = /%$/.test(g[0]) ? t(g[0]) / 100 * (y.width - o) : t(g[0]), g[1] = /%$/.test(g[1]) ? t(g[1]) / 100 * (y.height - c) : t(g[1]), m = new at.Rect([y.left + g[0], y.top + g[1]], [o, c]), "no-repeat" == r) h(e, m);
                        else if ("repeat-x" == r) u(), f();
                        else if ("repeat-y" == r)
                            for (d(); n.bottom > m.origin.y;) h(e, m.clone()), m.origin.y += c;
                        else if ("repeat" == r)
                            for (u(), d(), v = m.origin.clone(); n.bottom > m.origin.y;) m.origin.x = v.x, f(), m.origin.y += c
                    }

                    if (o && "none" != o)
                        if ("url" == o.type) {
                            if (/^url\(\"data:image\/svg/i.test(o.url)) return;
                            var h = ut[o.url];
                            h && h.width > 0 && h.height > 0 && c(e, n, h.width, h.height, function (e, t) {
                                e.append(new st.Image(o.url, t))
                            })
                        } else {
                            if ("linear" != o.type) return;
                            c(e, n, n.width, n.height, W(o))
                        }
                }

                function c() {
                    function e(e) {
                        S(i, function () {
                            i.style.position = "relative";
                            var t = i.ownerDocument.createElement(ht);
                            t.style.position = "absolute", t.style.boxSizing = "border-box", "outside" == r ? (t.style.width = "6em", t.style.left = "-6.8em", t.style.textAlign = "right") : t.style.left = "0px", e(t), i.insertBefore(t, i.firstChild), et(t, o), i.removeChild(t)
                        })
                    }

                    function t(e) {
                        var t, n = i.parentNode.children;
                        for (t = 0; n.length > t; ++t)
                            if (n[t] === i) return e(t, n.length)
                    }

                    var n, r, s = b(P, "list-style-type");
                    if ("none" != s) switch (n = b(P, "list-style-image"), r = b(P, "list-style-position"), s) {
                        case "circle":
                        case "disc":
                        case "square":
                            e(function (e) {
                                e.style.fontSize = "60%", e.style.lineHeight = "200%", e.style.paddingRight = "0.5em", e.style.fontFamily = "DejaVu Serif", e.innerHTML = {
                                    disc: "�?",
                                    circle: "◯",
                                    square: "� "
                                }[s]
                            });
                            break;
                        case "decimal":
                        case "decimal-leading-zero":
                            e(function (e) {
                                t(function (t) {
                                    ++t, "decimal-leading-zero" == s && 2 > (t + "").length && (t = "0" + t), e.innerHTML = t + "."
                                })
                            });
                            break;
                        case "lower-roman":
                        case "upper-roman":
                            e(function (e) {
                                t(function (t) {
                                    t = f(t + 1), "upper-roman" == s && (t = t.toUpperCase()), e.innerHTML = t + "."
                                })
                            });
                            break;
                        case "lower-latin":
                        case "lower-alpha":
                        case "upper-latin":
                        case "upper-alpha":
                            e(function (e) {
                                t(function (t) {
                                    t = p(t), /^upper/i.test(s) && (t = t.toUpperCase()), e.innerHTML = t + "."
                                })
                            })
                    }
                }

                function h(e, t, n) {
                    function r(e) {
                        return {
                            x: e.y,
                            y: e.x
                        }
                    }

                    var l, c, h, u, d, f, p, g;
                    if (0 !== e.width && 0 !== e.height && (a(e), l = H.width > 0 && (t && "ltr" == Q || n && "rtl" == Q), c = N.width > 0 && (n && "ltr" == Q || t && "rtl" == Q), 0 !== E.width || 0 !== H.width || 0 !== N.width || 0 !== V.width)) {
                        if (E.color == N.color && E.color == V.color && E.color == H.color && E.width == N.width && E.width == V.width && E.width == H.width && l && c) return e = D(e, E.width / 2), h = F(i, e, E.width / 2), h.options.stroke = {
                            color: E.color,
                            width: E.width
                        }, void o.append(h);
                        if (0 === U.x && 0 === j.x && 0 === $.x && 0 === q.x && 2 > E.width && 2 > H.width && 2 > N.width && 2 > V.width) return E.width > 0 && o.append(new st.Path({
                            stroke: {
                                width: E.width,
                                color: E.color
                            }
                        }).moveTo(e.left, e.top + E.width / 2).lineTo(e.right, e.top + E.width / 2)), V.width > 0 && o.append(new st.Path({
                            stroke: {
                                width: V.width,
                                color: V.color
                            }
                        }).moveTo(e.left, e.bottom - V.width / 2).lineTo(e.right, e.bottom - V.width / 2)), l && o.append(new st.Path({
                            stroke: {
                                width: H.width,
                                color: H.color
                            }
                        }).moveTo(e.left + H.width / 2, e.top).lineTo(e.left + H.width / 2, e.bottom)), void(c && o.append(new st.Path({
                            stroke: {
                                width: N.width,
                                color: N.color
                            }
                        }).moveTo(e.right - N.width / 2, e.top).lineTo(e.right - N.width / 2, e.bottom)));
                        u = R(e, U, j, $, q), d = u.tl, f = u.tr, p = u.br, g = u.bl, s(E.color, e.width, E.width, H.width, N.width, d, f, [1, 0, 0, 1, e.left, e.top]), s(V.color, e.width, V.width, N.width, H.width, p, g, [-1, 0, 0, -1, e.right, e.bottom]), s(H.color, e.height, H.width, V.width, E.width, r(g), r(d), [0, -1, 1, 0, e.left, e.bottom]), s(N.color, e.height, N.width, E.width, V.width, r(f), r(p), [0, 1, -1, 0, e.right, e.top])
                    }
                }

                var d, g, m, _, y, x, k, A, P = w(i),
                    E = C(P, "top"),
                    N = C(P, "right"),
                    V = C(P, "bottom"),
                    H = C(P, "left"),
                    U = T(P, "top-left"),
                    j = T(P, "top-right"),
                    q = T(P, "bottom-left"),
                    $ = T(P, "bottom-right"),
                    Q = b(P, "direction"),
                    X = b(P, "background-color");
                for (X = u(X), d = it(b(P, "background-image")), g = ot(b(P, "background-repeat")), m = ot(b(P, "background-position")), _ = ot(b(P, "background-origin")), y = ot(b(P, "background-size")), ct.msie && 10 > ct.version && (m = ot(i.currentStyle.backgroundPosition)), x = D(i.getBoundingClientRect(), "border-*-width", i), function () {
                    var e, n, i, r, s, a, l, c = b(P, "clip"),
                        h = /^\s*rect\((.*)\)\s*$/.exec(c);
                    h && (e = h[1].split(/[ ,]+/g), n = "auto" == e[0] ? x.top : t(e[0]) + x.top, i = "auto" == e[1] ? x.right : t(e[1]) + x.left, r = "auto" == e[2] ? x.bottom : t(e[2]) + x.top, s = "auto" == e[3] ? x.left : t(e[3]) + x.left, a = new st.Group, l = (new st.Path).moveTo(s, n).lineTo(i, n).lineTo(i, r).lineTo(s, r).close(), B(a, l), o.append(a), o = a, v(l))
                }(), k = i.getClientRects(), 1 == k.length && (k = [i.getBoundingClientRect()]), k = r(k), A = 0; k.length > A; ++A) h(k[A], 0 === A, A == k.length - 1);
                return k.length > 0 && "list-item" == b(P, "display") && c(k[0]),
                    function () {
                        function e() {
                            var e = F(i, x, "padding"),
                                t = new st.Group;
                            B(t, e), o.append(t), o = t, v(e)
                        }

                        Y(i) ? e() : /^(hidden|auto|scroll)/.test(b(P, "overflow")) ? e() : /^(hidden|auto|scroll)/.test(b(P, "overflow-x")) ? e() : /^(hidden|auto|scroll)/.test(b(P, "overflow-y")) && e()
                    }(), G(i, o) || K(i, o), o
            }

            function W(e) {
                return function (i, o) {
                    {
                        var r, s, a, l, c, h, u, d, f, p, g, m, v, _ = o.width(),
                            y = o.height();
                        o.topLeft()
                    }
                    switch (e.type) {
                        case "linear":
                            switch (r = null != e.angle ? e.angle : n.PI, e.to) {
                                case "top":
                                    r = 0;
                                    break;
                                case "left":
                                    r = -n.PI / 2;
                                    break;
                                case "bottom":
                                    r = n.PI;
                                    break;
                                case "right":
                                    r = n.PI / 2;
                                    break;
                                case "top left":
                                case "left top":
                                    r = -n.atan2(y, _);
                                    break;
                                case "top right":
                                case "right top":
                                    r = n.atan2(y, _);
                                    break;
                                case "bottom left":
                                case "left bottom":
                                    r = n.PI + n.atan2(y, _);
                                    break;
                                case "bottom right":
                                case "right bottom":
                                    r = n.PI - n.atan2(y, _)
                            }
                            e.reverse && (r -= n.PI), r %= 2 * n.PI, 0 > r && (r += 2 * n.PI), s = n.abs(_ * n.sin(r)) + n.abs(y * n.cos(r)), a = n.atan(_ * n.tan(r) / y), l = n.sin(a), c = n.cos(a), h = n.abs(l) + n.abs(c), u = h / 2 * l, d = h / 2 * c, r > n.PI / 2 && 3 * n.PI / 2 >= r && (u = -u, d = -d), f = [], p = 0, g = e.stops.map(function (n, i) {
                                var o, r = n.percent;
                                return r ? r = t(r) / 100 : n.length ? r = t(n.length) / s : 0 === i ? r = 0 : i == e.stops.length - 1 && (r = 1), o = {
                                    color: n.color.toCssRgba(),
                                    offset: r
                                }, null != r ? (p = r, f.forEach(function (e, t) {
                                    var n = e.stop;
                                    n.offset = e.left + (p - e.left) * (t + 1) / (f.length + 1)
                                }), f = []) : f.push({
                                    left: p,
                                    stop: o
                                }), o
                            }), m = [.5 - u, .5 + d], v = [.5 + u, .5 - d], i.append(st.Path.fromRect(o).stroke(null).fill(new st.LinearGradient({
                                start: m,
                                end: v,
                                stops: g,
                                userSpace: !1
                            })));
                            break;
                        case "radial":
                            window.console && window.console.log && window.console.log("Radial gradients are not yet supported in HTML renderer")
                    }
                }
            }

            function G(t, n) {
                var i, o, r, s;
                return t.getAttribute(kendo.attr("role")) && (i = kendo.widgetInstance(e(t)), i && (i.exportDOMVisual || i.exportVisual)) ? (o = i.exportDOMVisual ? i.exportDOMVisual() : i.exportVisual()) ? (r = new st.Group, r.children.push(o), s = t.getBoundingClientRect(), r.transform(at.transform().translate(s.left, s.top)), n.append(r), !0) : !1 : void 0
            }

            function q(e, t, n) {
                var i = A(e),
                    o = new at.Rect([i.left, i.top], [i.width, i.height]),
                    r = new st.Image(t, o);
                B(r, F(e, i, "content")), n.append(r)
            }

            function $(e, n) {
                var i = w(e),
                    o = w(n),
                    r = t(b(i, "z-index")),
                    s = t(b(o, "z-index")),
                    a = b(i, "position"),
                    l = b(o, "position");
                return isNaN(r) && isNaN(s) ? /static|absolute/.test(a) && /static|absolute/.test(l) ? 0 : "static" == a ? -1 : "static" == l ? 1 : 0 : isNaN(r) ? 0 === s ? 0 : s > 0 ? -1 : 1 : isNaN(s) ? 0 === r ? 0 : r > 0 ? 1 : -1 : t(r) - t(s)
            }

            function Y(e) {
                return /^(?:textarea|select|input)$/i.test(e.tagName)
            }

            function Q(e) {
                return e.selectedOptions && e.selectedOptions.length > 0 ? e.selectedOptions[0] : e.options[e.selectedIndex]
            }

            function X(e, t) {
                var n, i, o = e.tagName.toLowerCase(),
                    r = e.parentNode,
                    s = e.ownerDocument,
                    a = s.createElement(ht);
                if (a.style.cssText = H(w(e)), a.style.display = "inline-block", "input" == o && (a.style.whiteSpace = "pre"), ("select" == o || "textarea" == o) && (a.style.overflow = "auto"), "select" == o)
                    if (e.multiple)
                        for (i = 0; e.options.length > i; ++i) n = s.createElement(ht), n.style.cssText = H(w(e.options[i])), n.style.display = "block", n.textContent = e.options[i].textContent, a.appendChild(n);
                    else n = Q(e), n && (a.textContent = n.textContent);
                else a.textContent = e.value;
                r.insertBefore(a, e), a.scrollLeft = e.scrollLeft, a.scrollTop = e.scrollTop, K(a, t), r.removeChild(a)
            }

            function K(e, t) {
                var n, i, o, r, s, a, l, c, h;
                switch (dt._stackingContext.element === e && (dt._stackingContext.group = t), e.tagName.toLowerCase()) {
                    case "img":
                        q(e, e.src, t);
                        break;
                    case "canvas":
                        try {
                            q(e, e.toDataURL("image/png"), t)
                        } catch (u) {
                        }
                        break;
                    case "textarea":
                    case "input":
                    case "select":
                        X(e, t);
                        break;
                    default:
                        for (n = [], i = [], o = [], r = [], s = e.firstChild; s; s = s.nextSibling) switch (s.nodeType) {
                            case 3:
                                /\S/.test(s.data) && Z(e, s, t);
                                break;
                            case 1:
                                a = w(s), l = b(a, "display"), c = b(a, "float"), h = b(a, "position"), "static" != h ? r.push(s) : "inline" != l ? "none" != c ? i.push(s) : n.push(s) : o.push(s)
                        }
                        n.sort($).forEach(function (e) {
                            et(e, t)
                        }), i.sort($).forEach(function (e) {
                            et(e, t)
                        }), o.sort($).forEach(function (e) {
                            et(e, t)
                        }), r.sort($).forEach(function (e) {
                            et(e, t)
                        })
                }
            }

            function Z(e, i, o) {
                function r() {
                    var e, t, o, r, a, l, d, f = h,
                        p = c.substr(h).search(/\S/);
                    if (h += p, 0 > p || h >= u) return !0;
                    if (m.setStart(i, h), m.setEnd(i, h + 1), e = m.getBoundingClientRect(), t = !1, y && (p = c.substr(h).search(/\s/), p >= 0 && (m.setEnd(i, h + p), o = m.getBoundingClientRect(), o.bottom == e.bottom && (e = o, t = !0, h += p))), !t) {
                        if (p = function g(t, n, o) {
                                m.setEnd(i, n);
                                var r = k(m);
                                return r.bottom != e.bottom && n > t ? g(t, t + n >> 1, n) : r.right != e.right ? (e = r, o > n ? g(n, n + o >> 1, o) : n) : n
                            }(h, n.min(u, h + C), u), p == h) return !0;
                        if (h = p, p = ("" + m).search(/\s+$/), 0 === p) return;
                        p > 0 && (m.setEnd(i, m.startOffset + p), e = m.getBoundingClientRect())
                    }
                    if (ct.msie && (e = m.getClientRects()[0]), r = "" + m, /^(?:pre|pre-wrap)$/i.test(x)) {
                        if (/\t/.test(r)) {
                            for (a = 0, p = f; m.startOffset > p; ++p) l = c.charCodeAt(p), 9 == l ? a += 8 - a % 8 : 10 == l || 13 == l ? a = 0 : a++;
                            for (;
                                (p = r.search("	")) >= 0;) d = "        ".substr(0, 8 - (a + p) % 8), r = r.substr(0, p) + d + r.substr(p + 1)
                        }
                    } else r = r.replace(/\s+/g, " ");
                    s(r, e)
                }

                function s(e, t) {
                    var n, i, r;
                    ct.msie && !isNaN(f) && (n = st.util.measureText(e, {
                        font: p
                    }), i = (t.top + t.bottom - n.height) / 2, t = {
                        top: i,
                        right: t.right,
                        bottom: i + n.height,
                        left: t.left,
                        height: n.height,
                        width: t.right - t.left
                    }), r = new nt(e, new at.Rect([t.left, t.top], [t.width, t.height]), {
                        font: p,
                        fill: {
                            color: g
                        }
                    }), o.append(r), a(t)
                }

                function a(e) {
                    function t(t, n) {
                        var i, r;
                        t && (i = d / 12, r = new st.Path({
                            stroke: {
                                width: i,
                                color: t
                            }
                        }), n -= i, r.moveTo(e.left, n).lineTo(e.right, n), o.append(r))
                    }

                    t(dt.underline, e.bottom), t(dt["line-through"], e.bottom - e.height / 2.7), t(dt.overline, e.top)
                }

                var l, c, h, u, d, f, p, g, m, v, y, x, C;
                if (!_() && (l = w(e), !(t(b(l, "text-indent")) < -500) && (c = i.data, h = 0, u = c.search(/\S\s*$/) + 1, u && (d = b(l, "font-size"), f = b(l, "line-height"), p = [b(l, "font-style"), b(l, "font-variant"), b(l, "font-weight"), d, b(l, "font-family")].join(" "), d = t(d), f = t(f), 0 !== d))))
                    for (g = b(l, "color"), m = e.ownerDocument.createRange(), v = b(l, "text-align"), y = "justify" == v, x = b(l, "white-space"), C = e.getBoundingClientRect().width / d * 5, 0 === C && (C = 500); !r(););
            }

            function J(e, n, i) {
                var o, r, s, a, l, c;
                for ("auto" != i ? (o = dt._stackingContext.group, i = t(i)) : (o = n, i = 0), r = o.children, s = 0; r.length > s && !(null != r[s]._dom_zIndex && r[s]._dom_zIndex > i); ++s);
                return a = new st.Group, o.insertAt(a, s), a._dom_zIndex = i, o !== n && dt._clipbox && (l = dt._matrix.invert(), c = dt._clipbox.transformCopy(l), B(a, st.Path.fromRect(c))), a
            }

            function et(e, n) {
                var i, o, r, s, a, u, d, f = w(e),
                    p = b(f, "counter-reset");
                p && h(ot(p, /^\s+/), c, 0), i = b(f, "counter-increment"), i && h(ot(i, /^\s+/), l, 1), /^(style|script|link|meta|iframe|svg|col|colgroup)$/i.test(e.tagName) || null != dt._clipbox && (o = t(b(f, "opacity")), r = b(f, "visibility"), s = b(f, "display"), 0 !== o && "hidden" != r && "none" != s && (a = P(f), d = b(f, "z-index"), (a || 1 > o) && "auto" == d && (d = 0), u = J(e, n, d), 1 > o && u.opacity(o * u.opacity()), g(e, f, u), a ? S(e, function () {
                    var t, n, i, o;
                    x(e.style, "transform", "none", "important"), x(e.style, "transition", "none", "important"), "static" == b(f, "position") && x(e.style, "position", "relative", "important"), t = e.getBoundingClientRect(), n = t.left + a.origin[0], i = t.top + a.origin[1], o = [1, 0, 0, 1, -n, -i], o = tt(o, a.matrix), o = tt(o, [1, 0, 0, 1, n, i]), o = I(u, o), dt._matrix = dt._matrix.multiplyCopy(o), U(e, u)
                }) : U(e, u), m()))
            }

            function tt(e, t) {
                var n = e[0],
                    i = e[1],
                    o = e[2],
                    r = e[3],
                    s = e[4],
                    a = e[5],
                    l = t[0],
                    c = t[1],
                    h = t[2],
                    u = t[3],
                    d = t[4],
                    f = t[5];
                return [n * l + i * h, n * c + i * u, o * l + r * h, o * c + r * u, s * l + a * h + d, s * c + a * u + f]
            }

            var nt, it, ot, rt, st = kendo.drawing,
                at = kendo.geometry,
                lt = Array.prototype.slice,
                ct = kendo.support.browser,
                ht = "KENDO-PSEUDO-ELEMENT",
                ut = {},
                dt = {};
            dt._root = dt, nt = st.Text.extend({
                nodeType: "Text",
                init: function (e, t, n) {
                    st.Text.fn.init.call(this, e, t.getOrigin(), n), this._pdfRect = t
                },
                rect: function () {
                    return this._pdfRect
                },
                rawBBox: function () {
                    return this._pdfRect
                }
            }), st.drawDOM = i, i.getFontFaces = o, it = function () {
                function e(e) {
                    function p() {
                        var t = a.exec(e);
                        t && (e = e.substr(t[1].length))
                    }

                    function g(t) {
                        p();
                        var n = t.exec(e);
                        return n ? (e = e.substr(n[1].length), n[1]) : void 0
                    }

                    function m() {
                        var t, o, r = kendo.parseColor(e, !0);
                        return r ? (e = e.substr(r.match[0].length), r = r.toRGB(), (t = g(i)) || (o = g(n)), {
                            color: r,
                            length: t,
                            percent: o
                        }) : void 0
                    }

                    function v(t) {
                        var i, r, a, u, d, f, p = [],
                            v = !1;
                        if (g(l)) {
                            for (i = g(s), i ? (i = E(i), g(h)) : (r = g(o), "to" == r ? r = g(o) : r && /^-/.test(t) && (v = !0), a = g(o), g(h)), /-moz-/.test(t) && null == i && null == r && (u = g(n), d = g(n), v = !0, "0%" == u ? r = "left" : "100%" == u && (r = "right"), "0%" == d ? a = "top" : "100%" == d && (a = "bottom"), g(h)); e && !g(c) && (f = m());) p.push(f), g(h);
                            return {
                                type: "linear",
                                angle: i,
                                to: r && a ? r + " " + a : r ? r : a ? a : null,
                                stops: p,
                                reverse: v
                            }
                        }
                    }

                    function _() {
                        if (g(l)) {
                            var e = g(d);
                            return e = e.replace(/^['"]+|["']+$/g, ""), g(c), {
                                type: "url",
                                url: e
                            }
                        }
                    }

                    var y, w = e;
                    return r(f, w) ? f[w] : ((y = g(t)) ? y = v(y) : (y = g(u)) && (y = _()), f[w] = y || {
                        type: "none"
                    })
                }

                var t = /^((-webkit-|-moz-|-o-|-ms-)?linear-gradient\s*)\(/,
                    n = /^([-0-9.]+%)/,
                    i = /^([-0-9.]+px)/,
                    o = /^(left|right|top|bottom|to|center)\W/,
                    s = /^([-0-9.]+(deg|grad|rad|turn))/,
                    a = /^(\s+)/,
                    l = /^(\()/,
                    c = /^(\))/,
                    h = /^(,)/,
                    u = /^(url)\(/,
                    d = /^(.*?)\)/,
                    f = {},
                    p = {};
                return function (t) {
                    return r(p, t) ? p[t] : p[t] = ot(t).map(e)
                }
            }(), ot = function () {
                var e = {};
                return function (t, n) {
                    function i(e) {
                        return d = e.exec(t.substr(c))
                    }

                    function o(e) {
                        return e.replace(/^\s+|\s+$/g, "")
                    }

                    var s, a, l, c, h, u, d;
                    if (n || (n = /^\s*,\s*/), s = t + n, r(e, s)) return e[s];
                    for (a = [], l = 0, c = 0, h = 0, u = !1; t.length > c;) !u && i(/^[\(\[\{]/) ? (h++, c++) : !u && i(/^[\)\]\}]/) ? (h--, c++) : !u && i(/^[\"\']/) ? (u = d[0], c++) : "'" == u && i(/^\\\'/) ? c += 2 : '"' == u && i(/^\\\"/) ? c += 2 : "'" == u && i(/^\'/) ? (u = !1, c++) : '"' == u && i(/^\"/) ? (u = !1, c++) : i(n) ? (!u && !h && c > l && (a.push(o(t.substring(l, c))), l = c + d[0].length), c += d[0].length) : c++;
                    return c > l && a.push(o(t.substring(l, c))), e[s] = a
                }
            }(), rt = function () {
                var e = {};
                return function (t) {
                    var n, i = e[t];
                    return i || ((n = /url\((['"]?)([^'")]*?)\1\)\s+format\((['"]?)truetype\3\)/.exec(t)) ? i = e[t] = n[2] : (n = /url\((['"]?)([^'")]*?\.ttf)\1\)/.exec(t)) && (i = e[t] = n[2])), i
                }
            }()
        }(window.kendo.jQuery, parseFloat, Math),
        function (e) {
            var t = e.noop,
                n = window.kendo,
                i = n.Class,
                o = n.util,
                r = n.animationFrame,
                s = n.deepExtend,
                a = i.extend({
                    init: function (e, t) {
                        var n = this;
                        n.options = s({}, n.options, t), n.element = e
                    },
                    options: {
                        duration: 500,
                        easing: "swing"
                    },
                    setup: t,
                    step: t,
                    play: function () {
                        var t = this,
                            n = t.options,
                            i = e.easing[n.easing],
                            s = n.duration,
                            a = n.delay || 0,
                            l = o.now() + a,
                            c = l + s;
                        0 === s ? (t.step(1), t.abort()) : setTimeout(function () {
                            var e = function () {
                                var n, a, h, u;
                                t._stopped || (n = o.now(), a = o.limitValue(n - l, 0, s), h = a / s, u = i(h, a, 0, 1, s), t.step(u), c > n ? r(e) : t.abort())
                            };
                            e()
                        }, a)
                    },
                    abort: function () {
                        this._stopped = !0
                    },
                    destroy: function () {
                        this.abort()
                    }
                }),
                l = function () {
                    this._items = []
                };
            l.prototype = {
                register: function (e, t) {
                    this._items.push({
                        name: e,
                        type: t
                    })
                },
                create: function (e, t) {
                    var n, i, o, r = this._items;
                    if (t && t.type)
                        for (i = t.type.toLowerCase(), o = 0; r.length > o; o++)
                            if (r[o].name.toLowerCase() === i) {
                                n = r[o];
                                break
                            }
                    return n ? new n.type(e, t) : void 0
                }
            }, l.current = new l, a.create = function (e, t, n) {
                return l.current.create(e, t, n)
            }, s(n.drawing, {
                Animation: a,
                AnimationFactory: l
            })
        }(window.kendo.jQuery, Math), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});