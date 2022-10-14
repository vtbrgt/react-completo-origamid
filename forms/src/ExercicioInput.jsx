import React from 'react';

// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

// Mostre uma mensagem na tela, caso a resposta da API seja positiva

const ExercicioInput = () => {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });
  const [post, setPost] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);

    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // form é o objeto com os dados do formulário
      body: JSON.stringify(form),
    }).then((response) => (response.ok ? setPost(true) : setPost(false)));
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={form.nome}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        <label htmlFor="senha">Senha</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={form.senha}
          onChange={handleChange}
        />

        <label htmlFor="cep">CEP</label>
        <input
          type="number"
          id="cep"
          name="cep"
          value={form.cep}
          onChange={handleChange}
        />

        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={form.rua}
          onChange={handleChange}
        />

        <label htmlFor="numero">Numero</label>
        <input
          type="number"
          id="numero"
          name="numero"
          value={form.numero}
          onChange={handleChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={form.bairro}
          onChange={handleChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={form.cidade}
          onChange={handleChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={form.estado}
          onChange={handleChange}
        />

        <button>Enviar</button>
      </form>
      {post ? (
        <p>Seu cadastro foi concluído</p>
      ) : (
        <p>
          Seu cadastro <strong>não</strong> foi concluído
        </p>
      )}
    </>
  );
};

export default ExercicioInput;
