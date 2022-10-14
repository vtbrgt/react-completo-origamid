import React from 'react';

function Input() {
  /* PRIMEIRA FORMA DE LIDAR COM VÁRIOS CAMPOS:
  CRIAR UM STATE PRA CADA 
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState(''); */

  /* SEGUNDA FORMA DE LIDAR */
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <button>Enviar</button>
    </form>
  );
}

export default Input;
