import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const projects = [
  {
    name: "Urban Livability Dashboard",
    description:
      "Web-based data analytics dashboard using Python, Pandas, NumPy, Plotly, and Streamlit. Implemented a composite livability index using multi-dimensional urban indicators for city-wise comparison and ranking.",
    tech: "Python, Pandas, NumPy, Plotly, Streamlit",
    liveLink: "https://urban-livability-dashboard.streamlit.app/",
    githubLink: "https://github.com/SanjnaSukirti/urban_livability_app",
  },
  {
    name: "Fake Job & Internship Detection System",
    description:
      "Web app to detect fake job offers and internships using a CNN model with rule-based validation, email verification and scam pattern analysis for an explainable risk score. Deployed using Vercel and Render.",
    tech: "React, FastAPI, Python, TensorFlow/Keras (CNN), Firebase",
    liveLink: "https://fake-offer-letter-classifier.vercel.app/analyze",
    githubPrivate: true,
  },
  {
    name: "Music Player Application",
    description:
      "Music player web app with HTML, Tailwind CSS, JavaScript, React, and Firebase authentication. Features user/admin roles, real-time playback and song management with Cloudinary integration.",
    tech: "HTML, Tailwind CSS, JavaScript, React, Firebase",
    liveLink: "https://innovators-hub-music-8b2e3.web.app/",
    githubLink: "https://github.com/SanjnaSukirti/music-player-app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 px-6 scroll-mt-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-10 md:p-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Projects
          </h2>
          <p className="text-gray-600 mt-2">
            Some of the projects I have worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-justify">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-pink-50 shadow-sm border-2 border-gray-300 hover:border-pink-500 transition-all hover:-translate-y-1 duration-300 
              ${projects.length % 2 !== 0 && index === projects.length - 1 
                ? "sm:col-span-2 sm:max-w-lg sm:mx-auto" : ""}`}
            >
              <h3 className="font-bold text-xl text-gray-800 text-center pb-2">
                {project.name}
              </h3>
              <p className="text-gray-700 mt-2 text-lg leading-[1.7]">
                {project.description}
              </p>
              <p className="text-gray-600 text-base mt-2 italic">
                {project.tech}
              </p>
              <div className="mt-4 flex gap-4 text-xl">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-pink-600 font-semibold hover:underline"
                  >
                    Live Link
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                  </a>
                )}
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 font-semibold hover:underline"
                  >
                    GitHub
                    <FontAwesomeIcon icon={faCode} />
                  </a>
                ) : (
                  <span className="flex items-center gap-2 text-gray-600 font-semibold text-lg">
                    Private Repository
                    <FontAwesomeIcon icon={faCode} />
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
