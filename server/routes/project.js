
import express from "express";
import {
  createProject,
  getProjects,
  deleteProject,
} from "../controller/projectcontroller.js";

const router = express.Router();

router.post("/", createProject);
router.get("/", getProjects);
router.delete("/:id", deleteProject);

export default router;