angular.module('Arvici').service('appService', ['$http', '$q', function( $http, $q){
    //var API_PATH = 'http://jsonplaceholder.typicode.com';
    var API_PATH = "http://10.200.200.17/APPSTORE_ARJAN_WS/Api/";

    return({
        getApps: getApps,
        getAppById: getAppById,
        getCategory: getCategory
    });

    function getCategory() {
        var request = $http({
          method: "GET",
          url: API_PATH + 'AppCategory'
        });

        return (request.then(handleSucces).catch(handleError));
    }

    function getApps(){
        var request = $http({
            method: 'GET',
            url: API_PATH + 'App'
        });

        return (request.then(handleSucces, handleError));
    }

    function getAppById( id ){
        var request = $http({
            method: 'GET',
            url: API_PATH + 'App/' + id
        });

        return (request.then(handleSucces, handleError));
    }

    function handleError( response ){
        if(!angular.isObject(response) || !response.message ){
            return($q.reject("An unknown error occurred."));
        }
    }

    function handleSucces( response ){
        return response.data;
    }
}]);
