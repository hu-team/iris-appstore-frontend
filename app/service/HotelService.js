angular.module('Arvici').service('hotelService', function( $http, $q){

    var API_PATH = 'http://jsonplaceholder.typicode.com';

    return({
        getHotels: getHotels,
        getHotel: getHotel
    });

    function getHotels(){
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts'
        });

        return (request.then(handleSucces, handleError));
    }

    function getHotel( id ){
        var request = $http({
            method: 'GET',
            url: API_PATH + '/posts/' + id
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