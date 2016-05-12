'use strict';

angular.module('Arvici', ['ngSanitize', 'ui.router']);

angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");
    $stateProvider.state('arvici', {
        url: "/",
        templateUrl: "view/page/index.html"
    }).state('login', {
        url: "/login",
        templateUrl: "view/page/login.html"
    }).state('hotels', {
        url: "/hotels",
        templateUrl: "view/page/hotels.html"
    }).state('color', {
        url: "/color",
        templateUrl: "view/red/red.html",
        controller: function controller($scope) {
            $scope.items = ["Red", "Blue", "Yellow"];
        }
    });
});

angular.module('Arvici').service('hotelService', function ($http, $q) {

    var API_PATH = 'http://jsonplaceholder.typicode.com';

    return { getHotels: getHotels };

    function getHotels() {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts'
        });

        return request.then(handleSucces, handleError);
    }

    function handleError(response) {
        if (!angular.isObject(response) || !response.data.message) {
            return $q.reject("An unknown error occurred.");
        }
    }

    function handleSucces(response) {
        return response.data;
    }
});
angular.module('Arvici').controller('LoginController', function ($scope) {});
angular.module('Arvici').controller('PageController', function ($scope, hotelService) {

    loadHotelData();

    function applyHotelData(newHotels) {
        $scope.hotels = newHotels;
    }

    function loadHotelData() {
        hotelService.getHotels().then(function (hotel) {
            applyHotelData(hotel);
        });
    }
});
