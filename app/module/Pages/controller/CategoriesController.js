angular.module('Arvici').controller('CategoriesController', ['appService', '$scope', '$state', function(appService, $scope, $state) {

$scope.loginstate = false;
  $scope.$on('$stateChangeSuccess',
    function(event, unfoundState, fromState, fromParams){
      if($state.current.name === "login") {
        $scope.loginstate = true;
      } else {
        $scope.loginstate = false;
      }
  });

  function init() {
    $scope.categoryFilter = null;
    reload();
  }

  function reload() {
    console.log("Reload: " + appService.apps);
    appService.apps = [];
    appService.getCategory().then(function(data){
      $scope.items = data.result;
    }).catch(function(err) {
      new Error(err);
    });
  }

  $scope.filterCategory = function (cat) {
    $scope.categoryFilter = cat;
     reload();
  }

  $scope.clearFilter = () => {
    $scope.categoryFilter = null;
  }

  init();
}]);
