import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
  userId: String,
  fileName: String,
  skills: [String],
  experience: [
    {
      title: String,
      company: String,
      years: String
    }
  ],
  education: [
    {
      degree: String,
      university: String
    }
  ],
  matchScore: Number
});

export default mongoose.model("Resume", resumeSchema);