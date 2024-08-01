import React from 'react'

import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="bg-black h-auto cover-full  w-full   items-center gap-10 justify-between text-white flex flex-row flex-wrap">
      <div className="p-32">
        <img
          src="/image.jpg"
          alt=""
          className="mt-4  w-full h-96 object-cover rounded-full border-4 border-teal-950 shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
        />
        <div className="bg-teal-950 hover:shadow-stone-500 w-72 mt-12 ml-8  shadow-md shadow-slate-50 animate-pulse font-mono font-medium text-lg rounded-3xl h-auto  ">
          <p className="p-5">Looking for summer 2025 internships!</p>
        </div>
      </div>

      <div className="flex p-8 w-1/2 h-auto mr-10 mb-24 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg">
        <p className="font-bold font-mono text-4xl mb-6 text-white">
          I am Sheharyar Meghani,
        </p>
        <p className="font-light font-mono text-lg text-white leading-relaxed">
          An aspiring Software Engineer and Full Stack Developer studying at the
          University of Toronto. Proficient in building diverse and
          user-friendly products using tools like React, Angular, Express,
          Python, Firebase, and SQL/MongoDB. Passionate about integrating AI and
          Machine Learning into web development, with a goal to become a machine
          learning engineer creating innovative AI products. Always eager to
          learn and push the boundaries of technology in the ever-evolving tech
          industry.
        </p>

        <div className="mt-6 items-center flex">
        <Link
            
            class="text-white bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          to="/projects">
            Stuff I have made!
          </Link>
          <Link
            
            class="text-white bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          to="/contact">
            Talk to me!
          </Link>

          <a
            href="https://github.com/Sheharyar45"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default About
