import { motion, useScroll, useSpring, useReducedMotion, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const navigation = [
  ['home', 'Home'], ['services', 'Services'], ['skills', 'Skills'], ['education', 'Education'],
  ['experience', 'Experience'], ['organization', 'Organization'],
  ['projects', 'Projects'], ['certifications', 'Certifications'],
  ['achievements', 'Achievements'], ['contact', 'Contact'],
];

export default function Navigation({ page }: { page: string }) {
  const { scrollYProgress, scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(() => window.scrollY > 48);
  useMotionValueEvent(scrollY, 'change', value => setScrolled(value > 48));
  const progress = useSpring(scrollYProgress, { stiffness: 180, damping: 32, mass: 0.2 });
  const reduced = useReducedMotion();
  const [open, setOpen] = useState(false);
  const trigger = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!open) return;
    menu.current?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menu.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') { setOpen(false); trigger.current?.focus(); } };
    const outside = (event: PointerEvent) => { if (!menu.current?.contains(event.target as Node) && !trigger.current?.contains(event.target as Node)) setOpen(false); };
    window.addEventListener('keydown', key);
    window.addEventListener('pointerdown', outside);
    const resize = () => { if (window.innerWidth > 1100) setOpen(false); };
    window.addEventListener('resize', resize);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('resize', resize); window.removeEventListener('keydown', key); window.removeEventListener('pointerdown', outside); };
  }, [open]);
  const links = navigation.map(([id, label]) => <a key={id} href={id === 'home' ? '/' : `/${id}`} className={page === id ? 'is-current' : ''} aria-current={page === id ? 'page' : undefined} onClick={() => setOpen(false)}>{label}</a>);
  return <header className={`site-header ${page === 'home' ? 'home-header' : ''}${scrolled ? ' is-scrolled' : ''}`}>
    <motion.div className="reading-progress" aria-hidden="true" style={{ scaleX: reduced ? scrollYProgress : progress }} />
    <div className="page-width header-inner">
      <a className="wordmark" href="/" aria-label="Nezra - home" onClick={() => setOpen(false)}>nezra<span>.</span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">{links}</nav>
      <div className="header-actions">
        <a className="header-cta" href="/contact">Contact <ArrowUpRight size={15} /></a>
        <a className="resume-link" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume <ArrowUpRight size={15} /></a>
        <button ref={trigger} className="icon-button menu-trigger" type="button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
      </div>
    </div>
    {open && <dialog className="mobile-navigation" ref={menu} id="mobile-navigation" aria-label="Navigation" onCancel={event => { event.preventDefault(); setOpen(false); }}>
      <div className="mobile-menu-heading"><span>Explore the portfolio</span><button className="icon-button" type="button" aria-label="Close navigation" onClick={() => setOpen(false)}><X size={22} /></button></div>
      <nav aria-label="Mobile navigation">{links}</nav>
      <a className="mobile-resume" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Download resume <ArrowUpRight size={18} /></a>
    </dialog>}
  </header>;
}
