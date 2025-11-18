import { useState } from "react";
import { createContext } from "react";
import { fethcMe } from "../lib/api";
import { useContext } from "react";
import { useEffect } from "react";

const AuthContext = createContext(null)

export function AuthProvider({children}) {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function initAuth() {
      try {
        const me = await fethcMe()
        if(isMounted){
          setUser(me)
        }
      } catch (error) {
        if (isMounted) {
          setUser(null)
        }
      } finally{
        if(isMounted){
          setLoading(false)
        }
      }
    }

    initAuth()

    return () => {
      isMounted = false  
    };
  }, [])

  const value = {
    user,
    setUser,
    loading
  }
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if(!ctx){
    throw new Error("useAuth must be used within <AuthProvider/>");
  }
  return ctx
}