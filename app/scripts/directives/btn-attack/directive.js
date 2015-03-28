angular.module('gamular')
.directive('btnAttack', [function () {
  return {
    scope: {
      player: '='
    },
    transclude: true,
    replace: true,
    templateUrl: 'scripts/directives/btn-attack/template.html',
    link: function (scope, element) {
      element.addClass('btn-attack');
      element.on('click', function () {
        console.log('attack');
      });
    }
  }
}]);

