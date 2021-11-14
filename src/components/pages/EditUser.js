import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Container from '../layout/Container'
import UserRegisterForm from '../user/UserRegisterForm'
import styles from './Dashboard.module.css'

function EditUser() {
  const { state } = useLocation()
  const { adminId, token, userToEdit } = state
  const [user, setUser] = useState(userToEdit)
  const navigate = useNavigate()

  async function editUser(user) {
    let success = false
    await fetch(`http://localhost:5000/application/${adminId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.userUpdated)
        success = true
      })
      .catch((err) => console.log(err))

    if (success) {
      navigate('/dashboard')
    }
  }

  return (
    <div className={styles.user_details}>
      <Container customClass="column">
        <div className={styles.details_container}>
          <UserRegisterForm
            btnText="Concluir edição"
            handleSubmit={editUser}
            userData={user}
            edit={true}
          />
        </div>
      </Container>
    </div>
  )
}

export default EditUser
