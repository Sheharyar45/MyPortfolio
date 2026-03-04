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
      const response = await fetch('https://email.adaptable.app/submit-comment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Comment submitted successfully!');
        setFormData({ name: '', email: '', comment: '' });
      } else {
        alert('Failed to submit comment.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4 flex items-center gap-3 animate-fadeIn">
        <span className="text-teal-400">📬</span> Get In Touch
      </h2>
      <p className="text-gray-400 font-mono text-sm md:text-base mb-12 animate-fadeIn">
        Have a question or want to work together? Reach out!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="animate-fadeInUp space-y-5">
          <a
            href="https://www.linkedin.com/in/sheharyar-meghani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-xl p-4 hover:-translate-y-1 transition-all duration-300"
          >
            <span className="[&>svg]:h-6 [&>svg]:w-6 [&>svg]:fill-[#0077b5]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
              </svg>
            </span>
            <span className="text-gray-300 font-mono text-sm">LinkedIn — sheharyar-meghani</span>
          </a>

          <a
            href="https://github.com/Sheharyar45"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-xl p-4 hover:-translate-y-1 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-300 font-mono text-sm">GitHub — Sheharyar45</span>
          </a>

          <div className="flex items-center gap-4 bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-xl p-4">
            <span className="text-xl">📧</span>
            <span className="text-gray-300 font-mono text-sm">meghanisheheryar@gmail.com</span>
          </div>

          <div className="flex items-center gap-4 bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-xl p-4">
            <span className="text-xl">📱</span>
            <span className="text-gray-300 font-mono text-sm">+1-437-245-2231</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-2xl p-6 md:p-8 animate-fadeInUp" style={{ animationDelay: '100ms' }}>
          <h3 className="text-xl font-mono font-semibold text-white mb-6">Leave a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-1">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={handleChange}
                id="name"
                name="name"
                className="w-full p-3 rounded-lg bg-black/50 border border-teal-800/30 text-white focus:border-teal-400 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-1">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                name="email"
                className="w-full p-3 rounded-lg bg-black/50 border border-teal-800/30 text-white focus:border-teal-400 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-sm font-mono text-gray-400 mb-1">Message</label>
              <textarea
                id="comment"
                value={formData.comment}
                onChange={handleChange}
                name="comment"
                rows="4"
                className="w-full p-3 rounded-lg bg-black/50 border border-teal-800/30 text-white focus:border-teal-400 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-sm font-mono font-medium bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
