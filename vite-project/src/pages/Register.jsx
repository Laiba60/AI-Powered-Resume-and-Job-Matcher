import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/AuthForm";
import { registerUser } from "../api/auth";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = async (data) => {
    try {
      const res = await registerUser(data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      alert("Registration successful!");
      navigate("/dashboard"); // redirect after register
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-600">AI Resume Matcher</h1>
        <p className="text-gray-600 mt-2">Create a new account</p>
      </div>
      <AuthForm type="register" onSubmit={handleRegister} />
    </div>
  );
};

export default Register;