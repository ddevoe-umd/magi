/* 
 CanvasJS Chart - v3.10.14 GA - https://canvasjs.com/ 
 Copyright 2024 fenopix

 --------------------- License Information --------------------
 CanvasJS Chart is a commercial product which requires purchase of license. Without a commercial license you can use it for evaluation purposes for upto 30 days. Please refer to the following link for further details.
 https://canvasjs.com/license/


 ---------------------Free for Non-Commercial Use--------------------
 
 For non-commercial purposes you can use the software for free under Creative Commons Attribution-NonCommercial 3.0 License.
 A credit Link is added to the chart which should be preserved. Refer to the following link for further details on the same.
 https://creativecommons.org/licenses/by-nc/3.0/deed.en_US
 */

/*tslint:disable*/
/*eslint-disable*/
/*jshint ignore:start*/
(function () {
    function oa(f, t) {
        f.prototype = eb(t.prototype);
        f.prototype.constructor = f;
        f.base = t.prototype;
    }
    function eb(f) {
        function t() {}
        t.prototype = f;
        return new t();
    }
    function Za(f, t, l) {
        "millisecond" === l
            ? f.setMilliseconds(f.getMilliseconds() + 1 * t)
            : "second" === l
            ? f.setSeconds(f.getSeconds() + 1 * t)
            : "minute" === l
            ? f.setMinutes(f.getMinutes() + 1 * t)
            : "hour" === l
            ? f.setHours(f.getHours() + 1 * t)
            : "day" === l
            ? f.setDate(f.getDate() + 1 * t)
            : "week" === l
            ? f.setDate(f.getDate() + 7 * t)
            : "month" === l
            ? f.setMonth(f.getMonth() + 1 * t)
            : "year" === l && f.setFullYear(f.getFullYear() + 1 * t);
        return f;
    }
    function $(f, t) {
        var l = !1;
        0 > f && ((l = !0), (f *= -1));
        f = "" + f;
        for (t = t ? t : 1; f.length < t; ) f = "0" + f;
        return l ? "-" + f : f;
    }
    function Ha(f) {
        if (!f) return f;
        f = f.replace(/^\s\s*/, "");
        for (var t = /\s/, l = f.length; t.test(f.charAt(--l)); );
        return f.slice(0, l + 1);
    }
    function za(f) {
        f.roundRect = function (f, l, r, T, qa, A, w, z) {
            w && (this.fillStyle = w);
            z && (this.strokeStyle = z);
            "undefined" === typeof qa && (qa = 5);
            this.lineWidth = A;
            this.beginPath();
            this.moveTo(f + qa, l);
            this.lineTo(f + r - qa, l);
            this.quadraticCurveTo(f + r, l, f + r, l + qa);
            this.lineTo(f + r, l + T - qa);
            this.quadraticCurveTo(f + r, l + T, f + r - qa, l + T);
            this.lineTo(f + qa, l + T);
            this.quadraticCurveTo(f, l + T, f, l + T - qa);
            this.lineTo(f, l + qa);
            this.quadraticCurveTo(f, l, f + qa, l);
            this.closePath();
            w && this.fill();
            z && 0 < A && this.stroke();
        };
    }
    function Sa(f, t) {
        return f - t;
    }
    function U(f) {
        var t = ((f & 16711680) >> 16).toString(16),
            l = ((f & 65280) >> 8).toString(16);
        f = ((f & 255) >> 0).toString(16);
        t = 2 > t.length ? "0" + t : t;
        l = 2 > l.length ? "0" + l : l;
        f = 2 > f.length ? "0" + f : f;
        return "#" + t + l + f;
    }
    function fb(f, t) {
        var l = this.length >>> 0,
            r = Number(t) || 0,
            r = 0 > r ? Math.ceil(r) : Math.floor(r);
        for (0 > r && (r += l); r < l; r++) if (r in this && this[r] === f) return r;
        return -1;
    }
    function l(f) {
        return null === f || "undefined" === typeof f;
    }
    function Ea(f) {
        f.indexOf || (f.indexOf = fb);
        return f;
    }
    function gb(f) {
        if (ua.fSDec)
            f[X("`eeDwdouMhrudods")](X("e`u`@ohl`uhnoHuds`uhnoDoe"), function () {
                ua._fTWm && ua._fTWm(f);
            });
    }
    function $a(f, t, l) {
        l = l || "normal";
        var r = f + "_" + t + "_" + l,
            T = ab[r];
        if (isNaN(T)) {
            try {
                if (!wa) {
                    var qa = document.body;
                    wa = document.createElement("span");
                    wa.innerHTML = "";
                    var A = document.createTextNode("Mpgyi");
                    wa.appendChild(A);
                    qa.appendChild(wa);
                }
                wa.style.display = "";
                J(wa, { position: "absolute", left: "0px", top: "-20000px", padding: "0px", margin: "0px", border: "none", whiteSpace: "pre", lineHeight: "normal", fontFamily: f, fontSize: t + "px", fontWeight: l });
                T = Math.round(wa.offsetHeight);
                wa.style.display = "none";
            } catch (w) {
                T = Math.ceil(1.1 * t);
            }
            T = Math.max(T, t);
            ab[r] = T;
        }
        return T;
    }
    function I(f, t) {
        var l = [];
        if (
            (l = {
                solid: [],
                shortDash: [3, 1],
                shortDot: [1, 1],
                shortDashDot: [3, 1, 1, 1],
                shortDashDotDot: [3, 1, 1, 1, 1, 1],
                dot: [1, 2],
                dash: [4, 2],
                dashDot: [4, 2, 1, 2],
                longDash: [8, 2],
                longDashDot: [8, 2, 1, 2],
                longDashDotDot: [8, 2, 1, 2, 1, 2],
            }[f || "solid"])
        )
            for (var r = 0; r < l.length; r++) l[r] *= t;
        else l = [];
        return l;
    }
    function G(f, t, xa, r, T) {
        r = r || [];
        T = l(T) ? (hb ? { passive: !1, capture: !1 } : !1) : T;
        r.push([f, t, xa, T]);
        return f.addEventListener
            ? (f.addEventListener(t, xa, T), xa)
            : f.attachEvent
            ? ((r = function (t) {
                  t = t || window.event;
                  t.preventDefault =
                      t.preventDefault ||
                      function () {
                          t.returnValue = !1;
                      };
                  t.stopPropagation =
                      t.stopPropagation ||
                      function () {
                          t.cancelBubble = !0;
                      };
                  xa.call(f, t);
              }),
              f.attachEvent("on" + t, r),
              r)
            : !1;
    }
    function ib(f) {
        if (f._menuButton)
            f.exportEnabled
                ? (J(f._menuButton, { backgroundColor: f.toolbar.itemBackgroundColor, color: f.toolbar.fontColor }),
                  Ma(f._menuButton),
                  sa(f, f._menuButton, "menu"),
                  0 >= navigator.userAgent.search("MSIE") && f._menuButton.childNodes[0] && J(f._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }))
                : va(f._menuButton);
        else if (f.exportEnabled && r) {
            var t = !1;
            f._menuButton = document.createElement("button");
            sa(f, f._menuButton, "menu");
            f._toolBar.appendChild(f._menuButton);
            G(
                f._menuButton,
                "touchstart",
                function (f) {
                    t = !0;
                },
                f.allDOMEventHandlers
            );
            G(
                f._menuButton,
                "click",
                function () {
                    "none" !== f._dropdownMenu.style.display ||
                        (f._dropDownCloseTime && 500 >= new Date().getTime() - f._dropDownCloseTime.getTime()) ||
                        ((f._dropdownMenu.style.display = "block"), f._menuButton.blur(), f._dropdownMenu.focus());
                },
                f.allDOMEventHandlers,
                !0
            );
            G(
                f._menuButton,
                "mousemove",
                function () {
                    t ||
                        (J(f._menuButton, { backgroundColor: f.toolbar.itemBackgroundColorOnHover, color: f.toolbar.fontColorOnHover }),
                        0 >= navigator.userAgent.search("MSIE") && J(f._menuButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                },
                f.allDOMEventHandlers,
                !0
            );
            G(
                f._menuButton,
                "mouseout",
                function () {
                    t ||
                        (J(f._menuButton, { backgroundColor: f.toolbar.itemBackgroundColor, color: f.toolbar.fontColor }),
                        0 >= navigator.userAgent.search("MSIE") && J(f._menuButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                },
                f.allDOMEventHandlers,
                !0
            );
        }
        if (f.exportEnabled && f._dropdownMenu) {
            var l = f.theme && -1 !== f.theme.indexOf("dark") ? "black" : "#888888";
            J(f._dropdownMenu, { backgroundColor: f.toolbar.itemBackgroundColor, color: f.toolbar.fontColor, boxShadow: "2px 2px 10px " + l });
            for (var l = f._dropdownMenu.childNodes, M = [f._cultureInfo.printText, f._cultureInfo.saveJPGText, f._cultureInfo.savePNGText], T = 0; T < M.length; T++)
                J(l[T], { backgroundColor: f.toolbar.itemBackgroundColor, color: f.toolbar.fontColor }), (l[T].innerHTML = M[T]);
        } else
            !f._dropdownMenu &&
                f.exportEnabled &&
                r &&
                ((t = !1),
                (f._dropdownMenu = document.createElement("div")),
                f._dropdownMenu.setAttribute("tabindex", -1),
                (l = f.theme && -1 !== f.theme.indexOf("dark") ? "black" : "#888888"),
                J(f._dropdownMenu, {
                    position: "absolute",
                    zIndex: 1,
                    userSelect: "none",
                    MozUserSeelct: "none",
                    WebkitUserSelect: "none",
                    msUserSelect: "none",
                    cursor: "pointer",
                    right: "0px",
                    top: "25px",
                    minWidth: "120px",
                    outline: 0,
                    fontSize: "14px",
                    fontFamily: "Arial, Helvetica, sans-serif",
                    padding: "5px 0px 5px 0px",
                    textAlign: "left",
                    lineHeight: "10px",
                    backgroundColor: f.toolbar.itemBackgroundColor,
                    boxShadow: "2px 2px 10px " + l,
                }),
                (f._dropdownMenu.style.display = "none"),
                f._toolBar.appendChild(f._dropdownMenu),
                G(
                    f._dropdownMenu,
                    "blur",
                    function () {
                        va(f._dropdownMenu);
                        f._dropDownCloseTime = new Date();
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                (l = document.createElement("div")),
                J(l, { padding: "12px 8px 12px 8px" }),
                (l.innerHTML = f._cultureInfo.printText),
                (l.style.backgroundColor = f.toolbar.itemBackgroundColor),
                (l.style.color = f.toolbar.fontColor),
                f._dropdownMenu.appendChild(l),
                G(
                    l,
                    "touchstart",
                    function (f) {
                        t = !0;
                    },
                    f.allDOMEventHandlers
                ),
                G(
                    l,
                    "mousemove",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover), (this.style.color = f.toolbar.fontColorOnHover));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "mouseout",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColor), (this.style.color = f.toolbar.fontColor));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "click",
                    function () {
                        f.print();
                        va(f._dropdownMenu);
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                (l = document.createElement("div")),
                J(l, { padding: "12px 8px 12px 8px" }),
                (l.innerHTML = f._cultureInfo.saveJPGText),
                (l.style.backgroundColor = f.toolbar.itemBackgroundColor),
                (l.style.color = f.toolbar.fontColor),
                f._dropdownMenu.appendChild(l),
                G(
                    l,
                    "touchstart",
                    function (f) {
                        t = !0;
                    },
                    f.allDOMEventHandlers
                ),
                G(
                    l,
                    "mousemove",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover), (this.style.color = f.toolbar.fontColorOnHover));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "mouseout",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColor), (this.style.color = f.toolbar.fontColor));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "click",
                    function () {
                        f.exportChart({ format: "jpeg", fileName: f.exportFileName });
                        va(f._dropdownMenu);
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                (l = document.createElement("div")),
                J(l, { padding: "12px 8px 12px 8px" }),
                (l.innerHTML = f._cultureInfo.savePNGText),
                (l.style.backgroundColor = f.toolbar.itemBackgroundColor),
                (l.style.color = f.toolbar.fontColor),
                f._dropdownMenu.appendChild(l),
                G(
                    l,
                    "touchstart",
                    function (f) {
                        t = !0;
                    },
                    f.allDOMEventHandlers
                ),
                G(
                    l,
                    "mousemove",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColorOnHover), (this.style.color = f.toolbar.fontColorOnHover));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "mouseout",
                    function () {
                        t || ((this.style.backgroundColor = f.toolbar.itemBackgroundColor), (this.style.color = f.toolbar.fontColor));
                    },
                    f.allDOMEventHandlers,
                    !0
                ),
                G(
                    l,
                    "click",
                    function () {
                        f.exportChart({ format: "png", fileName: f.exportFileName });
                        va(f._dropdownMenu);
                    },
                    f.allDOMEventHandlers,
                    !0
                ));
    }
    function bb(f, t, l) {
        f *= ia;
        t *= ia;
        f = l.getImageData(f, t, 2, 2).data;
        t = !0;
        for (l = 0; 4 > l; l++)
            if ((f[l] !== f[l + 4]) | (f[l] !== f[l + 8]) | (f[l] !== f[l + 12])) {
                t = !1;
                break;
            }
        return t ? (f[0] << 16) | (f[1] << 8) | f[2] : 0;
    }
    function ma(f, t, l) {
        return f in t ? t[f] : l[f];
    }
    function Na(f, t, xa, M) {
        r && cb
            ? ((M = !l(M) && M ? f.getContext("2d", { willReadFrequently: !0 }) : f.getContext("2d")),
              (Oa = M.webkitBackingStorePixelRatio || M.mozBackingStorePixelRatio || M.msBackingStorePixelRatio || M.oBackingStorePixelRatio || M.backingStorePixelRatio || 1),
              (ia = Ta / Oa),
              (f.width = t * ia),
              (f.height = xa * ia),
              Ta !== Oa && ((f.style.width = t + "px"), (f.style.height = xa + "px"), M.scale(ia, ia)))
            : ((f.width = t), (f.height = xa));
    }
    function jb(f) {
        if (!kb) {
            var t = !1,
                l = !1;
            "undefined" === typeof pa.Chart.creditHref ? ((f.creditHref = X("iuuqr;..b`ow`rkr/bnl.")), (f.creditText = X("B`ow`rKR/bnl"))) : ((t = f.updateOption("creditText")), (l = f.updateOption("creditHref")));
            if (f.creditHref && f.creditText) {
                f._creditLink ||
                    ((f._creditLink = document.createElement("a")),
                    f._creditLink.setAttribute("class", "canvasjs-chart-credit"),
                    f._creditLink.setAttribute("title", "JavaScript Charts"),
                    J(f._creditLink, {
                        outline: "none",
                        margin: "0px",
                        position: "absolute",
                        right: "2px",
                        top: f.height - 14 + "px",
                        color: "dimgrey",
                        textDecoration: "none",
                        fontSize: "11px",
                        fontFamily: "Calibri, Lucida Grande, Lucida Sans Unicode, Arial, sans-serif",
                    }),
                    f._creditLink.setAttribute("tabIndex", -1),
                    f._creditLink.setAttribute("target", "_blank"));
                if (0 === f.renderCount || t || l) f._creditLink.setAttribute("href", f.creditHref), (f._creditLink.innerHTML = '');
                f._creditLink && f.creditHref && f.creditText
                    ? (f._creditLink.parentElement || f._canvasJSContainer.appendChild(f._creditLink), (f._creditLink.style.top = f.height - 14 + "px"))
                    : f._creditLink.parentElement && f._canvasJSContainer.removeChild(f._creditLink);
            }
        }
    }
    function ta(f, t, l) {
        Ia && ((this.canvasCount |= 0), window.console.log(++this.canvasCount));
        var M = document.createElement("canvas");
        M.setAttribute("class", "canvasjs-chart-canvas");
        Na(M, f, t, l);
        r || "undefined" === typeof G_vmlCanvasManager || G_vmlCanvasManager.initElement(M);
        return M;
    }
    function J(f, t) {
        for (var l in t) f.style[l] = t[l];
    }
    function sa(f, t, l) {
        t.getAttribute("state") ||
            ((t.style.backgroundColor = f.toolbar.itemBackgroundColor), (t.style.color = f.toolbar.fontColor), (t.style.border = "none"), J(t, { WebkitUserSelect: "none", MozUserSelect: "none", msUserSelect: "none", userSelect: "none" }));
        t.getAttribute("state") !== l &&
            (t.setAttribute("state", l),
            t.setAttribute("type", "button"),
            J(t, { padding: "5px 12px", cursor: "pointer", float: "left", width: "40px", height: "25px", outline: "0px", verticalAlign: "baseline", lineHeight: "0" }),
            (t.innerHTML = "<img src='" + lb[l].image + "' alt='" + f._cultureInfo[l + "Text"] + "' />"),
            J(t.childNodes[0], { height: "95%", pointerEvents: "none" }));
        t.setAttribute("title", f._cultureInfo[l + "Text"]);
    }
    function Ma() {
        for (var f = null, t = 0; t < arguments.length; t++) (f = arguments[t]), f.style && (f.style.display = "inline");
    }
    function va() {
        for (var f = null, t = 0; t < arguments.length; t++) (f = arguments[t]) && f.style && (f.style.display = "none");
    }
    function Ua(f, t, l, r, T) {
        if (null === f || "undefined" === typeof f) return "undefined" === typeof l ? t : l;
        f = parseFloat(f.toString()) * (0 <= f.toString().indexOf("%") ? t / 100 : 1);
        "undefined" !== typeof r && ((f = Math.min(r, f)), "undefined" !== typeof T && (f = Math.max(T, f)));
        return !isNaN(f) && f <= t && 0 <= f ? f : "undefined" === typeof l ? t : l;
    }
    function Y(f, t, r, M, T) {
        this._defaultsKey = f;
        this._themeOptionsKey = t;
        this._index = M;
        this.parent = T;
        this._eventListeners = [];
        f = {};
        this.theme && l(this.parent) && l(t) && l(M)
            ? (f = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme])
            : this.parent &&
              this.parent.themeOptions &&
              this.parent.themeOptions[t] &&
              (null === M ? (f = this.parent.themeOptions[t]) : 0 < this.parent.themeOptions[t].length && ((M = Math.min(this.parent.themeOptions[t].length - 1, M)), (f = this.parent.themeOptions[t][M])));
        this.themeOptions = f;
        this.options = r ? r : { _isPlaceholder: !0 };
        this.setOptions(this.options, f);
    }
    function Fa(f, t, l, r, T) {
        "undefined" === typeof T && (T = 0);
        this._padding = T;
        this._x1 = f;
        this._y1 = t;
        this._x2 = l;
        this._y2 = r;
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    }
    function ka(f, t) {
        ka.base.constructor.call(this, "TextBlock", null, t, null, null);
        this.ctx = f;
        this._isDirty = !0;
        this._wrappedText = null;
        this._initialize();
    }
    function Va(f, t) {
        Va.base.constructor.call(this, "Toolbar", "toolbar", t, null, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "toolbar";
    }
    function Aa(f, t) {
        Aa.base.constructor.call(this, "Title", "title", t, null, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "title";
        if (l(this.options.margin) && f.options.subtitles)
            for (var r = f.options.subtitles, M = 0; M < r.length; M++)
                if (
                    ((l(r[M].horizontalAlign) && "center" === this.horizontalAlign) || r[M].horizontalAlign === this.horizontalAlign) &&
                    ((l(r[M].verticalAlign) && "top" === this.verticalAlign) || r[M].verticalAlign === this.verticalAlign) &&
                    !r[M].dockInsidePlotArea === !this.dockInsidePlotArea
                ) {
                    this.margin = 0;
                    break;
                }
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Ja(f, t, l) {
        Ja.base.constructor.call(this, "Subtitle", "subtitles", t, l, f);
        this.chart = f;
        this.canvas = f.canvas;
        this.ctx = this.chart.ctx;
        this.optionsName = "subtitles";
        this.isOptionsInArray = !0;
        "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
        this.height = this.width = null;
        this.bounds = { x1: null, y1: null, x2: null, y2: null };
    }
    function Wa() {
        this.pool = [];
    }
    function Ka(f) {
        var t;
        f && La[f] && (t = La[f]);
        Ka.base.constructor.call(this, "CultureInfo", null, t, null, null);
    }
    var Ia = !1,
        ua = {},
        r = !!document.createElement("canvas").getContext,
        pa = {
            Chart: {
                width: 500,
                height: 400,
                zoomEnabled: !1,
                zoomType: "x",
                backgroundColor: "white",
                theme: "light1",
                animationEnabled: !1,
                animationDuration: 1200,
                dataPointWidth: null,
                dataPointMinWidth: null,
                dataPointMaxWidth: null,
                colorSet: "colorSet1",
                culture: "en",
                creditHref: "",
                creditText: ".",
                interactivityEnabled: !0,
                exportEnabled: !1,
                exportFileName: "Chart",
                rangeChanging: null,
                rangeChanged: null,
                publicProperties: {
                    title: "readWrite",
                    subtitles: "readWrite",
                    toolbar: "readWrite",
                    toolTip: "readWrite",
                    legend: "readWrite",
                    axisX: "readWrite",
                    axisY: "readWrite",
                    axisX2: "readWrite",
                    axisY2: "readWrite",
                    data: "readWrite",
                    options: "readWrite",
                    bounds: "readOnly",
                    container: "readOnly",
                    selectedColorSet: "readOnly",
                },
            },
            Title: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 20,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: r ? "transparent" : null,
                margin: 5,
                wrap: !0,
                maxWidth: null,
                textAlign: "center",
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            Subtitle: {
                padding: 0,
                text: null,
                verticalAlign: "top",
                horizontalAlign: "center",
                fontSize: 14,
                fontFamily: "Calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                margin: 2,
                wrap: !0,
                maxWidth: null,
                textAlign: "center",
                dockInsidePlotArea: !1,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            Toolbar: {
                itemBackgroundColor: "white",
                itemBackgroundColorOnHover: "#2196f3",
                buttonBorderColor: "#2196f3",
                buttonBorderThickness: 1,
                fontColor: "black",
                fontColorOnHover: "white",
                publicProperties: { options: "readWrite", chart: "readOnly" },
            },
            Legend: {
                name: null,
                verticalAlign: "center",
                horizontalAlign: "right",
                fontSize: 14,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                cursor: null,
                itemmouseover: null,
                itemmouseout: null,
                itemmousemove: null,
                itemclick: null,
                dockInsidePlotArea: !1,
                reversed: !1,
                backgroundColor: r ? "transparent" : null,
                borderColor: r ? "transparent" : null,
                borderThickness: 0,
                cornerRadius: 0,
                maxWidth: null,
                maxHeight: null,
                markerMargin: null,
                itemMaxWidth: null,
                itemWidth: null,
                itemWrap: !0,
                itemTextFormatter: null,
                publicProperties: { options: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            ToolTip: {
                enabled: !0,
                shared: !1,
                animationEnabled: !0,
                content: null,
                contentFormatter: null,
                reversed: !1,
                backgroundColor: r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)",
                borderColor: null,
                borderThickness: 2,
                cornerRadius: 5,
                fontSize: 14,
                fontColor: "black",
                fontFamily: "Calibri, Arial, Georgia, serif;",
                fontWeight: "normal",
                fontStyle: "italic",
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", chart: "readOnly" },
            },
            Axis: {
                minimum: null,
                maximum: null,
                viewportMinimum: null,
                viewportMaximum: null,
                interval: null,
                intervalType: null,
                reversed: !1,
                logarithmic: !1,
                logarithmBase: 10,
                title: null,
                titleFontColor: "black",
                titleFontSize: 20,
                titleFontFamily: "arial",
                titleFontWeight: "normal",
                titleFontStyle: "normal",
                titleWrap: !0,
                titleMaxWidth: null,
                titleBackgroundColor: r ? "transparent" : null,
                titleBorderColor: r ? "transparent" : null,
                titleBorderThickness: 0,
                titleCornerRadius: 0,
                titleTextAlign: "left",
                labelAngle: 0,
                labelFontFamily: "arial",
                labelFontColor: "black",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelAutoFit: !0,
                labelWrap: !0,
                labelMaxWidth: null,
                labelFormatter: null,
                labelBackgroundColor: r ? "transparent" : null,
                labelBorderColor: r ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelPlacement: "outside",
                labelTextAlign: "left",
                prefix: "",
                suffix: "",
                includeZero: !1,
                tickLength: 5,
                tickColor: "black",
                tickThickness: 1,
                tickPlacement: "outside",
                lineColor: "black",
                lineThickness: 1,
                lineDashType: "solid",
                gridColor: "#A0A0A0",
                gridThickness: 0,
                gridDashType: "solid",
                interlacedColor: r ? "transparent" : null,
                valueFormatString: null,
                margin: 2,
                publicProperties: { options: "readWrite", stripLines: "readWrite", scaleBreaks: "readWrite", crosshair: "readWrite", bounds: "readOnly", chart: "readOnly" },
            },
            StripLine: {
                value: null,
                startValue: null,
                endValue: null,
                color: "orange",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelPlacement: "inside",
                labelAlign: "far",
                labelWrap: !0,
                labelMaxWidth: null,
                labelBackgroundColor: null,
                labelBorderColor: r ? "transparent" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: "arial",
                labelFontColor: "orange",
                labelFontSize: 12,
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                labelTextAlign: "left",
                showOnTop: !1,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            ScaleBreaks: {
                autoCalculate: !1,
                collapsibleThreshold: "25%",
                maxNumberOfAutoBreaks: 2,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", customBreaks: "readWrite", axis: "readOnly", autoBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            Break: {
                startValue: null,
                endValue: null,
                spacing: 8,
                type: "straight",
                color: "#FFFFFF",
                fillOpacity: 0.9,
                lineThickness: 2,
                lineColor: "#E16E6E",
                lineDashType: "solid",
                publicProperties: { options: "readWrite", scaleBreaks: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            Crosshair: {
                enabled: !1,
                snapToDataPoint: !1,
                color: "grey",
                opacity: null,
                thickness: 2,
                lineDashType: "solid",
                label: "",
                labelWrap: !0,
                labelMaxWidth: null,
                labelTextAlign: "left",
                labelBackgroundColor: r ? "grey" : null,
                labelBorderColor: r ? "grey" : null,
                labelBorderThickness: 0,
                labelCornerRadius: 0,
                labelFontFamily: r ? "Calibri, Optima, Candara, Verdana, Geneva, sans-serif" : "calibri",
                labelFontSize: 12,
                labelFontColor: "#fff",
                labelFontWeight: "normal",
                labelFontStyle: "normal",
                labelFormatter: null,
                valueFormatString: null,
                updated: null,
                hidden: null,
                publicProperties: { options: "readWrite", axis: "readOnly", bounds: "readOnly", chart: "readOnly" },
            },
            DataSeries: {
                name: null,
                dataPoints: null,
                label: "",
                bevelEnabled: !1,
                highlightEnabled: !0,
                cursor: "default",
                indexLabel: "",
                indexLabelPlacement: "auto",
                indexLabelOrientation: "horizontal",
                indexLabelTextAlign: "left",
                indexLabelFontColor: "black",
                indexLabelFontSize: 12,
                indexLabelFontStyle: "normal",
                indexLabelFontFamily: "Arial",
                indexLabelFontWeight: "normal",
                indexLabelBackgroundColor: null,
                indexLabelBorderColor: null,
                indexLabelBorderThickness: 0,
                indexLabelLineColor: "gray",
                indexLabelLineThickness: 1,
                indexLabelLineDashType: "solid",
                indexLabelMaxWidth: null,
                indexLabelWrap: !0,
                indexLabelFormatter: null,
                lineThickness: 2,
                lineDashType: "solid",
                connectNullData: !1,
                nullDataLineDashType: "dash",
                color: null,
                lineColor: null,
                risingColor: "white",
                fallingColor: "red",
                fillOpacity: null,
                startAngle: 0,
                radius: null,
                innerRadius: null,
                explodeOnClick: !0,
                neckHeight: null,
                neckWidth: null,
                reversed: !1,
                valueRepresents: null,
                linkedDataSeriesIndex: null,
                whiskerThickness: 2,
                whiskerDashType: "solid",
                whiskerColor: null,
                whiskerLength: null,
                stemThickness: 2,
                stemColor: null,
                stemDashType: "solid",
                upperBoxColor: "white",
                lowerBoxColor: "white",
                type: "column",
                xValueType: "number",
                axisXType: "primary",
                axisYType: "primary",
                axisXIndex: 0,
                axisYIndex: 0,
                xValueFormatString: null,
                yValueFormatString: null,
                zValueFormatString: null,
                percentFormatString: null,
                showInLegend: !1,
                legendMarkerType: null,
                legendMarkerColor: null,
                legendText: null,
                legendMarkerBorderColor: r ? "transparent" : null,
                legendMarkerBorderThickness: 0,
                markerType: "circle",
                markerColor: null,
                markerSize: null,
                markerBorderColor: r ? "transparent" : null,
                markerBorderThickness: 0,
                mouseover: null,
                mouseout: null,
                mousemove: null,
                click: null,
                toolTipContent: null,
                visible: !0,
                publicProperties: { options: "readWrite", axisX: "readWrite", axisY: "readWrite", chart: "readOnly" },
            },
            TextBlock: {
                x: 0,
                y: 0,
                width: null,
                height: null,
                maxWidth: null,
                maxHeight: null,
                padding: 0,
                angle: 0,
                text: "",
                horizontalAlign: "center",
                textAlign: "left",
                fontSize: 12,
                fontFamily: "calibri",
                fontWeight: "normal",
                fontColor: "black",
                fontStyle: "normal",
                borderThickness: 0,
                borderColor: "black",
                cornerRadius: 0,
                backgroundColor: null,
                textBaseline: "top",
            },
            CultureInfo: {
                decimalSeparator: ".",
                digitGroupSeparator: ",",
                zoomText: "Zoom",
                panText: "Pan",
                resetText: "Reset",
                menuText: "More Options",
                saveJPGText: "Save as JPEG",
                savePNGText: "Save as PNG",
                printText: "Print",
                days: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                shortDays: "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                months: "January February March April May June July August September October November December".split(" "),
                shortMonths: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
            },
        },
        La = { en: {} },
        w = r ? "Trebuchet MS, Helvetica, sans-serif" : "Arial",
        Ga = r ? "Impact, Charcoal, sans-serif" : "Arial",
        Ba = {
            colorSet1: "#4F81BC #C0504E #9BBB58 #23BFAA #8064A1 #4AACC5 #F79647 #7F6084 #77A033 #33558B #E59566".split(" "),
            colorSet2: "#6D78AD #51CDA0 #DF7970 #4C9CA0 #AE7D99 #C9D45C #5592AD #DF874D #52BCA8 #8E7AA3 #E3CB64 #C77B85 #C39762 #8DD17E #B57952 #FCC26C".split(" "),
            colorSet3: "#8CA1BC #36845C #017E82 #8CB9D0 #708C98 #94838D #F08891 #0366A7 #008276 #EE7757 #E5BA3A #F2990B #03557B #782970".split(" "),
        },
        P,
        Z,
        V,
        ga,
        ja;
    Z = "#333333";
    V = "#000000";
    P = "#666666";
    ja = ga = "#000000";
    var fa = 20,
        z = 14,
        Xa = {
            colorSet: "colorSet1",
            backgroundColor: "#FFFFFF",
            title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: Ga, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: w, indexLabelFontSize: z, indexLabelFontColor: Z, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: Z,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: V,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: P,
                    tickThickness: 1,
                    tickColor: P,
                    gridThickness: 0,
                    gridColor: P,
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisX2: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: Z,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: V,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: P,
                    tickThickness: 1,
                    tickColor: P,
                    gridThickness: 0,
                    gridColor: P,
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: Z,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: V,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: P,
                    tickThickness: 1,
                    tickColor: P,
                    gridThickness: 1,
                    gridColor: P,
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY2: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: Z,
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: V,
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: P,
                    tickThickness: 1,
                    tickColor: P,
                    gridThickness: 1,
                    gridColor: P,
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" },
        };
    V = Z = "#F5F5F5";
    P = "#FFFFFF";
    ga = "#40BAF1";
    ja = "#F5F5F5";
    var fa = 20,
        z = 14,
        db = {
            colorSet: "colorSet2",
            title: { fontFamily: w, fontSize: 33, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "top", margin: 5 },
            subtitles: [{ fontFamily: w, fontSize: z, fontColor: "#3A3A3A", fontWeight: "normal", verticalAlign: "top", margin: 5 }],
            data: [{ indexLabelFontFamily: w, indexLabelFontSize: z, indexLabelFontColor: "#666666", indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
            axisX: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: "#BBBBBB",
                    tickThickness: 1,
                    tickColor: "#BBBBBB",
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisX2: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 1,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            axisY2: [
                {
                    titleFontFamily: w,
                    titleFontSize: fa,
                    titleFontColor: "#666666",
                    titleFontWeight: "normal",
                    labelFontFamily: w,
                    labelFontSize: z,
                    labelFontColor: "#666666",
                    labelFontWeight: "normal",
                    lineThickness: 0,
                    lineColor: "#BBBBBB",
                    tickColor: "#BBBBBB",
                    tickThickness: 1,
                    gridThickness: 1,
                    gridColor: "#BBBBBB",
                    stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FFA500", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FFA500", thickness: 1 }],
                    crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#EEEEEE", labelFontWeight: "normal", labelBackgroundColor: "black", color: "black", thickness: 1, lineDashType: "dot" },
                    scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#BBBBBB", lineThickness: 1, lineDashType: "solid" },
                },
            ],
            legend: { fontFamily: w, fontSize: 14, fontColor: "#3A3A3A", fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
            toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1 },
            toolbar: { itemBackgroundColor: "white", itemBackgroundColorOnHover: "#2196f3", buttonBorderColor: "#2196f3", buttonBorderThickness: 1, fontColor: "black", fontColorOnHover: "white" },
        };
    V = Z = "#F5F5F5";
    P = "#FFFFFF";
    ga = "#40BAF1";
    ja = "#F5F5F5";
    fa = 20;
    z = 14;
    Ga = {
        colorSet: "colorSet1",
        backgroundColor: "#2A2A2A",
        title: { fontFamily: Ga, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
        subtitles: [{ fontFamily: Ga, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
        toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
        data: [{ indexLabelFontFamily: w, indexLabelFontSize: z, indexLabelFontColor: V, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
        axisX: [
            {
                titleFontFamily: w,
                titleFontSize: fa,
                titleFontColor: V,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: z,
                labelFontColor: V,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: P,
                tickThickness: 1,
                tickColor: P,
                gridThickness: 0,
                gridColor: P,
                stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisX2: [
            {
                titleFontFamily: w,
                titleFontSize: fa,
                titleFontColor: V,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: z,
                labelFontColor: V,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: P,
                tickThickness: 1,
                tickColor: P,
                gridThickness: 0,
                gridColor: P,
                stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisY: [
            {
                titleFontFamily: w,
                titleFontSize: fa,
                titleFontColor: V,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: z,
                labelFontColor: V,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: P,
                tickThickness: 1,
                tickColor: P,
                gridThickness: 1,
                gridColor: P,
                stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        axisY2: [
            {
                titleFontFamily: w,
                titleFontSize: fa,
                titleFontColor: V,
                titleFontWeight: "normal",
                labelFontFamily: w,
                labelFontSize: z,
                labelFontColor: V,
                labelFontWeight: "normal",
                lineThickness: 1,
                lineColor: P,
                tickThickness: 1,
                tickColor: P,
                gridThickness: 1,
                gridColor: P,
                stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
            },
        ],
        legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
        toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" },
    };
    P = "#FFFFFF";
    V = Z = "#FAFAFA";
    ga = "#40BAF1";
    ja = "#F5F5F5";
    var fa = 20,
        z = 14,
        Pa = {
            light1: Xa,
            light2: db,
            dark1: Ga,
            dark2: {
                colorSet: "colorSet2",
                backgroundColor: "#32373A",
                title: { fontFamily: w, fontSize: 32, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 },
                subtitles: [{ fontFamily: w, fontSize: z, fontColor: Z, fontWeight: "normal", verticalAlign: "top", margin: 5 }],
                toolbar: { itemBackgroundColor: "#666666", itemBackgroundColorOnHover: "#FF7372", buttonBorderColor: "#FF7372", buttonBorderThickness: 1, fontColor: "#F5F5F5", fontColorOnHover: "#F5F5F5" },
                data: [{ indexLabelFontFamily: w, indexLabelFontSize: z, indexLabelFontColor: V, indexLabelFontWeight: "normal", indexLabelLineThickness: 1 }],
                axisX: [
                    {
                        titleFontFamily: w,
                        titleFontSize: fa,
                        titleFontColor: V,
                        titleFontWeight: "normal",
                        labelFontFamily: w,
                        labelFontSize: z,
                        labelFontColor: V,
                        labelFontWeight: "normal",
                        lineThickness: 1,
                        lineColor: P,
                        tickThickness: 1,
                        tickColor: P,
                        gridThickness: 0,
                        gridColor: P,
                        stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisX2: [
                    {
                        titleFontFamily: w,
                        titleFontSize: fa,
                        titleFontColor: V,
                        titleFontWeight: "normal",
                        labelFontFamily: w,
                        labelFontSize: z,
                        labelFontColor: V,
                        labelFontWeight: "normal",
                        lineThickness: 1,
                        lineColor: P,
                        tickThickness: 1,
                        tickColor: P,
                        gridThickness: 0,
                        gridColor: P,
                        stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisY: [
                    {
                        titleFontFamily: w,
                        titleFontSize: fa,
                        titleFontColor: V,
                        titleFontWeight: "normal",
                        labelFontFamily: w,
                        labelFontSize: z,
                        labelFontColor: V,
                        labelFontWeight: "normal",
                        lineThickness: 0,
                        lineColor: P,
                        tickThickness: 1,
                        tickColor: P,
                        gridThickness: 1,
                        gridColor: P,
                        stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                axisY2: [
                    {
                        titleFontFamily: w,
                        titleFontSize: fa,
                        titleFontColor: V,
                        titleFontWeight: "normal",
                        labelFontFamily: w,
                        labelFontSize: z,
                        labelFontColor: V,
                        labelFontWeight: "normal",
                        lineThickness: 0,
                        lineColor: P,
                        tickThickness: 1,
                        tickColor: P,
                        gridThickness: 1,
                        gridColor: P,
                        stripLines: [{ labelFontFamily: w, labelFontSize: z, labelFontColor: "#FF7300", labelFontWeight: "normal", labelBackgroundColor: null, color: "#FF7300", thickness: 1 }],
                        crosshair: { labelFontFamily: w, labelFontSize: z, labelFontColor: "#000000", labelFontWeight: "normal", labelBackgroundColor: ja, color: ga, thickness: 1, lineDashType: "dash" },
                        scaleBreaks: { type: "zigzag", spacing: "2%", lineColor: "#777777", lineThickness: 1, lineDashType: "solid", color: "#111111" },
                    },
                ],
                legend: { fontFamily: w, fontSize: 14, fontColor: Z, fontWeight: "bold", verticalAlign: "bottom", horizontalAlign: "center" },
                toolTip: { fontFamily: w, fontSize: 14, fontStyle: "normal", cornerRadius: 0, borderThickness: 1, fontColor: V, backgroundColor: "rgba(0, 0, 0, .7)" },
            },
            theme1: Xa,
            theme2: db,
            theme3: Xa,
        },
        R = {
            numberDuration: 1,
            yearDuration: 314496e5,
            monthDuration: 2592e6,
            weekDuration: 6048e5,
            dayDuration: 864e5,
            hourDuration: 36e5,
            minuteDuration: 6e4,
            secondDuration: 1e3,
            millisecondDuration: 1,
            dayOfWeekFromInt: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
        };
    (function () {
        ua.fSDec = function (f) {
            for (var t = "", l = 0; l < f.length; l++) t += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(l));
            return t;
        };
        delete pa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")];
        ua.pro = { sCH: pa[ua.fSDec("Bi`su")][ua.fSDec("bsdehuIsdg")] };
    })();
    var hb = (function () {
            var f = !1;
            try {
                var t =
                    Object.defineProperty &&
                    Object.defineProperty({}, "passive", {
                        get: function () {
                            f = !0;
                            return !1;
                        },
                    });
                window.addEventListener && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
            } catch (l) {
                f = !1;
            }
            return f;
        })(),
        ab = {},
        wa = null,
        mb = function () {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.backgroundColor && ((this.ctx.fillStyle = this.backgroundColor), this.ctx.fillRect(0, 0, this.width, this.height));
        },
        ya = function (f) {
            f.width = 1;
            f.height = 1;
            f.getContext("2d") && f.getContext("2d").clearRect(0, 0, 1, 1);
        },
        nb = function (f, t, l) {
            t = Math.min(this.width, this.height);
            return Math.max("theme4" === this.theme ? 0 : 300 <= t ? 12 : 11, Math.round(t * (f / 400)));
        },
        Ca = (function () {
            var f = /D{1,4}|M{1,4}|Y{1,4}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|f{1,3}|t{1,2}|T{1,2}|K|z{1,3}|"[^"]*"|'[^']*'/g,
                t = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),
                l = "Sun Mon Tue Wed Thu Fri Sat".split(" "),
                r = "January February March April May June July August September October November December".split(" "),
                T = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
                w = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
                A = /[^-+\dA-Z]/g;
            return function (z, I, N) {
                var P = N ? N.days : t,
                    U = N ? N.months : r,
                    G = N ? N.shortDays : l,
                    R = N ? N.shortMonths : T;
                N = "";
                var J = !1;
                z = z && z.getTime ? z : z ? new Date(z) : new Date();
                if (isNaN(z)) throw SyntaxError("invalid date");
                "UTC:" === I.slice(0, 4) && ((I = I.slice(4)), (J = !0));
                N = J ? "getUTC" : "get";
                var Y = z[N + "Date"](),
                    Q = z[N + "Day"](),
                    aa = z[N + "Month"](),
                    a = z[N + "FullYear"](),
                    d = z[N + "Hours"](),
                    c = z[N + "Minutes"](),
                    b = z[N + "Seconds"](),
                    e = z[N + "Milliseconds"](),
                    h = J ? 0 : z.getTimezoneOffset();
                return (N = I.replace(f, function (q) {
                    switch (q) {
                        case "D":
                            return Y;
                        case "DD":
                            return $(Y, 2);
                        case "DDD":
                            return G[Q];
                        case "DDDD":
                            return P[Q];
                        case "M":
                            return aa + 1;
                        case "MM":
                            return $(aa + 1, 2);
                        case "MMM":
                            return R[aa];
                        case "MMMM":
                            return U[aa];
                        case "Y":
                            return parseInt(String(a).slice(-2));
                        case "YY":
                            return $(String(a).slice(-2), 2);
                        case "YYY":
                            return $(String(a).slice(-3), 3);
                        case "YYYY":
                            return $(a, 4);
                        case "h":
                            return d % 12 || 12;
                        case "hh":
                            return $(d % 12 || 12, 2);
                        case "H":
                            return d;
                        case "HH":
                            return $(d, 2);
                        case "m":
                            return c;
                        case "mm":
                            return $(c, 2);
                        case "s":
                            return b;
                        case "ss":
                            return $(b, 2);
                        case "f":
                            return $(String(e), 3).slice(0, 1);
                        case "ff":
                            return $(String(e), 3).slice(0, 2);
                        case "fff":
                            return $(String(e), 3).slice(0, 3);
                        case "t":
                            return 12 > d ? "a" : "p";
                        case "tt":
                            return 12 > d ? "am" : "pm";
                        case "T":
                            return 12 > d ? "A" : "P";
                        case "TT":
                            return 12 > d ? "AM" : "PM";
                        case "K":
                            return J ? "UTC" : (String(z).match(w) || [""]).pop().replace(A, "");
                        case "z":
                            return (0 < h ? "-" : "+") + Math.floor(Math.abs(h) / 60);
                        case "zz":
                            return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2);
                        case "zzz":
                            return (0 < h ? "-" : "+") + $(Math.floor(Math.abs(h) / 60), 2) + $(Math.abs(h) % 60, 2);
                        default:
                            return q.slice(1, q.length - 1);
                    }
                }));
            };
        })(),
        ob = function (f) {
            var t = 0 > f;
            if (1 > Math.abs(f)) {
                var l = parseInt(f.toString().split("e-")[1]);
                l && ((f = (t ? -1 * f : f) * Math.pow(10, l - 1)), (f = "0." + Array(l).join("0") + f.toString().substring(2)), (f = t ? "-" + f : f));
            } else (l = parseInt(f.toString().split("+")[1])), 20 < l && ((l -= 20), (f /= Math.pow(10, l)), (f = f.toString() + Array(l + 1).join("0")));
            return String(f);
        },
        ha = function (f, l, r) {
            if (null === f) return "";
            if (!isFinite(f)) return f;
            f = Number(f);
            var M = 0 > f ? !0 : !1;
            M && (f *= -1);
            var T = r ? r.decimalSeparator : ".",
                w = r ? r.digitGroupSeparator : ",",
                A = "";
            l = String(l);
            var A = 1,
                z = (r = ""),
                I = -1,
                N = [],
                P = [],
                U = 0,
                J = 0,
                G = 0,
                R = !1,
                Y = 0,
                z = l.match(/"[^"]*"|'[^']*'|[eE][+-]*[0]+|[,]+[.]|\u2030|./g);
            l = null;
            for (var Q = 0; z && Q < z.length; Q++)
                if (((l = z[Q]), "." === l && 0 > I)) I = Q;
                else {
                    if ("%" === l) A *= 100;
                    else if ("\u2030" === l) {
                        A *= 1e3;
                        continue;
                    } else if ("," === l[0] && "." === l[l.length - 1]) {
                        A /= Math.pow(1e3, l.length - 1);
                        I = Q + l.length - 1;
                        continue;
                    } else ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || (R = !0);
                    0 > I ? (N.push(l), "#" === l || "0" === l ? U++ : "," === l && G++) : (P.push(l), ("#" !== l && "0" !== l) || J++);
                }
            R && ((l = Math.floor(f)), (z = -Math.floor(Math.log(f) / Math.LN10 + 1)), (Y = 0 === f ? 0 : 0 === l ? -(U + z) : ob(l).length - U), (A /= Math.pow(10, Y)));
            0 > I && (I = Q);
            A = (f * A).toFixed(J);
            l = A.split(".");
            A = (l[0] + "").split("");
            f = (l[1] + "").split("");
            A && "0" === A[0] && A.shift();
            for (R = z = Q = J = I = 0; 0 < N.length; )
                if (((l = N.pop()), "#" === l || "0" === l))
                    if ((I++, I === U)) {
                        var aa = A,
                            A = [];
                        if ("0" === l) for (l = U - J - (aa ? aa.length : 0); 0 < l; ) aa.unshift("0"), l--;
                        for (; 0 < aa.length; ) (r = aa.pop() + r), R++, 0 === R % z && Q === G && 0 < aa.length && (r = w + r);
                    } else 0 < A.length ? ((r = A.pop() + r), J++, R++) : "0" === l && ((r = "0" + r), J++, R++), 0 === R % z && Q === G && 0 < A.length && (r = w + r);
                else
                    ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l)
                        ? "," === l
                            ? (Q++, (z = R), (R = 0), 0 < A.length && (r = w + r))
                            : (r = 1 < l.length && (('"' === l[0] && '"' === l[l.length - 1]) || ("'" === l[0] && "'" === l[l.length - 1])) ? l.slice(1, l.length - 1) + r : l + r)
                        : ((l = 0 > Y ? l.replace("+", "").replace("-", "") : l.replace("-", "")),
                          (r += l.replace(/[0]+/, function (a) {
                              return $(Y, a.length);
                          })));
            w = "";
            for (N = !1; 0 < P.length; )
                (l = P.shift()),
                    "#" === l || "0" === l
                        ? 0 < f.length && 0 !== Number(f.join(""))
                            ? ((w += f.shift()), (N = !0))
                            : "0" === l && ((w += "0"), (N = !0))
                        : 1 < l.length && (('"' === l[0] && '"' === l[l.length - 1]) || ("'" === l[0] && "'" === l[l.length - 1]))
                        ? (w += l.slice(1, l.length - 1))
                        : ("E" !== l[0] && "e" !== l[0]) || "0" !== l[l.length - 1] || !/[eE][+-]*[0]+/.test(l)
                        ? (w += l)
                        : ((l = 0 > Y ? l.replace("+", "").replace("-", "") : l.replace("-", "")),
                          (w += l.replace(/[0]+/, function (a) {
                              return $(Y, a.length);
                          })));
            r += (N ? T : "") + w;
            return M ? "-" + r : r;
        },
        Qa = function (f) {
            var l = 0,
                r = 0;
            f = f || window.event;
            f.offsetX || 0 === f.offsetX ? ((l = f.offsetX), (r = f.offsetY)) : f.layerX || 0 == f.layerX ? ((l = f.layerX), (r = f.layerY)) : ((l = f.pageX - f.target.offsetLeft), (r = f.pageY - f.target.offsetTop));
            return { x: l, y: r };
        },
        cb = !0,
        Ta = window.devicePixelRatio || 1,
        Oa = 1,
        ia = cb ? Ta / Oa : 1,
        da = function (f, l, r, M, w, z, A, I, R, N, U, P, J) {
            "undefined" === typeof J && (J = 1);
            A = A || 0;
            I = I || "black";
            var G = 15 < M - l && 15 < w - r ? 8 : 0.35 * Math.min(M - l, w - r);
            f.beginPath();
            f.moveTo(l, r);
            f.save();
            f.fillStyle = z;
            f.globalAlpha = J;
            f.fillRect(l, r, M - l, w - r);
            f.globalAlpha = 1;
            0 < A && ((J = 0 === A % 2 ? 0 : 0.5), f.beginPath(), (f.lineWidth = A), (f.strokeStyle = I), f.moveTo(l, r), f.rect(l - J, r - J, M - l + 2 * J, w - r + 2 * J), f.stroke());
            f.restore();
            !0 === R &&
                (f.save(),
                f.beginPath(),
                f.moveTo(l, r),
                f.lineTo(l + G, r + G),
                f.lineTo(M - G, r + G),
                f.lineTo(M, r),
                f.closePath(),
                (A = f.createLinearGradient((M + l) / 2, r + G, (M + l) / 2, r)),
                A.addColorStop(0, z),
                A.addColorStop(1, "rgba(255, 255, 255, .4)"),
                (f.fillStyle = A),
                f.fill(),
                f.restore());
            !0 === N &&
                (f.save(),
                f.beginPath(),
                f.moveTo(l, w),
                f.lineTo(l + G, w - G),
                f.lineTo(M - G, w - G),
                f.lineTo(M, w),
                f.closePath(),
                (A = f.createLinearGradient((M + l) / 2, w - G, (M + l) / 2, w)),
                A.addColorStop(0, z),
                A.addColorStop(1, "rgba(255, 255, 255, .4)"),
                (f.fillStyle = A),
                f.fill(),
                f.restore());
            !0 === U &&
                (f.save(),
                f.beginPath(),
                f.moveTo(l, r),
                f.lineTo(l + G, r + G),
                f.lineTo(l + G, w - G),
                f.lineTo(l, w),
                f.closePath(),
                (A = f.createLinearGradient(l + G, (w + r) / 2, l, (w + r) / 2)),
                A.addColorStop(0, z),
                A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (f.fillStyle = A),
                f.fill(),
                f.restore());
            !0 === P &&
                (f.save(),
                f.beginPath(),
                f.moveTo(M, r),
                f.lineTo(M - G, r + G),
                f.lineTo(M - G, w - G),
                f.lineTo(M, w),
                (A = f.createLinearGradient(M - G, (w + r) / 2, M, (w + r) / 2)),
                A.addColorStop(0, z),
                A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (f.fillStyle = A),
                A.addColorStop(0, z),
                A.addColorStop(1, "rgba(255, 255, 255, 0.1)"),
                (f.fillStyle = A),
                f.fill(),
                f.closePath(),
                f.restore());
        },
        X = function (f) {
            for (var l = "", r = 0; r < f.length; r++) l += String.fromCharCode(Math.ceil(f.length / 57 / 5) ^ f.charCodeAt(r));
            return l;
        },
        kb =
            window &&
            window[X("mnb`uhno")] &&
            window[X("mnb`uhno")].href &&
            window[X("mnb`uhno")].href.indexOf &&
            (-1 !== window[X("mnb`uhno")].href.indexOf(X("b`ow`rkr/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gdonqhy/bnl")) || -1 !== window[X("mnb`uhno")].href.indexOf(X("gheemd"))) &&
            -1 === window[X("mnb`uhno")].href.indexOf(X("gheemd")),
        lb = {
            reset: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAeCAYAAABJ/8wUAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAPjSURBVFhHxVdJaFNRFP1J/jwkP5MxsbaC1WJEglSxOFAXIsFpVRE3ggi1K90obioRRBA33XXnQnciirhQcMCdorgQxBkXWlREkFKsWkv5npvckp/XnzRpKh64kLw733fffe9L/wrL0+mVUdO8uTSZ3MBL/we2qg4rkuSpodCELstXE46ziVkLQ6FQcGOmeSSq6wd4aV50d3drWjj8kQKZJTUc9kxFGenv79dZrDksTSTWWJp2QYtEPiErysyzdX0LsxsCQR8keX8gs6RHIk8ysdgKFg2G53mhuOPsshTlBjKaFo1g7SqLNoShKLdFXT8huQ/paLSbxatYnc2mHMM4hr18Vi8TIvCmXF3vYrW6cF23gGTOk0M1wA4RKvOmq6vLZRVJipvmSWT6tZ6CSEYkco5V50VPT4+D7RwOqi6RiSZm0fJ+vggSqkeoypdsNmuyelNwbXsbgvkWYMtzDWNvWaijoyOBqE+hVK8abcssUeXQ/YfKyi0gFYv1Ipgfoj34fYGTJLOYJA0ODirok32GLN8XhUWCwSes1hIwBg6LydJ/tEeRRapAdUp+wSAiZchtZZWWgAZ+JNpD8peYXQVK9UwUxNpzOK8pq97kURZhYTCKBwPD7h2zK+js7Myi7D8Fod+0TkMI8+EMAngLGc/WtBFWawkFHFnoj/t9KLgGmF0B3QfkxC+EarxkdhnFYlFLY06USqUwL7UMjICHfh/wOc2sCqhpxGbCkLvL7EUDbF73+6DkmVWB6zi7xUDQSLeYvWjAILvm9zEnkJhlbRcDQZcv6Kg2AipyT/Axw6wKlqVSqxDdjF8Izfod13qURdrG/nxehY+xGh+h0CSzKygGvSNQIcc097BI24jb9hax6kj2E7OrMFX1il+ICEf2NrPbhiXLl+fYl+U7zK4iYdsDcyLGf+ofFlkwcN+s10KhmpuYhhtm0hCLVIFL0MDsqNlDIqy9x2CLs1jL6OvrI7vPRbtohXG6eFmsFnHDGAp6n9AgyuVySRZrGvROxRgIfLXhzjrNYnNBUxNX/dMgRWT1mt4XLDovaApD53E9W3ilNX5M55LJHpRtIsgAvciR4WWcgK2Dvb1YqgXevmF8z2zEBTcKG39EfSKsT9EbhVUaI2FZO+oZIqImxol6j66/hcAu4sSN4vc1ZPoKeoE6RGhYL2YYA+ymOSSi0Z0wWntbtkGUWCvfSDXIxONraZ/FY90KUfNTpfC5spnNLgxoYNnR9RO4F8ofXEHOgogCQE99w+fF2Xw+b7O59rEOsyRqGEfpVoaDMQQ1CZrG46bcM6AZ0C/wPqNfHliqejyTySxh9TqQpL+xmbIlkB9SlAAAAABJRU5ErkJggg==",
            },
            pan: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAICSURBVEhLxZbPahNRGMUn/5MpuAiBEAIufQGfzr5E40YptBXajYzudCEuGqS+gGlrFwquDGRTutBdYfydzJ3LzeQmJGZue+Dw/Z17Mnfmu5Pof9Hr9Z61Wq0bWZMKj263O6xWq99wU9lOpzPMKgEhEcRucNOcioOK+0RzBhNvt9tPV4nmVF19+OWhVqt9xXgFXZq+8lCv119UKpUJ7iX2FmvFTKz8RH34YdBsNk8wVtjE4fGYwm8wrrDi3WBG5oKXZGRSS9hGuNFojLTe2lFz5xThWZIktayyiE2FdT3rzXBXz7krKiL8c17wAKFDjCus2AvW+YGZ9y2JF0VFRuMPfI//rsCE/C+s26s4gQu9ul7r4NteKx7H8XOC724xNNGbaNu++IrBqbOV7Tj3FgMRvc/YKOr3+3sE47wgEt/Bl/gaK5cHbNU11vYSXylfpK7XOvjuumPp4Wcoipu30Qsez2uMXYz4lfI+mOmwothY+SLiXJy7mKVpWs3Si0CoOMfeI9Od43Wic+jO+ZVv+crsm9QSNhUW9LXSeoPBYLXopthGuFQgdIxxhY+UDwlt1x5CZ1hX+NTUdt/OIvjKaDSmuOJfaIVNPKX+W18j/PLA2/kR44p5Sd8HbHngT/yTfNRWUXX14ZcL3wmX0+TLf8YO7CGT8yFE5zB3/gney25/OETRP9CtPDFe5jShAAAAAElFTkSuQmCC",
            },
            zoom: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAALWSURBVEhLvZZLaBNRFIabyftBIgEfqCCBoCC6MYqiXYiIj4U76U4X7sUHbhQhUBfixhZEUBDB16YuFERaUaQLK7ooCOJj4UKtYEFU0EptShO/A9Ph3js3k8lo/eHnP7n3nP/M3LlzMz1hkUwmNziOcyKRSFyFt+LxeD/c2Wq1Ym7Kv0M2m11Os1OxWGycn1OwZXCGuXfwIhezkd9/jRgNT2L4ldhs1pbkX5OLJe4euVxuGQaPCa3mnUjtJx7BDuKusJTCV6jVVGHTMuYRjxma7yIOhTgFY6jNaAKew2xPKpVay9ganmkvj+M448/MfJdT5K5Gg4HJacRngPFgqVRaRNwW1B4i7yehWfsEDdz1K+A01AoxPIqGAiuwGfkOTY8+1A6u7AyiFTB2Hu0KPIrdiOnzHLWDybeImvy+Wq2mZa5bUHsD0Zpz+KxHdWQymV6kAb1ElqeORgJLvgnRdj1+R1AfzkIvSUjxVjQSarVakrueIPT8+H1F5jSUy+WXiJrUYBVWyVxU4PEU8TzhfaijUqnMIWrjaY492eWRwdKOIqrnIxnXwLLeRLwk2GQzrEMjg0avEbXxkIxr4OoOImpj2QwyFgms1koa/SZUG8s+0iGnEhNfCNXEhzIXBVz0McTzEvJ+70P9oNFtxEzei3aFYrFYxmuSUPWSv9Yi9IMm2xE1We56Mp1OV4nDwqFmBDV9gk9AEh4gZtFHNt8W4kAUCoXF5MorY9Z/kDni9nDv7hc0i2fhgLvTtX8a99PoMPPagTFPxofRzmDJ9yM+AyEmTfgGysYbQcfhDzPPJDmX0c7gDg4gs9BqFIWhm/Nct5H8gtBq1I7UfIbtvmIuoaGQcp+fdpbbSM43eEH5wrwLbXmhm/fU63VHXjcuok7hEByFY/AeHGC8L5/PL3HT5xGH1uYwfPOICGo+CBcU0vwO1BqzUqILDl/z/9VYIMfpddiAc47jDP8BsUpb13wOLRwAAAAASUVORK5CYII=",
            },
            menu: {
                image:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADoSURBVFhH7dc9CsJAFATgRxIIBCwCqZKATX5sbawsY2MvWOtF9AB6AU8gguAJbD2AnZ2VXQT/Ko2TYGCL2OYtYQc+BuYA+1hCtnCVwMm27SGaXpDJIAiCvCkVR05hGOZNN3HkFMdx3nQRR06+76/R1IcFLJlNQEWlmWlBTwJtKLKHynehZqnjOGM0PYWRVXk61C37p7xlZ3Hk5HneCk1dmMH811xGoKLSzDiQwIBZB4ocoPJdqNkDt2yKlueWRVGUtzy3rPwo3sWRU3nLjuLI6OO67oZM00wMw3hrmpZx0XU9syxrR0T0BeMpb9dneSR2AAAAAElFTkSuQmCC",
            },
        };
    Y.prototype.setOptions = function (f, l) {
        if (pa[this._defaultsKey]) {
            var r = pa[this._defaultsKey],
                w;
            for (w in r) "publicProperties" !== w && r.hasOwnProperty(w) && (this[w] = f && w in f ? f[w] : l && w in l ? l[w] : r[w]);
        } else Ia && window.console && console.log("defaults not set");
    };
    Y.prototype.get = function (f) {
        var l = pa[this._defaultsKey];
        if ("options" === f) return this.options && this.options._isPlaceholder ? null : this.options;
        if (l.hasOwnProperty(f) || (l.publicProperties && l.publicProperties.hasOwnProperty(f))) return this[f];
        window.console && window.console.log('Property "' + f + "\" doesn't exist. Please check for typo.");
    };
    Y.prototype.set = function (f, l, r) {
        r = "undefined" === typeof r ? !0 : r;
        var w = pa[this._defaultsKey];
        if ("options" === f) this.createUserOptions(l);
        else if (w.hasOwnProperty(f) || (w.publicProperties && w.publicProperties.hasOwnProperty(f) && "readWrite" === w.publicProperties[f])) this.options._isPlaceholder && this.createUserOptions(), (this.options[f] = l);
        else {
            window.console &&
                (w.publicProperties && w.publicProperties.hasOwnProperty(f) && "readOnly" === w.publicProperties[f]
                    ? window.console.log('Property "' + f + '" is read-only.')
                    : window.console.log('Property "' + f + "\" doesn't exist. Please check for typo."));
            return;
        }
        r && (this.stockChart || this.chart || this).render();
    };
    Y.prototype.addTo = function (f, l, r, w) {
        w = "undefined" === typeof w ? !0 : w;
        var z = pa[this._defaultsKey];
        z.hasOwnProperty(f) || (z.publicProperties && z.publicProperties.hasOwnProperty(f) && "readWrite" === z.publicProperties[f])
            ? (this.options._isPlaceholder && this.createUserOptions(),
              "undefined" === typeof this.options[f] && (this.options[f] = []),
              (f = this.options[f]),
              (r = "undefined" === typeof r || null === r ? f.length : r),
              f.splice(r, 0, l),
              w && (this.stockChart || this.chart || this).render())
            : window.console &&
              (z.publicProperties && z.publicProperties.hasOwnProperty(f) && "readOnly" === z.publicProperties[f]
                  ? window.console.log('Property "' + f + '" is read-only.')
                  : window.console.log('Property "' + f + "\" doesn't exist. Please check for typo."));
    };
    Y.prototype.createUserOptions = function (f) {
        if ("undefined" !== typeof f || this.options._isPlaceholder)
            if ((this.parent && this.parent.options._isPlaceholder && this.parent.createUserOptions(), this.isOptionsInArray)) {
                this.parent.options[this.optionsName] || (this.parent.options[this.optionsName] = []);
                var l = this.parent.options[this.optionsName],
                    r = l.length;
                this.options._isPlaceholder || (Ea(l), (r = l.indexOf(this.options)));
                this.options = "undefined" === typeof f ? {} : f;
                l[r] = this.options;
            } else
                (this.options = "undefined" === typeof f ? {} : f),
                    this.parent &&
                        ((f = this.parent.options),
                        this.optionsName ? (l = this.optionsName) : (l = this._defaultsKey) && 0 !== l.length ? ((r = l.charAt(0).toLowerCase()), 1 < l.length && (r = r.concat(l.slice(1))), (l = r)) : (l = void 0),
                        (f[l] = this.options));
    };
    Y.prototype.remove = function (f) {
        f = "undefined" === typeof f ? !0 : f;
        if (this.isOptionsInArray) {
            var l = this.parent.options[this.optionsName];
            Ea(l);
            var r = l.indexOf(this.options);
            0 <= r && l.splice(r, 1);
        } else delete this.parent.options[this.optionsName];
        f && (this.stockChart || this.chart || this).render();
    };
    Y.prototype.updateOption = function (f) {
        !pa[this._defaultsKey] && Ia && window.console && console.log("defaults not set");
        var r = pa[this._defaultsKey],
            w = {},
            z = this[f],
            T = this._themeOptionsKey,
            I = this._index;
        this.theme && l(this.parent) && l(T) && l(I)
            ? (w = l(this.predefinedThemes[this.theme]) ? this.predefinedThemes.light1 : this.predefinedThemes[this.theme])
            : this.parent &&
              this.parent.themeOptions &&
              (this.options.theme
                  ? "Chart" === this._defaultsKey && Pa[this.options.theme]
                      ? (w = Pa[this.options.theme])
                      : stockThemes[this.options.theme] && (w = stockThemes[this.options.theme][T])
                  : this.parent.themeOptions[T] &&
                    (null === I ? (w = this.parent.themeOptions[T]) : 0 < this.parent.themeOptions[T].length && ((w = Math.min(this.parent.themeOptions[T].length - 1, I)), (w = this.parent.themeOptions[T][w]))));
        this.themeOptions = w;
        f in r && (z = f in this.options ? this.options[f] : w && f in w ? w[f] : r[f]);
        if (z === this[f]) return !1;
        this[f] = z;
        return !0;
    };
    Y.prototype.trackChanges = function (f) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        this.sessionVariables[f] = this.options[f];
    };
    Y.prototype.isBeingTracked = function (f) {
        this.options._oldOptions || (this.options._oldOptions = {});
        return this.options._oldOptions[f] ? !0 : !1;
    };
    Y.prototype.hasOptionChanged = function (f) {
        if (!this.sessionVariables) throw "Session Variable Store not set";
        return this.sessionVariables[f] !== this.options[f];
    };
    Y.prototype.addEventListener = function (f, l, r) {
        f && l && ((this._eventListeners[f] = this._eventListeners[f] || []), this._eventListeners[f].push({ context: r || this, eventHandler: l }));
    };
    Y.prototype.removeEventListener = function (f, l) {
        if (f && l && this._eventListeners[f])
            for (var r = this._eventListeners[f], w = 0; w < r.length; w++)
                if (r[w].eventHandler === l) {
                    r[w].splice(w, 1);
                    break;
                }
    };
    Y.prototype.removeAllEventListeners = function () {
        this._eventListeners = [];
    };
    Y.prototype.dispatchEvent = function (f, l, r) {
        if (f && this._eventListeners[f]) {
            l = l || {};
            for (var w = this._eventListeners[f], z = 0; z < w.length; z++) w[z].eventHandler.call(w[z].context, l);
        }
        "function" === typeof this[f] && this[f].call(r || this.chart, l);
    };
    Fa.prototype.registerSpace = function (l, r) {
        "top" === l ? (this._topOccupied += r.height) : "bottom" === l ? (this._bottomOccupied += r.height) : "left" === l ? (this._leftOccupied += r.width) : "right" === l && (this._rightOccupied += r.width);
    };
    Fa.prototype.unRegisterSpace = function (l, r) {
        "top" === l ? (this._topOccupied -= r.height) : "bottom" === l ? (this._bottomOccupied -= r.height) : "left" === l ? (this._leftOccupied -= r.width) : "right" === l && (this._rightOccupied -= r.width);
    };
    Fa.prototype.getFreeSpace = function () {
        return {
            x1: this._x1 + this._leftOccupied,
            y1: this._y1 + this._topOccupied,
            x2: this._x2 - this._rightOccupied,
            y2: this._y2 - this._bottomOccupied,
            width: this._x2 - this._x1 - this._rightOccupied - this._leftOccupied,
            height: this._y2 - this._y1 - this._bottomOccupied - this._topOccupied,
        };
    };
    Fa.prototype.reset = function () {
        this._rightOccupied = this._leftOccupied = this._bottomOccupied = this._topOccupied = this._padding;
    };
    oa(ka, Y);
    ka.prototype._initialize = function () {
        l(this.padding) || "object" !== typeof this.padding
            ? (this.topPadding = this.rightPadding = this.bottomPadding = this.leftPadding = Number(this.padding) | 0)
            : ((this.topPadding = l(this.padding.top) ? 0 : Number(this.padding.top) | 0),
              (this.rightPadding = l(this.padding.right) ? 0 : Number(this.padding.right) | 0),
              (this.bottomPadding = l(this.padding.bottom) ? 0 : Number(this.padding.bottom) | 0),
              (this.leftPadding = l(this.padding.left) ? 0 : Number(this.padding.left) | 0));
    };
    ka.prototype.render = function (l) {
        if (0 !== this.fontSize) {
            l && this.ctx.save();
            var r = this.ctx.font;
            this.ctx.textBaseline = this.textBaseline;
            var w = 0;
            this._isDirty && this.measureText(this.ctx);
            this.ctx.translate(this.x, this.y + w);
            "middle" === this.textBaseline && (w = -this._lineHeight / 2);
            this.ctx.font = this._getFontString();
            this.ctx.rotate((Math.PI / 180) * this.angle);
            var z = 0,
                T = this.topPadding,
                I = null;
            this.ctx.roundRect || za(this.ctx);
            ((0 < this.borderThickness && this.borderColor) || this.backgroundColor) && this.ctx.roundRect(0, w, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            this.ctx.fillStyle = this.fontColor;
            for (w = 0; w < this._wrappedText.lines.length; w++)
                (I = this._wrappedText.lines[w]),
                    "right" === this.textAlign
                        ? (z = this.width - I.width - this.rightPadding)
                        : "left" === this.textAlign
                        ? (z = this.leftPadding)
                        : "center" === this.textAlign && (z = (this.width - (this.leftPadding + this.rightPadding)) / 2 - I.width / 2 + this.leftPadding),
                    this.ctx.fillText(I.text, z, T),
                    (T += I.height);
            this.ctx.font = r;
            l && this.ctx.restore();
        }
    };
    ka.prototype.setText = function (l) {
        this.text = l;
        this._isDirty = !0;
        this._wrappedText = null;
    };
    ka.prototype.measureText = function () {
        this._lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
        if (null === this.maxWidth) throw "Please set maxWidth and height for TextBlock";
        this._wrapText(this.ctx);
        this._isDirty = !1;
        return { width: this.width, height: this.height };
    };
    ka.prototype._getLineWithWidth = function (l, r, w) {
        l = String(l);
        if (!l) return { text: "", width: 0 };
        var z = (w = 0),
            I = l.length - 1,
            G = Infinity;
        for (this.ctx.font = this._getFontString(); z <= I; ) {
            var G = Math.floor((z + I) / 2),
                A = l.substr(0, G + 1);
            w = this.ctx.measureText(A).width;
            if (w < r) z = G + 1;
            else if (w > r) I = G - 1;
            else break;
        }
        w > r && 1 < A.length && ((A = A.substr(0, A.length - 1)), (w = this.ctx.measureText(A).width));
        r = !0;
        if (A.length === l.length || " " === l[A.length]) r = !1;
        r && ((l = A.split(" ")), 1 < l.length && l.pop(), (A = l.join(" ")), (w = this.ctx.measureText(A).width));
        return { text: A, width: w };
    };
    ka.prototype._wrapText = function () {
        var l = new String(Ha(String(this.text))),
            r = [],
            w = this.ctx.font,
            z = 0,
            I = 0;
        this.ctx.font = this._getFontString();
        if (0 === this.frontSize) I = z = 0;
        else
            for (; 0 < l.length; ) {
                var G = this.maxHeight - (this.topPadding + this.bottomPadding),
                    A = this._getLineWithWidth(l, this.maxWidth - (this.leftPadding + this.rightPadding), !1);
                A.height = this._lineHeight;
                r.push(A);
                var J = I,
                    I = Math.max(I, A.width),
                    z = z + A.height,
                    l = Ha(l.slice(A.text.length, l.length));
                G && z > G && ((A = r.pop()), (z -= A.height), (I = J));
            }
        this._wrappedText = { lines: r, width: I, height: z };
        this.width = I + (this.leftPadding + this.rightPadding);
        this.height = z + (this.topPadding + this.bottomPadding);
        this.ctx.font = w;
    };
    ka.prototype._getFontString = function () {
        var l;
        l = "" + (this.fontStyle ? this.fontStyle + " " : "");
        l += this.fontWeight ? this.fontWeight + " " : "";
        l += this.fontSize ? this.fontSize + "px " : "";
        var t = this.fontFamily ? this.fontFamily + "" : "";
        !r && t && ((t = t.split(",")[0]), "'" !== t[0] && '"' !== t[0] && (t = "'" + t + "'"));
        return (l += t);
    };
    oa(Va, Y);
    oa(Aa, Y);
    Aa.prototype.setLayout = function () {
        if (this.text) {
            var f = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                r = f.layoutManager.getFreeSpace(),
                w = r.x1,
                z = r.y1,
                I = 0,
                G = 0,
                A = this.chart._menuButton && this.chart.exportEnabled && "top" === this.verticalAlign ? 40 : 0,
                J,
                R;
            this.textAlign = l(this.options.textAlign) ? this.horizontalAlign : this.textAlign;
            "top" === this.verticalAlign || "bottom" === this.verticalAlign
                ? (null === this.maxWidth && (this.maxWidth = r.width - 4 - A * ("center" === this.horizontalAlign ? 2 : 1)), (G = 0.5 * r.height - this.margin - 2), (I = 0))
                : "center" === this.verticalAlign &&
                  ("left" === this.horizontalAlign || "right" === this.horizontalAlign
                      ? (null === this.maxWidth && (this.maxWidth = r.height - 4), (G = 0.5 * r.width - this.margin - 2))
                      : "center" === this.horizontalAlign && (null === this.maxWidth && (this.maxWidth = r.width - 4), (G = 0.5 * r.height - 4)));
            var N;
            l(this.padding) || "number" !== typeof this.padding
                ? l(this.padding) ||
                  "object" !== typeof this.padding ||
                  ((N = this.padding.top ? this.padding.top : this.padding.bottom ? this.padding.bottom : 0), (N += this.padding.bottom ? this.padding.bottom : this.padding.top ? this.padding.top : 0))
                : (N = 2 * this.padding);
            this.wrap || (G = Math.min(G, 1.5 * this.fontSize + N));
            G = new ka(this.ctx, {
                fontSize: this.fontSize,
                fontFamily: this.fontFamily,
                fontColor: this.fontColor,
                fontStyle: this.fontStyle,
                fontWeight: this.fontWeight,
                textAlign: this.textAlign,
                verticalAlign: this.verticalAlign,
                borderColor: this.borderColor,
                borderThickness: this.borderThickness,
                backgroundColor: this.backgroundColor,
                maxWidth: this.maxWidth,
                maxHeight: G,
                cornerRadius: this.cornerRadius,
                text: this.text,
                padding: this.padding,
                textBaseline: "middle",
            });
            N = G.measureText();
            "top" === this.verticalAlign || "bottom" === this.verticalAlign
                ? ("top" === this.verticalAlign ? ((z = r.y1 + 2 + this.fontSize / 2 + 4), (R = "top")) : "bottom" === this.verticalAlign && ((z = r.y2 - 2 - N.height + this.fontSize / 2 + 4), (R = "bottom")),
                  "left" === this.horizontalAlign ? (w = r.x1 + 2) : "center" === this.horizontalAlign ? (w = r.x1 + r.width / 2 - N.width / 2) : "right" === this.horizontalAlign && (w = r.x2 - 2 - N.width - A),
                  (J = this.horizontalAlign),
                  (this.width = N.width),
                  (this.height = N.height))
                : "center" === this.verticalAlign &&
                  ("left" === this.horizontalAlign
                      ? ((w = r.x1 + 2 + (this.fontSize / 2 + 4)), (z = r.y2 - 2 - (this.maxWidth / 2 - N.width / 2)), (I = -90), (R = "left"), (this.width = N.height), (this.height = N.width))
                      : "right" === this.horizontalAlign
                      ? ((w = r.x2 - 2 - (this.fontSize / 2 + 4)), (z = r.y1 + 2 + (this.maxWidth / 2 - N.width / 2)), (I = 90), (R = "right"), (this.width = N.height), (this.height = N.width))
                      : "center" === this.horizontalAlign && ((z = f.y1 + (f.height / 2 - N.height / 2) + this.fontSize / 2 + 4), (w = f.x1 + (f.width / 2 - N.width / 2)), (R = "center"), (this.width = N.width), (this.height = N.height)),
                  (J = "center"));
            G.x = w;
            G.y = z;
            G.angle = I;
            G.horizontalAlign = J;
            this._textBlock = G;
            f.layoutManager.registerSpace(R, { width: this.width + ("left" === R || "right" === R ? this.margin + 2 : 0), height: this.height + ("top" === R || "bottom" === R ? this.margin + 2 : 0) });
            this.bounds = { x1: w, y1: z, x2: w + this.width, y2: z + this.height };
            this.ctx.textBaseline = "top";
        }
    };
    Aa.prototype.render = function () {
        this._textBlock && this._textBlock.render(!0);
    };
    oa(Ja, Y);
    Ja.prototype.setLayout = Aa.prototype.setLayout;
    Ja.prototype.render = Aa.prototype.render;
    Wa.prototype.get = function (l, r) {
        var w = null;
        0 < this.pool.length ? ((w = this.pool.pop()), Na(w, l, r)) : (w = ta(l, r));
        return w;
    };
    Wa.prototype.release = function (l) {
        this.pool.push(l);
    };
    oa(Ka, Y);
    var Ra = {
        addTheme: function (l, r) {
            Pa[l] = r;
        },
        addColorSet: function (l, r) {
            Ba[l] = r;
        },
        addCultureInfo: function (l, r) {
            La[l] = r;
        },
        formatNumber: function (l, r, w) {
            w = w || "en";
            if (La[w]) return ha(l, r || "#,##0.##", new Ka(w));
            throw "Unknown Culture Name";
        },
        formatDate: function (l, r, w) {
            w = w || "en";
            if (La[w]) return Ca(l, r || "DD MMM YYYY", new Ka(w));
            throw "Unknown Culture Name";
        },
    };
    "undefined" !== typeof module && "undefined" !== typeof module.exports
        ? (module.exports = Ra)
        : "function" === typeof define && define.amd
        ? define([], function () {
              return Ra;
          })
        : (window.CanvasJS && window.console && window.console.log("CanvasJS namespace already exists. If you are loading both chart and stockchart scripts, just load stockchart alone as it includes all chart features."),
          (window.CanvasJS = window.CanvasJS ? window.CanvasJS : Ra));
    w = Ra.Chart = (function () {
        function f(a, d) {
            return a.x - d.x;
        }
        function t(a, d, c) {
            d = d || {};
            l(c)
                ? ((this.predefinedThemes = Pa), (this.optionsName = this.parent = this.index = null))
                : ((this.parent = c.parent),
                  (this.index = c.index),
                  (this.predefinedThemes = c.predefinedThemes),
                  (this.optionsName = c.optionsName),
                  (this.stockChart = c.stockChart),
                  (this.panel = a),
                  (this.isOptionsInArray = c.isOptionsInArray));
            this.theme = l(d.theme) || l(this.predefinedThemes[d.theme]) ? "light1" : d.theme;
            t.base.constructor.call(this, "Chart", this.optionsName, d, this.index, this.parent);
            var b = this;
            this._containerId = a;
            this._objectsInitialized = !1;
            this.overlaidCanvasCtx = this.ctx = null;
            this._indexLabels = [];
            this._panTimerId = 0;
            this._lastTouchEventType = "";
            this._lastTouchData = null;
            this.isAnimating = !1;
            this.renderCount = 0;
            this.disableToolTip = this.animatedRender = !1;
            this.canvasPool = new Wa();
            this.allDOMEventHandlers = [];
            this.panEnabled = !1;
            this._defaultCursor = "default";
            this.plotArea = { canvas: null, ctx: null, x1: 0, y1: 0, x2: 0, y2: 0, width: 0, height: 0 };
            this._dataInRenderedOrder = [];
            (this.container = "string" === typeof this._containerId ? document.getElementById(this._containerId) : this._containerId)
                ? ((this.container.innerHTML = ""),
                  (d = a = 0),
                  (a = this.options.width ? this.width : 0 < this.container.clientWidth ? this.container.clientWidth : this.width),
                  (d = c && c.height ? c.height : this.options.height ? this.height : 0 < this.container.clientHeight ? this.container.clientHeight : this.height),
                  (this.width = a),
                  (this.height = d),
                  (this.x1 = this.y1 = 0),
                  (this.x2 = this.width),
                  (this.y2 = this.height),
                  (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1),
                  (this._canvasJSContainer = document.createElement("div")),
                  this._canvasJSContainer.setAttribute("class", "canvasjs-chart-container"),
                  (this._canvasJSContainer.style.position = "relative"),
                  (this._canvasJSContainer.style.textAlign = "left"),
                  (this._canvasJSContainer.style.cursor = "auto"),
                  (this._canvasJSContainer.style.direction = "ltr"),
                  r || (this._canvasJSContainer.style.height = "0px"),
                  this.container.appendChild(this._canvasJSContainer),
                  (this.canvas = ta(a, d)),
                  (this._preRenderCanvas = ta(a, d)),
                  (this.canvas.style.position = "absolute"),
                  (this.canvas.style.WebkitUserSelect = "none"),
                  (this.canvas.style.MozUserSelect = "none"),
                  (this.canvas.style.msUserSelect = "none"),
                  (this.canvas.style.userSelect = "none"),
                  this.canvas.getContext &&
                      (this._canvasJSContainer.appendChild(this.canvas),
                      (this.ctx = this.canvas.getContext("2d")),
                      (this.ctx.textBaseline = "top"),
                      za(this.ctx),
                      (this._preRenderCtx = this._preRenderCanvas.getContext("2d")),
                      (this._preRenderCtx.textBaseline = "top"),
                      za(this._preRenderCtx),
                      r
                          ? (this.plotArea.ctx = this.ctx)
                          : ((this.plotArea.canvas = ta(a, d)),
                            (this.plotArea.canvas.style.position = "absolute"),
                            this.plotArea.canvas.setAttribute("class", "plotAreaCanvas"),
                            this._canvasJSContainer.appendChild(this.plotArea.canvas),
                            (this.plotArea.ctx = this.plotArea.canvas.getContext("2d"))),
                      (this.overlaidCanvas = ta(a, d)),
                      (this.overlaidCanvas.style.position = "absolute"),
                      (this.overlaidCanvas.style.webkitTapHighlightColor = "transparent"),
                      (this.overlaidCanvas.style.WebkitUserSelect = "none"),
                      (this.overlaidCanvas.style.MozUserSelect = "none"),
                      (this.overlaidCanvas.style.msUserSelect = "none"),
                      (this.overlaidCanvas.style.userSelect = "none"),
                      this.overlaidCanvas.getContext &&
                          (this._canvasJSContainer.appendChild(this.overlaidCanvas), (this.overlaidCanvasCtx = this.overlaidCanvas.getContext("2d")), (this.overlaidCanvasCtx.textBaseline = "top"), za(this.overlaidCanvasCtx)),
                      (this._eventManager = new ga(this)),
                      (this.windowResizeHandler = G(
                          window,
                          "resize",
                          function () {
                              b._updateSize() &&
                                  (b.render(), b.isNavigator && b.stockChart && b.stockChart.navigator && b.stockChart.navigator.enabled && b.stockChart.navigator._updateSlider(b.stockChart._axisXMin, b.stockChart._axisXMax));
                          },
                          this.allDOMEventHandlers
                      )),
                      (this._toolBar = document.createElement("div")),
                      this._toolBar.setAttribute("class", "canvasjs-chart-toolbar"),
                      J(this._toolBar, { position: "absolute", right: "1px", top: "1px" }),
                      this._canvasJSContainer.appendChild(this._toolBar),
                      (this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height }),
                      G(
                          this.overlaidCanvas,
                          "click",
                          function (a) {
                              b._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          "mousemove",
                          function (a) {
                              b._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          "mouseup",
                          function (a) {
                              b._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          "mousedown",
                          function (a) {
                              b._mouseEventHandler(a);
                              va(b._dropdownMenu);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          "mouseout",
                          function (a) {
                              b._mouseEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerDown" : "touchstart",
                          function (a) {
                              b._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerMove" : "touchmove",
                          function (a) {
                              b._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerUp" : "touchend",
                          function (a) {
                              b._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this.overlaidCanvas,
                          window.navigator.msPointerEnabled ? "MSPointerCancel" : "touchcancel",
                          function (a) {
                              b._touchEventHandler(a);
                          },
                          this.allDOMEventHandlers
                      ),
                      (this.toolTip = new $(this, this.options.toolTip)),
                      (this.data = null),
                      (this.axisX = []),
                      (this.axisX2 = []),
                      (this.axisY = []),
                      (this.axisY2 = []),
                      (this.sessionVariables = { axisX: [], axisX2: [], axisY: [], axisY2: [] })))
                : window.console && window.console.log('CanvasJS Error: Chart Container with id "' + this._containerId + '" was not found');
        }
        function w(a, d) {
            for (var c = [], b, e = 0; e < a.length; e++)
                if (0 == e) c.push(a[0]);
                else {
                    var h, q, u;
                    u = e - 1;
                    h = 0 === u ? 0 : u - 1;
                    q = u === a.length - 1 ? u : u + 1;
                    b = (Math.abs((a[q].x - a[h].x) / (0 === a[q].x - a[u].x ? 0.01 : a[q].x - a[u].x)) * (d - 1)) / 2 + 1;
                    var E = (a[q].x - a[h].x) / b;
                    b = (a[q].y - a[h].y) / b;
                    c[c.length] = (a[u].x > a[h].x && 0 < E) || (a[u].x < a[h].x && 0 > E) ? { x: a[u].x + E / 3, y: a[u].y + b / 3 } : { x: a[u].x, y: a[u].y + (1 === c.length ? 0 : b / 9) };
                    u = e;
                    h = 0 === u ? 0 : u - 1;
                    q = u === a.length - 1 ? u : u + 1;
                    b = (Math.abs((a[q].x - a[h].x) / (0 === a[u].x - a[h].x ? 0.01 : a[u].x - a[h].x)) * (d - 1)) / 2 + 1;
                    E = (a[q].x - a[h].x) / b;
                    b = (a[q].y - a[h].y) / b;
                    c[c.length] = (a[u].x > a[h].x && 0 < E) || (a[u].x < a[h].x && 0 > E) ? { x: a[u].x - E / 3, y: a[u].y - b / 3 } : { x: a[u].x, y: a[u].y - b / 9 };
                    c[c.length] = a[e];
                }
            return c;
        }
        function z(a, d, c, b, e, h, q, u, E, k) {
            var m = 0;
            k ? ((q.color = h), (u.color = h)) : (k = 1);
            m = E ? Math.abs(e - c) : Math.abs(b - d);
            m = 0 < q.trimLength ? Math.abs((m * q.trimLength) / 100) : Math.abs(m - q.length);
            E ? ((c += m / 2), (e -= m / 2)) : ((d += m / 2), (b -= m / 2));
            var m = 1 === Math.round(q.thickness) % 2 ? 0.5 : 0,
                n = 1 === Math.round(u.thickness) % 2 ? 0.5 : 0;
            a.save();
            a.globalAlpha = k;
            a.strokeStyle = u.color || h;
            a.lineWidth = u.thickness || 2;
            a.setLineDash && a.setLineDash(I(u.dashType, u.thickness));
            a.beginPath();
            E && 0 < u.thickness
                ? (a.moveTo(b - q.thickness / 2, Math.round((c + e) / 2) - n), a.lineTo(d + q.thickness / 2, Math.round((c + e) / 2) - n))
                : 0 < u.thickness && (a.moveTo(Math.round((d + b) / 2) - n, c + q.thickness / 2), a.lineTo(Math.round((d + b) / 2) - n, e - q.thickness / 2));
            a.stroke();
            a.strokeStyle = q.color || h;
            a.lineWidth = q.thickness || 2;
            a.setLineDash && a.setLineDash(I(q.dashType, q.thickness));
            a.beginPath();
            E && 0 < q.thickness ? (a.moveTo(b - m, c), a.lineTo(b - m, e), a.moveTo(d + m, c), a.lineTo(d + m, e)) : 0 < q.thickness && (a.moveTo(d, c + m), a.lineTo(b, c + m), a.moveTo(d, e - m), a.lineTo(b, e - m));
            a.stroke();
            a.restore();
        }
        function T(a, d) {
            T.base.constructor.call(this, "Legend", "legend", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.ghostCtx = this.chart._eventManager.ghostCtx;
            this.items = [];
            this.optionsName = "legend";
            this.height = this.width = 0;
            this.orientation = null;
            this.dataSeries = [];
            this.bounds = { x1: null, y1: null, x2: null, y2: null };
            "undefined" === typeof this.options.fontSize && (this.fontSize = this.chart.getAutoFontSize(this.fontSize));
            this.lineHeight = $a(this.fontFamily, this.fontSize, this.fontWeight);
            this.horizontalSpacing = this.fontSize;
        }
        function P(a, d, c, b) {
            P.base.constructor.call(this, "DataSeries", "data", d, c, a);
            this.chart = a;
            this.canvas = a.canvas;
            this._ctx = a.canvas.ctx;
            this.index = c;
            this.noDataPointsInPlotArea = 0;
            this.id = b;
            this.chart._eventManager.objectMap[b] = { id: b, objectType: "dataSeries", dataSeriesIndex: c };
            a = d.dataPoints ? d.dataPoints.length : 0;
            this.dataPointEOs = [];
            for (d = 0; d < a; d++) this.dataPointEOs[d] = {};
            this.dataPointIds = [];
            this.plotUnit = [];
            this.axisY = this.axisX = null;
            this.optionsName = "data";
            this.isOptionsInArray = !0;
            null === this.fillOpacity && (this.type.match(/area/i) ? (this.fillOpacity = 0.7) : (this.fillOpacity = 1));
            this.axisPlacement = this.getDefaultAxisPlacement();
            "undefined" === typeof this.options.indexLabelFontSize && (this.indexLabelFontSize = this.chart.getAutoFontSize(this.indexLabelFontSize));
        }
        function A(a, d, c, b, e, h) {
            A.base.constructor.call(this, "Axis", d, c, b, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = a.ctx;
            this.intervalStartPosition = this.maxHeight = this.maxWidth = 0;
            this.labels = [];
            this.dataSeries = [];
            this._stripLineLabels = this._ticks = this._labels = null;
            this.dataInfo = { min: Infinity, max: -Infinity, viewPortMin: Infinity, viewPortMax: -Infinity, minDiff: Infinity };
            this.isOptionsInArray = !0;
            "axisX" === e
                ? ("left" === h || "bottom" === h
                      ? ((this.optionsName = "axisX"), l(this.chart.sessionVariables.axisX[b]) && (this.chart.sessionVariables.axisX[b] = {}), (this.sessionVariables = this.chart.sessionVariables.axisX[b]))
                      : ((this.optionsName = "axisX2"), l(this.chart.sessionVariables.axisX2[b]) && (this.chart.sessionVariables.axisX2[b] = {}), (this.sessionVariables = this.chart.sessionVariables.axisX2[b])),
                  this.options.interval || (this.intervalType = null))
                : "left" === h || "bottom" === h
                ? ((this.optionsName = "axisY"), l(this.chart.sessionVariables.axisY[b]) && (this.chart.sessionVariables.axisY[b] = {}), (this.sessionVariables = this.chart.sessionVariables.axisY[b]))
                : ((this.optionsName = "axisY2"), l(this.chart.sessionVariables.axisY2[b]) && (this.chart.sessionVariables.axisY2[b] = {}), (this.sessionVariables = this.chart.sessionVariables.axisY2[b]));
            "undefined" === typeof this.options.titleFontSize && (this.titleFontSize = this.chart.getAutoFontSize(this.titleFontSize));
            "undefined" === typeof this.options.labelFontSize && (this.labelFontSize = this.chart.getAutoFontSize(this.labelFontSize));
            this.type = e;
            "axisX" !== e || (c && "undefined" !== typeof c.gridThickness) || (this.gridThickness = 0);
            this._position = h;
            this.lineCoordinates = { x1: null, y1: null, x2: null, y2: null, width: null };
            this.labelAngle = ((this.labelAngle % 360) + 360) % 360;
            90 < this.labelAngle && 270 > this.labelAngle ? (this.labelAngle -= 180) : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360);
            this.options.scaleBreaks && (this.scaleBreaks = new V(this.chart, this.options.scaleBreaks, ++this.chart._eventManager.lastObjectId, this));
            this.stripLines = [];
            if (this.options.stripLines && 0 < this.options.stripLines.length)
                for (a = 0; a < this.options.stripLines.length; a++) this.stripLines.push(new N(this.chart, this.options.stripLines[a], a, ++this.chart._eventManager.lastObjectId, this));
            this.options.crosshair && ((this.crosshair = new Z(this.chart, this.options.crosshair, this)), (this.crosshair._updatedValue = l(this.sessionVariables.crosshairValue) ? null : this.sessionVariables.crosshairValue));
            this._titleTextBlock = null;
            this.hasOptionChanged("viewportMinimum") && null === this.viewportMinimum && ((this.options.viewportMinimum = void 0), (this.sessionVariables.viewportMinimum = null));
            this.hasOptionChanged("viewportMinimum") || isNaN(this.sessionVariables.newViewportMinimum) || null === this.sessionVariables.newViewportMinimum
                ? (this.sessionVariables.newViewportMinimum = null)
                : (this.viewportMinimum = this.sessionVariables.newViewportMinimum);
            this.hasOptionChanged("viewportMaximum") && null === this.viewportMaximum && ((this.options.viewportMaximum = void 0), (this.sessionVariables.viewportMaximum = null));
            this.hasOptionChanged("viewportMaximum") || isNaN(this.sessionVariables.newViewportMaximum) || null === this.sessionVariables.newViewportMaximum
                ? (this.sessionVariables.newViewportMaximum = null)
                : (this.viewportMaximum = this.sessionVariables.newViewportMaximum);
            null !== this.minimum && null !== this.viewportMinimum && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
            null !== this.maximum && null !== this.viewportMaximum && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
            this.trackChanges("viewportMinimum");
            this.trackChanges("viewportMaximum");
        }
        function V(a, d, c, b) {
            V.base.constructor.call(this, "ScaleBreaks", "scaleBreaks", d, null, b);
            this.id = c;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = b;
            this.optionsName = "scaleBreaks";
            this.isOptionsInArray = !1;
            this._appliedBreaks = [];
            this.customBreaks = [];
            this.autoBreaks = [];
            "string" === typeof this.spacing ? ((this.spacing = parseFloat(this.spacing)), (this.spacing = isNaN(this.spacing) ? 8 : (10 < this.spacing ? 10 : this.spacing) + "%")) : "number" !== typeof this.spacing && (this.spacing = 8);
            this.autoCalculate && (this.maxNumberOfAutoBreaks = Math.min(this.maxNumberOfAutoBreaks, 5));
            if (this.options.customBreaks && 0 < this.options.customBreaks.length) {
                for (a = 0; a < this.options.customBreaks.length; a++)
                    this.customBreaks.push(new fa(this.chart, "customBreaks", this.options.customBreaks[a], a, ++this.chart._eventManager.lastObjectId, this)),
                        "number" === typeof this.customBreaks[a].startValue &&
                            "number" === typeof this.customBreaks[a].endValue &&
                            this.customBreaks[a].endValue !== this.customBreaks[a].startValue &&
                            this._appliedBreaks.push(this.customBreaks[a]);
                this._appliedBreaks.sort(function (a, b) {
                    return a.startValue - b.startValue;
                });
                for (a = 0; a < this._appliedBreaks.length - 1; a++)
                    this._appliedBreaks[a].endValue >= this._appliedBreaks[a + 1].startValue &&
                        ((this._appliedBreaks[a].endValue = Math.max(this._appliedBreaks[a].endValue, this._appliedBreaks[a + 1].endValue)),
                        window.console && window.console.log("CanvasJS Error: Breaks " + a + " and " + (a + 1) + " are overlapping."),
                        this._appliedBreaks.splice(a, 2),
                        a--);
            }
        }
        function fa(a, d, c, b, e, h) {
            fa.base.constructor.call(this, "Break", d, c, b, h);
            this.id = e;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.scaleBreaks = h;
            this.optionsName = d;
            this.isOptionsInArray = !0;
            this.type = c.type ? this.type : h.type;
            this.fillOpacity = l(c.fillOpacity) ? h.fillOpacity : this.fillOpacity;
            this.lineThickness = l(c.lineThickness) ? h.lineThickness : this.lineThickness;
            this.color = c.color ? this.color : h.color;
            this.lineColor = c.lineColor ? this.lineColor : h.lineColor;
            this.lineDashType = c.lineDashType ? this.lineDashType : h.lineDashType;
            !l(this.startValue) && this.startValue.getTime && (this.startValue = this.startValue.getTime());
            !l(this.endValue) && this.endValue.getTime && (this.endValue = this.endValue.getTime());
            "number" === typeof this.startValue && "number" === typeof this.endValue && this.endValue < this.startValue && ((a = this.startValue), (this.startValue = this.endValue), (this.endValue = a));
            this.spacing = "undefined" === typeof c.spacing ? h.spacing : c.spacing;
            "string" === typeof this.options.spacing
                ? ((this.spacing = parseFloat(this.spacing)), (this.spacing = isNaN(this.spacing) ? 0 : (10 < this.spacing ? 10 : this.spacing) + "%"))
                : "number" !== typeof this.options.spacing && (this.spacing = h.spacing);
            this.size = h.parent.logarithmic ? 1 : 0;
        }
        function N(a, d, c, b, e) {
            N.base.constructor.call(this, "StripLine", "stripLines", d, c, e);
            this.id = b;
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.label = this.label;
            this.axis = e;
            this.optionsName = "stripLines";
            this.isOptionsInArray = !0;
            this._thicknessType = "pixel";
            null !== this.startValue &&
                null !== this.endValue &&
                ((this.value = e.logarithmic
                    ? Math.sqrt((this.startValue.getTime ? this.startValue.getTime() : this.startValue) * (this.endValue.getTime ? this.endValue.getTime() : this.endValue))
                    : ((this.startValue.getTime ? this.startValue.getTime() : this.startValue) + (this.endValue.getTime ? this.endValue.getTime() : this.endValue)) / 2),
                (this._thicknessType = null));
        }
        function Z(a, d, c) {
            Z.base.constructor.call(this, "Crosshair", "crosshair", d, null, c);
            this.chart = a;
            this.ctx = this.chart.ctx;
            this.axis = c;
            this.optionsName = "crosshair";
            this._thicknessType = "pixel";
        }
        function $(a, d) {
            $.base.constructor.call(this, "ToolTip", "toolTip", d, null, a);
            this.chart = a;
            this.canvas = a.canvas;
            this.ctx = this.chart.ctx;
            this.currentDataPointIndex = this.currentSeriesIndex = -1;
            this._prevY = this._prevX = NaN;
            this.containerTransitionDuration = 0.1;
            this.mozContainerTransition = this.getContainerTransition(this.containerTransitionDuration);
            this.optionsName = "toolTip";
            this._initialize();
        }
        function ga(a) {
            this.chart = a;
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.ghostCanvas = ta(this.chart.width, this.chart.height, !0);
            this.ghostCtx = this.ghostCanvas.getContext("2d");
            this.mouseoveredObjectMaps = [];
        }
        function ja(a) {
            this.chart = a;
            this.ctx = this.chart.plotArea.ctx;
            this.animations = [];
            this.animationRequestId = null;
        }
        oa(t, Y);
        t.prototype.destroy = function () {
            var a = this.allDOMEventHandlers;
            this._animator && this._animator.cancelAllAnimations();
            this._panTimerId && clearTimeout(this._panTimerId);
            for (var d = 0; d < a.length; d++) {
                var c = a[d][0],
                    b = a[d][1],
                    e = a[d][2],
                    h = a[d][3],
                    h = h || !1;
                c.removeEventListener ? c.removeEventListener(b, e, h) : c.detachEvent && c.detachEvent("on" + b, e);
            }
            this.allDOMEventHandlers = [];
            for (this.removeAllEventListeners(); this._canvasJSContainer && this._canvasJSContainer.hasChildNodes(); ) this._canvasJSContainer.removeChild(this._canvasJSContainer.lastChild);
            for (; this.container && this.container.hasChildNodes(); ) this.container.removeChild(this.container.lastChild);
            for (; this._dropdownMenu && this._dropdownMenu.hasChildNodes(); ) this._dropdownMenu.removeChild(this._dropdownMenu.lastChild);
            this.container = this._canvasJSContainer = null;
            this.toolTip.container = null;
            this.canvas && ya(this.canvas);
            this.overlaidCanvas && ya(this.overlaidCanvas);
            this._preRenderCanvas && ya(this._preRenderCanvas);
            this._breaksCanvas && ya(this._breaksCanvas);
            this._eventManager && this._eventManager.ghostCanvas && ya(this._eventManager.ghostCanvas);
            this._toolBar = this._dropdownMenu = this._menuButton = this._resetButton = this._zoomButton = null;
        };
        t.prototype._updateOptions = function () {
            var a = this;
            this.updateOption("width");
            this.updateOption("height");
            this.updateOption("dataPointWidth");
            this.updateOption("dataPointMinWidth");
            this.updateOption("dataPointMaxWidth");
            this.updateOption("interactivityEnabled");
            this.updateOption("theme");
            this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.theme && l(this.options.theme) ? (this.theme = this.stockChart.theme) : l(this.stockChart) && l(this.theme) && (this.theme = "light1");
            this.updateOption("colorSet") && (this.selectedColorSet = "undefined" !== typeof Ba[this.colorSet] ? Ba[this.colorSet] : Ba.colorSet1);
            this.updateOption("backgroundColor");
            this.stockChart && this.stockChart.options && "undefined" !== typeof this.stockChart.options.backgroundColor && l(this.options.backgroundColor) && (this.backgroundColor = this.stockChart.backgroundColor);
            this.backgroundColor || (this.backgroundColor = "rgba(0,0,0,0)");
            this.updateOption("culture");
            this.stockChart && l(this.options.culture) && (this.culture = this.stockChart.culture);
            this._cultureInfo = new Ka(this.culture);
            this.updateOption("animationEnabled");
            this.animationEnabled = this.animationEnabled && r;
            this.updateOption("animationDuration");
            this.updateOption("rangeChanging");
            this.updateOption("rangeChanged");
            this.updateOption("exportEnabled");
            this.updateOption("exportFileName");
            this.updateOption("zoomType");
            this.toolbar = new Va(this, this.options.toolbar);
            if (this.stockChart && this.stockChart.options && this.stockChart.options.toolbar && !this.options.toolbar) for (var d in this.stockChart.options.toolbar) this.toolbar[d] = this.stockChart.options.toolbar[d];
            if (this.options.zoomEnabled || this.panEnabled) {
                if (this._zoomButton)
                    J(this._zoomButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }),
                        0 >= navigator.userAgent.search("MSIE") && this._zoomButton.childNodes[0] && J(this._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
                else {
                    var c = !1;
                    va((this._zoomButton = document.createElement("button")));
                    sa(this, this._zoomButton, "pan");
                    this._toolBar.appendChild(this._zoomButton);
                    this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor;
                    G(
                        this._zoomButton,
                        "touchstart",
                        function (a) {
                            c = !0;
                        },
                        this.allDOMEventHandlers
                    );
                    G(
                        this._zoomButton,
                        "click",
                        function () {
                            a.zoomEnabled ? ((a.zoomEnabled = !1), (a.panEnabled = !0), sa(a, a._zoomButton, "zoom")) : ((a.zoomEnabled = !0), (a.panEnabled = !1), sa(a, a._zoomButton, "pan"));
                            a.render();
                        },
                        this.allDOMEventHandlers
                    );
                    G(
                        this._zoomButton,
                        "mousemove",
                        function () {
                            c
                                ? (c = !1)
                                : (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                        },
                        this.allDOMEventHandlers
                    );
                    G(
                        this._zoomButton,
                        "mouseout",
                        function () {
                            c ||
                                (J(a._zoomButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }),
                                0 >= navigator.userAgent.search("MSIE") && J(a._zoomButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                        },
                        this.allDOMEventHandlers
                    );
                }
                this._resetButton
                    ? (J(this._resetButton, { borderRight: this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor, backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor }),
                      0 >= navigator.userAgent.search("MSIE") && this._resetButton.childNodes[0] && J(this._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }),
                      (this._resetButton.title = this._cultureInfo.resetText))
                    : ((c = !1),
                      va((this._resetButton = document.createElement("button"))),
                      sa(this, this._resetButton, "reset"),
                      (this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor),
                      this._toolBar.appendChild(this._resetButton),
                      G(
                          this._resetButton,
                          "touchstart",
                          function (a) {
                              c = !0;
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this._resetButton,
                          "click",
                          function () {
                              a.toolTip.hide();
                              a.toolTip && a.toolTip.enabled && a.toolTip.dispatchEvent("hidden", { chart: a, toolTip: a.toolTip }, a.toolTip);
                              a.zoomEnabled || a.panEnabled
                                  ? ((a.zoomEnabled = !0), (a.panEnabled = !1), sa(a, a._zoomButton, "pan"), (a._defaultCursor = "default"), (a.overlaidCanvas.style.cursor = a._defaultCursor))
                                  : ((a.zoomEnabled = !1), (a.panEnabled = !1));
                              if (a.sessionVariables.axisX) for (var b = 0; b < a.sessionVariables.axisX.length; b++) (a.sessionVariables.axisX[b].newViewportMinimum = null), (a.sessionVariables.axisX[b].newViewportMaximum = null);
                              if (a.sessionVariables.axisX2) for (b = 0; b < a.sessionVariables.axisX2.length; b++) (a.sessionVariables.axisX2[b].newViewportMinimum = null), (a.sessionVariables.axisX2[b].newViewportMaximum = null);
                              if (a.sessionVariables.axisY) for (b = 0; b < a.sessionVariables.axisY.length; b++) (a.sessionVariables.axisY[b].newViewportMinimum = null), (a.sessionVariables.axisY[b].newViewportMaximum = null);
                              if (a.sessionVariables.axisY2) for (b = 0; b < a.sessionVariables.axisY2.length; b++) (a.sessionVariables.axisY2[b].newViewportMinimum = null), (a.sessionVariables.axisY2[b].newViewportMaximum = null);
                              a.resetOverlayedCanvas();
                              0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" });
                              va(a._zoomButton, a._resetButton);
                              a.stockChart && (a.stockChart._rangeEventParameter = { stockChart: a.stockChart, source: "chart", index: a.stockChart.charts.indexOf(a), minimum: null, maximum: null });
                              a._dispatchRangeEvent("rangeChanging", "reset");
                              a.stockChart && ((a.stockChart._rangeEventParameter.type = "rangeChanging"), a.stockChart.dispatchEvent("rangeChanging", a.stockChart._rangeEventParameter, a.stockChart));
                              a.render();
                              a.syncCharts &&
                                  a.stockChart &&
                                  ((a.stockChart.rangeUpdatedBy =
                                      !a.stockChart.navigator.slider || (l(a.stockChart.navigator.slider.options.minimum) && l(a.stockChart.navigator.slider.options.maximum))
                                          ? !a.stockChart.rangeSelector.enabled ||
                                            !a.stockChart.rangeSelector.inputFields.enabled ||
                                            (l(a.stockChart.rangeSelector.inputFields.options.startValue) && l(a.stockChart.rangeSelector.inputFields.options.endValue))
                                              ? null
                                              : "inputFields"
                                          : "navigator"),
                                  l(a.stockChart._selectedRangeButtonIndex) || (a.stockChart.rangeUpdatedBy = "rangeButton"),
                                  a.syncCharts(null, null),
                                  "rangeButton" === a.stockChart.rangeUpdatedBy &&
                                      a.stockChart.rangeSelector.selectedRangeButtonIndex < a.stockChart.rangeSelector.buttons.length &&
                                      ((b = a.stockChart.rangeSelector.buttons[a.stockChart._selectedRangeButtonIndex]),
                                      b.enabled &&
                                          ((b.state = "on"),
                                          (b.textBlock.fontWeight = "bold"),
                                          (b.textBlock.fontColor = a.stockChart.rangeSelector.buttonStyle.labelFontColorOnHover),
                                          (b.textBlock.backgroundColor = a.stockChart.rangeSelector.buttonStyle.backgroundColorOnSelect),
                                          (a.stockChart.rangeSelector.sessionVariables._clickedRangeButtonIndex = null),
                                          b.render())));
                              a._dispatchRangeEvent("rangeChanged", "reset");
                              a.stockChart && ((a.stockChart._rangeEventParameter.type = "rangeChanged"), a.stockChart.dispatchEvent("rangeChanged", a.stockChart._rangeEventParameter, a.stockChart));
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this._resetButton,
                          "mousemove",
                          function () {
                              c ||
                                  (J(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColorOnHover, color: a.toolbar.fontColorOnHover, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(100%)", filter: "invert(100%)" }));
                          },
                          this.allDOMEventHandlers
                      ),
                      G(
                          this._resetButton,
                          "mouseout",
                          function () {
                              c ||
                                  (J(a._resetButton, { backgroundColor: a.toolbar.itemBackgroundColor, color: a.toolbar.fontColor, transition: "0.4s", WebkitTransition: "0.4s" }),
                                  0 >= navigator.userAgent.search("MSIE") && J(a._resetButton.childNodes[0], { WebkitFilter: "invert(0%)", filter: "invert(0%)" }));
                          },
                          this.allDOMEventHandlers
                      ),
                      (this.overlaidCanvas.style.cursor = a._defaultCursor));
                this.zoomEnabled ||
                    this.panEnabled ||
                    (this._zoomButton
                        ? (a._zoomButton.getAttribute("state") === a._cultureInfo.zoomText ? ((this.panEnabled = !0), (this.zoomEnabled = !1)) : ((this.zoomEnabled = !0), (this.panEnabled = !1)), Ma(a._zoomButton, a._resetButton))
                        : ((this.zoomEnabled = !0), (this.panEnabled = !1)));
            } else this.panEnabled = this.zoomEnabled = !1;
            ib(this);
            "none" !== this._toolBar.style.display &&
                this._zoomButton &&
                (this.panEnabled ? sa(a, a._zoomButton, "zoom") : sa(a, a._zoomButton, "pan"), a._resetButton.getAttribute("state") !== a._cultureInfo.resetText && sa(a, a._resetButton, "reset"));
            this.options.toolTip && this.toolTip.options !== this.options.toolTip && (this.toolTip.options = this.options.toolTip);
            for (d in this.toolTip.options) this.toolTip.options.hasOwnProperty(d) && this.toolTip.updateOption(d);
        };
        t.prototype._updateSize = function () {
            var a;
            a = [this.canvas, this.overlaidCanvas, this._eventManager.ghostCanvas];
            var d = 0,
                c = 0;
            this.options.width ? (d = this.width) : (this.width = d = 0 < this.container.clientWidth ? this.container.clientWidth : this.width);
            l(this.stockChart) || l(this.index)
                ? this.options.height
                    ? (c = this.height)
                    : (this.height = c = 0 < this.container.clientHeight ? this.container.clientHeight : this.height)
                : (c = this.height = this.stockChart._chartsHeight[this.index]);
            if (this.canvas.width !== d * ia || this.canvas.height !== c * ia) {
                for (var b = 0; b < a.length; b++) Na(a[b], d, c);
                this.bounds = { x1: 0, y1: 0, x2: this.width, y2: this.height, width: this.width, height: this.height };
                a = !0;
            } else a = !1;
            return a;
        };
        t.prototype._initialize = function () {
            this.isNavigator = l(this.parent) || l(this.parent._defaultsKey) || "Navigator" !== this.parent._defaultsKey ? !1 : !0;
            this._animator ? this._animator.cancelAllAnimations() : (this._animator = new ja(this));
            this.removeAllEventListeners();
            this.disableToolTip = !1;
            this._axes = [];
            this.funnelPyramidClickHandler = this.pieDoughnutClickHandler = null;
            this._updateOptions();
            this.animatedRender = r && this.animationEnabled && 0 === this.renderCount;
            this._updateSize();
            this.clearCanvas();
            this.ctx.beginPath();
            this.axisX = [];
            this.axisX2 = [];
            this.axisY = [];
            this.axisY2 = [];
            this._indexLabels = [];
            this._dataInRenderedOrder = [];
            this._events = [];
            this._eventManager && this._eventManager.reset();
            this.plotInfo = { axisPlacement: null, plotTypes: [] };
            this.layoutManager = new Fa(0, 0, this.width, this.height, this.isNavigator ? 0 : 2);
            this.plotArea.layoutManager && this.plotArea.layoutManager.reset();
            this.data = [];
            this.title = null;
            this.subtitles = [];
            var a = 0,
                d = null;
            if (this.options.data) {
                for (var c = 0; c < this.options.data.length; c++)
                    if ((a++, !this.options.data[c].type || 0 <= t._supportedChartTypes.indexOf(this.options.data[c].type))) {
                        var b = new P(this, this.options.data[c], a - 1, ++this._eventManager.lastObjectId);
                        if (!l(b) && b.dataPoints)
                            for (var e = 0; e < b.dataPoints.length; e++)
                                if (b.dataPoints[e].x && b.dataPoints[e].x.getTime) {
                                    b.xValueType = "dateTime";
                                    break;
                                }
                        "error" === b.type &&
                            ((b.linkedDataSeriesIndex = l(this.options.data[c].linkedDataSeriesIndex) ? c - 1 : this.options.data[c].linkedDataSeriesIndex),
                            0 > b.linkedDataSeriesIndex || b.linkedDataSeriesIndex >= this.options.data.length || "number" !== typeof b.linkedDataSeriesIndex || "error" === this.options.data[b.linkedDataSeriesIndex].type) &&
                            (b.linkedDataSeriesIndex = null);
                        null === b.name && (b.name = "DataSeries " + a);
                        null === b.color
                            ? 1 < this.options.data.length
                                ? ((b._colorSet = [this.selectedColorSet[b.index % this.selectedColorSet.length]]), (b.color = this.selectedColorSet[b.index % this.selectedColorSet.length]))
                                : (b._colorSet =
                                      "line" === b.type ||
                                      "stepLine" === b.type ||
                                      "spline" === b.type ||
                                      "area" === b.type ||
                                      "stepArea" === b.type ||
                                      "splineArea" === b.type ||
                                      "stackedArea" === b.type ||
                                      "stackedArea100" === b.type ||
                                      "rangeArea" === b.type ||
                                      "rangeSplineArea" === b.type ||
                                      "candlestick" === b.type ||
                                      "ohlc" === b.type ||
                                      "waterfall" === b.type ||
                                      "boxAndWhisker" === b.type
                                          ? [this.selectedColorSet[0]]
                                          : this.selectedColorSet)
                            : (b._colorSet = [b.color]);
                        null === b.markerSize &&
                            ((("line" === b.type || "stepLine" === b.type || "spline" === b.type || 0 <= b.type.toLowerCase().indexOf("area")) && b.dataPoints && b.dataPoints.length < this.width / 16) || "scatter" === b.type) &&
                            (b.markerSize = 8);
                        ("bubble" !== b.type && "scatter" !== b.type) ||
                            !b.dataPoints ||
                            (b.dataPoints.some
                                ? b.dataPoints.some(function (a) {
                                      return a.x;
                                  }) && b.dataPoints.sort(f)
                                : b.dataPoints.sort(f));
                        this.data.push(b);
                        var e = b.axisPlacement,
                            d = d || e,
                            h;
                        "normal" === e
                            ? "xySwapped" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                                : "none" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "normal")
                            : "xySwapped" === e
                            ? "normal" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with line, area, column or pie chart')
                                : "none" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with pie chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "xySwapped")
                            : "none" === e
                            ? "normal" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with line, area, column or bar chart')
                                : "xySwapped" === this.plotInfo.axisPlacement
                                ? (h = 'You cannot combine "' + b.type + '" with bar chart')
                                : null === this.plotInfo.axisPlacement && (this.plotInfo.axisPlacement = "none")
                            : null === e && "none" === this.plotInfo.axisPlacement && (h = 'You cannot combine "' + b.type + '" with pie chart');
                        if (h && window.console) {
                            window.console.log(h);
                            return;
                        }
                    }
                for (c = 0; c < this.data.length; c++) {
                    if ("none" == d && "error" === this.data[c].type && window.console) {
                        window.console.log('You cannot combine "' + b.type + '" with error chart');
                        return;
                    }
                    "error" === this.data[c].type &&
                        ((this.data[c].axisPlacement = this.plotInfo.axisPlacement = d || "normal"), (this.data[c]._linkedSeries = null === this.data[c].linkedDataSeriesIndex ? null : this.data[this.data[c].linkedDataSeriesIndex]));
                }
            }
            this._objectsInitialized = !0;
            this._plotAreaElements = [];
        };
        t._supportedChartTypes = Ea(
            "line stepLine spline column area stepArea splineArea bar bubble scatter stackedColumn stackedColumn100 stackedBar stackedBar100 stackedArea stackedArea100 candlestick ohlc boxAndWhisker rangeColumn error rangeBar rangeArea rangeSplineArea pie doughnut funnel pyramid waterfall".split(
                " "
            )
        );
        t.prototype.setLayout = function () {
            for (var a = this._plotAreaElements, d = 0; d < this.data.length; d++)
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) {
                    if (!this.data[d].axisYType || "primary" === this.data[d].axisYType)
                        if (this.options.axisY && 0 < this.options.axisY.length) {
                            if (!this.axisY.length)
                                for (var c = 0; c < this.options.axisY.length; c++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "left")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY[c] = new A(this, "axisY", this.options.axisY[c], c, "axisY", "bottom")));
                            this.data[d].axisY = this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0];
                            this.axisY[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisY.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "left")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY[0] = new A(this, "axisY", this.options.axisY, 0, "axisY", "bottom")))),
                                (this.data[d].axisY = this.axisY[0]),
                                this.axisY[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisYType)
                        if (this.options.axisY2 && 0 < this.options.axisY2.length) {
                            if (!this.axisY2.length)
                                for (c = 0; c < this.options.axisY2.length; c++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisY2[c] = new A(this, "axisY2", this.options.axisY2[c], c, "axisY", "right")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY2[c] = new A(this, "axisY2", this.options.axisY2[c], c, "axisY", "top")));
                            this.data[d].axisY = this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0];
                            this.axisY2[0 <= this.data[d].axisYIndex && this.data[d].axisYIndex < this.axisY2.length ? this.data[d].axisYIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisY2.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "right")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisY2[0] = new A(this, "axisY2", this.options.axisY2, 0, "axisY", "top")))),
                                (this.data[d].axisY = this.axisY2[0]),
                                this.axisY2[0].dataSeries.push(this.data[d]);
                    if (!this.data[d].axisXType || "primary" === this.data[d].axisXType)
                        if (this.options.axisX && 0 < this.options.axisX.length) {
                            if (!this.axisX.length)
                                for (c = 0; c < this.options.axisX.length; c++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "bottom")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX[c] = new A(this, "axisX", this.options.axisX[c], c, "axisX", "left")));
                            this.data[d].axisX = this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0];
                            this.axisX[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisX.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "bottom")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX[0] = new A(this, "axisX", this.options.axisX, 0, "axisX", "left")))),
                                (this.data[d].axisX = this.axisX[0]),
                                this.axisX[0].dataSeries.push(this.data[d]);
                    if ("secondary" === this.data[d].axisXType)
                        if (this.options.axisX2 && 0 < this.options.axisX2.length) {
                            if (!this.axisX2.length)
                                for (c = 0; c < this.options.axisX2.length; c++)
                                    "normal" === this.plotInfo.axisPlacement
                                        ? this._axes.push((this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "top")))
                                        : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX2[c] = new A(this, "axisX2", this.options.axisX2[c], c, "axisX", "right")));
                            this.data[d].axisX = this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0];
                            this.axisX2[0 <= this.data[d].axisXIndex && this.data[d].axisXIndex < this.axisX2.length ? this.data[d].axisXIndex : 0].dataSeries.push(this.data[d]);
                        } else
                            this.axisX2.length ||
                                ("normal" === this.plotInfo.axisPlacement
                                    ? this._axes.push((this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "top")))
                                    : "xySwapped" === this.plotInfo.axisPlacement && this._axes.push((this.axisX2[0] = new A(this, "axisX2", this.options.axisX2, 0, "axisX", "right")))),
                                (this.data[d].axisX = this.axisX2[0]),
                                this.axisX2[0].dataSeries.push(this.data[d]);
                }
            if (this.axisY) {
                for (c = 1; c < this.axisY.length; c++) "undefined" === typeof this.axisY[c].options.gridThickness && (this.axisY[c].gridThickness = 0);
                for (c = 0; c < this.axisY.length - 1; c++) "undefined" === typeof this.axisY[c].options.margin && (this.axisY[c].margin = 10);
            }
            if (this.axisY2) {
                for (c = 1; c < this.axisY2.length; c++) "undefined" === typeof this.axisY2[c].options.gridThickness && (this.axisY2[c].gridThickness = 0);
                for (c = 0; c < this.axisY2.length - 1; c++) "undefined" === typeof this.axisY2[c].options.margin && (this.axisY2[c].margin = 10);
            }
            this.axisY &&
                0 < this.axisY.length &&
                this.axisY2 &&
                0 < this.axisY2.length &&
                (0 < this.axisY[0].gridThickness && "undefined" === typeof this.axisY2[0].options.gridThickness
                    ? (this.axisY2[0].gridThickness = 0)
                    : 0 < this.axisY2[0].gridThickness && "undefined" === typeof this.axisY[0].options.gridThickness && (this.axisY[0].gridThickness = 0));
            if (this.axisX) for (c = 0; c < this.axisX.length; c++) "undefined" === typeof this.axisX[c].options.gridThickness && (this.axisX[c].gridThickness = 0);
            if (this.axisX2) for (c = 0; c < this.axisX2.length; c++) "undefined" === typeof this.axisX2[c].options.gridThickness && (this.axisX2[c].gridThickness = 0);
            this.axisX &&
                0 < this.axisX.length &&
                this.axisX2 &&
                0 < this.axisX2.length &&
                (0 < this.axisX[0].gridThickness && "undefined" === typeof this.axisX2[0].options.gridThickness
                    ? (this.axisX2[0].gridThickness = 0)
                    : 0 < this.axisX2[0].gridThickness && "undefined" === typeof this.axisX[0].options.gridThickness && (this.axisX[0].gridThickness = 0));
            c = !1;
            if (0 < this._axes.length && this.options.zoomEnabled && (this.zoomEnabled || this.panEnabled))
                for (d = 0; d < this._axes.length; d++)
                    if (!l(this._axes[d].viewportMinimum) || !l(this._axes[d].viewportMaximum)) {
                        c = !0;
                        break;
                    }
            c
                ? (Ma(this._zoomButton, this._resetButton),
                  (this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor),
                  (this._zoomButton.style.borderRight = this.toolbar.buttonBorderThickness + "px solid " + this.toolbar.buttonBorderColor),
                  (this._resetButton.style.borderRight = (this.exportEnabled ? this.toolbar.buttonBorderThickness : 0) + "px solid " + this.toolbar.buttonBorderColor))
                : (va(this._zoomButton, this._resetButton), (this._toolBar.style.border = this.toolbar.buttonBorderThickness + "px solid transparent"), this.options.zoomEnabled && ((this.zoomEnabled = !0), (this.panEnabled = !1)));
            gb(this);
            this._processData();
            this.options.title && ((this.title = new Aa(this, this.options.title)), this.title.dockInsidePlotArea ? a.push(this.title) : this.title.setLayout());
            if (this.options.subtitles) for (d = 0; d < this.options.subtitles.length; d++) (c = new Ja(this, this.options.subtitles[d], d)), this.subtitles.push(c), c.dockInsidePlotArea ? a.push(c) : c.setLayout();
            this.legend = new T(this, this.options.legend);
            for (d = 0; d < this.data.length; d++)
                (this.data[d].showInLegend || "pie" === this.data[d].type || "doughnut" === this.data[d].type || "funnel" === this.data[d].type || "pyramid" === this.data[d].type) && this.legend.dataSeries.push(this.data[d]);
            this.legend.dockInsidePlotArea ? a.push(this.legend) : this.legend.setLayout();
            for (d = 0; d < this._axes.length; d++)
                if (this._axes[d].scaleBreaks && this._axes[d].scaleBreaks._appliedBreaks.length) {
                    r ? ((this._breaksCanvas = ta(this.width, this.height, !0)), (this._breaksCanvasCtx = this._breaksCanvas.getContext("2d"))) : ((this._breaksCanvas = this.canvas), (this._breaksCanvasCtx = this.ctx));
                    break;
                }
            this._preRenderCanvas = ta(this.width, this.height);
            this._preRenderCtx = this._preRenderCanvas.getContext("2d");
            ("normal" !== this.plotInfo.axisPlacement && "xySwapped" !== this.plotInfo.axisPlacement) || A.setLayout(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement, this.layoutManager.getFreeSpace());
        };
        t.prototype.renderElements = function () {
            if (this.height && this.width) {
                var a = this._plotAreaElements;
                this.title && !this.title.dockInsidePlotArea && this.title.render();
                for (var d = 0; d < this.subtitles.length; d++) this.subtitles[d].dockInsidePlotArea || this.subtitles[d].render();
                this.legend.dockInsidePlotArea || this.legend.render();
                if ("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) A.render(this.axisX, this.axisX2, this.axisY, this.axisY2, this.plotInfo.axisPlacement);
                else if ("none" === this.plotInfo.axisPlacement) this.preparePlotArea();
                else return;
                for (d = 0; d < a.length; d++) a[d].setLayout(), a[d].render();
                var c = [];
                if (this.animatedRender) {
                    var b = ta(this.width, this.height);
                    b.getContext("2d").drawImage(this.canvas, 0, 0, this.width, this.height);
                }
                jb(this);
                var a = this.ctx.miterLimit,
                    e;
                this.ctx.miterLimit = 3;
                r &&
                    this._breaksCanvas &&
                    (this._preRenderCtx.drawImage(this.canvas, 0, 0, this.width, this.height),
                    this._preRenderCtx.drawImage(this._breaksCanvas, 0, 0, this.width, this.height),
                    (this._breaksCanvasCtx.globalCompositeOperation = "source-atop"),
                    this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    this._preRenderCtx.clearRect(0, 0, this.width, this.height));
                for (d = 0; d < this.plotInfo.plotTypes.length; d++)
                    for (var h = this.plotInfo.plotTypes[d], q = 0; q < h.plotUnits.length; q++) {
                        var u = h.plotUnits[q],
                            E = null;
                        u.targetCanvas && ya(u.targetCanvas);
                        u.targetCanvas = null;
                        this.animatedRender && ((u.targetCanvas = ta(this.width, this.height)), (u.targetCanvasCtx = u.targetCanvas.getContext("2d")), (e = u.targetCanvasCtx.miterLimit), (u.targetCanvasCtx.miterLimit = 3));
                        "line" === u.type
                            ? (E = this.renderLine(u))
                            : "stepLine" === u.type
                            ? (E = this.renderStepLine(u))
                            : "spline" === u.type
                            ? (E = this.renderSpline(u))
                            : "column" === u.type
                            ? (E = this.renderColumn(u))
                            : "bar" === u.type
                            ? (E = this.renderBar(u))
                            : "area" === u.type
                            ? (E = this.renderArea(u))
                            : "stepArea" === u.type
                            ? (E = this.renderStepArea(u))
                            : "splineArea" === u.type
                            ? (E = this.renderSplineArea(u))
                            : "stackedColumn" === u.type
                            ? (E = this.renderStackedColumn(u))
                            : "stackedColumn100" === u.type
                            ? (E = this.renderStackedColumn100(u))
                            : "stackedBar" === u.type
                            ? (E = this.renderStackedBar(u))
                            : "stackedBar100" === u.type
                            ? (E = this.renderStackedBar100(u))
                            : "stackedArea" === u.type
                            ? (E = this.renderStackedArea(u))
                            : "stackedArea100" === u.type
                            ? (E = this.renderStackedArea100(u))
                            : "bubble" === u.type
                            ? (E = E = this.renderBubble(u))
                            : "scatter" === u.type
                            ? (E = this.renderScatter(u))
                            : "pie" === u.type
                            ? this.renderPie(u)
                            : "doughnut" === u.type
                            ? this.renderPie(u)
                            : "funnel" === u.type
                            ? (E = this.renderFunnel(u))
                            : "pyramid" === u.type
                            ? (E = this.renderFunnel(u))
                            : "candlestick" === u.type
                            ? (E = this.renderCandlestick(u))
                            : "ohlc" === u.type
                            ? (E = this.renderCandlestick(u))
                            : "rangeColumn" === u.type
                            ? (E = this.renderRangeColumn(u))
                            : "error" === u.type
                            ? (E = this.renderError(u))
                            : "rangeBar" === u.type
                            ? (E = this.renderRangeBar(u))
                            : "rangeArea" === u.type
                            ? (E = this.renderRangeArea(u))
                            : "rangeSplineArea" === u.type
                            ? (E = this.renderRangeSplineArea(u))
                            : "waterfall" === u.type
                            ? (E = this.renderWaterfall(u))
                            : "boxAndWhisker" === u.type && (E = this.renderBoxAndWhisker(u));
                        for (var k = 0; k < u.dataSeriesIndexes.length; k++) this._dataInRenderedOrder.push(this.data[u.dataSeriesIndexes[k]]);
                        this.animatedRender && ((u.targetCanvasCtx.miterLimit = e), E && c.push(E));
                    }
                this.ctx.miterLimit = a;
                this.animatedRender &&
                    this._breaksCanvasCtx &&
                    c.push({ source: this._breaksCanvasCtx, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 });
                this.animatedRender && 0 < this._indexLabels.length && ((e = ta(this.width, this.height).getContext("2d")), za(e), c.push(this.renderIndexLabels(e)));
                var m = this;
                if (0 < c.length)
                    (m.disableToolTip = !0),
                        m._animator.animate(
                            200,
                            m.animationDuration,
                            function (a) {
                                m.ctx.clearRect(0, 0, m.width, m.height);
                                m.ctx.drawImage(b, 0, 0, Math.floor(m.width * ia), Math.floor(m.height * ia), 0, 0, m.width, m.height);
                                for (var e = 0; e < c.length; e++)
                                    (E = c[e]),
                                        1 > a && "undefined" !== typeof E.startTimePercent
                                            ? a >= E.startTimePercent && E.animationCallback(E.easingFunction(a - E.startTimePercent, 0, 1, 1 - E.startTimePercent), E)
                                            : E.animationCallback(E.easingFunction(a, 0, 1, 1), E);
                                m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                            },
                            function () {
                                c = [];
                                for (var a = 0; a < m.plotInfo.plotTypes.length; a++)
                                    for (var e = m.plotInfo.plotTypes[a], g = 0; g < e.plotUnits.length; g++) {
                                        var d = e.plotUnits[g];
                                        d.targetCanvas && ya(d.targetCanvas);
                                        d.targetCanvas = null;
                                    }
                                b = null;
                                m.disableToolTip = !1;
                                m.dispatchEvent("dataAnimationEnd", { chart: m });
                            }
                        );
                else {
                    if (m._breaksCanvas)
                        if (r) m.plotArea.ctx.drawImage(m._breaksCanvas, 0, 0, this.width, this.height);
                        else for (k = 0; k < m._axes.length; k++) m._axes[k].createMask();
                    0 < m._indexLabels.length && m.renderIndexLabels();
                    m.dispatchEvent("dataAnimationIterationEnd", { chart: m });
                    m.dispatchEvent("dataAnimationEnd", { chart: m });
                }
                this.attachPlotAreaEventHandlers();
                this.zoomEnabled || this.panEnabled || !this._zoomButton || "none" === this._zoomButton.style.display || va(this._zoomButton, this._resetButton);
                l(this.toolTip._xValue) || l(this.toolTip._dataSeriesIndex) || this.toolTip.showAtX(this.toolTip._xValue, this.toolTip._dataSeriesIndex);
                this.toolTip._updateToolTip();
                this.renderCount++;
                Ia &&
                    ((m = this),
                    setTimeout(function () {
                        var a = document.getElementById("ghostCanvasCopy");
                        a && (Na(a, m.width, m.height), a.getContext("2d").drawImage(m._eventManager.ghostCanvas, 0, 0));
                    }, 2e3));
                this._breaksCanvas && (delete this._breaksCanvas, delete this._breaksCanvasCtx);
                for (k = 0; k < this._axes.length; k++) this._axes[k].maskCanvas && (delete this._axes[k].maskCanvas, delete this._axes[k].maskCtx);
            }
        };
        t.prototype.render = function (a) {
            a && (this.options = a);
            this._initialize();
            this.setLayout();
            this.renderElements();
            this._preRenderCanvas && ya(this._preRenderCanvas);
        };
        t.prototype.attachPlotAreaEventHandlers = function () {
            this.attachEvent({
                context: this,
                chart: this,
                mousedown: this._plotAreaMouseDown,
                mouseup: this._plotAreaMouseUp,
                mousemove: this._plotAreaMouseMove,
                cursor: this.panEnabled ? "move" : "default",
                capture: !0,
                bounds: this.plotArea,
            });
        };
        t.prototype.categoriseDataSeries = function () {
            for (var a = "", d = 0; d < this.data.length; d++)
                if (((a = this.data[d]), a.dataPoints && 0 !== a.dataPoints.length && a.visible && 0 <= t._supportedChartTypes.indexOf(a.type))) {
                    for (var c = null, b = !1, e = null, h = !1, q = 0; q < this.plotInfo.plotTypes.length; q++)
                        if (this.plotInfo.plotTypes[q].type === a.type) {
                            b = !0;
                            c = this.plotInfo.plotTypes[q];
                            break;
                        }
                    b || ((c = { type: a.type, totalDataSeries: 0, plotUnits: [] }), this.plotInfo.plotTypes.push(c));
                    for (q = 0; q < c.plotUnits.length; q++)
                        if (c.plotUnits[q].axisYType === a.axisYType && c.plotUnits[q].axisXType === a.axisXType && c.plotUnits[q].axisYIndex === a.axisYIndex && c.plotUnits[q].axisXIndex === a.axisXIndex) {
                            h = !0;
                            e = c.plotUnits[q];
                            break;
                        }
                    h ||
                        ((e = {
                            type: a.type,
                            previousDataSeriesCount: 0,
                            index: c.plotUnits.length,
                            plotType: c,
                            axisXType: a.axisXType,
                            axisYType: a.axisYType,
                            axisYIndex: a.axisYIndex,
                            axisXIndex: a.axisXIndex,
                            axisY: "primary" === a.axisYType ? this.axisY[0 <= a.axisYIndex && a.axisYIndex < this.axisY.length ? a.axisYIndex : 0] : this.axisY2[0 <= a.axisYIndex && a.axisYIndex < this.axisY2.length ? a.axisYIndex : 0],
                            axisX: "primary" === a.axisXType ? this.axisX[0 <= a.axisXIndex && a.axisXIndex < this.axisX.length ? a.axisXIndex : 0] : this.axisX2[0 <= a.axisXIndex && a.axisXIndex < this.axisX2.length ? a.axisXIndex : 0],
                            dataSeriesIndexes: [],
                            yTotals: [],
                            yAbsTotals: [],
                        }),
                        c.plotUnits.push(e));
                    c.totalDataSeries++;
                    e.dataSeriesIndexes.push(d);
                    a.plotUnit = e;
                }
            for (d = 0; d < this.plotInfo.plotTypes.length; d++) for (c = this.plotInfo.plotTypes[d], q = a = 0; q < c.plotUnits.length; q++) (c.plotUnits[q].previousDataSeriesCount = a), (a += c.plotUnits[q].dataSeriesIndexes.length);
        };
        t.prototype.assignIdToDataPoints = function () {
            for (var a = 0; a < this.data.length; a++) {
                var d = this.data[a];
                if (d.dataPoints) for (var c = d.dataPoints.length, b = 0; b < c; b++) d.dataPointIds[b] = ++this._eventManager.lastObjectId;
            }
        };
        t.prototype._processData = function () {
            this.assignIdToDataPoints();
            this.categoriseDataSeries();
            for (var a = 0; a < this.plotInfo.plotTypes.length; a++)
                for (var d = this.plotInfo.plotTypes[a], c = 0; c < d.plotUnits.length; c++) {
                    var b = d.plotUnits[c];
                    "line" === b.type ||
                    "stepLine" === b.type ||
                    "spline" === b.type ||
                    "column" === b.type ||
                    "area" === b.type ||
                    "stepArea" === b.type ||
                    "splineArea" === b.type ||
                    "bar" === b.type ||
                    "bubble" === b.type ||
                    "scatter" === b.type
                        ? this._processMultiseriesPlotUnit(b)
                        : "stackedColumn" === b.type || "stackedBar" === b.type || "stackedArea" === b.type
                        ? this._processStackedPlotUnit(b)
                        : "stackedColumn100" === b.type || "stackedBar100" === b.type || "stackedArea100" === b.type
                        ? this._processStacked100PlotUnit(b)
                        : "candlestick" === b.type || "ohlc" === b.type || "rangeColumn" === b.type || "rangeBar" === b.type || "rangeArea" === b.type || "rangeSplineArea" === b.type || "error" === b.type || "boxAndWhisker" === b.type
                        ? this._processMultiYPlotUnit(b)
                        : "waterfall" === b.type && this._processSpecificPlotUnit(b);
                }
            this.calculateAutoBreaks();
        };
        t.prototype._processMultiseriesPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = 0; q < a.dataSeriesIndexes.length; q++) {
                    var u = this.data[a.dataSeriesIndexes[q]],
                        E = 0,
                        k = !1,
                        m = !1,
                        n;
                    if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement)
                        var p = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : a.axisX.options && a.axisX.options.viewportMinimum
                                ? a.axisX.options.viewportMinimum
                                : a.axisX.options && a.axisX.options.minimum
                                ? a.axisX.options.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            g = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : a.axisX.options && a.axisX.options.viewportMaximum
                                ? a.axisX.options.viewportMaximum
                                : a.axisX.options && a.axisX.options.maximum
                                ? a.axisX.options.maximum
                                : Infinity;
                    if ((u.dataPoints[E].x && u.dataPoints[E].x.getTime) || "dateTime" === u.xValueType) h = !0;
                    for (E = 0; E < u.dataPoints.length; E++) {
                        "undefined" === typeof u.dataPoints[E].x && (u.dataPoints[E].x = E + (a.axisX.logarithmic ? 1 : 0));
                        u.dataPoints[E].x.getTime ? ((h = !0), (b = u.dataPoints[E].x.getTime())) : (b = u.dataPoints[E].x);
                        e = u.dataPoints[E].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        e < d.min && "number" === typeof e && (d.min = e);
                        e > d.max && "number" === typeof e && (d.max = e);
                        if (0 < E) {
                            if (a.axisX.logarithmic) {
                                var l = b / u.dataPoints[E - 1].x;
                                1 > l && (l = 1 / l);
                                c.minDiff > l && 1 !== l && (c.minDiff = l);
                            } else (l = b - u.dataPoints[E - 1].x), 0 > l && (l *= -1), c.minDiff > l && 0 !== l && (c.minDiff = l);
                            null !== e &&
                                null !== u.dataPoints[E - 1].y &&
                                (a.axisY.logarithmic
                                    ? ((l = e / u.dataPoints[E - 1].y), 1 > l && (l = 1 / l), d.minDiff > l && 1 !== l && (d.minDiff = l))
                                    : ((l = e - u.dataPoints[E - 1].y), 0 > l && (l *= -1), d.minDiff > l && 0 !== l && (d.minDiff = l)));
                        }
                        if (b < p && !k) null !== e && (n = b);
                        else {
                            if (!k && ((k = !0), 0 < E)) {
                                E -= 2;
                                continue;
                            }
                            if (b > g && !m) m = !0;
                            else if (b > g && m) continue;
                            u.dataPoints[E].label && (a.axisX.labels[b] = u.dataPoints[E].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e ? c.viewPortMin === b && n < b && (c.viewPortMin = n) : (e < d.viewPortMin && "number" === typeof e && (d.viewPortMin = e), e > d.viewPortMax && "number" === typeof e && (d.viewPortMax = e));
                        }
                    }
                    u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
                }
        };
        t.prototype._processStackedPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = [], u = [], E = Infinity, k = -Infinity, m = {}, n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = this.data[a.dataSeriesIndexes[n]],
                        g = 0,
                        D = !1,
                        f = !1,
                        y;
                    if ("normal" === p.axisPlacement || "xySwapped" === p.axisPlacement)
                        var s = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : a.axisX.options && a.axisX.options.viewportMinimum
                                ? a.axisX.options.viewportMinimum
                                : a.axisX.options && a.axisX.options.minimum
                                ? a.axisX.options.minimum
                                : -Infinity,
                            r = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : a.axisX.options && a.axisX.options.viewportMaximum
                                ? a.axisX.options.viewportMaximum
                                : a.axisX.options && a.axisX.options.maximum
                                ? a.axisX.options.maximum
                                : Infinity;
                    if ((p.dataPoints[g].x && p.dataPoints[g].x.getTime) || "dateTime" === p.xValueType) h = !0;
                    for (g = 0; g < p.dataPoints.length; g++) {
                        "undefined" === typeof p.dataPoints[g].x && (p.dataPoints[g].x = g + (a.axisX.logarithmic ? 1 : 0));
                        p.dataPoints[g].x.getTime ? ((h = !0), (b = p.dataPoints[g].x.getTime())) : (b = p.dataPoints[g].x);
                        e = l(p.dataPoints[g].y) ? 0 : p.dataPoints[g].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < g) {
                            if (a.axisX.logarithmic) {
                                var v = b / p.dataPoints[g - 1].x;
                                1 > v && (v = 1 / v);
                                c.minDiff > v && 1 !== v && (c.minDiff = v);
                            } else (v = b - p.dataPoints[g - 1].x), 0 > v && (v *= -1), c.minDiff > v && 0 !== v && (c.minDiff = v);
                            null !== e &&
                                null !== p.dataPoints[g - 1].y &&
                                (a.axisY.logarithmic
                                    ? 0 < e && ((v = e / p.dataPoints[g - 1].y), 1 > v && (v = 1 / v), d.minDiff > v && 1 !== v && (d.minDiff = v))
                                    : ((v = e - p.dataPoints[g - 1].y), 0 > v && (v *= -1), d.minDiff > v && 0 !== v && (d.minDiff = v)));
                        }
                        if (b < s && !D) null !== p.dataPoints[g].y && (y = b);
                        else {
                            if (!D && ((D = !0), 0 < g)) {
                                g -= 2;
                                continue;
                            }
                            if (b > r && !f) f = !0;
                            else if (b > r && f) continue;
                            p.dataPoints[g].label && (a.axisX.labels[b] = p.dataPoints[g].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === p.dataPoints[g].y
                                ? c.viewPortMin === b && y < b && (c.viewPortMin = y)
                                : ((m[b] = (m[b] || 0) + p.dataPoints[g].y),
                                  (p.dataPointEOs[g].cumulativeY = m[b]),
                                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e),
                                  (a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e)),
                                  0 <= e ? (q[b] ? (q[b] += e) : ((q[b] = e), (E = Math.min(e, E)))) : u[b] ? (u[b] += e) : ((u[b] = e), (k = Math.max(e, k))));
                        }
                    }
                    a.axisY.scaleBreaks &&
                        a.axisY.scaleBreaks.autoCalculate &&
                        1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks &&
                        (d.dataPointYPositiveSums
                            ? (d.dataPointYPositiveSums.push.apply(d.dataPointYPositiveSums, q), d.dataPointYNegativeSums.push.apply(d.dataPointYPositiveSums, u))
                            : ((d.dataPointYPositiveSums = q), (d.dataPointYNegativeSums = u)));
                    p.axisX.valueType = p.xValueType = h ? "dateTime" : "number";
                }
                for (g in q)
                    q.hasOwnProperty(g) &&
                        !isNaN(g) &&
                        ((a = q[g]),
                        a < d.min && (d.min = Math.min(a, E)),
                        a > d.max && (d.max = a),
                        g < c.viewPortMin || g > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = Math.min(a, E)), a > d.viewPortMax && (d.viewPortMax = a)));
                for (g in u)
                    u.hasOwnProperty(g) &&
                        !isNaN(g) &&
                        ((a = u[g]),
                        a < d.min && (d.min = a),
                        a > d.max && (d.max = Math.max(a, k)),
                        g < c.viewPortMin || g > c.viewPortMax || (a < d.viewPortMin && (d.viewPortMin = a), a > d.viewPortMax && (d.viewPortMax = Math.max(a, k))));
            }
        };
        t.prototype._processStacked100PlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = !1, u = !1, E = {}, k = [], m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = this.data[a.dataSeriesIndexes[m]],
                        p = 0,
                        g = !1,
                        f = !1,
                        x;
                    if ("normal" === n.axisPlacement || "xySwapped" === n.axisPlacement)
                        var y = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : a.axisX.options && a.axisX.options.viewportMinimum
                                ? a.axisX.options.viewportMinimum
                                : a.axisX.options && a.axisX.options.minimum
                                ? a.axisX.options.minimum
                                : -Infinity,
                            s = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : a.axisX.options && a.axisX.options.viewportMaximum
                                ? a.axisX.options.viewportMaximum
                                : a.axisX.options && a.axisX.options.maximum
                                ? a.axisX.options.maximum
                                : Infinity;
                    if ((n.dataPoints[p].x && n.dataPoints[p].x.getTime) || "dateTime" === n.xValueType) h = !0;
                    for (p = 0; p < n.dataPoints.length; p++) {
                        "undefined" === typeof n.dataPoints[p].x && (n.dataPoints[p].x = p + (a.axisX.logarithmic ? 1 : 0));
                        n.dataPoints[p].x.getTime ? ((h = !0), (b = n.dataPoints[p].x.getTime())) : (b = n.dataPoints[p].x);
                        e = l(n.dataPoints[p].y) ? null : n.dataPoints[p].y;
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        if (0 < p) {
                            if (a.axisX.logarithmic) {
                                var r = b / n.dataPoints[p - 1].x;
                                1 > r && (r = 1 / r);
                                c.minDiff > r && 1 !== r && (c.minDiff = r);
                            } else (r = b - n.dataPoints[p - 1].x), 0 > r && (r *= -1), c.minDiff > r && 0 !== r && (c.minDiff = r);
                            l(e) ||
                                null === n.dataPoints[p - 1].y ||
                                (a.axisY.logarithmic
                                    ? 0 < e && ((r = e / n.dataPoints[p - 1].y), 1 > r && (r = 1 / r), d.minDiff > r && 1 !== r && (d.minDiff = r))
                                    : ((r = e - n.dataPoints[p - 1].y), 0 > r && (r *= -1), d.minDiff > r && 0 !== r && (d.minDiff = r)));
                        }
                        if (b < y && !g) null !== e && (x = b);
                        else {
                            if (!g && ((g = !0), 0 < p)) {
                                p -= 2;
                                continue;
                            }
                            if (b > s && !f) f = !0;
                            else if (b > s && f) continue;
                            n.dataPoints[p].label && (a.axisX.labels[b] = n.dataPoints[p].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            null === e
                                ? c.viewPortMin === b && x < b && (c.viewPortMin = x)
                                : ((E[b] = (E[b] || 0) + n.dataPoints[p].y),
                                  (n.dataPointEOs[p].cumulativeY = E[b]),
                                  (a.yTotals[b] = (a.yTotals[b] ? a.yTotals[b] : 0) + e),
                                  (a.yAbsTotals[b] = (a.yAbsTotals[b] ? a.yAbsTotals[b] : 0) + Math.abs(e)),
                                  0 <= e ? (q = !0) : 0 > e && (u = !0),
                                  (k[b] = k[b] ? k[b] + Math.abs(e) : Math.abs(e)));
                        }
                    }
                    n.axisX.valueType = n.xValueType = h ? "dateTime" : "number";
                }
                a.axisY.logarithmic
                    ? ((d.max = l(d.viewPortMax) ? 99 * Math.pow(a.axisY.logarithmBase, -0.05) : Math.max(d.viewPortMax, 99 * Math.pow(a.axisY.logarithmBase, -0.05))), (d.min = l(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)))
                    : q && !u
                    ? ((d.max = l(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99)), (d.min = l(d.viewPortMin) ? 1 : Math.min(d.viewPortMin, 1)))
                    : q && u
                    ? ((d.max = l(d.viewPortMax) ? 99 : Math.max(d.viewPortMax, 99)), (d.min = l(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)))
                    : !q && u && ((d.max = l(d.viewPortMax) ? -1 : Math.max(d.viewPortMax, -1)), (d.min = l(d.viewPortMin) ? -99 : Math.min(d.viewPortMin, -99)));
                d.viewPortMin = d.min;
                d.viewPortMax = d.max;
                a.dataPointYSums = k;
            }
        };
        t.prototype._processMultiYPlotUnit = function (a) {
            if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h, q, u = !1, l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var k = this.data[a.dataSeriesIndexes[l]],
                        m = 0,
                        n = !1,
                        p = !1,
                        g,
                        f,
                        r;
                    if ("normal" === k.axisPlacement || "xySwapped" === k.axisPlacement)
                        var y = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : a.axisX.options && a.axisX.options.viewportMinimum
                                ? a.axisX.options.viewportMinimum
                                : a.axisX.options && a.axisX.options.minimum
                                ? a.axisX.options.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            s = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : a.axisX.options && a.axisX.options.viewportMaximum
                                ? a.axisX.options.viewportMaximum
                                : a.axisX.options && a.axisX.options.maximum
                                ? a.axisX.options.maximum
                                : Infinity;
                    if ((k.dataPoints[m].x && k.dataPoints[m].x.getTime) || "dateTime" === k.xValueType) u = !0;
                    for (m = 0; m < k.dataPoints.length; m++) {
                        "undefined" === typeof k.dataPoints[m].x && (k.dataPoints[m].x = m + (a.axisX.logarithmic ? 1 : 0));
                        k.dataPoints[m].x.getTime ? ((u = !0), (b = k.dataPoints[m].x.getTime())) : (b = k.dataPoints[m].x);
                        if ((e = k.dataPoints[m].y) && e.length) {
                            h = Math.min.apply(null, e);
                            q = Math.max.apply(null, e);
                            f = !0;
                            for (var C = 0; C < e.length; C++) null === e.k && (f = !1);
                            f && (n || (r = g), (g = b));
                        }
                        b < c.min && (c.min = b);
                        b > c.max && (c.max = b);
                        h < d.min && (d.min = h);
                        q > d.max && (d.max = q);
                        0 < m &&
                            (a.axisX.logarithmic
                                ? ((f = b / k.dataPoints[m - 1].x), 1 > f && (f = 1 / f), c.minDiff > f && 1 !== f && (c.minDiff = f))
                                : ((f = b - k.dataPoints[m - 1].x), 0 > f && (f *= -1), c.minDiff > f && 0 !== f && (c.minDiff = f)),
                            e &&
                                null !== e[0] &&
                                k.dataPoints[m - 1].y &&
                                null !== k.dataPoints[m - 1].y[0] &&
                                (a.axisY.logarithmic
                                    ? ((f = e[0] / k.dataPoints[m - 1].y[0]), 1 > f && (f = 1 / f), d.minDiff > f && 1 !== f && (d.minDiff = f))
                                    : ((f = e[0] - k.dataPoints[m - 1].y[0]), 0 > f && (f *= -1), d.minDiff > f && 0 !== f && (d.minDiff = f))));
                        if (!(b < y) || n) {
                            if (!n && ((n = !0), 0 < m)) {
                                m -= 2;
                                g = r;
                                continue;
                            }
                            if (b > s && !p) p = !0;
                            else if (b > s && p) continue;
                            k.dataPoints[m].label && (a.axisX.labels[b] = k.dataPoints[m].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            if (c.viewPortMin === b && e)
                                for (C = 0; C < e.length; C++)
                                    if (null === e[C] && g < b) {
                                        c.viewPortMin = g;
                                        break;
                                    }
                            null === e ? c.viewPortMin === b && g < b && (c.viewPortMin = g) : (h < d.viewPortMin && (d.viewPortMin = h), q > d.viewPortMax && (d.viewPortMax = q));
                        }
                    }
                    k.axisX.valueType = k.xValueType = u ? "dateTime" : "number";
                }
        };
        t.prototype._processSpecificPlotUnit = function (a) {
            if ("waterfall" === a.type && a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length))
                for (var d = a.axisY.dataInfo, c = a.axisX.dataInfo, b, e, h = !1, q = 0; q < a.dataSeriesIndexes.length; q++) {
                    var u = this.data[a.dataSeriesIndexes[q]],
                        l = 0,
                        k = !1,
                        m = !1,
                        n = (b = 0);
                    if ("normal" === u.axisPlacement || "xySwapped" === u.axisPlacement)
                        var p = a.axisX.sessionVariables.newViewportMinimum
                                ? a.axisX.sessionVariables.newViewportMinimum
                                : a.axisX.options && a.axisX.options.viewportMinimum
                                ? a.axisX.options.viewportMinimum
                                : a.axisX.options && a.axisX.options.minimum
                                ? a.axisX.options.minimum
                                : a.axisX.logarithmic
                                ? 0
                                : -Infinity,
                            g = a.axisX.sessionVariables.newViewportMaximum
                                ? a.axisX.sessionVariables.newViewportMaximum
                                : a.axisX.options && a.axisX.options.viewportMaximum
                                ? a.axisX.options.viewportMaximum
                                : a.axisX.options && a.axisX.options.maximum
                                ? a.axisX.options.maximum
                                : Infinity;
                    if ((u.dataPoints[l].x && u.dataPoints[l].x.getTime) || "dateTime" === u.xValueType) h = !0;
                    for (l = 0; l < u.dataPoints.length; l++)
                        "undefined" !== typeof u.dataPoints[l].isCumulativeSum && !0 === u.dataPoints[l].isCumulativeSum
                            ? ((u.dataPointEOs[l].cumulativeSumYStartValue = 0), (u.dataPointEOs[l].cumulativeSum = 0 === l ? 0 : u.dataPointEOs[l - 1].cumulativeSum), (u.dataPoints[l].y = 0 === l ? 0 : u.dataPointEOs[l - 1].cumulativeSum))
                            : "undefined" !== typeof u.dataPoints[l].isIntermediateSum && !0 === u.dataPoints[l].isIntermediateSum
                            ? ((u.dataPointEOs[l].cumulativeSumYStartValue = n),
                              (u.dataPointEOs[l].cumulativeSum = 0 === l ? 0 : u.dataPointEOs[l - 1].cumulativeSum),
                              (u.dataPoints[l].y = 0 === l ? 0 : b),
                              (n = 0 === l ? 0 : u.dataPointEOs[l - 1].cumulativeSum),
                              (b = 0))
                            : ((e = "number" !== typeof u.dataPoints[l].y ? 0 : u.dataPoints[l].y),
                              (u.dataPointEOs[l].cumulativeSumYStartValue = 0 === l ? 0 : u.dataPointEOs[l - 1].cumulativeSum),
                              (u.dataPointEOs[l].cumulativeSum = 0 === l ? e : u.dataPointEOs[l - 1].cumulativeSum + e),
                              (b += e));
                    for (l = 0; l < u.dataPoints.length; l++)
                        if (
                            ("undefined" === typeof u.dataPoints[l].x && (u.dataPoints[l].x = l + (a.axisX.logarithmic ? 1 : 0)),
                            u.dataPoints[l].x.getTime ? ((h = !0), (b = u.dataPoints[l].x.getTime())) : (b = u.dataPoints[l].x),
                            (e = u.dataPoints[l].y),
                            b < c.min && (c.min = b),
                            b > c.max && (c.max = b),
                            u.dataPointEOs[l].cumulativeSum < d.min && (d.min = u.dataPointEOs[l].cumulativeSum),
                            u.dataPointEOs[l].cumulativeSum > d.max && (d.max = u.dataPointEOs[l].cumulativeSum),
                            0 < l &&
                                (a.axisX.logarithmic
                                    ? ((n = b / u.dataPoints[l - 1].x), 1 > n && (n = 1 / n), c.minDiff > n && 1 !== n && (c.minDiff = n))
                                    : ((n = b - u.dataPoints[l - 1].x), 0 > n && (n *= -1), c.minDiff > n && 0 !== n && (c.minDiff = n)),
                                null !== e &&
                                    null !== u.dataPoints[l - 1].y &&
                                    (a.axisY.logarithmic
                                        ? ((e = u.dataPointEOs[l].cumulativeSum / u.dataPointEOs[l - 1].cumulativeSum), 1 > e && (e = 1 / e), d.minDiff > e && 1 !== e && (d.minDiff = e))
                                        : ((e = u.dataPointEOs[l].cumulativeSum - u.dataPointEOs[l - 1].cumulativeSum), 0 > e && (e *= -1), d.minDiff > e && 0 !== e && (d.minDiff = e)))),
                            !(b < p) || k)
                        ) {
                            if (!k && ((k = !0), 0 < l)) {
                                l -= 2;
                                continue;
                            }
                            if (b > g && !m) m = !0;
                            else if (b > g && m) continue;
                            u.dataPoints[l].label && (a.axisX.labels[b] = u.dataPoints[l].label);
                            b < c.viewPortMin && (c.viewPortMin = b);
                            b > c.viewPortMax && (c.viewPortMax = b);
                            0 < l &&
                                (u.dataPointEOs[l - 1].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[l - 1].cumulativeSum),
                                u.dataPointEOs[l - 1].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[l - 1].cumulativeSum));
                            u.dataPointEOs[l].cumulativeSum < d.viewPortMin && (d.viewPortMin = u.dataPointEOs[l].cumulativeSum);
                            u.dataPointEOs[l].cumulativeSum > d.viewPortMax && (d.viewPortMax = u.dataPointEOs[l].cumulativeSum);
                        }
                    u.axisX.valueType = u.xValueType = h ? "dateTime" : "number";
                }
        };
        t.prototype.calculateAutoBreaks = function () {
            function a(a, b, c, e) {
                if (e) return (c = Math.pow(Math.min((c * a) / b, b / a), 0.2)), 1 >= c && (c = Math.pow(1 > a ? 1 / a : Math.min(b / a, a), 0.25)), { startValue: a * c, endValue: b / c };
                c = 0.2 * Math.min(c - b + a, b - a);
                0 >= c && (c = 0.25 * Math.min(b - a, Math.abs(a)));
                return { startValue: a + c, endValue: b - c };
            }
            function d(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length)) {
                    var b = a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks,
                        c = a.axisY.scaleBreaks && a.axisY.scaleBreaks.autoCalculate && 1 <= a.axisY.scaleBreaks.maxNumberOfAutoBreaks;
                    if (b || c)
                        for (var g = a.axisY.dataInfo, d = a.axisX.dataInfo, h, q = d.min, k = d.max, m = g.min, n = g.max, d = d._dataRanges, g = g._dataRanges, p, u = 0, E = 0; E < a.dataSeriesIndexes.length; E++) {
                            var f = e.data[a.dataSeriesIndexes[E]];
                            if (!(4 > f.dataPoints.length))
                                for (u = 0; u < f.dataPoints.length; u++)
                                    if (
                                        (b &&
                                            ((p = ((k + 1 - q) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100),
                                            (h = f.dataPoints[u].x.getTime ? f.dataPoints[u].x.getTime() : f.dataPoints[u].x),
                                            (p = Math.floor((h - q) / p)),
                                            h < d[p].min && (d[p].min = h),
                                            h > d[p].max && (d[p].max = h)),
                                        c)
                                    ) {
                                        var r = ((n + 1 - m) * Math.max(parseFloat(a.axisY.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100;
                                        if ((h = "waterfall" === a.type ? f.dataPointEOs[u].cumulativeSum : f.dataPoints[u].y) && h.length)
                                            for (var ea = 0; ea < h.length; ea++) (p = Math.floor((h[ea] - m) / r)), h[ea] < g[p].min && (g[p].min = h[ea]), h[ea] > g[p].max && (g[p].max = h[ea]);
                                        else l(h) || ((p = Math.floor((h - m) / r)), h < g[p].min && (g[p].min = h), h > g[p].max && (g[p].max = h));
                                    }
                        }
                }
            }
            function c(a) {
                if (a.dataSeriesIndexes && !(1 > a.dataSeriesIndexes.length) && a.axisX.scaleBreaks && a.axisX.scaleBreaks.autoCalculate && 1 <= a.axisX.scaleBreaks.maxNumberOfAutoBreaks)
                    for (var b = a.axisX.dataInfo, c = b.min, g = b.max, d = b._dataRanges, h, q = 0, k = 0; k < a.dataSeriesIndexes.length; k++) {
                        var m = e.data[a.dataSeriesIndexes[k]];
                        if (!(4 > m.dataPoints.length))
                            for (q = 0; q < m.dataPoints.length; q++)
                                (h = ((g + 1 - c) * Math.max(parseFloat(a.axisX.scaleBreaks.collapsibleThreshold) || 10, 10)) / 100),
                                    (b = m.dataPoints[q].x.getTime ? m.dataPoints[q].x.getTime() : m.dataPoints[q].x),
                                    (h = Math.floor((b - c) / h)),
                                    b < d[h].min && (d[h].min = b),
                                    b > d[h].max && (d[h].max = b);
                    }
            }
            for (var b, e = this, h = !1, q = 0; q < this._axes.length; q++)
                if (this._axes[q].scaleBreaks && this._axes[q].scaleBreaks.autoCalculate && 1 <= this._axes[q].scaleBreaks.maxNumberOfAutoBreaks) {
                    h = !0;
                    this._axes[q].dataInfo._dataRanges = [];
                    for (var u = 0; u < 100 / Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10); u++) this._axes[q].dataInfo._dataRanges.push({ min: Infinity, max: -Infinity });
                }
            if (h) {
                for (q = 0; q < this.plotInfo.plotTypes.length; q++)
                    for (h = this.plotInfo.plotTypes[q], u = 0; u < h.plotUnits.length; u++)
                        (b = h.plotUnits[u]),
                            "line" === b.type ||
                            "stepLine" === b.type ||
                            "spline" === b.type ||
                            "column" === b.type ||
                            "area" === b.type ||
                            "stepArea" === b.type ||
                            "splineArea" === b.type ||
                            "bar" === b.type ||
                            "bubble" === b.type ||
                            "scatter" === b.type ||
                            "candlestick" === b.type ||
                            "ohlc" === b.type ||
                            "rangeColumn" === b.type ||
                            "rangeBar" === b.type ||
                            "rangeArea" === b.type ||
                            "rangeSplineArea" === b.type ||
                            "waterfall" === b.type ||
                            "error" === b.type ||
                            "boxAndWhisker" === b.type
                                ? d(b)
                                : 0 <= b.type.indexOf("stacked") && c(b);
                for (q = 0; q < this._axes.length; q++)
                    if (this._axes[q].dataInfo._dataRanges) {
                        var E = this._axes[q].dataInfo.min;
                        b = ((this._axes[q].dataInfo.max + 1 - E) * Math.max(parseFloat(this._axes[q].scaleBreaks.collapsibleThreshold) || 10, 10)) / 100;
                        var k = this._axes[q].dataInfo._dataRanges,
                            m,
                            n,
                            h = [];
                        if (this._axes[q].dataInfo.dataPointYPositiveSums) {
                            var p = this._axes[q].dataInfo.dataPointYPositiveSums;
                            m = k;
                            for (u in p)
                                if (p.hasOwnProperty(u) && !isNaN(u) && ((n = p[u]), !l(n))) {
                                    var g = Math.floor((n - E) / b);
                                    n < m[g].min && (m[g].min = n);
                                    n > m[g].max && (m[g].max = n);
                                }
                            delete this._axes[q].dataInfo.dataPointYPositiveSums;
                        }
                        if (this._axes[q].dataInfo.dataPointYNegativeSums) {
                            p = this._axes[q].dataInfo.dataPointYNegativeSums;
                            m = k;
                            for (u in p) p.hasOwnProperty(u) && !isNaN(u) && ((n = -1 * p[u]), l(n) || ((g = Math.floor((n - E) / b)), n < m[g].min && (m[g].min = n), n > m[g].max && (m[g].max = n)));
                            delete this._axes[q].dataInfo.dataPointYNegativeSums;
                        }
                        for (u = 0; u < k.length - 1; u++)
                            if (((m = k[u].max), isFinite(m)))
                                for (; u < k.length - 1; )
                                    if (((E = k[u + 1].min), isFinite(E))) {
                                        n = E - m;
                                        n > b && h.push({ diff: n, start: m, end: E });
                                        break;
                                    } else u++;
                        if (this._axes[q].scaleBreaks.customBreaks)
                            for (u = 0; u < this._axes[q].scaleBreaks.customBreaks.length; u++)
                                for (b = 0; b < h.length; b++)
                                    if (
                                        (this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue) ||
                                        (this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].start && h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue) ||
                                        (h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].startValue && this._axes[q].scaleBreaks.customBreaks[u].startValue <= h[b].end) ||
                                        (h[b].start <= this._axes[q].scaleBreaks.customBreaks[u].endValue && this._axes[q].scaleBreaks.customBreaks[u].endValue <= h[b].end)
                                    )
                                        h.splice(b, 1), b--;
                        h.sort(function (a, b) {
                            return b.diff - a.diff;
                        });
                        for (u = 0; u < Math.min(h.length, this._axes[q].scaleBreaks.maxNumberOfAutoBreaks); u++)
                            (b = a(h[u].start, h[u].end, this._axes[q].logarithmic ? this._axes[q].dataInfo.max / this._axes[q].dataInfo.min : this._axes[q].dataInfo.max - this._axes[q].dataInfo.min, this._axes[q].logarithmic)),
                                this._axes[q].scaleBreaks.autoBreaks.push(new fa(this, "autoBreaks", b, u, ++this._eventManager.lastObjectId, this._axes[q].scaleBreaks)),
                                this._axes[q].scaleBreaks._appliedBreaks.push(this._axes[q].scaleBreaks.autoBreaks[this._axes[q].scaleBreaks.autoBreaks.length - 1]);
                        this._axes[q].scaleBreaks._appliedBreaks.sort(function (a, b) {
                            return a.startValue - b.startValue;
                        });
                    }
            }
        };
        t.prototype.renderCrosshairs = function (a, d) {
            for (var c = 0; c < this.axisX.length; c++)
                this.axisX[c] != a &&
                    this.axisX[c].crosshair &&
                    this.axisX[c].crosshair.enabled &&
                    !this.axisX[c].crosshair._hidden &&
                    (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2
                        ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
                            ? this.axisX[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseY))
                            : this.axisX[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX[c].convertPixelToValue(this.sessionVariables.mouseX))
                        : d || this.axisX[c].showCrosshair(this.axisX[c].crosshair._updatedValue));
            for (c = 0; c < this.axisX2.length; c++)
                this.axisX2[c] != a &&
                    this.axisX2[c].crosshair &&
                    this.axisX2[c].crosshair.enabled &&
                    !this.axisX2[c].crosshair._hidden &&
                    (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2
                        ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
                            ? this.axisX2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseY))
                            : this.axisX2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisX2[c].convertPixelToValue(this.sessionVariables.mouseX))
                        : d || this.axisX2[c].showCrosshair(this.axisX2[c].crosshair._updatedValue));
            for (c = 0; c < this.axisY.length; c++)
                this.axisY[c] != a &&
                    this.axisY[c].crosshair &&
                    this.axisY[c].crosshair.enabled &&
                    !this.axisY[c].crosshair._hidden &&
                    (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2
                        ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
                            ? this.axisY[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseX))
                            : this.axisY[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY[c].convertPixelToValue(this.sessionVariables.mouseY))
                        : d || this.axisY[c].showCrosshair(this.axisY[c].crosshair._updatedValue));
            for (c = 0; c < this.axisY2.length; c++)
                this.axisY2[c] != a &&
                    this.axisY2[c].crosshair &&
                    this.axisY2[c].crosshair.enabled &&
                    !this.axisY2[c].crosshair._hidden &&
                    (d && this.sessionVariables.mouseX > this.plotArea.x1 && this.sessionVariables.mouseX < this.plotArea.x2 && this.sessionVariables.mouseY > this.plotArea.y1 && this.sessionVariables.mouseY < this.plotArea.y2
                        ? this.plotInfo && "xySwapped" === this.plotInfo.axisPlacement
                            ? this.axisY2[c].crosshair.render(this.sessionVariables.mouseX, null, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseX))
                            : this.axisY2[c].crosshair.render(null, this.sessionVariables.mouseY, this.axisY2[c].convertPixelToValue(this.sessionVariables.mouseY))
                        : d || this.axisY2[c].showCrosshair(this.axisY2[c].crosshair._updatedValue));
        };
        t.prototype.getDataPointAtXY = function (a, d, c) {
            c = c || !1;
            for (var b = [], e = this._dataInRenderedOrder.length - 1; 0 <= e; e--) {
                var h = null;
                (h = this._dataInRenderedOrder[e].getDataPointAtXY(a, d, c)) && b.push(h);
            }
            a = null;
            d = !1;
            for (c = 0; c < b.length; c++)
                if ("line" === b[c].dataSeries.type || "stepLine" === b[c].dataSeries.type || "area" === b[c].dataSeries.type || "stepArea" === b[c].dataSeries.type)
                    if (((e = ma("markerSize", b[c].dataPoint, b[c].dataSeries) || 8), b[c].distance <= e / 2)) {
                        d = !0;
                        break;
                    }
            for (c = 0; c < b.length; c++)
                (d && "line" !== b[c].dataSeries.type && "stepLine" !== b[c].dataSeries.type && "area" !== b[c].dataSeries.type && "stepArea" !== b[c].dataSeries.type) || (a ? b[c].distance <= a.distance && (a = b[c]) : (a = b[c]));
            return a;
        };
        t.prototype.getObjectAtXY = function (a, d, c) {
            var b = null;
            if ((c = this.getDataPointAtXY(a, d, c || !1))) b = c.dataSeries.dataPointIds[c.dataPointIndex];
            else if (r) b = bb(a, d, this._eventManager.ghostCtx);
            else
                for (c = 0; c < this.legend.items.length; c++) {
                    var e = this.legend.items[c];
                    a >= e.x1 && a <= e.x2 && d >= e.y1 && d <= e.y2 && (b = e.id);
                }
            return b;
        };
        t.prototype.getAutoFontSize = nb;
        t.prototype.resetOverlayedCanvas = function () {
            this.overlaidCanvasCtx.clearRect(0, 0, this.width, this.height);
        };
        t.prototype.clearCanvas = mb;
        t.prototype.attachEvent = function (a) {
            this._events.push(a);
        };
        t.prototype._touchEventHandler = function (a) {
            if (a.changedTouches && this.interactivityEnabled) {
                var d = [],
                    c = a.changedTouches,
                    b = c ? c[0] : a,
                    e = null;
                switch (a.type) {
                    case "touchstart":
                    case "MSPointerDown":
                        d = ["mousemove", "mousedown"];
                        this._lastTouchData = Qa(b);
                        this._lastTouchData.time = new Date();
                        break;
                    case "touchmove":
                    case "MSPointerMove":
                        d = ["mousemove"];
                        break;
                    case "touchend":
                    case "MSPointerUp":
                        var h = this._lastTouchData && this._lastTouchData.time ? new Date() - this._lastTouchData.time : 0,
                            d = "touchstart" === this._lastTouchEventType || "MSPointerDown" === this._lastTouchEventType || 300 > h ? ["mouseup", "click"] : ["mouseup"];
                        break;
                    default:
                        return;
                }
                if (!(c && 1 < c.length)) {
                    e = Qa(b);
                    e.time = new Date();
                    try {
                        var q = e.y - this._lastTouchData.y,
                            h = e.time - this._lastTouchData.time;
                        if ((1 < Math.abs(q) && this._lastTouchData.scroll) || (5 < Math.abs(q) && 250 > h)) this._lastTouchData.scroll = !0;
                    } catch (u) {}
                    this._lastTouchEventType = a.type;
                    if (this._lastTouchData.scroll && this.zoomEnabled) this.isDrag && this.resetOverlayedCanvas(), (this.isDrag = !1);
                    else
                        for (c = 0; c < d.length; c++)
                            if (
                                ((e = d[c]),
                                (q = document.createEvent("MouseEvent")),
                                q.initMouseEvent(e, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null),
                                b.target.dispatchEvent(q),
                                (!l(this._lastTouchData.scroll) && !this._lastTouchData.scroll) || (!this._lastTouchData.scroll && 250 < h) || "click" === e)
                            )
                                a.preventManipulation && a.preventManipulation(), a.preventDefault && a.cancelable && a.preventDefault();
                }
            }
        };
        t.prototype._dispatchRangeEvent = function (a, d) {
            var c = { chart: this };
            c.type = a;
            c.trigger = d;
            var b = [];
            this.axisX && 0 < this.axisX.length && b.push("axisX");
            this.axisX2 && 0 < this.axisX2.length && b.push("axisX2");
            this.axisY && 0 < this.axisY.length && b.push("axisY");
            this.axisY2 && 0 < this.axisY2.length && b.push("axisY2");
            for (var e = 0; e < b.length; e++)
                if ((l(c[b[e]]) && (c[b[e]] = []), "axisY" === b[e]))
                    for (var h = 0; h < this.axisY.length; h++) c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
                else if ("axisY2" === b[e]) for (h = 0; h < this.axisY2.length; h++) c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
                else if ("axisX" === b[e]) for (h = 0; h < this.axisX.length; h++) c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
                else if ("axisX2" === b[e]) for (h = 0; h < this.axisX2.length; h++) c[b[e]].push({ viewportMinimum: this[b[e]][h].sessionVariables.newViewportMinimum, viewportMaximum: this[b[e]][h].sessionVariables.newViewportMaximum });
            this.dispatchEvent(a, c, this);
        };
        t.prototype._mouseEventHandler = function (a) {
            function d() {
                t.capturedEventParam &&
                    ((e = t.capturedEventParam),
                    (q = e.bounds),
                    "mouseup" === b &&
                        ((t.capturedEventParam = null), e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", e.chart._mouseEventHandler, !1)),
                    e.hasOwnProperty(b) &&
                        ("mouseup" !== b || e.chart.overlaidCanvas.releaseCapture ? (a.target !== e.chart.overlaidCanvas && r) || e[b].call(e.context, c.x, c.y) : a.target !== e.chart.overlaidCanvas && (e.chart.isDrag = !1)));
            }
            "undefined" === typeof a.target && a.srcElement && (a.target = a.srcElement);
            var c = Qa(a),
                b = a.type,
                e,
                h;
            a.which ? (h = 3 == a.which) : a.button && (h = 2 == a.button);
            if (this._ignoreNextEvent) d(), (this._ignoreNextEvent = !1);
            else if ((d(), this.interactivityEnabled)) {
                a.preventManipulation && a.preventManipulation();
                a.preventDefault && a.preventDefault();
                var q;
                Ia && window.console && (window.console.log(b + " --\x3e x: " + c.x + "; y:" + c.y), h && window.console.log(a.which), "mouseup" === b && window.console.log("mouseup"));
                if (!h) {
                    if (!t.capturedEventParam && this._events) {
                        for (h = 0; h < this._events.length; h++)
                            if (this._events[h].hasOwnProperty(b))
                                if (((e = this._events[h]), (q = e.bounds), c.x >= q.x1 && c.x <= q.x2 && c.y >= q.y1 && c.y <= q.y2)) {
                                    e[b].call(e.context, c.x, c.y);
                                    "mousedown" === b && !0 === e.capture
                                        ? ((t.capturedEventParam = e), this.overlaidCanvas.setCapture ? this.overlaidCanvas.setCapture() : document.documentElement.addEventListener("mouseup", this._mouseEventHandler, !1))
                                        : "mouseup" === b && (e.chart.overlaidCanvas.releaseCapture ? e.chart.overlaidCanvas.releaseCapture() : document.documentElement.removeEventListener("mouseup", this._mouseEventHandler, !1));
                                    break;
                                } else e = null;
                        a.target.style.cursor = e && e.cursor ? e.cursor : this._defaultCursor;
                    }
                    h = this.plotArea;
                    if (c.x < h.x1 || c.x > h.x2 || c.y < h.y1 || c.y > h.y2) {
                        this.toolTip && this.toolTip.enabled ? (this.toolTip.hide(), this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip)) : this.resetOverlayedCanvas();
                        for (h = 0; h < this.axisX.length; h++)
                            this.axisX[h].crosshair &&
                                this.axisX[h].crosshair.enabled &&
                                (this.axisX[h].crosshair.hide(), this.axisX[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[h].options }, this.axisX[h].crosshair));
                        for (h = 0; h < this.axisX2.length; h++)
                            this.axisX2[h].crosshair &&
                                this.axisX2[h].crosshair.enabled &&
                                (this.axisX2[h].crosshair.hide(), this.axisX2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[h].options }, this.axisX2[h].crosshair));
                        for (h = 0; h < this.axisY.length; h++)
                            this.axisY[h].crosshair &&
                                this.axisY[h].crosshair.enabled &&
                                (this.axisY[h].crosshair.hide(), this.axisY[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[h].options }, this.axisY[h].crosshair));
                        for (h = 0; h < this.axisY2.length; h++)
                            this.axisY2[h].crosshair &&
                                this.axisY2[h].crosshair.enabled &&
                                (this.axisY2[h].crosshair.hide(), this.axisY2[h].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[h].options }, this.axisY2[h].crosshair));
                    }
                    this.sessionVariables.mouseX = c.x;
                    this.sessionVariables.mouseY = c.y;
                    (this.isDrag && this.zoomEnabled) || !this._eventManager || this._eventManager.mouseEventHandler(a);
                }
            }
        };
        t.prototype._plotAreaMouseDown = function (a, d) {
            this.isDrag = !0;
            this.dragStartPoint = { x: a, y: d };
        };
        t.prototype._plotAreaMouseUp = function (a, d) {
            if (("normal" === this.plotInfo.axisPlacement || "xySwapped" === this.plotInfo.axisPlacement) && this.isDrag) {
                var c = d - this.dragStartPoint.y,
                    b = a - this.dragStartPoint.x,
                    e = 0 <= this.zoomType.indexOf("x"),
                    h = 0 <= this.zoomType.indexOf("y"),
                    q = !1;
                this.resetOverlayedCanvas();
                if ("xySwapped" === this.plotInfo.axisPlacement)
                    var u = h,
                        h = e,
                        e = u;
                if (this.panEnabled || this.zoomEnabled) {
                    if (this.panEnabled)
                        for (e = h = 0; e < this._axes.length; e++)
                            (c = this._axes[e]),
                                c.logarithmic
                                    ? c.viewportMinimum < c.minimum
                                        ? ((h = c.minimum / c.viewportMinimum), (c.sessionVariables.newViewportMinimum = c.viewportMinimum * h), (c.sessionVariables.newViewportMaximum = c.viewportMaximum * h), (q = !0))
                                        : c.viewportMaximum > c.maximum &&
                                          ((h = c.viewportMaximum / c.maximum), (c.sessionVariables.newViewportMinimum = c.viewportMinimum / h), (c.sessionVariables.newViewportMaximum = c.viewportMaximum / h), (q = !0))
                                    : c.viewportMinimum < c.minimum
                                    ? ((h = c.minimum - c.viewportMinimum), (c.sessionVariables.newViewportMinimum = c.viewportMinimum + h), (c.sessionVariables.newViewportMaximum = c.viewportMaximum + h), (q = !0))
                                    : c.viewportMaximum > c.maximum &&
                                      ((h = c.viewportMaximum - c.maximum), (c.sessionVariables.newViewportMinimum = c.viewportMinimum - h), (c.sessionVariables.newViewportMaximum = c.viewportMaximum - h), (q = !0));
                    else if ((!e || 2 < Math.abs(b)) && (!h || 2 < Math.abs(c)) && this.zoomEnabled) {
                        if (!this.dragStartPoint) return;
                        c = e ? this.dragStartPoint.x : this.plotArea.x1;
                        b = h ? this.dragStartPoint.y : this.plotArea.y1;
                        e = e ? a : this.plotArea.x2;
                        h = h ? d : this.plotArea.y2;
                        2 < Math.abs(c - e) && 2 < Math.abs(b - h) && this._zoomPanToSelectedRegion(c, b, e, h) && (q = !0);
                    }
                    q &&
                        ((this._ignoreNextEvent = !0),
                        this._dispatchRangeEvent("rangeChanging", "zoom"),
                        this.stockChart &&
                            (this.stockChart._rangeEventParameter ||
                                (this.stockChart._rangeEventParameter = {
                                    stockChart: this.stockChart,
                                    source: "chart",
                                    index: this.stockChart.charts.indexOf(this),
                                    minimum: this.stockChart.sessionVariables._axisXMin,
                                    maximum: this.stockChart.sessionVariables._axisXMax,
                                }),
                            (this.stockChart._rangeEventParameter.type = "rangeChanging"),
                            this.stockChart.dispatchEvent("rangeChanging", this.stockChart._rangeEventParameter, this.stockChart)),
                        this.render(),
                        this._dispatchRangeEvent("rangeChanged", "zoom"),
                        this.stockChart &&
                            ((this.stockChart.rangeUpdatedBy = "chart"), (this.stockChart._rangeEventParameter.type = "rangeChanged"), this.stockChart.dispatchEvent("rangeChanged", this.stockChart._rangeEventParameter, this.stockChart)),
                        q && this.zoomEnabled && "none" === this._zoomButton.style.display && (Ma(this._zoomButton, this._resetButton), sa(this, this._zoomButton, "pan"), sa(this, this._resetButton, "reset")));
                }
            }
            this.isDrag = !1;
            if ("none" !== this.plotInfo.axisPlacement) {
                this.resetOverlayedCanvas();
                if (this.axisX && 0 < this.axisX.length) for (q = 0; q < this.axisX.length; q++) this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (q = 0; q < this.axisX2.length; q++) this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (q = 0; q < this.axisY.length; q++) this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (q = 0; q < this.axisY2.length; q++) this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].renderCrosshair(a, d);
                if (this.axisX && 0 < this.axisX.length) for (q = 0; q < this.axisX.length; q++) this.axisX[q].crosshair && this.axisX[q].crosshair.enabled && this.axisX[q].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length) for (q = 0; q < this.axisX2.length; q++) this.axisX2[q].crosshair && this.axisX2[q].crosshair.enabled && this.axisX2[q].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length) for (q = 0; q < this.axisY.length; q++) this.axisY[q].crosshair && this.axisY[q].crosshair.enabled && this.axisY[q].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length) for (q = 0; q < this.axisY2.length; q++) this.axisY2[q].crosshair && this.axisY2[q].crosshair.enabled && this.axisY2[q].crosshair.renderLabel();
            }
        };
        t.prototype._plotAreaMouseMove = function (a, d) {
            if (this.isDrag && "none" !== this.plotInfo.axisPlacement) {
                var c = 0,
                    b = 0,
                    e = (c = null),
                    e = 0 <= this.zoomType.indexOf("x"),
                    h = 0 <= this.zoomType.indexOf("y"),
                    q = this;
                "xySwapped" === this.plotInfo.axisPlacement && ((c = h), (h = e), (e = c));
                c = this.dragStartPoint.x - a;
                b = this.dragStartPoint.y - d;
                if (2 < Math.abs(c) && 8 > Math.abs(c) && (this.panEnabled || this.zoomEnabled)) {
                    this.toolTip.hide();
                    this.toolTip && this.toolTip.enabled && this.toolTip.dispatchEvent("hidden", { chart: this, toolTip: this.toolTip }, this.toolTip);
                    for (var u = 0; u < this.axisX.length; u++)
                        this.axisX[u].crosshair && this.axisX[u].crosshair.enabled && (this.axisX[u].crosshair.hide(), this.axisX[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX[u].options }, this.axisX[u].crosshair));
                    for (u = 0; u < this.axisX2.length; u++)
                        this.axisX2[u].crosshair &&
                            this.axisX2[u].crosshair.enabled &&
                            (this.axisX2[u].crosshair.hide(), this.axisX2[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisX2[u].options }, this.axisX2[u].crosshair));
                    for (u = 0; u < this.axisY.length; u++)
                        this.axisY[u].crosshair && this.axisY[u].crosshair.enabled && (this.axisY[u].crosshair.hide(), this.axisY[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY[u].options }, this.axisY[u].crosshair));
                    for (u = 0; u < this.axisY2.length; u++)
                        this.axisY2[u].crosshair &&
                            this.axisY2[u].crosshair.enabled &&
                            (this.axisY2[u].crosshair.hide(), this.axisY2[u].crosshair.dispatchEvent("hidden", { chart: this, axis: this.axisY2[u].options }, this.axisY2[u].crosshair));
                } else this.panEnabled || this.zoomEnabled || this.toolTip.mouseMoveHandler(a, d);
                if ((!e || 2 < Math.abs(c) || !h || 2 < Math.abs(b)) && (this.panEnabled || this.zoomEnabled))
                    if (this.panEnabled)
                        (e = { x1: e ? this.plotArea.x1 + c : this.plotArea.x1, y1: h ? this.plotArea.y1 + b : this.plotArea.y1, x2: e ? this.plotArea.x2 + c : this.plotArea.x2, y2: h ? this.plotArea.y2 + b : this.plotArea.y2 }),
                            clearTimeout(q._panTimerId),
                            (q._panTimerId = setTimeout(
                                (function (b, c, e, g) {
                                    return function () {
                                        q._zoomPanToSelectedRegion(b, c, e, g, !0) &&
                                            (q._dispatchRangeEvent("rangeChanging", "pan"),
                                            q.stockChart && ((q.stockChart._rangeEventParameter.type = "rangeChanging"), q.stockChart.dispatchEvent("rangeChanging", q.stockChart._rangeEventParameter, q.stockChart)),
                                            q.render(),
                                            q._dispatchRangeEvent("rangeChanged", "pan"),
                                            q.stockChart && ((q.stockChart._rangeEventParameter.type = "rangeChanged"), q.stockChart.dispatchEvent("rangeChanged", q.stockChart._rangeEventParameter, q.stockChart)),
                                            (q.dragStartPoint.x = a),
                                            (q.dragStartPoint.y = d));
                                    };
                                })(e.x1, e.y1, e.x2, e.y2),
                                0
                            ));
                    else if (this.zoomEnabled) {
                        this.resetOverlayedCanvas();
                        c = this.overlaidCanvasCtx.globalAlpha;
                        this.overlaidCanvasCtx.fillStyle = "#A89896";
                        var b = e ? this.dragStartPoint.x : this.plotArea.x1,
                            u = h ? this.dragStartPoint.y : this.plotArea.y1,
                            l = e ? a - this.dragStartPoint.x : this.plotArea.x2 - this.plotArea.x1,
                            k = h ? d - this.dragStartPoint.y : this.plotArea.y2 - this.plotArea.y1;
                        this.validateRegion(b, u, e ? a : this.plotArea.x2 - this.plotArea.x1, h ? d : this.plotArea.y2 - this.plotArea.y1, "xy" !== this.zoomType).isValid &&
                            (this.resetOverlayedCanvas(), (this.overlaidCanvasCtx.fillStyle = "#99B2B5"));
                        this.overlaidCanvasCtx.globalAlpha = 0.7;
                        this.overlaidCanvasCtx.fillRect(b, u, l, k);
                        this.overlaidCanvasCtx.globalAlpha = c;
                    }
            } else if ((this.toolTip.mouseMoveHandler(a, d), "none" !== this.plotInfo.axisPlacement)) {
                this.sessionVariables.crosshairShownByPixel = !0;
                if (this.axisX && 0 < this.axisX.length) for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].renderCrosshair(a, d);
                if (this.axisX2 && 0 < this.axisX2.length) for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].renderCrosshair(a, d);
                if (this.axisY && 0 < this.axisY.length) for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].renderCrosshair(a, d);
                if (this.axisY2 && 0 < this.axisY2.length) for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].renderCrosshair(a, d);
                if (this.axisX && 0 < this.axisX.length) for (e = 0; e < this.axisX.length; e++) this.axisX[e].crosshair && this.axisX[e].crosshair.enabled && this.axisX[e].crosshair.renderLabel();
                if (this.axisX2 && 0 < this.axisX2.length) for (e = 0; e < this.axisX2.length; e++) this.axisX2[e].crosshair && this.axisX2[e].crosshair.enabled && this.axisX2[e].crosshair.renderLabel();
                if (this.axisY && 0 < this.axisY.length) for (e = 0; e < this.axisY.length; e++) this.axisY[e].crosshair && this.axisY[e].crosshair.enabled && this.axisY[e].crosshair.renderLabel();
                if (this.axisY2 && 0 < this.axisY2.length) for (e = 0; e < this.axisY2.length; e++) this.axisY2[e].crosshair && this.axisY2[e].crosshair.enabled && this.axisY2[e].crosshair.renderLabel();
            }
        };
        t.prototype._zoomPanToSelectedRegion = function (a, d, c, b, e) {
            a = this.validateRegion(a, d, c, b, e);
            d = a.axesWithValidRange;
            c = a.axesRanges;
            if (a.isValid)
                for (b = 0; b < d.length; b++)
                    (e = c[b]),
                        d[b].setViewPortRange(e.val1, e.val2),
                        this.syncCharts && "y" != this.zoomType && this.syncCharts(e.val1, e.val2),
                        this.stockChart && (this.stockChart._rangeEventParameter = { stockChart: this.stockChart, source: "chart", index: this.stockChart.charts.indexOf(this), minimum: e.val1, maximum: e.val2 });
            return a.isValid;
        };
        t.prototype.validateRegion = function (a, d, c, b, e) {
            e = e || !1;
            for (var h = 0 <= this.zoomType.indexOf("x"), q = 0 <= this.zoomType.indexOf("y"), u = !1, l = [], k = [], m = [], n = 0; n < this._axes.length; n++)
                (("axisX" === this._axes[n].type && h) || ("axisY" === this._axes[n].type && q)) && k.push(this._axes[n]);
            for (q = 0; q < k.length; q++) {
                var n = k[q],
                    h = !1,
                    p = n.convertPixelToValue({ x: a, y: d }),
                    g = n.convertPixelToValue({ x: c, y: b });
                if (p > g)
                    var f = g,
                        g = p,
                        p = f;
                if (n.scaleBreaks) for (f = 0; !h && f < n.scaleBreaks._appliedBreaks.length; f++) h = n.scaleBreaks._appliedBreaks[f].startValue <= p && n.scaleBreaks._appliedBreaks[f].endValue >= g;
                if (isFinite(n.dataInfo.minDiff))
                    if (
                        ((f = n.getApparentDifference(p, g, null, !0)),
                        !(
                            h ||
                            (!(this.panEnabled && n.scaleBreaks && n.scaleBreaks._appliedBreaks.length) && ((n.logarithmic && f < Math.pow(n.dataInfo.minDiff, 3)) || (!n.logarithmic && f < 3 * Math.abs(n.dataInfo.minDiff)))) ||
                            p < n.minimum ||
                            g > n.maximum
                        ))
                    )
                        l.push(n), m.push({ val1: p, val2: g }), (u = !0);
                    else if (!e) {
                        u = !1;
                        break;
                    }
            }
            return { isValid: u, axesWithValidRange: l, axesRanges: m };
        };
        t.prototype.preparePlotArea = function () {
            var a = this.plotArea;
            !r && (0 < a.x1 || 0 < a.y1) && a.ctx.translate(a.x1, a.y1);
            if ((this.axisX[0] || this.axisX2[0]) && (this.axisY[0] || this.axisY2[0])) {
                var d = this.axisX[0] ? this.axisX[0].lineCoordinates : this.axisX2[0].lineCoordinates;
                if (this.axisY && 0 < this.axisY.length && this.axisY[0]) {
                    var c = this.axisY[0];
                    a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1;
                    a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1;
                    a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2;
                    a.y2 = d.y1 > c.lineCoordinates.y2 ? d.y1 : c.lineCoordinates.y2;
                    a.width = a.x2 - a.x1;
                    a.height = a.y2 - a.y1;
                }
                this.axisY2 &&
                    0 < this.axisY2.length &&
                    this.axisY2[0] &&
                    ((c = this.axisY2[0]),
                    (a.x1 = d.x1 < d.x2 ? d.x1 : c.lineCoordinates.x1),
                    (a.y1 = d.y1 < c.lineCoordinates.y1 ? d.y1 : c.lineCoordinates.y1),
                    (a.x2 = d.x2 > c.lineCoordinates.x2 ? d.x2 : c.lineCoordinates.x2),
                    (a.y2 = d.y2 > c.lineCoordinates.y2 ? d.y2 : c.lineCoordinates.y2),
                    (a.width = a.x2 - a.x1),
                    (a.height = a.y2 - a.y1));
            } else (d = this.layoutManager.getFreeSpace()), (a.x1 = d.x1), (a.x2 = d.x2), (a.y1 = d.y1), (a.y2 = d.y2), (a.width = d.width), (a.height = d.height);
            r || ((a.canvas.width = a.width), (a.canvas.height = a.height), (a.canvas.style.left = a.x1 + "px"), (a.canvas.style.top = a.y1 + "px"), (0 < a.x1 || 0 < a.y1) && a.ctx.translate(-a.x1, -a.y1));
            a.layoutManager = new Fa(a.x1, a.y1, a.x2, a.y2, 2);
        };
        t.prototype.renderIndexLabels = function (a) {
            var d = a || this.plotArea.ctx,
                c = this.plotArea,
                b = 0,
                e = 0,
                h = 0,
                q = (e = h = 0),
                u = 0,
                f = (b = 0),
                k = 0;
            for (a = 0; a < this._indexLabels.length; a++) {
                var m = this._indexLabels[a],
                    n = m.chartType.toLowerCase(),
                    p,
                    g,
                    u = ma("indexLabelFontColor", m.dataPoint, m.dataSeries),
                    D = ma("indexLabelFontSize", m.dataPoint, m.dataSeries),
                    f = ma("indexLabelFontFamily", m.dataPoint, m.dataSeries),
                    k = ma("indexLabelFontStyle", m.dataPoint, m.dataSeries);
                p = ma("indexLabelFontWeight", m.dataPoint, m.dataSeries);
                var x = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries);
                g = ma("indexLabelBorderColor", m.dataPoint, m.dataSeries);
                var h = ma("indexLabelBorderThickness", m.dataPoint, m.dataSeries),
                    e = ma("indexLabelMaxWidth", m.dataPoint, m.dataSeries),
                    q = ma("indexLabelWrap", m.dataPoint, m.dataSeries),
                    y = ma("indexLabelLineDashType", m.dataPoint, m.dataSeries),
                    s = ma("indexLabelLineColor", m.dataPoint, m.dataSeries),
                    C = l(m.dataPoint.indexLabelLineThickness) ? (l(m.dataSeries.options.indexLabelLineThickness) ? 0 : m.dataSeries.options.indexLabelLineThickness) : m.dataPoint.indexLabelLineThickness,
                    b = 0 < C ? Math.min(10, ("normal" === this.plotInfo.axisPlacement ? this.plotArea.height : this.plotArea.width) << 0) : 0,
                    v = { percent: null, total: null },
                    W = null;
                if (0 <= m.dataSeries.type.indexOf("stacked") || "pie" === m.dataSeries.type || "doughnut" === m.dataSeries.type) v = this.getPercentAndTotal(m.dataSeries, m.dataPoint);
                if (m.dataSeries.indexLabelFormatter || m.dataPoint.indexLabelFormatter) W = { chart: this, dataSeries: m.dataSeries, dataPoint: m.dataPoint, index: m.indexKeyword, total: v.total, percent: v.percent };
                var t = m.dataPoint.indexLabelFormatter
                    ? m.dataPoint.indexLabelFormatter(W)
                    : m.dataPoint.indexLabel
                    ? this.replaceKeywordsWithValue(m.dataPoint.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword)
                    : m.dataSeries.indexLabelFormatter
                    ? m.dataSeries.indexLabelFormatter(W)
                    : m.dataSeries.indexLabel
                    ? this.replaceKeywordsWithValue(m.dataSeries.indexLabel, m.dataPoint, m.dataSeries, null, m.indexKeyword)
                    : null;
                if (null !== t && "" !== t) {
                    var v = ma("indexLabelPlacement", m.dataPoint, m.dataSeries),
                        W = ma("indexLabelOrientation", m.dataPoint, m.dataSeries),
                        B = ma("indexLabelTextAlign", m.dataPoint, m.dataSeries),
                        w = m.direction,
                        z = m.dataSeries.axisX,
                        K = m.dataSeries.axisY,
                        L = !1,
                        x = new ka(d, {
                            x: 0,
                            y: 0,
                            maxWidth: e ? e : 0.5 * this.width,
                            maxHeight: q ? 5 * D : 1.5 * D,
                            angle: "horizontal" === W ? 0 : -90,
                            text: t,
                            padding: 0,
                            backgroundColor: x,
                            borderColor: g,
                            borderThickness: h,
                            textAlign: B,
                            fontSize: D,
                            fontFamily: f,
                            fontWeight: p,
                            fontColor: u,
                            fontStyle: k,
                            textBaseline: "middle",
                        });
                    x.measureText();
                    m.dataSeries.indexLabelMaxWidth = x.maxWidth;
                    if ("stackedarea100" === n) {
                        if (m.point.x < c.x1 || m.point.x > c.x2 || m.point.y < c.y1 - 1 || m.point.y > c.y2 + 1) continue;
                    } else if ("rangearea" === n || "rangesplinearea" === n) {
                        if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum) continue;
                    } else if (0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("bubble") || 0 <= n.indexOf("scatter")) {
                        if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum || m.dataPoint.y < K.viewportMinimum || m.dataPoint.y > K.viewportMaximum) continue;
                    } else if (0 <= n.indexOf("column")) {
                        if (
                            m.dataPoint.x < z.viewportMinimum ||
                            m.dataPoint.x > z.viewportMaximum ||
                            (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) < K.viewportMinimum ||
                            (0 < m.dataPoint.y.length ? Math.max.apply(null, m.dataPoint.y) : m.dataPoint.y) > K.viewportMaximum
                        )
                            continue;
                    } else if ("waterfall" === n || ("error" === n && !m.axisSwapped)) {
                        if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum || m.bounds.y1 > c.y2 || m.bounds.y2 < c.y1) continue;
                    } else if (0 <= n.indexOf("bar") || "error" === n) {
                        if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum || m.bounds.x1 > c.x2 || m.bounds.x2 < c.x1) continue;
                    } else if ("candlestick" === n || "ohlc" === n) {
                        if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum || Math.max.apply(null, m.dataPoint.y) < K.viewportMinimum || Math.min.apply(null, m.dataPoint.y) > K.viewportMaximum) continue;
                    } else if (m.dataPoint.x < z.viewportMinimum || m.dataPoint.x > z.viewportMaximum) continue;
                    q = u = 2;
                    "horizontal" === W ? ((f = x.width), (k = x.height)) : ((k = x.width), (f = x.height));
                    if ("normal" === this.plotInfo.axisPlacement) {
                        if (0 <= n.indexOf("line") || 0 <= n.indexOf("area")) (v = "auto"), (u = 4);
                        else if (0 <= n.indexOf("stacked")) "auto" === v && (v = "inside");
                        else if ("bubble" === n || "scatter" === n) v = "inside";
                        p = m.point.x - f / 2 + ("horizontal" === W ? 0 : x._lineHeight / 2);
                        if ("inside" !== v)
                            (e = c.y1),
                                (h = c.y2),
                                0 < w
                                    ? ((g = m.point.y + x._lineHeight / 2 - k - u - b),
                                      g < e &&
                                          ((g = "auto" === v ? Math.max(m.point.y, e) + x._lineHeight / 2 + u + b : e + x._lineHeight / 2 + u + b),
                                          (L = g + ("horizontal" === W ? k - x._lineHeight / 2 : 0) > m.point.y),
                                          !L || 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || (g -= b)))
                                    : ((g = m.point.y + x._lineHeight / 2 + u + b),
                                      g > h - k + x._lineHeight / 2 - u &&
                                          ((g = "auto" === v ? Math.min(m.point.y, h) + x._lineHeight / 2 - k - u - b : h + x._lineHeight / 2 - k - u - b),
                                          (L = g - ("horizontal" === W ? x._lineHeight / 2 : k) < m.point.y),
                                          !L || 0 <= n.indexOf("line") || 0 <= n.indexOf("area") || (g += b)));
                        else {
                            Math.max(m.bounds.y1, c.y1);
                            h = Math.min(m.bounds.y2, c.y2) - k + x._lineHeight / 2;
                            b =
                                0 <= n.indexOf("range") || "error" === n
                                    ? 0 < w
                                        ? Math.max(m.bounds.y1, c.y1) + x._lineHeight / 2 + u
                                        : Math.min(m.bounds.y2, c.y2) + x._lineHeight / 2 - k - u
                                    : (Math.max(m.bounds.y1, c.y1) + Math.min(m.bounds.y2, c.y2)) / 2 - k / 2 + x._lineHeight / 2;
                            if (0 < w) {
                                if (((g = b), "bubble" === n || "scatter" === n))
                                    (g = m.point.y - k / 2 + x._lineHeight / 2),
                                        k > m.bounds.y2 - m.bounds.y1 && (g -= k / 2 + u),
                                        0 > g - x._lineHeight / 2 && (g += Math.abs(g - x._lineHeight / 2) <= (m.bounds.y2 - m.bounds.y1) / 2 + u ? Math.abs(g - x._lineHeight / 2) : (m.bounds.y2 - m.bounds.y1) / 2 + u);
                            } else (g = Math.min(m.point.y, b)), g > h - k - u && ("bubble" === n || "scatter" === n) && (g = Math.min(m.point.y + u, c.y2 - k - u));
                            g = Math.min(g, h);
                        }
                    } else
                        0 <= n.indexOf("line") || 0 <= n.indexOf("area") || 0 <= n.indexOf("scatter") ? ((v = "auto"), (q = 4)) : 0 <= n.indexOf("stacked") ? "auto" === v && (v = "inside") : "bubble" === n && (v = "inside"),
                            (g = m.point.y + x._lineHeight / 2 - k / 2),
                            "inside" !== v
                                ? ((h = c.x1),
                                  (e = c.x2),
                                  0 > w
                                      ? ((p = m.point.x - f + ("horizontal" === W ? 0 : x._lineHeight / 2) - q - b),
                                        ("horizontal" === W ? p : p - x._lineHeight / 2) < h &&
                                            ((p = "auto" === v ? Math.max(m.point.x, h) + ("horizontal" === W ? 0 : x._lineHeight / 2) + u + b : h + ("horizontal" === W ? 0 : x._lineHeight / 2) + q),
                                            (L = p + f - ("horizontal" === W ? 0 : x._lineHeight / 2) > m.point.x) && (p -= b)))
                                      : ((p = m.point.x + ("horizontal" === W ? 0 : x._lineHeight / 2) + q + b),
                                        ("horizontal" === W ? p : p - x._lineHeight / 2) > e - f - q - b &&
                                            ((p = "auto" === v ? Math.min(m.point.x, e) - ("horizontal" === W ? f : f - x._lineHeight / 2) - q - b : e - f - q + ("horizontal" === W ? 0 : x._lineHeight / 2)),
                                            (L = p - ("horizontal" === W ? 0 : x._lineHeight / 2) < m.point.x) && (p += b))))
                                : ((h = Math.max(m.bounds.x1, c.x1)),
                                  Math.min(m.bounds.x2, c.x2),
                                  (b =
                                      0 <= n.indexOf("range") || "error" === n
                                          ? 0 > w
                                              ? Math.max(m.bounds.x1, c.x1)
                                              : Math.min(m.bounds.x2, c.x2) - f - q + ("horizontal" === W ? 0 : x._lineHeight / 2)
                                          : (Math.max(m.bounds.x1, c.x1) + Math.min(m.bounds.x2, c.x2)) / 2 - f / 2 + ("horizontal" === W ? 0 : x._lineHeight / 2)),
                                  (p = 0 > w ? b : Math.min(m.point.x, b)),
                                  (p = Math.max(p, h + ("horizontal" === W ? 0 : x._lineHeight / 2 + u))));
                    "vertical" === W &&
                        ((g += k - x._lineHeight / 2),
                        0 <= "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) &&
                            (L = 0 < w ? g + ("horizontal" === W ? k - x._lineHeight / 2 : 0) > m.point.y : g - ("horizontal" === W ? x._lineHeight / 2 : k) < m.point.y),
                        "bubble" === n || "scatter" === n) &&
                        (p += x._lineHeight / 2 - D / 2);
                    x.x = p;
                    x.y = g;
                    x.render(!0);
                    C &&
                        "inside" !== v &&
                        ((0 > n.indexOf("bar") && ("error" !== n || !m.axisSwapped) && m.point.x > c.x1 && m.point.x < c.x2) || !L) &&
                        ((-1 === "ohlc candlestick boxandwhisker column rangecolumn stackedcolumn stackedcolumn100 error".split(" ").indexOf(n) && ("error" !== n || m.axisSwapped) && m.point.y > c.y1 && m.point.y < c.y2) || !L) &&
                        ((d.lineWidth = C),
                        (d.strokeStyle = s ? s : "gray"),
                        d.setLineDash && d.setLineDash(I(y, C)),
                        d.beginPath(),
                        d.moveTo(m.point.x, m.point.y),
                        0 <= n.indexOf("bar") || ("error" === n && m.axisSwapped)
                            ? d.lineTo(p + (0 < m.direction ? 0 : f) + ("vertical" === W ? -x._lineHeight / 2 : 0), g + ("vertical" === W ? -k / 2 : k / 2 - x._lineHeight / 2))
                            : 0 <= n.indexOf("column") || ("error" === n && !m.axisSwapped)
                            ? d.lineTo(p + f / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2), g + ("vertical" === W ? (g - k < m.point.y ? 0 : -k) : (g - x._lineHeight / 2 < m.point.y ? k : 0) - x._lineHeight / 2))
                            : 0 <= n.indexOf("waterfall")
                            ? d.lineTo(
                                  p + f / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2),
                                  "vertical" === W
                                      ? 0 < w && g < m.point.y
                                          ? g
                                          : 0 > w && g - k > m.point.y
                                          ? g - k
                                          : m.point.y
                                      : 0 < w && g + k - x._lineHeight / 2 < m.point.y
                                      ? g + k - x._lineHeight / 2
                                      : 0 > w && g - x._lineHeight / 2 > m.point.y
                                      ? g - x._lineHeight / 2
                                      : m.point.y
                              )
                            : d.lineTo(p + f / 2 - ("horizontal" === W ? 0 : x._lineHeight / 2), g + ("vertical" === W ? (g - k < m.point.y ? 0 : -k) : (g + k - x._lineHeight / 2 < m.point.y ? k : 0) - x._lineHeight / 2)),
                        d.stroke());
                }
            }
            d = { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0, startTimePercent: 0.7 };
            for (a = 0; a < this._indexLabels.length; a++) (m = this._indexLabels[a]), (x = ma("indexLabelBackgroundColor", m.dataPoint, m.dataSeries)), (m.dataSeries.indexLabelBackgroundColor = l(x) ? (r ? "transparent" : null) : x);
            return d;
        };
        t.prototype.renderLine = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var h = [], q, u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var l = a.dataSeriesIndexes[u],
                        k = this.data[l];
                    c.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (c.setLineDash) {
                        var p = I(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            g = I(n, k.lineThickness);
                        c.setLineDash(g);
                    }
                    var f = k.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: l };
                    f = U(f);
                    b.strokeStyle = f;
                    b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var f = k._colorSet,
                        x = (f = k.lineColor = k.options.lineColor ? k.options.lineColor : f[0]);
                    c.strokeStyle = f;
                    var y = !0,
                        s = 0,
                        C,
                        v;
                    c.beginPath();
                    if (0 < m.length) {
                        for (var W = !1, s = 0; s < m.length; s++)
                            if (((C = m[s].x.getTime ? m[s].x.getTime() : m[s].x), !(C < a.axisX.dataInfo.viewPortMin || (C > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))))
                                if ("number" !== typeof m[s].y) 0 < s && !(k.connectNullData || W || y) && (c.stroke(), r && b.stroke()), (W = !0);
                                else {
                                    C = a.axisX.convertValueToPixel(C);
                                    v = a.axisY.convertValueToPixel(m[s].y);
                                    var t = k.dataPointIds[s];
                                    this._eventManager.objectMap[t] = { id: t, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: s, x1: C, y1: v };
                                    y || W
                                        ? (!y && k.connectNullData
                                              ? (c.setLineDash &&
                                                    (k.options.nullDataLineDashType || (n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType)) &&
                                                    (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), (n = k.nullDataLineDashType), c.setLineDash(p)),
                                                c.lineTo(C, v),
                                                r && b.lineTo(C, v))
                                              : (c.beginPath(), c.moveTo(C, v), r && (b.beginPath(), b.moveTo(C, v))),
                                          (W = y = !1))
                                        : (c.lineTo(C, v), r && b.lineTo(C, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(C, v), r && (b.stroke(), b.beginPath(), b.moveTo(C, v))));
                                    q = { x: C, y: v };
                                    s < m.length - 1 &&
                                        (x !== (m[s].lineColor || f) || n !== (m[s].lineDashType || k.lineDashType)) &&
                                        (c.stroke(),
                                        c.beginPath(),
                                        c.moveTo(C, v),
                                        (x = m[s].lineColor || f),
                                        (c.strokeStyle = x),
                                        c.setLineDash && (m[s].lineDashType ? ((n = m[s].lineDashType), c.setLineDash(I(n, k.lineThickness))) : ((n = k.lineDashType), c.setLineDash(g))));
                                    if (0 !== m[s].markerSize && (0 < m[s].markerSize || 0 < k.markerSize)) {
                                        var B = k.getMarkerProperties(s, C, v, c);
                                        h.push(B);
                                        t = U(t);
                                        r && h.push({ x: C, y: v, ctx: b, type: B.type, size: B.size, color: t, borderColor: t, borderThickness: B.borderThickness });
                                    }
                                    (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "line", dataPoint: m[s], dataSeries: k, point: { x: C, y: v }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: f });
                                }
                        c.stroke();
                        r && b.stroke();
                    }
                }
                aa.drawMarkers(h);
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    b.beginPath());
                c.restore();
                c.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderStepLine = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx;
                c.save();
                var e = this.plotArea;
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                for (var h = [], q, u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var l = a.dataSeriesIndexes[u],
                        k = this.data[l];
                    c.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (c.setLineDash) {
                        var p = I(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            g = I(n, k.lineThickness);
                        c.setLineDash(g);
                    }
                    var f = k.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: l };
                    f = U(f);
                    b.strokeStyle = f;
                    b.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var f = k._colorSet,
                        x = (f = k.lineColor = k.options.lineColor ? k.options.lineColor : f[0]);
                    c.strokeStyle = f;
                    var y = !0,
                        s = 0,
                        C,
                        v;
                    c.beginPath();
                    if (0 < m.length) {
                        for (var W = !1, s = 0; s < m.length; s++)
                            if (((C = m[s].getTime ? m[s].x.getTime() : m[s].x), !(C < a.axisX.dataInfo.viewPortMin || (C > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !W)))))
                                if ("number" !== typeof m[s].y) 0 < s && !(k.connectNullData || W || y) && (c.stroke(), r && b.stroke()), (W = !0);
                                else {
                                    var t = v;
                                    C = a.axisX.convertValueToPixel(C);
                                    v = a.axisY.convertValueToPixel(m[s].y);
                                    var B = k.dataPointIds[s];
                                    this._eventManager.objectMap[B] = { id: B, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: s, x1: C, y1: v };
                                    y || W
                                        ? (!y && k.connectNullData
                                              ? (c.setLineDash &&
                                                    (k.options.nullDataLineDashType || (n === k.lineDashType && k.lineDashType !== k.nullDataLineDashType)) &&
                                                    (c.stroke(), c.beginPath(), c.moveTo(q.x, q.y), (n = k.nullDataLineDashType), c.setLineDash(p)),
                                                c.lineTo(C, t),
                                                c.lineTo(C, v),
                                                r && (b.lineTo(C, t), b.lineTo(C, v)))
                                              : (c.beginPath(), c.moveTo(C, v), r && (b.beginPath(), b.moveTo(C, v))),
                                          (W = y = !1))
                                        : (c.lineTo(C, t), r && b.lineTo(C, t), c.lineTo(C, v), r && b.lineTo(C, v), 0 == s % 500 && (c.stroke(), c.beginPath(), c.moveTo(C, v), r && (b.stroke(), b.beginPath(), b.moveTo(C, v))));
                                    q = { x: C, y: v };
                                    s < m.length - 1 &&
                                        (x !== (m[s].lineColor || f) || n !== (m[s].lineDashType || k.lineDashType)) &&
                                        (c.stroke(),
                                        c.beginPath(),
                                        c.moveTo(C, v),
                                        (x = m[s].lineColor || f),
                                        (c.strokeStyle = x),
                                        c.setLineDash && (m[s].lineDashType ? ((n = m[s].lineDashType), c.setLineDash(I(n, k.lineThickness))) : ((n = k.lineDashType), c.setLineDash(g))));
                                    0 !== m[s].markerSize &&
                                        (0 < m[s].markerSize || 0 < k.markerSize) &&
                                        ((t = k.getMarkerProperties(s, C, v, c)), h.push(t), (B = U(B)), r && h.push({ x: C, y: v, ctx: b, type: t.type, size: t.size, color: B, borderColor: B, borderThickness: t.borderThickness }));
                                    (m[s].indexLabel || k.indexLabel || m[s].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stepLine", dataPoint: m[s], dataSeries: k, point: { x: C, y: v }, direction: 0 > m[s].y === a.axisY.reversed ? 1 : -1, color: f });
                                }
                        c.stroke();
                        r && b.stroke();
                    }
                }
                aa.drawMarkers(h);
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    b.beginPath());
                c.restore();
                c.beginPath();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderSpline = function (a) {
            function d(a) {
                a = w(a, 2);
                if (0 < a.length) {
                    b.beginPath();
                    r && e.beginPath();
                    b.moveTo(a[0].x, a[0].y);
                    a[0].newStrokeStyle && (b.strokeStyle = a[0].newStrokeStyle);
                    a[0].newLineDashArray && b.setLineDash(a[0].newLineDashArray);
                    r && e.moveTo(a[0].x, a[0].y);
                    for (var c = 0; c < a.length - 3; c += 3)
                        if (
                            (b.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y),
                            r && e.bezierCurveTo(a[c + 1].x, a[c + 1].y, a[c + 2].x, a[c + 2].y, a[c + 3].x, a[c + 3].y),
                            (0 < c && 0 === c % 3e3) || a[c + 3].newStrokeStyle || a[c + 3].newLineDashArray)
                        )
                            b.stroke(),
                                b.beginPath(),
                                b.moveTo(a[c + 3].x, a[c + 3].y),
                                a[c + 3].newStrokeStyle && (b.strokeStyle = a[c + 3].newStrokeStyle),
                                a[c + 3].newLineDashArray && b.setLineDash(a[c + 3].newLineDashArray),
                                r && (e.stroke(), e.beginPath(), e.moveTo(a[c + 3].x, a[c + 3].y));
                    b.stroke();
                    r && e.stroke();
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx;
                b.save();
                var h = this.plotArea;
                b.beginPath();
                b.rect(h.x1, h.y1, h.width, h.height);
                b.clip();
                for (var q = [], u = 0; u < a.dataSeriesIndexes.length; u++) {
                    var l = a.dataSeriesIndexes[u],
                        k = this.data[l];
                    b.lineWidth = k.lineThickness;
                    var m = k.dataPoints,
                        n = "solid";
                    if (b.setLineDash) {
                        var p = I(k.nullDataLineDashType, k.lineThickness),
                            n = k.lineDashType,
                            g = I(n, k.lineThickness);
                        b.setLineDash(g);
                    }
                    var f = k.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: l };
                    f = U(f);
                    e.strokeStyle = f;
                    e.lineWidth = 0 < k.lineThickness ? Math.max(k.lineThickness, 4) : 0;
                    var f = k._colorSet,
                        x = (f = k.lineColor = k.options.lineColor ? k.options.lineColor : f[0]);
                    b.strokeStyle = f;
                    var y = 0,
                        s,
                        C,
                        v = [];
                    b.beginPath();
                    if (0 < m.length)
                        for (C = !1, y = 0; y < m.length; y++)
                            if (((s = m[y].getTime ? m[y].x.getTime() : m[y].x), !(s < a.axisX.dataInfo.viewPortMin || (s > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !C)))))
                                if ("number" !== typeof m[y].y)
                                    0 < y &&
                                        !C &&
                                        (k.connectNullData
                                            ? b.setLineDash && 0 < v.length && (k.options.nullDataLineDashType || !m[y - 1].lineDashType) && ((v[v.length - 1].newLineDashArray = p), (n = k.nullDataLineDashType))
                                            : (d(v), (v = []))),
                                        (C = !0);
                                else {
                                    s = a.axisX.convertValueToPixel(s);
                                    C = a.axisY.convertValueToPixel(m[y].y);
                                    var W = k.dataPointIds[y];
                                    this._eventManager.objectMap[W] = { id: W, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: y, x1: s, y1: C };
                                    v[v.length] = { x: s, y: C };
                                    y < m.length - 1 &&
                                        (x !== (m[y].lineColor || f) || n !== (m[y].lineDashType || k.lineDashType)) &&
                                        ((x = m[y].lineColor || f),
                                        (v[v.length - 1].newStrokeStyle = x),
                                        b.setLineDash && (m[y].lineDashType ? ((n = m[y].lineDashType), (v[v.length - 1].newLineDashArray = I(n, k.lineThickness))) : ((n = k.lineDashType), (v[v.length - 1].newLineDashArray = g))));
                                    if (0 !== m[y].markerSize && (0 < m[y].markerSize || 0 < k.markerSize)) {
                                        var t = k.getMarkerProperties(y, s, C, b);
                                        q.push(t);
                                        W = U(W);
                                        r && q.push({ x: s, y: C, ctx: e, type: t.type, size: t.size, color: W, borderColor: W, borderThickness: t.borderThickness });
                                    }
                                    (m[y].indexLabel || k.indexLabel || m[y].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "spline", dataPoint: m[y], dataSeries: k, point: { x: s, y: C }, direction: 0 > m[y].y === a.axisY.reversed ? 1 : -1, color: f });
                                    C = !1;
                                }
                    d(v);
                }
                aa.drawMarkers(q);
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(h.x1, h.y1, h.width, h.height),
                    e.beginPath());
                b.restore();
                b.beginPath();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = 0,
                    q,
                    u,
                    l,
                    k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.dataPointWidth = this.options.dataPointWidth
                    ? this.dataPointWidth
                    : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < h && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                n < h && (n = h);
                n > m && (n = m);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var p = a.dataSeriesIndexes[m],
                        g = this.data[p],
                        f = g.dataPoints;
                    if (0 < f.length)
                        for (var x = 5 < n && g.bevelEnabled ? !0 : !1, h = 0; h < f.length; h++)
                            if ((f[h].getTime ? (l = f[h].x.getTime()) : (l = f[h].x), !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof f[h].y)) {
                                q = a.axisX.convertValueToPixel(l);
                                u = a.axisY.convertValueToPixel(f[h].y);
                                q = a.axisX.reversed ? (q + (a.plotType.totalDataSeries * n) / 2 - (a.previousDataSeriesCount + m) * n) << 0 : (q - (a.plotType.totalDataSeries * n) / 2 + (a.previousDataSeriesCount + m) * n) << 0;
                                var y = a.axisX.reversed ? (q - n) << 0 : (q + n) << 0,
                                    s;
                                0 <= f[h].y ? (s = k) : ((s = u), (u = k));
                                u > s && ((b = u), (u = s), (s = b));
                                b = f[h].color ? f[h].color : g._colorSet[h % g._colorSet.length];
                                da(c, a.axisX.reversed ? y : q, u, a.axisX.reversed ? q : y, s, b, 0, null, x && (a.axisY.reversed ? 0 > f[h].y : 0 <= f[h].y), (a.axisY.reversed ? 0 <= f[h].y : 0 > f[h].y) && x, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: h, x1: q, y1: u, x2: y, y2: s };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, a.axisX.reversed ? y : q, u, a.axisX.reversed ? q : y, s, b, 0, null, !1, !1, !1, !1);
                                (f[h].indexLabel || g.indexLabel || f[h].indexLabelFormatter || g.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "column",
                                        dataPoint: f[h],
                                        dataSeries: g,
                                        point: { x: q + (y - q) / 2, y: 0 > f[h].y === a.axisY.reversed ? u : s },
                                        direction: 0 > f[h].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: q, y1: Math.min(u, s), x2: y, y2: Math.max(u, s) },
                                        color: b,
                                    });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.yScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : k > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : k,
                };
            }
        };
        t.prototype.renderStackedColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = [],
                    q = [],
                    u = [],
                    l = [],
                    k = 0,
                    m,
                    n,
                    p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.width) << 0,
                    f = a.axisX.dataInfo.minDiff;
                isFinite(f) || (f = 0.3 * Math.abs(a.axisX.range));
                f = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(f) / Math.log(a.axisX.range) : Math.abs(f) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                f < k && (f = k);
                f > g && (f = g);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var x = a.dataSeriesIndexes[g],
                        y = this.data[x],
                        s = y.dataPoints;
                    if (0 < s.length) {
                        var C = 5 < f && y.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < s.length; k++)
                            if (((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x), !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y)) {
                                m = a.axisX.convertValueToPixel(b);
                                m = (m - (a.plotType.plotUnits.length * f) / 2 + a.index * f) << 0;
                                var v = (m + f) << 0,
                                    t;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y))
                                    (u[b] = s[k].y + (u[b] ? u[b] : 0)), 0 < u[b] && ((n = a.axisY.convertValueToPixel(u[b])), (t = "undefined" !== typeof h[b] ? h[b] : p), (h[b] = n));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                                    (l[b] = s[k].y + (l[b] ? l[b] : 0)), (t = a.axisY.convertValueToPixel(l[b])), (n = "undefined" !== typeof q[b] ? q[b] : p), (q[b] = t);
                                else if (((n = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)) {
                                    var w = "undefined" !== typeof h[b] ? h[b] : 0;
                                    n -= w;
                                    t = p - w;
                                    h[b] = w + (t - n);
                                } else (w = q[b] ? q[b] : 0), (t = n + w), (n = p + w), (q[b] = w + (t - n));
                                b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                                da(c, m, a.axisY.reversed ? t : n, v, a.axisY.reversed ? n : t, b, 0, null, C && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && C, !1, !1, y.fillOpacity);
                                b = y.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: m, y1: n, x2: v, y2: t };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, m, n, v, t, b, 0, null, !1, !1, !1, !1);
                                (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedColumn",
                                        dataPoint: s[k],
                                        dataSeries: y,
                                        point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : t },
                                        direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: m, y1: Math.min(n, t), x2: v, y2: Math.max(n, t) },
                                        color: b,
                                    });
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.yScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p,
                };
            }
        };
        t.prototype.renderStackedColumn100 = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = [],
                    q = [],
                    u = [],
                    l = [],
                    k = 0,
                    m,
                    n,
                    p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.width) << 0,
                    f = a.axisX.dataInfo.minDiff;
                isFinite(f) || (f = 0.3 * Math.abs(a.axisX.range));
                f = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(f) / Math.log(a.axisX.range) : Math.abs(f) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                f < k && (f = k);
                f > g && (f = g);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var x = a.dataSeriesIndexes[g],
                        y = this.data[x],
                        s = y.dataPoints;
                    if (0 < s.length)
                        for (var C = 5 < f && y.bevelEnabled ? !0 : !1, k = 0; k < s.length; k++)
                            if (((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x), !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y)) {
                                m = a.axisX.convertValueToPixel(b);
                                n = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                                m = (m - (a.plotType.plotUnits.length * f) / 2 + a.index * f) << 0;
                                var v = (m + f) << 0,
                                    t;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)) {
                                    u[b] = n + ("undefined" !== typeof u[b] ? u[b] : 0);
                                    if (0 >= u[b]) continue;
                                    n = a.axisY.convertValueToPixel(u[b]);
                                    t = h[b] ? h[b] : p;
                                    h[b] = n;
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y)
                                    (l[b] = n + ("undefined" !== typeof l[b] ? l[b] : 0)), (t = a.axisY.convertValueToPixel(l[b])), (n = q[b] ? q[b] : p), (q[b] = t);
                                else if (((n = a.axisY.convertValueToPixel(n)), 0 <= s[k].y)) {
                                    var w = "undefined" !== typeof h[b] ? h[b] : 0;
                                    n -= w;
                                    t = p - w;
                                    a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(e.y1 - n) && (n = e.y1);
                                    h[b] = w + (t - n);
                                } else (w = "undefined" !== typeof q[b] ? q[b] : 0), (t = n + w), (n = p + w), a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(e.y2 - t) && (t = e.y2), (q[b] = w + (t - n));
                                b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                                da(c, m, a.axisY.reversed ? t : n, v, a.axisY.reversed ? n : t, b, 0, null, C && (a.axisY.reversed ? 0 > s[k].y : 0 <= s[k].y), (a.axisY.reversed ? 0 <= s[k].y : 0 > s[k].y) && C, !1, !1, y.fillOpacity);
                                b = y.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: m, y1: n, x2: v, y2: t };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, m, n, v, t, b, 0, null, !1, !1, !1, !1);
                                (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedColumn100",
                                        dataPoint: s[k],
                                        dataSeries: y,
                                        point: { x: m + (v - m) / 2, y: 0 <= s[k].y ? n : t },
                                        direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: m, y1: Math.min(n, t), x2: v, y2: Math.max(n, t) },
                                        color: b,
                                    });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.yScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: p < a.axisY.bounds.y1 ? a.axisY.bounds.y1 : p > a.axisY.bounds.y2 ? a.axisY.bounds.y2 : p,
                };
            }
        };
        t.prototype.renderBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = 0,
                    q,
                    u,
                    l,
                    k = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    m = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0,
                    n = a.axisX.dataInfo.minDiff;
                isFinite(n) || (n = 0.3 * Math.abs(a.axisX.range));
                n = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(n) / Math.log(a.axisX.range) : Math.abs(n) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && h > m && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, m));
                !this.dataPointMaxWidth && this.dataPointMinWidth && m < h && (m = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                n < h && (n = h);
                n > m && (n = m);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var p = a.dataSeriesIndexes[m],
                        g = this.data[p],
                        f = g.dataPoints;
                    if (0 < f.length) {
                        var x = 5 < n && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < f.length; h++)
                            if ((f[h].getTime ? (l = f[h].x.getTime()) : (l = f[h].x), !(l < a.axisX.dataInfo.viewPortMin || l > a.axisX.dataInfo.viewPortMax) && "number" === typeof f[h].y)) {
                                u = a.axisX.convertValueToPixel(l);
                                q = a.axisY.convertValueToPixel(f[h].y);
                                u = a.axisX.reversed ? (u + (a.plotType.totalDataSeries * n) / 2 - (a.previousDataSeriesCount + m) * n) << 0 : (u - (a.plotType.totalDataSeries * n) / 2 + (a.previousDataSeriesCount + m) * n) << 0;
                                var y = a.axisX.reversed ? (u - n) << 0 : (u + n) << 0,
                                    s;
                                0 <= f[h].y ? (s = k) : ((s = q), (q = k));
                                b = f[h].color ? f[h].color : g._colorSet[h % g._colorSet.length];
                                da(c, a.axisY.reversed ? q : s, a.axisX.reversed ? y : u, a.axisY.reversed ? s : q, a.axisX.reversed ? u : y, b, 0, null, x, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: h, x1: s, y1: u, x2: q, y2: y };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, s, a.axisX.reversed ? y : u, q, a.axisX.reversed ? u : y, b, 0, null, !1, !1, !1, !1);
                                (f[h].indexLabel || g.indexLabel || f[h].indexLabelFormatter || g.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "bar",
                                        dataPoint: f[h],
                                        dataSeries: g,
                                        point: { x: 0 <= f[h].y ? q : s, y: u + (y - u) / 2 },
                                        direction: 0 > f[h].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(s, q), y1: u, x2: Math.max(s, q), y2: y },
                                        color: b,
                                    });
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.xScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: k < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : k > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : k,
                };
            }
        };
        t.prototype.renderStackedBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = [],
                    q = [],
                    l = [],
                    f = [],
                    k = 0,
                    m,
                    n,
                    p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.height) << 0,
                    D = a.axisX.dataInfo.minDiff;
                isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
                D = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                D < k && (D = k);
                D > g && (D = g);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var x = a.dataSeriesIndexes[g],
                        y = this.data[x],
                        s = y.dataPoints;
                    if (0 < s.length) {
                        var C = 5 < D && y.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < s.length; k++)
                            if (((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x), !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y)) {
                                n = a.axisX.convertValueToPixel(b);
                                n = (n - (a.plotType.plotUnits.length * D) / 2 + a.index * D) << 0;
                                var v = (n + D) << 0,
                                    t;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y))
                                    (l[b] = s[k].y + (l[b] ? l[b] : 0)), 0 < l[b] && ((t = h[b] ? h[b] : p), (h[b] = m = a.axisY.convertValueToPixel(l[b])));
                                else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) (f[b] = s[k].y + (f[b] ? f[b] : 0)), (m = q[b] ? q[b] : p), (q[b] = t = a.axisY.convertValueToPixel(f[b]));
                                else if (((m = a.axisY.convertValueToPixel(s[k].y)), 0 <= s[k].y)) {
                                    var w = h[b] ? h[b] : 0;
                                    t = p + w;
                                    m += w;
                                    h[b] = w + (m - t);
                                } else (w = q[b] ? q[b] : 0), (t = m - w), (m = p - w), (q[b] = w + (m - t));
                                b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                                da(c, a.axisY.reversed ? m : t, n, a.axisY.reversed ? t : m, v, b, 0, null, C, !1, !1, !1, y.fillOpacity);
                                b = y.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: t, y1: n, x2: m, y2: v };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, t, n, m, v, b, 0, null, !1, !1, !1, !1);
                                (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedBar",
                                        dataPoint: s[k],
                                        dataSeries: y,
                                        point: { x: 0 <= s[k].y ? m : t, y: n + (v - n) / 2 },
                                        direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(t, m), y1: n, x2: Math.max(t, m), y2: v },
                                        color: b,
                                    });
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.xScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p,
                };
            }
        };
        t.prototype.renderStackedBar100 = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = [],
                    q = [],
                    l = [],
                    f = [],
                    k = 0,
                    m,
                    n,
                    p = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    k = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    g = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : (0.15 * this.height) << 0,
                    D = a.axisX.dataInfo.minDiff;
                isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
                D = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range))) / a.plotType.plotUnits.length)) << 0;
                this.dataPointMaxWidth && k > g && (k = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, g));
                !this.dataPointMaxWidth && this.dataPointMinWidth && g < k && (g = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, k));
                D < k && (D = k);
                D > g && (D = g);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var x = a.dataSeriesIndexes[g],
                        y = this.data[x],
                        s = y.dataPoints;
                    if (0 < s.length) {
                        var C = 5 < D && y.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (k = 0; k < s.length; k++)
                            if (((b = s[k].x.getTime ? s[k].x.getTime() : s[k].x), !(b < a.axisX.dataInfo.viewPortMin || b > a.axisX.dataInfo.viewPortMax) && "number" === typeof s[k].y)) {
                                n = a.axisX.convertValueToPixel(b);
                                var v;
                                v = 0 !== a.dataPointYSums[b] ? 100 * (s[k].y / a.dataPointYSums[b]) : 0;
                                n = (n - (a.plotType.plotUnits.length * D) / 2 + a.index * D) << 0;
                                var t = (n + D) << 0;
                                if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 < s[k].y)) {
                                    l[b] = v + (l[b] ? l[b] : 0);
                                    if (0 >= l[b]) continue;
                                    v = h[b] ? h[b] : p;
                                    h[b] = m = a.axisY.convertValueToPixel(l[b]);
                                } else if (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length && 0 >= s[k].y) (f[b] = v + (f[b] ? f[b] : 0)), (m = q[b] ? q[b] : p), (q[b] = v = a.axisY.convertValueToPixel(f[b]));
                                else if (((m = a.axisY.convertValueToPixel(v)), 0 <= s[k].y)) {
                                    var w = h[b] ? h[b] : 0;
                                    v = p + w;
                                    m += w;
                                    a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(e.x2 - m) && (m = e.x2);
                                    h[b] = w + (m - v);
                                } else (w = q[b] ? q[b] : 0), (v = m - w), (m = p - w), a.dataSeriesIndexes.length - 1 === g && 1 >= Math.abs(e.x1 - v) && (v = e.x1), (q[b] = w + (m - v));
                                b = s[k].color ? s[k].color : y._colorSet[k % y._colorSet.length];
                                da(c, a.axisY.reversed ? m : v, n, a.axisY.reversed ? v : m, t, b, 0, null, C, !1, !1, !1, y.fillOpacity);
                                b = y.dataPointIds[k];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: x, dataPointIndex: k, x1: v, y1: n, x2: m, y2: t };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, v, n, m, t, b, 0, null, !1, !1, !1, !1);
                                (s[k].indexLabel || y.indexLabel || s[k].indexLabelFormatter || y.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "stackedBar100",
                                        dataPoint: s[k],
                                        dataSeries: y,
                                        point: { x: 0 <= s[k].y ? m : v, y: n + (t - n) / 2 },
                                        direction: 0 > s[k].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: Math.min(v, m), y1: n, x2: Math.max(v, m), y2: t },
                                        color: b,
                                    });
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return {
                    source: d,
                    dest: this.plotArea.ctx,
                    animationCallback: Q.xScaleAnimation,
                    easingFunction: Q.easing.easeOutQuart,
                    animationBase: p < a.axisY.bounds.x1 ? a.axisY.bounds.x1 : p > a.axisY.bounds.x2 ? a.axisY.bounds.x2 : p,
                };
            }
        };
        t.prototype.renderArea = function (a) {
            var d, c;
            function b() {
                w &&
                    (0 < g.lineThickness && h.stroke(),
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (t = v) : 0 > a.axisY.viewportMaximum ? (t = l.y1) : 0 < a.axisY.viewportMinimum && (t = v),
                    h.lineTo(y, t),
                    h.lineTo(w.x, t),
                    h.closePath(),
                    (h.globalAlpha = g.fillOpacity),
                    h.fill(),
                    (h.globalAlpha = 1),
                    r && (q.lineTo(y, t), q.lineTo(w.x, t), q.closePath(), q.fill()),
                    h.beginPath(),
                    h.moveTo(y, s),
                    q.beginPath(),
                    q.moveTo(y, s),
                    (w = { x: y, y: s }));
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                h = r ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var q = this._eventManager.ghostCtx,
                    l = a.axisY.lineCoordinates,
                    f = [],
                    k = this.plotArea,
                    m;
                h.save();
                r && q.save();
                h.beginPath();
                h.rect(k.x1, k.y1, k.width, k.height);
                h.clip();
                r && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = a.dataSeriesIndexes[n],
                        g = this.data[p],
                        D = g.dataPoints,
                        f = g.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: p };
                    f = U(f);
                    q.fillStyle = f;
                    f = [];
                    d = !0;
                    var x = 0,
                        y,
                        s,
                        C,
                        v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        t,
                        w = null;
                    if (0 < D.length) {
                        var B = g._colorSet[x % g._colorSet.length],
                            z = (g.lineColor = g.options.lineColor || B),
                            A = z;
                        h.fillStyle = B;
                        h.strokeStyle = z;
                        h.lineWidth = g.lineThickness;
                        c = "solid";
                        if (h.setLineDash) {
                            var K = I(g.nullDataLineDashType, g.lineThickness);
                            c = g.lineDashType;
                            var L = I(c, g.lineThickness);
                            h.setLineDash(L);
                        }
                        for (var ca = !0; x < D.length; x++)
                            if (((C = D[x].x.getTime ? D[x].x.getTime() : D[x].x), !(C < a.axisX.dataInfo.viewPortMin || (C > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !ca)))))
                                if ("number" !== typeof D[x].y) g.connectNullData || ca || d || b(), (ca = !0);
                                else {
                                    y = a.axisX.convertValueToPixel(C);
                                    s = a.axisY.convertValueToPixel(D[x].y);
                                    d || ca
                                        ? (!d && g.connectNullData
                                              ? (h.setLineDash &&
                                                    (g.options.nullDataLineDashType || (c === g.lineDashType && g.lineDashType !== g.nullDataLineDashType)) &&
                                                    ((d = y), (c = s), (y = m.x), (s = m.y), b(), h.moveTo(m.x, m.y), (y = d), (s = c), (w = m), (c = g.nullDataLineDashType), h.setLineDash(K)),
                                                h.lineTo(y, s),
                                                r && q.lineTo(y, s))
                                              : (h.beginPath(), h.moveTo(y, s), r && (q.beginPath(), q.moveTo(y, s)), (w = { x: y, y: s })),
                                          (ca = d = !1))
                                        : (h.lineTo(y, s), r && q.lineTo(y, s), 0 == x % 250 && b());
                                    m = { x: y, y: s };
                                    x < D.length - 1 &&
                                        (A !== (D[x].lineColor || z) || c !== (D[x].lineDashType || g.lineDashType)) &&
                                        (b(),
                                        (A = D[x].lineColor || z),
                                        (h.strokeStyle = A),
                                        h.setLineDash && (D[x].lineDashType ? ((c = D[x].lineDashType), h.setLineDash(I(c, g.lineThickness))) : ((c = g.lineDashType), h.setLineDash(L))));
                                    var ba = g.dataPointIds[x];
                                    this._eventManager.objectMap[ba] = { id: ba, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: x, x1: y, y1: s };
                                    0 !== D[x].markerSize &&
                                        (0 < D[x].markerSize || 0 < g.markerSize) &&
                                        ((C = g.getMarkerProperties(x, y, s, h)), f.push(C), (ba = U(ba)), r && f.push({ x: y, y: s, ctx: q, type: C.type, size: C.size, color: ba, borderColor: ba, borderThickness: C.borderThickness }));
                                    (D[x].indexLabel || g.indexLabel || D[x].indexLabelFormatter || g.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "area", dataPoint: D[x], dataSeries: g, point: { x: y, y: s }, direction: 0 > D[x].y === a.axisY.reversed ? 1 : -1, color: B });
                                }
                        b();
                        aa.drawMarkers(f);
                    }
                }
                r &&
                    (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (h.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    h.clearRect(k.x1, k.y1, k.width, k.height),
                    this._eventManager.ghostCtx.restore());
                h.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderSplineArea = function (a) {
            function d() {
                var c = w(C, 2);
                if (0 < c.length) {
                    if (0 < m.lineThickness) {
                        b.beginPath();
                        b.moveTo(c[0].x, c[0].y);
                        c[0].newStrokeStyle && (b.strokeStyle = c[0].newStrokeStyle);
                        c[0].newLineDashArray && b.setLineDash(c[0].newLineDashArray);
                        for (var g = 0; g < c.length - 3; g += 3)
                            if (
                                (b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y),
                                r && e.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y),
                                c[g + 3].newStrokeStyle || c[g + 3].newLineDashArray)
                            )
                                b.stroke(), b.beginPath(), b.moveTo(c[g + 3].x, c[g + 3].y), c[g + 3].newStrokeStyle && (b.strokeStyle = c[g + 3].newStrokeStyle), c[g + 3].newLineDashArray && b.setLineDash(c[g + 3].newLineDashArray);
                        b.stroke();
                    }
                    b.beginPath();
                    b.moveTo(c[0].x, c[0].y);
                    r && (e.beginPath(), e.moveTo(c[0].x, c[0].y));
                    for (g = 0; g < c.length - 3; g += 3) b.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y), r && e.bezierCurveTo(c[g + 1].x, c[g + 1].y, c[g + 2].x, c[g + 2].y, c[g + 3].x, c[g + 3].y);
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (y = x) : 0 > a.axisY.viewportMaximum ? (y = h.y1) : 0 < a.axisY.viewportMinimum && (y = x);
                    s = { x: c[0].x, y: c[0].y };
                    b.lineTo(c[c.length - 1].x, y);
                    b.lineTo(s.x, y);
                    b.closePath();
                    b.globalAlpha = m.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    r && (e.lineTo(c[c.length - 1].x, y), e.lineTo(s.x, y), e.closePath(), e.fill());
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    h = a.axisY.lineCoordinates,
                    q = [],
                    l = this.plotArea;
                b.save();
                r && e.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                r && (e.beginPath(), e.rect(l.x1, l.y1, l.width, l.height), e.clip());
                for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var k = a.dataSeriesIndexes[f],
                        m = this.data[k],
                        n = m.dataPoints,
                        q = m.id;
                    this._eventManager.objectMap[q] = { objectType: "dataSeries", dataSeriesIndex: k };
                    q = U(q);
                    e.fillStyle = q;
                    var q = [],
                        p = 0,
                        g,
                        D,
                        x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        y,
                        s = null,
                        C = [];
                    if (0 < n.length) {
                        var v = m._colorSet[p % m._colorSet.length],
                            t = (m.lineColor = m.options.lineColor || v),
                            Ya = t;
                        b.fillStyle = v;
                        b.strokeStyle = t;
                        b.lineWidth = m.lineThickness;
                        var B = "solid";
                        if (b.setLineDash) {
                            var z = I(m.nullDataLineDashType, m.lineThickness),
                                B = m.lineDashType,
                                A = I(B, m.lineThickness);
                            b.setLineDash(A);
                        }
                        for (D = !1; p < n.length; p++)
                            if (((g = n[p].x.getTime ? n[p].x.getTime() : n[p].x), !(g < a.axisX.dataInfo.viewPortMin || (g > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !D)))))
                                if ("number" !== typeof n[p].y)
                                    0 < p &&
                                        !D &&
                                        (m.connectNullData
                                            ? b.setLineDash && 0 < C.length && (m.options.nullDataLineDashType || !n[p - 1].lineDashType) && ((C[C.length - 1].newLineDashArray = z), (B = m.nullDataLineDashType))
                                            : (d(), (C = []))),
                                        (D = !0);
                                else {
                                    g = a.axisX.convertValueToPixel(g);
                                    D = a.axisY.convertValueToPixel(n[p].y);
                                    var K = m.dataPointIds[p];
                                    this._eventManager.objectMap[K] = { id: K, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: p, x1: g, y1: D };
                                    C[C.length] = { x: g, y: D };
                                    p < n.length - 1 &&
                                        (Ya !== (n[p].lineColor || t) || B !== (n[p].lineDashType || m.lineDashType)) &&
                                        ((Ya = n[p].lineColor || t),
                                        (C[C.length - 1].newStrokeStyle = Ya),
                                        b.setLineDash && (n[p].lineDashType ? ((B = n[p].lineDashType), (C[C.length - 1].newLineDashArray = I(B, m.lineThickness))) : ((B = m.lineDashType), (C[C.length - 1].newLineDashArray = A))));
                                    if (0 !== n[p].markerSize && (0 < n[p].markerSize || 0 < m.markerSize)) {
                                        var L = m.getMarkerProperties(p, g, D, b);
                                        q.push(L);
                                        K = U(K);
                                        r && q.push({ x: g, y: D, ctx: e, type: L.type, size: L.size, color: K, borderColor: K, borderThickness: L.borderThickness });
                                    }
                                    (n[p].indexLabel || m.indexLabel || n[p].indexLabelFormatter || m.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "splineArea", dataPoint: n[p], dataSeries: m, point: { x: g, y: D }, direction: 0 > n[p].y === a.axisY.reversed ? 1 : -1, color: v });
                                    D = !1;
                                }
                        d();
                        aa.drawMarkers(q);
                    }
                }
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(l.x1, l.y1, l.width, l.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderStepArea = function (a) {
            var d, c;
            function b() {
                w &&
                    (0 < g.lineThickness && h.stroke(),
                    a.axisY.logarithmic || (0 >= a.axisY.viewportMinimum && 0 <= a.axisY.viewportMaximum) ? (t = v) : 0 > a.axisY.viewportMaximum ? (t = l.y1) : 0 < a.axisY.viewportMinimum && (t = v),
                    h.lineTo(y, t),
                    h.lineTo(w.x, t),
                    h.closePath(),
                    (h.globalAlpha = g.fillOpacity),
                    h.fill(),
                    (h.globalAlpha = 1),
                    r && (q.lineTo(y, t), q.lineTo(w.x, t), q.closePath(), q.fill()),
                    h.beginPath(),
                    h.moveTo(y, s),
                    q.beginPath(),
                    q.moveTo(y, s),
                    (w = { x: y, y: s }));
            }
            var e = a.targetCanvasCtx || this.plotArea.ctx,
                h = r ? this._preRenderCtx : e;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var q = this._eventManager.ghostCtx,
                    l = a.axisY.lineCoordinates,
                    f = [],
                    k = this.plotArea,
                    m;
                h.save();
                r && q.save();
                h.beginPath();
                h.rect(k.x1, k.y1, k.width, k.height);
                h.clip();
                r && (q.beginPath(), q.rect(k.x1, k.y1, k.width, k.height), q.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = a.dataSeriesIndexes[n],
                        g = this.data[p],
                        D = g.dataPoints,
                        f = g.id;
                    this._eventManager.objectMap[f] = { objectType: "dataSeries", dataSeriesIndex: p };
                    f = U(f);
                    q.fillStyle = f;
                    f = [];
                    d = !0;
                    var x = 0,
                        y,
                        s,
                        C,
                        v = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                        t,
                        w = null;
                    c = !1;
                    if (0 < D.length) {
                        var B = g._colorSet[x % g._colorSet.length],
                            z = (g.lineColor = g.options.lineColor || B),
                            A = z;
                        h.fillStyle = B;
                        h.strokeStyle = z;
                        h.lineWidth = g.lineThickness;
                        var K = "solid";
                        if (h.setLineDash) {
                            var L = I(g.nullDataLineDashType, g.lineThickness),
                                K = g.lineDashType,
                                ca = I(K, g.lineThickness);
                            h.setLineDash(ca);
                        }
                        for (; x < D.length; x++)
                            if (((C = D[x].x.getTime ? D[x].x.getTime() : D[x].x), !(C < a.axisX.dataInfo.viewPortMin || (C > a.axisX.dataInfo.viewPortMax && (!g.connectNullData || !c))))) {
                                var ba = s;
                                "number" !== typeof D[x].y
                                    ? (g.connectNullData || c || d || b(), (c = !0))
                                    : ((y = a.axisX.convertValueToPixel(C)),
                                      (s = a.axisY.convertValueToPixel(D[x].y)),
                                      d || c
                                          ? (!d && g.connectNullData
                                                ? (h.setLineDash &&
                                                      (g.options.nullDataLineDashType || (K === g.lineDashType && g.lineDashType !== g.nullDataLineDashType)) &&
                                                      ((d = y), (c = s), (y = m.x), (s = m.y), b(), h.moveTo(m.x, m.y), (y = d), (s = c), (w = m), (K = g.nullDataLineDashType), h.setLineDash(L)),
                                                  h.lineTo(y, ba),
                                                  h.lineTo(y, s),
                                                  r && (q.lineTo(y, ba), q.lineTo(y, s)))
                                                : (h.beginPath(), h.moveTo(y, s), r && (q.beginPath(), q.moveTo(y, s)), (w = { x: y, y: s })),
                                            (c = d = !1))
                                          : (h.lineTo(y, ba), r && q.lineTo(y, ba), h.lineTo(y, s), r && q.lineTo(y, s), 0 == x % 250 && b()),
                                      (m = { x: y, y: s }),
                                      x < D.length - 1 &&
                                          (A !== (D[x].lineColor || z) || K !== (D[x].lineDashType || g.lineDashType)) &&
                                          (b(),
                                          (A = D[x].lineColor || z),
                                          (h.strokeStyle = A),
                                          h.setLineDash && (D[x].lineDashType ? ((K = D[x].lineDashType), h.setLineDash(I(K, g.lineThickness))) : ((K = g.lineDashType), h.setLineDash(ca)))),
                                      (C = g.dataPointIds[x]),
                                      (this._eventManager.objectMap[C] = { id: C, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: x, x1: y, y1: s }),
                                      0 !== D[x].markerSize &&
                                          (0 < D[x].markerSize || 0 < g.markerSize) &&
                                          ((ba = g.getMarkerProperties(x, y, s, h)), f.push(ba), (C = U(C)), r && f.push({ x: y, y: s, ctx: q, type: ba.type, size: ba.size, color: C, borderColor: C, borderThickness: ba.borderThickness })),
                                      (D[x].indexLabel || g.indexLabel || D[x].indexLabelFormatter || g.indexLabelFormatter) &&
                                          this._indexLabels.push({ chartType: "stepArea", dataPoint: D[x], dataSeries: g, point: { x: y, y: s }, direction: 0 > D[x].y === a.axisY.reversed ? 1 : -1, color: B }));
                            }
                        b();
                        aa.drawMarkers(f);
                    }
                }
                r &&
                    (e.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (h.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && h.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && h.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    h.clearRect(k.x1, k.y1, k.width, k.height),
                    this._eventManager.ghostCtx.restore());
                h.restore();
                return { source: e, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderStackedArea = function (a) {
            function d() {
                if (!(1 > k.length)) {
                    for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                        var a = k.pop();
                        b.lineTo(a.x, a.y);
                        r && y.lineTo(a.x, a.y);
                    }
                    b.closePath();
                    b.globalAlpha = B.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    b.beginPath();
                    r && (y.closePath(), y.fill(), y.beginPath());
                    k = [];
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    h = null,
                    q = [],
                    l = this.plotArea,
                    f = [],
                    k = [],
                    m = [],
                    n = [],
                    p = 0,
                    g,
                    D,
                    x = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    y = this._eventManager.ghostCtx,
                    s,
                    C,
                    v;
                r && y.beginPath();
                b.save();
                r && y.save();
                b.beginPath();
                b.rect(l.x1, l.y1, l.width, l.height);
                b.clip();
                r && (y.beginPath(), y.rect(l.x1, l.y1, l.width, l.height), y.clip());
                for (var e = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var w = a.dataSeriesIndexes[t],
                        B = this.data[w],
                        z = B.dataPoints;
                    B.dataPointIndexes = [];
                    for (p = 0; p < z.length; p++) (w = z[p].x.getTime ? z[p].x.getTime() : z[p].x), (B.dataPointIndexes[w] = p), e[w] || (m.push(w), (e[w] = !0));
                    m.sort(Sa);
                }
                for (t = 0; t < a.dataSeriesIndexes.length; t++) {
                    w = a.dataSeriesIndexes[t];
                    B = this.data[w];
                    z = B.dataPoints;
                    C = !0;
                    k = [];
                    p = B.id;
                    this._eventManager.objectMap[p] = { objectType: "dataSeries", dataSeriesIndex: w };
                    p = U(p);
                    y.fillStyle = p;
                    if (0 < m.length) {
                        var e = B._colorSet[0],
                            A = (B.lineColor = B.options.lineColor || e),
                            K = A;
                        b.fillStyle = e;
                        b.strokeStyle = A;
                        b.lineWidth = B.lineThickness;
                        v = "solid";
                        if (b.setLineDash) {
                            var L = I(B.nullDataLineDashType, B.lineThickness);
                            v = B.lineDashType;
                            var ca = I(v, B.lineThickness);
                            b.setLineDash(ca);
                        }
                        for (var ba = !0, p = 0; p < m.length; p++) {
                            var h = m[p],
                                ea = null,
                                ea = 0 <= B.dataPointIndexes[h] ? z[B.dataPointIndexes[h]] : { x: h, y: null };
                            if (!(h < a.axisX.dataInfo.viewPortMin || (h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ba))))
                                if ("number" !== typeof ea.y) B.connectNullData || ba || C || d(), (ba = !0);
                                else {
                                    g = a.axisX.convertValueToPixel(h);
                                    var na = f[h] ? f[h] : 0;
                                    if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length)) {
                                        n[h] = ea.y + (n[h] ? n[h] : 0);
                                        if (0 >= n[h] && a.axisY.logarithmic) continue;
                                        D = a.axisY.convertValueToPixel(n[h]);
                                    } else (D = a.axisY.convertValueToPixel(ea.y)), (D -= na);
                                    k.push({ x: g, y: x - na });
                                    f[h] = x - D;
                                    C || ba
                                        ? (!C && B.connectNullData
                                              ? (b.setLineDash &&
                                                    (B.options.nullDataLineDashType || (v === B.lineDashType && B.lineDashType !== B.nullDataLineDashType)) &&
                                                    ((C = k.pop()), (v = k[k.length - 1]), d(), b.moveTo(s.x, s.y), k.push(v), k.push(C), (v = B.nullDataLineDashType), b.setLineDash(L)),
                                                b.lineTo(g, D),
                                                r && y.lineTo(g, D))
                                              : (b.beginPath(), b.moveTo(g, D), r && (y.beginPath(), y.moveTo(g, D))),
                                          (ba = C = !1))
                                        : (b.lineTo(g, D), r && y.lineTo(g, D), 0 == p % 250 && (d(), b.moveTo(g, D), r && y.moveTo(g, D), k.push({ x: g, y: x - na })));
                                    s = { x: g, y: D };
                                    p < z.length - 1 &&
                                        (K !== (z[p].lineColor || A) || v !== (z[p].lineDashType || B.lineDashType)) &&
                                        (d(),
                                        b.beginPath(),
                                        b.moveTo(g, D),
                                        k.push({ x: g, y: x - na }),
                                        (K = z[p].lineColor || A),
                                        (b.strokeStyle = K),
                                        b.setLineDash && (z[p].lineDashType ? ((v = z[p].lineDashType), b.setLineDash(I(v, B.lineThickness))) : ((v = B.lineDashType), b.setLineDash(ca))));
                                    if (0 <= B.dataPointIndexes[h]) {
                                        var la = B.dataPointIds[B.dataPointIndexes[h]];
                                        this._eventManager.objectMap[la] = { id: la, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: B.dataPointIndexes[h], x1: g, y1: D };
                                    }
                                    0 <= B.dataPointIndexes[h] &&
                                        0 !== ea.markerSize &&
                                        (0 < ea.markerSize || 0 < B.markerSize) &&
                                        ((na = B.getMarkerProperties(B.dataPointIndexes[h], g, D, b)),
                                        q.push(na),
                                        (h = U(la)),
                                        r && q.push({ x: g, y: D, ctx: y, type: na.type, size: na.size, color: h, borderColor: h, borderThickness: na.borderThickness }));
                                    (ea.indexLabel || B.indexLabel || ea.indexLabelFormatter || B.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stackedArea", dataPoint: ea, dataSeries: B, point: { x: g, y: D }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                                }
                        }
                        d();
                        b.moveTo(g, D);
                        r && y.moveTo(g, D);
                    }
                    delete B.dataPointIndexes;
                }
                aa.drawMarkers(q);
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(l.x1, l.y1, l.width, l.height),
                    y.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderStackedArea100 = function (a) {
            function d() {
                for (0 < B.lineThickness && b.stroke(); 0 < k.length; ) {
                    var a = k.pop();
                    b.lineTo(a.x, a.y);
                    r && v.lineTo(a.x, a.y);
                }
                b.closePath();
                b.globalAlpha = B.fillOpacity;
                b.fill();
                b.globalAlpha = 1;
                b.beginPath();
                r && (v.closePath(), v.fill(), v.beginPath());
                k = [];
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    h = null,
                    q = this.plotArea,
                    l = [],
                    f = [],
                    k = [],
                    m = [],
                    n = [],
                    p = 0,
                    g,
                    D,
                    x,
                    y,
                    s,
                    C = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    v = this._eventManager.ghostCtx;
                b.save();
                r && v.save();
                b.beginPath();
                b.rect(q.x1, q.y1, q.width, q.height);
                b.clip();
                r && (v.beginPath(), v.rect(q.x1, q.y1, q.width, q.height), v.clip());
                for (var e = [], t = 0; t < a.dataSeriesIndexes.length; t++) {
                    var w = a.dataSeriesIndexes[t],
                        B = this.data[w],
                        z = B.dataPoints;
                    B.dataPointIndexes = [];
                    for (p = 0; p < z.length; p++) (w = z[p].x.getTime ? z[p].x.getTime() : z[p].x), (B.dataPointIndexes[w] = p), e[w] || (m.push(w), (e[w] = !0));
                    m.sort(Sa);
                }
                for (t = 0; t < a.dataSeriesIndexes.length; t++) {
                    w = a.dataSeriesIndexes[t];
                    B = this.data[w];
                    z = B.dataPoints;
                    y = !0;
                    e = B.id;
                    this._eventManager.objectMap[e] = { objectType: "dataSeries", dataSeriesIndex: w };
                    e = U(e);
                    v.fillStyle = e;
                    k = [];
                    if (0 < m.length) {
                        var e = B._colorSet[p % B._colorSet.length],
                            A = (B.lineColor = B.options.lineColor || e),
                            K = A;
                        b.fillStyle = e;
                        b.strokeStyle = A;
                        b.lineWidth = B.lineThickness;
                        s = "solid";
                        if (b.setLineDash) {
                            var L = I(B.nullDataLineDashType, B.lineThickness);
                            s = B.lineDashType;
                            var ca = I(s, B.lineThickness);
                            b.setLineDash(ca);
                        }
                        for (var ba = !0, p = 0; p < m.length; p++) {
                            var h = m[p],
                                ea = null,
                                ea = 0 <= B.dataPointIndexes[h] ? z[B.dataPointIndexes[h]] : { x: h, y: null };
                            if (!(h < a.axisX.dataInfo.viewPortMin || (h > a.axisX.dataInfo.viewPortMax && (!B.connectNullData || !ba))))
                                if ("number" !== typeof ea.y) B.connectNullData || ba || y || d(), (ba = !0);
                                else {
                                    var na;
                                    na = 0 !== a.dataPointYSums[h] ? 100 * (ea.y / a.dataPointYSums[h]) : 0;
                                    g = a.axisX.convertValueToPixel(h);
                                    var la = f[h] ? f[h] : 0;
                                    if (a.axisY.logarithmic || (a.axisY.scaleBreaks && 0 < a.axisY.scaleBreaks._appliedBreaks.length)) {
                                        n[h] = na + (n[h] ? n[h] : 0);
                                        if (0 >= n[h] && a.axisY.logarithmic) continue;
                                        D = a.axisY.convertValueToPixel(n[h]);
                                    } else (D = a.axisY.convertValueToPixel(na)), (D -= la);
                                    k.push({ x: g, y: C - la });
                                    f[h] = C - D;
                                    y || ba
                                        ? (!y && B.connectNullData
                                              ? (b.setLineDash &&
                                                    (B.options.nullDataLineDashType || (s === B.lineDashType && B.lineDashType !== B.nullDataLineDashType)) &&
                                                    ((y = k.pop()), (s = k[k.length - 1]), d(), b.moveTo(x.x, x.y), k.push(s), k.push(y), (s = B.nullDataLineDashType), b.setLineDash(L)),
                                                b.lineTo(g, D),
                                                r && v.lineTo(g, D))
                                              : (b.beginPath(), b.moveTo(g, D), r && (v.beginPath(), v.moveTo(g, D))),
                                          (ba = y = !1))
                                        : (b.lineTo(g, D), r && v.lineTo(g, D), 0 == p % 250 && (d(), b.moveTo(g, D), r && v.moveTo(g, D), k.push({ x: g, y: C - la })));
                                    x = { x: g, y: D };
                                    p < z.length - 1 &&
                                        (K !== (z[p].lineColor || A) || s !== (z[p].lineDashType || B.lineDashType)) &&
                                        (d(),
                                        b.beginPath(),
                                        b.moveTo(g, D),
                                        k.push({ x: g, y: C - la }),
                                        (K = z[p].lineColor || A),
                                        (b.strokeStyle = K),
                                        b.setLineDash && (z[p].lineDashType ? ((s = z[p].lineDashType), b.setLineDash(I(s, B.lineThickness))) : ((s = B.lineDashType), b.setLineDash(ca))));
                                    if (0 <= B.dataPointIndexes[h]) {
                                        var F = B.dataPointIds[B.dataPointIndexes[h]];
                                        this._eventManager.objectMap[F] = { id: F, objectType: "dataPoint", dataSeriesIndex: w, dataPointIndex: B.dataPointIndexes[h], x1: g, y1: D };
                                    }
                                    0 <= B.dataPointIndexes[h] &&
                                        0 !== ea.markerSize &&
                                        (0 < ea.markerSize || 0 < B.markerSize) &&
                                        ((la = B.getMarkerProperties(B.dataPointIndexes[h], g, D, b)),
                                        l.push(la),
                                        (h = U(F)),
                                        r && l.push({ x: g, y: D, ctx: v, type: la.type, size: la.size, color: h, borderColor: h, borderThickness: la.borderThickness }));
                                    (ea.indexLabel || B.indexLabel || ea.indexLabelFormatter || B.indexLabelFormatter) &&
                                        this._indexLabels.push({ chartType: "stackedArea100", dataPoint: ea, dataSeries: B, point: { x: g, y: D }, direction: 0 > ea.y === a.axisY.reversed ? 1 : -1, color: e });
                                }
                        }
                        d();
                        b.moveTo(g, D);
                        r && v.moveTo(g, D);
                    }
                    delete B.dataPointIndexes;
                }
                aa.drawMarkers(l);
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(q.x1, q.y1, q.width, q.height),
                    v.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderBubble = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    h,
                    q;
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var l = -Infinity, f = Infinity, k = 0; k < a.dataSeriesIndexes.length; k++)
                    for (var m = a.dataSeriesIndexes[k], n = this.data[m], p = n.dataPoints, g = 0, e = 0; e < p.length; e++)
                        (h = p[e].getTime ? (h = p[e].x.getTime()) : (h = p[e].x)), h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax || "undefined" === typeof p[e].z || ((g = p[e].z), g > l && (l = g), g < f && (f = g));
                for (var D = 25 * Math.PI, x = Math.max(Math.pow((0.25 * Math.min(b.height, b.width)) / 2, 2) * Math.PI, D), k = 0; k < a.dataSeriesIndexes.length; k++)
                    if (((m = a.dataSeriesIndexes[k]), (n = this.data[m]), (p = n.dataPoints), 0 < p.length))
                        for (c.strokeStyle = "#4572A7 ", e = 0; e < p.length; e++)
                            if (((h = p[e].getTime ? (h = p[e].x.getTime()) : (h = p[e].x)), !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof p[e].y)) {
                                h = a.axisX.convertValueToPixel(h);
                                q = a.axisY.convertValueToPixel(p[e].y);
                                var g = p[e].z,
                                    y = 2 * Math.max(Math.sqrt((l === f ? x / 2 : D + ((x - D) / (l - f)) * (g - f)) / Math.PI) << 0, 1),
                                    g = n.getMarkerProperties(e, c);
                                g.size = y;
                                c.globalAlpha = n.fillOpacity;
                                aa.drawMarker(h, q, c, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                var s = n.dataPointIds[e];
                                this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: m, dataPointIndex: e, x1: h, y1: q, size: y };
                                y = U(s);
                                r && aa.drawMarker(h, q, this._eventManager.ghostCtx, g.type, g.size, y, y, g.borderThickness);
                                (p[e].indexLabel || n.indexLabel || p[e].indexLabelFormatter || n.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "bubble",
                                        dataPoint: p[e],
                                        dataSeries: n,
                                        point: { x: h, y: q },
                                        direction: 1,
                                        bounds: { x1: h - g.size / 2, y1: q - g.size / 2, x2: h + g.size / 2, y2: q + g.size / 2 },
                                        color: null,
                                    });
                            }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(b.x1, b.y1, b.width, b.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderScatter = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this.plotArea,
                    e = 0,
                    h,
                    q;
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(b.x1, b.y1, b.width, b.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(b.x1, b.y1, b.width, b.height), this._eventManager.ghostCtx.clip());
                for (var l = 0; l < a.dataSeriesIndexes.length; l++) {
                    var f = a.dataSeriesIndexes[l],
                        k = this.data[f],
                        m = k.dataPoints;
                    if (0 < m.length) {
                        c.strokeStyle = "#4572A7 ";
                        Math.pow((0.3 * Math.min(b.height, b.width)) / 2, 2);
                        for (var n = 0, p = 0, e = 0; e < m.length; e++)
                            if (((h = m[e].getTime ? (h = m[e].x.getTime()) : (h = m[e].x)), !(h < a.axisX.dataInfo.viewPortMin || h > a.axisX.dataInfo.viewPortMax) && "number" === typeof m[e].y)) {
                                h = a.axisX.convertValueToPixel(h);
                                q = a.axisY.convertValueToPixel(m[e].y);
                                var g = k.getMarkerProperties(e, h, q, c);
                                c.globalAlpha = k.fillOpacity;
                                aa.drawMarker(g.x, g.y, g.ctx, g.type, g.size, g.color, g.borderColor, g.borderThickness);
                                c.globalAlpha = 1;
                                (Math.sqrt((n - h) * (n - h) + (p - q) * (p - q)) < Math.min(g.size, 5) && m.length > Math.min(this.plotArea.width, this.plotArea.height)) ||
                                    ((n = k.dataPointIds[e]),
                                    (this._eventManager.objectMap[n] = { id: n, objectType: "dataPoint", dataSeriesIndex: f, dataPointIndex: e, x1: h, y1: q }),
                                    (n = U(n)),
                                    r && aa.drawMarker(g.x, g.y, this._eventManager.ghostCtx, g.type, g.size, n, n, g.borderThickness),
                                    (m[e].indexLabel || k.indexLabel || m[e].indexLabelFormatter || k.indexLabelFormatter) &&
                                        this._indexLabels.push({
                                            chartType: "scatter",
                                            dataPoint: m[e],
                                            dataSeries: k,
                                            point: { x: h, y: q },
                                            direction: 1,
                                            bounds: { x1: h - g.size / 2, y1: q - g.size / 2, x2: h + g.size / 2, y2: q + g.size / 2 },
                                            color: null,
                                        }),
                                    (n = h),
                                    (p = q));
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(b.x1, b.y1, b.width, b.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderCandlestick = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    h = null,
                    q = this.plotArea,
                    f = 0,
                    E,
                    k,
                    m,
                    n,
                    p,
                    g,
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    h = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    D = a.axisX.dataInfo.minDiff;
                isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
                D = this.options.dataPointWidth ? this.dataPointWidth : (0.7 * q.width * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range))) << 0;
                this.dataPointMaxWidth && e > h && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, h));
                !this.dataPointMaxWidth && this.dataPointMinWidth && h < e && (h = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                D < e && (D = e);
                D > h && (D = h);
                c.save();
                r && b.save();
                c.beginPath();
                c.rect(q.x1, q.y1, q.width, q.height);
                c.clip();
                r && (b.beginPath(), b.rect(q.x1, q.y1, q.width, q.height), b.clip());
                for (var x = 0; x < a.dataSeriesIndexes.length; x++) {
                    var y = a.dataSeriesIndexes[x],
                        s = this.data[y],
                        C = s.dataPoints;
                    if (0 < C.length)
                        for (var v = 5 < D && s.bevelEnabled ? !0 : !1, f = 0; f < C.length; f++)
                            if (
                                (C[f].getTime ? (g = C[f].x.getTime()) : (g = C[f].x),
                                !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) &&
                                    !l(C[f].y) &&
                                    C[f].y.length &&
                                    "number" === typeof C[f].y[0] &&
                                    "number" === typeof C[f].y[1] &&
                                    "number" === typeof C[f].y[2] &&
                                    "number" === typeof C[f].y[3])
                            ) {
                                E = a.axisX.convertValueToPixel(g);
                                k = a.axisY.convertValueToPixel(C[f].y[0]);
                                m = a.axisY.convertValueToPixel(C[f].y[1]);
                                n = a.axisY.convertValueToPixel(C[f].y[2]);
                                p = a.axisY.convertValueToPixel(C[f].y[3]);
                                var t = (E - D / 2) << 0,
                                    w = (t + D) << 0,
                                    h = s.options.fallingColor ? s.fallingColor : s._colorSet[0],
                                    e = C[f].color ? C[f].color : s._colorSet[0],
                                    B = Math.round(Math.max(1, 0.15 * D)),
                                    z = 0 === B % 2 ? 0 : 0.5,
                                    A = s.dataPointIds[f];
                                this._eventManager.objectMap[A] = { id: A, objectType: "dataPoint", dataSeriesIndex: y, dataPointIndex: f, x1: t, y1: k, x2: w, y2: m, x3: E, y3: n, x4: E, y4: p, borderThickness: B, color: e };
                                c.strokeStyle = e;
                                c.beginPath();
                                c.lineWidth = B;
                                b.lineWidth = Math.max(B, 4);
                                "candlestick" === s.type
                                    ? (c.moveTo(E - z, m),
                                      c.lineTo(E - z, Math.min(k, p)),
                                      c.stroke(),
                                      c.moveTo(E - z, Math.max(k, p)),
                                      c.lineTo(E - z, n),
                                      c.stroke(),
                                      da(c, t, Math.min(k, p), w, Math.max(k, p), C[f].y[0] <= C[f].y[3] ? s.risingColor : h, B, e, v, v, !1, !1, s.fillOpacity),
                                      r &&
                                          ((e = U(A)),
                                          (b.strokeStyle = e),
                                          b.moveTo(E - z, m),
                                          b.lineTo(E - z, Math.min(k, p)),
                                          b.stroke(),
                                          b.moveTo(E - z, Math.max(k, p)),
                                          b.lineTo(E - z, n),
                                          b.stroke(),
                                          da(b, t, Math.min(k, p), w, Math.max(k, p), e, 0, null, !1, !1, !1, !1)))
                                    : "ohlc" === s.type &&
                                      (c.moveTo(E - z, m),
                                      c.lineTo(E - z, n),
                                      c.stroke(),
                                      c.beginPath(),
                                      c.moveTo(E, k),
                                      c.lineTo(t, k),
                                      c.stroke(),
                                      c.beginPath(),
                                      c.moveTo(E, p),
                                      c.lineTo(w, p),
                                      c.stroke(),
                                      r &&
                                          ((e = U(A)),
                                          (b.strokeStyle = e),
                                          b.moveTo(E - z, m),
                                          b.lineTo(E - z, n),
                                          b.stroke(),
                                          b.beginPath(),
                                          b.moveTo(E, k),
                                          b.lineTo(t, k),
                                          b.stroke(),
                                          b.beginPath(),
                                          b.moveTo(E, p),
                                          b.lineTo(w, p),
                                          b.stroke()));
                                (C[f].indexLabel || s.indexLabel || C[f].indexLabelFormatter || s.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: s.type,
                                        dataPoint: C[f],
                                        dataSeries: s,
                                        point: { x: t + (w - t) / 2, y: a.axisY.reversed ? n : m },
                                        direction: 1,
                                        bounds: { x1: t, y1: Math.min(m, n), x2: w, y2: Math.max(m, n) },
                                        color: e,
                                    });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(q.x1, q.y1, q.width, q.height),
                    b.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderBoxAndWhisker = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d,
                b = this._eventManager.ghostCtx;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    h = this.plotArea,
                    q = 0,
                    f,
                    E,
                    k,
                    m,
                    n,
                    p,
                    g,
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1,
                    q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.015 * this.width,
                    D = a.axisX.dataInfo.minDiff;
                isFinite(D) || (D = 0.3 * Math.abs(a.axisX.range));
                D = this.options.dataPointWidth ? this.dataPointWidth : (0.7 * h.width * (a.axisX.logarithmic ? Math.log(D) / Math.log(a.axisX.range) : Math.abs(D) / Math.abs(a.axisX.range))) << 0;
                this.dataPointMaxWidth && e > q && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
                !this.dataPointMaxWidth && this.dataPointMinWidth && q < e && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                D < e && (D = e);
                D > q && (D = q);
                c.save();
                r && b.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                r && (b.beginPath(), b.rect(h.x1, h.y1, h.width, h.height), b.clip());
                for (var x = !1, x = !!a.axisY.reversed, y = 0; y < a.dataSeriesIndexes.length; y++) {
                    var s = a.dataSeriesIndexes[y],
                        t = this.data[s],
                        v = t.dataPoints;
                    if (0 < v.length)
                        for (var w = 5 < D && t.bevelEnabled ? !0 : !1, q = 0; q < v.length; q++)
                            if (
                                (v[q].getTime ? (g = v[q].x.getTime()) : (g = v[q].x),
                                !(g < a.axisX.dataInfo.viewPortMin || g > a.axisX.dataInfo.viewPortMax) &&
                                    !l(v[q].y) &&
                                    v[q].y.length &&
                                    "number" === typeof v[q].y[0] &&
                                    "number" === typeof v[q].y[1] &&
                                    "number" === typeof v[q].y[2] &&
                                    "number" === typeof v[q].y[3] &&
                                    "number" === typeof v[q].y[4] &&
                                    5 === v[q].y.length)
                            ) {
                                f = a.axisX.convertValueToPixel(g);
                                E = a.axisY.convertValueToPixel(v[q].y[0]);
                                k = a.axisY.convertValueToPixel(v[q].y[1]);
                                m = a.axisY.convertValueToPixel(v[q].y[2]);
                                n = a.axisY.convertValueToPixel(v[q].y[3]);
                                p = a.axisY.convertValueToPixel(v[q].y[4]);
                                var z = (f - D / 2) << 0,
                                    B = (f + D / 2) << 0,
                                    e = v[q].color ? v[q].color : t._colorSet[0],
                                    A = Math.round(Math.max(1, 0.15 * D)),
                                    G = 0 === A % 2 ? 0 : 0.5,
                                    K = v[q].whiskerColor ? v[q].whiskerColor : v[q].color ? (t.whiskerColor ? t.whiskerColor : v[q].color) : t.whiskerColor ? t.whiskerColor : e,
                                    L = "number" === typeof v[q].whiskerThickness ? v[q].whiskerThickness : "number" === typeof t.options.whiskerThickness ? t.whiskerThickness : A,
                                    ca = v[q].whiskerDashType ? v[q].whiskerDashType : t.whiskerDashType,
                                    ba = l(v[q].whiskerLength) ? (l(t.options.whiskerLength) ? D : t.whiskerLength) : v[q].whiskerLength,
                                    ba = "number" === typeof ba ? (0 >= ba ? 0 : ba >= D ? D : ba) : "string" === typeof ba ? ((parseInt(ba) * D) / 100 > D ? D : (parseInt(ba) * D) / 100) : D,
                                    ea = 1 === Math.round(L) % 2 ? 0.5 : 0,
                                    na = v[q].stemColor ? v[q].stemColor : v[q].color ? (t.stemColor ? t.stemColor : v[q].color) : t.stemColor ? t.stemColor : e,
                                    la = "number" === typeof v[q].stemThickness ? v[q].stemThickness : "number" === typeof t.options.stemThickness ? t.stemThickness : A,
                                    F = 1 === Math.round(la) % 2 ? 0.5 : 0,
                                    R = v[q].stemDashType ? v[q].stemDashType : t.stemDashType,
                                    P = v[q].lineColor ? v[q].lineColor : v[q].color ? (t.lineColor ? t.lineColor : v[q].color) : t.lineColor ? t.lineColor : e,
                                    J = "number" === typeof v[q].lineThickness ? v[q].lineThickness : "number" === typeof t.options.lineThickness ? t.lineThickness : A,
                                    T = v[q].lineDashType ? v[q].lineDashType : t.lineDashType,
                                    O = 1 === Math.round(J) % 2 ? 0.5 : 0,
                                    N = t.upperBoxColor,
                                    M = t.lowerBoxColor,
                                    ra = l(t.options.fillOpacity) ? 1 : t.fillOpacity,
                                    S = t.dataPointIds[q];
                                this._eventManager.objectMap[S] = {
                                    id: S,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: s,
                                    dataPointIndex: q,
                                    x1: z,
                                    y1: E,
                                    x2: B,
                                    y2: k,
                                    x3: f,
                                    y3: m,
                                    x4: f,
                                    y4: n,
                                    y5: p,
                                    borderThickness: A,
                                    color: e,
                                    stemThickness: la,
                                    stemColor: na,
                                    whiskerThickness: L,
                                    whiskerLength: ba,
                                    whiskerColor: K,
                                    lineThickness: J,
                                    lineColor: P,
                                };
                                c.save();
                                0 < la &&
                                    (c.beginPath(), (c.strokeStyle = na), (c.lineWidth = la), c.setLineDash && c.setLineDash(I(R, la)), c.moveTo(f - F, k), c.lineTo(f - F, E), c.stroke(), c.moveTo(f - F, n), c.lineTo(f - F, m), c.stroke());
                                c.restore();
                                b.lineWidth = Math.max(A, 4);
                                c.beginPath();
                                da(c, z, Math.min(p, k), B, Math.max(k, p), M, 0, e, x ? w : !1, x ? !1 : w, !1, !1, ra);
                                c.beginPath();
                                da(c, z, Math.min(m, p), B, Math.max(p, m), N, 0, e, x ? !1 : w, x ? w : !1, !1, !1, ra);
                                c.beginPath();
                                c.lineWidth = A;
                                c.strokeStyle = e;
                                c.rect(z - G, Math.min(k, m) - G, B - z + 2 * G, Math.max(k, m) - Math.min(k, m) + 2 * G);
                                c.stroke();
                                c.save();
                                0 < J && (c.beginPath(), (c.globalAlpha = 1), c.setLineDash && c.setLineDash(I(T, J)), (c.strokeStyle = P), (c.lineWidth = J), c.moveTo(z, p - O), c.lineTo(B, p - O), c.stroke());
                                c.restore();
                                c.save();
                                0 < L &&
                                    (c.beginPath(),
                                    c.setLineDash && c.setLineDash(I(ca, L)),
                                    (c.strokeStyle = K),
                                    (c.lineWidth = L),
                                    c.moveTo((f - ba / 2) << 0, n - ea),
                                    c.lineTo((f + ba / 2) << 0, n - ea),
                                    c.stroke(),
                                    c.moveTo((f - ba / 2) << 0, E + ea),
                                    c.lineTo((f + ba / 2) << 0, E + ea),
                                    c.stroke());
                                c.restore();
                                r &&
                                    ((e = U(S)),
                                    (b.strokeStyle = e),
                                    (b.lineWidth = la),
                                    0 < la && (b.moveTo(f - G - F, k), b.lineTo(f - G - F, Math.max(E, n)), b.stroke(), b.moveTo(f - G - F, Math.min(E, n)), b.lineTo(f - G - F, m), b.stroke()),
                                    da(b, z, Math.max(k, m), B, Math.min(k, m), e, 0, null, !1, !1, !1, !1),
                                    0 < L && (b.beginPath(), (b.lineWidth = L), b.moveTo(f + ba / 2, n - ea), b.lineTo(f - ba / 2, n - ea), b.stroke(), b.moveTo(f + ba / 2, E + ea), b.lineTo(f - ba / 2, E + ea), b.stroke()));
                                (v[q].indexLabel || t.indexLabel || v[q].indexLabelFormatter || t.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: t.type,
                                        dataPoint: v[q],
                                        dataSeries: t,
                                        point: { x: z + (B - z) / 2, y: a.axisY.reversed ? E : n },
                                        direction: 1,
                                        bounds: { x1: z, y1: Math.min(E, n), x2: B, y2: Math.max(E, n) },
                                        color: e,
                                    });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(h.x1, h.y1, h.width, h.height),
                    b.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderRangeColumn = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = 0,
                    q,
                    f,
                    E,
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : 0.03 * this.width;
                var k = a.axisX.dataInfo.minDiff;
                isFinite(k) || (k = 0.3 * Math.abs(a.axisX.range));
                k = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.width * (a.axisX.logarithmic ? Math.log(k) / Math.log(a.axisX.range) : Math.abs(k) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && h > q && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
                !this.dataPointMaxWidth && this.dataPointMinWidth && q < h && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                k < h && (k = h);
                k > q && (k = q);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var m = 0; m < a.dataSeriesIndexes.length; m++) {
                    var n = a.dataSeriesIndexes[m],
                        p = this.data[n],
                        g = p.dataPoints;
                    if (0 < g.length)
                        for (var t = 5 < k && p.bevelEnabled ? !0 : !1, h = 0; h < g.length; h++)
                            if (
                                (g[h].getTime ? (E = g[h].x.getTime()) : (E = g[h].x),
                                !(E < a.axisX.dataInfo.viewPortMin || E > a.axisX.dataInfo.viewPortMax) && !l(g[h].y) && g[h].y.length && "number" === typeof g[h].y[0] && "number" === typeof g[h].y[1])
                            ) {
                                b = a.axisX.convertValueToPixel(E);
                                q = a.axisY.convertValueToPixel(g[h].y[0]);
                                f = a.axisY.convertValueToPixel(g[h].y[1]);
                                var x = a.axisX.reversed ? (b + (a.plotType.totalDataSeries * k) / 2 - (a.previousDataSeriesCount + m) * k) << 0 : (b - (a.plotType.totalDataSeries * k) / 2 + (a.previousDataSeriesCount + m) * k) << 0,
                                    y = a.axisX.reversed ? (x - k) << 0 : (x + k) << 0,
                                    b = g[h].color ? g[h].color : p._colorSet[h % p._colorSet.length];
                                if (q > f) {
                                    var s = q;
                                    q = f;
                                    f = s;
                                }
                                s = p.dataPointIds[h];
                                this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: n, dataPointIndex: h, x1: x, y1: q, x2: y, y2: f };
                                da(c, a.axisX.reversed ? y : x, q, a.axisX.reversed ? x : y, f, b, 0, b, t, t, !1, !1, p.fillOpacity);
                                b = U(s);
                                r && da(this._eventManager.ghostCtx, a.axisX.reversed ? y : x, q, a.axisX.reversed ? x : y, f, b, 0, null, !1, !1, !1, !1);
                                if (g[h].indexLabel || p.indexLabel || g[h].indexLabelFormatter || p.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeColumn",
                                        dataPoint: g[h],
                                        dataSeries: p,
                                        indexKeyword: 0,
                                        point: { x: x + (y - x) / 2, y: g[h].y[1] >= g[h].y[0] ? f : q },
                                        direction: g[h].y[1] >= g[h].y[0] ? -1 : 1,
                                        bounds: { x1: x, y1: Math.min(q, f), x2: y, y2: Math.max(q, f) },
                                        color: b,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "rangeColumn",
                                            dataPoint: g[h],
                                            dataSeries: p,
                                            indexKeyword: 1,
                                            point: { x: x + (y - x) / 2, y: g[h].y[1] >= g[h].y[0] ? q : f },
                                            direction: g[h].y[1] >= g[h].y[0] ? 1 : -1,
                                            bounds: { x1: x, y1: Math.min(q, f), x2: y, y2: Math.max(q, f) },
                                            color: b,
                                        });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderError = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d,
                b = a.axisY._position ? ("left" === a.axisY._position || "right" === a.axisY._position ? !1 : !0) : !1;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = null,
                    h = !1,
                    q = this.plotArea,
                    f = 0,
                    E,
                    k,
                    m,
                    n,
                    p,
                    g,
                    t,
                    x = a.axisX.dataInfo.minDiff;
                isFinite(x) || (x = 0.3 * Math.abs(a.axisX.range));
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(q.x1, q.y1, q.width, q.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(q.x1, q.y1, q.width, q.height), this._eventManager.ghostCtx.clip());
                for (var y = 0, s = 0; s < this.data.length; s++) !this.data[s].type.match(/(bar|column)/gi) || !this.data[s].visible || (this.data[s].type.match(/(stacked)/gi) && y) || y++;
                for (var C = 0; C < a.dataSeriesIndexes.length; C++) {
                    var v = a.dataSeriesIndexes[C],
                        w = this.data[v],
                        A = w.dataPoints,
                        B = l(w._linkedSeries) ? !1 : w._linkedSeries.type.match(/(bar|column)/gi) && w._linkedSeries.visible ? !0 : !1,
                        I = 0;
                    if (B)
                        for (e = w._linkedSeries.id, s = 0; s < e; s++)
                            !this.data[s].type.match(/(bar|column)/gi) || !this.data[s].visible || (this.data[s].type.match(/(stacked)/gi) && I) || (this.data[s].type.match(/(range)/gi) && (h = !0), I++);
                    e = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                    f = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : b ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? y : 1))) << 0 : 0.3 * this.width;
                    h &&
                        (f = this.options.dataPointMaxWidth
                            ? this.dataPointMaxWidth
                            : this.options.dataPointWidth
                            ? this.dataPointWidth
                            : b
                            ? Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / (B ? y : 1))) << 0
                            : 0.03 * this.width);
                    s = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * (((b ? q.height : q.width) * (a.axisX.logarithmic ? Math.log(x) / Math.log(a.axisX.range) : Math.abs(x) / Math.abs(a.axisX.range))) / (B ? y : 1))) << 0;
                    this.dataPointMaxWidth && e > f && (e = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, f));
                    !this.dataPointMaxWidth && this.dataPointMinWidth && f < e && (f = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, e));
                    s < e && (s = e);
                    s > f && (s = f);
                    if (0 < A.length)
                        for (var G = w._colorSet, f = 0; f < A.length; f++) {
                            var e = (w.lineColor = w.options.color ? w.options.color : G[0]),
                                K = {
                                    color: A[f].whiskerColor ? A[f].whiskerColor : A[f].color ? (w.whiskerColor ? w.whiskerColor : A[f].color) : w.whiskerColor ? w.whiskerColor : e,
                                    thickness: l(A[f].whiskerThickness) ? w.whiskerThickness : A[f].whiskerThickness,
                                    dashType: A[f].whiskerDashType ? A[f].whiskerDashType : w.whiskerDashType,
                                    length: l(A[f].whiskerLength) ? (l(w.options.whiskerLength) ? s : w.options.whiskerLength) : A[f].whiskerLength,
                                    trimLength: l(A[f].whiskerLength) ? (l(w.options.whiskerLength) ? 50 : 0) : 0,
                                };
                            K.length = "number" === typeof K.length ? (0 >= K.length ? 0 : K.length >= s ? s : K.length) : "string" === typeof K.length ? ((parseInt(K.length) * s) / 100 > s ? s : (parseInt(K.length) * s) / 100 > s) : s;
                            K.thickness = "number" === typeof K.thickness ? (0 > K.thickness ? 0 : Math.round(K.thickness)) : 2;
                            var L = {
                                color: A[f].stemColor ? A[f].stemColor : A[f].color ? (w.stemColor ? w.stemColor : A[f].color) : w.stemColor ? w.stemColor : e,
                                thickness: A[f].stemThickness ? A[f].stemThickness : w.stemThickness,
                                dashType: A[f].stemDashType ? A[f].stemDashType : w.stemDashType,
                            };
                            L.thickness = "number" === typeof L.thickness ? (0 > L.thickness ? 0 : Math.round(L.thickness)) : 2;
                            A[f].getTime ? (t = A[f].x.getTime()) : (t = A[f].x);
                            if (!(t < a.axisX.dataInfo.viewPortMin || t > a.axisX.dataInfo.viewPortMax) && !l(A[f].y) && A[f].y.length && "number" === typeof A[f].y[0] && "number" === typeof A[f].y[1]) {
                                var ca = a.axisX.convertValueToPixel(t);
                                b ? (k = ca) : (E = ca);
                                ca = a.axisY.convertValueToPixel(A[f].y[0]);
                                b ? (m = ca) : (p = ca);
                                ca = a.axisY.convertValueToPixel(A[f].y[1]);
                                b ? (n = ca) : (g = ca);
                                b
                                    ? ((p = a.axisX.reversed ? (k + ((B ? y : 1) * s) / 2 - (B ? I - 1 : 0) * s) << 0 : (k - ((B ? y : 1) * s) / 2 + (B ? I - 1 : 0) * s) << 0), (g = a.axisX.reversed ? (p - s) << 0 : (p + s) << 0))
                                    : ((m = a.axisX.reversed ? (E + ((B ? y : 1) * s) / 2 - (B ? I - 1 : 0) * s) << 0 : (E - ((B ? y : 1) * s) / 2 + (B ? I - 1 : 0) * s) << 0), (n = a.axisX.reversed ? (m - s) << 0 : (m + s) << 0));
                                !b && p > g && ((ca = p), (p = g), (g = ca));
                                b && m > n && ((ca = m), (m = n), (n = ca));
                                ca = w.dataPointIds[f];
                                this._eventManager.objectMap[ca] = {
                                    id: ca,
                                    objectType: "dataPoint",
                                    dataSeriesIndex: v,
                                    dataPointIndex: f,
                                    x1: Math.min(m, n),
                                    y1: Math.min(p, g),
                                    x2: Math.max(n, m),
                                    y2: Math.max(g, p),
                                    isXYSwapped: b,
                                    stemProperties: L,
                                    whiskerProperties: K,
                                };
                                z(c, Math.min(m, n), Math.min(p, g), Math.max(n, m), Math.max(g, p), e, K, L, b);
                                r && z(this._eventManager.ghostCtx, m, p, n, g, e, K, L, b);
                                if (A[f].indexLabel || w.indexLabel || A[f].indexLabelFormatter || w.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "error",
                                        dataPoint: A[f],
                                        dataSeries: w,
                                        indexKeyword: 0,
                                        point: { x: b ? (A[f].y[1] >= A[f].y[0] ? m : n) : m + (n - m) / 2, y: b ? p + (g - p) / 2 : A[f].y[1] >= A[f].y[0] ? g : p },
                                        direction: A[f].y[1] >= A[f].y[0] ? -1 : 1,
                                        bounds: { x1: b ? Math.min(m, n) : m, y1: b ? p : Math.min(p, g), x2: b ? Math.max(m, n) : n, y2: b ? g : Math.max(p, g) },
                                        color: e,
                                        axisSwapped: b,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "error",
                                            dataPoint: A[f],
                                            dataSeries: w,
                                            indexKeyword: 1,
                                            point: { x: b ? (A[f].y[1] >= A[f].y[0] ? n : m) : m + (n - m) / 2, y: b ? p + (g - p) / 2 : A[f].y[1] >= A[f].y[0] ? p : g },
                                            direction: A[f].y[1] >= A[f].y[0] ? 1 : -1,
                                            bounds: { x1: b ? Math.min(m, n) : m, y1: b ? p : Math.min(p, g), x2: b ? Math.max(m, n) : n, y2: b ? g : Math.max(p, g) },
                                            color: e,
                                            axisSwapped: b,
                                        });
                            }
                        }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(q.x1, q.y1, q.width, q.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderRangeBar = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = null,
                    e = this.plotArea,
                    h = 0,
                    q,
                    f,
                    E,
                    k,
                    h = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                q = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.height, 0.9 * (this.plotArea.height / a.plotType.totalDataSeries)) << 0;
                var m = a.axisX.dataInfo.minDiff;
                isFinite(m) || (m = 0.3 * Math.abs(a.axisX.range));
                m = this.options.dataPointWidth ? this.dataPointWidth : (0.9 * ((e.height * (a.axisX.logarithmic ? Math.log(m) / Math.log(a.axisX.range) : Math.abs(m) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && h > q && (h = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, q));
                !this.dataPointMaxWidth && this.dataPointMinWidth && q < h && (q = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, h));
                m < h && (m = h);
                m > q && (m = q);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(e.x1, e.y1, e.width, e.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(e.x1, e.y1, e.width, e.height), this._eventManager.ghostCtx.clip());
                for (var n = 0; n < a.dataSeriesIndexes.length; n++) {
                    var p = a.dataSeriesIndexes[n],
                        g = this.data[p],
                        t = g.dataPoints;
                    if (0 < t.length) {
                        var x = 5 < m && g.bevelEnabled ? !0 : !1;
                        c.strokeStyle = "#4572A7 ";
                        for (h = 0; h < t.length; h++)
                            if (
                                (t[h].getTime ? (k = t[h].x.getTime()) : (k = t[h].x),
                                !(k < a.axisX.dataInfo.viewPortMin || k > a.axisX.dataInfo.viewPortMax) && !l(t[h].y) && t[h].y.length && "number" === typeof t[h].y[0] && "number" === typeof t[h].y[1])
                            ) {
                                q = a.axisY.convertValueToPixel(t[h].y[0]);
                                f = a.axisY.convertValueToPixel(t[h].y[1]);
                                E = a.axisX.convertValueToPixel(k);
                                E = a.axisX.reversed ? (E + (a.plotType.totalDataSeries * m) / 2 - (a.previousDataSeriesCount + n) * m) << 0 : (E - (a.plotType.totalDataSeries * m) / 2 + (a.previousDataSeriesCount + n) * m) << 0;
                                var y = a.axisX.reversed ? (E - m) << 0 : (E + m) << 0;
                                q > f && ((b = q), (q = f), (f = b));
                                b = t[h].color ? t[h].color : g._colorSet[h % g._colorSet.length];
                                da(c, q, a.axisX.reversed ? y : E, f, a.axisX.reversed ? E : y, b, 0, null, x, !1, !1, !1, g.fillOpacity);
                                b = g.dataPointIds[h];
                                this._eventManager.objectMap[b] = { id: b, objectType: "dataPoint", dataSeriesIndex: p, dataPointIndex: h, x1: q, y1: E, x2: f, y2: y };
                                b = U(b);
                                r && da(this._eventManager.ghostCtx, q, a.axisX.reversed ? y : E, f, a.axisX.reversed ? E : y, b, 0, null, !1, !1, !1, !1);
                                if (t[h].indexLabel || g.indexLabel || t[h].indexLabelFormatter || g.indexLabelFormatter)
                                    this._indexLabels.push({
                                        chartType: "rangeBar",
                                        dataPoint: t[h],
                                        dataSeries: g,
                                        indexKeyword: 0,
                                        point: { x: t[h].y[1] >= t[h].y[0] ? q : f, y: E + (y - E) / 2 },
                                        direction: t[h].y[1] >= t[h].y[0] ? -1 : 1,
                                        bounds: { x1: Math.min(q, f), y1: E, x2: Math.max(q, f), y2: y },
                                        color: b,
                                    }),
                                        this._indexLabels.push({
                                            chartType: "rangeBar",
                                            dataPoint: t[h],
                                            dataSeries: g,
                                            indexKeyword: 1,
                                            point: { x: t[h].y[1] >= t[h].y[0] ? f : q, y: E + (y - E) / 2 },
                                            direction: t[h].y[1] >= t[h].y[0] ? 1 : -1,
                                            bounds: { x1: Math.min(q, f), y1: E, x2: Math.max(q, f), y2: y },
                                            color: b,
                                        });
                            }
                    }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(e.x1, e.y1, e.width, e.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        t.prototype.renderRangeArea = function (a) {
            function d() {
                if (w) {
                    for (var a = null, c = l.length - 1; 0 <= c; c--) (a = l[c]), b.lineTo(a.x, a.y2), e.lineTo(a.x, a.y2);
                    b.closePath();
                    b.globalAlpha = m.fillOpacity;
                    b.fill();
                    b.globalAlpha = 1;
                    e.fill();
                    if (0 < m.lineThickness) {
                        b.beginPath();
                        b.moveTo(a.x, a.y2);
                        for (c = 0; c < l.length; c++) (a = l[c]), b.lineTo(a.x, a.y2);
                        b.moveTo(l[0].x, l[0].y1);
                        for (c = 0; c < l.length; c++) (a = l[c]), b.lineTo(a.x, a.y1);
                        b.stroke();
                    }
                    b.beginPath();
                    b.moveTo(t, x);
                    e.beginPath();
                    e.moveTo(t, x);
                    w = { x: t, y: x };
                    l = [];
                    l.push({ x: t, y1: x, y2: y });
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    h = [],
                    q = this.plotArea;
                b.save();
                r && e.save();
                b.beginPath();
                b.rect(q.x1, q.y1, q.width, q.height);
                b.clip();
                r && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
                for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var l = [],
                        k = a.dataSeriesIndexes[f],
                        m = this.data[k],
                        n = m.dataPoints,
                        h = m.id;
                    this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: k };
                    h = U(h);
                    e.fillStyle = h;
                    var h = [],
                        p = !0,
                        g = 0,
                        t,
                        x,
                        y,
                        s,
                        w = null;
                    if (0 < n.length) {
                        var v = m._colorSet[g % m._colorSet.length],
                            z = (m.lineColor = m.options.lineColor || v),
                            A = z;
                        b.fillStyle = v;
                        b.strokeStyle = z;
                        b.lineWidth = m.lineThickness;
                        var B = "solid";
                        if (b.setLineDash) {
                            var G = I(m.nullDataLineDashType, m.lineThickness),
                                B = m.lineDashType,
                                J = I(B, m.lineThickness);
                            b.setLineDash(J);
                        }
                        for (var K = !0; g < n.length; g++)
                            if (((s = n[g].x.getTime ? n[g].x.getTime() : n[g].x), !(s < a.axisX.dataInfo.viewPortMin || (s > a.axisX.dataInfo.viewPortMax && (!m.connectNullData || !K)))))
                                if (null !== n[g].y && n[g].y.length && "number" === typeof n[g].y[0] && "number" === typeof n[g].y[1]) {
                                    t = a.axisX.convertValueToPixel(s);
                                    x = a.axisY.convertValueToPixel(n[g].y[0]);
                                    y = a.axisY.convertValueToPixel(n[g].y[1]);
                                    p || K
                                        ? (m.connectNullData && !p
                                              ? (b.setLineDash &&
                                                    (m.options.nullDataLineDashType || (B === m.lineDashType && m.lineDashType !== m.nullDataLineDashType)) &&
                                                    ((l[l.length - 1].newLineDashArray = J), (B = m.nullDataLineDashType), b.setLineDash(G)),
                                                b.lineTo(t, x),
                                                r && e.lineTo(t, x),
                                                l.push({ x: t, y1: x, y2: y }))
                                              : (b.beginPath(), b.moveTo(t, x), (w = { x: t, y: x }), (l = []), l.push({ x: t, y1: x, y2: y }), r && (e.beginPath(), e.moveTo(t, x))),
                                          (K = p = !1))
                                        : (b.lineTo(t, x), l.push({ x: t, y1: x, y2: y }), r && e.lineTo(t, x), 0 == g % 250 && d());
                                    s = m.dataPointIds[g];
                                    this._eventManager.objectMap[s] = { id: s, objectType: "dataPoint", dataSeriesIndex: k, dataPointIndex: g, x1: t, y1: x, y2: y };
                                    g < n.length - 1 &&
                                        (A !== (n[g].lineColor || z) || B !== (n[g].lineDashType || m.lineDashType)) &&
                                        (d(),
                                        (A = n[g].lineColor || z),
                                        (l[l.length - 1].newStrokeStyle = A),
                                        (b.strokeStyle = A),
                                        b.setLineDash &&
                                            (n[g].lineDashType
                                                ? ((B = n[g].lineDashType), (l[l.length - 1].newLineDashArray = I(B, m.lineThickness)), b.setLineDash(l[l.length - 1].newLineDashArray))
                                                : ((B = m.lineDashType), (l[l.length - 1].newLineDashArray = J), b.setLineDash(J))));
                                    if (0 !== n[g].markerSize && (0 < n[g].markerSize || 0 < m.markerSize)) {
                                        var L = m.getMarkerProperties(g, t, y, b);
                                        h.push(L);
                                        var ca = U(s);
                                        r && h.push({ x: t, y: y, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                                        L = m.getMarkerProperties(g, t, x, b);
                                        h.push(L);
                                        ca = U(s);
                                        r && h.push({ x: t, y: x, ctx: e, type: L.type, size: L.size, color: ca, borderColor: ca, borderThickness: L.borderThickness });
                                    }
                                    if (n[g].indexLabel || m.indexLabel || n[g].indexLabelFormatter || m.indexLabelFormatter)
                                        this._indexLabels.push({ chartType: "rangeArea", dataPoint: n[g], dataSeries: m, indexKeyword: 0, point: { x: t, y: x }, direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? -1 : 1, color: v }),
                                            this._indexLabels.push({
                                                chartType: "rangeArea",
                                                dataPoint: n[g],
                                                dataSeries: m,
                                                indexKeyword: 1,
                                                point: { x: t, y: y },
                                                direction: n[g].y[0] > n[g].y[1] === a.axisY.reversed ? 1 : -1,
                                                color: v,
                                            });
                                } else K || p || d(), (K = !0);
                        d();
                        aa.drawMarkers(h);
                    }
                }
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(q.x1, q.y1, q.width, q.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderRangeSplineArea = function (a) {
            function d(a, c) {
                var g = w(x, 2);
                if (0 < g.length) {
                    if (0 < k.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(g[0].x, g[0].y);
                        for (var d = 0; d < g.length - 3; d += 3) {
                            if (g[d].newStrokeStyle || g[d].newLineDashArray)
                                b.stroke(), b.beginPath(), b.moveTo(g[d].x, g[d].y), g[d].newStrokeStyle && (b.strokeStyle = g[d].newStrokeStyle), g[d].newLineDashArray && b.setLineDash(g[d].newLineDashArray);
                            b.bezierCurveTo(g[d + 1].x, g[d + 1].y, g[d + 2].x, g[d + 2].y, g[d + 3].x, g[d + 3].y);
                        }
                    }
                    b.beginPath();
                    b.moveTo(g[0].x, g[0].y);
                    r && (e.beginPath(), e.moveTo(g[0].x, g[0].y));
                    for (d = 0; d < g.length - 3; d += 3) b.bezierCurveTo(g[d + 1].x, g[d + 1].y, g[d + 2].x, g[d + 2].y, g[d + 3].x, g[d + 3].y), r && e.bezierCurveTo(g[d + 1].x, g[d + 1].y, g[d + 2].x, g[d + 2].y, g[d + 3].x, g[d + 3].y);
                    g = w(y, 2);
                    b.lineTo(y[y.length - 1].x, y[y.length - 1].y);
                    for (d = g.length - 1; 2 < d; d -= 3) b.bezierCurveTo(g[d - 1].x, g[d - 1].y, g[d - 2].x, g[d - 2].y, g[d - 3].x, g[d - 3].y), r && e.bezierCurveTo(g[d - 1].x, g[d - 1].y, g[d - 2].x, g[d - 2].y, g[d - 3].x, g[d - 3].y);
                    b.closePath();
                    b.globalAlpha = k.fillOpacity;
                    b.fill();
                    r && (e.closePath(), e.fill());
                    b.globalAlpha = 1;
                    if (0 < k.lineThickness) {
                        b.strokeStyle = c;
                        b.setLineDash && b.setLineDash(a);
                        b.beginPath();
                        b.moveTo(g[0].x, g[0].y);
                        for (var h = (d = 0); d < g.length - 3; d += 3, h++) {
                            if (x[h].newStrokeStyle || x[h].newLineDashArray)
                                b.stroke(), b.beginPath(), b.moveTo(g[d].x, g[d].y), x[h].newStrokeStyle && (b.strokeStyle = x[h].newStrokeStyle), x[h].newLineDashArray && b.setLineDash(x[h].newLineDashArray);
                            b.bezierCurveTo(g[d + 1].x, g[d + 1].y, g[d + 2].x, g[d + 2].y, g[d + 3].x, g[d + 3].y);
                        }
                        g = w(x, 2);
                        b.moveTo(g[0].x, g[0].y);
                        for (h = d = 0; d < g.length - 3; d += 3, h++) {
                            if (x[h].newStrokeStyle || x[h].newLineDashArray)
                                b.stroke(), b.beginPath(), b.moveTo(g[d].x, g[d].y), x[h].newStrokeStyle && (b.strokeStyle = x[h].newStrokeStyle), x[h].newLineDashArray && b.setLineDash(x[h].newLineDashArray);
                            b.bezierCurveTo(g[d + 1].x, g[d + 1].y, g[d + 2].x, g[d + 2].y, g[d + 3].x, g[d + 3].y);
                        }
                        b.stroke();
                    }
                    b.beginPath();
                }
            }
            var c = a.targetCanvasCtx || this.plotArea.ctx,
                b = r ? this._preRenderCtx : c;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var e = this._eventManager.ghostCtx,
                    h = [],
                    q = this.plotArea;
                b.save();
                r && e.save();
                b.beginPath();
                b.rect(q.x1, q.y1, q.width, q.height);
                b.clip();
                r && (e.beginPath(), e.rect(q.x1, q.y1, q.width, q.height), e.clip());
                for (var f = 0; f < a.dataSeriesIndexes.length; f++) {
                    var l = a.dataSeriesIndexes[f],
                        k = this.data[l],
                        m = k.dataPoints,
                        h = k.id;
                    this._eventManager.objectMap[h] = { objectType: "dataSeries", dataSeriesIndex: l };
                    h = U(h);
                    e.fillStyle = h;
                    var h = [],
                        n = 0,
                        p,
                        g,
                        t,
                        x = [],
                        y = [];
                    if (0 < m.length) {
                        var s = k._colorSet[n % k._colorSet.length],
                            C = (k.lineColor = k.options.lineColor || s),
                            v = C;
                        b.fillStyle = s;
                        b.lineWidth = k.lineThickness;
                        var z = "solid",
                            A;
                        if (b.setLineDash) {
                            var B = I(k.nullDataLineDashType, k.lineThickness),
                                z = k.lineDashType;
                            A = I(z, k.lineThickness);
                        }
                        for (g = !1; n < m.length; n++)
                            if (((p = m[n].x.getTime ? m[n].x.getTime() : m[n].x), !(p < a.axisX.dataInfo.viewPortMin || (p > a.axisX.dataInfo.viewPortMax && (!k.connectNullData || !g)))))
                                if (null !== m[n].y && m[n].y.length && "number" === typeof m[n].y[0] && "number" === typeof m[n].y[1]) {
                                    p = a.axisX.convertValueToPixel(p);
                                    g = a.axisY.convertValueToPixel(m[n].y[0]);
                                    t = a.axisY.convertValueToPixel(m[n].y[1]);
                                    var G = k.dataPointIds[n];
                                    this._eventManager.objectMap[G] = { id: G, objectType: "dataPoint", dataSeriesIndex: l, dataPointIndex: n, x1: p, y1: g, y2: t };
                                    x[x.length] = { x: p, y: g };
                                    y[y.length] = { x: p, y: t };
                                    n < m.length - 1 &&
                                        (v !== (m[n].lineColor || C) || z !== (m[n].lineDashType || k.lineDashType)) &&
                                        ((v = m[n].lineColor || C),
                                        (x[x.length - 1].newStrokeStyle = v),
                                        b.setLineDash && (m[n].lineDashType ? ((z = m[n].lineDashType), (x[x.length - 1].newLineDashArray = I(z, k.lineThickness))) : ((z = k.lineDashType), (x[x.length - 1].newLineDashArray = A))));
                                    if (0 !== m[n].markerSize && (0 < m[n].markerSize || 0 < k.markerSize)) {
                                        var J = k.getMarkerProperties(n, p, g, b);
                                        h.push(J);
                                        var K = U(G);
                                        r && h.push({ x: p, y: g, ctx: e, type: J.type, size: J.size, color: K, borderColor: K, borderThickness: J.borderThickness });
                                        J = k.getMarkerProperties(n, p, t, b);
                                        h.push(J);
                                        K = U(G);
                                        r && h.push({ x: p, y: t, ctx: e, type: J.type, size: J.size, color: K, borderColor: K, borderThickness: J.borderThickness });
                                    }
                                    if (m[n].indexLabel || k.indexLabel || m[n].indexLabelFormatter || k.indexLabelFormatter)
                                        this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 0, point: { x: p, y: g }, direction: m[n].y[0] <= m[n].y[1] ? -1 : 1, color: s }),
                                            this._indexLabels.push({ chartType: "rangeSplineArea", dataPoint: m[n], dataSeries: k, indexKeyword: 1, point: { x: p, y: t }, direction: m[n].y[0] <= m[n].y[1] ? 1 : -1, color: s });
                                    g = !1;
                                } else
                                    0 < n &&
                                        !g &&
                                        (k.connectNullData
                                            ? b.setLineDash && 0 < x.length && (k.options.nullDataLineDashType || !m[n - 1].lineDashType) && ((x[x.length - 1].newLineDashArray = B), (z = k.nullDataLineDashType))
                                            : (d(A, C), (x = []), (y = []))),
                                        (g = !0);
                        d(A, C);
                        aa.drawMarkers(h);
                    }
                }
                r &&
                    (c.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (b.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && b.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && b.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    b.clearRect(q.x1, q.y1, q.width, q.height),
                    this._eventManager.ghostCtx.restore());
                b.restore();
                return { source: c, dest: this.plotArea.ctx, animationCallback: Q.xClipAnimation, easingFunction: Q.easing.linear, animationBase: 0 };
            }
        };
        t.prototype.renderWaterfall = function (a) {
            var d = a.targetCanvasCtx || this.plotArea.ctx,
                c = r ? this._preRenderCtx : d;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var b = this._eventManager.ghostCtx,
                    e = null,
                    h = this.plotArea,
                    q = 0,
                    f,
                    l,
                    k,
                    m,
                    n = a.axisY.convertValueToPixel(a.axisY.logarithmic ? a.axisY.viewportMinimum : 0),
                    q = this.options.dataPointMinWidth ? this.dataPointMinWidth : this.options.dataPointWidth ? this.dataPointWidth : 1;
                l = this.options.dataPointMaxWidth ? this.dataPointMaxWidth : this.options.dataPointWidth ? this.dataPointWidth : Math.min(0.15 * this.width, 0.9 * (this.plotArea.width / a.plotType.totalDataSeries)) << 0;
                var p = a.axisX.dataInfo.minDiff;
                isFinite(p) || (p = 0.3 * Math.abs(a.axisX.range));
                p = this.options.dataPointWidth ? this.dataPointWidth : (0.6 * ((h.width * (a.axisX.logarithmic ? Math.log(p) / Math.log(a.axisX.range) : Math.abs(p) / Math.abs(a.axisX.range))) / a.plotType.totalDataSeries)) << 0;
                this.dataPointMaxWidth && q > l && (q = Math.min(this.options.dataPointWidth ? this.dataPointWidth : Infinity, l));
                !this.dataPointMaxWidth && this.dataPointMinWidth && l < q && (l = Math.max(this.options.dataPointWidth ? this.dataPointWidth : -Infinity, q));
                p < q && (p = q);
                p > l && (p = l);
                c.save();
                r && this._eventManager.ghostCtx.save();
                c.beginPath();
                c.rect(h.x1, h.y1, h.width, h.height);
                c.clip();
                r && (this._eventManager.ghostCtx.beginPath(), this._eventManager.ghostCtx.rect(h.x1, h.y1, h.width, h.height), this._eventManager.ghostCtx.clip());
                for (var g = 0; g < a.dataSeriesIndexes.length; g++) {
                    var t = a.dataSeriesIndexes[g],
                        x = this.data[t],
                        y = x.dataPoints,
                        e = x._colorSet[0];
                    x.risingColor = x.options.risingColor ? x.options.risingColor : e;
                    x.fallingColor = x.options.fallingColor ? x.options.fallingColor : "#e40a0a";
                    var s = "number" === typeof x.options.lineThickness ? Math.round(x.lineThickness) : 1,
                        w = 1 === Math.round(s) % 2 ? -0.5 : 0;
                    if (0 < y.length)
                        for (var v = 5 < p && x.bevelEnabled ? !0 : !1, z = !1, A = null, B = null, q = 0; q < y.length; q++)
                            if ((y[q].getTime ? (m = y[q].x.getTime()) : (m = y[q].x), "number" !== typeof y[q].y)) {
                                if (0 < q && !z && x.connectNullData) var G = x.options.nullDataLineDashType || !y[q - 1].lineDashType ? x.nullDataLineDashType : y[q - 1].lineDashType;
                                z = !0;
                            } else {
                                f = a.axisX.convertValueToPixel(m);
                                l = 0 === x.dataPointEOs[q].cumulativeSum ? n : a.axisY.convertValueToPixel(x.dataPointEOs[q].cumulativeSum);
                                k = 0 === x.dataPointEOs[q].cumulativeSumYStartValue ? n : a.axisY.convertValueToPixel(x.dataPointEOs[q].cumulativeSumYStartValue);
                                f = a.axisX.reversed ? (f + (a.plotType.totalDataSeries * p) / 2 - (a.previousDataSeriesCount + g) * p) << 0 : (f - (a.plotType.totalDataSeries * p) / 2 + (a.previousDataSeriesCount + g) * p) << 0;
                                var J = a.axisX.reversed ? (f - p) << 0 : (f + p) << 0;
                                l > k && ((e = l), (l = k), (k = e));
                                a.axisY.reversed && ((e = l), (l = k), (k = e));
                                e = x.dataPointIds[q];
                                this._eventManager.objectMap[e] = { id: e, objectType: "dataPoint", dataSeriesIndex: t, dataPointIndex: q, x1: f, y1: l, x2: J, y2: k };
                                var K = y[q].color ? y[q].color : 0 < y[q].y ? x.risingColor : x.fallingColor;
                                da(c, a.axisX.reversed ? J : f, a.axisY.reversed ? k : l, a.axisX.reversed ? f : J, a.axisY.reversed ? l : k, K, 0, K, v, v, !1, !1, x.fillOpacity);
                                e = U(e);
                                r && da(this._eventManager.ghostCtx, a.axisX.reversed ? J : f, l, a.axisX.reversed ? f : J, k, e, 0, null, !1, !1, !1, !1);
                                var L,
                                    K = f;
                                L =
                                    ("undefined" !== typeof y[q].isIntermediateSum && !0 === y[q].isIntermediateSum) || ("undefined" !== typeof y[q].isCumulativeSum && !0 === y[q].isCumulativeSum)
                                        ? 0 < y[q].y
                                            ? l
                                            : k
                                        : 0 < y[q].y
                                        ? k
                                        : l;
                                0 < q &&
                                    A &&
                                    (!z || x.connectNullData) &&
                                    (z && c.setLineDash && c.setLineDash(I(G, s)),
                                    c.beginPath(),
                                    c.moveTo(A, B - w),
                                    c.lineTo(K, L - w),
                                    0 < s && c.stroke(),
                                    r && (b.beginPath(), b.moveTo(A, B - w), b.lineTo(K, L - w), 0 < s && b.stroke()));
                                z = !1;
                                A = J;
                                B = 0 < y[q].y ? l : k;
                                K = y[q].lineDashType ? y[q].lineDashType : x.options.lineDashType ? x.options.lineDashType : "shortDash";
                                c.strokeStyle = y[q].lineColor ? y[q].lineColor : x.options.lineColor ? x.options.lineColor : "#9e9e9e";
                                c.lineWidth = s;
                                c.setLineDash && ((K = I(K, s)), c.setLineDash(K));
                                (y[q].indexLabel || x.indexLabel || y[q].indexLabelFormatter || x.indexLabelFormatter) &&
                                    this._indexLabels.push({
                                        chartType: "waterfall",
                                        dataPoint: y[q],
                                        dataSeries: x,
                                        point: { x: f + (J - f) / 2, y: 0 <= y[q].y ? l : k },
                                        direction: 0 > y[q].y === a.axisY.reversed ? 1 : -1,
                                        bounds: { x1: f, y1: Math.min(l, k), x2: J, y2: Math.max(l, k) },
                                        color: e,
                                    });
                            }
                }
                r &&
                    (d.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    (c.globalCompositeOperation = "source-atop"),
                    a.axisX.maskCanvas && c.drawImage(a.axisX.maskCanvas, 0, 0, this.width, this.height),
                    a.axisY.maskCanvas && c.drawImage(a.axisY.maskCanvas, 0, 0, this.width, this.height),
                    this._breaksCanvasCtx && this._breaksCanvasCtx.drawImage(this._preRenderCanvas, 0, 0, this.width, this.height),
                    c.clearRect(h.x1, h.y1, h.width, h.height),
                    this._eventManager.ghostCtx.restore());
                c.restore();
                return { source: d, dest: this.plotArea.ctx, animationCallback: Q.fadeInAnimation, easingFunction: Q.easing.easeInQuad, animationBase: 0 };
            }
        };
        var X = function (a, d, c, b, e, h, q, f, l) {
            if (!(0 > c)) {
                "undefined" === typeof f && (f = 1);
                if (!r) {
                    var k = Number((q % (2 * Math.PI)).toFixed(8));
                    Number((h % (2 * Math.PI)).toFixed(8)) === k && (q -= 1e-4);
                }
                a.save();
                a.globalAlpha = f;
                "pie" === e
                    ? (a.beginPath(), a.moveTo(d.x, d.y), a.arc(d.x, d.y, c, h, q, !1), (a.fillStyle = b), (a.strokeStyle = "white"), (a.lineWidth = 2), a.closePath(), a.fill())
                    : "doughnut" === e && (a.beginPath(), a.arc(d.x, d.y, c, h, q, !1), 0 <= l && a.arc(d.x, d.y, l * c, q, h, !0), a.closePath(), (a.fillStyle = b), (a.strokeStyle = "white"), (a.lineWidth = 2), a.fill());
                a.globalAlpha = 1;
                a.restore();
            }
        };
        t.prototype.renderPie = function (a) {
            function d() {
                if (k && m) {
                    var a = 0,
                        b = 0,
                        c = 0,
                        e = 0;
                    l(k.options.indexLabelMaxWidth) && (k.indexLabelMaxWidth = 0.33 * p.width);
                    for (var d = 0; d < m.length; d++) {
                        var h = m[d],
                            q = k.dataPointIds[d];
                        g[d].id = q;
                        g[d].objectType = "dataPoint";
                        g[d].dataPointIndex = d;
                        g[d].dataSeriesIndex = 0;
                        var f = g[d],
                            n = { percent: null, total: null },
                            u = null,
                            n = t.getPercentAndTotal(k, h);
                        if (k.indexLabelFormatter || h.indexLabelFormatter) u = { chart: t.options, dataSeries: k, dataPoint: h, total: n.total, percent: n.percent };
                        n = h.indexLabelFormatter
                            ? h.indexLabelFormatter(u)
                            : h.indexLabel
                            ? t.replaceKeywordsWithValue(h.indexLabel, h, k, d)
                            : k.indexLabelFormatter
                            ? k.indexLabelFormatter(u)
                            : k.indexLabel
                            ? t.replaceKeywordsWithValue(k.indexLabel, h, k, d)
                            : h.label
                            ? h.label
                            : "";
                        t._eventManager.objectMap[q] = f;
                        f.center = { x: v.x, y: v.y };
                        f.y = h.y;
                        f.radius = B;
                        f.percentInnerRadius = J;
                        f.indexLabelText = n;
                        f.indexLabelPlacement = k.indexLabelPlacement;
                        f.indexLabelLineColor = h.indexLabelLineColor ? h.indexLabelLineColor : k.options.indexLabelLineColor ? k.options.indexLabelLineColor : h.color ? h.color : k._colorSet[d % k._colorSet.length];
                        f.indexLabelLineThickness = l(h.indexLabelLineThickness) ? k.indexLabelLineThickness : h.indexLabelLineThickness;
                        f.indexLabelLineDashType = h.indexLabelLineDashType ? h.indexLabelLineDashType : k.indexLabelLineDashType;
                        f.indexLabelFontColor = h.indexLabelFontColor ? h.indexLabelFontColor : k.indexLabelFontColor;
                        f.indexLabelFontStyle = h.indexLabelFontStyle ? h.indexLabelFontStyle : k.indexLabelFontStyle;
                        f.indexLabelFontWeight = h.indexLabelFontWeight ? h.indexLabelFontWeight : k.indexLabelFontWeight;
                        f.indexLabelFontSize = l(h.indexLabelFontSize) ? k.indexLabelFontSize : h.indexLabelFontSize;
                        f.indexLabelFontFamily = h.indexLabelFontFamily ? h.indexLabelFontFamily : k.indexLabelFontFamily;
                        f.indexLabelBackgroundColor = h.indexLabelBackgroundColor ? h.indexLabelBackgroundColor : k.options.indexLabelBackgroundColor ? k.options.indexLabelBackgroundColor : k.indexLabelBackgroundColor;
                        f.indexLabelBorderColor = h.indexLabelBorderColor ? h.indexLabelBorderColor : k.options.indexLabelBorderColor ? k.options.indexLabelBorderColor : k.indexLabelBorderColor;
                        f.indexLabelBorderThickness = h.indexLabelBorderThickness ? h.indexLabelBorderThickness : k.options.indexLabelBorderThickness ? k.options.indexLabelBorderThickness : k.indexLabelBorderThickness;
                        f.indexLabelMaxWidth = h.indexLabelMaxWidth ? h.indexLabelMaxWidth : k.indexLabelMaxWidth;
                        f.indexLabelWrap = "undefined" !== typeof h.indexLabelWrap ? h.indexLabelWrap : k.indexLabelWrap;
                        f.indexLabelTextAlign = h.indexLabelTextAlign ? h.indexLabelTextAlign : k.indexLabelTextAlign ? k.indexLabelTextAlign : "left";
                        f.startAngle = 0 === d ? (k.startAngle ? (k.startAngle / 180) * Math.PI : 0) : g[d - 1].endAngle;
                        f.startAngle = (f.startAngle + 2 * Math.PI) % (2 * Math.PI);
                        f.endAngle = f.startAngle + ((2 * Math.PI) / z) * Math.abs(h.y);
                        h = (f.endAngle + f.startAngle) / 2;
                        h = (h + 2 * Math.PI) % (2 * Math.PI);
                        f.midAngle = h;
                        if (f.midAngle > Math.PI / 2 - s && f.midAngle < Math.PI / 2 + s) {
                            if (0 === a || g[c].midAngle > f.midAngle) c = d;
                            a++;
                        } else if (f.midAngle > (3 * Math.PI) / 2 - s && f.midAngle < (3 * Math.PI) / 2 + s) {
                            if (0 === b || g[e].midAngle > f.midAngle) e = d;
                            b++;
                        }
                        f.hemisphere = h > Math.PI / 2 && h <= (3 * Math.PI) / 2 ? "left" : "right";
                        f.indexLabelTextBlock = new ka(t.plotArea.ctx, {
                            fontSize: f.indexLabelFontSize,
                            fontFamily: f.indexLabelFontFamily,
                            fontColor: f.indexLabelFontColor,
                            fontStyle: f.indexLabelFontStyle,
                            fontWeight: f.indexLabelFontWeight,
                            textAlign: f.indexLabelTextAlign,
                            backgroundColor: f.indexLabelBackgroundColor,
                            borderColor: f.indexLabelBorderColor,
                            borderThickness: f.indexLabelBorderThickness,
                            maxWidth: f.indexLabelMaxWidth,
                            maxHeight: f.indexLabelWrap ? 5 * f.indexLabelFontSize : 1.5 * f.indexLabelFontSize,
                            text: f.indexLabelText,
                            padding: 0,
                            textBaseline: "middle",
                        });
                        f.indexLabelTextBlock.measureText();
                    }
                    q = h = 0;
                    n = !1;
                    for (d = 0; d < m.length; d++)
                        (f = g[(c + d) % m.length]), 1 < a && f.midAngle > Math.PI / 2 - s && f.midAngle < Math.PI / 2 + s && (h <= a / 2 && !n ? ((f.hemisphere = "right"), h++) : ((f.hemisphere = "left"), (n = !0)));
                    n = !1;
                    for (d = 0; d < m.length; d++)
                        (f = g[(e + d) % m.length]), 1 < b && f.midAngle > (3 * Math.PI) / 2 - s && f.midAngle < (3 * Math.PI) / 2 + s && (q <= b / 2 && !n ? ((f.hemisphere = "left"), q++) : ((f.hemisphere = "right"), (n = !0)));
                }
            }
            function c(a, b) {
                var c = t.plotArea.ctx;
                c.clearRect(p.x1, p.y1, p.width, p.height);
                c.fillStyle = t.backgroundColor;
                c.fillRect(p.x1, p.y1, p.width, p.height);
                for (c = 0; c < m.length; c++) {
                    var d = g[c].startAngle,
                        e = g[c].endAngle;
                    if (e > d) {
                        var h = 0.07 * B * Math.cos(g[c].midAngle),
                            q = 0.07 * B * Math.sin(g[c].midAngle),
                            f = !1;
                        if (m[c].exploded) {
                            if (1e-9 < Math.abs(g[c].center.x - (v.x + h)) || 1e-9 < Math.abs(g[c].center.y - (v.y + q))) (g[c].center.x = v.x + h * a), (g[c].center.y = v.y + q * a), (f = !0);
                        } else if (0 < Math.abs(g[c].center.x - v.x) || 0 < Math.abs(g[c].center.y - v.y)) (g[c].center.x = v.x + h * (1 - a)), (g[c].center.y = v.y + q * (1 - a)), (f = !0);
                        f && b && ((h = {}), (h.dataSeries = k), (h.dataPoint = k.dataPoints[c]), (h.index = c), t.toolTip.highlightObjects([h]));
                        X(t.plotArea.ctx, g[c].center, g[c].radius, m[c].color ? m[c].color : k._colorSet[c % k._colorSet.length], k.type, d, e, k.fillOpacity, g[c].percentInnerRadius);
                    }
                }
                c = t.plotArea.ctx;
                c.save();
                c.fillStyle = "black";
                c.strokeStyle = "grey";
                c.textBaseline = "middle";
                c.lineJoin = "round";
                for (d = d = 0; d < m.length; d++)
                    (e = g[d]),
                        e.indexLabelText &&
                            ((e.indexLabelTextBlock.y -= e.indexLabelTextBlock.height / 2 - e.indexLabelTextBlock.fontSize / 2),
                            (h = 0),
                            (h =
                                "left" === e.hemisphere
                                    ? "inside" !== k.indexLabelPlacement
                                        ? -(e.indexLabelTextBlock.width + n)
                                        : -e.indexLabelTextBlock.width / 2
                                    : "inside" !== k.indexLabelPlacement
                                    ? n
                                    : -e.indexLabelTextBlock.width / 2),
                            (e.indexLabelTextBlock.x += h),
                            e.indexLabelTextBlock.render(!0),
                            (e.indexLabelTextBlock.x -= h),
                            (e.indexLabelTextBlock.y += e.indexLabelTextBlock.height / 2 - e.indexLabelTextBlock.fontSize / 2),
                            "inside" !== e.indexLabelPlacement &&
                                0 < e.indexLabelLineThickness &&
                                ((h = e.center.x + B * Math.cos(e.midAngle)),
                                (q = e.center.y + B * Math.sin(e.midAngle)),
                                (c.strokeStyle = e.indexLabelLineColor),
                                (c.lineWidth = e.indexLabelLineThickness),
                                c.setLineDash && c.setLineDash(I(e.indexLabelLineDashType, e.indexLabelLineThickness)),
                                c.beginPath(),
                                c.moveTo(h, q),
                                c.lineTo(e.indexLabelTextBlock.x, e.indexLabelTextBlock.y),
                                c.lineTo(e.indexLabelTextBlock.x + ("left" === e.hemisphere ? -n : n), e.indexLabelTextBlock.y),
                                c.stroke()),
                            (c.lineJoin = "miter"));
                c.save();
            }
            function b(a, b) {
                var c = 0,
                    c = a.indexLabelTextBlock.y - a.indexLabelTextBlock.height / 2,
                    g = a.indexLabelTextBlock.y + a.indexLabelTextBlock.height / 2,
                    e = b.indexLabelTextBlock.y - b.indexLabelTextBlock.height / 2,
                    d = b.indexLabelTextBlock.y + b.indexLabelTextBlock.height / 2;
                return (c = b.indexLabelTextBlock.y > a.indexLabelTextBlock.y ? e - g : c - d);
            }
            function e(a) {
                for (var c = null, e = 1; e < m.length; e++)
                    if (((c = (a + e + g.length) % g.length), g[c].hemisphere !== g[a].hemisphere)) {
                        c = null;
                        break;
                    } else if (g[c].indexLabelText && c !== a && (0 > b(g[c], g[a]) || ("right" === g[a].hemisphere ? g[c].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y : g[c].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y)))
                        break;
                    else c = null;
                return c;
            }
            function h(a, c, d) {
                d = (d || 0) + 1;
                if (1e3 < d) return 0;
                c = c || 0;
                var q = 0,
                    k = v.y - 1 * x,
                    f = v.y + 1 * x;
                if (0 <= a && a < m.length) {
                    var l = g[a];
                    if ((0 > c && l.indexLabelTextBlock.y < k) || (0 < c && l.indexLabelTextBlock.y > f)) return 0;
                    var n = 0,
                        p = 0,
                        p = (n = n = 0);
                    0 > c
                        ? l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 > k && l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + c < k && (c = -(k - (l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 + c)))
                        : l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 < k && l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + c > f && (c = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2 + c - f);
                    c = l.indexLabelTextBlock.y + c;
                    k = 0;
                    k = "right" === l.hemisphere ? v.x + Math.sqrt(Math.pow(x, 2) - Math.pow(c - v.y, 2)) : v.x - Math.sqrt(Math.pow(x, 2) - Math.pow(c - v.y, 2));
                    p = v.x + B * Math.cos(l.midAngle);
                    n = v.y + B * Math.sin(l.midAngle);
                    n = Math.sqrt(Math.pow(k - p, 2) + Math.pow(c - n, 2));
                    p = Math.acos(B / x);
                    n = Math.acos((x * x + B * B - n * n) / (2 * B * x));
                    c = n < p ? c - l.indexLabelTextBlock.y : 0;
                    k = null;
                    for (f = 1; f < m.length; f++)
                        if (((k = (a - f + g.length) % g.length), g[k].hemisphere !== g[a].hemisphere)) {
                            k = null;
                            break;
                        } else if (
                            g[k].indexLabelText &&
                            g[k].hemisphere === g[a].hemisphere &&
                            k !== a &&
                            (0 > b(g[k], g[a]) || ("right" === g[a].hemisphere ? g[k].indexLabelTextBlock.y <= g[a].indexLabelTextBlock.y : g[k].indexLabelTextBlock.y >= g[a].indexLabelTextBlock.y))
                        )
                            break;
                        else k = null;
                    p = k;
                    n = e(a);
                    f = k = 0;
                    0 > c
                        ? ((f = "right" === l.hemisphere ? p : n),
                          (q = c),
                          null !== f &&
                              ((p = -c),
                              (c = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2 - (g[f].indexLabelTextBlock.y + g[f].indexLabelTextBlock.height / 2)),
                              c - p < r && ((k = -p), (f = h(f, k, d + 1)), +f.toFixed(w) > +k.toFixed(w) && (q = c > r ? -(c - r) : -(p - (f - k))))))
                        : 0 < c &&
                          ((f = "right" === l.hemisphere ? n : p),
                          (q = c),
                          null !== f &&
                              ((p = c),
                              (c = g[f].indexLabelTextBlock.y - g[f].indexLabelTextBlock.height / 2 - (l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2)),
                              c - p < r && ((k = p), (f = h(f, k, d + 1)), +f.toFixed(w) < +k.toFixed(w) && (q = c > r ? c - r : p - (k - f)))));
                    q &&
                        ((d = l.indexLabelTextBlock.y + q),
                        (c = 0),
                        (c = "right" === l.hemisphere ? v.x + Math.sqrt(Math.pow(x, 2) - Math.pow(d - v.y, 2)) : v.x - Math.sqrt(Math.pow(x, 2) - Math.pow(d - v.y, 2))),
                        l.midAngle > Math.PI / 2 - s && l.midAngle < Math.PI / 2 + s
                            ? ((k = (a - 1 + g.length) % g.length),
                              (k = g[k]),
                              (a = g[(a + 1 + g.length) % g.length]),
                              "left" === l.hemisphere && "right" === k.hemisphere && c > k.indexLabelTextBlock.x
                                  ? (c = k.indexLabelTextBlock.x - 15)
                                  : "right" === l.hemisphere && "left" === a.hemisphere && c < a.indexLabelTextBlock.x && (c = a.indexLabelTextBlock.x + 15))
                            : l.midAngle > (3 * Math.PI) / 2 - s &&
                              l.midAngle < (3 * Math.PI) / 2 + s &&
                              ((k = (a - 1 + g.length) % g.length),
                              (k = g[k]),
                              (a = g[(a + 1 + g.length) % g.length]),
                              "right" === l.hemisphere && "left" === k.hemisphere && c < k.indexLabelTextBlock.x
                                  ? (c = k.indexLabelTextBlock.x + 15)
                                  : "left" === l.hemisphere && "right" === a.hemisphere && c > a.indexLabelTextBlock.x && (c = a.indexLabelTextBlock.x - 15)),
                        (l.indexLabelTextBlock.y = d),
                        (l.indexLabelTextBlock.x = c),
                        (l.indexLabelAngle = Math.atan2(l.indexLabelTextBlock.y - v.y, l.indexLabelTextBlock.x - v.x)));
                }
                return q;
            }
            function q() {
                var a = t.plotArea.ctx;
                a.fillStyle = "grey";
                a.strokeStyle = "grey";
                a.font = "16px Arial";
                a.textBaseline = "middle";
                for (var c = (a = 0), d = 0, q = !0, c = 0; 10 > c && (1 > c || 0 < d); c++) {
                    if (k.radius || (!k.radius && "undefined" !== typeof k.innerRadius && null !== k.innerRadius && B - d <= G)) q = !1;
                    q && (B -= d);
                    d = 0;
                    if ("inside" !== k.indexLabelPlacement) {
                        x = B * y;
                        for (a = 0; a < m.length; a++) {
                            var f = g[a];
                            f.indexLabelTextBlock.x = v.x + x * Math.cos(f.midAngle);
                            f.indexLabelTextBlock.y = v.y + x * Math.sin(f.midAngle);
                            f.indexLabelAngle = f.midAngle;
                            f.radius = B;
                            f.percentInnerRadius = J;
                        }
                        for (var l, s, a = 0; a < m.length; a++) {
                            var f = g[a],
                                u = e(a);
                            if (null !== u) {
                                l = g[a];
                                s = g[u];
                                var A = 0,
                                    A = b(l, s) - r;
                                if (0 > A) {
                                    for (var z = (s = 0), W = 0; W < m.length; W++) W !== a && g[W].hemisphere === f.hemisphere && (g[W].indexLabelTextBlock.y < f.indexLabelTextBlock.y ? s++ : z++);
                                    s = (A / (s + z || 1)) * z;
                                    var z = -1 * (A - s),
                                        I = (W = 0);
                                    "right" === f.hemisphere
                                        ? ((W = h(a, s)), (z = -1 * (A - W)), (I = h(u, z)), +I.toFixed(w) < +z.toFixed(w) && +W.toFixed(w) <= +s.toFixed(w) && h(a, -(z - I)))
                                        : ((W = h(u, s)), (z = -1 * (A - W)), (I = h(a, z)), +I.toFixed(w) < +z.toFixed(w) && +W.toFixed(w) <= +s.toFixed(w) && h(u, -(z - I)));
                                }
                            }
                        }
                    } else
                        for (a = 0; a < m.length; a++)
                            (f = g[a]), (x = "pie" === k.type ? 0.7 * B : 0.85 * B), (u = v.x + x * Math.cos(f.midAngle)), (s = v.y + x * Math.sin(f.midAngle)), (f.indexLabelTextBlock.x = u), (f.indexLabelTextBlock.y = s);
                    for (a = 0; a < m.length; a++)
                        if (((f = g[a]), (u = f.indexLabelTextBlock.measureText()), 0 !== u.height && 0 !== u.width))
                            (u = u = 0),
                                "right" === f.hemisphere ? ((u = p.x2 - (f.indexLabelTextBlock.x + f.indexLabelTextBlock.width + n)), (u *= -1)) : (u = p.x1 - (f.indexLabelTextBlock.x - f.indexLabelTextBlock.width - n)),
                                0 < u &&
                                    (!q &&
                                        f.indexLabelText &&
                                        ((s = "right" === f.hemisphere ? p.x2 - f.indexLabelTextBlock.x : f.indexLabelTextBlock.x - p.x1),
                                        0.3 * f.indexLabelTextBlock.maxWidth > s ? (f.indexLabelText = "") : (f.indexLabelTextBlock.maxWidth = 0.85 * s),
                                        0.3 * f.indexLabelTextBlock.maxWidth < s && (f.indexLabelTextBlock.x -= "right" === f.hemisphere ? 2 : -2)),
                                    Math.abs(f.indexLabelTextBlock.y - f.indexLabelTextBlock.height / 2 - v.y) < B || Math.abs(f.indexLabelTextBlock.y + f.indexLabelTextBlock.height / 2 - v.y) < B) &&
                                    ((u /= Math.abs(Math.cos(f.indexLabelAngle))), 9 < u && (u *= 0.3), u > d && (d = u)),
                                (u = u = 0),
                                0 < f.indexLabelAngle && f.indexLabelAngle < Math.PI
                                    ? ((u = p.y2 - (f.indexLabelTextBlock.y + f.indexLabelTextBlock.height / 2 + 5)), (u *= -1))
                                    : (u = p.y1 - (f.indexLabelTextBlock.y - f.indexLabelTextBlock.height / 2 - 5)),
                                0 < u &&
                                    (!q && f.indexLabelText && ((s = 0 < f.indexLabelAngle && f.indexLabelAngle < Math.PI ? -1 : 1), 0 === h(a, u * s) && h(a, 2 * s)),
                                    Math.abs(f.indexLabelTextBlock.x - v.x) < B && ((u /= Math.abs(Math.sin(f.indexLabelAngle))), 9 < u && (u *= 0.3), u > d && (d = u)));
                    var O = function (a, b, c) {
                        for (var e = [], d = 0; e.push(g[b]), b !== c; b = (b + 1 + m.length) % m.length);
                        e.sort(function (a, b) {
                            return a.y - b.y;
                        });
                        for (b = 0; b < e.length; b++)
                            if (((c = e[b]), d < 0.7 * a)) (d += c.indexLabelTextBlock.height), (c.indexLabelTextBlock.text = ""), (c.indexLabelText = ""), c.indexLabelTextBlock.measureText();
                            else break;
                    };
                    (function () {
                        for (var a = -1, c = -1, d = 0, h = !1, q = 0; q < m.length; q++)
                            if (((h = !1), (l = g[q]), l.indexLabelText)) {
                                var f = e(q);
                                if (null !== f) {
                                    var k = g[f];
                                    A = 0;
                                    A = b(l, k);
                                    var p;
                                    if ((p = 0 > A)) {
                                        p = l.indexLabelTextBlock.x;
                                        var u = l.indexLabelTextBlock.y - l.indexLabelTextBlock.height / 2,
                                            s = l.indexLabelTextBlock.y + l.indexLabelTextBlock.height / 2,
                                            t = k.indexLabelTextBlock.y - k.indexLabelTextBlock.height / 2,
                                            r = k.indexLabelTextBlock.x + k.indexLabelTextBlock.width,
                                            v = k.indexLabelTextBlock.y + k.indexLabelTextBlock.height / 2;
                                        p = l.indexLabelTextBlock.x + l.indexLabelTextBlock.width < k.indexLabelTextBlock.x - n || p > r + n || u > v + n || s < t - n ? !1 : !0;
                                    }
                                    p ? (0 > a && (a = q), f !== a && ((c = f), (d += -A)), 0 === q % Math.max(m.length / 10, 3) && (h = !0)) : (h = !0);
                                    h && 0 < d && 0 <= a && 0 <= c && (O(d, a, c), (c = a = -1), (d = 0));
                                }
                            }
                        0 < d && O(d, a, c);
                    })();
                }
            }
            function f() {
                t.plotArea.layoutManager.reset();
                t.title && (t.title.dockInsidePlotArea || ("center" === t.title.horizontalAlign && "center" === t.title.verticalAlign)) && t.title.render();
                if (t.subtitles)
                    for (var a = 0; a < t.subtitles.length; a++) {
                        var b = t.subtitles[a];
                        (b.dockInsidePlotArea || ("center" === b.horizontalAlign && "center" === b.verticalAlign)) && b.render();
                    }
                t.legend && (t.legend.dockInsidePlotArea || ("center" === t.legend.horizontalAlign && "center" === t.legend.verticalAlign)) && (t.legend.setLayout(), t.legend.render());
            }
            var t = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                var k = this.data[a.dataSeriesIndexes[0]],
                    m = k.dataPoints,
                    n = 10,
                    p = this.plotArea,
                    g = k.dataPointEOs,
                    r = 2,
                    x,
                    y = 1.3,
                    s = (20 / 180) * Math.PI,
                    w = 6,
                    v = { x: (p.x2 + p.x1) / 2, y: (p.y2 + p.y1) / 2 },
                    z = 0;
                a = !1;
                for (var A = 0; A < m.length; A++)
                    (z += Math.abs(m[A].y)),
                        !a && "undefined" !== typeof m[A].indexLabel && null !== m[A].indexLabel && 0 < m[A].indexLabel.toString().length && (a = !0),
                        !a && "undefined" !== typeof m[A].label && null !== m[A].label && 0 < m[A].label.toString().length && (a = !0);
                if (0 !== z) {
                    a = a || ("undefined" !== typeof k.indexLabel && null !== k.indexLabel && 0 < k.indexLabel.toString().length);
                    var B = "inside" !== k.indexLabelPlacement && a ? (0.75 * Math.min(p.width, p.height)) / 2 : (0.92 * Math.min(p.width, p.height)) / 2;
                    k.radius && (B = Ua(k.radius, B));
                    var G = "undefined" !== typeof k.innerRadius && null !== k.innerRadius ? Ua(k.innerRadius, B) : 0.7 * B,
                        J = Math.min(G / B, (B - 1) / B);
                    this.pieDoughnutClickHandler = function (a) {
                        t.isAnimating ||
                            (!l(this.explodeOnClick) && !this.explodeOnClick) ||
                            ((a = a.dataPoint),
                            (a.exploded = a.exploded ? !1 : !0),
                            1 < this.dataPoints.length &&
                                t._animator.animate(0, 500, function (a) {
                                    c(a, !0);
                                    f();
                                    t.dispatchEvent("dataAnimationIterationEnd", { chart: t });
                                    t.dispatchEvent("dataAnimationEnd", { chart: t });
                                }));
                    };
                    d();
                    q();
                    q();
                    q();
                    q();
                    this.disableToolTip = !0;
                    this._animator.animate(
                        0,
                        this.animatedRender ? this.animationDuration : 0,
                        function (a) {
                            var b = t.plotArea.ctx;
                            b.clearRect(p.x1, p.y1, p.width, p.height);
                            b.fillStyle = t.backgroundColor;
                            b.fillRect(p.x1, p.y1, p.width, p.height);
                            for (var b = g[0].startAngle + 2 * Math.PI * a, c = 0; c < m.length; c++) {
                                var e = 0 === c ? g[c].startAngle : d,
                                    d = e + (g[c].endAngle - g[c].startAngle),
                                    h = !1;
                                d > b && ((d = b), (h = !0));
                                var q = m[c].color ? m[c].color : k._colorSet[c % k._colorSet.length];
                                d > e && X(t.plotArea.ctx, g[c].center, g[c].radius, q, k.type, e, d, k.fillOpacity, g[c].percentInnerRadius);
                                if (h) break;
                            }
                            f();
                            t.dispatchEvent("dataAnimationIterationEnd", { chart: t });
                            1 <= a && t.dispatchEvent("dataAnimationEnd", { chart: t });
                        },
                        function () {
                            t.disableToolTip = !1;
                            t._animator.animate(0, t.animatedRender ? 500 : 0, function (a) {
                                c(a, !1);
                                f();
                                t.dispatchEvent("dataAnimationIterationEnd", { chart: t });
                            });
                            t.dispatchEvent("dataAnimationEnd", { chart: t });
                        }
                    );
                    k.radius = B;
                    "doughnut" === k.type && (k.innerRadius = G);
                }
            }
        };
        var pa = function (a, d, c, b) {
            "undefined" === typeof c && (c = 1);
            0 >= Math.round(d.y4 - d.y1) ||
                (a.save(),
                (a.globalAlpha = c),
                a.beginPath(),
                a.moveTo(Math.round(d.x1), Math.round(d.y1)),
                a.lineTo(Math.round(d.x2), Math.round(d.y2)),
                a.lineTo(Math.round(d.x3), Math.round(d.y3)),
                a.lineTo(Math.round(d.x4), Math.round(d.y4)),
                "undefined" !== d.x5 && (a.lineTo(Math.round(d.x5), Math.round(d.y5)), a.lineTo(Math.round(d.x6), Math.round(d.y6))),
                a.closePath(),
                (a.fillStyle = b ? b : d.color),
                a.fill(),
                (a.globalAplha = 1),
                a.restore());
        };
        t.prototype.renderFunnel = function (a) {
            function d() {
                for (var a = 0, b = [], c = 0; c < C.length; c++) {
                    if ("undefined" === typeof C[c].y) return -1;
                    C[c].y = "number" === typeof C[c].y ? C[c].y : 0;
                    a += Math.abs(C[c].y);
                }
                if (0 === a) return -1;
                for (c = b[0] = 0; c < C.length; c++) b.push((Math.abs(C[c].y) * G) / a);
                return b;
            }
            function c() {
                var a = Y,
                    b = $,
                    c = O,
                    g = aa,
                    e,
                    d;
                e = R;
                d = T - M;
                g = Math.abs(((d - e) * (b - a + (g - c))) / 2);
                c = aa - O;
                e = d - e;
                d = c * (d - T);
                d = Math.abs(d);
                d = g + d;
                for (var g = [], h = 0, q = 0; q < C.length; q++) {
                    if ("undefined" === typeof C[q].y) return -1;
                    C[q].y = "number" === typeof C[q].y ? C[q].y : 0;
                    h += Math.abs(C[q].y);
                }
                if (0 === h) return -1;
                for (var f = (g[0] = 0), k = 0, l, m, b = b - a, f = !1, q = 0; q < C.length; q++)
                    (a = (Math.abs(C[q].y) * d) / h),
                        f
                            ? (l = 0 == Number(c.toFixed(3)) ? 0 : a / c)
                            : ((m = da * da * b * b - 4 * Math.abs(da) * a),
                              0 > m
                                  ? ((m = c), (f = ((b + m) * (e - k)) / 2), (a -= f), (l = e - k), (k += e - k), (l += 0 == m ? 0 : a / m), (k += a / m), (f = !0))
                                  : ((l = (Math.abs(da) * b - Math.sqrt(m)) / 2),
                                    (m = b - (2 * l) / Math.abs(da)),
                                    (k += l),
                                    k > e && ((k -= l), (m = c), (f = ((b + m) * (e - k)) / 2), (a -= f), (l = e - k), (k += e - k), (l += a / m), (k += a / m), (f = !0)),
                                    (b = m))),
                        g.push(l);
                return g;
            }
            function b() {
                if (s && C) {
                    for (var a, b, c, e, d, h, q, k, f, m, n, p, u, t, v, x, E, w = [], A = [], z = { percent: null, total: null }, D = null, B = 0; B < C.length; B++)
                        (E = S[B]), (E = "undefined" !== typeof E.x5 ? (E.y2 + E.y4) / 2 : (E.y2 + E.y3) / 2), (E = g(E).x2 + 1), (w[B] = P - E - U);
                    E = 0.5 * U;
                    for (var B = 0, F = C.length - 1; B < C.length || 0 <= F; B++, F--) {
                        b = s.reversed ? C[F] : C[B];
                        a = b.color ? b.color : s.reversed ? s._colorSet[(C.length - 1 - B) % s._colorSet.length] : s._colorSet[B % s._colorSet.length];
                        c = b.indexLabelPlacement || s.indexLabelPlacement || "outside";
                        x = b.indexLabelTextAlign || s.indexLabelTextAlign || "left";
                        e = b.indexLabelBackgroundColor || s.indexLabelBackgroundColor || (r ? "transparent" : null);
                        d = b.indexLabelBorderColor || s.indexLabelBorderColor || (r ? "transparent" : null);
                        h = l(b.indexLabelBorderThickness) ? s.indexLabelBorderThickness : b.indexLabelBorderThickness;
                        q = b.indexLabelFontColor || s.indexLabelFontColor || "#979797";
                        k = l(b.indexLabelFontSize) ? s.indexLabelFontSize : b.indexLabelFontSize;
                        f = b.indexLabelFontStyle || s.indexLabelFontStyle || "normal";
                        m = b.indexLabelFontFamily || s.indexLabelFontFamily || "arial";
                        n = b.indexLabelFontWeight || s.indexLabelFontWeight || "normal";
                        a = b.indexLabelLineColor || s.options.indexLabelLineColor || a;
                        p = "number" === typeof b.indexLabelLineThickness ? b.indexLabelLineThickness : "number" === typeof s.indexLabelLineThickness ? s.indexLabelLineThickness : 2;
                        u = b.indexLabelLineDashType || s.indexLabelLineDashType || "solid";
                        t = "undefined" !== typeof b.indexLabelWrap ? b.indexLabelWrap : "undefined" !== typeof s.indexLabelWrap ? s.indexLabelWrap : !0;
                        v = s.dataPointIds[B];
                        y._eventManager.objectMap[v] = { id: v, objectType: "dataPoint", dataPointIndex: B, dataSeriesIndex: 0, funnelSection: S[s.reversed ? C.length - 1 - B : B] };
                        "inside" === s.indexLabelPlacement &&
                            ((w[B] = B !== fa ? (s.reversed ? S[B].x2 - S[B].x1 : S[B].x3 - S[B].x4) : S[B].x3 - S[B].x6),
                            20 > w[B] && ((w[B] = B !== fa ? (s.reversed ? S[B].x3 - S[B].x4 : S[B].x2 - S[B].x1) : S[B].x2 - S[B].x1), (w[B] /= 2)));
                        v = b.indexLabelMaxWidth ? b.indexLabelMaxWidth : s.options.indexLabelMaxWidth ? s.indexLabelMaxWidth : w[B];
                        if (v > w[B] || 0 > v) v = w[B];
                        A[B] = "inside" === s.indexLabelPlacement ? (t ? Math.max(S[B].height, k) : 1.5 * k) : !1;
                        z = y.getPercentAndTotal(s, b);
                        if (s.indexLabelFormatter || b.indexLabelFormatter) D = { chart: y.options, dataSeries: s, dataPoint: b, total: z.total, percent: z.percent };
                        b = b.indexLabelFormatter
                            ? b.indexLabelFormatter(D)
                            : b.indexLabel
                            ? y.replaceKeywordsWithValue(b.indexLabel, b, s, B)
                            : s.indexLabelFormatter
                            ? s.indexLabelFormatter(D)
                            : s.indexLabel
                            ? y.replaceKeywordsWithValue(s.indexLabel, b, s, B)
                            : b.label
                            ? b.label
                            : "";
                        0 >= p && (p = 0);
                        1e3 > v && 1e3 - v < E && (v += 1e3 - v);
                        l(s.options.indexLabelMaxWidth) && (s.indexLabelMaxWidth = l(s.indexLabelMaxWidth) ? v : Math.max(v, s.indexLabelMaxWidth));
                        N.roundRect || za(N);
                        c = new ka(N, {
                            fontSize: k,
                            fontFamily: m,
                            fontColor: q,
                            fontStyle: f,
                            fontWeight: n,
                            horizontalAlign: c,
                            textAlign: x,
                            backgroundColor: e,
                            borderColor: d,
                            borderThickness: h,
                            maxWidth: v,
                            maxHeight: !1 === A[B] ? (t ? 4.28571429 * k : 1.5 * k) : A[B],
                            text: b,
                            padding: ga,
                            textBaseline: "middle",
                        });
                        c.measureText();
                        c.height = c.height === 2 * c.padding ? 0 : c.height;
                        c.width = c.width === 2 * c.padding ? 0 : c.width;
                        H.push({
                            textBlock: c,
                            id: s.reversed ? F : B,
                            isDirty: !1,
                            lineColor: a,
                            lineThickness: p,
                            lineDashType: u,
                            height: c.height < c.maxHeight ? c.height : c.maxHeight,
                            width: c.width < c.maxWidth ? c.width : c.maxWidth,
                        });
                    }
                }
            }
            function e() {
                var a,
                    b,
                    c,
                    e,
                    g,
                    d = [];
                g = !1;
                c = 0;
                for (var h, q = P - $ - U / 2, q = s.options.indexLabelMaxWidth ? (s.indexLabelMaxWidth > q ? q : s.indexLabelMaxWidth) : q, k = H.length - 1; 0 <= k; k--) {
                    h = C[H[k].id];
                    c = H[k];
                    e = c.textBlock;
                    b = (a = p(k) < S.length ? H[p(k)] : null) ? a.textBlock : null;
                    c = c.height;
                    a && e.y + c + ga > b.y && (g = !0);
                    c = h.indexLabelMaxWidth || q;
                    if (c > q || 0 > c) c = q;
                    d.push(c);
                }
                if (g)
                    for (k = H.length - 1; 0 <= k; k--)
                        (a = S[k]),
                            (H[k].textBlock.maxWidth = d[d.length - (k + 1)]),
                            H[k].textBlock.measureText(),
                            (H[k].textBlock.height = H[k].textBlock.height === 2 * H[k].textBlock.padding ? 0 : H[k].textBlock.height),
                            (H[k].textBlock.width = H[k].textBlock.width === 2 * H[k].textBlock.padding ? 0 : H[k].textBlock.width),
                            (H[k].textBlock.x = P - q),
                            (c = H[k].textBlock.height < H[k].textBlock.maxHeight ? H[k].textBlock.height : H[k].textBlock.maxHeight),
                            (g = H[k].textBlock.width < H[k].textBlock.maxWidth ? H[k].textBlock.width : H[k].textBlock.maxWidth),
                            (H[k].height = c),
                            (H[k].width = g),
                            (c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2),
                            (H[k].textBlock.y = c - H[k].height / 2),
                            s.reversed
                                ? (H[k].textBlock.y + H[k].height > V + z && (H[k].textBlock.y = V + z - H[k].height), H[k].textBlock.y < ra - z && (H[k].textBlock.y = ra - z))
                                : (H[k].textBlock.y < V - z && (H[k].textBlock.y = V - z), H[k].textBlock.y + H[k].height > ra + z && (H[k].textBlock.y = ra + z - H[k].height));
            }
            function h() {
                var a, b, c, e;
                if ("inside" !== s.indexLabelPlacement)
                    for (var d = 0; d < S.length; d++)
                        0 == H[d].textBlock.text.length
                            ? (H[d].isDirty = !0)
                            : ((a = S[d]),
                              (c = "undefined" !== typeof a.x5 ? (a.y2 + a.y4) / 2 : (a.y2 + a.y3) / 2),
                              (b = s.reversed
                                  ? "undefined" !== typeof a.x5
                                      ? c > Da
                                          ? g(c).x2 + 1
                                          : (a.x2 + a.x3) / 2 + 1
                                      : (a.x2 + a.x3) / 2 + 1
                                  : "undefined" !== typeof a.x5
                                  ? c < Da
                                      ? g(c).x2 + 1
                                      : (a.x4 + a.x3) / 2 + 1
                                  : (a.x2 + a.x3) / 2 + 1),
                              (H[d].textBlock.x = b + U),
                              (H[d].textBlock.y = c - H[d].height / 2),
                              s.reversed
                                  ? (H[d].textBlock.y + H[d].height > V + z && (H[d].textBlock.y = V + z - H[d].height), H[d].textBlock.y < ra - z && (H[d].textBlock.y = ra - z))
                                  : (H[d].textBlock.y < V - z && (H[d].textBlock.y = V - z), H[d].textBlock.y + H[d].height > ra + z && (H[d].textBlock.y = ra + z - H[d].height)));
                else
                    for (d = 0; d < S.length; d++)
                        0 == H[d].textBlock.text.length
                            ? (H[d].isDirty = !0)
                            : ((a = S[d]),
                              (b = a.height),
                              (c = H[d].height),
                              (e = H[d].width),
                              b >= c
                                  ? ((b = d != fa ? (a.x4 + a.x3) / 2 - e / 2 : (a.x5 + a.x4) / 2 - e / 2), (c = d != fa ? (a.y1 + a.y3) / 2 - c / 2 : (a.y1 + a.y4) / 2 - c / 2), (H[d].textBlock.x = b), (H[d].textBlock.y = c))
                                  : (H[d].isDirty = !0));
            }
            function q() {
                function a(b, c) {
                    var d;
                    if (0 > b || b >= H.length) return 0;
                    var e,
                        g = H[b].textBlock;
                    if (0 > c) {
                        c *= -1;
                        e = n(b);
                        d = f(e, b);
                        if (d >= c) return (g.y -= c), c;
                        if (0 == b) return 0 < d && (g.y -= d), d;
                        d += a(e, -(c - d));
                        0 < d && (g.y -= d);
                        return d;
                    }
                    e = p(b);
                    d = f(b, e);
                    if (d >= c) return (g.y += c), c;
                    if (b == S.length - 1) return 0 < d && (g.y += d), d;
                    d += a(e, c - d);
                    0 < d && (g.y += d);
                    return d;
                }
                function b() {
                    var a,
                        d,
                        e,
                        g,
                        h = 0,
                        k;
                    g = (T - R + 2 * z) / l;
                    k = l;
                    for (var q, f = 1; f < k; f++) {
                        e = f * g;
                        for (var m = H.length - 1; 0 <= m; m--)
                            !H[m].isDirty &&
                                H[m].textBlock.y < e &&
                                H[m].textBlock.y + H[m].height > e &&
                                ((q = p(m)), !(q >= H.length - 1) && H[m].textBlock.y + H[m].height + ga > H[q].textBlock.y && (H[m].textBlock.y = H[m].textBlock.y + H[m].height - e > e - H[m].textBlock.y ? e + 1 : e - H[m].height - 1));
                    }
                    for (q = S.length - 1; 0 < q; q--)
                        if (!H[q].isDirty) {
                            e = n(q);
                            if (0 > e && ((e = 0), H[e].isDirty)) break;
                            if (H[q].textBlock.y < H[e].textBlock.y + H[e].height) {
                                d = d || q;
                                g = q;
                                for (k = 0; H[g].textBlock.y < H[e].textBlock.y + H[e].height + ga; ) {
                                    a = a || H[g].textBlock.y + H[g].height;
                                    k += H[g].height;
                                    k += ga;
                                    g = e;
                                    if (0 >= g) {
                                        g = 0;
                                        k += H[g].height;
                                        break;
                                    }
                                    e = n(g);
                                    if (0 > e) {
                                        g = 0;
                                        k += H[g].height;
                                        break;
                                    }
                                }
                                if (g != q) {
                                    h = H[g].textBlock.y;
                                    a -= h;
                                    a = k - a;
                                    h = c(a, d, g);
                                    break;
                                }
                            }
                        }
                    return h;
                }
                function c(a, b, d) {
                    var e = [],
                        g = 0,
                        h = 0;
                    for (a = Math.abs(a); d <= b; d++) e.push(S[d]);
                    e.sort(function (a, b) {
                        return a.height - b.height;
                    });
                    for (d = 0; d < e.length; d++)
                        if (((b = e[d]), g < a)) h++, (g += H[b.id].height + ga), (H[b.id].textBlock.text = ""), (H[b.id].indexLabelText = ""), (H[b.id].isDirty = !0), H[b.id].textBlock.measureText();
                        else break;
                    return h;
                }
                for (var d, e, g, h, k, q, l = 1, m = 0; m < 2 * l; m++) {
                    for (
                        var s = H.length - 1;
                        0 <= s &&
                        !(0 <= n(s) && n(s),
                        (g = H[s]),
                        (h = g.textBlock),
                        (q = (k = p(s) < S.length ? H[p(s)] : null) ? k.textBlock : null),
                        (d = +g.height.toFixed(6)),
                        (e = +h.y.toFixed(6)),
                        !g.isDirty && k && e + d + ga > +q.y.toFixed(6) && ((d = h.y + d + ga - q.y), (e = a(s, -d)), e < d && (0 < e && (d -= e), (e = a(p(s), d)), e != d)));
                        s--
                    );
                    b();
                }
            }
            function f(a, b) {
                return (b < S.length ? H[b].textBlock.y : s.reversed ? V + z : ra + z) - (0 > a ? (s.reversed ? ra - z : V - z) : H[a].textBlock.y + H[a].height + ga);
            }
            function t(a, b, c) {
                var d,
                    e,
                    g,
                    q = [],
                    f = z,
                    l = [];
                -1 !== b &&
                    (0 <= X.indexOf(b)
                        ? ((e = X.indexOf(b)), X.splice(e, 1))
                        : (X.push(b),
                          (X = X.sort(function (a, b) {
                              return a - b;
                          }))));
                if (0 === X.length) q = ia;
                else {
                    e = (z * (1 != X.length || (0 != X[0] && X[0] != S.length - 1) ? 2 : 1)) / k();
                    for (var n = 0; n < S.length; n++) {
                        if (1 == X.length && 0 == X[0]) {
                            if (0 === n) {
                                q.push(ia[n]);
                                d = f;
                                continue;
                            }
                        } else 0 === n && (d = -1 * f);
                        q.push(ia[n] + d);
                        if (0 <= X.indexOf(n) || (n < S.length && 0 <= X.indexOf(n + 1))) d += e;
                    }
                }
                g = (function () {
                    for (var a = [], b = 0; b < S.length; b++) a.push(q[b] - S[b].y1);
                    return a;
                })();
                var p = {
                    startTime: new Date().getTime(),
                    duration: c || 500,
                    easingFunction: function (a, b, c, d) {
                        return Q.easing.easeOutQuart(a, b, c, d);
                    },
                    changeSection: function (a) {
                        for (var b, c, d = 0; d < S.length; d++)
                            (b = g[d]),
                                (c = S[d]),
                                (b *= a),
                                "undefined" === typeof l[d] && (l[d] = 0),
                                0 > l && (l *= -1),
                                (c.y1 += b - l[d]),
                                (c.y2 += b - l[d]),
                                (c.y3 += b - l[d]),
                                (c.y4 += b - l[d]),
                                c.y5 && ((c.y5 += b - l[d]), (c.y6 += b - l[d])),
                                (l[d] = b);
                    },
                };
                a._animator.animate(
                    0,
                    c,
                    function (c) {
                        var d = a.plotArea.ctx || a.ctx;
                        ja = !0;
                        d.clearRect(v.x1, v.y1, v.x2 - v.x1, v.y2 - v.y1);
                        d.fillStyle = a.backgroundColor;
                        d.fillRect(v.x1, v.y1, v.width, v.height);
                        p.changeSection(c, b);
                        var e = {};
                        e.dataSeries = s;
                        e.dataPoint = s.reversed ? s.dataPoints[C.length - 1 - b] : s.dataPoints[b];
                        e.index = s.reversed ? C.length - 1 - b : b;
                        a.toolTip.highlightObjects([e]);
                        for (e = 0; e < S.length; e++) pa(d, S[e], s.fillOpacity);
                        x(d);
                        K && ("inside" !== s.indexLabelPlacement ? m(d) : h(), w(d));
                        1 <= c && (ja = !1);
                    },
                    null,
                    Q.easing.easeOutQuart
                );
            }
            function k() {
                for (var a = 0, b = 0; b < S.length - 1; b++) (0 <= X.indexOf(b) || 0 <= X.indexOf(b + 1)) && a++;
                return a;
            }
            function m(a) {
                for (var b, c, d, e, h = 0; h < S.length; h++)
                    (e = 1 === H[h].lineThickness % 2 ? 0.5 : 0),
                        (c = (((S[h].y2 + S[h].y4) / 2) << 0) + e),
                        (b = g(c).x2 - 1),
                        (d = H[h].textBlock.x),
                        (e = ((H[h].textBlock.y + H[h].height / 2) << 0) + e),
                        H[h].isDirty ||
                            0 == H[h].lineThickness ||
                            ((a.strokeStyle = H[h].lineColor), (a.lineWidth = H[h].lineThickness), a.setLineDash && a.setLineDash(I(H[h].lineDashType, H[h].lineThickness)), a.beginPath(), a.moveTo(b, c), a.lineTo(d, e), a.stroke());
            }
            function n(a) {
                for (a -= 1; -1 <= a && -1 != a && H[a].isDirty; a--);
                return a;
            }
            function p(a) {
                for (a += 1; a <= S.length && a != S.length && H[a].isDirty; a++);
                return a;
            }
            function g(a) {
                for (var b, c = 0; c < C.length; c++)
                    if (S[c].y1 < a && S[c].y4 > a) {
                        b = S[c];
                        break;
                    }
                return b ? ((a = b.y6 ? (a > b.y6 ? b.x3 + ((b.x4 - b.x3) / (b.y4 - b.y3)) * (a - b.y3) : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)) : b.x2 + ((b.x3 - b.x2) / (b.y3 - b.y2)) * (a - b.y2)), { x1: a, x2: a }) : -1;
            }
            function w(a) {
                for (var b = 0; b < S.length; b++) H[b].isDirty || (a && (H[b].textBlock.ctx = a), (H[b].textBlock.y += H[b].textBlock._lineHeight / 2), H[b].textBlock.render(!0), (H[b].textBlock.y -= H[b].textBlock._lineHeight / 2));
            }
            function x(a) {
                y.plotArea.layoutManager.reset();
                a.roundRect || za(a);
                y.title && (y.title.dockInsidePlotArea || ("center" === y.title.horizontalAlign && "center" === y.title.verticalAlign)) && ((y.title.ctx = a), y.title.render());
                if (y.subtitles)
                    for (var b = 0; b < y.subtitles.length; b++) {
                        var c = y.subtitles[b];
                        if (c.dockInsidePlotArea || ("center" === c.horizontalAlign && "center" === c.verticalAlign)) (y.subtitles.ctx = a), c.render();
                    }
                y.legend && (y.legend.dockInsidePlotArea || ("center" === y.legend.horizontalAlign && "center" === y.legend.verticalAlign)) && ((y.legend.ctx = a), y.legend.setLayout(), y.legend.render());
                ua.fNg && ua.fNg(y);
            }
            var y = this;
            if (!(0 >= a.dataSeriesIndexes.length)) {
                for (
                    var s = this.data[a.dataSeriesIndexes[0]], C = s.dataPoints, v = this.plotArea, z = 0.025 * v.width, A = 0.01 * v.width, B = 0, G = v.height - 2 * z, J = Math.min(v.width - 2 * A, 2.8 * v.height), K = !1, L = 0;
                    L < C.length;
                    L++
                )
                    if (
                        (!K && "undefined" !== typeof C[L].indexLabel && null !== C[L].indexLabel && 0 < C[L].indexLabel.toString().length && (K = !0),
                        !K && "undefined" !== typeof C[L].label && null !== C[L].label && 0 < C[L].label.toString().length && (K = !0),
                        (!K && "function" === typeof s.indexLabelFormatter) || "function" === typeof C[L].indexLabelFormatter)
                    )
                        K = !0;
                K = K || ("undefined" !== typeof s.indexLabel && null !== s.indexLabel && 0 < s.indexLabel.toString().length);
                ("inside" !== s.indexLabelPlacement && K) || (A = (v.width - 0.75 * J) / 2);
                var L = v.x1 + A,
                    P = v.x2 - A,
                    R = v.y1 + z,
                    T = v.y2 - z,
                    N = a.targetCanvasCtx || this.plotArea.ctx || this.ctx;
                if (0 != s.length && s.dataPoints && s.visible && 0 !== C.length) {
                    var M, F;
                    a = (75 * J) / 100;
                    var U = (30 * (P - a)) / 100;
                    "funnel" === s.type
                        ? ((M = l(s.options.neckHeight) ? 0.35 * G : s.neckHeight),
                          (F = l(s.options.neckWidth) ? 0.25 * a : s.neckWidth),
                          "string" === typeof M && M.match(/%$/) ? ((M = parseInt(M)), (M = (M * G) / 100)) : (M = parseInt(M)),
                          "string" === typeof F && F.match(/%$/) ? ((F = parseInt(F)), (F = (F * a) / 100)) : (F = parseInt(F)),
                          M > G ? (M = G) : 0 >= M && (M = 0),
                          F > a ? (F = a - 0.5) : 0 >= F && (F = 0))
                        : "pyramid" === s.type && ((F = M = 0), (s.reversed = s.reversed ? !1 : !0));
                    var A = L + a / 2,
                        Y = L,
                        $ = L + a,
                        V = s.reversed ? T : R,
                        O = A - F / 2,
                        aa = A + F / 2,
                        Da = s.reversed ? R + M : T - M,
                        ra = s.reversed ? R : T;
                    F = s.valueRepresents = s.valueRepresents ? s.valueRepresents : "height";
                    L = [];
                    a = [];
                    var S = [],
                        A = [],
                        Z = R,
                        fa,
                        da = (Da - V) / (O - Y),
                        ha = -da,
                        J = "area" === F ? c() : d();
                    if (-1 !== J) {
                        if (s.reversed) for (A.push(Z), F = J.length - 1; 0 < F; F--) (Z += J[F]), A.push(Z);
                        else for (F = 0; F < J.length; F++) (Z += J[F]), A.push(Z);
                        if (s.reversed) for (F = 0; F < J.length; F++) A[F] < Da ? (L.push(O), a.push(aa), (fa = F)) : (L.push((A[F] - V + da * Y) / da), a.push((A[F] - V + ha * $) / ha));
                        else for (F = 0; F < J.length; F++) A[F] < Da ? (L.push((A[F] - V + da * Y) / da), a.push((A[F] - V + ha * $) / ha), (fa = F)) : (L.push(O), a.push(aa));
                        for (F = 0; F < J.length - 1; F++)
                            (Z = s.reversed ? (C[C.length - 1 - F].color ? C[C.length - 1 - F].color : s._colorSet[(C.length - 1 - F) % s._colorSet.length]) : C[F].color ? C[F].color : s._colorSet[F % s._colorSet.length]),
                                F === fa
                                    ? S.push({ x1: L[F], y1: A[F], x2: a[F], y2: A[F], x3: aa, y3: Da, x4: a[F + 1], y4: A[F + 1], x5: L[F + 1], y5: A[F + 1], x6: O, y6: Da, id: F, height: A[F + 1] - A[F], color: Z })
                                    : S.push({ x1: L[F], y1: A[F], x2: a[F], y2: A[F], x3: a[F + 1], y3: A[F + 1], x4: L[F + 1], y4: A[F + 1], id: F, height: A[F + 1] - A[F], color: Z }),
                                s.dataPointEOs[F] && S[F] && (s.dataPointEOs[F].sectionsofFunnel = S[F]);
                        var ga = 2,
                            H = [],
                            ja = !1,
                            X = [],
                            ia = [],
                            L = !1;
                        a = a = 0;
                        Ea(X);
                        for (F = 0; F < C.length; F++) C[F].exploded && ((L = !0), s.reversed ? X.push(C.length - 1 - F) : X.push(F));
                        N.clearRect(v.x1, v.y1, v.width, v.height);
                        N.fillStyle = y.backgroundColor;
                        N.fillRect(v.x1, v.y1, v.width, v.height);
                        if (K && s.visible && (b(), h(), "inside" !== s.indexLabelPlacement)) {
                            e();
                            q();
                            for (F = 0; F < C.length; F++) H[F].isDirty || ((a = H[F].textBlock.x + H[F].width), (a = (P - a) / 2), 0 == F && (B = a), B > a && (B = a));
                            for (F = 0; F < S.length; F++) (S[F].x1 += B), (S[F].x2 += B), (S[F].x3 += B), (S[F].x4 += B), S[F].x5 && ((S[F].x5 += B), (S[F].x6 += B)), (H[F].textBlock.x += B);
                        }
                        for (F = 0; F < S.length; F++) (B = S[F]), pa(N, B, s.fillOpacity), ia.push(B.y1);
                        x(N);
                        K && s.visible && ("inside" === s.indexLabelPlacement || y.animationEnabled || m(N), y.animationEnabled || w());
                        if (!K)
                            for (F = 0; F < C.length; F++)
                                (B = s.dataPointIds[F]), (a = { id: B, objectType: "dataPoint", dataPointIndex: F, dataSeriesIndex: 0, funnelSection: S[s.reversed ? C.length - 1 - F : F] }), (y._eventManager.objectMap[B] = a);
                        !y.animationEnabled && L ? t(y, -1, 0) : y.animationEnabled && !y.animatedRender && t(y, -1, 0);
                        this.funnelPyramidClickHandler = function (a) {
                            var b = -1;
                            if (!ja && !y.isAnimating && (l(a.dataSeries.explodeOnClick) || a.dataSeries.explodeOnClick) && ((b = s.reversed ? C.length - 1 - a.dataPointIndex : a.dataPointIndex), 0 <= b)) {
                                a = b;
                                if ("funnel" === s.type || "pyramid" === s.type) s.reversed ? (C[C.length - 1 - a].exploded = C[C.length - 1 - a].exploded ? !1 : !0) : (C[a].exploded = C[a].exploded ? !1 : !0);
                                t(y, b, 500);
                            }
                        };
                        return {
                            source: N,
                            dest: this.plotArea.ctx,
                            animationCallback: function (a, b) {
                                Q.fadeInAnimation(a, b);
                                1 <= a && (t(y, -1, 500), x(y.plotArea.ctx || y.ctx));
                            },
                            easingFunction: Q.easing.easeInQuad,
                            animationBase: 0,
                        };
                    }
                }
            }
        };
        t.prototype.requestAnimFrame = (function () {
            return (
                window.requestAnimationFrame ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame ||
                window.oRequestAnimationFrame ||
                window.msRequestAnimationFrame ||
                function (a) {
                    window.setTimeout(a, 1e3 / 60);
                }
            );
        })();
        t.prototype.cancelRequestAnimFrame =
            window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
        t.prototype.set = function (a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            "options" === a ? ((this.options = d), c && this.render()) : t.base.set.call(this, a, d, c);
        };
        t.prototype.exportChart = function (a) {
            a = "undefined" === typeof a ? {} : a;
            var d = a.format ? a.format : "png",
                c = a.fileName ? a.fileName : this.exportFileName;
            if (a.toDataURL) return this.canvas.toDataURL("image/" + d);
            var b = this.canvas;
            if (b && d && c) {
                c = c + "." + d;
                a = "image/" + d;
                var b = b.toDataURL(a),
                    e = !1,
                    h = document.createElement("a");
                h.download = c;
                h.href = b;
                if ("undefined" !== typeof Blob && new Blob()) {
                    for (var q = b.replace(/^data:[a-z\/]*;base64,/, ""), q = atob(q), f = new ArrayBuffer(q.length), f = new Uint8Array(f), l = 0; l < q.length; l++) f[l] = q.charCodeAt(l);
                    d = new Blob([f.buffer], { type: "image/" + d });
                    try {
                        window.navigator.msSaveBlob(d, c), (e = !0);
                    } catch (k) {
                        (h.dataset.downloadurl = [a, h.download, h.href].join(":")), (h.href = window.URL.createObjectURL(d));
                    }
                }
                if (!e)
                    try {
                        (event = document.createEvent("MouseEvents")), event.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), h.dispatchEvent ? h.dispatchEvent(event) : h.fireEvent && h.fireEvent("onclick");
                    } catch (m) {
                        (d = window.open()), d.document.write("<img src='" + b + "'></img><div>Please right click on the image and save it to your device</div>"), d.document.close();
                    }
            }
        };
        t.prototype.print = function () {
            var a = this.exportChart({ toDataURL: !0 }),
                d = document.createElement("iframe");
            d.setAttribute("class", "canvasjs-chart-print-frame");
            J(d, { position: "absolute", width: "100%", border: "0px", margin: "0px 0px 0px 0px", padding: "0px 0px 0px 0px" });
            d.style.height = this.height + "px";
            this._canvasJSContainer.appendChild(d);
            var c = this,
                b = d.contentWindow || d.contentDocument.document || d.contentDocument;
            b.document.open();
            b.document.write('<!DOCTYPE HTML>\n<html><body><img src="' + a + '"/><body/></html>');
            b.document.body && b.document.body.style && ((b.document.body.style.margin = "0px 0px 0px 0px"), (b.document.body.style.padding = "0px 0px 0px 0px"));
            b.document.close();
            setTimeout(function () {
                b.focus();
                b.print();
                setTimeout(function () {
                    c._canvasJSContainer.removeChild(d);
                }, 1e3);
            }, 500);
        };
        t.prototype.getPercentAndTotal = function (a, d) {
            var c = null,
                b = null,
                e = (c = null);
            if (0 <= a.type.indexOf("stacked"))
                (b = 0), (c = d.x.getTime ? d.x.getTime() : d.x), c in a.plotUnit.yTotals && ((b = a.plotUnit.yTotals[c]), (c = a.plotUnit.yAbsTotals[c]), (e = isNaN(d.y) ? 0 : 0 === c ? 0 : 100 * (d.y / c)));
            else if ("pie" === a.type || "doughnut" === a.type || "funnel" === a.type || "pyramid" === a.type) {
                for (c = b = 0; c < a.dataPoints.length; c++) isNaN(a.dataPoints[c].y) || (b += a.dataPoints[c].y);
                e = isNaN(d.y) ? 0 : 100 * (d.y / b);
            }
            return { percent: e, total: b };
        };
        t.prototype.replaceKeywordsWithValue = function (a, d, c, b, e) {
            var h = this;
            e = "undefined" === typeof e ? 0 : e;
            if ((0 <= c.type.indexOf("stacked") || "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type) && (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"))) {
                var q = "#percent",
                    f = "#total",
                    l = this.getPercentAndTotal(c, d),
                    f = isNaN(l.total) ? f : l.total,
                    q = isNaN(l.percent) ? q : l.percent;
                do {
                    l = "";
                    if (c.percentFormatString) l = c.percentFormatString;
                    else {
                        var l = "#,##0.",
                            k = Math.max(Math.ceil(Math.log(1 / Math.abs(q)) / Math.LN10), 2);
                        if (isNaN(k) || !isFinite(k)) k = 2;
                        for (var m = 0; m < k; m++) l += "#";
                        c.percentFormatString = l;
                    }
                    a = a.replace("#percent", ha(q, l, h._cultureInfo));
                    a = a.replace("#total", ha(f, c.yValueFormatString ? c.yValueFormatString : "#,##0.########", h._cultureInfo));
                } while (0 <= a.indexOf("#percent") || 0 <= a.indexOf("#total"));
            }
            return a.replace(/\{.*?\}|"[^"]*"|'[^']*'/g, function (a) {
                if (('"' === a[0] && '"' === a[a.length - 1]) || ("'" === a[0] && "'" === a[a.length - 1])) return a.slice(1, a.length - 1);
                a = Ha(a.slice(1, a.length - 1));
                a = a.replace("#index", e);
                var k = null;
                try {
                    var g = a.match(/(.*?)\s*\[\s*(.*?)\s*\]/);
                    g && 0 < g.length && ((k = Ha(g[2])), (a = Ha(g[1])));
                } catch (q) {}
                g = null;
                if ("color" === a)
                    return "waterfall" === c.type
                        ? d.color
                            ? d.color
                            : 0 < d.y
                            ? c.risingColor
                            : c.fallingColor
                        : "error" === c.type
                        ? c.color
                            ? c.color
                            : c._colorSet[k % c._colorSet.length]
                        : d.color
                        ? d.color
                        : c.color
                        ? c.color
                        : c._colorSet[b % c._colorSet.length];
                if (d.hasOwnProperty(a)) g = d;
                else if (c.hasOwnProperty(a)) g = c;
                else return "";
                g = g[a];
                null !== k && (g = g[k]);
                return "x" === a
                    ? ((c.axisX && "dateTime" === c.axisX.valueType) || "dateTime" === c.xValueType || (d.x && d.x.getTime)) && !c.axisX.logarithmic
                        ? Ca(
                              g,
                              d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : (c.xValueFormatString = h.axisX && h.axisX.autoValueFormatString ? h.axisX.autoValueFormatString : "DD MMM YY"),
                              h._cultureInfo
                          )
                        : ha(g, d.xValueFormatString ? d.xValueFormatString : c.xValueFormatString ? c.xValueFormatString : (c.xValueFormatString = "#,##0.########"), h._cultureInfo)
                    : "y" === a
                    ? ha(g, d.yValueFormatString ? d.yValueFormatString : c.yValueFormatString ? c.yValueFormatString : (c.yValueFormatString = "#,##0.########"), h._cultureInfo)
                    : "z" === a
                    ? ha(g, d.zValueFormatString ? d.zValueFormatString : c.zValueFormatString ? c.zValueFormatString : (c.zValueFormatString = "#,##0.########"), h._cultureInfo)
                    : g;
            });
        };
        oa(T, Y);
        T.prototype.setLayout = function () {
            var a = this.dockInsidePlotArea ? this.chart.plotArea : this.chart,
                d = a.layoutManager.getFreeSpace(),
                c = null,
                b = 0,
                e = 0,
                h = 0,
                q = 0,
                f = (this.markerMargin = this.chart.options.legend && !l(this.chart.options.legend.markerMargin) ? this.chart.options.legend.markerMargin : 0.3 * this.fontSize);
            this.height = 0;
            var t = [],
                k = [];
            if ("top" === this.verticalAlign || "bottom" === this.verticalAlign)
                (this.orientation = "horizontal"), (c = this.verticalAlign), (h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : d.width), (q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : 0.5 * d.height);
            else if ("center" === this.verticalAlign) {
                this.orientation = "vertical";
                if ("left" === this.horizontalAlign || "center" === this.horizontalAlign || "right" === this.horizontalAlign) c = this.horizontalAlign;
                h = this.maxWidth = null !== this.maxWidth ? this.maxWidth : 0.5 * d.width;
                q = this.maxHeight = null !== this.maxHeight ? this.maxHeight : d.height;
            }
            this.errorMarkerColor = [];
            for (var m = 0; m < this.dataSeries.length; m++) {
                var n = this.dataSeries[m];
                if (n.dataPoints && n.dataPoints.length) {
                    if ("pie" !== n.type && "doughnut" !== n.type && "funnel" !== n.type && "pyramid" !== n.type) {
                        var p = (n.legendMarkerType = n.legendMarkerType
                                ? n.legendMarkerType
                                : ("line" !== n.type && "stepLine" !== n.type && "spline" !== n.type && "scatter" !== n.type && "bubble" !== n.type) || !n.markerType
                                ? "error" === n.type && n._linkedSeries
                                    ? n._linkedSeries.legendMarkerType
                                        ? n._linkedSeries.legendMarkerType
                                        : P.getDefaultLegendMarker(n._linkedSeries.type)
                                    : P.getDefaultLegendMarker(n.type)
                                : n.markerType),
                            g = n.legendText ? n.legendText : this.itemTextFormatter ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: null }) : n.name,
                            r = (n.legendMarkerColor = n.legendMarkerColor ? n.legendMarkerColor : n.markerColor ? n.markerColor : "error" === n.type ? (l(n.whiskerColor) ? n._colorSet[0] : n.whiskerColor) : n._colorSet[0]),
                            x = n.markerSize || ("line" !== n.type && "stepLine" !== n.type && "spline" !== n.type) ? 0.75 * this.lineHeight : 0,
                            y = n.legendMarkerBorderColor ? n.legendMarkerBorderColor : n.markerBorderColor,
                            s = n.legendMarkerBorderThickness ? n.legendMarkerBorderThickness : n.markerBorderThickness ? Math.max(1, Math.round(0.2 * x)) : 0;
                        "error" === n.type && this.errorMarkerColor.push(r);
                        g = n.legendText = this.chart.replaceKeywordsWithValue(g, n.dataPoints[0], n, m);
                        p = {
                            markerType: p,
                            markerColor: r,
                            text: g,
                            textBlock: null,
                            chartType: n.type,
                            markerSize: x,
                            lineColor: n._colorSet[0],
                            dataSeriesIndex: n.index,
                            dataPointIndex: null,
                            markerBorderColor: y,
                            markerBorderThickness: s,
                        };
                        t.push(p);
                    } else
                        for (var w = 0; w < n.dataPoints.length; w++) {
                            var v = n.dataPoints[w],
                                p = v.legendMarkerType ? v.legendMarkerType : n.legendMarkerType ? n.legendMarkerType : P.getDefaultLegendMarker(n.type),
                                g = v.legendText
                                    ? v.legendText
                                    : n.legendText
                                    ? n.legendText
                                    : this.itemTextFormatter
                                    ? this.itemTextFormatter({ chart: this.chart, legend: this.options, dataSeries: n, dataPoint: v })
                                    : v.name
                                    ? v.name
                                    : "DataPoint: " + (w + 1),
                                r = v.legendMarkerColor ? v.legendMarkerColor : n.legendMarkerColor ? n.legendMarkerColor : v.color ? v.color : n.color ? n.color : n._colorSet[w % n._colorSet.length],
                                x = 0.75 * this.lineHeight,
                                y = v.legendMarkerBorderColor ? v.legendMarkerBorderColor : n.legendMarkerBorderColor ? n.legendMarkerBorderColor : v.markerBorderColor ? v.markerBorderColor : n.markerBorderColor,
                                s = v.legendMarkerBorderThickness
                                    ? v.legendMarkerBorderThickness
                                    : n.legendMarkerBorderThickness
                                    ? n.legendMarkerBorderThickness
                                    : v.markerBorderThickness || n.markerBorderThickness
                                    ? Math.max(1, Math.round(0.2 * x))
                                    : 0,
                                g = this.chart.replaceKeywordsWithValue(g, v, n, w),
                                p = { markerType: p, markerColor: r, text: g, textBlock: null, chartType: n.type, markerSize: x, dataSeriesIndex: m, dataPointIndex: w, markerBorderColor: y, markerBorderThickness: s };
                            (v.showInLegend || (n.showInLegend && !1 !== v.showInLegend)) && t.push(p);
                        }
                    l(n.legendText) && (n.legendText = n.name);
                }
            }
            !0 === this.reversed && t.reverse();
            if (0 < t.length) {
                n = null;
                g = v = w = 0;
                v =
                    null !== this.itemWidth
                        ? null !== this.itemMaxWidth
                            ? Math.min(this.itemWidth, this.itemMaxWidth, h)
                            : (this.itemMaxWidth = Math.min(this.itemWidth, h))
                        : null !== this.itemMaxWidth
                        ? Math.min(this.itemMaxWidth, h)
                        : (this.itemMaxWidth = h);
                x = 0 === x ? 0.75 * this.lineHeight : x;
                v = (this.itemMaxWidth ? this.itemMaxWidth : v) - (x + f);
                for (m = 0; m < t.length; m++) {
                    p = t[m];
                    r = v;
                    if ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType) r -= 2 * 0.1 * this.lineHeight;
                    if (!(0 >= q || "undefined" === typeof q || 0 >= r || "undefined" === typeof r))
                        if ("horizontal" === this.orientation) {
                            p.textBlock = new ka(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: r,
                                maxHeight: this.itemWrap ? q : this.lineHeight,
                                angle: 0,
                                text: p.text,
                                textAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle",
                            });
                            p.textBlock.measureText();
                            null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (x + f + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)));
                            if (
                                !n ||
                                n.width +
                                    Math.round(p.textBlock.width + x + f + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)) >
                                    h
                            )
                                (n = { items: [], width: 0 }), k.push(n), (this.height += g), (g = 0);
                            g = Math.max(g, p.textBlock.height ? p.textBlock.height : this.lineHeight);
                            p.textBlock.x = n.width;
                            p.textBlock.y = 0;
                            n.width += Math.round(
                                p.textBlock.width + x + f + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)
                            );
                            n.items.push(p);
                            this.width = Math.max(n.width, this.width);
                        } else
                            (p.textBlock = new ka(this.ctx, {
                                x: 0,
                                y: 0,
                                maxWidth: v,
                                maxHeight: !0 === this.itemWrap ? q : 1.5 * this.fontSize,
                                angle: 0,
                                text: p.text,
                                textAlign: "left",
                                fontSize: this.fontSize,
                                fontFamily: this.fontFamily,
                                fontWeight: this.fontWeight,
                                fontColor: this.fontColor,
                                fontStyle: this.fontStyle,
                                textBaseline: "middle",
                            })),
                                p.textBlock.measureText(),
                                null !== this.itemWidth && (p.textBlock.width = this.itemWidth - (x + f + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0))),
                                this.height < q - this.lineHeight ? ((n = { items: [], width: 0 }), k.push(n)) : ((n = k[w]), (w = (w + 1) % k.length)),
                                n &&
                                    ((this.height += p.textBlock.height ? p.textBlock.height : this.lineHeight),
                                    (p.textBlock.x = n.width),
                                    (p.textBlock.y = 0),
                                    (n.width += Math.round(
                                        p.textBlock.width + x + f + (0 === n.width ? 0 : this.horizontalSpacing) + ("line" === p.chartType || "spline" === p.chartType || "stepLine" === p.chartType ? 2 * 0.1 * this.lineHeight : 0)
                                    )),
                                    n.items.push(p),
                                    (this.width = Math.max(n.width, this.width)));
                }
                this.height = !1 === this.itemWrap ? k.length * this.lineHeight : this.height + g;
                this.height = Math.min(q, this.height);
                this.width = Math.min(h, this.width);
            }
            "top" === this.verticalAlign
                ? ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (b = d.y1))
                : "center" === this.verticalAlign
                ? ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (b = d.y1 + d.height / 2 - this.height / 2))
                : "bottom" === this.verticalAlign && ((e = "left" === this.horizontalAlign ? d.x1 : "right" === this.horizontalAlign ? d.x2 - this.width : d.x1 + d.width / 2 - this.width / 2), (b = d.y2 - this.height));
            this.items = t;
            for (m = 0; m < this.items.length; m++)
                (p = t[m]),
                    (p.id = ++this.chart._eventManager.lastObjectId),
                    (this.chart._eventManager.objectMap[p.id] = { id: p.id, objectType: "legendItem", legendItemIndex: m, dataSeriesIndex: p.dataSeriesIndex, dataPointIndex: p.dataPointIndex });
            this.markerSize = x;
            this.rows = k;
            0 < t.length && a.layoutManager.registerSpace(c, { width: this.width + 2 + 2, height: this.height + 5 + 5 });
            this.bounds = { x1: e, y1: b, x2: e + this.width, y2: b + this.height };
        };
        T.prototype.render = function () {
            var a = this.bounds.x1,
                d = this.bounds.y1,
                c = this.markerMargin,
                b = this.maxWidth,
                e = this.maxHeight,
                h = this.markerSize,
                q = this.rows;
            ((0 < this.borderThickness && this.borderColor) || this.backgroundColor) && this.ctx.roundRect(a, d, this.width, this.height, this.cornerRadius, this.borderThickness, this.backgroundColor, this.borderColor);
            for (var f = 0, l = 0; l < q.length; l++) {
                for (var k = q[l], m = 0, n = 0; n < k.items.length; n++) {
                    var p = k.items[n],
                        g = p.textBlock.x + a + (0 === n ? 0.2 * h : this.horizontalSpacing),
                        t = d + f,
                        r = g;
                    this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 0.5);
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(a, d, b, Math.max(e - (e % this.lineHeight), 0));
                    this.ctx.clip();
                    if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType)
                        (this.ctx.strokeStyle = p.lineColor),
                            (this.ctx.lineWidth = Math.ceil(this.lineHeight / 8)),
                            this.ctx.beginPath(),
                            this.ctx.moveTo(g - 0.1 * this.lineHeight, t + this.lineHeight / 2),
                            this.ctx.lineTo(g + 0.85 * this.lineHeight, t + this.lineHeight / 2),
                            this.ctx.stroke(),
                            (r -= 0.1 * this.lineHeight);
                    if ("error" === p.chartType) {
                        this.ctx.strokeStyle = this.errorMarkerColor[0];
                        this.ctx.lineWidth = h / 8;
                        this.ctx.beginPath();
                        var y = g - 0.08 * this.lineHeight + 0.1 * this.lineHeight,
                            s = t + 0.15 * this.lineHeight,
                            w = 0.7 * this.lineHeight,
                            v = w + 0.02 * this.lineHeight;
                        this.ctx.moveTo(y, s);
                        this.ctx.lineTo(y + w, s);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(y + w / 2, s);
                        this.ctx.lineTo(y + w / 2, s + v);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(y, s + v);
                        this.ctx.lineTo(y + w, s + v);
                        this.ctx.stroke();
                        this.errorMarkerColor.shift();
                    }
                    aa.drawMarker(
                        g + h / 2,
                        t + this.lineHeight / 2,
                        this.ctx,
                        p.markerType,
                        "error" === p.chartType || "line" === p.chartType || "spline" === p.chartType ? p.markerSize / 2 : p.markerSize,
                        p.markerColor,
                        p.markerBorderColor,
                        p.markerBorderThickness
                    );
                    p.textBlock.x = g + c + h;
                    if ("line" === p.chartType || "stepLine" === p.chartType || "spline" === p.chartType) p.textBlock.x += 0.1 * this.lineHeight;
                    p.textBlock.y = Math.round(t + this.lineHeight / 2);
                    p.textBlock.render(!0);
                    this.ctx.restore();
                    m = 0 < n ? Math.max(m, p.textBlock.height ? p.textBlock.height : this.lineHeight) : p.textBlock.height ? p.textBlock.height : this.lineHeight;
                    this.chart.data[p.dataSeriesIndex].visible || (this.ctx.globalAlpha = 1);
                    g = U(p.id);
                    this.ghostCtx.fillStyle = g;
                    this.ghostCtx.beginPath();
                    this.ghostCtx.fillRect(r, p.textBlock.y - this.lineHeight / 2, p.textBlock.x + p.textBlock.width - r, p.textBlock.height ? p.textBlock.height : this.lineHeight);
                    p.x1 = this.chart._eventManager.objectMap[p.id].x1 = r;
                    p.y1 = this.chart._eventManager.objectMap[p.id].y1 = p.textBlock.y - this.lineHeight / 2;
                    p.x2 = this.chart._eventManager.objectMap[p.id].x2 = p.textBlock.x + p.textBlock.width;
                    p.y2 = this.chart._eventManager.objectMap[p.id].y2 = p.textBlock.y + (p.textBlock.height ? p.textBlock.height : this.lineHeight) - this.lineHeight / 2;
                }
                f += m;
            }
        };
        oa(P, Y);
        P.prototype.getDefaultAxisPlacement = function () {
            var a = this.type;
            if (
                "column" === a ||
                "line" === a ||
                "stepLine" === a ||
                "spline" === a ||
                "area" === a ||
                "stepArea" === a ||
                "splineArea" === a ||
                "stackedColumn" === a ||
                "stackedLine" === a ||
                "bubble" === a ||
                "scatter" === a ||
                "stackedArea" === a ||
                "stackedColumn100" === a ||
                "stackedLine100" === a ||
                "stackedArea100" === a ||
                "candlestick" === a ||
                "ohlc" === a ||
                "rangeColumn" === a ||
                "rangeArea" === a ||
                "rangeSplineArea" === a ||
                "boxAndWhisker" === a ||
                "waterfall" === a
            )
                return "normal";
            if ("bar" === a || "stackedBar" === a || "stackedBar100" === a || "rangeBar" === a) return "xySwapped";
            if ("pie" === a || "doughnut" === a || "funnel" === a || "pyramid" === a) return "none";
            "error" !== a && window.console.log("Unknown Chart Type: " + a);
            return null;
        };
        P.getDefaultLegendMarker = function (a) {
            if (
                "column" === a ||
                "stackedColumn" === a ||
                "stackedLine" === a ||
                "bar" === a ||
                "stackedBar" === a ||
                "stackedBar100" === a ||
                "bubble" === a ||
                "scatter" === a ||
                "stackedColumn100" === a ||
                "stackedLine100" === a ||
                "stepArea" === a ||
                "candlestick" === a ||
                "ohlc" === a ||
                "rangeColumn" === a ||
                "rangeBar" === a ||
                "rangeArea" === a ||
                "rangeSplineArea" === a ||
                "boxAndWhisker" === a ||
                "waterfall" === a
            )
                return "square";
            if ("line" === a || "stepLine" === a || "spline" === a || "pie" === a || "doughnut" === a) return "circle";
            if ("area" === a || "splineArea" === a || "stackedArea" === a || "stackedArea100" === a || "funnel" === a || "pyramid" === a) return "triangle";
            if ("error" === a) return "none";
            window.console.log("Unknown Chart Type: " + a);
            return null;
        };
        P.prototype.getDataPointAtX = function (a, d) {
            if (!this.dataPoints || 0 === this.dataPoints.length) return null;
            var c = { dataPoint: null, distance: Infinity, index: NaN },
                b = null,
                e = 0,
                h = 0,
                q = 1,
                f = Infinity,
                l = 0,
                k = 0,
                m = 0;
            "none" !== this.chart.plotInfo.axisPlacement &&
                (this.axisX.logarithmic
                    ? ((m = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x)),
                      (m = 1 < m ? Math.min(Math.max((((this.dataPoints.length - 1) / m) * Math.log(a / this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0))
                    : ((m = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x), (m = 0 < m ? Math.min(Math.max((((this.dataPoints.length - 1) / m) * (a - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0)));
            for (;;) {
                h = 0 < q ? m + e : m - e;
                if (0 <= h && h < this.dataPoints.length) {
                    var b = this.dataPoints[h],
                        n = this.axisX && this.axisX.logarithmic ? (b.x > a ? b.x / a : a / b.x) : Math.abs(b.x - a);
                    n < c.distance && ((c.dataPoint = b), (c.distance = n), (c.index = h));
                    b = n;
                    b <= f ? (f = b) : 0 < q ? l++ : k++;
                    if (1e3 < l && 1e3 < k) break;
                } else if (0 > m - e && m + e >= this.dataPoints.length) break;
                -1 === q ? (e++, (q = 1)) : (q = -1);
            }
            return d || (c.dataPoint.x.getTime ? c.dataPoint.x.getTime() : c.dataPoint.x) !== (a.getTime ? a.getTime() : a) ? (d && null !== c.dataPoint ? c : null) : c;
        };
        P.prototype.getDataPointAtXY = function (a, d, c) {
            if (!this.dataPoints || 0 === this.dataPoints.length || a < this.chart.plotArea.x1 || a > this.chart.plotArea.x2 || d < this.chart.plotArea.y1 || d > this.chart.plotArea.y2) return null;
            c = c || !1;
            var b = [],
                e = 0,
                h = 0,
                q = 1,
                f = !1,
                t = Infinity,
                k = 0,
                m = 0,
                n = 0;
            if ("none" !== this.chart.plotInfo.axisPlacement)
                if (((n = (this.chart.axisX[0] ? this.chart.axisX[0] : this.chart.axisX2[0]).getXValueAt({ x: a, y: d })), this.axisX.logarithmic))
                    var p = Math.log(this.dataPoints[this.dataPoints.length - 1].x / this.dataPoints[0].x),
                        n = 1 < p ? Math.min(Math.max((((this.dataPoints.length - 1) / p) * Math.log(n / this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0;
                else (p = this.dataPoints[this.dataPoints.length - 1].x - this.dataPoints[0].x), (n = 0 < p ? Math.min(Math.max((((this.dataPoints.length - 1) / p) * (n - this.dataPoints[0].x)) >> 0, 0), this.dataPoints.length) : 0);
            for (;;) {
                h = 0 < q ? n + e : n - e;
                if (0 <= h && h < this.dataPoints.length) {
                    var p = this.chart._eventManager.objectMap[this.dataPointIds[h]],
                        g = this.dataPoints[h],
                        r = null;
                    if (p) {
                        switch (this.type) {
                            case "column":
                            case "stackedColumn":
                            case "stackedColumn100":
                            case "bar":
                            case "stackedBar":
                            case "stackedBar100":
                            case "rangeColumn":
                            case "rangeBar":
                            case "waterfall":
                            case "error":
                                a >= p.x1 &&
                                    a <= p.x2 &&
                                    d >= p.y1 &&
                                    d <= p.y2 &&
                                    (b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y1 - d), Math.abs(p.y2 - d)) }), (f = !0));
                                break;
                            case "line":
                            case "stepLine":
                            case "spline":
                            case "area":
                            case "stepArea":
                            case "stackedArea":
                            case "stackedArea100":
                            case "splineArea":
                            case "scatter":
                                var x = ma("markerSize", g, this) || 4,
                                    y = c ? 20 : x,
                                    r = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - d, 2));
                                r <= y && b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: r });
                                p = Math.abs(p.x1 - a);
                                p <= t ? (t = p) : 0 < q ? k++ : m++;
                                r <= x / 2 && (f = !0);
                                break;
                            case "rangeArea":
                            case "rangeSplineArea":
                                x = ma("markerSize", g, this) || 4;
                                y = c ? 20 : x;
                                r = Math.min(Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - d, 2)), Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y2 - d, 2)));
                                r <= y && b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: r });
                                p = Math.abs(p.x1 - a);
                                p <= t ? (t = p) : 0 < q ? k++ : m++;
                                r <= x / 2 && (f = !0);
                                break;
                            case "bubble":
                                x = p.size;
                                r = Math.sqrt(Math.pow(p.x1 - a, 2) + Math.pow(p.y1 - d, 2));
                                r <= x / 2 && (b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: r }), (f = !0));
                                break;
                            case "pie":
                            case "doughnut":
                                x = p.center;
                                y = "doughnut" === this.type ? p.percentInnerRadius * p.radius : 0;
                                r = Math.sqrt(Math.pow(x.x - a, 2) + Math.pow(x.y - d, 2));
                                r < p.radius &&
                                    r > y &&
                                    ((r = Math.atan2(d - x.y, a - x.x)),
                                    0 > r && (r += 2 * Math.PI),
                                    (r = Number(((((180 * (r / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    (x = Number(((((180 * (p.startAngle / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    (y = Number(((((180 * (p.endAngle / Math.PI)) % 360) + 360) % 360).toFixed(12))),
                                    0 === y && 1 < p.endAngle && (y = 360),
                                    x >= y && 0 !== g.y && !l(g.y) && ((y += 360), r < x && (r += 360)),
                                    r > x && r < y && (b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: 0 }), (f = !0)));
                                break;
                            case "funnel":
                            case "pyramid":
                                r = p.funnelSection;
                                d > r.y1 &&
                                    d < r.y4 &&
                                    (r.y6
                                        ? d > r.y6
                                            ? ((h = r.x6 + ((r.x5 - r.x6) / (r.y5 - r.y6)) * (d - r.y6)), (r = r.x3 + ((r.x4 - r.x3) / (r.y4 - r.y3)) * (d - r.y3)))
                                            : ((h = r.x1 + ((r.x6 - r.x1) / (r.y6 - r.y1)) * (d - r.y1)), (r = r.x2 + ((r.x3 - r.x2) / (r.y3 - r.y2)) * (d - r.y2)))
                                        : ((h = r.x1 + ((r.x4 - r.x1) / (r.y4 - r.y1)) * (d - r.y1)), (r = r.x2 + ((r.x3 - r.x2) / (r.y3 - r.y2)) * (d - r.y2))),
                                    a > h && a < r && (b.push({ dataPoint: g, dataPointIndex: p.dataPointIndex, dataSeries: this, distance: 0 }), (f = !0)));
                                break;
                            case "boxAndWhisker":
                                if (
                                    (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && d >= p.y4 - p.borderThickness / 2 && d <= p.y1 + p.borderThickness / 2) ||
                                    (Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && d >= p.y1 && d <= p.y4)
                                )
                                    b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - d), Math.abs(p.y3 - d)) }), (f = !0);
                                break;
                            case "candlestick":
                                if (
                                    (a >= p.x1 - p.borderThickness / 2 && a <= p.x2 + p.borderThickness / 2 && d >= p.y2 - p.borderThickness / 2 && d <= p.y3 + p.borderThickness / 2) ||
                                    (Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && d >= p.y1 && d <= p.y4)
                                )
                                    b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - d), Math.abs(p.y3 - d)) }), (f = !0);
                                break;
                            case "ohlc":
                                if (
                                    (Math.abs(p.x2 - a + p.x1 - a) < p.borderThickness && d >= p.y2 && d <= p.y3) ||
                                    (a >= p.x1 && a <= (p.x2 + p.x1) / 2 && d >= p.y1 - p.borderThickness / 2 && d <= p.y1 + p.borderThickness / 2) ||
                                    (a >= (p.x1 + p.x2) / 2 && a <= p.x2 && d >= p.y4 - p.borderThickness / 2 && d <= p.y4 + p.borderThickness / 2)
                                )
                                    b.push({ dataPoint: g, dataPointIndex: h, dataSeries: this, distance: Math.min(Math.abs(p.x1 - a), Math.abs(p.x2 - a), Math.abs(p.y2 - d), Math.abs(p.y3 - d)) }), (f = !0);
                        }
                        if (f || (1e3 < k && 1e3 < m)) break;
                    }
                } else if (0 > n - e && n + e >= this.dataPoints.length) break;
                -1 === q ? (e++, (q = 1)) : (q = -1);
            }
            a = null;
            for (d = 0; d < b.length; d++) a ? b[d].distance <= a.distance && (a = b[d]) : (a = b[d]);
            return a;
        };
        P.prototype.getMarkerProperties = function (a, d, c, b) {
            var e = this.dataPoints,
                h = e[a].markerColor ? e[a].markerColor : this.markerColor ? this.markerColor : e[a].color ? e[a].color : this.color ? this.color : this._colorSet[a % this._colorSet.length],
                f = e[a].markerBorderColor ? e[a].markerBorderColor : this.markerBorderColor ? this.markerBorderColor : null,
                u = l(e[a].markerBorderThickness) ? (this.markerBorderThickness ? this.markerBorderThickness : null) : e[a].markerBorderThickness,
                r = e[a].markerType ? e[a].markerType : this.markerType;
            a = l(e[a].markerSize) ? this.markerSize : e[a].markerSize;
            return { x: d, y: c, ctx: b, type: r, size: a, color: h, borderColor: f, borderThickness: u };
        };
        oa(A, Y);
        A.prototype.createExtraLabelsForLog = function (a) {
            a = (a || 0) + 1;
            if (!(5 < a)) {
                var d = this.logLabelValues[0] || this.intervalStartPosition;
                if (Math.log(this.range) / Math.log(d / this.viewportMinimum) < this.noTicks - 1) {
                    for (var c = A.getNiceNumber((d - this.viewportMinimum) / Math.min(Math.max(2, this.noTicks - this.logLabelValues.length), 3), !0), b = Math.ceil(this.viewportMinimum / c) * c; b < d; b += c)
                        b < this.viewportMinimum || this.logLabelValues.push(b);
                    this.logLabelValues.sort(Sa);
                    this.createExtraLabelsForLog(a);
                }
            }
        };
        A.prototype.createLabels = function () {
            var a,
                d,
                c = 0,
                b = 0,
                e,
                h = 0,
                f = 0,
                b = 0,
                b = this.interval,
                u = 0,
                t,
                k = 0.6 * this.chart.height,
                m;
            a = !1;
            var n = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                p = n.length ? (l(this.scaleBreaks.firstBreakIndex) ? 0 : this.scaleBreaks.firstBreakIndex) : 0;
            if ("axisX" !== this.type || "dateTime" !== this.valueType || this.logarithmic) {
                e = this.viewportMaximum;
                if (this.labels) {
                    a = Math.ceil(b);
                    for (var b = Math.ceil(this.intervalStartPosition), g = !1, c = b; c < this.viewportMaximum; c += a)
                        if (this.labels[c]) g = !0;
                        else {
                            g = !1;
                            break;
                        }
                    g && ((this.interval = a), (this.intervalStartPosition = b));
                }
                if (this.logarithmic && !this.equidistantInterval)
                    for (this.logLabelValues || ((this.logLabelValues = []), this.createExtraLabelsForLog()), b = 0, g = p; b < this.logLabelValues.length; b++)
                        if (((c = this.logLabelValues[b]), c < this.viewportMinimum)) b++;
                        else {
                            for (; g < n.length && c > n[g].endValue; g++);
                            a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
                            m = c;
                            a ||
                                ((a = this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null })
                                    : "axisX" === this.type && this.labels[m]
                                    ? this.labels[m]
                                    : ha(m, this.valueFormatString, this.chart._cultureInfo)),
                                (a = new ka(this.ctx, {
                                    x: 0,
                                    y: 0,
                                    maxWidth: h,
                                    maxHeight: f,
                                    angle: this.labelAngle,
                                    text: this.prefix + a + this.suffix,
                                    backgroundColor: this.labelBackgroundColor,
                                    borderColor: this.labelBorderColor,
                                    cornerRadius: this.labelCornerRadius,
                                    textAlign: this.labelTextAlign,
                                    fontSize: this.labelFontSize,
                                    fontFamily: this.labelFontFamily,
                                    fontWeight: this.labelFontWeight,
                                    fontColor: this.labelFontColor,
                                    fontStyle: this.labelFontStyle,
                                    textBaseline: "middle",
                                    borderThickness: this.labelBorderThickness,
                                })),
                                this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                        }
                g = p;
                for (
                    c = this.intervalStartPosition;
                    c <= e;
                    c = parseFloat(
                        1e-12 > this.interval
                            ? this.logarithmic && this.equidistantInterval
                                ? c * Math.pow(this.logarithmBase, this.interval)
                                : c + this.interval
                            : (this.logarithmic && this.equidistantInterval ? c * Math.pow(this.logarithmBase, this.interval) : c + this.interval).toFixed(12)
                    )
                ) {
                    for (; g < n.length && c > n[g].endValue; g++);
                    a = g < n.length && c >= n[g].startValue && c <= n[g].endValue;
                    m = c;
                    a ||
                        ((a = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.options, value: m, label: this.labels[m] ? this.labels[m] : null })
                            : "axisX" === this.type && this.labels[m]
                            ? this.labels[m]
                            : ha(m, this.valueFormatString, this.chart._cultureInfo)),
                        (a = new ka(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: h,
                            maxHeight: f,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle",
                        })),
                        this._labels.push({ position: m, textBlock: a, effectiveHeight: null }));
                }
            } else
                for (
                    this.intervalStartPosition = this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval),
                        e = Za(new Date(this.viewportMaximum), this.interval, this.intervalType),
                        g = p,
                        c = this.intervalStartPosition;
                    c < e;
                    Za(c, b, this.intervalType)
                ) {
                    for (a = c.getTime(); g < n.length && a > n[g].endValue; g++);
                    m = a;
                    a = g < n.length && a >= n[g].startValue && a <= n[g].endValue;
                    a ||
                        ((a = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.options, value: new Date(m), label: this.labels[m] ? this.labels[m] : null })
                            : "axisX" === this.type && this.labels[m]
                            ? this.labels[m]
                            : Ca(m, this.valueFormatString, this.chart._cultureInfo)),
                        (a = new ka(this.ctx, {
                            x: 0,
                            y: 0,
                            maxWidth: h,
                            backgroundColor: this.labelBackgroundColor,
                            borderColor: this.labelBorderColor,
                            borderThickness: this.labelBorderThickness,
                            cornerRadius: this.labelCornerRadius,
                            maxHeight: f,
                            angle: this.labelAngle,
                            text: this.prefix + a + this.suffix,
                            textAlign: this.labelTextAlign,
                            fontSize: this.labelFontSize,
                            fontFamily: this.labelFontFamily,
                            fontWeight: this.labelFontWeight,
                            fontColor: this.labelFontColor,
                            fontStyle: this.labelFontStyle,
                            textBaseline: "middle",
                        })),
                        this._labels.push({ position: m, textBlock: a, effectiveHeight: null, breaksLabelType: void 0 }));
                }
            if ("bottom" === this._position || "top" === this._position)
                (u =
                    this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length
                        ? (this.lineCoordinates.width * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position))) /
                          Math.log(this.range)
                        : (this.lineCoordinates.width / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range))) * R[this.intervalType + "Duration"] * this.interval),
                    (h = "undefined" === typeof this.options.labelMaxWidth ? (0.5 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                    this.chart.panEnabled || (f = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.8 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
            else if ("left" === this._position || "right" === this._position)
                (u =
                    this.logarithmic && !this.equidistantInterval && 2 <= this._labels.length
                        ? (this.lineCoordinates.height * Math.log(Math.min(this._labels[this._labels.length - 1].position / this._labels[this._labels.length - 2].position, this._labels[1].position / this._labels[0].position))) /
                          Math.log(this.range)
                        : (this.lineCoordinates.height / (this.logarithmic && this.equidistantInterval ? Math.log(this.range) / Math.log(this.logarithmBase) : Math.abs(this.range))) * R[this.intervalType + "Duration"] * this.interval),
                    this.chart.panEnabled || (h = "undefined" === typeof this.options.labelMaxWidth ? (0.3 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                    (f = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.3 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
            for (b = 0; b < this._labels.length; b++) {
                a = this._labels[b].textBlock;
                a.maxWidth = h;
                a.maxHeight = f;
                var w = a.measureText();
                t = w.height;
            }
            e = [];
            p = n = 0;
            if (this.labelAutoFit || this.options.labelAutoFit)
                if (
                    (l(this.labelAngle) ||
                        ((this.labelAngle = ((this.labelAngle % 360) + 360) % 360), 90 < this.labelAngle && 270 > this.labelAngle ? (this.labelAngle -= 180) : 270 <= this.labelAngle && 360 >= this.labelAngle && (this.labelAngle -= 360)),
                    "bottom" === this._position || "top" === this._position)
                )
                    if (((h = Math.floor(0.9 * u)), (p = 0), !this.chart.panEnabled && 1 <= this._labels.length)) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = h;
                        this.sessionVariables.labelMaxHeight = f;
                        this.sessionVariables.labelAngle = this.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (c = 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                for (var x, g = a.text.split(" "), b = 0; b < g.length; b++)
                                    (m = g[b]), (this.ctx.font = a.fontStyle + " " + a.fontWeight + " " + a.fontSize + "px " + a.fontFamily), (m = this.ctx.measureText(m)), m.width > p && ((x = c), (p = m.width));
                            }
                        c = 0;
                        for (c = this.intervalStartPosition < this.viewportMinimum ? 1 : 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                w = a.measureText();
                                for (g = c + 1; g < this._labels.length; g++)
                                    if (!this._labels[g].breaksLabelType) {
                                        d = this._labels[g].textBlock;
                                        d = d.measureText();
                                        break;
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                                b = h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (f - a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                if (l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle)
                                    if (
                                        ((this.sessionVariables.labelMaxHeight =
                                            0 === this.labelAngle ? f : Math.min((b - h * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)), b)),
                                        (m = (k - (t + a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(-25))) / Math.sin((Math.PI / 180) * Math.abs(-25))),
                                        !l(this.options.labelWrap))
                                    )
                                        this.labelWrap
                                            ? l(this.options.labelMaxWidth)
                                                ? ((this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m)),
                                                  (this.sessionVariables.labelWrap = this.labelWrap),
                                                  d && (w.width + d.width) >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25))
                                                : ((this.sessionVariables.labelWrap = this.labelWrap),
                                                  (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth),
                                                  (this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle))
                                            : l(this.options.labelMaxWidth)
                                            ? ((this.sessionVariables.labelWrap = this.labelWrap),
                                              (this.sessionVariables.labelMaxHeight = f),
                                              (this.sessionVariables.labelMaxWidth = h),
                                              d && (w.width + d.width) >> 0 > 2 * h && ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = m)))
                                            : ((this.sessionVariables.labelAngle = this.sessionVariables.labelMaxWidth > h ? -25 : this.sessionVariables.labelAngle),
                                              (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth),
                                              (this.sessionVariables.labelMaxHeight = f),
                                              (this.sessionVariables.labelWrap = this.labelWrap));
                                    else {
                                        if (l(this.options.labelWrap))
                                            if (!l(this.options.labelMaxWidth))
                                                this.options.labelMaxWidth < h
                                                    ? ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth), (this.sessionVariables.labelMaxHeight = b))
                                                    : ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth), (this.sessionVariables.labelMaxHeight = f));
                                            else if (!l(d))
                                                if (((b = (w.width + d.width) >> 0), (g = this.labelFontSize), p < h))
                                                    b - 2 * h > n &&
                                                        ((n = b - 2 * h),
                                                        b >= 2 * h && b < 2.2 * h
                                                            ? ((this.sessionVariables.labelMaxWidth = h),
                                                              l(this.options.labelFontSize) && 12 < g && ((g = Math.floor((12 / 13) * g)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize),
                                                              (this.sessionVariables.labelAngle = this.labelAngle))
                                                            : b >= 2.2 * h && b < 2.8 * h
                                                            ? ((this.sessionVariables.labelAngle = -25), (this.sessionVariables.labelMaxWidth = m), (this.sessionVariables.labelFontSize = g))
                                                            : b >= 2.8 * h && b < 3.2 * h
                                                            ? ((this.sessionVariables.labelMaxWidth = Math.max(h, p)),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              l(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize),
                                                              (this.sessionVariables.labelAngle = this.labelAngle))
                                                            : b >= 3.2 * h && b < 3.6 * h
                                                            ? ((this.sessionVariables.labelAngle = -25),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelMaxWidth = m),
                                                              (this.sessionVariables.labelFontSize = this.labelFontSize))
                                                            : b > 3.6 * h && b < 5 * h
                                                            ? (l(this.options.labelFontSize) && 12 < g && ((g = Math.floor((12 / 13) * g)), a.measureText()),
                                                              (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize),
                                                              (this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelAngle = -25),
                                                              (this.sessionVariables.labelMaxWidth = m))
                                                            : b > 5 * h &&
                                                              ((this.sessionVariables.labelWrap = !0),
                                                              (this.sessionVariables.labelMaxWidth = h),
                                                              (this.sessionVariables.labelFontSize = g),
                                                              (this.sessionVariables.labelMaxHeight = f),
                                                              (this.sessionVariables.labelAngle = this.labelAngle)));
                                                else if (
                                                    x === c &&
                                                    ((0 === x && p + this._labels[x + 1].textBlock.measureText().width - 2 * h > n) ||
                                                        (x === this._labels.length - 1 && p + this._labels[x - 1].textBlock.measureText().width - 2 * h > n) ||
                                                        (0 < x && x < this._labels.length - 1 && p + this._labels[x + 1].textBlock.measureText().width - 2 * h > n && p + this._labels[x - 1].textBlock.measureText().width - 2 * h > n))
                                                )
                                                    (n = 0 === x ? p + this._labels[x + 1].textBlock.measureText().width - 2 * h : p + this._labels[x - 1].textBlock.measureText().width - 2 * h),
                                                        (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize),
                                                        (this.sessionVariables.labelWrap = !0),
                                                        (this.sessionVariables.labelAngle = -25),
                                                        (this.sessionVariables.labelMaxWidth = m);
                                                else if (0 === n)
                                                    for (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? g : this.options.labelFontSize, this.sessionVariables.labelWrap = !0, b = 0; b < this._labels.length; b++)
                                                        (a = this._labels[b].textBlock),
                                                            (a.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m)),
                                                            (w = a.measureText()),
                                                            b < this._labels.length - 1 &&
                                                                ((g = b + 1),
                                                                (d = this._labels[g].textBlock),
                                                                (d.maxWidth = this.sessionVariables.labelMaxWidth = Math.min(Math.max(h, p), m)),
                                                                (d = d.measureText()),
                                                                (w.width + d.width) >> 0 > 2 * h && (this.sessionVariables.labelAngle = -25));
                                    }
                                else
                                    ((this.sessionVariables.labelAngle = this.labelAngle),
                                    (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? f : Math.min((b - h * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)), b)),
                                    (m = 0 != this.labelAngle ? (k - (t + a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) : h),
                                    (this.sessionVariables.labelMaxHeight = this.labelWrap
                                        ? (k - m * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))
                                        : 1.5 * this.labelFontSize),
                                    l(this.options.labelWrap))
                                        ? l(this.options.labelWrap) &&
                                          (this.labelWrap && !l(this.options.labelMaxWidth)
                                              ? ((this.sessionVariables.labelWrap = this.labelWrap),
                                                (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m),
                                                (this.sessionVariables.labelMaxHeight = f))
                                              : ((this.sessionVariables.labelAngle = this.labelAngle),
                                                (this.sessionVariables.labelMaxWidth = m),
                                                (this.sessionVariables.labelMaxHeight = b < 0.9 * u ? 0.9 * u : b),
                                                (this.sessionVariables.labelWrap = this.labelWrap)))
                                        : (this.options.labelWrap
                                              ? ((this.sessionVariables.labelWrap = this.labelWrap), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m))
                                              : (l(this.options.labelMaxWidth), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : m), (this.sessionVariables.labelWrap = this.labelWrap)),
                                          (this.sessionVariables.labelMaxHeight = f));
                            }
                        for (b = 0; b < this._labels.length; b++)
                            (a = this._labels[b].textBlock),
                                (a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth),
                                (a.fontSize = this.sessionVariables.labelFontSize),
                                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                                a.measureText();
                    } else
                        for (c = 0; c < this._labels.length; c++)
                            (a = this._labels[c].textBlock),
                                (a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth)
                                    ? l(this.sessionVariables.labelMaxWidth)
                                        ? (this.sessionVariables.labelMaxWidth = h)
                                        : this.sessionVariables.labelMaxWidth
                                    : this.options.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = l(this.options.labelFontSize)
                                    ? l(this.sessionVariables.labelFontSize)
                                        ? (this.sessionVariables.labelFontSize = this.labelFontSize)
                                        : this.sessionVariables.labelFontSize
                                    : this.options.labelFontSize),
                                (a.angle = this.labelAngle = l(this.options.labelAngle) ? (l(this.sessionVariables.labelAngle) ? (this.sessionVariables.labelAngle = this.labelAngle) : this.sessionVariables.labelAngle) : this.labelAngle),
                                (a.wrap = this.labelWrap = l(this.options.labelWrap) ? (l(this.sessionVariables.labelWrap) ? (this.sessionVariables.labelWrap = this.labelWrap) : this.sessionVariables.labelWrap) : this.options.labelWrap),
                                (a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? (this.sessionVariables.labelMaxHeight = f) : this.sessionVariables.labelMaxHeight),
                                a.measureText();
                else if ("left" === this._position || "right" === this._position)
                    if (
                        ((h = l(this.options.labelMaxWidth) ? (0.3 * this.chart.width) >> 0 : this.options.labelMaxWidth),
                        (f = "undefined" === typeof this.options.labelWrap || this.labelWrap ? (0.3 * this.chart.height) >> 0 : 1.5 * this.labelFontSize),
                        !this.chart.panEnabled && 1 <= this._labels.length)
                    ) {
                        this.sessionVariables.labelFontSize = this.labelFontSize;
                        this.sessionVariables.labelMaxWidth = h;
                        this.sessionVariables.labelMaxHeight = f;
                        this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle;
                        this.sessionVariables.labelWrap = this.labelWrap;
                        for (c = 0; c < this._labels.length; c++)
                            if (!this._labels[c].breaksLabelType) {
                                a = this._labels[c].textBlock;
                                w = a.measureText();
                                for (g = c + 1; g < this._labels.length; g++)
                                    if (!this._labels[g].breaksLabelType) {
                                        d = this._labels[g].textBlock;
                                        d = d.measureText();
                                        break;
                                    }
                                e.push(a.height);
                                this.sessionVariables.labelMaxHeight = Math.max.apply(Math, e);
                                b = h * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + (f - a.fontSize / 2) * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                                Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                                l(this.options.labelAngle) && isNaN(this.options.labelAngle) && 0 !== this.options.labelAngle
                                    ? l(this.options.labelWrap)
                                        ? l(this.options.labelWrap) &&
                                          (l(this.options.labelMaxWidth)
                                              ? l(d) ||
                                                ((u = (w.height + d.height) >> 0),
                                                u - 2 * f > p &&
                                                    ((p = u - 2 * f),
                                                    u >= 2 * f && u < 2.4 * f
                                                        ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelMaxHeight = f),
                                                          (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize))
                                                        : u >= 2.4 * f && u < 2.8 * f
                                                        ? ((this.sessionVariables.labelMaxHeight = b), (this.sessionVariables.labelFontSize = this.labelFontSize), (this.sessionVariables.labelWrap = !0))
                                                        : u >= 2.8 * f && u < 3.2 * f
                                                        ? ((this.sessionVariables.labelMaxHeight = f),
                                                          (this.sessionVariables.labelWrap = !0),
                                                          l(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))
                                                        : u >= 3.2 * f && u < 3.6 * f
                                                        ? ((this.sessionVariables.labelMaxHeight = b), (this.sessionVariables.labelWrap = !0), (this.sessionVariables.labelFontSize = this.labelFontSize))
                                                        : u > 3.6 * f && u < 10 * f
                                                        ? (l(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelMaxWidth = h),
                                                          (this.sessionVariables.labelMaxHeight = f),
                                                          (this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))
                                                        : u > 10 * f &&
                                                          u < 50 * f &&
                                                          (l(this.options.labelFontSize) && 12 < this.labelFontSize && ((this.labelFontSize = Math.floor((12 / 13) * this.labelFontSize)), a.measureText()),
                                                          (this.sessionVariables.labelFontSize = l(this.options.labelFontSize) ? this.labelFontSize : this.options.labelFontSize),
                                                          (this.sessionVariables.labelMaxHeight = f),
                                                          (this.sessionVariables.labelMaxWidth = h),
                                                          (this.sessionVariables.labelAngle = l(this.sessionVariables.labelAngle) ? 0 : this.sessionVariables.labelAngle))))
                                              : ((this.sessionVariables.labelMaxHeight = f), (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth)))
                                        : ((this.sessionVariables.labelMaxWidth = this.labelWrap
                                              ? this.options.labelMaxWidth
                                                  ? this.options.labelMaxWidth
                                                  : this.sessionVariables.labelMaxWidth
                                              : this.labelMaxWidth
                                              ? this.options.labelMaxWidth
                                                  ? this.options.labelMaxWidth
                                                  : this.sessionVariables.labelMaxWidth
                                              : h),
                                          (this.sessionVariables.labelMaxHeight = f))
                                    : ((this.sessionVariables.labelAngle = this.labelAngle),
                                      (this.sessionVariables.labelMaxWidth = 0 === this.labelAngle ? h : Math.min((b - f * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))) / Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)), f)),
                                      l(this.options.labelWrap))
                                    ? l(this.options.labelWrap) &&
                                      (this.labelWrap && !l(this.options.labelMaxWidth)
                                          ? ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth),
                                            (this.sessionVariables.labelWrap = this.labelWrap),
                                            (this.sessionVariables.labelMaxHeight = b))
                                          : ((this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : h),
                                            (this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? f : b),
                                            l(this.options.labelMaxWidth) && (this.sessionVariables.labelAngle = this.labelAngle)))
                                    : this.options.labelWrap
                                    ? ((this.sessionVariables.labelMaxHeight = 0 === this.labelAngle ? f : b), (this.sessionVariables.labelWrap = this.labelWrap), (this.sessionVariables.labelMaxWidth = h))
                                    : ((this.sessionVariables.labelMaxHeight = f),
                                      l(this.options.labelMaxWidth),
                                      (this.sessionVariables.labelMaxWidth = this.options.labelMaxWidth ? this.options.labelMaxWidth : this.sessionVariables.labelMaxWidth),
                                      (this.sessionVariables.labelWrap = this.labelWrap));
                            }
                        for (b = 0; b < this._labels.length; b++)
                            (a = this._labels[b].textBlock),
                                (a.maxWidth = this.labelMaxWidth = this.sessionVariables.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = this.sessionVariables.labelFontSize),
                                (a.angle = this.labelAngle = this.sessionVariables.labelAngle),
                                (a.wrap = this.labelWrap = this.sessionVariables.labelWrap),
                                (a.maxHeight = this.sessionVariables.labelMaxHeight),
                                a.measureText();
                    } else
                        for (l(this.chart.stockChart) || this.chart.isNavigator || (this.sessionVariables.labelMaxHeight = f), c = 0; c < this._labels.length; c++)
                            (a = this._labels[c].textBlock),
                                (a.maxWidth = this.labelMaxWidth = l(this.options.labelMaxWidth)
                                    ? l(this.sessionVariables.labelMaxWidth)
                                        ? (this.sessionVariables.labelMaxWidth = h)
                                        : this.sessionVariables.labelMaxWidth
                                    : this.options.labelMaxWidth),
                                (a.fontSize = this.labelFontSize = l(this.options.labelFontSize)
                                    ? l(this.sessionVariables.labelFontSize)
                                        ? (this.sessionVariables.labelFontSize = this.labelFontSize)
                                        : this.sessionVariables.labelFontSize
                                    : this.options.labelFontSize),
                                (a.angle = this.labelAngle = l(this.options.labelAngle) ? (l(this.sessionVariables.labelAngle) ? (this.sessionVariables.labelAngle = this.labelAngle) : this.sessionVariables.labelAngle) : this.labelAngle),
                                (a.wrap = this.labelWrap = l(this.options.labelWrap) ? (l(this.sessionVariables.labelWrap) ? (this.sessionVariables.labelWrap = this.labelWrap) : this.sessionVariables.labelWrap) : this.options.labelWrap),
                                (a.maxHeight = l(this.sessionVariables.labelMaxHeight) ? (this.sessionVariables.labelMaxHeight = f) : this.sessionVariables.labelMaxHeight),
                                a.measureText();
            for (c = 0; c < this.stripLines.length; c++) {
                var h = this.stripLines[c],
                    y;
                if ("outside" === h.labelPlacement) {
                    f = this.sessionVariables.labelMaxWidth;
                    if ("bottom" === this._position || "top" === this._position)
                        l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight)
                            ? (y = this.sessionVariables.stripLineLabelMaxHeight)
                            : (this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? (0.8 * this.chart.height) >> 0 : 1.5 * this.labelFontSize);
                    if ("left" === this._position || "right" === this._position)
                        l(h.options.labelWrap) && !l(this.sessionVariables.stripLineLabelMaxHeight)
                            ? (y = this.sessionVariables.stripLineLabelMaxHeight)
                            : (this.sessionVariables.stripLineLabelMaxHeight = y = h.labelWrap ? (0.8 * this.chart.width) >> 0 : 1.5 * this.labelFontSize);
                    l(h.labelBackgroundColor) && (h.labelBackgroundColor = "#EEEEEE");
                } else
                    (f = "bottom" === this._position || "top" === this._position ? (0.9 * this.chart.width) >> 0 : (0.9 * this.chart.height) >> 0),
                        (y = l(h.options.labelWrap) || h.labelWrap ? ("bottom" === this._position || "top" === this._position ? (0.8 * this.chart.width) >> 0 : (0.8 * this.chart.height) >> 0) : 1.5 * this.labelFontSize),
                        l(h.labelBackgroundColor) && (l(h.startValue) && 0 !== h.startValue ? (h.labelBackgroundColor = r ? "transparent" : null) : (h.labelBackgroundColor = "#EEEEEE"));
                h.labelFontSize = "outside" === h.labelPlacement && l(h.options.labelFontSize) ? this.labelFontSize : h.labelFontSize;
                h.labelFontFamily = "outside" === h.labelPlacement && l(h.options.labelFontFamily) ? this.labelFontFamily : h.labelFontFamily;
                h.labelFontWeight = "outside" === h.labelPlacement && l(h.options.labelFontWeight) ? this.labelFontWeight : h.labelFontWeight;
                h.labelFontStyle = "outside" === h.labelPlacement && l(h.options.labelFontStyle) ? this.labelFontStyle : h.labelFontStyle;
                a = new ka(this.ctx, {
                    x: 0,
                    y: 0,
                    backgroundColor: h.labelBackgroundColor,
                    borderColor: h.labelBorderColor,
                    borderThickness: h.labelBorderThickness,
                    cornerRadius: h.labelCornerRadius,
                    maxWidth: h.options.labelMaxWidth ? h.options.labelMaxWidth : f,
                    maxHeight: y,
                    angle: this.labelAngle,
                    text: h.labelFormatter ? h.labelFormatter({ chart: this.chart, axis: this, stripLine: h }) : h.label,
                    textAlign: h.labelTextAlign,
                    fontSize: h.labelFontSize,
                    fontFamily: h.labelFontFamily,
                    fontWeight: h.labelFontWeight,
                    fontColor: h.labelFontColor || h.color,
                    fontStyle: h.labelFontStyle,
                    textBaseline: "middle",
                });
                this._stripLineLabels.push({ position: h.value, textBlock: a, effectiveHeight: null, stripLine: h });
            }
        };
        A.prototype.createLabelsAndCalculateWidth = function () {
            var a = 0,
                d = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var c = this.chart.isNavigator ? 0 : 5;
            if ("left" === this._position || "right" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || ("inside" === this.labelPlacement && 0 < this._index))
                    for (d = 0; d < this._labels.length; d++) {
                        var b = this._labels[d].textBlock,
                            b = b.measureText(),
                            e = 0,
                            e = 0 === this.labelAngle ? b.width : b.width * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) + b.height * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle));
                        a < e && (this.labelEffectiveWidth = a = e);
                        this._labels[d].effectiveWidth = e;
                    }
                for (d = 0; d < this._stripLineLabels.length; d++)
                    "outside" === this._stripLineLabels[d].stripLine.labelPlacement &&
                        this._stripLineLabels[d].stripLine.value >= this.viewportMinimum &&
                        this._stripLineLabels[d].stripLine.value <= this.viewportMaximum &&
                        ((b = this._stripLineLabels[d].textBlock),
                        (b = b.measureText()),
                        (e = 0 === this.labelAngle ? b.width : b.width * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle)) + b.height * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle))),
                        "inside" === this.tickPlacement && (e += this.tickLength),
                        "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0),
                        a < e && (a = e),
                        (this.stripLineLabelEffectiveWidth = this._stripLineLabels[d].effectiveWidth = e));
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? (0 < this._index ? this.tickLength : 0) : this.tickLength) + c;
        };
        A.prototype.createLabelsAndCalculateHeight = function () {
            var a = 0;
            this._labels = [];
            this._stripLineLabels = [];
            var d,
                c = 0,
                b = this.chart.isNavigator ? 0 : 5;
            if ("bottom" === this._position || "top" === this._position) {
                this.createLabels();
                if ("inside" != this.labelPlacement || ("inside" === this.labelPlacement && 0 < this._index))
                    for (c = 0; c < this._labels.length; c++) {
                        d = this._labels[c].textBlock;
                        d = d.measureText();
                        var e = 0,
                            e = 0 === this.labelAngle ? d.height : d.width * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + d.height * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle));
                        a < e && (this.labelEffectiveHeight = a = e);
                        this._labels[c].effectiveHeight = e;
                    }
                for (c = 0; c < this._stripLineLabels.length; c++)
                    "outside" === this._stripLineLabels[c].stripLine.labelPlacement &&
                        this._stripLineLabels[c].stripLine.value >= this.viewportMinimum &&
                        this._stripLineLabels[c].stripLine.value <= this.viewportMaximum &&
                        ((d = this._stripLineLabels[c].textBlock),
                        (d = d.measureText()),
                        (e = 0 === this.labelAngle ? d.height : d.width * Math.sin((Math.PI / 180) * Math.abs(this.labelAngle)) + d.height * Math.cos((Math.PI / 180) * Math.abs(this.labelAngle))),
                        "inside" === this.tickPlacement && (e += this.tickLength),
                        "inside" === this.labelPlacement && (a += 0 < this._index ? e : 0),
                        a < e && (a = e),
                        (this.stripLineLabelEffectiveHeight = this._stripLineLabels[c].effectiveHeight = e));
            }
            return (this.title ? this._titleTextBlock.measureText().height + 2 : 0) + a + ("inside" === this.tickPlacement ? (0 < this._index ? this.tickLength : 0) : this.tickLength) + b;
        };
        A.setLayout = function (a, d, c, b, e, h) {
            var f,
                u,
                r,
                k,
                m = a[0] ? a[0].chart : d[0].chart,
                n = m.isNavigator ? 0 : 10,
                p = m._axes;
            if (a && 0 < a.length) for (var g = 0; g < a.length; g++) a[g] && a[g].calculateAxisParameters();
            if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateAxisParameters();
            if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateAxisParameters();
            if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateAxisParameters();
            for (g = 0; g < p.length; g++)
                if (p[g] && p[g].scaleBreaks && p[g].scaleBreaks._appliedBreaks.length)
                    for (var t = p[g].scaleBreaks._appliedBreaks, x = 0; x < t.length && !(t[x].startValue > p[g].viewportMaximum); x++)
                        t[x].endValue < p[g].viewportMinimum || (l(p[g].scaleBreaks.firstBreakIndex) && (p[g].scaleBreaks.firstBreakIndex = x), t[x].startValue >= p[g].viewPortMinimum && (p[g].scaleBreaks.lastBreakIndex = x));
            for (var y = (x = 0), s = 0, w = 0, v = 0, A = 0, z = 0, B, G, I = (u = 0), J, L, M, t = (J = L = M = !1), g = 0; g < p.length; g++)
                p[g] &&
                    p[g].title &&
                    (p[g]._titleTextBlock = new ka(p[g].ctx, {
                        text: p[g].title,
                        fontSize: p[g].titleFontSize,
                        fontFamily: p[g].titleFontFamily,
                        fontWeight: p[g].titleFontWeight,
                        fontColor: p[g].titleFontColor,
                        fontStyle: p[g].titleFontStyle,
                        borderColor: p[g].titleBorderColor,
                        borderThickness: p[g].titleBorderThickness,
                        backgroundColor: p[g].titleBackgroundColor,
                        cornerRadius: p[g].titleCornerRadius,
                        textBaseline: "middle",
                        textAlign: p[g].titleTextAlign,
                    }));
            for (g = 0; g < p.length; g++)
                if (p[g].title)
                    switch (p[g]._position) {
                        case "left":
                            p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.height;
                            p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.width : 1.5 * p[g].titleFontSize;
                            p[g]._titleTextBlock.angle = -90;
                            break;
                        case "right":
                            p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.height;
                            p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.width : 1.5 * p[g].titleFontSize;
                            p[g]._titleTextBlock.angle = 90;
                            break;
                        default:
                            (p[g]._titleTextBlock.maxWidth = p[g].titleMaxWidth || h.width), (p[g]._titleTextBlock.maxHeight = p[g].titleWrap ? 0.8 * h.height : 1.5 * p[g].titleFontSize), (p[g]._titleTextBlock.angle = 0);
                    }
            if ("normal" === e) {
                for (var w = [], v = [], A = [], z = [], Q = [], R = [], N = [], P = []; 4 > x; ) {
                    var F = 0,
                        T = 0,
                        U = 0,
                        V = 0,
                        Y = (e = 0),
                        O = 0,
                        $ = 0,
                        X = 0,
                        Z = 0,
                        S = 0,
                        aa = 0;
                    if (c && 0 < c.length) for (A = [], g = S = 0; g < c.length; g++) A.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateWidth() : 0)), (S += A[g]), (O += c[g] && !m.isNavigator ? c[g].margin : 0);
                    else A.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateWidth() : 0));
                    N.push(A);
                    if (b && 0 < b.length) for (z = [], g = aa = 0; g < b.length; g++) z.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateWidth() : 0)), (aa += z[g]), ($ += b[g] ? b[g].margin : 0);
                    else z.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateWidth() : 0));
                    P.push(z);
                    f = Math.round(h.x1 + S + O);
                    r = Math.round(h.x2 - aa - $ > m.width - n ? m.width - n : h.x2 - aa - $);
                    if (a && 0 < a.length)
                        for (w = [], g = X = 0; g < a.length; g++)
                            a[g] && (a[g].lineCoordinates = {}),
                                (a[g].lineCoordinates.width = Math.abs(r - f)),
                                a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.width ? a[g].titleMaxWidth : a[g].lineCoordinates.width),
                                w.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateHeight() : 0)),
                                (X += w[g]),
                                (e += a[g] && !m.isNavigator ? a[g].margin : 0);
                    else w.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateHeight() : 0));
                    Q.push(w);
                    if (d && 0 < d.length)
                        for (v = [], g = Z = 0; g < d.length; g++)
                            d[g] && (d[g].lineCoordinates = {}),
                                (d[g].lineCoordinates.width = Math.abs(r - f)),
                                d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.width ? d[g].titleMaxWidth : d[g].lineCoordinates.width),
                                v.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateHeight() : 0)),
                                (Z += v[g]),
                                (Y += d[g] && !m.isNavigator ? d[g].margin : 0);
                    else v.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateHeight() : 0));
                    R.push(v);
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++)
                            a[g] &&
                                ((a[g].lineCoordinates.x1 = f),
                                (r = Math.round(h.x2 - aa - $ > m.width - n ? m.width - n : h.x2 - aa - $)),
                                a[g]._labels &&
                                    1 < a[g]._labels.length &&
                                    ((u = k = 0),
                                    (k = a[g]._labels[1]),
                                    (u = "dateTime" === a[g].valueType ? a[g]._labels[a[g]._labels.length - 2] : a[g]._labels[a[g]._labels.length - 1]),
                                    (y = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                    (s = u.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(u.textBlock.angle)))),
                                !a[g] ||
                                    !a[g].labelAutoFit ||
                                    l(B) ||
                                    l(G) ||
                                    m.isNavigator ||
                                    m.stockChart ||
                                    ((u = 0),
                                    0 < a[g].labelAngle
                                        ? G + s > r && a[g].convertPixelToValue(G) >= a[g].viewportMinimum && a[g].convertPixelToValue(G) <= a[g].viewportMaximum && (u += 0 < a[g].labelAngle ? G + s - r - aa : 0)
                                        : 0 > a[g].labelAngle
                                        ? B - y < f && B - y < a[g].viewportMinimum && (I = f - (O + a[g].tickLength + A + B - y + a[g].labelFontSize / 2))
                                        : 0 === a[g].labelAngle &&
                                          (G + s > r && a[g].convertPixelToValue(G) >= a[g].viewportMinimum && a[g].convertPixelToValue(G) <= a[g].viewportMaximum && (u = G + s / 2 - r - aa),
                                          B - y < f && B - y < a[g].viewportMinimum && (I = f - O - a[g].tickLength - A - B + y / 2)),
                                    a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 < a[g].labelAngle && 0 < u
                                        ? (r -= u)
                                        : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 > a[g].labelAngle && 0 < I
                                        ? (f += I)
                                        : a[g].viewportMaximum === a[g].maximum && a[g].viewportMinimum === a[g].minimum && 0 === a[g].labelAngle && (0 < I && (f += I), 0 < u && (r -= u))),
                                m.panEnabled ? (X = l(m.sessionVariables.axisX.height) || m.stockChart ? (m.sessionVariables.axisX.height = X) : m.sessionVariables.axisX.height) : (m.sessionVariables.axisX.height = X),
                                (u = Math.round(h.y2 - X - e + F)),
                                (k = Math.round(h.y2)),
                                (a[g].lineCoordinates.x2 = r),
                                (a[g].lineCoordinates.width = r - f),
                                (a[g].lineCoordinates.y1 = u),
                                (a[g].lineCoordinates.y2 = u),
                                "inside" === a[g].labelPlacement &&
                                    0 < g &&
                                    ((a[g].lineCoordinates.y1 = a[0].lineCoordinates.y2 + F + (a[g].labelEffectiveHeight || 0)), (a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2)),
                                "inside" === a[g].tickPlacement && 0 < g && ((a[g].lineCoordinates.y1 += a[g].tickLength), (a[g].lineCoordinates.y2 = a[g].lineCoordinates.y1 + a[g].lineThickness / 2)),
                                (a[g].bounds = { x1: f, y1: u, x2: r, y2: k - (X + e - w[g] - F), width: r - f }),
                                (a[g].bounds.height = a[g].bounds.y2 - a[g].bounds.y1)),
                                (F += w[g] + a[g].margin);
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++)
                            (d[g].lineCoordinates.x1 = Math.round(h.x1 + S + O)),
                                (d[g].lineCoordinates.x2 = r ? r : Math.round(h.x2 - aa - $ > m.width - n ? m.width - n : h.x2 - aa - $)),
                                (d[g].lineCoordinates.width = Math.abs(r - f)),
                                d[g]._labels &&
                                    1 < d[g]._labels.length &&
                                    ((k = d[g]._labels[1]),
                                    (u = "dateTime" === d[g].valueType ? d[g]._labels[d[g]._labels.length - 2] : d[g]._labels[d[g]._labels.length - 1]),
                                    (y = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                    (s = u.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(u.textBlock.angle)))),
                                m.panEnabled ? (Z = l(m.sessionVariables.axisX2.height) || m.stockChart ? (m.sessionVariables.axisX2.height = Z) : m.sessionVariables.axisX2.height) : (m.sessionVariables.axisX2.height = Z),
                                (u = Math.round(h.y1)),
                                (k = d[g].lineCoordinates.y1 = u + Z + Y - T),
                                (d[g].lineCoordinates.y2 = u),
                                "inside" === d[g].labelPlacement && 0 < g && (d[g].lineCoordinates.y1 = d[0].lineCoordinates.y1 - T - (d[g].labelEffectiveHeight || 0) - 5),
                                "inside" === d[g].tickPlacement && 0 < g && (d[g].lineCoordinates.y1 -= d[g].tickLength),
                                (d[g].bounds = { x1: f, y1: u + (Z + Y - ("inside" === d[g].labelPlacement && 0 === g ? v[g] - 5 : v[g]) - T), x2: r, y2: k, width: r - f }),
                                (d[g].bounds.height = d[g].bounds.y2 - d[g].bounds.y1),
                                (T += ("inside" === d[g].labelPlacement && 0 === g ? v[g] - 5 : v[g]) + d[g].margin);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++)
                            (O = m.isNavigator ? 0 : 10),
                                c[g] &&
                                    ((f = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1)),
                                    (O = c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[c[g]._labels.length - 1].textBlock.height / 2 : n),
                                    (u = Math.round(h.y1 + Z + Y < Math.max(O, n) ? Math.max(O, n) : h.y1 + Z + Y)),
                                    (r = Math.round(a[0] ? a[0].lineCoordinates.x1 : d[0].lineCoordinates.x1)),
                                    (O = 0 < a.length ? 0 : c[g]._labels && 0 < c[g]._labels.length ? c[g]._labels[0].textBlock.height / 2 : n),
                                    (k = Math.round(h.y2 - X - e - O)),
                                    (c[g].lineCoordinates = { x1: f - U, y1: u, x2: r - U, y2: k, height: Math.abs(k - u) }),
                                    "inside" === c[g].labelPlacement &&
                                        0 < g &&
                                        ((c[g].lineCoordinates.x1 = c[0].lineCoordinates.x1 - U - (c[g].labelEffectiveWidth || 0) - 5), (c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2)),
                                    "inside" === c[g].tickPlacement && 0 < g && ((c[g].lineCoordinates.x1 -= c[g].tickLength), (c[g].lineCoordinates.x2 = c[g].lineCoordinates.x1 + c[g].lineThickness / 2)),
                                    (c[g].bounds = { x1: f - (("inside" === c[g].labelPlacement && 0 === g ? A[g] - 5 : A[g]) + U), y1: u, x2: r - U, y2: k, height: k - u }),
                                    (c[g].bounds.width = c[g].bounds.x2 - c[g].bounds.x1),
                                    c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.height ? c[g].titleMaxWidth : c[g].lineCoordinates.height),
                                    (U += ("inside" === c[g].labelPlacement && 0 === g ? A[g] - 5 : A[g]) + c[g].margin));
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++)
                            b[g] &&
                                ((f = Math.round(a[0] ? a[0].lineCoordinates.x2 : d[0].lineCoordinates.x2)),
                                (r = Math.round(f)),
                                (O = b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[b[g]._labels.length - 1].textBlock.height / 2 : 0),
                                (u = Math.round(h.y1 + Z + Y < Math.max(O, n) ? Math.max(O, n) : h.y1 + Z + Y)),
                                (O = 0 < a.length ? 0 : b[g]._labels && 0 < b[g]._labels.length ? b[g]._labels[0].textBlock.height / 2 : 0),
                                (k = Math.round(h.y2 - (X + e + O))),
                                (b[g].lineCoordinates = { x1: f + V, y1: u, x2: f + V, y2: k, height: Math.abs(k - u) }),
                                "inside" === b[g].labelPlacement &&
                                    0 < g &&
                                    ((b[g].lineCoordinates.x1 = b[0].lineCoordinates.x2 + V + (b[g].labelEffectiveWidth || 0) + 5), (b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2)),
                                "inside" === b[g].tickPlacement && 0 < g && ((b[g].lineCoordinates.x1 += b[g].tickLength), (b[g].lineCoordinates.x2 = b[g].lineCoordinates.x1 + b[g].lineThickness / 2)),
                                (b[g].bounds = { x1: f + V, y1: u, x2: r + (("inside" === b[g].labelPlacement && 0 === g ? z[g] - 5 : z[g]) + V), y2: k, height: k - u }),
                                (b[g].bounds.width = b[g].bounds.x2 - b[g].bounds.x1),
                                b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.height ? b[g].titleMaxWidth : b[g].lineCoordinates.height),
                                (V += ("inside" === b[g].labelPlacement && 0 === g ? z[g] - 5 : z[g]) + b[g].margin));
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++)
                            a[g] &&
                                (a[g].calculateValueToPixelConversionParameters(),
                                a[g].calculateBreaksSizeInValues(),
                                a[g]._labels &&
                                    1 < a[g]._labels.length &&
                                    ((B =
                                        (a[g].logarithmic ? Math.log(a[g]._labels[1].position / a[g].viewportMinimum) / a[g].conversionParameters.lnLogarithmBase : a[g]._labels[1].position - a[g].viewportMinimum) *
                                            Math.abs(a[g].conversionParameters.pixelPerUnit) +
                                        a[g].lineCoordinates.x1),
                                    (f = a[g]._labels[a[g]._labels.length - ("dateTime" === a[g].valueType ? 2 : 1)].position),
                                    (f = a[g].getApparentDifference(a[g].viewportMinimum, f)),
                                    (G = a[g].logarithmic
                                        ? (1 < f ? (Math.log(f) / a[g].conversionParameters.lnLogarithmBase) * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1
                                        : (0 < f ? f * Math.abs(a[g].conversionParameters.pixelPerUnit) : 0) + a[g].lineCoordinates.x1)));
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++)
                            d[g].calculateValueToPixelConversionParameters(),
                                d[g].calculateBreaksSizeInValues(),
                                d[g]._labels &&
                                    1 < d[g]._labels.length &&
                                    ((B =
                                        (d[g].logarithmic ? Math.log(d[g]._labels[1].position / d[g].viewportMinimum) / d[g].conversionParameters.lnLogarithmBase : d[g]._labels[1].position - d[g].viewportMinimum) *
                                            Math.abs(d[g].conversionParameters.pixelPerUnit) +
                                        d[g].lineCoordinates.x1),
                                    (f = d[g]._labels[d[g]._labels.length - ("dateTime" === d[g].valueType ? 2 : 1)].position),
                                    (f = d[g].getApparentDifference(d[g].viewportMinimum, f)),
                                    (G = d[g].logarithmic
                                        ? (1 < f ? (Math.log(f) / d[g].conversionParameters.lnLogarithmBase) * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1
                                        : (0 < f ? f * Math.abs(d[g].conversionParameters.pixelPerUnit) : 0) + d[g].lineCoordinates.x1));
                    for (g = 0; g < p.length; g++) "axisY" === p[g].type && (p[g].calculateValueToPixelConversionParameters(), p[g].calculateBreaksSizeInValues());
                    if (0 < x) {
                        if (a && 0 < a.length) for (g = 0; g < a.length; g++) t = Q[x - 1][g] === Q[x][g] ? !0 : !1;
                        else t = !0;
                        if (d && 0 < d.length) for (g = 0; g < d.length; g++) J = R[x - 1][g] === R[x][g] ? !0 : !1;
                        else J = !0;
                        if (c && 0 < c.length) for (g = 0; g < c.length; g++) L = N[x - 1][g] === N[x][g] ? !0 : !1;
                        else L = !0;
                        if (b && 0 < b.length) for (g = 0; g < b.length; g++) M = P[x - 1][g] === P[x][g] ? !0 : !1;
                        else M = !0;
                    }
                    if (t && J && L && M) break;
                    x++;
                }
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels();
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
            } else {
                n = [];
                B = [];
                I = [];
                y = [];
                G = [];
                s = [];
                Q = [];
                for (R = []; 4 > x; ) {
                    X = V = U = $ = O = Y = e = P = N = F = Z = 0;
                    if (a && 0 < a.length) for (I = [], g = V = 0; g < a.length; g++) I.push(Math.ceil(a[g] ? a[g].createLabelsAndCalculateWidth() : 0)), (V += I[g]), (e += a[g] && !m.isNavigator ? a[g].margin : 0);
                    else I.push(Math.ceil(a[0] ? a[0].createLabelsAndCalculateWidth() : 0));
                    Q.push(I);
                    if (d && 0 < d.length) for (y = [], g = X = 0; g < d.length; g++) y.push(Math.ceil(d[g] ? d[g].createLabelsAndCalculateWidth() : 0)), (X += y[g]), (Y += d[g] ? d[g].margin : 0);
                    else y.push(Math.ceil(d[0] ? d[0].createLabelsAndCalculateWidth() : 0));
                    R.push(y);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++)
                            (c[g].lineCoordinates = {}),
                                (f = Math.round(h.x1 + V + e)),
                                (r = Math.round(h.x2 - X - Y > m.width - 10 ? m.width - 10 : h.x2 - X - Y)),
                                c[g].labelAutoFit &&
                                    !l(w) &&
                                    (0 < !a.length && (f = 0 > c[g].labelAngle ? Math.max(f, w) : 0 === c[g].labelAngle ? Math.max(f, w / 2) : f),
                                    0 < !d.length && (r = 0 < c[g].labelAngle ? r - v / 2 : 0 === c[g].labelAngle ? r - v / 2 : r)),
                                (c[g].lineCoordinates.x1 = f),
                                (c[g].lineCoordinates.x2 = r),
                                (c[g].lineCoordinates.width = Math.abs(r - f)),
                                c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width);
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++)
                            (b[g].lineCoordinates = {}),
                                (f = Math.round(h.x1 + V + e)),
                                (r = Math.round(h.x2 - X - Y > b[g].chart.width - 10 ? b[g].chart.width - 10 : h.x2 - X - Y)),
                                b[g] && b[g].labelAutoFit && !l(A) && (0 < !a.length && (f = 0 < b[g].labelAngle ? Math.max(f, A) : 0 === b[g].labelAngle ? Math.max(f, A / 2) : f), 0 < !d.length && (r -= z / 2)),
                                (b[g].lineCoordinates.x1 = f),
                                (b[g].lineCoordinates.x2 = r),
                                (b[g].lineCoordinates.width = Math.abs(r - f)),
                                b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width);
                    if (c && 0 < c.length) for (n = [], g = U = 0; g < c.length; g++) n.push(Math.ceil(c[g] ? c[g].createLabelsAndCalculateHeight() : 0)), (U += n[g] + c[g].margin), (O += c[g].margin);
                    else n.push(Math.ceil(c[0] ? c[0].createLabelsAndCalculateHeight() : 0));
                    G.push(n);
                    if (b && 0 < b.length) for (B = [], g = 0; g < b.length; g++) B.push(Math.ceil(b[g] ? b[g].createLabelsAndCalculateHeight() : 0)), ($ += b[g].margin);
                    else B.push(Math.ceil(b[0] ? b[0].createLabelsAndCalculateHeight() : 0));
                    s.push(B);
                    if (c && 0 < c.length)
                        for (g = 0; g < c.length; g++)
                            0 < c[g]._labels.length &&
                                ((k = c[g]._labels[0]),
                                (u = c[g]._labels[c[g]._labels.length - 1]),
                                (w = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                (v = u.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(u.textBlock.angle))));
                    if (b && 0 < b.length)
                        for (g = 0; g < b.length; g++)
                            b[g] &&
                                0 < b[g]._labels.length &&
                                ((k = b[g]._labels[0]),
                                (u = b[g]._labels[b[g]._labels.length - 1]),
                                (A = k.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(k.textBlock.angle)) + (k.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(k.textBlock.angle))),
                                (z = u.textBlock.width * Math.cos((Math.PI / 180) * Math.abs(u.textBlock.angle)) + (u.textBlock.height - u.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * Math.abs(u.textBlock.angle))));
                    if (m.panEnabled) for (g = 0; g < c.length; g++) n[g] = l(m.sessionVariables.axisY[g].height) ? (m.sessionVariables.axisY[g].height = n[g]) : m.sessionVariables.axisY[g].height;
                    else for (g = 0; g < c.length; g++) m.sessionVariables.axisY[g].height = n[g];
                    if (c && 0 < c.length)
                        for (g = c.length - 1; 0 <= g; g--)
                            (u = Math.round(h.y2)),
                                (k = Math.round(h.y2 > c[g].chart.height ? c[g].chart.height : h.y2)),
                                (c[g].lineCoordinates.y1 = u - (n[g] + c[g].margin + Z)),
                                (c[g].lineCoordinates.y2 = u - (n[g] + c[g].margin + Z)),
                                "inside" === c[g].labelPlacement &&
                                    0 < g &&
                                    ((c[g].lineCoordinates.y1 = c[g].lineCoordinates.y1 + n[g] - (c[g]._titleTextBlock ? c[g]._titleTextBlock.height : 0) - c[g].tickLength - (c[g].stripLineLabelEffectiveHeight || 0) - 5),
                                    (c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2)),
                                "inside" === c[g].tickPlacement && 0 < g && ((c[g].lineCoordinates.y1 += c[g].tickLength), (c[g].lineCoordinates.y2 = c[g].lineCoordinates.y1 + c[g].lineThickness / 2)),
                                (c[g].bounds = { x1: f, y1: u - (n[g] + Z + c[g].margin), x2: r, y2: k - (Z + c[g].margin), width: r - f, height: n[g] }),
                                c[g].title && (c[g]._titleTextBlock.maxWidth = 0 < c[g].titleMaxWidth && c[g].titleMaxWidth < c[g].lineCoordinates.width ? c[g].titleMaxWidth : c[g].lineCoordinates.width),
                                (Z += n[g] + c[g].margin);
                    if (b && 0 < b.length)
                        for (g = b.length - 1; 0 <= g; g--)
                            b[g] &&
                                ((u = Math.round(h.y1)),
                                (k = Math.round(h.y1 + (B[g] + b[g].margin + F))),
                                (b[g].lineCoordinates.y1 = k),
                                (b[g].lineCoordinates.y2 = k),
                                "inside" === b[g].labelPlacement &&
                                    0 < g &&
                                    ((b[g].lineCoordinates.y1 = k - B[g] + (b[g]._titleTextBlock ? b[g]._titleTextBlock.height : 0) + b[g].tickLength + (b[g].stripLineLabelEffectiveHeight || 0)),
                                    (b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2)),
                                "inside" === b[g].tickPlacement && 0 < g && ((b[g].lineCoordinates.y1 -= b[g].tickLength), (b[g].lineCoordinates.y2 = b[g].lineCoordinates.y1 - b[g].lineThickness / 2)),
                                (b[g].bounds = { x1: f, y1: u + (b[g].margin + F), x2: r, y2: k, width: r - f }),
                                (b[g].bounds.height = b[g].bounds.y2 - b[g].bounds.y1),
                                b[g].title && (b[g]._titleTextBlock.maxWidth = 0 < b[g].titleMaxWidth && b[g].titleMaxWidth < b[g].lineCoordinates.width ? b[g].titleMaxWidth : b[g].lineCoordinates.width),
                                (F += B[g] + b[g].margin));
                    if (a && 0 < a.length)
                        for (g = 0; g < a.length; g++) {
                            O = a[g]._labels && 0 < a[g]._labels.length ? a[g]._labels[0].textBlock.fontSize / 2 : 0;
                            f = Math.round(h.x1 + e);
                            u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                            r = Math.round(h.x1 + V + e);
                            k =
                                c && 0 < c.length
                                    ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2 - U)
                                    : h.y2 > m.height - Math.max(O, 10)
                                    ? m.height - Math.max(O, 10)
                                    : h.y2;
                            if (c && 0 < c.length) for (O = 0; O < c.length; O++) c[O] && c[O].labelAutoFit && ((r = c[O].lineCoordinates.x1), (f = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? r - V : f));
                            if (b && 0 < b.length) for (O = 0; O < b.length; O++) b[O] && b[O].labelAutoFit && ((r = b[O].lineCoordinates.x1), (f = r - V));
                            a[g].lineCoordinates = { x1: r - N, y1: u, x2: r - N, y2: k, height: Math.abs(k - u) };
                            "inside" === a[g].labelPlacement &&
                                0 < g &&
                                ((a[g].lineCoordinates.x1 = a[g].lineCoordinates.x1 - (I[g] - (a[g]._titleTextBlock ? a[g]._titleTextBlock.height : 0)) + a[g].tickLength + (a[g].stripLineLabelEffectiveWidth || 0)),
                                (a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2));
                            "inside" === a[g].tickPlacement && 0 < g && ((a[g].lineCoordinates.x1 -= a[g].tickLength), (a[g].lineCoordinates.x2 = a[g].lineCoordinates.x1 + a[g].lineThickness / 2));
                            a[g].bounds = { x1: r - (I[g] + N), y1: u, x2: r - N, y2: k, height: k - u };
                            a[g].bounds.width = a[g].bounds.x2 - a[g].bounds.x1;
                            a[g].title && (a[g]._titleTextBlock.maxWidth = 0 < a[g].titleMaxWidth && a[g].titleMaxWidth < a[g].lineCoordinates.height ? a[g].titleMaxWidth : a[g].lineCoordinates.height);
                            a[g].calculateValueToPixelConversionParameters();
                            a[g].calculateBreaksSizeInValues();
                            N += I[g] + a[g].margin;
                        }
                    if (d && 0 < d.length)
                        for (g = 0; g < d.length; g++) {
                            O = d[g]._labels && 0 < d[g]._labels.length ? d[g]._labels[0].textBlock.fontSize / 2 : 0;
                            f = Math.round(h.x1 - e);
                            u = b && 0 < b.length ? Math.round(b[0] ? b[0].lineCoordinates.y2 : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1) : h.y1 < Math.max(O, 10) ? Math.max(O, 10) : h.y1;
                            r = Math.round(h.x2 - X - Y);
                            k =
                                c && 0 < c.length
                                    ? Math.round(c[0] ? c[0].lineCoordinates.y1 : h.y2 - U > m.height - Math.max(O, 10) ? m.height - Math.max(O, 10) : h.y2 - U)
                                    : h.y2 > m.height - Math.max(O, 10)
                                    ? m.height - Math.max(O, 10)
                                    : h.y2;
                            if (c && 0 < c.length)
                                for (O = 0; O < c.length; O++)
                                    c[O] && c[O].labelAutoFit && ((r = 0 > c[O].labelAngle ? Math.max(r, w) : 0 === c[O].labelAngle ? Math.max(r, w / 2) : r), (f = 0 > c[O].labelAngle || 0 === c[O].labelAngle ? r - X : f));
                            if (b && 0 < b.length) for (O = 0; O < b.length; O++) b[O] && b[O].labelAutoFit && ((r = b[O].lineCoordinates.x2), (f = r - X));
                            d[g].lineCoordinates = { x1: r + P, y1: u, x2: r + P, y2: k, height: Math.abs(k - u) };
                            "inside" === d[g].labelPlacement &&
                                0 < g &&
                                ((d[g].lineCoordinates.x1 = d[g].lineCoordinates.x1 + (y[g] - (d[g]._titleTextBlock ? d[g]._titleTextBlock.height : 0) - 2) - d[g].tickLength - (d[g].stripLineLabelEffectiveWidth || 0)),
                                (d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2));
                            "inside" === d[g].tickPlacement && 0 < g && ((d[g].lineCoordinates.x1 += d[g].tickLength), (d[g].lineCoordinates.x2 = d[g].lineCoordinates.x1 + d[g].lineThickness / 2));
                            d[g].bounds = { x1: d[g].lineCoordinates.x1, y1: u, x2: r + y[g] + P, y2: k, width: r - f, height: k - u };
                            d[g].bounds.width = d[g].bounds.x2 - d[g].bounds.x1;
                            d[g].title && (d[g]._titleTextBlock.maxWidth = 0 < d[g].titleMaxWidth && d[g].titleMaxWidth < d[g].lineCoordinates.height ? d[g].titleMaxWidth : d[g].lineCoordinates.height);
                            d[g].calculateValueToPixelConversionParameters();
                            d[g].calculateBreaksSizeInValues();
                            P += y[g] + d[g].margin;
                        }
                    for (g = 0; g < p.length; g++) "axisY" === p[g].type && (p[g].calculateValueToPixelConversionParameters(), p[g].calculateBreaksSizeInValues());
                    if (0 < x) {
                        if (a && 0 < a.length) for (g = 0; g < a.length; g++) t = Q[x - 1][g] === Q[x][g] ? !0 : !1;
                        else t = !0;
                        if (d && 0 < d.length) for (g = 0; g < d.length; g++) J = R[x - 1][g] === R[x][g] ? !0 : !1;
                        else J = !0;
                        if (c && 0 < c.length) for (g = 0; g < c.length; g++) L = G[x - 1][g] === G[x][g] ? !0 : !1;
                        else L = !0;
                        if (b && 0 < b.length) for (g = 0; g < b.length; g++) M = s[x - 1][g] === s[x][g] ? !0 : !1;
                        else M = !0;
                    }
                    if (t && J && L && M) break;
                    x++;
                }
                if (c && 0 < c.length) for (g = 0; g < c.length; g++) c[g].calculateStripLinesThicknessInValues(), c[g].calculateBreaksInPixels();
                if (b && 0 < b.length) for (g = 0; g < b.length; g++) b[g].calculateStripLinesThicknessInValues(), b[g].calculateBreaksInPixels();
                if (a && 0 < a.length) for (g = 0; g < a.length; g++) a[g].calculateStripLinesThicknessInValues(), a[g].calculateBreaksInPixels();
                if (d && 0 < d.length) for (g = 0; g < d.length; g++) d[g].calculateStripLinesThicknessInValues(), d[g].calculateBreaksInPixels();
            }
        };
        A.render = function (a, d, c, b, e) {
            e = a[0] ? a[0].chart : d[0].chart;
            var h = e.ctx;
            e.alignVerticalAxes && e.alignVerticalAxes();
            h.save();
            h.beginPath();
            a && a.length && h.rect(2, a[0].bounds.y1, a[0].chart.width - 4, a[a.length - 1].bounds.y2);
            d && d.length && h.rect(2, d[d.length - 1].bounds.y1, d[0].chart.width - 4, d[0].bounds.y2);
            h.clip();
            if (a && 0 < a.length) for (var f = 0; f < a.length; f++) a[f].renderLabelsTicksAndTitle();
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderLabelsTicksAndTitle();
            h.restore();
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderLabelsTicksAndTitle();
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderLabelsTicksAndTitle();
            e.preparePlotArea();
            f = e.plotArea;
            h.save();
            h.beginPath();
            h.rect(f.x1, f.y1, Math.abs(f.x2 - f.x1), Math.abs(f.y2 - f.y1));
            h.clip();
            if (a && 0 < a.length) for (f = 0; f < a.length; f++) a[f].renderStripLinesOfThicknessType("value");
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderStripLinesOfThicknessType("value");
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderStripLinesOfThicknessType("value");
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderStripLinesOfThicknessType("value");
            if (a && 0 < a.length) for (f = 0; f < a.length; f++) a[f].renderInterlacedColors();
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderInterlacedColors();
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderInterlacedColors();
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderInterlacedColors();
            h.restore();
            if (a && 0 < a.length) for (f = 0; f < a.length; f++) a[f].renderGrid(), r && (a[f].createMask(), a[f].renderBreaksBackground());
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderGrid(), r && (d[f].createMask(), d[f].renderBreaksBackground());
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderGrid(), r && (c[f].createMask(), c[f].renderBreaksBackground());
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderGrid(), r && (b[f].createMask(), b[f].renderBreaksBackground());
            if (a && 0 < a.length) for (f = 0; f < a.length; f++) a[f].renderAxisLine();
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderAxisLine();
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderAxisLine();
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderAxisLine();
            h = !1;
            if (a && 0 < a.length) for (f = 0; f < a.length; f++) a[f].renderStripLinesOfThicknessType("pixel"), a[f].crosshair && a[f].crosshair.enabled && ((h = !0), (e.clearedOverlayedCanvas = a[f].type));
            if (d && 0 < d.length) for (f = 0; f < d.length; f++) d[f].renderStripLinesOfThicknessType("pixel"), d[f].crosshair && d[f].crosshair.enabled && ((h = !0), (e.clearedOverlayedCanvas = d[f].type));
            if (c && 0 < c.length) for (f = 0; f < c.length; f++) c[f].renderStripLinesOfThicknessType("pixel"), c[f].crosshair && c[f].crosshair.enabled && ((h = !0), (e.clearedOverlayedCanvas = c[f].type));
            if (b && 0 < b.length) for (f = 0; f < b.length; f++) b[f].renderStripLinesOfThicknessType("pixel"), b[f].crosshair && b[f].crosshair.enabled && ((h = !0), (e.clearedOverlayedCanvas = b[f].type));
            if (h || (!h && e.clearedOverlayedCanvas && 0 <= e.clearedOverlayedCanvas.indexOf("axis")))
                e.resetOverlayedCanvas(), e.renderCrosshairs(null, l(e.sessionVariables.crosshairShownByPixel) || e.sessionVariables.crosshairShownByPixel ? !0 : e.sessionVariables.crosshairShownByPixel);
        };
        A.prototype.calculateStripLinesThicknessInValues = function () {
            for (var a = 0; a < this.stripLines.length; a++)
                if (null !== this.stripLines[a].startValue && null !== this.stripLines[a].endValue) {
                    var d = Math.min(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        c = Math.max(this.stripLines[a].startValue, this.stripLines[a].endValue),
                        b = this.getApparentDifference(d, c);
                    this.stripLines[a].value = this.convertPixelToValue((this.convertValueToPixel(d) + this.convertValueToPixel(c)) / 2);
                    this.stripLines[a].thickness = b;
                    this.stripLines[a]._thicknessType = "value";
                }
        };
        A.prototype.calculateBreaksSizeInValues = function () {
            for (
                var a = "left" === this._position || "right" === this._position ? this.lineCoordinates.height || this.chart.height : this.lineCoordinates.width || this.chart.width,
                    d = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                    c = this.conversionParameters.pixelPerUnit || a / (this.logarithmic ? this.conversionParameters.maximum / this.conversionParameters.minimum : this.conversionParameters.maximum - this.conversionParameters.minimum),
                    b = this.scaleBreaks && !l(this.scaleBreaks.options.spacing),
                    e,
                    h = 0;
                h < d.length;
                h++
            )
                (e = b || !l(d[h].options.spacing)),
                    (d[h].spacing = Ua(d[h].spacing, a, 8, e ? 0.1 * a : 8, e ? 0 : 3) << 0),
                    (d[h].size = 0 > d[h].spacing ? 0 : Math.abs(d[h].spacing / c)),
                    this.logarithmic && (d[h].size = Math.pow(this.logarithmBase, d[h].size));
        };
        A.prototype.calculateBreaksInPixels = function () {
            if (!(this.scaleBreaks && 0 >= this.scaleBreaks._appliedBreaks.length)) {
                var a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
                a.length && (this.scaleBreaks.firstBreakIndex = this.scaleBreaks.lastBreakIndex = null);
                for (var d = 0; d < a.length && !(a[d].startValue > this.conversionParameters.maximum); d++)
                    a[d].endValue < this.conversionParameters.minimum ||
                        (l(this.scaleBreaks.firstBreakIndex) && (this.scaleBreaks.firstBreakIndex = d),
                        a[d].startValue >= this.conversionParameters.minimum && ((a[d].startPixel = this.convertValueToPixel(a[d].startValue)), (this.scaleBreaks.lastBreakIndex = d)),
                        a[d].endValue <= this.conversionParameters.maximum && (a[d].endPixel = this.convertValueToPixel(a[d].endValue)));
            }
        };
        A.prototype.renderLabelsTicksAndTitle = function () {
            var a = this,
                d = !1,
                c = 0,
                b = 0,
                e = 1,
                h = 0;
            0 !== this.labelAngle && 360 !== this.labelAngle && (e = 1.2);
            if ("undefined" === typeof this.options.interval) {
                if ("bottom" === this._position || "top" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], e = 0 !== this.labelAngle && 360 !== this.labelAngle ? 1 : 1.2, f, l = this.viewportMaximum, r = this.lineCoordinates.width / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            n = this._labels[k];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum ||
                                !(k === this._labels.length - 1 || f < (Math.log(l / n.position) * r) / e) ||
                                (c.push(n), (l = n.position), (f = n.textBlock.width * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
                        }
                        this._labels = c;
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            (n = this._labels[k]),
                                n.position < this.viewportMinimum || ((f = n.textBlock.width * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.height * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))), (c += f));
                        c > this.lineCoordinates.width * e && this.labelAutoFit && (d = !0);
                    }
                if ("left" === this._position || "right" === this._position)
                    if (this.logarithmic && !this.equidistantInterval && this.labelAutoFit) {
                        for (var c = [], m, l = this.viewportMaximum, r = this.lineCoordinates.height / Math.log(this.range), k = this._labels.length - 1; 0 <= k; k--) {
                            n = this._labels[k];
                            if (n.position < this.viewportMinimum) break;
                            n.position > this.viewportMaximum ||
                                !(k === this._labels.length - 1 || m < Math.log(l / n.position) * r) ||
                                (c.push(n), (l = n.position), (m = n.textBlock.height * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))));
                        }
                        this._labels = c;
                    } else {
                        for (k = 0; k < this._labels.length; k++)
                            (n = this._labels[k]),
                                n.position < this.viewportMinimum || ((m = n.textBlock.height * Math.abs(Math.cos((Math.PI / 180) * this.labelAngle)) + n.textBlock.width * Math.abs(Math.sin((Math.PI / 180) * this.labelAngle))), (b += m));
                        b > this.lineCoordinates.height * e && this.labelAutoFit && (d = !0);
                    }
            }
            this.logarithmic &&
                !this.equidistantInterval &&
                this.labelAutoFit &&
                this._labels.sort(function (a, b) {
                    return a.position - b.position;
                });
            var k = 0,
                n,
                p;
            if ("bottom" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((p = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(b, p.y << 0),
                                this.ctx.lineTo(b, (p.y + this.tickLength) << 0),
                                this.ctx.stroke()),
                            (d && 0 !== h++ % 2 && this.labelAutoFit) ||
                                (0 === n.textBlock.angle
                                    ? ((p.x -= n.textBlock.width / 2),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y - (("inside" === this.tickPlacement ? this.tickLength : 0) + n.textBlock.height - n.textBlock.fontSize / 2)
                                              : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.fontSize / 2 + 5))
                                    : 0 > this.labelAngle
                                    ? ((p.x -= "inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle)),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y - ("inside" === this.tickPlacement ? this.tickLength : 0) - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : p.y +
                                                ("inside" === this.tickPlacement ? 0 : this.tickLength) +
                                                5 +
                                                Math.abs(n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) - (n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle))))
                                    : ((p.x -= "inside" === this.labelPlacement ? n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y -
                                                ("inside" === this.tickPlacement ? this.tickLength : 0) -
                                                n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : p.y + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5 + Math.abs((n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)))),
                                (n.textBlock.x = p.x),
                                (n.textBlock.y = p.y)));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationIterationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((p = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(b, p.y << 0);
                                    a.ctx.lineTo(b, (p.y - a.tickLength) << 0);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2),
                    (this._titleTextBlock.y = this.bounds.y2 - this._titleTextBlock.height + this._titleTextBlock._lineHeight / 2 - 1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("top" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((p = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (b = 1 === this.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(b, p.y << 0),
                                this.ctx.lineTo(b, (p.y - this.tickLength) << 0),
                                this.ctx.stroke()),
                            (d && 0 !== h++ % 2 && this.labelAutoFit) ||
                                (0 === n.textBlock.angle
                                    ? ((p.x -= n.textBlock.width / 2),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y + this.labelFontSize / 2 + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : p.y - (("inside" === this.tickPlacement ? 0 : this.tickLength) + n.textBlock.height - n.textBlock.fontSize / 2)))
                                    : 0 > this.labelAngle
                                    ? ((p.x -= "inside" === this.labelPlacement ? n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y +
                                                ("inside" === this.tickPlacement ? this.tickLength : 0) +
                                                5 -
                                                n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) +
                                                (n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : p.y - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 2 - (n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)))
                                    : ((p.x -= "inside" === this.labelPlacement ? 0 : n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle)),
                                      (p.y =
                                          "inside" === this.labelPlacement
                                              ? p.y + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5 + (n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)
                                              : p.y -
                                                ("inside" === this.tickPlacement ? 0 : this.tickLength) -
                                                2 -
                                                ((n.textBlock.height - n.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle) + n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)))),
                                (n.textBlock.x = p.x),
                                (n.textBlock.y = p.y)));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationIterationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((p = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (p.x << 0) + 0.5 : p.x << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(b, p.y << 0);
                                    a.ctx.lineTo(b, (p.y + a.tickLength) << 0);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.lineCoordinates.x1 + this.lineCoordinates.width / 2 - this._titleTextBlock.width / 2),
                    (this._titleTextBlock.y = this.bounds.y1 + this._titleTextBlock._lineHeight / 2 + 1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("left" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((p = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(p.x << 0, b),
                                this.ctx.lineTo((p.x - this.tickLength) << 0, b),
                                this.ctx.stroke()),
                            (d && 0 !== h++ % 2 && this.labelAutoFit) ||
                                (0 === this.labelAngle
                                    ? ((n.textBlock.y = p.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? p.x + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : p.x - n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - ("inside" === this.tickPlacement ? 0 : this.tickLength) - 5))
                                    : 0 > this.labelAngle
                                    ? ((n.textBlock.y = "inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? p.x - (n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : p.x -
                                                n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) +
                                                (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                ("inside" === this.tickPlacement ? 0 : this.tickLength) -
                                                5))
                                    : ((n.textBlock.y = "inside" === this.labelPlacement ? p.y : p.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? this.tickLength : 0) + 5
                                              : p.x -
                                                n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) -
                                                (n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                ("inside" === this.tickPlacement ? 0 : this.tickLength) -
                                                5))));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationIterationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((p = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(p.x << 0, b);
                                    a.ctx.lineTo((p.x + a.tickLength) << 0, b);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.bounds.x1 + this._titleTextBlock._lineHeight / 2),
                    (this._titleTextBlock.y = this.lineCoordinates.height / 2 + this._titleTextBlock.width / 2 + this.lineCoordinates.y1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            } else if ("right" === this._position) {
                for (k = 0; k < this._labels.length; k++)
                    (n = this._labels[k]),
                        n.position < this.viewportMinimum ||
                            n.position > this.viewportMaximum ||
                            ((p = this.getPixelCoordinatesOnAxis(n.position)),
                            this.tickThickness &&
                                "inside" != this.tickPlacement &&
                                ((this.ctx.lineWidth = this.tickThickness),
                                (this.ctx.strokeStyle = this.tickColor),
                                (b = 1 === this.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0),
                                this.ctx.beginPath(),
                                this.ctx.moveTo(p.x << 0, b),
                                this.ctx.lineTo((p.x + this.tickLength) << 0, b),
                                this.ctx.stroke()),
                            (d && 0 !== h++ % 2 && this.labelAutoFit) ||
                                (0 === this.labelAngle
                                    ? ((n.textBlock.y = p.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement ? p.x - n.textBlock.width - ("inside" === this.tickPlacement ? this.tickLength : 0) - 5 : p.x + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5))
                                    : 0 > this.labelAngle
                                    ? ((n.textBlock.y = "inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) : p.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? p.x -
                                                n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) +
                                                (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                ("inside" === this.tickPlacement ? this.tickLength : 0) -
                                                5
                                              : p.x - (n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5))
                                    : ((n.textBlock.y = "inside" === this.labelPlacement ? p.y - n.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) : p.y),
                                      (n.textBlock.x =
                                          "inside" === this.labelPlacement
                                              ? p.x -
                                                n.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) -
                                                (n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) -
                                                ("inside" === this.tickPlacement ? this.tickLength : 0) -
                                                5
                                              : p.x + (n.textBlock.height - n.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle) + ("inside" === this.tickPlacement ? 0 : this.tickLength) + 5))));
                "inside" === this.tickPlacement &&
                    this.chart.addEventListener(
                        "dataAnimationIterationEnd",
                        function () {
                            for (k = 0; k < a._labels.length; k++)
                                if (((n = a._labels[k]), !(n.position < a.viewportMinimum || n.position > a.viewportMaximum) && ((p = a.getPixelCoordinatesOnAxis(n.position)), a.tickThickness))) {
                                    a.ctx.lineWidth = a.tickThickness;
                                    a.ctx.strokeStyle = a.tickColor;
                                    var b = 1 === a.ctx.lineWidth % 2 ? (p.y << 0) + 0.5 : p.y << 0;
                                    a.ctx.save();
                                    a.ctx.beginPath();
                                    a.ctx.moveTo(p.x << 0, b);
                                    a.ctx.lineTo((p.x - a.tickLength) << 0, b);
                                    a.ctx.stroke();
                                    a.ctx.restore();
                                }
                        },
                        this
                    );
                this.title &&
                    (this._titleTextBlock.measureText(),
                    (this._titleTextBlock.x = this.bounds.x2 - this._titleTextBlock._lineHeight / 2),
                    (this._titleTextBlock.y = this.lineCoordinates.height / 2 - this._titleTextBlock.width / 2 + this.lineCoordinates.y1),
                    (this.titleMaxWidth = this._titleTextBlock.maxWidth),
                    this._titleTextBlock.render(!0));
            }
            h = 0;
            if ("inside" === this.labelPlacement)
                this.chart.addEventListener(
                    "dataAnimationIterationEnd",
                    function () {
                        for (k = 0; k < a._labels.length; k++)
                            (n = a._labels[k]), n.position < a.viewportMinimum || n.position > a.viewportMaximum || (d && 0 !== h++ % 2 && a.labelAutoFit) || (a.ctx.save(), a.ctx.beginPath(), n.textBlock.render(!0), a.ctx.restore());
                    },
                    this
                );
            else for (k = 0; k < this._labels.length; k++) (n = this._labels[k]), n.position < this.viewportMinimum || n.position > this.viewportMaximum || (d && 0 !== h++ % 2 && this.labelAutoFit) || n.textBlock.render(!0);
        };
        A.prototype.renderInterlacedColors = function () {
            var a = this.chart.plotArea.ctx,
                d,
                c,
                b = this.chart.plotArea,
                e = 0;
            d = !0;
            if (("bottom" === this._position || "top" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
                    d
                        ? ((d = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
                          (c = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position)),
                          a.fillRect(Math.min(c.x, d.x), b.y1, Math.abs(c.x - d.x), Math.abs(b.y1 - b.y2)),
                          (d = !1))
                        : (d = !0);
            else if (("left" === this._position || "right" === this._position) && this.interlacedColor)
                for (a.fillStyle = this.interlacedColor, e = 0; e < this._labels.length; e++)
                    d
                        ? ((c = this.getPixelCoordinatesOnAxis(this._labels[e].position)),
                          (d = e + 1 > this._labels.length - 1 ? this.getPixelCoordinatesOnAxis(this.viewportMaximum) : this.getPixelCoordinatesOnAxis(this._labels[e + 1].position)),
                          a.fillRect(b.x1, Math.min(c.y, d.y), Math.abs(b.x1 - b.x2), Math.abs(d.y - c.y)),
                          (d = !1))
                        : (d = !0);
            a.beginPath();
        };
        A.prototype.renderStripLinesOfThicknessType = function (a) {
            if (this.stripLines && 0 < this.stripLines.length && a) {
                var d = this,
                    c,
                    b,
                    e = 0,
                    h = 0,
                    f = !1;
                b = !1;
                for (var r = [], t = [], k = !1, m, e = 0; e < this.stripLines.length; e++) {
                    var n = this.stripLines[e];
                    n._thicknessType === a &&
                        (("pixel" === a && (n.value < this.viewportMinimum || n.value > this.viewportMaximum || l(n.value) || isNaN(this.range))) ||
                            ("value" === a &&
                                ((n.startValue <= this.viewportMinimum && n.endValue <= this.viewportMinimum) ||
                                    (n.startValue >= this.viewportMaximum && n.endValue >= this.viewportMaximum) ||
                                    l(n.startValue) ||
                                    l(n.endValue) ||
                                    isNaN(this.range))) ||
                            r.push(n));
                }
                for (e = 0; e < this._stripLineLabels.length; e++)
                    if (((n = this.stripLines[e]), (c = this._stripLineLabels[e]), !(c.position < this.viewportMinimum || c.position > this.viewportMaximum || isNaN(this.range))))
                        if (((b = this.getPixelCoordinatesOnAxis(c.position)), "outside" === c.stripLine.labelPlacement)) {
                            n &&
                                ((this.ctx.strokeStyle = n.color),
                                (this.ctx.lineWidth = "pixel" === n._thicknessType ? n.thickness : this.tickThickness),
                                l(n.opacity) || "pixel" !== n._thicknessType || ((m = n.ctx.globalAlpha), (n.ctx.globalAlpha = n.opacity)));
                            if ("bottom" === this._position) {
                                var p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0;
                                this.ctx.beginPath();
                                this.ctx.moveTo(p, b.y << 0);
                                this.ctx.lineTo(p, (b.y + this.tickLength) << 0);
                                this.ctx.stroke();
                                0 === this.labelAngle
                                    ? ((b.x -= c.textBlock.width / 2), (b.y += this.tickLength + c.textBlock.fontSize / 2 + 5))
                                    : ((b.x -= 0 > this.labelAngle ? c.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0),
                                      (b.y +=
                                          this.tickLength +
                                          5 +
                                          (0 > this.labelAngle
                                              ? Math.abs(c.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle) - (c.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle))
                                              : Math.abs((c.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)))));
                            } else
                                "top" === this._position
                                    ? ((p = 1 === this.ctx.lineWidth % 2 ? (b.x << 0) + 0.5 : b.x << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(p, b.y << 0),
                                      this.ctx.lineTo(p, (b.y - this.tickLength) << 0),
                                      this.ctx.stroke(),
                                      0 === this.labelAngle
                                          ? ((b.x -= c.textBlock.width / 2), (b.y -= this.tickLength + c.textBlock.height - c.textBlock.fontSize / 2))
                                          : ((b.x -= 0 < this.labelAngle ? c.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) : 0),
                                            (b.y -=
                                                this.tickLength +
                                                2 +
                                                (0 < this.labelAngle
                                                    ? (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle) + c.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)
                                                    : (c.textBlock.height - c.textBlock.fontSize / 2) * Math.cos((Math.PI / 180) * this.labelAngle)))))
                                    : "left" === this._position
                                    ? ((p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(b.x << 0, p),
                                      this.ctx.lineTo((b.x - this.tickLength) << 0, p),
                                      this.ctx.stroke(),
                                      0 === this.labelAngle
                                          ? (b.x = b.x - c.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - this.tickLength - 5)
                                          : ((b.y -= c.textBlock.width * Math.sin((Math.PI / 180) * this.labelAngle)),
                                            (b.x -=
                                                this.tickLength +
                                                5 +
                                                (0 < this.labelAngle
                                                    ? c.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) + (c.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle)
                                                    : c.textBlock.width * Math.cos((Math.PI / 180) * this.labelAngle) - (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle)))))
                                    : "right" === this._position &&
                                      ((p = 1 === this.ctx.lineWidth % 2 ? (b.y << 0) + 0.5 : b.y << 0),
                                      this.ctx.beginPath(),
                                      this.ctx.moveTo(b.x << 0, p),
                                      this.ctx.lineTo((b.x + this.tickLength) << 0, p),
                                      this.ctx.stroke(),
                                      (b.x =
                                          0 === this.labelAngle
                                              ? b.x + this.tickLength + 5
                                              : this.tickLength +
                                                5 +
                                                (0 < this.labelAngle
                                                    ? b.x + (c.textBlock.height - c.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle)
                                                    : b.x - (c.textBlock.fontSize / 2) * Math.sin((Math.PI / 180) * this.labelAngle))));
                            m && (n.ctx.globalAlpha = m);
                            c.textBlock.x = b.x;
                            c.textBlock.y = b.y;
                            t.push(c);
                        } else
                            n._thicknessType === a &&
                                ((c.textBlock.angle = -90),
                                "bottom" === this._position
                                    ? ((c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3),
                                      c.textBlock.measureText(),
                                      b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1
                                          ? l(n.startValue)
                                              ? (b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                              : (b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                                          : ((c.textBlock.angle = 90), l(n.startValue) ? (b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2) : (b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2)),
                                      (b.y =
                                          -90 === c.textBlock.angle
                                              ? "near" === c.stripLine.labelAlign
                                                  ? this.chart.plotArea.y2 - 3
                                                  : "center" === c.stripLine.labelAlign
                                                  ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2
                                                  : this.chart.plotArea.y1 + c.textBlock.width + 3
                                              : "near" === c.stripLine.labelAlign
                                              ? this.chart.plotArea.y2 - c.textBlock.width - 3
                                              : "center" === c.stripLine.labelAlign
                                              ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2
                                              : this.chart.plotArea.y1 + 3))
                                    : "top" === this._position
                                    ? ((c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.height - 3),
                                      c.textBlock.measureText(),
                                      b.x - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.x1
                                          ? l(n.startValue)
                                              ? (b.x -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                              : (b.x -= c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                                          : ((c.textBlock.angle = 90), l(n.startValue) ? (b.x += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2) : (b.x += c.textBlock.height / 2 - c.textBlock.fontSize / 2)),
                                      (b.y =
                                          -90 === c.textBlock.angle
                                              ? "near" === c.stripLine.labelAlign
                                                  ? this.chart.plotArea.y1 + c.textBlock.width + 3
                                                  : "center" === c.stripLine.labelAlign
                                                  ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 + c.textBlock.width) / 2
                                                  : this.chart.plotArea.y2 - 3
                                              : "near" === c.stripLine.labelAlign
                                              ? this.chart.plotArea.y1 + 3
                                              : "center" === c.stripLine.labelAlign
                                              ? (this.chart.plotArea.y2 + this.chart.plotArea.y1 - c.textBlock.width) / 2
                                              : this.chart.plotArea.y2 - c.textBlock.width - 3))
                                    : "left" === this._position
                                    ? ((c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3),
                                      (c.textBlock.angle = 0),
                                      c.textBlock.measureText(),
                                      b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1
                                          ? l(n.startValue)
                                              ? (b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                              : (b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                                          : l(n.startValue)
                                          ? (b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                          : (b.y += c.textBlock.height / 2 - c.textBlock.fontSize + 3),
                                      (b.x =
                                          "near" === c.stripLine.labelAlign
                                              ? this.chart.plotArea.x1 + 3
                                              : "center" === c.stripLine.labelAlign
                                              ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2
                                              : this.chart.plotArea.x2 - c.textBlock.width - 3))
                                    : "right" === this._position &&
                                      ((c.textBlock.maxWidth = this.options.stripLines[e].labelMaxWidth ? this.options.stripLines[e].labelMaxWidth : this.chart.plotArea.width - 3),
                                      (c.textBlock.angle = 0),
                                      c.textBlock.measureText(),
                                      b.y - c.textBlock.height - n.thickness / 2 > this.chart.plotArea.y1
                                          ? l(n.startValue)
                                              ? (b.y -= c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                              : (b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2)
                                          : l(n.startValue)
                                          ? (b.y += c.textBlock.height - c.textBlock.fontSize / 2 + n.thickness / 2)
                                          : (b.y -= c.textBlock.height / 2 - c.textBlock.fontSize / 2 + 3),
                                      (b.x =
                                          "near" === c.stripLine.labelAlign
                                              ? this.chart.plotArea.x2 - c.textBlock.width - 3
                                              : "center" === c.stripLine.labelAlign
                                              ? (this.chart.plotArea.x2 + this.chart.plotArea.x1) / 2 - c.textBlock.width / 2
                                              : this.chart.plotArea.x1 + 3)),
                                (c.textBlock.x = b.x),
                                (c.textBlock.y = b.y),
                                t.push(c));
                if (!k) {
                    b = !1;
                    this.ctx.save();
                    this.ctx.beginPath();
                    this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                    this.ctx.clip();
                    for (e = 0; e < r.length; e++)
                        (n = r[e]),
                            n.showOnTop
                                ? f ||
                                  ((f = !0),
                                  this.chart.addEventListener(
                                      "dataAnimationIterationEnd",
                                      function () {
                                          this.ctx.save();
                                          this.ctx.beginPath();
                                          this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                                          this.ctx.clip();
                                          for (h = 0; h < r.length; h++) (n = r[h]), n.showOnTop && n.render();
                                          this.ctx.restore();
                                      },
                                      n
                                  ))
                                : n.render();
                    for (e = 0; e < t.length; e++)
                        (c = t[e]),
                            c.stripLine.showOnTop
                                ? b ||
                                  ((b = !0),
                                  this.chart.addEventListener(
                                      "dataAnimationIterationEnd",
                                      function () {
                                          for (h = 0; h < t.length; h++)
                                              (c = t[h]),
                                                  "inside" === c.stripLine.labelPlacement &&
                                                      c.stripLine.showOnTop &&
                                                      (d.ctx.save(),
                                                      d.ctx.beginPath(),
                                                      d.ctx.rect(d.chart.plotArea.x1, d.chart.plotArea.y1, d.chart.plotArea.width, d.chart.plotArea.height),
                                                      d.ctx.clip(),
                                                      c.textBlock.render(!0),
                                                      d.ctx.restore());
                                      },
                                      c.textBlock
                                  ))
                                : "inside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
                    this.ctx.restore();
                    k = !0;
                }
                if (k) for (b = !1, e = 0; e < t.length; e++) (c = t[e]), "outside" === c.stripLine.labelPlacement && c.textBlock.render(!0);
            }
        };
        A.prototype.renderBreaksBackground = function () {
            this.chart._breaksCanvas &&
                this.scaleBreaks &&
                0 < this.scaleBreaks._appliedBreaks.length &&
                this.maskCanvas &&
                (this.chart._breaksCanvasCtx.save(),
                this.chart._breaksCanvasCtx.beginPath(),
                this.chart._breaksCanvasCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height),
                this.chart._breaksCanvasCtx.clip(),
                this.chart._breaksCanvasCtx.drawImage(this.maskCanvas, 0, 0, this.chart.width, this.chart.height),
                this.chart._breaksCanvasCtx.restore());
        };
        A.prototype.createMask = function () {
            if (this.scaleBreaks && 0 < this.scaleBreaks._appliedBreaks.length) {
                var a = this.scaleBreaks._appliedBreaks;
                r ? ((this.maskCanvas = ta(this.chart.width, this.chart.height)), (this.maskCtx = this.maskCanvas.getContext("2d"))) : ((this.maskCanvas = this.chart.plotArea.canvas), (this.maskCtx = this.chart.plotArea.ctx));
                this.maskCtx.save();
                this.maskCtx.beginPath();
                this.maskCtx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.maskCtx.clip();
                for (var d = 0; d < a.length; d++) a[d].endValue < this.viewportMinimum || a[d].startValue > this.viewportMaximum || isNaN(this.range) || a[d].render(this.maskCtx);
                this.maskCtx.restore();
            }
        };
        A.prototype.renderCrosshair = function (a, d) {
            isFinite(this.minimum) && isFinite(this.maximum) && this.crosshair.render(a, d);
        };
        A.prototype.showCrosshair = function (a) {
            l(a) ||
                a < this.viewportMinimum ||
                a > this.viewportMaximum ||
                ("top" === this._position || "bottom" === this._position ? this.crosshair.render(this.convertValueToPixel(a), null, a) : this.crosshair.render(null, this.convertValueToPixel(a), a));
        };
        A.prototype.renderGrid = function () {
            if (this.gridThickness && 0 < this.gridThickness) {
                var a = this.chart.ctx;
                a.save();
                var d,
                    c = this.chart.plotArea;
                a.lineWidth = this.gridThickness;
                a.strokeStyle = this.gridColor;
                a.setLineDash && a.setLineDash(I(this.gridDashType, this.gridThickness));
                if ("bottom" === this._position || "top" === this._position)
                    for (b = 0; b < this._labels.length; b++)
                        this._labels[b].position < this.viewportMinimum ||
                            this._labels[b].position > this.viewportMaximum ||
                            this._labels[b].breaksLabelType ||
                            (a.beginPath(), (d = this.getPixelCoordinatesOnAxis(this._labels[b].position)), (d = 1 === a.lineWidth % 2 ? (d.x << 0) + 0.5 : d.x << 0), a.moveTo(d, c.y1 << 0), a.lineTo(d, c.y2 << 0), a.stroke());
                else if ("left" === this._position || "right" === this._position)
                    for (var b = 0; b < this._labels.length; b++)
                        this._labels[b].position < this.viewportMinimum ||
                            this._labels[b].position > this.viewportMaximum ||
                            this._labels[b].breaksLabelType ||
                            (a.beginPath(), (d = this.getPixelCoordinatesOnAxis(this._labels[b].position)), (d = 1 === a.lineWidth % 2 ? (d.y << 0) + 0.5 : d.y << 0), a.moveTo(c.x1 << 0, d), a.lineTo(c.x2 << 0, d), a.stroke());
                a.restore();
            }
        };
        A.prototype.renderAxisLine = function () {
            var a = this.chart.ctx,
                d = r ? this.chart._preRenderCtx : a,
                c = Math.ceil(this.tickThickness / (this.reversed ? -2 : 2)),
                b = Math.ceil(this.tickThickness / (this.reversed ? 2 : -2)),
                e,
                h;
            d.save();
            if ("bottom" === this._position || "top" === this._position) {
                if (this.lineThickness) {
                    this.reversed ? ((e = this.lineCoordinates.x2), (h = this.lineCoordinates.x1)) : ((e = this.lineCoordinates.x1), (h = this.lineCoordinates.x2));
                    d.lineWidth = this.lineThickness;
                    d.strokeStyle = this.lineColor ? this.lineColor : "black";
                    d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
                    var f = 1 === this.lineThickness % 2 ? (this.lineCoordinates.y1 << 0) + 0.5 : this.lineCoordinates.y1 << 0;
                    d.beginPath();
                    if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                        if (l(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + b;
                        else
                            for (var u = this.scaleBreaks.firstBreakIndex; u <= this.scaleBreaks.lastBreakIndex; u++)
                                d.moveTo(e, f), d.lineTo(this.scaleBreaks._appliedBreaks[u].startPixel + c, f), (e = this.scaleBreaks._appliedBreaks[u].endPixel + b);
                    e && (d.moveTo(e, f), d.lineTo(h, f));
                    d.stroke();
                }
            } else if (("left" === this._position || "right" === this._position) && this.lineThickness) {
                this.reversed ? ((e = this.lineCoordinates.y1), (h = this.lineCoordinates.y2)) : ((e = this.lineCoordinates.y2), (h = this.lineCoordinates.y1));
                d.lineWidth = this.lineThickness;
                d.strokeStyle = this.lineColor;
                d.setLineDash && d.setLineDash(I(this.lineDashType, this.lineThickness));
                f = 1 === this.lineThickness % 2 ? (this.lineCoordinates.x1 << 0) + 0.5 : this.lineCoordinates.x1 << 0;
                d.beginPath();
                if (this.scaleBreaks && !l(this.scaleBreaks.firstBreakIndex))
                    if (l(this.scaleBreaks.lastBreakIndex)) e = this.scaleBreaks._appliedBreaks[this.scaleBreaks.firstBreakIndex].endPixel + c;
                    else
                        for (u = this.scaleBreaks.firstBreakIndex; u <= this.scaleBreaks.lastBreakIndex; u++)
                            d.moveTo(f, e), d.lineTo(f, this.scaleBreaks._appliedBreaks[u].startPixel + b), (e = this.scaleBreaks._appliedBreaks[u].endPixel + c);
                e && (d.moveTo(f, e), d.lineTo(f, h));
                d.stroke();
            }
            r &&
                (a.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
                this.chart._breaksCanvasCtx && this.chart._breaksCanvasCtx.drawImage(this.chart._preRenderCanvas, 0, 0, this.chart.width, this.chart.height),
                d.clearRect(0, 0, this.chart.width, this.chart.height));
            d.restore();
        };
        A.prototype.getPixelCoordinatesOnAxis = function (a) {
            var d = {};
            if ("bottom" === this._position || "top" === this._position) (d.x = this.convertValueToPixel(a)), (d.y = this.lineCoordinates.y1);
            if ("left" === this._position || "right" === this._position) (d.y = this.convertValueToPixel(a)), (d.x = this.lineCoordinates.x2);
            return d;
        };
        A.prototype.convertPixelToValue = function (a) {
            if ("undefined" === typeof a) return null;
            var d = 0,
                c = 0,
                b,
                d = !0,
                e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [],
                c = "number" === typeof a ? a : "left" === this._position || "right" === this._position ? a.y : a.x;
            if (this.logarithmic) {
                a = b = Math.pow(this.logarithmBase, (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit);
                if ((c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position)) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) < e[c].endValue) {
                                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                        break;
                                    } else
                                        (a *= e[c].endValue / this.conversionParameters.minimum / Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue))),
                                            (b /= Math.pow(e[c].size, Math.log(e[c].endValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)));
                                    d = !1;
                                } else if (b > e[c].startValue / this.conversionParameters.minimum) {
                                    b /= e[c].startValue / this.conversionParameters.minimum;
                                    if (b < e[c].size) {
                                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                                        break;
                                    } else a *= e[c].endValue / e[c].startValue / e[c].size;
                                    b /= e[c].size;
                                    d = !1;
                                } else break;
                            else if (b > e[c].startValue / e[c - 1].endValue) {
                                b /= e[c].startValue / e[c - 1].endValue;
                                if (b < e[c].size) {
                                    a *= Math.pow(e[c].endValue / e[c].startValue, 1 === e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) / b;
                                    break;
                                } else a *= e[c].endValue / e[c].startValue / e[c].size;
                                b /= e[c].size;
                            } else break;
                    }
                else
                    for (c = e.length - 1; 0 <= c; c--)
                        if (!(e[c].startValue > this.conversionParameters.minimum))
                            if (d)
                                if (e[c].endValue > this.conversionParameters.minimum) {
                                    if (1 < e[c].size && this.conversionParameters.minimum * Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size)) > e[c].startValue) {
                                        a = Math.pow(e[c].endValue / e[c].startValue, Math.log(b) / Math.log(e[c].size));
                                        break;
                                    } else
                                        (a *= (e[c].startValue / this.conversionParameters.minimum) * Math.pow(e[c].size, Math.log(e[c].startValue / this.conversionParameters.minimum) / Math.log(e[c].endValue / e[c].startValue)) * b),
                                            (b *= Math.pow(e[c].size, Math.log(this.conversionParameters.minimum / e[c].startValue) / Math.log(e[c].endValue / e[c].startValue)));
                                    d = !1;
                                } else if (b < e[c].endValue / this.conversionParameters.minimum) {
                                    b /= e[c].endValue / this.conversionParameters.minimum;
                                    if (b > 1 / e[c].size) {
                                        a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                                        break;
                                    } else a /= e[c].endValue / e[c].startValue / e[c].size;
                                    b *= e[c].size;
                                    d = !1;
                                } else break;
                            else if (b < e[c].endValue / e[c + 1].startValue) {
                                b /= e[c].endValue / e[c + 1].startValue;
                                if (b > 1 / e[c].size) {
                                    a *= Math.pow(e[c].endValue / e[c].startValue, 1 >= e[c].size ? 1 : Math.log(b) / Math.log(e[c].size)) * b;
                                    break;
                                } else a /= e[c].endValue / e[c].startValue / e[c].size;
                                b *= e[c].size;
                            } else break;
                d = a * this.viewportMinimum;
            } else {
                a = b = (c - this.conversionParameters.reference) / this.conversionParameters.pixelPerUnit;
                if ((c <= this.conversionParameters.reference === ("left" === this._position || "right" === this._position)) !== this.reversed)
                    for (c = 0; c < e.length; c++) {
                        if (!(e[c].endValue < this.conversionParameters.minimum))
                            if (d)
                                if (e[c].startValue < this.conversionParameters.minimum) {
                                    if (e[c].size && this.conversionParameters.minimum + (b * (e[c].endValue - e[c].startValue)) / e[c].size < e[c].endValue) {
                                        a = 0 >= e[c].size ? 0 : (b * (e[c].endValue - e[c].startValue)) / e[c].size;
                                        break;
                                    } else
                                        (a += e[c].endValue - this.conversionParameters.minimum - (e[c].size * (e[c].endValue - this.conversionParameters.minimum)) / (e[c].endValue - e[c].startValue)),
                                            (b -= (e[c].size * (e[c].endValue - this.conversionParameters.minimum)) / (e[c].endValue - e[c].startValue));
                                    d = !1;
                                } else if (b > e[c].startValue - this.conversionParameters.minimum) {
                                    b -= e[c].startValue - this.conversionParameters.minimum;
                                    if (b < e[c].size) {
                                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                                        break;
                                    } else a += e[c].endValue - e[c].startValue - e[c].size;
                                    b -= e[c].size;
                                    d = !1;
                                } else break;
                            else if (b > e[c].startValue - e[c - 1].endValue) {
                                b -= e[c].startValue - e[c - 1].endValue;
                                if (b < e[c].size) {
                                    a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) - b;
                                    break;
                                } else a += e[c].endValue - e[c].startValue - e[c].size;
                                b -= e[c].size;
                            } else break;
                    }
                else
                    for (c = e.length - 1; 0 <= c; c--)
                        if (!(e[c].startValue > this.conversionParameters.minimum))
                            if (d)
                                if (e[c].endValue > this.conversionParameters.minimum)
                                    if (e[c].size && this.conversionParameters.minimum + (b * (e[c].endValue - e[c].startValue)) / e[c].size > e[c].startValue) {
                                        a = 0 >= e[c].size ? 0 : (b * (e[c].endValue - e[c].startValue)) / e[c].size;
                                        break;
                                    } else
                                        (a += e[c].startValue - this.conversionParameters.minimum + (e[c].size * (this.conversionParameters.minimum - e[c].startValue)) / (e[c].endValue - e[c].startValue)),
                                            (b += (e[c].size * (this.conversionParameters.minimum - e[c].startValue)) / (e[c].endValue - e[c].startValue)),
                                            (d = !1);
                                else if (b < e[c].endValue - this.conversionParameters.minimum) {
                                    b -= e[c].endValue - this.conversionParameters.minimum;
                                    if (b > -1 * e[c].size) {
                                        a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                                        break;
                                    } else a -= e[c].endValue - e[c].startValue - e[c].size;
                                    b += e[c].size;
                                    d = !1;
                                } else break;
                            else if (b < e[c].endValue - e[c + 1].startValue) {
                                b -= e[c].endValue - e[c + 1].startValue;
                                if (b > -1 * e[c].size) {
                                    a += (e[c].endValue - e[c].startValue) * (0 === e[c].size ? 1 : b / e[c].size) + b;
                                    break;
                                } else a -= e[c].endValue - e[c].startValue - e[c].size;
                                b += e[c].size;
                            } else break;
                d = this.conversionParameters.minimum + a;
            }
            return d;
        };
        A.prototype.convertValueToPixel = function (a) {
            a = this.getApparentDifference(this.conversionParameters.minimum, a, a);
            return this.logarithmic
                ? (this.conversionParameters.reference + (this.conversionParameters.pixelPerUnit * Math.log(a / this.conversionParameters.minimum)) / this.conversionParameters.lnLogarithmBase + 0.5) << 0
                : "axisX" === this.type
                ? (this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5) << 0
                : this.conversionParameters.reference + this.conversionParameters.pixelPerUnit * (a - this.conversionParameters.minimum) + 0.5;
        };
        A.prototype.getApparentDifference = function (a, d, c, b) {
            var e = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            if (this.logarithmic) {
                c = l(c) ? d / a : c;
                for (var h = 0; h < e.length && !(d < e[h].startValue); h++)
                    a > e[h].endValue ||
                        (a <= e[h].startValue && d >= e[h].endValue
                            ? (c = (c / e[h].endValue) * e[h].startValue * e[h].size)
                            : a >= e[h].startValue && d >= e[h].endValue
                            ? (c = (c / e[h].endValue) * a * Math.pow(e[h].size, Math.log(e[h].endValue / a) / Math.log(e[h].endValue / e[h].startValue)))
                            : a <= e[h].startValue && d <= e[h].endValue
                            ? (c = (c / d) * e[h].startValue * Math.pow(e[h].size, Math.log(d / e[h].startValue) / Math.log(e[h].endValue / e[h].startValue)))
                            : !b && a > e[h].startValue && d < e[h].endValue && (c = a * Math.pow(e[h].size, Math.log(d / a) / Math.log(e[h].endValue / e[h].startValue))));
            } else
                for (c = l(c) ? Math.abs(d - a) : c, h = 0; h < e.length && !(d < e[h].startValue); h++)
                    a > e[h].endValue ||
                        (a <= e[h].startValue && d >= e[h].endValue
                            ? (c = c - e[h].endValue + e[h].startValue + e[h].size)
                            : a > e[h].startValue && d >= e[h].endValue
                            ? (c = c - e[h].endValue + a + (e[h].size * (e[h].endValue - a)) / (e[h].endValue - e[h].startValue))
                            : a <= e[h].startValue && d < e[h].endValue
                            ? (c = c - d + e[h].startValue + (e[h].size * (d - e[h].startValue)) / (e[h].endValue - e[h].startValue))
                            : !b && a > e[h].startValue && d < e[h].endValue && (c = a + (e[h].size * (d - a)) / (e[h].endValue - e[h].startValue)));
            return c;
        };
        A.prototype.setViewPortRange = function (a, d) {
            this.sessionVariables.newViewportMinimum = this.viewportMinimum = Math.min(a, d);
            this.sessionVariables.newViewportMaximum = this.viewportMaximum = Math.max(a, d);
        };
        A.prototype.getXValueAt = function (a) {
            if (!a) return null;
            var d = null;
            "left" === this._position ? (d = this.convertPixelToValue(a.y)) : "bottom" === this._position && (d = this.convertPixelToValue(a.x));
            return d;
        };
        A.prototype.calculateValueToPixelConversionParameters = function (a) {
            a = this.scaleBreaks ? this.scaleBreaks._appliedBreaks : [];
            var d = { pixelPerUnit: null, minimum: null, reference: null },
                c = this.lineCoordinates.width,
                b = this.lineCoordinates.height,
                c = "bottom" === this._position || "top" === this._position ? c : b,
                b = Math.abs(this.range);
            if (this.logarithmic)
                for (var e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
                    this.viewportMinimum > a[e].endValue ||
                        (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue
                            ? (c = 0)
                            : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((b = (b / a[e].endValue) * a[e].startValue), (c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)))
                            : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((b = (b / a[e].endValue) * this.viewportMinimum),
                              (c =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? c * (1 - ((parseFloat(a[e].spacing) / 100) * Math.log(a[e].endValue / this.viewportMinimum)) / Math.log(a[e].endValue / a[e].startValue))
                                      : c - (Math.min(a[e].spacing, 0.1 * c) * Math.log(a[e].endValue / this.viewportMinimum)) / Math.log(a[e].endValue / a[e].startValue)))
                            : this.viewportMinimum <= a[e].startValue &&
                              this.viewportMaximum < a[e].endValue &&
                              ((b = (b / this.viewportMaximum) * a[e].startValue),
                              (c =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? c * (1 - ((parseFloat(a[e].spacing) / 100) * Math.log(this.viewportMaximum / a[e].startValue)) / Math.log(a[e].endValue / a[e].startValue))
                                      : c - (Math.min(a[e].spacing, 0.1 * c) * Math.log(this.viewportMaximum / a[e].startValue)) / Math.log(a[e].endValue / a[e].startValue))));
            else
                for (e = 0; e < a.length && !(this.viewportMaximum < a[e].startValue); e++)
                    this.viewportMinimum > a[e].endValue ||
                        (this.viewportMinimum >= a[e].startValue && this.viewportMaximum <= a[e].endValue
                            ? (c = 0)
                            : this.viewportMinimum <= a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((b = b - a[e].endValue + a[e].startValue), (c = 0 < a[e].spacing.toString().indexOf("%") ? c * (1 - parseFloat(a[e].spacing) / 100) : c - Math.min(a[e].spacing, 0.1 * c)))
                            : this.viewportMinimum > a[e].startValue && this.viewportMaximum >= a[e].endValue
                            ? ((b = b - a[e].endValue + this.viewportMinimum),
                              (c =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? c * (1 - ((parseFloat(a[e].spacing) / 100) * (a[e].endValue - this.viewportMinimum)) / (a[e].endValue - a[e].startValue))
                                      : c - (Math.min(a[e].spacing, 0.1 * c) * (a[e].endValue - this.viewportMinimum)) / (a[e].endValue - a[e].startValue)))
                            : this.viewportMinimum <= a[e].startValue &&
                              this.viewportMaximum < a[e].endValue &&
                              ((b = b - this.viewportMaximum + a[e].startValue),
                              (c =
                                  0 < a[e].spacing.toString().indexOf("%")
                                      ? c * (1 - ((parseFloat(a[e].spacing) / 100) * (this.viewportMaximum - a[e].startValue)) / (a[e].endValue - a[e].startValue))
                                      : c - (Math.min(a[e].spacing, 0.1 * c) * (this.viewportMaximum - a[e].startValue)) / (a[e].endValue - a[e].startValue))));
            d.minimum = this.viewportMinimum;
            d.maximum = this.viewportMaximum;
            d.range = b;
            if ("bottom" === this._position || "top" === this._position)
                this.logarithmic
                    ? ((d.lnLogarithmBase = Math.log(this.logarithmBase)), (d.pixelPerUnit = ((this.reversed ? -1 : 1) * c * d.lnLogarithmBase) / Math.log(Math.abs(b))))
                    : (d.pixelPerUnit = ((this.reversed ? -1 : 1) * c) / Math.abs(b)),
                    (d.reference = this.reversed ? this.lineCoordinates.x2 : this.lineCoordinates.x1);
            if ("left" === this._position || "right" === this._position)
                this.logarithmic
                    ? ((d.lnLogarithmBase = Math.log(this.logarithmBase)), (d.pixelPerUnit = ((this.reversed ? 1 : -1) * c * d.lnLogarithmBase) / Math.log(Math.abs(b))))
                    : (d.pixelPerUnit = ((this.reversed ? 1 : -1) * c) / Math.abs(b)),
                    (d.reference = this.reversed ? this.lineCoordinates.y1 : this.lineCoordinates.y2);
            this.conversionParameters = d;
        };
        A.prototype.calculateAxisParameters = function () {
            if (this.logarithmic) this.calculateLogarithmicAxisParameters();
            else {
                var a = this.chart.layoutManager.getFreeSpace(),
                    d = !1,
                    c = !1;
                "bottom" === this._position || "top" === this._position ? ((this.maxWidth = a.width), (this.maxHeight = a.height)) : ((this.maxWidth = a.height), (this.maxHeight = a.width));
                var a = "axisX" === this.type ? ("xySwapped" === this.chart.plotInfo.axisPlacement ? 62 : 70) : "xySwapped" === this.chart.plotInfo.axisPlacement ? 50 : 40,
                    b = 4;
                "axisX" === this.type && (b = 600 > this.maxWidth ? 8 : 6);
                var a = Math.max(b, Math.floor(this.maxWidth / a)),
                    e,
                    h,
                    f,
                    b = 0;
                !l(this.options.viewportMinimum) && !l(this.options.viewportMaximum) && this.options.viewportMinimum >= this.options.viewportMaximum && (this.viewportMinimum = this.viewportMaximum = null);
                if (l(this.options.viewportMinimum) && !l(this.sessionVariables.newViewportMinimum) && !isNaN(this.sessionVariables.newViewportMinimum)) this.viewportMinimum = this.sessionVariables.newViewportMinimum;
                else if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
                if (l(this.options.viewportMaximum) && !l(this.sessionVariables.newViewportMaximum) && !isNaN(this.sessionVariables.newViewportMaximum)) this.viewportMaximum = this.sessionVariables.newViewportMaximum;
                else if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
                if (this.scaleBreaks)
                    for (b = 0; b < this.scaleBreaks._appliedBreaks.length; b++)
                        if (
                            ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue) ||
                                (!l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[b].startValue) ||
                                (!l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[b].startValue)) &&
                            ((!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue) ||
                                (!l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[b].endValue) ||
                                (!l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[b].endValue))
                        ) {
                            this.scaleBreaks._appliedBreaks.splice(b, 1);
                            break;
                        }
                if ("axisX" === this.type) {
                    if (this.dataSeries && 0 < this.dataSeries.length) for (e = 0; e < this.dataSeries.length; e++) "dateTime" === this.dataSeries[e].xValueType && (c = !0);
                    e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin;
                    h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax;
                    0 === h - e && ((b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), (h += b), (e -= b));
                    Infinity !== this.dataInfo.minDiff ? (f = this.dataInfo.minDiff) : 1 < h - e ? (f = 0.5 * Math.abs(h - e)) : ((f = 1), c && (d = !0));
                } else
                    "axisY" === this.type &&
                        ((e = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                        (h = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                        isFinite(e) || isFinite(h)
                            ? isFinite(e)
                                ? isFinite(h) || (h = e)
                                : (e = h)
                            : ((h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval), (e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity)),
                        0 === e && 0 === h
                            ? ((h += 9), (e = 0))
                            : 0 === h - e
                            ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)), (h += b), (e -= b))
                            : e > h
                            ? ((b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, !0)), 5)), 0 <= h ? (e = h - b) : (h = isFinite(e) ? e + b : 0))
                            : ((b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, !0)), 0.05)), 0 !== h && (h += b), 0 !== e && (e -= b)),
                        (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1),
                        this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 0 < e && (e = 0),
                        this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 0 > h && (h = 0));
                b = this.getApparentDifference(isNaN(this.viewportMinimum) || null === this.viewportMinimum ? e : this.viewportMinimum, isNaN(this.viewportMaximum) || null === this.viewportMaximum ? h : this.viewportMaximum, null, !0);
                if ("axisX" === this.type && c) {
                    this.valueType = "dateTime";
                    this.intervalType ||
                        (b / 1 <= a
                            ? ((this.interval = 1), (this.intervalType = "millisecond"))
                            : b / 2 <= a
                            ? ((this.interval = 2), (this.intervalType = "millisecond"))
                            : b / 5 <= a
                            ? ((this.interval = 5), (this.intervalType = "millisecond"))
                            : b / 10 <= a
                            ? ((this.interval = 10), (this.intervalType = "millisecond"))
                            : b / 20 <= a
                            ? ((this.interval = 20), (this.intervalType = "millisecond"))
                            : b / 50 <= a
                            ? ((this.interval = 50), (this.intervalType = "millisecond"))
                            : b / 100 <= a
                            ? ((this.interval = 100), (this.intervalType = "millisecond"))
                            : b / 200 <= a
                            ? ((this.interval = 200), (this.intervalType = "millisecond"))
                            : b / 250 <= a
                            ? ((this.interval = 250), (this.intervalType = "millisecond"))
                            : b / 300 <= a
                            ? ((this.interval = 300), (this.intervalType = "millisecond"))
                            : b / 400 <= a
                            ? ((this.interval = 400), (this.intervalType = "millisecond"))
                            : b / 500 <= a
                            ? ((this.interval = 500), (this.intervalType = "millisecond"))
                            : b / (1 * R.secondDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "second"))
                            : b / (2 * R.secondDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "second"))
                            : b / (5 * R.secondDuration) <= a
                            ? ((this.interval = 5), (this.intervalType = "second"))
                            : b / (10 * R.secondDuration) <= a
                            ? ((this.interval = 10), (this.intervalType = "second"))
                            : b / (15 * R.secondDuration) <= a
                            ? ((this.interval = 15), (this.intervalType = "second"))
                            : b / (20 * R.secondDuration) <= a
                            ? ((this.interval = 20), (this.intervalType = "second"))
                            : b / (30 * R.secondDuration) <= a
                            ? ((this.interval = 30), (this.intervalType = "second"))
                            : b / (1 * R.minuteDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "minute"))
                            : b / (2 * R.minuteDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "minute"))
                            : b / (5 * R.minuteDuration) <= a
                            ? ((this.interval = 5), (this.intervalType = "minute"))
                            : b / (10 * R.minuteDuration) <= a
                            ? ((this.interval = 10), (this.intervalType = "minute"))
                            : b / (15 * R.minuteDuration) <= a
                            ? ((this.interval = 15), (this.intervalType = "minute"))
                            : b / (20 * R.minuteDuration) <= a
                            ? ((this.interval = 20), (this.intervalType = "minute"))
                            : b / (30 * R.minuteDuration) <= a
                            ? ((this.interval = 30), (this.intervalType = "minute"))
                            : b / (1 * R.hourDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "hour"))
                            : b / (2 * R.hourDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "hour"))
                            : b / (3 * R.hourDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "hour"))
                            : b / (6 * R.hourDuration) <= a
                            ? ((this.interval = 6), (this.intervalType = "hour"))
                            : b / (1 * R.dayDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "day"))
                            : b / (2 * R.dayDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "day"))
                            : b / (4 * R.dayDuration) <= a
                            ? ((this.interval = 4), (this.intervalType = "day"))
                            : b / (1 * R.weekDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "week"))
                            : b / (2 * R.weekDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "week"))
                            : b / (3 * R.weekDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "week"))
                            : b / (1 * R.monthDuration) <= a
                            ? ((this.interval = 1), (this.intervalType = "month"))
                            : b / (2 * R.monthDuration) <= a
                            ? ((this.interval = 2), (this.intervalType = "month"))
                            : b / (3 * R.monthDuration) <= a
                            ? ((this.interval = 3), (this.intervalType = "month"))
                            : b / (6 * R.monthDuration) <= a
                            ? ((this.interval = 6), (this.intervalType = "month"))
                            : ((this.interval = b / (1 * R.yearDuration) <= a ? 1 : b / (2 * R.yearDuration) <= a ? 2 : b / (4 * R.yearDuration) <= a ? 4 : Math.floor(A.getNiceNumber(b / (a - 1), !0) / R.yearDuration)),
                              (this.intervalType = "year")));
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = e - f / 2;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = h + f / 2;
                    d
                        ? (this.autoValueFormatString = "MMM DD YYYY HH:mm")
                        : "year" === this.intervalType
                        ? (this.autoValueFormatString = "YYYY")
                        : "month" === this.intervalType
                        ? (this.autoValueFormatString = "MMM YYYY")
                        : "week" === this.intervalType
                        ? (this.autoValueFormatString = "MMM DD YYYY")
                        : "day" === this.intervalType
                        ? (this.autoValueFormatString = "MMM DD YYYY")
                        : "hour" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm TT")
                        : "minute" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm TT")
                        : "second" === this.intervalType
                        ? (this.autoValueFormatString = "hh:mm:ss TT")
                        : "millisecond" === this.intervalType && (this.autoValueFormatString = "fff'ms'");
                    this.valueFormatString || (this.valueFormatString = this.autoValueFormatString);
                } else {
                    this.intervalType = "number";
                    b = A.getNiceNumber(b, !1);
                    this.interval = this.options && 0 < this.options.interval ? this.options.interval : A.getNiceNumber(b / (a - 1), !0);
                    if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? e - f / 2 : Math.floor(e / this.interval) * this.interval;
                    if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? h + f / 2 : Math.ceil(h / this.interval) * this.interval;
                    0 === this.viewportMaximum &&
                        0 === this.viewportMinimum &&
                        (0 === this.options.viewportMinimum ? (this.viewportMaximum += 10) : 0 === this.options.viewportMaximum && (this.viewportMinimum -= 10),
                        this.options && "undefined" === typeof this.options.interval && (this.interval = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0)));
                }
                if (null === this.minimum || null === this.maximum)
                    if (
                        ("axisX" === this.type
                            ? ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                              (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                              0 === h - e && ((b = "undefined" === typeof this.options.interval ? 0.4 : this.options.interval), (h += b), (e -= b)),
                              (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1))
                            : "axisY" === this.type &&
                              ((e = null !== this.minimum ? this.minimum : this.dataInfo.min),
                              (h = null !== this.maximum ? this.maximum : this.dataInfo.max),
                              isFinite(e) || isFinite(h)
                                  ? 0 === e && 0 === h
                                      ? ((h += 9), (e = 0))
                                      : 0 === h - e
                                      ? ((b = Math.min(Math.abs(0.01 * Math.abs(h)), 5)), (h += b), (e -= b))
                                      : e > h
                                      ? ((b = Math.min(0.01 * Math.abs(this.getApparentDifference(h, e, null, !0)), 5)), 0 <= h ? (e = h - b) : (h = isFinite(e) ? e + b : 0))
                                      : ((b = Math.min(0.01 * Math.abs(this.getApparentDifference(e, h, null, !0)), 0.05)), 0 !== h && (h += b), 0 !== e && (e -= b))
                                  : ((h = "undefined" === typeof this.options.interval ? -Infinity : this.options.interval), (e = "undefined" !== typeof this.options.interval || isFinite(this.dataInfo.minDiff) ? 0 : Infinity)),
                              (f = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : 1 < h - e ? 0.5 * Math.abs(h - e) : 1),
                              this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 0 < e && (e = 0),
                              this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 0 > h && (h = 0)),
                        Math.abs(this.getApparentDifference(e, h, null, !0)),
                        "axisX" === this.type && c)
                    ) {
                        this.valueType = "dateTime";
                        if (null === this.minimum || isNaN(this.minimum))
                            (this.minimum = e - f / 2),
                                (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum));
                        if (null === this.maximum || isNaN(this.maximum))
                            (this.maximum = h + f / 2),
                                (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum));
                    } else
                        (this.intervalType = this.valueType = "number"),
                            null === this.minimum &&
                                ((this.minimum = "axisX" === this.type ? e - f / 2 : Math.floor(e / this.interval) * this.interval),
                                (this.minimum = Math.min(this.minimum, null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum) ? Infinity : this.sessionVariables.viewportMinimum))),
                            null === this.maximum &&
                                ((this.maximum = "axisX" === this.type ? h + f / 2 : Math.ceil(h / this.interval) * this.interval),
                                (this.maximum = Math.max(this.maximum, null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum) ? -Infinity : this.sessionVariables.viewportMaximum))),
                            0 === this.maximum && 0 === this.minimum && (0 === this.options.minimum ? (this.maximum += 10) : 0 === this.options.maximum && (this.minimum -= 10));
                l(this.sessionVariables.newViewportMinimum) && (this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum));
                l(this.sessionVariables.newViewportMaximum) && (this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum));
                this.range = this.viewportMaximum - this.viewportMinimum;
                this.intervalStartPosition =
                    "axisX" === this.type && c ? this.getLabelStartPoint(new Date(this.viewportMinimum), this.intervalType, this.interval) : Math.floor((this.viewportMinimum + 0.2 * this.interval) / this.interval) * this.interval;
                this.valueFormatString || (this.valueFormatString = A.generateValueFormatString(this.range, 2));
            }
        };
        A.prototype.calculateLogarithmicAxisParameters = function () {
            var a = this.chart.layoutManager.getFreeSpace(),
                d = Math.log(this.logarithmBase),
                c;
            "bottom" === this._position || "top" === this._position ? ((this.maxWidth = a.width), (this.maxHeight = a.height)) : ((this.maxWidth = a.height), (this.maxHeight = a.width));
            var a = "axisX" === this.type ? (500 > this.maxWidth ? 7 : Math.max(7, Math.floor(this.maxWidth / 100))) : Math.max(Math.floor(this.maxWidth / 50), 3),
                b,
                e,
                h,
                f;
            f = 1;
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = this.minimum;
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = this.maximum;
            if (this.scaleBreaks)
                for (f = 0; f < this.scaleBreaks._appliedBreaks.length; f++)
                    if (
                        ((!l(this.sessionVariables.newViewportMinimum) && this.sessionVariables.newViewportMinimum >= this.scaleBreaks._appliedBreaks[f].startValue) ||
                            (!l(this.options.minimum) && this.options.minimum >= this.scaleBreaks._appliedBreaks[f].startValue) ||
                            (!l(this.options.viewportMinimum) && this.viewportMinimum >= this.scaleBreaks._appliedBreaks[f].startValue)) &&
                        ((!l(this.sessionVariables.newViewportMaximum) && this.sessionVariables.newViewportMaximum <= this.scaleBreaks._appliedBreaks[f].endValue) ||
                            (!l(this.options.maximum) && this.options.maximum <= this.scaleBreaks._appliedBreaks[f].endValue) ||
                            (!l(this.options.viewportMaximum) && this.viewportMaximum <= this.scaleBreaks._appliedBreaks[f].endValue))
                    ) {
                        this.scaleBreaks._appliedBreaks.splice(f, 1);
                        break;
                    }
            "axisX" === this.type
                ? ((b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                  (e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                  1 === e / b && ((f = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval)), (e *= f), (b /= f)),
                  (h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? (e / b) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase))
                : "axisY" === this.type &&
                  ((b = null !== this.viewportMinimum ? this.viewportMinimum : this.dataInfo.viewPortMin),
                  (e = null !== this.viewportMaximum ? this.viewportMaximum : this.dataInfo.viewPortMax),
                  0 >= b && !isFinite(e) ? ((e = "undefined" === typeof this.options.interval ? 0 : this.options.interval), (b = 1)) : 0 >= b ? (b = e) : isFinite(e) || (e = b),
                  1 === b && 1 === e
                      ? ((e *= this.logarithmBase - 1 / this.logarithmBase), (b = 1))
                      : 1 === e / b
                      ? ((f = Math.min(e * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5))), (e *= f), (b /= f))
                      : b > e
                      ? ((f = Math.min((b / e) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 5))), 1 <= e ? (b = e / f) : (e = b * f))
                      : ((f = Math.min((e / b) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04))), 1 !== e && (e *= f), 1 !== b && (b /= f)),
                  (h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? (e / b) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase),
                  this.includeZero && (null === this.viewportMinimum || isNaN(this.viewportMinimum)) && 1 < b && (b = 1),
                  this.includeZero && (null === this.viewportMaximum || isNaN(this.viewportMaximum)) && 1 > e && (e = 1));
            f = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) / (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            var r = (isNaN(this.viewportMaximum) || null === this.viewportMaximum ? e : this.viewportMaximum) - (isNaN(this.viewportMinimum) || null === this.viewportMinimum ? b : this.viewportMinimum);
            this.intervalType = "number";
            f = Math.pow(this.logarithmBase, A.getNiceNumber(Math.abs(Math.log(f) / d), !1));
            this.options && 0 < this.options.interval ? (this.interval = this.options.interval) : ((this.interval = A.getNiceExponent(Math.log(f) / d / (a - 1), !0)), (c = A.getNiceNumber(r / (a - 1), !0)));
            if (null === this.viewportMinimum || isNaN(this.viewportMinimum)) this.viewportMinimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval));
            if (null === this.viewportMaximum || isNaN(this.viewportMaximum)) this.viewportMaximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval));
            1 === this.viewportMaximum &&
                1 === this.viewportMinimum &&
                (1 === this.options.viewportMinimum ? (this.viewportMaximum *= this.logarithmBase - 1 / this.logarithmBase) : 1 === this.options.viewportMaximum && (this.viewportMinimum /= this.logarithmBase - 1 / this.logarithmBase),
                this.options &&
                    "undefined" === typeof this.options.interval &&
                    ((this.interval = A.getNiceExponent(Math.ceil(Math.log(f) / d) / (a - 1))), (c = A.getNiceNumber((this.viewportMaximum - this.viewportMinimum) / (a - 1), !0))));
            if (null === this.minimum || null === this.maximum)
                "axisX" === this.type
                    ? ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
                      (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
                      1 === e / b && ((f = Math.pow(this.logarithmBase, "undefined" === typeof this.options.interval ? 0.4 : this.options.interval)), (e *= f), (b /= f)),
                      (h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? (e / b) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase))
                    : "axisY" === this.type &&
                      ((b = null !== this.minimum ? this.minimum : this.dataInfo.min),
                      (e = null !== this.maximum ? this.maximum : this.dataInfo.max),
                      isFinite(b) || isFinite(e)
                          ? 1 === b && 1 === e
                              ? ((e *= this.logarithmBase), (b /= this.logarithmBase))
                              : 1 === e / b
                              ? ((f = Math.pow(this.logarithmBase, this.interval)), (e *= f), (b /= f))
                              : b > e
                              ? ((f = Math.min(0.01 * (b / e), 5)), 1 <= e ? (b = e / f) : (e = b * f))
                              : ((f = Math.min((e / b) * Math.pow(this.logarithmBase, 0.01), Math.pow(this.logarithmBase, 0.04))), 1 !== e && (e *= f), 1 !== b && (b /= f))
                          : ((e = "undefined" === typeof this.options.interval ? 0 : this.options.interval), (b = 1)),
                      (h = Infinity !== this.dataInfo.minDiff ? this.dataInfo.minDiff : e / b > this.logarithmBase ? (e / b) * Math.pow(this.logarithmBase, 0.5) : this.logarithmBase),
                      this.includeZero && (null === this.minimum || isNaN(this.minimum)) && 1 < b && (b = 1),
                      this.includeZero && (null === this.maximum || isNaN(this.maximum)) && 1 > e && (e = 1)),
                    (this.intervalType = "number"),
                    null === this.minimum &&
                        ((this.minimum = "axisX" === this.type ? b / Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.floor(Math.log(b) / d / this.interval))),
                        l(
                            null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum)
                                ? "undefined" === typeof this.sessionVariables.newViewportMinimum
                                    ? Infinity
                                    : this.sessionVariables.newViewportMinimum
                                : this.sessionVariables.viewportMinimum
                        ) ||
                            (this.minimum = Math.min(
                                this.minimum,
                                null === this.sessionVariables.viewportMinimum || isNaN(this.sessionVariables.viewportMinimum)
                                    ? "undefined" === typeof this.sessionVariables.newViewportMinimum
                                        ? Infinity
                                        : this.sessionVariables.newViewportMinimum
                                    : this.sessionVariables.viewportMinimum
                            ))),
                    null === this.maximum &&
                        ((this.maximum = "axisX" === this.type ? e * Math.sqrt(h) : Math.pow(this.logarithmBase, this.interval * Math.ceil(Math.log(e) / d / this.interval))),
                        l(
                            null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum)
                                ? "undefined" === typeof this.sessionVariables.newViewportMaximum
                                    ? 0
                                    : this.sessionVariables.newViewportMaximum
                                : this.sessionVariables.viewportMaximum
                        ) ||
                            (this.maximum = Math.max(
                                this.maximum,
                                null === this.sessionVariables.viewportMaximum || isNaN(this.sessionVariables.viewportMaximum)
                                    ? "undefined" === typeof this.sessionVariables.newViewportMaximum
                                        ? 0
                                        : this.sessionVariables.newViewportMaximum
                                    : this.sessionVariables.viewportMaximum
                            ))),
                    1 === this.maximum &&
                        1 === this.minimum &&
                        (1 === this.options.minimum ? (this.maximum *= this.logarithmBase - 1 / this.logarithmBase) : 1 === this.options.maximum && (this.minimum /= this.logarithmBase - 1 / this.logarithmBase));
            this.viewportMinimum = Math.max(this.viewportMinimum, this.minimum);
            this.viewportMaximum = Math.min(this.viewportMaximum, this.maximum);
            this.viewportMinimum > this.viewportMaximum &&
                ((!this.options.viewportMinimum && !this.options.minimum) || this.options.viewportMaximum || this.options.maximum
                    ? this.options.viewportMinimum ||
                      this.options.minimum ||
                      (!this.options.viewportMaximum && !this.options.maximum) ||
                      (this.viewportMinimum = this.minimum = (this.options.viewportMaximum || this.options.maximum) / Math.pow(this.logarithmBase, 2 * Math.ceil(this.interval)))
                    : (this.viewportMaximum = this.maximum = this.options.viewportMinimum || this.options.minimum));
            b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval);
            this.range = this.viewportMaximum / this.viewportMinimum;
            this.noTicks = a;
            if (!this.options.interval && this.range < Math.pow(this.logarithmBase, 8 > this.viewportMaximum || 3 > a ? 2 : 3)) {
                for (d = Math.floor(this.viewportMinimum / c + 0.5) * c; d < this.viewportMinimum; ) d += c;
                this.equidistantInterval = !1;
                this.intervalStartPosition = d;
                this.interval = c;
            } else
                this.options.interval ||
                    ((c = Math.ceil(this.interval)), this.range > this.interval && ((this.interval = c), (b = Math.pow(this.logarithmBase, Math.floor(Math.log(this.viewportMinimum) / (d * this.interval) + 0.2) * this.interval)))),
                    (this.equidistantInterval = !0),
                    (this.intervalStartPosition = b);
            if (!this.valueFormatString && ((this.valueFormatString = "#,##0.##"), 1 > this.viewportMinimum)) {
                d = Math.floor(Math.abs(Math.log(this.viewportMinimum) / Math.LN10)) + 2;
                if (isNaN(d) || !isFinite(d)) d = 2;
                if (2 < d) for (f = 0; f < d - 2; f++) this.valueFormatString += "#";
            }
        };
        A.generateValueFormatString = function (a, d) {
            var c = "#,##0.",
                b = d;
            1 > a && ((b += Math.floor(Math.abs(Math.log(a) / Math.LN10))), isNaN(b) || !isFinite(b)) && (b = d);
            for (var e = 0; e < b; e++) c += "#";
            return c;
        };
        A.getNiceExponent = function (a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = 0 > c ? (1 >= b ? 1 : 5 >= b ? 5 : 10) : Math.max(Math.floor(b), 1);
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.getNiceNumber = function (a, d) {
            var c = Math.floor(Math.log(a) / Math.LN10),
                b = a / Math.pow(10, c),
                b = d ? (1.5 > b ? 1 : 3 > b ? 2 : 7 > b ? 5 : 10) : 1 >= b ? 1 : 2 >= b ? 2 : 5 >= b ? 5 : 10;
            return -20 > c ? Number(b * Math.pow(10, c)) : Number((b * Math.pow(10, c)).toFixed(20));
        };
        A.prototype.getLabelStartPoint = function () {
            var a = R[this.intervalType + "Duration"] * this.interval,
                a = new Date(Math.floor(this.viewportMinimum / a) * a);
            if ("millisecond" !== this.intervalType)
                if ("second" === this.intervalType) 0 < a.getMilliseconds() && (a.setSeconds(a.getSeconds() + 1), a.setMilliseconds(0));
                else if ("minute" === this.intervalType) {
                    if (0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setMinutes(a.getMinutes() + 1), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("hour" === this.intervalType) {
                    if (0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setHours(a.getHours() + 1), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("day" === this.intervalType) {
                    if (0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) a.setDate(a.getDate() + 1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("week" === this.intervalType) {
                    if (0 < a.getDay() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setDate(a.getDate() + (7 - a.getDay())), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else if ("month" === this.intervalType) {
                    if (1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds())
                        a.setMonth(a.getMonth() + 1), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0);
                } else
                    "year" === this.intervalType &&
                        (0 < a.getMonth() || 1 < a.getDate() || 0 < a.getHours() || 0 < a.getMinutes() || 0 < a.getSeconds() || 0 < a.getMilliseconds()) &&
                        (a.setFullYear(a.getFullYear() + 1), a.setMonth(0), a.setDate(1), a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0));
            return a;
        };
        oa(V, Y);
        oa(fa, Y);
        fa.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ea(this.parent[this.optionsName]), (d = this.parent.options[this.optionsName].indexOf(this.options)));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options[this.optionsName][d] = this.options;
            }
        };
        fa.prototype.render = function (a) {
            if (0 !== this.spacing || (0 !== this.options.lineThickness && ("undefined" !== typeof this.options.lineThickness || 0 !== this.parent.lineThickness))) {
                var d = this.ctx,
                    c = this.ctx.globalAlpha;
                this.ctx = a || this.ctx;
                this.ctx.save();
                this.ctx.beginPath();
                this.ctx.rect(this.chart.plotArea.x1, this.chart.plotArea.y1, this.chart.plotArea.width, this.chart.plotArea.height);
                this.ctx.clip();
                var b = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.startValue),
                    e = this.scaleBreaks.parent.getPixelCoordinatesOnAxis(this.endValue);
                this.ctx.strokeStyle = this.lineColor;
                this.ctx.fillStyle = this.color;
                this.ctx.beginPath();
                this.ctx.globalAlpha = 1;
                U(this.id);
                var h, f, l, r, k, m;
                a = Math.max(this.spacing, 3);
                var n = Math.max(0, this.lineThickness);
                this.ctx.lineWidth = n;
                this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, n));
                if ("bottom" === this.scaleBreaks.parent._position || "top" === this.scaleBreaks.parent._position)
                    if (
                        ((b = 1 === n % 2 ? (b.x << 0) + 0.5 : b.x << 0),
                        (f = 1 === n % 2 ? (e.x << 0) + 0.5 : e.x << 0),
                        "top" === this.scaleBreaks.parent._position
                            ? ((e = this.chart.plotArea.y1), (l = (this.chart.plotArea.y2 + n / 2 + 0.5) << 0))
                            : ((e = this.chart.plotArea.y2), (l = (this.chart.plotArea.y1 - n / 2 + 0.5) << 0), (a *= -1)),
                        (this.bounds = { x1: b - n / 2, y1: e, x2: f + n / 2, y2: l }),
                        this.ctx.moveTo(b, e),
                        "straight" === this.type || ("top" === this.scaleBreaks.parent._position && 0 >= a) || ("bottom" === this.scaleBreaks.parent._position && 0 <= a))
                    )
                        this.ctx.lineTo(b, l), this.ctx.lineTo(f, l), this.ctx.lineTo(f, e);
                    else if ("wavy" === this.type) {
                        r = b;
                        k = e;
                        h = 0.5;
                        m = (l - k) / a / 3;
                        for (var p = 0; p < m; p++) this.ctx.bezierCurveTo(r + h * a, k + a, r + h * a, k + 2 * a, r, k + 3 * a), (k += 3 * a), (h *= -1);
                        this.ctx.bezierCurveTo(r + h * a, k + a, r + h * a, k + 2 * a, r, k + 3 * a);
                        r = f;
                        h *= -1;
                        this.ctx.lineTo(r, k);
                        for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r + h * a, k - a, r + h * a, k - 2 * a, r, k - 3 * a), (k -= 3 * a), (h *= -1);
                    } else {
                        if ("zigzag" === this.type) {
                            h = -1;
                            k = e + a;
                            r = b + a;
                            m = (l - k) / a / 2;
                            for (p = 0; p < m; p++) this.ctx.lineTo(r, k), (r += 2 * h * a), (k += 2 * a), (h *= -1);
                            this.ctx.lineTo(r, k);
                            r += f - b;
                            for (p = 0; p < m + 1; p++) this.ctx.lineTo(r, k), (r += 2 * h * a), (k -= 2 * a), (h *= -1);
                            this.ctx.lineTo(r + h * a, k + a);
                        }
                    }
                else if ("left" === this.scaleBreaks.parent._position || "right" === this.scaleBreaks.parent._position)
                    if (
                        ((e = 1 === n % 2 ? (e.y << 0) + 0.5 : e.y << 0),
                        (l = 1 === n % 2 ? (b.y << 0) + 0.5 : b.y << 0),
                        "left" === this.scaleBreaks.parent._position
                            ? ((b = this.chart.plotArea.x1), (f = (this.chart.plotArea.x2 + n / 2 + 0.5) << 0))
                            : ((b = this.chart.plotArea.x2), (f = (this.chart.plotArea.x1 - n / 2 + 0.5) << 0), (a *= -1)),
                        (this.bounds = { x1: b, y1: e - n / 2, x2: f, y2: l + n / 2 }),
                        this.ctx.moveTo(b, e),
                        "straight" === this.type || ("left" === this.scaleBreaks.parent._position && 0 >= a) || ("right" === this.scaleBreaks.parent._position && 0 <= a))
                    )
                        this.ctx.lineTo(f, e), this.ctx.lineTo(f, l), this.ctx.lineTo(b, l);
                    else if ("wavy" === this.type) {
                        r = b;
                        k = e;
                        h = 0.5;
                        m = (f - r) / a / 3;
                        for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r + a, k + h * a, r + 2 * a, k + h * a, r + 3 * a, k), (r += 3 * a), (h *= -1);
                        this.ctx.bezierCurveTo(r + a, k + h * a, r + 2 * a, k + h * a, r + 3 * a, k);
                        k = l;
                        h *= -1;
                        this.ctx.lineTo(r, k);
                        for (p = 0; p < m; p++) this.ctx.bezierCurveTo(r - a, k + h * a, r - 2 * a, k + h * a, r - 3 * a, k), (r -= 3 * a), (h *= -1);
                    } else if ("zigzag" === this.type) {
                        h = 1;
                        k = e - a;
                        r = b + a;
                        m = (f - r) / a / 2;
                        for (p = 0; p < m; p++) this.ctx.lineTo(r, k), (k += 2 * h * a), (r += 2 * a), (h *= -1);
                        this.ctx.lineTo(r, k);
                        k += l - e;
                        for (p = 0; p < m + 1; p++) this.ctx.lineTo(r, k), (k += 2 * h * a), (r -= 2 * a), (h *= -1);
                        this.ctx.lineTo(r + a, k + h * a);
                    }
                0 < n && this.ctx.stroke();
                this.ctx.closePath();
                this.ctx.globalAlpha = this.fillOpacity;
                this.ctx.globalCompositeOperation = "destination-over";
                this.ctx.fill();
                this.ctx.restore();
                this.ctx.globalAlpha = c;
                this.ctx = d;
            }
        };
        oa(N, Y);
        N.prototype.createUserOptions = function (a) {
            if ("undefined" !== typeof a || this.options._isPlaceholder) {
                var d = 0;
                this.parent.options._isPlaceholder && this.parent.createUserOptions();
                this.options._isPlaceholder || (Ea(this.parent.stripLines), (d = this.parent.options.stripLines.indexOf(this.options)));
                this.options = "undefined" === typeof a ? {} : a;
                this.parent.options.stripLines[d] = this.options;
            }
        };
        N.prototype.render = function () {
            this.ctx.save();
            var a = this.parent.getPixelCoordinatesOnAxis(this.value),
                d = Math.abs("pixel" === this._thicknessType ? this.thickness : Math.abs(this.parent.convertValueToPixel(this.endValue) - this.parent.convertValueToPixel(this.startValue)));
            if (0 < d) {
                var c = null === this.opacity ? 1 : this.opacity;
                this.ctx.strokeStyle = this.color;
                this.ctx.beginPath();
                var b = this.ctx.globalAlpha;
                this.ctx.globalAlpha = c;
                U(this.id);
                var e, h, f, l;
                this.ctx.lineWidth = d;
                this.ctx.setLineDash && this.ctx.setLineDash(I(this.lineDashType, d));
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    (e = h = 1 === this.ctx.lineWidth % 2 ? (a.x << 0) + 0.5 : a.x << 0), (f = this.chart.plotArea.y1), (l = this.chart.plotArea.y2), (this.bounds = { x1: e - d / 2, y1: f, x2: h + d / 2, y2: l });
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    (f = l = 1 === this.ctx.lineWidth % 2 ? (a.y << 0) + 0.5 : a.y << 0), (e = this.chart.plotArea.x1), (h = this.chart.plotArea.x2), (this.bounds = { x1: e, y1: f - d / 2, x2: h, y2: l + d / 2 });
                this.ctx.moveTo(e, f);
                this.ctx.lineTo(h, l);
                this.ctx.stroke();
                this.ctx.globalAlpha = b;
            }
            this.ctx.restore();
        };
        oa(Z, Y);
        Z.prototype.showAt = function (a) {
            if (!this.enabled) return !1;
            var d = this.chart,
                c = !1;
            d.resetOverlayedCanvas();
            d.clearedOverlayedCanvas = this.parent.type;
            this.chart.renderCrosshairs(this.parent);
            if ("xySwapped" === d.plotInfo.axisPlacement)
                if ("bottom" === this.parent._position) for (var b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
                else if ("top" === this.parent._position) for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
                else if ("left" === this.parent._position) for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
                else {
                    if ("right" === this.parent._position) for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
                }
            else if ("bottom" === this.parent._position) for (b = 0; b < d.axisX.length; b++) this.parent === d.axisX[b] && (d.axisX[b]._crosshairValue = a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum ? a : null);
            else if ("top" === this.parent._position) for (b = 0; b < d.axisX2.length; b++) this.parent === d.axisX2[b] && (d.axisX2[b]._crosshairValue = a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum ? a : null);
            else if ("left" === this.parent._position) for (b = 0; b < d.axisY.length; b++) this.parent === d.axisY[b] && (d.axisY[b]._crosshairValue = a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum ? a : null);
            else if ("right" === this.parent._position) for (b = 0; b < d.axisY2.length; b++) this.parent === d.axisY2[b] && (d.axisY2[b]._crosshairValue = a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum ? a : null);
            for (b = 0; b < d.axisX.length; b++)
                (a = d.axisX[b]._crosshairValue),
                    d.axisX[b].crosshair &&
                        d.axisX[b].crosshair.enabled &&
                        (!l(a) && a >= d.axisX[b].viewportMinimum && a <= d.axisX[b].viewportMaximum
                            ? (d.axisX[b].showCrosshair(a), (d.axisX[b].sessionVariables.crosshairValue = d.axisX[b].crosshair._updatedValue = a), this === d.axisX[b].crosshair && (c = !0))
                            : void 0 !== a && (d.axisX[b].sessionVariables.crosshairValue = d.axisX[b].crosshair._updatedValue = null));
            for (b = 0; b < d.axisX2.length; b++)
                (a = d.axisX2[b]._crosshairValue),
                    d.axisX2[b].crosshair &&
                        d.axisX2[b].crosshair.enabled &&
                        (!l(a) && a >= d.axisX2[b].viewportMinimum && a <= d.axisX2[b].viewportMaximum
                            ? (d.axisX2[b].showCrosshair(a), (d.axisX2[b].sessionVariables.crosshairValue = d.axisX2[b].crosshair._updatedValue = a), this === d.axisX2[b].crosshair && (c = !0))
                            : void 0 !== a && (d.axisX2[b].sessionVariables.crosshairValue = d.axisX2[b].crosshair._updatedValue = null));
            for (b = 0; b < d.axisY.length; b++)
                (a = d.axisY[b]._crosshairValue),
                    d.axisY[b].crosshair &&
                        d.axisY[b].crosshair.enabled &&
                        (!l(a) && a >= d.axisY[b].viewportMinimum && a <= d.axisY[b].viewportMaximum
                            ? (d.axisY[b].showCrosshair(a), (d.axisY[b].sessionVariables.crosshairValue = d.axisY[b].crosshair._updatedValue = a), this === d.axisY[b].crosshair && (c = !0))
                            : void 0 !== a && (d.axisY[b].sessionVariables.crosshairValue = d.axisY[b].crosshair._updatedValue = null));
            for (b = 0; b < d.axisY2.length; b++)
                (a = d.axisY2[b]._crosshairValue),
                    d.axisY2[b].crosshair &&
                        d.axisY2[b].crosshair.enabled &&
                        (!l(a) && a >= d.axisY2[b].viewportMinimum && a <= d.axisY2[b].viewportMaximum
                            ? (d.axisY2[b].showCrosshair(a), (d.axisY2[b].sessionVariables.crosshairValue = d.axisY2[b].crosshair._updatedValue = a), this === d.axisY2[b].crosshair && (c = !0))
                            : void 0 !== a && (d.axisY2[b].sessionVariables.crosshairValue = d.axisY2[b].crosshair._updatedValue = null));
            this.chart.toolTip && this.chart.toolTip._entries && this.chart.toolTip.highlightObjects(this.chart.toolTip._entries);
            d.sessionVariables.crosshairShownByPixel = !1;
            return c;
        };
        Z.prototype.hide = function () {
            this.chart.resetOverlayedCanvas();
            this.chart.renderCrosshairs(this.parent);
            this._hidden = !0;
        };
        Z.prototype.render = function (a, d, c) {
            var b,
                e,
                h,
                f,
                r = null,
                t = null,
                k = null,
                m = "";
            this.valueFormatString ||
                ("dateTime" === this.parent.valueType
                    ? (this.valueFormatString = this.parent.valueFormatString)
                    : ((k = 0),
                      (k =
                          "xySwapped" === this.chart.plotInfo.axisPlacement
                              ? 50 < this.parent.range
                                  ? 0
                                  : 500 < this.chart.width && 25 > this.parent.range
                                  ? 2
                                  : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)
                              : 50 < this.parent.range
                              ? 0
                              : Math.floor(Math.abs(Math.log(this.parent.range) / Math.LN10)) + (5 > this.parent.range ? 2 : 10 > this.parent.range ? 1 : 0)),
                      (this.valueFormatString = A.generateValueFormatString(this.parent.range, k))));
            var n = null === this.opacity ? 1 : this.opacity,
                p = Math.abs("pixel" === this._thicknessType ? this.thickness : this.parent.conversionParameters.pixelPerUnit * this.thickness),
                g = this.chart.overlaidCanvasCtx,
                w = g.globalAlpha;
            g.beginPath();
            g.strokeStyle = this.color;
            g.lineWidth = p;
            g.save();
            this.labelFontSize = Math.abs(l(this.options.labelFontSize) ? this.parent.labelFontSize : this.labelFontSize);
            this.labelMaxWidth = l(this.options.labelMaxWidth) ? 0.3 * this.chart.width : this.labelMaxWidth;
            this.labelMaxHeight = l(this.options.labelWrap) || this.labelWrap ? 0.3 * this.chart.height : 2 * this.labelFontSize;
            0 < p && g.setLineDash && g.setLineDash(I(this.lineDashType, p));
            k = new ka(g, {
                x: 0,
                y: 0,
                padding: { top: 2, right: 3, bottom: 2, left: 4 },
                backgroundColor: this.labelBackgroundColor,
                borderColor: this.labelBorderColor,
                borderThickness: this.labelBorderThickness,
                cornerRadius: this.labelCornerRadius,
                maxWidth: this.labelMaxWidth,
                maxHeight: this.labelMaxHeight,
                angle: this.labelAngle,
                text: m,
                textAlign: this.labelTextAlign,
                fontSize: this.labelFontSize,
                fontFamily: this.labelFontFamily,
                fontWeight: this.labelFontWeight,
                fontColor: this.labelFontColor,
                fontStyle: this.labelFontStyle,
                textBaseline: "middle",
            });
            if (this.snapToDataPoint) {
                var x = 0,
                    m = [];
                if ("xySwapped" === this.chart.plotInfo.axisPlacement) {
                    var y = null;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) x = this.parent.dataSeries[0].axisX.convertPixelToValue({ y: d });
                    else if ("left" === this.parent._position || "right" === this.parent._position) x = this.parent.convertPixelToValue({ y: d });
                    for (var s = 0; s < this.parent.dataSeries.length; s++)
                        (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) && 0 <= y.index && ((y.dataSeries = this.parent.dataSeries[s]), null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
                    y = null;
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    var z = (y = 0);
                    yPercent = cumulativeY = 0;
                    for (var x = Infinity, v, s = 0; s < m.length; s++) {
                        if ("rangeBar" === m[s].dataSeries.type || "error" === m[s].dataSeries.type) {
                            if (m[s].dataPoint.y) for (var G = 0; G < m[s].dataPoint.y.length; G++) (z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y[G]))), z <= x && ((x = z), (y = s));
                        } else
                            "stackedBar" === m[s].dataSeries.type
                                ? ((cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY), (z = Math.abs(a - this.parent.convertValueToPixel(cumulativeY))), z <= x && ((x = z), (y = s)))
                                : "stackedBar100" === m[s].dataSeries.type
                                ? ((z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x),
                                  l(v) && (v = Math.abs(a - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))),
                                  (cumulativeY = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                                  (z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x),
                                  (yPercent = 100 * (cumulativeY / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                                  (z = Math.abs(a - this.parent.convertValueToPixel(yPercent))),
                                  z <= v && ((v = z), (y = s)))
                                : ((z = Math.abs(a - this.parent.convertValueToPixel(m[s].dataPoint.y))), z <= x && ((x = z), (y = s)));
                        l(v) || (x = Math.min(x, v));
                    }
                    v = m[y];
                    s = 0;
                    if ("bottom" === this.parent._position || "top" === this.parent._position) {
                        if ("rangeBar" === v.dataSeries.type || "error" === v.dataSeries.type) {
                            x = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                            for (m = 0; m < v.dataPoint.y.length; m++) (z = Math.abs(a - this.parent.convertValueToPixel(v.dataPoint.y[m]))), z < x && ((x = z), (s = m));
                            r = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                            this.value = v.dataPoint.y[s];
                            k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] })
                                : l(this.options.label)
                                ? ha(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                        } else
                            "stackedBar" === v.dataSeries.type
                                ? ((x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y))),
                                  (cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                                  (r = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(cumulativeY) << 0) + 0.5 : this.parent.convertValueToPixel(cumulativeY) << 0),
                                  (this.value = cumulativeY),
                                  (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: cumulativeY })
                                      : l(this.options.label)
                                      ? ha(l(c) ? cumulativeY : c, this.valueFormatString, this.chart._cultureInfo)
                                      : this.label))
                                : "stackedBar100" === v.dataSeries.type
                                ? ((x = Math.abs(a - this.parent.convertValueToPixel(m[0].dataPoint.y))),
                                  (cumulativeY = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                                  (z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x),
                                  (yPercent = 100 * (cumulativeY / v.dataSeries.plotUnit.dataPointYSums[z])),
                                  (r = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(yPercent) << 0) + 0.5 : this.parent.convertValueToPixel(yPercent) << 0),
                                  (this.value = yPercent),
                                  (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: yPercent })
                                      : l(this.options.label)
                                      ? ha(l(c) ? yPercent : c, this.valueFormatString, this.chart._cultureInfo)
                                      : this.label))
                                : ((r = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y) << 0),
                                  (this.value = v.dataPoint.y),
                                  (k.text = this.labelFormatter
                                      ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y })
                                      : l(this.options.label)
                                      ? ha(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo)
                                      : this.label));
                        b = e = r;
                        h = this.chart.plotArea.y1;
                        f = this.chart.plotArea.y2;
                        this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: f };
                        k.x = b - k.measureText().width / 2;
                        k.x + k.width > this.chart.bounds.x2 ? (k.x = this.chart.bounds.x2 - k.width) : k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                        k.y = this.parent.lineCoordinates.y2 + ("top" === this.parent._position ? -k.height + this.parent.tickLength : k.fontSize / 2) + 2;
                        k.y + k.height > this.chart.bounds.y2 ? (k.y = this.chart.bounds.y2 - k.height) : k.y < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1);
                    } else if ("left" === this.parent._position || "right" === this.parent._position) {
                        h = f = t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                        b = this.chart.plotArea.x1;
                        e = this.chart.plotArea.x2;
                        this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: f + p / 2 };
                        s = !1;
                        if (this.parent.labels)
                            for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                                if (this.parent.labels[m]) s = !0;
                                else {
                                    s = !1;
                                    break;
                                }
                        if (s) {
                            if ("axisX" === this.parent.type)
                                for (x = this.parent.convertPixelToValue({ y: d }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                                    (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) &&
                                        0 <= y.index &&
                                        (k.text = this.labelFormatter
                                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                            : l(this.options.label)
                                            ? y.dataPoint.label
                                            : this.label);
                        } else
                            k.text =
                                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                                    ? this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                        : l(this.options.label)
                                        ? ha(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                        : this.label
                                    : this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                    : l(this.options.label)
                                    ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                    : this.label;
                        this.value = v.dataPoint.x;
                        k.y = f + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                    }
                } else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    x = this.parent.convertPixelToValue({ x: a });
                    for (s = 0; s < this.parent.dataSeries.length; s++)
                        (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) && 0 <= y.index && ((y.dataSeries = this.parent.dataSeries[s]), null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    v = m[0];
                    b = e = r = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.x) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.x) << 0;
                    h = this.chart.plotArea.y1;
                    f = this.chart.plotArea.y2;
                    this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: f };
                    s = !1;
                    if (this.parent.labels)
                        for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                            if (this.parent.labels[m]) s = !0;
                            else {
                                s = !1;
                                break;
                            }
                    if (s) {
                        if ("axisX" === this.parent.type)
                            for (x = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                                (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) &&
                                    0 <= y.index &&
                                    (k.text = this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                        : l(this.options.label)
                                        ? y.dataPoint.label
                                        : this.label);
                    } else
                        k.text =
                            "dateTime" !== this.parent.valueType || this.parent.logarithmic
                                ? this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                    : l(this.options.label)
                                    ? ha(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                    : this.label
                                : this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.x })
                                : l(this.options.label)
                                ? Ca(v.dataPoint.x, this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                    this.value = v.dataPoint.x;
                    k.x = b - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else if ("left" === this.parent._position || "right" === this.parent._position) {
                    !l(this.parent.dataSeries) && 0 < this.parent.dataSeries.length && (x = this.parent.dataSeries[0].axisX.convertPixelToValue({ x: a }));
                    for (s = 0; s < this.parent.dataSeries.length; s++)
                        (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) && 0 <= y.index && ((y.dataSeries = this.parent.dataSeries[s]), null !== y.dataPoint.y && y.dataSeries.visible && m.push(y));
                    if (0 === m.length) return;
                    m.sort(function (a, b) {
                        return a.distance - b.distance;
                    });
                    z = y = 0;
                    x = Infinity;
                    for (s = 0; s < m.length; s++) {
                        if (
                            "rangeColumn" === m[s].dataSeries.type ||
                            "rangeArea" === m[s].dataSeries.type ||
                            "error" === m[s].dataSeries.type ||
                            "rangeSplineArea" === m[s].dataSeries.type ||
                            "candlestick" === m[s].dataSeries.type ||
                            "ohlc" === m[s].dataSeries.type ||
                            "boxAndWhisker" === m[s].dataSeries.type
                        ) {
                            if (m[s].dataPoint.y) for (G = 0; G < m[s].dataPoint.y.length; G++) (z = Math.abs(d - this.parent.convertValueToPixel(m[s].dataPoint.y[G]))), z <= x && ((x = z), (y = s));
                        } else
                            "stackedColumn" === m[s].dataSeries.type
                                ? ((b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY), (z = Math.abs(d - this.parent.convertValueToPixel(b))), z <= x && ((x = z), (y = s)))
                                : "stackedArea" === m[s].dataSeries.type
                                ? ((b = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY), (z = Math.abs(d - this.parent.convertValueToPixel(b))), z <= x && ((x = z), (y = s)))
                                : "stackedColumn100" === m[s].dataSeries.type || "stackedArea100" === m[s].dataSeries.type
                                ? ((z = m[0].dataPoint.x.getTime ? m[0].dataPoint.x.getTime() : m[0].dataPoint.x),
                                  l(v) && (v = Math.abs(d - this.parent.convertValueToPixel(100 * (m[0].dataSeries.dataPointEOs[m[0].index].cumulativeY / m[0].dataSeries.plotUnit.dataPointYSums[z])))),
                                  "stackedColumn100" === m[s].dataSeries.type
                                      ? ((t = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                                        (z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x),
                                        (b = 100 * (t / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                                        (z = Math.abs(d - this.parent.convertValueToPixel(b))),
                                        z <= v && ((v = z), (y = s)))
                                      : "stackedArea100" === m[s].dataSeries.type &&
                                        ((t = m[s].dataSeries.dataPointEOs[m[s].index].cumulativeY),
                                        (z = m[s].dataPoint.x.getTime ? m[s].dataPoint.x.getTime() : m[s].dataPoint.x),
                                        (b = 100 * (t / m[s].dataSeries.plotUnit.dataPointYSums[z])),
                                        (z = Math.abs(d - this.parent.convertValueToPixel(b))),
                                        z <= v && ((v = z), (y = s))))
                                : "waterfall" === m[s].dataSeries.type
                                ? ((z = Math.abs(d - this.parent.convertValueToPixel(m[s].dataSeries.dataPointEOs[m[s].index].cumulativeSum))), z <= x && ((v = x = z), (y = s)))
                                : ((z = Math.abs(d - this.parent.convertValueToPixel(m[s].dataPoint.y))), z <= x && ((x = z), (y = s)));
                        l(v) || (x = Math.min(x, v));
                    }
                    v = m[y];
                    s = 0;
                    if (
                        "rangeColumn" === v.dataSeries.type ||
                        "rangeArea" === v.dataSeries.type ||
                        "error" === v.dataSeries.type ||
                        "rangeSplineArea" === v.dataSeries.type ||
                        "candlestick" === v.dataSeries.type ||
                        "ohlc" === v.dataSeries.type ||
                        "boxAndWhisker" === v.dataSeries.type
                    ) {
                        x = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[0]));
                        for (m = 0; m < v.dataPoint.y.length; m++) (z = Math.abs(d - this.parent.convertValueToPixel(v.dataPoint.y[m]))), z < x && ((x = z), (s = m));
                        t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0) + 0.5 : this.parent.convertValueToPixel(v.dataPoint.y[s]) << 0;
                        k.text = this.labelFormatter
                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataPoint.y[s] })
                            : l(this.options.label)
                            ? ha(l(c) ? v.dataPoint.y[s] : c, this.valueFormatString, this.chart._cultureInfo)
                            : this.label;
                        this.value = v.dataPoint.y[s];
                    } else
                        "stackedColumn" === v.dataSeries.type
                            ? ((b = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                              (t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b })
                                  : l(this.options.label)
                                  ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = b))
                            : "stackedArea" === v.dataSeries.type
                            ? ((b = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                              (t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b })
                                  : l(this.options.label)
                                  ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = b))
                            : "stackedColumn100" === v.dataSeries.type
                            ? ((t = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                              (z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x),
                              (b = 100 * (t / v.dataSeries.plotUnit.dataPointYSums[z])),
                              (t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b })
                                  : l(this.options.label)
                                  ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = b))
                            : "stackedArea100" === v.dataSeries.type
                            ? ((t = v.dataSeries.dataPointEOs[v.index].cumulativeY),
                              (z = v.dataPoint.x.getTime ? v.dataPoint.x.getTime() : v.dataPoint.x),
                              (b = 100 * (t / v.dataSeries.plotUnit.dataPointYSums[z])),
                              (t = 1 === g.lineWidth % 2 ? (this.parent.convertValueToPixel(b) << 0) + 0.5 : this.parent.convertValueToPixel(b) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: b })
                                  : l(this.options.label)
                                  ? ha(l(c) ? b : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = b))
                            : "waterfall" === v.dataSeries.type
                            ? ((t =
                                  1 === g.lineWidth % 2
                                      ? (this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0) + 0.5
                                      : this.parent.convertValueToPixel(v.dataSeries.dataPointEOs[v.index].cumulativeSum) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: v.dataSeries.dataPointEOs[v.index].cumulativeSum })
                                  : l(this.options.label)
                                  ? ha(l(c) ? v.dataSeries.dataPointEOs[v.index].cumulativeSum : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = v.dataSeries.dataPointEOs[v.index].cumulativeSum))
                            : ((t = 1 === g.lineWidth % 2 ? (l(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0) + 0.5 : l(a) ? d : this.parent.convertValueToPixel(v.dataPoint.y) << 0),
                              (k.text = this.labelFormatter
                                  ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? v.dataPoint.y : c })
                                  : l(this.options.label)
                                  ? ha(l(c) ? v.dataPoint.y : c, this.valueFormatString, this.chart._cultureInfo)
                                  : this.label),
                              (this.value = v.dataPoint.y));
                    h = f = t;
                    b = this.chart.plotArea.x1;
                    e = this.chart.plotArea.x2;
                    this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: f + p / 2 };
                    k.y = f + k.fontSize / 2 - k.measureText().height / 2 + 2;
                    k.y - k.fontSize / 2 < this.chart.bounds.y1
                        ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                        : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                    "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                }
                m = null;
                g.globalAlpha = n;
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1 && (k.y = this.chart.bounds.y1 + k.fontSize / 2),
                        "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2),
                        this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                            this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                            0 < p &&
                            (g.moveTo(b, h), g.lineTo(e, f), g.stroke(), (this._hidden = !1));
                if ("left" === this.parent._position || "right" === this.parent._position)
                    "left" === this.parent._position && k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                        "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.measureText().width),
                        this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                            this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                            0 < p &&
                            (g.moveTo(b, h), g.lineTo(e, f), g.stroke(), (this._hidden = !1));
            } else {
                if ("bottom" === this.parent._position || "top" === this.parent._position)
                    (b = e = r = 1 === g.lineWidth % 2 ? (a << 0) + 0.5 : a << 0), (h = this.chart.plotArea.y1), (f = this.chart.plotArea.y2), (this.bounds = { x1: b - p / 2, y1: h, x2: e + p / 2, y2: f });
                else if ("left" === this.parent._position || "right" === this.parent._position)
                    (h = f = t = 1 === g.lineWidth % 2 ? (d << 0) + 0.5 : d << 0), (b = this.chart.plotArea.x1), (e = this.chart.plotArea.x2), (this.bounds = { x1: b, y1: h - p / 2, x2: e, y2: f + p / 2 });
                if ("xySwapped" === this.chart.plotInfo.axisPlacement)
                    if ("left" === this.parent._position || "right" === this.parent._position) {
                        s = !1;
                        if (this.parent.labels)
                            for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                                if (this.parent.labels[m]) s = !0;
                                else {
                                    s = !1;
                                    break;
                                }
                        if (s) {
                            if ("axisX" === this.parent.type)
                                for (x = this.parent.convertPixelToValue({ y: d }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                                    (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) &&
                                        0 <= y.index &&
                                        (k.text = this.labelFormatter
                                            ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c })
                                            : l(this.options.label)
                                            ? y.dataPoint.label
                                            : this.label);
                        } else
                            k.text =
                                "dateTime" !== this.parent.valueType || this.parent.logarithmic
                                    ? this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c })
                                        : l(this.options.label)
                                        ? ha(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo)
                                        : this.label
                                    : this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c })
                                    : l(this.options.label)
                                    ? Ca(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo)
                                    : this.label;
                        k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2;
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2);
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x1 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                    } else {
                        if ("bottom" === this.parent._position || "top" === this.parent._position)
                            (k.text = this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c })
                                : l(this.options.label)
                                ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo)
                                : this.label),
                                (k.x = b - k.measureText().width / 2),
                                k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width),
                                k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1),
                                "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                    }
                else if ("bottom" === this.parent._position || "top" === this.parent._position) {
                    s = !1;
                    m = "";
                    if (this.parent.labels)
                        for (x = Math.ceil(this.parent.interval), m = 0; m < this.parent.viewportMaximum; m += x)
                            if (this.parent.labels[m]) s = !0;
                            else {
                                s = !1;
                                break;
                            }
                    if (s) {
                        if ("axisX" === this.parent.type)
                            for (x = this.parent.convertPixelToValue({ x: a }), y = null, s = 0; s < this.parent.dataSeries.length; s++)
                                (y = this.parent.dataSeries[s].getDataPointAtX(x, !0)) &&
                                    0 <= y.index &&
                                    (k.text = this.labelFormatter
                                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c })
                                        : l(this.options.label)
                                        ? l(c)
                                            ? y.dataPoint.label
                                            : c
                                        : this.label);
                    } else
                        k.text =
                            "dateTime" !== this.parent.valueType || this.parent.logarithmic
                                ? this.labelFormatter
                                    ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? (0 < this.parent.dataSeries.length ? this.parent.convertPixelToValue(a) : "") : c })
                                    : l(this.options.label)
                                    ? ha(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo)
                                    : this.label
                                : this.labelFormatter
                                ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(a) : c })
                                : l(this.options.label)
                                ? Ca(l(c) ? this.parent.convertPixelToValue(a) : c, this.valueFormatString, this.chart._cultureInfo)
                                : this.label;
                    k.x = b - k.measureText().width / 2;
                    k.x + k.width > this.chart.bounds.x2 && (k.x = this.chart.bounds.x2 - k.width);
                    k.x < this.chart.bounds.x1 && (k.x = this.chart.bounds.x1);
                    "bottom" === this.parent._position ? (k.y = this.parent.lineCoordinates.y2 + k.fontSize / 2 + 2) : "top" === this.parent._position && (k.y = this.parent.lineCoordinates.y1 - k.height + k.fontSize / 2 + 2);
                } else if ("left" === this.parent._position || "right" === this.parent._position)
                    (k.text = this.labelFormatter
                        ? this.labelFormatter({ chart: this.chart, axis: this.parent.options, crosshair: this.options, value: l(c) ? this.parent.convertPixelToValue(d) : c })
                        : l(this.options.label)
                        ? ha(l(c) ? this.parent.convertPixelToValue(d) : c, this.valueFormatString, this.chart._cultureInfo)
                        : this.label),
                        (k.y = d + k.fontSize / 2 - k.measureText().height / 2 + 2),
                        k.y - k.fontSize / 2 < this.chart.bounds.y1
                            ? (k.y = this.chart.bounds.y1 + k.fontSize / 2 + 2)
                            : k.y + k.measureText().height - k.fontSize / 2 > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.measureText().height + k.fontSize / 2),
                        "left" === this.parent._position ? (k.x = this.parent.lineCoordinates.x2 - k.measureText().width) : "right" === this.parent._position && (k.x = this.parent.lineCoordinates.x2);
                "left" === this.parent._position && k.x < this.chart.bounds.x1
                    ? (k.x = this.chart.bounds.x1)
                    : "right" === this.parent._position && k.x + k.measureText().width > this.chart.bounds.x2
                    ? (k.x = this.chart.bounds.x2 - k.measureText().width)
                    : "top" === this.parent._position && k.y - k.fontSize / 2 < this.chart.bounds.y1
                    ? (k.y = this.chart.bounds.y1 + k.fontSize / 2)
                    : "bottom" === this.parent._position && this.parent.lineCoordinates.y2 - k.fontSize / 2 + k.measureText().height > this.chart.bounds.y2 && (k.y = this.chart.bounds.y2 - k.height + k.fontSize / 2 + 2);
                g.globalAlpha = n;
                0 < p && (g.moveTo(b, h), g.lineTo(e, f), g.stroke(), (this._hidden = !1));
                this.value = "bottom" === this.parent._position || "top" === this.parent._position ? this.parent.convertPixelToValue(a) : this.parent.convertPixelToValue(d);
            }
            if ("bottom" === this.parent._position || "top" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(r);
            if ("left" === this.parent._position || "right" === this.parent._position) this.parent.sessionVariables.crosshairValue = this._updatedValue = this.parent.convertPixelToValue(t);
            this._textBlock = k;
            this._label = c;
            l(c) || this.renderLabel();
            g.restore();
            g.globalAlpha = w;
        };
        Z.prototype.renderLabel = function () {
            this.value >= Math.min(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                this.value <= Math.max(this.parent.viewportMinimum, this.parent.viewportMaximum) &&
                (l(this._textBlock) || l(this._textBlock.text) || !("number" === typeof this._textBlock.text.valueOf() || 0 < this._textBlock.text.length) || this._hidden || this._textBlock.render(!0),
                l(this._label) && this.dispatchEvent("updated", { chart: this.chart, crosshair: this.options, axis: this.parent, value: this.value }, this.parent));
        };
        oa($, Y);
        $.prototype._updateOptions = function () {
            this.updateOption("enabled");
            this.updateOption("shared");
            this.updateOption("animationEnabled");
            this.updateOption("content");
            this.updateOption("contentFormatter");
            this.updateOption("reversed");
            this.updateOption("backgroundColor");
            this.updateOption("borderColor");
            this.updateOption("borderThickness");
            this.updateOption("cornerRadius");
            this.updateOption("fontSize");
            this.updateOption("fontColor");
            this.updateOption("fontFamily");
            this.updateOption("fontWeight");
            this.updateOption("fontStyle");
        };
        $.prototype._initialize = function () {
            this.updateOption("updated");
            this.updateOption("hidden");
            if (this.enabled) {
                this.container = document.createElement("div");
                this.container.setAttribute("class", "canvasjs-chart-tooltip");
                this.container.style.position = "absolute";
                this.container.style.height = "auto";
                this.container.style.boxShadow = "1px 1px 2px 2px rgba(0,0,0,0.1)";
                this.container.style.zIndex = "1000";
                this.container.style.pointerEvents = "none";
                this.container.style.display = "none";
                var a = document.createElement("div");
                a.style.width = "auto";
                a.style.height = "auto";
                a.style.minWidth = "50px";
                a.style.lineHeight = "normal";
                a.style.margin = "0px 0px 0px 0px";
                a.style.padding = "5px";
                a.style.fontFamily = "Calibri, Arial, Georgia, serif";
                a.style.fontWeight = "normal";
                a.style.fontStyle = r ? "italic" : "normal";
                a.style.fontSize = "14px";
                a.style.color = "#000000";
                a.style.textShadow = "1px 1px 1px rgba(0, 0, 0, 0.1)";
                a.style.textAlign = "left";
                a.style.border = "2px solid gray";
                a.style.background = r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)";
                a.style.textIndent = "0px";
                a.style.whiteSpace = "nowrap";
                a.style.borderRadius = "5px";
                a.style.MozUserSelect = "none";
                a.style.WebkitUserSelect = "none";
                a.style.msUserSelect = "none";
                a.style.userSelect = "none";
                r || ((a.style.filter = "alpha(opacity = 90)"), (a.style.filter = "progid:DXImageTransform.Microsoft.Shadow(Strength=3, Direction=135, Color='#666666')"));
                a.innerText = "Sample Tooltip";
                this.container.appendChild(a);
                this.contentDiv = this.container.firstChild;
                this.container.style.borderRadius = this.contentDiv.style.borderRadius;
                this.chart._canvasJSContainer.appendChild(this.container);
            }
        };
        $.prototype.mouseMoveHandler = function (a, d) {
            (this._lastUpdated && 4 > new Date().getTime() - this._lastUpdated) ||
                ((this._lastUpdated = new Date().getTime()),
                this.chart.resetOverlayedCanvas(),
                this._updateToolTip(a, d),
                this.enabled &&
                    this._updatedEventParameters &&
                    !isNaN(this._prevX) &&
                    !isNaN(this._prevY) &&
                    this.container &&
                    this.container.style &&
                    this.dispatchEvent("none" === this.container.style.display ? "hidden" : "updated", this._updatedEventParameters, this));
        };
        $.prototype._updateToolTip = function (a, d, c) {
            c = "undefined" === typeof c ? !0 : c;
            this._updateOptions();
            this.container || this._initialize();
            this.enabled || this.hide();
            if (!this.chart.disableToolTip) {
                if ("undefined" === typeof a || "undefined" === typeof d) {
                    if (isNaN(this._prevX) || isNaN(this._prevY)) return;
                    a = this._prevX;
                    d = this._prevY;
                } else (this._prevX = a), (this._prevY = d);
                var b = null,
                    e = null,
                    h = [],
                    f = 0;
                if (this.shared && this.enabled && "none" !== this.chart.plotInfo.axisPlacement) {
                    var t = [];
                    if (this.chart.axisX)
                        for (var w = 0; w < this.chart.axisX.length; w++) {
                            for (
                                var f = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX[w].convertPixelToValue({ y: d }) : this.chart.axisX[w].convertPixelToValue({ x: a }), k = null, b = 0;
                                b < this.chart.axisX[w].dataSeries.length;
                                b++
                            )
                                (k = this.chart.axisX[w].dataSeries[b].getDataPointAtX(f, c)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX[w].dataSeries[b]), null !== k.dataPoint.y && k.dataSeries.visible && t.push(k));
                            k = null;
                        }
                    if (this.chart.axisX2)
                        for (w = 0; w < this.chart.axisX2.length; w++) {
                            f = "xySwapped" === this.chart.plotInfo.axisPlacement ? this.chart.axisX2[w].convertPixelToValue({ y: d }) : this.chart.axisX2[w].convertPixelToValue({ x: a });
                            k = null;
                            for (b = 0; b < this.chart.axisX2[w].dataSeries.length; b++)
                                (k = this.chart.axisX2[w].dataSeries[b].getDataPointAtX(f, c)) && 0 <= k.index && ((k.dataSeries = this.chart.axisX2[w].dataSeries[b]), null !== k.dataPoint.y && k.dataSeries.visible && t.push(k));
                            k = null;
                        }
                    if (0 === t.length) return;
                    t.sort(function (a, b) {
                        return a.dataSeries.axisX.logarithmic || b.dataSeries.axisX.logarithmic ? a.distance - b.distance : a.distance / a.dataSeries.axisX.range - b.distance / b.dataSeries.axisX.range;
                    });
                    c = t[0];
                    for (b = 0; b < t.length; b++) t[b].dataPoint.x.valueOf() === c.dataPoint.x.valueOf() && h.push(t[b]);
                    t = null;
                } else {
                    if ((b = this.chart.getDataPointAtXY(a, d, c))) (this.currentDataPointIndex = b.dataPointIndex), (this.currentSeriesIndex = b.dataSeries.index);
                    else if (r)
                        if (((b = bb(a, d, this.chart._eventManager.ghostCtx)), 0 < b && "undefined" !== typeof this.chart._eventManager.objectMap[b])) {
                            b = this.chart._eventManager.objectMap[b];
                            if ("legendItem" === b.objectType) return;
                            this.currentSeriesIndex = b.dataSeriesIndex;
                            this.currentDataPointIndex = 0 <= b.dataPointIndex ? b.dataPointIndex : -1;
                        } else this.currentDataPointIndex = -1;
                    else this.currentDataPointIndex = -1;
                    if (0 <= this.currentSeriesIndex) {
                        e = this.chart.data[this.currentSeriesIndex];
                        k = {};
                        if (0 <= this.currentDataPointIndex)
                            (b = e.dataPoints[this.currentDataPointIndex]),
                                (k.dataSeries = e),
                                (k.dataPoint = b),
                                (k.index = this.currentDataPointIndex),
                                (k.distance = Math.abs(b.x - f)),
                                "waterfall" === e.type && ((k.cumulativeSumYStartValue = e.dataPointEOs[this.currentDataPointIndex].cumulativeSumYStartValue), (k.cumulativeSum = e.dataPointEOs[this.currentDataPointIndex].cumulativeSum));
                        else if (
                            this.enabled &&
                            e &&
                            ("line" === e.type ||
                                "stepLine" === e.type ||
                                "spline" === e.type ||
                                "area" === e.type ||
                                "stepArea" === e.type ||
                                "splineArea" === e.type ||
                                "stackedArea" === e.type ||
                                "stackedArea100" === e.type ||
                                "rangeArea" === e.type ||
                                "rangeSplineArea" === e.type ||
                                "candlestick" === e.type ||
                                "ohlc" === e.type ||
                                "boxAndWhisker" === e.type)
                        )
                            (f = e.axisX.convertPixelToValue({ x: a })), (k = e.getDataPointAtX(f, c)), l(k) || ((k.dataSeries = e), (this.currentDataPointIndex = k.index), (b = k.dataPoint));
                        else {
                            "toolTip" === this.chart.clearedOverlayedCanvas && (this.chart.resetOverlayedCanvas(), (this.chart.clearedOverlayedCanvas = null), this.container && (this.container.style.display = "none"));
                            return;
                        }
                        if (!l(k) && !l(k.dataPoint) && !l(k.dataPoint.y))
                            if (k.dataSeries.axisY)
                                if (0 < k.dataPoint.y.length) {
                                    for (b = c = 0; b < k.dataPoint.y.length; b++) k.dataPoint.y[b] < k.dataSeries.axisY.viewportMinimum ? c-- : k.dataPoint.y[b] > k.dataSeries.axisY.viewportMaximum && c++;
                                    c < k.dataPoint.y.length && c > -k.dataPoint.y.length && h.push(k);
                                } else
                                    "column" === e.type || "bar" === e.type
                                        ? 0 > k.dataPoint.y
                                            ? 0 > k.dataSeries.axisY.viewportMinimum && k.dataSeries.axisY.viewportMaximum >= k.dataPoint.y && h.push(k)
                                            : k.dataSeries.axisY.viewportMinimum <= k.dataPoint.y && 0 <= k.dataSeries.axisY.viewportMaximum && h.push(k)
                                        : "bubble" === e.type
                                        ? ((c = this.chart._eventManager.objectMap[e.dataPointIds[k.index]].size / 2),
                                          k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum - c && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum + c && h.push(k))
                                        : "waterfall" === e.type
                                        ? ((c = 0),
                                          k.cumulativeSumYStartValue < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSumYStartValue > k.dataSeries.axisY.viewportMaximum && c++,
                                          k.cumulativeSum < k.dataSeries.axisY.viewportMinimum ? c-- : k.cumulativeSum > k.dataSeries.axisY.viewportMaximum && c++,
                                          2 > c && -2 < c && h.push(k))
                                        : (0 <= k.dataSeries.type.indexOf("100") ||
                                              "stackedColumn" === e.type ||
                                              "stackedBar" === e.type ||
                                              "stackedArea" === e.type ||
                                              (k.dataPoint.y >= k.dataSeries.axisY.viewportMinimum && k.dataPoint.y <= k.dataSeries.axisY.viewportMaximum)) &&
                                          h.push(k);
                            else h.push(k);
                    }
                }
                if (0 < h.length) {
                    if ((this.highlightObjects(h), this.enabled)) {
                        c = "";
                        c = this.getToolTipInnerHTML({ entries: h });
                        if (null !== c) {
                            this.contentDiv.innerHTML = c;
                            if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                                for (f = this.contentDiv.getElementsByTagName("span"), b = 0; b < f.length; b++) f[b] && (f[b].style.color = f[b].getAttribute("data-color"));
                            f = !1;
                            "none" === this.container.style.display && ((f = !0), (this.container.style.display = "block"));
                            try {
                                (this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)"),
                                    (this.borderColor =
                                        "waterfall" === h[0].dataSeries.type
                                            ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : h[0].dataPoint.color
                                                  ? h[0].dataPoint.color
                                                  : 0 < h[0].dataPoint.y
                                                  ? h[0].dataSeries.risingColor
                                                  : h[0].dataSeries.fallingColor)
                                            : "error" === h[0].dataSeries.type
                                            ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : h[0].dataSeries.color
                                                  ? h[0].dataSeries.color
                                                  : h[0].dataSeries._colorSet[e.index % h[0].dataSeries._colorSet.length])
                                            : (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                                  ? this.options.borderColor
                                                  : h[0].dataPoint.color
                                                  ? h[0].dataPoint.color
                                                  : h[0].dataSeries.color
                                                  ? h[0].dataSeries.color
                                                  : h[0].dataSeries._colorSet[h[0].index % h[0].dataSeries._colorSet.length])),
                                    (this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px"),
                                    (this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px"),
                                    (this.container.style.borderRadius = this.contentDiv.style.borderRadius),
                                    (this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px"),
                                    (this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000"),
                                    (this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;"),
                                    (this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal"),
                                    (this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal");
                            } catch (m) {}
                            "pie" === h[0].dataSeries.type ||
                            "doughnut" === h[0].dataSeries.type ||
                            "funnel" === h[0].dataSeries.type ||
                            "pyramid" === h[0].dataSeries.type ||
                            "bar" === h[0].dataSeries.type ||
                            "rangeBar" === h[0].dataSeries.type ||
                            "stackedBar" === h[0].dataSeries.type ||
                            "stackedBar100" === h[0].dataSeries.type
                                ? (a = a - 10 - this.container.clientWidth)
                                : ((a = (h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x) - this.container.clientWidth) << 0), (a -= 10));
                            0 > a && (a = Math.max(0, a + this.container.clientWidth + 20));
                            a + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (a = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                            d =
                                1 !== h.length ||
                                this.shared ||
                                ("line" !== h[0].dataSeries.type &&
                                    "stepLine" !== h[0].dataSeries.type &&
                                    "spline" !== h[0].dataSeries.type &&
                                    "area" !== h[0].dataSeries.type &&
                                    "stepArea" !== h[0].dataSeries.type &&
                                    "splineArea" !== h[0].dataSeries.type)
                                    ? "bar" === h[0].dataSeries.type || "rangeBar" === h[0].dataSeries.type || "stackedBar" === h[0].dataSeries.type || "stackedBar100" === h[0].dataSeries.type
                                        ? h[0].dataSeries.axisX.convertValueToPixel(h[0].dataPoint.x)
                                        : d
                                    : h[0].dataSeries.axisY.convertValueToPixel(h[0].dataPoint.y);
                            d = -d + 10;
                            0 < d + this.container.clientHeight + 5 && (d -= d + this.container.clientHeight + 5 - 0);
                            this.fixMozTransitionDelay(a, d);
                            !this.animationEnabled || f ? this.disableAnimation() : (this.enableAnimation(), (this.container.style.MozTransition = this.mozContainerTransition));
                            this.positionLeft = a;
                            this.positionBottom = d;
                            this.container.style.left = a + "px";
                            this.container.style.bottom = d + "px";
                        } else this.hide(!1), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                        d = [];
                        for (b = 0; b < h.length; b++) d.push({ xValue: h[b].dataPoint.x, dataPoint: h[b].dataPoint, dataSeries: h[b].dataSeries, dataPointIndex: h[b].index, dataSeriesIndex: h[b].dataSeries._index });
                        this._updatedEventParameters = { chart: this.chart, toolTip: this.options, content: c, entries: d };
                        this._entries = h;
                    }
                } else this.hide(), this.enabled && this.dispatchEvent("hidden", { chart: this.chart, toolTip: this }, this);
                this._dataSeriesIndex = this._xValue = null;
            }
        };
        $.prototype.highlightObjects = function (a) {
            var d = this.chart.overlaidCanvasCtx;
            l(this.chart.clearedOverlayedCanvas) || "toolTip" === this.chart.clearedOverlayedCanvas
                ? (this.chart.resetOverlayedCanvas(), d.clearRect(0, 0, this.chart.width, this.chart.height), (this.chart.clearedOverlayedCanvas = "toolTip"))
                : (this.chart.clearedOverlayedCanvas = null);
            d.save();
            var c = this.chart.plotArea,
                b = 0;
            d.beginPath();
            d.rect(c.x1, c.y1, c.x2 - c.x1, c.y2 - c.y1);
            d.clip();
            for (c = 0; c < a.length; c++) {
                var e = a[c];
                if ((e = this.chart._eventManager.objectMap[e.dataSeries.dataPointIds[e.index]]) && e.objectType && "dataPoint" === e.objectType) {
                    var b = this.chart.data[e.dataSeriesIndex],
                        h = b.dataPoints[e.dataPointIndex],
                        f = e.dataPointIndex;
                    !1 === h.highlightEnabled ||
                        (!0 !== b.highlightEnabled && !0 !== h.highlightEnabled) ||
                        ("line" === b.type ||
                        "stepLine" === b.type ||
                        "spline" === b.type ||
                        "scatter" === b.type ||
                        "area" === b.type ||
                        "stepArea" === b.type ||
                        "splineArea" === b.type ||
                        "stackedArea" === b.type ||
                        "stackedArea100" === b.type ||
                        "rangeArea" === b.type ||
                        "rangeSplineArea" === b.type
                            ? ((h = b.getMarkerProperties(f, e.x1, e.y1, this.chart.overlaidCanvasCtx)),
                              (h.size = Math.max((1.5 * h.size) << 0, 10)),
                              (h.borderColor = h.borderColor || "#FFFFFF"),
                              (h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size)),
                              aa.drawMarkers([h]),
                              "undefined" !== typeof e.y2 &&
                                  ((h = b.getMarkerProperties(f, e.x1, e.y2, this.chart.overlaidCanvasCtx)),
                                  (h.size = Math.max((1.5 * h.size) << 0, 10)),
                                  (h.borderColor = h.borderColor || "#FFFFFF"),
                                  (h.borderThickness = h.borderThickness || Math.ceil(0.1 * h.size)),
                                  aa.drawMarkers([h])))
                            : "bubble" === b.type
                            ? ((h = b.getMarkerProperties(f, e.x1, e.y1, this.chart.overlaidCanvasCtx)), (h.size = e.size), (h.color = "white"), (h.borderColor = "white"), (d.globalAlpha = 0.3), aa.drawMarkers([h]), (d.globalAlpha = 1))
                            : "column" === b.type ||
                              "stackedColumn" === b.type ||
                              "stackedColumn100" === b.type ||
                              "bar" === b.type ||
                              "rangeBar" === b.type ||
                              "stackedBar" === b.type ||
                              "stackedBar100" === b.type ||
                              "rangeColumn" === b.type ||
                              "waterfall" === b.type
                            ? da(d, e.x1, e.y1, e.x2, e.y2, "white", 0, null, !1, !1, !1, !1, 0.3)
                            : "pie" === b.type || "doughnut" === b.type
                            ? X(d, e.center, e.radius, "white", b.type, e.startAngle, e.endAngle, 0.3, e.percentInnerRadius)
                            : "funnel" === b.type || "pyramid" === b.type
                            ? pa(d, e.funnelSection, 0.3, "white")
                            : "candlestick" === b.type
                            ? ((d.globalAlpha = 1),
                              (d.strokeStyle = e.color),
                              (d.lineWidth = 2 * e.borderThickness),
                              (b = 0 === d.lineWidth % 2 ? 0 : 0.5),
                              d.beginPath(),
                              d.moveTo(e.x3 - b, Math.min(e.y2, e.y3)),
                              d.lineTo(e.x3 - b, Math.min(e.y1, e.y4)),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3 - b, Math.max(e.y1, e.y4)),
                              d.lineTo(e.x3 - b, Math.max(e.y2, e.y3)),
                              d.stroke(),
                              da(d, e.x1, Math.min(e.y1, e.y4), e.x2, Math.max(e.y1, e.y4), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1),
                              (d.globalAlpha = 1))
                            : "ohlc" === b.type
                            ? ((d.globalAlpha = 1),
                              (d.strokeStyle = e.color),
                              (d.lineWidth = 2 * e.borderThickness),
                              (b = 0 === d.lineWidth % 2 ? 0 : 0.5),
                              d.beginPath(),
                              d.moveTo(e.x3 - b, e.y2),
                              d.lineTo(e.x3 - b, e.y3),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3, e.y1),
                              d.lineTo(e.x1, e.y1),
                              d.stroke(),
                              d.beginPath(),
                              d.moveTo(e.x3, e.y4),
                              d.lineTo(e.x2, e.y4),
                              d.stroke(),
                              (d.globalAlpha = 1))
                            : "boxAndWhisker" === b.type
                            ? (d.save(),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.stemColor),
                              (d.lineWidth = 2 * e.stemThickness),
                              0 < e.stemThickness &&
                                  (d.beginPath(),
                                  d.moveTo(e.x3, e.y2 + e.borderThickness / 2),
                                  d.lineTo(e.x3, e.y1 + e.whiskerThickness / 2),
                                  d.stroke(),
                                  d.beginPath(),
                                  d.moveTo(e.x3, e.y4 - e.whiskerThickness / 2),
                                  d.lineTo(e.x3, e.y3 - e.borderThickness / 2),
                                  d.stroke()),
                              d.beginPath(),
                              da(d, e.x1, Math.max(e.y2, e.y3), e.x2, Math.min(e.y2, e.y3), "transparent", 2 * e.borderThickness, e.color, !1, !1, !1, !1),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.whiskerColor),
                              (d.lineWidth = 2 * e.whiskerThickness),
                              0 < e.whiskerThickness &&
                                  (d.beginPath(),
                                  d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y4),
                                  d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y4),
                                  d.stroke(),
                                  d.beginPath(),
                                  d.moveTo(Math.floor(e.x3 - e.whiskerLength / 2), e.y1),
                                  d.lineTo(Math.ceil(e.x3 + e.whiskerLength / 2), e.y1),
                                  d.stroke()),
                              (d.globalAlpha = 1),
                              (d.strokeStyle = e.lineColor),
                              (d.lineWidth = 2 * e.lineThickness),
                              0 < e.lineThickness && (d.beginPath(), d.moveTo(e.x1, e.y5), d.lineTo(e.x2, e.y5), d.stroke()),
                              d.restore(),
                              (d.globalAlpha = 1))
                            : "error" === b.type && z(d, e.x1, e.y1, e.x2, e.y2, "white", e.whiskerProperties, e.stemProperties, e.isXYSwapped, 0.3));
                }
            }
            d.restore();
            d.globalAlpha = 1;
            d.beginPath();
        };
        $.prototype.getToolTipInnerHTML = function (a) {
            a = a.entries;
            var d = null,
                c = null,
                b = null,
                e = 0,
                h = "";
            this.isToolTipDefinedInData = !0;
            for (var f = 0; f < a.length; f++)
                if (a[f].dataSeries.toolTipContent || a[f].dataPoint.toolTipContent) {
                    this.isToolTipDefinedInData = !1;
                    break;
                }
            if (this.isToolTipDefinedInData && ((this.content && "function" === typeof this.content) || this.contentFormatter))
                (a = { chart: this.chart, toolTip: this.options, entries: a }), (d = this.contentFormatter ? this.contentFormatter(a) : this.content(a));
            else if (this.shared && "none" !== this.chart.plotInfo.axisPlacement) {
                for (var l = null, r = "", f = 0; f < a.length; f++) {
                    c = a[f].dataSeries;
                    b = a[f].dataPoint;
                    e = a[f].index;
                    h = "";
                    if (0 === f && this.isToolTipDefinedInData && !this.content) {
                        this.chart.axisX && 0 < this.chart.axisX.length
                            ? (r += "undefined" !== typeof this.chart.axisX[0].labels[b.x] ? this.chart.axisX[0].labels[b.x] : "{x}")
                            : this.chart.axisX2 && 0 < this.chart.axisX2.length && (r += "undefined" !== typeof this.chart.axisX2[0].labels[b.x] ? this.chart.axisX2[0].labels[b.x] : "{x}");
                        r += "</br>";
                        if (!c.visible) continue;
                        r = this.chart.replaceKeywordsWithValue(r, b, c, e);
                    }
                    null === b.toolTipContent ||
                        ("undefined" === typeof b.toolTipContent && null === c.options.toolTipContent) ||
                        ("line" === c.type ||
                        "stepLine" === c.type ||
                        "spline" === c.type ||
                        "area" === c.type ||
                        "stepArea" === c.type ||
                        "splineArea" === c.type ||
                        "column" === c.type ||
                        "bar" === c.type ||
                        "scatter" === c.type ||
                        "stackedColumn" === c.type ||
                        "stackedColumn100" === c.type ||
                        "stackedBar" === c.type ||
                        "stackedBar100" === c.type ||
                        "stackedArea" === c.type ||
                        "stackedArea100" === c.type ||
                        "waterfall" === c.type
                            ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l != c.axisXIndex ? (c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                              (h += b.toolTipContent
                                  ? b.toolTipContent
                                  : c.toolTipContent
                                  ? c.toolTipContent
                                  : this.content && "function" !== typeof this.content
                                  ? this.content
                                  : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}"),
                              (l = c.axisXIndex))
                            : "bubble" === c.type
                            ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l != c.axisXIndex ? (c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                              (h += b.toolTipContent
                                  ? b.toolTipContent
                                  : c.toolTipContent
                                  ? c.toolTipContent
                                  : this.content && "function" !== typeof this.content
                                  ? this.content
                                  : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}"))
                            : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type
                            ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l != c.axisXIndex ? (c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                              (h += b.toolTipContent
                                  ? b.toolTipContent
                                  : c.toolTipContent
                                  ? c.toolTipContent
                                  : this.content && "function" !== typeof this.content
                                  ? this.content
                                  : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>{name}:</span>&nbsp;&nbsp;{y[0]},&nbsp;{y[1]}"))
                            : "candlestick" === c.type || "ohlc" === c.type
                            ? (this.chart.axisX && 1 < this.chart.axisX.length && (h += l != c.axisXIndex ? (c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                              (h += b.toolTipContent
                                  ? b.toolTipContent
                                  : c.toolTipContent
                                  ? c.toolTipContent
                                  : this.content && "function" !== typeof this.content
                                  ? this.content
                                  : "<span data-color='\"" +
                                    (this.options.fontColor ? "" : "'{color}'") +
                                    "\"'>{name}:</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low:&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}"))
                            : "boxAndWhisker" === c.type &&
                              (this.chart.axisX && 1 < this.chart.axisX.length && (h += l != c.axisXIndex ? (c.axisX.title ? c.axisX.title + "<br/>" : "X:{axisXIndex}<br/>") : ""),
                              (h += b.toolTipContent
                                  ? b.toolTipContent
                                  : c.toolTipContent
                                  ? c.toolTipContent
                                  : this.content && "function" !== typeof this.content
                                  ? this.content
                                  : "<span data-color='\"" +
                                    (this.options.fontColor ? "" : "'{color}'") +
                                    "\"'>{name}:</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}")),
                        null === d && (d = ""),
                        c.visible &&
                            (!0 === this.reversed
                                ? ((d = this.chart.replaceKeywordsWithValue(h, b, c, e) + d), f < a.length - 1 && (d = "</br>" + d))
                                : ((d += this.chart.replaceKeywordsWithValue(h, b, c, e)), f < a.length - 1 && (d += "</br>"))));
                }
                null !== d && (d = r + d);
            } else {
                c = a[0].dataSeries;
                b = a[0].dataPoint;
                e = a[0].index;
                if (null === b.toolTipContent || ("undefined" === typeof b.toolTipContent && null === c.options.toolTipContent)) return null;
                "line" === c.type ||
                "stepLine" === c.type ||
                "spline" === c.type ||
                "area" === c.type ||
                "stepArea" === c.type ||
                "splineArea" === c.type ||
                "column" === c.type ||
                "bar" === c.type ||
                "scatter" === c.type ||
                "stackedColumn" === c.type ||
                "stackedColumn100" === c.type ||
                "stackedBar" === c.type ||
                "stackedBar100" === c.type ||
                "stackedArea" === c.type ||
                "stackedArea100" === c.type ||
                "waterfall" === c.type
                    ? (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}")
                    : "bubble" === c.type
                    ? (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + ":</span>&nbsp;&nbsp;{y}, &nbsp;&nbsp;{z}")
                    : "pie" === c.type || "doughnut" === c.type || "funnel" === c.type || "pyramid" === c.type
                    ? (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.name ? "{name}:</span>&nbsp;&nbsp;" : b.label ? "{label}:</span>&nbsp;&nbsp;" : "</span>") + "{y}")
                    : "rangeColumn" === c.type || "rangeBar" === c.type || "rangeArea" === c.type || "rangeSplineArea" === c.type || "error" === c.type
                    ? (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" + (this.options.fontColor ? "" : "'{color}'") + "\"'>" + (b.label ? "{label}" : "{x}") + " :</span>&nbsp;&nbsp;{y[0]}, &nbsp;{y[1]}")
                    : "candlestick" === c.type || "ohlc" === c.type
                    ? (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" +
                            (this.options.fontColor ? "" : "'{color}'") +
                            "\"'>" +
                            (b.label ? "{label}" : "{x}") +
                            "</span><br/>Open: &nbsp;&nbsp;{y[0]}<br/>High: &nbsp;&nbsp;&nbsp;{y[1]}<br/>Low: &nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Close: &nbsp;&nbsp;{y[3]}")
                    : "boxAndWhisker" === c.type &&
                      (h = b.toolTipContent
                          ? b.toolTipContent
                          : c.toolTipContent
                          ? c.toolTipContent
                          : this.content && "function" !== typeof this.content
                          ? this.content
                          : "<span data-color='\"" +
                            (this.options.fontColor ? "" : "'{color}'") +
                            "\"'>" +
                            (b.label ? "{label}" : "{x}") +
                            "</span><br/>Minimum: &nbsp;{y[0]}<br/>Q1:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[1]}<br/>Q2:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[4]}<br/>Q3:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{y[2]}<br/>Maximum: &nbsp;{y[3]}");
                null === d && (d = "");
                d += this.chart.replaceKeywordsWithValue(h, b, c, e);
            }
            return d;
        };
        $.prototype.enableAnimation = function () {
            if (!this.container.style.WebkitTransition) {
                var a = this.getContainerTransition(this.containerTransitionDuration);
                this.container.style.WebkitTransition = a;
                this.container.style.MsTransition = a;
                this.container.style.transition = a;
                this.container.style.MozTransition = this.mozContainerTransition;
            }
        };
        $.prototype.disableAnimation = function () {
            this.container.style.WebkitTransition && ((this.container.style.WebkitTransition = ""), (this.container.style.MozTransition = ""), (this.container.style.MsTransition = ""), (this.container.style.transition = ""));
        };
        $.prototype.hide = function (a) {
            this.container &&
                ((this.container.style.display = "none"),
                (this.currentSeriesIndex = -1),
                (this._entries = this._dataSeriesIndex = this._xValue = null),
                (this._prevY = this._prevX = NaN),
                (this._updatedEventParameters = null),
                ("undefined" === typeof a || a) && this.chart.resetOverlayedCanvas());
        };
        $.prototype.show = function (a, d, c) {
            this._updateToolTip(a, d, "undefined" === typeof c ? !1 : c);
        };
        $.prototype.showAtIndex = function (a, d) {};
        $.prototype.showAtX = function (a, d) {
            if (!this.enabled) return !1;
            this.chart.clearedOverlayedCanvas = null;
            this._updateOptions();
            var c,
                b,
                e,
                f = [];
            e = !1;
            d = !l(d) && 0 <= d && d < this.chart.data.length ? d : 0;
            if (this.shared)
                for (var q = 0; q < this.chart.data.length; q++)
                    (c = this.chart.data[q]),
                        (b = c.getDataPointAtX(a, !1)) && b.dataPoint && !l(b.dataPoint.y) && c.visible && ((b.dataSeries = c), this.chart.data[d].axisX.convertValueToPixel(a) === c.axisX.convertValueToPixel(b.dataPoint.x) && f.push(b));
            else (c = this.chart.data[d]), (b = c.getDataPointAtX(a, !1)) && b.dataPoint && !l(b.dataPoint.y) && c.visible && ((b.dataSeries = c), f.push(b));
            if (0 < f.length) {
                for (q = 0; q < f.length; q++)
                    if (((b = f[q]), (this.shared || 0 <= b.dataSeries.type.indexOf("100")) && b.dataSeries.axisX && b.dataPoint.x >= b.dataSeries.axisX.viewportMinimum && b.dataPoint.x <= b.dataSeries.axisX.viewportMaximum)) {
                        e = !1;
                        break;
                    } else if (
                        b.dataSeries.axisX &&
                        b.dataSeries.axisY &&
                        (b.dataPoint.x < b.dataSeries.axisX.viewportMinimum || b.dataPoint.x > b.dataSeries.axisX.viewportMaximum || b.dataPoint.y < b.dataSeries.axisY.viewportMinimum || b.dataPoint.y > b.dataSeries.axisY.viewportMaximum)
                    )
                        e = !0;
                    else {
                        e = !1;
                        break;
                    }
                if (e) return this.hide(), !1;
                this.highlightObjects(f);
                this._entries = f;
                q = "";
                q = this.getToolTipInnerHTML({ entries: f });
                if (null !== q) {
                    this.contentDiv.innerHTML = q;
                    if (this.isToolTipDefinedInData && l(this.options.content) && l(this.options.contentFormatter))
                        for (b = this.contentDiv.getElementsByTagName("span"), q = 0; q < b.length; q++) b[q] && (b[q].style.color = b[q].getAttribute("data-color"));
                    q = !1;
                    "none" === this.container.style.display && ((q = !0), (this.container.style.display = "block"));
                    try {
                        (this.contentDiv.style.background = this.backgroundColor ? this.backgroundColor : r ? "rgba(255,255,255,.9)" : "rgb(255,255,255)"),
                            (this.borderColor =
                                "waterfall" === f[0].dataSeries.type
                                    ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataPoint.color
                                          ? f[0].dataPoint.color
                                          : 0 < f[0].dataPoint.y
                                          ? f[0].dataSeries.risingColor
                                          : f[0].dataSeries.fallingColor)
                                    : "error" === f[0].dataSeries.type
                                    ? (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataSeries.color
                                          ? f[0].dataSeries.color
                                          : f[0].dataSeries._colorSet[c.index % f[0].dataSeries._colorSet.length])
                                    : (this.contentDiv.style.borderRightColor = this.contentDiv.style.borderLeftColor = this.contentDiv.style.borderColor = this.options.borderColor
                                          ? this.options.borderColor
                                          : f[0].dataPoint.color
                                          ? f[0].dataPoint.color
                                          : f[0].dataSeries.color
                                          ? f[0].dataSeries.color
                                          : f[0].dataSeries._colorSet[f[0].index % f[0].dataSeries._colorSet.length])),
                            (this.contentDiv.style.borderWidth = this.borderThickness || 0 === this.borderThickness ? this.borderThickness + "px" : "2px"),
                            (this.contentDiv.style.borderRadius = this.cornerRadius || 0 === this.cornerRadius ? this.cornerRadius + "px" : "5px"),
                            (this.container.style.borderRadius = this.contentDiv.style.borderRadius),
                            (this.contentDiv.style.fontSize = this.fontSize || 0 === this.fontSize ? this.fontSize + "px" : "14px"),
                            (this.contentDiv.style.color = this.fontColor ? this.fontColor : "#000000"),
                            (this.contentDiv.style.fontFamily = this.fontFamily ? this.fontFamily : "Calibri, Arial, Georgia, serif;"),
                            (this.contentDiv.style.fontWeight = this.fontWeight ? this.fontWeight : "normal"),
                            (this.contentDiv.style.fontStyle = this.fontStyle ? this.fontStyle : r ? "italic" : "normal");
                    } catch (t) {}
                    "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type
                        ? (c =
                              f[0].dataSeries.dataPointEOs[f[0].index].center.x +
                              f[0].dataSeries.radius * Math.cos(f[0].dataSeries.dataPointEOs[f[0].index].midAngle) +
                              -("left" === f[0].dataSeries.dataPointEOs[f[0].index].hemisphere ? 0 : this.container.clientWidth))
                        : "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type
                        ? ((b = f[0].dataSeries.dataPointEOs[f[0].index].sectionsofFunnel), (c = (b.x1 + b.x2 - this.container.clientWidth) / 2))
                        : ((c =
                              "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type
                                  ? (f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y.length ? f[0].dataPoint.y[f[0].dataPoint.y.length - 1] : f[0].dataPoint.y) - this.container.clientWidth) << 0
                                  : (f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x) - this.container.clientWidth) << 0),
                          (c -= 10));
                    0 > c && (c += this.container.clientWidth + 20);
                    c + this.container.clientWidth > Math.max(this.chart.container.clientWidth, this.chart.width) && (c = Math.max(0, Math.max(this.chart.container.clientWidth, this.chart.width) - this.container.clientWidth));
                    1 !== f.length ||
                    this.shared ||
                    ("line" !== f[0].dataSeries.type &&
                        "stepLine" !== f[0].dataSeries.type &&
                        "spline" !== f[0].dataSeries.type &&
                        "area" !== f[0].dataSeries.type &&
                        "stepArea" !== f[0].dataSeries.type &&
                        "splineArea" !== f[0].dataSeries.type)
                        ? "pie" === f[0].dataSeries.type || "doughnut" === f[0].dataSeries.type
                            ? ((b = f[0].dataSeries.dataPointEOs[f[0].index].center.y + f[0].dataSeries.radius * Math.sin(f[0].dataSeries.dataPointEOs[f[0].index].midAngle)),
                              b < f[0].dataSeries.dataPointEOs[f[0].index].center.y && (b += this.container.clientHeight))
                            : "funnel" === f[0].dataSeries.type || "pyramid" === f[0].dataSeries.type
                            ? ((b = f[0].dataSeries.dataPointEOs[f[0].dataSeries.reversed ? f[0].dataSeries.dataPointEOs.length - 1 - f[0].index : f[0].index].sectionsofFunnel),
                              (b = "undefined" !== typeof b.x5 ? (b.y2 + b.y4) / 2 : (b.y2 + b.y3) / 2 + this.container.clientHeight / 2))
                            : (b =
                                  "bar" === f[0].dataSeries.type || "rangeBar" === f[0].dataSeries.type || "stackedBar" === f[0].dataSeries.type || "stackedBar100" === f[0].dataSeries.type
                                      ? f[0].dataSeries.axisX.convertValueToPixel(f[0].dataPoint.x)
                                      : f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y.length ? f[0].dataPoint.y[f[0].dataPoint.y.length - 1] : f[0].dataPoint.y))
                        : (b = f[0].dataSeries.axisY.convertValueToPixel(f[0].dataPoint.y));
                    b = -b + 10;
                    0 < b + this.container.clientHeight + 5 && (b -= b + this.container.clientHeight + 5 - 0);
                    this.fixMozTransitionDelay(c, b);
                    !this.animationEnabled || q ? this.disableAnimation() : (this.enableAnimation(), (this.container.style.MozTransition = this.mozContainerTransition));
                    this.container.style.left = c + "px";
                    this.container.style.bottom = b + "px";
                } else return this.hide(!1), !1;
            } else return this.hide(), !1;
            this._xValue = a;
            this._dataSeriesIndex = d;
            this._prevY = this._prevX = NaN;
            return !0;
        };
        $.prototype.fixMozTransitionDelay = function (a, d) {
            if (20 < this.chart._eventManager.lastObjectId) this.mozContainerTransition = this.getContainerTransition(0);
            else {
                var c = parseFloat(this.container.style.left),
                    c = isNaN(c) ? 0 : c,
                    b = parseFloat(this.container.style.bottom),
                    b = isNaN(b) ? 0 : b;
                10 < Math.sqrt(Math.pow(c - a, 2) + Math.pow(b - d, 2)) ? (this.mozContainerTransition = this.getContainerTransition(0.1)) : (this.mozContainerTransition = this.getContainerTransition(0));
            }
        };
        $.prototype.getContainerTransition = function (a) {
            return "left " + a + "s ease-out 0s, bottom " + a + "s ease-out 0s";
        };
        ga.prototype.reset = function () {
            this.lastObjectId = 0;
            this.objectMap = [];
            this.rectangularRegionEventSubscriptions = [];
            this.previousDataPointEventObject = null;
            this.eventObjects = [];
            r && (this.ghostCtx.clearRect(0, 0, this.chart.width, this.chart.height), this.ghostCtx.beginPath());
        };
        ga.prototype.getNewObjectTrackingId = function () {
            return ++this.lastObjectId;
        };
        ga.prototype.mouseEventHandler = function (a) {
            if ("mousemove" === a.type || "click" === a.type) {
                var d = [],
                    c = Qa(a),
                    b = null;
                if ((b = this.chart.getObjectAtXY(c.x, c.y, !1)) && "undefined" !== typeof this.objectMap[b])
                    if (((b = this.objectMap[b]), "dataPoint" === b.objectType)) {
                        var e = this.chart.data[b.dataSeriesIndex],
                            f = e.dataPoints[b.dataPointIndex],
                            l = b.dataPointIndex;
                        b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e.options, dataPointIndex: l, dataSeriesIndex: e.index, chart: this.chart };
                        b.eventContext = { context: f, userContext: f, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(b);
                        b = this.objectMap[e.id];
                        b.eventParameter = { x: c.x, y: c.y, dataPoint: f, dataSeries: e.options, dataPointIndex: l, dataSeriesIndex: e.index, chart: this.chart };
                        b.eventContext = { context: e, userContext: e.options, mouseover: "mouseover", mousemove: "mousemove", mouseout: "mouseout", click: "click" };
                        d.push(this.objectMap[e.id]);
                    } else
                        "legendItem" === b.objectType &&
                            ((e = this.chart.data[b.dataSeriesIndex]),
                            (f = null !== b.dataPointIndex ? e.dataPoints[b.dataPointIndex] : null),
                            (b.eventParameter = { x: c.x, y: c.y, dataSeries: e.options, dataPoint: f, dataPointIndex: b.dataPointIndex, dataSeriesIndex: b.dataSeriesIndex, chart: this.chart }),
                            (b.eventContext = { context: this.chart.legend, userContext: this.chart.legend.options, mouseover: "itemmouseover", mousemove: "itemmousemove", mouseout: "itemmouseout", click: "itemclick" }),
                            d.push(b));
                e = [];
                for (c = 0; c < this.mouseoveredObjectMaps.length; c++) {
                    f = !0;
                    for (b = 0; b < d.length; b++)
                        if (d[b].id === this.mouseoveredObjectMaps[c].id) {
                            f = !1;
                            break;
                        }
                    f ? this.fireEvent(this.mouseoveredObjectMaps[c], "mouseout", a) : e.push(this.mouseoveredObjectMaps[c]);
                }
                this.mouseoveredObjectMaps = e;
                for (c = 0; c < d.length; c++) {
                    e = !1;
                    for (b = 0; b < this.mouseoveredObjectMaps.length; b++)
                        if (d[c].id === this.mouseoveredObjectMaps[b].id) {
                            e = !0;
                            break;
                        }
                    e || (this.fireEvent(d[c], "mouseover", a), this.mouseoveredObjectMaps.push(d[c]));
                    "click" === a.type ? this.fireEvent(d[c], "click", a) : "mousemove" === a.type && this.fireEvent(d[c], "mousemove", a);
                }
            }
        };
        ga.prototype.fireEvent = function (a, d, c) {
            if (a && d) {
                var b = a.eventParameter,
                    e = a.eventContext,
                    f = a.eventContext.userContext;
                f && e && f[e[d]] && f[e[d]].call(f, b);
                "mouseout" !== d
                    ? f.cursor && f.cursor !== c.target.style.cursor && (c.target.style.cursor = f.cursor)
                    : ((c.target.style.cursor = this.chart.panEnabled ? ("itemmouseout" !== e.mouseout || f.dockInsidePlotArea ? "move" : this.chart._defaultCursor) : this.chart._defaultCursor),
                      delete a.eventParameter,
                      delete a.eventContext);
                "click" === d && "dataPoint" === a.objectType && this.chart.pieDoughnutClickHandler && this.chart.pieDoughnutClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
                "click" === d && "dataPoint" === a.objectType && this.chart.funnelPyramidClickHandler && this.chart.funnelPyramidClickHandler.call(this.chart.data[a.dataSeriesIndex], b);
            }
        };
        ja.prototype.animate = function (a, d, c, b, e) {
            var f = this;
            this.chart.isAnimating = !0;
            e = e || Q.easing.linear;
            c && this.animations.push({ startTime: new Date().getTime() + (a ? a : 0), duration: d, animationCallback: c, onComplete: b });
            for (a = []; 0 < this.animations.length; )
                if (
                    ((d = this.animations.shift()),
                    (c = new Date().getTime()),
                    (b = 0),
                    d.startTime <= c && ((b = e(Math.min(c - d.startTime, d.duration), 0, 1, d.duration)), (b = Math.min(b, 1)), isNaN(b) || !isFinite(b)) && (b = 1),
                    1 > b && a.push(d),
                    d.animationCallback(b),
                    1 <= b && d.onComplete)
                )
                    d.onComplete();
            this.animations = a;
            0 < this.animations.length
                ? (this.animationRequestId = this.chart.requestAnimFrame.call(window, function () {
                      f.animate.call(f);
                  }))
                : (this.chart.isAnimating = !1);
        };
        ja.prototype.cancelAllAnimations = function () {
            this.animations = [];
            this.animationRequestId && this.chart.cancelRequestAnimFrame.call(window, this.animationRequestId);
            this.animationRequestId = null;
            this.chart.isAnimating = !1;
        };
        var Q = {
                yScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, e - e * a, c.canvas.width / ia, (a * c.canvas.height) / ia);
                    }
                },
                xScaleAnimation: function (a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas,
                            e = d.animationBase;
                        c.drawImage(b, 0, 0, b.width, b.height, e - e * a, 0, (a * c.canvas.width) / ia, c.canvas.height / ia);
                    }
                },
                xClipAnimation: function (a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        0 < a && c.drawImage(b, 0, 0, b.width * a, b.height, 0, 0, (b.width * a) / ia, b.height / ia);
                        c.restore();
                    }
                },
                fadeInAnimation: function (a, d) {
                    if (0 !== a) {
                        var c = d.dest,
                            b = d.source.canvas;
                        c.save();
                        c.globalAlpha = a;
                        c.drawImage(b, 0, 0, b.width, b.height, 0, 0, c.canvas.width / ia, c.canvas.height / ia);
                        c.restore();
                    }
                },
                easing: {
                    linear: function (a, d, c, b) {
                        return (c * a) / b + d;
                    },
                    easeOutQuad: function (a, d, c, b) {
                        return -c * (a /= b) * (a - 2) + d;
                    },
                    easeOutQuart: function (a, d, c, b) {
                        return -c * ((a = a / b - 1) * a * a * a - 1) + d;
                    },
                    easeInQuad: function (a, d, c, b) {
                        return c * (a /= b) * a + d;
                    },
                    easeInQuart: function (a, d, c, b) {
                        return c * (a /= b) * a * a * a + d;
                    },
                },
            },
            aa = {
                drawMarker: function (a, d, c, b, e, f, l, r) {
                    if (c) {
                        var t = 1;
                        c.fillStyle = f ? f : "#000000";
                        c.strokeStyle = l ? l : "#000000";
                        c.lineWidth = r ? r : 0;
                        c.setLineDash && c.setLineDash(I("solid", r));
                        "circle" === b
                            ? (c.moveTo(a, d),
                              c.beginPath(),
                              c.arc(a, d, e / 2, 0, 2 * Math.PI, !1),
                              f && c.fill(),
                              r && (l ? c.stroke() : ((t = c.globalAlpha), (c.globalAlpha = 0.15), (c.strokeStyle = "black"), c.stroke(), (c.globalAlpha = t))))
                            : "square" === b
                            ? (c.beginPath(), c.rect(a - e / 2, d - e / 2, e, e), f && c.fill(), r && (l ? c.stroke() : ((t = c.globalAlpha), (c.globalAlpha = 0.15), (c.strokeStyle = "black"), c.stroke(), (c.globalAlpha = t))))
                            : "triangle" === b
                            ? (c.beginPath(),
                              c.moveTo(a - e / 2, d + e / 2),
                              c.lineTo(a + e / 2, d + e / 2),
                              c.lineTo(a, d - e / 2),
                              c.closePath(),
                              f && c.fill(),
                              r && (l ? c.stroke() : ((t = c.globalAlpha), (c.globalAlpha = 0.15), (c.strokeStyle = "black"), c.stroke(), (c.globalAlpha = t))),
                              c.beginPath())
                            : "cross" === b &&
                              ((c.strokeStyle = f),
                              (c.lineWidth = e / 4),
                              c.beginPath(),
                              c.moveTo(a - e / 2, d - e / 2),
                              c.lineTo(a + e / 2, d + e / 2),
                              c.stroke(),
                              c.moveTo(a + e / 2, d - e / 2),
                              c.lineTo(a - e / 2, d + e / 2),
                              c.stroke());
                    }
                },
                drawMarkers: function (a) {
                    for (var d = 0; d < a.length; d++) {
                        var c = a[d];
                        aa.drawMarker(c.x, c.y, c.ctx, c.type, c.size, c.color, c.borderColor, c.borderThickness);
                    }
                },
            };
        return t;
    })();
    w.version = "v3.10.14 GA";
    window.CanvasJS && w && !window.CanvasJS.Chart && (window.CanvasJS.Chart = w);
})();

/*
  excanvas is used to support IE678 which do not implement HTML5 Canvas Element. You can safely remove the following excanvas code if you don't need to support older browsers.

  Copyright 2006 Google Inc. https://code.google.com/p/explorercanvas/
  Licensed under the Apache License, Version 2.0
*/
document.createElement("canvas").getContext ||
    (function () {
        function V() {
            return this.context_ || (this.context_ = new C(this));
        }
        function W(a, b, c) {
            var g = M.call(arguments, 2);
            return function () {
                return a.apply(b, g.concat(M.call(arguments)));
            };
        }
        function N(a) {
            return String(a).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
        }
        function O(a) {
            a.namespaces.g_vml_ || a.namespaces.add("g_vml_", "urn:schemas-microsoft-com:vml", "#default#VML");
            a.namespaces.g_o_ || a.namespaces.add("g_o_", "urn:schemas-microsoft-com:office:office", "#default#VML");
            a.styleSheets.ex_canvas_ || ((a = a.createStyleSheet()), (a.owningElement.id = "ex_canvas_"), (a.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"));
        }
        function X(a) {
            var b = a.srcElement;
            switch (a.propertyName) {
                case "width":
                    b.getContext().clearRect();
                    b.style.width = b.attributes.width.nodeValue + "px";
                    b.firstChild.style.width = b.clientWidth + "px";
                    break;
                case "height":
                    b.getContext().clearRect(), (b.style.height = b.attributes.height.nodeValue + "px"), (b.firstChild.style.height = b.clientHeight + "px");
            }
        }
        function Y(a) {
            a = a.srcElement;
            a.firstChild && ((a.firstChild.style.width = a.clientWidth + "px"), (a.firstChild.style.height = a.clientHeight + "px"));
        }
        function D() {
            return [
                [1, 0, 0],
                [0, 1, 0],
                [0, 0, 1],
            ];
        }
        function t(a, b) {
            for (var c = D(), g = 0; 3 > g; g++)
                for (var e = 0; 3 > e; e++) {
                    for (var f = 0, d = 0; 3 > d; d++) f += a[g][d] * b[d][e];
                    c[g][e] = f;
                }
            return c;
        }
        function P(a, b) {
            b.fillStyle = a.fillStyle;
            b.lineCap = a.lineCap;
            b.lineJoin = a.lineJoin;
            b.lineWidth = a.lineWidth;
            b.miterLimit = a.miterLimit;
            b.shadowBlur = a.shadowBlur;
            b.shadowColor = a.shadowColor;
            b.shadowOffsetX = a.shadowOffsetX;
            b.shadowOffsetY = a.shadowOffsetY;
            b.strokeStyle = a.strokeStyle;
            b.globalAlpha = a.globalAlpha;
            b.font = a.font;
            b.textAlign = a.textAlign;
            b.textBaseline = a.textBaseline;
            b.arcScaleX_ = a.arcScaleX_;
            b.arcScaleY_ = a.arcScaleY_;
            b.lineScale_ = a.lineScale_;
        }
        function Q(a) {
            var b = a.indexOf("(", 3),
                c = a.indexOf(")", b + 1),
                b = a.substring(b + 1, c).split(",");
            if (4 != b.length || "a" != a.charAt(3)) b[3] = 1;
            return b;
        }
        function E(a, b, c) {
            return Math.min(c, Math.max(b, a));
        }
        function F(a, b, c) {
            0 > c && c++;
            1 < c && c--;
            return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + 6 * (b - a) * (2 / 3 - c) : a;
        }
        function G(a) {
            if (a in H) return H[a];
            var b,
                c = 1;
            a = String(a);
            if ("#" == a.charAt(0)) b = a;
            else if (/^rgb/.test(a)) {
                c = Q(a);
                b = "#";
                for (var g, e = 0; 3 > e; e++) (g = -1 != c[e].indexOf("%") ? Math.floor(255 * (parseFloat(c[e]) / 100)) : +c[e]), (b += v[E(g, 0, 255)]);
                c = +c[3];
            } else if (/^hsl/.test(a)) {
                e = c = Q(a);
                b = (parseFloat(e[0]) / 360) % 360;
                0 > b && b++;
                g = E(parseFloat(e[1]) / 100, 0, 1);
                e = E(parseFloat(e[2]) / 100, 0, 1);
                if (0 == g) g = e = b = e;
                else {
                    var f = 0.5 > e ? e * (1 + g) : e + g - e * g,
                        d = 2 * e - f;
                    g = F(d, f, b + 1 / 3);
                    e = F(d, f, b);
                    b = F(d, f, b - 1 / 3);
                }
                b = "#" + v[Math.floor(255 * g)] + v[Math.floor(255 * e)] + v[Math.floor(255 * b)];
                c = c[3];
            } else b = Z[a] || a;
            return (H[a] = { color: b, alpha: c });
        }
        function C(a) {
            this.m_ = D();
            this.mStack_ = [];
            this.aStack_ = [];
            this.currentPath_ = [];
            this.fillStyle = this.strokeStyle = "#000";
            this.lineWidth = 1;
            this.lineJoin = "miter";
            this.lineCap = "butt";
            this.miterLimit = 1 * q;
            this.globalAlpha = 1;
            this.font = "10px sans-serif";
            this.textAlign = "left";
            this.textBaseline = "alphabetic";
            this.canvas = a;
            var b = "width:" + a.clientWidth + "px;height:" + a.clientHeight + "px;overflow:hidden;position:absolute",
                c = a.ownerDocument.createElement("div");
            c.style.cssText = b;
            a.appendChild(c);
            b = c.cloneNode(!1);
            b.style.backgroundColor = "red";
            b.style.filter = "alpha(opacity=0)";
            a.appendChild(b);
            this.element_ = c;
            this.lineScale_ = this.arcScaleY_ = this.arcScaleX_ = 1;
        }
        function R(a, b, c, g) {
            a.currentPath_.push({ type: "bezierCurveTo", cp1x: b.x, cp1y: b.y, cp2x: c.x, cp2y: c.y, x: g.x, y: g.y });
            a.currentX_ = g.x;
            a.currentY_ = g.y;
        }
        function S(a, b) {
            var c = G(a.strokeStyle),
                g = c.color,
                c = c.alpha * a.globalAlpha,
                e = a.lineScale_ * a.lineWidth;
            1 > e && (c *= e);
            b.push("<g_vml_:stroke", ' opacity="', c, '"', ' joinstyle="', a.lineJoin, '"', ' miterlimit="', a.miterLimit, '"', ' endcap="', $[a.lineCap] || "square", '"', ' weight="', e, 'px"', ' color="', g, '" />');
        }
        function T(a, b, c, g) {
            var e = a.fillStyle,
                f = a.arcScaleX_,
                d = a.arcScaleY_,
                k = g.x - c.x,
                n = g.y - c.y;
            if (e instanceof w) {
                var h = 0,
                    l = (g = 0),
                    u = 0,
                    m = 1;
                if ("gradient" == e.type_) {
                    h = e.x1_ / f;
                    c = e.y1_ / d;
                    var p = s(a, e.x0_ / f, e.y0_ / d),
                        h = s(a, h, c),
                        h = (180 * Math.atan2(h.x - p.x, h.y - p.y)) / Math.PI;
                    0 > h && (h += 360);
                    1e-6 > h && (h = 0);
                } else (p = s(a, e.x0_, e.y0_)), (g = (p.x - c.x) / k), (l = (p.y - c.y) / n), (k /= f * q), (n /= d * q), (m = x.max(k, n)), (u = (2 * e.r0_) / m), (m = (2 * e.r1_) / m - u);
                f = e.colors_;
                f.sort(function (a, b) {
                    return a.offset - b.offset;
                });
                d = f.length;
                p = f[0].color;
                c = f[d - 1].color;
                k = f[0].alpha * a.globalAlpha;
                a = f[d - 1].alpha * a.globalAlpha;
                for (var n = [], r = 0; r < d; r++) {
                    var t = f[r];
                    n.push(t.offset * m + u + " " + t.color);
                }
                b.push(
                    '<g_vml_:fill type="',
                    e.type_,
                    '"',
                    ' method="none" focus="100%"',
                    ' color="',
                    p,
                    '"',
                    ' color2="',
                    c,
                    '"',
                    ' colors="',
                    n.join(","),
                    '"',
                    ' opacity="',
                    a,
                    '"',
                    ' g_o_:opacity2="',
                    k,
                    '"',
                    ' angle="',
                    h,
                    '"',
                    ' focusposition="',
                    g,
                    ",",
                    l,
                    '" />'
                );
            } else
                e instanceof I
                    ? k && n && b.push("<g_vml_:fill", ' position="', (-c.x / k) * f * f, ",", (-c.y / n) * d * d, '"', ' type="tile"', ' src="', e.src_, '" />')
                    : ((e = G(a.fillStyle)), b.push('<g_vml_:fill color="', e.color, '" opacity="', e.alpha * a.globalAlpha, '" />'));
        }
        function s(a, b, c) {
            a = a.m_;
            return { x: q * (b * a[0][0] + c * a[1][0] + a[2][0]) - r, y: q * (b * a[0][1] + c * a[1][1] + a[2][1]) - r };
        }
        function z(a, b, c) {
            isFinite(b[0][0]) && isFinite(b[0][1]) && isFinite(b[1][0]) && isFinite(b[1][1]) && isFinite(b[2][0]) && isFinite(b[2][1]) && ((a.m_ = b), c && (a.lineScale_ = aa(ba(b[0][0] * b[1][1] - b[0][1] * b[1][0]))));
        }
        function w(a) {
            this.type_ = a;
            this.r1_ = this.y1_ = this.x1_ = this.r0_ = this.y0_ = this.x0_ = 0;
            this.colors_ = [];
        }
        function I(a, b) {
            if (!a || 1 != a.nodeType || "IMG" != a.tagName) throw new A("TYPE_MISMATCH_ERR");
            if ("complete" != a.readyState) throw new A("INVALID_STATE_ERR");
            switch (b) {
                case "repeat":
                case null:
                case "":
                    this.repetition_ = "repeat";
                    break;
                case "repeat-x":
                case "repeat-y":
                case "no-repeat":
                    this.repetition_ = b;
                    break;
                default:
                    throw new A("SYNTAX_ERR");
            }
            this.src_ = a.src;
            this.width_ = a.width;
            this.height_ = a.height;
        }
        function A(a) {
            this.code = this[a];
            this.message = a + ": DOM Exception " + this.code;
        }
        var x = Math,
            k = x.round,
            J = x.sin,
            K = x.cos,
            ba = x.abs,
            aa = x.sqrt,
            q = 10,
            r = q / 2;
        navigator.userAgent.match(/MSIE ([\d.]+)?/);
        var M = Array.prototype.slice;
        O(document);
        var U = {
            init: function (a) {
                a = a || document;
                a.createElement("canvas");
                a.attachEvent("onreadystatechange", W(this.init_, this, a));
            },
            init_: function (a) {
                a = a.getElementsByTagName("canvas");
                for (var b = 0; b < a.length; b++) this.initElement(a[b]);
            },
            initElement: function (a) {
                if (!a.getContext) {
                    a.getContext = V;
                    O(a.ownerDocument);
                    a.innerHTML = "";
                    a.attachEvent("onpropertychange", X);
                    a.attachEvent("onresize", Y);
                    var b = a.attributes;
                    b.width && b.width.specified ? (a.style.width = b.width.nodeValue + "px") : (a.width = a.clientWidth);
                    b.height && b.height.specified ? (a.style.height = b.height.nodeValue + "px") : (a.height = a.clientHeight);
                }
                return a;
            },
        };
        U.init();
        for (var v = [], d = 0; 16 > d; d++) for (var B = 0; 16 > B; B++) v[16 * d + B] = d.toString(16) + B.toString(16);
        var Z = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                grey: "#808080",
                greenyellow: "#ADFF2F",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                oldlace: "#FDF5E6",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                whitesmoke: "#F5F5F5",
                yellowgreen: "#9ACD32",
            },
            H = {},
            L = {},
            $ = { butt: "flat", round: "round" },
            d = C.prototype;
        d.clearRect = function () {
            this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), (this.textMeasureEl_ = null));
            this.element_.innerHTML = "";
        };
        d.beginPath = function () {
            this.currentPath_ = [];
        };
        d.moveTo = function (a, b) {
            var c = s(this, a, b);
            this.currentPath_.push({ type: "moveTo", x: c.x, y: c.y });
            this.currentX_ = c.x;
            this.currentY_ = c.y;
        };
        d.lineTo = function (a, b) {
            var c = s(this, a, b);
            this.currentPath_.push({ type: "lineTo", x: c.x, y: c.y });
            this.currentX_ = c.x;
            this.currentY_ = c.y;
        };
        d.bezierCurveTo = function (a, b, c, g, e, f) {
            e = s(this, e, f);
            a = s(this, a, b);
            c = s(this, c, g);
            R(this, a, c, e);
        };
        d.quadraticCurveTo = function (a, b, c, g) {
            a = s(this, a, b);
            c = s(this, c, g);
            g = { x: this.currentX_ + (2 / 3) * (a.x - this.currentX_), y: this.currentY_ + (2 / 3) * (a.y - this.currentY_) };
            R(this, g, { x: g.x + (c.x - this.currentX_) / 3, y: g.y + (c.y - this.currentY_) / 3 }, c);
        };
        d.arc = function (a, b, c, g, e, f) {
            c *= q;
            var d = f ? "at" : "wa",
                k = a + K(g) * c - r,
                n = b + J(g) * c - r;
            g = a + K(e) * c - r;
            e = b + J(e) * c - r;
            k != g || f || (k += 0.125);
            a = s(this, a, b);
            k = s(this, k, n);
            g = s(this, g, e);
            this.currentPath_.push({ type: d, x: a.x, y: a.y, radius: c, xStart: k.x, yStart: k.y, xEnd: g.x, yEnd: g.y });
        };
        d.rect = function (a, b, c, g) {
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
        };
        d.strokeRect = function (a, b, c, g) {
            var e = this.currentPath_;
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
            this.stroke();
            this.currentPath_ = e;
        };
        d.fillRect = function (a, b, c, g) {
            var e = this.currentPath_;
            this.beginPath();
            this.moveTo(a, b);
            this.lineTo(a + c, b);
            this.lineTo(a + c, b + g);
            this.lineTo(a, b + g);
            this.closePath();
            this.fill();
            this.currentPath_ = e;
        };
        d.createLinearGradient = function (a, b, c, g) {
            var e = new w("gradient");
            e.x0_ = a;
            e.y0_ = b;
            e.x1_ = c;
            e.y1_ = g;
            return e;
        };
        d.createRadialGradient = function (a, b, c, g, e, f) {
            var d = new w("gradientradial");
            d.x0_ = a;
            d.y0_ = b;
            d.r0_ = c;
            d.x1_ = g;
            d.y1_ = e;
            d.r1_ = f;
            return d;
        };
        d.drawImage = function (a, b) {
            var c, g, e, d, r, y, n, h;
            e = a.runtimeStyle.width;
            d = a.runtimeStyle.height;
            a.runtimeStyle.width = "auto";
            a.runtimeStyle.height = "auto";
            var l = a.width,
                u = a.height;
            a.runtimeStyle.width = e;
            a.runtimeStyle.height = d;
            if (3 == arguments.length) (c = arguments[1]), (g = arguments[2]), (r = y = 0), (n = e = l), (h = d = u);
            else if (5 == arguments.length) (c = arguments[1]), (g = arguments[2]), (e = arguments[3]), (d = arguments[4]), (r = y = 0), (n = l), (h = u);
            else if (9 == arguments.length) (r = arguments[1]), (y = arguments[2]), (n = arguments[3]), (h = arguments[4]), (c = arguments[5]), (g = arguments[6]), (e = arguments[7]), (d = arguments[8]);
            else throw Error("Invalid number of arguments");
            var m = s(this, c, g),
                p = [];
            p.push(" <g_vml_:group", ' coordsize="', 10 * q, ",", 10 * q, '"', ' coordorigin="0,0"', ' style="width:', 10, "px;height:", 10, "px;position:absolute;");
            if (1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
                var t = [];
                t.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", k(m.x / q), ",", "Dy=", k(m.y / q), "");
                var v = s(this, c + e, g),
                    w = s(this, c, g + d);
                c = s(this, c + e, g + d);
                m.x = x.max(m.x, v.x, w.x, c.x);
                m.y = x.max(m.y, v.y, w.y, c.y);
                p.push("padding:0 ", k(m.x / q), "px ", k(m.y / q), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", t.join(""), ", sizingmethod='clip');");
            } else p.push("top:", k(m.y / q), "px;left:", k(m.x / q), "px;");
            p.push(
                ' ">',
                '<g_vml_:image src="',
                a.src,
                '"',
                ' style="width:',
                q * e,
                "px;",
                " height:",
                q * d,
                'px"',
                ' cropleft="',
                r / l,
                '"',
                ' croptop="',
                y / u,
                '"',
                ' cropright="',
                (l - r - n) / l,
                '"',
                ' cropbottom="',
                (u - y - h) / u,
                '"',
                " />",
                "</g_vml_:group>"
            );
            this.element_.insertAdjacentHTML("BeforeEnd", p.join(""));
        };
        d.stroke = function (a) {
            var b = [];
            b.push("<g_vml_:shape", ' filled="', !!a, '"', ' style="position:absolute;width:', 10, "px;height:", 10, 'px;"', ' coordorigin="0,0"', ' coordsize="', 10 * q, ",", 10 * q, '"', ' stroked="', !a, '"', ' path="');
            for (var c = { x: null, y: null }, d = { x: null, y: null }, e = 0; e < this.currentPath_.length; e++) {
                var f = this.currentPath_[e];
                switch (f.type) {
                    case "moveTo":
                        b.push(" m ", k(f.x), ",", k(f.y));
                        break;
                    case "lineTo":
                        b.push(" l ", k(f.x), ",", k(f.y));
                        break;
                    case "close":
                        b.push(" x ");
                        f = null;
                        break;
                    case "bezierCurveTo":
                        b.push(" c ", k(f.cp1x), ",", k(f.cp1y), ",", k(f.cp2x), ",", k(f.cp2y), ",", k(f.x), ",", k(f.y));
                        break;
                    case "at":
                    case "wa":
                        b.push(
                            " ",
                            f.type,
                            " ",
                            k(f.x - this.arcScaleX_ * f.radius),
                            ",",
                            k(f.y - this.arcScaleY_ * f.radius),
                            " ",
                            k(f.x + this.arcScaleX_ * f.radius),
                            ",",
                            k(f.y + this.arcScaleY_ * f.radius),
                            " ",
                            k(f.xStart),
                            ",",
                            k(f.yStart),
                            " ",
                            k(f.xEnd),
                            ",",
                            k(f.yEnd)
                        );
                }
                if (f) {
                    if (null == c.x || f.x < c.x) c.x = f.x;
                    if (null == d.x || f.x > d.x) d.x = f.x;
                    if (null == c.y || f.y < c.y) c.y = f.y;
                    if (null == d.y || f.y > d.y) d.y = f.y;
                }
            }
            b.push(' ">');
            a ? T(this, b, c, d) : S(this, b);
            b.push("</g_vml_:shape>");
            this.element_.insertAdjacentHTML("beforeEnd", b.join(""));
        };
        d.fill = function () {
            this.stroke(!0);
        };
        d.closePath = function () {
            this.currentPath_.push({ type: "close" });
        };
        d.save = function () {
            var a = {};
            P(this, a);
            this.aStack_.push(a);
            this.mStack_.push(this.m_);
            this.m_ = t(D(), this.m_);
        };
        d.restore = function () {
            this.aStack_.length && (P(this.aStack_.pop(), this), (this.m_ = this.mStack_.pop()));
        };
        d.translate = function (a, b) {
            z(
                this,
                t(
                    [
                        [1, 0, 0],
                        [0, 1, 0],
                        [a, b, 1],
                    ],
                    this.m_
                ),
                !1
            );
        };
        d.rotate = function (a) {
            var b = K(a);
            a = J(a);
            z(
                this,
                t(
                    [
                        [b, a, 0],
                        [-a, b, 0],
                        [0, 0, 1],
                    ],
                    this.m_
                ),
                !1
            );
        };
        d.scale = function (a, b) {
            this.arcScaleX_ *= a;
            this.arcScaleY_ *= b;
            z(
                this,
                t(
                    [
                        [a, 0, 0],
                        [0, b, 0],
                        [0, 0, 1],
                    ],
                    this.m_
                ),
                !0
            );
        };
        d.transform = function (a, b, c, d, e, f) {
            z(
                this,
                t(
                    [
                        [a, b, 0],
                        [c, d, 0],
                        [e, f, 1],
                    ],
                    this.m_
                ),
                !0
            );
        };
        d.setTransform = function (a, b, c, d, e, f) {
            z(
                this,
                [
                    [a, b, 0],
                    [c, d, 0],
                    [e, f, 1],
                ],
                !0
            );
        };
        d.drawText_ = function (a, b, c, d, e) {
            var f = this.m_;
            d = 0;
            var r = 1e3,
                t = 0,
                n = [],
                h;
            h = this.font;
            if (L[h]) h = L[h];
            else {
                var l = document.createElement("div").style;
                try {
                    l.font = h;
                } catch (u) {}
                h = L[h] = { style: l.fontStyle || "normal", variant: l.fontVariant || "normal", weight: l.fontWeight || "normal", size: l.fontSize || 10, family: l.fontFamily || "sans-serif" };
            }
            var l = h,
                m = this.element_;
            h = {};
            for (var p in l) h[p] = l[p];
            p = parseFloat(m.currentStyle.fontSize);
            m = parseFloat(l.size);
            "number" == typeof l.size
                ? (h.size = l.size)
                : -1 != l.size.indexOf("px")
                ? (h.size = m)
                : -1 != l.size.indexOf("em")
                ? (h.size = p * m)
                : -1 != l.size.indexOf("%")
                ? (h.size = (p / 100) * m)
                : -1 != l.size.indexOf("pt")
                ? (h.size = m / 0.75)
                : (h.size = p);
            h.size *= 0.981;
            p = h.style + " " + h.variant + " " + h.weight + " " + h.size + "px " + h.family;
            m = this.element_.currentStyle;
            l = this.textAlign.toLowerCase();
            switch (l) {
                case "left":
                case "center":
                case "right":
                    break;
                case "end":
                    l = "ltr" == m.direction ? "right" : "left";
                    break;
                case "start":
                    l = "rtl" == m.direction ? "right" : "left";
                    break;
                default:
                    l = "left";
            }
            switch (this.textBaseline) {
                case "hanging":
                case "top":
                    t = h.size / 1.75;
                    break;
                case "middle":
                    break;
                default:
                case null:
                case "alphabetic":
                case "ideographic":
                case "bottom":
                    t = -h.size / 2.25;
            }
            switch (l) {
                case "right":
                    d = 1e3;
                    r = 0.05;
                    break;
                case "center":
                    d = r = 500;
            }
            b = s(this, b + 0, c + t);
            n.push('<g_vml_:line from="', -d, ' 0" to="', r, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !e, '" stroked="', !!e, '" style="position:absolute;width:1px;height:1px;">');
            e ? S(this, n) : T(this, n, { x: -d, y: 0 }, { x: r, y: h.size });
            e = f[0][0].toFixed(3) + "," + f[1][0].toFixed(3) + "," + f[0][1].toFixed(3) + "," + f[1][1].toFixed(3) + ",0,0";
            b = k(b.x / q) + "," + k(b.y / q);
            n.push(
                '<g_vml_:skew on="t" matrix="',
                e,
                '" ',
                ' offset="',
                b,
                '" origin="',
                d,
                ' 0" />',
                '<g_vml_:path textpathok="true" />',
                '<g_vml_:textpath on="true" string="',
                N(a),
                '" style="v-text-align:',
                l,
                ";font:",
                N(p),
                '" /></g_vml_:line>'
            );
            this.element_.insertAdjacentHTML("beforeEnd", n.join(""));
        };
        d.fillText = function (a, b, c, d) {
            this.drawText_(a, b, c, d, !1);
        };
        d.strokeText = function (a, b, c, d) {
            this.drawText_(a, b, c, d, !0);
        };
        d.measureText = function (a) {
            this.textMeasureEl_ ||
                (this.element_.insertAdjacentHTML("beforeEnd", '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>'), (this.textMeasureEl_ = this.element_.lastChild));
            var b = this.element_.ownerDocument;
            this.textMeasureEl_.innerHTML = "";
            this.textMeasureEl_.style.font = this.font;
            this.textMeasureEl_.appendChild(b.createTextNode(a));
            return { width: this.textMeasureEl_.offsetWidth };
        };
        d.clip = function () {};
        d.arcTo = function () {};
        d.createPattern = function (a, b) {
            return new I(a, b);
        };
        w.prototype.addColorStop = function (a, b) {
            b = G(b);
            this.colors_.push({ offset: a, color: b.color, alpha: b.alpha });
        };
        d = A.prototype = Error();
        d.INDEX_SIZE_ERR = 1;
        d.DOMSTRING_SIZE_ERR = 2;
        d.HIERARCHY_REQUEST_ERR = 3;
        d.WRONG_DOCUMENT_ERR = 4;
        d.INVALID_CHARACTER_ERR = 5;
        d.NO_DATA_ALLOWED_ERR = 6;
        d.NO_MODIFICATION_ALLOWED_ERR = 7;
        d.NOT_FOUND_ERR = 8;
        d.NOT_SUPPORTED_ERR = 9;
        d.INUSE_ATTRIBUTE_ERR = 10;
        d.INVALID_STATE_ERR = 11;
        d.SYNTAX_ERR = 12;
        d.INVALID_MODIFICATION_ERR = 13;
        d.NAMESPACE_ERR = 14;
        d.INVALID_ACCESS_ERR = 15;
        d.VALIDATION_ERR = 16;
        d.TYPE_MISMATCH_ERR = 17;
        G_vmlCanvasManager = U;
        CanvasRenderingContext2D = C;
        CanvasGradient = w;
        CanvasPattern = I;
        DOMException = A;
    })();
/*tslint:enable*/
/*eslint-enable*/
/*jshint ignore:end*/
