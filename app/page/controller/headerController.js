angular.module('Arvici').controller('headerController', ['$scope', function ($scope) {
    $scope.username = 'Iris';

    $scope.$on('username', function (e, v) {
        console.log("asdasd");
        $scope.username = v;
    });
}]);