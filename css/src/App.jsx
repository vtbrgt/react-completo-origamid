import React from 'react';
import './App.css';
import Slide from './Animações/Slide';

const App = () => {
  const slides = [
    {
      id: 'slide1',
      text: 'Slide 1',
    },
    {
      id: 'slide2',
      text: 'Slide 2',
    },
    {
      id: 'slide3',
      text: 'Slide 3',
    },
  ];

  return (
    <>
      <Slide slides={slides} />
    </>
  );
};

export default App;
