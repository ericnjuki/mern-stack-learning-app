const axios = require("axios");

axios.get('http://api-uat.trip.tax:3000/api/v1/hello')
  .then(function (response) {
    console.log(response);
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    console.log('error: ', error);
    // handle error
    console.log(error?.response);
  });