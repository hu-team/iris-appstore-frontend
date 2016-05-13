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
    }).state('apps', {
        url: "/apps",
        templateUrl: "view/page/apps.html"
    }).state('appinfo', {
        url: "/apps/:id",
        templateUrl: "view/page/appinfo.html"
    }).state('color', {
        url: "/color",
        templateUrl: "view/red/red.html",
        controller: function controller($scope) {
            $scope.items = ["Red", "Blue", "Yellow"];
        }
    });
});

angular.module('Arvici').service('appService', function ($http, $q) {

    var API_PATH = 'http://jsonplaceholder.typicode.com';

    return {
        getApps: getApps,
        getAppById: getAppById
    };

    function getApps() {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts'
        });

        return request.then(handleSucces, handleError);
    }

    function getAppById(id) {
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
angular.module('Arvici').controller('AppController', function ($scope, $stateParams, $state, appService) {

    if ($stateParams.id != null) {
        loadApp($stateParams.id);
    } else {
        $state.go('apps');
    }

    function loadApp(appId) {
        appService.getAppById(appId).then(function (response) {
            $scope.app = response;
        });
    }
});
angular.module('Arvici').controller('LoginController', function ($scope, $state) {
    $scope.submitLogin = function () {
        $state.go("apps");
    };
});
angular.module('Arvici').controller('PageController', function ($scope, $state, appService) {

    loadAppData();

    function loadAppData() {
        appService.getApps().then(function (response) {
            $scope.apps = response;
        });
    }

    $scope.stateApp = function (appId) {
        $state.go('appinfo', { id: appId });
    };
});
