import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom'
import React, { useState } from 'react'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Dashboard from './components/pages/Dashboard'
import EditUser from './components/pages/EditUser'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'
import { isAuthenticated, getUserID, getToken } from './components/user/auth'

function App() {
  const [logged, setLogged] = useState(isAuthenticated())
  const [userId, setUserId] = useState(getUserID())
  const [token, setToken] = useState(getToken())

  function PrivateRoute({ children }) {
    const location = useLocation()
    return isAuthenticated() ? (
      children
    ) : (
      <Navigate to="/login" state={{ from: location }} />
    )
  }

  return (
    <Router>
      <Navbar
        isAuth={logged}
        logoffDone={setLogged}
        clearUserId={setUserId}
        clearToken={setToken}
      />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                loginDone={setLogged}
                loggedUserId={setUserId}
                storeToken={setToken}
              />
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard userId={userId} token={token} />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit"
            element={
              <PrivateRoute>
                <EditUser />
              </PrivateRoute>
            }
          />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
