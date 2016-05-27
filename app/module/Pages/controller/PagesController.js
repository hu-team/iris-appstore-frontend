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
      console.log(v);
      AppService.getAppsByCategory(v.ID);
    });

    $scope.stateApp = function( appId ){
        $state.go('appinfo', {id: appId});
    };

}]);
