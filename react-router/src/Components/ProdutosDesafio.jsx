import React from 'react';
import { Link } from 'react-router-dom';
import Head from './HeadDesafio';
import './ProdutosDesafio.css';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState([]);

  const getProdutos = () => {
    try {
      fetch('https://ranekapi.origamid.dev/json/api/produto')
        .then((response) => response.json())
        .then((result) => setProdutos(result));
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getProdutos();
  }, []);

  return (
    <div className="container-produtos anima">
      <Head title={'Ranek | Produtos'} />
      {produtos &&
        produtos.map((produto) => (
          <div className="card-produto" key={produto.id}>
            <Link to={`/produto/${produto.id}`}>
              <img src={produto.fotos[0].src} alt="Foto do Produto" />
            </Link>
            <h2>{produto.nome}</h2>
          </div>
        ))}
    </div>
  );
};

export default Produtos;
