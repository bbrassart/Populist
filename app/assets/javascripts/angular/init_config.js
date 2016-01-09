var populist = angular.module('populist', ['templates', 'ngRoute']);

populist.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: "index.html",
      controller: 'NamesCtrl'
    }).
    when('/:player', {
      templateUrl: "show.html",
      controller: "ShowCtrl"
    }).
    otherwise({
      redirectTo: '/'
    })
  });
