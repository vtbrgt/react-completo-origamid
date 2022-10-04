import React from 'react';

const Produto = ({ json }) => {
  return (
    <div>
      <h1>{json.nome}</h1>
      <p>Preço: R${json.preco}</p>
      <img src={json.fotos[0].src} alt={json.fotos[0].titulo} />
      <p>Descrição: {json.descricao}</p>
    </div>
  );
};

export default Produto;
