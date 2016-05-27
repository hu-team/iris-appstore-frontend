angular.module('Arvici').controller('CategoriesController', ['CategoryService', '$scope', '$state', '$rootScope',function(CategoryService, $scope, $state, $rootScope) {

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
    //$scope.$emit('someEvent', 0);
  }
    $scope.$on('newData', function(){
      console.log("Yo");
    });
  function reload() {
    $scope.items = [];
    //$rootScope.$emit('someEvent', 0);
    // CategoryService.getCategory(1).then(function(items) {
    //   $scope.items = items.data;
    // });
    //$scope.items = CategoryService.categoryList;
    //console.log("Category: " + CategoryService.categoryList);
    // console.log("Reload: " + appService.apps);
    // appService.apps = [];
    // appService.getCategory().then(function(data){
    //   $scope.items = data.result;
    // }).catch(function(err) {
    //   new Error(err);
    // });
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
