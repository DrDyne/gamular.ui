angular.module('gamular.game')
.factory('MoveFactory', [function () {
  var factory = {};

  factory.up = function (player) {
    return player.$moveUp()
  };

  factory.right = function (player) {
    return player.$moveRight()
  };

  factory.down = function (player) {
    return player.$moveDown()
  };
  
  factory.left = function (player) {
    return player.$moveLeft()
  }

  return factory
}])
