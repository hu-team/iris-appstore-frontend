angular.module('Arvici').service('AppService', ['$q', '$http', 'API_PATH', function($q, $http, API_PATH){

  function getCategory() {
      var categoryList = $q.defer();

      var request = $http({
          method: "GET",
          url: API_PATH + '/AppCategory?Enabled=1'
      }).then(function(req){
        categoryList.resolve({
                data: req.data.result
        });
      }).catch(function(err){
        console.error(err);
        categoryList.reject({
          message: "Er is iets fout gegaan"
        });
      });

      return categoryList.promise;
  }

    function getVersionByAppId(app_id) {
        var versionList = $q.defer();

        var request = $http({
            method: "GET",
            url: API_PATH + '/AppVersion?AppID=' + app_id
        }).then(function(req){
            versionList.resolve({
               data: req.data.result
            });
        }).catch(function(err){
            console.error(err);
            versionList.reject({
                message: "Er is iets fout gegaan"
            });
        });

        return versionList.promise;
    }

    function getReviewsByAppVersion( app_version ) {
        var reviewList = $q.defer();

        var request = $http({
            method: "GET",
            url: API_PATH + '?AppVersionID=' + app_version
        }).then(function(req){
            reviewList.resolve({
               data: req.data.result
            });
        }).catch(function(err){
           console.error(err);
            reviewList.reject({
                message: "Er is iets fouts gegaan"
            });
        })
    }

  function getAppsByCategory(cat_id) {
    var appList = $q.defer();

    var request = $http({
      method: "GET",
      url: API_PATH + '/AppCategories?AppCategoryID='+cat_id
    }).then(function(req){
      var data = req.data.result.map(function(obj){
        return obj.App;
      });

      appList.resolve({
        result: data
      });
    }).catch(function(err){
      console.error(err);
      appList.reject({
        message: "Er is iets fout gegaan"
      })
    });

    return appList.promise;
  }

  return {
    getCategory: getCategory,
    getAppsByCategory: getAppsByCategory,
    getVersionByAppId: getVersionByAppId
  }
}]);
