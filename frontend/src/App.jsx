import { Routes, Route } from "react-router-dom";
import React from 'react'
import Signup from './pages/auth/Register'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App