require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

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