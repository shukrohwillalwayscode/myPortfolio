import React, { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1));
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
      setToggle(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <section className="flex justify-between items-center max-w-[1440px] mx-auto px-6 py-4 h-20">
        <main>
          <a href="/" className="flex items-center">
            {" "}
            <h1 className="text-3xl font-bold text-blue-950">
              SHUKROH ABDURRAHEEM
            </h1>
          </a>
        </main>

        <nav className="hidden md:flex gap-6 items-center">
          <a
            href="/"
            onClick={(e) => handleNavLinkClick(e, "#about")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavLinkClick(e, "#skills")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavLinkClick(e, "#projects")}
            className="text-gray-800 hover:text-blue-600 transition duration-300 font-medium"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "#contact")}
            className="bg-blue-600 text-white px-5 py-2 rounded-full font-medium hover:bg-blue-700 transition duration-300 shadow-md"
          >
            CONTACT
          </a>
        </nav>

        <div className="md:hidden flex items-center">
          <button
            onClick={handleToggle}
            className="text-blue-950 focus:outline-none"
          >
            {toggle ? (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </section>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-6">
          {" "}
          <button
            onClick={handleToggle}
            className="text-blue-950 focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        {/* Mobile Navigation Links */}
        <nav className="flex flex-col items-center space-y-8 mt-12">
          <a
            href="#about"
            onClick={(e) => handleNavLinkClick(e, "#about")}
            className="text-gray-800 text-2xl hover:text-blue-600 transition duration-300 font-medium"
          >
            ABOUT
          </a>
          <a
            href="#skills"
            onClick={(e) => handleNavLinkClick(e, "#skills")}
            className="text-gray-800 text-2xl hover:text-blue-600 transition duration-300 font-medium"
          >
            SKILLS
          </a>
          <a
            href="#projects"
            onClick={(e) => handleNavLinkClick(e, "#projects")}
            className="text-gray-800 text-2xl hover:text-blue-600 transition duration-300 font-medium"
          >
            PROJECTS
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "#contact")}
            className="bg-blue-600 text-white px-8 py-3 rounded-full text-2xl font-medium hover:bg-blue-700 transition duration-300 shadow-md"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
