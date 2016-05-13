angular.module('Arvici').controller('PageController', function($scope, $state, hotelService) {
    
    loadHotelData();

    function loadHotelData(){
        hotelService.getHotels().then(function( newHotels ){
            $scope.hotels = newHotels;
        });

    }

    $scope.stateHotel = function( hotelId ){
        $state.go('hotelinfo', {id: hotelId});
    };

});