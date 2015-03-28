angular.module('gamular', [
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ngMessages',
  'ui.bootstrap',
                          
  'gamular.api',
  'gamular.api.resources',
  'gamular.game',
])

.controller('AppCtrl', [function () {
  this.name = 'Gamular';
}])

.service('app', [
  '$rootScope',
  '$log',
  'game',
function ($rootScope, $log, game) {
  var service = this;

  service.start = function () {
    $log.log('Welcome to Gamular !');
  };
}])

.run(['app', function (app) {
  app.start();
}]);
