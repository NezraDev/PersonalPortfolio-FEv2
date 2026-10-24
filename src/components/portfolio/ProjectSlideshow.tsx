import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useReducedMotion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Expand } from 'lucide-react';
import { projects } from '../../data/project';
import { projectImage, projectThumbnail, projectTitle } from '../../utils/projects';
import ImageLightbox from '../ImageLightbox';

export default function ProjectSlideshow() {
  const [index, setIndex] = useState(() => Math.max(0, projects.findIndex(item => item.id === 'dmsa')));
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(() => !document.hidden);
  const [preview, setPreview] = useState(false);
  const [failed, setFailed] = useState<string[]>([]);
  const root = useRef<HTMLElement>(null);
  const elapsed = useRef(0);
  const progress = useMotionValue(0);
  const reduced = useReducedMotion();
  const inView = useInView(root, { amount: 0.2 });
  const playing = !reduced && !hovered && !focused && visible && inView && !preview;
  const project = projects[index];

  useEffect(() => {
    const change = () => setVisible(!document.hidden);
    document.addEventListener('visibilitychange', change);
    return () => document.removeEventListener('visibilitychange', change);
  }, []);

  useEffect(() => {
    if (!playing) return;
    let previous = performance.now();
    let frame: number;
    const tick = (now: number) => {
      elapsed.current += now - previous;
      previous = now;
      if (elapsed.current >= 5000) {
        elapsed.current = 0;
        progress.set(0);
        setIndex(current => (current + 1) % projects.length);
        return;
      }
      progress.set(elapsed.current / 5000);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing, index, progress]);

  const selectProject = (selected: number) => {
    elapsed.current = 0;
    progress.set(0);
    setIndex(selected);
  };
  const next = (direction: number) => selectProject((index + direction + projects.length) % projects.length);
  const projectHref = project.liveUrl || '#/projects';
  const projectAction = project.category === 'UI/UX Design' ? 'View design' : project.liveUrl ? 'Visit project' : 'Explore project';

  return <section
    className="immersive-hero"
    ref={root}
    aria-labelledby="hero-title"
    onFocusCapture={event => setFocused(event.target.matches(':focus-visible'))}
    onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}
    onKeyDown={event => {
      if (event.target instanceof HTMLSelectElement) return;
      if (event.key === 'ArrowRight') { event.preventDefault(); next(1); }
      if (event.key === 'ArrowLeft') { event.preventDefault(); next(-1); }
    }}
  >
    <div className="hero-image-window" role="region" aria-roledescription="carousel" aria-label="All portfolio projects">
      <motion.div className="hero-image-track" animate={{ x: `-${index * 100}%` }} transition={{ duration: reduced ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}>
        {projects.map((item, itemIndex) => <div className="hero-image-slide" key={item.id} id={`hero-project-${item.id}`} role="group" aria-roledescription="slide" aria-label={`${itemIndex + 1} of ${projects.length}: ${projectTitle(item.title)}`} aria-hidden={itemIndex !== index} inert={itemIndex !== index}>
          {failed.includes(item.id) ? <div className="hero-image-fallback" /> : <img
            className="hero-background-image"
            src={projectThumbnail(item.coverImage, 1440)}
            srcSet={`${projectThumbnail(item.coverImage, 720)} 720w, ${projectThumbnail(item.coverImage, 1440)} 1440w`}
            sizes="100vw"
            alt=""
            loading={item.id === 'dmsa' ? 'eager' : 'lazy'}
            fetchPriority={item.id === 'dmsa' ? 'high' : undefined}
            width={1920}
            height={1080}
            onError={() => setFailed(current => [...current, item.id])}
          />}
        </div>)}
      </motion.div>
    </div>
    <div className="hero-image-shade" aria-hidden="true" />
    <div className="hero-content page-width">
      <div className="hero-story">
        <p className="hero-eyebrow"><span className="status-dot" aria-hidden="true" />Full Stack Web Developer</p>
        <h1 id="hero-title">Thoughtful design.<br /><em>Powerful execution.</em></h1>
        <p className="hero-intro">I turn ideas into responsive websites, useful interfaces, and digital experiences built with purpose.</p>

        <div className="hero-featured-project" aria-live={playing ? 'off' : 'polite'}>
          <div className="hero-project-meta"><span>{project.category === 'UI/UX Design' ? 'UI/UX Design' : 'Web Development'}</span><span>{project.year}{project.id === 'rooftop' ? ' · In progress' : ''}</span></div>
          <h2>{projectTitle(project.title)}</h2>
          <p>{project.description}</p>
        </div>

        <div className="hero-actions">
          <a className="button-primary" href={projectHref} target={project.liveUrl ? '_blank' : undefined} rel={project.liveUrl ? 'noopener noreferrer' : undefined}>{projectAction} <ArrowUpRight size={17} /></a>
          <a className="button-secondary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={16} /></a>
        </div>
      </div>

      <button type="button" className="hero-preview-trigger" aria-label={`Preview ${projectTitle(project.title)} screenshot`} onClick={() => setPreview(true)} disabled={failed.includes(project.id)}><Expand size={16} /><span>Preview project</span></button>

      <div className="hero-footer">
        <button className="hero-scroll-link" type="button" onClick={() => document.getElementById('portfolio-overview')?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' })}>
          <span className="hero-scroll-icon"><ArrowDown size={17} /></span>
          <span>Explore my portfolio<small>Los Baños, Philippines</small></span>
        </button>

        <div className="hero-controls" aria-label="Project slideshow controls">
          <p id="hero-rotation-note" className="sr-only">{reduced ? 'Select a marker to view a project.' : 'The active marker fills over five seconds until the next project. Rotation pauses while markers are hovered or keyboard controls are focused.'}</p>
          <div className="hero-pagination" role="group" aria-label="Choose a project" aria-describedby="hero-rotation-note" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            {projects.map((item, itemIndex) => <button
              className={index === itemIndex ? 'hero-indicator is-active' : 'hero-indicator'}
              key={item.id}
              type="button"
              aria-label={`Show project ${itemIndex + 1}: ${projectTitle(item.title)}`}
              aria-pressed={index === itemIndex}
              aria-controls={`hero-project-${item.id}`}
              onClick={() => selectProject(itemIndex)}
            ><span>{index === itemIndex && <motion.i aria-hidden="true" style={{ scaleX: reduced ? 1 : progress }} />}</span></button>)}
          </div>
        </div>
      </div>
    </div>
    <ImageLightbox src={preview ? projectImage(project.coverImage) : undefined} alt={projectTitle(project.title)} onClose={() => setPreview(false)} />
  </section>;
}
