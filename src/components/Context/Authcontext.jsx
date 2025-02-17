import React, { createContext, useEffect, useState } from 'react'




export const Authcontext=createContext()

export default function AuthcontextProvider({children}) {

let[Token,setToken]=useState(null) 
useEffect(()=>{ 
setToken(localStorage.getItem("token"))
},[])
  return <>
  <Authcontext.Provider value={{Token,setToken}}> 

  {children}
  </Authcontext.Provider>
  
  
  
  </>
}
