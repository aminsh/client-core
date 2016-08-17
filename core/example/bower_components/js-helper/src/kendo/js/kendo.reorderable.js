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
    return function (e) {
        function t(t, n) {
            t = e(t), n ? t.find(".k-drag-status").removeClass("k-add").addClass("k-denied") : t.find(".k-drag-status").removeClass("k-denied").addClass("k-add")
        }

        var n = window.kendo,
            i = n.getOffset,
            o = n.ui.Widget,
            r = "change",
            s = "k-reorderable",
            a = o.extend({
                init: function (a, l) {
                    var c, d = this,
                        u = n.guid() + "-reorderable";
                    o.fn.init.call(d, a, l), a = d.element.addClass(s), l = d.options, d.draggable = c = l.draggable || new n.ui.Draggable(a, {
                        group: u,
                        filter: l.filter,
                        hint: l.hint
                    }), d.reorderDropCue = e('<div class="k-reorder-cue"><div class="k-icon k-i-arrow-s"></div><div class="k-icon k-i-arrow-n"></div></div>'), a.find(c.options.filter).kendoDropTarget({
                        group: c.options.group,
                        dragenter: function (e) {
                            var n, o, r, s;
                            d._draggable && (n = this.element, r = !d._dropTargetAllowed(n) || d._isLastDraggable(), t(e.draggable.hint, r), r || (o = i(n), s = o.left, l.inSameContainer && !l.inSameContainer({
                                source: n,
                                target: d._draggable,
                                sourceIndex: d._index(n),
                                targetIndex: d._index(d._draggable)
                            }) ? d._dropTarget = n : d._index(n) > d._index(d._draggable) && (s += n.outerWidth()), d.reorderDropCue.css({
                                height: n.outerHeight(),
                                top: o.top,
                                left: s
                            }).appendTo(document.body)))
                        },
                        dragleave: function (e) {
                            t(e.draggable.hint, !0), d.reorderDropCue.remove(), d._dropTarget = null
                        },
                        drop: function () {
                            var e, t, n;
                            d._dropTarget = null, d._draggable && (e = this.element, t = d._draggable, n = !1, d._dropTargetAllowed(e) && !d._isLastDraggable() && d.trigger(r, {
                                element: d._draggable,
                                target: e,
                                oldIndex: d._index(t),
                                newIndex: d._index(e),
                                position: i(d.reorderDropCue).left > i(e).left ? "after" : "before"
                            }))
                        }
                    }), c.bind(["dragcancel", "dragend", "dragstart", "drag"], {
                        dragcancel: function () {
                            d.reorderDropCue.remove(), d._draggable = null, d._elements = null
                        },
                        dragend: function () {
                            d.reorderDropCue.remove(), d._draggable = null, d._elements = null
                        },
                        dragstart: function (e) {
                            d._draggable = e.currentTarget, d._elements = d.element.find(d.draggable.options.filter)
                        },
                        drag: function (e) {
                            var t, n;
                            d._dropTarget && !this.hint.find(".k-drag-status").hasClass("k-denied") && (t = i(d._dropTarget).left, n = d._dropTarget.outerWidth(), d.reorderDropCue.css(e.pageX > t + n / 2 ? {
                                left: t + n
                            } : {
                                left: t
                            }))
                        }
                    })
                },
                options: {
                    name: "Reorderable",
                    filter: "*"
                },
                events: [r],
                _isLastDraggable: function () {
                    var e, t = this.options.inSameContainer,
                        n = this._draggable[0],
                        i = this._elements.get(),
                        o = !1;
                    if (!t) return !1;
                    for (; !o && i.length > 0;) e = i.pop(), o = n !== e && t({
                        source: n,
                        target: e,
                        sourceIndex: this._index(n),
                        targetIndex: this._index(e)
                    });
                    return !o
                },
                _dropTargetAllowed: function (e) {
                    var t = this.options.inSameContainer,
                        n = this.options.dragOverContainers,
                        i = this._draggable;
                    return i[0] === e[0] ? !1 : t && n ? t({
                        source: i,
                        target: e,
                        sourceIndex: this._index(i),
                        targetIndex: this._index(e)
                    }) ? !0 : n(this._index(i), this._index(e)) : !0
                },
                _index: function (e) {
                    return this._elements.index(e)
                },
                destroy: function () {
                    var t = this;
                    o.fn.destroy.call(t), t.element.find(t.draggable.options.filter).each(function () {
                        var t = e(this);
                        t.data("kendoDropTarget") && t.data("kendoDropTarget").destroy()
                    }), t.draggable && (t.draggable.destroy(), t.draggable.element = t.draggable = null), t.elements = t.reorderDropCue = t._elements = t._draggable = null
                }
            });
        n.ui.plugin(a)
    }(window.kendo.jQuery), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});
