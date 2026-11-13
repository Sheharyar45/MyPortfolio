import React from 'react';
import SectionHeading from './SectionHeading';

const experiences = [
  {
    id: 'wealthsimple', company: 'Wealthsimple', date: 'Sep — Dec 2026', location: 'Toronto, ON',
    focus: 'Developer infrastructure & AI tooling',
    bullets: [
      <>Improving build pipelines and deployment infrastructure using Ruby, GraphQL, TypeScript/React, Docker, Kubernetes, and Terraform.</>,
      <>Developing the team’s software factory, including PR triage and verification layers, to increase PR throughput while reducing regressions.</>,
    ],
    technologies: 'Ruby · GraphQL · TypeScript · React · Docker · Kubernetes · Terraform · AWS · Cloudflare · MCP',
  },
  {
    id: 'stackadapt', company: 'StackAdapt', date: 'May — Aug 2026', location: 'Toronto, ON',
    focus: 'Faster reporting & more capable agents',
    bullets: [
      <>Cut report load times from <strong>60s to 4.5s</strong> for <strong>25K+ advertisers</strong> by replacing full REST fetches with GraphQL server-side pagination using Rails, Go, and AWS Redshift.</>,
      <>Reduced agent file-export timeouts <strong>90%</strong> across 150+ weekly sessions through asynchronous polling and reliable AWS S3 delivery, helping increase agent adoption 30%.</>,
      <>Built <strong>6+ MCP tools</strong> connecting an internal AI agent to production GraphQL APIs. Improved task success from <strong>65% to 92%</strong> with RAG context, guardrails, automated evaluations, and Grafana observability.</>,
    ],
    technologies: 'GraphQL · Rails · Go · AWS Redshift · S3 · MCP · Grafana',
  },
  {
    id: 'geotab', company: 'Geotab', date: 'May — Dec 2025', location: 'Toronto, ON',
    focus: 'Fleet systems at scale',
    bullets: [
      <>Doubled SQL batch throughput to <strong>21K+ devices per run</strong> by profiling query plans and restructuring C# queries to reduce table scans and database I/O.</>,
      <>Built an extensible Claude AI agent to generate Storybook components, saving <strong>8 hours per sprint</strong> and enabling reuse across 2+ teams with feedback-driven improvements and least-privilege tooling.</>,
      <>Reduced latency <strong>33% for 100K+ users</strong> through React Query, code-splitting, and lazy loading.</>,
    ],
    technologies: 'C# · SQL · React · React Query · Storybook · Claude',
  },
  {
    id: 'adamjee', company: 'Adamjee Life Insurance', date: 'May — Aug 2024', location: 'Remote',
    focus: 'Event-driven services & backend performance',
    bullets: [
      <>Reduced policy quote latency <strong>25%</strong> by optimizing FastAPI REST APIs with Redis caching and asynchronous processing.</>,
      <>Built event-driven AWS Lambda services with Python and PostgreSQL for <strong>10K+ policyholders</strong>, scaling claims processing and cutting annual compute costs <strong>$6K</strong>.</>,
      <>Built a Kafka event pipeline across <strong>30+ microservices</strong> handling <strong>20K events/min</strong> at peak traffic and reducing cross-service failures <strong>40%</strong>.</>,
    ],
    technologies: 'Python · FastAPI · Redis · AWS Lambda · PostgreSQL · Kafka',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="content-section" aria-labelledby="experience-heading">
      <SectionHeading number="01" title={<span id="experience-heading">Experience</span>} description="Building better systems, one meaningful problem at a time." />
      <div className="experience-list">
        {experiences.map(job => (
          <article key={job.id} id={job.id} className="experience-row">
            <div className="experience-meta">
              <p className="date-label">{job.date}</p><h3>{job.company}</h3><p className="role">Software Engineer Intern</p><p className="location">{job.location}</p>
            </div>
            <div className="experience-body">
              <h4>{job.focus}</h4><ul>{job.bullets.map((bullet, index) => <li key={index}>{bullet}</li>)}</ul><p className="technology-line">{job.technologies}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
