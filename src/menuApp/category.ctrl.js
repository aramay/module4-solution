(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// CategoryController.$inject = ['MenuDataService'];
CategoryController.$inject = ['$stateParams', 'items', 'MenuDataService'];
// function CategoryController(MenuDataService) {
function CategoryController($stateParams, items, MenuDataService) {
  var mainList = this;

  mainList.items = items;

  var categoryShortName = $stateParams.categoryShortName;

  mainList.itemslist = [];

  MenuDataService.getItemsForCategory(categoryShortName).
  then(function (result) {
      mainList.itemslist = result.menu_items;

      console.log("inside CategoryController ", mainList.itemslist);
  });


  console.log("main list controller ", mainList.items);

  console.log("outside CategoryController ", mainList.itemslist);

  // mainList.$onInit = function () {
  //   MenuDataService.getItems()
  //   .then(function (result) {
  //     mainList.items = result;
  //
  //     console.log("main list controller ", mainList.items);
  //
  //   });
  // };
}

})();
