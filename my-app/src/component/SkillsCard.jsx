import { useEffect, useState } from "react";

const SkillCard = ({ skill }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(skill.level);
    }, 200);
    return () => clearTimeout(timer);
  }, [skill.level]);

  return (
    <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl shadow-lg hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white text-lg">
          {skill.name}
        </h3>
        <span className="text-sm font-medium text-orange-400">
          {skill.level}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

    </div>
  );
};

export default SkillCard;