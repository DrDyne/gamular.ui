angular.module('gamular.game')
.directive('movePlayer', ['$log', function ($log) {
  return {
    restrict: 'A',
    scope: {
      player: '=',
      direction: '@',
    },
    link: function (scope, element) {
      element.on('click', function () {
        var action;
        if ( 'up' === scope.direction ) action = 'moveUp';
        if ( 'right' === scope.direction ) action = 'moveRight';
        if ( 'down' === scope.direction ) action = 'moveDown';
        if ( 'left' === scope.direction ) action = 'moveLeft';

        scope.player[action]()
        .then(function () {
          $log.log('moved', scope.direction);
        });
      });
    }
  };
}]);
