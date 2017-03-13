heroApp.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
      self.heroList = [];
      self.newHero = {};

      getHeroes();

  // get all employee data
  function getHeroes() {
    $http.get('/heroes').then(function(response) {
      self.heroList = response.data;
      getHeroes();
    });
  }


}]);
