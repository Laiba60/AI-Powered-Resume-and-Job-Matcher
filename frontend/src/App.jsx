import { Routes, Route } from "react-router-dom";
import React from 'react'
import Signup from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import UploadResume from './pages/UploadResume'
import MatchResult from './pages/MatchResult'
import Jobs from './pages/jobs'

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<UploadResume />} />
      <Route path="/match-result" element={<MatchResult />} />
      <Route path="/recommend" element={<Jobs />} />
    </Routes>
  )
}

export default App