populist.controller('ElectionsCtrl', ['$scope', '$http', function(scope, http) {
  http.get('/api/v1/all_elections').success(function(data) {
    scope.elections = data;
  })
  scope.sortField = "name";
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
