import React, { createContext, useState } from "react";

// Create UserContext
export const UserContext = createContext();

// Create UserProvider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
