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
    let apiName = 'ShackmeetsApi';
    let path = '/users/login'; 
    let request = {
      body: {
        username: username,
        password: password
      }
    };

    const response = await API.post(apiName, path, request).then(response => {
      console.log(response);

      if (response.isValid) {
        setUser({id: 1, username: 'omnova'})

        return true;
      }
      else {
        console.log('Invalid login');
        return false
      }
    }).catch(error => {
      console.log(error.response)
      return false;
    });
    
  }, []);

  const logout = useCallback(() => {
    setUser(null);

    // Auth.signOut()
    //   .then(window.location.href = signoutRedirectUrl)
    //   .catch((err) => console.log(err));
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