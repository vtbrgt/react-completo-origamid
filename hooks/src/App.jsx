import React from 'react';
import ButtonModal from './ButtonModal';
import Modal from './Modal';

function App() {
  const [modal, setModal] = React.useState(false);

  return (
    <>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </>
  );
}

export default App;
