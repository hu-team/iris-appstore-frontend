angular.module('Arvici').filter('randNum', function(){
  return function(x) {
    var num = Math.floor((Math.random()* 5) + 1);
    return num
  }
});
