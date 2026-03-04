import React from "react";
import { LuFileText } from "react-icons/lu";

const Signup = () => {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center px-4 pt-8">

      {/* Logo */}
      <div className="flex flex-col items-center mb-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-md">
          <LuFileText  className="text-white text-lg font-bold"/>
        </div>
        <h1 className="text-lg font-semibold mt-2">AI Resume Matcher</h1>
      </div>

      {/* Card */}
      <div className="bg-white w-full max-w-sm rounded-xl shadow-lg p-6">

        <h2 className="text-center text-lg font-semibold">
          Create Account
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Sign up as a Job Seeker
        </p>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="John Doe"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Button */}
        <button className="w-full mt-2 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition duration-200 shadow-md">
          Sign Up
        </button>

        {/* Login Redirect */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;