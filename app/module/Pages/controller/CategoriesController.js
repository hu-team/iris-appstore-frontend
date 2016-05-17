angular.module('Arvici').controller('CategoriesController', ['appService', '$scope', '$state', function(appService, $scope, $state) {

$scope.loginstate = false;
  $scope.$on('$stateChangeSuccess',
    function(event, unfoundState, fromState, fromParams){
      if($state.current.name === "login") {
        $scope.loginstate = true;
      } else {
        $scope.loginstate = false;
      }
        //console.log($state.current.name); // "lazy.state"
        //console.log(unfoundState.toParams); // {a:1, b:2}
        //console.log(unfoundState.options); // {inherit:false} + default options
  });

  function init() {
    appService.getCategory().then(function(data){
      $scope.items = data.result;
    }).catch(function(err) {
      new Error(err);
    });
  }

  init();
}]);
