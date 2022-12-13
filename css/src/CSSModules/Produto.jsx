import React from 'react';
import styles from './Produto.module.css';

const Produto = () => {
  console.log(styles);
  return (
    <>
      <h1 className={styles.titulo}>Notebook</h1>
      <p className={styles.preco}>R$ 20000</p>
      <button className={styles.comprar}>Comprar</button>
    </>
  );
};

export default Produto;
