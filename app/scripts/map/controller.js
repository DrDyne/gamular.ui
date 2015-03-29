angular.module('gamular.map')
.controller('mapCtrl', ['target', function (target) {
  this.setTarget = target.lock;
}]);
