const axios = require('axios');
// axios.defaults.baseURL = 'http://localhost:3000/api';
axios.defaults.baseURL = process.env.GithubPagesBaseUrl + process.env.NextBasePath + "/api"

module.exports = axios;
