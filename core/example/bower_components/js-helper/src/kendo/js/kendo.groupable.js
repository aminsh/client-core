/*
 * Kendo UI v2015.2.624 (http://www.telerik.com/kendo-ui)
 * Copyright 2015 Telerik AD. All rights reserved.
 *
 * Kendo UI commercial licenses may be obtained at
 * http://www.telerik.com/purchase/license-agreement/kendo-ui-complete
 * If you do not own a commercial license, this file shall be governed by the trial license terms.
 */
!function (e, define) {
    define(["./kendo.core", "./kendo.draganddrop"], e)
}(function () {
    return function (e, t) {
        function n(e) {
            return e.position().top + 3
        }

        var i = window.kendo,
            o = i.ui.Widget,
            r = e.proxy,
            a = !1,
            s = ".kendoGroupable",
            l = "change",
            c = i.template('<div class="k-group-indicator" data-#=data.ns#field="${data.field}" data-#=data.ns#title="${data.title || ""}" data-#=data.ns#dir="${data.dir || "asc"}"><a href="\\#" class="k-link"><span class="k-icon k-si-arrow-${(data.dir || "asc") == "asc" ? "n" : "s"}">(sorted ${(data.dir || "asc") == "asc" ? "ascending": "descending"})</span>${data.title ? data.title: data.field}</a><a class="k-button k-button-icon k-button-bare"><span class="k-icon k-group-delete"></span></a></div>', {
                useWithBlock: !1
            }),
            d = function (t) {
                return e('<div class="k-header k-drag-clue" />').css({
                    width: t.width(),
                    paddingLeft: t.css("paddingLeft"),
                    paddingRight: t.css("paddingRight"),
                    lineHeight: t.height() + "px",
                    paddingTop: t.css("paddingTop"),
                    paddingBottom: t.css("paddingBottom")
                }).html(t.attr(i.attr("title")) || t.attr(i.attr("field"))).prepend('<span class="k-icon k-drag-status k-denied" />')
            },
            h = e('<div class="k-grouping-dropclue"/>'),
            u = o.extend({
                init: function (c, u) {
                    var f, p, g = this,
                        m = i.guid(),
                        v = r(g._intializePositions, g),
                        _ = g._dropCuePositions = [];
                    o.fn.init.call(g, c, u), a = i.support.isRtl(c), p = a ? "right" : "left", g.draggable = f = g.options.draggable || new i.ui.Draggable(g.element, {
                        filter: g.options.draggableElements,
                        hint: d,
                        group: m
                    }), g.groupContainer = e(g.options.groupContainer, g.element).kendoDropTarget({
                        group: f.options.group,
                        dragenter: function (e) {
                            g._canDrag(e.draggable.currentTarget) && (e.draggable.hint.find(".k-drag-status").removeClass("k-denied").addClass("k-add"), h.css("top", n(g.groupContainer)).css(p, 0).appendTo(g.groupContainer))
                        },
                        dragleave: function (e) {
                            e.draggable.hint.find(".k-drag-status").removeClass("k-add").addClass("k-denied"), h.remove()
                        },
                        drop: function (t) {
                            var n, o = t.draggable.currentTarget,
                                r = o.attr(i.attr("field")),
                                s = o.attr(i.attr("title")),
                                l = g.indicator(r),
                                c = g._dropCuePositions,
                                d = c[c.length - 1];
                            (o.hasClass("k-group-indicator") || g._canDrag(o)) && (d ? (n = g._dropCuePosition(i.getOffset(h).left + parseInt(d.element.css("marginLeft"), 10) * (a ? -1 : 1) + parseInt(d.element.css("marginRight"), 10)), n && g._canDrop(e(l), n.element, n.left) && (n.before ? n.element.before(l || g.buildIndicator(r, s)) : n.element.after(l || g.buildIndicator(r, s)), g._change())) : (g.groupContainer.append(g.buildIndicator(r, s)), g._change()))
                        }
                    }).kendoDraggable({
                        filter: "div.k-group-indicator",
                        hint: d,
                        group: f.options.group,
                        dragcancel: r(g._dragCancel, g),
                        dragstart: function (e) {
                            var t = e.currentTarget,
                                i = parseInt(t.css("marginLeft"), 10),
                                o = t.position(),
                                r = a ? o.left - i : o.left + t.outerWidth();
                            v(), h.css({
                                top: n(g.groupContainer),
                                left: r
                            }).appendTo(g.groupContainer), this.hint.find(".k-drag-status").removeClass("k-denied").addClass("k-add")
                        },
                        dragend: function () {
                            g._dragEnd(this)
                        },
                        drag: r(g._drag, g)
                    }).on("click" + s, ".k-button", function (t) {
                        t.preventDefault(), g._removeIndicator(e(this).parent())
                    }).on("click" + s, ".k-link", function (t) {
                        var n = e(this).parent(),
                            o = g.buildIndicator(n.attr(i.attr("field")), n.attr(i.attr("title")), "asc" == n.attr(i.attr("dir")) ? "desc" : "asc");
                        n.before(o).remove(), g._change(), t.preventDefault()
                    }), f.bind(["dragend", "dragcancel", "dragstart", "drag"], {
                        dragend: function () {
                            g._dragEnd(this)
                        },
                        dragcancel: r(g._dragCancel, g),
                        dragstart: function (e) {
                            var n, i, o;
                            return g.options.allowDrag || g._canDrag(e.currentTarget) ? (v(), _.length ? (n = _[_.length - 1].element, i = parseInt(n.css("marginRight"), 10), o = n.position().left + n.outerWidth() + i) : o = 0, t) : (e.preventDefault(), t)
                        },
                        drag: r(g._drag, g)
                    }), g.dataSource = g.options.dataSource, g.dataSource && g._refreshHandler ? g.dataSource.unbind(l, g._refreshHandler) : g._refreshHandler = r(g.refresh, g), g.dataSource && (g.dataSource.bind("change", g._refreshHandler), g.refresh())
                },
                refresh: function () {
                    var t = this,
                        n = t.dataSource;
                    t.groupContainer && t.groupContainer.empty().append(e.map(n.group() || [], function (n) {
                        var o = n.field,
                            r = i.attr("field"),
                            a = t.element.find(t.options.filter).filter(function () {
                                return e(this).attr(r) === o
                            });
                        return t.buildIndicator(n.field, a.attr(i.attr("title")), n.dir)
                    }).join("")), t._invalidateGroupContainer()
                },
                destroy: function () {
                    var e = this;
                    o.fn.destroy.call(e), e.groupContainer.off(s), e.groupContainer.data("kendoDropTarget") && e.groupContainer.data("kendoDropTarget").destroy(), e.groupContainer.data("kendoDraggable") && e.groupContainer.data("kendoDraggable").destroy(), e.options.draggable || e.draggable.destroy(), e.dataSource && e._refreshHandler && (e.dataSource.unbind("change", e._refreshHandler), e._refreshHandler = null), e.groupContainer = e.element = e.draggable = null
                },
                options: {
                    name: "Groupable",
                    filter: "th",
                    draggableElements: "th",
                    messages: {
                        empty: "Drag a column header and drop it here to group by that column"
                    }
                },
                indicator: function (t) {
                    var n = e(".k-group-indicator", this.groupContainer);
                    return e.grep(n, function (n) {
                        return e(n).attr(i.attr("field")) === t
                    })[0]
                },
                buildIndicator: function (e, t, n) {
                    return c({
                        field: e.replace(/"/g, "'"),
                        dir: n,
                        title: t,
                        ns: i.ns
                    })
                },
                descriptors: function () {
                    var t, n, o, r, a, s = this,
                        l = e(".k-group-indicator", s.groupContainer);
                    return t = s.element.find(s.options.filter).map(function () {
                        var t = e(this),
                            o = t.attr(i.attr("aggregates")),
                            s = t.attr(i.attr("field"));
                        if (o && "" !== o)
                            for (n = o.split(","), o = [], r = 0, a = n.length; a > r; r++) o.push({
                                field: s,
                                aggregate: n[r]
                            });
                        return o
                    }).toArray(), e.map(l, function (n) {
                        return n = e(n), o = n.attr(i.attr("field")), {
                            field: o,
                            dir: n.attr(i.attr("dir")),
                            aggregates: t || []
                        }
                    })
                },
                _removeIndicator: function (e) {
                    var t = this;
                    e.remove(), t._invalidateGroupContainer(), t._change()
                },
                _change: function () {
                    var e = this;
                    e.dataSource && e.dataSource.group(e.descriptors())
                },
                _dropCuePosition: function (t) {
                    var n, i, o, r, s, l = this._dropCuePositions;
                    if (h.is(":visible") && 0 !== l.length) return t = Math.ceil(t), n = l[l.length - 1], i = n.left, o = n.right, r = parseInt(n.element.css("marginLeft"), 10), s = parseInt(n.element.css("marginRight"), 10), t >= o && !a || i > t && a ? t = {
                        left: n.element.position().left + (a ? -r : n.element.outerWidth() + s),
                        element: n.element,
                        before: !1
                    } : (t = e.grep(l, function (e) {
                        return t >= e.left && e.right >= t || a && t > e.right
                    })[0], t && (t = {
                        left: a ? t.element.position().left + t.element.outerWidth() + s : t.element.position().left - r,
                        element: t.element,
                        before: !0
                    })), t
                },
                _drag: function (e) {
                    var t = this._dropCuePosition(e.x.location);
                    t && h.css({
                        left: t.left,
                        right: "auto"
                    })
                },
                _canDrag: function (e) {
                    var t = e.attr(i.attr("field"));
                    return "false" != e.attr(i.attr("groupable")) && t && (e.hasClass("k-group-indicator") || !this.indicator(t))
                },
                _canDrop: function (e, t, n) {
                    var i = e.next(),
                        o = e[0] !== t[0] && (!i[0] || t[0] !== i[0] || !a && n > i.position().left || a && n < i.position().left);
                    return o
                },
                _dragEnd: function (t) {
                    var n = this,
                        o = t.currentTarget.attr(i.attr("field")),
                        r = n.indicator(o);
                    t !== n.options.draggable && !t.dropped && r && n._removeIndicator(e(r)), n._dragCancel()
                },
                _dragCancel: function () {
                    h.remove(), this._dropCuePositions = []
                },
                _intializePositions: function () {
                    var t, n = this,
                        o = e(".k-group-indicator", n.groupContainer);
                    n._dropCuePositions = e.map(o, function (n) {
                        return n = e(n), t = i.getOffset(n).left, {
                            left: parseInt(t, 10),
                            right: parseInt(t + n.outerWidth(), 10),
                            element: n
                        }
                    })
                },
                _invalidateGroupContainer: function () {
                    var e = this.groupContainer;
                    e && e.is(":empty") && e.html(this.options.messages.empty)
                }
            });
        i.ui.plugin(u)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});