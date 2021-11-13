import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'
import styles from './Form.module.css'

function UserLoginForm() {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Usuário"
        name="user"
        placeholder="Digite seu e-mail ou CPF"
      />
      <Input
        type="password"
        text="Senha"
        name="password"
        placeholder="Digite sua senha"
      />
      <SubmitButton text="Fazer Login" />
    </form>
  )
}

export default UserLoginForm
