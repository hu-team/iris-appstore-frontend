angular.module('Arvici').controller('PageController', function($scope, $state, appService) {
  
    loadAppData();

    function loadAppData(){
        appService.getApps().then(function( response ){
            $scope.apps = response;
        });

    }

    $scope.stateApp = function( appId ){
        $state.go('appinfo', {id: appId});
    };

});
