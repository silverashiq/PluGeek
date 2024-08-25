import React, { createContext, useState } from "react";

// Create the context
const MyContext = createContext();

// Create the provider component
export function MyProvider({ children }) {
  const [user, setUser] = useState(true);


  return (
    <MyContext.Provider value={{ user, setUser }}>
      {children}
    </MyContext.Provider>
  );
}

// Export both context and provider
export default MyContext;
