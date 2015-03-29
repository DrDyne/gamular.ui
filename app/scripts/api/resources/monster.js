angular.module('gamular.api.resources')
.factory('monster', ['$resource', 'api', function ($resource, api) {
  var resource = $resource('/api/monsters/:id', {
    id: '@id',
  }, {
    update: {
      method: 'PUT',
    },
  });

  return api.register('monsters', resource);
}]);
