(function () {

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

function RoutesConfig($stateProvider, $urlRouterProvider) {
  // Redirect to tab 1 if no other URL matches
  $urlRouterProvider.otherwise('/');
  // set up UI states
  $stateProvider.state('home',{
    //    Tab1 is matching directly with the name of the state Tab1 defined in html tags
      url: '/',
      templateUrl: 'src/menuApp/templates/home.template.html'

  }).state('category',{
      url: '/category-list',
      templateUrl: 'src/menuApp/templates/categories.temp.html',
      controller: 'CategoryController as ctrl',
      resolve: {
          items: ['MenuDataService', function (MenuDataService) {
              return MenuDataService.getAllCategories();
          }]
      }
  }).state('category.itemDetail', {
     url: '/item-detail/{categoryShortName}',
     templateUrl: 'src/menuApp/templates/category-items-list.temp.html',
     controller: 'CategoryController as ctrl',
    //  params:{
    //      categoryShortName: categoryShortName
    //  }
    // resolve:{
    //     items: ['MenuDataService', function (MenuDataService) {
    //         return MenuDataService.getItemsForCategory(categoryShortName);
    //     }]
    // }
  });
}


})();
