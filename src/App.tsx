import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Sections/Home";
import Skills from "./components/Sections/Skills";
import Education from "./components/Sections/Education";
import Experience from "./components/Sections/Experience";
import Projects from "./components/Sections/Projects";
import CertificationsPage from "./components/Sections/CertificationsPage";
import Achievements from "./components/Sections/Achievements";
import Contact from "./components/Sections/Contact";
import Organization from "./components/Sections/Organization";
import { useHashRoute } from "./hooks/useHashRoute";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const { route, navigate } = useHashRoute();

  const renderPage = () => {
    switch (route) {
      case "skills":
        return <Skills />;
      case "education":
        return <Education />;
      case "experience":
        return <Experience />;
      case "organization":
        return <Organization />;
      case "projects":
        return <Projects showFilter />;
      case "certifications":
        return <CertificationsPage />;
      case "achievements":
        return <Achievements />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-surface text-ink transition-colors duration-300">
      <Navbar route={route} navigate={navigate} />

      <div className="mx-auto w-full max-w-5xl px-6 pt-8 md:px-10 md:pt-10">
        <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 lg:items-start lg:min-h-[calc(100vh-4rem)]">
          {route === "home" && (
            <div className="lg:hidden">
              <Sidebar />
            </div>
          )}

          <div className="hidden lg:block lg:sticky lg:top-[6.5rem] lg:self-start lg:h-fit">
            <Sidebar />
          </div>

          <main className="min-w-0 border-t border-border lg:border-t-0 lg:border-l lg:pl-12">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={route}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {renderPage()}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
