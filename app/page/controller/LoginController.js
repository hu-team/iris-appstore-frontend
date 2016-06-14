angular.module('Arvici').controller('LoginController', ['$scope', '$state', function($scope, $state){
    $scope.username = '';
   
    $scope.submitLogin = () => {
        $scope.$emit('userlogin', $scope.username);
        $state.go("store");
    };
}]);
