import { Routes, Route } from "react-router-dom";
import React from 'react'
import Signup from './pages/auth/Register'
import Login from './pages/auth/Login'
import Dashboard from './pages/Dashboard'
import UploadResume from './pages/UploadResume'
import MatchResult from './pages/MatchResult'
import Jobs from './pages/jobs'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminUsers from './pages/Admin/AdminUsers'
import AdminJobManagement from './pages/Admin/AdminJobManagement'

const App = () => {
  return (
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<UploadResume />} />
      <Route path="/match-result" element={<MatchResult />} />
      <Route path="/recommend" element={<Jobs />} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/admin/users" element={<AdminUsers />} />
      <Route path="/admin/jobs" element={<AdminJobManagement />} />
    </Routes>
  )
}

export default App