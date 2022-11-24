import './App.css';
import MainCard from './components/Card/MainCard';
import SelectOptionModal from './components/Modal/SelectOptionModal';
import Navbar from './components/Navbar/Navbar';
function App() {
  return (
    <div>
      <Navbar />
      <MainCard />
      <SelectOptionModal />
    </div>
  );
}

export default App;
