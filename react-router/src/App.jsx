import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Header from './Components/Header';
import Login from './Components/Login';
import NaoEncontrado from './Components/NaoEncontrado';
import Produto from './Components/Produto';
import ProdutoDescricao from './Components/ProdutoDescricao';
import ProdutoAvaliacao from './Components/ProdutoAvaliacao';
import ProdutoCustomizado from './Components/ProdutoCustomizado';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/*" element={<Produto />}>
          <Route path="/" element={<ProdutoDescricao />} />
          <Route path="avaliacao" element={<ProdutoAvaliacao />} />
          <Route path="customizado" element={<ProdutoCustomizado />} />
        </Route>
        <Route path="*" element={<NaoEncontrado />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
