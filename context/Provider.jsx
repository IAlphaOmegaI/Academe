import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserContext = ({ children }) => {
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  return (
    <UserContext.Provider value={{ loggedInUserData, setLoggedInUserData }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContext;
