angular.module('Arvici').controller('AddAppController', function($scope, $state, appService) {

    $scope.form = {
        Label: "",
        Description: "",
        Code: ""
    };

    $scope.addApp = function(){
        appService.addApp($scope.form.Label, $scope.form.Description).then($state.go('apps'));

    }
});