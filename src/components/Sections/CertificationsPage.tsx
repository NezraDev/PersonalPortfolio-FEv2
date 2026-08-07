import Certifications from "./Certifications";
import TechStack from "./TechStack";

export default function CertificationsPage() {
  return (
    <div className="py-8 md:py-10">
      <div className="space-y-12">
        <Certifications />

        <div className="border-t border-border pt-10">
          <TechStack />
        </div>
      </div>
    </div>
  );
}
