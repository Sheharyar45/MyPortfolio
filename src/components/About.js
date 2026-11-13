import React from 'react';
export default function About() {
  return (
    <section id="about" className="intro" aria-labelledby="intro-title">
      <div className="hero reveal">
        <div className="hero-copy">
          <p className="eyebrow">SOFTWARE ENGINEER · TORONTO, CANADA</p>
          <h1 id="intro-title">Sheharyar{' '}<br />Meghani<span>.</span></h1>
          <p className="hero-lead">Reliable systems.<br />Useful AI.</p>
          <p className="hero-description">I enjoy building backend systems and infrastructure that scale. I’m especially interested in machine learning systems and AI engineering: making models efficient to serve and LLM applications reliable in production.</p>
          <p className="hero-description">Right now, I’m a Software Engineer Intern at <a href="#wealthsimple">Wealthsimple</a>, studying computer science and statistics at the University of Toronto.</p>
          <p className="hero-description">Away from the keyboard, I’m usually cooking or playing badminton or cricket. I’m also a bit of a history geek.</p>
          <div className="hero-actions">
            <a className="button-primary" href="#experience">Explore my work <span aria-hidden="true">↓</span></a>
            <a className="text-link" href="mailto:s.meghani@mail.utoronto.ca">Get in touch <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <figure className="portrait">
          <img src="/images/sheharyar-meghani.jpeg" alt="Sheharyar Meghani outdoors" width="800" height="800" fetchpriority="high" />
          <figcaption><span className="portrait-rule" />A little about the person behind the code.</figcaption>
        </figure>
      </div>
      <div className="education-summary">
        <div><p className="eyebrow">EDUCATION</p><h2>University of Toronto</h2><p>B.Sc. in Computer Science · Major in Statistics</p></div>
        <div className="education-details"><p><strong>3.94</strong><span>GPA</span></p><p><strong>May 2028</strong><span>Expected graduation</span></p></div>
      </div>
      <p className="coursework"><span>Coursework</span> Data Structures, Operating Systems, Databases, Object-Oriented Programming, Distributed Systems, Machine Learning, and Networking.</p>
    </section>
  );
}
