import React from 'react';
export default function SectionHeading({ number, title, description }) {
  return (
    <div className="section-heading">
      <div className="section-title"><span className="section-number" aria-hidden="true">{number}</span><h2>{title}</h2></div>
      {description && <p>{description}</p>}
    </div>
  );
}
