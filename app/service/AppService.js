angular.module('Arvici').service('appService', function( $http, $q){

    //var API_PATH = 'http://jsonplaceholder.typicode.com';
    var API_PATH = 'http://10.200.200.17/APPSTORE_OLIVIER_WS/Api';


    return({
        getApps: getApps,
        getAppById: getAppById
    });

    function getApps(){
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App'
            //url: API_PATH + '/posts'
        });

        return (request.then(handleSucces, handleError));
    }

    function getAppById( id ){
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App' + id
            //url: API_PATH + '/posts/' + id
        });

        return (request.then(handleSucces, handleError));
    }

    function handleError( response ){
        if(!angular.isObject(response) || !response.data.message ){
            return($q.reject("An unknown error occurred."));
        }
    }

    function handleSucces( response ){
        return response.data;
    }
});