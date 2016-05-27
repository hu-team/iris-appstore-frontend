angular.module('Arvici').service('CategoryService', ['$q', '$http', 'API_PATH', function($q, $http, API_PATH){
  var items;

  function getCategory(on) {
      var categoryList = $q.defer();

      var request = $http({
          method: "GET",
          url: API_PATH + '/AppCategory?Enabled='+on
      }).then(function(req){
        items = req.data.result;
        categoryList.resolve({
                data: req.data.result
        });
      }).catch(function(err){
        categoryList.reject({
          message: "Er is iets fout gegaan"
        })
      });

      return categoryList.promise;
  }

  return {
    getCategory: getCategory,
    categoryList: items
  }
}]);
