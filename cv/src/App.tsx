import { createContext, useContext, useEffect, useState } from "react";
import NavBar from "./components/Navbar";
import SideBar from "./components/SideBar";
import PdfOpener from "./components/PdfOpener";
import BasicCards from "./components/BasicCards";
import EducationCard from "./components/EducationCard";
import Experience from "./components/ExperienceCard";
import Skills from "./components/SkillsCard";
import Achievment from "./components/AchievmentsCard";

// ── Theme Context ──────────────────────────────────────────
export const ThemeContext = createContext<{
  theme: "dark" | "light";
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", position: "relative", zIndex: 1 }}>
        <div className="flex flex-col">
          <div className="z-50">
            <NavBar />
            <div className="flex">
              <SideBar />
              <main className="flex-1 w-full min-h-screen pt-24 px-8 md:ml-64 md:px-16">
                {/* CV Header */}
                <div className="flex flex-row justify-between items-start w-full mt-5">
                  <span className="cv-title">CV</span>
                  <PdfOpener />
                </div>

                {/* Sections */}
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

                {/* Footer */}
                <footer style={{
                  marginTop: "4rem",
                  paddingBottom: "2rem",
                  borderTop: "1px solid var(--border-color)",
                  paddingTop: "1.5rem",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--text-muted)", letterSpacing: "0.08em" }}>
                    MOHAIMIN HOSSAIN
                  </span>
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: "var(--text-muted)" }}>
                    {new Date().getFullYear()}
                  </span>
                </footer>
              </main>
            </div>
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
