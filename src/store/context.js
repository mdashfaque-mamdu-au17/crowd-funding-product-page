import React, { useContext } from 'react';

const initialState = {
  isModalOpen: true,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ ...initialState }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
