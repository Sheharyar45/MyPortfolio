import React, { useState } from 'react';

const projects = [
  {
    title: 'Notarag — AI Note-Taking Platform',
    techs: ['AWS Bedrock', 'Claude', 'FastAPI', 'React', 'Supabase', 'LangChain', 'Pinecone', 'Docker'],
    description:
      'Led 4 developers building an AI note-taking app with RAG-powered semantic retrieval, JWT auth, and scalable microservices.',
    bullets: [
      'Built with AWS Bedrock (Claude), Python FastAPI microservices, React (TypeScript), and Supabase (PostgreSQL).',
      'Implemented a LangChain-based RAG workflow using Pinecone vector database with semantic retrieval and context-grounding.',
      'Optimized retrieval with Gemini embeddings, indexing, metadata filtering, reranking, and Redis caching.',
      'Built an async ingestion pipeline, containerized with Docker, and deployed on AWS EC2.',
    ],
    color: 'from-purple-900/40 to-gray-900',
    link: null,
  },
  {
    title: 'Stockgram — Stock Social Network',
    techs: ['Java', 'Spring Boot', 'PostgreSQL', 'Scikit-learn', 'GCP'],
    description:
      'Full-stack stock portfolio platform with social networking, analytics, and ML-powered trend prediction hosted on GCP.',
    bullets: [
      'Built a Java Spring Boot web application hosted on a GCP VM for stock portfolios, analytics, and social networking.',
      'Designed a BCNF-normalized PostgreSQL schema with indexing, caching, and abstractions to reduce query time.',
      'Implemented stock-trend prediction using linear regression and ARIMA on 5 years of data with optimized SQL pipelines.',
    ],
    color: 'from-blue-900/40 to-gray-900',
    link: null,
  },
  {
    title: 'Telecom Customer Churn Predictor',
    techs: ['Python', 'Scikit-learn', 'XGBoost', 'Optuna', 'SHAP', 'FastAPI', 'Pandas'],
    description:
      'End-to-end ML pipeline predicting customer churn with explainability and a deployed REST API.',
    bullets: [
      'Built an end-to-end ML pipeline with scikit-learn to predict customer churn, preprocessing data with Pandas/NumPy.',
      'Benchmarked logistic regression against LightGBM and XGBoost, improving AUC by 24%.',
      'Implemented feature engineering, Optuna hyperparameter tuning, SHAP explainability, and deployed as a FastAPI API.',
    ],
    color: 'from-green-900/40 to-gray-900',
    link: null,
  },
  {
    title: 'TrashNinja — AI Waste Classifier',
    techs: ['Python', 'TensorFlow', 'Flask', 'React Native', 'Hugging Face'],
    description:
      'Mobile app for real-time waste classification using a fine-tuned TensorFlow model, achieving 95% accuracy.',
    bullets: [
      'Served a fine-tuned TensorFlow model to React Native via a Flask REST API, tested with Postman.',
      'Deployed the system on Render and achieved real-time waste classification with 95% accuracy.',
    ],
    color: 'from-orange-900/40 to-gray-900',
    link: null,
    video: '/trashninja.mov',
  },
  {
    title: 'SysMon — Linux Performance Monitor',
    techs: ['C', 'Linux', 'Bash', 'Makefile'],
    description:
      'A systems-level Linux performance monitor built in C with inter-process communication for real-time CPU/RAM metrics.',
    bullets: [
      'Built a Linux performance monitor in C using forks/pipes for IPC and real-time CPU/RAM metrics.',
      'Implemented process synchronization and automated builds with Makefile and Bash.',
    ],
    color: 'from-red-900/40 to-gray-900',
    link: null,
  },
  {
    title: 'Planetze — Carbon Footprint Tracker',
    techs: ['Java', 'Android', 'Firebase', 'JUnit', 'Mockito'],
    description:
      'Android app to track carbon footprints with Firebase auth, MVP architecture, and comprehensive test suites.',
    bullets: [
      'Developed an Android app in Java using Firebase and MVP architectural pattern to track carbon footprints.',
      'Implemented JUnit and Mockito tests with secure login via Firebase to enhance reliability and engagement.',
    ],
    color: 'from-emerald-900/40 to-gray-900',
    link: 'https://youtube.com/watch?v=CmcZNj1sjiQ',
    youtube: 'https://www.youtube.com/embed/CmcZNj1sjiQ',
  },
  {
    title: 'Smart Course App',
    techs: ['Python', 'Flask', 'React', 'SQL', 'Bcrypt'],
    description:
      'Full-stack course management platform with role-based authentication, grade management, and anonymous feedback.',
    bullets: [
      'Built a Full-stack Smart Course app using Flask for the backend REST API, and React with CSS for the frontend.',
      'Implemented user authentication (login/logout) to secure user data using Flask and SQL.',
      'Enabled students to access grades, submit regrade requests, and provide anonymous feedback to instructors.',
      'Reduced administrative workload by 30% by leveraging Flask and SQL for seamless functionality.',
    ],
    color: 'from-cyan-900/40 to-gray-900',
    link: null,
    video: '/video.mov',
  },
];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`group bg-gradient-to-br ${project.color} border border-teal-800/30 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-teal-900/40 hover:-translate-y-2 transition-all duration-500 animate-fadeInUp`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-xl md:text-2xl font-bold text-white font-mono leading-tight pr-2">
          {project.title}
        </h3>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:text-teal-300 transition-colors flex-shrink-0 mt-1"
            title="View Demo"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.techs.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs font-mono rounded-full bg-teal-400/10 text-teal-300 border border-teal-700/40 hover:bg-teal-400/20 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4">{project.description}</p>

      {expanded && (
        <ul className="space-y-2 mb-4 animate-fadeIn">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
              <span className="text-teal-400 mt-0.5 flex-shrink-0">▸</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Video / YouTube Embed */}
      {expanded && project.video && (
        <div className="mb-4 rounded-xl overflow-hidden border border-teal-800/30 animate-fadeIn">
          <p className="text-teal-400 font-mono text-xs mb-2">▶ Video Demo</p>
          <video
            className="w-full rounded-lg"
            controls
            preload="metadata"
          >
            <source src={project.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
      {expanded && project.youtube && (
        <div className="mb-4 rounded-xl overflow-hidden border border-teal-800/30 animate-fadeIn">
          <p className="text-teal-400 font-mono text-xs mb-2">▶ Video Demo</p>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={project.youtube}
              title={`${project.title} demo`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setExpanded(!expanded)}
        className="text-teal-400 hover:text-teal-300 font-mono text-sm transition-colors flex items-center gap-1"
      >
        {expanded ? '← Show Less' : 'Read More →'}
      </button>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-black min-h-screen pt-24 pb-20 px-4 md:px-16 lg:px-32">
      <h2 className="text-3xl md:text-4xl font-bold font-mono text-white mb-4 flex items-center gap-3 animate-fadeIn">
        <span className="text-teal-400">🚀</span> Projects
      </h2>
      <p className="text-gray-400 font-mono text-sm md:text-base mb-12 animate-fadeIn">
        A collection of things I've built — from full-stack apps to ML pipelines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
