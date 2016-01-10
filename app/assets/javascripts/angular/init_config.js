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
