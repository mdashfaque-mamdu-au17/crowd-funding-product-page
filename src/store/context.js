import React, { useState, useContext } from 'react';
import { enableScroll, disableScroll } from '../utils/utils';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [backedTotal, setBackedTotal] = useState(89194);
  const [numberOfBackers, setNumberOfBackers] = useState(5007);
  const closeSelectBoxModal = () => {
    setOpenSelectBox(false);
    enableScroll();
  };

  const openSelectBoxModal = () => {
    setOpenSelectBox(true);
    disableScroll();
  };

  const updateBackedTotal = (amount) => {
    if (backedTotal > 100000) {
      return;
    }
    setBackedTotal((prev) => prev + Number(amount));
  };

  const updateNumberOfBackers = () => {
    setNumberOfBackers((prev) => prev + 1);
  };

  return (
    <AppContext.Provider
      value={{
        openSelectBox,
        backedTotal,
        closeSelectBoxModal,
        openSelectBoxModal,
        updateBackedTotal,
        numberOfBackers,
        updateNumberOfBackers,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
