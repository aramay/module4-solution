(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryController', CategoryController);

// CategoryController.$inject = ['MenuDataService'];
CategoryController.$inject = ['items'];
// function CategoryController(MenuDataService) {
function CategoryController(items) {
  var mainList = this;

  mainList.items = items;

  // var categoryShortName = $stateParams.categoryShortName;


}

})();
