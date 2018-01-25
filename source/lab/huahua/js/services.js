angular.module("starter.services", []).factory("$localstorage", ["$window", "$rootScope",
    function ($window, $rootScope) {
        return {
            set: function (key, value) {
                $window.localStorage[key + "_" + $rootScope.openid] = value
            }, get: function (key, defaultValue) {
                return $window.localStorage[key + "_" + $rootScope.openid] || defaultValue
            }, setObject: function (key, value) {
                $window.localStorage[key + "_" + $rootScope.openid] = JSON.stringify(value)
            }, getObject: function (key) {
                return void 0 === $window.localStorage[key + "_" + $rootScope.openid] ? new Array : JSON.parse($window.localStorage[key + "_" + $rootScope.openid])
            }, del: function (key) {
                return $window.localStorage.removeItem(key + "_" + $rootScope.openid)
            }
        }
    }
]).factory("$cookie", function () {
    return {
        get: function (name) {
            var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            return (arr = document.cookie.match(reg)) ? unescape(arr[2]) : null
        }
    }
}).factory("Path", ["$http", "apiUrl", "$rootScope",
    function ($http, apiUrl, $rootScope) {
        return {
            getList: function (page, callback) {
                $http.post(apiUrl + "/path/getList", {
                    openid: $rootScope.openid,
                    page: page
                }).success(function (data) {
                    callback(data)
                })
            }, getOwnList: function (page, callback) {
                $http.post(apiUrl + "/path/getOwnList", {
                    openid: $rootScope.openid,
                    page: page
                }).success(function (data) {
                    callback(data)
                })
            }, del: function (id, callback) {
                $http.post(apiUrl + "/path/del", {
                    openid: $rootScope.openid,
                    id: id
                }).success(function (data) {
                    callback(data)
                })
            }
        }
    }
]).factory("Reward", ["$http", "apiUrl", "$rootScope",
    function ($http, apiUrl, $rootScope) {
        return {
            getList: function (page, callback) {
                $http.post(apiUrl + "/reward/getList", {
                    openid: $rootScope.openid,
                    page: page
                }).success(function (data) {
                    callback(data)
                })
            }
        }
    }
]).factory("Withdraw", ["$http", "apiUrl", "$rootScope",
    function ($http, apiUrl, $rootScope) {
        return {
            getList: function (page, callback) {
                $http.post(apiUrl + "/withdraw/getList", {
                    openid: $rootScope.openid,
                    page: page
                }).success(function (data) {
                    callback(data)
                })
            }, add: function (callback) {
                $http.post(apiUrl + "/withdraw/add", {
                    openid: $rootScope.openid
                }).success(function (data) {
                    callback(data)
                })
            }
        }
    }
]).factory("Wxuser", ["$http", "apiUrl", "$rootScope",
    function ($http, apiUrl, $rootScope) {
        return {
            getOne: function (callback) {
                $http.post(apiUrl + "/wxuser/getOne", {
                    openid: $rootScope.openid
                }).success(function (data) {
                    callback(data)
                })
            }
        }
    }
]);