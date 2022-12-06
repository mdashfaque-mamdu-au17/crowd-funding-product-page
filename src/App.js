import React from 'react';
import './App.css';
import MainCard from './components/Card/MainCard';
import SelectOptionModal from './components/Modal/SelectOptionModal';
import Navbar from './components/Navbar/Navbar';
import { useGlobalContext } from './store/context';
import {} from './utils/utils';

function App() {
  const { openSelectBox } = useGlobalContext();

  return (
    <div>
      <Navbar />
      <MainCard />
      {openSelectBox && <SelectOptionModal />}
    </div>
  );
}

export default App;
