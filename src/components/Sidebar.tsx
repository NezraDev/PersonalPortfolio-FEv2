import { ArrowUpRight, Mail } from 'lucide-react';
import portrait from '../assets/optimized/portrait.webp';
import { socials } from '../data/social';

export default function Sidebar() {
  return <div className="profile-card">
    <img className="profile-photo" src={portrait} alt="Arwil Martin Paraiso" width={760} height={760} />
    <h2>Arwil Martin Paraiso</h2><p className="profile-role">Full Stack<br />Web Developer</p>
    <p className="profile-description">Computer Science student building thoughtful interfaces and practical digital solutions.</p>
    <div className="profile-location"><span className="status-dot" />Los Baños, Philippines</div>
    <a className="button-primary" href="/Resume.pdf" target="_blank" rel="noopener noreferrer">View résumé <ArrowUpRight size={17} /></a>
    <div className="profile-socials">{socials.filter(item => ['github', 'linkedin'].includes(item.id)).map(item => <a className="text-link" key={item.id} href={item.url} target="_blank" rel="noopener noreferrer">{item.id === 'github' ? 'GitHub' : 'LinkedIn'} <ArrowUpRight size={14} /></a>)}<a className="text-link" href="mailto:arwilmartinparaiso.tech@gmail.com"><Mail size={14} /> Email</a></div>
  </div>;
}
