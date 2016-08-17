/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.data", "./kendo.columnsorter", "./kendo.editable", "./kendo.window", "./kendo.filtermenu", "./kendo.columnmenu", "./kendo.groupable", "./kendo.pager", "./kendo.selectable", "./kendo.sortable", "./kendo.reorderable", "./kendo.resizable", "./kendo.mobile.actionsheet", "./kendo.mobile.pane", "./kendo.ooxml", "./kendo.excel", "./kendo.progressbar", "./kendo.pdf"], e)
}(function () {
    return function (e, t) {
        function n(e) {
            return Array(e + 1).join('<td class="k-group-cell">&nbsp;</td>')
        }

        function i(e) {
            var t, n = " ";
            if (e) {
                if (typeof e === ln) return e;
                for (t in e) n += t + '="' + e[t] + '"'
            }
            return n
        }

        function o(t, n) {
            e("th, th .k-grid-filter, th .k-link", t).add(document.body).css("cursor", n)
        }

        function r(t, n, i, o, r) {
            var a, s = n;
            for (n = e(), r = r || 1, a = 0; r > a; a++) n = n.add(t.eq(s + a));
            "number" == typeof i ? n[o ? "insertBefore" : "insertAfter"](t.eq(i)) : n.appendTo(i)
        }

        function a(t, n, i) {
            return e(t).add(n).find(i)
        }

        function s(e, t, n) {
            var i, o, r, a;
            for (n = bt(n) ? n : [n], i = 0, o = n.length; o > i; i++) r = n[i], vt(r) && r.click && (a = r.name || r.text, t.on(on + Rt, "a.k-grid-" + (a || "").replace(/\s/g, ""), {
                commandName: a
            }, Ct(r.click, e)))
        }

        function l(e, t, n) {
            return yt(e, function (e) {
                var i, o;
                return e = typeof e === ln ? {
                    field: e
                } : e, (!f(e) || n) && (e.attributes = W(e.attributes), e.footerAttributes = W(e.footerAttributes), e.headerAttributes = W(e.headerAttributes), i = !0), e.columns && (e.columns = l(e.columns, t, i)), o = ct.guid(), e.headerAttributes = _t({
                    id: o
                }, e.headerAttributes), _t({
                    encoded: t,
                    hidden: i
                }, e)
            })
        }

        function c(e, t) {
            var n = [];
            return d(e, t, n), n[n.length - 1]
        }

        function d(e, t, n) {
            var i, o;
            for (n = n || [], i = 0; t.length > i; i++) {
                if (e === t[i]) return !0;
                if (t[i].columns) {
                    if (o = n.length, n.push(t[i]), d(e, t[i].columns, n)) return !0;
                    n.splice(o, n.length - o)
                }
            }
            return !1
        }

        function h(e, t) {
            var n = t ? j : W;
            e.hidden = !t, e.attributes = n(e.attributes), e.footerAttributes = n(e.footerAttributes), e.headerAttributes = n(e.headerAttributes)
        }

        function u() {
            return "none" !== this.style.display
        }

        function f(e) {
            return p([e]).length > 0
        }

        function p(e) {
            return wt(e, function (e) {
                var t = !e.hidden;
                return t && e.columns && (t = p(e.columns).length > 0), t
            })
        }

        function g(t) {
            return e(t).map(function () {
                return this.toArray()
            })
        }

        function m(e, t, n) {
            var i = y(B(t)),
                o = y(z(t)),
                r = e.rowSpan;
            e.rowSpan = n ? i > o ? r - (i - o) || 1 : r + (o - i) : i > o ? r + (i - o) : r - (o - i) || 1
        }

        function v(t, n, i, o, r, a, s) {
            var l, c, d = y(t),
                h = y([n]);
            d > h && (l = Array(s + 1).join('<th class="k-group-cell k-header">&nbsp;</th>'), c = a.children(":not(.k-filter-row)"), e(Array(d - h + 1).join("<tr>" + l + "</tr>")).insertAfter(c.last())), M(a, d - h), w(i, o, r, a)
        }

        function _(t, n, i) {
            var o, r, a, s, l, c, d, h;
            for (i = i || 0, a = n, n = O(n), s = {}, l = t.find(">tr:not(.k-filter-row)"), c = function () {
                var t = e(this);
                return !t.hasClass("k-group-cell") && !t.hasClass("k-hierarchy-cell")
            }, d = 0, h = n.length; h > d; d++) o = b(n[d], a), s[o.row] || (s[o.row] = l.eq(o.row).find(".k-header").filter(c)), r = s[o.row].eq(o.cell), r.attr(ct.attr("index"), i + d);
            return n.length
        }

        function y(e) {
            var t, n, i = 1,
                o = 0;
            for (t = 0; e.length > t; t++) e[t].columns && (n = y(e[t].columns), n > o && (o = n));
            return i + o
        }

        function w(t, n, i, o) {
            var r, a, s = C(t[0], n),
                l = i.find(">tr:not(.k-filter-row):eq(" + s.row + ")>th.k-header"),
                c = e(),
                d = s.cell;
            for (r = 0; t.length > r; r++) c = c.add(l.eq(d + r));
            for (o.find(">tr:not(.k-filter-row)").eq(s.row).append(c), a = [], r = 0; t.length > r; r++) t[r].columns && (a = a.concat(t[r].columns));
            a.length && w(a, n, i, o)
        }

        function b(e, t, n, i) {
            var o, r;
            for (n = n || 0, i = i || {}, i[n] = i[n] || 0, r = 0; t.length > r; r++) {
                if (t[r] == e) {
                    o = {
                        cell: i[n],
                        row: n
                    };
                    break
                }
                if (t[r].columns && (o = b(e, t[r].columns, n + 1, i))) break;
                i[n]++
            }
            return o
        }

        function x(e, t, n, i) {
            var o, r = n.locked;
            do o = e[t], t += i ? 1 : -1; while (o && t > -1 && e.length > t && o != n && !o.columns && o.locked == r);
            return o
        }

        function k(e, t, n, i) {
            var o, r, a, s;
            return t.columns ? (t = t.columns, t[i ? 0 : t.length - 1]) : (o = c(t, e), r = o ? o.columns : e, a = xt(t, r), 0 === a && i ? a++ : a != r.length - 1 || i ? (a > 0 || 0 === a && !i) && (a += i ? -1 : 1) : a--, s = xt(n, r), t = x(r, a, n, s > a), t && t != n && t.columns ? k(e, t, n, i) : null)
        }

        function C(e, t, n, i) {
            var o, r;
            for (n = n || 0, i = i || {}, i[n] = i[n] || 0, r = 0; t.length > r; r++) {
                if (t[r] == e) {
                    o = {
                        cell: i[n],
                        row: n
                    };
                    break
                }
                if (t[r].columns && (o = C(e, t[r].columns, n + 1, i))) break;
                t[r].hidden || i[n]++
            }
            return o
        }

        function S(e) {
            var t = T(B(e));
            return t.concat(T(z(e)))
        }

        function T(e) {
            var t, n = [],
                i = [];
            for (t = 0; e.length > t; t++) n.push(e[t]), e[t].columns && (i = i.concat(e[t].columns));
            return i.length && (n = n.concat(T(i))), n
        }

        function D(e) {
            var t, n, i = 0;
            for (n = 0; e.length > n; n++) t = e[n], t.columns ? i += D(t.columns) : t.hidden && i++;
            return i
        }

        function A(e) {
            var t, n, i, o = 0;
            for (n = 0, i = e.length; i > n; n++) t = e[n].style.width, t && -1 == t.indexOf("%") && (o += parseInt(t, 10));
            return o
        }

        function P(e, t) {
            var n, i, o = e.find("tr:not(.k-filter-row) th:not(.k-group-cell,.k-hierarchy-cell)");
            for (i = 0; o.length > i; i++) n = o[i].rowSpan, n > 1 && (o[i].rowSpan = n - t || 1)
        }

        function M(e, t) {
            var n, i = e.find("tr:not(.k-filter-row) th:not(.k-group-cell,.k-hierarchy-cell)");
            for (n = 0; i.length > n; n++) i[n].rowSpan += t
        }

        function E(t) {
            var n, i = t.find("tr:not(.k-filter-row)"),
                o = i.filter(function () {
                    return !e(this).children().length
                }).remove().length,
                r = i.find("th:not(.k-group-cell,.k-hierarchy-cell)");
            for (n = 0; r.length > n; n++) r[n].rowSpan > 1 && (r[n].rowSpan -= o);
            return i.length - o
        }

        function I(e, t, n, i, o) {
            var r, a, s, l = [];
            for (r = 0, s = e.length; s > r; r++) a = n[i] || [], a.push(t.eq(o + r)), n[i] = a, e[r].columns && (l = l.concat(e[r].columns));
            l.length && I(l, t, n, i + 1, o + e.length)
        }

        function B(e) {
            return wt(e, function (e) {
                return e.locked
            })
        }

        function z(e) {
            return wt(e, function (e) {
                return !e.locked
            })
        }

        function L(e) {
            return wt(e, function (e) {
                return !e.locked && f(e)
            })
        }

        function R(e) {
            return wt(e, function (e) {
                return e.locked && f(e)
            })
        }

        function F(e) {
            var t, n = [];
            for (t = 0; e.length > t; t++) e[t].hidden || (e[t].columns ? n = n.concat(F(e[t].columns)) : n.push(e[t]));
            return n
        }

        function O(e) {
            var t, n = [];
            for (t = 0; e.length > t; t++) e[t].columns ? n = n.concat(O(e[t].columns)) : n.push(e[t]);
            return n
        }

        function N(n) {
            var i, o = n.find(">tr:not(.k-filter-row)"),
                r = function () {
                    var t = e(this);
                    return !t.hasClass("k-group-cell") && !t.hasClass("k-hierarchy-cell")
                }, a = e();
            return o.length > 1 && (a = o.find("th").filter(r).filter(function () {
                return this.rowSpan > 1
            })), a = a.add(o.last().find("th").filter(r)), i = ct.attr("index"), a.sort(function (n, o) {
                var r, a;
                return n = e(n), o = e(o), r = n.attr(i), a = o.attr(i), r === t && (r = e(n).index()), a === t && (a = e(o).index()), r = parseInt(r, 10), a = parseInt(a, 10), r > a ? 1 : a > r ? -1 : 0
            }), a
        }

        function H(t) {
            var n, i, o, r, a, s, l, c = t.closest("table"),
                d = e().add(t),
                h = t.closest("tr"),
                u = c.find("tr:not(.k-filter-row)"),
                f = u.index(h);
            if (f > 0) {
                for (n = u.eq(f - 1), i = n.find("th:not(.k-group-cell,.k-hierarchy-cell)").filter(function () {
                    return !e(this).attr("rowspan")
                }), o = 0, r = h.find("th:not(.k-group-cell,.k-hierarchy-cell)").index(t), a = t.prevAll(":not(.k-group-cell,.k-hierarchy-cell)").filter(function () {
                    return this.colSpan > 1
                }), s = 0; a.length > s; s++) o += a[s].colSpan || 1;
                for (r += Math.max(o - 1, 0), o = 0, s = 0; i.length > s; s++)
                    if (l = i.eq(s), o += l.attr("colSpan") ? l[0].colSpan : 1, r >= s && o > r) {
                        d = H(l).add(d);
                        break
                    }
            }
            return d
        }

        function V(t) {
            var n, i, o, r, a, s, l, c, d = t.closest("thead"),
                h = e().add(t),
                u = t.closest("tr"),
                f = d.find("tr:not(.k-filter-row)"),
                p = f.index(u) + t[0].rowSpan,
                g = ct.attr("colspan");
            if (f.length - 1 >= p) {
                for (n = u.next(), i = u.find("th:not(.k-group-cell,.k-hierarchy-cell)").index(t), o = t.prevAll(":not(.k-group-cell,.k-hierarchy-cell)"), o = o.filter(function () {
                    return !this.rowSpan || 1 === this.rowSpan
                }), a = 0, r = 0; o.length > r; r++) a += parseInt(o.eq(r).attr(g), 10) || 1;
                for (s = n.find("th:not(.k-group-cell,.k-hierarchy-cell)"), l = parseInt(t.attr(g), 10) || 1, r = 0; l > r;) n = s.eq(r + a), h = h.add(V(n)), c = parseInt(n.attr(g), 10), c > 1 && (l -= c - 1), r++
            }
            return h
        }

        function U(t, n, i, o) {
            var r, a = t;
            return o && t.empty(), ft ? t[0].innerHTML = i : (r = document.createElement("div"), r.innerHTML = "<table><tbody>" + i + "</tbody></table>", t = r.firstChild.firstChild, n[0].replaceChild(t, a[0]), t = e(t)), t
        }

        function W(e) {
            e = e || {};
            var t = e.style;
            return t ? (t = t.replace(/((.*)?display)(.*)?:([^;]*)/i, "$1:none"), t === e.style && (t = t.replace(/(.*)?/i, "display:none;$1"))) : t = "display:none", _t({}, e, {
                style: t
            })
        }

        function j(e) {
            e = e || {};
            var t = e.style;
            return t && (e.style = t.replace(/(display\s*:\s*none\s*;?)*/gi, "")), e
        }

        function G(t, n, i, o) {
            var r, a = t.find(">colgroup"),
                s = yt(n, function (e) {
                    return r = e.width, r && 0 !== parseInt(r, 10) ? ct.format('<col style="width:{0}"/>', typeof r === ln ? r : r + "px") : "<col />"
                });
            (i || a.find(".k-hierarchy-col").length) && s.splice(0, 0, '<col class="k-hierarchy-col" />'), a.length && a.remove(), a = e(Array(o + 1).join('<col class="k-group-col">') + s.join("")), a.is("colgroup") || (a = e("<colgroup/>").append(a)), t.prepend(a), wn.msie && 8 == wn.version && (t.css("display", "inline-table"), window.setTimeout(function () {
                t.css("display", "")
            }, 1))
        }

        function q(e, t) {
            var n, i, o = 0;
            for (n = 0, i = t.length; i > n; n++) t[n].locked && (e.eq(n).insertBefore(e.eq(o)), o++)
        }

        function $(e) {
            var t, n, i, o = {};
            for (n = 0, i = e.length; i > n; n++) t = e[n], o[t.value] = t.text;
            return o
        }

        function Y(e, t, n, i) {
            var o = n && n.length && vt(n[0]) && "value" in n[0],
                r = o ? $(n)[e] : e;
            return r = null != r ? r : "", t ? ct.format(t, r) : i === !1 ? r : ct.htmlEncode(r)
        }

        function Q(e, t, n) {
            for (var i, o = 0, r = e[o]; r;) {
                if (i = n ? !0 : "none" !== r.style.display, i && !mn.test(r.className) && --t < 0) {
                    r.style.display = n ? "" : "none";
                    break
                }
                r = e[++o]
            }
        }

        function X(t, n) {
            for (var i, o, r = 0, a = t.length; a > r; r += 1) o = t.eq(r), o.is(".k-grouping-row,.k-detail-row") ? (i = o.children(":not(.k-group-cell):first,.k-detail-cell").last(), i.attr("colspan", parseInt(i.attr("colspan"), 10) - 1)) : (o.hasClass("k-grid-edit-row") && (i = o.children(".k-edit-container")[0]) && (i = e(i), i.attr("colspan", parseInt(i.attr("colspan"), 10) - 1), i.find("col").eq(n).remove(), o = i.find("tr:first")), Q(o[0].cells, n, !1))
        }

        function K(e) {
            var t, n, i = [];
            for (n = 0; e.length > n && (t = e[n], "field" in t && "value" in t && "items" in t); n++) i.push(t), t.hasSubgroups && (i = i.concat(K(t.items)));
            return i
        }

        function Z(t, n) {
            for (var i, o, r, a = 0, s = t.length; s > a; a += 1) o = t.eq(a), o.is(".k-grouping-row,.k-detail-row") ? (i = o.children(":not(.k-group-cell):first,.k-detail-cell").last(), i.attr("colspan", parseInt(i.attr("colspan"), 10) + 1)) : (o.hasClass("k-grid-edit-row") && (i = o.children(".k-edit-container")[0]) && (i = e(i), i.attr("colspan", parseInt(i.attr("colspan"), 10) + 1), G(i.find(">form>table"), p(r), !1, 0), o = i.find("tr:first")), Q(o[0].cells, n, !0))
        }

        function J(e, t, n) {
            n = n || 1;
            var i, o, r;
            for (o = 0, r = e.length; r > o; o++) i = e.eq(o).children().last(), i.attr("colspan", parseInt(i.attr("colspan"), 10) + n), i = t.eq(o).children().last(), i.attr("colspan", parseInt(i.attr("colspan"), 10) - n)
        }

        function et(e) {
            var t, n, i = 0,
                o = e.find(">colgroup>col");
            for (t = 0, n = o.length; n > t; t += 1) i += parseInt(o[t].style.width, 10);
            return i
        }

        function tt(e, t) {
            var n, i, o, r;
            e = e[0], t = t[0], e.rows.length !== t.rows.length && (n = e.offsetHeight, i = t.offsetHeight, n > i ? (o = t.rows[t.rows.length - 1], vn.test(o.className) && (o = t.rows[t.rows.length - 2]), r = n - i) : (o = e.rows[e.rows.length - 1], vn.test(o.className) && (o = e.rows[e.rows.length - 2]), r = i - n), o.style.height = o.offsetHeight + r + "px")
        }

        function nt(e, t) {
            var n, i = e.offsetHeight,
                o = t.offsetHeight;
            i > o ? n = i + "px" : o > i && (n = o + "px"), n && (e.style.height = t.style.height = n)
        }

        function it(e, t) {
            var n, i, o;
            if (typeof e === ln && e === t) return e;
            if (vt(e) && e.name === t) return e;
            if (bt(e))
                for (n = 0, i = e.length; i > n; n++)
                    if (o = e[n], typeof o === ln && o === t || o.name === t) return o;
            return null
        }

        function ot(t, n) {
            var i, o, r, a = wn.msie;
            if (n === !0) {
                if (t = e(t), i = !0, i && (o = t.parent().scrollTop(), r = t.parent().scrollLeft()), a) try {
                    t[0].setActive()
                } catch (s) {
                    t[0].focus()
                } else t[0].focus();
                i && (t.parent().scrollTop(o), t.parent().scrollLeft(r))
            } else e(t).one("focusin", function (e) {
                e.preventDefault()
            }).focus()
        }

        function rt(n) {
            var i = e(n.currentTarget),
                o = i.is("th"),
                r = this.table.add(this.lockedTable),
                a = this.thead.parent().add(e(">table", this.lockedHeader)),
                s = e(n.target).is(":button,a,:input,a>.k-icon,textarea,span.k-icon,span.k-link,.k-input,.k-multiselect-wrap"),
                l = i.closest("table")[0];
            if (!ct.support.touch) return s && i.find(ct.roleSelector("filtercell")).length ? (this.current(i), t) : ((l === r[0] || l === r[1] || l === a[0] || l === a[1]) && (e(n.target).is("a.k-i-collapse, a.k-i-expand") || (this.options.navigatable && this.current(i), (o || !s) && setTimeout(function () {
                xn && e(ct._activeElement()).hasClass("k-widget") || ot(l, !0)
            }), o && n.preventDefault())), t)
        }

        function at(e) {
            return e && (e.hasClass("k-edit-cell") || e.parent().hasClass("k-grid-edit-row"))
        }

        function st(e, t, i) {
            return '<tr role="row" class="k-grouping-row">' + n(t) + '<td colspan="' + e + '" aria-expanded="true"><p class="k-reset"><a class="k-icon k-i-collapse" href="#" tabindex="-1"></a>' + i + "</p></td></tr>"
        }

        function lt(e) {
            return '<tr role="row" class="k-grouping-row"><td colspan="' + e + '" aria-expanded="true"><p class="k-reset">&nbsp;</p></td></tr>'
        }

        var ct = window.kendo,
            dt = ct.ui,
            ht = ct.data.DataSource,
            ut = dt.Groupable,
            ft = ct.support.tbodyInnerHtml,
            pt = ct._activeElement,
            gt = dt.Widget,
            mt = ct.keys,
            vt = e.isPlainObject,
            _t = e.extend,
            yt = e.map,
            wt = e.grep,
            bt = e.isArray,
            xt = e.inArray,
            kt = Array.prototype.push,
            Ct = e.proxy,
            St = ct.isFunction,
            Tt = e.isEmptyObject,
            Dt = Math,
            At = "progress",
            Pt = "error",
            Mt = ":not(.k-group-cell):not(.k-hierarchy-cell):visible",
            Et = "tbody>tr:not(.k-grouping-row):not(.k-detail-row):not(.k-group-footer) > td:not(.k-group-cell):not(.k-hierarchy-cell)",
            It = "tr:not(.k-footer-template):visible",
            Bt = ":not(.k-group-cell):not(.k-hierarchy-cell):visible",
            zt = It + ":first>" + Bt + ":first",
            Lt = "th.k-header:not(.k-group-cell):not(.k-hierarchy-cell)",
            Rt = ".kendoGrid",
            Ft = "edit",
            Ot = "save",
            Nt = "remove",
            Ht = "detailInit",
            Vt = "filterMenuInit",
            Ut = "columnMenuInit",
            Wt = "change",
            jt = "columnHide",
            Gt = "columnShow",
            qt = "saveChanges",
            $t = "dataBound",
            Yt = "detailExpand",
            Qt = "detailCollapse",
            Xt = "k-state-focused",
            Kt = "k-state-selected",
            Zt = "k-grid-norecords",
            Jt = "columnResize",
            en = "columnReorder",
            tn = "columnLock",
            nn = "columnUnlock",
            on = "click",
            rn = "height",
            an = "tabIndex",
            sn = "function",
            ln = "string",
            cn = "Are you sure you want to delete this record?",
            dn = "No records available.",
            hn = "Delete",
            un = "Cancel",
            fn = /(\}|\#)/gi,
            pn = /#/gi,
            gn = "[\\x20\\t\\r\\n\\f]",
            mn = RegExp("(^|" + gn + ")(k-group-cell|k-hierarchy-cell)(" + gn + "|$)"),
            vn = RegExp("(^|" + gn + ")(k-filter-row)(" + gn + "|$)"),
            _n = '<a class="k-button k-button-icontext #=className#" #=attr# href="\\#"><span class="#=iconClass# #=imageClass#"></span>#=text#</a>',
            yn = !1,
            wn = ct.support.browser,
            bn = wn.msie && 7 == wn.version,
            xn = wn.msie && 8 == wn.version,
            kn = gt.extend({
                init: function (e, t) {
                    var n = this;
                    gt.fn.init.call(n, e, t), n._refreshHandler = Ct(n.refresh, n), n.setDataSource(t.dataSource), n.wrap()
                },
                setDataSource: function (e) {
                    var t = this;
                    t.dataSource && t.dataSource.unbind(Wt, t._refreshHandler), t.dataSource = e, t.dataSource.bind(Wt, t._refreshHandler)
                },
                options: {
                    name: "VirtualScrollable",
                    itemHeight: e.noop,
                    prefetch: !0
                },
                destroy: function () {
                    var e = this;
                    gt.fn.destroy.call(e), e.dataSource.unbind(Wt, e._refreshHandler), e.wrapper.add(e.verticalScrollbar).off(Rt), e.drag && (e.drag.destroy(), e.drag = null), e.wrapper = e.element = e.verticalScrollbar = null, e._refreshHandler = null
                },
                wrap: function () {
                    var t, n = this,
                        i = ct.support.scrollbar() + 1,
                        o = n.element;
                    o.css({
                        width: "auto",
                        overflow: "hidden"
                    }).css(yn ? "padding-left" : "padding-right", i), n.content = o.children().first(), t = n.wrapper = n.content.wrap('<div class="k-virtual-scrollable-wrap"/>').parent().bind("DOMMouseScroll" + Rt + " mousewheel" + Rt, Ct(n._wheelScroll, n)), ct.support.kineticScrollNeeded && (n.drag = new ct.UserEvents(n.wrapper, {
                        global: !0,
                        start: function (e) {
                            e.sender.capture()
                        },
                        move: function (e) {
                            n.verticalScrollbar.scrollTop(n.verticalScrollbar.scrollTop() - e.y.delta), t.scrollLeft(t.scrollLeft() - e.x.delta), e.preventDefault()
                        }
                    })), n.verticalScrollbar = e('<div class="k-scrollbar k-scrollbar-vertical" />').css({
                        width: i
                    }).appendTo(o).bind("scroll" + Rt, Ct(n._scroll, n))
                },
                _wheelScroll: function (t) {
                    if (!t.ctrlKey) {
                        var n = this.verticalScrollbar.scrollTop(),
                            i = ct.wheelDeltaY(t);
                        i && (t.preventDefault(), e(t.currentTarget).one("wheel" + Rt, !1), this.verticalScrollbar.scrollTop(n + -i))
                    }
                },
                _scroll: function (e) {
                    var t = this,
                        n = !t.options.prefetch,
                        i = e.currentTarget.scrollTop,
                        o = t.dataSource,
                        r = t.itemHeight,
                        a = o.skip() || 0,
                        s = t._rangeStart || a,
                        l = t.element.innerHeight(),
                        c = !!(t._scrollbarTop && t._scrollbarTop > i),
                        d = Dt.max(Dt.floor(i / r), 0),
                        h = Dt.max(d + Dt.floor(l / r), 0);
                    t._scrollTop = i - s * r, t._scrollbarTop = i, t._scrolling = n, t._fetch(d, h, c) || (t.wrapper[0].scrollTop = t._scrollTop), n && (t._scrollingTimeout && clearTimeout(t._scrollingTimeout), t._scrollingTimeout = setTimeout(function () {
                        t._scrolling = !1, t._page(t._rangeStart, t.dataSource.take())
                    }, 100))
                },
                itemIndex: function (e) {
                    var t = this._rangeStart || this.dataSource.skip() || 0;
                    return t + e
                },
                position: function (e) {
                    var t, n = this._rangeStart || this.dataSource.skip() || 0,
                        i = this.dataSource.pageSize();
                    return t = e > n ? e - n + 1 : n - e - 1, t > i ? i : t
                },
                scrollIntoView: function (e) {
                    var t = this.wrapper[0],
                        n = t.clientHeight,
                        i = this._scrollTop || t.scrollTop,
                        o = e[0].offsetTop,
                        r = e[0].offsetHeight;
                    i > o ? this.verticalScrollbar[0].scrollTop -= n / 2 : o + r >= i + n && (this.verticalScrollbar[0].scrollTop += n / 2)
                },
                _fetch: function (t, n, i) {
                    var o = this,
                        r = o.dataSource,
                        a = o.itemHeight,
                        s = r.take(),
                        l = o._rangeStart || r.skip() || 0,
                        c = Dt.floor(t / s) * s,
                        d = !1,
                        h = .33;
                    return l > t ? (d = !0, l = Dt.max(0, n - s), o._scrollTop = (t - l) * a, o._page(l, s)) : n >= l + s && !i ? (d = !0, l = t, o._scrollTop = a, o._page(l, s)) : !o._fetching && o.options.prefetch && (c + s - s * h > t && t > s && r.prefetch(c - s, s, e.noop), n > c + s * h && r.prefetch(c + s, s, e.noop)), d
                },
                fetching: function () {
                    return this._fetching
                },
                _page: function (e, t) {
                    var n = this,
                        i = !n.options.prefetch,
                        o = n.dataSource;
                    clearTimeout(n._timeout), n._fetching = !0, n._rangeStart = e, o.inRange(e, t) ? o.range(e, t) : (i || ct.ui.progress(n.wrapper.parent(), !0), n._timeout = setTimeout(function () {
                        n._scrolling || (i && ct.ui.progress(n.wrapper.parent(), !0), o.range(e, t))
                    }, 100))
                },
                repaintScrollbar: function () {
                    var e, t = this,
                        n = "",
                        i = 25e4,
                        o = t.dataSource,
                        r = ct.support.kineticScrollNeeded ? 0 : ct.support.scrollbar(),
                        a = t.wrapper[0],
                        s = t.itemHeight = t.options.itemHeight() || 0,
                        l = a.scrollWidth > a.offsetWidth ? r : 0,
                        c = o.total() * s + l;
                    for (e = 0; e < Dt.floor(c / i); e++) n += '<div style="width:1px;height:' + i + 'px"></div>';
                    c % i && (n += '<div style="width:1px;height:' + c % i + 'px"></div>'), t.verticalScrollbar.html(n), a.scrollTop = t._scrollTop
                },
                refresh: function () {
                    var e = this,
                        t = e.dataSource,
                        n = e._rangeStart;
                    ct.ui.progress(e.wrapper.parent(), !1), clearTimeout(e._timeout), e.repaintScrollbar(), e.drag && e.drag.cancel(), n && !e._fetching && (e._rangeStart = t.skip(), 1 === t.page() && (e.verticalScrollbar[0].scrollTop = 0)), e._fetching = !1
                }
            }),
            Cn = {
                create: {
                    text: "Add new record",
                    imageClass: "k-add",
                    className: "k-grid-add",
                    iconClass: "k-icon"
                },
                cancel: {
                    text: "Cancel changes",
                    imageClass: "k-cancel",
                    className: "k-grid-cancel-changes",
                    iconClass: "k-icon"
                },
                save: {
                    text: "Save changes",
                    imageClass: "k-update",
                    className: "k-grid-save-changes",
                    iconClass: "k-icon"
                },
                destroy: {
                    text: "Delete",
                    imageClass: "k-delete",
                    className: "k-grid-delete",
                    iconClass: "k-icon"
                },
                edit: {
                    text: "Edit",
                    imageClass: "k-edit",
                    className: "k-grid-edit",
                    iconClass: "k-icon"
                },
                update: {
                    text: "Update",
                    imageClass: "k-update",
                    className: "k-primary k-grid-update",
                    iconClass: "k-icon"
                },
                canceledit: {
                    text: "Cancel",
                    imageClass: "k-cancel",
                    className: "k-grid-cancel",
                    iconClass: "k-icon"
                },
                excel: {
                    text: "Export to Excel",
                    imageClass: "k-i-excel",
                    className: "k-grid-excel",
                    iconClass: "k-icon"
                },
                pdf: {
                    text: "Export to PDF",
                    imageClass: "k-i-pdf",
                    className: "k-grid-pdf",
                    iconClass: "k-icon"
                }
            }, Sn = ct.ui.DataBoundWidget.extend({
                init: function (t, n, i) {
                    var o = this;
                    n = bt(n) ? {
                        dataSource: n
                    } : n, gt.fn.init.call(o, t, n), i && (o._events = i), yn = ct.support.isRtl(t), o._element(), o._aria(), o._columns(o.options.columns), o._dataSource(), o._tbody(), o._pageable(), o._thead(), o._groupable(), o._toolbar(), o._setContentHeight(), o._templates(), o._navigatable(), o._selectable(), o._clipboard(), o._details(), o._editable(), o._attachCustomCommandsEvent(), o._minScreenSupport(), o.options.autoBind ? o.dataSource.fetch() : o._footer(), o.lockedContent && (o.wrapper.addClass("k-grid-lockedcolumns"), o._resizeHandler = function () {
                        o.resize()
                    }, e(window).on("resize" + Rt, o._resizeHandler)), ct.notify(o)
                },
                events: [Wt, "dataBinding", "cancel", $t, Yt, Qt, Ht, Vt, Ut, Ft, Ot, Nt, qt, Jt, en, Gt, jt, tn, nn],
                setDataSource: function (e) {
                    var t = this,
                        n = t.options.scrollable;
                    t.options.dataSource = e, t._dataSource(), t._pageable(), t._thead(), n && (n.virtual ? t.content.find(">.k-virtual-scrollable-wrap").scrollLeft(0) : t.content.scrollLeft(0)), t.options.groupable && t._groupable(), t.virtualScrollable && t.virtualScrollable.setDataSource(t.options.dataSource), t.options.navigatable && t._navigatable(), t.options.selectable && t._selectable(), t.options.autoBind && e.fetch()
                },
                options: {
                    name: "Grid",
                    columns: [],
                    toolbar: null,
                    autoBind: !0,
                    filterable: !1,
                    scrollable: !0,
                    sortable: !1,
                    selectable: !1,
                    allowCopy: !1,
                    navigatable: !1,
                    pageable: !1,
                    editable: !1,
                    groupable: !1,
                    rowTemplate: "",
                    altRowTemplate: "",
                    noRecords: !1,
                    dataSource: {},
                    height: null,
                    resizable: !1,
                    reorderable: !1,
                    columnMenu: !1,
                    detailTemplate: null,
                    columnResizeHandleWidth: 3,
                    mobile: "",
                    messages: {
                        editable: {
                            cancelDelete: un,
                            confirmation: cn,
                            confirmDelete: hn
                        },
                        commands: {
                            create: Cn.create.text,
                            cancel: Cn.cancel.text,
                            save: Cn.save.text,
                            destroy: Cn.destroy.text,
                            edit: Cn.edit.text,
                            update: Cn.update.text,
                            canceledit: Cn.canceledit.text,
                            excel: Cn.excel.text,
                            pdf: Cn.pdf.text
                        },
                        noRecords: dn
                    }
                },
                destroy: function () {
                    var t, n = this;
                    n._angularItems("cleanup"), n._destroyColumnAttachments(), gt.fn.destroy.call(n), this._navigatableTables = null, n._resizeHandler && e(window).off("resize" + Rt, n._resizeHandler), n.pager && n.pager.element && n.pager.destroy(), n.pager = null, n.groupable && n.groupable.element && n.groupable.element.kendoGroupable("destroy"), n.groupable = null, n.options.reorderable && n.wrapper.data("kendoReorderable").destroy(), n.selectable && n.selectable.element && (n.selectable.destroy(), n.clearArea(), n.copyHandler && (n.wrapper.off("keydown", n.copyHandler), n.unbind(n.copyHandler)), n.updateClipBoardState && (n.unbind(n.updateClipBoardState), n.updateClipBoardState = null), n.clearAreaHandler && n.wrapper.off("keyup", n.clearAreaHandler)), n.selectable = null, n.resizable && (n.resizable.destroy(), n._resizeUserEvents && (n._resizeHandleDocumentClickHandler && e(document).off("click", n._resizeHandleDocumentClickHandler), n._resizeUserEvents.destroy(), n._resizeUserEvents = null), n.resizable = null), n.virtualScrollable && n.virtualScrollable.element && n.virtualScrollable.destroy(), n.virtualScrollable = null, n._destroyEditable(), n.dataSource && (n.dataSource.unbind(Wt, n._refreshHandler).unbind(At, n._progressHandler).unbind(Pt, n._errorHandler), n._refreshHandler = n._progressHandler = n._errorHandler = null), t = n.element.add(n.wrapper).add(n.table).add(n.thead).add(n.wrapper.find(">.k-grid-toolbar")), n.content && (t = t.add(n.content).add(n.content.find(">.k-virtual-scrollable-wrap"))), n.lockedHeader && n._removeLockedContainers(), n.pane && n.pane.destroy(), nScreenResizeHandler && e(window).off("resize", nScreenResizeHandler), n._draggableInstance && n._draggableInstance.element && n._draggableInstance.destroy(), n._draggableInstance = null, t.off(Rt), ct.destroy(n.wrapper), n.rowTemplate = n.altRowTemplate = n.lockedRowTemplate = n.lockedAltRowTemplate = n.detailTemplate = n.footerTemplate = n.groupFooterTemplate = n.lockedGroupFooterTemplate = n.noRecordsTemplate = null, n.scrollables = n.thead = n.tbody = n.element = n.table = n.content = n.footer = n.wrapper = n._groupableClickHandler = n._setContentWidthHandler = null
                },
                getOptions: function () {
                    var n, i, o, r = this.options;
                    return r.dataSource = null, n = _t(!0, {}, this.options), n.columns = ct.deepExtend([], this.columns), i = this.dataSource, o = i.options.data && i._data, i.options.data = null, n.dataSource = e.extend(!0, {}, i.options), i.options.data = o, n.dataSource.data = o, n.dataSource.page = i.page(), n.dataSource.filter = i.filter(), n.dataSource.pageSize = i.pageSize(), n.dataSource.sort = i.sort(), n.dataSource.group = i.group(), n.dataSource.aggregate = i.aggregate(), n.dataSource.transport && (n.dataSource.transport.dataSource = null), n.$angular = t, n
                },
                setOptions: function (e) {
                    var t, n, i, o, r = this.getOptions();
                    ct.deepExtend(r, e), e.dataSource || (r.dataSource = this.dataSource), t = this.wrapper, n = this._events, i = this.element, this.destroy(), this.options = null, this._isMobile && (o = t.closest(ct.roleSelector("pane")).parent(), o.after(t), o.remove(), t.removeClass("k-grid-mobile")), t[0] !== i[0] && (t.before(i), t.remove()), i.empty(), this.init(i, r, n), this._setEvents(r)
                },
                items: function () {
                    return this.lockedContent ? this._items(this.tbody).add(this._items(this.lockedTable.children("tbody"))) : this._items(this.tbody)
                },
                _items: function (t) {
                    return t.children().filter(function () {
                        var t = e(this);
                        return !t.hasClass("k-grouping-row") && !t.hasClass("k-detail-row") && !t.hasClass("k-group-footer")
                    })
                },
                dataItems: function () {
                    var e, t, n, i = ct.ui.DataBoundWidget.fn.dataItems.call(this);
                    if (this.lockedContent) {
                        for (e = i.length, t = Array(2 * e), n = e; --n >= 0;) t[n] = t[n + e] = i[n];
                        i = t
                    }
                    return i
                },
                _destroyColumnAttachments: function () {
                    var t = this;
                    t.resizeHandle = null, t.thead && (this.angular("cleanup", function () {
                        return {
                            elements: t.thead.get()
                        }
                    }), t.thead.add(t.lockedHeader).find("th").each(function () {
                        var t = e(this),
                            n = t.data("kendoFilterMenu"),
                            i = t.data("kendoColumnSorter"),
                            o = t.data("kendoColumnMenu");
                        n && n.destroy(), i && i.destroy(), o && o.destroy()
                    }))
                },
                _attachCustomCommandsEvent: function () {
                    var e, t, n, i = this,
                        o = O(i.columns || []);
                    for (t = 0, n = o.length; n > t; t++) e = o[t].command, e && s(i, i.wrapper, e)
                },
                _aria: function () {
                    var e = this.element.attr("id") || "aria";
                    e && (this._cellId = e + "_active_cell")
                },
                _element: function () {
                    var t = this,
                        n = t.element;
                    n.is("table") || (n = t.options.scrollable ? t.element.find("> .k-grid-content > table") : t.element.children("table"), n.length || (n = e("<table />").appendTo(t.element))), bn && n.attr("cellspacing", 0), t.table = n.attr("role", t._hasDetails() ? "treegrid" : "grid"), t._wrapper()
                },
                _createResizeHandle: function (t, n) {
                    var i, o, r, a, s, l, c, d = this,
                        h = d.options.columnResizeHandleWidth,
                        u = d.options.scrollable,
                        f = d.resizeHandle,
                        p = this._groups();
                    if (f && d.lockedContent && f.data("th")[0] !== n[0] && (f.off(Rt).remove(), f = null), f || (f = d.resizeHandle = e('<div class="k-resize-handle"><div class="k-resize-handle-inner"></div></div>'), t.append(f)), yn) i = n.position().left, u && (a = n.closest(".k-grid-header-wrap, .k-grid-header-locked"), s = wn.msie ? a.scrollLeft() : 0, l = wn.webkit ? a[0].scrollWidth - a[0].offsetWidth - a.scrollLeft() : 0, c = wn.mozilla ? a[0].scrollWidth - a[0].offsetWidth - (a[0].scrollWidth - a[0].offsetWidth - a.scrollLeft()) : 0, i -= l - c + s);
                    else {
                        for (i = n[0].offsetWidth, o = N(n.closest("thead")).filter(":visible"), r = 0; o.length > r && o[r] != n[0]; r++) i += o[r].offsetWidth;
                        p > 0 && (i += t.find(".k-group-cell:first").outerWidth() * p), d._hasDetails() && (i += t.find(".k-hierarchy-cell:first").outerWidth())
                    }
                    f.css({
                        top: n.position().top,
                        left: i - h,
                        height: n.outerHeight(),
                        width: 3 * h
                    }).data("th", n).show(), f.off("dblclick" + Rt).on("dblclick" + Rt, function () {
                        d._autoFitLeafColumn(n.data("index"))
                    })
                },
                _positionColumnResizeHandle: function () {
                    var t = this,
                        n = t.options.columnResizeHandleWidth,
                        i = t.lockedHeader ? t.lockedHeader.find("thead:first") : e();
                    t.thead.add(i).on("mousemove" + Rt, "th", function (i) {
                        var r, a, s, l = e(this);
                        l.hasClass("k-group-cell") || l.hasClass("k-hierarchy-cell") || (r = i.clientX, a = e(window).scrollLeft(), s = l.offset().left + (yn ? 0 : this.offsetWidth), r + a > s - n && s + n > r + a ? t._createResizeHandle(l.closest("div"), l) : t.resizeHandle ? t.resizeHandle.hide() : o(t.wrapper, ""))
                    })
                },
                _resizeHandleDocumentClick: function (t) {
                    e(t.target).closest(".k-column-active").length || (e(document).off(t), this._hideResizeHandle())
                },
                _hideResizeHandle: function () {
                    this.resizeHandle && (this.resizeHandle.data("th").removeClass("k-column-active"), this.lockedContent && !this._isMobile ? (this.resizeHandle.off(Rt).remove(), this.resizeHandle = null) : this.resizeHandle.hide())
                },
                _positionColumnResizeHandleTouch: function () {
                    var t = this,
                        n = t.lockedHeader ? t.lockedHeader.find("thead:first") : e();
                    t._resizeUserEvents = new ct.UserEvents(n.add(t.thead), {
                        filter: "th:not(.k-group-cell):not(.k-hierarchy-cell)",
                        threshold: 10,
                        hold: function (n) {
                            var i = e(n.target);
                            n.preventDefault(), i.addClass("k-column-active"), t._createResizeHandle(i.closest("div"), i), t._resizeHandleDocumentClickHandler || (t._resizeHandleDocumentClickHandler = Ct(t._resizeHandleDocumentClick, t)), e(document).on("click", t._resizeHandleDocumentClickHandler)
                        }
                    })
                },
                _resizable: function () {
                    var t, n, i, r, a, s, l, c = this,
                        d = c.options,
                        h = this._isMobile,
                        u = ct.support.mobileOS ? 0 : ct.support.scrollbar();
                    d.resizable && (t = d.scrollable ? c.wrapper.find(".k-grid-header-wrap:first") : c.wrapper, h ? c._positionColumnResizeHandleTouch(t) : c._positionColumnResizeHandle(t), c.resizable && c.resizable.destroy(), c.resizable = new dt.Resizable(t.add(c.lockedHeader), {
                        handle: (d.scrollable ? "" : ">") + ".k-resize-handle",
                        hint: function (t) {
                            return e('<div class="k-grid-resize-indicator" />').css({
                                height: t.data("th").outerHeight() + c.tbody.attr("clientHeight")
                            })
                        },
                        start: function (t) {
                            var u, f, p, g;
                            l = e(t.currentTarget).data("th"), h && c._hideResizeHandle(), u = l.closest("table"), f = e.inArray(l[0], N(l.closest("thead")).filter(":visible")), a = u.parent().hasClass("k-grid-header-locked"), p = a ? c.lockedTable : c.table, g = c.footer || e(), c.footer && c.lockedContent && (g = c.footer.children(a ? ".k-grid-footer-locked" : ".k-grid-footer-wrap")), o(c.wrapper, "col-resize"), s = d.scrollable ? u.find("col:not(.k-group-col):not(.k-hierarchy-col):eq(" + f + ")").add(p.children("colgroup").find("col:not(.k-group-col):not(.k-hierarchy-col):eq(" + f + ")")).add(g.find("colgroup").find("col:not(.k-group-col):not(.k-hierarchy-col):eq(" + f + ")")) : p.children("colgroup").find("col:not(.k-group-col):not(.k-hierarchy-col):eq(" + f + ")"), n = t.x.location, i = l.outerWidth(), r = a ? p.children("tbody").outerWidth() : c.tbody.outerWidth(), wn.webkit && c.wrapper.addClass("k-grid-column-resizing")
                        },
                        resize: function (t) {
                            var o, h, f, p, g, m, v = yn ? -1 : 1,
                                _ = i + t.x.location * v - n * v;
                            d.scrollable ? (a && c.lockedFooter ? o = c.lockedFooter.children("table") : c.footer && (o = c.footer.find(">.k-grid-footer-wrap>table")), o && o[0] || (o = e()), h = l.closest("table"), f = a ? c.lockedTable : c.table, p = !1, g = c.wrapper.width() - u, m = _, a && r - i + m > g && (m = i + (g - r - 2 * u), 0 > m && (m = _), p = !0), m > 10 && (s.css("width", m), r && (m = p ? g - 2 * u : r + t.x.location * v - n * v, f.add(h).add(o).css("width", m), a || (c._footerWidth = m)))) : _ > 10 && s.css("width", _)
                        },
                        resizeend: function () {
                            var e, t, n, r = l.outerWidth();
                            o(c.wrapper, ""), wn.webkit && c.wrapper.removeClass("k-grid-column-resizing"), i != r && (t = c.lockedHeader ? c.lockedHeader.find("thead:first tr:first").add(c.thead.find("tr:first")) : l.parent(), n = l.attr(ct.attr("index")), n || (n = t.find("th:not(.k-group-cell):not(.k-hierarchy-cell)").index(l)), e = O(c.columns)[n], e.width = r, c.trigger(Jt, {
                                column: e,
                                oldWidth: i,
                                newWidth: r
                            }), c._applyLockedContainersWidth(), c._syncLockedContentHeight(), c._syncLockedHeaderHeight()), c._hideResizeHandle(), l = null
                        }
                    }))
                },
                _draggable: function () {
                    var t = this;
                    t.options.reorderable && (t._draggableInstance && t._draggableInstance.destroy(), t._draggableInstance = t.wrapper.kendoDraggable({
                        group: ct.guid(),
                        filter: t.content ? ".k-grid-header:first " + Lt : "table:first>.k-grid-header " + Lt,
                        drag: function () {
                            t._hideResizeHandle()
                        },
                        hint: function (t) {
                            return e('<div class="k-header k-drag-clue" />').css({
                                width: t.width(),
                                paddingLeft: t.css("paddingLeft"),
                                paddingRight: t.css("paddingRight"),
                                lineHeight: t.height() + "px",
                                paddingTop: t.css("paddingTop"),
                                paddingBottom: t.css("paddingBottom")
                            }).html(t.attr(ct.attr("title")) || t.attr(ct.attr("field")) || t.text()).prepend('<span class="k-icon k-drag-status k-denied" />')
                        }
                    }).data("kendoDraggable"))
                },
                _reorderable: function () {
                    var t, n = this;
                    n.options.reorderable && (n.wrapper.data("kendoReorderable") && n.wrapper.data("kendoReorderable").destroy(), t = function (e, t, i) {
                        var o = e[t],
                            r = e[i],
                            a = c(o, n.columns);
                        return e = a ? a.columns : n.columns, xt(r, e)
                    }, n.wrapper.kendoReorderable({
                        draggable: n._draggableInstance,
                        dragOverContainers: function (e, i) {
                            var o = S(n.columns);
                            return o[e].lockable !== !1 && t(o, e, i) > -1
                        },
                        inSameContainer: function (i) {
                            return e(i.source).parent()[0] === e(i.target).parent()[0] && t(S(n.columns), i.sourceIndex, i.targetIndex) > -1
                        },
                        change: function (e) {
                            var i = S(n.columns),
                                o = i[e.oldIndex],
                                r = t(i, e.oldIndex, e.newIndex);
                            n.trigger(en, {
                                newIndex: r,
                                oldIndex: xt(o, i),
                                column: o
                            }), n.reorderColumn(r, o, "before" === e.position)
                        }
                    }))
                },
                _reorderHeader: function (e, t, n) {
                    var i, o, s, l, c = this,
                        d = b(e[0], c.columns),
                        h = b(t, c.columns),
                        u = [];
                    for (i = 0; e.length > i; i++) e[i].columns && (u = u.concat(e[i].columns));
                    o = a(c.lockedHeader, c.thead, "tr:eq(" + d.row + ")>th.k-header:not(.k-group-cell,.k-hierarchy-cell)"), s = B(e).length, l = B([t]).length, u.length ? (s > 0 && 0 === l ? v(e, t, u, c.columns, c.lockedHeader.find("thead"), c.thead, this._groups()) : 0 === s && l > 0 && v(e, t, u, c.columns, c.thead, c.lockedHeader.find("thead"), this._groups()), (t.columns || d.cell - h.cell > 1 || h.cell - d.cell > 1) && (t = k(c.columns, t, e[0], n), t && c._reorderHeader(u, t, n))) : s !== l && m(o[d.cell], c.columns, s), r(o, d.cell, h.cell, n, e.length)
                },
                _reorderContent: function (t, n, i) {
                    var o, s, l, c, d = this,
                        h = e(),
                        u = t[0],
                        f = p(t),
                        g = xt(u, O(d.columns)),
                        m = xt(n, O(d.columns)),
                        v = xt(u, F(d.columns)),
                        _ = xt(n, F(d.columns)),
                        y = B(d.columns).length,
                        w = !!n.locked,
                        b = d.footer || d.wrapper.find(".k-grid-footer"),
                        x = o = _;
                    for (n.hidden && (w ? (_ = d.lockedTable.find("colgroup"), x = d.lockedHeader.find("colgroup"), o = e(d.lockedFooter).find(">table>colgroup")) : (_ = d.tbody.prev(), x = d.thead.prev(), o = b.find(".k-grid-footer-wrap").find(">table>colgroup"))), d._hasFilterRow() && r(d.wrapper.find(".k-filter-row th:not(.k-group-cell,.k-hierarchy-cell)"), g, m, i, t.length), r(a(d.lockedHeader, d.thead.prev(), "col:not(.k-group-col,.k-hierarchy-col)"), v, x, i, f.length), d.options.scrollable && r(a(d.lockedTable, d.tbody.prev(), "col:not(.k-group-col,.k-hierarchy-col)"), v, _, i, f.length), b && b.length && (r(a(d.lockedFooter, b.find(".k-grid-footer-wrap"), ">table>colgroup>col:not(.k-group-col,.k-hierarchy-col)"), v, o, i, f.length), r(b.find(".k-footer-template>td:not(.k-group-cell,.k-hierarchy-cell)"), g, m, i, t.length)), s = d.tbody.children(":not(.k-grouping-row,.k-detail-row)"), d.lockedTable && (y > m ? g >= y && J(d.lockedTable.find(">tbody>tr.k-grouping-row"), d.table.find(">tbody>tr.k-grouping-row"), t.length) : y > g && J(d.table.find(">tbody>tr.k-grouping-row"), d.lockedTable.find(">tbody>tr.k-grouping-row"), t.length), h = d.lockedTable.find(">tbody>tr:not(.k-grouping-row,.k-detail-row)")), l = 0, c = s.length; c > l; l += 1) r(a(h[l], s[l], ">td:not(.k-group-cell,.k-hierarchy-cell)"), g, m, i, t.length)
                },
                _autoFitLeafColumn: function (e) {
                    this.autoFitColumn(O(this.columns)[e])
                },
                autoFitColumn: function (t) {
                    var n, i, o, r, a, s, l, c, d, h, p, g, m, v, _, y, w, b, x = this,
                        k = x.options,
                        C = x.columns,
                        S = x.lockedHeader ? N(x.lockedHeader.find(">table>thead")).filter(u).length : 0,
                        D = "col:not(.k-group-col):not(.k-hierarchy-col)",
                        A = "td:visible:not(.k-group-cell):not(.k-hierarchy-cell)";
                    if (t = "number" == typeof t ? C[t] : vt(t) ? wt(T(C), function (e) {
                            return e === t
                        })[0] : wt(T(C), function (e) {
                            return e.field === t
                        })[0], t && f(t)) {
                        for (n = xt(t, O(C)), r = t.locked, o = r ? x.lockedHeader.children("table") : x.thead.parent(), i = o.find("[data-index='" + n + "']"), s = r ? x.lockedTable : x.table, l = x.footer || e(), x.footer && x.lockedContent && (l = x.footer.children(r ? ".k-grid-footer-locked" : ".k-grid-footer-wrap")), c = l.find("table").first(), x.lockedHeader && !r && (n -= S), d = 0; C.length > d && C[d] !== t; d++) C[d].hidden && n--;
                        if (a = k.scrollable ? o.find(D).eq(n).add(s.children("colgroup").find(D).eq(n)).add(c.find("colgroup").find(D).eq(n)) : s.children("colgroup").find(D).eq(n), h = o.add(s).add(c), p = i.outerWidth(), a.width(""), h.css("table-layout", "fixed"), a.width("auto"), h.addClass("k-autofitting"), h.css("table-layout", ""), g = Math.max(o.width(), s.width(), c.width()), m = Math.ceil(Math.max(i.outerWidth(), s.find("tr").eq(0).children(A).eq(n).outerWidth(), c.find("tr").eq(0).children(A).eq(n).outerWidth())), a.width(m), t.width = m, k.scrollable) {
                            for (v = o.find("col"), y = 0, w = 0, b = v.length; b > w; w += 1) {
                                if (_ = v[w].style.width, !_ || -1 != _.indexOf("%")) {
                                    y = 0;
                                    break
                                }
                                y += parseInt(_, 10)
                            }
                            y && h.each(function () {
                                this.style.width = y + "px"
                            })
                        }
                        wn.msie && 8 == wn.version && (h.css("display", "inline-table"), setTimeout(function () {
                            h.css("display", "table")
                        }, 1)), h.removeClass("k-autofitting"), x.trigger(Jt, {
                            column: t,
                            oldWidth: p,
                            newWidth: m
                        }), x._applyLockedContainersWidth(), x._syncLockedContentHeight(), x._syncLockedHeaderHeight()
                    }
                },
                reorderColumn: function (e, n, i) {
                    var o, r, a = this,
                        s = c(n, a.columns),
                        l = s ? s.columns : a.columns,
                        d = xt(n, l),
                        h = l[e],
                        u = !!h.locked,
                        f = B(a.columns).length;
                    d !== e && (n.locked || !u || 1 != z(a.columns).length) && (!n.locked || u || 1 != f) && (a._hideResizeHandle(), i === t && (i = d > e), r = [n], a._reorderHeader(r, h, i), a.lockedHeader && (E(a.thead), E(a.lockedHeader)), h.columns && (h = O(h.columns), h = h[i ? 0 : h.length - 1]), n.columns && (r = O(n.columns)), a._reorderContent(r, h, i), o = !!n.locked, o = o != u, n.locked = u, l.splice(i ? e : e + 1, 0, n), l.splice(e > d ? d : d + 1, 1), a._templates(), a._updateColumnCellIndex(), a._updateTablesWidth(), a._applyLockedContainersWidth(), a._syncLockedHeaderHeight(), a._syncLockedContentHeight(), a._updateFirstColumnClass(), o && (u ? a.trigger(tn, {
                        column: n
                    }) : a.trigger(nn, {
                        column: n
                    })))
                },
                _updateColumnCellIndex: function () {
                    var e, t = 0;
                    this.lockedHeader && (e = this.lockedHeader.find("thead"), t = _(e, B(this.columns))), _(this.thead, z(this.columns), t)
                },
                lockColumn: function (e) {
                    var t, n = this.columns;
                    e = "number" == typeof e ? n[e] : wt(n, function (t) {
                        return t.field === e
                    })[0], !e || e.locked || e.hidden || (t = B(n).length - 1, this.reorderColumn(t, e, !1))
                },
                unlockColumn: function (e) {
                    var t, n = this.columns;
                    e = "number" == typeof e ? n[e] : wt(n, function (t) {
                        return t.field === e
                    })[0], e && e.locked && !e.hidden && (t = B(n).length, this.reorderColumn(t, e, !0))
                },
                cellIndex: function (t) {
                    var n = 0;
                    return this.lockedTable && !e.contains(this.lockedTable[0], t[0]) && (n = O(B(this.columns)).length), e(t).parent().children("td:not(.k-group-cell,.k-hierarchy-cell)").index(t) + n
                },
                _modelForContainer: function (t) {
                    t = e(t), t.is("tr") || "popup" === this._editMode() || (t = t.closest("tr"));
                    var n = t.attr(ct.attr("uid"));
                    return this.dataSource.getByUid(n)
                },
                _editable: function () {
                    var t, n = this,
                        i = n.selectable && n.selectable.options.multiple,
                        o = n.options.editable,
                        r = function () {
                            var t = pt(),
                                i = n._editContainer;
                            !i || e.contains(i[0], t) || i[0] === t || e(t).closest(".k-animation-container").length || n.editable.end() && n.closeCell()
                        };
                    o && (t = n._editMode(), "incell" === t ? o.update !== !1 && n.wrapper.on(on + Rt, "tr:not(.k-grouping-row) > td", function (t) {
                        var o = e(this),
                            r = n.lockedTable && o.closest("table")[0] === n.lockedTable[0];
                        o.hasClass("k-hierarchy-cell") || o.hasClass("k-detail-cell") || o.hasClass("k-group-cell") || o.hasClass("k-edit-cell") || o.has("a.k-grid-delete").length || o.has("button.k-grid-delete").length || o.closest("tbody")[0] !== n.tbody[0] && !r || e(t.target).is(":input") || (n.editable ? n.editable.end() && (i && e(pt()).blur(), n.closeCell(), n.editCell(o)) : n.editCell(o))
                    }).on("focusin" + Rt, function () {
                        e.contains(this, pt()) || (clearTimeout(n.timer), n.timer = null)
                    }).on("focusout" + Rt, function () {
                        n.timer = setTimeout(r, 1)
                    }) : o.update !== !1 && n.wrapper.on(on + Rt, "tbody>tr:not(.k-detail-row,.k-grouping-row):visible a.k-grid-edit", function (t) {
                        t.preventDefault(), n.editRow(e(this).closest("tr"))
                    }), o.destroy !== !1 ? n.wrapper.on(on + Rt, "tbody>tr:not(.k-detail-row,.k-grouping-row):visible .k-grid-delete", function (t) {
                        t.preventDefault(), t.stopPropagation(), n.removeRow(e(this).closest("tr"))
                    }) : n.wrapper.on(on + Rt, "tbody>tr:not(.k-detail-row,.k-grouping-row):visible button.k-grid-delete", function (e) {
                        e.stopPropagation(), n._confirmation() || e.preventDefault()
                    }))
                },
                editCell: function (t) {
                    var n, i, o, r;
                    t = e(t), n = this, i = O(n.columns)[n.cellIndex(t)], o = n._modelForContainer(t), n.closeCell(), !o || o.editable && !o.editable(i.field) || i.command || !i.field || (n._attachModelChange(o), n._editContainer = t, n.editable = t.addClass("k-edit-cell").kendoEditable({
                        fields: {
                            field: i.field,
                            format: i.format,
                            editor: i.editor,
                            values: i.values
                        },
                        model: o,
                        target: n,
                        change: function (e) {
                            n.trigger(Ot, {
                                values: e.values,
                                container: t,
                                model: o
                            }) && e.preventDefault()
                        }
                    }).data("kendoEditable"), r = t.parent().addClass("k-grid-edit-row"), n.lockedContent && nt(r[0], n._relatedRow(r).addClass("k-grid-edit-row")[0]), n.trigger(Ft, {
                        container: t,
                        model: o
                    }))
                },
                _adjustLockedHorizontalScrollBar: function () {
                    var e = this.table,
                        t = e.parent(),
                        n = e[0].offsetWidth > t[0].clientWidth ? ct.support.scrollbar() : 0;
                    this.lockedContent.height(t.height() - n)
                },
                _syncLockedContentHeight: function () {
                    this.lockedTable && (this.touchScroller || this._adjustLockedHorizontalScrollBar(), this._adjustRowsHeight(this.table, this.lockedTable))
                },
                _syncLockedHeaderHeight: function () {
                    var e, t;
                    this.lockedHeader && (e = this.lockedHeader.children("table"), t = this.thead.parent(), this._adjustRowsHeight(e, t), tt(e, t))
                },
                _syncLockedFooterHeight: function () {
                    this.lockedFooter && this.footer && this.footer.length && this._adjustRowsHeight(this.lockedFooter.children("table"), this.footer.find(".k-grid-footer-wrap > table"))
                },
                _destroyEditable: function () {
                    var e = this,
                        t = function () {
                            if (e.editable) {
                                var t = e.editView ? e.editView.element : e._editContainer;
                                t && (t.off(on + Rt, "a.k-grid-cancel", e._editCancelClickHandler), t.off(on + Rt, "a.k-grid-update", e._editUpdateClickHandler)), e._detachModelChange(), e.editable.destroy(), e.editable = null, e._editContainer = null, e._destroyEditView()
                            }
                        };
                    e.editable && ("popup" !== e._editMode() || e._isMobile ? t() : e._editContainer.data("kendoWindow").bind("deactivate", t).close()), e._actionSheet && (e._actionSheet.destroy(), e._actionSheet = null)
                },
                _destroyEditView: function () {
                    this.editView && (this.editView.purge(), this.editView = null, this.pane.navigate(""))
                },
                _attachModelChange: function (e) {
                    var t = this;
                    t._modelChangeHandler = function (e) {
                        t._modelChange({
                            field: e.field,
                            model: this
                        })
                    }, e.bind("change", t._modelChangeHandler)
                },
                _detachModelChange: function () {
                    var e = this,
                        t = e._editContainer,
                        n = e._modelForContainer(t);
                    n && n.unbind(Wt, e._modelChangeHandler)
                },
                closeCell: function (t) {
                    var n, i, o, r, a = this,
                        s = a._editContainer;
                    s && (n = s.closest("tr").attr(ct.attr("uid")), r = a.dataSource.getByUid(n), t && a.trigger("cancel", {
                        container: s,
                        model: r
                    }) || (s.removeClass("k-edit-cell"), i = O(a.columns)[a.cellIndex(s)], o = s.parent().removeClass("k-grid-edit-row"), a._destroyEditable(), a._displayCell(s, i, r), s.hasClass("k-dirty-cell") && e('<span class="k-dirty"/>').prependTo(s), a.lockedContent && nt(o.css("height", "")[0], a._relatedRow(o).css("height", "")[0])))
                },
                _displayCell: function (e, t, n) {
                    var i = this,
                        o = {
                            storage: {},
                            count: 0
                        }, r = _t({}, ct.Template, i.options.templateSettings),
                        a = ct.template(i._cellTmpl(t, o), r);
                    o.count > 0 && (a = Ct(a, o.storage)), e.empty().html(a(n)), i.angular("compile", function () {
                        return {
                            elements: e,
                            data: [{
                                dataItem: n
                            }]
                        }
                    })
                },
                removeRow: function (e) {
                    this._confirmation(e) && this._removeRow(e)
                },
                _removeRow: function (t) {
                    var n, i = this,
                        o = i._editMode();
                    "incell" !== o && i.cancelRow(), t = e(t).hide(), n = i._modelForContainer(t), n && !i.trigger(Nt, {
                        row: t,
                        model: n
                    }) ? (i.dataSource.remove(n), ("inline" === o || "popup" === o) && i.dataSource.sync()) : "incell" === o && i._destroyEditable()
                },
                _editMode: function () {
                    var e = "incell",
                        t = this.options.editable;
                    return t !== !0 && (e = "string" == typeof t ? t : t.mode || e), e
                },
                editRow: function (n) {
                    var i, o, r, a = this;
                    n instanceof ct.data.ObservableObject ? i = n : (n = e(n), i = a._modelForContainer(n)), o = a._editMode(), a.cancelRow(), i && (a._attachModelChange(i), "popup" === o ? a._createPopupEditor(i) : "inline" === o ? a._createInlineEditor(n, i) : "incell" === o && e(n).children(Mt).each(function () {
                        var n = e(this),
                            o = O(a.columns)[n.index()];
                        return i = a._modelForContainer(n), i && (!i.editable || i.editable(o.field)) && o.field ? (a.editCell(n), !1) : t
                    }), r = a.editView ? a.editView.element : a._editContainer, r && (this._editCancelClickHandler || (this._editCancelClickHandler = Ct(this._editCancelClick, this)), r.on(on + Rt, "a.k-grid-cancel", this._editCancelClickHandler), this._editUpdateClickHandler || (this._editUpdateClickHandler = Ct(this._editUpdateClick, this)), r.on(on + Rt, "a.k-grid-update", this._editUpdateClickHandler)))
                },
                _editUpdateClick: function (e) {
                    e.preventDefault(), e.stopPropagation(), this.saveRow()
                },
                _editCancelClick: function (t) {
                    var n, i = this,
                        o = i.options.navigatable,
                        r = i.editable.options.model,
                        a = i.editView ? i.editView.element : i._editContainer;
                    t.preventDefault(), t.stopPropagation(), i.trigger("cancel", {
                        container: a,
                        model: r
                    }) || (n = i.items().index(e(i.current()).parent()), i.cancelRow(), o && (i.current(i.items().eq(n).children().filter(Bt).first()), ot(i.table, !0)))
                },
                _createPopupEditor: function (n) {
                    var i, o, r, a, s, l, c, d, h, u, f, p = this,
                        g = "<div " + ct.attr("uid") + '="' + n.uid + '" class="k-popup-edit-form' + (p._isMobile ? " k-mobile-list" : "") + '"><div class="k-edit-form-container">',
                        m = [],
                        v = O(p.columns),
                        _ = p.options.editable,
                        y = _.template,
                        w = vt(_) ? _.window : {}, b = _t({}, ct.Template, p.options.templateSettings);
                    if (w = w || {}, y)
                        for (typeof y === ln && (y = window.unescape(y)), g += ct.template(y, b)(n), r = 0, a = v.length; a > r; r++) i = v[r], i.command && (d = it(i.command, "edit"), d && (o = d));
                    else
                        for (r = 0, a = v.length; a > r; r++) i = v[r], i.command ? i.command && (d = it(i.command, "edit"), d && (o = d)) : (g += '<div class="k-edit-label"><label for="' + i.field + '">' + (i.title || i.field || "") + "</label></div>", n.editable && !n.editable(i.field) || !i.field ? (u = {
                            storage: {},
                            count: 0
                        }, s = ct.template(p._cellTmpl(i, u), b), u.count > 0 && (s = Ct(s, u.storage)), g += '<div class="k-edit-field">' + s(n) + "</div>") : (m.push({
                            field: i.field,
                            format: i.format,
                            editor: i.editor,
                            values: i.values
                        }), g += "<div " + ct.attr("container-for") + '="' + i.field + '" class="k-edit-field"></div>'));
                    o && vt(o) && (o.text && vt(o.text) && (l = o.text.update, c = o.text.cancel), o.attr && (h = o.attr)), p._isMobile ? (g += "</div></div>", p.editView = p.pane.append("<div data-" + ct.ns + 'role="view" data-' + ct.ns + 'init-widgets="false" class="k-grid-edit-form"><div data-' + ct.ns + 'role="header" class="k-header">' + p._createButton({
                        name: "update",
                        text: l,
                        attr: h
                    }) + (w.title || "Edit") + p._createButton({
                        name: "canceledit",
                        text: c,
                        attr: h
                    }) + "</div>" + g + "</div>"), f = p._editContainer = p.editView.element.find(".k-popup-edit-form")) : (g += '<div class="k-edit-buttons k-state-default">', g += p._createButton({
                        name: "update",
                        text: l,
                        attr: h
                    }) + p._createButton({
                        name: "canceledit",
                        text: c,
                        attr: h
                    }), g += "</div></div></div>", f = p._editContainer = e(g).appendTo(p.wrapper).eq(0).kendoWindow(_t({
                        modal: !0,
                        resizable: !1,
                        draggable: !0,
                        title: "Edit",
                        visible: !1,
                        close: function (i) {
                            if (i.userTriggered) {
                                if (i.sender.element.focus(), p.trigger("cancel", {
                                        container: f,
                                        model: n
                                    })) return i.preventDefault(), t;
                                var o = p.items().index(e(p.current()).parent());
                                p.cancelRow(), p.options.navigatable && (p.current(p.items().eq(o).children().filter(Bt).first()), ot(p.table, !0))
                            }
                        }
                    }, w))), p.editable = p._editContainer.kendoEditable({
                        fields: m,
                        model: n,
                        clearContainer: !1,
                        target: p
                    }).data("kendoEditable"), p._isMobile && f.find("input[type=checkbox],input[type=radio]").parent(".k-edit-field").addClass("k-check").prev(".k-edit-label").addClass("k-check").click(function () {
                        e(this).next().children("input").click()
                    }), p._openPopUpEditor(), p.trigger(Ft, {
                        container: f,
                        model: n
                    })
                },
                _openPopUpEditor: function () {
                    this._isMobile ? this.pane.navigate(this.editView, this._editAnimation) : this._editContainer.data("kendoWindow").center().open()
                },
                _createInlineEditor: function (t, n) {
                    var i, o, r, a = this,
                        s = [];
                    a.lockedContent && (t = t.add(a._relatedRow(t))), t.children(":not(.k-group-cell,.k-hierarchy-cell)").each(function () {
                        if (o = e(this), i = O(a.columns)[a.cellIndex(o)], i.command || !i.field || n.editable && !n.editable(i.field)) {
                            if (i.command && (r = it(i.command, "edit"))) {
                                o.empty();
                                var t, l, c;
                                vt(r) && (r.text && vt(r.text) && (t = r.text.update, l = r.text.cancel), r.attr && (c = r.attr)), e(a._createButton({
                                    name: "update",
                                    text: t,
                                    attr: c
                                }) + a._createButton({
                                    name: "canceledit",
                                    text: l,
                                    attr: c
                                })).appendTo(o)
                            }
                        } else s.push({
                            field: i.field,
                            format: i.format,
                            editor: i.editor,
                            values: i.values
                        }), o.attr(ct.attr("container-for"), i.field), o.empty()
                    }), a._editContainer = t, a.editable = new ct.ui.Editable(t.addClass("k-grid-edit-row"), {
                        target: a,
                        fields: s,
                        model: n,
                        clearContainer: !1
                    }), t.length > 1 && (nt(t[0], t[1]), a._applyLockedContainersWidth()), a.trigger(Ft, {
                        container: t,
                        model: n
                    })
                },
                cancelRow: function () {
                    var e, t = this,
                        n = t._editContainer;
                    n && (e = t._modelForContainer(n), t._destroyEditable(), t.dataSource.cancelChanges(e), t._displayRow("popup" !== t._editMode() ? n : t.tbody.find("[" + ct.attr("uid") + "=" + e.uid + "]")))
                },
                saveRow: function () {
                    var e = this,
                        t = e._editContainer,
                        n = e._modelForContainer(t),
                        i = e.editable;
                    t && i && i.end() && !e.trigger(Ot, {
                        container: t,
                        model: n
                    }) && e.dataSource.sync()
                },
                _displayRow: function (t) {
                    var n, i, o, r = this,
                        a = r._modelForContainer(t),
                        s = t.hasClass("k-state-selected"),
                        l = t.hasClass("k-alt");
                    a && (r.lockedContent && (n = e((l ? r.lockedAltRowTemplate : r.lockedRowTemplate)(a)), r._relatedRow(t.last()).replaceWith(n)), r.angular("cleanup", function () {
                        return {
                            elements: t.get()
                        }
                    }), i = e((l ? r.altRowTemplate : r.rowTemplate)(a)), t.replaceWith(i), r.angular("compile", function () {
                        return {
                            elements: i.get(),
                            data: [{
                                dataItem: a
                            }]
                        }
                    }), s && r.options.selectable && r.select(i.add(n)), n && nt(i[0], n[0]), o = i.next(), o.hasClass("k-detail-row") && o.is(":visible") && i.find(".k-hierarchy-cell .k-icon").removeClass("k-plus").addClass("k-minus"))
                },
                _showMessage: function (t, n) {
                    var i, o, r, a = this;
                    return a._isMobile ? (i = ct.template('<ul><li class="km-actionsheet-title">#:title#</li><li><a href="\\#" class="k-button k-grid-delete">#:confirmDelete#</a></li></ul>'), o = e(i(t)).appendTo(a.view.element), r = a._actionSheet = new ct.mobile.ui.ActionSheet(o, {
                        cancel: t.cancelDelete,
                        cancelTemplate: '<li class="km-actionsheet-cancel"><a class="k-button" href="\\#">#:cancel#</a></li>',
                        close: function () {
                            this.destroy()
                        },
                        command: function (t) {
                            var i = e(t.currentTarget).parent();
                            i.hasClass("km-actionsheet-cancel") || a._removeRow(n)
                        },
                        popup: a._actionSheetPopupOptions
                    }), r.open(n), !1) : window.confirm(t.title)
                },
                _confirmation: function (e) {
                    var t = this,
                        n = t.options.editable,
                        i = n === !0 || typeof n === ln ? t.options.messages.editable.confirmation : n.confirmation;
                    return i !== !1 && null != i ? (typeof i === sn && (i = i(t._modelForContainer(e))), t._showMessage({
                        confirmDelete: n.confirmDelete || t.options.messages.editable.confirmDelete,
                        cancelDelete: n.cancelDelete || t.options.messages.editable.cancelDelete,
                        title: i === !0 ? t.options.messages.editable.confirmation : i
                    }, e)) : !0
                },
                cancelChanges: function () {
                    this.dataSource.cancelChanges()
                },
                saveChanges: function () {
                    var e = this;
                    (e.editable && e.editable.end() || !e.editable) && !e.trigger(qt) && e.dataSource.sync()
                },
                addRow: function () {
                    var e, t, n, i, o, r, a = this,
                        s = a.dataSource,
                        l = a._editMode(),
                        c = a.options.editable.createAt || "",
                        d = s.pageSize(),
                        h = s.view() || [];
                    (a.editable && a.editable.end() || !a.editable) && ("incell" != l && a.cancelRow(), e = s.indexOf(h[0]), "bottom" == c.toLowerCase() && (e += h.length, d && !s.options.serverPaging && h.length >= d && (e -= 1)), 0 > e && (e = s.page() > s.totalPages() ? (s.page() - 1) * d : 0), t = s.insert(e, {}), n = t.uid, i = a.lockedContent ? a.lockedTable : a.table, o = i.find("tr[" + ct.attr("uid") + "=" + n + "]"), r = o.children("td:not(.k-group-cell,.k-hierarchy-cell)").eq(a._firstEditableColumnIndex(o)), "inline" === l && o.length ? a.editRow(o) : "popup" === l ? a.editRow(t) : r.length && a.editCell(r), "bottom" == c.toLowerCase() && a.lockedContent && (a.lockedContent[0].scrollTop = a.content[0].scrollTop = a.content[0].offsetHeight))
                },
                _firstEditableColumnIndex: function (e) {
                    var t, n, i, o = this,
                        r = O(o.columns),
                        a = o._modelForContainer(e);
                    for (n = 0, i = r.length; i > n; n++)
                        if (t = r[n], a && (!a.editable || a.editable(t.field)) && !t.command && t.field && t.hidden !== !0) return n;
                    return -1
                },
                _toolbar: function () {
                    var t, n = this,
                        i = n.wrapper,
                        o = n.options.toolbar,
                        r = n.options.editable;
                    o && (t = n.wrapper.find(".k-grid-toolbar"), t.length || (St(o) || (o = typeof o === ln ? o : n._toolbarTmpl(o).replace(pn, "\\#"), o = Ct(ct.template(o), n)), t = e('<div class="k-header k-grid-toolbar" />').html(o({})).prependTo(i), n.angular("compile", function () {
                        return {
                            elements: t.get()
                        }
                    })), r && r.create !== !1 && t.on(on + Rt, ".k-grid-add", function (e) {
                        e.preventDefault(), n.addRow()
                    }).on(on + Rt, ".k-grid-cancel-changes", function (e) {
                        e.preventDefault(), n.cancelChanges()
                    }).on(on + Rt, ".k-grid-save-changes", function (e) {
                        e.preventDefault(), n.saveChanges()
                    }), t.on(on + Rt, ".k-grid-excel", function (e) {
                        e.preventDefault(), n.saveAsExcel()
                    }), t.on(on + Rt, ".k-grid-pdf", function (e) {
                        e.preventDefault(), n.saveAsPDF()
                    }))
                },
                _toolbarTmpl: function (e) {
                    var t, n, i = this,
                        o = "";
                    if (bt(e))
                        for (t = 0, n = e.length; n > t; t++) o += i._createButton(e[t]);
                    return o
                },
                _createButton: function (e) {
                    var n, o = e.template || _n,
                        r = typeof e === ln ? e : e.name || e.text,
                        a = Cn[r] ? Cn[r].className : "k-grid-" + (r || "").replace(/\s/g, ""),
                        s = {
                            className: a,
                            text: r,
                            imageClass: "",
                            attr: "",
                            iconClass: ""
                        }, l = this.options.messages.commands;
                    if (!(r || vt(e) && e.template)) throw Error("Custom commands should have name specified");
                    return vt(e) ? (e.className && xt(s.className, e.className.split(" ")) < 0 ? e.className += " " + s.className : e.className === t && (e.className = s.className), "edit" === r && vt(e.text) && (e = _t(!0, {}, e), e.text = e.text.edit), e.attr && (vt(e.attr) && (e.attr = i(e.attr)), typeof e.attr === ln && (n = e.attr.match(/class="(.+?)"/), n && xt(n[1], e.className.split(" ")) < 0 && (e.className += " " + n[1]))), s = _t(!0, s, Cn[r], {
                        text: l[r]
                    }, e)) : s = _t(!0, s, Cn[r], {
                        text: l[r]
                    }), ct.template(o)(s)
                },
                _hasFooters: function () {
                    return !!this.footerTemplate || !!this.groupFooterTemplate || this.footer && this.footer.length > 0 || this.wrapper.find(".k-grid-footer").length > 0
                },
                _groupable: function () {
                    var t = this;
                    t._groupableClickHandler ? t.table.add(t.lockedTable).off(on + Rt, t._groupableClickHandler) : t._groupableClickHandler = function (n) {
                        var i = e(this),
                            o = i.closest("tr");
                        i.hasClass("k-i-collapse") ? t.collapseGroup(o) : t.expandGroup(o), n.preventDefault(), n.stopPropagation()
                    }, t._isLocked() ? t.lockedTable.on(on + Rt, ".k-grouping-row .k-i-collapse, .k-grouping-row .k-i-expand", t._groupableClickHandler) : t.table.on(on + Rt, ".k-grouping-row .k-i-collapse, .k-grouping-row .k-i-expand", t._groupableClickHandler), t._attachGroupable()
                },
                _attachGroupable: function () {
                    var t = this,
                        n = t.wrapper,
                        i = t.options.groupable,
                        o = Lt + "[" + ct.attr("field") + "]",
                        r = t.content ? ".k-grid-header:first " + o : "table:first>.k-grid-header " + o;
                    i && i.enabled !== !1 && (n.has("div.k-grouping-header")[0] || e("<div>&nbsp;</div>").addClass("k-grouping-header").prependTo(n), t.groupable && t.groupable.destroy(), t.groupable = new ut(n, _t({}, i, {
                        draggable: t._draggableInstance,
                        groupContainer: ">div.k-grouping-header",
                        dataSource: t.dataSource,
                        draggableElements: r,
                        filter: r,
                        allowDrag: t.options.reorderable
                    })))
                },
                _continuousItems: function (t, n) {
                    var i, o, r, a, s, l, c, d;
                    if (this.lockedContent) {
                        for (i = this, o = i.table.add(i.lockedTable), r = e(t, o[0]), a = e(t, o[1]), s = n ? B(i.columns).length : 1, l = n ? i.columns.length - s : 1, c = [], d = 0; r.length > d; d += s) kt.apply(c, r.slice(d, d + s)), kt.apply(c, a.splice(0, l));
                        return c
                    }
                },
                _selectable: function () {
                    var n, i, o, r, a = this,
                        s = [],
                        l = a._isLocked(),
                        c = a.options.selectable;
                    c && (a.selectable && a.selectable.destroy(), c = ct.ui.Selectable.parseOptions(c), n = c.multiple, i = c.cell, a._hasDetails() && (s[s.length] = ".k-detail-row"), (a.options.groupable || a._hasFooters()) && (s[s.length] = ".k-grouping-row,.k-group-footer"), s = s.join(","), "" !== s && (s = ":not(" + s + ")"), o = a.table, l && (o = o.add(a.lockedTable)), r = ">" + (i ? Et : "tbody>tr" + s), a.selectable = new ct.ui.Selectable(o, {
                        filter: r,
                        aria: !0,
                        multiple: n,
                        change: function () {
                            a.trigger(Wt)
                        },
                        useAllItems: l && n && i,
                        relatedTarget: function (t) {
                            var n, o, r, s;
                            if (!i && l) {
                                for (o = e(), r = 0, s = t.length; s > r; r++) n = a._relatedRow(t[r]), xt(n[0], t) < 0 && (o = o.add(n));
                                return o
                            }
                        },
                        continuousItems: function () {
                            return a._continuousItems(r, i)
                        }
                    }), a.options.navigatable && o.on("keydown" + Rt, function (r) {
                        var s = a.current(),
                            c = r.target;
                        if (r.keyCode === mt.SPACEBAR && e.inArray(c, o) > -1 && !s.is(".k-edit-cell,.k-header") && s.parent().is(":not(.k-grouping-row,.k-detail-row,.k-group-footer)")) {
                            if (r.preventDefault(), r.stopPropagation(), s = i ? s : s.parent(), l && !i && (s = s.add(a._relatedRow(s))), n)
                                if (r.ctrlKey) {
                                    if (s.hasClass(Kt)) return s.removeClass(Kt), a.trigger(Wt), t
                                } else a.selectable.clear();
                            else a.selectable.clear();
                            a.selectable.value(s)
                        }
                    }))
                },
                _clipboard: function () {
                    var e, t = this.options,
                        n = t.selectable;
                    n && t.allowCopy && (e = this, t.navigatable || e.table.add(e.lockedTable).attr("tabindex", 0).on("mousedown" + Rt + " keydown" + Rt, ".k-detail-cell", function (e) {
                        e.target !== e.currentTarget && e.stopImmediatePropagation()
                    }).on("mousedown" + Rt, It + ">" + Bt, Ct(rt, e)), e.copyHandler = Ct(e.copySelection, e), e.updateClipBoardState = function () {
                        e.areaClipBoard && e.areaClipBoard.val(e.getTSV()).focus().select()
                    }, e.bind("change", e.updateClipBoardState), e.wrapper.on("keydown", e.copyHandler), e.clearAreaHandler = Ct(e.clearArea, e), e.wrapper.on("keyup", e.clearAreaHandler))
                },
                copySelection: function (t) {
                    t instanceof jQuery.Event && !t.ctrlKey && !t.metaKey || e(t.target).is("input:visible,textarea:visible") || window.getSelection && "" + window.getSelection() || document.selection && document.selection.createRange().text || (this.areaClipBoard || (this.areaClipBoard = e("<textarea />").css({
                        position: "fixed",
                        top: "50%",
                        left: "50%",
                        opacity: 0,
                        width: 0,
                        height: 0
                    }).appendTo(this.wrapper)), this.areaClipBoard.val(this.getTSV()).focus().select())
                },
                getTSV: function () {
                    var t, n, i, o, r, a, s = this,
                        l = s.select(),
                        c = "	",
                        d = s.options.allowCopy,
                        h = !0;
                    return e.isPlainObject(d) && d.delimeter && (c = d.delimeter), t = "", l.length && (l.eq(0).is("tr") && (l = l.find("td:not(.k-group-cell)")), h && l.filter(":visible"), n = [], i = this.columns.length, o = s._isLocked() && B(s.columns).length, r = !0, e.each(l, function (t, a) {
                        var l, c, d, u;
                        a = e(a), l = a.closest("tr"), c = l.index(), d = a.index(), h && (d -= a.prevAll(":hidden").length), o && r && (r = e.contains(s.lockedTable[0], a[0])), s._groups() && r && (d -= s._groups()), d = r ? d : d + o, i > d && (i = d), u = a.text(), n[c] || (n[c] = []), n[c][d] = u
                    }), a = n.length, n = e.each(n, function (e, t) {
                        t && (n[e] = t.slice(i), a > e && (a = e))
                    }), e.each(n.slice(a), function (e, n) {
                        t += n ? n.join(c) + "\r\n" : "\r\n"
                    })), t
                },
                clearArea: function (t) {
                    this.areaClipBoard && t && t.target === this.areaClipBoard[0] && (this.options.navigatable ? e(this.current()).closest("table").focus() : this.table.focus()), this.areaClipBoard && (this.areaClipBoard.remove(), this.areaClipBoard = null)
                },
                _minScreenSupport: function () {
                    var t = this.hideMinScreenCols();
                    t && (thisScreenResizeHandler = Ct(this.hideMinScreenCols, this), e(window).on("resize", thisScreenResizeHandler))
                },
                hideMinScreenCols: function () {
                    var e, n, i, o = this.columns,
                        r = !1,
                        a = window.innerWidth > 0 ? window.innerWidth : screen.width;
                    for (e = 0; o.length > e; e++) n = o[e], i = nScreenWidth, i !== t && null !== i && (r = !0, i > a ? this.hideColumn(n) : this.showColumn(n));
                    return r
                },
                _relatedRow: function (t) {
                    var n, i, o = this.lockedTable;
                    return t = e(t), o ? (n = t.closest(this.table.add(this.lockedTable)), i = n.find(">tbody>tr").index(t), n = n[0] === this.table[0] ? o : this.table, n.find(">tbody>tr").eq(i)) : t
                },
                clearSelection: function () {
                    var e = this;
                    e.selectable.clear(), e.trigger(Wt)
                },
                select: function (n) {
                    var i = this,
                        o = i.selectable;
                    return n = e(n), n.length ? (o.options.multiple || (o.clear(), n = n.first()), i._isLocked() && (n = n.add(n.map(function () {
                        return i._relatedRow(this)
                    }))), o.value(n), t) : o.value()
                },
                _updateCurrentAttr: function (t, n) {
                    var i, o = e(t).data("headerId");
                    e(t).removeClass(Xt).removeAttr("aria-describedby").closest("table").removeAttr("aria-activedescendant"), o ? (o = o.replace(this._cellId, ""), e(t).attr("id", o)) : e(t).removeAttr("id"), n.data("headerId", n.attr("id")).attr("id", this._cellId).addClass(Xt).closest("table").attr("aria-activedescendant", this._cellId), n.closest("tr").hasClass("k-grouping-row") || n.hasClass("k-header") ? n.attr("aria-describedby", this._cellId) : (i = this.columns[this.cellIndex(n)], i && (o = i.headerAttributes.id), n.attr("aria-describedby", o + " " + this._cellId)), this._current = n
                },
                _scrollCurrent: function () {
                    var t, n, i, o, r, a, s = this._current,
                        l = this.options.scrollable;
                    s && l && (t = s.parent(), n = t.closest("table").parent(), i = n.is(".k-grid-content-locked,.k-grid-header-locked"), o = n.is(".k-grid-content-locked,.k-grid-content,.k-virtual-scrollable-wrap"), r = e(this.content).find(">.k-virtual-scrollable-wrap").andSelf().last()[0], o && (l.virtual ? (a = Math.max(xt(t[0], this._items(t.parent())), 0), this._rowVirtualIndex = this.virtualScrollable.itemIndex(a), this.virtualScrollable.scrollIntoView(t)) : this._scrollTo(this._relatedRow(t)[0], r)), this.lockedContent && (this.lockedContent[0].scrollTop = r.scrollTop), i || this._scrollTo(s[0], r))
                },
                current: function (t) {
                    var n = this._current;
                    return t = e(t), t.length && (n && n[0] === t[0] || (this._updateCurrentAttr(n, t), this._scrollCurrent())), this._current
                },
                _removeCurrent: function () {
                    this._current && (this._current.removeClass(Xt), this._current = null)
                },
                _scrollTo: function (t, n) {
                    var i, o = t.tagName.toLowerCase(),
                        r = "td" === o || "th" === o,
                        a = t[r ? "offsetLeft" : "offsetTop"],
                        s = t[r ? "offsetWidth" : "offsetHeight"],
                        l = n[r ? "scrollLeft" : "scrollTop"],
                        c = n[r ? "clientWidth" : "clientHeight"],
                        d = a + s,
                        h = 0,
                        u = 0,
                        f = 0;
                    yn && r && (i = e(t).closest("table")[0], wn.msie ? u = i.offsetLeft : wn.mozilla && (f = i.offsetLeft - ct.support.scrollbar())), l = Math.abs(l + u - f), h = l > a ? a : d > l + c ? c >= s ? d - c : a : l, h = Math.abs(h + u) + f, n[r ? "scrollLeft" : "scrollTop"] = h
                },
                _navigatable: function () {
                    var t, n, i, o = this;
                    o.options.navigatable && (t = o.table.add(o.lockedTable), n = o.thead.parent().add(e(">table", o.lockedHeader)), i = t, o.options.scrollable && (i = i.add(n), n.attr(an, -1)), this._navigatableTables = i, i.off("mousedown" + Rt + " focus" + Rt + " focusout" + Rt + " keydown" + Rt), n.on("keydown" + Rt, Ct(o._openHeaderMenu, o)).find("a.k-link").attr("tabIndex", -1), t.attr(an, Dt.max(t.attr(an) || 0, 0)).on("mousedown" + Rt + " keydown" + Rt, ".k-detail-cell", function (e) {
                        e.target !== e.currentTarget && e.stopImmediatePropagation()
                    }), i.on(ct.support.touch ? "touchstart" + Rt : "mousedown" + Rt, It + ">" + Bt, Ct(rt, o)).on("focus" + Rt, Ct(o._tableFocus, o)).on("focusout" + Rt, Ct(o._tableBlur, o)).on("keydown" + Rt, Ct(o._tableKeyDown, o)))
                },
                _openHeaderMenu: function (e) {
                    e.altKey && e.keyCode == mt.DOWN && (this.current().find(".k-grid-filter, .k-header-column-menu").click(), e.stopImmediatePropagation())
                },
                _setTabIndex: function (e) {
                    this._navigatableTables.attr(an, -1), e.attr(an, 0)
                },
                _tableFocus: function (t) {
                    var n, i;
                    ct.support.touch || (n = this.current(), i = e(t.currentTarget), n && n.is(":visible") ? n.addClass(Xt) : this.current(i.find(zt)), this._setTabIndex(i))
                },
                _tableBlur: function () {
                    var e = this.current();
                    e && e.removeClass(Xt)
                },
                _tableKeyDown: function (n) {
                    var i, o = this.current(),
                        r = this.virtualScrollable && this.virtualScrollable.fetching(),
                        a = e(n.target),
                        s = !n.isDefaultPrevented() && !a.is(":button,a,:input,a>.k-icon");
                    return r ? (n.preventDefault(), t) : (o = o ? o : e(this.lockedTable).add(this.table).find(zt), o.length && (i = !1, s && n.keyCode == mt.UP && (i = this._moveUp(o)), s && n.keyCode == mt.DOWN && (i = this._moveDown(o)), s && n.keyCode == (yn ? mt.LEFT : mt.RIGHT) && (i = this._moveRight(o, n.altKey)), s && n.keyCode == (yn ? mt.RIGHT : mt.LEFT) && (i = this._moveLeft(o, n.altKey)), s && n.keyCode == mt.PAGEDOWN && (i = this._handlePageDown()), s && n.keyCode == mt.PAGEUP && (i = this._handlePageUp()), (n.keyCode == mt.ENTER || n.keyCode == mt.F2) && (i = this._handleEnterKey(o, n.currentTarget, a)), n.keyCode == mt.ESC && (i = this._handleEscKey(o, n.currentTarget)), n.keyCode == mt.TAB && (i = this._handleTabKey(o, n.currentTarget, n.shiftKey)), i && (n.preventDefault(), n.stopPropagation())), t)
                },
                _moveLeft: function (e, t) {
                    var n, i, o = e.parent(),
                        r = o.parent();
                    return t ? this.collapseRow(o) : (i = r.find(It).index(o), n = this._prevHorizontalCell(r, e, i), n[0] || (r = this._horizontalContainer(r), n = this._prevHorizontalCell(r, e, i), n[0] !== e[0] && ot(r.parent(), !0)), this.current(n)), !0
                },
                _moveRight: function (e, t) {
                    var n, i, o = e.parent(),
                        r = o.parent();
                    return t ? this.expandRow(o) : (i = r.find(It).index(o), n = this._nextHorizontalCell(r, e, i), n[0] || (r = this._horizontalContainer(r, !0), n = this._nextHorizontalCell(r, e, i), n[0] !== e[0] && ot(r.parent(), !0)), this.current(n)), !0
                },
                _moveUp: function (e) {
                    var t = e.parent().parent(),
                        n = this._prevVerticalCell(t, e);
                    return n[0] || (t = this._verticalContainer(t, !0), n = this._prevVerticalCell(t, e), n[0] && ot(t.parent(), !0)), this.current(n), !0
                },
                _moveDown: function (e) {
                    var t = e.parent().parent(),
                        n = this._nextVerticalCell(t, e);
                    return n[0] || (t = this._verticalContainer(t), n = this._nextVerticalCell(t, e), n[0] && ot(t.parent(), !0)), this.current(n), !0
                },
                _handlePageDown: function () {
                    return this.options.pageable ? (this.dataSource.page(this.dataSource.page() + 1), !0) : !1
                },
                _handlePageUp: function () {
                    return this.options.pageable ? (this.dataSource.page(this.dataSource.page() - 1), !0) : !1
                },
                _handleTabKey: function (t, n, i) {
                    var o, r = this.options.editable && "incell" == this._editMode();
                    return !r || t.is("th") ? !1 : (o = e(pt()).closest(".k-edit-cell"), o[0] && o[0] !== t[0] && (t = o), o = this._tabNext(t, n, i), o.length ? (this._handleEditing(t, o, o.closest("table")), !0) : !1)
                },
                _handleEscKey: function (t, n) {
                    var i, o = pt(),
                        r = "incell" == this._editMode();
                    return at(t) ? (r ? this.closeCell(!0) : (i = e(t).parent().index(), o && o.blur(), this.cancelRow(), i >= 0 && this.current(this.items().eq(i).children(Bt).first())), wn.msie && 9 > wn.version && document.body.focus(), ot(n, !0), !0) : t.has(o).length ? (ot(n, !0), !0) : !1
                },
                _toggleCurrent: function (e) {
                    var t = e.parent();
                    return t.is(".k-master-row,.k-grouping-row") ? (t.find(".k-icon:first").click(), !0) : !1
                },
                _handleEnterKey: function (t, n, i) {
                    var o, r = this.options.editable,
                        a = i.closest("[role=gridcell]");
                    return i.is("table") || e.contains(t[0], i[0]) || (t = a), t.is("th") ? (t.find(".k-link").click(), !0) : !r && this._toggleCurrent(t) ? !0 : (o = t.find(":kendoFocusable:first"), o[0] && !t.hasClass("k-edit-cell") && t.hasClass("k-state-focused") ? (o.focus(), !0) : r && !i.is(":button,.k-button,textarea") ? (a[0] || (a = t), this._handleEditing(a, !1, n), !0) : !1)
                },
                _nextHorizontalCell: function (e, t, n) {
                    var i, o, r, a = t.nextAll(Mt);
                    return a.length || (i = e.find(It), o = i.index(t.parent()), -1 != o) ? a.first() : t.hasClass("k-header") ? (r = [], I([B(this.columns)[0]], V(i.eq(0).children().first()), r, 0, 0), r[n] ? r[n][0] : t) : t.parent().hasClass("k-filter-row") ? i.last().children(Mt).first() : i.eq(n).children(Mt).first()
                },
                _prevHorizontalCell: function (e, t, n) {
                    var i, o, r, a, s = t.prevAll(Mt);
                    return s.length || (i = e.find(It), o = i.index(t.parent()), -1 != o) ? s.first() : t.hasClass("k-header") ? (r = [], a = B(this.columns), I([a[a.length - 1]], V(i.eq(0).children().last()), r, 0, 0), r[n] ? r[n][0] : t) : t.parent().hasClass("k-filter-row") ? i.last().children(Mt).last() : i.eq(n).children(Mt).last()
                },
                _currentDataIndex: function (e, n) {
                    var i, o = n.attr("data-index");
                    return o ? (i = B(this.columns).length, i && !e.closest("div").hasClass("k-grid-content-locked")[0] ? o - i : o) : t
                },
                _prevVerticalCell: function (t, n) {
                    var i, o = n.parent(),
                        r = t.children(It),
                        a = r.index(o),
                        s = this._currentDataIndex(t, n);
                    if (s || n.hasClass("k-header")) return i = H(n), i.eq(i.length - 2);
                    if (s = o.children(Mt).index(n), o.hasClass("k-filter-row")) return N(t).eq(s);
                    if (-1 == a) {
                        if (o = t.find(".k-filter-row"), !o[0]) return N(t).eq(s)
                    } else o = 0 === a ? e() : r.eq(a - 1);
                    return i = o.children(Mt), i.eq(i.length > s ? s : 0)
                },
                _nextVerticalCell: function (e, n) {
                    var i, o = n.parent(),
                        r = e.children(It),
                        a = r.index(o),
                        s = this._currentDataIndex(e, n);
                    return -1 != a && s === t && n.hasClass("k-header") ? V(n).eq(1) : (s = s ? parseInt(s, 10) : o.children(Mt).index(n), o = r.eq(-1 == a ? 0 : a + n[0].rowSpan), i = o.children(Mt), i.eq(i.length > s ? s : 0))
                },
                _verticalContainer: function (e, t) {
                    var n = e.parent(),
                        i = this._navigatableTables.length,
                        o = Math.floor(i / 2),
                        r = xt(n[0], this._navigatableTables);
                    return t && (o *= -1), r += o, (r >= 0 || i > r) && (n = this._navigatableTables.eq(r)), n.find(t ? "thead" : "tbody")
                },
                _horizontalContainer: function (e, t) {
                    var n, i, o = this._navigatableTables.length;
                    return 2 >= o ? e : (n = e.parent(), i = xt(n[0], this._navigatableTables), i += t ? 1 : -1, !t || 2 != i && i != o ? !t && (1 == i || 0 > i) ? e : this._navigatableTables.eq(i).find("thead, tbody") : e)
                },
                _tabNext: function (e, t, n) {
                    var i = !0,
                        o = n ? e.prevAll(Mt + ":first") : e.nextAll(":visible:first");
                    return o.length || (o = e.parent(), this.lockedTable && (i = n && t == this.lockedTable[0] || !n && t == this.table[0], o = this._relatedRow(o)), i && (o = o[n ? "prevAll" : "nextAll"]("tr:not(.k-grouping-row):not(.k-detail-row):visible:first")), o = o.children(Mt + (n ? ":last" : ":first"))), o
                },
                _handleEditing: function (n, i, o) {
                    var r, a, s = this,
                        l = e(pt()),
                        c = s._editMode(),
                        d = wn.msie,
                        h = d && 9 > wn.version,
                        u = s._editContainer;
                    if (o = e(o), a = "incell" == c ? n.hasClass("k-edit-cell") : n.parent().hasClass("k-grid-edit-row"), s.editable) {
                        if (e.contains(u[0], l[0]) && (wn.opera || h ? l.change().triggerHandler("blur") : (l.blur(), d && l.blur())), !s.editable) return ot(o), t;
                        if (!s.editable.end()) return s.current("incell" == c ? u : u.children().filter(Mt).first()), r = u.find(":kendoFocusable:first")[0], r && r.focus(), t;
                        "incell" == c ? s.closeCell() : (s.saveRow(), a = !0)
                    }
                    i && s.current(i), h && document.body.focus(), ot(o, !0), (!a && !i || i) && ("incell" == c ? s.editCell(s.current()) : s.editRow(s.current().parent()))
                },
                _wrapper: function () {
                    var e = this,
                        t = e.table,
                        n = e.options.height,
                        i = e.element;
                    i.is("div") || (i = i.wrap("<div/>").parent()), e.wrapper = i.addClass("k-grid k-widget"), n && (e.wrapper.css(rn, n), t.css(rn, "auto")), e._initMobile()
                },
                _initMobile: function () {
                    var t, n = this.options,
                        i = this;
                    this._isMobile = n.mobile === !0 && ct.support.mobileOS || "phone" === n.mobile || "tablet" === n.mobile, this._isMobile && (t = this.wrapper.addClass("k-grid-mobile").wrap("<div data-" + ct.ns + 'role="view" data-' + ct.ns + 'init-widgets="false"></div>').parent(), this.pane = ct.mobile.ui.Pane.wrap(t), this.view = this.pane.view(), this._actionSheetPopupOptions = e(document.documentElement).hasClass("km-root") ? {
                        modal: !1
                    } : {
                        align: "bottom center",
                        position: "bottom center",
                        effect: "slideIn:up"
                    }, n.height && this.pane.element.parent().css(rn, n.height), this._editAnimation = "slide", this.view.bind("show", function () {
                        i._isLocked() && (i._updateTablesWidth(), i._applyLockedContainersWidth(), i._syncLockedContentHeight(), i._syncLockedHeaderHeight(), i._syncLockedFooterHeight())
                    }))
                },
                _tbody: function () {
                    var t, n = this,
                        i = n.table;
                    t = i.find(">tbody"), t.length || (t = e("<tbody/>").appendTo(i)), n.tbody = t.attr("role", "rowgroup")
                },
                _scrollable: function () {
                    var t, n, i, o, r = this,
                        a = r.options,
                        s = a.scrollable,
                        l = s !== !0 && s.virtual && !r.virtualScrollable,
                        c = !ct.support.kineticScrollNeeded || l ? ct.support.scrollbar() : 0;
                    s && (t = r.wrapper.children(".k-grid-header"), t[0] || (t = e('<div class="k-grid-header" />').insertBefore(r.table)), t.css(yn ? "padding-left" : "padding-right", s.virtual ? c + 1 : c), n = e('<table role="grid" />'), bn && n.attr("cellspacing", 0), n.width(r.table[0].style.width), n.append(r.thead), t.empty().append(e('<div class="k-grid-header-wrap" />').append(n)), r.content = r.table.parent(), r.content.is(".k-virtual-scrollable-wrap, .km-scroll-container") && (r.content = r.content.parent()), r.content.is(".k-grid-content, .k-virtual-scrollable-wrap") || (r.content = r.table.wrap('<div class="k-grid-content" />').parent()), l && (r.virtualScrollable = new kn(r.content, {
                        dataSource: r.dataSource,
                        itemHeight: function () {
                            return r._averageRowHeight()
                        }
                    })), r.scrollables = t.children(".k-grid-header-wrap"), i = r.wrapper.find(".k-grid-footer"), i.length && (r.scrollables = r.scrollables.add(i.children(".k-grid-footer-wrap"))), s.virtual ? r.content.find(">.k-virtual-scrollable-wrap").unbind("scroll" + Rt).bind("scroll" + Rt, function () {
                        r.scrollables.scrollLeft(this.scrollLeft), r.lockedContent && (r.lockedContent[0].scrollTop = this.scrollTop)
                    }) : (r.content.unbind("scroll" + Rt).bind("scroll" + Rt, function () {
                        r.scrollables.scrollLeft(this.scrollLeft), r.lockedContent && (r.lockedContent[0].scrollTop = this.scrollTop)
                    }), o = r.content.data("kendoTouchScroller"), o && o.destroy(), o = ct.touchScroller(r.content), o && o.movable && (r.touchScroller = o, o.movable.bind("change", function (e) {
                        r.scrollables.scrollLeft(-e.sender.x), r.lockedContent && r.lockedContent.scrollTop(-e.sender.y)
                    }), r.one($t, function (e) {
                        e.sender.wrapper.addClass("k-grid-backface")
                    }))))
                },
                _renderNoRecordsContent: function () {
                    var t, n = this;
                    n.options.noRecords && n.wrapper.is(":visible") && (t = n.table.parent().children("." + Zt), t.length && t.remove(), n.dataSource && n.dataSource.view().length || e(n.noRecordsTemplate({})).appendTo(n.table.parent()))
                },
                _setContentWidth: function (t) {
                    var n, i = this,
                        o = "k-grid-content-expander",
                        r = '<div class="' + o + '"></div>',
                        a = i.resizable;
                    i.options.scrollable && i.wrapper.is(":visible") && (n = i.table.parent().children("." + o), i._setContentWidthHandler = Ct(i._setContentWidth, i), i.dataSource && i.dataSource.view().length ? n[0] && (n.remove(), a && a.unbind("resize", i._setContentWidthHandler)) : (n[0] || (n = e(r).appendTo(i.table.parent()), a && a.bind("resize", i._setContentWidthHandler)), i.thead && (n.width(i.thead.width()), t && i.content.scrollLeft(t))), i._applyLockedContainersWidth())
                },
                _applyLockedContainersWidth: function () {
                    if (this.options.scrollable && this.lockedHeader) {
                        var e, t = this.thead.parent(),
                            n = t.parent(),
                            i = this.wrapper[0].clientWidth,
                            o = this._groups(),
                            r = ct.support.scrollbar(),
                            a = this.lockedHeader.find(">table>colgroup>col:not(.k-group-col, .k-hierarchy-col)"),
                            s = t.find(">colgroup>col:not(.k-group-col, .k-hierarchy-col)"),
                            l = A(a),
                            c = A(s);
                        o > 0 && (l += this.lockedHeader.find(".k-group-cell:first").outerWidth() * o), l >= i && (l = i - 3 * r), this.lockedHeader.add(this.lockedContent).width(l), n[0].style.width = n.parent().width() - l - 2 + "px", t.add(this.table).width(c), this.virtualScrollable && (i -= r), this.content[0].style.width = i - l - 2 + "px", this.lockedFooter && this.lockedFooter.length && (this.lockedFooter.width(l), e = this.footer.find(".k-grid-footer-wrap"), e[0].style.width = n[0].clientWidth + "px", e.children().first().width(c))
                    }
                },
                _setContentHeight: function () {
                    var e, t = this,
                        n = t.options,
                        i = t.wrapper.innerHeight(),
                        o = t.wrapper.children(".k-grid-header"),
                        r = ct.support.scrollbar();
                    n.scrollable && t.wrapper.is(":visible") && (i -= o.outerHeight(), t.pager && (i -= t.pager.element.outerHeight()), n.groupable && (i -= t.wrapper.children(".k-grouping-header").outerHeight()), n.toolbar && (i -= t.wrapper.children(".k-grid-toolbar").outerHeight()), t.footerTemplate && (i -= t.wrapper.children(".k-grid-footer").outerHeight()), e = function (e) {
                        var t, n;
                        return e[0].style.height ? !0 : (t = e.height(), e.height("auto"), n = e.height(), t != n ? (e.height(""), !0) : (e.height(""), !1))
                    }, e(t.wrapper) && (i > 2 * r ? (t.lockedContent && (r = t.table[0].offsetWidth > t.table.parent()[0].clientWidth ? r : 0, t.lockedContent.height(i - r)), t.content.height(i)) : t.content.height(2 * r + 1)))
                },
                _averageRowHeight: function () {
                    var e, t = this,
                        n = t._items(t.tbody).length,
                        i = t._rowHeight;
                    return 0 === n ? i : (t._rowHeight || (t._rowHeight = i = t.table.outerHeight() / n, t._sum = i, t._measures = 1), e = t.table.outerHeight() / n, i !== e && (t._measures++, t._sum += e, t._rowHeight = t._sum / t._measures), i)
                },
                _dataSource: function () {
                    var e, n = this,
                        i = n.options,
                        o = i.dataSource;
                    o = bt(o) ? {
                        data: o
                    } : o, vt(o) && (_t(o, {
                        table: n.table,
                        fields: n.columns
                    }), e = i.pageable, vt(e) && e.pageSize !== t && (o.pageSize = e.pageSize)), n.dataSource && n._refreshHandler ? n.dataSource.unbind(Wt, n._refreshHandler).unbind(At, n._progressHandler).unbind(Pt, n._errorHandler) : (n._refreshHandler = Ct(n.refresh, n), n._progressHandler = Ct(n._requestStart, n), n._errorHandler = Ct(n._error, n)), n.dataSource = ht.create(o).bind(Wt, n._refreshHandler).bind(At, n._progressHandler).bind(Pt, n._errorHandler)
                },
                _error: function () {
                    this._progress(!1)
                },
                _requestStart: function () {
                    this._progress(!0)
                },
                _modelChange: function (t) {
                    var n, i, o, r, a, s, l, c, d, h, u = this,
                        f = u.tbody,
                        p = t.model,
                        g = u.tbody.find("tr[" + ct.attr("uid") + "=" + p.uid + "]"),
                        m = g.hasClass("k-alt"),
                        v = u._items(f).index(g),
                        _ = u.lockedContent;
                    if (_ && (n = u._relatedRow(g)), g.add(n).children(".k-edit-cell").length && !u.options.rowTemplate) g.add(n).children(":not(.k-group-cell,.k-hierarchy-cell)").each(function () {
                        i = e(this), o = O(u.columns)[u.cellIndex(i)], o.field === t.field && (i.hasClass("k-edit-cell") ? i.addClass("k-dirty-cell") : (u._displayCell(i, o, p), e('<span class="k-dirty"/>').prependTo(i)))
                    });
                    else if (!g.hasClass("k-grid-edit-row")) {
                        for (s = e().add(g), _ && (r = (m ? u.lockedAltRowTemplate : u.lockedRowTemplate)(p), s = s.add(n), n.replaceWith(r)), u.angular("cleanup", function () {
                            return {
                                elements: s.get()
                            }
                        }), r = (m ? u.altRowTemplate : u.rowTemplate)(p), g.replaceWith(r), r = u._items(f).eq(v), h = [{
                            dataItem: p
                        }], _ && (g = g.add(n), n = u._relatedRow(r)[0], nt(r[0], n), r = r.add(n), h.push({
                            dataItem: p
                        })), u.angular("compile", function () {
                            return {
                                elements: r.get(),
                                data: h
                            }
                        }), a = u.options.selectable, a && g.hasClass("k-state-selected") && u.select(r), c = s.children(":not(.k-group-cell,.k-hierarchy-cell)"), l = r.children(":not(.k-group-cell,.k-hierarchy-cell)"), v = 0, d = u.columns.length; d > v; v++) o = u.columns[v], i = l.eq(v), a && c.eq(v).hasClass("k-state-selected") && i.addClass("k-state-selected"), o.field === t.field && e('<span class="k-dirty"/>').prependTo(i);
                        u.trigger("itemChange", {
                            item: r,
                            data: p,
                            ns: dt
                        })
                    }
                },
                _pageable: function () {
                    var t, n = this,
                        i = n.options.pageable;
                    i && (t = n.wrapper.children("div.k-grid-pager"), t.length || (t = e('<div class="k-pager-wrap k-grid-pager"/>').appendTo(n.wrapper)), n.pager && n.pager.destroy(), n.pager = "object" == typeof i && i instanceof ct.ui.Pager ? i : new ct.ui.Pager(t, _t({}, i, {
                        dataSource: n.dataSource
                    })))
                },
                _footer: function () {
                    var t, n, i, o, r = this,
                        a = r.dataSource.aggregates(),
                        s = "",
                        l = r.footerTemplate,
                        c = r.options,
                        d = r.footer || r.wrapper.find(".k-grid-footer");
                    l ? (s = e(r._wrapFooter(l(a))), d.length ? (n = s, r.angular("cleanup", function () {
                        return {
                            elements: d.get()
                        }
                    }), d.replaceWith(n), d = r.footer = n) : d = r.footer = c.scrollable ? c.pageable ? s.insertBefore(r.wrapper.children("div.k-grid-pager")) : s.appendTo(r.wrapper) : s.insertBefore(r.tbody), r.angular("compile", function () {
                        return {
                            elements: d.find("td:not(.k-group-cell, .k-hierarchy-cell)").get(),
                            data: yt(r.columns, function (e) {
                                return {
                                    column: e,
                                    aggregate: a[e.field]
                                }
                            })
                        }
                    })) : d && !r.footer && (r.footer = d), d.length && (c.scrollable && (t = d.attr("tabindex", -1).children(".k-grid-footer-wrap"), r.scrollables = r.scrollables.filter(function () {
                        return !e(this).is(".k-grid-footer-wrap")
                    }).add(t)), r._footerWidth && d.find("table").css("width", r._footerWidth), t && (i = r.content.scrollLeft(), o = c.scrollable !== !0 && c.scrollable.virtual && !r.virtualScrollable, o && (i = r.wrapper.find(".k-virtual-scrollable-wrap").scrollLeft()), t.scrollLeft(i))), r.lockedContent && (r._appendLockedColumnFooter(), r._applyLockedContainersWidth(), r._syncLockedFooterHeight())
                },
                _wrapFooter: function (t) {
                    var n = this,
                        i = "",
                        o = ct.support.mobileOS ? 0 : ct.support.scrollbar();
                    return n.options.scrollable ? (i = e('<div class="k-grid-footer"><div class="k-grid-footer-wrap"><table' + (bn ? ' cellspacing="0"' : "") + "><tbody>" + t + "</tbody></table></div></div>"), n._appendCols(i.find("table")), i.css(yn ? "padding-left" : "padding-right", o), i) : '<tfoot class="k-grid-footer">' + t + "</tfoot>"
                },
                _columnMenu: function () {
                    var e, n, i, o, r, a, s, l, c, d = this,
                        h = O(d.columns),
                        u = d.options,
                        f = u.columnMenu,
                        p = wt(d.columns, function (e) {
                                return e.columns !== t
                            }).length > 0,
                        g = this._isMobile,
                        m = function (e) {
                            d.trigger(Ut, {
                                field: e.field,
                                container: e.container
                            })
                        }, v = function (e) {
                            ot(e.closest("table"), !0)
                        }, _ = u.$angular;
                    if (f)
                        for ("boolean" == typeof f && (f = {}), a = N(d.thead), s = 0, l = a.length; l > s; s++) n = h[s], c = a.eq(s), n.command || !n.field && !c.attr("data-" + ct.ns + "field") || (e = c.data("kendoColumnMenu"), e && e.destroy(), o = n.sortable !== !1 && f.sortable !== !1 && u.sortable !== !1 ? _t({}, u.sortable, {
                            compare: (n.sortable || {}).compare
                        }) : !1, r = u.filterable && n.filterable !== !1 && f.filterable !== !1 ? _t({
                            pane: d.pane
                        }, u.filterable, n.filterable) : !1, n.filterable && n.filterable.dataSource && (r.forceUnique = !1, r.checkSource = n.filterable.dataSource), r && (r.format = n.format), i = {
                            dataSource: d.dataSource,
                            values: n.values,
                            columns: f.columns,
                            sortable: o,
                            filterable: r,
                            messages: f.messages,
                            owner: d,
                            closeCallback: v,
                            init: m,
                            pane: d.pane,
                            filter: g ? ":not(.k-column-active)" : "",
                            lockedColumns: !p && n.lockable !== !1 && B(h).length > 0
                        }, _ && (i.$angular = _), c.kendoColumnMenu(i))
                },
                _headerCells: function () {
                    return this.thead.find("th").filter(function () {
                        var t = e(this);
                        return !t.hasClass("k-group-cell") && !t.hasClass("k-hierarchy-cell")
                    })
                },
                _filterable: function () {
                    var e, t, n, i, o, r, a, s = this,
                        l = O(s.columns),
                        c = function (e) {
                            s.trigger(Vt, {
                                field: e.field,
                                container: e.container
                            })
                        }, d = function (e) {
                            ot(e.closest("table"), !0)
                        }, h = s.options.filterable;
                    if (h && typeof h.mode == ln && -1 == h.mode.indexOf("menu") && (h = !1), h && !s.options.columnMenu)
                        for (t = N(s.thead), i = 0, o = t.length; o > i; i++) n = t.eq(i), l[i].filterable === !1 || l[i].command || !l[i].field && !n.attr("data-" + ct.ns + "field") || (e = n.data("kendoFilterMenu"), e && e.destroy(), e = n.data("kendoFilterMultiCheck"), e && e.destroy(), r = l[i].filterable, a = _t({}, h, r, {
                            dataSource: s.dataSource,
                            values: l[i].values,
                            format: l[i].format,
                            closeCallback: d,
                            title: l[i].title || l[i].field,
                            init: c,
                            pane: s.pane
                        }), r && r.messages && (a.messages = _t(!0, {}, h.messages, r.messages)), r && r.dataSource && (a.forceUnique = !1, a.checkSource = r.dataSource), r && r.multi ? n.kendoFilterMultiCheck(a) : n.kendoFilterMenu(a))
                },
                _filterRow: function () {
                    var t, n, i, o, r, a, s, l, c, d, h, u, f = this;
                    if (f._hasFilterRow())
                        for (t = O(f.columns), n = f.options.filterable, i = f.thead.find(".k-filter-row"), this._updateHeader(this.dataSource.group().length), o = 0; t.length > o; o++)
                            if (a = t[o], s = f.options.filterable.operators, l = !1, c = e("<th/>"), d = a.field, a.hidden && c.hide(), i.append(c), d && a.filterable !== !1) {
                                if (h = a.filterable && a.filterable.cell || {}, r = f.options.dataSource, r instanceof ht && (r = f.options.dataSource.options), u = _t(!0, {}, n.messages), a.filterable && _t(!0, u, a.filterable.messages), h.enabled === !1) {
                                    c.html("&nbsp;");
                                    continue
                                }
                                h.dataSource && (r = h.dataSource, l = !0), a.filterable && a.filterable.operators && (s = a.filterable.operators), e("<span/>").attr(ct.attr("field"), d).kendoFilterCell({
                                    dataSource: f.dataSource,
                                    suggestDataSource: r,
                                    customDataSource: l,
                                    field: d,
                                    messages: u,
                                    values: a.values,
                                    template: h.template,
                                    delay: h.delay,
                                    inputWidth: h.inputWidth,
                                    suggestionOperator: h.suggestionOperator,
                                    minLength: hLength,
                                    dataTextField: h.dataTextField,
                                    operator: h.operator,
                                    operators: s,
                                    showOperators: h.showOperators
                                }).appendTo(c)
                            } else c.html("&nbsp;")
                },
                _sortable: function () {
                    var e, t, n, i, o, r, a = this,
                        s = O(a.columns),
                        l = a.options.sortable;
                    if (l) {
                        for (i = N(a.thead), o = 0, r = i.length; r > o; o++) e = s[o], e.sortable !== !1 && !e.command && e.field && (n = i.eq(o), t = n.data("kendoColumnSorter"), t && t.destroy(), n.attr("data-" + ct.ns + "field", e.field).kendoColumnSorter(_t({}, l, e.sortable, {
                            dataSource: a.dataSource,
                            aria: !0,
                            filter: ":not(.k-column-active)"
                        })));
                        i = null
                    }
                },
                _columns: function (t) {
                    var n, i, o, r = this,
                        a = r.table,
                        s = a.find("col"),
                        c = r.options.dataSource;
                    if (t = t.length ? t : yt(a.find("th"), function (t, n) {
                            t = e(t);
                            var i = t.attr(ct.attr("sortable")),
                                o = t.attr(ct.attr("filterable")),
                                r = t.attr(ct.attr("type")),
                                a = t.attr(ct.attr("groupable")),
                                l = t.attr(ct.attr("field")),
                                c = t.attr(ct.attr("title")),
                                d = t.attr(ct.attr("menu"));
                            return l || (l = t.text().replace(/\s|[^A-z0-9]/g, "")), {
                                field: l,
                                type: r,
                                title: c,
                                sortable: "false" !== i,
                                filterable: "false" !== o,
                                groupable: "false" !== a,
                                menu: d,
                                template: t.attr(ct.attr("template")),
                                width: s.eq(n).css("width")
                            }
                        }), n = !(r.table.find("tbody tr").length > 0 && (!c || !c.transport)), r.options.scrollable) {
                        if (o = t, i = B(t), t = z(t), i.length > 0 && 0 === t.length) throw Error("There should be at least one non locked column");
                        q(r.element.find("tr:has(th):first").find("th:not(.k-group-cell)"), o), t = i.concat(t)
                    }
                    r.columns = l(t, n)
                },
                _groups: function () {
                    var e = this.dataSource.group();
                    return e ? e.length : 0
                },
                _tmpl: function (e, t, o, r) {
                    var a, s, l, c, d = this,
                        h = _t({}, ct.Template, d.options.templateSettings),
                        u = t.length,
                        f = {
                            storage: {},
                            count: 0
                        }, p = d._hasDetails(),
                        g = [],
                        m = d._groups();
                    if (!e) {
                        for (e = "<tr", o && g.push("k-alt"), p && g.push("k-master-row"), g.length && (e += ' class="' + g.join(" ") + '"'), u && (e += " " + ct.attr("uid") + '="#=' + ct.expr("uid", h.paramName) + '#"'), e += " role='row'>", m > 0 && !r && (e += n(m)), p && (e += '<td class="k-hierarchy-cell"><a class="k-icon k-plus" href="\\#" tabindex="-1"></a></td>'), a = 0; u > a; a++) l = t[a], s = l.template, c = typeof s, e += "<td" + i(l.attributes) + " role='gridcell'>", e += d._cellTmpl(l, f), e += "</td>";
                        e += "</tr>"
                    }
                    return e = ct.template(e, h), f.count > 0 ? Ct(e, f.storage) : e
                },
                _headerCellText: function (e) {
                    var t = this,
                        n = _t({}, ct.Template, t.options.templateSettings),
                        i = e.headerTemplate,
                        o = typeof i,
                        r = e.title || e.field || "";
                    return o === sn ? r = ct.template(i, n)({}) : o === ln && (r = i), r
                },
                _cellTmpl: function (e, t) {
                    var n, i, o = this,
                        r = _t({}, ct.Template, o.options.templateSettings),
                        a = e.template,
                        s = r.paramName,
                        l = e.field,
                        c = "",
                        d = e.format,
                        h = typeof a,
                        u = e.values;
                    if (e.command) {
                        if (bt(e.command)) {
                            for (n = 0, i = e.command.length; i > n; n++) c += o._createButton(e.command[n]);
                            return c.replace(pn, "\\#")
                        }
                        return o._createButton(e.command).replace(pn, "\\#")
                    }
                    return h === sn ? (t.storage["tmpl" + t.count] = a, c += "#=this.tmpl" + t.count + "(" + s + ")#", t.count++) : h === ln ? c += a : u && u.length && vt(u[0]) && "value" in u[0] && l ? (c += "#var v =" + ct.stringify($(u)).replace(pn, "\\#") + "#", c += "#var f = v[", r.useWithBlock || (c += s + "."), c += l + "]#", c += "${f != null ? f : ''}") : (c += e.encoded ? "#:" : "#=", d && (c += 'kendo.format("' + d.replace(fn, "\\$1") + '",'), l ? (l = ct.expr(l, s), c += l + "==null?'':" + l) : c += "''", d && (c += ")"), c += "#"), c
                },
                _templates: function () {
                    var t = this,
                        n = t.options,
                        i = t.dataSource,
                        o = i.group(),
                        r = t.footer || t.wrapper.find(".k-grid-footer"),
                        a = i.aggregate(),
                        s = O(t.columns),
                        l = O(B(t.columns)),
                        c = n.scrollable ? O(z(t.columns)) : s;
                    if (n.scrollable && l.length) {
                        if (n.rowTemplate || n.altRowTemplate) throw Error("Having both row template and locked columns is not supported");
                        t.rowTemplate = t._tmpl(n.rowTemplate, c, !1, !0), t.altRowTemplate = t._tmpl(n.altRowTemplate || n.rowTemplate, c, !0, !0), t.lockedRowTemplate = t._tmpl(n.rowTemplate, l), t.lockedAltRowTemplate = t._tmpl(n.altRowTemplate || n.rowTemplate, l, !0)
                    } else t.rowTemplate = t._tmpl(n.rowTemplate, c), t.altRowTemplate = t._tmpl(n.altRowTemplate || n.rowTemplate, c, !0);
                    t._hasDetails() && (t.detailTemplate = t._detailTmpl(n.detailTemplate || "")), (t._group && !Tt(a) || !Tt(a) && !r.length || wt(s, function (e) {
                        return e.footerTemplate
                    }).length) && (t.footerTemplate = t._footerTmpl(s, a, "footerTemplate", "k-footer-template")), o && wt(s, function (e) {
                        return e.groupFooterTemplate
                    }).length && (a = e.map(o, function (e) {
                        return e.aggregates
                    }), t.groupFooterTemplate = t._footerTmpl(c, a, "groupFooterTemplate", "k-group-footer", l.length), n.scrollable && l.length && (t.lockedGroupFooterTemplate = t._footerTmpl(l, a, "groupFooterTemplate", "k-group-footer"))), t.options.noRecords && (t.noRecordsTemplate = t._noRecordsTmpl())
                },
                _noRecordsTmpl: function () {
                    var t, n, i, o = '<div class="{0}">{1}</div>',
                        r = '<div class="k-grid-norecords-template">{0}</div>',
                        a = {
                            storage: {},
                            count: 0
                        }, s = e.extend({}, ct.Template, this.options.templateSettings),
                        l = s.paramName,
                        c = "";
                    return t = this.options.noRecords.template ? this.options.noRecords.template : ct.format(r, this.options.messages.noRecords), n = typeof t, "function" === n ? (a.storage["tmpl" + a.count] = t, c += "#=this.tmpl" + a.count + "(" + l + ")#", a.count++) : "string" === n && (c += t), i = ct.template(ct.format(o, Zt, c), s), a.count > 0 && (i = e.proxy(i, a.storage)), i
                },
                _footerTmpl: function (e, t, o, r, a) {
                    var s, l, c, d, h, u = this,
                        f = _t({}, ct.Template, u.options.templateSettings),
                        p = f.paramName,
                        g = "",
                        m = {}, v = 0,
                        _ = {}, y = u._groups(),
                        w = u.dataSource._emptyAggregates(t);
                    for (g += '<tr class="' + r + '">', y > 0 && !a && (g += n(y)), u._hasDetails() && (g += '<td class="k-hierarchy-cell">&nbsp;</td>'), s = 0, l = e.length; l > s; s++) h = e[s], c = h[o], d = typeof c, g += "<td" + i(h.footerAttributes) + ">", c ? (d !== sn && (_ = w[h.field] ? _t({}, f, {
                        paramName: p + "['" + h.field + "']"
                    }) : {}, c = ct.template(c, _)), m["tmpl" + v] = c, g += "#=this.tmpl" + v + "(" + p + ")#", v++) : g += "&nbsp;", g += "</td>";
                    return g += "</tr>", g = ct.template(g, f), v > 0 ? Ct(g, m) : g
                },
                _detailTmpl: function (e) {
                    var t = this,
                        i = "",
                        o = _t({}, ct.Template, t.options.templateSettings),
                        r = o.paramName,
                        a = {}, s = 0,
                        l = t._groups(),
                        c = p(O(t.columns)).length,
                        d = typeof e;
                    return i += '<tr class="k-detail-row">', l > 0 && (i += n(l)), i += '<td class="k-hierarchy-cell"></td><td class="k-detail-cell"' + (c ? ' colspan="' + c + '"' : "") + ">", d === sn ? (a["tmpl" + s] = e, i += "#=this.tmpl" + s + "(" + r + ")#", s++) : i += e, i += "</td></tr>", i = ct.template(i, o), s > 0 ? Ct(i, a) : i
                },
                _hasDetails: function () {
                    var e = this;
                    return null !== e.options.detailTemplate || (e._events[Ht] || []).length
                },
                _hasFilterRow: function () {
                    var t = this.options.filterable,
                        n = t && typeof t.mode == ln && -1 != t.mode.indexOf("row"),
                        i = this.columns,
                        o = e.grep(i, function (e) {
                            return e.filterable === !1
                        });
                    return i.length && o.length == i.length && (n = !1), n
                },
                _details: function () {
                    var t = this;
                    if (t.options.scrollable && t._hasDetails() && B(t.columns).length) throw Error("Having both detail template and locked columns is not supported");
                    t.table.on(on + Rt, ".k-hierarchy-cell .k-plus, .k-hierarchy-cell .k-minus", function (n) {
                        var i, o, r = e(this),
                            a = r.hasClass("k-plus"),
                            s = r.closest("tr.k-master-row"),
                            l = t.detailTemplate,
                            c = t._hasDetails();
                        return r.toggleClass("k-plus", !a).toggleClass("k-minus", a), i = s.next(), c && !i.hasClass("k-detail-row") && (o = t.dataItem(s), i = e(l(o)).addClass(s.hasClass("k-alt") ? "k-alt" : "").insertAfter(s), t.angular("compile", function () {
                            return {
                                elements: i.get(),
                                data: [{
                                    dataItem: o
                                }]
                            }
                        }), t.trigger(Ht, {
                            masterRow: s,
                            detailRow: i,
                            data: o,
                            detailCell: i.find(".k-detail-cell")
                        })), t.trigger(a ? Yt : Qt, {
                            masterRow: s,
                            detailRow: i
                        }), i.toggle(a), t._current && t._current.attr("aria-expanded", a), n.preventDefault(), !1
                    })
                },
                dataItem: function (t) {
                    if (t = e(t)[0], !t) return null;
                    var n, i, o = this.tbody.children(),
                        r = /k-grouping-row|k-detail-row|k-group-footer/,
                        a = t.sectionRowIndex;
                    for (i = a, n = 0; a > n; n++) r.test(o[n].className) && i--;
                    return this._data[i]
                },
                expandRow: function (t) {
                    e(t).find("> td .k-plus, > td .k-i-expand").click()
                },
                collapseRow: function (t) {
                    e(t).find("> td .k-minus, > td .k-i-collapse").click()
                },
                _createHeaderCells: function (e, n) {
                    var o, r, a, s, l, c, d = this,
                        h = "",
                        u = O(d.columns);
                    for (o = 0, s = e.length; s > o; o++) r = e[o].column || e[o], a = d._headerCellText(r), l = "", c = xt(r, u), r.command ? (h += "<th" + i(r.headerAttributes), n && !e[o].colSpan && (h += " rowspan='" + n + "'"), c > -1 && (h += ct.attr("index") + "='" + c + "'"), h += ">" + a + "</th>") : (r.field && (l = ct.attr("field") + "='" + r.field + "' "), h += "<th role='columnheader' " + l, n && !e[o].colSpan && (h += " rowspan='" + n + "'"), e[o].colSpan > 1 && (h += 'colspan="' + (e[o].colSpan - D(r.columns)) + '" ', h += ct.attr("colspan") + "='" + e[o].colSpan + "'"), r.title && (h += ct.attr("title") + '="' + r.title.replace(/'/g, "'") + '" '), r.groupable !== t && (h += ct.attr("groupable") + "='" + r.groupable + "' "), r.aggregates && r.aggregates.length && (h += ct.attr("aggregates") + "='" + r.aggregates + "'"), c > -1 && (h += ct.attr("index") + "='" + c + "'"), h += i(r.headerAttributes), h += ">" + a + "</th>");
                    return h
                },
                _appendLockedColumnContent: function () {
                    var t, n, i, o, r, a = this.columns,
                        s = this.table.find("colgroup"),
                        l = s.find("col:not(.k-group-col,.k-hierarchy-col)"),
                        c = e(),
                        d = 0,
                        h = 0;
                    for (t = 0, n = a.length; n > t; t++)
                        if (a[t].locked)
                            if (f(a[t])) {
                                for (o = 1, a[t].columns && (o = O(a[t].columns).length - D(a[t].columns)), o = o || 1, r = 0; o > r; r++) c = c.add(l.eq(t + h + r - d));
                                h += o - 1
                            } else d++;
                    i = e('<div class="k-grid-content-locked"><table' + (bn ? ' cellspacing="0"' : "") + "><colgroup/><tbody></tbody></table></div>"), s.detach(), i.find("colgroup").append(c), s.insertBefore(this.table.find("tbody")), this.lockedContent = i.insertBefore(this.content), this.lockedTable = i.children("table")
                },
                _appendLockedColumnFooter: function () {
                    var t, n, i = this,
                        o = i.footer,
                        r = o.find(".k-footer-template>td"),
                        a = o.find(".k-grid-footer-wrap>table>colgroup>col"),
                        s = e('<div class="k-grid-footer-locked"><table><colgroup /><tbody><tr class="k-footer-template"></tr></tbody></table></div>'),
                        l = i._groups(),
                        c = e(),
                        d = e();
                    for (c = c.add(r.filter(".k-group-cell")), t = 0, n = O(B(i.columns)).length; n > t; t++) c = c.add(r.eq(t + l));
                    for (d = d.add(a.filter(".k-group-col")), t = 0, n = O(R(i.columns)).length; n > t; t++) d = d.add(a.eq(t + l));
                    c.appendTo(s.find("tr")), d.appendTo(s.find("colgroup")), i.lockedFooter = s.prependTo(o)
                },
                _appendLockedColumnHeader: function (t) {
                    var n, i, o, r, a, s, l, c, d, h, u, p = this,
                        m = this.columns,
                        v = [],
                        _ = 0,
                        y = e(),
                        w = p._hasFilterRow(),
                        b = 0,
                        x = e(),
                        k = 0,
                        C = e(),
                        S = p.thead.prev().find("col:not(.k-group-col,.k-hierarchy-col)"),
                        T = p.thead.find("tr:first .k-header:not(.k-group-cell,.k-hierarchy-cell)"),
                        A = p.thead.find(".k-filter-row").find("th:not(.k-group-cell,.k-hierarchy-cell)"),
                        M = 0;
                    for (n = 0, o = m.length; o > n; n++) {
                        if (m[n].locked) {
                            if (l = T.eq(n), k = O(m[n].columns || []).length, f(m[n])) {
                                for (m[n].columns && (c = k - D(m[n].columns)), c = c || 1, d = 0; c > d; d++) y = y.add(S.eq(n + M + d - _));
                                M += c - 1
                            }
                            for (I([m[n]], V(l), v, 0, 0), k = k || 1, h = 0; k > h; h++) x = x.add(A.eq(b + h));
                            b += k
                        }
                        m[n].columns && (_ += D(m[n].columns)), f(m[n]) || _++
                    }
                    if (v.length) {
                        for (i = '<div class="k-grid-header-locked" style="width:1px"><table' + (bn ? ' cellspacing="0"' : "") + "><colgroup/><thead>", i += Array(v.length + 1).join("<tr></tr>"), i += (w ? '<tr class="k-filter-row" />' : "") + "</thead></table></div>", s = e(i), S = s.find("colgroup"), S.append(p.thead.prev().find("col.k-group-col").add(y)), r = s.find("thead tr:not(.k-filter-row)"), n = 0, o = v.length; o > n; n++) C = g(v[n]), r.eq(n).append(p.thead.find("tr:eq(" + n + ") .k-group-cell").add(C));
                        u = E(this.thead), u > v.length && P(s, u - v.length), a = s.find(".k-filter-row"), a.append(p.thead.find(".k-filter-row .k-group-cell").add(x)), this.lockedHeader = s.prependTo(t), this.thead.find(".k-group-cell").remove(), this._syncLockedHeaderHeight()
                    }
                },
                _removeLockedContainers: function () {
                    var e = this.lockedHeader.add(this.lockedContent).add(this.lockedFooter);
                    ct.destroy(e), e.off(Rt).remove(), this.lockedHeader = this.lockedContent = this.lockedFooter = null, this.selectable = null
                },
                _thead: function () {
                    var t, n, i, o, r, a = this,
                        s = a.columns,
                        l = a._hasDetails() && s.length,
                        c = a._hasFilterRow(),
                        d = "",
                        h = a.table.find(">thead"),
                        u = a.element.find("thead:first").length > 0;
                    if (h.length || (h = e("<thead/>").insertBefore(a.tbody)), a.lockedHeader && a.thead ? (n = a.thead.find("tr:has(th):not(.k-filter-row)").html(""), n.remove(), n = e(), a._removeLockedContainers()) : n = a.element.find(u ? "thead:first tr:has(th):not(.k-filter-row)" : "tr:has(th):first"), !n.length && (n = h.children().first(), !n.length)) {
                        for (i = [{
                            rowSpan: 1,
                            cells: [],
                            index: 0
                        }], a._prepareColumns(i, s), t = 0; i.length > t; t++) d += "<tr>", l && (d += '<th class="k-hierarchy-cell">&nbsp;</th>'), d += a._createHeaderCells(i[t].cells, i[t].rowSpan), d += "</tr>";
                        n = e(d)
                    }
                    c && (o = e("<tr/>"), o.addClass("k-filter-row"), (l || n.find(".k-hierarchy-cell").length) && o.prepend('<th class="k-hierarchy-cell">&nbsp;</th>'), r = (a.thead || h).find(".k-filter-row"), r.length && (ct.destroy(r), r.remove()), h.append(o)), n.children().length ? l && !n.find(".k-hierarchy-cell")[0] && n.prepend('<th class="k-hierarchy-cell">&nbsp;</th>') : (d = "", l && (d += '<th class="k-hierarchy-cell">&nbsp;</th>'), d += a._createHeaderCells(s), n.html(d)), n.attr("role", "row").find("th").addClass("k-header"), a.options.scrollable || h.addClass("k-grid-header"), n.find("script").remove().end().prependTo(h), a.thead && a._destroyColumnAttachments(), this.angular("cleanup", function () {
                        return {
                            elements: h.find("th").get()
                        }
                    }), this.angular("compile", function () {
                        return {
                            elements: h.find("th").get(),
                            data: yt(s, function (e) {
                                return {
                                    column: e
                                }
                            })
                        }
                    }), a.thead = h.attr("role", "rowgroup"), a._sortable(), a._filterable(), a._filterRow(), a._scrollable(), a._updateCols(), a._columnMenu(), this.options.scrollable && B(this.columns).length && (a._appendLockedColumnHeader(a.thead.closest(".k-grid-header")), a._appendLockedColumnContent(), a.lockedContent.bind("DOMMouseScroll" + Rt + " mousewheel" + Rt, Ct(a._wheelScroll, a)), a._applyLockedContainersWidth()), a._updateColumnCellIndex(), a._updateFirstColumnClass(), a._resizable(), a._draggable(), a._reorderable(), a.groupable && a._attachGroupable()
                },
                _updateFirstColumnClass: function () {
                    var t, n, i = this,
                        o = i.columns || [],
                        r = i._hasDetails() && o.length;
                    r || i._groups() || (t = e(), n = i.thead.find(">tr:not(.k-filter-row):not(:first)"), o = z(o), n.length && o[0] && !o[0].columns && (t = t.add(n)), i._isLocked() && (n = i.lockedHeader.find("thead>tr:not(.k-filter-row):not(:first)"), o = B(i.columns), n.length && o[0] && !o[0].columns && (t = t.add(n))), t.each(function () {
                        var t = e(this).find("th");
                        t.removeClass("k-first"), t.eq(0).addClass("k-first")
                    }))
                },
                _prepareColumns: function (e, t, n, i) {
                    var o, r, a = i || e[e.length - 1],
                        s = e[a.index + 1],
                        l = 0;
                    for (o = 0; t.length > o; o++) r = {
                        column: t[o],
                        colSpan: 0
                    }, a.cells.push(r), t[o].columns && t[o].columns.length && (s || (s = {
                        rowSpan: 0,
                        cells: [],
                        index: e.length
                    }, e.push(s)), r.colSpan = t[o].columns.length, this._prepareColumns(e, t[o].columns, r, s), l += r.colSpan - 1, a.rowSpan = e.length - a.index);
                    n && (n.colSpan += l)
                },
                _wheelScroll: function (t) {
                    var n, i, o;
                    t.ctrlKey || (n = this.content, this.options.scrollable.virtual && (n = this.virtualScrollable.verticalScrollbar), i = n.scrollTop(), o = ct.wheelDeltaY(t), o && (t.preventDefault(), e(t.currentTarget).one("wheel" + Rt, !1), n.scrollTop(i + -o)))
                },
                _isLocked: function () {
                    return null != this.lockedHeader
                },
                _updateCols: function (e) {
                    e = e || this.thead.parent().add(this.table), this._appendCols(e, this._isLocked())
                },
                _updateLockedCols: function (e) {
                    this._isLocked() && (e = e || this.lockedHeader.find("table").add(this.lockedTable), G(e, F(R(this.columns)), this._hasDetails(), this._groups()))
                },
                _appendCols: function (e, t) {
                    t ? G(e, F(L(this.columns)), this._hasDetails(), 0) : G(e, F(p(this.columns)), this._hasDetails(), this._groups())
                },
                _autoColumns: function (e) {
                    if (e && e.toJSON) {
                        var t, n = this;
                        e = e.toJSON();
                        for (t in e) n.columns.push({
                            field: t,
                            headerAttributes: {
                                id: ct.guid()
                            }
                        });
                        n._thead(), n._templates()
                    }
                },
                _rowsHtml: function (e, t) {
                    var n, i, o = this,
                        r = "",
                        a = t.rowTemplate,
                        s = t.altRowTemplate;
                    for (n = 0, i = e.length; i > n; n++) r += n % 2 ? s(e[n]) : a(e[n]), o._data.push(e[n]);
                    return r
                },
                _groupRowHtml: function (e, t, n, i, o, r) {
                    var a, s, l = this,
                        c = "",
                        d = e.field,
                        h = wt(O(l.columns), function (e) {
                                return e.field == d
                            })[0] || {}, u = h.groupHeaderTemplate,
                        f = (h.title || d) + ": " + Y(e.value, h.format, h.values, h.encoded),
                        p = l._groupAggregatesDefaultObject || {}, g = _t({}, p, e.aggregates),
                        m = _t({}, {
                            field: e.field,
                            value: e.value,
                            aggregates: g
                        }, e.aggregates[e.field]),
                        v = o.groupFooterTemplate,
                        _ = e.items;
                    if (u && (f = typeof u === sn ? u(m) : ct.template(u)(m)), c += i(t, n, f), e.hasSubgroups)
                        for (a = 0, s = _.length; s > a; a++) c += l._groupRowHtml(_[a], r ? t : t - 1, n + 1, i, o, r);
                    else c += l._rowsHtml(_, o);
                    return v && (c += v(g)), c
                },
                collapseGroup: function (t) {
                    t = e(t);
                    var n, i, o, r, a, s = this.options.groupable,
                        l = s.showFooter,
                        c = l ? 0 : 1,
                        d = e();
                    for (this._isLocked() && (t.closest("div").hasClass("k-grid-content-locked") ? d = this.tbody.children("tr:eq(" + t.index() + ")").nextAll("tr") : (d = t.nextAll("tr"), t = this.lockedTable.find(">tbody>tr:eq(" + t.index() + ")"))), n = t.find(".k-group-cell").length, t.find(".k-icon").addClass("k-i-expand").removeClass("k-i-collapse"), t.find("td[aria-expanded='true']:first").attr("aria-expanded", !1), t = t.nextAll("tr"), o = 0, r = t.length; r > o && (a = t.eq(o), i = a.find(".k-group-cell").length, a.hasClass("k-grouping-row") ? c++ : a.hasClass("k-group-footer") && c--, !(n >= i || a.hasClass("k-group-footer") && 0 > c)); o++) a.hide(), d.eq(o).hide()
                },
                expandGroup: function (t) {
                    t = e(t);
                    var n, i, o, r, a, s = this,
                        l = s.options.groupable.showFooter,
                        c = e(),
                        d = [],
                        h = 1;
                    for (this._isLocked() && (t.closest("div").hasClass("k-grid-content-locked") ? c = this.tbody.children("tr:eq(" + t.index() + ")").nextAll("tr") : (c = t.nextAll("tr"), t = this.lockedTable.find(">tbody>tr:eq(" + t.index() + ")"))), n = t.find(".k-group-cell").length, t.find(".k-icon").addClass("k-i-collapse").removeClass("k-i-expand"), t.find("td[aria-expanded='false']:first").attr("aria-expanded", !0), t = t.nextAll("tr"), r = 0, a = t.length; a > r && (i = t.eq(r), o = i.find(".k-group-cell").length, !(n >= o)); r++) o != n + 1 || i.hasClass("k-detail-row") || (i.show(), c.eq(r).show(), i.hasClass("k-grouping-row") && i.find(".k-icon").hasClass("k-i-collapse") && s.expandGroup(i), i.hasClass("k-master-row") && i.find(".k-icon").hasClass("k-minus") && (i.next().show(), c.eq(r + 1).show())), i.hasClass("k-grouping-row") && (l && d.push(i.is(":visible")), h++), i.hasClass("k-group-footer") && (l && i.toggle(d.pop()), 1 == h ? (i.show(), c.eq(r).show()) : h--)
                },
                _updateHeader: function (t) {
                    var n = this,
                        i = n._isLocked() ? n.lockedHeader.find("thead") : n.thead,
                        o = i.find("tr.k-filter-row").find("th.k-group-cell").length,
                        r = i.find("tr:first").find("th.k-group-cell").length,
                        a = i.children("tr:not(:first)").filter(function () {
                            return !e(this).children(":visible").length
                        });
                    t > r ? (e(Array(t - r + 1).join('<th class="k-group-cell k-header">&nbsp;</th>')).prependTo(i.children("tr:not(.k-filter-row)")), n.element.is(":visible") && a.find("th.k-group-cell").hide()) : r > t && i.find("tr").each(function () {
                        e(this).find("th.k-group-cell").filter(":eq(" + t + "),:gt(" + t + ")").remove()
                    }), t > o && e(Array(t - o + 1).join('<th class="k-group-cell k-header">&nbsp;</th>')).prependTo(i.find(".k-filter-row"))
                },
                _firstDataItem: function (e, t) {
                    return e && t && (e = e.hasSubgroups ? this._firstDataItem(e.items[0], t) : e.items[0]), e
                },
                _updateTablesWidth: function () {
                    var t, n = this;
                    n._isLocked() && (t = e(">.k-grid-footer>.k-grid-footer-wrap>table", n.wrapper).add(n.thead.parent()).add(n.table), n._footerWidth = et(t.eq(0)), t.width(n._footerWidth), t = e(">.k-grid-footer>.k-grid-footer-locked>table", n.wrapper).add(n.lockedHeader.find(">table")).add(n.lockedTable), t.width(et(t.eq(0))))
                },
                hideColumn: function (n) {
                    var i, o, r, s, l, c, d, g, m, v, _ = this,
                        y = 0,
                        w = _.footer || _.wrapper.find(".k-grid-footer"),
                        b = _.columns,
                        x = _.lockedHeader ? N(_.lockedHeader.find(">table>thead")).filter(u).length : 0;
                    if (n = "number" == typeof n ? b[n] : vt(n) ? wt(T(b), function (e) {
                            return e === n
                        })[0] : wt(T(b), function (e) {
                            return e.field === n
                        })[0], n && f(n)) {
                        if (n.columns && n.columns.length) {
                            for (c = C(n, b), h(n, !1), Q(a(e(">table>thead", _.lockedHeader), _.thead, ">tr:eq(" + c.row + ")>th"), c.cell, !1), r = 0; n.columns.length > r; r++) this.hideColumn(n.columns[r]);
                            return _.trigger(jt, {
                                column: n
                            }), t
                        }
                        if (m = xt(n, p(O(b))), h(n, !1), _._setParentsVisibility(n, !1), _._templates(), _._updateCols(), _._updateLockedCols(), v = _.thead, d = m, _.lockedHeader && x > m ? v = _.lockedHeader.find(">table>thead") : d -= x, i = N(v).filter(u).eq(d), i[0].style.display = "none", Q(a(e(">table>thead", _.lockedHeader), _.thead, ">tr.k-filter-row>th"), m, !1), w[0] && (_._updateCols(w.find(">.k-grid-footer-wrap>table")), _._updateLockedCols(w.find(">.k-grid-footer-locked>table")), Q(w.find(".k-footer-template>td"), m, !1)), _.lockedTable && x > m ? X(_.lockedTable.find(">tbody>tr"), m) : X(_.tbody.children(), m - x), _.lockedTable) _._updateTablesWidth(), _._applyLockedContainersWidth(), _._syncLockedContentHeight(), _._syncLockedHeaderHeight(), _._syncLockedFooterHeight();
                        else {
                            for (s = _.thead.prev().find("col"), r = 0, g = s.length; g > r; r += 1) {
                                if (l = s[r].style.width, !l || -1 != l.indexOf("%")) {
                                    y = 0;
                                    break
                                }
                                y += parseInt(l, 10)
                            }
                            o = e(">.k-grid-header table:first,>.k-grid-footer table:first", _.wrapper).add(_.table), _._footerWidth = null, y && (o.each(function () {
                                this.style.width = y + "px"
                            }), _._footerWidth = y), wn.msie && 8 == wn.version && (o.css("display", "inline-table"), setTimeout(function () {
                                o.css("display", "table")
                            }, 1))
                        }
                        _._updateFirstColumnClass(), _.trigger(jt, {
                            column: n
                        })
                    }
                },
                _setParentsVisibility: function (t, n) {
                    var i, o, r, s, l, c = this.columns,
                        u = [],
                        f = n ? function (e) {
                            return p(e.columns).length && e.hidden
                        } : function (e) {
                            return !p(e.columns).length && !e.hidden
                        };
                    if (d(t, c, u) && u.length)
                        for (i = u.length - 1; i >= 0; i--) o = u[i], r = b(o, c), s = a(e(">table>thead", this.lockedHeader), this.thead, ">tr:eq(" + r.row + ")>th:not(.k-group-cell):not(.k-hierarchy-cell)").eq(r.cell), f(o) && (h(o, n), s[0].style.display = n ? "" : "none"), s.filter("[" + ct.attr("colspan") + "]").length && (l = parseInt(s.attr(ct.attr("colspan")), 10), s[0].colSpan = l - D(o.columns) || 1)
                },
                showColumn: function (n) {
                    var i, o, r, s, l, c, d, u, p, g, m, v = this,
                        _ = v.columns,
                        y = v.footer || v.wrapper.find(".k-grid-footer"),
                        w = v.lockedHeader ? N(v.lockedHeader.find(">table>thead")).length : 0;
                    if (n = "number" == typeof n ? _[n] : vt(n) ? wt(T(_), function (e) {
                            return e === n
                        })[0] : wt(T(_), function (e) {
                            return e.field === n
                        })[0], n && !f(n)) {
                        if (n.columns && n.columns.length) {
                            for (d = b(n, _), h(n, !0), Q(a(e(">table>thead", v.lockedHeader), v.thead, ">tr:eq(" + d.row + ")>th"), d.cell, !0), i = 0; n.columns.length > i; i++) this.showColumn(n.columns[i]);
                            return v.trigger(Gt, {
                                column: n
                            }), t
                        }
                        if (g = xt(n, O(_)), h(n, !0), v._setParentsVisibility(n, !0), v._templates(), v._updateCols(), v._updateLockedCols(), m = v.thead, c = g, v.lockedHeader && w > g ? m = v.lockedHeader.find(">table>thead") : c -= w, r = N(m).eq(c), r[0].style.display = "", Q(a(e(">table>thead", v.lockedHeader), v.thead, ">tr.k-filter-row>th"), g, !0), y[0] && (v._updateCols(y.find(">.k-grid-footer-wrap>table")), v._updateLockedCols(y.find(">.k-grid-footer-locked>table")), Q(y.find(".k-footer-template>td"), g, !0)), v.lockedTable && w > g ? Z(v.lockedTable.find(">tbody>tr"), g) : Z(v.tbody.children(), g - w), v.lockedTable) v._updateTablesWidth(), v._applyLockedContainersWidth(), v._syncLockedContentHeight(), v._syncLockedHeaderHeight();
                        else if (s = e(">.k-grid-header table:first,>.k-grid-footer table:first", v.wrapper).add(v.table), n.width) {
                            for (l = 0, p = v.thead.prev().find("col"), i = 0, o = p.length; o > i; i += 1) {
                                if (u = p[i].style.width, u.indexOf("%") > -1) {
                                    l = 0;
                                    break
                                }
                                l += parseInt(u, 10)
                            }
                            v._footerWidth = null, l && (s.each(function () {
                                this.style.width = l + "px"
                            }), v._footerWidth = l)
                        } else s.width("");
                        v._updateFirstColumnClass(), v.trigger(Gt, {
                            column: n
                        })
                    }
                },
                _progress: function (e) {
                    var t = this.element;
                    this.lockedContent ? t = this.wrapper : this.element.is("table") ? t = this.element.parent() : this.content && this.content.length && (t = this.content), ct.ui.progress(t, e)
                },
                _resize: function (e, t) {
                    this.content && (this._setContentWidth(), this._setContentHeight()), this.virtualScrollable && (t || this._rowHeight) && (t && (this._rowHeight = null), this.virtualScrollable.repaintScrollbar())
                },
                _isActiveInTable: function () {
                    var t = pt();
                    return this.table[0] === t || e.contains(this.table[0], t) || this._isLocked() && (this.lockedTable[0] === t || e.contains(this.lockedTable[0], t))
                },
                refresh: function (t) {
                    var n, i = this,
                        o = i.dataSource.view(),
                        r = i.options.navigatable,
                        a = e(i.current()),
                        s = !1,
                        l = (i.dataSource.group() || []).length,
                        c = i.content && i.content.scrollLeft(),
                        d = l + F(p(i.columns)).length;
                    t && "itemchange" === t.action && i.editable || (t = t || {}, i.trigger("dataBinding", {
                        action: t.action || "rebind",
                        index: t.index,
                        items: t.items
                    }) || (i._angularItems("cleanup"), r && (i._isActiveInTable() || i._editContainer && i._editContainer.data("kendoWindow")) && (s = a.is("th"), n = Math.max(i.cellIndex(a), 0)), i._destroyEditable(), i._progress(!1), i._hideResizeHandle(), i._data = [], i.columns.length || (i._autoColumns(i._firstDataItem(o[0], l)), d = l + i.columns.length), i._group = l > 0 || i._group, i._group && (i._templates(), i._updateCols(), i._updateLockedCols(), i._updateHeader(l), i._group = l > 0), i._renderContent(o, d, l), i._renderLockedContent(o, d, l), i._footer(), i._renderNoRecordsContent(), i._setContentHeight(), i._setContentWidth(c), i.lockedTable && (i.options.scrollable.virtual ? i.content.find(">.k-virtual-scrollable-wrap").trigger("scroll") : i.touchScroller ? i.touchScroller.movable.trigger("change") : i.content.trigger("scroll")), i._restoreCurrent(n, s), i.touchScroller && i.touchScroller.contentResized(), i.selectable && i.selectable.resetTouchEvents(), i._angularItems("compile"), i.trigger($t)))
                },
                _restoreCurrent: function (n, i) {
                    var o, r, a;
                    n === t || 0 > n || (this._removeCurrent(), i ? this.current(this.thead.find("th:not(.k-group-cell)").eq(n)) : (o = 0, this._rowVirtualIndex ? o = this.virtualScrollable.position(this._rowVirtualIndex) : n = 0, r = e(), this.lockedTable && (r = this.lockedTable.find(">tbody>tr").eq(o)), r = r.add(this.tbody.children().eq(o)), a = r.find(">td:not(.k-group-cell):not(.k-hierarchy-cell)").eq(n), this.current(a)), this._current && ot(this._current.closest("table")[0], !0))
                },
                _angularItems: function (e) {
                    ct.ui.DataBoundWidget.fn._angularItems.call(this, e), "cleanup" === e && this._cleanupDetailItems(), this._angularGroupItems(e)
                },
                _cleanupDetailItems: function () {
                    var e = this;
                    e._hasDetails() && (e.angular("cleanup", function () {
                        return {
                            elements: e.tbody.children(".k-detail-row")
                        }
                    }), e.tbody.find(".k-detail-cell").empty())
                },
                _angularGroupItems: function (t) {
                    var n = this;
                    n._group && n.angular(t, function () {
                        return {
                            elements: n.tbody.children(".k-grouping-row"),
                            data: e.map(K(n.dataSource.view()), function (e) {
                                return {
                                    dataItem: e
                                }
                            })
                        }
                    })
                },
                _renderContent: function (e, t, n) {
                    var i, o, r = this,
                        a = "",
                        s = null != r.lockedContent,
                        l = {
                            rowTemplate: r.rowTemplate,
                            altRowTemplate: r.altRowTemplate,
                            groupFooterTemplate: r.groupFooterTemplate
                        };
                    if (t = s ? t - F(R(r.columns)).length : t, n > 0)
                        for (t = s ? t - n : t, r.detailTemplate && t++, r.groupFooterTemplate && (r._groupAggregatesDefaultObject = r.dataSource.aggregates()), i = 0, o = e.length; o > i; i++) a += r._groupRowHtml(e[i], t, 0, s ? lt : st, l, s);
                    else a += r._rowsHtml(e, l);
                    r.tbody = U(r.tbody, r.table, a, this.options.$angular)
                },
                _renderLockedContent: function (e, t, n) {
                    var i, o, r, a = "",
                        s = {
                            rowTemplate: this.lockedRowTemplate,
                            altRowTemplate: this.lockedAltRowTemplate,
                            groupFooterTemplate: this.lockedGroupFooterTemplate
                        };
                    if (this.lockedContent) {
                        if (r = this.lockedTable, n > 0)
                            for (t -= p(O(z(this.columns))).length, i = 0, o = e.length; o > i; i++) a += this._groupRowHtml(e[i], t, 0, st, s);
                        else a = this._rowsHtml(e, s);
                        U(r.children("tbody"), r, a, this.options.$angular), this._syncLockedContentHeight()
                    }
                },
                _adjustRowsHeight: function (e, t) {
                    var n, i, o, r, a = e[0].rows,
                        s = a.length,
                        l = t[0].rows,
                        c = e.add(t),
                        d = c.length,
                        h = [];
                    for (n = 0; s > n && l[n]; n++) a[n].style.height && (a[n].style.height = l[n].style.height = ""), i = a[n].offsetHeight, o = l[n].offsetHeight, r = 0, i > o ? r = i : o > i && (r = o), h.push(r);
                    for (n = 0; d > n; n++) c[n].style.display = "none";
                    for (n = 0; s > n; n++) h[n] && (a[n].style.height = l[n].style.height = h[n] + 1 + "px");
                    for (n = 0; d > n; n++) c[n].style.display = ""
                }
            });
        ct.ExcelMixin && ct.ExcelMixin.extend(Sn.prototype), ct.PDFMixin && (ct.PDFMixin.extend(Sn.prototype), Sn.prototype._drawPDF = function (n) {
            function i() {
                d && a !== t ? (c.unbind("change", o), c.one("change", function () {
                    s.resolve(r)
                }), c.page(a)) : s.resolve(r)
            }

            function o() {
                l._drawPDFShadow({
                    width: l.wrapper.width()
                }).done(function (e) {
                    var t = c.page(),
                        o = d ? c.totalPages() : 1,
                        a = {
                            page: e,
                            pageNumber: t,
                            progress: t / o,
                            totalPages: o
                        };
                    n.notify(a), r.append(a.page), o > t ? c.page(t + 1) : i()
                }).fail(function (e) {
                    s.reject(e)
                })
            }

            var r, a, s = new e.Deferred,
                l = this,
                c = l.dataSource,
                d = l.options.pdf.allPages;
            return this._initPDFProgress(n), r = new ct.drawing.Group, a = c.page(), d ? (c.bind("change", o), c.page(1)) : o(), s.promise()
        }, Sn.prototype._initPDFProgress = function (t) {
            var n, i = e("<div class='k-loading-pdf-mask'><div class='k-loading-color'/></div>");
            i.prepend(this.wrapper.clone().css({
                position: "absolute",
                top: 0,
                left: 0
            })), this.wrapper.append(i), n = e("<div class='k-loading-pdf-progress'>").appendTo(i).kendoProgressBar({
                type: "chunk",
                chunkCount: 10,
                min: 0,
                max: 1,
                value: 0
            }).data("kendoProgressBar"), t.progress(function (e) {
                n.value(e.progress)
            }).always(function () {
                ct.destroy(i), i.remove()
            })
        }), dt.plugin(Sn), dt.plugin(kn)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});
