angular.module("starter", ["ionic", "starter.controllers", "starter.services"], ["$httpProvider",
    function ($httpProvider) {
        $httpProvider.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded;charset=utf8";
        var param = function (obj) {
            var name, value, subName, subValue, innerObj, i, query = "";
            for (name in obj)
                if ((value = obj[name]) instanceof Array)
                    for (i = 0; i < value.length; ++i) subValue = value[i], (innerObj = {})[name + "[" + i + "]"] = subValue, query += param(innerObj) + "&";
                else if (value instanceof Object)
                for (subName in value) subValue = value[subName], (innerObj = {})[name + "[" + subName + "]"] = subValue, query += param(innerObj) + "&";
            else void 0 !== value && null !== value && (query += encodeURIComponent(name) + "=" + encodeURIComponent(value) + "&");
            return query.length ? query.substr(0, query.length - 1) : query
        };
        $httpProvider.defaults.transformRequest = [
            function (data) {
                return angular.isObject(data) && "[object File]" !== String(data) ? param(data) : data
            }
        ]
    }
]).constant("apiUrl", "https://drawing.api.sdningrun.com").run(["$ionicPlatform", "$cookie", "$rootScope", "$ionicTabsDelegate",
    function ($ionicPlatform, $cookie, $rootScope, $ionicTabsDelegate) {
        $ionicPlatform.ready(function () {
            window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard && (cordova.plugins.Keyboard.hideKeyboardAccessoryBar(!0), cordova.plugins.Keyboard.disableScroll(!0)), window.StatusBar && StatusBar.styleDefault()
        }), $rootScope.openid = $cookie.get("openid"), $rootScope.$on("$stateChangeStart", function (evt, toState, toParams, fromState, fromParams) {}), $rootScope.goToDraw = function () {
            location.href = "https://drawing.sdningrun.com"
        }
    }
]).config(["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider",
    function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
        $ionicConfigProvider.platform.ios.tabs.style("standard"), $ionicConfigProvider.platform.ios.tabs.position("bottom"), $ionicConfigProvider.platform.android.tabs.style("standard"), $ionicConfigProvider.platform.android.tabs.position("bottom"), $ionicConfigProvider.platform.ios.views.transition("none"), $ionicConfigProvider.platform.android.views.transition("none"), $stateProvider.state("tab", {
            url: "/tab",
            abstract: !0,
            templateUrl: "templates/tabs.html"
        }).state("tab.index", {
            url: "/index",
            views: {
                "tab-index": {
                    templateUrl: "templates/index.html",
                    controller: "IndexCtrl"
                }
            }
        }).state("tab.draw", {
            url: "/draw",
            views: {
                "tab-draw": {
                    controller: "DrawCtrl"
                }
            }
        }).state("tab.home", {
            url: "/home",
            views: {
                "tab-home": {
                    templateUrl: "templates/home.html",
                    controller: "HomeCtrl"
                }
            }
        }).state("tab.ownList", {
            url: "/ownList",
            views: {
                "tab-home": {
                    templateUrl: "templates/ownList.html",
                    controller: "OwnListCtrl"
                }
            }
        }).state("tab.download", {
            url: "/download",
            views: {
                "tab-home": {
                    templateUrl: "templates/download.html",
                    controller: "DownloadCtrl"
                }
            }
        }).state("tab.rewardList", {
            url: "/rewardList",
            views: {
                "tab-home": {
                    templateUrl: "templates/rewardList.html",
                    controller: "RewardListCtrl"
                }
            }
        }).state("tab.withdrawList", {
            url: "/withdrawList",
            views: {
                "tab-home": {
                    templateUrl: "templates/withdrawList.html",
                    controller: "WithdrawListCtrl"
                }
            }
        }), $urlRouterProvider.otherwise("/tab/index")
    }
]);