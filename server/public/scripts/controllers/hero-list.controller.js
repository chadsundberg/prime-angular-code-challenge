heroApp.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.heroList = [];

    getHeroes();

    function getHeroes() {
    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });

  }

    self.deleteHero = function(heroID) {
    $http({
      method: 'DELETE',
      url: '/heroes/'  + heroID
    }).then(function(response){
      console.log(response.data);
      getHeroes();
    });
  }


      // getHeroes();

  // get all employee data
  // function getHeroes() {
  //   $http.get('/heroes').then(function(response) {
  //     self.heroList = response.data;
  //     getHeroes();
  //   });
  // }


}]);
