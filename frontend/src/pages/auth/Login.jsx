import React from "react";
import { FiLock } from "react-icons/fi";

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4">
      
      {/* Logo */}
      <div className="flex flex-col items-center mb-6">
        <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
          <span className="text-white text-xl font-bold">D</span>
        </div>
        <h1 className="text-lg font-semibold mt-3">AI Resume Matcher</h1>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6">
        
        <h2 className="text-center text-lg font-semibold">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Please enter your details to sign in
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="name@company.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <div className="flex justify-between items-center mb-1">
            <label className="text-sm font-medium">Password</label>
            <a
              href="#"
              className="text-xs text-indigo-600 hover:underline"
            >
              Forgot password?
            </a>
          </div>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200 shadow-md">
          Login
        </button>

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-indigo-600 font-medium hover:underline">
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