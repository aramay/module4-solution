(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService).
constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q', '$timeout', '$http'];
function MenuDataService($q, $timeout, $http) {
  var service = this;

  // List of shopping items
  var items = [];

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {

      var deferred = $q.defer();
      //call API to fetch data
      $http({
          method: 'GET',
          //   url: (ApiBasePath + "/categories.json")
          url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function (response) {
          deferred.resolve(response.data);

      }, function (response) {

          defer.reject(response);

      });
        return deferred.promise;
      };
  }

})();
