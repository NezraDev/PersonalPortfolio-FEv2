import { ArrowUpRight, Code2, Layers, PenTool } from 'lucide-react';
export default function Services() {
  return <section className="services-page" aria-label="Services">
      <div className="editorial-disciplines">
        <article><Code2 size={24} strokeWidth={1.5} /><h2>Full stack web development</h2><p>Complete web applications, connecting responsive interfaces with backend services and databases.</p><span>React / Next.js / Laravel</span></article>
        <article><PenTool size={24} strokeWidth={1.5} /><h2>UI/UX design</h2><p>User flows, wireframes, and interactive prototypes that bring clarity to digital experiences.</p><span>Figma / Prototyping / UI design</span></article>
        <article><Layers size={24} strokeWidth={1.5} /><h2>Backend & databases</h2><p>Application logic, APIs, and data management using Laravel, Python, and relational databases.</p><span>Laravel / Python / MySQL</span></article>
      </div>
    <a className="button-primary" href="/contact">Discuss your project <ArrowUpRight size={18} /></a>
  </section>;
}
