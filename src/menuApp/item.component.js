(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categoryItemList',{
        templateUrl: 'src/menuApp/templates/category-items-list-items.temp.html',
        bindings:{
            itemslist: '<'
        }
    });

}) () ;
