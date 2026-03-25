import User from "../models/User.js";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import dotenv from "dotenv";

mongoose.connect(process.env.MONGO_URI);

const createAdmin = async () => {
  const email = "admin@gmail.com";
  const password = "123456";

  const exist = await User.findOne({ email });

  if (exist) {
    console.log("Admin already exists");
    process.exit();
  }

  const hashed = await bcrypt.hash(password, 10);

  await User.create({
    email,
    password: hashed,
    role: "admin",
  });

  console.log("Admin Created");
  process.exit();
};

createAdmin();