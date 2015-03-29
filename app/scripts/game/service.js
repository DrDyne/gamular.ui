angular.module('gamular.game')
.service('game', [
  '$rootScope',
  'api',
function ($rootScope, api) {
  var service = this;

  service.createPlayer = function (name) {
    $rootScope.player = new api.players({
      name: name,
      life: 5,
      maxLife: 5,
      power: 1,
      defense: 1,
      posX: 1,
      posY: 1,
    });

    $rootScope.player.$save();

    return $rootScope.player.$promise
  };

  service.createMonster = function (life) {
    $rootScope.monster = new api.monsters({
      name: 'Boblin',
      life: life,
      maxLife: life,
      power: 1,
      defense: 0,
      posX: 4,
      posY: 5,
    })

    $rootScope.monster.$save();

    return $rootScope.monster.$promise;
  }
}])
