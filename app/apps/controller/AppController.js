angular.module('Arvici').controller('AppController', function($scope, $stateParams, $state, appService){

    if($stateParams.id != null){
        loadApp($stateParams.id);
    }else{
        $state.go('store');
    }

    function loadApp( appId ){
        $scope.$emit('someEvent', 0);
        appService.getAppById( appId ).then(function( response ){
            $scope.app = response.result;
        });
    }
});
