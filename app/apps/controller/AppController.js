angular.module('Arvici').controller('AppController', function($scope, $stateParams, $state, appService, AppService){

    if($stateParams.id != null){
        loadApp($stateParams.id);
        loadVersions($stateParams.id);
    }else{
        $state.go('store');
    }

    function loadApp( appId ){
        //scope.$emit('someEvent', 0);
        appService.getAppById( appId ).then(function( response ){
            $scope.app = response.result;
        });
    }

    $scope.loadReview = function(){
        AppService.getReviewsByAppVersion($scope.versies).then(function( response ){
            $scope.reviews = response.data;
        });
    };
    
    function loadVersions( appId ){
        AppService.getVersionByAppId( appId ).then(function( response ){
            $scope.versions = response.data;
        });
    }
});
