populist.controller('PlayersCtrl', function($scope, $http, $routeParams, fetchData) {
  fetchData.find($routeParams.id, function(data){
    $scope.election = data.election;
    $scope.players = data.players;
  });
  $scope.new_player = {name: "", age: ""};

  $scope.addPlayer = function() {
    fetchData.addPlayer($routeParams.id, $scope.new_player, function(data) {
      $scope.players = data;
    });
    $scope.new_player = {name: "", age: ""};
  };

  $scope.voteForPerson = function(idx) {
    var player_upvoted = $scope.players[idx];
    fetchData.upvote(player_upvoted.id, function(data){
      $scope.players = data;
    });
  };

  $scope.deletePlayer = function(idx) {
    var player_to_delete = $scope.players[idx];
    fetchData.deletePlayer(player_to_delete.id, function(data) {
      $scope.players.splice(idx, 1);
    });
  }

});
