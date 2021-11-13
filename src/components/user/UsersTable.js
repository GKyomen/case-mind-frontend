import { FaEdit, FaTrash, FaToggleOn, FaToggleOff } from 'react-icons/fa'
import styles from './UsersTable.module.css'

function UsersTable({ data, onEdit, onDelete, onToggleActive, columns }) {
  return (
    <table className={styles.users_table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.field}>{column.textTitle}</th>
          ))}
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={user._id}>
            {columns.map((column) => (
              <td key={`${user._id}-${column.field}`}>{user[column.field]}</td>
            ))}
            <td>
              <button onClick={() => onToggleActive(user, index)}>
                {user.level !== 0 ? <FaToggleOff /> : <FaToggleOn />}
              </button>
              <button onClick={() => onEdit(user)}>
                <FaEdit />
              </button>
              <button onClick={() => onDelete(user)}>
                <FaTrash />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UsersTable
