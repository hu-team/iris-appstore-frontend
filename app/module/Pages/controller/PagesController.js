angular.module('Arvici').controller('PageController', function($scope, $state, appService) {

    loadAppData();

    function loadAppData(){
        appService.getApps().then(function( response ){
            appService.apps = response.result;
            $scope.apps = appService.apps;

            //console.log(appService.apps);
        });

    }

    $scope.stateApp = function( appId ){
        $state.go('appinfo', {id: appId});
        console.log("Page: " + appService.apps);
    };

});
