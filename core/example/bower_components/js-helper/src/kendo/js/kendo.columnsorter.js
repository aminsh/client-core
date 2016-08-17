/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.core"], e)
}(function () {
    return function (e, t) {
        var n = window.kendo,
            i = n.ui,
            r = i.Widget,
            o = "dir",
            a = "asc",
            s = "single",
            l = "field",
            c = "desc",
            d = ".kendoColumnSorter",
            u = ".k-link",
            h = "aria-sort",
            p = e.proxy,
            f = r.extend({
                init: function (e, t) {
                    var n, i = this;
                    r.fn.init.call(i, e, t), i._refreshHandler = p(i.refresh, i), i.dataSource = i.options.dataSource.bind("change", i._refreshHandler), n = i.element.find(u), n[0] || (n = i.element.wrapInner('<a class="k-link" href="#"/>').find(u)), i.link = n, i.element.on("click" + d, p(i._click, i))
                },
                options: {
                    name: "ColumnSorter",
                    mode: s,
                    allowUnsort: !0,
                    compare: null,
                    filter: ""
                },
                destroy: function () {
                    var e = this;
                    r.fn.destroy.call(e), e.element.off(d), e.dataSource.unbind("change", e._refreshHandler), e._refreshHandler = e.element = e.link = e.dataSource = null
                },
                refresh: function () {
                    var t, i, r, s, d = this,
                        u = d.dataSource.sort() || [],
                        p = d.element,
                        f = p.attr(n.attr(l));
                    for (p.removeAttr(n.attr(o)), p.removeAttr(h), t = 0, i = u.length; i > t; t++) r = u[t], f == r.field && p.attr(n.attr(o), r.dir);
                    s = p.attr(n.attr(o)), p.find(".k-i-arrow-n,.k-i-arrow-s").remove(), s === a ? (e('<span class="k-icon k-i-arrow-n" />').appendTo(d.link), p.attr(h, "ascending")) : s === c && (e('<span class="k-icon k-i-arrow-s" />').appendTo(d.link), p.attr(h, "descending"))
                },
                _click: function (e) {
                    var i, r, d = this,
                        u = d.element,
                        h = u.attr(n.attr(l)),
                        p = u.attr(n.attr(o)),
                        f = d.options,
                        g = null === d.options.compare ? t : d.options.compare,
                        m = d.dataSource.sort() || [];
                    if (e.preventDefault(), !f.filter || u.is(f.filter)) {
                        if (p = p === a ? c : p === c && f.allowUnsort ? t : a, f.mode === s) m = [{
                            field: h,
                            dir: p,
                            compare: g
                        }];
                        else if ("multiple" === f.mode) {
                            for (i = 0, r = m.length; r > i; i++)
                                if (m[i].field === h) {
                                    m.splice(i, 1);
                                    break
                                }
                            m.push({
                                field: h,
                                dir: p,
                                compare: g
                            })
                        }
                        this.dataSource.sort(m)
                    }
                }
            });
        i.plugin(f)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});