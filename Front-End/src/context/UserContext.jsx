import React, { createContext } from "react";
import { assets, pic } from "../assets/product";
import { courses, pose, sevenChakra } from "../assets/text";

export const UserContext = createContext();
function UserProvider({ children }) {
  const obj = { assets, pic, pose, courses, sevenChakra, pic };
  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserProvider;
