import { useState } from 'react'
import UserLoginForm from '../user/UserLoginForm'
import UserRegisterForm from '../user/UserRegisterForm'
import styles from './Login.module.css'

function Login({ loginDone, loggedUserId, storeToken }) {
  const [showRegisterForm, setShowRegisterForm] = useState(false)

  function toggleRegisterForm() {
    setShowRegisterForm(!showRegisterForm)
  }

  function loginUser(user) {
    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', res.user._id)
        loginDone(true)
        loggedUserId(res.user._id)
        storeToken(res.token)
      })
      .catch((err) => console.log(err))
  }

  function registerUser(newUser) {
    fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem('token', res.token)
        localStorage.setItem('id', res.newUser._id)
        loginDone(true)
        loggedUserId(res.newUser._id)
        storeToken(res.token)
      })
      .catch((err) => console.log(err))
  }

  return (
    <section className={styles.login_container}>
      <h1>Acesse seus dados</h1>
      <p>Faça login para visualizar</p>
      <UserLoginForm handleSubmit={loginUser} />
      <div className={styles.register_container}>
        <h2>Não tem uma conta?</h2>
        <button onClick={toggleRegisterForm}>
          {!showRegisterForm ? 'Registre-se' : 'Fechar formulário'}
        </button>
        {showRegisterForm && (
          <UserRegisterForm
            btnText="Registrar-se"
            handleSubmit={registerUser}
          />
        )}
      </div>
    </section>
  )
}

export default Login
