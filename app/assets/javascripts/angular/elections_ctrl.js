populist.controller('ElectionsCtrl', function($scope, fetchData) {
  fetchData.list(function(elections) {
    $scope.elections = elections;
  })

  $scope.sortField = "name";
  $scope.reverse = false;
  $scope.new_election = {name: ""}

  $scope.addElection = function() {
    fetchData.addElection($scope.new_election, function(data) {
    });
    $scope.new_election = {name: ""};
  };

  $scope.deleteElection = function(election) {
    fetchData.deleteElection(election, function(data) {
    });
  }
});
