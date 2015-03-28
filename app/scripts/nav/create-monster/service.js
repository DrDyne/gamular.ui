angular.module('gamular')
.service('createMonsterModal', [
  '$modal',
function ($modal) {
  var service = this;
  service.life = 0;

  service.setDefaultLife = function (life) {
    service.life = life;
    return service
  };

  service.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'scripts/nav/create-monster/template.html',
      size: 'sm',
      resolve: {
        life: function () { return service.life },
      },
      controller: ['$scope', 'life', function ($scope, life) {
        $scope.monster = { life: life };
      }],
    });

    return modalInstance.result
    .finally(service.reset);
  };

  service.reset = function () {
    service.life = 0;
  };

}])
