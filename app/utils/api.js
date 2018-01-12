var axios = require('axios');

// In case of permission denied errors
// var id = "YOUR_CLIENT_ID";
// var sec = "YOUR_SECRET_ID";
// var params = "?client_id" + id + "&client_secret=" + sec;

module.exports = {
  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};
