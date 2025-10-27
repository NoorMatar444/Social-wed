import { createContext, useState } from "react";

export let LoginContext=createContext();

export default function LoginContextProvider(props){
    const [Token,setToken]=useState(localStorage.getItem("userToken"));
    return(
        <LoginContext.Provider value={{Token,setToken}}>
            {props.children}
        </LoginContext.Provider>
    )
}