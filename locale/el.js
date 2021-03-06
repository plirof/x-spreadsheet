! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 1)
}([, function(e, t, n) {
    "use strict";
    n.r(t);
    const r = {
        toolbar: {
            undo: "Undo",
            redo: "Redo",
            paintformat: "Paint format",
            clearformat: "Clear format",
            format: "Format",
            font: "Font",
            fontSize: "Font size",
            fontBold: "Έντονη γραφή",
            fontItalic: "Πλάγια γραφή italic",
            underline: "Underline",
            strike: "Strike",
            textColor: "Text color",
            fillColor: "Fill color",
            border: "Borders",
            merge: "Merge cells",
            align: "Horizontal align",
            valign: "Vertical align",
            textwrap: "Text wrapping",
            freeze: "Freeze cell",
            formula: "Functions",
            more: "More"
        },
        contextmenu: {
            copy: "Αντιγραφή",
            cut: "Αποκοπή",
            paste: "Επικόλληση",
            pasteValue: "Paste values only",
            pasteFormat: "Paste format only",
            insertRow: "Εισαγωγή Γραμμής",
            insertColumn: "Εισαγωγή Στήλης",
            deleteRow: "Διαγραφή Γραμμής",
            deleteColumn: "Διαγραφή Στήλης",
            deleteCell: "Διαγραφή κελιού",
            deleteCellText: "Διαγραφή κειμένου κελιού",
            validation: "Data validations"
        },
        format: {
            normal: "Normal",
            text: "Plain Text",
            number: "Number",
            percent: "Percent",
            rmb: "RMB",
            usd: "USD",
            date: "Date",
            time: "Time",
            datetime: "Date time",
            duration: "Duration"
        },
        formula: {
            sum: "Sum",
            average: "Average",
            max: "Max",
            min: "Min",
            concat: "Concat"
        },
        validation: {
            required: "it must be required",
            notMatch: "it not match its validation rule",
            between: "it is between {} and {}",
            notBetween: "it is not between {} and {}",
            notIn: "it is not in list",
            equal: "it equal to {}",
            notEqual: "it not equal to {}",
            lessThan: "it less than {}",
            lessThanEqual: "it less than or equal to {}",
            greaterThan: "it greater than {}",
            greaterThanEqual: "it greater than or equal to {}"
        },
        error: {
            pasteForMergedCell: "Unable to do this for merged cells"
        },
        calendar: {
            weeks: ["Κύρ", "Δευ", "Τρί", "Τέτ", "Πέμ", "Πάρ", "Σάβ"],
            months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        },
        button: {
            cancel: "Cancel",
            remove: "Remove",
            save: "Save"
        },
        dataValidation: {
            mode: "Mode",
            range: "Cell Range",
            criteria: "Criteria",
            modeType: {
                cell: "Cell",
                column: "Colun",
                row: "Row"
            },
            type: {
                list: "List",
                number: "Number",
                date: "Date",
                phone: "Phone",
                email: "Email"
            },
            operator: {
                be: "between",
                nbe: "not betwwen",
                lt: "less than",
                lte: "less than or equal to",
                gt: "greater than",
                gte: "greater than or equal to",
                eq: "equal to",
                neq: "not equal to"
            }
        }
    };
    window && window.x && window.x.spreadsheet && (window.x.spreadsheet.$messages = window.x.spreadsheet.$messages || {}, window.x.spreadsheet.$messages.en = r), t.default = r
}]);