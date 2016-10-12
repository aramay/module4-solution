(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);


// CategoryController.$inject = ['ShoppingListService'];
CategoryController.$inject = ['$scope'];
// function CategoryController(ShoppingListService) {
function CategoryController($scope) {
  var mainList = this;
console.log(mainList);
  mainList.items = {
      name: "test"
  }
  console.log(mainList);

  // mainList.$onInit = function () {
  //   ShoppingListService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //   });
  // };
}

})();
