angular.module('gamular.api.resources')
.factory('monster', ['$resource', 'api', function ($resource, api) {
  var resource = $resource('/api/monsters/:id', {
  }, {
    takeDamage: {
      method: 'PUT',
      params: { amount: undefined },
    },
  });

  return api.register('monsters', resource);
}]);
