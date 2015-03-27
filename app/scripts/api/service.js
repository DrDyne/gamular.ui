angular.module('gamular.api')
.service('api', [function () {
  var service = this;

  service.register = function (id, resource) {
    service[id] = resource;
    return resource
  };
}]);
