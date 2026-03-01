import Project from "../models/projectmodel.js";

// Create project
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  }catch (error) {
  console.log("CREATE PROJECT ERROR:", error);  // 🔥 real error console me dikhega

  res.status(500).json({
    message: "Error creating project",
    error: error.message
  });
}
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Error fetching projects" });
  }
};

// Delete project
export const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting project" });
  }
};