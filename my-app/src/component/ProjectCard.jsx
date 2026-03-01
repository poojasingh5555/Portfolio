import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  console.log(project.image);
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-2 transition duration-300">

      {/* Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}

      <h3 className="text-2xl font-semibold mb-3 text-gray-800">
        {project.title}
      </h3>

      <p className="text-gray-600 mb-4">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mb-4">
        <span className="font-semibold text-gray-700">Tech:</span>
        <p className="text-sm text-gray-500 mt-1">
          {project.techStack?.join(", ")}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
          >
            <FaGithub /> Code
          </a>
        )}

        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;