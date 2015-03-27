angular.module('gamular', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ngMessages',
                          
  'gamular.api',
  'gamular.api.resources',
  'gamular.game',
])

.controller('AppCtrl', [function () {
  this.name = 'Gamular';
}])

.service('app', [
  '$q',
  '$rootScope',
  '$log',
  'game',
function ($q, $rootScope, $log, game) {
  var service = this;

  service.start = function () {
    $q.all({
      player: game.createPlayer(),
      monster: game.createMonster(),
    }, function (data) {
      $rootScope.player = data.player;
      $rootScope.monster = data.monster;

      $log.log('Welcome to Gamular !');
    });
  };
}])

.run(['app', function (app) {
  app.start();
}]);
