import Certifications from "./Certifications";
import TechStack from "./TechStack";

export default function CertificationsPage() {
  return (
    <div className="certification-page py-8 md:py-10">
      <div className="certification-page-content space-y-12">
        <Certifications />

        <div className="certification-tech-section border-t border-border pt-10">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
