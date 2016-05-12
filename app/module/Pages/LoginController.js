angular.module('Arvici').controller('LoginController', function($scope, $state){
    $scope.submitLogin = function(){
        $state.go("hotels");
    };
});