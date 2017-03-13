heroApp.controller('HeroListController', ['$http', function($http){
    console.log('Hero List Controller loaded');
    var self = this;
    self.heroList = [];

    $http({
      method: 'GET',
      url: '/heroes'
    }).then(function(response){
      console.log(response.data);
      self.heroList = response.data;
    });


      // getHeroes();

  // get all employee data
  // function getHeroes() {
  //   $http.get('/heroes').then(function(response) {
  //     self.heroList = response.data;
  //     getHeroes();
  //   });
  // }


}]);
