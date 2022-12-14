import React from 'react';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <Card bg="dark" text="white" className="m-5" style={{ maxWidth: '18rem' }}>
      <Card.Header>Notebook</Card.Header>
      <Card.Body>
        <Card.Title>R$ 2500</Card.Title>
        <Card.Text>
          Esse é um notebook com 1tb de memória, 16gb de ram e placa de vídeo de
          16gb.
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReactBootstrap;
