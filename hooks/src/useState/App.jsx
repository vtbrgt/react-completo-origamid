import React from 'react';
import Produto from './Produto';

// Os links abaixo puxam dados de um produto em formato JSON
// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook
// Crie uma interface com 3 botões, um para cada produto.
// Ao clicar no botão faça um fetch a api e mostre os dados do produto na tela.
// Mostre apenas um produto por vez
// Mostre a mensagem carregando... enquanto o fetch é realizado

function App() {
  const [dados, setDados] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function puxaProduto(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      <button onClick={puxaProduto}>tablet</button>
      <button onClick={puxaProduto}>smartphone</button>
      <button onClick={puxaProduto}>notebook</button>

      {loading && <p>Carregando...</p>}
      {!loading && dados && <Produto json={dados} />}
    </div>
  );
}

export default App;
