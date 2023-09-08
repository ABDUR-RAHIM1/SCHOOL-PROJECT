import { useState } from "react";
import { createContext } from "react"
import Profile from "../Components/DasboardComponents/Profile/Profile";

export const globalState = createContext();

export const State = ({ children }) => {
  const [loginInfo , setLoginInfo] = useState({
     userName : "",
     email :"",
     passwword :"", 
  })
  const [show , setShow] = useState(false)
const [itemText , setItemText] = useState("")
const [component , setComponent] = useState(<Profile/>)
    const value = {
       loginInfo , setLoginInfo,
       show , setShow,
       itemText , setItemText , 
       component , setComponent
    }

    return (
        <globalState.Provider value={value} >
            {children}
        </globalState.Provider >
    )

}
 