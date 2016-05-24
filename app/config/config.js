angular.module('Arvici', ['ngSanitize','ui.router', 'ngMaterial', 'irisloader']).config(["$httpProvider", function($httpProvider){

}]);

function setEnv() {
  var env = "develop";

  if(env === "develop") {
    angular.module('Arvici').value('API_PATH', 'http://10.200.200.17/APPSTORE_OLIVIER_WS/Api');
  } else {
    angular.module('Arvici').value('API_PATH', 'http://10.200.200.17/APPSTORE/Api')
  }
}

setEnv();
