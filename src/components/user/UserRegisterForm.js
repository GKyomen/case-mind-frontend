import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import styles from './Form.module.css'

function UserRegisterForm() {
  const common = {
    name: 'Usuário comum',
    id: 1,
  }
  const admin = {
    name: 'Administrador',
    id: 999,
  }
  const userTypes = [common, admin]

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome completo"
        name="name"
        placeholder="Insira seu nome completo"
      />
      <Input
        type="text"
        text="CPF"
        name="cpf"
        placeholder="Seu CPF no formato XXX.XXX.XXX-XX"
      />
      <Input
        type="email"
        text="E-mail"
        name="email"
        placeholder="Insira seu melhor e-mail"
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Crie uma senha segura"
      />
      <Select name="level" text="Tipo de usuário" options={userTypes} />
      <SubmitButton text="Registrar-se" />
    </form>
  )
}

export default UserRegisterForm
