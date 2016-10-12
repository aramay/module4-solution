(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');
  // set up UI states
  $stateProvider.state('/',{
    //    Tab1 is matching directly with the name of the state Tab1 defined in html tags
      url: '/',
      templateUrl: 'src/MenuApp/templates/home.template.html'
  // }).state('mainList',{
  //     url: '/main-list',
  //     templateUrl: 'src/shoppinglist/templates/msain-shoppinglist.template.html',
  //     controller: 'MenuDataConroller as mainList',
  //     resolve: {
  //         items: ['ShoppingListService', function (ShoppingListService) {
  //             return ShoppingListService.getItems();
  //         }]
  //     }
  //
  //   //   item Details inheriting form mainList
  // }).state('mainList.itemDetail',{
  //   //   url: '/item-detail/{itemId}',
  //   //  we did not associate a URL together with that state.
  //     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //     controller: 'ItemDetailController as itemdetail',
  //     params: {
  //         itemId: null
  //     }


    //   resolve:{
    //       item:['$stateParams', 'ShoppingListService',
    //                 function ($stateParams, ShoppingListService) {
    //                     return ShoppingListService.getItems()
    //                         .then(function (items) {
    //                             // console.log(items);
    //                             // console.log(items[$stateParams.itemId]);
    //                             return items[$stateParams.itemId];
    //                         });
    //       }]
    //   }

  });
}


})();
