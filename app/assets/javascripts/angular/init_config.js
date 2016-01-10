var populist = angular.module('populist', ['templates', 'ngRoute']);

populist.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: "index.html",
      controller: 'ElectionsCtrl'
    }).
    when('/:id', {
      templateUrl: "show.html",
      controller: "PlayersCtrl"
    }).
    otherwise({
      redirectTo: '/'
    })
  });

populist.factory('fetchData', ['$http', function(http) {
  function getData(callback) {
    http({
      method: 'GET',
      url: '/api/v1/all_elections',
      cache: true
    }).success(callback);
  };

  function findElection(id, callback) {
    http({
      method: 'GET',
      url: '/api/v1/' + id,
      cache: true
    }).success(callback);
  }

  return {
    list: getData,
    find: findElection
  }
}])

populist.filter('encodeURI', function() {
  return window.encodeURI;
})
