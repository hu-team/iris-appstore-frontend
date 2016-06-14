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


    $scope.reviewCount = 0;
    $scope.loadReview = function(){
        AppService.getReviewsByAppVersion($scope.versies).then(function( response ){
            $scope.reviews = response.data;
            $scope.reviewCount = $scope.reviews.length;
        });
    };
    
    function loadVersions( appId ){
        AppService.getVersionByAppId( appId ).then(function( response ){
            $scope.versions = response.data;
        });
    }

    var ratingInput = 0;
    $scope.clickStars = function (numberStars) {
        ratingInput = numberStars;
    };

    $scope.addReview = function( app_version, review_content){
        if(isFilledIn()){
            AppService.addReview(app_version, review_content, ratingInput);
            $state.go('appinfo', {id: $stateParams.id}, {reload: true});
            
        }else{
            window.alert("U moet alle velden invullen.");
        }
    };

    function isFilledIn() {
        return $scope.reviewInput && $scope.versies && ratingInput != 0;
    }
});
