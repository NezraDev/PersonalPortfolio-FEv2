import { useState } from 'react';
import { ArrowUpRight, ArrowDownRight, Code2, PenTool, Layers } from 'lucide-react';
import portrait from '../../assets/optimized/portrait.webp';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import CertificationsPage from './CertificationsPage';
import Organization from './Organization';
import ImageLightbox from '../ImageLightbox';
import { projects } from '../../data/project';
import { experience } from '../../data/experience';
import { achievements } from '../../data/achievement';
import { projectImage, projectThumbnail, projectTitle } from '../../utils/projects';

export default function Home() {
  const [preview, setPreview] = useState<{ src: string; alt: string } | null>(null);
  const selected = ['dmsa', 'total-mobile-install', 'remedy', 'music-nook'].map(id => projects.find(project => project.id === id)!).filter(Boolean);
  return <div id="portfolio-overview" className="portfolio-editorial">
    <section className="editorial-introduction">
      <div className="editorial-intro-heading"><h2>Design with clarity.<br /><em>Build with purpose.</em></h2><a className="editorial-link" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View resume <ArrowUpRight size={17} /></a></div>
      <div className="editorial-bio"><img src={portrait} alt="Arwil Martin Paraiso" width={760} height={760} loading="lazy" /><div><h3>Arwil Martin Paraiso</h3><p>Full Stack Web Developer</p><About /></div></div>
    </section>

    <section className="editorial-work">
      <header className="editorial-section-heading"><h2>Selected work</h2><a className="editorial-link" href="/projects">Explore all projects <ArrowUpRight size={17} /></a></header>
      <div className="editorial-projects">{selected.map((project) => <article className={`editorial-project${project.highlighted ? ' editorial-project--highlighted' : ''}`} key={project.id}>
        <button className="editorial-project-image" type="button" aria-label={`Preview ${projectTitle(project.title)}`} onClick={() => setPreview({ src: projectImage(project.coverImage), alt: projectTitle(project.title) })}><img src={projectThumbnail(project.coverImage, 1440)} alt={projectTitle(project.title)} loading="lazy" width={1440} height={810} /></button>
        <div className="editorial-project-copy"><div className="editorial-project-meta"><span>{project.projectType || project.category}</span><span>{project.year}</span></div><h3>{projectTitle(project.title)}</h3><p>{project.description}</p><a className="editorial-link" href={project.liveUrl || '/projects'} target={project.liveUrl ? '_blank' : undefined} rel={project.liveUrl ? 'noopener noreferrer' : undefined}>View project <ArrowUpRight size={16} /></a></div>
      </article>)}</div>
    </section>

    <section className="editorial-capabilities">
      <header className="editorial-section-heading"><h2>From interface<br />to implementation.</h2><p>Design, development, and the technical foundations behind the work.</p></header>
      <div className="editorial-disciplines">
        <article><Code2 size={24} strokeWidth={1.5} /><h3>Full stack web development</h3><p>Complete web applications, connecting responsive interfaces with backend services and databases.</p><span>React / Next.js / Laravel</span></article>
        <article><PenTool size={24} strokeWidth={1.5} /><h3>UI/UX design</h3><p>User flows, wireframes, and interactive prototypes that bring clarity to digital experiences.</p><span>Figma / Prototyping / UI design</span></article>
        <article><Layers size={24} strokeWidth={1.5} /><h3>Backend & databases</h3><p>Application logic, APIs, and data management using Laravel, Python, and relational databases.</p><span>Laravel / Python / MySQL</span></article>
      </div>
      <details className="editorial-disclosure"><summary>Explore the complete toolkit <ArrowDownRight size={18} /></summary><Skills /></details>
    </section>

    <section className="editorial-career">
      <div className="editorial-career-heading"><h2>Experience<br />in practice.</h2><p>Professional, freelance, and leadership roles across software and technical support.</p><a className="editorial-link" href="/experience">Full experience <ArrowUpRight size={17} /></a></div>
      <div className="editorial-current-roles">{experience.slice(0, 3).map(item => <article key={item.id}><img src={item.logo} alt="" width={44} height={44} loading="lazy" /><div><h3>{item.company}</h3>{item.roles.map(role => <div key={role.id}><p>{role.position}</p><span>{role.startDate} – {role.endDate}</span></div>)}</div></article>)}<details className="editorial-disclosure"><summary>View all roles <ArrowDownRight size={18} /></summary><Experience showDescription={false} /></details></div>
    </section>

    <div className="editorial-foundation">
      <section><header className="editorial-section-heading"><h2>Education</h2><a href="/education" className="editorial-link" aria-label="View education"><ArrowUpRight size={19} /></a></header><Education /></section>
      <section><header className="editorial-section-heading"><h2>Community & leadership</h2><a href="/organization" className="editorial-link" aria-label="View organizations"><ArrowUpRight size={19} /></a></header><Organization /></section>
    </div>

    <section className="editorial-recognition"><header className="editorial-section-heading"><h2>Recognition</h2><a href="/achievements" className="editorial-link">Awards & achievements <ArrowUpRight size={17} /></a></header><div className="editorial-awards">{achievements.map(item => <article key={item.id}>{item.image && <button type="button" onClick={() => setPreview({src:item.image!,alt:item.title})} aria-label={`Preview ${item.title}`}><img src={item.image} alt={item.title} loading="lazy" /></button>}<p>{item.date}</p><h3>{item.title}</h3></article>)}</div></section>

    <section className="editorial-learning"><header className="editorial-section-heading"><h2>Always learning.</h2><a href="/certifications" className="editorial-link">View credentials <ArrowUpRight size={17} /></a></header><CertificationsPage /></section>

    <section className="editorial-outro"><div><h2>Let’s make<br /><em>good work happen.</em></h2><p>For roles, projects, and thoughtful collaborations.</p></div><a href="mailto:arwilmartinparaiso.tech@gmail.com" className="editorial-contact-action"><span>Start a conversation</span><ArrowUpRight size={36} strokeWidth={1.3} /></a><a href="/contact" className="editorial-link">All contact details <ArrowUpRight size={16} /></a></section>
    <ImageLightbox src={preview?.src} alt={preview?.alt || 'Project preview'} onClose={() => setPreview(null)} />
  </div>;
}
