populist.controller('NamesCtrl', ['$scope', '$http', function(scope, http) {
  http.get('/players.json').success(function(data) {
    scope.people = data;
  })
  scope.sortField = "votes";
  scope.reverse = true;

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
])
