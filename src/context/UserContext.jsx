import React, { createContext } from "react";
import { assets, pic } from "../assets/product";

export const UserContext = createContext();
function UserProvider({ children }) {
  const obj = { assets, pic };
  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserProvider;
