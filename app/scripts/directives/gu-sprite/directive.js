angular.module('gamular')
.directive('guSprite', ['dimensions', function (dimensions) {
  return {
    restrict: 'E',
    scope: {
      model: '=',
      sprite: '@',
    },
    templateUrl: 'scripts/directives/gu-sprite/template.html',
    link: function (scope, element, attrs) {
      element.addClass('gu-sprite');

      scope.$watch('model.posX', function (value) {
        console.log('posX', scope.model.name, value);
        element.css('margin-left', scope.model.posX * dimensions.tile);
      });

      scope.$watch('model.posY', function (value) {
        console.log('posY', scope.model.name, value);
        element.css('margin-top', scope.model.posY * dimensions.tile);
      });
    }
  }
}]);
