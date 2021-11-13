export const isAuthenticated = () => {
  let token = localStorage.getItem('token')
  return token !== null
}

export const getUserID = () => {
  return localStorage.getItem('id')
}

export const getToken = () => {
  return localStorage.getItem('token')
}
