angular.module('Arvici').controller('AddAppController', function($scope, $state, appService) {

    $scope.form = {
        Label: "",
        Description: "",
        Code: ""
    };

    $scope.addApp = function(label, code, description){
        
        appService.addApp(label, code, description).then($state.go('apps'));

        $scope.form = {
            Label: "",
            Description: "",
            Code: ""
        }
    }
});