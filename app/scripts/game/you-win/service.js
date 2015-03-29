angular.module('gamular')
.service('youWin', [
  '$modal',
function ($modal) {
  var service = this;

  service.open = function () {
    var modalInstance = $modal.open({
      size: 'lg',
      template: '<div class="modal-header"><h1>YOU WIN</h1></div>',
    })
  }
}]);
