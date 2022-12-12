import React from 'react'
import Input from './Components/Input'

const Validacao = () => {
  const [cep, setCep] = React.useState('')
  const [error, setError] = React.useState(null)

  function validateCep(value) {
    if (value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if(!/^\d{5}-?\d{3}$/.test(value)) {
      setError('Preencha um CEP válido')
      return false
    } else {
      setError(null)
      return true
    }
  }

  function handleBlur({target}) {
    validateCep(target.value)
  }

  function handleChange({target}) {
    if(error) validateCep(target.value)
    setCep(target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(validateCep(cep)) {
      console.log('Enviou');
    } else {
      console.log('Não enviou');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input label='CEP' id='CEP' type='text' placeholder='00000-000' value={cep} onChange={handleChange} onBlur={handleBlur} />
      {error && <p>{error}</p>}
      <button>Enviar</button>
    </form>
  )
}

export default Validacao