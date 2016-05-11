angular.module('Arvici').controller('PageController', function($scope, hotelService) {

    loadHotelData();

    function applyHotelData( newHotels ){
        $scope.hotels = newHotels;
    }

    function loadHotelData(){
        hotelService.getHotels().then(function(hotel){
           applyHotelData(hotel);
        });
    }

});
