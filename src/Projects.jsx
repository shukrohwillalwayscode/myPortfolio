// src/components/Projects.jsx
import React from "react";

function Projects() {
  const projects = [
    {
      title: "Meta About Page Clone",
      description:
        "A responsive front-end clone of the Meta About page, demonstrating layout, styling, and basic interactivity.",
      image: "/project/metapage.png", // Path to your saved image
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://meta-about-project.vercel.app/", // <-- REPLACE WITH YOUR ACTUAL LIVE LINK
      githubLink: "https://github.com/shukrohwillalwayscode/Meta-project", // <-- REPLACE WITH YOUR ACTUAL GITHUB LINK
    },
    {
      title: "SMILE Recruitment Form",
      description:
        "A responsive web application for recruitment, enabling users to input details and view them instantly. Built with modern front-end tools.",
      image: "/project/form.png", // Path to your saved image
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML"],
      liveLink: "https://react-form-alpha-one.vercel.app/", // <-- REPLACE WITH YOUR ACTUAL LIVE LINK
      githubLink: "https://github.com/shukrohwillalwayscode/React-form", // <-- REPLACE WITH YOUR ACTUAL GITHUB LINK
    },
    {
      title: "PiggyVest.com Clone",
      description:
        "A responsive front-end clone of the PiggyVest website, replicating its user interface and core design elements.",
      image: "/project/piggyvest.png", // Path to your saved image
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML"], // Adjust if different for this project
      liveLink: "https://react-piggy-lime.vercel.app/", // <-- REPLACE WITH YOUR ACTUAL LIVE LINK
      githubLink: "https://github.com/shukrohwillalwayscode/react-piggy", // <-- REPLACE WITH YOUR ACTUAL GITHUB LINK
    },
  ];

  return (
    <section id="projects" className="max-w-[1280px] mx-auto py-20 px-8">
      <h2 className="text-4xl font-bold text-center text-blue-950 mb-12">
        My Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center mt-4">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    Live Demo
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      ></path>
                    </svg>
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-gray-900 font-semibold flex items-center"
                  >
                    GitHub
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 0C4.477 0 0 4.484 0 10.017c0 4.417 2.865 8.167 6.839 9.5a.999.999 0 001.176-.75c.07-.372.03-1.053-.02-1.393-2.775.603-3.362-1.314-3.362-1.314-.455-1.152-1.11-1.465-1.11-1.465-.91-.62.069-.608.069-.608 1.007.07 1.532 1.03 1.532 1.03.89 1.545 2.333 1.096 2.895.836.09-.65.352-1.096.643-1.347-2.22-.253-4.555-1.113-4.555-4.949 0-1.092.39-1.988 1.03-2.69-.104-.253-.448-1.272.097-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0110 4.673c.85.006 1.704.116 2.504.331 1.905-1.295 2.747-1.025 2.747-1.025.546 1.378.202 2.398.097 2.65.64.702 1.03 1.598 1.03 2.69 0 3.841-2.339 4.693-4.566 4.942.36.31.688.927.688 1.874 0 1.347 0 2.427 0 2.75.0-.03.0-6.195 0-6.195a.999.999 0 00.725-.785C17.13 18.127 20 14.402 20 10.017A10.017 10.017 0 0010 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
