export const archivedProjects = [
  {
    title: 'DocRAG — AI Note-Taking Platform',
    techs: ['AWS Bedrock', 'Claude', 'FastAPI', 'React', 'Supabase', 'LangChain', 'Pinecone', 'Docker'],
    description:
      'Led 4 developers building an AI note-taking app with RAG-powered semantic retrieval, JWT auth, and scalable microservices.',
    bullets: [
      'Built with AWS Bedrock (Claude), Python FastAPI microservices, React (TypeScript), and Supabase (PostgreSQL).',
      'Implemented a LangChain-based RAG workflow using Pinecone vector database with semantic retrieval and context-grounding.',
      'Optimized retrieval with Gemini embeddings, indexing, metadata filtering, reranking, and Redis caching.',
      'Built an async ingestion pipeline, containerized with Docker, and deployed on AWS EC2.',
    ],
    link: 'https://github.com/Sheharyar45/DocRAG',
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
    link: 'https://github.com/Sheharyar45/Stockgram',
  },
  {
    title: 'BrowserBuddy — Agentic AI Browser Extension',
    techs: ['LangGraph', 'MCP', 'LLM Agents', 'Python', 'Redis', 'TypeScript', 'FastAPI'],
    description:
      'Built an agentic AI browser extension for Q&A, similarity search, and price comparison with reasoning-driven workflows.',
    bullets: [
      'Developed multi-agentic LLM workflows using FastAPI and LangGraph with intent-based MCP tool orchestration.',
      'Implemented Q&A, semantic similarity search, and intelligent price comparison directly in the browser experience.',
      'Built a scalable and secure architecture with embeddings, vector search, Redis memory, and prompt-injection guardrails.',
    ],
    link: 'https://www.youtube.com/watch?v=g3NLOJYOJjY',
    youtube: 'https://www.youtube.com/embed/g3NLOJYOJjY',
    demoStatus: 'private',
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
    link: 'https://github.com/Sheharyar45/TrashNinja',
    video: '/trashninja.MP4',
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
    link: 'https://github.com/Sheharyar45/Sysmon',
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
    link: 'https://github.com/Sheharyar45/Planetze',
    youtube: 'https://www.youtube.com/embed/CmcZNj1sjiQ',
    demoStatus: 'unavailable',
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
    link: null,
    video: '/video.mov',
  },
];
