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
  'gamular.map',
  'gamular.logger',
])

.controller('AppCtrl', [function () {
  this.name = 'Gamular';
}])

.constant('dimensions', {
  grid: 300,
  tile: 50,
})

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
