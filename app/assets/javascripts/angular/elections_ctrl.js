populist.controller('ElectionsCtrl', function($scope, getElections) {
  getElections.list(function(elections) {
    $scope.elections = elections;
  })

  $scope.sortField = "name";
  $scope.reverse = true;

//  $scope.voteForPerson = function() {
//  };

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
)
