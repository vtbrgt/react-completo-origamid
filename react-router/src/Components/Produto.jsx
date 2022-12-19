import React from 'react';
import { NavLink, Route, Routes, useParams, Outlet } from 'react-router-dom';
/* import ProdutoDescricao from './ProdutoDescricao';
import ProdutoAvaliacao from './ProdutoAvaliacao';
import ProdutoCustomizado from './ProdutoCustomizado'; */

const Produto = () => {
  const params = useParams();
  /*   const location = useLocation();
  const search = new URLSearchParams(location.search); */

  return (
    <div>
      <h1>Produto: {params.id}</h1>
      <nav>
        <NavLink to="" end>
          Descrição
        </NavLink>
        <NavLink to="avaliacao">Avaliação</NavLink>
        <NavLink to="customizado">Customizado</NavLink>
      </nav>
      <Outlet />
      {/*       <Routes>
        <Route path="/" element={<ProdutoDescricao />} />
        <Route path="avaliacao" element={<ProdutoAvaliacao />} />
        <Route path="customizado" element={<ProdutoCustomizado />} />
      </Routes> */}
    </div>
  );
};

export default Produto;
