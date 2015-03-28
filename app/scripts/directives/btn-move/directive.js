angular.module('gamular')
.directive('btnMove', ['$log', 'MoveFactory', function ($log, MoveFactory) {
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
          $log.log('moved', scope.direction);
        }, function (err) {
          $log.warn('could not move!', err.data.message);
        });
      });
    }
  }
}]);
