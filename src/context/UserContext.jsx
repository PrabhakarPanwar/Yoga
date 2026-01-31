import React, { createContext } from "react";
import { assets, sevenChakra, courses, pic, yogaPose } from "../assets/product";

export const UserContext = createContext();
function UserProvider({ children }) {
  const obj = { assets, pic, yogaPose, courses, sevenChakra };
  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserProvider;
