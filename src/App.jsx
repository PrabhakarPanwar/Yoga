import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LogRes from './pages/LogRes'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reg" element={<LogRes />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App