angular.module('gamular')
.service('createPlayerModal', [
  '$modal',
function ($modal) {
  var service = this;

  service.open = function () {
    var modalInstance = $modal.open({
      templateUrl: 'scripts/nav/create-player/template.html',
      size: 'sm',
    });

    return modalInstance.result
  };

}])
