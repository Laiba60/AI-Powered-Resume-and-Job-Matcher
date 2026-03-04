import { Routes, Route } from "react-router-dom";
import React from 'react'
import Signup from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import UploadResume from './pages/UploadResume'

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<UploadResume />} />
    </Routes>
  )
}

export default App