import { useEffect, useRef } from 'react';
import { MotionConfig } from 'framer-motion';
import { useProjectDepth } from './hooks/useProjectDepth';
import { usePortfolioMotion } from './hooks/usePortfolioMotion';
import { useHashRoute } from './hooks/useHashRoute';
import Navigation from './components/portfolio/Navigation';
import ProjectSlideshow from './components/portfolio/ProjectSlideshow';
import Home from './components/Sections/Home';
import Skills from './components/Sections/Skills';
import Education from './components/Sections/Education';
import Experience from './components/Sections/Experience';
import Organization from './components/Sections/Organization';
import Projects from './components/Sections/Projects';
import CertificationsPage from './components/Sections/CertificationsPage';
import Achievements from './components/Sections/Achievements';
import Contact from './components/Sections/Contact';
import { ArrowUpRight } from 'lucide-react';

const labels: Record<string, string> = { home: 'Home', skills: 'Skills', education: 'Education', experience: 'Experience', organization: 'Organization', projects: 'Projects', certifications: 'Certifications', achievements: 'Achievements', contact: 'Contact' };
const pageSummaries: Record<string, string> = {
  skills: 'A practical toolkit spanning full stack web development, interface design, and technical support.',
  education: 'Computer science studies and technical training that shape the way I build.',
  experience: 'Professional, freelance, and community work across software and technical support.',
  organization: 'Leadership and service roles alongside academic and professional work.',
  projects: 'Selected products and interfaces, from working websites to design concepts.',
  certifications: 'Credentials and structured learning across software, design, and technology.',
  achievements: 'Recognition for contribution, design, and leadership in the community.',
  contact: 'For roles, projects, and thoughtful collaborations, get in touch.',
};

export default function App() {
  const { route } = useHashRoute();
  const requested = route.split('/')[0];
  const page = labels[requested] ? requested : 'home';
  usePortfolioMotion(page);
  useProjectDepth(page);
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = `${labels[page]} — Arwil Paraiso | Full Stack Web Developer`;
    if (!firstRender.current) mainRef.current?.focus({ preventScroll: true });
    firstRender.current = false;
  }, [page]);
  const renderPage = () => {
    switch (page) {
      case 'skills': return <Skills />;
      case 'education': return <Education />;
      case 'experience': return <Experience />;
      case 'organization': return <Organization />;
      case 'projects': return <Projects showFilter />;
      case 'certifications': return <CertificationsPage />;
      case 'achievements': return <Achievements />;
      case 'contact': return <Contact />;
      default: return <><ProjectSlideshow /><div className="page-width home-details"><Home /></div></>;
    }
  };
  return <MotionConfig reducedMotion="user" transition={{ ease: [0.16, 1, 0.3, 1] }}>
    <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); mainRef.current?.focus(); }}>Skip to content</a>
    <Navigation page={page} />
    {page === 'home' ? <main id="main" ref={mainRef} tabIndex={-1}>{renderPage()}</main> : <div className="page-width route-shell" data-route={page}><main id="main" ref={mainRef} className="route-main" tabIndex={-1}>
      <header className="route-heading">
        <div className="route-heading-row">
          <div className="route-heading-copy">
            <h1>{labels[page]}</h1>
            <p>{pageSummaries[page]}</p>
          </div>
        </div>
      </header>
      <div key={page} className={`route-content route-content--${page}`}>{renderPage()}</div>
    </main></div>}
    <footer className={`site-footer page-width${page === 'home' ? '' : ' site-footer--route'}`}><a className="wordmark" href="#/home">nezra<span>.</span></a><p>Full stack web development. Thoughtful execution.</p><a className="text-link" href="mailto:arwilmartinparaiso.tech@gmail.com">Let's talk <ArrowUpRight size={16} /></a></footer>
  </MotionConfig>;
}
