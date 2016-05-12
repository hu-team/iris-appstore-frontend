angular.module('Arvici').controller('PageController', function($scope, hotelService) {
    
    loadHotelData();

    function loadHotelData(){
        hotelService.getHotels().then(function( newHotels ){
            $scope.hotels = newHotels;
        });

    }

    function loadHotel( id ){
        hotelService.getHotel(id).then(function( newHotel ){
            $scope.hotel = newHotel;
        });
    }

});