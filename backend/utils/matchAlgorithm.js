export const calculateMatch = (resumeSkills, jobSkills) => {
  const matched = resumeSkills.filter(skill =>
    jobSkills.includes(skill)
  );

  return Math.round((matched.length / jobSkills.length) * 100);
};