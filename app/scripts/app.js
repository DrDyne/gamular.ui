angular.module('gamular', [
  'gamular.api',
  'gamular.api.resources',
  'gamular.game',
])

.service('app', [
  '$q',
  '$rootScope',
  '$log',
  'game',
function ($q, $rootScope, $log, game) {
  $q.all([
    game.createPlayer(),
    game.createMonster(),
  ], function () {
    $log.log('Welcome to Gamular !');
  });
}])

.run(['app', function (app) {
  app.start();
}]);
