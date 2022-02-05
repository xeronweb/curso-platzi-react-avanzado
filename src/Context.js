import React, { createContext, useState } from "react";

export const context = createContext();

export const Context = ({children}) => {
    return (
        <context.Provider value={{isAuth:true}}>
            {children}
        </context.Provider>
    );
}