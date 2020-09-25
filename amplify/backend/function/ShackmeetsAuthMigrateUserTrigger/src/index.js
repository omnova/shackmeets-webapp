const axios = require('axios');

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
    
    
    return response.isValid;
  }     
  catch (ex) {
    return false;
  }
}