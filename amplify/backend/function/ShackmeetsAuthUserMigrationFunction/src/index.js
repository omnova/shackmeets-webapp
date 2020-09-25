const fetch = require('node-fetch');

exports.handler = async (event, context, callback) => {
  const result = await tryMigrateUser(event, context);
  
  return result;
};

async function tryMigrateUser(event, context) {
  if (event.triggerSource == "UserMigration_Authentication" ) {

    // authenticate the user with your existing user directory service
    const username = event.userName;
    const password = event.request.password;
    const isValid = await checkShackCredentials(username, password);

    if (isValid) {
      event.response.userAttributes = {
        "email": "fake@fake.net",
        "email_verified": "true"
      };

      event.response.finalUserStatus = "CONFIRMED";
      event.response.messageAction = "SUPPRESS";
        
      context.succeed(event);
    }      
    else {
      // Return error to Amazon Cognito
      console.log("Failed password check");
      return "Bad password";
    }
  }
  else {
    return "Invalid action";
  }
}

async function checkShackCredentials(username, password) {
  const uri = 'https://winchatty.com/v2/verifyCredentials';
  const data = "username=" + encodeURIComponent(username) + '&password=' + encodeURIComponent(password);

  console.log(data);

  try {
    // const response = await axios({
    //   method: 'post',
    //   url: uri,
    //   headers: {
    //     'Accept-Encoding': 'gzip, deflate, br',
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //   },
    //   data: data
    // });

    const response = await fetch(uri, {
      method: 'POST',
      headers: {
        'Accept-Encoding': 'gzip, deflate, br',
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: data
    });
  
    const result = await response.json();
    console.log(result);

    if (result.isValid) {
      console.log("shack credentials valid.");
      return true;
    }
    else {
      console.log("shack credentials invalid.");
      return false;
    }
  }     
  catch (ex) {
    console.log("Exception during shack credential check.")
    console.log(ex);
    return false;
  }
}