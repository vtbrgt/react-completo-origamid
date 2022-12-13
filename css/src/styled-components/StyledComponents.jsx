import React from 'react';
import styled from 'styled-components';

const ProdutosContainer = styled.div`
  display: flex;
`;

const Produto = styled.div`
  flex: 1;
`;

const Titulo = styled.h1`
  font-size: 3rem;
  color: cornflowerblue;
`;

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: thistle;
`;

const Preco = styled.p`
  background: hsl(${Math.random() * 360}, 100%, 50%);
  color: darkkhaki;
`;

const Comprar = styled.button`
  background: ${({ ativo }) => (ativo ? '#000' : '#fff')};
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 5px;
  padding: 0.5rem;
  color: ${({ ativo }) => (ativo ? '#fff' : '#000')};
  cursor: pointer;
  &:hover {
    background: tomato;
  }
  &::before {
    display: block;
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    background: #53d956;
    top: -8px;
    right: -8px;
  }
`;

const StyledComponents = () => {
  const [ativo, setAtivo] = React.useState(false);

  function handleClick() {
    setAtivo(!ativo);
  }

  return (
    <>
      <ProdutosContainer>
        <Produto>
          <Titulo>Notebook</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco>R$ 2000</Preco>
          <Comprar ativo={ativo} onClick={handleClick}>
            Compre aqui
          </Comprar>
        </Produto>
        <Produto>
          <Titulo>Smartphone</Titulo>
          <Paragrafo>Meu texto é esse.</Paragrafo>
          <Preco>R$ 1000</Preco>
          <Comprar ativo={ativo} onClick={handleClick}>
            Compre aqui
          </Comprar>
        </Produto>
      </ProdutosContainer>
    </>
  );
};

export default StyledComponents;
