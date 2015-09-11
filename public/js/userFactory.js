githubUserSearch.factory('Users', ['$http', function($http) {

  var accessToken = $http({ method: 'GET', url: '/key' });
  accessToken.then(function(success) {
    self.token = success.data;
  });

  return {
    query: function(queryUrl) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'access_token': self.token.access_token
        }
      });
    }
  }
}]);