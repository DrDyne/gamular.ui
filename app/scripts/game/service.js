angular.module('gamular.game')
.service('game', ['api', function (api) {
  var service = this;

  service.createPlayer = function () {
    return api.players.create({
      life: 5,
      power: 2,
      defense: 1,
      posX: 2,
      posY: 2,
    }).$promise
  };

  service.createMonster = function () {
    return api.monsters.create({
      life: 5,
      power: 1,
      defense: 0,
      posX: 4,
      posY: 5,
    }).$promise
  }
}])
