(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

CategoryController.$inject = ['MenuDataService'];
// function CategoryController(MenuDataService) {
function CategoryController(MenuDataService) {
  var mainList = this;

  mainList.items = [];

  mainList.$onInit = function () {
    MenuDataService.getItems()
    .then(function (result) {
      mainList.items = result;

      console.log("main list controller ", mainList.items);

    });
  };
}

})();
