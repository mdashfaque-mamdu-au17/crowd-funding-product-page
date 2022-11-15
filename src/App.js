import './App.css';
import Navbar from './components/Navbar/Navbar';
import Title from './components/Texts/Title';
function App() {
  return (
    <div>
      <Navbar />
      <Title primary={true} content="Mastercraft Bamboo Monitor Riser" />
    </div>
  );
}

export default App;
