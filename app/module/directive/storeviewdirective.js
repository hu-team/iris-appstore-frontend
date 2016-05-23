angular.module('Arvici').directive('storeviewcard', function(){
    return {
        restrict: 'E',
        templateUrl: 'view/storeview/index.html',
        scope: {
            app: '=app'
        }
    };
});