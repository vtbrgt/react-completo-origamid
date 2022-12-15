import React from 'react';
import './Imagens.css';
import foto from '../assets/foto.jpg';
// import { ReactComponent as Dog } from '../assets/dog.svg';
import DogSvg from './DogSvg';

const Imagens = () => {
  const [olho, setOlho] = React.useState(1);

  function handleClick() {
    for (let i = 0; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 50 * i);
    }
  }

  return (
    <div>
      <p className="fundo" onClick={handleClick}></p>
      <DogSvg color="#84e" olho={olho} />
      <img src={foto} alt="Cachorro" />
    </div>
  );
};

export default Imagens;
