angular.module('gamular.api.resources')
.factory('player', ['$resource', 'api', function ($resource, api) {
  var resource = $resource('/api/players/:id', {
  }, {
    moveUp: {
      method: 'PUT',
      params: { posY: -1 },
    },
    moveRight: {
      method: 'PUT',
      params: { posX: 1 },
    },
    moveDown: {
      method: 'PUT',
      params: { posY: 1 },
    },
    moveLeft: {
      method: 'PUT',
      params: { posX: -1 },
    }
  });

  return api.register('players', resource);
}]);
