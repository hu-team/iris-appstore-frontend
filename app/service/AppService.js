angular.module('Arvici').service('appService', ['$http', '$q', function ($http, $q) {
    //var API_PATH = 'http://jsonplaceholder.typicode.com';
    var API_PATH = "http://10.200.200.17/APPSTORE_OLIVIER_WS/Api";

    return ({
        getApps: getApps,
        getAppById: getAppById,
        getCategory: getCategory,
        addApp: addApp
    });

    function getCategory() {
        var request = $http({
            method: "GET",
            url: API_PATH + '/AppCategory'
        });

        return (request.then(handleSucces).catch(handleError));
    }

    function getApps() {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App'
            //url: API_PATH + '/posts'
        });

        return (request.then(handleSucces, handleError));
    }

    function getAppById(id) {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App/' + id
            //url: API_PATH + '/posts/' + id
            });
        return (request.then(handleSucces, handleError));
    }

    function addApp( label, description ) {

        var code = label.split(" ").join("");

        var request = $http({
            method: 'POST',
            url: "http://10.200.200.17/APPSTORE_ARJAN_WS/Api/App",
            headers: {
              'Content-Type': 'application/json'
            },
            data: {
                "AuthorUserID": "3",
                "LastChangedUserID": "3",
                "Code": code,
                "Label": label,
                "Description": description,
                "SettingsDefinition": "{\"test\":\"test\"}",
                "EntryTemplate": "R_Element_" + code,
                "Enabled": "1",
                "Deleted": "0",
                "CreatedDatetime": "2016-01-28 00:00:00.000",
                "LastChangedDatetime": "2016-01-28 00:00:00.000"
            }
        });

        return (request.then(handleSucces, handleError));

    }

        function handleError(response) {
            if (!angular.isObject(response) || !response.message) {
                return ($q.reject("An unknown error occurred."));
            }
        }

        function handleSucces(response) {
            return response.data;
        }
    }
]);