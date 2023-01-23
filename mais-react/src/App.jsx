import './App.css';
import React from 'react';
import Header from './Header';
// import Contato from './Contato';
//const Contato = React.lazy(() => import('./Contato'));

function App() {
  const [contar, setContar] = React.useState(0);

  return (
    <div className="App">
      <Header />
      <button onClick={() => setContar(contar + 1)}>{contar}</button>
    </div>
  );
}

export default App;
