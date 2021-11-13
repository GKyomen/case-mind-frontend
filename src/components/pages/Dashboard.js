import { useEffect, useState } from 'react'
import Container from '../layout/Container'
import UserRegisterForm from '../user/UserRegisterForm'
import styles from './Dashboard.module.css'

function Dashboard({ userId, token }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [user, setUser] = useState([])

  function toggleEditForm() {
    setShowEditForm(!showEditForm)
  }

  useEffect(() => {
    fetch(`http://localhost:5000/application/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user)
      })
      .catch((err) => console.log(err))
  }, [userId, token])

  function editUser(user) {
    fetch(`http://localhost:5000/application/${userId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.user)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className={styles.user_details}>
      <Container customClass="column">
        <div className={styles.details_container}>
          <h1>
            Boas-vindas, <span>{user.name}</span>
          </h1>
          <button className={styles.btn} onClick={toggleEditForm}>
            {!showEditForm ? 'Editar dados' : 'Fechar'}
          </button>
          <div className={styles.user_info}>
            {!showEditForm ? (
              <>
                <p>
                  <span>Nome:</span> {user.name}
                </p>
                <p>
                  <span>CPF:</span> {user.cpf}
                </p>
                <p>
                  <span>E-mail:</span> {user.email}
                </p>
              </>
            ) : (
              <UserRegisterForm
                btnText="Concluir edição"
                handleSubmit={editUser}
                userData={user}
              />
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Dashboard
