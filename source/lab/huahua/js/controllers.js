angular.module("starter.controllers", []).controller("IndexCtrl", ["$scope", "Path", "$state",
    function ($scope, Path, $state) {
        $scope.page = 1, $scope.hasMoreData = !0, $scope.list = [], $scope.loadMore = function () {
            Path.getList($scope.page, function (data) {
                200 == data.status && (0 == data.data.length && ($scope.hasMoreData = !1), $scope.list = $scope.list.concat(data.data), $scope.page++, $scope.$broadcast("scroll.infiniteScrollComplete"))
            })
        }, $scope.goToDetail = function (id) {
            location.href = "https://drawing.sdningrun.com/?id=" + id + "&type=share"
        }
    }
]).controller("DownloadCtrl", ["$scope", "$localstorage",
    function ($scope, $localstorage) {
        $scope.download = $localstorage.get("download")
    }
]).controller("DrawCtrl", ["$scope",
    function ($scope) {}
]).controller("HomeCtrl", ["$scope", "$cookie", "Wxuser", "$state", "Withdraw", "$ionicLoading", "$ionicPopup",
    function ($scope, $cookie, Wxuser, $state, Withdraw, $ionicLoading, $ionicPopup) {
        function getOne() {
            Wxuser.getOne(function (data) {
                200 == data.status && ($scope.money = parseInt(data.data.money) / 100)
            })
        }
        $scope.thumb = $cookie.get("thumb"), getOne(), $scope.goToOwnList = function () {
            $state.go("tab.ownList")
        }, $scope.goToRewardList = function () {
            $state.go("tab.rewardList")
        }, $scope.goToWithdrawList = function () {
            $state.go("tab.withdrawList")
        }, $scope.withdraw = function () {
            $ionicPopup.confirm({
                title: "提示信息",
                template: "确认提现吗？",
                cancelText: "取消",
                okText: "确定"
            }).then(function (res) {
                res && Withdraw.add(function (data) {
                    200 == data.status ? ($ionicLoading.show({
                        template: data.data,
                        noBackdrop: !0,
                        duration: 1500
                    }), getOne()) : $ionicLoading.show({
                        template: data.error,
                        noBackdrop: !0,
                        duration: 1500
                    })
                })
            })
        }
    }
]).controller("OwnListCtrl", ["$scope", "Path", "$ionicPopup", "$localstorage", "$state",
    function ($scope, Path, $ionicPopup, $localstorage, $state) {
        $scope.page = 1, $scope.hasMoreData = !0, $scope.list = [], $scope.loadMore = function () {
            Path.getOwnList($scope.page, function (data) {
                200 == data.status && (0 == data.data.length && ($scope.hasMoreData = !1), $scope.list = $scope.list.concat(data.data), $scope.page++, $scope.$broadcast("scroll.infiniteScrollComplete"))
            })
        }, $scope.goToDetail = function (id) {
            location.href = "https://drawing.sdningrun.com/?id=" + id + "&type=share"
        }, $scope.edit = function (id) {
            location.href = "https://drawing.sdningrun.com?id=" + id + "&type=edit"
        }, $scope.del = function (id) {
            $ionicPopup.confirm({
                title: "提示信息",
                template: "删除操作不可恢复，确认要删除吗？",
                cancelText: "取消",
                okText: "确定"
            }).then(function (res) {
                res && Path.del(id, function (data) {
                    200 == data.status && ($scope.page = 1, $scope.list = [], $scope.loadMore())
                })
            })
        }, $scope.download = function (img) {
            $localstorage.set("download", img), $state.go("tab.download")
        }
    }
]).controller("RewardListCtrl", ["$scope", "Reward",
    function ($scope, Reward) {
        $scope.page = 1, $scope.hasMoreData = !0, $scope.list = [], $scope.loadMore = function () {
            Reward.getList($scope.page, function (data) {
                200 == data.status && (0 == data.data.length && ($scope.hasMoreData = !1), $scope.list = $scope.list.concat(data.data), $scope.page++, $scope.$broadcast("scroll.infiniteScrollComplete"))
            })
        }
    }
]).controller("WithdrawListCtrl", ["$scope", "Withdraw",
    function ($scope, Withdraw) {
        $scope.page = 1, $scope.hasMoreData = !0, $scope.list = [], $scope.loadMore = function () {
            Withdraw.getList($scope.page, function (data) {
                200 == data.status && (0 == data.data.length && ($scope.hasMoreData = !1), $scope.list = $scope.list.concat(data.data), $scope.page++, $scope.$broadcast("scroll.infiniteScrollComplete"))
            })
        }
    }
]);