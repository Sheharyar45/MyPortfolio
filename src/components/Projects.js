
import React, { useState } from 'react';

const Projects = () => {
  const [btn, setbtn] = useState("See More!");
  const hide ={coursevid:"flex md:p-8 p-4 h-36 hidden mt-40 w-1/2 md:h-auto ml-20 mr-10 mb-24 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg",coursefeat:"hidden"};
  const show ={coursevid:"flex md:p-4 p-4 h-44 mt-40 w-1/2 md:h-96 ml-5 mr-5 md:ml-20 md:mr-10 hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg",coursefeat:"block"};
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
      <div className="flex md:ml-0 flex-row justify-center gap-0">
        <div className="flex md:p-8 p-3 mt-20 md:w-1/2 w-2/3 h-80 md:h-auto md:ml-20 md:mr-10 overflow-scroll  hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg">
          <div className="flex flex-wrap flex-row items-center justify-between">
            <p className="font-bold  font-mono text-2xl md:text-3xl mb-6 text-white">
              Smart Course App
            </p>
            <img
              className="mb-4 hidden md:block  ml-6"
              width="40"
              alt=""
              height="40"
              src="/python.svg"
            ></img>
            <img
              className="mb-4 md:hidden block "
              width="30"
              alt=""
              height="30"
              src="/python.svg"
            ></img>
            <img
              className="mb-4 hidden md:block ml-3"
              alt=""
              width="40"
              height="40"
              src="/react-2.svg"
            ></img>
            <img
              className="mb-4 block md:hidden ml-3"
              alt=""
              width="30"
              height="30"
              src="/react-2.svg"
            ></img>
            <img
              className="mb-4 hidden md:block ml-3"
              alt=""
              width="40"
              height="40"
              src="/sql.svg"
            ></img>
            <img
              className="mb-4 block md:hidden  ml-3"
              alt=""
              width="40"
              height="40"
              src="/sql.svg"
            ></img>
          </div>

          <p className="font-light h-auto font-mono text-xs md:text-lg text-white leading-relaxed">
            Noticing the lack of features on a university course webpage, I
            developed a full-stack course app using Flask for the backend and
            React for the frontend, serving a REST API.
            <br />
            <br />
            <p className={theme.coursefeat}>
              The app enhanced user experience and functionality, leading to a
              50% increase in site traffic and a 30% boost in user satisfaction.
              <br />
              <br />
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
            class="text-white bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br md:mt-3 mt-0 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            {btn}
          </button>
        </div>

        <div className={theme.coursevid}>
          <p className="md:text-3xl text-md font-mono font-semibold">
            A Video Demo!{" "}
          </p>

          <video
            alt=""
            className="mt-2 hidden md:block"
            width="1000"
            height="1200"
            controls
          >
            <source src="/video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            alt=""
            className="mt-2 md:hidden p-0 block"
            width="1600"
            height="1600"
            controls
          >
            <source src="/video.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* newProject */}
      <div className="flex md:ml-0 flex-row justify-center gap-0">
        <div className="flex md:p-8 p-3 mt-20 md:w-1/2 w-2/3 h-80 md:h-auto md:ml-20 md:mr-10 overflow-scroll  hover:animate-none bg-teal-950 rounded-3xl flex-col items-center text-center hover:shadow-stone-500 shadow-slate-50 shadow-lg">
          <div className="flex flex-wrap flex-row items-center justify-between">
            <p className="font-bold  font-mono text-2xl md:text-3xl mb-6 text-white">
              Trash Ninja
            </p>
            <img
              className="mb-4 hidden md:block  ml-6"
              width="40"
              alt=""
              height="40"
              src="/python.svg"
            ></img>
            <img
              className="mb-4 md:hidden block "
              width="30"
              alt=""
              height="30"
              src="/python.svg"
            ></img>
            <img
              className="mb-4 hidden md:block ml-3"
              alt=""
              width="40"
              height="40"
              src="/react-2.svg"
            ></img>
            <img
              className="mb-4 block md:hidden ml-3"
              alt=""
              width="30"
              height="30"
              src="/react-2.svg"
            ></img>
            <img
              className="mb-4 hidden md:block ml-3"
              alt=""
              width="40"
              height="40"
              src="/tensor.svg"
            ></img>
            <img
              className="mb-4 block md:hidden  ml-3"
              alt=""
              width="40"
              height="40"
              src="/tensor.svg"
            ></img>
          </div>

          <p className="font-light h-auto font-mono text-xs md:text-lg text-white leading-relaxed">
              Developed an AI-driven mobile app for efficient waste management
              by classifying trash items like plastic, metal, and cardboard,
              providing users with accurate disposal instructions (e.g.,
              recycle, compost, or donate).
            <br />
            <br />
            <p className={theme.coursefeat}>
              
              <br />
              <br />
              Key features include:
              <ul className="list-disc list-inside ml-4">
                <li>
                  <strong className="text-yellow-800 font-bold">
                    AI-Powered Trash Classification:
                  </strong>{" "}
                  Leveraged a Hugging Face model with TensorFlow for accurate
                  trash identification, significantly improving waste sorting
                  efficiency.
                </li>
                <li>
                  <strong className="text-yellow-800 font-bold">
                    Interactive User Experience:
                  </strong>{" "}
                  Designed a React Native frontend allowing users to take or
                  upload images seamlessly, enhancing accessibility and
                  engagement.
                </li>
                <li>
                  <strong className="text-yellow-800 font-bold">
                    Robust Backend Integration:
                  </strong>{" "}
                  Built a Flask-based backend to process images and integrate
                  with the AI model for real-time results.
                </li>
                <li>
                  <strong className="text-yellow-800 font-bold">
                    Collaborative Development:
                  </strong>{" "}
                  Managed version control and code integration efficiently with
                  Git, enabling streamlined teamwork and project delivery.
                </li>
              </ul>
              This project showcases the potential of AI in addressing
              environmental challenges by simplifying waste management processes
              for users.
            </p>
          </p>

          <button
            type="button"
            onClick={handlebtn}
            class="text-white bg-gradient-to-r hover:shadow-stone-500 from-black via-black to-black hover:bg-gradient-to-br md:mt-3 mt-0 focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 "
          >
            {btn}
          </button>
        </div>

        <div className={theme.coursevid}>
          <p className="md:text-3xl text-md font-mono font-semibold">
            A Video Demo!{" "}
          </p>

          <video
            alt=""
            className="mt-2 hidden md:block"
            width="200"
            height="12"
            controls
          >
            <source src="/trashninja.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video
            alt=""
            className="mt-2 md:hidden p-0 block"
            width="600"
            height="48"
            controls
          >
            <source src="/trashninja.mov" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
}

export default Projects
