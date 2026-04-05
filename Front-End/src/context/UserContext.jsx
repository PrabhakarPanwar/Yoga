import React, { createContext } from "react";
import { assets, pic, pose, sevenChakra, courses, shubhPic } from "../assets/product";

export const UserContext = createContext();
function UserProvider({ children }) {
  const obj = { assets, pic, pose, courses, sevenChakra, pic,shubhPic };
  return <UserContext.Provider value={obj}>{children}</UserContext.Provider>;
}

export default UserProvider;
