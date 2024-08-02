import React from 'react'

import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className="bg-black md:h-auto h-auto cover-full  w-full   items-center gap-10 justify-between text-white flex flex-row flex-wrap">
      <div className="md:p-32 mt-24 ml-3 md:mt-0 md:ml-0 ">
      <img
  src="/image.jpg"
  alt=""
  className="mt-4 block w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-teal-950 shadow-lg hover:scale-105 hover:shadow-2xl"
/>

        <div className="bg-teal-950 hidden md:block hover:shadow-stone-500 w-72 mt-12 ml-8  shadow-md shadow-slate-50 animate-pulse font-mono font-medium text-lg rounded-3xl h-auto  ">
          <p className="p-5">Looking for summer 2025 internships!</p>
        </div>
      </div>

      <div className="flex h-auto  mb-96 ml-20 md:ml-0  md:p-8 w-2/3 md:w-1/2 md:h-auto md:mr-10 md:mb-24 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center  text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg">
        <p className="font-bold font-mono md:text-4xl md:mb-6 mb-3 text-lg  text-white">
          I am Sheharyar Meghani,
        </p>
        <p className="font-light font-mono text-sm md:text-lg text-white leading-relaxed">
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
            
            class="text-white w-40 md:w-auto bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-xs md:text-sm px-1 py-2 md:px-5 md:py-2.5  text-center me-2 mb-2 "
          to="/projects">
            Stuff I have made!
          </Link>
          <Link
            
            class="text-white w-24 md:w-auto  bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-xs md:text-sm px-1 py-2 md:px-5 md:py-2.5 text-center me-2 mb-2 "
          to="/contact">
            Talk to me!
          </Link>

          
        </div>
      </div>
    </div>
  );
}

export default About
