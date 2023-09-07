import { useState } from "react";
import { createContext } from "react"

export const globalState = createContext();

export const State = ({ children }) => {
  const [loginInfo , setLoginInfo] = useState({
     userName : "",
     email :"",
     passwword :"", 
  })

    const value = {
       loginInfo , setLoginInfo
    }

    return (
        <globalState.Provider value={value} >
            {children}
        </globalState.Provider >
    )

}
 