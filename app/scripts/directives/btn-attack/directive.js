angular.module('gamular')
.directive('btnAttack', [
  'logger',
function (logger) {
  return {
    scope: {
      player: '=',
      monster: '=',
    },
    transclude: true,
    replace: true,
    templateUrl: 'scripts/directives/btn-attack/template.html',
    link: function (scope, element) {
      element.addClass('btn-attack');
    },
    controller: 'btnAttackCtrl as ctrl',
  }
}]);

