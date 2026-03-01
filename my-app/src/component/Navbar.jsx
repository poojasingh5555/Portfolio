import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass =
    "px-4 py-2 rounded-md transition duration-300";

  const activeClass =
    "bg-blue-600 text-white";

  const inactiveClass =
    "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
    <nav className="bg-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        <h1 className="text-xl font-bold text-white">
          PS
        </h1>

        <div className="flex gap-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/skills"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Skills
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;