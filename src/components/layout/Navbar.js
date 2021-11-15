import { Link, useNavigate } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo_mind.png'

function Navbar({ isAuth, logoffDone, clearUserId, clearToken }) {
  const navigate = useNavigate()

  function logoffUser() {
    logoffDone(false) //determina que não está mais logado
    localStorage.removeItem('token')
    localStorage.removeItem('id')
    clearUserId(undefined)
    clearToken(undefined)
    navigate('/')
  }

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo da Mind Consulting" />
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link to="/">Home</Link>
          </li>
          {isAuth ? (
            <>
              <li className={styles.item}>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button className={styles.btn} onClick={logoffUser}>
                  Sair
                </button>
              </li>
            </>
          ) : (
            <li className={styles.item}>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </Container>
    </nav>
  )
}

export default Navbar
