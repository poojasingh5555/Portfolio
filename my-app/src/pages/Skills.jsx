import { useEffect, useState } from "react";
import API from "../api/axios";
import SkillCard from "../component/SkillsCard";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/skills")
      .then((res) => {
        setSkills(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load skills");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white">
        <div className="flex flex-col items-center space-y-4">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-center">
            <p className="text-lg font-medium tracking-wide">
              Loading Skills...
            </p>
            <p className="text-sm text-slate-400 mt-2">
              Please wait a moment while the server wakes up.
            </p>
          </div>
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
    <div className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Glow Blobs */}
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            My Skills
          </span>
        </h1>

        <p className="text-center text-slate-400 mb-14 max-w-2xl mx-auto">
          Technologies and tools I use to build modern, scalable
          and high-performance web applications.
        </p>

        {skills.length === 0 ? (
          <p className="text-center text-slate-400">
            No skills available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {skills.map((skill) => (
              <SkillCard key={skill._id} skill={skill} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;