populist.controller('PlayersCtrl', function($scope, $http, $routeParams, fetchData) {
  fetchData.find($routeParams.id, function(data){
    $scope.election = data.election;
    $scope.players = data.players;
  });
  $scope.new_player = {name: "", age: ""};

  $scope.addPlayer = function() {
    fetchData.addPlayer($routeParams.id, $scope.new_player, function(data) {
    });
    $scope.new_player = {name: "", age: ""};
  }


  $scope.voteForPerson = function(player) {
    fetchData.upvote(player.id, function(data){
    });
  };

  $scope.deletePlayer = function(player) {
    fetchData.deletePlayer(player.id, function(data) {
    });
  }
});
