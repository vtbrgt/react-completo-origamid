import React from 'react';
import Produto from './Produto';

// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo

const App = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (localStorage.getItem('produto'))
      setDados(localStorage.getItem('produto'));
  }, []);

  function handleClick({ target }) {
    setDados(target.innerText);
  }

  React.useEffect(() => {
    localStorage.setItem('produto', [dados]);
  }, [dados]);

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <Produto produto={dados} />
    </>
  );
};

export default App;
