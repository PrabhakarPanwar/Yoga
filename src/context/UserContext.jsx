import React, { createContext } from "react";
import { assets } from "../assets/product";

export const UserContext = createContext();
function UserProvider({ children }) {
   const obj = { assets };
    return (
        <UserContext.Provider value={obj}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
