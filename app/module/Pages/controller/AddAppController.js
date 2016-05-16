angular.module('Arvici').controller('AddAppController', function($scope, $state, appService) {

    $scope.form = {
        label: "",
        description: "",
        code: ""
    };

    $scope.addApp = function(){
        if(isFilledIn()){
            appService.addApp($scope.form.label, $scope.form.description)
                .success($state.go('apps', {}, {reload: true}));
        }else{
            window.alert("U moet alle velden invullen.");
        }
    };

    function isFilledIn(){
        return ($scope.form.label == "" || $scope.form.description == "" ? false : true);
    }
});