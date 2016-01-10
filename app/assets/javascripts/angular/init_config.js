var populist = angular.module('populist', ['templates', 'ngRoute']);

populist.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: "index.html",
      controller: 'ElectionsCtrl'
    }).
    when('/:election', {
      templateUrl: "show.html",
      controller: "PlayersCtrl"
    }).
    otherwise({
      redirectTo: '/'
    })
  });

populist.factory('getElections', ['$http', function(http) {
  function getData(callback) {
    http({
      method: 'GET',
      url: '/api/v1/all_elections',
      cache: true
    }).success(callback);
  }

  return {
    list: getData
  }
}])
