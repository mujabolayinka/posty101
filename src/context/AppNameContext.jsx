import { createContext } from "react";

//stage one: create a context

export const AppNameContext = createContext();

//stage two: create a provider: a provider is a super component that can provide any component that are its children whatever he has

export const AppNameProvider = ({children}) => {

    const appName = "Invento Application";
    //state
    //method to update a state
    //crud methods


    return (<AppNameContext.Provider value={{appName:appName}}>
            {children}
    </AppNameContext.Provider>)
}