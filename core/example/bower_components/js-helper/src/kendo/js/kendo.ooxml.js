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
        function n(e) {
            var t = Math.floor(e / 26) - 1;
            return (t >= 0 ? n(t) : "") + String.fromCharCode(65 + e % 26)
        }

        function i(e, t) {
            return n(t) + (e + 1)
        }

        function o(e, t) {
            return n(t) + "$" + (e + 1)
        }

        function r(e) {
            return ((e.freezePane || {}).rowSplit || 1) - 1
        }

        function a(e) {
            return 6 > e.length && (e = e.replace(/(\w)/g, function (e, t) {
                return t + t
            })), e = e.substring(1).toUpperCase(), 8 > e.length && (e = "FF" + e), e
        }

        var s = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>',
            l = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"><dc:creator>${creator}</dc:creator><cp:lastModifiedBy>${lastModifiedBy}</cp:lastModifiedBy><dcterms:created xsi:type="dcterms:W3CDTF">${created}</dcterms:created><dcterms:modified xsi:type="dcterms:W3CDTF">${modified}</dcterms:modified></cp:coreProperties>'),
            c = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes"><Application>Microsoft Excel</Application><DocSecurity>0</DocSecurity><ScaleCrop>false</ScaleCrop><HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>${sheets.length}</vt:i4></vt:variant></vt:vector></HeadingPairs><TitlesOfParts><vt:vector size="${sheets.length}" baseType="lpstr"># for (var idx = 0; idx < sheets.length; idx++) { ## if (sheets[idx].options.title) { #<vt:lpstr>${sheets[idx].options.title}</vt:lpstr># } else { #<vt:lpstr>Sheet${idx+1}</vt:lpstr># } ## } #</vt:vector></TitlesOfParts><LinksUpToDate>false</LinksUpToDate><SharedDoc>false</SharedDoc><HyperlinksChanged>false</HyperlinksChanged><AppVersion>14.0300</AppVersion></Properties>'),
            d = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml" /><Default Extension="xml" ContentType="application/xml" /><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml" /><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/><Override PartName="/xl/sharedStrings.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml"/># for (var idx = 1; idx <= count; idx++) { #<Override PartName="/xl/worksheets/sheet${idx}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml" /># } #<Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml" /><Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml" /></Types>'),
            h = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><fileVersion appName="xl" lastEdited="5" lowestEdited="5" rupBuild="9303" /><workbookPr defaultThemeVersion="124226" /><bookViews><workbookView xWindow="240" yWindow="45" windowWidth="18195" windowHeight="7995" /></bookViews><sheets># for (var idx = 0; idx < sheets.length; idx++) { ## if (sheets[idx].options.title) { #<sheet name="${sheets[idx].options.title}" sheetId="${idx+1}" r:id="rId${idx+1}" /># } else { #<sheet name="Sheet${idx+1}" sheetId="${idx+1}" r:id="rId${idx+1}" /># } ## } #</sheets># if (definedNames.length) { #<definedNames> # for (var di = 0; di < definedNames.length; di++) { #<definedName name="_xlnm._FilterDatabase" hidden="1" localSheetId="${definedNames[di].localSheetId}">${definedNames[di].name}!$${definedNames[di].from}:$${definedNames[di].to}</definedName> # } #</definedNames># } #<calcPr calcId="145621" /></workbook>'),
            u = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac" mc:Ignorable="x14ac"><dimension ref="A1" /><sheetViews><sheetView #if(index==0) {# tabSelected="1" #}# workbookViewId="0"># if (freezePane) { #<pane state="frozen"# if (freezePane.colSplit) { # xSplit="${freezePane.colSplit}"# } ## if (freezePane.rowSplit) { # ySplit="${freezePane.rowSplit}"# } # topLeftCell="${String.fromCharCode(65 + (freezePane.colSplit || 0))}${(freezePane.rowSplit || 0)+1}"/># } #</sheetView></sheetViews><sheetFormatPr defaultRowHeight="15" x14ac:dyDescent="0.25" /># if (columns) { #<cols># for (var ci = 0; ci < columns.length; ci++) { ## var column = columns[ci]; ## if (column.width) { #<col min="${ci+1}" max="${ci+1}" customWidth="1"# if (column.autoWidth) { # width="${((column.width*7+5)/7*256)/256}" bestFit="1"# } else { # width="${(((column.width)/7)*100+0.5)/100}" # } #/># } ## } #</cols># } #<sheetData># for (var ri = 0; ri < data.length; ri++) { ## var row = data[ri]; #<row r="#=ri + 1#"># for (var ci = 0; ci < row.data.length; ci++) { ## var cell = row.data[ci];#<c r="#=cell.ref#"# if (cell.style) { # s="#=cell.style#" # } ## if (cell.type) { # t="#=cell.type#"# } #># if (cell.value != null) { #<v>${cell.value}</v># } #</c># } #</row># } #</sheetData># if (filter) { #<autoFilter ref="${filter.from}:${filter.to}"/># } ## if (mergeCells.length) { #<mergeCells count="${mergeCells.length}"># for (var ci = 0; ci < mergeCells.length; ci++) { #<mergeCell ref="${mergeCells[ci]}"/># } #</mergeCells># } #<pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3" /></worksheet>'),
            f = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"># for (var idx = 1; idx <= count; idx++) { #<Relationship Id="rId${idx}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${idx}.xml" /># } #<Relationship Id="rId${count+1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml" /><Relationship Id="rId${count+2}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings" Target="sharedStrings.xml" /></Relationships>'),
            p = t.template('<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="${count}" uniqueCount="${uniqueCount}"># for (var index in indexes) { #<si><t>${index.substring(1)}</t></si># } #</sst>'),
            g = t.template('<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="http://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><numFmts count="${formats.length}"># for (var fi = 0; fi < formats.length; fi++) { ## var format = formats[fi]; #<numFmt formatCode="${format.format}" numFmtId="${165+fi}" /># } #</numFmts><fonts count="${fonts.length+1}" x14ac:knownFonts="1"><font><sz val="11" /><color theme="1" /><name val="Calibri" /><family val="2" /><scheme val="minor" /></font># for (var fi = 0; fi < fonts.length; fi++) { ## var font = fonts[fi]; #<font># if (font.bold) { #<b/># } ## if (font.italic) { #<i/># } ## if (font.underline) { #<u/># } ## if (font.color) { #<color rgb="${font.color}" /># } else { #<color theme="1" /># } ## if (font.fontSize) { #<sz val="${font.fontSize}" /># } else { #<sz val="11" /># } ## if (font.fontName) { #<name val="${font.fontName}" /># } else { #<name val="Calibri" /><scheme val="minor" /># } #<family val="2" /></font># } #</fonts><fills count="${fills.length+1}"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill># for (var fi = 0; fi < fills.length; fi++) { ## var fill = fills[fi]; ## if (fill.background) { #<fill><patternFill patternType="solid"><fgColor rgb="${fill.background}"/></patternFill></fill># } ## } #</fills><borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders><cellXfs count="${styles.length+1}"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/># for (var si = 0; si < styles.length; si++) { ## var style = styles[si]; #<xf xfid="0"# if (style.fontId) { # fontId="${style.fontId}" applyFont="1"# } ## if (style.fillId) { # fillId="${style.fillId}" applyFill="1"# } ## if (style.numFmtId) { # numFmtId="${style.numFmtId}" applyNumberFormat="1"# } ## if (style.hAlign || style.vAlign || style.wrap) { # applyAlignment="1"# } #># if (style.hAlign || style.vAlign || style.wrap) { #<alignment# if (style.hAlign) { # horizontal="${style.hAlign}"# } ## if (style.vAlign) { # vertical="${style.vAlign}"# } ## if (style.wrap) { # wrapText="1"# } #/># } #</xf># } #</cellXfs><dxfs count="0" /><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleMedium9" /></styleSheet>'),
            m = t.timezone.remove(new Date(1900, 0, 0), "Etc/UTC"),
            v = t.Class.extend({
                init: function (e, t, n) {
                    this.options = e, this._strings = t, this._styles = n, this._mergeCells = []
                },
                toXML: function (e) {
                    var t, n, o = this.options.rows || [],
                        a = this.options.filter,
                        s = {};
                    for (this._maxCellIndex = 0, t = [], n = 0; o.length > n; n++) t.push(this._row(o, s, o[n], n));
                    return u({
                        freezePane: this.options.freezePane,
                        columns: this.options.columns,
                        data: t,
                        index: e,
                        mergeCells: this._mergeCells,
                        filter: a ? {
                            from: i(r(this.options), a.from),
                            to: i(r(this.options), a.to)
                        } : null
                    })
                },
                _row: function (e, t, n, o) {
                    var r, a, s, l, c, d;
                    for (this._cellIndex && this._cellIndex > this._maxCellIndex && (this._maxCellIndex = this._cellIndex), this._cellIndex = 0, a = [], s = n.cells, l = 0, c = s.length; c > l; l++) r = this._cell(s[l], t, o), r && a.push.apply(a, r);
                    for (; this._maxCellIndex > this._cellIndex;) d = t[this._cellIndex], d && (d.rowSpan -= 1), a.push({
                        ref: i(o, this._cellIndex)
                    }), this._cellIndex++;
                    return {
                        data: a
                    }
                },
                _lookupString: function (e) {
                    var t = "$" + e,
                        n = this._strings.indexes[t];
                    return void 0 !== n ? e = n : (e = this._strings.indexes[t] = this._strings.uniqueCount, this._strings.uniqueCount++), this._strings.count++, e
                },
                _lookupStyle: function (n) {
                    var i, o = t.stringify(n);
                    return "{}" == o ? 0 : (i = e.inArray(o, this._styles), 0 > i && (i = this._styles.push(o) - 1), i + 1)
                },
                _cell: function (e, n, o) {
                    var r, a, s, l, c, d, h, u, f, p, g, v;
                    if (!e) return void this._cellIndex++;
                    for (r = e.value, a = {
                        bold: e.bold,
                        color: e.color,
                        background: e.background,
                        italic: e.italic,
                        underline: e.underline,
                        fontName: e.fontName,
                        fontSize: e.fontSize,
                        format: e.format,
                        hAlign: e.hAlign,
                        vAlign: e.vAlign,
                        wrap: e.wrap
                    }, s = this.options.columns || [], l = s[this._cellIndex], l && l.autoWidth && (l.width = Math.max(l.width || 0, ("" + r).length)), c = typeof r, "string" === c ? (r = this._lookupString(r), c = "s") : "number" === c ? c = "n" : "boolean" === c ? (c = "b", r = +r) : r && r.getTime ? (c = null, r = (t.timezone.remove(r, "Etc/UTC") - m) / t.date.MS_PER_DAY + 1, a.format || (a.format = "mm-dd-yy")) : (c = null, r = ""), a = this._lookupStyle(a), d = [], f = n[this._cellIndex] || {}; f.rowSpan > 1;) {
                        for (f.rowSpan -= 1, h = f.colSpan; h > 0;) d.push({
                            ref: i(o, this._cellIndex)
                        }), h--, this._cellIndex++;
                        f = n[this._cellIndex] || {}
                    }
                    if (u = i(o, this._cellIndex), d.push({
                            value: r,
                            type: c,
                            style: a,
                            ref: u
                        }), p = e.colSpan || 1, g = e.rowSpan || 1, p > 1 || g > 1) {
                        for (g > 1 && (n[this._cellIndex] = {
                            colSpan: p,
                            rowSpan: g
                        }), v = 1; p > v; v++) this._cellIndex++, d.push({
                            ref: i(o, this._cellIndex)
                        });
                        this._mergeCells.push(u + ":" + i(o + g - 1, this._cellIndex))
                    }
                    return this._cellIndex++, d
                }
            }),
            _ = {
                General: 0,
                0: 1,
                "0.00": 2,
                "#,##0": 3,
                "#,##0.00": 4,
                "0%": 9,
                "0.00%": 10,
                "0.00E+00": 11,
                "# ?/?": 12,
                "# ??/??": 13,
                "mm-dd-yy": 14,
                "d-mmm-yy": 15,
                "d-mmm": 16,
                "mmm-yy": 17,
                "h:mm AM/PM": 18,
                "h:mm:ss AM/PM": 19,
                "h:mm": 20,
                "h:mm:ss": 21,
                "m/d/yy h:mm": 22,
                "#,##0 ;(#,##0)": 37,
                "#,##0 ;[Red](#,##0)": 38,
                "#,##0.00;(#,##0.00)": 39,
                "#,##0.00;[Red](#,##0.00)": 40,
                "mm:ss": 45,
                "[h]:mm:ss": 46,
                "mmss.0": 47,
                "##0.0E+0": 48,
                "@": 49,
                "[$-404]e/m/d": 27,
                "m/d/yy": 30,
                t0: 59,
                "t0.00": 60,
                "t#,##0": 61,
                "t#,##0.00": 62,
                "t0%": 67,
                "t0.00%": 68,
                "t# ?/?": 69,
                "t# ??/??": 70
            },
            w = t.Class.extend({
                init: function (t) {
                    this.options = t || {}, this._strings = {
                        indexes: {},
                        count: 0,
                        uniqueCount: 0
                    }, this._styles = [], this._sheets = e.map(this.options.sheets || [], e.proxy(function (e) {
                        return new v(e, this._strings, this._styles)
                    }, this))
                },
                toDataURL: function () {
                    var n, i, u, m, v, w, y, b, x, k, C, S, T, D;
                    if ("undefined" == typeof JSZip) throw Error("JSZip not found. Check http://docs.telerik.com/kendo-ui/framework/excel/introduction#requirements for more details.");
                    for (n = new JSZip, i = n.folder("docProps"), i.file("core.xml", l({
                        creator: this.options.creator || "Kendo UI",
                        lastModifiedBy: this.options.creator || "Kendo UI",
                        created: this.options.date || (new Date).toJSON(),
                        modified: this.options.date || (new Date).toJSON()
                    })), u = this._sheets.length, i.file("app.xml", c({
                        sheets: this._sheets
                    })), m = n.folder("_rels"), m.file(".rels", s), v = n.folder("xl"), w = v.folder("_rels"), w.file("workbook.xml.rels", f({
                        count: u
                    })), v.file("workbook.xml", h({
                        sheets: this._sheets,
                        definedNames: e.map(this._sheets, function (e, t) {
                            var n = e.options,
                                i = n.filter;
                            return i ? {
                                localSheetId: t,
                                name: n.title || "Sheet" + (t + 1),
                                from: o(r(n), i.from),
                                to: o(r(n), i.to)
                            } : void 0
                        })
                    })), y = v.folder("worksheets"), b = new Date, x = 0; u > x; x++) y.file(t.format("sheet{0}.xml", x + 1), this._sheets[x].toXML(x));
                    return k = e.map(this._styles, e.parseJSON), C = function (e) {
                        return e.underline || e.bold || e.italic || e.color || e.fontName || e.fontSize
                    }, S = e.map(k, function (e) {
                        return e.color && (e.color = a(e.color)), C(e) ? e : void 0
                    }), T = e.map(k, function (e) {
                        return e.format && void 0 === _[e.format] ? e : void 0
                    }), D = e.map(k, function (e) {
                        return e.background ? (e.background = a(e.background), e) : void 0
                    }), v.file("styles.xml", g({
                        fonts: S,
                        fills: D,
                        formats: T,
                        styles: e.map(k, function (t) {
                            var n = {};
                            return C(t) && (n.fontId = e.inArray(t, S) + 1), t.background && (n.fillId = e.inArray(t, D) + 2), n.hAlign = t.hAlign, n.vAlign = t.vAlign, n.wrap = t.wrap, t.format && (n.numFmtId = void 0 !== _[t.format] ? _[t.format] : 165 + e.inArray(t, T)), n
                        })
                    })), v.file("sharedStrings.xml", p(this._strings)), n.file("[Content_Types].xml", d({
                        count: u
                    })), "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + n.generate({
                        compression: "DEFLATE"
                    })
                }
            });
        t.ooxml = {
            Workbook: w,
            Worksheet: v
        }
    }(kendo.jQuery, kendo), window.kendo
}, "function" == typeof define && define.amd ? define : function (e, t) {
    t()
});
