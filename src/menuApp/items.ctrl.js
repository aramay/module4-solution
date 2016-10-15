(function () {

    'use strict';

    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['itemslist', '$stateParams','MenuDataService'];

    function ItemsController(itemslist) {

    var itemCtrl = this;

    itemCtrl.itemslist = itemslist.menu_items;

    }

}) ();
