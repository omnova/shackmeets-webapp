var axios = require('axios');
var chattyCredentials = require('./credentials');


exports.handler = async (event) => {
    const response = await sendMessage(event.to, event.subject, event.body);

    if (!response.error) {
        return {
            statusCode: 200,
            body: JSON.stringify('Message sent successfully'),
        };
    }
    else {
        return {
            statusCode: 500,
            body: JSON.stringify(response.message ? response.message : 'Message send failed'),
        };
    }
};


const sendMessage = async (to, subject, body) => {
    const username = chattyCredentials.username;
    const password = chattyCredentials.password;

    const data = "username=" + encodeURIComponent(username) + '&password=' + encodeURIComponent(password) + '&to=' + encodeURIComponent(to) + '&subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    const uri = 'https://winchatty.com/v2/sendMessage';

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
