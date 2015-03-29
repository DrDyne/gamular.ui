angular.module('gamular.map')
.service('target', [
function () { 
  var service = this;

  service.locked = {
    x: undefined,
    y: undefined,
  };

  service.lock = function (x, y) {
    service.locked.x = x;
    service.locked.y = y;
  };

  service.unlock = function () {
    service.locked.x = undefined;
    service.locked.y = undefined;
  };

  service.hasTarget = function () {
    return service.locked.x && service.locked.y
  };

  service.atRange = function (player) {
    if ( !service.hasTarget() ) return false;

    var xRange = Math.pow(player.posX - service.locked.x, 2);
    var yRange = Math.pow(player.posY - service.locked.y, 2);
    
    if ( xRange > 1 ) return false;
    if ( yRange > 1 ) return false;
    return Math.pow(xRange - yRange, 2) === 1
  };

}]);
