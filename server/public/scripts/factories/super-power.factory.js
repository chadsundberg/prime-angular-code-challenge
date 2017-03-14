heroApp.factory('SuperpowerFactory', ['$http', function($http){
  console.log('Superpower Factory loaded');

  var superPowers = { list: [] };

  getSuperpowers();

  function getSuperpowers() {
  $http.get('/powers').then(function(response){
      console.log(response.data);
      superPowers.list = response.data;
    });
  }


  return {
    superPowers: superPowers
  }

}]);
