import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validation
    if (!form.email || !form.password) {
      return alert("Please fill all fields");
    }

    try {
      await axios.post("http://localhost:5000/api/auth/register", form);

      alert("Registration Successful");

      // redirect to login
      navigate("/");

    } catch (err) {
      alert(err.response?.data?.message || "Server Error");
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* LEFT SIDE */}
      <div className="w-1/2 bg-[#001A42] text-white p-12 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold mb-6">SkillMatch AI</h2>
          <h1 className="text-4xl font-bold leading-tight">
            Join the <span className="text-blue-300">Next Generation</span> of Talent.
          </h1>
          <p className="mt-6 text-sm text-gray-200">
            Create your account and unlock AI-powered job matching.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
        >
          <h2 className="text-2xl font-bold mb-2">Create Account</h2>
          <p className="text-gray-500 text-sm mb-6">
            Start your journey
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg"
          />

          <button className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            Register →
          </button>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/")}
              className="text-blue-600 cursor-pointer"
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;