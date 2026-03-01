import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated Blobs */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      {/* Main Content */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Pooja Singh
              </span>
            </h1>

            <h2 className="text-2xl text-slate-300 font-medium tracking-wide">
              Full Stack MERN Developer
            </h2>

            <div>
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
                 Open to Work • Fresher
              </span>
            </div>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl">
              I build scalable and responsive full-stack web applications
              using MongoDB, Express, React, and Node.js.
              Focused on clean architecture and performance optimization.
            </p>

            <div className="flex gap-6 pt-4">
              <Link
                to="/projects"
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl font-medium shadow-lg hover:scale-105 hover:shadow-blue-500/30 transition duration-300"
              >
                View Projects
              </Link>

              <Link
                to="/about"
                className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white/20 transition duration-300"
              >
                About Me
              </Link>
            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="relative group">

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

            <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 p-12 rounded-3xl shadow-2xl text-center transition duration-500 group-hover:scale-105">

              <img
                src="https://i.postimg.cc/tTx1xvQK/Chat-GPT-Image-Jan-24-2026-06-06-34-PM.png"
                alt="Pooja Singh"
                className="w-44 h-44 mx-auto rounded-full mb-6 object-cover border-4 border-blue-500 shadow-lg"
              />

              <h3 className="text-2xl font-bold mb-1">
                Pooja Singh
              </h3>

              <p className="text-slate-400 text-sm mb-4 tracking-wide">
                📍 Bahraich, Uttar Pradesh, India
              </p>

              

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;