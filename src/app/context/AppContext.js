import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { recipes, setRecipes } = useState([]);

  return (
    <AppContext.Provider value={{ user, setUser, recipes, setRecipes }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
