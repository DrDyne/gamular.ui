angular.module('gamular')
.controller('btnAttackCtrl', [
  'combatFactory',
  'logger',
  'youWin',
function (combatFactory, logger, youWin) {
  this.attack = function (player, monster) {
    combatFactory.attack(player, monster)
    .finally(logger.attacked)
    .then(function (monster) {
      if ( monster.dead ) return youWin.open()
      return monster
    })
  }
}]);
