import React from 'react';
import typewriter from '../assets/contato.jpg';
import './ContatoDesafio.css';
import Head from './HeadDesafio';

const Contato = () => {
  return (
    <div className="container anima">
      <Head title="Ranek | Contato" />
      <img src={typewriter} alt="Entre em contato" />
      <div className="textos">
        <h2>Entre em contato</h2>
        <p>andre@origamid.com</p>
        <p>99999-9999</p>
        <p>Rua Ali Perto, 999</p>
      </div>
    </div>
  );
};

export default Contato;
