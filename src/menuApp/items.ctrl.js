(function () {

    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['itemslist', '$stateParams','MenuDataService'];

    function ItemsController(itemslist, $stateParams, MenuDataService) {
// debugger;
    var itemctrl = this;

    itemctrl.itemslist = itemslist.menu_items;

    var categoryShortName = $stateParams.categoryShortName;

    // MenuDataService.getItemsForCategory(categoryShortName).
    // then(function (result) {
    //
    //     itemctrl.itemslist = result;
    //
    // });

    }

}) ();
