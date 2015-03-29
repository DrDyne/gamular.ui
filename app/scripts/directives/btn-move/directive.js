angular.module('gamular')
.directive('btnMove', ['logger', 'MoveFactory', function (logger, MoveFactory) {
  return {
    scope: {
      player: '=',
      direction: '@',
    },
    transclude: true,
    replace: true,
    templateUrl: 'scripts/directives/btn-move/template.html',
    link: function (scope, element) {
      element.addClass('btn-' + scope.direction);

      element.on('click', function () {
        MoveFactory[scope.direction](scope.player)
        .then(function () {
          logger.moved(scope.direction);
        }, logger.couldNotMove);
      });
    }
  }
}]);
