import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

const AuthContext = createContext()
function AuthProvider({children}) {

  const [userData, setUserData] = useState(null);
  const [user, setUser] = useState(null);
  useEffect(() => {
    setLocalStorage()
    const {employee,admin} = getLocalStorage()
    setUserData({employee,admin})
  }, []);

  return (
    <AuthContext.Provider value={{userData,setUser,user}}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth = () => {
  return useContext(AuthContext)
}