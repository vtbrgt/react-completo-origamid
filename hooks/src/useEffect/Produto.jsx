import React from 'react';

const Produto = ({ produto }) => {
  const [info, setInfo] = React.useState(null);

  React.useEffect(() => {
    if (produto != null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setInfo(json));
    }
  }, [produto]);

  if (info) {
    return (
      <div>
        <h1>{info.nome}</h1>
        <p>{info.descricao}</p>
        <p>R$ {info.preco}</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Produto;
