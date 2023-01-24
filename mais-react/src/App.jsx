import './App.css';
import React from 'react';
import Header from './Header';
import Exemplo from './Exemplo';
import Produtos from './Produto';
// import Contato from './Contato';
//const Contato = React.lazy(() => import('./Contato'));

function reducer(state, action) {
  switch (action) {
    case 'aumentar':
      return state + 1;
    case 'diminuir':
      return state - 1;
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = React.useReducer(reducer, 0);
  const [ativar, setAtivar] = React.useState(true);

  return (
    <div className="App">
      <Header />
      <p>{state}</p>
      <button onClick={() => dispatch('aumentar')}>+</button>
      <button onClick={() => dispatch('diminuir')}>-</button>
      <Exemplo />
      {ativar && <Produtos titulo="Esses são os produtos" />}
      <button onClick={() => setAtivar(!ativar)}>Toggle</button>
    </div>
  );
}

export default App;
