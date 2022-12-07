import React, { useState, useContext, useEffect } from 'react';
import { enableScroll, disableScroll } from '../utils/utils';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [openSelectBox, setOpenSelectBox] = useState(false);
  const [thankYou, setThankYou] = useState(false);
  const [backedTotal, setBackedTotal] = useState(89194);
  const [numberOfBackers, setNumberOfBackers] = useState(5007);
  const numberOfBackersInitial = 5007;
  const closeSelectBoxModal = () => {
    setOpenSelectBox(false);
    enableScroll();
  };

  const openSelectBoxModal = () => {
    setOpenSelectBox(true);
    disableScroll();
  };

  const updateBackedTotal = (amount) => {
    setBackedTotal((prev) => prev + Number(amount));
  };

  const updateNumberOfBackers = () => {
    setNumberOfBackers((prev) => prev + 1);
  };

  const openThankYouModal = () => {
    setThankYou(true);
    disableScroll();
  };

  const closeThankYouModal = () => {
    setThankYou(false);
    enableScroll();
  };

  useEffect(() => {
    if (numberOfBackers > numberOfBackersInitial) {
      const id = setTimeout(() => {
        openThankYouModal();
      }, 1000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [numberOfBackersInitial, numberOfBackers]);

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
        thankYou,
        openThankYouModal,
        closeThankYouModal,
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
