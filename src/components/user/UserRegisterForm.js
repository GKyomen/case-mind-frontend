import { useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Form.module.css'
import userTypes from './userTypes'

function UserRegisterForm({ btnText, handleSubmit, userData, edit = false }) {
  const [userToEdit, setUserToEdit] = useState(userData)
  const [newUser, setNewUser] = useState({})

  function handleChange(e) {
    if (edit) {
      setUserToEdit({ ...userToEdit, [e.target.name]: e.target.value })
    } else {
      setNewUser({ ...newUser, [e.target.name]: e.target.value })
    }
  }

  function formatCPF(e) {
    let text = e.target.value
    text = text.replace(/\D/g, '')
    text = text.substring(0, 11)
    text = text.replace(
      /(\d{1,3})(\d{1,3})?(\d{1,3})?(\d{0,2})?/,
      (match, p1, p2, p3, p4) => {
        return (
          p1 +
          (p2 ? '.' + p2 : '') +
          (p3 ? '.' + p3 : '') +
          (p4 ? '-' + p4 : '')
        )
      }
    )

    e.target.value = text

    handleChange(e)
  }

  const submit = (e) => {
    e.preventDefault()
    if (edit) {
      handleSubmit(userToEdit)
    } else {
      handleSubmit(newUser)
    }
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome completo"
        name="name"
        placeholder="Insira seu nome completo"
        handleOnChange={handleChange}
        value={userToEdit.name ? userToEdit.name : ''}
      />
      <Input
        type="text"
        text="CPF"
        name="cpf"
        placeholder="Seu CPF no formato XXX.XXX.XXX-XX"
        handleOnChange={formatCPF}
        value={userToEdit.cpf ? userToEdit.cpf : ''}
      />
      <Input
        type="email"
        text="E-mail"
        name="email"
        placeholder="Insira seu melhor e-mail"
        handleOnChange={handleChange}
        value={userToEdit.email ? userToEdit.email : ''}
      />
      {!edit && (
        <>
          <Input
            type="password"
            text="Senha"
            name="password"
            placeholder="Crie uma senha segura"
            handleOnChange={handleChange}
          />
          <Select
            name="level"
            text="Tipo de usu??rio"
            options={userTypes}
            handleOnChange={handleChange}
          />
        </>
      )}
      <SubmitButton text={btnText} />
    </form>
  )
}

export default UserRegisterForm
