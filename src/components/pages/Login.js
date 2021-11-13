import { useState } from 'react'
import UserLoginForm from '../user/UserLoginForm'
import UserRegisterForm from '../user/UserRegisterForm'
import styles from './Login.module.css'

function Login() {
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  function toggleRegisterForm() {
    setShowRegisterForm(!showRegisterForm)
  }

  return (
    <section className={styles.login_container}>
      <h1>Acesse seus dados</h1>
      <p>Faça login para visualizar</p>
      <UserLoginForm />
      <div className={styles.register_container}>
        <h2>Não tem uma conta?</h2>
        <button onClick={toggleRegisterForm}>
          {!showRegisterForm ? 'Registre-se' : 'Fechar formulário'}
        </button>
        {showRegisterForm && <UserRegisterForm />}
      </div>
    </section>
  )
}

export default Login
