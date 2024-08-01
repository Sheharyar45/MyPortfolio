
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const Projects = () => {
  const [btn, setbtn] = useState("See More!");
  const hide ={coursevid:"flex p-8 hidden mt-40 w-1/2 h-auto ml-20 mr-10 mb-24 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg",coursefeat:"hidden"};
  const show ={coursevid:"flex p-4 mt-40 w-1/2 h-96 ml-20 mr-10 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg",coursefeat:"block"};
  const [theme, setTheme] = useState(hide);
  const handlebtn = ()=>{
    if(btn === "See More!"){
      setbtn("See Less!");
      setTheme(show);
    }
    else{
      setbtn("See More!");
      setTheme(hide);
    }


  };
  
  return (
    <div className="bg-black h-screen pt-8 pb-20 overflow-scroll scroll-smooth   items-start justify-between text-white flex flex-col ">
      <div className="flex flex-row justify-center gap-0">
        <div className="flex p-8 mt-20 w-1/2 h-auto ml-20 mr-10  hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg">
          <div className="flex flex-row items-center justify-between">
            <p className="font-bold  font-mono text-3xl mb-6 text-white">
            Smart Course Web App
            </p>
            <img
            className='mb-4  ml-6'
              width="40"
              height="40"
              src="https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
            ></img>
            <img className='mb-4 ml-3' width="40" height="40" src="/react-2.svg"></img>
            <img className='mb-4 ml-3' width="40" height="40" src="/sql.svg"></img>
          </div>

          <p className="font-light h-auto font-mono text-md text-white leading-relaxed">
            Noticing the lack of features on a university course webpage, I
            developed a full-stack course app using Flask for the backend and
            React for the frontend, serving a REST API. The app enhanced user
            experience and functionality, leading to a 50% increase in site
            traffic and a 30% boost in user satisfaction.
            <br />
            <br />
            <p className={theme.coursefeat}>
              Key features include:
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong className="text-yellow-800 font-bold">
                    User Authentication:
                  </strong>{" "}
                  Secure login and logout functionality to protect user data.
                </li>
                <li>
                  <strong className="text-yellow-800 font-bold">
                    Instructor Capabilities:
                  </strong>{" "}
                  Features allowing instructors to update grades and access
                  anonymous feedback, significantly saving time.
                </li>
                <li>
                  <strong className="text-yellow-800 font-bold">
                    Student Engagement:
                  </strong>{" "}
                  Improved through grade visibility and the ability to request
                  remarks, facilitating better communication and transparency.
                </li>
                <br></br>
              </ul>
              The project aimed to streamline processes for both instructors and
              students, making the overall experience more efficient and
              user-friendly.
            </p>
          </p>

          <button
            type="button"
            onClick={handlebtn}
            class="text-white bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br mt-3  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            {btn}
          </button>
        </div>

        <div className={theme.coursevid}>
          <p className="text-3xl font-mono font-semibold">A Video Demo! </p>

          <video className="mt-2" width="1000" height="1200" controls>
            <source src="/video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
    </div>
  );
}

export default Projects
