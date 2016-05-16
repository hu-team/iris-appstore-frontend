angular.module('Arvici').controller('CategoriesController', ['appService', '$scope', function(appService, $scope){
  $scope.items = {};

  function init() {
    appService.getCategory().then(function(data){
      $scope.items = data.result;
    }).catch(function(err) {
      new Error(err);
    });
  }

  init();
}]);
