import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Auth } from 'aws-amplify';
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


  const login = useCallback(() => {
    setUser({id: 1, username: 'omnova'})
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