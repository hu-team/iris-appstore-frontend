angular.module('Arvici').controller('ArviciController', ['$state', '$scope', function($state, $scope) {
  $scope.$state = $state;

  $scope.$on('categoryChanged', function(e, v) {
    $scope.$broadcast('getCategoryApps', v);
  });
}]);
