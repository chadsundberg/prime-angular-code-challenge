var heroApp = angular.module('heroApp', ['ngRoute']);

heroApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/heroList', {
      templateUrl: '/views/hero-list.html',
      controller: 'HeroListController',
      controllerAs: 'hlc'
    })
    .when('/addHero', {
      templateUrl: '/views/hero-list.html',
      controller: 'AddHeroController',
      controllerAs: 'ahc'
    })
    .otherwise({
      redirectTo: 'heroList'
    })
}]);
