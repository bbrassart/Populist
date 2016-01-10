populist.controller('PlayersCtrl', function($scope, $http, $routeParams, fetchData) {
  console.log($routeParams)
  fetchData.find($routeParams.id, function(data){
    $scope.election = data.election;
    $scope.players = data.players;
  })
})

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
