'use strict';

angular.module('Arvici', ['ngSanitize', 'ui.router']);

angular.module('Arvici').config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/Arvici");
  $stateProvider.state('Arvici', {
    url: "/Arvici",
    templateUrl: "view/page/index.html"
  }).state('Red', {
    url: "/red",
    templateurl: "view/red/red.html"
  });
});

angular.module('Arvici').controller('PageController', function () {});
