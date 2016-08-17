/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.popup", "./kendo.filtermenu", "./kendo.menu"], e)
}(function () {
    return function (e, t) {
        function n(t) {
            return e.trim(t).replace(/&nbsp;/gi, "")
        }

        function i(e, t) {
            var n, i, r, o = {};
            for (n = 0, i = e.length; i > n; n++) r = e[n], o[r[t]] = r;
            return o
        }

        function r(e) {
            var t, n = [];
            for (t = 0; e.length > t; t++) e[t].columns ? n = n.concat(r(e[t].columns)) : n.push(e[t]);
            return n
        }

        var o = window.kendo,
            a = o.ui,
            s = e.proxy,
            l = e.extend,
            c = e.grep,
            d = e.map,
            u = e.inArray,
            h = "k-state-selected",
            p = "asc",
            f = "desc",
            g = "change",
            m = "init",
            v = "select",
            _ = "kendoPopup",
            w = "kendoFilterMenu",
            b = "kendoMenu",
            y = ".kendoColumnMenu",
            k = a.Widget,
            x = k.extend({
                init: function (t, n) {
                    var i, r = this;
                    k.fn.init.call(r, t, n), t = r.element, n = r.options, r.owner = n.owner, r.dataSource = n.dataSource, r.field = t.attr(o.attr("field")), r.title = t.attr(o.attr("title")), i = t.find(".k-header-column-menu"), i[0] || (i = t.addClass("k-with-icon").prepend('<a class="k-header-column-menu" href="#"><span class="k-icon k-i-arrowhead-s"/></a>').find(".k-header-column-menu")), r.link = i.attr("tabindex", -1).on("click" + y, s(r._click, r)), r.wrapper = e('<div class="k-column-menu"/>')
                },
                _init: function () {
                    var e = this;
                    e.pane = e.options.pane, e.pane && (e._isMobile = !0), e._isMobile ? e._createMobileMenu() : e._createMenu(), e._angularItems("compile"), e._refreshHandler = s(e.refresh, e), e.dataSource.bind(g, e._refreshHandler), e._sort(), e._columns(), e._filter(), e._lockColumns(), e.trigger(m, {
                        field: e.field,
                        container: e.wrapper
                    })
                },
                events: [m],
                options: {
                    name: "ColumnMenu",
                    messages: {
                        sortAscending: "Sort Ascending",
                        sortDescending: "Sort Descending",
                        filter: "Filter",
                        columns: "Columns",
                        done: "Done",
                        settings: "Column Settings",
                        lock: "Lock",
                        unlock: "Unlock"
                    },
                    filter: "",
                    columns: !0,
                    sortable: !0,
                    filterable: !0,
                    animations: {
                        left: "slide"
                    }
                },
                _createMenu: function () {
                    var e = this,
                        t = e.options;
                    e.wrapper.html(o.template(C)({
                        ns: o.ns,
                        messages: t.messages,
                        sortable: t.sortable,
                        filterable: t.filterable,
                        columns: e._ownerColumns(),
                        showColumns: t.columns,
                        lockedColumns: t.lockedColumns
                    })), e.popup = e.wrapper[_]({
                        anchor: e.link,
                        open: s(e._open, e),
                        activate: s(e._activate, e),
                        close: function () {
                            e.options.closeCallback && e.options.closeCallback(e.element)
                        }
                    }).data(_), e.menu = e.wrapper.children()[b]({
                        orientation: "vertical",
                        closeOnClick: !1
                    }).data(b)
                },
                _createMobileMenu: function () {
                    var e = this,
                        t = e.options,
                        n = o.template(S)({
                            ns: o.ns,
                            field: e.field,
                            title: e.title || e.field,
                            messages: t.messages,
                            sortable: t.sortable,
                            filterable: t.filterable,
                            columns: e._ownerColumns(),
                            showColumns: t.columns,
                            lockedColumns: t.lockedColumns
                        });
                    e.view = e.pane.append(n), e.wrapper = e.view.element.find(".k-column-menu"), e.menu = new T(e.wrapper.children(), {
                        pane: e.pane
                    }), e.view.element.on("click", ".k-done", function (t) {
                        e.close(), t.preventDefault()
                    }), e.options.lockedColumns && e.view.bind("show", function () {
                        e._updateLockedColumns()
                    })
                },
                _angularItems: function (t) {
                    var n = this;
                    n.angular(t, function () {
                        var t = n.wrapper.find(".k-columns-item input[" + o.attr("field") + "]").map(function () {
                                return e(this).closest("li")
                            }),
                            i = d(n._ownerColumns(), function (e) {
                                return {
                                    column: e._originalObject
                                }
                            });
                        return {
                            elements: t,
                            data: i
                        }
                    })
                },
                destroy: function () {
                    var e = this;
                    e._angularItems("cleanup"), k.fn.destroy.call(e), e.filterMenu && e.filterMenu.destroy(), e._refreshHandler && e.dataSource.unbind(g, e._refreshHandler), e.options.columns && e.owner && (e._updateColumnsMenuHandler && (e.owner.unbind("columnShow", e._updateColumnsMenuHandler), e.owner.unbind("columnHide", e._updateColumnsMenuHandler)), e._updateColumnsLockedStateHandler && (e.owner.unbind("columnLock", e._updateColumnsLockedStateHandler), e.owner.unbind("columnUnlock", e._updateColumnsLockedStateHandler))), e.menu && (e.menu.element.off(y), e.menu.destroy()), e.wrapper.off(y), e.popup && e.popup.destroy(), e.view && e.view.purge(), e.link.off(y), e.owner = null, e.wrapper = null, e.element = null
                },
                close: function () {
                    this.menu.close(), this.popup && (this.popup.close(), this.popup.element.off("keydown" + y))
                },
                _click: function (e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = this.options;
                    t.filter && this.element.is(!t.filter) || (this.popup || this.pane || this._init(), this._isMobile ? this.pane.navigate(this.view, this.options.animations.left) : this.popup.toggle())
                },
                _open: function () {
                    var t = this;
                    e(".k-column-menu").not(t.wrapper).each(function () {
                        e(this).data(_).close()
                    }), t.popup.element.on("keydown" + y, function (e) {
                        e.keyCode == o.keys.ESC && t.close()
                    }), t.options.lockedColumns && t._updateLockedColumns()
                },
                _activate: function () {
                    this.menu.element.focus()
                },
                _ownerColumns: function () {
                    var e = r(this.owner.columns),
                        t = c(e, function (e) {
                            var t = !0,
                                i = n(e.title || "");
                            return (e.menu === !1 || !e.field && !i.length) && (t = !1), t
                        });
                    return d(t, function (t) {
                        return {
                            originalField: t.field,
                            field: t.field || t.title,
                            title: t.title || t.field,
                            hidden: t.hidden,
                            index: u(t, e),
                            locked: !!t.locked,
                            _originalObject: t
                        }
                    })
                },
                _sort: function () {
                    var t = this;
                    t.options.sortable && (t.refresh(), t.menu.bind(v, function (n) {
                        var i, r = e(n.item);
                        r.hasClass("k-sort-asc") ? i = p : r.hasClass("k-sort-desc") && (i = f), i && (r.parent().find(".k-sort-" + (i == p ? f : p)).removeClass(h), t._sortDataSource(r, i), t.close())
                    }))
                },
                _sortDataSource: function (e, n) {
                    var i, r, o = this,
                        a = o.options.sortable,
                        s = null === a.compare ? t : a.compare,
                        l = o.dataSource,
                        c = l.sort() || [];
                    if (e.hasClass(h) && a && a.allowUnsort !== !1 ? (e.removeClass(h), n = t) : e.addClass(h), "multiple" === a.mode) {
                        for (i = 0, r = c.length; r > i; i++)
                            if (c[i].field === o.field) {
                                c.splice(i, 1);
                                break
                            }
                        c.push({
                            field: o.field,
                            dir: n,
                            compare: s
                        })
                    } else c = [{
                        field: o.field,
                        dir: n,
                        compare: s
                    }];
                    l.sort(c)
                },
                _columns: function () {
                    var t = this;
                    t.options.columns && (t._updateColumnsMenu(), t._updateColumnsMenuHandler = s(t._updateColumnsMenu, t), t.owner.bind(["columnHide", "columnShow"], t._updateColumnsMenuHandler), t._updateColumnsLockedStateHandler = s(t._updateColumnsLockedState, t), t.owner.bind(["columnUnlock", "columnLock"], t._updateColumnsLockedStateHandler), t.menu.bind(v, function (n) {
                        var i, a, s, l = e(n.item),
                            d = r(t.owner.columns);
                        t._isMobile && n.preventDefault(), l.parent().closest("li.k-columns-item")[0] && (i = l.find(":checkbox"), i.attr("disabled") || (s = i.attr(o.attr("field")), a = c(d, function (e) {
                            return e.field == s || e.title == s
                        })[0], a.hidden === !0 ? t.owner.showColumn(a) : t.owner.hideColumn(a)))
                    }))
                },
                _updateColumnsMenu: function () {
                    var e, t, n, i, r, a, s = o.attr("field"),
                        l = o.attr("locked"),
                        h = c(this._ownerColumns(), function (e) {
                            return !e.hidden
                        }),
                        p = c(h, function (e) {
                            return e.originalField
                        }),
                        f = c(p, function (e) {
                            return e.locked === !0
                        }).length,
                        g = c(p, function (e) {
                            return e.locked !== !0
                        }).length;
                    for (h = d(h, function (e) {
                        return e.field
                    }), a = this.wrapper.find(".k-columns-item input[" + s + "]").prop("disabled", !1).prop("checked", !1), e = 0, t = a.length; t > e; e++) n = a.eq(e), r = "true" === n.attr(l), i = !1, u(n.attr(s), h) > -1 && (i = !0, n.prop("checked", i)), i && (1 == f && r && n.prop("disabled", !0), 1 != g || r || n.prop("disabled", !0))
                },
                _updateColumnsLockedState: function () {
                    var e, t, n, r, a = o.attr("field"),
                        s = o.attr("locked"),
                        l = i(this._ownerColumns(), "field"),
                        c = this.wrapper.find(".k-columns-item input[type=checkbox]");
                    for (e = 0, t = c.length; t > e; e++) n = c.eq(e), r = l[n.attr(a)], r && n.attr(s, r.locked);
                    this._updateColumnsMenu()
                },
                _filter: function () {
                    var t = this,
                        n = w,
                        i = t.options;
                    i.filterable !== !1 && (i.filterable.multi && (n = "kendoFilterMultiCheck", i.filterable.dataSource && (i.filterable.checkSource = i.filterable.dataSource, delete i.filterable.dataSource)), t.filterMenu = t.wrapper.find(".k-filterable")[n](l(!0, {}, {
                        appendToElement: !0,
                        dataSource: i.dataSource,
                        values: i.values,
                        field: t.field,
                        title: t.title
                    }, i.filterable)).data(n), t._isMobile && t.menu.bind(v, function (n) {
                        var i = e(n.item);
                        i.hasClass("k-filter-item") && t.pane.navigate(t.filterMenu.view, t.options.animations.left)
                    }))
                },
                _lockColumns: function () {
                    var t = this;
                    t.menu.bind(v, function (n) {
                        var i = e(n.item);
                        i.hasClass("k-lock") ? (t.owner.lockColumn(t.field), t.close()) : i.hasClass("k-unlock") && (t.owner.unlockColumn(t.field), t.close())
                    })
                },
                _updateLockedColumns: function () {
                    var e, t, n, i, r = this.field,
                        o = this.owner.columns,
                        a = c(o, function (e) {
                            return e.field == r || e.title == r
                        })[0];
                    a && (e = a.locked === !0, t = c(o, function (t) {
                        return !t.hidden && (t.locked && e || !t.locked && !e)
                    }).length, n = this.wrapper.find(".k-lock").removeClass("k-state-disabled"), i = this.wrapper.find(".k-unlock").removeClass("k-state-disabled"), (e || 1 == t) && n.addClass("k-state-disabled"), e && 1 != t || i.addClass("k-state-disabled"), this._updateColumnsLockedState())
                },
                refresh: function () {
                    var e, t, n, i = this,
                        r = i.options.dataSource.sort() || [],
                        o = i.field;
                    for (i.wrapper.find(".k-sort-asc, .k-sort-desc").removeClass(h), t = 0, n = r.length; n > t; t++) e = r[t], o == e.field && i.wrapper.find(".k-sort-" + e.dir).addClass(h);
                    i.link[i._filterExist(i.dataSource.filter()) ? "addClass" : "removeClass"]("k-state-active")
                },
                _filterExist: function (e) {
                    var t, n, i, r = !1;
                    if (e) {
                        for (e = e.filters, n = 0, i = e.length; i > n; n++) t = e[n], t.field == this.field ? r = !0 : t.filters && (r = r || this._filterExist(t));
                        return r
                    }
                }
            }),
            C = '<ul>#if(sortable){#<li class="k-item k-sort-asc"><span class="k-link"><span class="k-sprite k-i-sort-asc"></span>${messages.sortAscending}</span></li><li class="k-item k-sort-desc"><span class="k-link"><span class="k-sprite k-i-sort-desc"></span>${messages.sortDescending}</span></li>#if(showColumns || filterable){#<li class="k-separator"></li>#}##}##if(showColumns){#<li class="k-item k-columns-item"><span class="k-link"><span class="k-sprite k-i-columns"></span>${messages.columns}</span><ul>#for (var idx = 0; idx < columns.length; idx++) {#<li><input type="checkbox" data-#=ns#field="#=columns[idx].field.replace(/"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#"/>#=columns[idx].title#</li>#}#</ul></li>#if(filterable || lockedColumns){#<li class="k-separator"></li>#}##}##if(filterable){#<li class="k-item k-filter-item"><span class="k-link"><span class="k-sprite k-filter"></span>${messages.filter}</span><ul><li><div class="k-filterable"></div></li></ul></li>#if(lockedColumns){#<li class="k-separator"></li>#}##}##if(lockedColumns){#<li class="k-item k-lock"><span class="k-link"><span class="k-sprite k-i-lock"></span>${messages.lock}</span></li><li class="k-item k-unlock"><span class="k-link"><span class="k-sprite k-i-unlock"></span>${messages.unlock}</span></li>#}#</ul>',
            S = '<div data-#=ns#role="view" data-#=ns#init-widgets="false" class="k-grid-column-menu"><div data-#=ns#role="header" class="k-header">${messages.settings}<button class="k-button k-done">#=messages.done#</button></div><div class="k-column-menu k-mobile-list"><ul><li><span class="k-link">${title}</span><ul>#if(sortable){#<li class="k-item k-sort-asc"><span class="k-link"><span class="k-sprite k-i-sort-asc"></span>${messages.sortAscending}</span></li><li class="k-item k-sort-desc"><span class="k-link"><span class="k-sprite k-i-sort-desc"></span>${messages.sortDescending}</span></li>#}##if(lockedColumns){#<li class="k-item k-lock"><span class="k-link"><span class="k-sprite k-i-lock"></span>${messages.lock}</span></li><li class="k-item k-unlock"><span class="k-link"><span class="k-sprite k-i-unlock"></span>${messages.unlock}</span></li>#}##if(filterable){#<li class="k-item k-filter-item"><span class="k-link k-filterable"><span class="k-sprite k-filter"></span>${messages.filter}</span></li>#}#</ul></li>#if(showColumns){#<li class="k-columns-item"><span class="k-link">${messages.columns}</span><ul>#for (var idx = 0; idx < columns.length; idx++) {#<li class="k-item"><label class="k-label"><input type="checkbox" class="k-check" data-#=ns#field="#=columns[idx].field.replace(/"/g,"&\\#34;")#" data-#=ns#index="#=columns[idx].index#" data-#=ns#locked="#=columns[idx].locked#"/>#=columns[idx].title#</label></li>#}#</ul></li>#}#</ul></div></div>',
            T = k.extend({
                init: function (e, t) {
                    k.fn.init.call(this, e, t), this.element.on("click" + y, "li.k-item:not(.k-separator):not(.k-state-disabled)", "_click")
                },
                events: [v],
                _click: function (t) {
                    e(t.target).is("[type=checkbox]") || t.preventDefault(), this.trigger(v, {
                        item: t.currentTarget
                    })
                },
                close: function () {
                    this.options.pane.navigate("")
                },
                destroy: function () {
                    k.fn.destroy.call(this), this.element.off(y)
                }
            });
        a.plugin(x)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});