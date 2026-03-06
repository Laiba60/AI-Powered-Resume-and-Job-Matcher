import React, { useState } from "react";
import { FiLock } from "react-icons/fi";
import { LuFileText } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import API from "../../api/axios"; // import axios

const Login = () => {
  const navigate = useNavigate();
  
  // ✅ Form state
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const response = await API.post("/api/auth/login", form);
      console.log(response.data);

      // Save token
      localStorage.setItem("token", response.data.token);

      // Navigate to dashboard
      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4">
      
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
          <LuFileText className="text-white text-xl font-bold" />
        </div>
        <h1 className="text-lg font-semibold mt-3">AI Resume Matcher</h1>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6">
        
        <h2 className="text-center text-lg font-semibold">Welcome Back</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please enter your details to sign in
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="name@company.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium">Password</label>
            <a href="#" className="text-xs text-indigo-600 hover:underline">Forgot password?</a>
          </div>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200 shadow-md"
        >
          Login
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-indigo-600 font-medium hover:underline">
            Sign up
          </a>
        </p>
      </div>

      {/* Secure Session */}
      <div className="flex items-center gap-2 text-xs text-gray-500 mt-6">
        <FiLock />
        <span>SECURE ENCRYPTED SESSION</span>
      </div>
    </div>
  );
};

export default Login;