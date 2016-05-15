angular.module('irisloader').directive('irisloaderLoading', ['$http', function($http){
  return {
    scope: {},
    link:  function(scope, elm) {
      scope.isLoading = function () {
        return $http.pendingRequests.length > 0;
      };

      scope.$watch(scope.isLoading, function(e) {
        if(e) {
          elm.show();
        } else {
          elm.hide();
        }
      });
    },
    templateUrl: "view/irisloader/index.html"
  }
}]);
