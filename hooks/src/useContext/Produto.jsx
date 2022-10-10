import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  return (
    <div>
      <button onClick={() => console.log(global.dados)}>Mostrar dados</button>
      <button onClick={global.limparDados}>Limpar dados</button>
    </div>
  );
};

export default Produto;
