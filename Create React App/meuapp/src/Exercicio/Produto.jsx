import React from 'react';

const Produto = ({ nome, propriedades }) => {
  return (
    <>
      <div
        style={{
          padding: '1rem',
          border: '1px solid',
          marginBottom: '1rem 0',
        }}
      >
        <p>{nome}</p>
        <ul>
          {propriedades.map((propriedade) => (
            <li key={propriedade}>{propriedade}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Produto;
