import React from 'react';
import { Link } from 'react-router-dom';

const skills = {
  Languages: ['Java', 'Python', 'TypeScript', 'JavaScript', 'C/C#', 'SQL', 'HTML/CSS'],
  Frameworks: ['React', 'React Native', 'Flask', 'FastAPI', 'Angular', '.NET', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'LangChain'],
  Tools: ['Git', 'Docker', 'Linux', 'Jira', 'Firebase', 'PostgreSQL', 'MySQL', 'Postman', 'AWS', 'GCP', 'Pinecone', 'Supabase'],
  Concepts: ['OOP', 'DSA', 'REST APIs', 'CI/CD', 'Agile', 'Unit Testing', 'Vector DBs', 'RAG', 'MCP', 'Machine Learning'],
};

const About = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4 md:px-16 lg:px-32">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 mb-16 animate-fadeIn">
        {/* Profile Image */}
        <div className="flex-shrink-0">
          <img
            src="/image.jpg"
            alt="Sheharyar Meghani"
            className="w-56 h-56 md:w-72 md:h-72 object-cover rounded-full border-4 border-teal-800 shadow-2xl shadow-teal-900/30 hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Intro */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-teal-400 font-mono text-sm md:text-base mb-2 animate-fadeIn">Hi there, I'm</p>
          <h1 className="text-4xl md:text-6xl font-bold font-mono text-white mb-4">
            Sheharyar Meghani<span className="text-teal-400">.</span>
          </h1>
          <p className="text-gray-400 font-mono text-base md:text-lg mb-2">
            CS @ University of Toronto · GPA: 3.98/4.00
          </p>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-xl mb-6">
            Software Engineer and Full-Stack Developer passionate about building scalable products and integrating AI/ML into real-world applications. Currently a Software Developer Intern at <span className="text-teal-400 font-semibold">Geotab</span>, building for 100K+ users.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <Link
              to="/experience"
              className="px-6 py-2.5 text-sm font-mono font-medium bg-teal-600 hover:bg-teal-500 text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              My Experience →
            </Link>
            <Link
              to="/projects"
              className="px-6 py-2.5 text-sm font-mono font-medium border border-teal-600 text-teal-400 hover:bg-teal-600 hover:text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className="px-6 py-2.5 text-sm font-mono font-medium border border-gray-600 text-gray-300 hover:border-white hover:text-white rounded-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <section className="animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-8 flex items-center gap-3">
          <span className="text-teal-400">⚡</span> Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/30 rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-teal-400 font-mono font-semibold text-lg mb-3">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-teal-400/10 text-gray-300 border border-teal-700/40 hover:bg-teal-400/20 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
