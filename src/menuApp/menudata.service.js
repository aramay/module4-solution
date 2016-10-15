(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService).
constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['$q', '$timeout', '$http', 'ApiBasePath'];
function MenuDataService($q, $timeout, $http, ApiBasePath) {
  var service = this;

  // List of shopping items
  var items = [];

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getAllCategories = function () {

      var deferred = $q.defer();
      //call API to fetch data
      $http({
          method: 'GET',
          //   url: (ApiBasePath + "/categories.json")
          url: ApiBasePath + "/categories.json"
      }).then(function (response) {
          deferred.resolve(response.data);
          console.log("http request 'getAllCategories' ", response);

      }, function (response) {
          console.log("request failed ", response);
          deferred.reject(response);

      });
        return deferred.promise;
      };

      service.getItemsForCategory = function(categoryShortName){

        console.log("getItemsForCategory service ", categoryShortName);

        console.log("categoryShortName ", categoryShortName);
          var deferred = $q.defer();
          //call API to fetch data
          $http({
              method: 'GET',
              //   url: (ApiBasePath + "/categories.json")
              url: "https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName

          }).then(function (response) {
              deferred.resolve(response.data);
              console.log("http request 'getItemsForCategory' ", response);

          }, function (response) {
              console.log("request failed ", response);
              deferred.reject(response);

          });
            return deferred.promise;
      };
  }

})();
