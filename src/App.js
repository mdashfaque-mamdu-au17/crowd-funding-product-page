import React from 'react';
import './App.css';
import MainCard from './components/Card/MainCard';
import SelectOptionModal from './components/Modal/SelectOptionModal';
import ThankYou from './components/Modal/ThankYou';
import Navbar from './components/Navbar/Navbar';
import { useGlobalContext } from './store/context';
import {} from './utils/utils';

function App() {
  const { openSelectBox, thankYou } = useGlobalContext();
  return (
    <div>
      <Navbar />
      <MainCard />
      {openSelectBox && <SelectOptionModal />}
      {thankYou && <ThankYou />}
    </div>
  );
}

export default App;
