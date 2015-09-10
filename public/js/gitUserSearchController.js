githubUserSearch.controller('GitUserSearchController', ['Search', 'Users', function(Search, Users) {
  var self = this;

  self.doSearch = function (){

    Search.query(self.searchTerm)
      .then(function(response) {
        self.searchResult = response.data.items.slice(0,10);

        var resultsArr = [];
        for(var i=0; i<3; i++){
          var login = self.searchResult[i].login;
          Users.query(login)
          .then(function(response) {
            var userArr = [];
            userArr.push(response.data.login);
            userArr.push(response.data.avatar_url);
            userArr.push(response.data.followers);
            userArr.push(response.data.public_repos);
            console.log(userArr);
            resultsArr.push(userArr);
            console.log(resultsArr);
          })
        }

        self.result = resultsArr;
      })
  };

  // self.findUsers = function(login){
  //   Users.query(login)
  //     .then(function(response) {
  //       self.result = response.data;
  //     })
  // };

}]);