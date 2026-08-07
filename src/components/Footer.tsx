import { socials } from "../data/social";
import SocialIcons from "./SocialIcons";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-ink-muted">
            © {year} Arwil Martin S. Paraiso. All rights reserved.
          </p>
          <SocialIcons
            socials={socials.filter(
              (s) =>
                s.icon === "github" ||
                s.icon === "linkedin" ||
                s.icon === "mail",
            )}
          />
        </div>
      </Container>
    </footer>
  );
}
