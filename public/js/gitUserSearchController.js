githubUserSearch.controller('GitUserSearchController', ['Search', 'Users', function(Search, Users) {
  var self = this;

  self.doSearch = function (){

    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data.items.slice(0,10);

        var resultsArr = [];
        for(var i=0; i<self.searchResult.length; i++){
          var queryUrl = self.searchResult[i].url;
          Users.query(queryUrl)
          .then(function(response) {
            resultsArr.push(response.data);
          })
        }

        self.usersData = resultsArr;
      })
  };

}]);