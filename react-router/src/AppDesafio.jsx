import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/HeaderDesafio';
import Produtos from './Components/ProdutosDesafio';
import Produto from './Components/ProdutoDesafio';
import Contato from './Components/ContatoDesafio';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="produtos" element={<Produtos />} />
        <Route path="produto/:id/" element={<Produto />} />
        <Route path="contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
