angular.module('gamular')
.controller('navCtrl', [
  'createPlayerModal',
  'createMonsterModal',
  'game',
function (createPlayerModal, createMonsterModal, game) {
  var scope = this;

  scope.startGame = function () {
    createPlayerModal.open()
    .then(function (player) {
      game.createPlayer(player.name)

      return createMonsterModal
      .setDefaultLife(3)
      .open()
    })
    .then(function (monster) {
      return game.createMonster(monster.life)
    })
  };
}]);
