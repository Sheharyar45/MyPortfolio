import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/submit-comment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Comment submitted successfully!');
        // Reset form or perform any other actions needed
      } else {
        alert('Failed to submit comment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };



  return (
    <div className="bg-black h-screen pt-8 pb-20 overflow-scroll scroll-smooth flex flex-col items-start justify-start text-white">
    <div className="mt-16 mb-12 ml-6 text-center">

      <p className="text-5xl  mt-10 font-mono items-start font-semibold mb-4">Please Reach Out!</p> 
      <div className="flex flex-col gap-6 mt-9 items-start mb-12">
        <a href="https://www.linkedin.com/in/sheharyar-meghani" target="_blank" rel="noopener noreferrer" className="text-2xl  mr-10 text-white bg-gradient-to-r hover:shadow-stone-500 from-white via-slate-200 to-slate-400 hover:bg-gradient-to-br  focus:outline-none focus:ring-white dark:focus:ring-white shadow-lg shadow-white dark:shadow-lg dark:shadow-white font-medium rounded-lg  px-5 py-2.5 text-center me-2 mb-2 ">
        <span className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:fill-[#0077b5]">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
    
    <path
      d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
  </svg>
</span>
        </a>
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

        <p className="text-xl bg-teal-900  shadow-lg shadow-slate-50 rounded-lg p-2">Email: <a href="mailto:your.email@example.com" className="hover:underline">meghanisheheryar@gmail.com</a></p>
        <p className="text-xl bg-teal-900  shadow-lg shadow-slate-50 rounded-lg p-2">Telephone: <a href="mailto:your.email@example.com" className="hover:underline">+1-437-245-2231</a></p>
      </div>

      <div className="bg-teal-950 shadow-lg shadow-slate-50 p-6 rounded-lg  w-full max-w-md mx-auto">
        <h2 className="text-2xl font-mono font-semibold mb-4">Leave a Comment</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-light mb-2">Name:</label>
            <input type="text" value={formData.name} onChange={handleChange} id="name" name="name" className="w-full p-2 rounded bg-black text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-light mb-2">Email:</label>
            <input type="email" value={formData.email} onChange={handleChange} id="email" name="email" className="w-full p-2 rounded bg-black text-white" />
          </div>
          <div className="mb-4">
            <label htmlFor="comment" className="block text-lg font-light mb-2">Comment:</label>
            <textarea id="comment" value={formData.comment} onChange={handleChange} name="comment" rows="4" className="w-full p-2 rounded bg-black text-white"></textarea>
          </div>
          <button type="submit" className="bg-cyan-700 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Contact
