import React, { useEffect, useRef, useState } from 'react';
import { archivedProjects } from '../data/archivedProjects';

export default function ProjectGallery() {
  const trackRef = useRef(null);
  const dialogRef = useRef(null);
  const [edges, setEdges] = useState({ previous: false, next: true });
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    const updateEdges = () => {
      const next = {
        previous: track.scrollLeft > 8,
        next: track.scrollLeft < track.scrollWidth - track.clientWidth - 8,
      };
      setEdges(previous => previous.previous === next.previous && previous.next === next.next ? previous : next);
    };
    const resizeObserver = new ResizeObserver(updateEdges);
    resizeObserver.observe(track);
    track.addEventListener('scroll', updateEdges, { passive: true });
    updateEdges();
    return () => {
      resizeObserver.disconnect();
      track.removeEventListener('scroll', updateEdges);
    };
  }, []);

  useEffect(() => {
    if (!selectedProject) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedProject]);

  const slide = direction => {
    const track = trackRef.current;
    const step = track.firstElementChild.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap);
    track.scrollBy({ left: direction * step, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <div id="more-projects" className="project-archive">
      <div className="archive-heading">
        <div><h3>More projects</h3><p>Eight more things I’ve built. Explore the details and demos.</p></div>
        <div className="gallery-controls">
          <button type="button" aria-label="Previous projects" aria-controls="project-gallery" onClick={() => slide(-1)} disabled={!edges.previous}><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Next projects" aria-controls="project-gallery" onClick={() => slide(1)} disabled={!edges.next}><span aria-hidden="true">→</span></button>
        </div>
      </div>
      <div id="project-gallery" className="project-gallery" ref={trackRef} role="region" aria-label="More projects, scroll horizontally" tabIndex={0}>
        {archivedProjects.map((project, index) => (
          <article className="archive-card" key={project.title}>
            <div className="archive-card-meta"><span>{String(index + 1).padStart(2, '0')} / {String(archivedProjects.length).padStart(2, '0')}</span>{(project.video || project.youtube) && <span className="demo-label"><span aria-hidden="true">▷</span> {project.demoStatus ? 'Demo link' : 'Video demo'}</span>}</div>
            <h4>{project.title.split(' — ')[0]}</h4>
            <p className="archive-summary">{project.description}</p>
            <p className="technology-line">{project.techs.slice(0, 3).join(' · ')}{project.techs.length > 3 && <span> +{project.techs.length - 3}</span>}</p>
            <button type="button" className="archive-expand text-link" onClick={() => setSelectedProject(project)} aria-haspopup="dialog" aria-label={`Explore ${project.title.split(' — ')[0]}`}>
              {project.video || project.youtube ? 'Details & demo' : 'View details'} <span aria-hidden="true">↗</span>
            </button>
          </article>
        ))}
      </div>
      <p className="gallery-hint">Scroll or swipe to explore <span aria-hidden="true">⟷</span></p>
      <dialog ref={dialogRef} className="project-dialog" aria-labelledby="project-dialog-title" onClose={() => setSelectedProject(null)} onClick={event => { if (event.target === event.currentTarget) dialogRef.current.close(); }}>
        {selectedProject && <div className="project-dialog-content">
          <div className="dialog-header"><p className="eyebrow">PROJECT NOTES</p><button type="button" className="dialog-close" aria-label="Close project details" onClick={() => dialogRef.current.close()}><span aria-hidden="true">×</span></button></div>
          <h2 id="project-dialog-title">{selectedProject.title}</h2>
          <p className="dialog-description">{selectedProject.description}</p>
          <p className="technology-line">{selectedProject.techs.join(' · ')}</p>
          <ul className="dialog-bullets">{selectedProject.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
          {selectedProject.video && <div className="project-demo">
            <h3>Watch the demo</h3>
            <video controls playsInline preload="metadata" src={selectedProject.video} aria-label={`${selectedProject.title.split(' — ')[0]} video demo`}>
              Your browser does not support this video. Use the link below to open it.
            </video>
            <a className="text-link" href={selectedProject.video} target="_blank" rel="noreferrer">Open video <span aria-hidden="true">↗</span></a>
          </div>}
          {selectedProject.youtube && <div className="project-demo">
            <h3>Watch the demo</h3>
            {selectedProject.demoStatus ? <p className="demo-availability">This YouTube demo is currently {selectedProject.demoStatus}.</p> : <iframe src={selectedProject.youtube} title={`${selectedProject.title.split(' — ')[0]} video demo`} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen />}
            <a className="text-link" href={selectedProject.youtube.replace('/embed/', '/watch?v=')} target="_blank" rel="noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
          </div>}
          {selectedProject.link && !selectedProject.link.includes('youtube.com') && <a className="text-link dialog-source" href={selectedProject.link} target="_blank" rel="noreferrer">View on GitHub <span aria-hidden="true">↗</span></a>}
        </div>}
      </dialog>
    </div>
  );
}
