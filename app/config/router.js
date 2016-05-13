angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider
        .state('arvici', {
            url: "/",
            templateUrl: "view/page/index.html"
        })
        .state('login', {
            url: "/login",
            templateUrl: "view/page/login.html"
        })

        .state('apps', {
            url: "/apps",
            templateUrl: "view/page/apps.html"
        })
        .state('appinfo', {
            url: "/apps/:id",
            templateUrl: "view/page/appinfo.html"
        })
        .state('categories', {
            url: "/categories",
            template: "view/page/categories.html"
        })

        .state('color', {
            url: "/color",
            templateUrl: "view/red/red.html",
            controller: function ($scope) {
                $scope.items = ["Red", "Blue", "Yellow"]
            }
        })
});
