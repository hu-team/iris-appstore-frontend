'use strict';

angular.module('Arvici', ['ngSanitize', 'ui.router']);

angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/login");

    $stateProvider.state('arvici', {
        url: "/",
        templateUrl: "view/page/index.html"
    }).state('login', {
        url: "/login",
        templateUrl: "view/page/login.html"
    }).state('hotels', {
        url: "/hotels",
        templateUrl: "view/page/hotels.html"
    }).state('hotelinfo', {
        url: "/hotels/:id",
        templateUrl: "view/page/hotel.html"
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

    return {
        getHotels: getHotels,
        getHotel: getHotel
    };

    function getHotels() {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts'
        });

        return request.then(handleSucces, handleError);
    }

    function getHotel(id) {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts/' + id
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
angular.module('Arvici').controller('HotelController', function ($scope, $stateParams, hotelService) {

    loadHotel($stateParams.id);

    function loadHotel(hotelId) {
        hotelService.getHotel(hotelId).then(function (newHotel) {
            $scope.hotel = newHotel;
        });
    }
});
angular.module('Arvici').controller('LoginController', function ($scope, $state) {
    $scope.submitLogin = function () {
        $state.go("hotels");
    };
});
angular.module('Arvici').controller('PageController', function ($scope, $state, hotelService) {

    loadHotelData();

    function loadHotelData() {
        hotelService.getHotels().then(function (newHotels) {
            $scope.hotels = newHotels;
        });
    }

    $scope.stateHotel = function (hotelId) {
        $state.go('hotelinfo', { id: hotelId });
    };
});
