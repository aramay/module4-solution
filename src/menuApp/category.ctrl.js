(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = [ShoppingListService];
// function CategoryController(ShoppingListService) {
function CategoryController(ShoppingListService) {
  var mainList = this;

  mainList.items = [];

  mainList.$onInit = function () {
    ShoppingListService.getItems()
    .then(function (result) {
      mainList.items = result;
    });
  };
}

})();
