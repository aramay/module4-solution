(function () {
    'use strict';

    angular.module('MenuApp')
    .component('itemDetail',{
        templateUrl: 'src/menuApp/templates/items.html',
        bindings:{
            itemslist: '<'
        }
    });

}) () ;
