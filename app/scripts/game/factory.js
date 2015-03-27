angular.module('gamular.game')
.factory('combatFactory', ['api', function (api) {
  var factory = {};

  factory.attack = function (player, monster) {
    return monster.$takeDamage({amount: player.power - monster.defense});
  };

  return factory
}])
