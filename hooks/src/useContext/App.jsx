import React from 'react';
import Produto from './Produto';
import { GlobalStorage } from './GlobalContext';

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <p>Teste</p>
    </GlobalStorage>
  );
};

export default App;
