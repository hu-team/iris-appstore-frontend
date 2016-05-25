angular.module('Arvici').directive('storeviewcard', function(){

    return {
        restrict: 'E',
        templateUrl: 'view/storeview/index.html',
        scope: {
            app: '=app'
        }
    };
});
//TODO: Er moet nog een summary text functie komen