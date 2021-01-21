
import React, {  createContext, useState } from "react";

export const LogInContext = createContext();

  export const LogInContextProvider = props => {
    const [isLogedIn,setIsLogedIn] = useState(false)
  
    return (
      <LogInContext.Provider value={[isLogedIn,setIsLogedIn]}>
        {props.children}
      </LogInContext.Provider>
    );
  };