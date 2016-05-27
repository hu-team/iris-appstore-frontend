angular.module('Arvici').service('appService', ['$http', '$q', 'API_PATH', function ($http, $q, API_PATH) {
    this.API_PATH = API_PATH;

    return ({
        getApps: getApps,
        getAppById: getAppById,
        getCategory: getCategory,
        addApp: addApp
    });

    function getCategory() {
        var request = $http({
            method: "GET",
            url: API_PATH + '/AppCategory?Enabled=1'
        });

        return (request.then(handleSucces).catch(handleError));
    }

    function getApps() {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App?Enabled=1'
        });

        return (request.then(handleSucces, handleError));
    }

    function getAppById(id) {
        var request = $http({
            method: 'GET',
            url: API_PATH + '/App/' + id
            });
        return (request.then(handleSucces, handleError));
    }

    function addApp( label, description ) {

        var code = label.split(" ").join("");

        var request = $http({
            method: 'POST',
            url: API_PATH + "/App",
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
