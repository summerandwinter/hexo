webpackJsonp([5], [function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o() {
        u["default"].preload.showPreloadArea()
    }
    function a(e) {
        o(),
        u["default"].preload.onReady(function() {
            S["default"].pageStart(),
            u["default"].showPPT()
        }),
        l["default"].isMusicOff() || u["default"].buildBackgroundMusic(),
        u["default"].ensurePages([0],
        function() {})
    }
    function r(e, t, i) {
        return h["default"].log(e, t, i),
        h["default"].logPiwik(l["default"].getEnvironment(), e + " " + t + " " + i),
        !1
    }
    var s = i(4),
    l = n(s),
    c = i(22),
    u = n(c),
    d = i(11),
    f = n(d),
    p = i(1),
    h = n(p),
    g = i(3),
    m = n(g),
    v = i(8),
    w = n(v),
    b = i(9),
    y = n(b),
    k = i(95),
    A = (n(k), i(90)),
    x = n(A),
    C = i(92),
    P = n(C),
    I = i(91),
    S = n(I);
    window.location.href.indexOf(".lviewer.maka.im") > 0 && (window.location.href = "http://viewer.off.61xiangce.com/viewer/offline"),
    y["default"].send("homeStart"),
    h["default"].judgeShowAd() || h["default"].inIframe() || !h["default"].isMAKA() || w["default"].init(window.projectVersion),
    $(window).on("touchmove",
    function(e) {
        e.preventDefault()
    }),
    h["default"].judgePC() && h["default"].isMAKA() && (window.location.href = "/pcviewer/" + h["default"].viewerGetTail());
    var j = {
        lastCallback: function() {
            h["default"].getUrlParameter("answerid") || (S["default"].lastPage(), h["default"].judgeShowAd() ? P["default"].showGoogleAD() : x["default"].showAD({
                replay: function() {
                    u["default"].showPage(0)
                }
            }))
        },
        pageChangeCallback: function() {
            S["default"].pageChange(u["default"].currentPageIndex),
            u["default"].currentPageIndex === f["default"].getPageLength() - 1 && (h["default"].judgeShowAd() ? P["default"].loadStart() : x["default"].loadStart())
        }
    };
    u["default"].setOption(j),
    l["default"].setProjectId(window.projectVersion.id),
    m["default"].isLocal() ? window.localView = function(e) {
        f["default"].localInt(e).then(a)
    }: f["default"].init().then(a)["catch"](function(e) {
        h["default"].error(e)
    }),
    window.onerror = r,
    window.onDataStoryLoad = function() {
        window.dataStoryLoad = !0,
        y["default"].pushAll()
    }
},
, ,
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(1),
    s = n(r),
    l = function() {
        function e() {
            o(this, e),
            this.host = "/",
            this.examResultPage = -1,
            this.voteData = null,
            this.needWxLogin = !1,
            this.hasVote = !1
        }
        return a(e, [{
            key: "getInterActionUrl",
            value: function(e) {
                var t = {
                    dianzan: {
                        svg: "dianzan.svg"
                    },
                    like: {
                        svg: "heart.svg"
                    },
                    sad: {
                        svg: "sad.svg"
                    },
                    flower: {
                        svg: "flower.svg"
                    }
                };
                return e ? "http://res2.maka.im/cdn/maka/release/images/InterAction/" + t[e].svg: null
            }
        },
        {
            key: "isAppNormalMode",
            value: function() {
                return "function" != typeof window.callPhantom
            }
        },
        {
            key: "isIOS",
            value: function() {
                var e = navigator.userAgent;
                return e.indexOf("iPhone") > -1 || e.indexOf("iPad") > -1 || e.indexOf("Safari") > -1
            }
        },
        {
            key: "isFF",
            value: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("mozilla") > -1 && e.indexOf("firefox") > -1
            }
        },
        {
            key: "isWX",
            value: function() {
                if (window.Config.isAppNormalMode() && 4 == window.projectVersion.status) return ! 1;
                var e = navigator.userAgent;
                return e.indexOf("MicroMessenger") > -1
            }
        },
        {
            key: "isMobile",
            value: function() {
                return !! /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }
        },
        {
            key: "isLocal",
            value: function() {
                return - 1 !== window.location.pathname.indexOf("APPLOCAL")
            }
        },
        {
            key: "addTail",
            value: function(e, t, i) {
                var n = void 0,
                o = t ? t: "src",
                a = i ? i + "w_": "";
                return e.indexOf("aliyuncs") >= 0 || !this.isAppNormalMode() ? e: e
            }
        },
        {
            key: "getUid",
            value: function() {
                return window.projectVersion ? window.projectVersion.uid || "": ""
            }
        },
        {
            key: "isExam",
            value: function(e) {
                if (void 0 !== this.exam) return this.exam;
                var t = e.some(function(e) {
                    var t = e.content.some(function(e) {
                        return "examChoice" === e.type ? !0 : void 0
                    });
                    return t ? !0 : void 0
                });
                return this.exam = t,
                t
            }
        },
        {
            key: "isShareExam",
            value: function(e) {
                return this.isExam(e) && void 0 !== s["default"].getUrlParameter("answerid")
            }
        },
        {
            key: "isADtrans",
            value: function() {
                var e = s["default"].getUrlParameter("task_id"),
                t = s["default"].getUrlParameter("member_id");
                return void 0 !== e && void 0 !== t && this.isWX()
            }
        },
        {
            key: "setVoteData",
            value: function(e) {
                if (!this.voteData) {
                    this.voteData = e,
                    this.voteData.options = {},
                    this.voteData.hasVoteCnt = 0;
                    for (var t = 0; t < e.vote_option_info.length; t++) {
                        var i = e.vote_option_info[t];
                        this.voteData.options[i.vote_option_id] = i
                    }
                }
            }
        },
        {
            key: "setNeedWxLogin",
            value: function(e) {
                this.needWxLogin = e
            }
        }]),
        e
    } (),
    c = new l;
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(1),
    s = n(r),
    l = i(3),
    c = n(l),
    u = function() {
        function e() {
            o(this, e),
            this.canvas = {
                standardWidth: 640,
                standardHeight: 1008
            },
            "production" === this.getEnvironment() ? (this.ADtransHost = "http://chuanbo.maka.im", this.urlHost = "http://viewer.maka.im", this.apiHost = "http://api.maka.im", this.platHost = "http://www.maka.im", this.reportUrl = "http://newadmin.maka.mobi/api/witnesses") : (this.ADtransHost = "http://test.chuanbo.maka.im", this.urlHost = "http://test.viewer.maka.im", this.apiHost = "http://test.maka.im", this.platHost = "http://test.www.maka.im", this.reportUrl = "http://test.newadmin.maka.mobi/api/witnesses"),
            this.postFormUrl = this.apiHost + "/api/form/",
            this.newPostFormUrl = this.apiHost + "/api/v4/new_form/",
            this.eventClickUrl = this.apiHost + "/api/eventClick",
            this.glassBreakVoice = "http://m.maka.mobi/maka/app/gfile/public/files/edisk/music/2015/05/12/0dbb52cdd178ea1c953d5aaf9c562e10.mp3",
            this.engFontUrl = "http://global-maka-public.oss-cn-beijing.aliyuncs.com/fonts/",
            this.cdnUrl = "http://res2.maka.im/cdn/maka/release/",
            this.language = {
                submitForm: "提交",
                submiting: "提交中...",
                submited: "已提交",
                pleaseInput: "请输入",
                emptyForm: "表单不能全为空",
                submitSuccess: "提交成功!",
                wrongFormat: "格式不正确",
                submitFail: "网络不给力哦～请稍后再试!"
            },
            this.wxCookie = "functionOpenId2",
            this.voteTypeCookie = "vote_type"
        }
        return a(e, [{
            key: "isAdDebug",
            value: function() {
                return "true" === s["default"].getUrlParameter("addebug")
            }
        },
        {
            key: "isTurnOffOssCrop",
            value: function() {
                return ! 1
            }
        },
        {
            key: "getImgUrl",
            value: function(e) {
                return "http://localhost:4000/lab/maka/"+e;
            }
        },
        {
            key: "addCrop",
            value: function(e, t) {
                return e
            }
        },
        {
            key: "isGif",
            value: function(e) {
                var t = /\.gif/i,
                i = t.exec(e);
                return !! i
            }
        },
        {
            key: "getImgOss",
            value: function(e) {
                return this.cdnUrl + e
            }
        },
        {
            key: "getButtonLogo",
            value: function(e) {
                return this.cdnUrl + "images/button2/" + e
            }
        },
        {
            key: "getShapeUrl",
            value: function(e) {
                return "http://res2.maka.im/shapeSVG/" + e
            }
        },
        {
            key: "getPhoneCallUrl",
            value: function(e) {
                return this.cdnUrl + "images/phonecall/" + e
            }
        },
        {
            key: "getGlassBreakUrl",
            value: function(e) {
                return this.cdnUrl + "images/glassbreak/" + e
            }
        },
        {
            key: "getPButtonUrl",
            value: function(e) {
                return this.cdnUrl + "images/buttonSvg/" + e
            }
        },
        {
            key: "getInterActionBtn",
            value: function(e) {
                return this.cdnUrl + "images/InterAction/" + e
            }
        },
        {
            key: "isNodeProxy",
            value: function() {
                return window.projectVersion && window.projectVersion.isnodeproxy
            }
        },
        {
            key: "getAdvancedVoteUrl",
            value: function() {
                return this.apiHost + "/api/advanced_vote/" + window.projectVersion.id
            }
        },
        {
            key: "getMusicUrl",
            value: function(e) {
                return 1 === parseInt(e.version) && ("" + e.id).indexOf("/") > 0 ? this.isHttpHead(e.id) ? e.id.indexOf("res.maka.im") > 0 ? e.id.replace("res.maka.im", "res2.maka.im") : e.id: "production" === this.getEnvironment() ? "http://res2.maka.im/" + e.id: "http://maka-test.oss-cn-beijing.aliyuncs.com/" + e.id: "http://res2.maka.im/gfilemusic/" + e.id + ".mp3"
            }
        },
        {
            key: "getContentJSONUrl",
            value: function() {
                var e = void 0,
                t = "",
                i = this.getProjectId(),
                n = this.getEnvironment(),
                o = c["default"].getUid();
                return "http://localhost:4000/lab/maka/"+"user/"+o+"/template/"+i+"/"+i+".json"
            }
        },
        {
            key: "getEnvironment",
            value: function() {
                return this.isAppNormalMode() ? window.viewerConfig.env: "production"
            }
        },
        {
            key: "getSPEventUrl",
            value: function() {
                var e = void 0;
                return e = "production" === this.getEnvironment() ? "http://api.maka.im/": "/",
                e + "api/viewerSpevent/" + this.getProjectId()
            }
        },
        {
            key: "getWxKeyURL",
            value: function() {
                var e = "http://wxsign.maka.im/wechatsign";
                return e
            }
        },
        {
            key: "isHttpHead",
            value: function(e) {
                return e = "" + e,
                0 === e.trim().toLowerCase().indexOf("http://") || 0 === e.trim().toLowerCase().indexOf("https://")
            }
        },
        {
            key: "isAppNormalMode",
            value: function() {
                return "function" != typeof window.callPhantom
            }
        },
        {
            key: "isStoreTemplatePreview",
            value: function() {
                return "storeTemplate" === s["default"].getUrlParameter("mode") || "storeTemplete" === s["default"].getUrlParameter("mode")
            }
        },
        {
            key: "isVersionedTemplatePreview",
            value: function() {
                return "requestVersionedTemplate" === s["default"].getUrlParameter("mode")
            }
        },
        {
            key: "isMusicOff",
            value: function() {
                return "true" === s["default"].getUrlParameter("musicOff")
            }
        },
        {
            key: "isWxDebug",
            value: function() {
                return "true" === s["default"].getUrlParameter("wxdebug")
            }
        },
        {
            key: "isRemoveDesignerAd",
            value: function() {
                return "true" === s["default"].getUrlParameter("TempAdmode") ? !1 : "storeTemplate" === s["default"].getUrlParameter("mode")
            }
        },
        {
            key: "isTemplate",
            value: function() {
                return - 1 !== this.getProjectId().indexOf("T_")
            }
        },
        {
            key: "getProjectId",
            value: function() {
                return self.projectId
            }
        },
        {
            key: "setProjectId",
            value: function(e) {
                self.projectId = e
            }
        },
        {
            key: "getExamShareUrl",
            value: function() {
                return this.apiHost + "/api/share"
            }
        },
        {
            key: "getExamAnswerUrl",
            value: function() {
                return this.apiHost + "/api/answer"
            }
        },
        {
            key: "getLoginUrl",
            value: function(e) {
                var t = this.getProjectId(),
                i = c["default"].getUid(),
                n = "http://wxcallback.maka.im/wx/callback/" + i + "/" + t + "/" + encodeURIComponent(location.host),
                o = this.apiHost + "/wechat/authorize?callback=" + encodeURIComponent(n);
                return e && (o = o + "&pid=" + t),
                o
            }
        },
        {
            key: "checkVoteUrl",
            value: function() {
                return this.apiHost + "/api/vote/check"
            }
        },
        {
            key: "checkRelayUrl",
            value: function() {
                return this.apiHost + "/api/relay/check"
            }
        },
        {
            key: "voteUrl",
            value: function() {
                return this.apiHost + "/api/vote"
            }
        },
        {
            key: "relayUrl",
            value: function() {
                return this.apiHost + "/api/relay"
            }
        },
        {
            key: "getLotteryUrl",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? "": arguments[0];
                return this.apiHost + "/api/lottery/" + e
            }
        },
        {
            key: "getADtransRecordUrl",
            value: function() {
                return this.ADtransHost + "/api/user_view_record/add"
            }
        },
        {
            key: "getADtransLoginUrl",
            value: function(e) {
                return this.ADtransHost + "/api/wechat/auth_page_base?success_url=" + encodeURIComponent(e)
            }
        }]),
        e
    } (),
    d = new u;
    window.Config = d,
    t["default"] = d,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n() {}
    function o(e) {
        try {
            return e.then
        } catch(t) {
            return v = t,
            w
        }
    }
    function a(e, t) {
        try {
            return e(t)
        } catch(i) {
            return v = i,
            w
        }
    }
    function r(e, t, i) {
        try {
            e(t, i)
        } catch(n) {
            return v = n,
            w
        }
    }
    function s(e) {
        if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" != typeof e) throw new TypeError("not a function");
        this._45 = 0,
        this._81 = 0,
        this._65 = null,
        this._54 = null,
        e !== n && g(e, this)
    }
    function l(e, t, i) {
        return new e.constructor(function(o, a) {
            var r = new s(n);
            r.then(o, a),
            c(e, new h(t, i, r))
        })
    }
    function c(e, t) {
        for (; 3 === e._81;) e = e._65;
        return s._10 && s._10(e),
        0 === e._81 ? 0 === e._45 ? (e._45 = 1, void(e._54 = t)) : 1 === e._45 ? (e._45 = 2, void(e._54 = [e._54, t])) : void e._54.push(t) : void u(e, t)
    }
    function u(e, t) {
        m(function() {
            var i = 1 === e._81 ? t.onFulfilled: t.onRejected;
            if (null === i) return void(1 === e._81 ? d(t.promise, e._65) : f(t.promise, e._65));
            var n = a(i, e._65);
            n === w ? f(t.promise, v) : d(t.promise, n)
        })
    }
    function d(e, t) {
        if (t === e) return f(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" == typeof t || "function" == typeof t)) {
            var i = o(t);
            if (i === w) return f(e, v);
            if (i === e.then && t instanceof s) return e._81 = 3,
            e._65 = t,
            void p(e);
            if ("function" == typeof i) return void g(i.bind(t), e)
        }
        e._81 = 1,
        e._65 = t,
        p(e)
    }
    function f(e, t) {
        e._81 = 2,
        e._65 = t,
        s._97 && s._97(e, t),
        p(e)
    }
    function p(e) {
        if (1 === e._45 && (c(e, e._54), e._54 = null), 2 === e._45) {
            for (var t = 0; t < e._54.length; t++) c(e, e._54[t]);
            e._54 = null
        }
    }
    function h(e, t, i) {
        this.onFulfilled = "function" == typeof e ? e: null,
        this.onRejected = "function" == typeof t ? t: null,
        this.promise = i
    }
    function g(e, t) {
        var i = !1,
        n = r(e,
        function(e) {
            i || (i = !0, d(t, e))
        },
        function(e) {
            i || (i = !0, f(t, e))
        });
        i || n !== w || (i = !0, f(t, v))
    }
    var m = i(15),
    v = null,
    w = {};
    e.exports = s,
    s._10 = null,
    s._97 = null,
    s._61 = n,
    s.prototype.then = function(e, t) {
        if (this.constructor !== s) return l(this, e, t);
        var i = new s(n);
        return c(this, new h(e, t, i)),
        i
    }
},
function(e, t, i) {
    "use strict";
    e.exports = i(59)
},
function(e, t, i) {
    var n;
    /*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
    !
    function(o, a, r, s) {
        "use strict";
        function l(e, t, i) {
            return setTimeout(p(e, i), t)
        }
        function c(e, t, i) {
            return Array.isArray(e) ? (u(e, i[t], i), !0) : !1
        }
        function u(e, t, i) {
            var n;
            if (e) if (e.forEach) e.forEach(t, i);
            else if (e.length !== s) for (n = 0; n < e.length;) t.call(i, e[n], n, e),
            n++;
            else for (n in e) e.hasOwnProperty(n) && t.call(i, e[n], n, e)
        }
        function d(e, t, i) {
            var n = "DEPRECATED METHOD: " + t + "\n" + i + " AT \n";
            return function() {
                var t = new Error("get-stack-trace"),
                i = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                a = o.console && (o.console.warn || o.console.log);
                return a && a.call(o.console, n, i),
                e.apply(this, arguments)
            }
        }
        function f(e, t, i) {
            var n, o = t.prototype;
            n = e.prototype = Object.create(o),
            n.constructor = e,
            n._super = o,
            i && ge(n, i)
        }
        function p(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function h(e, t) {
            return typeof e == we ? e.apply(t ? t[0] || s: s, t) : e
        }
        function g(e, t) {
            return e === s ? t: e
        }
        function m(e, t, i) {
            u(y(t),
            function(t) {
                e.addEventListener(t, i, !1)
            })
        }
        function v(e, t, i) {
            u(y(t),
            function(t) {
                e.removeEventListener(t, i, !1)
            })
        }
        function w(e, t) {
            for (; e;) {
                if (e == t) return ! 0;
                e = e.parentNode
            }
            return ! 1
        }
        function b(e, t) {
            return e.indexOf(t) > -1
        }
        function y(e) {
            return e.trim().split(/\s+/g)
        }
        function k(e, t, i) {
            if (e.indexOf && !i) return e.indexOf(t);
            for (var n = 0; n < e.length;) {
                if (i && e[n][i] == t || !i && e[n] === t) return n;
                n++
            }
            return - 1
        }
        function A(e) {
            return Array.prototype.slice.call(e, 0)
        }
        function x(e, t, i) {
            for (var n = [], o = [], a = 0; a < e.length;) {
                var r = t ? e[a][t] : e[a];
                k(o, r) < 0 && n.push(e[a]),
                o[a] = r,
                a++
            }
            return i && (n = t ? n.sort(function(e, i) {
                return e[t] > i[t]
            }) : n.sort()),
            n
        }
        function C(e, t) {
            for (var i, n, o = t[0].toUpperCase() + t.slice(1), a = 0; a < me.length;) {
                if (i = me[a], n = i ? i + o: t, n in e) return n;
                a++
            }
            return s
        }
        function P() {
            return Ce++
        }
        function I(e) {
            var t = e.ownerDocument || e;
            return t.defaultView || t.parentWindow || o
        }
        function S(e, t) {
            var i = this;
            this.manager = e,
            this.callback = t,
            this.element = e.element,
            this.target = e.options.inputTarget,
            this.domHandler = function(t) {
                h(e.options.enable, [e]) && i.handler(t)
            },
            this.init()
        }
        function j(e) {
            var t, i = e.options.inputClass;
            return new(t = i ? i: Se ? V: je ? Q: Ie ? Y: L)(e, E)
        }
        function E(e, t, i) {
            var n = i.pointers.length,
            o = i.changedPointers.length,
            a = t & Ue && n - o === 0,
            r = t & (ze | Be) && n - o === 0;
            i.isFirst = !!a,
            i.isFinal = !!r,
            a && (e.session = {}),
            i.eventType = t,
            D(e, i),
            e.emit("hammer.input", i),
            e.recognize(i),
            e.session.prevInput = i
        }
        function D(e, t) {
            var i = e.session,
            n = t.pointers,
            o = n.length;
            i.firstInput || (i.firstInput = R(t)),
            o > 1 && !i.firstMultiple ? i.firstMultiple = R(t) : 1 === o && (i.firstMultiple = !1);
            var a = i.firstInput,
            r = i.firstMultiple,
            s = r ? r.center: a.center,
            l = t.center = U(n);
            t.timeStamp = ke(),
            t.deltaTime = t.timeStamp - a.timeStamp,
            t.angle = N(s, l),
            t.distance = B(s, l),
            T(i, t),
            t.offsetDirection = z(t.deltaX, t.deltaY);
            var c = M(t.deltaTime, t.deltaX, t.deltaY);
            t.overallVelocityX = c.x,
            t.overallVelocityY = c.y,
            t.overallVelocity = ye(c.x) > ye(c.y) ? c.x: c.y,
            t.scale = r ? H(r.pointers, n) : 1,
            t.rotation = r ? F(r.pointers, n) : 0,
            t.maxPointers = i.prevInput ? t.pointers.length > i.prevInput.maxPointers ? t.pointers.length: i.prevInput.maxPointers: t.pointers.length,
            O(i, t);
            var u = e.element;
            w(t.srcEvent.target, u) && (u = t.srcEvent.target),
            t.target = u
        }
        function T(e, t) {
            var i = t.center,
            n = e.offsetDelta || {},
            o = e.prevDelta || {},
            a = e.prevInput || {};
            t.eventType !== Ue && a.eventType !== ze || (o = e.prevDelta = {
                x: a.deltaX || 0,
                y: a.deltaY || 0
            },
            n = e.offsetDelta = {
                x: i.x,
                y: i.y
            }),
            t.deltaX = o.x + (i.x - n.x),
            t.deltaY = o.y + (i.y - n.y)
        }
        function O(e, t) {
            var i, n, o, a, r = e.lastInterval || t,
            l = t.timeStamp - r.timeStamp;
            if (t.eventType != Be && (l > Re || r.velocity === s)) {
                var c = t.deltaX - r.deltaX,
                u = t.deltaY - r.deltaY,
                d = M(l, c, u);
                n = d.x,
                o = d.y,
                i = ye(d.x) > ye(d.y) ? d.x: d.y,
                a = z(c, u),
                e.lastInterval = t
            } else i = r.velocity,
            n = r.velocityX,
            o = r.velocityY,
            a = r.direction;
            t.velocity = i,
            t.velocityX = n,
            t.velocityY = o,
            t.direction = a
        }
        function R(e) {
            for (var t = [], i = 0; i < e.pointers.length;) t[i] = {
                clientX: be(e.pointers[i].clientX),
                clientY: be(e.pointers[i].clientY)
            },
            i++;
            return {
                timeStamp: ke(),
                pointers: t,
                center: U(t),
                deltaX: e.deltaX,
                deltaY: e.deltaY
            }
        }
        function U(e) {
            var t = e.length;
            if (1 === t) return {
                x: be(e[0].clientX),
                y: be(e[0].clientY)
            };
            for (var i = 0,
            n = 0,
            o = 0; t > o;) i += e[o].clientX,
            n += e[o].clientY,
            o++;
            return {
                x: be(i / t),
                y: be(n / t)
            }
        }
        function M(e, t, i) {
            return {
                x: t / e || 0,
                y: i / e || 0
            }
        }
        function z(e, t) {
            return e === t ? Ne: ye(e) >= ye(t) ? 0 > e ? Fe: He: 0 > t ? Le: Ve
        }
        function B(e, t, i) {
            i || (i = We);
            var n = t[i[0]] - e[i[0]],
            o = t[i[1]] - e[i[1]];
            return Math.sqrt(n * n + o * o)
        }
        function N(e, t, i) {
            i || (i = We);
            var n = t[i[0]] - e[i[0]],
            o = t[i[1]] - e[i[1]];
            return 180 * Math.atan2(o, n) / Math.PI
        }
        function F(e, t) {
            return N(t[1], t[0], Ye) + N(e[1], e[0], Ye)
        }
        function H(e, t) {
            return B(t[0], t[1], Ye) / B(e[0], e[1], Ye)
        }
        function L() {
            this.evEl = Ke,
            this.evWin = Ze,
            this.pressed = !1,
            S.apply(this, arguments)
        }
        function V() {
            this.evEl = $e,
            this.evWin = et,
            S.apply(this, arguments),
            this.store = this.manager.session.pointerEvents = []
        }
        function q() {
            this.evTarget = it,
            this.evWin = nt,
            this.started = !1,
            S.apply(this, arguments)
        }
        function J(e, t) {
            var i = A(e.touches),
            n = A(e.changedTouches);
            return t & (ze | Be) && (i = x(i.concat(n), "identifier", !0)),
            [i, n]
        }
        function Q() {
            this.evTarget = at,
            this.targetIds = {},
            S.apply(this, arguments)
        }
        function W(e, t) {
            var i = A(e.touches),
            n = this.targetIds;
            if (t & (Ue | Me) && 1 === i.length) return n[i[0].identifier] = !0,
            [i, i];
            var o, a, r = A(e.changedTouches),
            s = [],
            l = this.target;
            if (a = i.filter(function(e) {
                return w(e.target, l)
            }), t === Ue) for (o = 0; o < a.length;) n[a[o].identifier] = !0,
            o++;
            for (o = 0; o < r.length;) n[r[o].identifier] && s.push(r[o]),
            t & (ze | Be) && delete n[r[o].identifier],
            o++;
            return s.length ? [x(a.concat(s), "identifier", !0), s] : void 0
        }
        function Y() {
            S.apply(this, arguments);
            var e = p(this.handler, this);
            this.touch = new Q(this.manager, e),
            this.mouse = new L(this.manager, e),
            this.primaryTouch = null,
            this.lastTouches = []
        }
        function G(e, t) {
            e & Ue ? (this.primaryTouch = t.changedPointers[0].identifier, K.call(this, t)) : e & (ze | Be) && K.call(this, t)
        }
        function K(e) {
            var t = e.changedPointers[0];
            if (t.identifier === this.primaryTouch) {
                var i = {
                    x: t.clientX,
                    y: t.clientY
                };
                this.lastTouches.push(i);
                var n = this.lastTouches,
                o = function() {
                    var e = n.indexOf(i);
                    e > -1 && n.splice(e, 1)
                };
                setTimeout(o, rt)
            }
        }
        function Z(e) {
            for (var t = e.srcEvent.clientX,
            i = e.srcEvent.clientY,
            n = 0; n < this.lastTouches.length; n++) {
                var o = this.lastTouches[n],
                a = Math.abs(t - o.x),
                r = Math.abs(i - o.y);
                if (st >= a && st >= r) return ! 0
            }
            return ! 1
        }
        function X(e, t) {
            this.manager = e,
            this.set(t)
        }
        function _(e) {
            if (b(e, pt)) return pt;
            var t = b(e, ht),
            i = b(e, gt);
            return t && i ? pt: t || i ? t ? ht: gt: b(e, ft) ? ft: dt
        }
        function $() {
            if (!ct) return ! 1;
            var e = {},
            t = o.CSS && o.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(function(i) {
                e[i] = t ? o.CSS.supports("touch-action", i) : !0
            }),
            e
        }
        function ee(e) {
            this.options = ge({},
            this.defaults, e || {}),
            this.id = P(),
            this.manager = null,
            this.options.enable = g(this.options.enable, !0),
            this.state = vt,
            this.simultaneous = {},
            this.requireFail = []
        }
        function te(e) {
            return e & At ? "cancel": e & yt ? "end": e & bt ? "move": e & wt ? "start": ""
        }
        function ie(e) {
            return e == Ve ? "down": e == Le ? "up": e == Fe ? "left": e == He ? "right": ""
        }
        function ne(e, t) {
            var i = t.manager;
            return i ? i.get(e) : e
        }
        function oe() {
            ee.apply(this, arguments)
        }
        function ae() {
            oe.apply(this, arguments),
            this.pX = null,
            this.pY = null
        }
        function re() {
            oe.apply(this, arguments)
        }
        function se() {
            ee.apply(this, arguments),
            this._timer = null,
            this._input = null
        }
        function le() {
            oe.apply(this, arguments)
        }
        function ce() {
            oe.apply(this, arguments)
        }
        function ue() {
            ee.apply(this, arguments),
            this.pTime = !1,
            this.pCenter = !1,
            this._timer = null,
            this._input = null,
            this.count = 0
        }
        function de(e, t) {
            return t = t || {},
            t.recognizers = g(t.recognizers, de.defaults.preset),
            new fe(e, t)
        }
        function fe(e, t) {
            this.options = ge({},
            de.defaults, t || {}),
            this.options.inputTarget = this.options.inputTarget || e,
            this.handlers = {},
            this.session = {},
            this.recognizers = [],
            this.oldCssProps = {},
            this.element = e,
            this.input = j(this),
            this.touchAction = new X(this, this.options.touchAction),
            pe(this, !0),
            u(this.options.recognizers,
            function(e) {
                var t = this.add(new e[0](e[1]));
                e[2] && t.recognizeWith(e[2]),
                e[3] && t.requireFailure(e[3])
            },
            this)
        }
        function pe(e, t) {
            var i = e.element;
            if (i.style) {
                var n;
                u(e.options.cssProps,
                function(o, a) {
                    n = C(i.style, a),
                    t ? (e.oldCssProps[n] = i.style[n], i.style[n] = o) : i.style[n] = e.oldCssProps[n] || ""
                }),
                t || (e.oldCssProps = {})
            }
        }
        function he(e, t) {
            var i = a.createEvent("Event");
            i.initEvent(e, !0, !0),
            i.gesture = t,
            t.target.dispatchEvent(i)
        }
        var ge, me = ["", "webkit", "Moz", "MS", "ms", "o"],
        ve = a.createElement("div"),
        we = "function",
        be = Math.round,
        ye = Math.abs,
        ke = Date.now;
        ge = "function" != typeof Object.assign ?
        function(e) {
            if (e === s || null === e) throw new TypeError("Cannot convert undefined or null to object");
            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                var n = arguments[i];
                if (n !== s && null !== n) for (var o in n) n.hasOwnProperty(o) && (t[o] = n[o])
            }
            return t
        }: Object.assign;
        var Ae = d(function(e, t, i) {
            for (var n = Object.keys(t), o = 0; o < n.length;)(!i || i && e[n[o]] === s) && (e[n[o]] = t[n[o]]),
            o++;
            return e
        },
        "extend", "Use `assign`."),
        xe = d(function(e, t) {
            return Ae(e, t, !0)
        },
        "merge", "Use `assign`."),
        Ce = 1,
        Pe = /mobile|tablet|ip(ad|hone|od)|android/i,
        Ie = "ontouchstart" in o,
        Se = C(o, "PointerEvent") !== s,
        je = Ie && Pe.test(navigator.userAgent),
        Ee = "touch",
        De = "pen",
        Te = "mouse",
        Oe = "kinect",
        Re = 25,
        Ue = 1,
        Me = 2,
        ze = 4,
        Be = 8,
        Ne = 1,
        Fe = 2,
        He = 4,
        Le = 8,
        Ve = 16,
        qe = Fe | He,
        Je = Le | Ve,
        Qe = qe | Je,
        We = ["x", "y"],
        Ye = ["clientX", "clientY"];
        S.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && m(this.element, this.evEl, this.domHandler),
                this.evTarget && m(this.target, this.evTarget, this.domHandler),
                this.evWin && m(I(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && v(this.element, this.evEl, this.domHandler),
                this.evTarget && v(this.target, this.evTarget, this.domHandler),
                this.evWin && v(I(this.element), this.evWin, this.domHandler)
            }
        };
        var Ge = {
            mousedown: Ue,
            mousemove: Me,
            mouseup: ze
        },
        Ke = "mousedown",
        Ze = "mousemove mouseup";
        f(L, S, {
            handler: function(e) {
                var t = Ge[e.type];
                t & Ue && 0 === e.button && (this.pressed = !0),
                t & Me && 1 !== e.which && (t = ze),
                this.pressed && (t & ze && (this.pressed = !1), this.callback(this.manager, t, {
                    pointers: [e],
                    changedPointers: [e],
                    pointerType: Te,
                    srcEvent: e
                }))
            }
        });
        var Xe = {
            pointerdown: Ue,
            pointermove: Me,
            pointerup: ze,
            pointercancel: Be,
            pointerout: Be
        },
        _e = {
            2 : Ee,
            3 : De,
            4 : Te,
            5 : Oe
        },
        $e = "pointerdown",
        et = "pointermove pointerup pointercancel";
        o.MSPointerEvent && !o.PointerEvent && ($e = "MSPointerDown", et = "MSPointerMove MSPointerUp MSPointerCancel"),
        f(V, S, {
            handler: function(e) {
                var t = this.store,
                i = !1,
                n = e.type.toLowerCase().replace("ms", ""),
                o = Xe[n],
                a = _e[e.pointerType] || e.pointerType,
                r = a == Ee,
                s = k(t, e.pointerId, "pointerId");
                o & Ue && (0 === e.button || r) ? 0 > s && (t.push(e), s = t.length - 1) : o & (ze | Be) && (i = !0),
                0 > s || (t[s] = e, this.callback(this.manager, o, {
                    pointers: t,
                    changedPointers: [e],
                    pointerType: a,
                    srcEvent: e
                }), i && t.splice(s, 1))
            }
        });
        var tt = {
            touchstart: Ue,
            touchmove: Me,
            touchend: ze,
            touchcancel: Be
        },
        it = "touchstart",
        nt = "touchstart touchmove touchend touchcancel";
        f(q, S, {
            handler: function(e) {
                var t = tt[e.type];
                if (t === Ue && (this.started = !0), this.started) {
                    var i = J.call(this, e, t);
                    t & (ze | Be) && i[0].length - i[1].length === 0 && (this.started = !1),
                    this.callback(this.manager, t, {
                        pointers: i[0],
                        changedPointers: i[1],
                        pointerType: Ee,
                        srcEvent: e
                    })
                }
            }
        });
        var ot = {
            touchstart: Ue,
            touchmove: Me,
            touchend: ze,
            touchcancel: Be
        },
        at = "touchstart touchmove touchend touchcancel";
        f(Q, S, {
            handler: function(e) {
                var t = ot[e.type],
                i = W.call(this, e, t);
                i && this.callback(this.manager, t, {
                    pointers: i[0],
                    changedPointers: i[1],
                    pointerType: Ee,
                    srcEvent: e
                })
            }
        });
        var rt = 2500,
        st = 25;
        f(Y, S, {
            handler: function(e, t, i) {
                var n = i.pointerType == Ee,
                o = i.pointerType == Te;
                if (! (o && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                    if (n) G.call(this, t, i);
                    else if (o && Z.call(this, i)) return;
                    this.callback(e, t, i)
                }
            },
            destroy: function() {
                this.touch.destroy(),
                this.mouse.destroy()
            }
        });
        var lt = C(ve.style, "touchAction"),
        ct = lt !== s,
        ut = "compute",
        dt = "auto",
        ft = "manipulation",
        pt = "none",
        ht = "pan-x",
        gt = "pan-y",
        mt = $();
        X.prototype = {
            set: function(e) {
                e == ut && (e = this.compute()),
                ct && this.manager.element.style && mt[e] && (this.manager.element.style[lt] = e),
                this.actions = e.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var e = [];
                return u(this.manager.recognizers,
                function(t) {
                    h(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
                }),
                _(e.join(" "))
            },
            preventDefaults: function(e) {
                var t = e.srcEvent,
                i = e.offsetDirection;
                if (this.manager.session.prevented) return void t.preventDefault();
                var n = this.actions,
                o = b(n, pt) && !mt[pt],
                a = b(n, gt) && !mt[gt],
                r = b(n, ht) && !mt[ht];
                if (o) {
                    var s = 1 === e.pointers.length,
                    l = e.distance < 2,
                    c = e.deltaTime < 250;
                    if (s && l && c) return
                }
                return r && a ? void 0 : o || a && i & qe || r && i & Je ? this.preventSrc(t) : void 0
            },
            preventSrc: function(e) {
                this.manager.session.prevented = !0,
                e.preventDefault()
            }
        };
        var vt = 1,
        wt = 2,
        bt = 4,
        yt = 8,
        kt = yt,
        At = 16,
        xt = 32;
        ee.prototype = {
            defaults: {},
            set: function(e) {
                return ge(this.options, e),
                this.manager && this.manager.touchAction.update(),
                this
            },
            recognizeWith: function(e) {
                if (c(e, "recognizeWith", this)) return this;
                var t = this.simultaneous;
                return e = ne(e, this),
                t[e.id] || (t[e.id] = e, e.recognizeWith(this)),
                this
            },
            dropRecognizeWith: function(e) {
                return c(e, "dropRecognizeWith", this) ? this: (e = ne(e, this), delete this.simultaneous[e.id], this)
            },
            requireFailure: function(e) {
                if (c(e, "requireFailure", this)) return this;
                var t = this.requireFail;
                return e = ne(e, this),
                -1 === k(t, e) && (t.push(e), e.requireFailure(this)),
                this
            },
            dropRequireFailure: function(e) {
                if (c(e, "dropRequireFailure", this)) return this;
                e = ne(e, this);
                var t = k(this.requireFail, e);
                return t > -1 && this.requireFail.splice(t, 1),
                this
            },
            hasRequireFailures: function() {
                return this.requireFail.length > 0
            },
            canRecognizeWith: function(e) {
                return !! this.simultaneous[e.id]
            },
            emit: function(e) {
                function t(t) {
                    i.manager.emit(t, e)
                }
                var i = this,
                n = this.state;
                yt > n && t(i.options.event + te(n)),
                t(i.options.event),
                e.additionalEvent && t(e.additionalEvent),
                n >= yt && t(i.options.event + te(n))
            },
            tryEmit: function(e) {
                return this.canEmit() ? this.emit(e) : void(this.state = xt)
            },
            canEmit: function() {
                for (var e = 0; e < this.requireFail.length;) {
                    if (! (this.requireFail[e].state & (xt | vt))) return ! 1;
                    e++
                }
                return ! 0
            },
            recognize: function(e) {
                var t = ge({},
                e);
                return h(this.options.enable, [this, t]) ? (this.state & (kt | At | xt) && (this.state = vt), this.state = this.process(t), void(this.state & (wt | bt | yt | At) && this.tryEmit(t))) : (this.reset(), void(this.state = xt))
            },
            process: function(e) {},
            getTouchAction: function() {},
            reset: function() {}
        },
        f(oe, ee, {
            defaults: {
                pointers: 1
            },
            attrTest: function(e) {
                var t = this.options.pointers;
                return 0 === t || e.pointers.length === t
            },
            process: function(e) {
                var t = this.state,
                i = e.eventType,
                n = t & (wt | bt),
                o = this.attrTest(e);
                return n && (i & Be || !o) ? t | At: n || o ? i & ze ? t | yt: t & wt ? t | bt: wt: xt
            }
        }),
        f(ae, oe, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: Qe
            },
            getTouchAction: function() {
                var e = this.options.direction,
                t = [];
                return e & qe && t.push(gt),
                e & Je && t.push(ht),
                t
            },
            directionTest: function(e) {
                var t = this.options,
                i = !0,
                n = e.distance,
                o = e.direction,
                a = e.deltaX,
                r = e.deltaY;
                return o & t.direction || (t.direction & qe ? (o = 0 === a ? Ne: 0 > a ? Fe: He, i = a != this.pX, n = Math.abs(e.deltaX)) : (o = 0 === r ? Ne: 0 > r ? Le: Ve, i = r != this.pY, n = Math.abs(e.deltaY))),
                e.direction = o,
                i && n > t.threshold && o & t.direction
            },
            attrTest: function(e) {
                return oe.prototype.attrTest.call(this, e) && (this.state & wt || !(this.state & wt) && this.directionTest(e))
            },
            emit: function(e) {
                this.pX = e.deltaX,
                this.pY = e.deltaY;
                var t = ie(e.direction);
                t && (e.additionalEvent = this.options.event + t),
                this._super.emit.call(this, e)
            }
        }),
        f(re, oe, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [pt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & wt)
            },
            emit: function(e) {
                if (1 !== e.scale) {
                    var t = e.scale < 1 ? "in": "out";
                    e.additionalEvent = this.options.event + t
                }
                this._super.emit.call(this, e)
            }
        }),
        f(se, ee, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 251,
                threshold: 9
            },
            getTouchAction: function() {
                return [dt]
            },
            process: function(e) {
                var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                o = e.deltaTime > t.time;
                if (this._input = e, !n || !i || e.eventType & (ze | Be) && !o) this.reset();
                else if (e.eventType & Ue) this.reset(),
                this._timer = l(function() {
                    this.state = kt,
                    this.tryEmit()
                },
                t.time, this);
                else if (e.eventType & ze) return kt;
                return xt
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(e) {
                this.state === kt && (e && e.eventType & ze ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = ke(), this.manager.emit(this.options.event, this._input)))
            }
        }),
        f(le, oe, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return [pt]
            },
            attrTest: function(e) {
                return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & wt)
            }
        }),
        f(ce, oe, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .3,
                direction: qe | Je,
                pointers: 1
            },
            getTouchAction: function() {
                return ae.prototype.getTouchAction.call(this)
            },
            attrTest: function(e) {
                var t, i = this.options.direction;
                return i & (qe | Je) ? t = e.overallVelocity: i & qe ? t = e.overallVelocityX: i & Je && (t = e.overallVelocityY),
                this._super.attrTest.call(this, e) && i & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && ye(t) > this.options.velocity && e.eventType & ze
            },
            emit: function(e) {
                var t = ie(e.offsetDirection);
                t && this.manager.emit(this.options.event + t, e),
                this.manager.emit(this.options.event, e)
            }
        }),
        f(ue, ee, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 9,
                posThreshold: 10
            },
            getTouchAction: function() {
                return [ft]
            },
            process: function(e) {
                var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                o = e.deltaTime < t.time;
                if (this.reset(), e.eventType & Ue && 0 === this.count) return this.failTimeout();
                if (n && o && i) {
                    if (e.eventType != ze) return this.failTimeout();
                    var a = this.pTime ? e.timeStamp - this.pTime < t.interval: !0,
                    r = !this.pCenter || B(this.pCenter, e.center) < t.posThreshold;
                    this.pTime = e.timeStamp,
                    this.pCenter = e.center,
                    r && a ? this.count += 1 : this.count = 1,
                    this._input = e;
                    var s = this.count % t.taps;
                    if (0 === s) return this.hasRequireFailures() ? (this._timer = l(function() {
                        this.state = kt,
                        this.tryEmit()
                    },
                    t.interval, this), wt) : kt
                }
                return xt
            },
            failTimeout: function() {
                return this._timer = l(function() {
                    this.state = xt
                },
                this.options.interval, this),
                xt
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                this.state == kt && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        }),
        de.VERSION = "2.0.7",
        de.defaults = {
            domEvents: !1,
            touchAction: ut,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [[le, {
                enable: !1
            }], [re, {
                enable: !1
            },
            ["rotate"]], [ce, {
                direction: qe
            }], [ae, {
                direction: qe
            },
            ["swipe"]], [ue], [ue, {
                event: "doubletap",
                taps: 2
            },
            ["tap"]], [se]],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        var Ct = 1,
        Pt = 2;
        fe.prototype = {
            set: function(e) {
                return ge(this.options, e),
                e.touchAction && this.touchAction.update(),
                e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()),
                this
            },
            stop: function(e) {
                this.session.stopped = e ? Pt: Ct
            },
            recognize: function(e) {
                var t = this.session;
                if (!t.stopped) {
                    this.touchAction.preventDefaults(e);
                    var i, n = this.recognizers,
                    o = t.curRecognizer; (!o || o && o.state & kt) && (o = t.curRecognizer = null);
                    for (var a = 0; a < n.length;) i = n[a],
                    t.stopped === Pt || o && i != o && !i.canRecognizeWith(o) ? i.reset() : i.recognize(e),
                    !o && i.state & (wt | bt | yt) && (o = t.curRecognizer = i),
                    a++
                }
            },
            get: function(e) {
                if (e instanceof ee) return e;
                for (var t = this.recognizers,
                i = 0; i < t.length; i++) if (t[i].options.event == e) return t[i];
                return null
            },
            add: function(e) {
                if (c(e, "add", this)) return this;
                var t = this.get(e.options.event);
                return t && this.remove(t),
                this.recognizers.push(e),
                e.manager = this,
                this.touchAction.update(),
                e
            },
            remove: function(e) {
                if (c(e, "remove", this)) return this;
                if (e = this.get(e)) {
                    var t = this.recognizers,
                    i = k(t, e); - 1 !== i && (t.splice(i, 1), this.touchAction.update())
                }
                return this
            },
            on: function(e, t) {
                if (e !== s && t !== s) {
                    var i = this.handlers;
                    return u(y(e),
                    function(e) {
                        i[e] = i[e] || [],
                        i[e].push(t)
                    }),
                    this
                }
            },
            off: function(e, t) {
                if (e !== s) {
                    var i = this.handlers;
                    return u(y(e),
                    function(e) {
                        t ? i[e] && i[e].splice(k(i[e], t), 1) : delete i[e]
                    }),
                    this
                }
            },
            emit: function(e, t) {
                this.options.domEvents && he(e, t);
                var i = this.handlers[e] && this.handlers[e].slice();
                if (i && i.length) {
                    t.type = e,
                    t.preventDefault = function() {
                        t.srcEvent.preventDefault()
                    };
                    for (var n = 0; n < i.length;) i[n](t),
                    n++
                }
            },
            destroy: function() {
                this.element && pe(this, !1),
                this.handlers = {},
                this.session = {},
                this.input.destroy(),
                this.element = null
            }
        },
        ge(de, {
            INPUT_START: Ue,
            INPUT_MOVE: Me,
            INPUT_END: ze,
            INPUT_CANCEL: Be,
            STATE_POSSIBLE: vt,
            STATE_BEGAN: wt,
            STATE_CHANGED: bt,
            STATE_ENDED: yt,
            STATE_RECOGNIZED: kt,
            STATE_CANCELLED: At,
            STATE_FAILED: xt,
            DIRECTION_NONE: Ne,
            DIRECTION_LEFT: Fe,
            DIRECTION_RIGHT: He,
            DIRECTION_UP: Le,
            DIRECTION_DOWN: Ve,
            DIRECTION_HORIZONTAL: qe,
            DIRECTION_VERTICAL: Je,
            DIRECTION_ALL: Qe,
            Manager: fe,
            Input: S,
            TouchAction: X,
            TouchInput: Q,
            MouseInput: L,
            PointerEventInput: V,
            TouchMouseInput: Y,
            SingleTouchInput: q,
            Recognizer: ee,
            AttrRecognizer: oe,
            Tap: ue,
            Pan: ae,
            Swipe: ce,
            Pinch: re,
            Rotate: le,
            Press: se,
            on: m,
            off: v,
            each: u,
            merge: xe,
            extend: Ae,
            assign: ge,
            inherit: f,
            bindFn: p,
            prefixed: C
        });
        var It = "undefined" != typeof o ? o: "undefined" != typeof self ? self: {};
        It.Hammer = de,
        n = function() {
            return de
        }.call(t, i, t, e),
        !(n !== s && (e.exports = n))
    } (window, document, "Hammer")
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        p["default"].log(t),
        "undefined" != typeof e && e.config({
            debug: window.Config.isWxDebug(),
            appId: t.wechat.appId,
            timestamp: t.wechat.timestamp,
            nonceStr: t.wechat.nonceStr,
            signature: t.wechat.signature,
            jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo"]
        })
    }
    function a(e, t, i) {
        console.log("jdkready"),
        "undefined" != typeof e && e.ready(function() {
            e.onMenuShareAppMessage({
                title: t.title,
                desc: t.content,
                link: t.link,
                imgUrl: t.thumb,
                type: "",
                configUrl: "",
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("appMessage"),
                    window.statisticSDK.countShare("appMessage"),
                    b["default"].ADTansGuide()
                },
                cancel: function() {}
            }),
            e.onMenuShareTimeline({
                title: i ? t.content: t.title,
                link: t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("timeline"),
                    window.statisticSDK.countShare("timeline"),
                    b["default"].ADTansGuide()
                },
                cancel: function() {}
            }),
            e.onMenuShareQQ({
                title: t.title,
                desc: t.content,
                link: t.link.indexOf("http://") >= 0 ? t.link: "http://" + t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("QQ"),
                    window.statisticSDK.countShare("other")
                },
                cancel: function() {}
            }),
            e.onMenuShareWeibo({
                title: t.title,
                desc: t.content,
                link: t.link,
                imgUrl: t.thumb,
                success: function() {
                    "undefined" != typeof DS && DS.sendRepost("Weibo"),
                    window.statisticSDK.countShare("other")
                },
                cancel: function() {}
            })
        })
    }
    function r(e, t) {
        d["default"].getJSON(window.Config.getWxKeyURL(),
        function(i) {
            200 === i.code && (e.wechat = i.data.wechat, t(e))
        })
    }
    function s(e) {
        window.Config.isTurnOffOssCrop() || e.thumb.indexOf("img1.maka.im") > 0 && (e.thumb.indexOf("@") > 0 ? e.thumb = e.thumb + "_100w": e.thumb = e.thumb + "@100w")
    }
    function l(e) {
        s(e),
        r(e,
        function(e) {
            var t = window.wx,
            i = void 0,
            n = g["default"].isADtrans();
            e.link = i = window.location.host + "/k/" + e.id,
            n && (e.link = e.link + "?task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")),
            o(t, e),
            a(t, e),
            "undefined" != typeof DS && DS.ready(function() {
                if (e.link = DS.linkChange(i), n && (e.link = e.link + "&task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), window.projectVersion.urlParam) for (var t = 0; t < window.projectVersion.urlParam.length; t++) - 1 === e.link.indexOf(window.projectVersion.urlParam[t]) && (e.link += "&" + window.projectVersion.urlParam[t]);
                window.projectVersion.titleMust && (e.title = window.projectVersion.titleMust),
                o(window.wx, e),
                a(window.wx, e)
            })
        })
    }
    function c(e, t) {
        var i = (0, v["default"])({},
        window.projectVersion, e),
        n = i.link,
        o = g["default"].isADtrans();
        if (o) {
            var r = -1 === i.link.indexOf("?") ? "?": "&";
            i.link = "" + i.link + r + "task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")
        }
        a(window.wx, i, !t),
        "undefined" != typeof DS && DS.ready(function() {
            if (i.link = DS.linkChange(n), o && (i.link = i.link + "&task_id=" + p["default"].getUrlParameter("task_id") + "&member_id=" + p["default"].getUrlParameter("member_id")), window.projectVersion.urlParam) for (var e = 0; e < window.projectVersion.urlParam.length; e++) - 1 === i.link.indexOf(window.projectVersion.urlParam[e]) && (i.link += "&" + window.projectVersion.urlParam[e]);
            window.projectVersion.titleMust && (i.title = window.projectVersion.titleMust),
            a(window.wx, i, !t)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var u = i(2),
    d = n(u),
    f = i(1),
    p = n(f),
    h = i(3),
    g = n(h),
    m = i(12),
    v = n(m),
    w = i(50),
    b = n(w);
    t["default"] = {
        init: l,
        wxReconfig: c
    },
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(1),
    s = n(r),
    l = i(4),
    c = n(l),
    u = function() {
        function e() {
            o(this, e),
            this.waitingReq = [],
            c["default"].isAppNormalMode() && window.statisticSDK && window.statisticSDK.setData({
                uid: window.projectVersion.uid,
                pid: window.projectVersion.id
            })
        }
        return a(e, [{
            key: "send",
            value: function(e, t) {
                if (c["default"].isAppNormalMode()) {
                    var i = void 0,
                    n = (new Date).getTime();
                    switch (e) {
                    case "homeStart":
                        i = "home_page_load_start:" + n;
                        break;
                    case "homeEnd":
                        i = "home_page_load_end:" + n;
                        break;
                    case "pageLoadStart":
                        i = "page_" + t + "_load_start:" + n;
                        break;
                    case "pageLoadEnd":
                        i = "page_" + t + "_load_end:" + n;
                        break;
                    case "pageVisit":
                        i = "page_" + t + "_visit:" + n;
                        break;
                    case "pageLeave":
                        i = "page_" + t + "_unload:" + n;
                        break;
                    case "closeMusic":
                        i = "close_music:" + n;
                        break;
                    case "makaAD":
                        i = "maka_ad_" + t + ":" + n
                    }
                    window.dataStoryLoad ? this.sendToDataStory(i) : this.waitingReq.push(i)
                }
            }
        },
        {
            key: "pushAll",
            value: function() {
                var e = this;
                "undefined" != typeof DS && DS.ready(function() {
                    for (var t in e.waitingReq) e.sendToDataStory(e.waitingReq[t])
                })
            }
        },
        {
            key: "sendToDataStory",
            value: function(e) {
                try {
                    "undefined" != typeof DS && DS.sendBtnName && DS.sendBtnName(e)
                } catch(t) {
                    s["default"].log("send error " + e + t)
                }
            }
        }]),
        e
    } ();
    t["default"] = new u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict"; !
    function(t, i) {
        var n = i();
        e.exports = n
    } (void 0,
    function() {
        var e = [],
        t = [],
        i = [],
        n = "transform",
        o = window.getComputedStyle(document.documentElement, ""),
        a = (Array.prototype.slice.call(o).join("").match(/-(moz|webkit|ms)-/) || "" === o.OLink && ["", "o"])[1];
        "webkit" === a && (n = "webkitTransform");
        var r = function(e, t, i) {
            var n = e;
            if (void 0 !== n.length) {
                for (var o = {
                    chainers: [],
                    then: function(e) {
                        return console.log("DeprecationWarning: then() is renamed to snabbt()"),
                        this.snabbt(e)
                    },
                    snabbt: function(e) {
                        var t = this.chainers.length;
                        return this.chainers.forEach(function(i, n) {
                            i.snabbt(s(e, n, t))
                        }),
                        o
                    },
                    setValue: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.setValue(e)
                        }),
                        o
                    },
                    finish: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.finish(e)
                        }),
                        o
                    },
                    rollback: function(e) {
                        return this.chainers.forEach(function(t) {
                            t.rollback(e)
                        }),
                        o
                    }
                },
                a = 0, r = n.length; r > a; ++a)"string" == typeof t ? o.chainers.push(l(n[a], t, s(i, a, r))) : o.chainers.push(l(n[a], s(t, a, r), i));
                return o
            }
            return "string" == typeof t ? l(n, t, s(i, 0, 1)) : l(n, s(t, 0, 1), i)
        },
        s = function(e, t, i) {
            if (!e) return e;
            var n = W(e);
            Q(e.delay) && (n.delay = e.delay(t, i)),
            Q(e.callback) && (console.log("DeprecationWarning: callback is renamed to complete"), n.complete = function() {
                e.callback.call(this, t, i)
            });
            var o = Q(e.allDone),
            a = Q(e.complete); (a || o) && (n.complete = function() {
                a && e.complete.call(this, t, i),
                o && t == i - 1 && e.allDone()
            }),
            Q(e.valueFeeder) && (n.valueFeeder = function(n, o) {
                return e.valueFeeder(n, o, t, i)
            }),
            Q(e.easing) && (n.easing = function(n) {
                return e.easing(n, t, i)
            });
            var r = ["position", "rotation", "skew", "rotationPost", "scale", "scalePost", "width", "height", "opacity", "fromPosition", "fromRotation", "fromSkew", "fromRotationPost", "fromScale", "fromScalePost", "fromWidth", "fromHeight", "fromOpacity", "transformOrigin", "duration", "delay"];
            return r.forEach(function(o) {
                Q(e[o]) && (n[o] = e[o](t, i))
            }),
            n
        },
        l = function(e, i, n) {
            function o(i) {
                return v.tick(i),
                v.updateElement(e),
                v.isStopped() ? void 0 : v.completed() ? void(a.loop > 1 && !v.isStopped() ? (a.loop -= 1, v.restart(), w(o)) : (a.complete && a.complete.call(e), b.length && (a = b.pop(), l = g(a, d, !0), d = g(a, W(d)), a = m(l, d, a), v = y(a, e), t.push([e, v]), v.tick(i), w(o)))) : w(o)
            }
            if ("attention" === i) return c(e, n);
            if ("stop" === i) return u(e);
            var a = i;
            f();
            var r = h(e),
            l = r;
            l = g(a, l, !0);
            var d = W(r);
            d = g(a, d);
            var p = m(l, d, a),
            v = y(p);
            t.push([e, v]),
            v.updateElement(e, !0);
            var b = [],
            k = {
                snabbt: function(e) {
                    return b.unshift(s(e, 0, 1)),
                    k
                },
                then: function(e) {
                    return console.log("DeprecationWarning: then() is renamed to snabbt()"),
                    this.snabbt(e)
                }
            };
            return w(o),
            a.manual ? v: k
        },
        c = function(e, i) {
            function n(t) {
                a.tick(t),
                a.updateElement(e),
                a.completed() ? (i.callback && i.callback(e), i.loop && i.loop > 1 && (i.loop--, a.restart(), w(n))) : w(n)
            }
            var o = g(i, F({}));
            i.movement = o;
            var a = k(i);
            t.push([e, a]),
            w(n)
        },
        u = function(e) {
            for (var i = 0,
            n = t.length; n > i; ++i) {
                var o = t[i],
                a = o[0],
                r = o[1];
                a === e && r.stop()
            }
        },
        d = function(e, t) {
            for (var i = 0,
            n = e.length; n > i; ++i) {
                var o = e[i],
                a = o[0],
                r = o[1];
                if (a === t) {
                    var s = r.getCurrentState();
                    return r.stop(),
                    s
                }
            }
        },
        f = function() {
            i = i.filter(function(e) {
                return p(e[0]).body
            })
        },
        p = function(e) {
            for (var t = e; t.parentNode;) t = t.parentNode;
            return t
        },
        h = function(e) {
            var n = d(t, e);
            return n ? n: d(i, e)
        },
        g = function(e, t, i) {
            t || (t = F({
                position: [0, 0, 0],
                rotation: [0, 0, 0],
                rotationPost: [0, 0, 0],
                scale: [1, 1],
                scalePost: [1, 1],
                skew: [0, 0]
            }));
            var n = "position",
            o = "rotation",
            a = "skew",
            r = "rotationPost",
            s = "scale",
            l = "scalePost",
            c = "width",
            u = "height",
            d = "opacity";
            return i && (n = "fromPosition", o = "fromRotation", a = "fromSkew", r = "fromRotationPost", s = "fromScale", l = "fromScalePost", c = "fromWidth", u = "fromHeight", d = "fromOpacity"),
            t.position = V(e[n], t.position),
            t.rotation = V(e[o], t.rotation),
            t.rotationPost = V(e[r], t.rotationPost),
            t.skew = V(e[a], t.skew),
            t.scale = V(e[s], t.scale),
            t.scalePost = V(e[l], t.scalePost),
            t.opacity = e[d],
            t.width = e[c],
            t.height = e[u],
            t
        },
        m = function(e, t, i) {
            return i.startState = e,
            i.endState = t,
            i
        },
        v = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(e) {
            return setTimeout(e, 1e3 / 60)
        },
        w = function(t) {
            0 === e.length && v(b),
            e.push(t)
        },
        b = function Y(n) {
            for (var o = e.length,
            a = 0; o > a; ++a) e[a](n);
            e.splice(0, o);
            var r = t.filter(function(e) {
                return e[1].completed()
            });
            i = i.filter(function(e) {
                for (var t = 0,
                i = r.length; i > t; ++t) if (e[0] === r[t][0]) return ! 1;
                return ! 0
            }),
            i = i.concat(r),
            t = t.filter(function(e) {
                return ! e[1].completed()
            }),
            0 !== e.length && v(Y)
        },
        y = function(e) {
            var t = e.startState,
            i = e.endState,
            n = V(e.duration, 500),
            o = V(e.delay, 0),
            a = e.perspective,
            r = j(V(e.easing, "linear"), e),
            s = 0 === n ? i.clone() : t.clone();
            e.transformOrigin;
            s.transformOrigin = e.transformOrigin;
            var l, c, u = 0,
            d = 0,
            f = !1,
            p = !1,
            h = e.manual,
            g = 0,
            m = o / n,
            v = !1;
            return c = e.valueFeeder ? L(e.valueFeeder, t, i, s) : H(t, i, s),
            {
                stop: function() {
                    f = !0
                },
                isStopped: function() {
                    return f
                },
                finish: function(e) {
                    h = !1;
                    var t = n * g;
                    u = d - t,
                    l = e,
                    r.resetFrom(g)
                },
                rollback: function(e) {
                    h = !1,
                    c.setReverse();
                    var t = n * (1 - g);
                    u = d - t,
                    l = e,
                    r.resetFrom(g)
                },
                restart: function() {
                    u = void 0,
                    r.resetFrom(0)
                },
                tick: function(t) {
                    if (f) return void(v || (e.selfFinish && e.selfFinish(), l && l(), v = !0));
                    if (h) return d = t,
                    void this.updateCurrentTransform();
                    if (u || (u = t), t - u > o) { ! p && e.startCallback && e.startCallback(),
                        p = !0,
                        d = t - o;
                        var i = Math.min(Math.max(0, d - u), n);
                        r.tick(i / n),
                        this.updateCurrentTransform(),
                        this.completed() && !v && (e.selfFinish && e.selfFinish(), l && l(), v = !0)
                    }
                },
                getCurrentState: function() {
                    return s
                },
                setValue: function(t) { ! p && e.startCallback && e.startCallback(),
                    p = !0,
                    g = Math.min(Math.max(t, 1e-4), 1 + m)
                },
                updateCurrentTransform: function() {
                    var e = r.getValue();
                    if (h) {
                        var t = Math.max(1e-5, g - m);
                        r.isSpring ? e = t: (r.tick(t, !0), e = r.getValue())
                    }
                    c.tween(e)
                },
                completed: function() {
                    return f ? !0 : 0 === u ? !1 : r.completed()
                },
                updateElement: function(e, t) {
                    if (p || t) {
                        var i = c.asMatrix(),
                        n = c.getProperties();
                        q(e, i, a),
                        J(e, n)
                    }
                }
            }
        },
        k = function(e) {
            var t = e.movement;
            e.initialVelocity = .1,
            e.equilibriumPosition = 0;
            var i = I(e),
            n = !1,
            o = t.position,
            a = t.rotation,
            r = t.rotationPost,
            s = t.scale,
            l = t.scalePost,
            c = t.skew,
            u = F({
                position: o ? [0, 0, 0] : void 0,
                rotation: a ? [0, 0, 0] : void 0,
                rotationPost: r ? [0, 0, 0] : void 0,
                scale: s ? [0, 0] : void 0,
                skew: c ? [0, 0] : void 0
            });
            return {
                stop: function() {
                    n = !0
                },
                isStopped: function(e) {
                    return n
                },
                tick: function(e) {
                    n || i.equilibrium || (i.tick(), this.updateMovement())
                },
                updateMovement: function() {
                    var e = i.getValue();
                    o && (u.position[0] = t.position[0] * e, u.position[1] = t.position[1] * e, u.position[2] = t.position[2] * e),
                    a && (u.rotation[0] = t.rotation[0] * e, u.rotation[1] = t.rotation[1] * e, u.rotation[2] = t.rotation[2] * e),
                    r && (u.rotationPost[0] = t.rotationPost[0] * e, u.rotationPost[1] = t.rotationPost[1] * e, u.rotationPost[2] = t.rotationPost[2] * e),
                    s && (u.scale[0] = 1 + t.scale[0] * e, u.scale[1] = 1 + t.scale[1] * e),
                    l && (u.scalePost[0] = 1 + t.scalePost[0] * e, u.scalePost[1] = 1 + t.scalePost[1] * e),
                    c && (u.skew[0] = t.skew[0] * e, u.skew[1] = t.skew[1] * e)
                },
                updateElement: function(e) {
                    q(e, u.asMatrix()),
                    J(e, u.getProperties())
                },
                getCurrentState: function() {
                    return u
                },
                completed: function() {
                    return i.equilibrium || n
                },
                restart: function() {
                    i = I(e)
                }
            }
        },
        A = function(e) {
            return e
        },
        x = function(e) {
            return (Math.cos(e * Math.PI + Math.PI) + 1) / 2
        },
        C = function(e) {
            return e * e
        },
        P = function(e) {
            return - Math.pow(e - 1, 2) + 1
        },
        I = function(e) {
            var t = V(e.startPosition, 0),
            i = V(e.equilibriumPosition, 1),
            n = V(e.initialVelocity, 0),
            o = V(e.springConstant, .8),
            a = V(e.springDeceleration, .9),
            r = V(e.springMass, 10),
            s = !1;
            return {
                isSpring: !0,
                tick: function(e, l) {
                    if (0 !== e && !l && !s) {
                        var c = -(t - i) * o,
                        u = c / r;
                        n += u,
                        t += n,
                        n *= a,
                        Math.abs(t - i) < .001 && Math.abs(n) < .001 && (s = !0)
                    }
                },
                resetFrom: function(e) {
                    console.log("resetting spring from " + e),
                    t = e,
                    n = 0
                },
                getValue: function() {
                    return s ? i: t
                },
                completed: function() {
                    return s
                }
            }
        },
        S = {
            linear: A,
            ease: x,
            easeIn: C,
            easeOut: P
        },
        j = function(e, t) {
            if ("spring" == e) return I(t);
            var i = e;
            Q(e) || (i = S[e]);
            var n, o = i,
            a = 0;
            return {
                tick: function(e) {
                    a = o(e),
                    n = e
                },
                resetFrom: function(e) {
                    n = 0
                },
                getValue: function() {
                    return a
                },
                completed: function() {
                    return n >= 1 ? n: !1
                }
            }
        },
        E = function(e, t, i, n) {
            e[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = t,
            e[13] = i,
            e[14] = n,
            e[15] = 1
        },
        D = function(e, t) {
            e[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = Math.cos(t),
            e[6] = -Math.sin(t),
            e[7] = 0,
            e[8] = 0,
            e[9] = Math.sin(t),
            e[10] = Math.cos(t),
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        T = function(e, t) {
            e[0] = Math.cos(t),
            e[1] = 0,
            e[2] = Math.sin(t),
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = -Math.sin(t),
            e[9] = 0,
            e[10] = Math.cos(t),
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        O = function(e, t) {
            e[0] = Math.cos(t),
            e[1] = -Math.sin(t),
            e[2] = 0,
            e[3] = 0,
            e[4] = Math.sin(t),
            e[5] = Math.cos(t),
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        R = function(e, t, i) {
            e[0] = 1,
            e[1] = Math.tan(t),
            e[2] = 0,
            e[3] = 0,
            e[4] = Math.tan(i),
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        U = function(e, t, i) {
            e[0] = t,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = i,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        M = function(e) {
            e[0] = 1,
            e[1] = 0,
            e[2] = 0,
            e[3] = 0,
            e[4] = 0,
            e[5] = 1,
            e[6] = 0,
            e[7] = 0,
            e[8] = 0,
            e[9] = 0,
            e[10] = 1,
            e[11] = 0,
            e[12] = 0,
            e[13] = 0,
            e[14] = 0,
            e[15] = 1
        },
        z = function(e, t) {
            t[0] = e[0],
            t[1] = e[1],
            t[2] = e[2],
            t[3] = e[3],
            t[4] = e[4],
            t[5] = e[5],
            t[6] = e[6],
            t[7] = e[7],
            t[8] = e[8],
            t[9] = e[9],
            t[10] = e[10],
            t[11] = e[11],
            t[12] = e[12],
            t[13] = e[13],
            t[14] = e[14],
            t[15] = e[15]
        },
        B = function() {
            var e = new Float32Array(16),
            t = new Float32Array(16),
            i = new Float32Array(16);
            return M(e),
            {
                data: e,
                asCSS: function() {
                    for (var t = "matrix3d(",
                    i = 0; 15 > i; ++i) t += Math.abs(e[i]) < 1e-4 ? "0,": e[i].toFixed(10) + ",";
                    return t += Math.abs(e[15]) < 1e-4 ? "0)": e[15].toFixed(10) + ")"
                },
                clear: function() {
                    M(e)
                },
                translate: function(n, o, a) {
                    return z(e, t),
                    E(i, n, o, a),
                    N(t, i, e),
                    this
                },
                rotateX: function(n) {
                    return z(e, t),
                    D(i, n),
                    N(t, i, e),
                    this
                },
                rotateY: function(n) {
                    return z(e, t),
                    T(i, n),
                    N(t, i, e),
                    this
                },
                rotateZ: function(n) {
                    return z(e, t),
                    O(i, n),
                    N(t, i, e),
                    this
                },
                scale: function(n, o) {
                    return z(e, t),
                    U(i, n, o),
                    N(t, i, e),
                    this
                },
                skew: function(n, o) {
                    return z(e, t),
                    R(i, n, o),
                    N(t, i, e),
                    this
                }
            }
        },
        N = function(e, t, i) {
            return i[0] = e[0] * t[0] + e[1] * t[4] + e[2] * t[8] + e[3] * t[12],
            i[1] = e[0] * t[1] + e[1] * t[5] + e[2] * t[9] + e[3] * t[13],
            i[2] = e[0] * t[2] + e[1] * t[6] + e[2] * t[10] + e[3] * t[14],
            i[3] = e[0] * t[3] + e[1] * t[7] + e[2] * t[11] + e[3] * t[15],
            i[4] = e[4] * t[0] + e[5] * t[4] + e[6] * t[8] + e[7] * t[12],
            i[5] = e[4] * t[1] + e[5] * t[5] + e[6] * t[9] + e[7] * t[13],
            i[6] = e[4] * t[2] + e[5] * t[6] + e[6] * t[10] + e[7] * t[14],
            i[7] = e[4] * t[3] + e[5] * t[7] + e[6] * t[11] + e[7] * t[15],
            i[8] = e[8] * t[0] + e[9] * t[4] + e[10] * t[8] + e[11] * t[12],
            i[9] = e[8] * t[1] + e[9] * t[5] + e[10] * t[9] + e[11] * t[13],
            i[10] = e[8] * t[2] + e[9] * t[6] + e[10] * t[10] + e[11] * t[14],
            i[11] = e[8] * t[3] + e[9] * t[7] + e[10] * t[11] + e[11] * t[15],
            i[12] = e[12] * t[0] + e[13] * t[4] + e[14] * t[8] + e[15] * t[12],
            i[13] = e[12] * t[1] + e[13] * t[5] + e[14] * t[9] + e[15] * t[13],
            i[14] = e[12] * t[2] + e[13] * t[6] + e[14] * t[10] + e[15] * t[14],
            i[15] = e[12] * t[3] + e[13] * t[7] + e[14] * t[11] + e[15] * t[15],
            i
        },
        F = function G(e) {
            var t = B(),
            i = {
                opacity: void 0,
                width: void 0,
                height: void 0
            };
            return {
                position: e.position,
                rotation: e.rotation,
                rotationPost: e.rotationPost,
                skew: e.skew,
                scale: e.scale,
                scalePost: e.scalePost,
                opacity: e.opacity,
                width: e.width,
                height: e.height,
                clone: function() {
                    return G({
                        position: this.position ? this.position.slice(0) : void 0,
                        rotation: this.rotation ? this.rotation.slice(0) : void 0,
                        rotationPost: this.rotationPost ? this.rotationPost.slice(0) : void 0,
                        skew: this.skew ? this.skew.slice(0) : void 0,
                        scale: this.scale ? this.scale.slice(0) : void 0,
                        scalePost: this.scalePost ? this.scalePost.slice(0) : void 0,
                        height: this.height,
                        width: this.width,
                        opacity: this.opacity
                    })
                },
                asMatrix: function() {
                    var e = t;
                    return e.clear(),
                    this.transformOrigin && e.translate( - this.transformOrigin[0], -this.transformOrigin[1], -this.transformOrigin[2]),
                    this.scale && e.scale(this.scale[0], this.scale[1]),
                    this.skew && e.skew(this.skew[0], this.skew[1]),
                    this.rotation && (e.rotateX(this.rotation[0]), e.rotateY(this.rotation[1]), e.rotateZ(this.rotation[2])),
                    this.position && e.translate(this.position[0], this.position[1], this.position[2]),
                    this.rotationPost && (e.rotateX(this.rotationPost[0]), e.rotateY(this.rotationPost[1]), e.rotateZ(this.rotationPost[2])),
                    this.scalePost && e.scale(this.scalePost[0], this.scalePost[1]),
                    this.transformOrigin && e.translate(this.transformOrigin[0], this.transformOrigin[1], this.transformOrigin[2]),
                    e
                },
                getProperties: function() {
                    return i.opacity = this.opacity,
                    i.width = this.width + "px",
                    i.height = this.height + "px",
                    i
                }
            }
        },
        H = function(e, t, i) {
            var n = e,
            o = t,
            a = i,
            r = void 0 !== o.position,
            s = void 0 !== o.rotation,
            l = void 0 !== o.rotationPost,
            c = void 0 !== o.scale,
            u = void 0 !== o.scalePost,
            d = void 0 !== o.skew,
            f = void 0 !== o.width,
            p = void 0 !== o.height,
            h = void 0 !== o.opacity;
            return {
                tween: function(e) {
                    if (r) {
                        var t = o.position[0] - n.position[0],
                        i = o.position[1] - n.position[1],
                        g = o.position[2] - n.position[2];
                        a.position[0] = n.position[0] + e * t,
                        a.position[1] = n.position[1] + e * i,
                        a.position[2] = n.position[2] + e * g
                    }
                    if (s) {
                        var m = o.rotation[0] - n.rotation[0],
                        v = o.rotation[1] - n.rotation[1],
                        w = o.rotation[2] - n.rotation[2];
                        a.rotation[0] = n.rotation[0] + e * m,
                        a.rotation[1] = n.rotation[1] + e * v,
                        a.rotation[2] = n.rotation[2] + e * w
                    }
                    if (l) {
                        var b = o.rotationPost[0] - n.rotationPost[0],
                        y = o.rotationPost[1] - n.rotationPost[1],
                        k = o.rotationPost[2] - n.rotationPost[2];
                        a.rotationPost[0] = n.rotationPost[0] + e * b,
                        a.rotationPost[1] = n.rotationPost[1] + e * y,
                        a.rotationPost[2] = n.rotationPost[2] + e * k
                    }
                    if (d) {
                        var A = o.skew[0] - n.skew[0],
                        x = o.skew[1] - n.skew[1];
                        a.skew[0] = n.skew[0] + e * A,
                        a.skew[1] = n.skew[1] + e * x
                    }
                    if (c) {
                        var C = o.scale[0] - n.scale[0],
                        P = o.scale[1] - n.scale[1];
                        a.scale[0] = n.scale[0] + e * C,
                        a.scale[1] = n.scale[1] + e * P
                    }
                    if (u) {
                        var I = o.scalePost[0] - n.scalePost[0],
                        S = o.scalePost[1] - n.scalePost[1];
                        a.scalePost[0] = n.scalePost[0] + e * I,
                        a.scalePost[1] = n.scalePost[1] + e * S
                    }
                    if (f) {
                        var j = o.width - n.width;
                        a.width = n.width + e * j
                    }
                    if (p) {
                        var E = o.height - n.height;
                        a.height = n.height + e * E
                    }
                    if (h) {
                        var D = o.opacity - n.opacity;
                        a.opacity = n.opacity + e * D
                    }
                },
                asMatrix: function() {
                    return a.asMatrix()
                },
                getProperties: function() {
                    return a.getProperties()
                },
                setReverse: function() {
                    var e = n;
                    n = o,
                    o = e
                }
            }
        },
        L = function(e, t, i, n) {
            var o = e(0, B()),
            a = t,
            r = i,
            s = n,
            l = !1;
            return {
                tween: function(t) {
                    l && (t = 1 - t),
                    o.clear(),
                    o = e(t, o);
                    var i = r.width - a.width,
                    n = r.height - a.height,
                    c = r.opacity - a.opacity;
                    void 0 !== r.width && (s.width = a.width + t * i),
                    void 0 !== r.height && (s.height = a.height + t * n),
                    void 0 !== r.opacity && (s.opacity = a.opacity + t * c)
                },
                asMatrix: function() {
                    return o
                },
                getProperties: function() {
                    return s.getProperties()
                },
                setReverse: function() {
                    l = !0
                }
            }
        },
        V = function(e, t) {
            return "undefined" == typeof e ? t: e
        },
        q = function(e, t, i) {
            var o = "";
            i && (o = "perspective(" + i + "px) ");
            var a = t.asCSS();
            e.style[n] = o + a
        },
        J = function(e, t) {
            for (var i in t) e.style[i] = t[i]
        },
        Q = function(e) {
            return "function" == typeof e
        },
        W = function(e) {
            if (!e) return e;
            var t = {};
            for (var i in e) t[i] = e[i];
            return t
        };
        return window.jQuery && !
        function(e) {
            e.fn.snabbt = function(e, t) {
                return r(this.get(), e, t)
            }
        } (jQuery),
        r.createMatrix = B,
        r.setElementTransform = q,
        r
    })
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(6),
    d = n(u),
    f = i(3),
    p = n(f),
    h = i(51),
    g = n(h),
    m = function() {
        function e() {
            o(this, e)
        }
        return a(e, [{
            key: "init",
            value: function() {
                var e = this;
                if (console.log("captrue init" + window.Config.getContentJSONUrl()), p["default"].isADtrans()) {
                    var t = c["default"].getCookie("openid"),
                    i = c["default"].getUrlParameter("sign");
                    if (void 0 === t || void 0 === i) return void(location.href = Config.getADtransLoginUrl(location.href));
                    var n = c["default"].getUrlParameter("task_id"),
                    o = c["default"].getUrlParameter("member_id"),
                    a = window.projectVersion.id;
                    p["default"].isWX(),
                    "wx";
                    s["default"].ajax({
                        type: "get",
                        url: Config.getADtransRecordUrl(),
                        dataType: "json",
                        data: {
                            task_id: n,
                            member_id: o,
                            event_id: a,
                            plat_type: "wx",
                            plat_id: t,
                            sign: i
                        },
                        success: function(e) {}
                    })
                }
                return new d["default"](function(t, i) {
                    console.log(window.Config.getContentJSONUrl()),
                    s["default"].ajax({
                        type: "GET",
                        dataType: "json",
                        url: window.Config.getContentJSONUrl(),
                        success: function(i) {
                            if (e.pdata = i.data.pdata, e.contentJSON = i.data.pdata.json, e.music = i.data.pdata.music, e.menu = i.data.pdata.menu, p["default"].isExam(e.contentJSON) && p["default"].isWX()) {
                                if (void 0 === c["default"].getCookie(window.Config.wxCookie)) return void(location.href = Config.getLoginUrl());
                                var n = c["default"].getUrlParameter("thumb"),
                                o = c["default"].getCookie("thumb");
                                if (n = "undefined" == n ? void 0 : n, o = "undefined" == o ? void 0 : o, void 0 == n && void 0 == o) return void(location.href = Config.getLoginUrl());
                                if (void 0 == o) {
                                    var a = decodeURIComponent(c["default"].getUrlParameter("thumb"));
                                    c["default"].setCookie("thumb", a, 7)
                                }
                            }
                            if (e.contentJSON = (0, g["default"])(e.contentJSON), p["default"].needWxLogin && p["default"].isWX()) {
                                if (void 0 === c["default"].getCookie(window.Config.wxCookie)) return void(location.href = Config.getLoginUrl(p["default"].hasVote));
                                if (p["default"].hasVote) return void e.advancedVoteApi().then(function(i) {
                                    return i && i.data !== parseInt(c["default"].getCookie(window.Config.voteTypeCookie)) ? void(location.href = Config.getLoginUrl(!0)) : void t(e.contentJSON)
                                })
                            }
                            t(e.contentJSON)
                        },
                        error: function(e) {
                            c["default"].log(e),
                            i(e)
                        }
                    })
                })
            }
        },
        {
            key: "advancedVoteApi",
            value: function() {
                return new d["default"](function(e, t) {
                    s["default"].ajax({
                        type: "GET",
                        dataType: "json",
                        url: window.Config.getAdvancedVoteUrl(),
                        success: function(t) {
                            e(t)
                        },
                        error: function(e) {
                            c["default"].log(e),
                            t(null)
                        }
                    })
                })
            }
        },
        {
            key: "localInt",
            value: function(e) {
                return this.pdata = e.data.pdata,
                this.contentJSON = e.data.pdata.json,
                this.music = e.data.pdata.music,
                this.menu = e.data.pdata.menu,
                d["default"].resolve(this.contentJSON)
            }
        },
        {
            key: "hasPage",
            value: function(e) {
                return e >= 0 && e < this.contentJSON.length
            }
        },
        {
            key: "getPage",
            value: function(e) {
                if (this.hasPage(e)) return this.contentJSON[e];
                throw "MAKA EXCEPTION: index不合法"
            }
        },
        {
            key: "getPageLength",
            value: function() {
                return this.contentJSON.length
            }
        },
        {
            key: "get",
            value: function() {
                return this.contentJSON
            }
        },
        {
            key: "getIsloop",
            value: function() {
                return "true" === this.pdata.loop || this.pdata.loop === !0
            }
        },
        {
            key: "getMusicId",
            value: function() {
                return this.music && this.music.id ? this.music.id: null
            }
        },
        {
            key: "getMusic",
            value: function() {
                return this.music ? this.music: null
            }
        },
        {
            key: "getBottomMenu",
            value: function() {
                return this.menu ? this.menu: null
            }
        }]),
        e
    } ();
    t["default"] = new m,
    e.exports = t["default"]
},
function(e, t) {
    "use strict";
    function i(e) {
        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
        return Object(e)
    }
    function n() {
        try {
            if (!Object.assign) return ! 1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return ! 1;
            for (var t = {},
            i = 0; 10 > i; i++) t["_" + String.fromCharCode(i)] = i;
            var n = Object.getOwnPropertyNames(t).map(function(e) {
                return t[e]
            });
            if ("0123456789" !== n.join("")) return ! 1;
            var o = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                o[e] = e
            }),
            "abcdefghijklmnopqrst" === Object.keys(Object.assign({},
            o)).join("")
        } catch(a) {
            return ! 1
        }
    }
    var o = Object.prototype.hasOwnProperty,
    a = Object.prototype.propertyIsEnumerable;
    e.exports = n() ? Object.assign: function(e, t) {
        for (var n, r, s = i(e), l = 1; l < arguments.length; l++) {
            n = Object(arguments[l]);
            for (var c in n) o.call(n, c) && (s[c] = n[c]);
            if (Object.getOwnPropertySymbols) {
                r = Object.getOwnPropertySymbols(n);
                for (var u = 0; u < r.length; u++) a.call(n, r[u]) && (s[r[u]] = n[r[u]])
            }
        }
        return s
    }
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = {
        pButtonSvg: {
            "1.png": "1.svg",
            "2.png": "2.svg",
            "02.png": "02.svg",
            "3.png": "3.svg",
            "03.png": "03.svg",
            "4.png": "4.svg",
            "04.png": "04.svg",
            "5.png": "5.svg",
            "05.png": "05.svg",
            "6.png": "6.svg",
            "7.png": "7.svg",
            "8.png": "8.svg",
            "9.png": "9.svg"
        }
    };
    t["default"] = i,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(7),
    c = n(l),
    u = i(1),
    d = (n(u), i(12)),
    f = n(d),
    p = function() {
        function e(t, i) {
            o(this, e),
            t.content.data = t.content.data.reduce(function(e, t, i, n) {
                return null !== t && t.name ? e.push(t) : e,
                e
            },
            []),
            this.obj = t,
            this.height = t.height || t.h,
            this.width = t.width || t.w,
            this.top = t.top,
            this.left = t.left,
            this.scale = i,
            this.showSwipe = this._getShowSwipe(t),
            this.curChartIndex = 0,
            this.chartNumber = t.content.data.length,
            this.chartOption = this._prepareChartOption(),
            this._prepareElements()
        }
        return a(e, [{
            key: "_getShowSwipe",
            value: function(e) {
                return 1 === e.content.multiple
            }
        },
        {
            key: "_prepareElements",
            value: function() {
                this.showSwipe && this._prepareSwipeImgElm(),
                this._prepareChartElm(),
                this._prepareWrapperElm()
            }
        },
        {
            key: "_prepareWrapperElm",
            value: function() {
                this.wrapperElm = (0, s["default"])('<div class="chart-wrapper"></div>'),
                this.wrapperElm.css({
                    position: "absolute",
                    width: this.scale(this.width),
                    height: this.scale(this.height),
                    left: this.scale(this.left),
                    top: this.scale(this.top),
                    background: "rgba(0,0,0,0)"
                }),
                this.showSwipe && this.wrapperElm.append(this.swipeImgElm),
                this.wrapperElm.append(this.chartElm)
            }
        },
        {
            key: "_prepareSwipeImgElm",
            value: function() {
                return this.swipeImgElm = (0, s["default"])('<img src="' + window.Config.getImgOss("images/swiper/swipewarn.png") + '"></img>'),
                this.swipeImgElm.css({
                    position: "absolute",
                    width: this.scale(180),
                    left: this.scale(230),
                    marginTop: this.scale( - 90),
                    top: "50%",
                    display: "none",
                    "z-index": 99
                }),
                this.swipeImgElm
            }
        },
        {
            key: "_prepareChartElm",
            value: function() {
                var e = this;
                if (this.chartElm = (0, s["default"])('<div class="chart"></div>'), this.chartElm.css({
                    position: "absolute",
                    width: this.scale(this.width),
                    height: this.scale(this.height),
                    left: 0,
                    top: this.showSwipe ? 50 : 0,
                    "z-index": 0
                }), this.showSwipe) {
                    var t = new c["default"](this.chartElm[0]);
                    t.on("swipeleft",
                    function() {
                        e._renderSwipeLegend && e._renderSwipeLegend(!1),
                        e.curChartIndex = (e.curChartIndex - 1 + e.chartNumber) % e.chartNumber,
                        e._renderSwipeLegend && e._renderSwipeLegend(!0),
                        e.singleSeries(e.curChartIndex, e.obj.content.type)
                    }),
                    t.on("swiperight",
                    function() {
                        e._renderSwipeLegend && e._renderSwipeLegend(!1),
                        e.curChartIndex = (e.curChartIndex + 1) % e.chartNumber,
                        e._renderSwipeLegend && e._renderSwipeLegend(!0),
                        e.singleSeries(e.curChartIndex, e.obj.content.type)
                    })
                }
                return this.chartElm
            }
        },
        {
            key: "_prepareChartOption",
            value: function() {
                var e = this.obj.content,
                t = e.options,
                i = "14px",
                n = t.lineColor || "#b3b3b3",
                o = 3 === e.multiple ? "normal": null,
                a = e.data,
                r = t.colors,
                s = this,
                l = {
                    chart: {
                        type: e.type,
                        backgroundColor: t.backgroundColor,
                        plotBorderWidth: "pie" == e.type ? 0 : 1,
                        animation: {
                            duration: 300
                        }
                    },
                    title: {
                        text: null
                    },
                    colors: r,
                    legend: {
                        symbolWidth: 14,
                        symbolHeight: 14,
                        itemStyle: {
                            color: n,
                            fontSize: "12px"
                        }
                    },
                    credits: {
                        enabled: !1
                    },
                    tooltip: {
                        style: {
                            fontSize: i
                        }
                    },
                    series: a
                };
                return "pie" !== e.type && (l = (0, f["default"])({},
                l, {
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: !0
                            }
                        },
                        column: {
                            borderWidth: 0,
                            stacking: o
                        },
                        bar: {
                            borderWidth: 0,
                            stacking: o
                        },
                        area: {
                            stacking: "normal"
                        }
                    },
                    xAxis: {
                        lineColor: n,
                        gridLineColor: n,
                        categories: t.xAxis.categories,
                        labels: {
                            staggerLines: 1,
                            distance: 50,
                            style: {
                                paddingTop: "30px",
                                color: n
                            }
                        }
                    },
                    yAxis: {
                        lineColor: n,
                        gridLineColor: n,
                        max: t.yAxis.max || null,
                        min: t.yAxis.min || null,
                        title: {
                            text: t.yAxis.title.text,
                            style: {
                                color: n
                            }
                        },
                        labels: {
                            style: {
                                fontSize: i,
                                color: n
                            }
                        }
                    }
                }), l.plotOptions[e.type].events = {
                    legendItemClick: function(t) {
                        return 1 === e.multiple ? (setTimeout(function(t) {
                            return function() {
                                s.singleSeries(t, e.type)
                            }
                        } (this.index), 0), !1) : void 0
                    }
                }),
                l
            }
        },
        {
            key: "_renderHighcharts",
            value: function() {
                this.curChart = window.Highcharts.createChart(this.chartElm[0], this.chartOption),
                this.showSwipe && this.singleSeries(0, this.obj.content.type),
                this.swipeImgElm && this.swipeImgElm.hide()
            }
        },
        {
            key: "_renderSwipeImg",
            value: function() {
                var e = this;
                setTimeout(function() {
                    e.swipeImgElm && e.obj.content.data.length > 1 && e.swipeImgElm.fadeIn()
                }.bind(this), 700),
                setTimeout(function() {
                    e.swipeImgElm && e.swipeImgElm.fadeOut()
                }.bind(this), 3500)
            }
        },
        {
            key: "singleSeries",
            value: function(e, t) {
                "pie" === t && this.chartOption.series.forEach(function(t, i) {
                    t.showInLegend = e == i
                }),
                window.Highcharts.destroy(this.curChart),
                this.chartOption.series.forEach(function(t, i) {
                    t.visible = e == i
                }),
                this.curChart = window.Highcharts.createChart(this.chartElm[0], this.chartOption)
            }
        },
        {
            key: "render",
            value: function() {
                this._renderHighcharts(),
                this._renderSwipeImg()
            }
        },
        {
            key: "getElement",
            value: function() {
                return this.wrapperElm
            }
        }]),
        e
    } ();
    t["default"] = p,
    e.exports = t["default"]
},
function(e, t) { (function(t) {
        "use strict";
        function i(e) {
            s.length || (r(), l = !0),
            s[s.length] = e
        }
        function n() {
            for (; c < s.length;) {
                var e = c;
                if (c += 1, s[e].call(), c > u) {
                    for (var t = 0,
                    i = s.length - c; i > t; t++) s[t] = s[t + c];
                    s.length -= c,
                    c = 0
                }
            }
            s.length = 0,
            c = 0,
            l = !1
        }
        function o(e) {
            var t = 1,
            i = new d(e),
            n = document.createTextNode("");
            return i.observe(n, {
                characterData: !0
            }),
            function() {
                t = -t,
                n.data = t
            }
        }
        function a(e) {
            return function() {
                function t() {
                    clearTimeout(i),
                    clearInterval(n),
                    e()
                }
                var i = setTimeout(t, 0),
                n = setInterval(t, 50)
            }
        }
        e.exports = i;
        var r, s = [],
        l = !1,
        c = 0,
        u = 1024,
        d = t.MutationObserver || t.WebKitMutationObserver;
        r = "function" == typeof d ? o(n) : a(n),
        i.requestFlush = r,
        i.makeRequestCallFromTimer = a
    }).call(t,
    function() {
        return this
    } ())
},
,
function(e, t, i) {
    var n = i(18);
    e.exports = n
},
function(e, t) { (function() {
        var t, i, n;
        n = null,
        t = function() {
            return n = document.createElement("style"),
            document.head.appendChild(n)
        },
        i = function(e) {
            var t;
            return t = n.sheet,
            t.insertRule(e, t.cssRules.length),
            n
        },
        i.reset = function() {
            return document.head.removeChild(n),
            t()
        },
        i.newStyle = function() {
            return t()
        },
        t(),
        e.exports = i
    }).call(this)
},
function(e, t) {
    "use strict";
    function i(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = function() {
        function e() {
            i(this, e)
        }
        return n(e, [{
            key: "stopAnimation",
            value: function(e) {
                var t = this.getInEffect(e);
                if (t && e.dom) {
                    var i = e.dom.children().first();
                    i.addClass(t.show),
                    i.addClass("animated"),
                    i.css({
                        animation: t.show + " " + t.speed + "ms ease " + t.delay + "ms both",
                        "animation-play-state": "paused",
                        display: "none"
                    })
                }
            }
        },
        {
            key: "getInEffect",
            value: function(e) {
                var t = {};
                return e.animationVersion && 1 === e.animationVersion || e.elementAnimations && e.elementAnimations.animation_in && e.elementAnimations.animation_in.show ? (t.show = e.elementAnimations.animation_in.show, t.delay = e.elementAnimations.animation_in.delay, t.delay > 0 && t.delay < 10 && (t.delay = 1e3 * t.delay), t.speed = e.elementAnimations.animation_in.speed, t.speed > 0 && t.speed < 10 && (t.speed = 1e3 * t.speed)) : (t.show = e.show, t.delay = e.delay, t.speed = e.speed),
                "" !== t.show && "noEffect" !== t.show && t.show || (t = !1),
                e.forceNoEffect && (t = !1),
                t
            }
        },
        {
            key: "actAnimation",
            value: function(e) {
                var t = this.getInEffect(e);
                if (t && e.dom) {
                    var i = e.dom.children().first();
                    t && i.css({
                        display: "",
                        "animation-play-state": "running"
                    })
                }
            }
        }]),
        e
    } ();
    t["default"] = new o,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(6),
    c = n(l),
    u = i(1),
    d = n(u),
    f = i(13),
    p = n(f),
    h = i(9),
    g = n(h),
    m = i(17),
    v = n(m),
    w = i(3),
    b = n(w),
    y = null,
    k = function() {
        function e() {
            o(this, e),
            y = this,
            this.loadEnd = {},
            this.loading = {},
            this.loadingWait = {}
        }
        return a(e, [{
            key: "preparePage",
            value: function(e) {
                var t, i, n = [];
                if (e.loaded === !0) {
                    var o = c["default"].resolve(e);
                    return o
                }
                if (g["default"].send("pageLoadStart", e.index), e.bgpic && "0" !== e.bgpic && " " !== e.bgpic) try {
                    var a = void 0,
                    r = {};
                    if (console.log("log" + e.bgpic), 0 === e.bgpic.indexOf("user/")) a = window.Config.getImgUrl(e.bgpic);
                    else if (e.bgpic.indexOf("test.img.maka.im") > 0) a = e.bgpic;
                    else if (e.bgpic.indexOf("img1") > 0) a = e.bgpic.replace("img1.maka.im", "img2.maka.im");
                    else if (e.bgpic.indexOf("img2") > 0) a = e.bgpic;
                    else {
                        var l = /id\/[A-Z0-9]{0,40}/,
                        u = l.exec(e.bgpic),
                        f = /\.jpg|\.png|\.jpeg|\.gif/i,
                        h = f.exec(e.bgpic),
                        m = "";
                        h && (m = h[0]);
                        var w = u[0].substr(3) + m;
                        a = window.Config.getImgUrl(w)
                    }
                    e.bgpicCropData && !window.Config.isGif(e.bgpic) && window.Config.isAppNormalMode() ? a = window.Config.addCrop(a, e.bgpicCropData) : window.Config.isGif(e.bgpic) || (a = b["default"].addTail(a)),
                    r.inw = e.bgpicwidth;
                    var k = y.loadImage(a, r, e);
                    k = k.then(function(t) {
                        return e.bgDom = (0, s["default"])(t),
                        t
                    }),
                    n.push(k)
                } catch(A) {
                    d["default"].log(A),
                    d["default"].logPiwik(window.Config.getEnvironment(), window.Config.isAppNormalMode(), A)
                }
                if (e.content.map(function(o) {
                    switch (o.type) {
                    case "pic":
                        if (!o.picid) if (o.con) {
                            var a = o.con.split("/");
                            o.picid = a[a.length - 3]
                        } else o.picid = 0;
                        var r = window.Config.getImgUrl(o.picid);
                        o.cropData && !window.Config.isGif(o.picid) && window.Config.isAppNormalMode() ? r = window.Config.addCrop(r, o.cropData) : window.Config.isGif(o.picid) || (r = b["default"].addTail(r));
                        var l = y.loadImage(r, o, e);
                        l = l.then(function(e) {
                            return o.inw && "auto" !== o.inw || (o.inw = e.width),
                            o.dom = (0, s["default"])(e),
                            e
                        }),
                        n.push(l);
                        break;
                    case "pButton":
                        if (o.model_type && "count_down" !== o.model_type) {
                            var u = y.loadSvgImg(window.Config.getPButtonUrl(p["default"].pButtonSvg[o.pic_id]));
                            u = u.then(function(e) {
                                return o.buttonSvg = e,
                                e
                            }),
                            n.push(u)
                        }
                        break;
                    case "pEraser":
                        var r = window.Config.getImgUrl(o.picid),
                        f = b["default"].addTail(r, "jpg"),
                        h = y.loadImage(f, o, e);
                        h = h.then(function(e) {
                            return o.inw && "auto" !== o.inw || (o.inw = e.width),
                            o.imgDom = (0, s["default"])(e),
                            e
                        }),
                        n.push(h);
                        break;
                    case "comparison":
                        if (!o.picdata) break;
                        o.picdata.map(function(t) {
                            var i = window.Config.getImgUrl(t.picid),
                            a = y.loadImage(i, o, e);
                            a = a.then(function(e) {
                                return t.dom = (0, s["default"])(e),
                                e
                            }),
                            n.push(a)
                        });
                        break;
                    case "pshape":
                        if (!o.shape) break;
                        if (o.svgDom) {
                            o.svgXml = (0, s["default"])(o.svgDom);
                            break
                        }
                        if ("0" === o.shape && (o.shape = "1.svg"), o.shape.indexOf("<svg") >= 0) {
                            o.svgXml = (0, s["default"])(o.shape);
                            break
                        }
                        o.shape.indexOf("/SVG/") < 0 && (o.shape = "svg/Default/SVG/" + o.shape);
                        var g = y.loadSvgImg(window.Config.getShapeUrl(o.shape));
                        g = g.then(function(e) {
                            var t = (0, s["default"])(e);
                            return d["default"].processSVG(t),
                            o.svgXml = t,
                            t
                        }),
                        n.push(g);
                        break;
                    case "interActionButton":
                        var g = y.loadSvgImg(b["default"].getInterActionUrl(o.funcType));
                        g = g.then(function(e) {
                            return o.svgXml = e,
                            e
                        }),
                        n.push(g);
                        break;
                    case "fingerPrint":
                        var m = y.loadImage(window.Config.getImgUrl(o.picid), o, e);
                        m = m.then(function(e) {
                            return o.dom = (0, s["default"])(e),
                            e
                        }),
                        n.push(m);
                        break;
                    case "phone_call":
                        var w = y.loadImage(window.Config.getPhoneCallUrl("phonecall_bg.png"), o, e),
                        k = y.loadImage(window.Config.getPhoneCallUrl("phonecall_info.png"), o, e),
                        A = y.loadImage(window.Config.getPhoneCallUrl("phonecall_remind.png"), o, e),
                        x = y.loadImage(window.Config.getPhoneCallUrl("phonecall.png"), o, e);
                        w = w.then(function(e) {
                            return o.bgDom = (0, s["default"])(e),
                            e
                        }),
                        k = k.then(function(e) {
                            return o.phoneInfoDom = (0, s["default"])(e),
                            e
                        }),
                        A = A.then(function(e) {
                            return o.phoneRemindDom = (0, s["default"])(e),
                            e
                        }),
                        x = x.then(function(e) {
                            return o.phonecallDom = (0, s["default"])(e),
                            e
                        }),
                        n.push(w),
                        n.push(k),
                        n.push(A),
                        n.push(x);
                        break;
                    case "glass_break":
                        var C = [1, 2, 3, 4, 5];
                        o.imgDom = new Array(5),
                        C.map(function(t) {
                            var i = y.loadImage(window.Config.getGlassBreakUrl(t + ".png"), o, e);
                            i = i.then(function(e) {
                                return o.imgDom[t - 1] = e,
                                e
                            }),
                            n.push(i)
                        });
                        break;
                    case "slide":
                        var P = y.loadSwiper();
                        n.push(P);
                        for (var I in o.data) {
                            var S = o.data[I],
                            j = window.Config.getImgUrl(S.picid),
                            E = window.Config.getImgUrl(S.picid);
                            window.Config.isGif(j) || (E = b["default"].addTail(E, "jpg", S.inw));
                            var D = new Image;
                            D.src = E,
                            S.imgDom = (0, s["default"])(D)
                        }
                        break;
                    case "eleform":
                        y.loadImage(window.Config.getImgOss("images/sending.gif"), o, e),
                        y.loadImage(window.Config.getImgOss("images/sendsucess.png"), o, e);
                        break;
                    case "charts":
                        var T = y.loadHighcharts();
                        n.push(T);
                        break;
                    case "text":
                    case "ptext":
                        if (o.fontVersion && 10 == o.fontVersion && o.fontUrl) {
                            n.push(y.loadFont(o.fontUrl, o, e));
                            break
                        }
                        if (o.fontId && o.fontId.indexOf("makaOSS") > -1 && o.fontUrl) {
                            var O = o.fontUrl,
                            R = function(t) {
                                var i = y.loadFont(t, o, e);
                                n.push(i)
                            };
                            if (!y.loadEnd[O]) {
                                y.loadEnd[O] = !0;
                                for (var U = [".bmp"], M = void 0, z = 0; z < U.length; z += 1) M = O + U[z],
                                R(M)
                            }
                            break
                        }
                        if (o.fontId && o.fontUrl) {
                            var B, N = (o.fontId, !1);
                            if (o.fontId.indexOf("makafont_") >= 0) B = window.Config.engFontUrl + o.fontId + ".ttf";
                            else if (o.fontUrl && o.fontUrl.indexOf("youziku_") > -1) {
                                if (B = o.fontUrl.replace("youziku_", ""), "_font_default" == o.fontTag) break;
                                B.match(/http/g).length >= 1 && -1 != B.indexOf("font-face") ? N = !0 : B = B.replace("') format('woff')", "")
                            } else o.fontUrl && (B = o.fontUrl);
                            if (!y.loadEnd[B]) if (y.loadEnd[B] = !0, N) {
                                var F = B.split("url(");
                                F.length; (0, v["default"])(B.substring(0, B.lastIndexOf("}", B.length - 2) + 1))
                            } else {
                                var H = y.loadFont(B, o, e);
                                n.push(H)
                            }
                        }
                        break;
                    case "footballManager":
                        t = o.picid;
                        var L = o.url;
                        if (t) {
                            var V = window.Config.getImgUrl(t);
                            o.cropData && !window.Config.isGif(t) && window.Config.isAppNormalMode() ? V = window.Config.addCrop(V, o.cropData) : window.Config.isGif(t) || (V = b["default"].addTail(V));
                            var q = y.loadImage(V, o, e);
                            q = q.then(function(e) {
                                return o.logoDom = (0, s["default"])(e),
                                e
                            }),
                            n.push(q)
                        }
                        if (L) {
                            var J = window.Config.getImgUrl(L),
                            q = y.loadImage(J, o, e);
                            q = q.then(function(e) {
                                return o.urlDom = (0, s["default"])(e),
                                e
                            }),
                            n.push(q)
                        }
                        n.push(y.loadFootballManager());
                        break;
                    case "puzzle":
                        if (t = o.picid, n.push(y.loadPuzzle()), t) {
                            var V = window.Config.getImgUrl(t);
                            o.cropData && !window.Config.isGif(t) && window.Config.isAppNormalMode() ? V = window.Config.addCrop(V, o.cropData) : window.Config.isGif(t) || (V = b["default"].addTail(V));
                            var q = y.loadImage(V, o, e);
                            q = q.then(function(e) {
                                return o.logoDom = (0, s["default"])(e),
                                e
                            }),
                            n.push(q)
                        }
                        o.urls.length && (o.urlDom = [], o.urls.map(function(t) {
                            var i = window.Config.getImgUrl(t),
                            a = y.loadImage(i, o, e);
                            a = a.then(function(e) {
                                return o.urlDom.push((0, s["default"])(e)),
                                e
                            }),
                            n.push(a)
                        }));
                        break;
                    case "vote":
                        i = o.voteSetting.voteId;
                        var Q = o.pic;
                        if (Q) {
                            var W = window.Config.getImgUrl(Q.picid);
                            Q.cropData && !window.Config.isGif(Q.picid) && window.Config.isAppNormalMode() ? W = window.Config.addCrop(W, Q.cropData) : window.Config.isGif(Q.picid) || (W = b["default"].addTail(W));
                            var q = y.loadImage(W, Q, e);
                            q = q.then(function(e) {
                                return o.picDom = (0, s["default"])(e),
                                e
                            }),
                            n.push(q)
                        }
                        break;
                    case "relay":
                        if (!o.ownInfo) {
                            var q = y.loadRelayData(o.relayId);
                            q = q.then(function(e) {
                                return e && 200 == e.code && (o.canRealy = e.data.can_relay, o.relayed = e.data.already_relay, o.rank = e.data.rank, o.ownInfo = e.data.own_info.ercode ? void 0 : e.data.own_info, o.picSrc = e.data.participators_info || []),
                                e
                            }),
                            n.push(q)
                        }
                        break;
                    case "map":
                        var Y = document.getElementById("map-script");
                        if (Y) {
                            if (window.mapAllPromise) {
                                var G = new c["default"](function(e) {
                                    window.mapAllPromise.push(e)
                                }).then(function(e) {
                                    return "mapJs"
                                });
                                n.push(G)
                            }
                        } else {
                            var G = new c["default"](function(e) {
                                var t = document.createElement("script");
                                t.type = "text/javascript",
                                t.id = "map-script";
                                var i = "cb_" + o.id;
                                t.src = "http://map.qq.com/api/js?v=2.exp&callback=" + i,
                                document.body.appendChild(t),
                                window.mapAllPromise = [e],
                                window[i] = function() {
                                    for (var e = 0; e < window.mapAllPromise.length; e++) window.mapAllPromise[e]();
                                    delete window.mapAllPromise
                                }
                            }).then(function(e) {
                                return "mapJs"
                            });
                            n.push(G)
                        }
                        break;
                    case "phoneSound":
                        var r = window.Config.getImgUrl(o.imgSrc),
                        l = y.loadImage(r, o, e);
                        l = l.then(function(e) {
                            return o.picDom = (0, s["default"])(e),
                            e
                        }),
                        n.push(l),
                        r = window.Config.getImgUrl(o.middle.imgSrc);
                        var K = y.loadImage(r, o, e);
                        K = K.then(function(e) {
                            return o.middleDom = (0, s["default"])(e),
                            e
                        }),
                        n.push(K);
                        break;
                    case "phoneLock":
                        var r = window.Config.getImgUrl(o.bgSrc),
                        l = y.loadImage(r, o, e);
                        l = l.then(function(e) {
                            return o.bgDom = (0, s["default"])(e),
                            e
                        }),
                        n.push(l)
                    }
                }), i && null === b["default"].voteData) {
                    var x = y.loadVoteData(i);
                    x = x.then(function(e) {
                        return e && 200 == e.code ? b["default"].setVoteData(e.data) : b["default"].voteData = null,
                        e
                    }),
                    n.push(x)
                }
                return console.log(n),
                e.loaded = !0,
                n
            }
        },
        {
            key: "loadVoteData",
            value: function(e) {
                return d["default"].log("Load vote data"),
                new c["default"](function(t) {
                    s["default"].ajax({
                        type: "post",
                        dataType: "json",
                        url: Config.checkVoteUrl(),
                        data: {
                            vote_id: e,
                            event_id: window.Config.getProjectId(),
                            openid: d["default"].getCookie(window.Config.wxCookie)
                        },
                        cache: !1,
                        success: function(e) {
                            t(e)
                        },
                        error: function(e) {
                            t(null)
                        }
                    })
                })
            }
        },
        {
            key: "loadRelayData",
            value: function(e) {
                return d["default"].log("Load relay data"),
                new c["default"](function(t) {
                    s["default"].ajax({
                        type: "post",
                        dataType: "json",
                        url: Config.checkRelayUrl(),
                        data: {
                            relay_id: e,
                            event_id: window.Config.getProjectId(),
                            open_id: d["default"].getCookie(window.Config.wxCookie)
                        },
                        cache: !1,
                        success: function(e) {
                            t(e)
                        },
                        error: function(e) {
                            t(null)
                        }
                    })
                })
            }
        },
        {
            key: "loadFont",
            value: function(e, t, i) {
                e = e.replace("http://fontservice.oss-cn-beijing.aliyuncs.com", "http://font.maka.im");
                var n = t.fontId;
                return t.fontVersion && 10 == t.fontVersion && (n = "maka" + e.replace(/[\/:._]/g, "")),
                new c["default"](function(i) {
                    var o = window.URL || window.webkitURL;
                    if (!o) {
                        var a = '@font-face {font-family: "' + n + '"; src: url("' + e + '") ;font-weight: normal; font-style: normal;}';
                        return t.fontError = 0,
                        (0, v["default"])(a),
                        void i("fontUrl" + e)
                    }
                    var r = new XMLHttpRequest;
                    r.open("GET", e, !0),
                    r.responseType = "blob",
                    r.onload = function() {
                        if (200 == this.status) {
                            var i = this.response,
                            a = o.createObjectURL(i),
                            r = ".bmp" != e.slice( - 4) ? "truetype": "woff",
                            s = '@font-face {font-family: "' + n + '";' + ("src: url(" + a + ') format("' + r + '")') + ";font-weight: normal; font-style: normal;}";
                            t.fontError = 0,
                            (0, v["default"])(s)
                        }
                    },
                    r.onloadend = function() {
                        i(e + " load end")
                    },
                    r.onerror = function() {
                        var o = '@font-face {font-family: "' + n + '"; src: url("' + e + '") ;font-weight: normal; font-style: normal;}'; (0, v["default"])(o),
                        t.fontError = 1,
                        console.log("", e),
                        i("fontUrl" + e)
                    },
                    r.send()
                })
            }
        },
        {
            key: "loadImage",
            value: function(e, t, i) {
                return new c["default"](function(n) {
                    var o = new Image,
                    a = !1;
                    if (o.onload = function() {
                        a || (d["default"].log("Load image succeeded..." + e), a = !0, n(o))
                    },
                    o.onerror = function(t) {
                        d["default"].logPiwik(window.Config.getEnvironment(), window.Config.isAppNormalMode(), "Load image failed " + e + t),
                        a || (d["default"].log("Load image failed " + e + t), a = !0, n(o))
                    },
                    window.Config.isTurnOffOssCrop()) o.src = e;
                    else {
                        var r = /\.jpg|\.jpeg/i,
                        s = r.exec(e);
                        if (s && !e.indexOf("@")) if (t && 0 !== t.inw && "auto" !== t.inw && t.inw && window.Config.isAppNormalMode()) {
                            var l = t.inw > 500 ? 1e3: parseInt(2 * t.inw);
                            o.src = e + "@" + l + "w_75Q"
                        } else o.src = e;
                        else o.src = e
                    }
                    0 !== i.index && window.Config.isAppNormalMode() && "pEraser" !== t.type && (a || (a = !0, n(o)))
                })
            }
        },
        {
            key: "loadFootballManager",
            value: function() {
                return new c["default"](function(e) {
                    i.e(0,
                    function(t) {
                        window.FootballManager = i(78),
                        e(window.FootballManager)
                    })
                })
            }
        },
        {
            key: "loadPuzzle",
            value: function() {
                return new c["default"](function(e) {
                    i.e(2,
                    function(t) {
                        window.Puzzle = i(79),
                        e(window.Puzzle)
                    })
                })
            }
        },
        {
            key: "loadSwiper",
            value: function() {
                return new c["default"](function(e) {
                    i.e(1,
                    function(t) {
                        window.LightSlider = i(83),
                        i(81),
                        e(window.LightSlider)
                    })
                })
            }
        },
        {
            key: "loadHighcharts",
            value: function() {
                return console.log("load chart"),
                new c["default"](function(e) {
                    i.e(3,
                    function(t) {
                        console.log("chart end"),
                        window.Highcharts = i(16),
                        e(window.Highcharts)
                    })
                })
            }
        },
        {
            key: "loadSvgImg",
            value: function(e) {
                return new c["default"](function(t) {
                    y.loadEnd[e] ? t(y.loadEnd[e]) : y.loading[e] ? (console.log("load wait"), y.loadingWait[e].push(t)) : (y.loading[e] = !0, y.loadingWait[e] = [], y.loadingWait[e].push(t), console.log("load start"), s["default"].ajax({
                        type: "GET",
                        dataType: "text",
                        url: e + "?t=" + d["default"].getHashCode(),
                        cache: !0,
                        success: function(t) {
                            console.log("load end");
                            var i = t;
                            for (var n in y.loadingWait[e]) {
                                var o = y.loadingWait[e][n];
                                o(i)
                            }
                            y.loadEnd[e] = i,
                            y.loading[e] = !1
                        },
                        error: function() {
                            d["default"].log("Load svgUrl failed " + e),
                            y.loading[e] = !1;
                            for (var t in y.loadingWait[e]) {
                                var i = y.loadingWait[e][t];
                                i(null)
                            }
                        }
                    }))
                })
            }
        }]),
        e
    } ();
    t["default"] = k,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = (n(r), i(1)),
    l = (n(s),
    function() {
        function e() {
            o(this, e),
            this.bgMusic = void 0,
            this.effectMusic = void 0,
            this.bgPausedByUser = !1,
            this.effectPlaying = !1
        }
        return a(e, [{
            key: "setBgMusic",
            value: function(e) {
                this.bgMusic = e
            }
        },
        {
            key: "setEffectMusic",
            value: function(e) {
                this.effectMusic = e
            }
        },
        {
            key: "changeEffect",
            value: function(e) {
                this.effectMusic.src = e
            }
        },
        {
            key: "playBg",
            value: function() {
                this.effectMusic && this.effectMusic.pause(),
                this.bgMusic && this.bgMusic.play(),
                this.bgPausedByUser = !1
            }
        },
        {
            key: "pauseBg",
            value: function() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? !0 : arguments[0];
                this.bgMusic && this.bgMusic.pause(),
                e && (this.bgPausedByUser = !0)
            }
        },
        {
            key: "resumeBg",
            value: function() {
                this.bgPausedByUser || this.playBg()
            }
        },
        {
            key: "playEffect",
            value: function() {
                this.bgMusic && this.bgMusic.pause(),
                this.effectMusic && this.effectMusic.play(),
                this.effectPlaying = !0
            }
        },
        {
            key: "pauseEffect",
            value: function() {
                this.effectMusic && this.effectMusic.pause(),
                this.bgPausedByUser || this.bgMusic && this.bgMusic.play(),
                this.effectPlaying = !1
            }
        },
        {
            key: "isEffectPlaying",
            value: function() {
                return this.effectPlaying
            }
        }]),
        e
    } ());
    t["default"] = new l,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(6),
    c = n(l),
    u = i(11),
    d = n(u),
    f = i(20),
    p = n(f),
    h = i(7),
    g = n(h),
    m = i(1),
    v = n(m),
    w = i(3),
    b = (n(w), i(71)),
    y = n(b),
    k = i(72),
    A = n(k),
    x = i(14),
    C = n(x),
    P = i(40),
    I = n(P),
    S = i(41),
    j = n(S),
    E = i(26),
    D = n(E),
    T = i(43),
    O = n(T),
    R = i(9),
    U = n(R),
    M = i(25),
    z = n(M),
    B = i(30),
    N = n(B),
    F = i(37),
    H = n(F),
    L = i(31),
    V = n(L),
    q = i(44),
    J = n(q),
    Q = i(45),
    W = n(Q),
    Y = i(29),
    G = n(Y),
    K = i(24),
    Z = n(K),
    X = i(28),
    _ = n(X),
    $ = i(27),
    ee = n($),
    te = i(46),
    ie = n(te),
    ne = i(42),
    oe = n(ne),
    ae = i(35),
    re = n(ae),
    se = i(34),
    le = n(se),
    ce = i(39),
    ue = n(ce),
    de = i(38),
    fe = n(de),
    pe = i(21),
    he = n(pe),
    ge = i(36),
    me = n(ge),
    ve = i(33),
    we = n(ve),
    be = i(32),
    ye = n(be),
    ke = i(23),
    Ae = n(ke),
    xe = i(19),
    Ce = n(xe);
    i(55),
    i(54);
    var Pe = null,
    Ie = function() {
        function e() {
            o(this, e),
            this.currentPageIndex = 0,
            this.pageChangeHandlers = [],
            this.pageEffect = [],
            this.swipeDownLock = !1,
            this.examinationResult = null,
            window.Config.isAppNormalMode() && (this.audioEffect = new Audio, he["default"].setEffectMusic(this.audioEffect)),
            this.pageZLevel = {
                top: 999,
                bottom: 0,
                music: 1e3
            },
            this.lazyLoader = new p["default"],
            this.firstEnsurePagesStarted = !1,
            Pe = this,
            this.initSwiper(),
            this.ensureCanvas(),
            this.preload = new j["default"],
            this.option = {}
        }
        return a(e, [{
            key: "setOption",
            value: function(e) {
                this.option = e
            }
        },
        {
            key: "initSwiper",
            value: function() {
                var e = this;
                v["default"].log("Initing page swiper...");
                var t = document.getElementById("maka-pages");
                this.hammerPages = new g["default"].Manager(t);
                var i = new g["default"].Pan;
                i.set({
                    direction: g["default"].DIRECTION_ALL,
                    preventDefault: !0
                }),
                this.hammerPages.add(i),
                this.hammerPages.get("pan").set({
                    direction: g["default"].DIRECTION_VERTICAL
                }),
                this.hammerPages.on("pan", this.onPan.bind(this));
                var n = (0, s["default"])(".ADpage"); (0, s["default"])(window).on("message",
                function(t) {
                    if ("{" == t.originalEvent.data[0]) {
                        var i = JSON.parse(t.originalEvent.data);
                        "nextPage" === i.type ? "true" != n.attr("page-showded") && e.showNextPage() : "prevPage" === i.type ? "true" != n.attr("page-showded") && e.showPreviousPage() : "showPage" === i.type && e.showPage(i.index)
                    }
                })
            }
        },
        {
            key: "ensureCanvas",
            value: function() {
                var e, t, i, n, o = window.Config.canvas.standardWidth,
                a = window.Config.canvas.standardHeight,
                r = document.body.clientWidth / o,
                l = document.body.clientHeight / a;
                Pe.scaleRatio = l > r ? r: l,
                Pe.bgScaleRatio = r > l ? r: l,
                l > r ? (e = o > document.body.clientWidth ? document.body.clientWidth: o, t = e * (a / o), i = o < document.body.clientWidth ? (document.body.clientWidth - o) / 2 : 0, n = t < document.body.clientHeight ? (document.body.clientHeight - t) / 2 : 0) : (t = a > document.body.clientHeight ? document.body.clientHeight: a, e = t * (o / a), n = a < document.body.clientHeight ? (document.body.clientHeight - a) / 2 : 0, i = e < document.body.clientWidth ? (document.body.clientWidth - e) / 2 : 0),
                v["default"].log("Ensuring canvas..."),
                (0, s["default"])(".maka-canvas").css({
                    width: "100%",
                    height: "100%",
                    left: "0px",
                    top: "0px",
                    position: "absolute"
                }),
                Pe.ratio = {
                    height: l,
                    width: r
                },
                Pe.contentsize = {
                    width: e + "px",
                    height: t + "px",
                    left: i + "px",
                    top: n + "px",
                    position: "absolute"
                }
            }
        },
        {
            key: "scale",
            value: function(e) {
                if ("string" == typeof e && -1 !== e.indexOf("px")) {
                    var t = parseInt(e.substr(0, e.length - 1));
                    return parseInt(Math.round(t * Pe.scaleRatio)) + "px"
                }
                return e = parseInt(Math.round(e * Pe.scaleRatio)),
                e + "px"
            }
        },
        {
            key: "setCommonCSS",
            value: function(e, t) { (0, s["default"])(e).css({
                    width: this.scale(t.w),
                    height: this.scale(t.h),
                    left: this.scale(t.left),
                    top: this.scale(t.right),
                    rotate: t.rotate,
                    opacity: t.opacity,
                    display: "absolute"
                })
            }
        },
        {
            key: "showPPT",
            value: function() {
                if (this.preload.hide(), this.currentPageIndex = 0, window.Config.isAppNormalMode()) {
                    var e = d["default"].getPage(0);
                    Pe.showPageInAnimation(e)
                }
                Pe.showBackgroundMusic(),
                window.projectVersion && 0 != window.projectVersion.viplevel && Pe.showBottomMenu(),
                Pe.onPageChange(0),
                (0, s["default"])(".maka-page-0").show(),
                (0, s["default"])(".maka-pages").show(),
                U["default"].send("pageVisit", Pe.currentPageIndex),
                Pe.showAdarea(),
                Pe.showArrow(),
                Pe.option.pageChangeCallback && Pe.option.pageChangeCallback(),
                Pe.ensurePages([1])
            }
        },
        {
            key: "buildBackgroundMusic",
            value: function() {
                window.Config.isAppNormalMode() && d["default"].getMusicId() && !
                function() {
                    var e = d["default"].getMusic(),
                    t = (0, s["default"])("<audio loop src = " + window.Config.getMusicUrl(e) + ' id="bgmedia" autoplay preload></audio>'); (0, s["default"])(".maka-canvas").append(t),
                    Pe.audioBackground = t[0],
                    Pe.audioBackground.play(),
                    he["default"].setBgMusic(Pe.audioBackground);
                    var i = d["default"].contentJSON[0] && d["default"].contentJSON[0].content && d["default"].contentJSON[0].content[0] && d["default"].contentJSON[0].content[0].type;
                    document.addEventListener("WeixinJSBridgeReady",
                    function() {
                        if ("phone_call" === i) Pe.audioEffect.src = "http://res2.maka.im/cdn/maka/release/music/phonecall_music2.mp3",
                        Pe.audioEffect.loop = !0,
                        he["default"].playEffect();
                        else if ("phoneSound" === i) {
                            var e = d["default"].contentJSON[0].content[0].sound;
                            Pe.audioEffect.src = window.Config.getMusicUrl({
                                id: e,
                                version: 1
                            }),
                            Pe.audioEffect.loop = !1,
                            he["default"].playEffect()
                        } else he["default"].playBg()
                    },
                    !1),
                    "phone_call" === i || "phoneSound" == i ? window.mkaudio = Pe.audioEffect: window.mkaudio = Pe.audioBackground;
                    var n = function o() {
                        setTimeout(function() {
                            return he["default"].isEffectPlaying() ? void he["default"].playEffect() : (Pe.toggleBackgroundMusic(!0), Pe.audioBackground.paused || (0, s["default"])("body").off("touchstart touchmove touchend", o), void v["default"].log("Start play music for user......."))
                        })
                    }; (0, s["default"])("body").on("touchstart touchmove touchend", n)
                } ()
            }
        },
        {
            key: "showBackgroundMusic",
            value: function() {
                var e = d["default"].getMusicId();
                if (e && (Pe.musicDom = (0, s["default"])("<img/>"), Pe.musicDom.css({
                    width: Pe.scale(60),
                    height: Pe.scale(60),
                    right: Pe.scale(30),
                    top: Pe.scale(30),
                    opacity: 1,
                    position: "absolute",
                    display: "block",
                    "z-index": Pe.pageZLevel.music
                }), Pe.isMusicOn = !0, Pe.musicDom.attr({
                    src: A["default"]
                }), (0, s["default"])(".maka-pages").append(Pe.musicDom), window.Config.isAppNormalMode())) {
                    var t = new g["default"](Pe.musicDom.get(0));
                    t.on("tap", Pe.toggleBackgroundMusic)
                }
            }
        },
        {
            key: "showBottomMenu",
            value: function() {
                var e = d["default"].getBottomMenu();
                if (e && e.menuOpen) {
                    var t = e.bottomMenuColor,
                    i = e.bottomMenu;
                    Pe.menuDom = (0, s["default"])("<div></div>"),
                    Pe.menuDom.css({
                        width: "100%",
                        height: Pe.scale(90),
                        left: 0,
                        bottom: 0,
                        opacity: 1,
                        position: "absolute",
                        zIndex: Pe.pageZLevel.music,
                        backgroundColor: t.bg,
                        color: t.font,
                        display: "-webkit-flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        WebkitJustifyContent: "space-around",
                        WebkitAlignItems: "center",
                        borderTop: "1px solid rgba(0, 0, 0, 0.1)"
                    });
                    var n = "ontouchend" in document ? "touchstart": "click",
                    o = function(e) {
                        var t = i[e],
                        o = void 0;
                        "url" === t.type ? (o = (0, s["default"])("\n          <div>\n            <span>" + t.name + "<span>\n          </div>"), o.on(n,
                        function() {
                            var e = void 0;
                            e = t.url.indexOf("http://") >= 0 || t.url.indexOf("https://") >= 0 ? t.url: "http://" + t.url,
                            window.location.href = e
                        })) : (o = (0, s["default"])("\n          <div>\n            <span>" + t.name + "</span>\n          </div>"), o.on(n,
                        function() {
                            Pe.showPage(t.link)
                        })),
                        o.css({
                            flex: 1,
                            WebkitFlex: 1,
                            cursor: "pointer",
                            textAlign: "center",
                            fontSize: 14,
                            borderLeft: 0 == e ? "none": "1px solid rgba(0, 0, 0, 0.1)",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            padding: "0 5px"
                        }),
                        Pe.menuDom.append(o);
                        var a = (0, s["default"])(".maka-Arrow");
                        a.css({
                            visibility: "hidden"
                        })
                    };
                    for (var a in i) o(a); (0, s["default"])(".maka-pages").append(Pe.menuDom)
                }
            }
        },
        {
            key: "toggleBackgroundMusic",
            value: function(e) {
                window.Config.isAppNormalMode() && (e === !0 ? Pe.isMusicOn = e: Pe.isMusicOn = !Pe.isMusicOn, Pe.musicDom && (Pe.isMusicOn ? (Pe.musicDom.attr({
                    src: A["default"]
                }), he["default"].playBg()) : (Pe.musicDom.attr({
                    src: y["default"]
                }), he["default"].pauseBg(), U["default"].send("closeMusic"))), Pe.audioBackground.paused && (Pe.isMusicOn = !1, Pe.musicDom && Pe.musicDom.attr({
                    src: y["default"]
                })))
            }
        },
        {
            key: "ensurePages",
            value: function(e, t) {
                if (e && 0 !== e.length) {
                    t = t ||
                    function() {};
                    var i = [],
                    n = [];
                    Pe.firstEnsurePagesStarted || (Pe.preload.increaseSteps(1), v["default"].runAsync(function() {
                        Pe.preload.increaseProgress()
                    })),
                    e.forEach(function(e) {
                        if (d["default"].hasPage(e)) {
                            var t = d["default"].getPage(e);
                            t.index = e;
                            var n = Pe.lazyLoader.preparePage(t);
                            if (void 0 !== n.length) {
                                if (!Pe.firstEnsurePagesStarted) {
                                    Pe.preload.increaseSteps(n.length);
                                    for (var o = 0; o < n.length; o++) n[o].then(function(e) {
                                        Pe.preload.increaseProgress()
                                    })
                                }
                                i.push({
                                    page: t,
                                    promiseArray: n
                                })
                            }
                        }
                    }),
                    i.forEach(function(e) {
                        var t = new c["default"](function(t) {
                            c["default"].all(e.promiseArray).then(function() {
                                Pe.renderPage(e.page),
                                t(e.page)
                            })
                        });
                        Pe.firstEnsurePagesStarted || (Pe.preload.increaseSteps(1), t = t.then(function() {
                            Pe.preload.increaseProgress(1)
                        })),
                        n.push(t)
                    }),
                    c["default"].all(n).then(function() {
                        t()
                    })["catch"](v["default"].log),
                    Pe.firstEnsurePagesStarted = !0
                }
            }
        },
        {
            key: "ensureAllPages",
            value: function(e) {
                for (var t = [], i = d["default"].getPageLength(), n = 0; i > n; n++) t.push(n);
                this.ensurePages(t, e)
            }
        },
        {
            key: "showPreviousPage",
            value: function() {
                var e = d["default"].getPage(Pe.currentPageIndex);
                if (!Ae["default"].isNeedStopAni(e.effect) || !window.pageEffectRuning) {
                    if (v["default"].log("Decide to show previous page, currentPageIndex:" + Pe.currentPageIndex), Pe.currentPageIndex > 0) {
                        var t, i, n, o, a, r, l, c = function() {
                            U["default"].send("pageVisit", Pe.currentPageIndex - 1),
                            U["default"].send("pageLeave", Pe.currentPageIndex),
                            t = "maka-page-" + Pe.currentPageIndex,
                            i = (0, s["default"])("." + t),
                            n = Pe.currentPageIndex - 1;
                            var e = Pe.currentPageIndex;
                            if (o = "maka-page-" + n, a = (0, s["default"])("." + o), r = (0, s["default"])(".maka-page-" + (Pe.currentPageIndex + 1)), r && r.length > 0 && r.css({
                                display: "none"
                            }), window.Config.isAppNormalMode()) {
                                var c = d["default"].getPage(Pe.currentPageIndex);
                                if (c.swipeDownLock) return {
                                    v: void 0
                                };
                                Pe.panDownAnimations || c.swipeDownLock || Pe.initpanDownAnimations(c),
                                a.show(),
                                Pe.animateToPrevPage(function() {
                                    var t = d["default"].getPage(e),
                                    o = d["default"].getPage(n);
                                    i.hide(),
                                    a.show(),
                                    Pe.hidePageElement(t),
                                    Pe.showPageInAnimation(o),
                                    Pe.showAdarea(),
                                    Pe.showArrow()
                                })
                            } else i.hide(),
                            a.show(),
                            l = d["default"].getPage(n),
                            Pe.showPageInAnimation(l);
                            Pe.onPageChange(n, e),
                            Pe.currentPageIndex = n,
                            Pe.option.pageChangeCallback && Pe.option.pageChangeCallback()
                        } ();
                        if ("object" == typeof c) return c.v
                    }
                    Pe.showAdarea(),
                    Pe.showArrow()
                }
            }
        },
        {
            key: "showPage",
            value: function(e) {
                e === Pe.currentPageIndex || e >= d["default"].getPageLength() || Pe.ensurePages([e],
                function() {
                    var t = e,
                    i = Pe.currentPageIndex,
                    n = (0, s["default"])(".maka-page-" + t),
                    o = (0, s["default"])(".maka-page-" + i);
                    Ae["default"].clearAnimation(n),
                    n.hide(),
                    o.hide(),
                    n.css({
                        opacity: 1
                    }),
                    n.fadeIn(function() {
                        var n = d["default"].getPage(t);
                        Pe.showPageInAnimation(n);
                        var o = d["default"].getPage(i);
                        Pe.hidePageElement(o),
                        Pe.currentPageIndex = e,
                        Pe.option.pageChangeCallback && Pe.option.pageChangeCallback(),
                        Pe.showAdarea(),
                        Pe.showArrow()
                    }),
                    Pe.panUpAnimations = null,
                    Pe.panDownAnimations = null
                })
            }
        },
        {
            key: "showNextPage",
            value: function(e) {
                var t = d["default"].getPage(Pe.currentPageIndex);
                Ae["default"].isNeedStopAni(t.effect) && window.pageEffectRuning || (v["default"].log("Decide to show next page, currentPageIndex:" + Pe.currentPageIndex), Pe.hasNextPage() ? !
                function() {
                    var t = d["default"].getPageLength(),
                    i = Pe.currentPageIndex,
                    n = (i + 1) % t;
                    Pe.ensurePages([n],
                    function() {
                        U["default"].send("pageVisit", n),
                        U["default"].send("pageLeave", i);
                        var t = (0, s["default"])(".maka-page-" + n),
                        o = (0, s["default"])(".maka-page-" + i);
                        if (window.Config.isAppNormalMode()) {
                            var a = d["default"].getPage(i);
                            if (a.swipeUpLock) return;
                            Pe.panUpAnimations || a.swipeUpLock || Pe.initpanUpAnimations(a),
                            t.show(),
                            Pe.animateToNextPage(function() {
                                var e = d["default"].getPage(i),
                                a = d["default"].getPage(n);
                                o.hide(),
                                t.show(),
                                Pe.hidePageElement(e),
                                Pe.showPageInAnimation(a),
                                Pe.showAdarea(),
                                Pe.showArrow(),
                                setTimeout(function() {
                                    Pe.ensurePages([n + 1, n + 2, n + 3])
                                },
                                20),
                                Pe.panUpAnimations = null
                            })
                        } else {
                            o.hide(),
                            t.show();
                            var r = d["default"].getPage(Pe.currentPageIndex);
                            Pe.showPageInAnimation(r),
                            Pe.ensurePages([n + 1, n + 2, n + 3])
                        }
                        Pe.onPageChange(n, i),
                        Pe.currentPageIndex = n,
                        Pe.showAdarea(),
                        Pe.showArrow(),
                        Pe.option.pageChangeCallback && Pe.option.pageChangeCallback(),
                        e && e()
                    })
                } () : this.option.lastCallback && this.option.lastCallback())
            }
        },
        {
            key: "onPageChange",
            value: function(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? -1 : arguments[1];
                Pe.pageChangeHandlers.map(function(i) {
                    i(e, t)
                })
            }
        },
        {
            key: "hasNextPage",
            value: function() {
                return Pe.currentPageIndex < d["default"].getPageLength() - 1
            }
        },
        {
            key: "getCurrentPageIndex",
            value: function() {
                return Pe.currentPageIndex
            }
        },
        {
            key: "showAdarea",
            value: function() {
                if (window.Config.isAppNormalMode()) {
                    var e = (0, s["default"])(".maka-adArea"),
                    t = 100;
                    Pe.currentPageIndex === d["default"].getPageLength() - 1 ? (e.fadeIn(), v["default"].log("show"), "free_user" === window.projectVersion.viplevel && v["default"].parentPost({
                        type: "showAD"
                    }), (0, s["default"])(".maka-adArea").unbind(), (0, s["default"])(".maka-adArea").on("click",
                    function() {
                        U["default"].send("makaAD", t)
                    })) : (v["default"].parentPost({
                        type: "hideAD"
                    }), e.hide(), v["default"].log("hide"))
                }
            }
        },
        {
            key: "showArrow",
            value: function() {
                var e = (0, s["default"])(".maka-Arrow"),
                t = d["default"].getPage(Pe.currentPageIndex);
                t.MWChains && t.MWChains.nextPage && !t.MWChains.nextPage.done ? e.hide() : t.swipeUpLock || t.swipeDownLock || Pe.currentPageIndex === d["default"].getPageLength() - 1 ? e.hide() : e.show()
            }
        },
        {
            key: "hideArrow",
            value: function() {
                var e = (0, s["default"])(".maka-Arrow");
                e.hide()
            }
        },
        {
            key: "hidePageElement",
            value: function(e) {
                window.Config.isAppNormalMode() && e.content.forEach(function(e) {
                    "video" === e.type ? e.ele.removeSrc() : "charts" === e.type ? e.dom.hide() : Ce["default"].stopAnimation(e)
                })
            }
        },
        {
            key: "showPageInAnimation",
            value: function(e) {
                window.Config.isAppNormalMode() && e.content.forEach(function(e) {
                    Ce["default"].actAnimation(e),
                    e.showCallback && e.showCallback(),
                    "charts" === e.type && (e.chartElement.render(), e.dom.fadeIn()),
                    "video" === e.type && e.ele.setSrc()
                })
            }
        },
        {
            key: "animateToNextPage",
            value: function(e) {
                var t = Pe.panUpAnimations ? Pe.panUpAnimations.length: 1,
                i = Ae["default"].debouncedCallback(e, t);
                Pe.preUp || (Pe.preUp = {});
                var n = function(e) {
                    var t = Pe.currentPageIndex;
                    Pe.preUp[t + "" + e] = Pe.panUpAnimations[e],
                    Pe.panUpAnimations[e].finish(function() {
                        delete Pe.preUp[t + "" + e],
                        i()
                    })
                };
                for (var o in Pe.panUpAnimations) n(o);
                Pe.panUpAnimations = null,
                Pe.panDownAnimations = null
            }
        },
        {
            key: "animateToPrevPage",
            value: function(e) {
                var t = Pe.panDownAnimations ? Pe.panDownAnimations.length: 1,
                i = Ae["default"].debouncedCallback(e, t);
                Pe.preDown || (Pe.preDown = {});
                var n = function(e) {
                    var t = Pe.currentPageIndex;
                    Pe.preDown[t + "" + e] = Pe.panDownAnimations[e],
                    Pe.panDownAnimations[e].finish(function() {
                        delete Pe.preDown[t + "" + e],
                        i()
                    })
                };
                for (var o in Pe.panDownAnimations) n(o);
                Pe.panUpAnimations = null,
                Pe.panDownAnimations = null
            }
        },
        {
            key: "onSwipeDown",
            value: function() {
                Pe.showPreviousPage()
            }
        },
        {
            key: "onSwipeUp",
            value: function() {
                Pe.showNextPage()
            }
        },
        {
            key: "initpanUpAnimations",
            value: function(e) {
                var t = (0, s["default"])(".maka-page-" + (Pe.currentPageIndex + 1) % d["default"].getPageLength()),
                i = (0, s["default"])(".maka-page-" + Pe.currentPageIndex);
                Pe.panUpAnimations = [],
                Pe.panUpAnimations.push(Ae["default"].getLeaveEffect(e.effect, i)),
                Pe.panUpAnimations.push(Ae["default"].getEntryEffect(e.effect, t))
            }
        },
        {
            key: "initpanDownAnimations",
            value: function(e) {
                e = d["default"].getPage(e.index - 1);
                var t = (0, s["default"])(".maka-page-" + Pe.currentPageIndex),
                i = (0, s["default"])(".maka-page-" + (Pe.currentPageIndex - 1));
                Pe.panDownAnimations = [],
                Pe.panDownAnimations.push(Ae["default"].getBackEffect(e.effect, i)),
                Pe.panDownAnimations.push(Ae["default"].getOutEffect(e.effect, t))
            }
        },
        {
            key: "onPan",
            value: function(e) {
                var t = d["default"].getPage(Pe.currentPageIndex);
                if (!Ae["default"].isNeedStopAni(t.effect) || !window.pageEffectRuning) {
                    var i = document.body.clientHeight,
                    n = e.deltaY / i,
                    o = (0, s["default"])(".maka-page-" + (Pe.currentPageIndex + 1));
                    if (! (0 == o.length && Pe.currentPageIndex < d["default"].getPageLength() - 1)) {
                        var a = (0, s["default"])(".maka-page-" + (Pe.currentPageIndex - 1));
                        e.deltaY < 0 && !Pe.panUpAnimations && Pe.hasNextPage() && !e.isFinal && !t.swipeUpLock && Pe.initpanUpAnimations(t),
                        e.deltaY > 0 && !Pe.panDownAnimations && Pe.currentPageIndex > 0 && !e.isFinal && !t.swipeDownLock && Pe.initpanDownAnimations(t),
                        n > 1 ? n = 1 : -1 > n && (n = -1);
                        var r = e.changedPointers[0].clientX < 4 || e.changedPointers[0].clientX > document.body.clientWidth - 4,
                        l = e.changedPointers[0].clientY < 4 || e.changedPointers[0].clientY > document.body.clientHeight - 4;
                        if ((r || l) && (console.log(e.changedPointers[0].clientX + "x" + document.body.clientWidth + "y" + e.changedPointers[0].clientY), this.hammerPages.stop(), e.isFinal = !0), e.isFinal) if (0 > n) if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) console.log("showNextPage", window.top),
                        Pe.postMsg({
                            type: "pan_nextPage"
                        }),
                        Pe.showNextPage();
                        else {
                            for (var c in Pe.panUpAnimations) Pe.panUpAnimations[c].rollback();
                            Pe.panUpAnimations = null
                        } else if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) console.log("showPreviousPage", window.top),
                        Pe.postMsg({
                            type: "pan_prevPage"
                        }),
                        Pe.showPreviousPage();
                        else {
                            for (var c in Pe.panDownAnimations) Pe.panDownAnimations[c].rollback();
                            Pe.panDownAnimations = null
                        } else if (0 > n && -.1 > n && !t.swipeUpLock) Pe.ensurePages([Pe.currentPageIndex + 1],
                        function() {
                            o.show();
                            for (var e in Pe.panUpAnimations) Pe.panUpAnimations[e].setValue( - n);
                            for (var e in Pe.panDownAnimations) Pe.panDownAnimations[e].setValue(0)
                        });
                        else if (n > 0 && n > .1 && !t.swipeDownLock) {
                            a.show();
                            for (var c in Pe.panDownAnimations) Pe.panDownAnimations[c].setValue(n);
                            for (var c in Pe.panUpAnimations) Pe.panUpAnimations[c].setValue(0)
                        }
                    }
                }
            }
        },
        {
            key: "rotate",
            value: function(e) {
                return "rotate(" + e + "deg)"
            }
        },
        {
            key: "ms",
            value: function(e) {
                return e + "ms"
            }
        },
        {
            key: "addpx",
            value: function(e) {
                return parseInt(e) + "px"
            }
        },
        {
            key: "shadow",
            value: function(e) {
                return "0 0 " + Pe.addpx(e) + " black"
            }
        },
        {
            key: "url",
            value: function(e) {
                return - 1 === e.indexOf("http") ? "http://" + e: e
            }
        },
        {
            key: "renderImg",
            value: function(e) {
                var t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<div></div>");
                t.css({
                    width: Pe.scale(e.w),
                    height: Pe.scale(e.h),
                    left: Pe.scale(e.left),
                    top: Pe.scale(e.top),
                    position: "absolute",
                    opacity: e.opacity,
                    transform: Pe.rotate(e.rotate),
                    cursor: "pointer"
                }),
                e.hasUrl && e.imgUrl && t.on("click",
                function() {
                    var t = void 0;
                    t = e.imgUrl.indexOf("http") >= 0 ? e.imgUrl: "http://" + e.imgUrl,
                    window.open(t)
                });
                var n = window.Config.isAppNormalMode() ? "100% 100%": "contain",
                o = void 0,
                a = void 0,
                r = void 0;
                e.cropData && !window.Config.isGif(e.picid) && window.Config.isAppNormalMode() ? (r = n, o = 0, a = 0) : (r = "auto" === e.inw || 0 === e.inw ? n: Pe.scale(e.inw), o = Pe.scale(e.intop), a = Pe.scale(e.inleft)),
                i.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    borderRadius: Pe.scale(e.borderradius * e.h / 200),
                    boxShadow: Pe.shadow(e.boxshadow),
                    "background-image": "url(" + e.dom.context.src + ")",
                    "background-repeat": "no-repeat",
                    "background-size": r,
                    "background-position": a + " " + o
                });
                var l = (0, s["default"])("<img/>");
                return l.css("opacity", 0),
                l.attr("src", e.dom.context.src),
                i.append(l),
                t.append(i),
                t
            }
        },
        {
            key: "renderText",
            value: function(e) {
                var t = ["_font_2", "_font_5", "_font_6", "_font_7", "_font_11", "_font_15", "_font_19", "_font_20", "_font_31", "_font_36", "_font_37", "_eng_1", "_eng_21"],
                i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>");
                if (e.version >= 21 && n.addClass("no_margin"), i.css({
                    position: "absolute",
                    width: e.w ? Pe.scale(e.w) : "auto",
                    height: e.h && e.version >= 1 ? Pe.scale(e.h) : "auto",
                    top: Pe.scale(e.top),
                    left: Pe.scale(e.left),
                    transform: Pe.rotate(e.rotate),
                    "transform-origin": "center",
                    opacity: e.opacity
                }), n.css({
                    width: e.w ? "100%": "auto",
                    height: e.h && e.version >= 1 ? "100%": "auto",
                    color: e.ftcolor,
                    fontSize: Pe.scale(e.ftsize),
                    background: e.bgcolor,
                    textAlign: e.textalign,
                    fontWeight: e.fontbold ? "bold": "normal",
                    textDecoration: e.udl ? "underline": "none",
                    lineHeight: e.lineheight,
                    borderStyle: e["border-style"],
                    borderColor: e["border-color"],
                    borderWidth: Pe.scale(e["border-width"]),
                    fontStyle: e.fontitalic ? "italic": "normal",
                    borderRadius: Pe.scale(e.borderradius * e.height / 200),
                    boxShadow: Pe.shadow(e.boxshadow),
                    wordWrap: "break-word",
                    whiteSpace: "pre-wrap",
                    "-webkit-writing-mode": e.writingMode,
                    "writing-mode": e.writingMode
                }), e.fontId && (window.Config.isAppNormalMode() || !e.fontError && -1 == t.indexOf(e.fontTag)) && n.css({
                    "font-family": e.fontId
                }), e.fontUrl && e.fontVersion && 10 == e.fontVersion && n.css({
                    "font-family": "maka" + e.fontUrl.replace(/[\/:._]/g, "")
                }), "text" === e.type) {
                    var o;
                    switch (e.textvalign) {
                    case "top":
                        o = 0;
                        break;
                    case "middle":
                        o = e.h / 2 - e.tl / 2;
                        break;
                    case "bottom":
                        o = e.h - e.tl
                    }
                    n.css({
                        marginTop: Pe.scale(o),
                        height: "auto"
                    })
                }
                if (n.append(e.con.replace(/<script.*?>.*?<\/script>/gi, "")), i.append(n), "text" === e.type) {
                    var a = n.get(0).firstChild;
                    for (v["default"].log(a.toString()); a.hasChildNodes();) parseInt(a.style.fontSize) && (a.style.fontSize = Pe.scale(parseInt(a.style.fontSize))),
                    a = a.firstChild
                }
                return i
            }
        },
        {
            key: "renderShape",
            value: function(e) {
                var t = new J["default"](e, this.scale);
                return t.getElement()
            }
        },
        {
            key: "renderButton",
            value: function(e) {
                var t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<a></a>");
                t.css({
                    position: "absolute",
                    width: Pe.scale(e.w),
                    height: Pe.scale(e.height),
                    top: Pe.scale(e.top),
                    left: Pe.scale(e.left),
                    transform: Pe.rotate(e.rotate)
                }),
                i.css({
                    position: "absolute",
                    width: "100%",
                    color: e.ftcolor || "#585858",
                    fontSize: Pe.scale(e.ftsize),
                    lineHeight: e.lineheight,
                    opacity: e.opacity,
                    borderStyle: e["border-style"],
                    borderColor: e["border-color"],
                    borderWidth: Pe.scale(e["border-width"]),
                    background: e.bgcolor,
                    textAlign: e.textalign,
                    borderRadius: Pe.scale(e.borderradius * e.height / 200),
                    boxShadow: Pe.shadow(e.boxshadow),
                    wordWrap: "break-word"
                }),
                i.append(e.con);
                var o = i.get(0).firstChild;
                return o && o.hasChildNodes() && (parseInt(o.style.fontSize) && (o.style.fontSize = Pe.scale(parseInt(o.style.fontSize))), o = o.firstChild),
                e.url ? (n.attr({
                    href: Pe.url(e.url)
                }), n.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }), n.append(i), t.append(n)) : t.append(i),
                t
            }
        },
        {
            key: "renderSpecialButton",
            value: function(e) {
                var t = new O["default"](e, Pe.scale);
                return t.getElement()
            }
        },
        {
            key: "renderPhoneCallButton",
            value: function(e) {
                var t = new H["default"](e, Pe.scale);
                return t.getDom()
            }
        },
        {
            key: "renderFormList",
            value: function(e) {
                var t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<div></div>"),
                n = [];
                return t.css({
                    position: "absolute",
                    width: Pe.scale(e.w),
                    height: Pe.scale(e.h),
                    top: Pe.scale(e.top),
                    left: Pe.scale(e.left)
                }),
                e.qlist.map(function(i) {
                    var o = (0, s["default"])("<input>");
                    o.css({
                        border: "2px solid " + e.formcolor,
                        height: Pe.scale(80),
                        marginBottom: Pe.scale(20),
                        fontSize: Pe.scale(30),
                        color: e.ftColor
                    }),
                    o.attr({
                        type: "text",
                        "class": "form-input",
                        placeholder: i.name,
                        name: i.id
                    }),
                    n.push(o),
                    t.append(o)
                }),
                i.css({
                    height: Pe.scale(80),
                    fontSize: Pe.scale(30),
                    marginTop: Pe.scale(20),
                    lineHeight: Pe.scale(80),
                    background: e.formcolor
                }),
                i.attr({
                    "class": "form-submit"
                }),
                i.append(e.btn_name || window.Config.language.submitForm),
                t.append(i),
                i.on("click",
                function() {
                    var t = {};
                    t.formdata = {};
                    var o = (0, s["default"])("<div></div>"),
                    a = (0, s["default"])('<img src="' + window.Config.getImgOss("images/sending.gif") + '"/>'),
                    r = (0, s["default"])("<p>" + window.Config.language.submiting + "</p>");
                    o.css({
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: "0px",
                        left: "0px",
                        zIndex: "999",
                        background: "rgba(42,50,65,1)"
                    }),
                    a.css({
                        position: "absolute",
                        width: Pe.scale("140"),
                        top: "30%",
                        left: "50%",
                        marginLeft: Pe.scale("-70")
                    }),
                    r.css({
                        position: "absolute",
                        margin: "0",
                        width: "80%",
                        top: "50%",
                        left: "10%",
                        textAlign: "center",
                        color: "white",
                        fontSize: Pe.scale("40")
                    });
                    var l = window.Config.getProjectId();
                    t.formid = l + "_" + e.formid;
                    for (var c = !0,
                    u = !0,
                    d = 0,
                    f = 0; f < e.qlist.length; f++) {
                        d++;
                        var p = e.qlist[f];
                        if (n[f]) {
                            var h = n[f].val().replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                            if ("" === h) {
                                if (p.requiredFlag || void 0 === p.requiredFlag && 2 > f) {
                                    c = !1,
                                    r.html(window.Config.language.pleaseInput + p.name),
                                    o.append(r),
                                    n[f].css("border", "2px solid red");
                                    break
                                }
                            } else {
                                if (u = !1, 1 == p.type) {
                                    var g = /^1\d{10}$/,
                                    m = /^0\d{2,3}-?\d{7,8}$/;
                                    c = g.test(h) || m.test(h)
                                } else if (2 == p.type) {
                                    var v = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                                    c = v.test(h)
                                }
                                if (!c) {
                                    r.html(p.name + window.Config.language.wrongFormat),
                                    o.append(r),
                                    n[f].css("border", "2px solid red");
                                    break
                                }
                            }
                            n[f].css("border", "2px solid " + e.formcolor)
                        }
                    }
                    if (u && c && (c = !1, r.html(window.Config.language.emptyForm), o.append(r)), c) {
                        for (var f in n) t.formdata[n[f].attr("name")] = n[f].val();
                        o.append(a),
                        o.append(r),
                        s["default"].ajax({
                            type: "post",
                            url: window.Config.postFormUrl + window.Config.getProjectId() + "_" + e.formid,
                            dataType: "html",
                            cache: !1,
                            data: t,
                            success: function() {
                                i.text(window.Config.language.submited),
                                i.css({
                                    background: "gray"
                                }),
                                i.unbind("click"),
                                setTimeout(function() {
                                    r.html(window.Config.language.submitSuccess + "<br>" + e.sucmsg),
                                    a.attr("src", window.Config.getImgOss("images/sendsucess.png")),
                                    o.css({
                                        background: "rgba(0,0,0,0.8)"
                                    }),
                                    o.show()
                                },
                                200)
                            },
                            error: function() {
                                r.html(window.Config.language.submitFail),
                                o.append(r),
                                setTimeout(function() {
                                    o.remove()
                                },
                                2e3)
                            }
                        })
                    } else for (var f = d; f < n.length; f++) n[f].css("border", "2px solid " + e.formcolor); (0, s["default"])(".maka-canvas").append(o),
                    Pe.hideArrow(),
                    o.on("mousedown touchstart",
                    function(e) {
                        e.preventDefault(),
                        o.unbind(),
                        Pe.showArrow(),
                        o.remove()
                    })
                }),
                t
            }
        },
        {
            key: "renderComparison",
            value: function(e) {
                var t, i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>"),
                o = (0, s["default"])("<div></div>");
                i.css({
                    position: "absolute",
                    width: Pe.scale(e.width),
                    height: Pe.scale(e.height),
                    top: Pe.scale(e.top)
                }),
                n.css({
                    position: "absolute",
                    width: Pe.scale(e.width),
                    height: Pe.scale(e.height),
                    overflow: "hidden"
                }),
                o.css({
                    position: "absolute",
                    width: Pe.scale(e.width / 2),
                    height: Pe.scale(e.height),
                    overflow: "hidden"
                }),
                e.picdata.map(function(t, i) {
                    switch (i) {
                    case 0:
                        var a = t.inw ? t.inw: e.width,
                        r = t.inleft ? t.inleft: 0,
                        l = t.intop ? t.intop: 0; (0, s["default"])(t.dom).css({
                            position: "absolute",
                            width: Pe.scale(a),
                            left: Pe.scale(r),
                            top: Pe.scale(l),
                            userDrag: "none",
                            userSelect: "none"
                        }),
                        n.append(t.dom);
                        break;
                    case 1:
                        var c = t.inw ? t.inw: e.width,
                        u = t.inleft ? t.inleft: 0,
                        d = t.intop ? t.intop: 0; (0, s["default"])(t.dom).css({
                            position: "absolute",
                            width: Pe.scale(c),
                            left: Pe.scale(u),
                            top: Pe.scale(d),
                            userDrag: "none",
                            userSelect: "none"
                        }),
                        o.append(t.dom)
                    }
                }),
                i.append(n),
                i.append(o);
                var a = new g["default"](i.get(0));
                return a.on("panstart",
                function() {
                    t = parseInt(o.get(0).style.width)
                }),
                a.on("pan",
                function(i) {
                    t + i.deltaX < e.width * Pe.scaleRatio && t + i.deltaX > 0 && o.css({
                        width: Pe.addpx(t + i.deltaX)
                    })
                }),
                i
            }
        },
        {
            key: "renderFingerPrint",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>");
                i.css({
                    position: "absolute",
                    width: Pe.scale(e.w),
                    height: Pe.scale(e.h),
                    top: Pe.scale(e.top),
                    left: Pe.scale(e.left)
                }),
                n.css({
                    position: "absolute",
                    width: Pe.scale(e.w),
                    height: Pe.scale(e.h),
                    top: 0,
                    left: 0,
                    userSelect: "none",
                    "-webkit-touch-callout": "none",
                    background: "rgba(0,0,0,0.0)"
                }),
                (0, s["default"])(e.dom).css({
                    position: "absolute",
                    width: Pe.scale(e.inw),
                    top: Pe.scale(e.intop),
                    left: Pe.scale(e.inleft),
                    userSelect: "none",
                    "-webkit-touch-callout": "none"
                }),
                i.append(e.dom),
                i.append(n);
                var o, a = !1,
                r = 0,
                l = n,
                c = function() {
                    e.unlocking = !0,
                    r = 0;
                    var n = (0, s["default"])("<div>解锁成功</div>");
                    i.append(n),
                    n.css({
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        position: "absolute",
                        top: "-50%",
                        left: "50%",
                        width: "120px",
                        height: "30px",
                        margin: "-15px 0 0 -60px",
                        "text-align": "center",
                        "line-height": "30px",
                        "border-radius": "100px",
                        "font-size": "16px"
                    }),
                    setTimeout(function() {
                        n.fadeOut(1e3),
                        a ? (Pe.postMsg({
                            type: "pan_nextPage"
                        }), Pe.showNextPage(), e.unlocking = !1) : (a = !0, t.swipeUpLock = !1, e.unlocking = !1, Pe.postMsg({
                            type: "pan_nextPage"
                        }), Pe.showNextPage())
                    },
                    1500)
                };
                if ("VUT6I6NZ6H2BPG1G3I54" === e.picid) l.on("touchstart mousedown",
                function() {
                    e.unlocking || o || (o = window.setInterval(function() {
                        r += 10,
                        (0, s["default"])(e.dom).css({
                            transform: "scale(" + (1 + r / 1e3) + ")"
                        }),
                        r > 1500 && (clearInterval(o), c())
                    },
                    10))
                }),
                l.on("touchend mouseup",
                function() {
                    1500 > r && (r = 0, (0, s["default"])(e.dom).css({
                        transform: "scale(1)"
                    }), window.clearInterval(o), o = null)
                });
                else {
                    var u = (0, s["default"])('<div class="scanBar"></div>');
                    u.css({
                        position: "absolute",
                        width: Pe.scale(e.w),
                        height: Pe.scale(e.h),
                        bottom: "-5px",
                        left: 0,
                        display: "none",
                        "border-top": "solid 5px rgba(255,255,255,0.3)"
                    }),
                    n.append(u),
                    l.on("touchstart mousedown",
                    function() {
                        o || e.unlocking || (u.show(), u.css({
                            animation: "moveUp 1500ms linear 10ms both"
                        }), o = window.setInterval(function() {
                            r += 10,
                            r > 1500 && (clearInterval(o), c(), u.hide(), u.css({
                                animation: "none"
                            }))
                        },
                        10))
                    }),
                    l.on("touchend mouseup",
                    function() {
                        1500 > r && (r = 0, u.hide(), u.css({
                            animation: "none"
                        }), window.clearInterval(o), o = null)
                    })
                }
                return i
            }
        },
        {
            key: "renderPhoneCall",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = function(i, n) {
                    if (window.Config.isAppNormalMode()) {
                        var o = t.index,
                        a = e;
                        i !== o || a.hasClick ? n == o && he["default"].pauseEffect() : (Pe.audioEffect.src = "http://res2.maka.im/cdn/maka/release/music/phonecall_music2.mp3", Pe.audioEffect.loop = !0, he["default"].playEffect())
                    }
                };
                window.Config.isAppNormalMode() && Pe.pageChangeHandlers.push(i);
                var n = (0, s["default"])("<div></div>"),
                o = (0, s["default"])("<div></div>"),
                a = (0, s["default"])("<div></div>"),
                r = (0, s["default"])("<div></div>");
                if (n.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                    color: "#ffffff"
                }), (0, s["default"])(e.bgDom).css({
                    position: "absolute",
                    width: "100%",
                    left: "0px",
                    top: "0px"
                }), (0, s["default"])(e.phoneInfoDom).css({
                    position: "absolute",
                    right: Pe.scale("90"),
                    top: Pe.scale("560"),
                    width: Pe.scale("53"),
                    height: Pe.scale("80")
                }), (0, s["default"])(e.phoneRemindDom).css({
                    position: "absolute",
                    left: Pe.scale("90"),
                    top: Pe.scale("560"),
                    width: Pe.scale("82"),
                    height: Pe.scale("82")
                }), o.css({
                    top: Pe.scale("650"),
                    position: "relative"
                }), (0, s["default"])(e.phonecallDom).css({
                    width: Pe.scale("126")
                }), a.css({
                    position: "relative",
                    top: Pe.scale("60"),
                    fontSize: Pe.scale("40")
                }), r.css({
                    position: "relative",
                    top: Pe.scale("100"),
                    fontSize: Pe.scale("30")
                }), a.append(e.text1), r.append(e.text2), n.append(e.bgDom), n.append(a), n.append(r), n.append(e.phoneInfoDom), n.append(e.phoneRemindDom), o.append(e.phonecallDom), n.append(o), window.Config.isAppNormalMode()) {
                    var l = new g["default"](e.phonecallDom[0]);
                    l.on("tap",
                    function() {
                        v["default"].log("click phone call"),
                        e.hasClick = !0,
                        t.swipeUpLock = !1,
                        Pe.postMsg({
                            type: "pan_nextPage"
                        }),
                        Pe.showNextPage()
                    })
                }
                return n
            }
        },
        {
            key: "renderGlassBreak",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = function(i) {
                    var n = (0, s["default"])("<div>用力砸我</div>"),
                    a = e,
                    r = t.index;
                    n.css({
                        position: "absolute",
                        color: "white",
                        textAlign: "center",
                        fontSize: Pe.scale("40"),
                        zIndex: "999",
                        width: "100%",
                        height: "100%",
                        paddingTop: "50%"
                    }),
                    i !== r || a.hasBreak || (o.append(n), setTimeout(function() {
                        n.remove()
                    },
                    2e3))
                };
                Pe.pageChangeHandlers.push(i);
                var n, o = (0, s["default"])("<div></div>");
                if (o.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }), e.imgDom.map(function(e, t) {
                    switch (n = e, t) {
                    case 0:
                        (0, s["default"])(n).css({
                            top: "0px",
                            left: "0px"
                        });
                        break;
                    case 1:
                        (0, s["default"])(n).css({
                            top: Pe.scale("30"),
                            left: Pe.scale("-200")
                        });
                        break;
                    case 2:
                        (0, s["default"])(n).css({
                            top: Pe.scale("400"),
                            left: Pe.scale("-180")
                        });
                        break;
                    case 3:
                        (0, s["default"])(n).css({
                            top: Pe.scale("400"),
                            left: "0px"
                        });
                        break;
                    case 4:
                        (0, s["default"])(n).css({
                            top: Pe.scale("140"),
                            left: Pe.scale("260")
                        })
                    } (0, s["default"])(n).css({
                        position: "absolute",
                        width: Pe.scale("640"),
                        opacity: 0
                    }),
                    (0, s["default"])(n).attr({
                        "class": "glass" + t
                    }),
                    o.append(n)
                }), window.Config.isAppNormalMode()) {
                    var a = 0,
                    r = new g["default"](o.get(0));
                    r.on("tap",
                    function() {
                        5 > a && (Pe.audioEffect.src = window.Config.glassBreakVoice, Pe.audioEffect.play()),
                        (0, s["default"])(o).children(".glass" + a).css({
                            opacity: 1
                        }),
                        ++a > 4 && (e.hasBreak = !0, window.setTimeout(function() {
                            t.swipeUpLock = !1,
                            Pe.postMsg({
                                type: "pan_nextPage"
                            }),
                            Pe.showNextPage()
                        },
                        350))
                    })
                }
                return o
            }
        },
        {
            key: "renderSlide",
            value: function(e) {
                var t, i, n, o = (0, s["default"])('<div class="swiper-container" style="z-index: 0"></div>'),
                a = (0, s["default"])("<ul></ul>");
                return o.css({
                    position: "absolute",
                    width: e.width ? Pe.scale(e.width) : Pe.scale(e.w),
                    height: e.height ? Pe.scale(e.height) : Pe.scale(e.h),
                    left: Pe.scale(e.left),
                    top: Pe.scale(e.top),
                    overflow: "hidden"
                }),
                o.append(a),
                e.cb = function() {
                    e.slider = a.lightSlider({
                        item: 1,
                        slideMove: 1,
                        autoWidth: !0,
                        speed: 600,
                        loop: !0,
                        slideMargin: 0,
                        enableTouch: !0,
                        enableDrag: !0,
                        controls: !1
                    })
                },
                e.data.map(function(o) {
                    t = (0, s["default"])("<li></li>");
                    var r = (0, s["default"])("<div></div>"); (0, s["default"])(o.imgDom).css({
                        position: "absolute",
                        width: Pe.scale(o.inw),
                        height: Pe.scale(o.inh),
                        left: Pe.scale(o.inleft),
                        top: Pe.scale(o.intop)
                    }),
                    t.css({
                        position: "relative",
                        width: e.width ? Pe.scale(e.width) : Pe.scale(e.w),
                        height: e.height ? Pe.scale(e.height) : Pe.scale(e.h),
                        overflow: "hidden",
                        background: "#ffffff",
                        lineHeight: "1.5"
                    }),
                    r.css({
                        position: "absolute",
                        overflow: "hidden",
                        width: Pe.scale(e.picWidth),
                        height: Pe.scale(e.picHeight)
                    }),
                    r.append(o.imgDom),
                    t.append(r),
                    o.titleText && (i = (0, s["default"])("<div></div>"), i.css({
                        position: "absolute",
                        width: Pe.scale(o.titleText.width),
                        left: Pe.scale(o.titleText.left),
                        top: Pe.scale(o.titleText.top),
                        fontSize: Pe.scale(o.titleText.fontsize),
                        lineHeight: o.titleText.lineheight,
                        color: o.titleText.fontcolor
                    }), i.append(o.titleText.con), t.append(i)),
                    o.contentText && (n = (0, s["default"])("<div></div>"), o.contentText.opacity ? n.css({
                        position: "absolute",
                        width: "100%",
                        top: Pe.scale(o.contentText.top),
                        fontSize: Pe.scale(o.contentText.fontsize),
                        lineHeight: o.contentText.lineheight,
                        color: o.contentText.fontcolor,
                        textAlign: "center",
                        background: "black",
                        opacity: o.contentText.opacity
                    }) : n.css({
                        position: "absolute",
                        width: Pe.scale(o.contentText.width),
                        left: Pe.scale(o.contentText.left),
                        top: Pe.scale(o.contentText.top),
                        fontSize: Pe.scale(o.contentText.fontsize),
                        lineHeight: o.contentText.lineheight,
                        color: o.contentText.fontcolor
                    }), n.append(o.contentText.con), t.append(n)),
                    a.append(t)
                }),
                e.slider = Pe.slide,
                o
            }
        },
        {
            key: "renderChart",
            value: function(e) {
                var t = void 0;
                return t = "pie" !== e.content.type ? new C["default"](e, Pe.scale) : new I["default"](e, Pe.scale),
                e.chartElement = t,
                e.chartElement.render(),
                t.getElement()
            }
        },
        {
            key: "renderEraser",
            value: function(e, t) {
                var i = new D["default"](e, Pe, t);
                return i.getDom()
            }
        },
        {
            key: "renderCountDown",
            value: function(e, t) {
                var i = new z["default"](e, Pe.scale);
                return i.getDom()
            }
        },
        {
            key: "renderLinkButton",
            value: function(e, t) {
                var i = new V["default"](e, Pe.scale);
                return i.getDom()
            }
        },
        {
            key: "renderExamination",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = new G["default"](e, Pe.scale, Pe, t);
                return i.getDom()
            }
        },
        {
            key: "renderAnswer",
            value: function(e, t) {
                var i = new Z["default"](e, Pe.scale, Pe, d["default"].contentJSON);
                return i.getDom()
            }
        },
        {
            key: "renderExamConfirm",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = new _["default"](e, t, Pe.scale, Pe);
                return i.getDom()
            }
        },
        {
            key: "renderExamChoice",
            value: function(e, t) {
                var i = new ee["default"](e, Pe.scale, Pe);
                return i.getDom()
            }
        },
        {
            key: "renderPuzzle",
            value: function(e, t, i) {
                t.swipeUpLock = !0,
                t.swipeDownLock = !0;
                var n = new window.Puzzle(e, t, i);
                return n.getDom()
            }
        },
        {
            key: "renderVote",
            value: function(e, t, i) {
                var n = new ie["default"](e, i);
                return n.getDom()
            }
        },
        {
            key: "renderRelay",
            value: function(e, t, i) {
                var n = new oe["default"](e, i);
                return n.getDom()
            }
        },
        {
            key: "renderNewForm",
            value: function(e, t, i) {
                var n = new re["default"](e, i);
                return n.getDom()
            }
        },
        {
            key: "renderMap",
            value: function(e, t, i) {
                var n = new le["default"](e, i);
                return n.getDom()
            }
        },
        {
            key: "renderVideo",
            value: function(e, t, i) {
                var n = new W["default"](e, i);
                if (e.ele = n, window.Config.isAppNormalMode()) {
                    var o, a = !1,
                    r = function(e, i) {
                        var n = t.index;
                        e == n ? o = setTimeout(function() {
                            a || e != n || (he["default"].pauseBg(!1), a = !0)
                        },
                        5e3) : (a && (he["default"].resumeBg(), a = !1), o && (clearTimeout(o), o = void 0))
                    };
                    Pe.pageChangeHandlers.push(r)
                }
                return n.getDom()
            }
        },
        {
            key: "renderPhoneSound",
            value: function(e, t, i) {
                var n = new ue["default"](e, i, Pe.bgScaleRatio),
                o = function() {
                    v["default"].log("click phone hangup"),
                    t.swipeUpLock = !1,
                    Pe.postMsg({
                        type: "pan_nextPage"
                    }),
                    Pe.showNextPage()
                };
                if (window.Config.isAppNormalMode()) {
                    t.swipeUpLock = !0;
                    var a = function(i, a) {
                        var r = t.index;
                        i !== r || e.hasStart ? a == r && (n.stop(), he["default"].pauseEffect(), Pe.audioEffect.onended = void 0) : (e.hasStart = !0, n.start(), Pe.audioEffect.src = window.Config.getMusicUrl({
                            id: e.sound,
                            version: 1
                        }), Pe.audioEffect.loop = !1, he["default"].playEffect(), Pe.audioEffect.onended = function(e) {
                            o()
                        })
                    };
                    Pe.pageChangeHandlers.push(a);
                    var r = new g["default"](n.getHangUpDom()[0]);
                    r.on("tap", o)
                }
                return n.getDom()
            }
        },
        {
            key: "renderPhoneLock",
            value: function(e, t, i) {
                var n = new fe["default"](e, i, Pe.bgScaleRatio);
                if (window.Config.isAppNormalMode()) {
                    t.swipeUpLock = !0;
                    var o = "touchstart" in document ? "touchstart": "mousedown";
                    n.getEventAreaDom().on(o,
                    function() {
                        n.animateToNext(function() {
                            v["default"].log("click phone Lock"),
                            t.swipeUpLock = !1,
                            Pe.postMsg({
                                type: "pan_nextPage"
                            }),
                            Pe.showNextPage()
                        })
                    })
                }
                return n.getDom()
            }
        },
        {
            key: "renderNewSlide",
            value: function(e, t, i) {
                var n = new me["default"](e, i, t);
                return window.Config.isAppNormalMode() && Pe.pageChangeHandlers.push(n.slideCyclicCall.bind(n)),
                n.getDom()
            }
        },
        {
            key: "renderLotteryTiger",
            value: function(e, t, i) {
                var n = new we["default"](e, i, t);
                return n.getDom()
            }
        },
        {
            key: "renderLotteryScratch",
            value: function(e, t, i) {
                var n = new ye["default"](e, i, t);
                return n.getDom()
            }
        },
        {
            key: "renderInterAction",
            value: function(e, t) {
                var i = new N["default"](e, Pe.scale);
                return i.getDom()
            }
        },
        {
            key: "renderFootballManager",
            value: function(e, t) {
                t.swipeUpLock = !0;
                var i = new window.FootballManager(e, Pe.scale, t);
                return i.getDom()
            }
        },
        {
            key: "postMsg",
            value: function(e) {
                if ("object" == typeof e) {
                    var t = JSON.stringify(e);
                    window.top.postMessage(t, "*")
                }
            }
        },
        {
            key: "renderPage",
            value: function(e) {
                if (e.rendered || e.rendering) {
                    if (e.index - Pe.currentPageIndex == 1) {
                        var t = (0, s["default"])(".maka-page-" + e.index);
                        t && t.length > 0 && t.css({
                            display: "block"
                        })
                    }
                } else {
                    e.rendering = !0,
                    U["default"].send("pageLoadEnd", e.index),
                    v["default"].log("Start rendering page ", e.index);
                    var t = (0, s["default"])('<div class="maka-page maka-page-' + e.index + '"></div>');
                    t.css({
                        "z-index": this.pageZLevel.top - e.index
                    });
                    var i = (0, s["default"])('<div class="page-bg-' + e.index + '"></div>'),
                    n = (0, s["default"])('<div class="maka-eleCanvas maka-eleCanvas-' + e.index + '"></div>');
                    if (n.css(Pe.contentsize), t.css({
                        "z-index": 999 - e.index
                    }), e.index - Pe.currentPageIndex == 1 && t.css({
                        display: "block"
                    }), i.css({
                        position: "absolute",
                        width: 640 * Pe.bgScaleRatio + "px",
                        height: 1008 * Pe.bgScaleRatio + "px",
                        top: "50%",
                        left: "50%",
                        "margin-left": -320 * Pe.bgScaleRatio + "px",
                        "margin-top": -504 * Pe.bgScaleRatio + "px",
                        overflow: "hidden",
                        backgroundColor: e.bgcolor
                    }), e.bgpic && v["default"].trim(e.bgpic) && "0" !== v["default"].trim(e.bgpic)) {
                        if (e.bgpicCropData && !window.Config.isGif(e.bgpic && window.Config.isAppNormalMode()))(0, s["default"])(e.bgDom).css({
                            position: "absolute",
                            width: 640 * Pe.bgScaleRatio + "px",
                            height: 1008 * Pe.bgScaleRatio + "px",
                            top: 0,
                            left: 0,
                            userDrag: "none",
                            userSelect: "none",
                            opacity: e.opacity
                        });
                        else {
                            var o = Pe.bgScaleRatio * e.bgpicwidth * (0, s["default"])(e.bgDom).context.naturalHeight / (0, s["default"])(e.bgDom).context.naturalWidth,
                            a = 1;
                            o < document.body.clientHeight && (a = 1 + (document.body.clientHeight - o) / o),
                            (0, s["default"])(e.bgDom).css({
                                position: "absolute",
                                width: Math.ceil(Pe.bgScaleRatio * e.bgpicwidth * a) + "px",
                                top: Pe.bgScaleRatio * e.bgpictop + "px",
                                left: Pe.bgScaleRatio * e.bgpicleft + "px",
                                userDrag: "none",
                                userSelect: "none",
                                opacity: e.opacity
                            })
                        }
                        i.append(e.bgDom)
                    }
                    t.append(i),
                    t.append(n),
                    (0, s["default"])(".maka-pages").append(t),
                    e.MWChains = {},
                    e.content.map(function(t) {
                        var i = (0, s["default"])("<div></div>");
                        switch (t.type) {
                        case "pic":
                            i = Pe.renderImg(t);
                            break;
                        case "text":
                            i = Pe.renderText(t);
                            break;
                        case "ptext":
                            i = Pe.renderText(t);
                            break;
                        case "footballManager":
                            i = Pe.renderFootballManager(t, e);
                            break;
                        case "pshape":
                            i = Pe.renderShape(t);
                            break;
                        case "btn":
                            i = Pe.renderButton(t);
                            break;
                        case "pButton":
                            i = Pe.renderSpecialButton(t);
                            break;
                        case "eleform":
                            i = Pe.renderFormList(t);
                            break;
                        case "comparison":
                            i = Pe.renderComparison(t);
                            break;
                        case "phone_call":
                            i = Pe.renderPhoneCall(t, e);
                            break;
                        case "fingerPrint":
                            i = Pe.renderFingerPrint(t, e);
                            break;
                        case "glass_break":
                            i = Pe.renderGlassBreak(t, e);
                            break;
                        case "slide":
                            i = Pe.renderSlide(t);
                            break;
                        case "newSlide":
                            i = Pe.renderNewSlide(t, e, Pe.scale);
                            break;
                        case "lotteryTiger":
                            i = Pe.renderLotteryTiger(t, e, Pe.scale);
                            break;
                        case "lotteryScratch":
                            i = Pe.renderLotteryScratch(t, e, Pe.scale);
                            break;
                        case "charts":
                            i = Pe.renderChart(t);
                            break;
                        case "pEraser":
                            i = Pe.renderEraser(t, e);
                            break;
                        case "countDown":
                            i = Pe.renderCountDown(t, e);
                            break;
                        case "interActionButton":
                            i = Pe.renderInterAction(t, e);
                            break;
                        case "phoneCallButton":
                            i = Pe.renderPhoneCallButton(t, e);
                            break;
                        case "linkButton":
                            i = Pe.renderLinkButton(t, e);
                            break;
                        case "video":
                            i = new Pe.renderVideo(t, e, Pe.scale);
                            break;
                        case "examination":
                            i = Pe.renderExamination(t, e);
                            break;
                        case "answer":
                            i = Pe.renderAnswer(t, e);
                            break;
                        case "examConfirm":
                            i = Pe.renderExamConfirm(t, e);
                            break;
                        case "examChoice":
                            i = Pe.renderExamChoice(t, Pe.scale);
                            break;
                        case "puzzle":
                            i = Pe.renderPuzzle(t, e, Pe.scale);
                            break;
                        case "vote":
                            i = Pe.renderVote(t, e, Pe.scale);
                            break;
                        case "relay":
                            i = Pe.renderRelay(t, e, Pe.scale);
                            break;
                        case "newForm":
                            i = Pe.renderNewForm(t, e, Pe.scale);
                            break;
                        case "map":
                            i = Pe.renderMap(t, e, Pe.scale);
                            break;
                        case "phoneSound":
                            i = Pe.renderPhoneSound(t, e, Pe.scale);
                            break;
                        case "phoneLock":
                            i = Pe.renderPhoneLock(t, e, Pe.scale);
                            break;
                        default:
                            Pe.setCommonCSS(t.dom, t)
                        }
                        t.dom = i,
                        n.append(i),
                        t.cb && t.cb()
                    }),
                    Pe.hidePageElement(e),
                    v["default"].log("Finish rendering page ", e.index),
                    e.rendering = !1,
                    e.rendered = !0
                }
            }
        }]),
        e
    } (),
    Se = new Ie;
    window.onresize = Se.ensureCanvas,
    window.oncontextmenu = function(e) {
        return e && e.target && "IMG" == e.target.tagName ? !1 : void 0
    },
    t["default"] = Se,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(10),
    s = n(r),
    l = i(47),
    c = n(l),
    u = function() {
        function e() {
            o(this, e)
        }
        return a(e, [{
            key: "stopAnimation",
            value: function(e) { (0, s["default"])(e, "stop")
            }
        },
        {
            key: "clearAnimation",
            value: function(e) {
                this.stopAnimation(e),
                e.css({
                    transform: ""
                }),
                this.stopAnimation(e)
            }
        },
        {
            key: "isNeedStopAni",
            value: function(e) {
                var t = ["effect-mf"];
                return t.indexOf(e) >= 0
            }
        },
        {
            key: "getLeaveEffect",
            value: function(e, t) {
                var i = null,
                n = window.innerHeight,
                o = window.innerWidth;
                return "toup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromScale: [1, 1],
                    fromOpacity: 1,
                    position: [0, -n, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "moveup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromScale: [1, 1],
                    fromOpacity: 1,
                    position: [0, -n, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "flipup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromScale: [1, 1],
                    fromOpacity: 1,
                    rotation: [Math.PI / 2, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "news" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromOpacity: 1,
                    rotation: [0, 0, 5 * Math.PI],
                    scale: [.6, .6],
                    opacity: 0,
                    manual: !0,
                    easing: "ease",
                    duration: 700
                }) : "scaleup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [.6, .6],
                    opacity: 0,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "carouup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    position: [0, -n, 0],
                    scale: [.6, .6],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "fall" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [ - o / 2, -n / 2, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    position: [0, n, 0],
                    rotation: [0, 0, -.3],
                    manual: !0,
                    easing: "ease",
                    duration: 800
                }) : "effect-sf" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, -n / 2, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [.5, .5],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "effect-mf" === e ? i = new c["default"](t, {
                    transformOrigin: [o / 2, n, 0],
                    perspective: 1500,
                    fromPosition: [0, 0, 0],
                    position: [0, -n, 0],
                    fromRotation: [0, 0, 0],
                    rotation: [90, 0, 0],
                    fromOpacity: 1,
                    opacity: 0,
                    transition: "transform 1100ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 1100ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    duration: 1100
                }) : "effect-fg" === e ? i = new s["default"](t, {
                    position: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    scale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "" !== e && (i = (0, s["default"])(t, {
                    position: [0, -n, 0],
                    fromPosition: [0, 0, 0],
                    scale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                })),
                i
            }
        },
        {
            key: "getEntryEffect",
            value: function(e, t) {
                var i = null,
                n = window.innerHeight,
                o = window.innerWidth;
                return console.log("ety" + e),
                "toup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromScale: [1, 1],
                    fromOpacity: 1,
                    position: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "moveup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, n, 0],
                    position: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "flipup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [ - Math.PI / 2, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "easeIn",
                    duration: 500,
                    delay: 400
                }) : "news" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 0,
                    fromScale: [.6, .6],
                    fromRotation: [0, 0, 5 * Math.PI],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 700,
                    delay: 1e3
                }) : "scaleup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 0,
                    fromScale: [1.2, 1.2],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "carouup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [.9, .9],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    position: [0, 0, 0],
                    scale: [1, 1],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "effect-sf" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [o / 2, n, 0],
                    fromOpacity: 1,
                    opacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    rotation: [0, 0, 0],
                    fromPosition: [0, n, 0],
                    position: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500,
                    dom: t,
                    selfFinish: function(e, t) {
                        var i = this.dom.get(0);
                        i.style.zIndex < 1e3 || (i.style.zIndex = parseInt(i.style.zIndex) - 1e3)
                    },
                    startCallback: function(e, t) {
                        var i = this.dom.get(0);
                        if (! (i.style.zIndex > 1e3)) return i.style.zIndex = parseInt(i.style.zIndex) + 1e3,
                        0
                    }
                }) : "effect-mf" === e ? i = new c["default"](t, {
                    transformOrigin: [o / 2, 0, 0],
                    perspective: 1500,
                    fromPosition: [0, n, 0],
                    position: [0, 0, 0],
                    fromRotation: [ - 90, 0, 0],
                    rotation: [0, 0, 0],
                    fromOpacity: 0,
                    opacity: 1,
                    transition: "transform 1100ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 1100ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    duration: 1100,
                    entry: !0
                }) : "effect-fg" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, n, 0],
                    fromOpacity: 1,
                    scale: [1, 1],
                    position: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500,
                    dom: t,
                    selfFinish: function(e, t) {
                        var i = this.dom.get(0);
                        i.style.zIndex < 1e3 || (i.style.zIndex = parseInt(i.style.zIndex) - 1e3)
                    },
                    startCallback: function(e, t) {
                        var i = this.dom.get(0);
                        if (! (i.style.zIndex > 1e3)) return i.style.zIndex = parseInt(i.style.zIndex) + 1e3,
                        0
                    }
                }) : "" !== e && (i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromOpacity: 1,
                    scale: [1, 1],
                    manual: !0,
                    easing: "easeIn",
                    duration: 500
                })),
                i
            }
        },
        {
            key: "getOutEffect",
            value: function(e, t) {
                var i = null,
                n = window.innerHeight,
                o = window.innerWidth;
                return "toup" === e ? i = (0, s["default"])(t, {
                    position: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "flipup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [Math.PI / 2, 0, 0],
                    manual: !0,
                    easing: "easeIn",
                    duration: 500
                }) : "moveup" === e ? i = (0, s["default"])(t, {
                    position: [0, n, 0],
                    fromPosition: [0, 0, 0],
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "news" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 5 * Math.PI],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [.6, .6],
                    opacity: 0,
                    manual: !0,
                    easing: "ease",
                    duration: 700
                }) : "scaleup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1.2, 1.2],
                    opacity: 0,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "effect-mf" === e ? i = new c["default"](t, {
                    transformOrigin: [o / 2, 0, 0],
                    perspective: 1500,
                    fromPosition: [0, 0, 0],
                    position: [0, n, 0],
                    fromRotation: [0, 0, 0],
                    rotation: [ - 90, 0, 0],
                    fromOpacity: 1,
                    opacity: 0,
                    transition: "transform 1100ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 1100ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    duration: 1100
                }) : "effect-sf" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, n / 2, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [.5, .5],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "" !== e && (i = (0, s["default"])(t, {
                    fromPosition: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    position: [0, 0, 0],
                    scale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                })),
                i
            }
        },
        {
            key: "getBackEffect",
            value: function(e, t) {
                var i = null,
                n = window.innerHeight,
                o = window.innerWidth;
                return "toup" === e ? i = (0, s["default"])(t, {
                    position: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "flipup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromScale: [1, 1],
                    fromRotation: [ - Math.PI / 2, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "easeIn",
                    duration: 500,
                    delay: 400
                }) : "moveup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "news" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 0,
                    fromScale: [.6, .6],
                    fromRotation: [0, 0, 5 * Math.PI],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 700,
                    delay: 1e3
                }) : "scaleup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 0,
                    fromScale: [.6, .6],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1],
                    opacity: 1,
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "carouup" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [.6, .6],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    position: [0, 0, 0],
                    scale: [1, 1],
                    manual: !0,
                    easing: "linear",
                    duration: 500
                }) : "effect-mf" === e ? i = new c["default"](t, {
                    transformOrigin: [o / 2, n, 0],
                    perspective: 1500,
                    fromPosition: [0, -n, 0],
                    position: [0, 0, 0],
                    fromRotation: [90, 0, 0],
                    rotation: [0, 0, 0],
                    fromOpacity: 0,
                    opacity: 1,
                    transition: "transform 1100ms cubic-bezier(0.215, 0.61, 0.355, 1), opacity 1100ms cubic-bezier(0.215, 0.61, 0.355, 1)",
                    duration: 1100,
                    entry: !0
                }) : "effect-fg" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    fromOpacity: 1,
                    opacity: 1,
                    fromScale: [1, 1],
                    scale: [1, 1],
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "effect-sf" === e ? i = (0, s["default"])(t, {
                    transformOrigin: [o / 2, n, 0],
                    fromOpacity: 1,
                    opacity: 1,
                    fromScale: [1, 1],
                    fromRotation: [0, 0, 0],
                    rotation: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    position: [0, 0, 0],
                    manual: !0,
                    easing: "ease",
                    duration: 500
                }) : "" !== e && (i = (0, s["default"])(t, {
                    transformOrigin: [0, 0, 0],
                    fromPosition: [0, -n, 0],
                    fromRotation: [0, 0, 0],
                    fromOpacity: 1,
                    fromScale: [1, 1],
                    position: [0, 0, 0],
                    rotation: [0, 0, 0],
                    scale: [1, 1],
                    manual: !0,
                    easing: "linear",
                    duration: 800
                })),
                console.log(i),
                i
            }
        },
        {
            key: "debouncedCallback",
            value: function(e, t) {
                var i = t;
                return function() {
                    i--,
                    0 === i && e()
                }
            }
        }]),
        e
    } ();
    t["default"] = new u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(3),
    d = n(u),
    f = i(8),
    p = n(f),
    h = i(4),
    g = n(h),
    m = function() {
        function e(t, i, n, a) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.PPT = n,
            this.playBtnClickType = 1,
            this.shareExam = d["default"].isShareExam(a),
            this.initDom(t, i, n)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t, i) {
                var n = {
                    avatarSide: t(140),
                    avatarMarginT: t(50),
                    avatarMarginB: t(44),
                    button: {
                        width: t(592),
                        height: t(100),
                        "font-size": t(28.8),
                        "border-radius": t(12.8),
                        "background-color": "#4A4A4A",
                        bottom: t(80)
                    }
                },
                o = (0, s["default"])("<div></div>"),
                a = (0, s["default"])("<div></div>"),
                r = (0, s["default"])('<div><img class="avatar" src="' + window.Config.getImgOss("images/user.png") + '" alt="用户头像"></div>'),
                l = (0, s["default"])('<div class="examResult"><div class="exam-result"></div></div>'),
                c = (0, s["default"])('<div class="lazyShow">再玩一次</div>'),
                u = (0, s["default"])('<div class="linkIntro"><a href="http://mp.weixin.qq.com/s?__biz=MjM5ODc3OTM5Mw==&mid=204874023&idx=1&sn=d194c99b10e9dbd1c7757a79293927fc#rd">创建我的测试游戏</a></div>');
                o.css({
                    position: "absolute",
                    width: t(e.w),
                    "font-size": t(e.fontSize || 28),
                    top: t(e.top),
                    left: t(e.left),
                    color: e.colorTheme.fontColor
                }),
                r.css({
                    width: n.avatarSide,
                    height: n.avatarSide,
                    margin: n.avatarMarginT + " auto " + n.avatarMarginB,
                    "border-radius": "50%",
                    overflow: "hidden",
                    border: "1px solid rgba(0,0,0,0.1)",
                    "box-sizing": "border-box"
                }),
                r.find("img").css({
                    height: "100%",
                    width: "100%",
                    "border-radius": "50%"
                }),
                l.css({
                    width: "100%",
                    height: "auto",
                    padding: t(20),
                    "font-size": t(e.fontSize || 28),
                    "box-sizing": "border-box"
                }),
                l.find("p").css({
                    margin: 0,
                    "line-height": t(38),
                    "text-align": "center"
                }),
                c.css({
                    display: "none",
                    width: t(560),
                    height: t(80),
                    bottom: t(100),
                    left: "50%",
                    color: "#fff",
                    "line-height": t(80),
                    position: "fixed",
                    "margin-left": -.5 * parseInt(t(560)) + "px",
                    "text-align": "center",
                    "border-radius": t(6),
                    backgroundColor: "#18ccc0"
                }),
                u.css({
                    display: "none",
                    width: "100%",
                    height: "40px",
                    bottom: "0px",
                    left: "0px",
                    background: "rgba(0, 0, 0, 0.5)",
                    position: "fixed",
                    "line-height": "40px",
                    "text-align": "center",
                    "font-size": "18px"
                }),
                u.find("a").css({
                    color: "#fff",
                    "text-decoration": "none"
                }),
                a.append(r),
                a.append(l),
                o.append(a),
                o.append(c),
                o.append(u),
                this.eleDom = o,
                e.showCallback = this.shareExam ? this.shareRender.bind(this) : this.afterRender.bind(this);
                var d = "ontouchend" in document ? "touchstart": "click";
                this.eleDom.find(".lazyShow").on(d, this.playBtnClick.bind(this))
            }
        },
        {
            key: "playBtnClick",
            value: function() {
                1 === this.playBtnClickType ? location.href = location.href.replace(/answerid=[^&]*(&)?/, "") : location.href = "http://" + location.host + location.pathname + "?time=" + (new Date).getTime()
            }
        },
        {
            key: "shareRender",
            value: function() {
                var e = this;
                s["default"].ajax({
                    type: "GET",
                    data: {
                        uuid: c["default"].getUrlParameter("answerid")
                    },
                    dataType: "json",
                    url: g["default"].getExamShareUrl(),
                    success: function(t) {
                        if (200 !== t.code) return void e.fetchInfoFail(t);
                        var i = e.obj.answers[parseInt(t.data.result) - 1];
                        e.eleDom.find("img").attr("src", t.data.thumb),
                        e.eleDom.find("div.exam-result").css({
                            backgroundColor: i.choiceBackground,
                            color: i.fontColor
                        }).html("" + i.content),
                        e.playBtnClickType = 1,
                        e.eleDom.find(".lazyShow").text("我也要玩").show(),
                        0 === window.projectVersion.vipclass && e.eleDom.find(".linkIntro").show()
                    },
                    error: function(t) {
                        e.fetchInfoFail(t)
                    }
                })
            }
        },
        {
            key: "afterRender",
            value: function() {
                var e = this.obj.answers,
                t = this.PPT.examinationResult || 1,
                i = e[t - 1],
                n = c["default"].getCookie(window.Config.wxCookie),
                o = unescape(c["default"].getCookie("thumb"));
                this.eleDom.find("div.examResult").css({
                    "background-color": i.choiceBackground,
                    color: i.fontColor
                }),
                this.eleDom.find("div.exam-result").html("" + i.content),
                this.playBtnClickType = 2,
                this.eleDom.find(".lazyShow").text("再玩一次").show(),
                d["default"].isWX() && (this.eleDom.find("img").attr("src", o), s["default"].ajax({
                    type: "post",
                    data: {
                        result: t,
                        eventId: window.projectVersion.id,
                        openId: n,
                        thumb: o
                    },
                    dataType: "json",
                    url: g["default"].getExamAnswerUrl(),
                    success: function(e) {
                        if (200 === e.code) {
                            var t = -1 === location.href.indexOf("?") ? "?": "&",
                            n = "" + location.href + t + "answerid=" + e.data.uuid;
                            p["default"].wxReconfig({
                                link: n,
                                content: i.content
                            })
                        }
                    }
                }))
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "fetchInfoFail",
            value: function(e) {
                c["default"].error(e),
                this.eleDom.find("div.exam-result").html("信息获取失败"),
                this.playBtnClickType = 1,
                this.eleDom.find(".lazyShow").text("我也要玩").show(),
                0 === window.projectVersion.vipclass && this.eleDom.find(".linkIntro").show()
            }
        }]),
        e
    } ();
    t["default"] = m,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l),
    function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom(t, i)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t) {
                var i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>");
                console.log(this.obj),
                i.css({
                    position: "absolute",
                    color: this.obj.ftColor,
                    background: this.obj.bgColor,
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    transform: "rotate(" + this.obj.rotate + "deg)",
                    opacity: this.obj.opacity,
                    fontSize: this.scale(60),
                    height: this.scale(80),
                    lineHeight: 1,
                    "box-sizing": "border-box"
                }),
                n.css({
                    padding: "0 " + this.scale(30),
                    height: this.scale(80),
                    lineHeight: this.scale(80),
                    fontSize: this.scale(60)
                });
                var o = {
                    fontSize: this.scale(35),
                    "vertical-align": t(47),
                    margin: t(10)
                },
                a = {
                    "font-size": this.scale(60),
                    "vertical-align": this.scale(40)
                };
                this.dayLeft = (0, s["default"])("<span></span>"),
                this.hourLeft = (0, s["default"])("<span></span>"),
                this.minLeft = (0, s["default"])("<span></span>"),
                this.secLeft = (0, s["default"])("<span></span>"),
                this.dayLeft.css(a),
                this.hourLeft.css(a),
                this.minLeft.css(a),
                this.secLeft.css(a),
                this.dayText = (0, s["default"])("<span>天</span>"),
                this.hourText = (0, s["default"])("<span>时</span>"),
                this.minText = (0, s["default"])("<span>分</span>"),
                this.secText = (0, s["default"])("<span>秒</span>"),
                this.dayText.css(o),
                this.hourText.css(o),
                this.minText.css(o),
                this.secText.css(o),
                n.append(this.dayLeft),
                n.append(this.dayText),
                n.append(this.hourLeft),
                n.append(this.hourText),
                n.append(this.minLeft),
                n.append(this.minText),
                n.append(this.secLeft),
                n.append(this.secText),
                i.append(n),
                this.updateLeft(),
                this.startTimer(),
                this.eleDom = i
            }
        },
        {
            key: "startTimer",
            value: function() {
                var e = this;
                this.timer = setInterval(function() {
                    e.updateLeft()
                },
                1e3)
            }
        },
        {
            key: "updateLeft",
            value: function() {
                var e = this.LeftTimeText();
                this.dayLeft.html(e.day),
                this.hourLeft.html(e.hour),
                this.minLeft.html(e.min),
                this.secLeft.html(e.sec)
            }
        },
        {
            key: "LeftTimeText",
            value: function() {
                var e = Date.parse(new Date),
                t = this.obj.deadlineTime,
                i = t - e > 0 ? t - e: 0,
                n = {};
                return n.day = parseInt(i / 864e5),
                n.hour = parseInt(i / 36e5 % 24),
                n.min = parseInt(i / 6e4 % 60),
                n.sec = parseInt(i / 1e3 % 60),
                n
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ());
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r);
    i(48);
    var l = function() {
        function e(t, i, n) {
            o(this, e),
            this.eleDom = (0, s["default"])('<div class="eraser"></div>');
            var a = this.eleDom,
            r = i;
            t.forceNoEffect = !0;
            var l = !1;
            n.swipeDownLock = !0,
            n.swipeUpLock = !0,
            t.showCallback = function() {
                if (!l) {
                    var e = (0, s["default"])("<div>擦一擦</div>");
                    a.append(e),
                    e.css({
                        background: "rgba(0,0,0,0.6)",
                        color: "white",
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        width: "120px",
                        height: "30px",
                        margin: "-15px 0 0 -60px",
                        "text-align": "center",
                        "line-height": "30px",
                        "border-radius": "100px",
                        "font-size": "20px"
                    }),
                    setTimeout(function() {
                        e.fadeOut(1e3)
                    },
                    800)
                }
            };
            var c = void 0,
            u = void 0,
            d = void 0,
            f = void 0,
            p = void 0,
            h = void 0,
            g = void 0;
            if (t.w >= 640 && t.h >= 1e3) {
                c = window.innerWidth,
                u = window.innerHeight,
                d = -parseInt(r.contentsize.top),
                f = -parseInt(r.contentsize.left);
                var m = window.innerWidth / 640 > window.innerHeight / 1008 ? window.innerWidth / 640 : window.innerHeight / 1008;
                g = parseInt(m * t.inw),
                h = parseInt(m * t.inleft),
                p = parseInt(m * t.intop)
            } else c = parseInt(r.scale(t.w)),
            u = parseInt(r.scale(t.h)),
            f = parseInt(r.scale(t.left)),
            d = parseInt(r.scale(t.top)),
            g = parseInt(r.scale(t.inw)),
            h = parseInt(r.scale(t.inleft)),
            p = parseInt(r.scale(t.intop));
            this.eleDom.css({
                position: "absolute",
                width: c,
                height: u,
                left: f,
                top: d,
                "z-index": 999
            });
            var v = parseInt(t.imgDom.context.naturalWidth),
            w = {};
            w.w = 10 * parseInt(v * c / g / 10),
            w.h = 10 * parseInt(w.w * u / c / 10),
            w.x = parseInt(h * w.w / c),
            w.y = parseInt(p * w.w / c),
            this.eleDom.append(t.imgDom),
            (0, s["default"])(t.imgDom).eraser({
                canvasOffset: {
                    left: f,
                    top: d
                },
                canvasWidth: c,
                canvasHeight: u,
                cropConfig: w,
                completeRatio: .5,
                completeFunction: function() {
                    l = !0,
                    a.fadeOut(800,
                    function() {
                        setTimeout(function() {
                            n.swipeDownLock = !1,
                            n.swipeUpLock = !1,
                            a.remove(),
                            r.showArrow()
                        },
                        1500)
                    })
                }
            }),
            console.log("erasor")
        }
        return a(e, [{
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = l,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l), i(3)),
    u = (n(c),
    function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.initDom(t, i, n)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t, i) {
                function n() {
                    var t = (0, s["default"])(this).parent().data("groupid");
                    1 == e.choiceType ? ((0, s["default"])(".examination-option[data-groupid=" + t + "]").find(".examination-btn").css({
                        borderColor: d.preBorder
                    }).end().find(".examination-selected").css({
                        display: "none"
                    }).end().find(".examination-cover").removeClass("active"), (0, s["default"])(this).addClass("active").parent().find(".examination-btn").css({
                        borderColor: d.aftBorder
                    }).end().find(".examination-selected").css({
                        display: "block"
                    })) : ((0, s["default"])(".examination-option[data-groupid=" + t + "]").find(".examination-btn").css("display", "none").end().find(".examination-cover").removeClass("active"), (0, s["default"])(this).addClass("active").parent().find(".examination-btn").css({
                        display: "-webkit-flex"
                    }));
                    var n = (0, s["default"])(this).data("answer");
                    n == i.examinationResult ? (0, s["default"])(".examination-confirm-html[data-groupid=" + t + "]").eq(0).html("你已测试，查看结果") : (0, s["default"])(".examination-confirm-html[data-groupid=" + t + "]").eq(0).html("确定")
                }
                var o = (0, s["default"])('<div class="examination-option" data-groupid=' + e.groupId + "></div>"),
                a = (0, s["default"])("<div></div>"),
                r = (0, s["default"])('<div class="examination-btn"></div>'),
                l = (0, s["default"])("<div data-answer=" + e.answer + ' class="examination-cover"></div>'),
                c = (0, s["default"])('<div class="examination-selected"></div>'),
                u = (0, s["default"])('<span class="icon-checkmark"></span>'),
                d = e.choiceTokenCofig;
                o.css({
                    position: "absolute",
                    width: t(e.w),
                    height: t(e.h),
                    top: t(e.top),
                    left: t(e.left)
                }),
                a.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: e.backgroundColor,
                    borderRadius: t(e.borderRadius),
                    textAlign: "center",
                    lineHeight: t(e.h),
                    color: "#fff"
                }),
                l.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    backgroundColor: "transparent",
                    zIndex: 999
                }),
                r.css({
                    position: "absolute",
                    display: "none",
                    width: t(d.w),
                    height: t(d.h),
                    top: t(d.top),
                    left: t(d.left),
                    backgroundColor: d.backgroundColor,
                    borderColor: d.preBorder,
                    borderRadius: "50%",
                    justifyContent: "center",
                    boxShadow: "0 1px 10px 0px rgba(0, 0, 0, 0.5)",
                    alignItems: "center",
                    zIndex: 99,
                    boxSizing: "border-box"
                }),
                1 == e.choiceType && r.css({
                    display: "-webkit-flex",
                    border: t(4) + " solid " + d.preBorder,
                    boxShadow: "none"
                }),
                c.css({
                    display: "none",
                    borderRadius: "50%",
                    backgroundColor: d.aftBorder,
                    width: t(parseInt(d.w) - 16),
                    height: t(parseInt(d.h) - 16)
                }),
                u.css({
                    fontSize: t(30),
                    color: d.aftBorder
                }),
                r.append(1 == e.choiceType ? c: u),
                l.append(r),
                o.append(a),
                o.append(l),
                this.eleDom = o;
                var f = "ontouchend" in document ? "touchstart": "click";
                o.on(f, ".examination-cover", n)
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ());
    t["default"] = u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l), i(3)),
    u = (n(c), i(11)),
    d = n(u),
    f = function() {
        function e(t, i, n, a) {
            o(this, e),
            this.obj = t,
            this.examResultPage = -1,
            this.getResultPage(),
            this.initDom(t, i, n, a)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t, i, n) {
                var o = this,
                a = e.groupId,
                r = (0, s["default"])("<div></div>"),
                l = (0, s["default"])("<div></div>"),
                c = (0, s["default"])('<div class="examination-confirm-html" data-groupid=' + a + ">确定</div>");
                r.css({
                    position: "absolute",
                    width: i(e.w),
                    height: i(e.h),
                    top: i(e.top),
                    left: i(e.left),
                    fontSize: i(32),
                    backgroundColor: e.backgroundColor,
                    borderRadius: i(e.borderRadius),
                    textAlign: "center",
                    lineHeight: i(e.h),
                    color: "#fff",
                    fontWeight: "bold"
                }),
                l.append(c),
                r.append(l);
                var u = "ontouchend" in document ? "touchstart": "click";
                r.on(u,
                function() {
                    var e = this,
                    i = 0 === (0, s["default"])(".examination-option[data-groupid=" + a + "] .examination-cover.active").length;
                    i || (n.examinationResult = (0, s["default"])(".examination-cover.active").eq(0).data("answer"), setTimeout(function() {
                        t.swipeUpLock = !1,
                        -1 == o.examResultPage ? n.showNextPage() : n.showPage(o.examResultPage),
                        (0, s["default"])(e).find(".examination-confirm-html").eq(0).html("你已测试，查看结果")
                    },
                    100))
                }),
                this.eleDom = r
            }
        },
        {
            key: "getResultPage",
            value: function() {
                var e = this,
                t = d["default"].contentJSON;
                t.some(function(t, i) {
                    var n = t.content.some(function(t) {
                        return "answer" === t.type ? (e.examResultPage = i, !0) : void 0
                    });
                    return n ? !0 : void 0
                })
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = f,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l),
    function() {
        function e(t, i, n, a) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.page = a,
            this.PPT = n,
            this.initDom(t, i, n, a)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t, i, n) {
                var o = this,
                a = 0;
                e.answers.some(function(e, t) {
                    return e.correct === !0 ? void(a = t) : void 0
                });
                var r = {
                    eleWidth: t(e.w || 600),
                    seqWidth: t(100),
                    questionMarginT: t(16),
                    questionMarginB: t(40),
                    radioMarginR: t(52),
                    radioMarginL: t(30),
                    radioSide: t(23),
                    radioBorder: t(4),
                    lineHeight: t(80),
                    spacing: t(20),
                    fontSize: t(e.fontSize || 28)
                },
                l = (0, s["default"])("<div></div>"),
                c = (0, s["default"])("<div></div>"),
                u = (0, s["default"])("<div>" + o.obj.order + "/" + e.qNumber + "</div>"),
                d = (0, s["default"])("<div>" + e.question + "</div>"),
                f = (0, s["default"])("<section></section>");
                e.answers.forEach(function(e, t) {
                    f.append("<p data-index=" + t + '><span class="uRadio"></span><span>' + e.content + "</span></>")
                }),
                l.css({
                    position: "absolute",
                    "background-color": "transparent",
                    color: e.colorTheme.fontColor,
                    top: t(e.top),
                    left: t(e.left),
                    width: r.eleWidth,
                    "font-size": r.fontSize,
                    "box-sizing": "border-sbox"
                }),
                u.css({
                    width: r.seqWidth,
                    height: r.seqWidth,
                    "background-color": e.colorTheme.choiceBackground,
                    "line-height": r.seqWidth,
                    "border-radius": "50%",
                    "text-align": "center"
                }),
                d.css({
                    width: "100%",
                    margin: r.questionMarginT + " 0 " + r.questionMarginB + " 0"
                }),
                f.find("p").css({
                    "background-color": e.colorTheme.choiceBackground,
                    height: r.lineHeight,
                    "line-height": r.lineHeight,
                    margin: 0,
                    "margin-top": r.spacing
                }),
                f.find(".uRadio").css({
                    display: "inline-block",
                    width: r.radioSide,
                    height: r.radioSide,
                    border: r.radioBorder + " solid #D6D6D6",
                    "line-height": r.radioSide,
                    "border-radius": "50%",
                    margin: "0 " + r.radioMarginR + " 0 " + r.radioMarginL,
                    "text-align": "center",
                    "background-color": "transparent",
                    "background-clip": "content-box",
                    padding: t(5)
                }),
                f.find("span").css({
                    "vertical-align": "middle"
                }),
                u.appendTo(c),
                d.appendTo(c),
                f.appendTo(c),
                c.appendTo(l),
                this.eleDom = l,
                f.on("click", "p",
                function() {
                    f.find("p.clicked").removeClass("clicked"),
                    (0, s["default"])(this).addClass("clicked"),
                    i.examinationResult[n.index] = (0, s["default"])(this).data("index") === a,
                    o.renderStyle(),
                    setTimeout(function() {
                        n.swipeUpLock = !1,
                        i.showNextPage()
                    },
                    100)
                })
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "renderStyle",
            value: function() {
                this.eleDom.find("p").css({
                    "background-color": this.obj.colorTheme.choiceBackground
                }).end().find("p.clicked").css({
                    "background-color": "#aaa"
                }).end().find("p .uRadio").css({
                    "border-color": "D6D6D6",
                    "background-color": "transparent"
                }).end().find("p.clicked .uRadio").css({
                    "border-color": this.obj.colorTheme.fontColor,
                    "background-color": this.obj.colorTheme.fontColor
                })
            }
        }]),
        e
    } ());
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(6),
    p = n(f),
    h = {
        dianzan: {
            text: "点赞"
        },
        like: {
            text: "喜欢"
        },
        sad: {
            text: "蜡烛"
        },
        flower: {
            text: "送花"
        }
    },
    g = function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom(t, i)
        }
        return a(e, [{
            key: "svg",
            value: function t(e) {
                var i = e,
                t = (0, s["default"])("<div>" + i + "</div>");
                return t.find("svg").attr("preserveAspectRatio", "none meet").css({
                    width: "100%",
                    height: "100%",
                    opacity: this.obj.opacity
                }),
                t.find("[fill]").attr("fill", this.obj.ftColor),
                t.html()
            }
        },
        {
            key: "initDom",
            value: function(e, t) {
                var i, n = this,
                o = (0, s["default"])("<div></div>"),
                a = (0, s["default"])("<div></div>"),
                r = (0, s["default"])("<span>" + n.svg(n.obj.svgXml) + "</span>"),
                l = (0, s["default"])("<span> " + h[n.obj.funcType].text + " </span>");
                r.css({
                    position: "absolute",
                    width: n.scale(n.obj.ftsize),
                    height: n.scale(n.obj.ftsize),
                    left: n.scale(.6 * parseInt(n.obj.ftsize)),
                    top: "50%",
                    marginTop: n.scale( - .5 * parseInt(n.obj.ftsize))
                }),
                o.css({
                    position: "absolute",
                    color: n.obj.ftColor,
                    "box-sizing": "border-box",
                    "white-space": "nowrap",
                    top: n.scale(n.obj.top),
                    left: n.scale(n.obj.left),
                    transform: "rotate(" + n.obj.rotate + "deg)",
                    opacity: n.obj.opacity,
                    fontSize: n.scale(n.obj.ftsize),
                    height: "auto",
                    "line-height": n.scale(2 * parseInt(n.obj.ftsize))
                }),
                a.css({
                    paddingRight: n.scale(.6 * parseInt(n.obj.ftsize)),
                    background: n.obj.bgColor,
                    "border-radius": n.scale(n.obj.ftsize),
                    paddingLeft: n.scale(2 * parseInt(n.obj.ftsize))
                });
                var u = function() {
                    var e = void 0;
                    "sad" === n.obj.funcType && (e = "sad-clicked.svg"),
                    "dianzan" === n.obj.funcType && (e = "dianzan-clicked.svg"),
                    "like" === n.obj.funcType && (e = "heart-clicked.svg"),
                    "flower" === n.obj.funcType && (e = "flower-clicked.svg"),
                    n._loadSvg(d["default"].getInterActionBtn(e)).then(function(e) {
                        r[0].innerHTML = n.svg(e)
                    })
                },
                f = n.getButtonClick();
                "clicked" === c["default"].getCookie(n._getButtonId()) ? f.then(function(e) {
                    u(),
                    l[0].innerText = e.count ? e.count: 0
                }) : a.click(function() {
                    f.then(function(e) {
                        if (!n.posting) {
                            n.posting = !0,
                            u();
                            var t = e.count ? e.count: 0;
                            n._setButtonClick(i).then(function(e) {
                                l[0].innerText = parseInt(t) + 1,
                                n.posting = !0
                            })["catch"](function(e) {
                                c["default"].error(e)
                            })
                        }
                    })
                }.bind(n)),
                a.append(r),
                a.append(l),
                o.append(a),
                n.eleDom = o
            }
        },
        {
            key: "_getButtonId",
            value: function() {
                return d["default"].getProjectId() + "_btn_" + this.obj.button_id
            }
        },
        {
            key: "getButtonClick",
            value: function() {
                var e = this,
                t = new p["default"](function(t, i) {
                    s["default"].ajax({
                        type: "get",
                        url: d["default"].eventClickUrl + "/" + d["default"].getProjectId(),
                        dataType: "json",
                        cache: !1,
                        data: {
                            pid: d["default"].getProjectId(),
                            btnid: e._getButtonId()
                        },
                        success: function(e) {
                            t(e.data)
                        },
                        error: function(e) {
                            i(e)
                        }
                    })
                });
                return t
            }
        },
        {
            key: "_setButtonClick",
            value: function() {
                var e = this,
                t = new p["default"](function(t, i) {
                    s["default"].ajax({
                        type: "post",
                        url: d["default"].eventClickUrl,
                        dataType: "json",
                        cache: !1,
                        data: {
                            pid: d["default"].getProjectId(),
                            btnid: e._getButtonId()
                        },
                        success: function() {
                            c["default"].setCookie(e._getButtonId(), "clicked"),
                            t()
                        },
                        error: function(e) {
                            i(e)
                        }
                    })
                });
                return t
            }
        },
        {
            key: "_loadSvg",
            value: function(e) {
                return new p["default"](function(t) {
                    s["default"].get(e,
                    function(e) {
                        t(e)
                    },
                    "text")
                })
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = g,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l),
    function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom(t, i)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t) {
                var i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>"),
                o = (0, s["default"])("<div>" + this.obj.text + "</div>");
                i.css({
                    position: "absolute",
                    color: this.obj.ftColor,
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    transform: "rotate(" + this.obj.rotate + "deg)",
                    opacity: this.obj.opacity,
                    lineHeight: 1,
                    "box-sizing": "border-box"
                }),
                o.css({
                    lineHeight: this.obj.lineheight,
                    fontSize: this.scale(this.obj.ftsize),
                    margin: "auto 0",
                    wordWrap: "break-word",
                    textAlign: "center",
                    width: "100%"
                }),
                n.css({
                    background: this.obj.bgColor,
                    display: "flex",
                    height: this.scale(this.obj.h),
                    width: this.scale(this.obj.w),
                    borderRadius: this.scale(this.obj.borderradius * this.obj.h / 200)
                });
                var a = void 0;
                a = 0 === e.url.indexOf("http:") || 0 === e.url.indexOf("https:") ? e.url: "http://" + e.url,
                i.on("click",
                function() {
                    window.open(a)
                }),
                o.appendTo(n),
                n.appendTo(i),
                this.eleDom = i
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ());
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(3),
    p = n(f),
    h = function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.page = n,
            this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                function e(e) {
                    function t() {
                        setTimeout(function() {
                            i < e.length - 1 && (++i, U.css({
                                transform: "translateY(" + h.scale( - 80 * i) + ")",
                                transition: "transform .5s ease"
                            }), t())
                        },
                        3e3)
                    }
                    U.empty(),
                    e.map(function(e) {
                        var t = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<span></span>"),
                        n = (0, s["default"])("<span>刚刚获得了</span>"),
                        o = (0, s["default"])("<span>" + e.nickname + "</span>"),
                        a = (0, s["default"])("<span class='user-sign'>" + e.prize_name + "</span>");
                        t.css({
                            position: "relative",
                            width: "100%",
                            height: h.scale(80),
                            fontSize: h.scale(25),
                            lineHeight: h.scale(80),
                            color: "#fff",
                            background: "rgba(0,0,0,0.5)",
                            overflow: "hidden",
                            "white-space": "nowrap"
                        }),
                        i.css({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 5,
                            margin: "auto",
                            height: h.scale(60),
                            width: h.scale(60),
                            borderRadius: "50%",
                            background: "url(" + e.pic_url + ")",
                            backgroundSize: "cover"
                        }),
                        n.css({
                            marginLeft: h.scale(80)
                        }),
                        a.css({
                            color: "#FF5353",
                            marginLeft: 5
                        }),
                        n.prepend(o),
                        n.append(a),
                        t.append(i),
                        t.append(n),
                        U.append(t)
                    }),
                    t();
                    var i = 0
                }
                function t() {
                    var e = S[0].getContext("2d");
                    e.globalCompositeOperation = "source-over",
                    e.drawImage(te, 0, 0, 325, 180),
                    e.globalCompositeOperation = "destination-out"
                }
                function n(e) {
                    e ? a() : o()
                }
                function o() {
                    z.css({
                        "pointer-events": "auto",
                        opacity: 1
                    })
                }
                function a() {
                    V.css({
                        "pointer-events": "auto",
                        opacity: 1
                    })
                }
                function r() {
                    q.css({
                        visibility: "hidden"
                    }),
                    X.css({
                        visibility: "visible"
                    })
                }
                function l(e, t, i) {
                    e.beginPath(),
                    e.fillStyle = "#fff",
                    e.arc(t, i, 20, 0, 2 * Math.PI, !0),
                    e.fill()
                }
                function u(e, t, i) {
                    for (var n = e.getImageData(0, 0, t, i), o = n.data, a = [], r = 0, s = o.length; s > r; r += 4) {
                        var l = o[r + 3];
                        128 > l && a.push(r)
                    }
                    return (a.length / (o.length / 4) * 100).toFixed(2)
                }
                var f = (0, s["default"])('<div class="lottery-scratch"></div>');
                f.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    overflow: "hidden"
                });
                var h = this,
                g = this.obj,
                m = !1,
                v = g.allTimes,
                w = g.todayTimes,
                b = [],
                y = [];
                s["default"].ajax({
                    url: d["default"].getLotteryUrl("init"),
                    data: {
                        lottery_id: g.lotteryId,
                        event_id: window.Config.getProjectId(),
                        open_id: c["default"].getCookie(window.Config.wxCookie)
                    },
                    dataType: "json"
                }).always(function(t) {
                    if (t && 200 == t.code) {
                        var i = t.data;
                        v = i.total_play_times,
                        w = i.play_times_today,
                        b = i.prizes,
                        y = i.records;
                        var n = g.allTimes - v,
                        o = parseInt(g.todayTimes - w) > parseInt(n) ? n: g.todayTimes - w;
                        k && (k.find(".title-num").text(n), k.find(".title-num2").text(o)),
                        g.showWinners && y.length > 0 && e(y)
                    } else console.error(t)
                });
                var k = (0, s["default"])("<div>你总共还剩<span class='title-num'>" + v + "</span>次抽奖机会，今天还可以抽<span class='title-num2'>" + w + "</span>次</div>");
                k.css({
                    position: "absolute",
                    height: this.scale(35),
                    left: 0,
                    right: 0,
                    padding: "10px 0",
                    margin: "0 10px",
                    lineHeight: this.scale(35),
                    zIndex: 2,
                    "text-align": "center",
                    "font-size": h.scale(24),
                    "border-bottom": "1px solid #E5E5E5",
                    "white-space": "nowrap"
                }),
                g.showTimes && f.append(k);
                var A = i(67),
                x = (0, s["default"])("<div></div>"),
                C = (0, s["default"])("<img src='" + A + "' />"),
                P = (0, s["default"])("<div></div>"),
                I = (0, s["default"])("<span>谢谢参与</span>"),
                S = (0, s["default"])("<canvas></canvas>"),
                j = (0, s["default"])("<div>点击开始</div>");
                x.css({
                    position: "absolute",
                    width: "100%",
                    top: 0,
                    left: 0
                }),
                C.css({
                    width: "100%"
                });
                var E = parseInt(this.scale(.9 * this.obj.w)),
                D = parseInt(282 * E / 510);
                P.css({
                    position: "absolute",
                    width: "90%",
                    height: D,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    top: this.scale(90)
                }),
                I.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    color: "#FF5353",
                    textAlign: "center",
                    lineHeight: D + "px",
                    fontSize: this.scale(50),
                    zIndex: 1,
                    display: "flex",
                    "justify-content": "center",
                    "align-items": "center",
                    "letter-spacing": "15px"
                }),
                S.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: E,
                    height: D,
                    zIndex: 2
                }),
                j.css({
                    position: "absolute",
                    height: this.scale(60),
                    width: this.scale(200),
                    left: 0,
                    right: 0,
                    top: this.scale(190),
                    margin: "auto",
                    textAlign: "center",
                    lineHeight: this.scale(60),
                    fontSize: this.scale(28),
                    background: "#EE2D2D",
                    borderRadius: "100px",
                    color: "#fff",
                    zIndex: 2,
                    cursor: "pointer"
                }),
                P.append(I),
                P.append(S),
                x.append(C),
                x.append(P),
                x.append(j),
                f.append(x);
                var T = (0, s["default"])("<div></div>"),
                O = (0, s["default"])("<div><div class='out-line'></div><div class='out-name'>中奖用户</div><div class='out-line'></div></div>"),
                R = (0, s["default"])("<div></div>"),
                U = (0, s["default"])("<div></div>"),
                M = (0, s["default"])("<div>当前还没有人中奖，快来试试你的手气吧</div>");
                T.css({
                    position: "absolute",
                    top: this.scale(400),
                    left: 0,
                    width: "100%"
                }),
                O.css({
                    width: "100%",
                    display: "flex"
                }),
                R.css({
                    position: "relative",
                    width: "100%",
                    height: this.scale(80),
                    marginTop: 5,
                    overflow: "hidden"
                }),
                M.css({
                    width: "100%",
                    height: this.scale(80),
                    fontSize: this.scale(25),
                    lineHeight: this.scale(80),
                    color: "#fff",
                    background: "rgba(0,0,0,0.5)",
                    textAlign: "center"
                }),
                U.append(M),
                g.showWinners && (R.append(U), T.append(O), T.append(R), f.append(T));
                var z = (0, s["default"])("<div></div>"),
                B = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>今天没有机会了，下次再来吧</div></div>"),
                N = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>抽奖已过期</div></div>"),
                F = (0, s["default"])("<div><div class='tip-title'>无法抽奖</div><div class='tip-body'>请在微信中打开</div></div>"),
                H = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>没有抽中呢，再接再厉哟</div></div>"),
                L = (0, s["default"])("<div>确认</div>");
                z.css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.8)",
                    zIndex: 5,
                    opacity: 0,
                    transition: "opacity .5s ease",
                    "pointer-events": "none"
                }),
                H.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                N.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                F.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                B.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                L.css({
                    color: "#FFF",
                    width: "13rem",
                    margin: "0 auto",
                    background: "#18CCC0",
                    borderRadius: "6px",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    cursor: "pointer"
                }),
                H.append(L),
                z.append(H),
                f.append(z);
                var V = (0, s["default"])("<div></div>"),
                q = (0, s["default"])("<div><div class='tip-title'>恭喜您赢得</div></div>"),
                J = (0, s["default"])("<div></div>"),
                Q = (0, s["default"])("<div>请填写您的信息以便我们联系您</div>"),
                W = (0, s["default"])('<input class="lottery-form" type="text" required="required" placeholder="您的姓名" />'),
                Y = (0, s["default"])('<input class="lottery-form" type="text" required="required" placeholder="联系电话" />'),
                G = (0, s["default"])('<input class="lottery-form" type="text" placeholder="备注" />'),
                K = (0, s["default"])("<div>请正确输入信息</div>"),
                Z = (0, s["default"])("<div>提交信息</div>"),
                X = (0, s["default"])("<div><div class='tip-title2'>信息已提交</div><div class='tip-body2'>请耐心等候，我们的客服会跟您联系发奖事宜</div></div>"),
                _ = (0, s["default"])("<div>确认</div>");
                V.css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.8)",
                    zIndex: 5,
                    opacity: 0,
                    transition: "opacity .5s ease",
                    "pointer-events": "none"
                }),
                q.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "28rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                Q.css({
                    marginTop: "0.8rem",
                    textAlign: "left",
                    padding: "1rem 0",
                    borderTop: "1px solid #d8d8d8"
                }),
                K.css({
                    fontSize: ".8rem",
                    textAlign: "left",
                    color: "#F56262",
                    opacity: 0
                }),
                Z.css({
                    background: "#F56262",
                    borderRadius: "6px",
                    width: "15rem",
                    margin: "1rem auto",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    color: "#fff"
                }),
                X.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    visibility: "hidden"
                }),
                _.css({
                    color: "#FFF",
                    width: "13rem",
                    margin: "0 auto",
                    background: "#18CCC0",
                    borderRadius: "6px",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    cursor: "pointer"
                }),
                q.append(J),
                q.append(Q),
                q.append(W),
                q.append(Y),
                q.append(G),
                q.append(K),
                q.append(Z),
                V.append(q),
                X.append(_),
                V.append(X),
                f.append(V);
                var $ = i(49),
                ee = S[0].getContext("2d"),
                te = new Image;
                te.src = $,
                setTimeout(function() {
                    ee.drawImage(te, 0, 0, 325, 180),
                    ee.globalCompositeOperation = "destination-out"
                },
                800);
                var ie = !1,
                ne = !0;
                S.on("touchstart mousedown",
                function(e) {
                    if (!ne) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        ie = !0;
                        var t = S[0].getBoundingClientRect().left,
                        i = S[0].getBoundingClientRect().top,
                        o = e.originalEvent ? e.originalEvent.touches ? e.originalEvent.touches[0] : e.originalEvent: e;
                        l(ee, o.clientX - t, o.clientY - i),
                        u(ee, E, D) > 70 && (ne = !0, n(m))
                    }
                }).on("touchmove mousemove",
                function(e) {
                    if (ie && !ne) {
                        e.stopPropagation(),
                        e.preventDefault();
                        var t = S[0].getBoundingClientRect().left,
                        i = S[0].getBoundingClientRect().top,
                        o = e.originalEvent ? e.originalEvent.touches ? e.originalEvent.touches[0] : e.originalEvent: e;
                        l(ee, o.clientX - t, o.clientY - i),
                        u(ee, E, D) > 70 && (ne = !0, n(m))
                    }
                }).on("touchend mouseup",
                function(e) {
                    ie = !1
                });
                var oe = "ontouchend" in document ? "touchstart": "click";
                j.on(oe,
                function() {
                    return p["default"].isWX() ? g.deadlineTime < Date.parse(new Date) ? (z.empty(), N.append(L), z.append(N), z.css({
                        "pointer-events": "auto",
                        opacity: 1
                    }), void L.on(oe,
                    function() {
                        z.css({
                            "pointer-events": "none",
                            opacity: 0
                        })
                    })) : k.find(".title-num2").text() <= 0 ? (z.empty(), B.append(L), z.append(B), z.css({
                        "pointer-events": "auto",
                        opacity: 1
                    }), void L.on(oe,
                    function() {
                        z.css({
                            "pointer-events": "none",
                            opacity: 0
                        })
                    })) : void s["default"].ajax({
                        url: d["default"].getLotteryUrl(),
                        type: "post",
                        data: {
                            lottery_id: g.lotteryId,
                            event_id: window.Config.getProjectId(),
                            open_id: c["default"].getCookie(window.Config.wxCookie)
                        },
                        dataType: "json"
                    }).always(function(e) {
                        if (e && 200 == e.code) {
                            var i = e.data;
                            ne = !1,
                            j.css({
                                display: "none"
                            });
                            var n = g.allTimes - i.total_play_times - 1,
                            o = parseInt(g.todayTimes - i.play_times_today - 1),
                            a = o > parseInt(n) ? n: o > 0 ? o: 0;
                            if (k && (k.find(".title-num").text(n), k.find(".title-num2").text(a)), I.empty(), 1 == i.is_win) {
                                var r = (0, s["default"])("<img src='" + i.prize.pic_url + "' />"),
                                l = (0, s["default"])("<div>" + i.prize.name + "</div>"),
                                c = (0, s["default"])("<div></div>");
                                r.css({
                                    height: "5rem",
                                    maxWidth: "8rem"
                                }),
                                l.css({
                                    height: 40,
                                    fontSize: "1rem",
                                    "letter-spacing": 0,
                                    lineHeight: "40px"
                                }),
                                c.append(r),
                                c.append(l),
                                I.append(c);
                                var u = (0, s["default"])("<img src='" + i.prize.pic_url + "' />"),
                                d = (0, s["default"])("<div>" + i.prize.name + "</div>");
                                u.css({
                                    maxWidth: "10rem",
                                    height: "5rem",
                                    marginTop: "0.5rem"
                                }),
                                d.css({
                                    color: "#F56262",
                                    fontSize: "1rem",
                                    margin: "0.5rem 0"
                                }),
                                J.empty(),
                                J.append(u),
                                J.append(d),
                                m = !0
                            } else I.text("谢谢参与"),
                            m = !1,
                            z.empty(),
                            H.append(L),
                            z.append(H),
                            L.on(oe,
                            function() {
                                t(),
                                z.css({
                                    "pointer-events": "none",
                                    opacity: 0
                                }),
                                j.css({
                                    display: "block"
                                })
                            })
                        } else console.error("getResultInfo", e),
                        alert(e.error)
                    }) : (z.empty(), F.append(L), z.append(F), z.css({
                        "pointer-events": "auto",
                        opacity: 1
                    }), void L.on(oe,
                    function() {
                        z.css({
                            "pointer-events": "none",
                            opacity: 0
                        })
                    }))
                }),
                Z.on(oe,
                function() {
                    var e = /^1(3|4|5|8)[0-9]{9}$/,
                    t = /.+/,
                    i = W[0].value,
                    n = Y[0].value,
                    o = G[0].value;
                    t.test(i) ? e.test(n) ? (K.css({
                        opacity: 0
                    }), s["default"].ajax({
                        url: d["default"].getLotteryUrl("record"),
                        type: "post",
                        data: {
                            lottery_id: g.lotteryId,
                            event_id: window.Config.getProjectId(),
                            open_id: c["default"].getCookie(window.Config.wxCookie),
                            realname: i,
                            tel: n,
                            remark: o
                        },
                        dataType: "json"
                    }).always(function(e) {
                        e && 200 == e.code ? r() : (K.text(e.message), K.css({
                            opacity: 1
                        }), console.error("setPersonalInfo", e))
                    })) : (K.text("请正确输入联系手机"), K.css({
                        opacity: 1
                    })) : (K.text("请输入名字"), K.css({
                        opacity: 1
                    }))
                }),
                _.on(oe,
                function() {
                    t(),
                    V.css({
                        "pointer-events": "none",
                        opacity: 0
                    }),
                    j.css({
                        display: "block"
                    }),
                    q.css({
                        visibility: "visible"
                    }),
                    X.css({
                        visibility: "hidden"
                    })
                }),
                this.eleDom = f
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(3),
    p = n(f);
    i(52);
    var h = function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.page = n,
            this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                function e(e) {
                    function t() {
                        setTimeout(function() {
                            i < e.length - 1 && (++i, U.css({
                                transform: "translateY(" + a.scale( - 80 * i) + ")",
                                transition: "transform .5s ease"
                            }), t())
                        },
                        3e3)
                    }
                    U.empty(),
                    e.map(function(e) {
                        var t = (0, s["default"])("<div></div>"),
                        i = (0, s["default"])("<span></span>"),
                        n = (0, s["default"])("<span>刚刚获得了</span>"),
                        o = (0, s["default"])("<span>" + e.nickname + "</span>"),
                        r = (0, s["default"])("<span class='user-sign'>" + e.prize_name + "</span>");
                        t.css({
                            position: "relative",
                            width: "100%",
                            height: a.scale(80),
                            fontSize: a.scale(25),
                            lineHeight: a.scale(80),
                            color: "#fff",
                            background: "rgba(0,0,0,0.5)",
                            overflow: "hidden",
                            "white-space": "nowrap"
                        }),
                        i.css({
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: 5,
                            margin: "auto",
                            height: a.scale(60),
                            width: a.scale(60),
                            borderRadius: "50%",
                            background: "url(" + e.pic_url + ")",
                            backgroundSize: "cover"
                        }),
                        n.css({
                            marginLeft: a.scale(80)
                        }),
                        r.css({
                            color: "#FF5353",
                            marginLeft: 5
                        }),
                        n.prepend(o),
                        n.append(r),
                        t.append(i),
                        t.append(n),
                        U.append(t)
                    }),
                    t();
                    var i = 0
                }
                function t(e) {
                    I.css({
                        backgroundImage: "url(" + b + ")"
                    }),
                    x.css({
                        transform: "translateY(" + e + "px)",
                        transition: "transform 4s cubic-bezier(0.75, 0.02, 0.32, 0.98)"
                    }),
                    C.css({
                        transform: "translateY(" + e + "px)",
                        transition: "transform 4s .5s cubic-bezier(0.75, 0.02, 0.32, 0.98)"
                    }),
                    P.css({
                        transform: "translateY(" + e + "px)",
                        transition: "transform 4s 1s cubic-bezier(0.75, 0.02, 0.32, 0.98)"
                    }),
                    setTimeout(function() {
                        u = !1,
                        ++z,
                        l ? J.css({
                            "pointer-events": "auto",
                            opacity: 1
                        }) : N.css({
                            "pointer-events": "auto",
                            opacity: 1
                        }),
                        z >= 4 && (z = 0, D = v ? S: E, x.css({
                            transform: "translateY(" + D + "px)",
                            transition: "transform 0s"
                        }), C.css({
                            transform: "translateY(" + D + "px)",
                            transition: "transform 0s"
                        }), P.css({
                            transform: "translateY(" + D + "px)",
                            transition: "transform 0s"
                        }))
                    },
                    5e3)
                }
                function n() {
                    Q.css({
                        visibility: "hidden"
                    }),
                    $.css({
                        visibility: "visible"
                    })
                }
                var o = (0, s["default"])('<div class="lottery-tiger"></div>');
                o.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    overflow: "hidden"
                });
                var a = this,
                r = this.obj,
                l = !1,
                u = !1,
                f = r.allTimes,
                h = r.todayTimes,
                g = [],
                m = [],
                v = !1;
                s["default"].ajax({
                    url: d["default"].getLotteryUrl("init"),
                    data: {
                        lottery_id: r.lotteryId,
                        event_id: window.Config.getProjectId(),
                        open_id: c["default"].getCookie(window.Config.wxCookie)
                    },
                    dataType: "json"
                }).always(function(t) {
                    if (t && 200 == t.code) {
                        var i = t.data;
                        f = i.total_play_times,
                        h = i.play_times_today,
                        g = i.prizes,
                        m = i.records;
                        var n = r.allTimes - f,
                        o = parseInt(r.todayTimes - h) > parseInt(n) ? n: r.todayTimes - h;
                        w && (w.find(".title-num").text(n), w.find(".title-num2").text(o)),
                        m.length > 0 && r.showWinners && e(m)
                    } else console.error(t)
                });
                var w = (0, s["default"])("<div>你总共还剩<span class='title-num'>" + f + "</span>次抽奖机会，今天还可以抽<span class='title-num2'>" + h + "</span>次</div>");
                w.css({
                    position: "absolute",
                    width: "100%",
                    height: this.scale(35),
                    padding: "10px 0",
                    lineHeight: this.scale(35),
                    "text-align": "center",
                    "font-size": a.scale(24),
                    color: "#fff",
                    background: "rgba(0,0,0,0.5)",
                    "white-space": "nowrap"
                }),
                r.showTimes && o.append(w);
                var b = i(68),
                y = i(69),
                k = (0, s["default"])("<div><img class='tiger-machine' src='http://img1.maka.im/common/games/lottery/tigerMachine.png' /></div>"),
                A = (0, s["default"])("<div class='tiger-content'></div>"),
                x = (0, s["default"])("<div class='tiger-circular'></div>"),
                C = (0, s["default"])("<div class='tiger-circular'></div>"),
                P = (0, s["default"])("<div class='tiger-circular'></div>"),
                I = (0, s["default"])('<div><div style="margin-top: 10px;">点<br>击<br>开<br>始</div></div>');
                k.css({
                    position: "absolute",
                    top: this.scale(90),
                    left: 0,
                    width: "100%",
                    height: this.scale(386)
                }),
                I.css({
                    position: "absolute",
                    top: this.scale(87),
                    right: this.scale(11),
                    height: "59%",
                    width: this.scale(80),
                    cursor: "pointer",
                    lineHeight: "1.8rem",
                    zIndex: 3,
                    textAlign: "center",
                    color: "#fffae2",
                    backgroundImage: "url(" + b + ")",
                    backgroundSize: "cover"
                }),
                A.css({
                    position: "relative",
                    width: this.scale(376),
                    height: this.scale(250),
                    top: this.scale(46),
                    left: this.scale(72),
                    overflow: "hidden"
                });
                var S = parseInt(this.scale(110)),
                j = -9 * S,
                E = -2 * S,
                D = E;
                x.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: this.scale(110),
                    height: 13e3,
                    transform: "translateY(" + D + "px)",
                    transition: "transform 4s cubic-bezier(0.75, 0.02, 0.32, 0.98)",
                    backgroundImage: "url(http://img1.maka.im/common/games/lottery/tiger3_2.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-y"
                }),
                C.css({
                    position: "absolute",
                    top: 0,
                    left: this.scale(119),
                    width: this.scale(110),
                    height: 13e3,
                    transform: "translateY(" + D + "px)",
                    transition: "transform 4s .5s cubic-bezier(0.75, 0.02, 0.32, 0.98)",
                    backgroundImage: "url(http://img1.maka.im/common/games/lottery/tiger4_2.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-y"
                }),
                P.css({
                    position: "absolute",
                    top: 0,
                    left: this.scale(234),
                    width: this.scale(110),
                    height: 13e3,
                    transform: "translateY(" + D + "px)",
                    transition: "transform 4s 1s cubic-bezier(0.75, 0.02, 0.32, 0.98)",
                    backgroundImage: "url(http://img1.maka.im/common/games/lottery/tiger5_2.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "repeat-y"
                }),
                A.append(x),
                A.append(C),
                A.append(P),
                k.append(A),
                k.append(I),
                o.append(k);
                var T = (0, s["default"])("<div></div>"),
                O = (0, s["default"])("<div><div class='out-line'></div><div class='out-name'>中奖用户</div><div class='out-line'></div></div>"),
                R = (0, s["default"])("<div></div>"),
                U = (0, s["default"])("<div></div>"),
                M = (0, s["default"])("<div>当前还没有人中奖，快来试试你的手气吧</div>");
                T.css({
                    position: "absolute",
                    top: this.scale(495),
                    left: 0,
                    width: "100%"
                }),
                O.css({
                    width: "100%",
                    display: "flex"
                }),
                R.css({
                    position: "relative",
                    width: "100%",
                    height: this.scale(80),
                    marginTop: 5,
                    overflow: "hidden"
                }),
                M.css({
                    width: "100%",
                    height: this.scale(80),
                    fontSize: this.scale(25),
                    lineHeight: this.scale(80),
                    color: "#fff",
                    background: "rgba(0,0,0,0.5)",
                    textAlign: "center"
                }),
                U.append(M),
                r.showWinners && (R.append(U), T.append(O), T.append(R), o.append(T));
                var z = 0,
                B = "ontouchend" in document ? "touchstart": "click";
                I.on(B,
                function() {
                    if (!u) {
                        if (!p["default"].isWX()) return N.empty(),
                        L.append(q),
                        N.append(L),
                        N.css({
                            "pointer-events": "auto",
                            opacity: 1
                        }),
                        void q.on(B,
                        function() {
                            N.css({
                                "pointer-events": "none",
                                opacity: 0
                            })
                        });
                        if (r.deadlineTime < Date.parse(new Date)) return N.empty(),
                        H.append(q),
                        N.append(H),
                        N.css({
                            "pointer-events": "auto",
                            opacity: 1
                        }),
                        void q.on(B,
                        function() {
                            N.css({
                                "pointer-events": "none",
                                opacity: 0
                            })
                        });
                        if (parseInt(w.find(".title-num2").text()) <= 0) return N.empty(),
                        F.append(q),
                        N.append(F),
                        N.css({
                            "pointer-events": "auto",
                            opacity: 1
                        }),
                        void q.on(B,
                        function() {
                            N.css({
                                "pointer-events": "none",
                                opacity: 0
                            })
                        });
                        u = !0,
                        I.css({
                            backgroundImage: "url(" + y + ")"
                        }),
                        s["default"].ajax({
                            url: d["default"].getLotteryUrl(),
                            type: "post",
                            data: {
                                lottery_id: r.lotteryId,
                                event_id: window.Config.getProjectId(),
                                open_id: c["default"].getCookie(window.Config.wxCookie)
                            },
                            dataType: "json"
                        }).always(function(e) {
                            if (e && 200 == e.code) {
                                var i = e.data,
                                n = r.allTimes - i.total_play_times - 1,
                                o = parseInt(r.todayTimes - i.play_times_today - 1),
                                a = o > parseInt(n) ? n: o > 0 ? o: 0;
                                if (w && (w.find(".title-num").text(n), w.find(".title-num2").text(a)), 1 == i.is_win) {
                                    l = !0,
                                    v ? D += 4 * j: D = D + 4 * j + 3 * S,
                                    v = !0;
                                    var c = (0, s["default"])("<img src='" + i.prize.pic_url + "' />"),
                                    u = (0, s["default"])("<div>" + i.prize.name + "</div>");
                                    c.css({
                                        maxWidth: "10rem",
                                        height: "5rem",
                                        marginTop: "0.5rem"
                                    }),
                                    u.css({
                                        color: "#F56262",
                                        fontSize: "1rem",
                                        margin: "0.5rem 0"
                                    }),
                                    W.empty(),
                                    W.append(c),
                                    W.append(u)
                                } else l = !1,
                                v ? D = D + 4 * j - 2 * S: D += 4 * j,
                                v = !1,
                                N.empty(),
                                V.append(q),
                                N.append(V),
                                q.on(B,
                                function() {
                                    N.css({
                                        "pointer-events": "none",
                                        opacity: 0
                                    })
                                });
                                t(D)
                            } else console.error("getResultInfo", e)
                        })
                    }
                });
                var N = (0, s["default"])("<div></div>"),
                F = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>今天没有机会了，下次再来吧</div></div>"),
                H = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>抽奖已过期</div></div>"),
                L = (0, s["default"])("<div><div class='tip-title'>无法抽奖</div><div class='tip-body'>请在微信中打开</div></div>"),
                V = (0, s["default"])("<div><div class='tip-title'>很遗憾</div><div class='tip-body'>没有抽中呢，再接再厉哟</div></div>"),
                q = (0, s["default"])("<div>确认</div>");
                N.css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.8)",
                    zIndex: 5,
                    opacity: 0,
                    transition: "opacity .5s ease",
                    "pointer-events": "none"
                }),
                V.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                H.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                L.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                F.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                q.css({
                    color: "#FFF",
                    width: "13rem",
                    margin: "0 auto",
                    background: "#18CCC0",
                    borderRadius: "6px",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    cursor: "pointer"
                }),
                V.append(q),
                N.append(V),
                o.append(N);
                var J = (0, s["default"])("<div></div>"),
                Q = (0, s["default"])("<div><div class='tip-title'>恭喜您赢得</div></div>"),
                W = (0, s["default"])("<div></div>"),
                Y = (0, s["default"])("<div>请填写您的信息以便我们联系您</div>"),
                G = (0, s["default"])('<input class="lottery-form" type="text" required="required" placeholder="您的姓名" />'),
                K = (0, s["default"])('<input class="lottery-form" type="text" required="required" placeholder="联系电话" />'),
                Z = (0, s["default"])('<input class="lottery-form" type="text" placeholder="备注" />'),
                X = (0, s["default"])("<div>请正确输入信息</div>"),
                _ = (0, s["default"])("<div>提交信息</div>"),
                $ = (0, s["default"])("<div><div class='tip-title2'>信息已提交</div><div class='tip-body2'>请耐心等候，我们的客服会跟您联系发奖事宜</div></div>"),
                ee = (0, s["default"])("<div>确认</div>");
                J.css({
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    background: "rgba(0,0,0,0.8)",
                    zIndex: 5,
                    opacity: 0,
                    transition: "opacity .5s ease",
                    "pointer-events": "none"
                }),
                Q.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "28rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px"
                }),
                Y.css({
                    marginTop: "0.8rem",
                    textAlign: "left",
                    padding: "1rem 0",
                    borderTop: "1px solid #d8d8d8"
                }),
                X.css({
                    fontSize: ".8rem",
                    textAlign: "left",
                    color: "#F56262",
                    opacity: 0
                }),
                _.css({
                    background: "#F56262",
                    borderRadius: "6px",
                    width: "15rem",
                    margin: "1rem auto",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    color: "#fff"
                }),
                $.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: "15rem",
                    height: "10rem",
                    padding: "1rem",
                    textAlign: "center",
                    background: "#fff",
                    borderRadius: "8px",
                    visibility: "hidden"
                }),
                ee.css({
                    color: "#FFF",
                    width: "13rem",
                    margin: "0 auto",
                    background: "#18CCC0",
                    borderRadius: "6px",
                    height: "2.5rem",
                    lineHeight: "2.5rem",
                    cursor: "pointer"
                }),
                Q.append(W),
                Q.append(Y),
                Q.append(G),
                Q.append(K),
                Q.append(Z),
                Q.append(X),
                Q.append(_),
                J.append(Q),
                $.append(ee),
                J.append($),
                o.append(J),
                _.on(B,
                function() {
                    var e = /^1(3|4|5|8)[0-9]{9}$/,
                    t = /.+/,
                    i = G[0].value,
                    o = K[0].value,
                    a = Z[0].value;
                    t.test(i) ? e.test(o) ? (X.css({
                        opacity: 0
                    }), s["default"].ajax({
                        url: d["default"].getLotteryUrl("record"),
                        type: "post",
                        data: {
                            lottery_id: r.lotteryId,
                            event_id: window.Config.getProjectId(),
                            open_id: c["default"].getCookie(window.Config.wxCookie),
                            realname: i,
                            tel: o,
                            remark: a
                        },
                        dataType: "json"
                    }).always(function(e) {
                        e && 200 == e.code ? n() : (X.text(e.message), X.css({
                            opacity: 1
                        }), console.error("setPersonalInfo", e))
                    })) : (X.text("请正确输入联系手机"), X.css({
                        opacity: 1
                    })) : (X.text("请输入名字"), X.css({
                        opacity: 1
                    }))
                }),
                ee.on(B,
                function() {
                    J.css({
                        "pointer-events": "none",
                        opacity: 0
                    }),
                    Q.css({
                        visibility: "visible"
                    }),
                    $.css({
                        visibility: "hidden"
                    })
                }),
                this.eleDom = o
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = function() {
        function e(t, i) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.eleDom = this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                var e = (0, s["default"])("<div></div>"),
                t = (0, s["default"])("<div></div>"),
                n = this;
                e.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    opacity: this.obj.opacity,
                    transform: c["default"].rotate(this.obj.rotate)
                }),
                t.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: this.scale(this.obj.borderRadius)
                }),
                e.append(t);
                var o = (0, s["default"])("<div></div>");
                o.css({
                    width: "100%",
                    height: "100%",
                    overflow: "hidden"
                });
                var a = (0, s["default"])("<div></div>");
                a.css({
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    position: "absolute",
                    top: 0
                });
                var r = (0, s["default"])("<div></div>");
                r.css({
                    width: this.scale(108),
                    height: this.scale(72),
                    background: "#18ccc0",
                    position: "absolute",
                    bottom: this.scale(9),
                    right: this.scale(6),
                    borderRadius: this.scale(4),
                    boxShadow: "0 " + this.scale(2) + " " + this.scale(4) + " 0 rgba(0,0,0,0.50)",
                    fontFamily: "MicrosoftYaHei",
                    fontSize: this.scale(28),
                    color: "#ffffff",
                    textAlign: "center",
                    lineHeight: this.scale(72)
                }),
                r.append("导航"),
                t.append(o),
                t.append(a),
                t.append(r);
                var l = "ontouchend" in document ? "touchstart": "click";
                r.on(l,
                function() {
                    window.location.href = "https://apis.map.qq.com/tools/routeplan/eword=" + n.obj.addr + "&epointx=" + n.obj.latlng.lng + "&epointy=" + n.obj.latlng.lat + "?referer=maka&key=52HBZ-FHLKX-O3543-7XLAA-U5HP3-B3BWN"
                });
                var u = new qq.maps.LatLng(this.obj.latlng.lat, this.obj.latlng.lng),
                d = {
                    zoom: this.obj.zoom,
                    center: u,
                    mapTypeId: qq.maps.MapTypeId.ROADMAP,
                    zoomControl: !1,
                    panControl: !1,
                    mapTypeControl: !1
                },
                f = new qq.maps.Point(10, 25),
                p = new qq.maps.Size(21, 31),
                h = new qq.maps.Point(0, 0),
                g = new qq.maps.MarkerImage(i(65), p, h, f),
                m = new qq.maps.Map(o[0], d);
                new qq.maps.Marker({
                    position: u,
                    draggable: !1,
                    icon: g,
                    map: m
                });
                return e
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = function() {
        function e(t, i) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.btns = [],
            this.selectBtn = [],
            this.radios = [],
            this.inputs = [],
            this.tips = [],
            this.requires = {},
            this.errorTips = [],
            this.eleDom = this.initDom(),
            this.answers = [],
            this.radiosAnswers = {}
        }
        return a(e, [{
            key: "doValidateInputs",
            value: function() {
                if (!this.obj.inputs) return ! 0;
                this.errorTips = [],
                this.answers = [];
                for (var e = !0,
                t = 0; t < this.obj.inputs.length; t++) {
                    var i = this.obj.inputs[t],
                    n = "",
                    o = this.inputs[t].val().replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                    if (this.answers.push(o), i.require && "" == o) n = "请填写 " + i.str,
                    e = !1,
                    this.inputs[t].val("");
                    else if ("" != o) {
                        var a = !0;
                        switch (i.regularType) {
                        case "phone":
                            var r = /^1\d{10}$/,
                            s = /^0\d{2,3}-?\d{7,8}$/;
                            a = r.test(o) || s.test(o);
                            break;
                        case "email":
                            var l = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
                            a = l.test(o);
                            break;
                        case "qq":
                            var c = /^[1-9][0-9]{4,9}$/;
                            a = c.test(o)
                        }
                        a || (n = "请填写 正确格式", e = !1, this.inputs[t].val(""))
                    }
                    this.errorTips.push(n),
                    n ? (this.tips[t].empty(), this.requires[t] && this.requires[t].empty(), this.tips[t].append(n), this.inputs[t].css({
                        border: this.scale(i.border) + " solid #f67171"
                    }), this.tips[t].css({
                        color: "#f67171"
                    })) : this.inputs[t].css({
                        border: this.scale(i.border) + " solid " + this.obj.btnColor
                    })
                }
                return e
            }
        },
        {
            key: "doValidateRadio",
            value: function() {
                if (!this.obj.single) return ! 0;
                var e = !0;
                this.radiosAnswers = {};
                for (var t = 0; t < this.obj.single.length; t++) for (var i = this.obj.single[t].radio, n = 0; n < i.length; n++) {
                    var o = i[n]; - 1 == this.selectBtn[t] ? (this.btns[t][n].css({
                        border: this.scale(o.btn.border) + " solid #f67171"
                    }), e = !1) : n != this.selectBtn[t] ? this.btns[t][n].css({
                        border: this.scale(o.btn.border) + " solid " + o.btn.color
                    }) : this.radiosAnswers[t] = o.font.str
                }
                return e
            }
        },
        {
            key: "initDom",
            value: function() {
                var e = this,
                t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<div></div>"),
                n = this;
                t.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    opacity: this.obj.opacity,
                    transform: c["default"].rotate(this.obj.rotate)
                }),
                i.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: this.scale(this.obj.borderRadius)
                }),
                t.append(i);
                var o = "ontouchend" in document ? "touchstart": "click";
                if (this.obj.single) for (var a = function(t) {
                    e.selectBtn.push( - 1),
                    e.btns.push([]);
                    var a = e.obj.single[t];
                    if (a.title) {
                        var r = (0, s["default"])("<div></div>"),
                        l = a.title;
                        r.css({
                            position: "absolute",
                            top: e.scale(l.top),
                            left: e.scale(l.padding),
                            right: e.scale(l.padding),
                            height: e.scale(l.height),
                            textAlign: e.scale(l.textAlign),
                            color: e.scale(l.color),
                            fontSize: e.scale(l.fontSize),
                            lineHeight: e.scale(l.lineHeight)
                        }),
                        r.append(l.str),
                        i.append(r)
                    }
                    if (a.radio) for (var c = function(r) {
                        var l = (0, s["default"])("<div></div>"),
                        c = a.radio[r];
                        l.css({
                            position: "absolute",
                            top: e.scale(c.top),
                            left: e.scale(c.padding),
                            right: e.scale(c.padding),
                            height: e.scale(c.height)
                        }),
                        e.radios.push(l),
                        i.append(l);
                        var u = c.btn,
                        d = (0, s["default"])("<div></div>");
                        d.css({
                            position: "absolute",
                            height: "100%",
                            width: e.scale(u.width),
                            background: u.background,
                            border: e.scale(u.border) + " solid " + u.color,
                            borderRadius: e.scale(u.borderRadius),
                            boxSizing: "border-box"
                        }),
                        e.btns[t].push(d),
                        l.on(o,
                        function() {
                            d.css({
                                border: n.scale(u.selectWid) + " solid " + n.obj.btnColor
                            }),
                            n.selectBtn[t] = r;
                            for (var e = 0; e < n.btns[t].length; e++) e != r && n.btns[t][e].css({
                                border: n.scale(u.border) + " solid " + u.color
                            })
                        }),
                        l.append(d);
                        var f = c.font,
                        p = (0, s["default"])("<div></div>");
                        p.css({
                            position: "absolute",
                            height: "100%",
                            left: e.scale(f.left),
                            opacity: f.opacity,
                            fontSize: e.scale(f.fontSize),
                            color: f.color,
                            lineHeight: e.scale(f.lineHeight),
                            textAlign: f.textAlign
                        }),
                        p.append(f.str),
                        l.append(p)
                    },
                    u = 0; u < a.radio.length; u++) c(u)
                },
                r = 0; r < this.obj.single.length; r++) a(r);
                if (this.obj.inputs) for (var l = function(t) {
                    var o = e.obj.inputs[t],
                    a = (0, s["default"])("<span></span>");
                    a.css({
                        position: "absolute",
                        outline: "none",
                        border: 0,
                        top: e.scale(o.top),
                        left: e.scale(o.padding),
                        right: e.scale(o.padding),
                        height: e.scale(o.height),
                        borderRadius: e.scale(o.borderRadius),
                        color: o.color,
                        fontSize: e.scale(o.fontSize) + "!important"
                    }),
                    i.append(a);
                    var r = void 0;
                    r = o.textArea ? (0, s["default"])("<textarea></textarea>") : "date" == o.regularType ? (0, s["default"])("<input type=date>") : (0, s["default"])("<input>"),
                    r.css({
                        position: "absolute",
                        outline: "none",
                        textIndent: "1em",
                        fontSize: e.scale(28),
                        border: e.scale(o.border) + " solid " + e.obj.btnColor,
                        width: e.scale(e.obj.w - 2 * o.padding),
                        height: "100%",
                        borderRadius: e.scale(o.borderRadius),
                        background: o.background,
                        color: e.obj.textColor
                    }),
                    a.append(r),
                    e.inputs.push(r);
                    var l = (0, s["default"])("<span></span>");
                    l.css({
                        position: "relative",
                        fontSize: e.scale(28),
                        color: "#4b4b4b",
                        textAlign: "left",
                        lineHeight: e.scale(o.lineHeight),
                        marginLeft: e.scale(20),
                        marginRight: e.scale(6),
                        pointerEvents: "none",
                        opacity: .7
                    }),
                    l.append(o.str),
                    e.tips.push(l),
                    a.append(l);
                    var c = void 0;
                    o.require && (c = (0, s["default"])("<span></span>"), c.css({
                        position: "relative",
                        fontSize: e.scale(24),
                        color: "#fa7474",
                        textAlign: "left",
                        pointerEvents: "none",
                        lineHeight: e.scale(o.lineHeight)
                    }), c.append("*"), a.append(c), e.requires[t] = c),
                    r.on("focus",
                    function() {
                        var e = r.val().replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                        e || r.val(""),
                        l.empty(),
                        c && c.empty(),
                        n.errorTips[t] && (n.errorTips[t] = void 0)
                    }),
                    r.on("blur",
                    function() {
                        var e = r.val().replace(/^\s\s*/, "").replace(/\s\s*$/, "");
                        e || n.errorTips[t] || (l.css({
                            color: "#4b4b4b"
                        }), r.css({
                            border: n.scale(o.border) + " solid " + n.obj.btnColor
                        }), l.empty(), l.append(o.str), c && (c.empty(), c.append("*")))
                    })
                },
                r = 0; r < this.obj.inputs.length; r++) l(r);
                return this.obj.submit && !
                function() {
                    var t = e.obj.submit,
                    a = (0, s["default"])("<div></div>");
                    a.css({
                        position: "absolute",
                        top: e.scale(t.top),
                        left: e.scale(t.padding),
                        right: e.scale(t.padding),
                        height: e.scale(t.height),
                        borderRadius: e.scale(t.borderRadius),
                        lineHeight: e.scale(t.lineHeight),
                        background: e.obj.btnColor,
                        fontSize: e.scale(t.fontSize),
                        color: t.color,
                        textAlign: t.textAlign
                    }),
                    a.append(t.str),
                    i.append(a);
                    var r = !1;
                    a.on(o,
                    function() {
                        if (!r) {
                            if (n.doValidateInputs() && n.doValidateRadio()) {
                                for (var e = {
                                    event_id: window.Config.getProjectId(),
                                    content: []
                                },
                                i = 0; i < n.inputs.length; i++) e.content.push({
                                    module_id: n.obj.inputs[i].moduleId,
                                    answer: n.answers[i]
                                }),
                                n.inputs[i].unbind();
                                for (var i = 0; i < n.radios.length; i++) n.radios[i].unbind();
                                for (var i = 0; n.obj.single && i < n.obj.single.length; i++) e.content.push({
                                    module_id: n.obj.single[i].title.moduleId,
                                    answer: n.radiosAnswers[i]
                                });
                                e.content = JSON.stringify(e.content),
                                r = !0,
                                s["default"].ajax({
                                    type: "post",
                                    url: window.Config.newPostFormUrl + n.obj.formid,
                                    dataType: "html",
                                    cache: !1,
                                    data: e,
                                    success: function() {
                                        a.css({
                                            background: "gray"
                                        }),
                                        a.empty(),
                                        a.unbind(),
                                        a.append(t.beforeStr)
                                    },
                                    error: function() {},
                                    always: function() {
                                        r = !1
                                    }
                                })
                            } (0, s["default"])("input").blur()
                        }
                    })
                } (),
                t
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = (n(u), i(3)),
    f = (n(d), i(7)),
    p = n(f);
    i(53);
    var h = function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.page = n,
            this.eleDom = void 0,
            this.onPageFun = void 0,
            this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                var e = (0, s["default"])("<div></div>"),
                t = (0, s["default"])("<ul></ul>"),
                i = (0, s["default"])("<div class='un-nav'></div>");
                e.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    overflow: "hidden",
                    perspective: "1600px",
                    background: "#333"
                }),
                t.css({
                    margin: 0,
                    padding: 0
                });
                var n = this,
                o = this.obj,
                a = [],
                r = [],
                l = 0,
                u = o.width ? n.scale(o.width) : n.scale(o.w),
                d = {
                    "default": function(e) {
                        return {
                            opacity: 0 === e ? 1 : 0,
                            transition: "opacity 0.5s ease"
                        }
                    },
                    left: {
                        opacity: 0
                    },
                    right: {
                        opacity: 0
                    },
                    current: {
                        opacity: 1
                    }
                },
                f = {
                    "default": function(e) {
                        return {
                            transform: 0 === e ? "translateX(0)": "translateX(" + u + ")",
                            transition: "transform 0.5s ease"
                        }
                    },
                    left: {
                        transform: "translateX(-" + u + ")"
                    },
                    right: {
                        transform: "translateX(" + u + ")"
                    },
                    current: {
                        transform: "translateX(0)"
                    }
                },
                h = {
                    "default": function(e) {
                        return {
                            transform: 0 === e ? "scale(1, 1)": "scale(0.2, 0.2)",
                            transition: "transform 0.5s ease, opacity .2s ease",
                            opacity: 0 === e ? 1 : 0
                        }
                    },
                    left: {
                        transform: "scale(0.2, 0.2)",
                        opacity: 0
                    },
                    right: {
                        transform: "scale(0.2, 0.2)",
                        opacity: 0
                    },
                    current: {
                        transform: "scale(1, 1)",
                        opacity: 1
                    }
                },
                g = {
                    "default": function(e) {
                        return {
                            height: 0 === e ? "100%": 0,
                            transition: "height 1s ease",
                            zIndex: 0 === e ? 2 : 1
                        }
                    },
                    left: {
                        height: 0,
                        zIndex: 2,
                        transition: "height 1s ease"
                    },
                    right: {
                        height: 0,
                        zIndex: 2,
                        transition: "height 1s ease"
                    },
                    current: {
                        height: "100%",
                        zIndex: 1,
                        transition: "height 0.01s ease"
                    }
                },
                m = {
                    "default": function(e) {
                        return {
                            transition: "transform .7s cubic-bezier(0.7, 0, 0.3, 1), opacity 1s ease",
                            transform: 0 === e ? "translateX(0) scale(1) rotateY(0)": "translateX(100%) scale(1) rotateY(90deg)",
                            opacity: 0 === e ? 1 : 0
                        }
                    },
                    left: {
                        opacity: 0,
                        transform: "translateX(-100%) scale(1) rotateY(-90deg)"
                    },
                    right: {
                        opacity: 0,
                        transform: "translateX(100%) scale(1) rotateY(90deg)"
                    },
                    current: {
                        opacity: 1,
                        transform: "translateX(0) scale(1) rotateY(0)"
                    }
                },
                v = o.transitonName,
                w = f;
                switch (v) {
                case "gradually":
                    w = d;
                    break;
                case "translate":
                    w = f;
                    break;
                case "scale":
                    w = h;
                    break;
                case "swipe":
                    w = g;
                    break;
                case "3dtranslate":
                    w = m
                }
                o.data.map(function(e, l) {
                    var d = (0, s["default"])("<li class='swipe-slide-" + l + "'></li>"),
                    f = (0, s["default"])("<div></div>"),
                    p = (0, s["default"])("<button class='" + (0 === l ? "un-nav-item un-nav-item-current": "un-nav-item") + "'></button>");
                    d.css(c["default"].obj_assign({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: u,
                        height: o.height ? n.scale(o.height) : n.scale(o.h),
                        overflow: "hidden",
                        background: "#ffffff"
                    },
                    w["default"](l))),
                    f.css({
                        position: "absolute",
                        top: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage: "url(" + window.Config.getImgUrl(e.picid) + ")",
                        "background-repeat": "no-repeat",
                        "background-size": n.scale(e.inw),
                        "background-position": n.scale(e.inleft) + " " + n.scale(e.intop)
                    }),
                    d.append(f),
                    i.append(p),
                    a.push(d),
                    r.push(p),
                    t.append(d)
                }),
                e.append(t),
                e.append(i),
                this.eleDom = e;
                var b = function() {
                    if (! (l >= a.length - 1)) {++l;
                        var e = a[l],
                        t = a[l - 1],
                        i = a[l + 1];
                        e.css(w.current),
                        r[l].addClass("un-nav-item-current"),
                        r[l - 1].removeClass("un-nav-item-current"),
                        t && t.css(w.left),
                        i && i.css(w.right)
                    }
                },
                y = function() {
                    if (! (0 >= l)) {--l;
                        var e = a[l],
                        t = a[l - 1],
                        i = a[l + 1];
                        e.css(w.current),
                        r[l].addClass("un-nav-item-current"),
                        r[l + 1].removeClass("un-nav-item-current"),
                        t && t.css(w.left),
                        i && i.css(w.right)
                    }
                },
                k = !0,
                A = function C() {
                    if (k) l >= a.length - 1 && (k = !1),
                    setTimeout(function() {
                        b(),
                        C()
                    },
                    1e3 * o.transitonTime);
                    else {
                        if (0 === l) return k = !0,
                        void y();
                        setTimeout(function() {
                            y(),
                            C()
                        },
                        10)
                    }
                };
                o.automatic && o.transitonTime && (this.onPageFun = A);
                var x = new p["default"](e.get(0));
                x.on("swipeleft", b),
                x.on("swiperight", y)
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "slideCyclicCall",
            value: function(e) {
                this.onPageFun && e === this.page.index && this.onPageFun()
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l),
    function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom(t, i)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t) {
                var n = (0, s["default"])('<a href="tel:' + e.tel + '"></a>'),
                o = (0, s["default"])("<div></div>"),
                a = i(63),
                r = (0, s["default"])("<div>" + a + "</div>");
                r.find("svg").attr("preserveAspectRatio", "none meet").css({
                    width: "100%",
                    height: "100%",
                    opacity: this.obj.opacity
                }),
                r.find("[fill]").attr("fill", this.obj.ftColor);
                var l = (0, s["default"])("<span>" + r.html() + "</span>"),
                c = (0, s["default"])("<span>" + this.obj.text + "</span>");
                l.css({
                    position: "absolute",
                    left: this.scale((parseInt(this.obj.ftsize, 10) + 40) / 2),
                    top: "50%",
                    "margin-left": "-" + this.scale(parseInt(this.obj.ftsize) / 2),
                    "margin-top": "-" + this.scale(parseInt(this.obj.ftsize) / 2),
                    width: this.scale(this.obj.ftsize),
                    height: this.scale(this.obj.ftsize),
                    fontSize: this.scale(this.obj.ftsize)
                }),
                n.css({
                    position: "absolute",
                    color: this.obj.ftColor,
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    transform: "rotate(" + this.obj.rotate + "deg)",
                    opacity: this.obj.opacity,
                    fontSize: this.scale(this.obj.ftsize),
                    "box-sizing": "border-box",
                    "text-decoration": "none"
                }),
                o.css({
                    paddingRight: this.scale(20),
                    background: this.obj.bgColor,
                    borderRadius: this.scale(this.obj.borderradius * (parseInt(this.obj.ftsize) + 40) / 200),
                    lineHeight: this.scale(parseInt(this.obj.ftsize) + 40),
                    "text-decoration": "none",
                    "white-space": "nowrap",
                    paddingLeft: this.scale(parseInt(this.obj.ftsize, 10) + 40)
                }),
                o.append(l),
                o.append(c),
                n.append(o),
                this.eleDom = n
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ());
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = (n(u),
    function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.bgscale = n,
            this.msDom = void 0,
            this.dateDom = void 0,
            this.messageDiv = void 0,
            this.eleDom = this.initDom()
        }
        return a(e, [{
            key: "fixDate",
            value: function(e) {
                return 10 > e && (e = "0" + e),
                e
            }
        },
        {
            key: "setTimer",
            value: function() {
                function e() {
                    var e = new Date,
                    i = t.fixDate(e.getHours()),
                    n = t.fixDate(e.getMinutes());
                    t.msDom.text(i + ":" + n);
                    var o = t.fixDate(e.getMonth() + 1),
                    a = t.fixDate(e.getDate()),
                    r = e.getDay();
                    switch (r) {
                    case 0:
                        r = "星期天";
                        break;
                    case 1:
                        r = "星期一";
                        break;
                    case 2:
                        r = "星期二";
                        break;
                    case 3:
                        r = "星期三";
                        break;
                    case 4:
                        r = "星期四";
                        break;
                    case 5:
                        r = "星期五";
                        break;
                    case 6:
                        r = "星期六"
                    }
                    var s = o + "月" + a + "日 " + r;
                    t.dateDom.text(s)
                }
                var t = this;
                setInterval(function() {
                    e()
                },
                6e4),
                e()
            }
        },
        {
            key: "initDom",
            value: function() {
                var e = (0, s["default"])("<div></div>"),
                t = (0, s["default"])("<div></div>");
                e.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    transform: c["default"].rotate(this.obj.rotate)
                }),
                t.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%"
                }),
                e.append(t);
                var n = (0, s["default"])("<div></div>");
                n.css({
                    position: "absolute",
                    width: 640 * this.bgscale + "px",
                    height: 1008 * this.bgscale + "px",
                    top: "50%",
                    left: "50%",
                    "margin-left": -320 * this.bgscale + "px",
                    "margin-top": -504 * this.bgscale + "px",
                    overflow: "hidden"
                }),
                e.append(n);
                var o = this.obj.bgDom;
                o.css({
                    position: "absolute",
                    width: 640 * this.bgscale + "px",
                    height: 1008 * this.bgscale + "px",
                    top: 0,
                    left: 0,
                    userDrag: "none",
                    userSelect: "none"
                }),
                n.append(o),
                t.append(n);
                var a = (0, s["default"])("<div></div>");
                a.css({
                    position: "absolute",
                    textAlign: "center",
                    top: this.scale(this.obj.timeDiv.top),
                    left: this.scale(this.obj.timeDiv.left),
                    width: this.scale(this.obj.timeDiv.w),
                    height: this.scale(this.obj.timeDiv.h),
                    color: this.obj.timeDiv.ftColor,
                    fontSize: this.scale(this.obj.timeDiv.ftsize),
                    lineHeight: this.scale(this.obj.timeDiv.lineHeight),
                    fontFamily: "Helvetica",
                    fontWeight: 100
                }),
                t.append(a),
                this.msDom = a;
                var r = (0, s["default"])("<div></div>");
                r.css({
                    position: "absolute",
                    textAlign: "center",
                    fontFamily: "SourceHanSansCN-Normal",
                    top: this.scale(this.obj.dateDiv.top),
                    left: this.scale(this.obj.dateDiv.left),
                    width: this.scale(this.obj.dateDiv.w),
                    height: this.scale(this.obj.dateDiv.h),
                    color: this.obj.dateDiv.ftColor,
                    fontSize: this.scale(this.obj.dateDiv.ftsize),
                    lineHeight: this.scale(this.obj.dateDiv.lineHeight)
                }),
                t.append(r),
                this.dateDom = r;
                var l = (0, s["default"])("<div></div>");
                l.css({
                    position: "absolute",
                    overflow: "hidden",
                    borderRadius: this.scale(13),
                    top: this.scale(this.obj.messageDiv.top),
                    left: this.scale(this.obj.messageDiv.left),
                    right: this.scale(this.obj.messageDiv.right),
                    height: this.scale(this.obj.messageDiv.h)
                });
                var u = (0, s["default"])("<div></div>");
                u.css({
                    background: "rgba(255,255,255,0.60)",
                    content: "",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    filter: "blur(" + this.scale(10) + ")",
                    margin: this.scale( - 20),
                    pointerEvents: "none"
                }),
                l.append(u);
                var d = (0, s["default"])("<div></div>");
                d.css({
                    position: "absolute",
                    overflow: "hidden",
                    borderRadius: this.scale(13) + " " + this.scale(13) + " 0px 0px",
                    top: this.scale(this.obj.messageDiv.inDiv.top),
                    left: this.scale(this.obj.messageDiv.inDiv.left),
                    width: "100%",
                    height: this.scale(this.obj.messageDiv.inDiv.h),
                    pointerEvents: "none"
                }),
                l.append(d);
                var f = (0, s["default"])("<div></div>");
                f.css({
                    background: "rgba(255,255,255,0.40)",
                    content: "",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    filter: "blur(" + this.scale(10) + ")",
                    margin: this.scale( - 20),
                    pointerEvents: "none"
                }),
                d.append(f);
                var p = this.obj.messageDiv.inDiv.logo.src;
                switch (p) {
                case "1":
                    p = '"' + i(75) + '"';
                    break;
                case "2":
                    p = '"' + i(70) + '"';
                    break;
                case "3":
                    p = '"' + i(64) + '"';
                    break;
                default:
                    p = p
                }
                var h = (0, s["default"])("<img src=" + p + ' alt="" />');
                h.css({
                    position: "absolute",
                    overflow: "hidden",
                    top: this.scale(this.obj.messageDiv.inDiv.logo.top),
                    left: this.scale(this.obj.messageDiv.inDiv.logo.left),
                    width: this.scale(this.obj.messageDiv.inDiv.logo.w),
                    height: this.scale(this.obj.messageDiv.inDiv.logo.h),
                    pointerEvents: "none"
                }),
                d.append(h);
                var g = (0, s["default"])("<div></div>");
                g.css({
                    position: "absolute",
                    overflow: "hidden",
                    top: this.scale(this.obj.messageDiv.inDiv.messageTitle.top),
                    left: this.scale(this.obj.messageDiv.inDiv.messageTitle.left),
                    width: this.scale(this.obj.messageDiv.inDiv.messageTitle.w),
                    height: this.scale(this.obj.messageDiv.inDiv.messageTitle.h),
                    color: this.obj.messageDiv.inDiv.messageTitle.ftColor,
                    fontSize: this.scale(this.obj.messageDiv.inDiv.messageTitle.ftsize),
                    opacity: this.obj.messageDiv.inDiv.messageTitle.opacity,
                    lineHeight: this.scale(this.obj.messageDiv.inDiv.messageTitle.lineHeight),
                    pointerEvents: "none",
                    maxWidth: this.scale(400),
                    whiteSpace: "nowrap"
                }),
                g.text(this.obj.messageDiv.inDiv.messageTitle.str),
                d.append(g);
                var m = (0, s["default"])("<div></div>");
                m.css({
                    position: "absolute",
                    right: this.scale(21),
                    opacity: .85,
                    fontSize: this.scale(24),
                    color: "#000000",
                    lineHeight: this.scale(60),
                    letterSpacing: this.scale(1.53),
                    pointerEvents: "none"
                }),
                m.text("现在"),
                d.append(m);
                var v = (0, s["default"])("<div></div>");
                v.css({
                    position: "absolute",
                    overflow: "hidden",
                    top: this.scale(this.obj.messageDiv.message.top),
                    left: this.scale(this.obj.messageDiv.message.left),
                    right: this.scale(this.obj.messageDiv.message.right),
                    height: this.scale(this.obj.messageDiv.message.h),
                    color: this.obj.messageDiv.message.ftColor,
                    fontSize: this.scale(this.obj.messageDiv.message.ftsize),
                    lineHeight: this.scale(this.obj.messageDiv.message.lineHeight),
                    pointerEvents: "none"
                }),
                v.text(this.obj.messageDiv.message.str),
                l.append(v);
                var w = (0, s["default"])("<div></div>");
                return w.css({
                    position: "absolute",
                    fontSize: this.scale(20),
                    opacity: .75,
                    letterSpacing: this.scale(1.25),
                    left: this.scale(25),
                    top: this.scale(122),
                    height: this.scale(20),
                    color: "#000000",
                    lineHeight: this.scale(20),
                    pointerEvents: "none"
                }),
                w.text("滑动查看更多"),
                l.append(w),
                t.append(l),
                this.messageDiv = l,
                this.setTimer(),
                e
            }
        },
        {
            key: "animateToNext",
            value: function(e) {
                if (this.messageDiv) {
                    var t = this.messageDiv.width(),
                    i = parseInt(this.scale(this.obj.messageDiv.left)),
                    n = parseInt(this.scale(this.obj.messageDiv.right));
                    this.messageDiv.css({
                        left: n + i + t + "px",
                        right: -t + "px",
                        transition: "left 0.8s, right 0.8s"
                    });
                    var o = this;
                    setTimeout(function() {
                        e && e(),
                        setTimeout(function() {
                            o.messageDiv.css({
                                left: o.scale(o.obj.messageDiv.left),
                                right: o.scale(o.obj.messageDiv.right),
                                transition: ""
                            })
                        },
                        2e3)
                    },
                    800)
                }
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "getEventAreaDom",
            value: function() {
                return this.messageDiv
            }
        }]),
        e
    } ());
    t["default"] = d,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = (n(u),
    function() {
        function e(t, i, n) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.bgscale = n,
            this.time = 0,
            this.timeDom = void 0,
            this.timer = void 0,
            this.hangup = void 0,
            this.eleDom = this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                var e = (0, s["default"])("<div></div>"),
                t = (0, s["default"])("<div></div>");
                e.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    transform: c["default"].rotate(this.obj.rotate)
                }),
                t.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: this.scale(this.obj.borderRadius)
                }),
                e.append(t);
                var n = (0, s["default"])("<div></div>");
                n.css({
                    position: "absolute",
                    width: 640 * this.bgscale + "px",
                    height: 1008 * this.bgscale + "px",
                    top: "50%",
                    left: "50%",
                    "margin-left": -320 * this.bgscale + "px",
                    "margin-top": -504 * this.bgscale + "px",
                    overflow: "hidden"
                }),
                e.append(n);
                var o = this.obj.picDom;
                o.css({
                    position: "absolute",
                    width: 640 * this.bgscale + "px",
                    height: 1008 * this.bgscale + "px",
                    top: 0,
                    left: 0,
                    userDrag: "none",
                    userSelect: "none"
                }),
                n.append(o),
                t.append(n);
                var a = (0, s["default"])("<div></div>");
                a.css({
                    position: "absolute",
                    top: this.scale(this.obj.callerSrc.top),
                    left: this.scale(this.obj.callerSrc.left),
                    width: this.scale(this.obj.callerSrc.w),
                    height: this.scale(this.obj.callerSrc.h),
                    color: this.obj.callerSrc.ftColor,
                    fontSize: this.scale(this.obj.callerSrc.ftsize),
                    lineHeight: this.scale(this.obj.callerSrc.lineHeight),
                    textAlign: "center",
                    whiteSpace: "nowrap"
                }),
                a.append(this.obj.callerSrc.text),
                t.append(a);
                var r = (0, s["default"])("<div></div>");
                r.css({
                    position: "absolute",
                    top: this.scale(this.obj.timeSrc.top),
                    left: this.scale(this.obj.timeSrc.left),
                    width: this.scale(this.obj.timeSrc.w),
                    height: this.scale(this.obj.timeSrc.h),
                    color: this.obj.timeSrc.ftColor,
                    fontSize: this.scale(this.obj.timeSrc.ftsize),
                    lineHeight: this.scale(this.obj.timeSrc.lineHeight),
                    textAlign: "center"
                }),
                r.append("00:00"),
                this.timeDom = r,
                t.append(r);
                var l = this.obj.middleDom;
                l.css({
                    position: "absolute",
                    top: this.scale(this.obj.middle.top),
                    left: this.scale(this.obj.middle.left),
                    width: this.scale(this.obj.middle.w)
                }),
                t.append(l);
                var u = (0, s["default"])("<div></div>");
                u.css({
                    position: "absolute",
                    textAlign: "center",
                    top: this.scale(this.obj.hangup.top),
                    left: this.scale(this.obj.hangup.left),
                    width: this.scale(this.obj.hangup.w)
                });
                var d = (0, s["default"])("<img src = " + i(73) + ">");
                return d.css({
                    height: this.scale(124)
                }),
                u.append(d),
                t.append(u),
                this.hangup = d,
                e
            }
        },
        {
            key: "start",
            value: function() {
                if (this.timeDom) {
                    var e = this;
                    this.timer = setInterval(function() {
                        e.time++;
                        var t = parseInt(e.time / 60);
                        10 > t && (t = "0" + t);
                        var i = e.time % 60;
                        10 > i && (i = "0" + i),
                        e.timeDom.text(t + ":" + i)
                    },
                    1e3)
                }
            }
        },
        {
            key: "stop",
            value: function() {
                this.timeDom && this.timer && (clearInterval(this.timer), this.timer = void 0)
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "getHangUpDom",
            value: function() {
                return this.hangup
            }
        }]),
        e
    } ());
    t["default"] = d,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    function a(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    s = function(e, t, i) {
        for (var n = !0; n;) {
            var o = e,
            a = t,
            r = i;
            n = !1,
            null === o && (o = Function.prototype);
            var s = Object.getOwnPropertyDescriptor(o, a);
            if (void 0 !== s) {
                if ("value" in s) return s.value;
                var l = s.get;
                if (void 0 === l) return;
                return l.call(r)
            }
            var c = Object.getPrototypeOf(o);
            if (null === c) return;
            e = c,
            t = a,
            i = r,
            n = !0,
            s = c = void 0
        }
    },
    l = i(14),
    c = n(l),
    u = i(1),
    d = (n(u), i(12)),
    f = n(d),
    p = function(e) {
        function t(e, i) {
            o(this, t),
            s(Object.getPrototypeOf(t.prototype), "constructor", this).call(this, e, i)
        }
        return a(t, e),
        r(t, [{
            key: "_getShowSwipe",
            value: function(e) {
                return e.content.data.length > 1
            }
        },
        {
            key: "_prepareElements",
            value: function() {
                s(Object.getPrototypeOf(t.prototype), "_prepareElements", this).call(this),
                this._prepareSwipeLegendElm()
            }
        },
        {
            key: "_prepareWrapperElm",
            value: function() {
                s(Object.getPrototypeOf(t.prototype), "_prepareWrapperElm", this).call(this),
                this._prepareSwipeLegendElm(),
                this.showSwipe && this.wrapperElm.append(this.swipeLegendElm)
            }
        },
        {
            key: "_prepareChartOption",
            value: function() {
                var e = s(Object.getPrototypeOf(t.prototype), "_prepareChartOption", this).call(this);
                return e = (0, f["default"])({},
                e, {
                    plotOptions: {
                        pie: {
                            allowPointSelect: !0,
                            dataLabels: {
                                formatter: function() {
                                    return this.percentage > 5 ? this.percentage.toFixed(1) + "%": ""
                                },
                                distance: -parseInt(this.scale(this.width).replace("px", "")) / 6,
                                color: "white",
                                style: {
                                    fontSize: "18px"
                                }
                            },
                            showInLegend: !0
                        }
                    }
                })
            }
        },
        {
            key: "_prepareSwipeLegendElm",
            value: function() {
                var e = this;
                e.swipeLegendElm = $('<div class="chart-swipe-legend"></div>'),
                e.swipeLegendElm.css({
                    position: "absolute",
                    left: 0,
                    top: e.scale(10),
                    width: e.scale(e.width),
                    "text-align": "center",
                    "z-index": 0
                });
                var t = e.obj.content.options.lineColor || "gray";
                if (e.showSwipe) {
                    var i = e.obj.content.data;
                    i.forEach(function(i, n) {
                        var o = $('<span class="swipe-legend-title">' + i.name + "</span>");
                        o.css({
                            margin: e.scale(10),
                            fontSize: 0 === n ? e.scale(24) : e.scale(20),
                            opacity: 0 === n ? 1 : .3,
                            color: t
                        }),
                        o.click(function() {
                            e._renderSwipeLegend(!1),
                            e.curChartIndex = $(this).index(),
                            e._renderSwipeLegend(!0),
                            e.singleSeries(e.curChartIndex, e.obj.content.type)
                        }),
                        e.swipeLegendElm.append(o)
                    }.bind(e))
                }
                return this.swipeLegendElm
            }
        },
        {
            key: "_renderSwipeLegend",
            value: function(e) {
                this.wrapperElm.find(".swipe-legend-title").eq(this.curChartIndex).css({
                    fontSize: e ? this.scale(24) : this.scale(20),
                    opacity: e ? 1 : .3
                })
            }
        }]),
        t
    } (c["default"]);
    t["default"] = p,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(9),
    d = n(u),
    f = i(4),
    p = n(f),
    h = i(66),
    g = n(h),
    m = i(10),
    v = n(m),
    w = function() {
        function e() {
            o(this, e),
            this.element = (0, s["default"])(".maka-preload"),
            this.zoomElement = this.element.find(".zoom"),
            this.loadElement = this.element.find(".load"),
            this.pie1Element = this.loadElement.find(".pie1"),
            this.pie2Element = this.loadElement.find(".pie2"),
            this.thumbElement = this.loadElement.find(".thumb"),
            this.percentageElement = this.element.find(".percentage"),
            this.markElement = this.element.find(".mark"),
            this.percent = 0,
            this.degree = 0,
            this.steps = 0,
            this.curStep = 0,
            this.enabled = !0,
            this.callback = function() {},
            this.finishDelay = 500,
            this.showPreload = !1
        }
        return a(e, [{
            key: "showPreloadArea",
            value: function() {
                this.zoomElement.hide(),
                this.loadElement.fadeIn(),
                this.percentageElement.fadeIn(),
                this.showPreload = !0
            }
        },
        {
            key: "increaseProgress",
            value: function() {
                if (c["default"].log("increaseProgress, step progress: " + (this.curStep + 1) + "/" + this.steps), this.enabled) {
                    if (0 === this.percent) var e = setInterval(function() {
                        if (this.showPreload) {
                            var t = parseInt(360 * this.percent),
                            i = this;
                            t <= this.degree && this.degree < 359 ? this.degree += .01 : 360 === t ? this.degree += 20 : t - this.degree > 180 ? this.degree += 2 : t - this.degree > 40 ? this.degree += 1 : t - this.degree < 10 && 330 > t ? this.degree += 1 : t > this.degree && (this.degree += .5),
                            this.degree > 360 && (this.degree = 360, clearInterval(e), d["default"].send("homeEnd"), p["default"].isTemplate() && !p["default"].isRemoveDesignerAd(), setTimeout(function() {
                                i.callback()
                            },
                            this.finishDelay)),
                            this.loading(this.degree)
                        }
                    }.bind(this), 1);
                    this.curStep++,
                    this.percent = this.curStep / this.steps
                }
            }
        },
        {
            key: "loading",
            value: function(e) {
                180 >= e && e >= 0 ? this.pie1Element.css({
                    transform: "rotate(" + e + "deg)"
                }) : 360 >= e && e > 180 && (this.pie1Element.css({
                    transform: "rotate(180deg)"
                }), this.pie2Element.css({
                    "border-radius": "155px",
                    background: "rgba(175, 228, 221, 1)",
                    transform: "rotate(" + e + "deg)"
                })),
                this.percentageElement.find(".num").html(parseInt(e / 3.6))
            }
        },
        {
            key: "increaseSteps",
            value: function(e) {
                return this.steps += e,
                this.steps
            }
        },
        {
            key: "enable",
            value: function() {
                this.enabled = !0
            }
        },
        {
            key: "disable",
            value: function() {
                this.enabled = !1
            }
        },
        {
            key: "onReady",
            value: function(e) {
                this.callback = e
            }
        },
        {
            key: "showDesingerAd",
            value: function() {
                var e = this;
                this.element.html("");
                var t = (0, s["default"])("<img/>");
                t.attr({
                    src: g["default"]
                }),
                this.element.css({
                    "text-align": "center"
                }),
                window.innerHeight / 646 > window.innerWidth / 410 ? t.css({
                    width: "100%"
                }) : t.css({
                    height: "100%"
                }),
                t.hide(),
                this.element.append(t),
                t.fadeIn(),
                t.on("touchstart mousedown",
                function(t) {
                    t.stopPropagation(),
                    t.preventDefault(),
                    setTimeout(function() {
                        e.callback(),
                        (0, s["default"])(".maka-preload").addClass("pt-page-moveToTop").fadeOut(3e3)
                    },
                    100)
                })
            }
        },
        {
            key: "hide",
            value: function() { (0, v["default"])((0, s["default"])(".maka-preload"), {
                    fromOpacity: 1,
                    opacity: 0,
                    easing: "ease",
                    duration: 300,
                    complete: function() { (0, s["default"])(".maka-preload").hide()
                    }
                })
            }
        }]),
        e
    } ();
    t["default"] = w,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(8),
    p = n(f),
    h = function() {
        function e(t, i) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.eleDom = this.initDom()
        }
        return a(e, [{
            key: "setRealWidth",
            value: function(e, t) {
                var i = e.clone(); (0, s["default"])("body").append(i);
                var n = parseInt(this.scale(t.w)),
                o = i.get(0).offsetWidth,
                a = parseInt(this.scale(t.left));
                o > n && (a = (n - o) / 2, n = o),
                e.css({
                    left: a + "px",
                    width: n + "px"
                }),
                i.remove()
            }
        },
        {
            key: "handlePicPath",
            value: function(e, t) {
                var i = e[t],
                n = i.length;
                return "0" === i[n - 1] && "/" === i[n - 2] && (i = i.slice(0, n - 1) + "64", e[t] = i),
                i
            }
        },
        {
            key: "initDom",
            value: function() {
                var e = this,
                t = (0, s["default"])("<div></div>"),
                n = (0, s["default"])("<div></div>");
                if (t.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    opacity: this.obj.opacity,
                    transform: c["default"].rotate(this.obj.rotate)
                }), n.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: this.scale(this.obj.borderRadius)
                }), t.append(n), this.obj.nickName) {
                    var o = this.obj.nickName,
                    a = (0, s["default"])("<div></div>");
                    a.css({
                        position: "absolute",
                        top: this.scale(o.top),
                        left: this.scale(o.left),
                        height: this.scale(o.h),
                        color: o.color,
                        lineHeight: this.scale(o.lineHeight),
                        textAlign: o.textAlign,
                        fontSize: this.scale(o.ftsize),
                        whiteSpace: "nowrap"
                    });
                    var r = this.obj.ownInfo ? this.obj.ownInfo.nickname: o.str;
                    a.append(r),
                    n.append(a),
                    this.setRealWidth(a, o)
                }
                if (this.obj.cnts) {
                    var l = this.obj.cnts,
                    u = (0, s["default"])("<div></div>");
                    u.css({
                        position: "absolute",
                        top: this.scale(l.top),
                        left: this.scale(l.left),
                        height: this.scale(l.h),
                        color: l.color,
                        lineHeight: this.scale(l.lineHeight),
                        textAlign: l.textAlign,
                        fontSize: this.scale(l.ftsize),
                        whiteSpace: "nowrap"
                    });
                    var f = void 0 === this.obj.rank ? "x": this.obj.rank + "",
                    r = l.str.replace(/%rank%/, f);
                    u.append(r),
                    n.append(u),
                    this.setRealWidth(u, l)
                }
                if (this.obj.btn && !
                function() {
                    var t = e.obj.btn,
                    i = (0, s["default"])("<div></div>"),
                    o = e.obj.canRealy && !e.obj.relayed || !window.Config.isAppNormalMode() ? t.background: t.disbleBackground,
                    a = e.obj.relayed && window.Config.isAppNormalMode() ? t.relayedStr: t.str;
                    i.css({
                        position: "absolute",
                        top: e.scale(t.top),
                        left: e.scale(t.left),
                        width: e.scale(t.w),
                        height: e.scale(t.h),
                        color: t.color,
                        textAlign: t.textAlign,
                        fontSize: e.scale(t.ftsize),
                        borderRadius: e.scale(t.borderRadius),
                        background: o,
                        lineHeight: e.scale(t.lineHeight)
                    }),
                    e.obj.canRealy && !
                    function() {
                        var n = "ontouchend" in document ? "touchstart": "click",
                        o = e;
                        i.on(n,
                        function() {
                            s["default"].ajax({
                                type: "post",
                                url: d["default"].relayUrl(),
                                dataType: "html",
                                cache: !1,
                                data: {
                                    relay_id: o.obj.relayId,
                                    event_id: window.Config.getProjectId(),
                                    open_id: c["default"].getCookie(window.Config.wxCookie)
                                },
                                success: function() {},
                                error: function() {}
                            }),
                            i.css({
                                background: t.disbleBackground
                            }),
                            i.unbind(),
                            i.empty(),
                            i.append(t.relayedStr || "已接力")
                        })
                    } (),
                    i.append(a),
                    n.append(i)
                } (), this.obj.separate) {
                    var h = this.obj.separate,
                    g = (0, s["default"])("<div></div>");
                    g.css({
                        position: "absolute",
                        top: this.scale(h.top),
                        left: this.scale(h.left),
                        width: this.scale(h.w),
                        height: this.scale(h.h),
                        color: h.color,
                        textAlign: h.textAlign,
                        fontSize: this.scale(h.ftsize),
                        lineHeight: this.scale(h.lineHeight)
                    });
                    var m = (0, s["default"])("<div></div>");
                    m.css({
                        "float": "left",
                        height: "49%",
                        borderBottom: "1px solid",
                        width: this.scale(h.spLen)
                    });
                    var v = (0, s["default"])("<div></div>");
                    v.css({
                        "float": "right",
                        height: "49%",
                        borderBottom: "1px solid",
                        width: this.scale(h.spLen)
                    }),
                    g.append(m),
                    g.append(h.str),
                    g.append(v),
                    n.append(g)
                }
                if (this.obj.pic) {
                    var w = this.obj.pic,
                    b = (0, s["default"])("<div></div>");
                    b.css({
                        position: "absolute",
                        top: this.scale(w.top),
                        left: this.scale(w.left),
                        width: this.scale(w.w),
                        height: this.scale(w.h)
                    });
                    var y = (0, s["default"])("<div></div>");
                    y.css({
                        overflow: "hidden",
                        width: "100%",
                        height: "50%",
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "flex-end"
                    });
                    var k = y.clone(),
                    A = this.obj.picSrc || [],
                    x = (0, s["default"])("<img/>");
                    x.css({
                        borderRadius: "100%",
                        width: this.scale(w.picw),
                        height: this.scale(w.pich)
                    });
                    for (var C = w.picCnt / 2,
                    P = 0; P < w.picCnt; P++) {
                        var I = P == w.picCnt - 1 ? x: x.clone();
                        I.attr("src", A[P] ? this.handlePicPath(A, P) : i(74));
                        var S = C > P ? y: k;
                        S.append(I)
                    }
                    b.append(y),
                    b.append(k),
                    n.append(b)
                }
                if (this.obj.ownInfo && this.obj.shareStr && 1 == this.obj.shareTitle && !this.obj.setShared) {
                    var j = -1 === window.projectVersion.link.indexOf("?") ? "?": "&",
                    E = "" + window.projectVersion.link + j + "relay_share=true";
                    if (window.projectVersion.urlParam || (window.projectVersion.urlParam = []), window.projectVersion.urlParam.push("relay_share=true"), c["default"].getUrlParameter("relay_share")) {
                        var r = this.obj.shareStr.replace(/%nickname%/, this.obj.ownInfo.nickname).replace(/%city%/, this.obj.ownInfo.city).replace(/%rank%/, this.obj.rank);
                        window.projectVersion.titleMust = r,
                        p["default"].wxReconfig({
                            title: r,
                            link: E
                        },
                        !0)
                    } else p["default"].wxReconfig({
                        link: E
                    })
                }
                return t
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(4),
    c = n(l),
    u = i(1),
    d = n(u),
    f = i(13),
    p = n(f),
    h = i(6),
    g = n(h),
    m = function() {
        function e(t, i) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this._prepareElements()
        }
        return a(e, [{
            key: "_prepareElements",
            value: function() {
                var e = this,
                t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<a></a>");
                if (t.css({
                    position: "absolute",
                    width: this.scale(this.obj.width),
                    height: this.scale(this.obj.tl),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    transform: "rotate(" + this.obj.rotate + ")deg",
                    opacity: this.obj.opacity
                }), "interaction" === this.obj.model_type && t.css({
                    width: "auto"
                }), "link" === this.obj.model_type || "phone" === this.obj.model_type || "interaction" === this.obj.model_type) {
                    var n = (0, s["default"])("<div></div>"),
                    o = (0, s["default"])("<div></div>");
                    i.css({
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        animationDuration: this.obj.speed + "ms"
                    }),
                    n.css({
                        position: "absolute",
                        width: this.scale(this.obj.picwidth),
                        height: this.scale(this.obj.picheight)
                    });
                    var a = (0, s["default"])(this.obj.buttonSvg);
                    switch (a.css({
                        width: this.scale(this.obj.picwidth),
                        height: this.scale(this.obj.picheight)
                    }), a.find("[fill]").attr({
                        fill: this.obj.ftcolor
                    }), n.append(a), o.css({
                        position: "absolute",
                        left: this.scale(this.obj.picwidth),
                        fontSize: this.scale(this.obj.ftsize),
                        color: this.obj.ftcolor,
                        lineHeight: this.scale(this.obj.lineheight),
                        marginLeft: "5px"
                    }), this.obj.model_type) {
                    case "link":
                        i.attr({
                            href:
                            this._url(this.obj.url)
                        }),
                        o.text(this.obj.con);
                        break;
                    case "phone":
                        o.text(this.obj.con),
                        this.obj.phoneNumber && i.attr("href", "tel:" + this.obj.phoneNumber);
                        break;
                    case "interaction":
                        var r = this,
                        l = function() {
                            r._loadSvg(c["default"].getPButtonUrl(p["default"].pButtonSvg[r.obj.after_pic_id])).then(function(e) {
                                console.log(r.obj),
                                r.obj.buttonAfterSvg = (0, s["default"])(e),
                                r.obj.buttonAfterSvg.find("[fill]").attr({
                                    fill: r.obj.ftcolor
                                }),
                                a.children().replaceWith(r.obj.buttonAfterSvg)
                            })
                        };
                        "clicked" === d["default"].getCookie(this._getButtonId()) ? l() : a.click(function() {
                            e.posting || (e.posting = !0, l(), e._setButtonClick().then(function(t) {
                                o.text(t),
                                e.posting = !0
                            })["catch"](function(e) {
                                d["default"].error(e)
                            }))
                        }.bind(this)),
                        this._getButtonClick().then(function(t) {
                            t.count ? (e.buttonClickCount = t.count, o.text(e.buttonClickCount)) : (e.buttonClickCount = 0, o.text(e.buttonClickCount))
                        }.bind(this))["catch"](function(e) {
                            d["default"].error(e)
                        })
                    }
                    i.append(n),
                    i.append(o)
                } else if ("count_down" === this.obj.model_type) {
                    var u, f, h, g, m, v, w = (0, s["default"])('<span id="day"></span>'),
                    b = (0, s["default"])('<span id="hour"></span>'),
                    y = (0, s["default"])('<span id="minute"></span>'),
                    k = (0, s["default"])('<span id="second"></span>'),
                    A = 1e3,
                    x = 60 * A,
                    C = 60 * x,
                    P = 24 * C;
                    i.css({
                        position: "absolute",
                        width: "100%",
                        animationDuration: this.obj.speed + "ms",
                        textAlign: "center",
                        color: this.obj.ftcolor,
                        lineHeight: this.scale(this.obj.lineheight),
                        fontSize: this.scale(this.obj.ftsize)
                    });
                    var I = this.obj.deadline_date + " " + this.obj.deadline_time;
                    I = I.replace(/-/g, "/");
                    var S = new Date(I),
                    j = S.getTime();
                    if (m = new Date, v = m.getTime(), j - v > 0) {
                        u = Math.floor((j - v) / P),
                        f = Math.floor((j - v) / C) % 24,
                        h = Math.floor((j - v) / x) % 60,
                        g = Math.floor((j - v) / A) % 60,
                        w.append(10 > u ? "0" + u: u),
                        b.append(10 > f ? "0" + f: f),
                        y.append(10 > h ? "0" + h: h),
                        k.append(10 > g ? "0" + g: g),
                        i.append(w),
                        i.append((0, s["default"])('<span class="timeSpace">:</span>')),
                        i.append(b),
                        i.append((0, s["default"])('<span class="timeSpace">:</span>')),
                        i.append(y),
                        i.append((0, s["default"])('<span class="timeSpace">:</span>')),
                        i.append(k);
                        var E = setInterval(function() {
                            v += 1e3,
                            j - v ? (u = Math.floor((j - v) / P), f = Math.floor((j - v) / C) % 24, h = Math.floor((j - v) / x) % 60, g = Math.floor((j - v) / A) % 60, window.document.getElementById("day").innerHTML = 10 > u ? "0" + u: u, window.document.getElementById("hour").innerHTML = 10 > f ? "0" + f: f, window.document.getElementById("minute").innerHTML = 10 > h ? "0" + h: h, window.document.getElementById("second").innerHTML = 10 > g ? "0" + g: g) : clearInterval(E)
                        },
                        1e3)
                    } else i.append("00"),
                    i.append((0, s["default"])('<span class="time-space">:</span>')),
                    i.append("00"),
                    i.append((0, s["default"])('<span class="time-space">:</span>')),
                    i.append("00"),
                    i.append((0, s["default"])('<span class="time-space">:</span>')),
                    i.append("00")
                }
                t.append(i),
                this.eleDom = t
            }
        },
        {
            key: "_url",
            value: function(e) {
                return - 1 === e.indexOf("http") ? "http://" + e: e
            }
        },
        {
            key: "_getButtonId",
            value: function() {
                return c["default"].getProjectId() + "_btn_" + this.obj.button_id
            }
        },
        {
            key: "_setButtonClick",
            value: function() {
                var e = this,
                t = new g["default"](function(t, i) {
                    s["default"].ajax({
                        type: "post",
                        url: c["default"].eventClickUrl,
                        dataType: "json",
                        cache: !1,
                        data: {
                            pid: c["default"].getProjectId(),
                            btnid: e._getButtonId()
                        },
                        success: function() {
                            d["default"].setCookie(e._getButtonId(), "clicked"),
                            t(++e.buttonClickCount)
                        },
                        error: function(e) {
                            i(e)
                        }
                    })
                });
                return t
            }
        },
        {
            key: "_getButtonClick",
            value: function() {
                var e = this,
                t = new g["default"](function(t, i) {
                    s["default"].ajax({
                        type: "get",
                        url: c["default"].eventClickUrl + "/" + c["default"].getProjectId(),
                        dataType: "json",
                        cache: !1,
                        data: {
                            btnid: e._getButtonId()
                        },
                        success: function(e) {
                            t(e.data)
                        },
                        error: function(e) {
                            i(e)
                        }
                    })
                });
                return t
            }
        },
        {
            key: "_loadSvg",
            value: function(e) {
                return console.log(e),
                new g["default"](function(t) {
                    s["default"].get(e,
                    function(e) {
                        t(e)
                    },
                    "text")
                })
            }
        },
        {
            key: "getElement",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = m,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                var e, t = this.obj,
                i = this,
                n = (0, s["default"])("<div></div>"),
                o = (0, s["default"])("<div></div>");
                if (n.css({
                    position: "absolute",
                    width: i.scale(t.w),
                    height: i.scale(t.h),
                    top: i.scale(t.top),
                    left: i.scale(t.left),
                    transform: c["default"].rotate(t.rotate)
                }), o.css({
                    position: "absolute",
                    width: i.scale(t.w),
                    height: i.scale(t.h)
                }), t.svgXml.length && t.svgXml.length > 0) {
                    e = t.svgXml,
                    e.css({
                        position: "absolute",
                        width: i.scale(t.w),
                        height: i.scale(t.h),
                        opacity: t.opacity
                    });
                    var a = (0, s["default"])("<div></div>");
                    if (a.append(e), a.find("svg").get(0).setAttribute("preserveAspectRatio", "none meet"), console.log("rendershaper", t), "" === t.shapecolor && (t.shapecolor = "rgba(0,0,0,0)"), !t.colorScheme && t.shapecolor) e.find("[fill]").attr({
                        fill: t.shapecolor
                    });
                    else {
                        var r = this.obj.colorScheme;
                        for (var l in r) e.find("." + l + "-fill").attr("fill", r[l]),
                        e.find("." + l + "-stroke").attr("stroke", r[l])
                    }
                } else e = (0, s["default"])("<div></div>"),
                e.css({
                    position: "absolute",
                    width: i.scale(t.w),
                    height: i.scale(t.h),
                    backgroundColor: t.shapecolor,
                    opacity: t.opacity
                });
                o.append(e),
                n.append(o),
                this.eleDom = n
            }
        },
        {
            key: "getElement",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = u,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = (n(l),
    function() {
        function e(t, i) {
            o(this, e),
            this.scale = i,
            this.obj = t,
            this.initDom(t, i)
        }
        return a(e, [{
            key: "initDom",
            value: function(e, t) {
                var i = (0, s["default"])("<div></div>"),
                n = (0, s["default"])('<iframe frameborder="0" allowfullscreen></iframe>');
                if (0 === e.urlCon.indexOf("http:") || 0 === e.urlCon.indexOf("https:")) this.urlCon = e.urlCon;
                else {
                    var o = unescape(e.urlCon),
                    a = o.split("src=");
                    if (a.length > 1) {
                        var r = a[1].split(" ");
                        r.length > 1 && (this.urlCon = r[0].slice(1, r[0].length - 1))
                    }
                }
                i.css({
                    position: "absolute",
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    height: this.scale(this.obj.h),
                    width: this.scale(this.obj.w),
                    background: "black"
                }),
                n.css({
                    height: "100%",
                    width: "100%"
                }),
                n.appendTo(i),
                this.eleDom = i
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        },
        {
            key: "removeSrc",
            value: function() {
                var e = this.eleDom;
                console.log("remove src"),
                (0, s["default"])(e.find("iframe")).attr({
                    src: ""
                })
            }
        },
        {
            key: "setSrc",
            value: function() {
                var e = this.eleDom,
                t = this.urlCon;
                console.log("set src"),
                (0, s["default"])(e.find("iframe")).attr({
                    src: t
                })
            }
        }]),
        e
    } ());
    t["default"] = c,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(1),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(3),
    p = n(f),
    h = function() {
        function e(t, i) {
            o(this, e),
            this.obj = t,
            this.scale = i,
            this.eleDom = void 0,
            this.btnOptionDom = void 0,
            this.ticketDom = void 0,
            this.option = {},
            this.allData = p["default"].voteData ? p["default"].voteData: {};
            try {
                this.option = this.allData.options[t.id]
            } catch(n) {
                console.error(n)
            }
            this.initDom()
        }
        return a(e, [{
            key: "initDom",
            value: function() {
                var e = this,
                t = (0, s["default"])("<div></div>"),
                i = (0, s["default"])("<div></div>"),
                n = this.obj.voteSetting.endTime > Date.parse(new Date);
                t.css({
                    position: "absolute",
                    width: this.scale(this.obj.w),
                    height: this.scale(this.obj.h),
                    top: this.scale(this.obj.top),
                    left: this.scale(this.obj.left),
                    overflow: "hidden",
                    opacity: this.obj.opacity,
                    transform: c["default"].rotate(this.obj.rotate)
                }),
                i.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    borderRadius: this.scale(this.obj.borderRadius)
                }),
                t.append(i);
                var o, a, r, l;
                if (this.obj.pic) {
                    var u = this.obj.pic,
                    f = window.Config.isAppNormalMode() ? "100% 100%": "contain",
                    p = void 0,
                    h = void 0,
                    g = void 0;
                    u.cropData && !window.Config.isGif(u.picid) && window.Config.isAppNormalMode() ? (g = f, p = 0, h = 0) : (g = "auto" === u.inw || 0 === u.inw ? f: this.scale(u.inw), p = this.scale(u.intop), h = this.scale(u.inleft)),
                    o = (0, s["default"])("<div></div>"),
                    o.css({
                        position: "absolute",
                        overflow: "hidden",
                        left: "0px",
                        top: "0px",
                        height: this.scale(u.h),
                        width: this.scale(u.w),
                        "background-image": "url(" + this.obj.picDom.context.src + ")",
                        "background-repeat": "no-repeat",
                        "background-size": g,
                        "background-position": h + " " + p
                    }),
                    i.append(o)
                }
                if (this.obj.voteOption && "typeThree" != this.obj.voteType) {
                    var m = this.obj.voteOption;
                    a = (0, s["default"])("<div></div>"),
                    a.css({
                        position: "absolute",
                        top: this.scale(m.top),
                        left: this.scale(m.left),
                        width: this.scale(m.w),
                        height: this.scale(m.h),
                        color: m.ftColor,
                        "line-height": this.scale(m.lineHeight),
                        "text-align": m.textAlign,
                        "font-size": this.scale(m.ftsize)
                    }),
                    a.append(m.str),
                    i.append(a)
                }
                if (this.obj.ticketOption) {
                    var v = this.obj.ticketOption;
                    r = (0, s["default"])("<div></div>"),
                    r.css({
                        position: "absolute",
                        top: this.scale(v.top),
                        left: this.scale(v.left),
                        width: this.scale(v.w),
                        height: this.scale(v.h),
                        color: v.ftColor,
                        "line-height": this.scale(v.lineHeight),
                        "text-align": v.textAlign,
                        "font-size": this.scale(v.ftsize)
                    });
                    var w = (this.option.vote_option_sum || 0) + "票";
                    r.append(w),
                    this.ticketDom = r,
                    i.append(r)
                }
                this.obj.btnOption && !
                function() {
                    var t = e.obj.btnOption,
                    o = !1;
                    try {
                        o = e.allData.can_vote && e.allData.hasVoteCnt < e.allData.vote_per_people && n
                    } catch(a) {
                        console.error(a)
                    }
                    var r = o || !window.Config.isAppNormalMode() ? t.bgcolor: "#b8b7b4";
                    l = (0, s["default"])('<div class="vote-btn"></div>'),
                    l.css({
                        position: "absolute",
                        top: e.scale(t.top),
                        left: e.scale(t.left),
                        width: e.scale(t.w),
                        height: e.scale(t.h),
                        color: t.ftColor,
                        "border-radius": e.scale(t.borderRadius),
                        "line-height": e.scale(t.lineHeight),
                        "text-align": t.textAlign,
                        "font-size": e.scale(t.ftsize),
                        "background-color": r
                    }),
                    n ? l.append(t.str) : l.append("已结束"),
                    i.append(l),
                    o && !
                    function() {
                        var i = "ontouchend" in document ? "touchstart": "click",
                        n = e;
                        l.on(i,
                        function() {
                            s["default"].ajax({
                                type: "post",
                                url: d["default"].voteUrl(),
                                dataType: "html",
                                cache: !1,
                                data: {
                                    vote_id: n.obj.voteSetting.voteId,
                                    vote_option_id: n.obj.id,
                                    event_id: window.Config.getProjectId(),
                                    openid: c["default"].getCookie(window.Config.wxCookie),
                                    vote_token: c["default"].getCookie("vote_token"),
                                    ts: c["default"].getCookie("vote_ts")
                                },
                                success: function() {},
                                error: function() {}
                            }),
                            l.css({
                                "background-color": "#b8b7b4"
                            }),
                            l.unbind(),
                            l.empty(),
                            l.append(t.beforeStr || "已投票");
                            var e = parseInt(n.option.vote_option_sum || 0),
                            i = e + 1 + "票";
                            n.ticketDom.text(i),
                            n.allData.hasVoteCnt += 1,
                            n.allData.hasVoteCnt >= n.allData.vote_per_people && ((0, s["default"])(".vote-btn").css("background-color", "#b8b7b4"), (0, s["default"])(".vote-btn").unbind())
                        })
                    } (),
                    e.btnOptionDom = l
                } (),
                this.eleDom = t
            }
        },
        {
            key: "getDom",
            value: function() {
                return this.eleDom
            }
        }]),
        e
    } ();
    t["default"] = h,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = (n(r),
    function() {
        function e(t, i) {
            o(this, e),
            this.dom = t,
            this.options = i,
            this.domTimer = !1,
            this.cssChange = !1,
            this.manualValue = 0,
            this.preManualValue = 0,
            this.css = {},
            this.startTime = void 0,
            this.finishCb = void 0,
            this.setIinitState(),
            this.start(),
            this.loop = 0
        }
        return a(e, [{
            key: "start",
            value: function() {
                var e = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame ||
                function(e) {
                    return setTimeout(e, 1e3 / 60)
                },
                t = this,
                i = function n(i) {
                    if (++t.loop, 1 == t.loop) return void e(n);
                    if (t.preManualValue != t.manualValue && (t.setCss(t.manualValue), t.preManualValue = t.manualValue), void 0 == t.startTime || (new Date).getTime() <= t.startTime + t.options.duration) e(n);
                    else {
                        var o = t.dom.get(0);
                        try {
                            o.style.transformOrigin = "",
                            o.style.transform = "",
                            o.style.transition = ""
                        } catch(a) {
                            console.error(a)
                        }
                        t.finishCb && t.finishCb(),
                        window.pageEffectRuning = !1
                    }
                };
                e(i)
            }
        },
        {
            key: "setIinitState",
            value: function() {
                var e = this.options,
                t = "";
                if (e.perspective && (t += "perspective(" + e.perspective + "px) "), e.position && (t += "translate(" + e.fromPosition[0] + "px, " + e.fromPosition[1] + "px) "), e.rotation) {
                    var i = e.fromRotation,
                    n = 0 == i[0] ? 0 == i[1] ? i[2] : i[1] : i[0];
                    t += "rotate3d(" + (0 == i[0] ? 0 : 1) + "," + (0 == i[1] ? 0 : 1) + "," + (0 == i[2] ? 0 : 1) + "," + n + "deg) "
                }
                if (this.css.transform = t, void 0 !== e.opacity && (this.css.opacity = e.fromOpacity), e.transformOrigin) {
                    var o = "";
                    e.transformOrigin.forEach(function(e) {
                        o += e + "px "
                    }),
                    this.css.transformOrigin = o
                }
                this.setDom()
            }
        },
        {
            key: "setDom",
            value: function() {
                var e = this.dom.get(0);
                for (var t in this.css) try {
                    e.style[t] = this.css[t]
                } catch(i) {
                    console.error(i)
                }
            }
        },
        {
            key: "setCss",
            value: function() {
                var e = this.manualValue,
                t = this.options,
                i = "";
                if (t.perspective && (i += "perspective(" + t.perspective + "px) "), t.position) {
                    var n = [];
                    n.push(t.fromPosition[0] + (t.position[0] - t.fromPosition[0]) * e),
                    n.push(t.fromPosition[1] + (t.position[1] - t.fromPosition[1]) * e),
                    n.push(t.fromPosition[2] + (t.position[2] - t.fromPosition[2]) * e),
                    i += "translate(" + n[0] + "px, " + n[1] + "px) "
                }
                if (t.rotation) {
                    var n = [];
                    n.push(t.fromRotation[0] + (t.rotation[0] - t.fromRotation[0]) * e),
                    n.push(t.fromRotation[1] + (t.rotation[1] - t.fromRotation[1]) * e),
                    n.push(t.fromRotation[2] + (t.rotation[2] - t.fromRotation[2]) * e);
                    var o = 0 == n[0] ? 0 == n[1] ? n[2] : n[1] : n[0];
                    i += "rotate3d(" + (0 == n[0] ? 0 : 1) + "," + (0 == n[1] ? 0 : 1) + "," + (0 == n[2] ? 0 : 1) + "," + o + "deg) "
                }
                if (this.css.transform = i, void 0 !== t.opacity) {
                    var n = (t.opacity - t.fromOpacity) * e;
                    0 > n && (n += 1),
                    this.css.opacity = n
                }
                this.setDom()
            }
        },
        {
            key: "finish",
            value: function(e) {
                window.pageEffectRuning = !0;
                var t = this.options;
                t.transition && (this.css.transition = t.transition);
                this.manualValue = 1,
                this.startTime = (new Date).getTime(),
                this.finishCb = e
            }
        },
        {
            key: "setValue",
            value: function(e) {
                this.manualValue = e
            }
        },
        {
            key: "rollback",
            value: function() {
                this.setIinitState()
            }
        },
        {
            key: "callAllDone",
            value: function() {}
        }]),
        e
    } ());
    t["default"] = s,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    var o = i(2),
    a = n(o); !
    function(e) {
        var t = {
            init: function(i) {
                return this.each(function() {
                    var n = e(this),
                    o = n.data("eraser");
                    if (!o) {
                        var a = function() {
                            var a = e("<canvas/>"),
                            r = a.get(0),
                            s = r.getContext("2d"),
                            l = window.devicePixelRatio || 1,
                            c = s.webkitBackingStorePixelRatio || s.mozBackingStorePixelRatio || s.msBackingStorePixelRatio || s.oBackingStorePixelRatio || s.backingStorePixelRatio || 1,
                            u = l / c,
                            d = i.canvasWidth,
                            f = i.canvasHeight,
                            p = d * u,
                            h = f * u,
                            g = i.canvasOffset || n.offset(),
                            m = (i && i.size ? i.size: 40) * u,
                            v = i && i.completeRatio ? i.completeRatio: .7,
                            w = i && i.completeFunction ? i.completeFunction: null,
                            b = i && i.progressFunction ? i.progressFunction: null,
                            y = "auto" == n.css("z-index") ? 1 : n.css("z-index"),
                            k = [],
                            A = Math.floor(p / m),
                            x = A * Math.floor(h / m),
                            C = x,
                            P = n[0];
                            for (n.after(a), r.id = P.id, r.className = P.className, r.width = p, r.height = h, r.style.width = d.toString() + "px", r.style.height = f.toString() + "px", s.drawImage(P, -i.cropConfig.x, -i.cropConfig.y, i.cropConfig.w, i.cropConfig.h, 0, 0, p, h), n.remove(), s.globalCompositeOperation = "destination-out", s.strokeStyle = "rgba(255,0,0,255)", s.lineWidth = m, s.lineCap = "round", a.bind("mousedown.eraser", t.mouseDown), a.bind("touchstart.eraser", t.touchStart), a.bind("touchmove.eraser", t.touchMove), a.bind("touchend.eraser", t.touchEnd); C--;) k.push(1);
                            o = {
                                posX: g.left,
                                posY: g.top,
                                touchDown: !1,
                                touchID: -999,
                                touchX: 0,
                                touchY: 0,
                                ptouchX: 0,
                                ptouchY: 0,
                                canvas: a,
                                ctx: s,
                                w: p,
                                h: h,
                                scaleRatio: u,
                                source: P,
                                size: m,
                                parts: k,
                                colParts: A,
                                numParts: x,
                                ratio: 0,
                                complete: !1,
                                completeRatio: v,
                                completeFunction: w,
                                progressFunction: b,
                                zIndex: y
                            },
                            a.data("eraser", o),
                            e(window).resize(function() {
                                var e = a.offset();
                                o.posX = e.left,
                                o.posY = e.top
                            })
                        };
                        this.complete && this.naturalWidth > 0 ? a() : n.load(a)
                    }
                })
            },
            touchStart: function(i) {
                var n = e(this),
                o = n.data("eraser");
                if (!o.touchDown) {
                    var a = i.originalEvent.changedTouches[0],
                    r = a.pageX - o.posX,
                    s = a.pageY - o.posY;
                    r *= o.scaleRatio,
                    s *= o.scaleRatio,
                    t.evaluatePoint(o, r, s),
                    o.touchDown = !0,
                    o.touchID = a.identifier,
                    o.touchX = r,
                    o.touchY = s,
                    i.preventDefault()
                }
            },
            touchMove: function(i) {
                var n = e(this),
                o = n.data("eraser");
                if (o.touchDown) for (var a = i.originalEvent.changedTouches,
                r = a.length; r--;) if (a[r].identifier == o.touchID) {
                    var s = a[r].pageX - o.posX,
                    l = a[r].pageY - o.posY;
                    s *= o.scaleRatio,
                    l *= o.scaleRatio,
                    t.evaluatePoint(o, s, l),
                    o.ctx.beginPath(),
                    o.ctx.moveTo(o.touchX, o.touchY),
                    o.touchX = s,
                    o.touchY = l,
                    o.ctx.lineTo(o.touchX, o.touchY),
                    o.ctx.stroke(),
                    n.css({
                        "z-index": n.css("z-index") == o.zIndex ? parseInt(o.zIndex) + 1 : o.zIndex
                    }),
                    i.preventDefault();
                    break
                }
            },
            touchEnd: function(t) {
                var i = e(this),
                n = i.data("eraser");
                if (n.touchDown) for (var o = t.originalEvent.changedTouches,
                a = o.length; a--;) if (o[a].identifier == n.touchID) {
                    n.touchDown = !1,
                    t.preventDefault();
                    break
                }
            },
            evaluatePoint: function(e, t, i) {
                var n = Math.floor(t / e.size) + Math.floor(i / e.size) * e.colParts;
                n >= 0 && n < e.numParts && (e.ratio += e.parts[n], e.parts[n] = 0, e.complete || (n = e.ratio / e.numParts, n >= e.completeRatio ? (e.complete = !0, null != e.completeFunction && e.completeFunction()) : null != e.progressFunction && e.progressFunction(n)))
            },
            mouseDown: function(i) {
                var n = e(this),
                o = n.data("eraser"),
                a = i.pageX - o.posX,
                r = i.pageY - o.posY;
                a *= o.scaleRatio,
                r *= o.scaleRatio,
                t.evaluatePoint(o, a, r),
                o.touchDown = !0,
                o.touchX = a,
                o.touchY = r,
                o.ctx.beginPath(),
                o.ctx.moveTo(o.touchX - 1, o.touchY),
                o.ctx.lineTo(o.touchX, o.touchY),
                o.ctx.stroke(),
                n.bind("mousemove.eraser", t.mouseMove),
                e(document).bind("mouseup.eraser", o, t.mouseUp),
                i.preventDefault()
            },
            mouseMove: function(i) {
                var n = e(this),
                o = n.data("eraser"),
                a = i.pageX - o.posX,
                r = i.pageY - o.posY;
                a *= o.scaleRatio,
                r *= o.scaleRatio,
                t.evaluatePoint(o, a, r),
                o.ctx.beginPath(),
                o.ctx.moveTo(o.touchX, o.touchY),
                o.touchX = a,
                o.touchY = r,
                o.ctx.lineTo(o.touchX, o.touchY),
                o.ctx.stroke(),
                n.css({
                    "z-index": n.css("z-index") == o.zIndex ? parseInt(o.zIndex) + 1 : o.zIndex
                }),
                i.preventDefault()
            },
            mouseUp: function(t) {
                var i = t.data,
                n = i.canvas;
                i.touchDown = !1,
                n.unbind("mousemove.eraser"),
                e(document).unbind("mouseup.eraser"),
                t.preventDefault()
            },
            clear: function() {
                var t = e(this),
                i = t.data("eraser");
                if (i) {
                    i.ctx.clearRect(0, 0, i.w, i.h),
                    console.log("clear", i);
                    for (var n = i.numParts; n--;) i.parts[n] = 0;
                    i.ratio = i.numParts,
                    i.complete = !0,
                    null != i.completeFunction && i.completeFunction()
                }
            },
            size: function(t) {
                var i = e(this),
                n = i.data("eraser");
                n && t && (n.size = t, n.ctx.lineWidth = t)
            },
            reset: function() {
                var t = e(this),
                i = t.data("eraser");
                if (i) {
                    i.ctx.globalCompositeOperation = "source-over",
                    i.ctx.drawImage(i.source, 0, 0, i.w, i.h),
                    i.ctx.globalCompositeOperation = "destination-out";
                    for (var n = i.numParts; n--;) i.parts[n] = 1;
                    i.ratio = 0,
                    i.complete = !1,
                    i.touchDown = !1
                }
            },
            progress: function() {
                var t = e(this),
                i = t.data("eraser");
                return i ? i.ratio / i.numParts: 0
            }
        };
        e.fn.eraser = function(i) {
            return t[i] ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not yet exist on jQuery.eraser") : t.init.apply(this, arguments)
        }
    } (a["default"])
},
function(e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t["default"] = "data:image/png;base64,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",
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(1),
    s = n(r),
    l = i(4),
    c = n(l),
    u = i(3),
    d = n(u),
    f = function() {
        function e() {
            o(this, e)
        }
        return a(e, [{
            key: "ADTansGuide",
            value: function() {
                if (d["default"].isADtrans()) {
                    var e = s["default"].getUrlParameter("task_id"),
                    t = s["default"].getUrlParameter("member_id"),
                    i = s["default"].getCookie("openid");
                    $.ajax({
                        url: c["default"].ADtransHost + "/check_accept_task",
                        type: "POST",
                        dataType: "json",
                        data: {
                            member_id: t,
                            task_id: e,
                            openid: i
                        }
                    }).done(function(e) {
                        200 === e.code
                    }).fail(function() {
                        console.log("error")
                    }).always(function() {
                        window.location.href = c["default"].platHost + "/ADTrans/user/service#!/guide"
                    })
                }
            }
        }]),
        e
    } ();
    t["default"] = new f,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e) {
        var t = e.reduce(function(e, t, i, n) {
            if (1 === e.length) return e;
            var o = t.content.some(function(e) {
                return "answer" === e.type ? !0 : void 0
            });
            return o ? (e.push(t), e) : e
        },
        []);
        return 0 !== t.length ? t: e
    }
    function a(e) {
        console.log("patchpage", e),
        "undefined" === e.bgpic && (e.bgpic = null)
    }
    function r(e) {
        delete e.height,
        e.rotate = parseInt(e.rotate),
        e.shape && "0" !== e.shape || (e.shape = "1.svg"),
        e.shape.indexOf("/SVG/") < 0 && e.shape.indexOf("<svg") < 0 && (e.shape = "svg/Default/SVG/" + e.shape),
        e.h = e.h < 0 ? 0 : e.h,
        e.shapecolor && (e.colorScheme = {
            color1: e.shapecolor
        },
        delete e.shapecolor)
    }
    function s(e) {
        return h["default"].log("Load relay data"),
        new Promise(function(t) {
            $.ajax({
                type: "post",
                dataType: "json",
                url: window.Config.checkRelayUrl(),
                data: {
                    relay_id: e,
                    event_id: window.Config.getProjectId(),
                    open_id: h["default"].getCookie(window.Config.wxCookie)
                },
                cache: !1,
                success: function(e) {
                    t(e)
                },
                error: function(e) {
                    t(null)
                }
            })
        })
    }
    function l(e) {
        if (e.ownInfo && e.shareStr && 1 == e.shareTitle) {
            e.setShared = !0;
            var t = -1 === window.projectVersion.link.indexOf("?") ? "?": "&",
            i = "" + window.projectVersion.link + t + "relay_share=true";
            if (window.projectVersion.urlParam || (window.projectVersion.urlParam = []), window.projectVersion.urlParam.push("relay_share=true"), h["default"].getUrlParameter("relay_share")) {
                var n = e.shareStr.replace(/%nickname%/, e.ownInfo.nickname).replace(/%city%/, e.ownInfo.city).replace(/%rank%/, e.rank);
                window.projectVersion.titleMust = n,
                f["default"].wxReconfig({
                    title: n,
                    link: i
                },
                !0)
            } else f["default"].wxReconfig({
                link: i
            })
        }
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var c = i(3),
    u = n(c),
    d = i(8),
    f = n(d),
    p = i(1),
    h = n(p);
    t["default"] = function(e) {
        for (var t in e) {
            a(e[t]);
            var i = e[t].content,
            n = function(e) {
                var n = i[e];
                switch (n.type) {
                case "charts":
                    n.content || delete i[e];
                    break;
                case "pshape":
                    r(n);
                    break;
                case "linkButton":
                    n.url || delete i[e];
                    break;
                case "puzzle":
                    n.urls.length || delete i[e];
                    break;
                case "vote":
                    u["default"].setNeedWxLogin(!0),
                    u["default"].hasVote = !0;
                    break;
                case "lotteryTiger":
                    u["default"].setNeedWxLogin(!0);
                    break;
                case "lotteryScratch":
                    u["default"].setNeedWxLogin(!0);
                    break;
                case "lotteryCycle":
                    u["default"].setNeedWxLogin(!0);
                    break;
                case "relay":
                    u["default"].setNeedWxLogin(!0),
                    t > 0 && h["default"].getCookie(window.Config.wxCookie) && s(n.relayId).then(function(e) {
                        return e && 200 == e.code && (n.canRealy = e.data.can_relay, n.relayed = e.data.already_relay, n.rank = e.data.rank, n.ownInfo = e.data.own_info.ercode ? void 0 : e.data.own_info, n.picSrc = e.data.participators_info || []),
                        l(n),
                        e
                    })
                }
            };
            for (var c in i) n(c)
        }
        return u["default"].isExam(e) && u["default"].isShareExam(e) && (e = o(e)),
        e
    },
    e.exports = t["default"]
},
function(e, t) {},
52, 52, 52,
function(e, t, i) {
    "use strict";
    var n = i(5);
    e.exports = n,
    n.prototype.done = function(e, t) {
        var i = arguments.length ? this.then.apply(this, arguments) : this;
        i.then(null,
        function(e) {
            setTimeout(function() {
                throw e
            },
            0)
        })
    }
},
function(e, t, i) {
    "use strict";
    function n(e) {
        var t = new o(o._61);
        return t._81 = 1,
        t._65 = e,
        t
    }
    var o = i(5);
    e.exports = o;
    var a = n(!0),
    r = n(!1),
    s = n(null),
    l = n(void 0),
    c = n(0),
    u = n("");
    o.resolve = function(e) {
        if (e instanceof o) return e;
        if (null === e) return s;
        if (void 0 === e) return l;
        if (e === !0) return a;
        if (e === !1) return r;
        if (0 === e) return c;
        if ("" === e) return u;
        if ("object" == typeof e || "function" == typeof e) try {
            var t = e.then;
            if ("function" == typeof t) return new o(t.bind(e))
        } catch(i) {
            return new o(function(e, t) {
                t(i)
            })
        }
        return n(e)
    },
    o.all = function(e) {
        var t = Array.prototype.slice.call(e);
        return new o(function(e, i) {
            function n(r, s) {
                if (s && ("object" == typeof s || "function" == typeof s)) {
                    if (s instanceof o && s.then === o.prototype.then) {
                        for (; 3 === s._81;) s = s._65;
                        return 1 === s._81 ? n(r, s._65) : (2 === s._81 && i(s._65), void s.then(function(e) {
                            n(r, e)
                        },
                        i))
                    }
                    var l = s.then;
                    if ("function" == typeof l) {
                        var c = new o(l.bind(s));
                        return void c.then(function(e) {
                            n(r, e)
                        },
                        i)
                    }
                }
                t[r] = s,
                0 === --a && e(t)
            }
            if (0 === t.length) return e([]);
            for (var a = t.length,
            r = 0; r < t.length; r++) n(r, t[r])
        })
    },
    o.reject = function(e) {
        return new o(function(t, i) {
            i(e)
        })
    },
    o.race = function(e) {
        return new o(function(t, i) {
            e.forEach(function(e) {
                o.resolve(e).then(t, i)
            })
        })
    },
    o.prototype["catch"] = function(e) {
        return this.then(null, e)
    }
},
function(e, t, i) {
    "use strict";
    var n = i(5);
    e.exports = n,
    n.prototype["finally"] = function(e) {
        return this.then(function(t) {
            return n.resolve(e()).then(function() {
                return t
            })
        },
        function(t) {
            return n.resolve(e()).then(function() {
                throw t
            })
        })
    }
},
function(e, t, i) {
    "use strict";
    e.exports = i(5),
    i(56),
    i(58),
    i(57),
    i(60),
    i(61)
},
function(e, t, i) {
    "use strict";
    function n(e, t) {
        for (var i = [], n = 0; t > n; n++) i.push("a" + n);
        var o = ["return function (" + i.join(",") + ") {", "var self = this;", "return new Promise(function (rs, rj) {", "var res = fn.call(", ["self"].concat(i).concat([s]).join(","), ");", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], o)(a, e)
    }
    function o(e) {
        for (var t = Math.max(e.length - 1, 3), i = [], n = 0; t > n; n++) i.push("a" + n);
        var o = ["return function (" + i.join(",") + ") {", "var self = this;", "var args;", "var argLength = arguments.length;", "if (arguments.length > " + t + ") {", "args = new Array(arguments.length + 1);", "for (var i = 0; i < arguments.length; i++) {", "args[i] = arguments[i];", "}", "}", "return new Promise(function (rs, rj) {", "var cb = " + s + ";", "var res;", "switch (argLength) {", i.concat(["extra"]).map(function(e, t) {
            return "case " + t + ":res = fn.call(" + ["self"].concat(i.slice(0, t)).concat("cb").join(",") + ");break;"
        }).join(""), "default:", "args[argLength] = cb;", "res = fn.apply(self, args);", "}", "if (res &&", '(typeof res === "object" || typeof res === "function") &&', 'typeof res.then === "function"', ") {rs(res);}", "});", "};"].join("");
        return Function(["Promise", "fn"], o)(a, e)
    }
    var a = i(5),
    r = i(62);
    e.exports = a,
    a.denodeify = function(e, t) {
        return "number" == typeof t && t !== 1 / 0 ? n(e, t) : o(e)
    };
    var s = "function (err, res) {if (err) { rj(err); } else { rs(res); }}";
    a.nodeify = function(e) {
        return function() {
            var t = Array.prototype.slice.call(arguments),
            i = "function" == typeof t[t.length - 1] ? t.pop() : null,
            n = this;
            try {
                return e.apply(this, arguments).nodeify(i, n)
            } catch(o) {
                if (null === i || "undefined" == typeof i) return new a(function(e, t) {
                    t(o)
                });
                r(function() {
                    i.call(n, o)
                })
            }
        }
    },
    a.prototype.nodeify = function(e, t) {
        return "function" != typeof e ? this: void this.then(function(i) {
            r(function() {
                e.call(t, null, i)
            })
        },
        function(i) {
            r(function() {
                e.call(t, i)
            })
        })
    }
},
function(e, t, i) {
    "use strict";
    var n = i(5);
    e.exports = n,
    n.enableSynchronous = function() {
        n.prototype.isPending = function() {
            return 0 == this.getState()
        },
        n.prototype.isFulfilled = function() {
            return 1 == this.getState()
        },
        n.prototype.isRejected = function() {
            return 2 == this.getState()
        },
        n.prototype.getValue = function() {
            if (3 === this._81) return this._65.getValue();
            if (!this.isFulfilled()) throw new Error("Cannot get a value of an unfulfilled promise.");
            return this._65
        },
        n.prototype.getReason = function() {
            if (3 === this._81) return this._65.getReason();
            if (!this.isRejected()) throw new Error("Cannot get a rejection reason of a non-rejected promise.");
            return this._65
        },
        n.prototype.getState = function() {
            return 3 === this._81 ? this._65.getState() : -1 === this._81 || -2 === this._81 ? 0 : this._81
        }
    },
    n.disableSynchronous = function() {
        n.prototype.isPending = void 0,
        n.prototype.isFulfilled = void 0,
        n.prototype.isRejected = void 0,
        n.prototype.getValue = void 0,
        n.prototype.getReason = void 0,
        n.prototype.getState = void 0
    }
},
function(e, t, i) {
    "use strict";
    function n() {
        if (l.length) throw l.shift()
    }
    function o(e) {
        var t;
        t = s.length ? s.pop() : new a,
        t.task = e,
        r(t)
    }
    function a() {
        this.task = null
    }
    var r = i(15),
    s = [],
    l = [],
    c = r.makeRequestCallFromTimer(n);
    e.exports = o,
    a.prototype.call = function() {
        try {
            this.task.call()
        } catch(e) {
            o.onerror ? o.onerror(e) : (l.push(e), c())
        } finally {
            this.task = null,
            s[s.length] = this
        }
    }
},
function(e, t) {
    e.exports = '<?xml version="1.0" encoding="utf-8"?>\n<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n<svg style="width:308px;height:308px;" version="1.1" id="图形" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="1024px" height="1024px" viewBox="0 0 1024 1024" enable-background="new 0 0 1024 1024" xml:space="preserve">\n  <path class="svgpath" data-index="path_0" fill="#272636" d="M46.267733 102.109867c-36.471467 45.431467-117.265067 261.802667 229.034667 616.0384 364.9024 373.4016 600.234667 293.461333 640.699733 251.409067L672.1024 726.016c-34.133333 33.9456-77.9776 3.7376-162.218667-64.802133-55.688533-45.380267-119.9104-106.376533-175.530667-175.223467-39.048533-48.196267-73.557333-98.850133-37.922133-134.485333L46.267733 102.109867z" />\n<path class="svgpath" data-index="path_1" fill="#272636" d="M1004.219733 882.3808c15.8208-15.8208 14.2336-39.936-0.1536-54.340267l0-0.238933c0 0-190.327467-189.627733-190.446933-189.7472-15.018667-15.0528-39.133867-14.711467-54.135467 0.119467l-68.9664 68.983467 244.548267 244.206933c0 0 69.0688-68.795733 69.000533-68.864L1004.219733 882.3808z" />\n<path class="svgpath" data-index="path_2" fill="#272636" d="M384.375467 263.68c15.786667-15.854933 14.301867-39.867733 0-54.203733L384.375467 209.237333c0 0-195.84-195.191467-195.9424-195.2256-15.069867-15.121067-39.185067-14.762667-54.1184 0.034133L65.3312 83.0976l249.9584 249.6c0 0 69.0688-68.7104 69.0688-68.846933L384.3584 263.68z" />\n\n</svg>\n'
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAfCAYAAAAIjIbwAAAABGdBTUEAALGPC/xhBQAAA3VJREFUSA2lVk1MU0EQ3nl9QAv0FUI0mAAJB9HEgxq8efGAJ22lQRINhpsXo140xhhMSPSgRK9GrwqnSlpa8WJI8OZBoh5IABMgeKn4Q1saUGhZv3l0H699rxV0k2FnZ775Znbf7BYSZUY2HD66mc+fJylPSyHaSIgmzD8wL0miN1Uez8v6aPSTWzgwxSPd03NQbmwMSSm7iz3OFRHFqLr6VmB09LPdW0SaCQbP5qUcAcCwg/6iZzxEfUYi8UrhLFIm3BJiDBVqyrnbGRVvIeicIjZJM+FwRz6Xey+k9O+WyIEjWvXo+gkjGp0zqwLho/8i5AwoyOSBSqnu7k7JVVYY2E4SX3wOndCBDmiuABU4ik5doG3KgrAljehKIB4fVph0KHRpS8onFXbWy9vvUgGls6ZpV+2E7Oc1vva1Uqxt3aUhY4vNYKnYRsqIxV5YBpviHxt7zn6baUcFn4ZDaNqxFGnzCMQROkfBPu/0wAI+3n7azYl+PSQHB3VXH+zsd/Nh5ykNpcy6OoWoS09N3XTzFex1bj50ySxXMgE56QZA1nsrwaCvwTAe08hIRvb1GalM5gbsd1zxbCSaoNVweH8ul1sAsLYcEH0qUUESfdqMnVlX24EnWtN1vV3zR6PLONhnDoDNYBJJeaAiIfDo6acFPiE8Xu8Q0q/YePasIv6nR4ghDjTvfn0kkkSWft7mntkQwHGkaf318fhXi5QV89kiesj6P4wHuGnjKs6sVC0CXu8Avt5btd7NjConAz7fXTsWtuKR7e1tzq2vf8A5VHyNOArBSd3nO87HZ2cpqpQdDJC6fhFXMW8Hlursx8NyoZSQcQ5SNjbGYpOYBlivMAb8iYTrUTm2r0hwtykVCiXQ9meUzZqJxhvi8WC5B8e1UgQDT5T1evsxLVpk247Fgp0L4nhHYaWkDGBBH4ua1kgk/25l5TKIN7DmVJuvk8nrsLOffyRrIKyrOKjbBlMp/FGE9Vjz431keGmppUbTag8bRtv9mZn529PTv2FvhPD/BoznhDmIdXHYqIbKxg9LO+QYhMn3QU4VdEwiC5mEfCvoHzEvQNYgTCztj7DK9AuOL5BNSCskA+GHvBrCgyv7DlmGMI57lGNMQsyOQ1aV8zlVQZiIE/OahQf3LwtvmRNwctXTZmGKBPaioY5CGUtxalfstypU4D9UaSYxoJZmBAAAAABJRU5ErkJggg=="
},
function(e, t, i) {
    e.exports = i.p + "c9757c74222bb0af79d6bad4fd46edc2.png"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjAAAAGUCAMAAAAcSug4AAAAV1BMVEUAAADx8fHj4+Pj4+Pl5eXp6enj4+Pj4+Pj4+Py8vLs7Ozr6+vo6Oji4uLj4+Pi4uLi4uLi4uLi4uLl5eXk5OTn5+fi4uLt7e3m5ub////h4eH39/f5+fmoyCkQAAAAGXRSTlMA+vfq8xZH1Ln89vLv3cmyp4NhOi8qIw4KXo15SQAABKNJREFUeNrs0jENACEAADESEjwA/n3+9Du3txo61jzwaK4x74ZHd46z4dkRBmH4CUMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMKQCEMiDIkwJMLwsUvHAgAAAACD/K3HsL8YWoRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIQhdulYAAAAAGCQv/UY9hdDizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizDELh0LAAAAAAzytx7D/mJoEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhWIRhEYZFGBZhiF06FgAAAAAY5G89hv3F0CIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIwyIMizAswrAIU/v1roMwDENh2ImTtNzvbcF5/+cEtRJU4ETqwuLzT4n0jWcxWhQGgxb1z8HkLJLz9IaBqQ9GNp6btm3Yb+T1hYGpDcb5wznSWDwfvLvDwJQHI/7Y0azu6AUGpjQYxxf66sIOBkYfzHof6ae4X8PAaINxzUBKQ+NgrBttMMKR1CILjG2jDiYkKpQCjG2jDWbVUrF2BWPZqIMJVyp2DTCWjTaYvKNKuwxj16iDcSeqdHIwdo06mG2iSmkLY9eogwk3qnQLMHbNezDzO9v3VKn3MHbNlDAlfnyiajCWzRinJy1IHpvwFPn2AAAAAElFTkSuQmCC"
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAADMCAMAAAAI0H6FAAABL1BMVEUAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAACZJSUAAAAAAAAAAAAFAgKWJCSOIiKYJCRrGhoAAAAAAACUIyOXJSVyGxsAAAAAAAAAAACYJCR/Hh5XFRWYJiaYJCQMAwOZJiabJSWXJSWFICCLISF7Hh6EICByHR0sCwshCQk7Dg4qDAyeJiabJyf/REWXJCStNTbCLzDALi/oPD3eODn0QEHHMDHNMjPuPj/SNDX8Q0TXNjf3QULlOzzrPT7yP0DKMTLEMTLVNTbLNjfcNzjaNjfQMzTUPD3jOjvJNDXHMzThOTrSOjvXPT7ZP0DQOTrbQEHELzD7QkP5QULPODnONzjeQkOeKCipMTKnMDHdQkO1Li+jJyiaJyejLS2rKyu6MDHBNjdNQJZIAAAAMXRSTlMABBsMMwpjTRAVLSf+Px4IVe7lw7FHOvb0qlxLINnLj4FUUj8x2NrRy76YeW1aViIh1US5gwAABChJREFUaN6ckc1uskAYRiugwDAgEsAKRhMX/W8Xj/fgws331S5oh9Gg7f1fQ9+ZRA2xGPFkkpkNhzPv3JzSuYSbOg2afrdrnqPb7R9lzZ6u6Tiua5zDdR3H7J5zqRrHNcaex5jVDGOeNzZcR5U19ZAn8JiV+kme203keeKnFvMCch276kEmeSw/scMs650jy0I78S1ymX9kqSCDPHmYPccPd9EQTQyju4f4OQtzchkq61QUsDQJX+IIlxDFL2GSskCr6iI3YL7di6mFCynLeTOllIJTW9yzfRa4WlUv8mfTASBIcgFSAIPpzK9VkamvRGF8sUenkSsOlarfOSaZBokmwHbehi0wIZVhHqJoSF5qT8DlvB2SY2KnHo3qeDcrGYGX87aUHKPEUvc7JPlTQM7bI4Gpr6P0lChpNqAZXcMWgxlFdTr7pBGErt2KiuMSeCW2ehoCo32Ueri3IUpKrdCOStLPMXxTz6cvN7ZUUkkesVks39df6y9aa7UTf58/louNIFepoqwxXU+9nJdGKCWH+Plox48AlyWi1KPX02N6BSfRbvneluVOf/lKg9Im9gTBsfl/DRtwgSdGJj3wR1RUdB07VHikkWuTdQ+I4t91rARwb+1NEfC9OlKsClr1czPfQHQw3UIsik9N8Vlo6ECrtmtOzwuB24Ppl/Z5S2EQBqIwvKcQEUVESNMLafOUFej+99CTQENPp1KawY+BxFF+0Jj13G415q203dttVLKPdpZLp3YfJQUudRoHleyeznaYP/4uZTbZAheCBebrXZaGPWlIGLoLXFLgktOg0pi50WFGInfyHZcUuHTToNKkQSU/+Qnj8wn1LnZAe1ma/Yzxr7OSe3pXUGlW4NJVg0oXDSr1Gr9LsY8YsRbfUClmIYYCFyFE2hMqLWEJApYZjvqMqWfFJY0nO/OSAjAIA2H4TN0UQUTMHfT+R2kaCGXATRnczU8gPuAD6WY6JA0mkOrbqMOnbsq/3PiOEhNIxgRS+ZMV8/k2SkQodSaQVtZXj/zgExv+8D3OKLXZZuQHn9hZ3nc7QokJpItJkiRJkiRJkiRJkiRJT7v2ruowDAQBVE3g5gHGqHEjsIld5zJ9XBh1rtVa//8XYbdQUBGIvSlneh20Uw8lSpQoUaJEiRIlSpQoUaJEiRIlSpQoiXQxSxeVTucfSOeTSlezdFWp+bNLsrDW1bdZ0tW3VG6WpHBdx5slqUlH7WZJjtNPmSX5kkiNWWpEEsosKfRTyZklR2mf1OFpgBK6IgUsBmlBKJLHapBW+CL1iAYpoi/SiGyQMkZXEjAfhmZM7p0BOR2EUsagRul8Oyht2vc7jxbxYN3tv6tyv2FL+0/bcLtXjlAt8ry37IxWoToPD+S4Lum73yxrzIAvp1UZJuzLNLhPGXsfuq+QLvh+rN6+AJrbWKyEk7A6AAAAAElFTkSuQmCC"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABGdBTUEAALGPC/xhBQAABWlJREFUWAm1WF1oHUUUPrO7N783rU2qCUghBCmFVh/sg9pKoWke1BhB8EHTFKWWgqJSsOqD+NAHxQdf7IMiitImGAXxD6uCbcSK2kaQWhuJqbaJ2uY2P6Zp/u7P7o7nm93Z3bt3Ywy5OZfdc/bMmXO+OTNzdvYKitF+eaidXNlFQmznq0m6bkoIoawkSRL8AwdpGXxJEqJAJEe51/ds3/2GeOHzaJ/Awz75YqN0cr0cYmegjFomyIADWw8WBJYAGpwJA5AsBwPxZei4Y59hVnW+JZ6/omxxAwi7MH+K25sjftAUIwQIQ5cGKsIRYILPRJI0bFXU3A4wFgzyuVnOhGxWxt5gPBHAwwEGsnYsXb+deRLpvoF9qb9mJzfzLvfdJbqyz7U7jvtZoiNW6hygXcvgSVSaIW9a1FQkdfB1pmncaxVsu0vb6PlcrGN8cWLRGvwDxy+pXesQQ8vgIN3HlW6X5TrudpdVID37ekq1ITgoRRZttTbTzdZG2mS2UINYS2lRo9pm5TxNymkadC7QL/YQ/WT/Sg7BswcQRlrW/nREBrZN3D/1RJ7DpJS3OBS1ugVVyRTdV9VKd1fuoOuMOs90iftVd4a+yH1Ln2ZPUBY7VxEGpIcbZsjgrS06Jh4HZEXaJMwI0RbrJnqqdg81mes9o2XeM84EHZ7rpgH792Arh1MfRhT3jO1nmDp0cZQdlVvpYN2jZAqjuGGZTw5vr1dm3qaTuR+5pw4OJ1oWZDmuq7Yl1P5MKH5bxS1lAQG/GMjBur007yzQ6fxZqErIcFyHbMe7AApyjaymA2seXnEmotEABj5rZBW5HAeXw7E0V0AAxrtsxXen22mduSbqpywyfO5Od/BgbXU5EgngmMwNoEIm9CVcQW3V28oSOMlJW/UdJKTg4H5WfF6cEUa3KdVCa83/t0WTAi2lg2/E8JaENwPIilqs0c6NRkP0cVVkxMBMqE2D9xRvHgvz4xdOFbRaVK5K8KjTWlGtMhLVWQpZRDOSuxR5Wh3xcn5M7c7o29kDot/TnJo/sn+tTvSI1/PZET4E8py4qKU8L8yLFyvvnr/zGfp5fjDSrbziuYUhupj9k9cIti1qiccZCIqYv699/voYziqrQ0fGP1LrI6xdXg1jILZKE1Jlc2ED75v+gb651l92JPD5ydRxLxMqGwzC5yojqqhFyi3K7pMXD9HA/PmygRlaGKZnRl4OSrpXSBmIKqhcWfFuiacJzzP2HD0y9Cz1zyS/pJaD8OzcIHUOHaDx/D+JsRBPbOi/E6cVn8LXsqfAUcWgx5oeoqdv3EcpQ521tfGSPO8W6LXRHnr18lE+rTkl55Gi7YuM6N0bPQaEURw6fOko3ZBaT3ubHgjV/yGN5Sfp/fFj9M6VDyiTn1jUfxEQVzoFksI7KiYjobRZSx31rSr06Wtn6OOJr9T5s8FaR9dX1HPWBE0Wpmi0ME7902fot+ywB1P7Q70A+TUjQKbriJQFLmgyI8nZ4Nnxlxk3Rr/M0lYtvbnxJQKAI5kP6eurp1Rg2JcehqENKT7RCoAGx2bBVwN/ior6k7f2suJBdI871sf+0PXKpLh/7Y0H/p5l224PCVcB0Q2LcSRYj1LZ6NGBo41Tr0eJZy2Dg+LtSsk30zC64ZfSfZtPsG1rzK+2C3h0cQXKFQiIZxjUN9s6sEvtR+mKTq6wmPxmLnRqKuE/Diw+oviIl4uJj7HDwrU60U9lBELt8S2NOSffK6Tc6SXSa4SsjbQctMemIgF5OBr2UwRciL5Ks6Jzru1c+LcEgGgyv2xp5+3cxcHUHzVck1NhitgqskgWW3zalzZVA+GvOfaZ4S+k7/jQ2uPcdeGYtgP/F70VYTU57AbxAAAAAElFTkSuQmCC"
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
},
function(e, t) {
    e.exports = "data:image/png;base64,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";
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABGdBTUEAALGPC/xhBQAABHNJREFUWAnFWF1MHFUU/u7sLLtrlyLbSndZ7QOlbUhTo9KStLa1ZIslIT7og7b1B6yJJvqm0aSkPvjzokl/NBp9sMW0VjRaYyoxpgSFFaIxRRoLSbu0CJaFAkmXXRZ3ZX/Gey7OZGd2FrYq7H2553z3u/d8c2fOmTvDYGhyh/ygkk7vY1DuVwAPFBQbKP/OZZhhwLgC1sMk6bOkL3k+cyE+Nt8cHQ5vIh1vVRTsVLGl7Hlgv9ViPxDzxYIURwghEXPp+C/86suXMnjW2gxjRZK9hsRINEg7sewiKDC/cBGbm0xul/cqSuo7wgvVGLPUSwrSjxVKgBqXNEg8O3aoQKF60sB3BO5CCVDjkgY5nzpReVslGj1NeMC1GxWOCpTIJQgnw7g8exldoU6cHjuF4fiwuu6t97xWMct5xgWZNwp4bONxPOF5EhITCWZKTCtpnAyewCuDLyOSjJhyFgNzCnEXufH9lk5sWLFhsTW08cBsAHW9PgT/EjVKw/MxTC9TgoSv7vlaEzGdmMbR4SPoi/Tp1gzGg3j797dw7c9rAifRbfd+Cyuz6nj5OKZC6FbUlNRo8z8c/UBs++GrzRpGxutDr6H56iEcHTmi4ZuLN+P5u17Q/HwN2Yx4wPO4Dn72zuf4u4DB59qjww9XvIq19rV4dM18KRqNj2IoNiQwHTEPx/QZGdl5HV67N4/pAD2oLcGTuBC5gKoVVbhvZTVWWVchkopgINqPb6bOoW2qjSdnzpwQcUyFjO4ag9u2eHkJJ8J4KfCiyKrdPLVztYHoAA4ONKE30puLwp9Kk3Zx5qIJqocUfl6gdH2j8k0sJIJmbXJuQucWP2pLa/WLZHimQlp4TVisnR4/hcbyJnhsHkGl1G0ePISbiZva1DPjn+DjYIvwHRYHztzdilK5VBvPNEyFnJ08iy8nvsjkZdm03dtv367hP4d/wvGRY7gye0XDTgQ/wrt/vKP5ZUVlOOh9RvMzDdOsIcLT/U1wWopRv7o+k6/ZVklfK54qb8yqwB3VP4Ax7RAo5m4j8SPaMpphuiM0GkvH8FBfA7pD3RpZNShTEumE6mq98TVgFEFEm2TT+JlGzh0hEi1MKRlKhNB641OU27xY51gHl9WFqbmpzHXytv2hLlOuafqqzGpeE/a46vD+9fcQTUVVWPRU4H7b1o8qZ5UOX8iZnJvExu71mEnNZNEWFJLFNgAklJ4Dp+w0jGS78VQce3+tQ890T/YgR3I+I6ZsA0gFytdbi8HZQcOI3o0mo4KXSwSx/9OOqOHobbvPvR8Plz0C2iUq8aFkCJeil1DMM2/ryq1Y03WHOEypc4w9s7SzSD6nNOPEW/EbVjdgYm5CvI9M59FXoNzOArxarzclLBPIS02AH55ZdqFYJgFqGPoe5p8T0ucqUKieNIj6y2+Pf7k+vo0Xy2/Lj8k6ZZdIX6tk38/r05iRtOQ+jyli80BCCH2N01c5qVvy4P8E4LfCr/4JIEjcmszgGT9qdvDDnft/S+35HzU3KDnMftT8DUAddjUFvXelAAAAAElFTkSuQmCC"
},
, , , , , , , , , , , , , ,
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(7),
    c = n(l),
    u = i(10),
    d = n(u),
    f = i(1),
    p = n(f),
    h = i(9),
    g = n(h),
    m = i(4),
    v = n(m),
    w = "ontouchend" in document ? "touchstart": "click",
    b = function() {
        function e() {
            o(this, e)
        }
        return a(e, [{
            key: "loadStart",
            value: function() {
                this.hasLoad || (this.hasLoad = !0, this.initSwiper())
            }
        },
        {
            key: "initSwiper",
            value: function() {
                var e = this,
                t = (0, s["default"])(".ADpage").eq(0),
                n = new c["default"](t[0]);
                n.add(new c["default"].Pan({
                    direction: c["default"].DIRECTION_ALL,
                    threshold: 0,
                    preventDefault: !0
                })),
                n.on("pandown",
                function() {
                    e.reporting || e.hideAD()
                });
                var o = (0, s["default"])(".ADpage"),
                a = (0, s["default"])('<img style="position:absolute;left:50%;"src="' + window.projectVersion.origin_thumb + '"/>');
                a.css({
                    width: p["default"].scale(250),
                    "margin-left": p["default"].scale( - 125),
                    top: p["default"].scale(240)
                });
                var r = (0, s["default"])('<div style="position:absolute;left:50%;">' + window.projectVersion.title + "</div>");
                r.css({
                    top: p["default"].scale(565),
                    "font-size": p["default"].scale(30),
                    width: p["default"].scale(300),
                    "margin-left": p["default"].scale( - 150),
                    color: "#EBEBEB",
                    textAlign: "center",
                    lineHeight: 1.5,
                    wordBreak: "break-all"
                });
                var l = (0, s["default"])('<div style="position:absolute;left:50%;"></div>');
                l.css({
                    top: p["default"].scale(585),
                    width: p["default"].scale(70),
                    marginLeft: p["default"].scale( - 240),
                    borderBottom: "solid 1px white"
                });
                var u = (0, s["default"])('<div style="position:absolute;left:50%;"></div>');
                u.css({
                    top: p["default"].scale(585),
                    width: p["default"].scale(70),
                    marginLeft: p["default"].scale(170),
                    borderBottom: "solid 1px white"
                });
                for (var d = {
                    text: "免费创建我的MAKA",
                    color: "#18ccc0",
                    url: "http://mp.weixin.qq.com/s?__biz=MjM5ODc3OTM5Mw==&mid=529386470&idx=1&sn=56d5dfda1537850929462ec517661168&scene=0#wechat_redirect"
                },
                f = [{
                    rate: 40,
                    url: "http://wapstore.maka.im/series/15"
                },
                {
                    rate: 60,
                    url: "http://mp.weixin.qq.com/s/6mrc2XIlLNSvj0OHjUK2Ew"
                }], h = 100 * Math.random(), m = 0, b = 0; b < f.length; b++) {
                    if (h < f[b].rate + m) {
                        d.url = f[b].url;
                        break
                    }
                    m += f[b].rate
                }
                var y = (0, s["default"])("<div></div>");
                y.css({
                    position: "absolute",
                    width: "100%",
                    textAlign: "center",
                    "padding-top": p["default"].scale(48),
                    "padding-bottom": p["default"].scale(48),
                    fontSize: p["default"].scale(26),
                    lineHeight: p["default"].scale(48),
                    left: "0%",
                    bottom: p["default"].scale(200),
                    letterSpacing: "1px"
                });
                var k = (0, s["default"])("<div>" + d.text + "</div>");
                k.css({
                    padding: p["default"].scale(2) + " " + p["default"].scale(30),
                    color: d.color,
                    width: "auto",
                    textAlign: "center",
                    lineHeight: p["default"].scale(48),
                    border: "solid 1px " + d.color,
                    borderRadius: p["default"].scale(24),
                    letterSpacing: "1px",
                    margin: "auto",
                    display: "inline-block"
                }),
                k.on(w,
                function() {
                    var e = 102;
                    g["default"].send("makaAD", e),
                    window.statisticSDK.countTailAd(),
                    window.location.href = d.url
                }),
                y.append(k);
                var A = (0, s["default"])("<div>返回</div>");
                A.css({
                    position: "absolute",
                    top: p["default"].scale(46),
                    color: "white",
                    right: p["default"].scale(26),
                    fontSize: p["default"].scale(24),
                    lineHeight: p["default"].scale(24),
                    padding: p["default"].scale(24)
                }),
                A.on(w,
                function() {
                    e.replay()
                });
                var x = (0, s["default"])("<div>举报</div>");
                x.css({
                    position: "absolute",
                    top: p["default"].scale(46),
                    left: p["default"].scale(40),
                    fontSize: p["default"].scale(25),
                    lineHeight: p["default"].scale(24),
                    padding: p["default"].scale(24),
                    color: "#EBEBEB"
                });
                var C = (0, s["default"])('<img src="' + i(104) + '" alt="" />');
                C.css({
                    position: "absolute",
                    left: p["default"].scale( - 5),
                    top: "50%",
                    marginTop: p["default"].scale( - 14),
                    height: p["default"].scale(24)
                }),
                x.prepend(C),
                o.append(A),
                o.append(x),
                o.append(a),
                o.append(r),
                o.append(l),
                o.append(u),
                (0 === window.projectVersion.vipclass && window.projectVersion.show_ad === !0 || 7 === window.projectVersion.vipclass && window.projectVersion.show_ad === !0 || !v["default"].isStoreTemplatePreview() && v["default"].isTemplate()) && o.append(y),
                x.on(w,
                function() {
                    e.showReport()
                })
            }
        },
        {
            key: "showReport",
            value: function() {
                function e() {
                    A || (A = !0, k.css({
                        background: "rgb(24, 204, 192)"
                    }), k.on(w,
                    function() {
                        n()
                    }))
                }
                function t() {
                    o.reporting = !1,
                    l.fadeOut(200),
                    r.fadeOut(200)
                }
                function n() {
                    var e = i(105),
                    n = (0, s["default"])('\n        <div style="position:absolute;left:50%;margin-left:-100px;top:30%;width:200px;height:160px;background:rgba(0,0,0,0.4);border-radius:10px">\n          <div style="text-align:center;margin-top:20px;">\n            <img src="' + e + '" alt=""/>\n          </div>\n          <div style="font-size:20px;text-align:center;color:white;margin-top:20px;">\n            提交成功\n          </div>\n        </div>\n        '),
                    o = window.projectVersion || {},
                    r = v["default"].getProjectId(),
                    l = p["default"].getCookie("report_" + r);
                    l ? (n = (0, s["default"])('\n        <div style="position:absolute;left:50%;margin-left:-154px;top:30%;width:285px;color:#fff;background:rgba(0,0,0,0.4);border-radius:10px;line-height: 25px;padding:10px;">\n          您的举报信息我们已经收到，我们会尽快审核，感谢您的支持\n        </div>\n        '), a.append(n), setTimeout(function() {
                        n.fadeOut(1e3,
                        function() {
                            t()
                        })
                    },
                    1e3)) : s["default"].ajax({
                        url: v["default"].reportUrl,
                        type: "post",
                        data: {
                            is_lite_event: 0,
                            event_id: r,
                            reason: (h || "").replace(/\s/g, ""),
                            uid: o.uid || "",
                            title: o.title || ""
                        },
                        success: function() {
                            p["default"].setCookie("report_" + r, "1", 365),
                            a.append(n),
                            setTimeout(function() {
                                n.fadeOut(1e3,
                                function() {
                                    t()
                                })
                            },
                            1e3)
                        }
                    })
                }
                var o = this;
                o.reporting = !0;
                var a = (0, s["default"])(".ADpage"),
                r = (0, s["default"])("<div></div>"),
                l = (0, s["default"])("<div></div>");
                l.css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.4)"
                }),
                r.css({
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: p["default"].scale(540),
                    height: p["default"].scale(800),
                    marginLeft: p["default"].scale( - 270),
                    marginTop: p["default"].scale( - 400),
                    background: "white",
                    borderRadius: p["default"].scale(10)
                });
                var c = (0, s["default"])("<div>选择举报类型</div>");
                c.css({
                    padding: p["default"].scale(40) + " " + p["default"].scale(40),
                    fontSize: p["default"].scale(24),
                    color: "#18ccc0"
                }),
                r.append(c);
                var u = i(101),
                d = (0, s["default"])('\n      <div style="position:absolute;width:' + p["default"].scale(24) + ";height:" + p["default"].scale(24) + ";top:" + p["default"].scale(40) + ";right:" + p["default"].scale(40) + '">\n        <img style="width:100%" src="' + u + '" alt=""/>\n      </div>\n      ');
                r.append(d),
                d.on(w,
                function() {
                    t()
                });
                for (var f = ["色情", "诈骗", "谣言", "垃圾广告", "政治敏感", "侵权（抄袭冒用", "其他"], h = "", g = 0; g < f.length; g++) {
                    var m = i(100),
                    b = i(103),
                    y = (0, s["default"])('\n        <div class="reportType" style="line-height:' + p["default"].scale(76) + ';width:100%">\n          <div style="border-bottom:solid 1px #ebebeb;height:' + p["default"].scale(76) + ";margin:" + p["default"].scale(0) + " " + p["default"].scale(40) + '">\n            <span style="font-size:' + p["default"].scale(24) + ';color:#83817b">' + f[g] + '</span>\n            <span class="reportIcon" style="position:relative;margin-top:' + p["default"].scale(24) + ";display:block;float:right;width:" + p["default"].scale(24) + ";height:" + p["default"].scale(24) + ';">\n              <img class="active" src="' + m + '" style="display:none;width:100%"></img>\n              <img class="inactive" src="' + b + '" style="width:100%"></img>\n            </span>\n          </div>\n        </div>');
                    y.on(w,
                    function() {
                        h = (0, s["default"])(this).text(),
                        r.find(".reportType").each(function() { (0, s["default"])(this).find(".active").hide(),
                            (0, s["default"])(this).find(".inactive").show()
                        }),
                        (0, s["default"])(this).find(".active").show(),
                        (0, s["default"])(this).find(".inactive").hide(),
                        e()
                    }),
                    r.append(y)
                }
                var k = (0, s["default"])('\n      <div style="font-size:' + p["default"].scale(24) + ";background:gray;color:white;text-align:center;line-height:" + p["default"].scale(76) + ";height:" + p["default"].scale(76) + ";margin:" + p["default"].scale(20) + " " + p["default"].scale(40) + '">提交</div>\n      ');
                r.append(k),
                l.show(),
                r.show(),
                a.append(l),
                a.append(r),
                l.on(w,
                function() {
                    t()
                });
                var A = !1
            }
        },
        {
            key: "replay",
            value: function() {
                this.hideADreplay(),
                this.options.replay()
            }
        },
        {
            key: "showAD",
            value: function(e) {
                this.options = e;
                var t = (0, s["default"])(".ADpage");
                t.fadeIn(),
                (0, d["default"])(t, "stop"),
                (0, s["default"])(".maka-pages").eq(0).css({
                    "-webkit-filter": "blur(8px)"
                }),
                (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                    fromPosition: [0, 500, 0],
                    position: [0, 0, 0],
                    easing: "ease",
                    duration: 500
                }),
                t.attr("page-showded", "true")
            }
        },
        {
            key: "hideADreplay",
            value: function() {
                var e = (0, s["default"])(".ADpage");
                e.fadeOut(),
                (0, d["default"])(e, "stop"),
                (0, s["default"])(".maka-pages").eq(0).css({
                    "-webkit-filter": "blur(0px)"
                }),
                (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                    fromPosition: [0, 0, 0],
                    position: [0, -500, 0],
                    easing: "ease",
                    duration: 500
                }),
                e.removeAttr("page-showded")
            }
        },
        {
            key: "hideAD",
            value: function() {
                var e = (0, s["default"])(".ADpage");
                e.fadeOut(),
                (0, d["default"])(e, "stop"),
                (0, s["default"])(".maka-pages").eq(0).css({
                    "-webkit-filter": "blur(0px)"
                }),
                (0, d["default"])((0, s["default"])(".ADpage").eq(0), {
                    fromPosition: [0, 0, 0],
                    position: [0, 500, 0],
                    easing: "ease",
                    duration: 500
                }),
                e.removeAttr("page-showded")
            }
        }]),
        e
    } ();
    t["default"] = new b,
    e.exports = t["default"]
},
function(e, t) {
    "use strict";
    function i(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    o = function() {
        function e() {
            i(this, e)
        }
        return n(e, [{
            key: "pageStart",
            value: function() {
                window.adManager && window.adManager.start()
            }
        },
        {
            key: "pageChange",
            value: function(e) {
                window.adManager && window.adManager.pageChange(e)
            }
        },
        {
            key: "lastPage",
            value: function() {
                window.adManager && window.adManager.lastPage()
            }
        },
        {
            key: "replay",
            value: function() {
                window.adManager && window.adManager.replay()
            }
        }]),
        e
    } ();
    t["default"] = new o,
    e.exports = t["default"]
},
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(10),
    c = n(l),
    u = i(1),
    d = n(u),
    f = function() {
        function e() {
            o(this, e),
            this.loaded = !1
        }
        return a(e, [{
            key: "loadStart",
            value: function() {
                if (d["default"].judgeShowAd() && window.Config.isAppNormalMode() && !this.loaded) {
                    this.loaded = !0;
                    try {
                        this.initDom()
                    } catch(e) {
                        console.error(e)
                    }
                }
            }
        },
        {
            key: "getGoogleDom",
            value: function(e) {
                var t = window.projectVersion.tailAd;
                return (0, s["default"])('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>\n      <!-- ' + t.name + ' -->\n      <ins class="adsbygoogle keep-center"\n          style="width:' + e.width + "px;height:" + e.height + 'px"\n           data-ad-client="' + t.client + '"\n           data-ad-slot="' + t.slot + '"\n           data-ad-format="vertical"\n           ata-override-format="true"\n           data-page-url="http://maka.im/store"></ins>\n      <script>\n      (adsbygoogle = window.adsbygoogle || []).push({});\n      </script>')
            }
        },
        {
            key: "initDom",
            value: function() {
                var e = this,
                t = (0, s["default"])(".ADpage").eq(0),
                i = new Hammer(t[0]);
                if (i.add(new Hammer.Pan({
                    direction: Hammer.DIRECTION_ALL,
                    threshold: 0,
                    preventDefault: !0
                })), i.on("pandown",
                function() {
                    e.hideGoogleAD()
                }), !window.projectVersion.tailAd.baidu) {
                    t.css({
                        display: "block",
                        opacity: 0,
                        top: "-2000px",
                        "pointer-events": "none"
                    });
                    var n = (0, s["default"])("<div></div>"),
                    o = parseInt(d["default"].scale(600)),
                    a = parseInt(d["default"].scale(988));
                    n.css({
                        width: "100%",
                        height: "100%",
                        display: "-webkit-flex",
                        flexDirection: "column",
                        "-webkit-flex-direction": "column",
                        justifyContent: "center",
                        "-webkit-justify-content": "center",
                        alignItems: "center",
                        "-webkit-align-items": "center",
                        overflow: "hidden"
                    }),
                    t.append(n);
                    var r = {
                        width: o,
                        height: a
                    },
                    l = this.getGoogleDom(r);
                    n.append(l)
                }
            }
        },
        {
            key: "showGoogleAD",
            value: function() {
                var e = (0, s["default"])(".ADpage");
                e.fadeIn(),
                (0, c["default"])(e, "stop"),
                e.css({
                    "pointer-events": "auto",
                    opacity: 1,
                    top: "0px"
                }),
                e.attr("page-showded", "true"),
                (0, s["default"])(".maka-pages").eq(0).css({
                    "-webkit-filter": "blur(8px)"
                }),
                (0, c["default"])((0, s["default"])(".ADpage").eq(0), {
                    fromPosition: [0, 500, 0],
                    position: [0, 0, 0],
                    easing: "ease",
                    duration: 500
                });
                var t = (0, s["default"])("#all-banner");
                t.fadeOut()
            }
        },
        {
            key: "hideGoogleAD",
            value: function() {
                var e = (0, s["default"])(".ADpage");
                e.fadeOut(),
                (0, c["default"])(e, "stop"),
                (0, s["default"])(".maka-pages").eq(0).css({
                    "-webkit-filter": "blur(0px)"
                }),
                (0, c["default"])((0, s["default"])(".ADpage").eq(0), {
                    fromPosition: [0, 0, 0],
                    position: [0, 500, 0],
                    easing: "ease",
                    duration: 500
                });
                var t = (0, s["default"])("#all-banner");
                t.fadeIn(),
                e.removeAttr("page-showded")
            }
        }]),
        e
    } (),
    p = new f;
    window.finalAdPage = p,
    t["default"] = p,
    e.exports = t["default"]
},
, ,
function(e, t, i) {
    "use strict";
    function n(e) {
        return e && e.__esModule ? e: {
            "default": e
        }
    }
    function o(e, t) {
        if (! (e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var a = function() {
        function e(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1,
                n.configurable = !0,
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n)
            }
        }
        return function(t, i, n) {
            return i && e(t.prototype, i),
            n && e(t, n),
            t
        }
    } (),
    r = i(2),
    s = n(r),
    l = i(7),
    c = n(l),
    u = i(4),
    d = n(u),
    f = i(10),
    p = n(f),
    h = function() {
        function e() {
            var t = this;
            o(this, e),
            this.loaded = !1,
            this.hasSP = !1,
            this.isReady = !1,
            this.SPURL = "",
            this.spPage = (0, s["default"])('<div class="SPpage"></div>'),
            this.iframe = (0, s["default"])('<iframe border=0 style="border:0;outline:0" width="100%" height="100%"></iframe>'),
            this.spPage.hide(),
            this.spPage.append(this.iframe),
            this.spPage.css({
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "white",
                "z-index": 1999
            }),
            (0, s["default"])(".maka-pages").eq(0).append(this.spPage),
            this.spPage.hide(),
            this.hammer = new c["default"]((0, s["default"])(".SPpage").get(0)),
            this.hammer.on("swipedown", this.hideSP.bind(this)),
            (0, s["default"])(window).on("message",
            function(e) {
                if ("{" == e.originalEvent.data[0]) {
                    var i = JSON.parse(e.originalEvent.data);
                    "hideSP" === i.type && t.hideSP()
                }
            })
        }
        return a(e, [{
            key: "loadSP",
            value: function() {
                var e = this;
                if ("wemedia" === window.projectVersion.viplevel) return e.hasSP = !0,
                e.loaded = !0,
                void(this.SPURL = "/user/wemedia/" + window.projectVersion.uid);
                d["default"].getSPEventUrl();
                e.loaded
            }
        },
        {
            key: "isHasSP",
            value: function() {
                return this.hasSP
            }
        },
        {
            key: "showSP",
            value: function() {
                if (this.hasSP && this.loaded) {
                    this.isReady || (this.iframe.attr("src", this.SPURL), this.isReady = !0),
                    this.spPage.hide();
                    var e = window.innerHeight; (0, p["default"])(this.spPage, {
                        transformOrigin: [0, 0, 0],
                        fromRotation: [0, 0, 0],
                        fromPosition: [0, e, 0],
                        fromOpacity: 1,
                        position: [0, 0, 0],
                        easing: "linear",
                        duration: 500
                    }),
                    this.spPage.fadeIn()
                }
            }
        },
        {
            key: "hideSP",
            value: function() {
                console.log("hide");
                var e = window.innerHeight; (0, p["default"])(this.spPage, {
                    transformOrigin: [0, 0, 0],
                    fromRotation: [0, 0, 0],
                    fromPosition: [0, 0, 0],
                    fromOpacity: 1,
                    position: [0, e, 0],
                    easing: "linear",
                    duration: 500
                }),
                this.spPage.fadeOut()
            }
        }]),
        e
    } ();
    t["default"] = new h,
    e.exports = t["default"]
},
, , , ,
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAA3FJREFUSA29VjtMVEEUvTP7A/wgAWVZkMRAWAoUZUNs+KgJihUmdlqolYlSWJloY2w0sbJAEyu10M5EKlESvjaGLIpS7BKICcKyIATxA+x3nDP75uUJy2c3wVO8nXlzz7lvZu5nGW2B0k+DVSKROCeIWkiwcsGEBxQmWEg+JhlRN7PZXk8fbRzbTErapUeJf9AnKPmAhDiV3mLNW8Z6GPGbM75G/5oVNV3n6IQQ9sDwwEO5ek06Yfl2h2jdV8ha84uoKjeP3A6XIoZjEQqu/KG3SwvU9WNBLMVjjBiTG6fH1XVNN/oYiytD4/GPo/LPgwXRaPIVkTjp4lxcLS5j7cXltMdms3LWjX8lEtQxO0lPZqdEJJmUmqzX6eTnJ480LmpjrgfYiXbidrpEp/cYu+U5tKUT8PEhsAUHXHwotKCp9c0duf39HfKorsPwTXUdczuc2obGVpfpxfwM9f9cpKnoqnpf5syh5r0FdLGohKpy8kzbcCxKZwPDIhyN4CgfhX3N7VhUjoyLH3Ixpr6qNm+3IsaEoDtTE/T8e4iScpwOXHIu7ffQ3bIKcsgxMLL8m9qCH0VEcmSA1CNA1NEZ0cVwJ1YnF8a/0NO56Q2dQBQfABvY4sMAaEALwaS05TvmGXnvTcbiAUTXUM1xpi/+9rdxJaCY23xcOVBK9w5WKmsESP3oBxWNNrvNyykeb8MKQlg7wZ3guDIFOOAC0IImxkh4LjfbggnyRAMXv9GdaJt0v+CAq3Emv1AN4YOjrGCGZNRAdGULK9ebuyslI31wXbt0xmNFh3A2zqxcrQkfZsJmI7oVR5CREtITV1VYMlC7NJCM2cLKnZXJC8iImOEo9ZiMraSiBWNkfLawclF0FaQPLr11Y9K1NJ96KZ8oK8j4TAEOuBqo7AB8cLLbOzFBqUeSAahdKCuZAhxd96AFTWigMfJQbUNQFr8e9BOUeg3UroYMjhC24GhAy+hRPei+KurQGdG00E9QEAEUyJeVhwllZbNjxBpsYGstqtCCptKWeuZF/Jc2gR2gSQX8A+/QtNCTnlXUmJUc69sBTuPyxGiqF8kuW+1rOt1ntHQzYfEC7VdushdNC/3kfugr6QDZzBFsYAuOanhGK9dOwDWPTgupne30nxPtDL87/nfL6gxjNEb0LNVONvgDiVxUabKWbJn/Bep34KjvFu/hAAAAAElFTkSuQmCC"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAnRJREFUSA2llj1oFFEQx2fe7R54fpSKEAsrY0CxEZGAeCHaCIKxsLBKIfZphNu7ZJPsXRNIKVaCISBqcZ2lIlaxMMiBsdFCbSwU0tyJud1x5pJ37tfb2z1fce923tz/997MvNlD4OF5zikI1G1C2p2YsJ7Oz7u/xT7uaLXcKfL7N1jvq+PYLxDdANk46e/1twDo2EAYsaNKh645jvNjHBBv+i75+Jj1yvJ7RGjXF5tz2FyuPwqA7odFEeAjWpWZorADyAZDVFhPWfY5RQBW2Cjf2TZF/e6rZrN5Ir5mehYIBPAkDjnwtxRa1kM+3l5coAhMQ4igFNfh2L2p1ZY+KMdx3wOV7owLGwHZPnzEmkNE4nTsD2958Rag/4x3ZWubnk05ywGZXVhwf4nOECQPRWBFIAlQXhhRd1YSb8iJhGt4EtGUETnRvin7ZJzc7wh0sgjECJKFrDDqDUVmxNSTaJ/UE+nF3LARENHLBImDwAj953yLExdb1jmUHc7JVV1dA1vKR6RVpKwDlPwK78a4Ib5/5V7PTlyJuJZRQBwzSzishLjDjbia1RuNoNwQDRwBSw1dFoR39gVVsjcC0dnA7702NeIEKAvCid+uHLUvQpDeG7NgkdCNgoRvfGbpp4RxCBIIvxk3Ut8nhntSBDYAjQPRNZAXhq2VxuUAgrdFe5cGyTwCtnVm8vy0Coju/Q9EQPWllbbp5ckFcunzp84FxbHrinNkGHIS8Yk9ZMEUUlepsrXObeSn/h2D34WrS9vzzBrGHevf5hE3HzS8nUExrK25x//0/JtEwe70Fbtdrbr9PMImn9XV+mleu87/VL7VGt5L8fsLbFJ2drlcQ8AAAAAASUVORK5CYII="
},
,
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAthJREFUSA29VktoU0EUvfcljxKwBUlbqItKXSRUwY34IdXaKHWrICpIN8WVIuJClASrwZYGxYUUqQupLtSFiKAgLiw2EmnQhSAWjAm6UKSBVhDaQqn5XOdMOuFpSaP12bvIzOTNnPNm5t5zHlONGByMBUqF/AEi7iaRViFehyVMMknMX4hk1PLaj6LRWHY5KK72MH6pb0uR5IqI7Kk2x/k/M495iM9GLvS/cf5v+kuIEomYN5UsXBOWE6Je3+fzSSDYzsFgOzU2NVN9fb1eOzs7S9NTU5TNpimbScv8/LziIrWMh0Od3tPhcKxgSND+QhSPx9cW83MPFUHY67Vl+44Qhzo6qa6uzrlmSX9hYYFS40l6/SolhUIehAmPveZgJBL5biZXiLCT8Zf5ZyBpaGiQQ0d6uKVFX4eZW7PN5Sbpwf27MjMzo8k6dtn7zM48ZnVgw84hIToMkt5jx9nvbzSP/rjFsW7ctJnT7ydE7bLt62fxj71IPgWAJsLFl1huquOioz29KyIxb4Njbl3fxhPv3kpJilu7w11PnieSOQsTytlFjDv52+MyBM4WGMBCMgEbz/hy//ngj5J8QHadPHWGa128E3C5PhLk+tBVnY0e2w5aeZH9WIAUdosEeMACJvooeHV0quJVoE7cjkDAYHK3BVkBAYrR7WhqXsRUHJbRLlPxbpIZTHDorHMT3Imlsk4Hq/yztAqrIbTL7ZibW8QUUnWkpZ7o2/SU2zxadDWo4lBHJ6MYZDJp14mg7OVQnmUzP8YAUo8icyuABUzgwRitc30DGZgW/ARS71YAq+xRPAb31VkHZ4RpwU8g9f8awAAWMIENPK3eUNe9XbubiqXitk8fMwKpX6kcIXvv3bmlNU5l2nD04sAIiCp1BPuFM8K0bo/cWNHOsBOsNcYHTJAgKg6LwapYOYgQq/JxUqYq//73zy0nGfowxrJnVf+ARC2iTH5f6xz/BIh4g5vgZq6tAAAAAElFTkSuQmCC"
},
function(e, t) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAaCAYAAACtv5zzAAAAAXNSR0IArs4c6QAAAo9JREFUSA2tlU1oE0EUx7PZpsa6RZNs/P5ArSB4UIQK3gQRBfHgSQ96VUEQBG+FoqdCoTdPXhQ8eRBETwVRxB4LKljt3YhCutlsimJNNvH3gp1O3Fmy2frgMW/e+7/3n5l9O5PJJBTP8yaXkGq1Ooe9O2FaJpsESN3D7Xb7HtgZy7LcTqczkSRPMH0JKLYB3BkBU/w3g4ceYyc7xddPrDgAx3CEVU8Sv0DhPEQ/sb9hbxYlNsz4Ed9MqVR6jB2aahl3wJHcpOAHEraReCWXy7nlctlBD7muu7VYLI4QGyc2C+4++FdBEBRNBBEfW79GQpPxeiRocNTr9QPgF8DPQzZsgKy5arXaXoA/0Dtr3v6WdBUk0mHSCPECcBrcIiuJ/TZx2eTdQj1yN+qYnm9A8DLn+gDt6KAkNrkP0U0s8qyOVwSw7wKwh+54owOS2jTAMgt7B/6knqMIbNs+KAG6ZEEHDGh/Aj+m5yiCMAwLBFZYxS8dMIhNrg9e6ihRBNlsdgSA/EypheOVfPlHlCgC5fnPxr8EA3dPv/UoArZnA14vgeSrmkKuT/bRphVxphW+Y4UaPW+FTnCUwotpi0sexecYdugXX5eAgNz551jBrADTCv/QZzrxS7PZPL9ao0vAJXcVEptr+flqIO1Inafk3lD5jUbD5ZqooFPKuQ6D4xmjVos76ZKUsZi8hvUUW3vJPIipPYRffqDG3/go4woqT6hJTlNT3objQxR+weQ9agJ2fWBOEN/P5Ik4mF9kWML3VuYGecT3DGn9ZUMs6mK7t9mpL93BozKK/ZXxbhQZ9SR6WHzf39JqteZJ387q24xBPp8fdxzne7RkrycRgaRwHA47kaPhZrefFQqFem8p8+wPNm40uiI7dNsAAAAASUVORK5CYII="
},
function(e, t) {
    e.exports = "data:image/png;base64,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"
}]);