import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Login from './components/pages/Login'
import Navbar from './components/layout/Navbar'
import Container from './components/layout/Container'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min-height">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  )
}

export default App
