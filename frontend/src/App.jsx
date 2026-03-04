import { Routes, Route } from "react-router-dom";
import React from 'react'
import Login from './pages/auth/Login'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default App