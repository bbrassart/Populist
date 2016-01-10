populist.controller('ElectionsCtrl', function($scope, $timeout, fetchData) {
  fetchData.list(function(elections) {
    $scope.elections = elections;
  })
  $scope.new_election = {name: ""}

  $scope.addElection = function() {
    fetchData.addElection($scope.new_election, function(data) {
      $scope.elections = data;
    });
    $scope.new_election = {name: ""};
  };

  $scope.deleteElection = function(idx) {
    var election_to_delete = $scope.elections[idx];
    fetchData.deleteElection(election_to_delete.id, function(data) {
      $scope.elections.splice(idx, 1);
    });
  }
});
