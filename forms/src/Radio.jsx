import React from 'react';

const Radio = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form>
      <h2>Cores</h2>
      {cor}

      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="azul"
          checked={cor === 'azul'}
        />
        Azul
      </label>

      <label>
        <input
          type="radio"
          onChange={({ target }) => setCor(target.value)}
          value="vermelho"
          checked={cor === 'vermelho'}
        />
        Vermelho
      </label>
      <h2>Produtos</h2>
      {produto}

      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="smartphone"
          checked={produto === 'smartphone'}
        />
        Smartphone
      </label>
      <label>
        <input
          type="radio"
          onChange={handleChange}
          value="notebook"
          checked={produto === 'notebook'}
        />
        Notebook
      </label>
    </form>
  );
};

export default Radio;
