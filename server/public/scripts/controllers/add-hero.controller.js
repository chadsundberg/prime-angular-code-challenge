heroApp.controller('AddHeroController', ['$http', 'SuperpowerFactory', function($http, SuperpowerFactory){
  var self = this;
  self.testMessage = 'Can you hear me?';
  self.superPowers = SuperpowerFactory.superPowers;
  self.heroList = [];

  self.spawnNewHero = function(newHeroObject){
    $http.post('/heroes', newHeroObject).then(function(response){
        console.log(response);
      });
    }



}]);
