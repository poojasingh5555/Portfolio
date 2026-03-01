import Skill from "../models/skillsmodel.js";

// Add skill
export const createSkill = async (req, res) => {
  try {
    const { name, level, category } = req.body;

    const skill = new Skill({
      name,
      level,
      category,
    });

    await skill.save();

    res.status(201).json({
      message: "Skill added successfully",
      skill,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error adding skill",
      error: error.message,
    });
  }
};

// Get all skills
export const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find().sort({ createdAt: 1 });
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ message: "Error fetching skills" });
  }
};

// Delete skill
export const deleteSkill = async (req, res) => {
  try {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Skill deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting skill" });
  }
};