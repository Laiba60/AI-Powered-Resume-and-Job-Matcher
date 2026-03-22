import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        form
      );

      const { token, role } = res.data;

      // save in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);

      alert("Login Successful");

      // 🔥 role-based redirect
      if (role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/dashboard");
      }

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
            Architectural Intelligence for the{" "}
            <span className="text-blue-900">Next Generation</span> of Talent.
          </h1>
          <p className="mt-6 text-sm text-gray-200">
            Our AI-driven ecosystem bridges the gap between elite talent and world class opportunities with surgical precision.
          </p>
        </div>

        <div className="bg-white/20 p-4 rounded-xl w-64">
          <p className="text-sm">82% Predictive Alignment</p>
        </div>

        <div className="flex gap-10 text-sm">
          <p>12k+ Matched Talents</p>
          <p>98% Accuracy Rate</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-1/2 flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-xl shadow-lg w-[350px]"
        >
          <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-500 text-sm mb-6">
            Continue your journey with architectural precision.
          </p>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg bg-[#EFF4FF]"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full mb-4 p-3 border rounded-lg bg-[#EFF4FF]"
          />

          <button className="w-full bg-[#3980F4] text-white p-3 rounded-lg hover:bg-blue-700">
            Sign In →
          </button>

          <p className="text-sm text-center mt-4">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-[#3980F4] cursor-pointer"
            >
              Register
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;