import { useEffect, useState } from "react";
import API from "../api/axios";

const Contact = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    API.get("/contact")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!data)
    return (
      <div className="h-screen flex items-center justify-center bg-slate-950 text-white text-xl">
        Loading...
      </div>
    );

  return (
    <section className="min-h-screen bg-slate-950 text-white px-6 py-20">
      <div className="max-w-6xl mx-auto">

        {/* ================= Hero Section ================= */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-4">
            {data.fullName}
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
            {data.shortBio}
          </h2>

          <p className="max-w-3xl mx-auto text-gray-500 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* ================= About Story ================= */}
        {data.aboutStory && (
          <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-lg mb-16">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              My Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {data.aboutStory}
            </p>
          </div>
        )}

        {/* ================= Contact Section ================= */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-2">
            Let's Connect
          </h2>
          <p className="text-gray-500">
            I'm open to job opportunities, collaborations, and tech discussions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Email */}
          {data.email && (
            <a
              href={`mailto:${data.email}`}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-orange-500/10 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Email
              </h3>
              <p className="text-gray-400 break-all">{data.email}</p>
            </a>
          )}

          {/* Phone */}
          {data.phone && (
            <a
              href={`tel:${data.phone}`}
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-orange-500/10 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                Phone
              </h3>
              <p className="text-gray-400">{data.phone}</p>
            </a>
          )}

          {/* GitHub */}
          {data.socialLinks?.github && (
            <a
              href={data.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-orange-500/10 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                GitHub
              </h3>
              <p className="text-gray-400">View My Projects</p>
            </a>
          )}

          {/* LinkedIn */}
          {data.socialLinks?.linkedin && (
            <a
              href={data.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-orange-500/10 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                LinkedIn
              </h3>
              <p className="text-gray-400">Professional Profile</p>
            </a>
          )}

          {/* GeeksforGeeks */}
          {data.socialLinks?.gfg && (
            <a
              href={data.socialLinks.gfg}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:-translate-y-2 hover:shadow-orange-500/10 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-lg font-semibold text-orange-500 mb-2">
                GeeksforGeeks
              </h3>
              <p className="text-gray-400">Coding Practice Profile</p>
            </a>
          )}

          {/* Resume */}
          {data.resumeLink && (
            <a
              href={data.resumeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-pink-500 p-6 rounded-2xl text-center font-semibold hover:scale-105 transition duration-300"
            >
              Download Resume
            </a>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;