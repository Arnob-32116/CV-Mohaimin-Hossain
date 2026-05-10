import SideBar from "./components/SideBar";
import PdfOpener from "./components/PdfOpener";
import BasicCards from "./components/BasicCards";
import EducationCard from "./components/EducationCard";
import Experience from "./components/ExperienceCard";
import Skills from "./components/SkillsCard";
import Achievment from "./components/AchievmentsCard";

export default function App() {
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <div className="flex">
        <SideBar />
        <main className="flex-1 w-full min-h-screen pt-24 px-8 md:ml-64 md:px-16">
          <div className="flex flex-row justify-between items-start w-full mt-5">
            <span className="cv-title">CV</span>
            <PdfOpener />
          </div>
          <div style={{ marginTop: "2rem" }}>
            <section id="basic" className="observe-card">
              <BasicCards />
            </section>
            <section id="education" className="observe-card">
              <EducationCard />
            </section>
            <section id="exp" className="observe-card">
              <Experience />
            </section>
            <section id="skills" className="observe-card">
              <Skills />
            </section>
            <section id="achievements" className="observe-card">
              <Achievment />
            </section>
          </div>
          <footer
            style={{
              marginTop: "4rem",
              paddingBottom: "2rem",
              borderTop: "1px solid var(--border-color)",
              paddingTop: "1.5rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
                letterSpacing: "0.08em",
              }}
            >
              MOHAIMIN HOSSAIN
            </span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.7rem",
                color: "var(--text-muted)",
              }}
            >
              {new Date().getFullYear()}
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}
