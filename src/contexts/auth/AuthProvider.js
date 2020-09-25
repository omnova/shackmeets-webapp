import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { API, Auth } from 'aws-amplify';
import AuthContext from './AuthContext';


function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadLoggedInUser() {
      try {
        const currentUser = await Auth.currentUserInfo();
        
        setUser(currentUser);
      } catch (err) {
        console.log(err);
      }
      finally {
        setLoading(false);
      }
    };

    loadLoggedInUser();
  }, []);


  const login = useCallback(async (username, password) => {
    // await Auth.signIn({
    //   username, // Required, the username
    //   password // Optional, the password
    // }).then(user => console.log(user))
    //   .catch(err => console.log(err));

    try {
      Auth.configure({ authenticationFlowType: "USER_PASSWORD_AUTH"});
      // Auth.configure({ authenticationFlowType: "CUSTOM_AUTH"});

      const user = await Auth.signIn(username, password);

      setUser(user);
      return user;
    } catch (error) {
        console.log('error signing in', error);
    }

    // await Auth.signIn(username, password)
    //   .then(user => {
    //     console.log(user);
    //     if (user.challengeName === 'CUSTOM_CHALLENGE') {
    //         console.log ("CUSTOM_CHALLENGE");
    //         // to send the answer of the custom challenge
    //         Auth.sendCustomChallengeAnswer(user, password)
    //             .then(user => console.log(user))
    //             .catch(err => console.log(err));
    //     } else if (user.challengeName === 'SHACKNEWS_PASSWORD') {
    //       console.log ("SHACKNEWS_PASSWORD");
    //       // to send the answer of the custom challenge
    //       Auth.sendCustomChallengeAnswer(user, password)
    //           .then(user => console.log(user))
    //           .catch(err => console.log(err));
    //   } else {
    //         console.log(user);
    //     }
    //   })
    //   .catch(err => console.log(err));


    // let apiName = 'ShackmeetsApi';
    // let path = '/users/login'; 
    // let request = {
    //   body: {
    //     username: username,
    //     password: password
    //   }
    // };

    // const response = await API.post(apiName, path, request).then(response => {
    //   console.log(response);

    //   if (response.isValid) {
    //     setUser({id: 1, username: 'omnova'})

    //     return true;
    //   }
    //   else {
    //     console.log('Invalid login');
    //     return false
    //   }
    // }).catch(error => {
    //   console.log(error.response)
    //   return false;
    // });
    
  }, []);

  const logout = useCallback(async () => {
    
    try {
      await Auth.signOut();

      setUser(null);
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }, []);


  const contextValue = useMemo(() => ({
    loading,
    user,
    login,
    logout
  }), [loading, user, login, logout]);

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider