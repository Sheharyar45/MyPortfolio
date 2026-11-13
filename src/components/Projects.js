import React from 'react';
import SectionHeading from './SectionHeading';
import ProjectGallery from './ProjectGallery';
const skills = [
  {
    title: 'Languages',
    items: 'Python, TypeScript, Go, JavaScript, SQL, Java, C#, C++, GraphQL, Ruby, HTML, CSS',
  },
  {
    title: 'Frameworks',
    items: 'React, FastAPI, PyTorch, LangGraph, LangChain, Node.js, TensorFlow, Spring Boot, Scikit-learn, Redux',
  },
  {
    title: 'Developer Tools',
    items: 'AWS, Docker, Kubernetes, Terraform, Claude Code, PostgreSQL, Redis, GCP, Kafka, Linux, Git',
  },
];
export default function Projects() {
  return (
    <>
      <section id="projects" className="content-section" aria-labelledby="projects-heading">
        <SectionHeading number="02" title={<span id="projects-heading">Selected projects</span>} description="Exploring reliable AI infrastructure and more efficient models." />
        <div className="project-grid">
          <article className="project">
            <p className="eyebrow">OPEN-SOURCE · AGENT INFRASTRUCTURE</p><h3>LocAI</h3>
            <p className="project-summary">Long-running AI agents, without losing their place.</p>
            <p>An open-source, model-agnostic runtime that keeps agent context durable, recovers from crashes, and moves sessions from a laptop to the cloud mid-task.</p>
            <ul><li>Adaptive model and tool routing with LangGraph, MCP, and Jev.</li><li>Checkpointed execution and secure sandboxing for reliable local-to-cloud workflows.</li></ul>
            <p className="technology-line">Python · TypeScript · LangGraph · MCP · PostgreSQL · Redis · GCP · AWS EC2</p>
            <a className="text-link" href="https://github.com/Sheharyar45/aegis-relay" target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>
          </article>
          <article className="project">
            <p className="eyebrow">MACHINE LEARNING · RESEARCH</p><h3>PrivateLLM</h3>
            <p className="project-summary">Smaller models. More practical inference.</p>
            <p>ML research in CSC490, a course by Prof. Denys Linkov, exploring LLM distillation and LoRA/QLoRA fine-tuning on enterprise data with PyTorch and Hugging Face.</p>
            <ul><li>Benchmarking GPU inference latency and throughput with quantization, TensorRT-LLM, and ONNX.</li><li>Terraform-managed AWS ETL with S3, Lambda, and DynamoDB for reproducible training and evaluation datasets.</li></ul>
            <p className="technology-line">PyTorch · Hugging Face · LoRA · ONNX · Terraform · AWS EC2</p><span className="project-note">Research in progress</span>
          </article>
        </div>
        <ProjectGallery />
      </section>
      <section id="toolkit" className="content-section skills-section" aria-labelledby="skills-heading">
        <SectionHeading number="03" title={<span id="skills-heading">The toolkit</span>} description="The languages and tools I use to bring ideas to life." />
        <dl className="skills-list">{skills.map(group => <div key={group.title}><dt>{group.title}</dt><dd>{group.items}</dd></div>)}</dl>
      </section>
    </>
  );
}
