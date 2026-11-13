import React from 'react';
export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div>
        <p className="eyebrow">HAVE SOMETHING IN MIND?</p><h2 id="contact-heading">Let’s make{' '}<br />something useful<span>.</span></h2>
        <p>I’m always happy to talk software, explore an idea, or meet people building interesting things.</p>
        <a className="contact-email" href="mailto:s.meghani@mail.utoronto.ca">s.meghani@mail.utoronto.ca <span aria-hidden="true">↗</span></a>
      </div>
      <div className="contact-links">
        <a href="https://linkedin.com/in/sheharyar-meghani" target="_blank" rel="noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
        <a href="https://github.com/Sheharyar45" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a href="tel:+14372452231">+1 437 245 2231 <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}
