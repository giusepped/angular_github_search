githubUserSearch.factory('Users', ['$http', function($http) {
  var queryUrl = 'https://api.github.com/users/'
  return {
    query: function(login) {
      return $http({
        url: queryUrl + login,
        method: 'GET'
      });
    }
  }
}]);