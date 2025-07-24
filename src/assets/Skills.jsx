// src/components/Skills.jsx

// You might put this CSS directly in your App.css or a dedicated Skills.css module
// For simplicity here, I'll recommend adding it to App.css if you're using it,
// or directly in a <style> tag in index.html if you want to keep it simple.
// Alternatively, if you're comfortable, you could use a tool like 'postcss-clip-path'
// for generating clip-path with Tailwind directly, but that's an advanced setup.
/* Add this to your App.css or create Skills.css and import it */
/*
.hexagon-clip {
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
*/

function Skills() {
  // Flattened list of all skills with their logos
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

      {/* Grid for skill items */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-6 gap-y-10 justify-items-center">
        {allSkills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Hexagonal container for the logo */}
            <div
              className="w-24 h-24 bg-white flex items-center justify-center rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 hexagon-clip"
              // You can apply the clip-path directly here if you prefer inline style:
              // style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
            >
              {skill.logo && (
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-14 h-14 object-contain" // Adjust size of logo within hexagon
                />
              )}
            </div>
            {/* Skill name below the hexagon */}
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
