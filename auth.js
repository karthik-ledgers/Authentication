var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://auth.workid.global/api/token',
  'headers': {
    'x-api-key': '{api-key}',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "operation": "get-api-token",
    "username": "your username",
    "password": "your password"
  })

};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
