angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('arvici', {
            url: "/",
            templateUrl: "view/page/index.html"
        })
        .state('hotels', {
            url: "/hotels",
            templateUrl: "view/page/hotels.html"
        })
        .state('color', {
            url: "/color",
            templateUrl: "view/red/red.html",
            controller: function ($scope) {
                $scope.items = ["Red", "Blue", "Yellow"]
            }
        })
});
