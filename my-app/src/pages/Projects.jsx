import { useEffect, useState } from "react";
import API from "../api/axios";
import ProjectCard from "../component/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/project")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load projects");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium tracking-wide">
            Loading Projects...
          </p>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-red-400 text-lg font-semibold">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            My Projects
          </span>
        </h1>

        <p className="text-center text-slate-400 mb-14 max-w-2xl mx-auto">
          Here are some of the projects I’ve built using the MERN stack.
          Each project focuses on clean architecture, scalability,
          and real-world problem solving.
        </p>

        {projects.length === 0 ? (
          <p className="text-center text-slate-400">
            No projects available.
          </p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project._id}
                className="transition duration-500 hover:scale-105"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;