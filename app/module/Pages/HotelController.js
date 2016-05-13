angular.module('Arvici').controller('HotelController', function($scope, $stateParams, hotelService){

    loadHotel($stateParams.id);

    function loadHotel( hotelId ){
        hotelService.getHotel(hotelId).then(function( newHotel ){
            $scope.hotel = newHotel;
        });
    }

});