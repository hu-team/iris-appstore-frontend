angular.module('Arvici').controller('headerController', ['$scope', '$rootScope', function ($scope, $rootScope) {
    $scope.username = 'Iris';

    $scope.$on('usernameIs', function (e, v) {
        $scope.username = v;
    });
}]);