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


/**********************
 * Example get method *
 **********************/

app.get('/meets', function(req, res) {
  
  let meets = [{
    id: 1,
    title: 'Shackmeet 1',
    description: 'This is a fantastic meet we should do it!',
    organizer: 'omnova',
    locations: [
      {
        date: '01/01/2021',
        time: '9:00:00',
        name: 'Cidercade',
        address: '2777 Irving Blvd #200, Dallas, TX 75207'
      }
    ],
    attendees: {
      length: 4
    },
    interested: {
      length: 4
    }
  },
  {
    id: 2,
    title: 'Shackmeet 2',
    description: 'This is not a good idea we shouldn\'t do it!',
    organizer: 'omnova',
    locations: [
      {
        date: '01/03/2021',
        time: '15:00:00',
        name: 'Cidercade',
        address: '2777 Irving Blvd #200, Dallas, TX 75207'
      }
    ],
    attendees: {
      length: 4
    },
    interested: {
      length: 4
    }
  }];  

  res.json(meets);
});


app.get('/meets/archive', function(req, res) {
  
  let meets = [{
    id: 3,
    title: 'Shackmeet 3',
    description: 'This is a fantastic meet we should do it!',
    organizer: 'omnova',
    locations: [
      {
        date: '01/01/2021',
        time: '9:00:00',
        name: 'Cidercade',
        address: '2777 Irving Blvd #200, Dallas, TX 75207'
      }
    ],
    attendees: {
      length: 4
    },
    interested: {
      length: 4
    }
  },
  {
    id: 4,
    title: 'Shackmeet 4',
    description: 'This is not a good idea we shouldn\'t do it!',
    organizer: 'omnova',
    locations: [
      {
        date: '01/03/2021',
        time: '15:00:00',
        name: 'Cidercade',
        address: '2777 Irving Blvd #200, Dallas, TX 75207'
      }
    ],
    attendees: {
      length: 4
    },
    interested: {
      length: 4
    }
  }];  

});

/****************************
* Example post method *
****************************/

app.post('/meets', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

app.post('/meets/*', function(req, res) {
  // Add your code here
  res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
* Example put method *
****************************/

app.put('/meets', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/meets/*', function(req, res) {
  // Add your code here
  res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
* Example delete method *
****************************/

app.delete('/meets', function(req, res) {
  // Add your code here
  res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/meets/*', function(req, res) {
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
