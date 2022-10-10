import React from 'react';

// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setdados] = React.useState(null);

  async function getDados() {
    const dados = await fetch(
      'https://ranekapi.origamid.dev/json/api/produto/'
    );
    const json = await dados.json();
    setdados(json);
  }

  React.useEffect(() => {
    getDados();
  }, []);

  function limparDados() {
    setdados(null);
  }

  return (
    <GlobalContext.Provider value={{ dados, limparDados }}>
      {children}
    </GlobalContext.Provider>
  );
};
