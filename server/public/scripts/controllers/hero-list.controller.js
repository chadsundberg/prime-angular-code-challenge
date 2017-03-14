heroApp.controller('HeroListController', ['$http', 'SuperpowerFactory', function($http, SuperpowerFactory){
    console.log('Hero List Controller loaded');
    var self = this;
    self.testVariable = 'I am a test!';
    self.heroList = [];
    self.superPowers = SuperpowerFactory.superPowers;

    getHeroes();

    function getHeroes() {
    $http.get('/heroes').then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });
  }

    self.deleteHero = function(heroID) {
      $http.delete('/heroes/' + heroID).then(function(response){
      getHeroes();
    });
  }

  self.mutateHero = function(hero) {
    $http.put('/heroes/' + hero.id, hero).then(function(response){
      getHeroes();
    });
  }
}]);
