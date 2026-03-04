import React from 'react';

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Geotab',
    location: 'Oakville, ON (Hybrid)',
    date: 'May 2025 – Present',
    bullets: [
      'Developed SOLID React/TypeScript components for 100K+ users, optimizing load speed through code-splitting and lazy loading.',
      'Optimized SQL batch-query logic in C#, doubling capacity to 21.5K devices and boosting backend performance.',
      'Reduced latency 30% and eliminated 500+ redundant API calls by migrating store-based data fetching to React Query caching.',
      'Refactored shared UI components into Storybook-documented modular packages used by 4+ teams, reducing release cycles 20%.',
      'Built unit tests (Jest) and integration tests (Selenium) to reach 80% coverage and enhance reliability.',
      'Eliminated manual configuration by engineering a Claude-code agent to auto-generate Storybook files for UI components.',
      'Shipped features via Docker-based CI/CD pipelines in GitLab, and collaborated with Agile teams through Jira.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Adamjee Life Insurance',
    location: 'Karachi, Pakistan',
    date: 'May 2024 – Aug 2024',
    bullets: [
      'Built responsive web apps with Angular and JavaScript, increasing user engagement by 30%.',
      'Integrated RESTful APIs with a .NET Core backend, cutting average query latency from 400 ms to 300 ms.',
      'Developed, deployed, and tested 5+ backend features using C#, PostgreSQL, and Postman.',
    ],
  },
  {
    role: 'Associate of Tech',
    company: 'CREATE Club, University of Toronto',
    location: 'Toronto, ON',
    date: 'Sep 2024 – Sep 2025',
    bullets: [
      'Led 4 developers in building an AI note-taking app using AWS Bedrock (Claude), Python FastAPI, React (TypeScript), and Supabase (PostgreSQL).',
      'Built a LangChain-based RAG workflow using Pinecone vector database with semantic retrieval and context-grounding.',
      'Optimized RAG retrieval with Gemini embeddings, indexing, metadata filtering, reranking, and Redis caching to reduce latency.',
      'Built an async ingestion pipeline and retrieval backend, containerized with Docker and deployed on AWS EC2.',
    ],
  },
  {
    role: 'Machine Learning Engineer — AIP Project',
    company: 'UTMIST, University of Toronto',
    location: 'Toronto, ON',
    date: 'Sep 2024 – Sep 2025',
    bullets: [
      'Built modular pipelines in PyTorch (nnU-Net, UNETR) for medical imaging; implemented uncertainty filtering.',
      'Deployed models via Docker and delivered Python-based CLI/GUI tools; project prepared for open-source release and publication.',
    ],
  },
];

const education = {
  school: 'University of Toronto',
  location: 'Toronto, ON',
  degree: 'Honours Bachelor of Science in Computer Science (Co-op)',
  gpa: '3.98 / 4.00',
  expected: 'Expected May 2027',
  honors: "Dean's List (2023, 2024), University of Toronto Scholar ($7,500 merit award)",
  courses:
    'Software Design, Systems Programming, OOP, Data Structures & Algorithms, Operating Systems, Databases & Web Applications, Machine Learning',
};

const Experience = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4 md:px-16 lg:px-32">
      {/* Education Section */}
      <section className="mb-16 animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-8 flex items-center gap-3">
          <span className="text-teal-400">🎓</span> Education
        </h2>
        <div className="relative border-l-2 border-teal-700 ml-4">
          <div className="ml-8 bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/40 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-teal-900/30 transition-all duration-300">
            <div className="absolute -left-[11px] top-8 w-5 h-5 bg-teal-400 rounded-full border-4 border-black"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <h3 className="text-xl md:text-2xl font-bold text-white font-mono">{education.school}</h3>
              <span className="text-teal-400 font-mono text-sm mt-1 md:mt-0">{education.expected}</span>
            </div>
            <p className="text-gray-300 font-mono text-sm md:text-base mb-1">{education.degree}</p>
            <p className="text-teal-300 font-mono text-sm mb-3">GPA: {education.gpa}</p>
            <p className="text-gray-400 text-sm mb-2">
              <span className="text-yellow-500 font-semibold">Honors: </span>{education.honors}
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-yellow-500 font-semibold">Courses: </span>{education.courses}
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="animate-fadeIn">
        <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-8 flex items-center gap-3">
          <span className="text-teal-400">💼</span> Experience
        </h2>
        <div className="relative border-l-2 border-teal-700 ml-4">
          {experiences.map((exp, idx) => (
            <div key={idx} className="mb-12 ml-8 relative group">
              <div className="absolute -left-[43px] top-2 w-5 h-5 bg-teal-400 rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>
              <div className="bg-gradient-to-br from-teal-950 to-gray-900 border border-teal-800/40 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-teal-900/30 hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                  <h3 className="text-lg md:text-xl font-bold text-white font-mono">{exp.role}</h3>
                  <span className="text-teal-400 font-mono text-sm mt-1 md:mt-0">{exp.date}</span>
                </div>
                <p className="text-gray-400 font-mono text-sm mb-4">
                  {exp.company} · {exp.location}
                </p>
                <ul className="space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300 text-sm leading-relaxed">
                      <span className="text-teal-400 mt-1 flex-shrink-0">▸</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Experience;
