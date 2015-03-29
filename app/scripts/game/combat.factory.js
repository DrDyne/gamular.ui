angular.module('gamular.game')
.factory('combatFactory', [
  'api',
  'target',
  'logger',
function (api, target, logger) {
  var factory = {};

  function damageDealt (player, monster) {
    if ( target.atRange(player) ) {
      logger.atRange(monster);
      return player.power - monster.defense;
    }

    logger.tooFar(monster);
    return 0;
  };

  factory.attack = function (player, monster) {
    target.lock(monster.posX, monster.posY);

    monster.life -= damageDealt(player, monster);

    return monster.$save()
    .finally(target.unlock)
  };

  return factory
}])
