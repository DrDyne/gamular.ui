angular.module('gamular')
.controller('btnAttackCtrl', [
  'combatFactory',
  'youWin',
function (combatFactory, youWin) {
  this.attack = function (player, monster) {
    combatFactory.attack(player, monster)
    .then(function (monster) {
      if ( monster.dead ) return youWin.open()
    })
  }
}]);
