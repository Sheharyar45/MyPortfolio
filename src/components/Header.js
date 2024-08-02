import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const handleMouseEnter= (e) => {
        const liElement = e.currentTarget;
            const pElement = document.createElement('p');
            pElement.className = "-mt-5 p-0 -m-1 pl-1 hidden md:block text-neutral-700";
            pElement.textContent = "_____";
            liElement.appendChild(pElement);
            

    };

    const handleMouseLeave = (e) => {
        const liElement = e.currentTarget;
        const pElement = liElement.querySelector('p');
        if (pElement) {
          liElement.removeChild(pElement);
        }
      };

    

  return (
    <div className="flex font-mono fixed z-50 w-full flex-row border-solid border-x-slate-400 border-b-2 justify-between bg-black font-medium">
      <p className="text-white hidden md:block text-center font-medium text-xl p-6 ">
        𝕊𝕙𝕖𝕙𝕒𝕣𝕪𝕒𝕣 𝕄𝕖𝕘𝕙𝕒𝕟𝕚
      </p>
      <ul className="flex  p-3 md:p-6  font-medium  md:space-x-48  flex-row mt-0 border-0  items-center justify-center ">
        <li>
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="md:hover:animate-bounce block ml-4 md:ml-0  mb-0 pb-0 px-3 hover:text-neutral-700 text-white  rounded bg-transparent md:text-white md:p-0 "
            aria-current="page"
            to="/"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="md:hover:animate-bounce block  px-3 hover:text-neutral-700 text-white  rounded bg-transparent md:text-white md:p-0 "
            aria-current="page"
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="md:hover:animate-bounce block px-3 hover:text-neutral-700 text-white  rounded bg-transparent md:text-white md:p-0 "
            aria-current="page"
            to="/contact"
          >
            Contact me
          </Link>
        </li>

        <a
          href="/Resume_Final (2).pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white ml-6 -mr-12 block md:hidden text-center font-medium text-md   hover:text-neutral-700"
        >
          𝗥𝗲𝘀𝘂𝗺e!
        </a>
      </ul>

      <a
        href="/Resume_Final (2).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white  hidden md:block text-center font-medium text-xl p-6 hover:text-neutral-700"
      >
        𝗥𝗲𝘀𝘂𝗺𝗲 𝗵𝗲𝗿𝗲!
      </a>
    </div>
  );
};
 
export default Header;
