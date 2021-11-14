import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../layout/Container'
import UserRegisterForm from '../user/UserRegisterForm'
import UsersTable from '../user/UsersTable'
import styles from './Dashboard.module.css'

function Dashboard({ userId, token }) {
  const [showEditForm, setShowEditForm] = useState(false)
  const [showUsersList, setShowUsersList] = useState(false)
  const [user, setUser] = useState([])
  const [listUsers, setListUsers] = useState([])
  const navigate = useNavigate()

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

  function toggleUsersList() {
    setShowUsersList(!showUsersList)

    if (user.level !== 999 || showUsersList) return

    fetch(`http://localhost:5000/application/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.erro) setListUsers(data.users)
        else setListUsers([])
      })
      .catch((err) => console.log(err))
  }

  function editUser(user) {
    fetch(`http://localhost:5000/application/${userId}`, {
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
      })
      .catch((err) => console.log(err))

    setShowEditForm(false)
  }

  function toggleActive(tableUser, index) {
    fetch(`http://localhost:5000/application/${tableUser._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: JSON.stringify({
        ...tableUser,
        level: tableUser.level === 0 ? tableUser.originalLevel : 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        listUsers[index] = data.userUpdated
        setListUsers([...listUsers])
      })
      .catch((err) => console.log(err))
  }

  function adminEditUser(user) {
    toggleUsersList()
    navigate('/edit', {
      state: { adminId: userId, token: token, userToEdit: user },
    })
  }

  function handleDelete(tableUser) {
    fetch(`http://localhost:5000/application/${tableUser._id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    })
      .then(() => {
        setListUsers(listUsers.filter((user) => user._id !== tableUser._id))
      })
      .then(() => true)
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
                edit={true}
              />
            )}
          </div>
        </div>
        {user.level === 999 && (
          <div className={styles.details_container}>
            <h1>Área de administrador</h1>
            <button className={styles.btn} onClick={toggleUsersList}>
              {!showUsersList ? 'Listar usuários' : 'Fechar'}
            </button>
            <div className={styles.user_info}>
              {showUsersList && (
                <UsersTable
                  data={listUsers}
                  columns={[
                    { textTitle: 'Nome', field: 'name' },
                    { textTitle: 'CPF', field: 'cpf' },
                    { textTitle: 'E-mail', field: 'email' },
                    { textTitle: 'Nível de acesso', field: 'level' },
                  ]}
                  onToggleActive={toggleActive}
                  onEdit={adminEditUser}
                  onDelete={handleDelete}
                />
              )}
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}

export default Dashboard
