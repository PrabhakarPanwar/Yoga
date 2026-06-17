import React, { createContext } from "react";
import { assets, courses, shubhPic } from "../assets/product";

export const UserContext = createContext();

function UserProvider({ children }) {
  const obj = { assets, courses, shubhPic };
  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserProvider;