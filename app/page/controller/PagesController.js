angular.module('Arvici').controller('PageController', ["$scope", "$state", "appService", "AppService", "$rootScope",function($scope, $state, appService, AppService, $rootScope) {

    loadAppData();

    function loadAppData(){
        appService.getApps().then(function( response ){
            appService.apps = response.result;
            $scope.apps = appService.apps;
        });

    }

    $scope.$on('getCategoryApps', function(e, v){
      $scope.apps = [];
      
      if( v === "all" ) {
        loadAppData();
        return;
      }

      AppService.getAppsByCategory(v.ID).then(function( response ) {
        $scope.apps = response.result;
      });
    });

    $scope.stateApp = function( appId ){
        $state.go('appinfo', {id: appId});
    };

}]);
