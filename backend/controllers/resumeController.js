import Resume from "../models/Resume.js";
export const getResumeAnalysis = async (req, res) => {
  try {
    const data = await Resume.findOne().sort({ createdAt: -1 });
    if (!data) {
      return res.json({
        fileName: "No resume uploaded",
        skills: [],
        experience: [],
        education: [],
        matchScore: 0,
      });
    }
    res.json(data);
  } catch (err) {
    console.error("Resume Analysis Error:", err);
    res.status(500).json({ error: err.message });
  }
};