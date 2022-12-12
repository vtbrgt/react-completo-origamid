import React from 'react';
import Radio from './Components/Radio';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
  {
    pergunta: 'Quando fazemos um ano de namoro?',
    options: ['09/07/2023', '11/07/2023', '08/07/2023'],
    resposta: '08/07/2023',
  },
];

const DesafioForm = () => {
  const [resposta, setResposta] = React.useState('');
  const [questao, setQuestao] = React.useState(0);
  const [acertos, setAcertos] = React.useState(0);

  function checkAnswer(resposta) {
    if (resposta === perguntas[questao].resposta) {
      setAcertos(acertos + 1);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    checkAnswer(resposta);
    setQuestao(questao + 1);
  }

  return (
    <>
      {questao < perguntas.length && (
        <fieldset style={{ padding: '1.875rem', borderColor: '#adf' }}>
          <legend>{perguntas[questao].pergunta}</legend>
          <form>
            <Radio
              options={perguntas[questao].options}
              value={resposta}
              setValue={setResposta}
            />
            <button style={{ marginTop: '1rem' }} onClick={handleClick}>
              Próxima
            </button>
          </form>
        </fieldset>
      )}
      {questao >= perguntas.length && (
        <h2>
          Você acertou: {acertos} de {perguntas.length}
        </h2>
      )}
    </>
  );
};

export default DesafioForm;
