'use strict';

angular.module('Arvici', ['ngSanitize', 'ui.router']);

angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");
  $stateProvider.state('arvici', {
    url: "/",
    templateUrl: "view/page/index.html"
  }).state('color', {
    url: "/color",
    templateUrl: "view/red/red.html",
    controller: function controller($scope) {
      $scope.items = ["Red", "Blue", "Yellow"];
    }
  });
});

angular.module('Arvici').controller('PageController', function () {});
