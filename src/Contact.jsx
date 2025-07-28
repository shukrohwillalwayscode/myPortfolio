import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="max-w-[1280px] mx-auto py-20 px-8 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-950 mb-12">Get In Touch</h2>

      <p className="text-lg text-gray-700 mb-8 max-w-prose mx-auto">
        Have a project in mind,looking for a passionate and skilled MERN stack
        developer to join your team, or wish to discuss a potential opportunity,
        a question, or just want to connect? Feel free to reach out!
      </p>

      <div className="flex flex-col items-center space-y-6">
        <a
          href="mailto:abdurraheemshukroh2018@gmail.com"
          className="flex items-center text-blue-600 hover:text-blue-800 text-xl font-medium transition-colors duration-200"
        >
          <svg
            className="w-8 h-8 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          abdurraheemshukroh2018@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/abdurraheem-shukroh/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-blue-600 hover:text-blue-800 text-xl font-medium transition-colors duration-200"
        >
          <svg
            className="w-8 h-8 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M16.338 16.338H13.5V9.452c0-.704-.012-1.618-.985-1.618-1.004 0-1.159.78-1.159 1.573v7.931H7.57C7.57 7.7 7.57 6.447 7.57 6.447H4.5V16.338H1.5V6.447h3.07v1.393h.04c.427-.79 1.472-1.61 3.033-1.61 3.252 0 3.858 2.138 3.858 4.909v5.189H16.338zM2.5 3.013c.828 0 1.5.672 1.5 1.5 0 .828-.672 1.5-1.5 1.5-.828 0-1.5-.672-1.5-1.5 0-.828.672-1.5 1.5-1.5z"
              clipRule="evenodd"
            ></path>
          </svg>
          LinkedIn Profile
        </a>

        <a
          href="tel:+2349016716914"
          className="flex items-center text-blue-600 hover:text-blue-800 text-xl font-medium transition-colors duration-200"
        >
          <svg
            className="w-8 h-8 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
          </svg>
          +2349016716914
        </a>

        <p className="flex items-center text-gray-700 text-lg">
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            ></path>
          </svg>
          Lagos, Nigeria
        </p>
      </div>
    </section>
  );
}

export default Contact;
