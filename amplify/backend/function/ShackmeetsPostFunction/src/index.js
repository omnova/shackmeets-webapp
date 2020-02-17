var axios = require('axios');

/* Must have a credentials.js file in the same directory with the following contents:
module.exports = {
  username: 'Shackmeets',
  password: '<real password here>'
}; 
*/
var chattyCredentials = require('./credentials');


exports.handler = async (event) => {
    const response = await postComment(event.text, event.parentId);

    if (!response.error) {
        return {
            statusCode: 200,
            body: JSON.stringify('Comment posted successfully'),
        };
    }
    else {
        return {
            statusCode: 500,
            body: JSON.stringify(response.message ? response.message : 'Comment post failed'),
        };
    }
};


const postComment = async (text, parentId) => {
    const username = chattyCredentials.username;
    const password = chattyCredentials.password;

    const data = "username=" + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&parentId=' + (parentId ? parentId : '0') + '&text=' + encodeURIComponent(text);

    const uri = 'https://winchatty.com/v2/postComment';

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
        
        return response;
    }
    catch (ex) {
        return {
            "error": true,
            "message": "An unknown error occurred."
         };
    }
};