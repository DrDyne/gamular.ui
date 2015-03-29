angular.module('gamular.logger')
.service('logger', ['$log', function ($log) {
  var service = this;

  service.moved = function (direction) {
    $log.log('moved', direction);
  };

  service.couldNotMove = function (error) {
    $log.warn('could not move!', error.data.message);
  };

  service.attacked = function (monster) {
    $log.log('attacked', monster.life);
    if ( monster.dead )
      $log.warn(monster.name, 'is dead !');
  };

  service.atRange = function (monster) {
    $log.log(monster.name, 'is at range');
  };

  service.tooFar = function (monster) {
    $log.warn(monster.name, 'is too far');
  };
}])
