angular.module('Arvici').controller('createAppController', ['AppService', '$scope', '$mdDialog', '$mdMedia', function (AppService, $scope, $mdDialog, $mdMedia) {
    $scope.selectedCategory = '';
    $scope.AppName = '';
    $scope.AppDescription = '';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');

    AppService.getCategory()
        .then((res) => {
            $scope.categoryList = res.data
        });

    $scope.importCode = function (event) {
        var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
        $mdDialog.show({
            controller: function ($scope, $mdDialog) {
                $scope.scriptCode = '';
                $scope.cancel = function () {
                    $mdDialog.hide();
                };
            },
            templateUrl: 'view/app/importcode.html',
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true,
            fullscreen: useFullScreen
        })
    }

    $scope.saveApp = function () {
        var appDate = prepareApp();
        var categoryId = $scope.selectedCategory;

        AppService.addApp(appDate, categoryId);  
    }

    function prepareApp() {
        var code = $scope.AppName.split(" ").join("");
        return {
            "AuthorUserID": "3",
            "LastChangedUserID": "3",
            "Code": code,
            "Label": $scope.AppName,
            "Description": $scope.AppDescription,
            "SettingsDefinition": "{\"test\":\"test\"}",
            "EntryTemplate": "R_Element_" + code,
            "Enabled": "1",
            "Deleted": "0",
            "CreatedDatetime": "2016-01-28 00:00:00.000",
            "LastChangedDatetime": "2016-01-28 00:00:00.000"
        }
    }
}]);