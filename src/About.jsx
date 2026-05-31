import React from "react";

function About() {
  return (
    <section className="max-w-[1280px] min-h-[600px] px-16 mx-auto flex justify-between items-center pt-30 pb-20 max-tablet:flex-col-reverse max-tablet:px-8">
      <div className="w-1/2 px-5 max-tablet:w-full max-tablet:max-w-lg max-tablet:mx-auto max-tablet:px-0 max-tablet:text-center">
        <h3 className="text-lg mb-2 max-tablet:text-xl">
          <b className="text-blue-800">Shukroh Abdurraheem</b>: Dedicated and
          versatile
        </h3>
        <h1 className="text-blue-950 text-4xl font-bold mb-5 max-tablet:text-3xl max-sm:text-2xl">
          FRONTEND DEVELOPER
        </h1>

        <p className="max-w-prose leading-relaxed text-gray-700 mb-8 max-tablet:max-w-full max-tablet:mx-auto">
          I'm Shukroh Abdurraheem, a Frontend Developer who enjoys turning ideas
          into interactive and responsive web experiences. My journey into tech
          started with curiosity and has grown into a passion for building
          applications that solve real problems. I work primarily with React,
          TypeScript, JavaScript, and Tailwind CSS, and I enjoy creating clean,
          reusable components that make development more efficient and scalable.
          I believe great software should be both functional and intuitive,
          which is why I focus on writing maintainable code and designing
          user-friendly interfaces. As I continue growing in my career, I'm
          excited about opportunities to contribute to impactful products while
          expanding my skills in frontend and full-stack development.
        </p>

        <div className="flex items-center  max-tablet:justify-center mt-6 space-x-6">
          <a
            href="https://github.com/shukrohwillalwayscode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img
              src="github-logo.svg"
              alt="GitHub Profile"
              className="w-10 h-10"
            />
            <p>
              <b>Github</b>
            </p>
          </a>
          <a
            href="https://vercel.com/shukroh-abdurraheems-projects"
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:scale-110 transition-transform duration-200"
          >
            <img src="/vercel.svg" alt="Vercel Profile" className="w-10 h-10" />

            <p>
              <b>Vercel</b>
            </p>
          </a>
          <a
            href="/SHUKROH ABURRAHEEM  Resume_CV .pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform duration-200"
          >
            <img src="/Cv (1).png" alt="Download CV" className="w-10 h-10" />
            <p>
              <b>CV</b>
            </p>
          </a>
        </div>
      </div>

      <div className="w-1/3 flex justify-center items-center max-tablet:w-full max-tablet:max-w-sm max-tablet:mx-auto max-tablet:my-10">
        <div
          className="relative rounded-tr-4xl rounded-tl-4xl rounded-br-4xl rounded-bl-4xl overflow-hidden"
          style={{
            padding: "10px",
            background: "#efece9",
            border: "cover",
          }}
        >
          <img
            src="/Shukroh Abdurraheem.jpg"
            alt="Shukroh Abdurraheem"
            className="w-full h-auto object-cover  block"
            style={{ borderRadius: "inherit" }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
