angular.module('Arvici').directive('ratingstars', function(){
  return {
    templateUrl: 'view/ratingstar/ratingstar.html',
    controller: ['$scope', function($scope) {
      $scope.getAmount = function() {
        let arr = [];
        for(let i = 0 ; i < $scope.amount; i ++) {
          arr.push(i);
        }
        return arr;
      }
    }],
    scope: {
      amount: '=amount',
      height: '=height'
    }
  }
});
