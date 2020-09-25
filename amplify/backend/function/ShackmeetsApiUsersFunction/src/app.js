/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/




var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')

// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
});


// Get user information
app.get('/users', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});


// Get user information
app.post('/users', function(req, res) {
  // Add your code here
  res.json({success: 'get call succeed!', url: req.url});
});



// Log user in
app.post('/users/login', function(req, res) {
  const username = req.username;
  const password = req.password;

  const uri = 'https://winchatty.com/v2/verifyCredentials';
  const data = "username=" + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);

  try {
    const response = await axios({
      method: 'post',
      url: uri,
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    });

    if (response.isValid) {        
      let result = {
        isValid: true,
        id: 1,
        username: 'omnova',
        token: 'blahblah'
      };  

      res.json(result);
    }
    else {
      res.status(500).json({
        isValid: false
      });
    }
  }
  catch (ex) {
    res.status(500).json({
      isValid: false
    });
  } 
});


// Log user out (may not need)
app.post('/users/logout', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});


// Update user preferences
app.put('/users/preferences', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});


// Delete user account
app.delete('/users', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});


app.listen(3000, function() {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
