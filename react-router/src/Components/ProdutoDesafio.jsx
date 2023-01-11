import React from 'react';
import { useParams } from 'react-router-dom';
import loading from '../assets/loading.png';
import Head from './HeadDesafio';
import './ProdutoDesafio.css';

const Produto = () => {
  const params = useParams();
  const [produto, setProduto] = React.useState([]);

  const getProduto = () => {
    try {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${params.id}`)
        .then((response) => response.json())
        .then((result) => setProduto(result));
    } catch (error) {
      console.log(error.message);
    }
  };

  React.useEffect(() => {
    getProduto();
  }, [params.id]);

  return (
    <>
      <Head title={'Ranek | ' + produto.nome} />
      {produto.length === 0 ? (
        <img className="rotate" src={loading} alt="" />
      ) : (
        <div className="container anima">
          <img src={produto.fotos[0].src} alt="Imagem do produto" />
          <div className="info">
            <h3>{produto.nome}</h3>
            <p className="preco">R$ {produto.preco}</p>
            <p className="descricao">{produto.descricao}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Produto;
