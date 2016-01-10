var populist = angular.module('populist', ['templates', 'ngRoute']);

populist.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: "index.html",
      controller: 'ElectionsCtrl'
    }).
    when('/:id', {
      templateUrl: "show.html",
      controller: "PlayersCtrl"
    }).
    otherwise({
      redirectTo: '/'
    })
  });

populist.config(function($httpProvider) {
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
});

populist.factory('fetchData', ['$http', function(http) {
  function getData(callback) {
    http({
      method: 'GET',
      url: '/api/v1/all_elections',
      cache: true
    }).success(callback);
  };

  function findElection(id, callback) {
    http({
      method: 'GET',
      url: '/api/v1/' + id,
      cache: true
    }).success(callback);
  };

  function upvote(id, callback) {
    http({
      method: 'POST',
      url: '/api/v1/upvote/' + id
    }).success(callback);
  };

  function addElection(new_election, callback) {
    http({
      method: 'POST',
      url: '/api/v1/new_election',
      data: new_election
    }).success(callback);
  };

  function addPlayer(id, new_player, callback) {
    http({
      method: 'POST',
      url: '/api/v1/' + id + '/addPlayer',
      data: new_player
    }).success(callback);
  };

  function deleteElection(election, callback) {
    http({
      method: 'DELETE',
      url: '/api/v1/deleteElection/' + election.id
    }).success(callback);
  };

  return {
    list: getData,
    find: findElection,
    upvote: upvote,
    addElection: addElection,
    addPlayer: addPlayer,
    deleteElection: deleteElection
  }
}])

populist.filter('encodeURI', function() {
  return window.encodeURI;
})
