import React from 'react';
import Input from './Components/Input';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} required />
      <Input
        type="password"
        id="email"
        label="Email"
        value={email}
        setValue={setEmail}
      />
      <button>Enviar</button>
    </form>
  );
};

export default App;
