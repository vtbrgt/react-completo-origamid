import React from 'react';
import Header from './Exercicio/Header';
import Home from './Exercicio/Home';
import Produtos from './Exercicio/Produtos';

const App = () => {
  const { pathname } = window.location;

  let Component;
  if (pathname === '/produtos') {
    Component = Produtos;
  } else {
    Component = Home;
  }

  return (
    <>
      <Header />
      <Component />
    </>
  );
};

export default App;
