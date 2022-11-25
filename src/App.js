import React, { useState } from 'react';
import './App.css';
import MainCard from './components/Card/MainCard';
import SelectOptionModal from './components/Modal/SelectOptionModal';
import Navbar from './components/Navbar/Navbar';
import { enableScroll, disableScroll } from './utils/utils';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => {
    setIsModalOpen(false);
    enableScroll();
  };

  const openModal = () => {
    setIsModalOpen(true);
    disableScroll();
  };

  return (
    <div>
      <Navbar />
      <MainCard onOpen={openModal} />
      {isModalOpen && <SelectOptionModal onClose={closeModal} />}
    </div>
  );
}

export default App;
