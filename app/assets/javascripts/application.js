
//
//= require jquery
//= require jquery_ujs
//= require angular/angular
//= require_tree .
var populist = angular.module('populist', []);

populist.controller('PopulistCtrl', function($scope) {
  $scope.firstName = "Pete";
  $scope.lastName = "Sampras";
})

populist.controller('NamesCtrl', ['$scope', '$http', function(scope, http) {
  http.get('/players.json').success(function(data) {
    scope.people = data;
  })
  scope.sortField = "-votes";

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
