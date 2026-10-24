import { Briefcase } from 'lucide-react';
import SectionTitle from '../SectionTitle';
import Badge from '../Badge';
import LogoBox from '../LogoBox';
import { experience } from '../../data/experience';

export default function Experience({ showDescription = true }: { showDescription?: boolean }) {
  return <div className="experience-page">
    <SectionTitle icon={Briefcase} title="Experience" />
    <div className="experience-list">{experience.map(item => <article className="experience-entry" key={item.id}>
      <header className="experience-company-header"><LogoBox src={item.logo} alt={`${item.company} logo`} icon={Briefcase} className="experience-logo" /><div><h3>{item.company}</h3><p>{item.location}</p></div></header>
      <div className="experience-role-list">{item.roles.map(role => <section className="experience-role" key={role.id}>
        <div className="experience-role-heading"><h4 className="experience-role-title">{role.position}</h4><span>{role.startDate} – {role.endDate}</span></div>
        {showDescription && <ul className="experience-highlights">{role.description.map((point, index) => <li key={index}>{point}</li>)}</ul>}
        {showDescription && role.technologies && <div className="experience-tags">{role.technologies.map(tech => <Badge key={tech}>{tech}</Badge>)}</div>}
      </section>)}</div>
    </article>)}</div>
  </div>;
}
