import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Header from './Components/Header';
import NaoEncontrado from './Components/NaoEncontrado';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
