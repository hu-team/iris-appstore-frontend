angular.module('Arvici').controller('PageController', ["$scope", "$state", "appService", "CategoryService", "$rootScope",function($scope, $state, appService, CategoryService, $rootScope) {

    loadAppData();

    function loadAppData(){
        appService.getApps().then(function( response ){
            appService.apps = response.result;
            $scope.apps = appService.apps;
        });

    }

    $scope.stateApp = function( appId ){
        $state.go('appinfo', {id: appId});
    };

}]);
