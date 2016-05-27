angular.module('Arvici').controller('CategoriesController', ['AppService', '$scope', '$state', '$rootScope',function(AppService, $scope, $state, $rootScope) {

$scope.loginstate = false;
  $scope.$on('$stateChangeSuccess',
    function(event, unfoundState, fromState, fromParams){
      if($state.current.name === "login") {
        $scope.loginstate = true;
      } else {
        $scope.loginstate = false;
      }
  });

  $scope.init = function () {
    $scope.categoryFilter = null;
    reload();
  }

  function reload() {
    AppService.getCategory().then(function(items) {
      $scope.items = items.data;
    });
  }

  $scope.filterCategory = function (cat) {
    $scope.categoryFilter = cat;
    reload();
    $scope.$emit('categoryChanged', cat);
  }

  $scope.clearFilter = () => {
    $scope.categoryFilter = null;
  }

}]);
