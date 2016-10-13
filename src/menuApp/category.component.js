(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categoryList', {
        templateUrl: 'src/menuApp/templates/categorylist-item.temp.html',
        bindings: {
            items: '<'
        }
    });

}) ();
