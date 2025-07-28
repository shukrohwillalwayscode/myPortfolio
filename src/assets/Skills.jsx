function Skills() {
  const allSkills = [
    { name: "HTML5", logo: "/html-5.svg" },
    { name: "CSS3", logo: "/css-logo.svg" },
    { name: "JavaScript", logo: "/javascript.svg" },
    { name: "TypeScript", logo: "/typescript.svg" },
    { name: "React.js", logo: "/react.svg" },
    { name: "Tailwind CSS", logo: "/tailwind-css.svg" },
    { name: "Node.js", logo: "/node-js.svg" },
    { name: "Express.js", logo: "/express-js.svg" },
    { name: "MongoDB", logo: "/mongodb-icon.svg" },
    { name: "Git", logo: "/git-logo.svg" },
    { name: "GitHub", logo: "/github-logo.svg" },
    { name: "Vercel", logo: "/vercel.svg" },
  ];

  return (
    <section id="skills" className="max-w-[1280px] mx-auto py-20 px-8">
      <h2 className="text-3xl font-bold text-center text-blue-950 mb-12 max-sm:text-2xl">
        I have vast experience in the following web technologies:
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10 justify-items-center">
        {allSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-24 h-24 bg-white flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hexagon-clip">
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-14 h-14 object-contain"
                />
              )}
            </div>
            <p className="mt-4 text-gray-800 font-medium text-lg text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
