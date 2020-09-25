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
  
    try {
      const user = await Auth.signIn(username, password);

      setUser(user);
      return user;
    } catch (error) {
        console.log('error signing in', error);    }
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