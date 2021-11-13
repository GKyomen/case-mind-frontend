import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Form.module.css'

function UserLoginForm({ handleSubmit }) {
  const [user, setUser] = useState({})

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(user)
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Usuário"
        name="user"
        placeholder="Digite seu e-mail ou CPF"
        handleOnChange={handleChange}
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Digite sua senha"
        handleOnChange={handleChange}
      />
      <SubmitButton text="Fazer Login" />
    </form>
  )
}

export default UserLoginForm
