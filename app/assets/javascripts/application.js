
//
//= require jquery
//= require jquery_ujs
//= require angular
//= require angular-route
//= require angular-rails-templates
//= require_tree ./templates

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

populist.controller('NamesCtrl', ['$scope', '$http', function(scope, http) {
  http.get('/players.json').success(function(data) {
    scope.people = data;
  })
  scope.sortField = "votes";
  scope.reverse = true;

//  $scope.addPerson = function() {
//    $scope.person = {name: $scope.enteredName, age: $scope.enteredAge};
  //  $scope.people.push($scope.person);
//    $scope.enteredName = "";
  //  $scope.enteredAge = "";
//  };

//  $scope.removePerson = function(person) {
//    for (var i = 0; i < $scope.people.length; i++) {
//    if ($scope.people[i].name == person.name) {
  //      $scope.people.splice(i, 1)
  //    }
  //  }
//  };
  }
])

populist.controller('ShowCtrl', ['$scope', '$http', '$routeParams', function(scope, http, routeParams) {
  console.log(routeParams);
  }
])
