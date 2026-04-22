import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/Navbar";
import About from "./components/About";
import SideBar from "./components/SideBar";
import PdfOpener from "./components/PdfOpener";
import BasicCards from "./components/BasicCards";
import EducationCard from "./components/EducationCard";
import Experience from "./components/ExperienceCard";
import Skills from "./components/SkillsCard";
import Achievment from "./components/AchievmentsCard";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Whole Page */}
        <div className="flex flex-col">
          <div className="z-50">
            <NavBar></NavBar>
            <div className="flex">
              {/* The Sidebar */}
              <SideBar />

              {/* Main Content Area */}
              {/* md:ml-64 ensures it doesn't hide behind the sidebar on desktop.
      pt-24 ensures it doesn't hide behind the top navbar. 
      w-full ensures it takes up the remaining space. */}
              <main className="flex-1 w-full min-h-screen pt-24 px-8 md:ml-64 md:px-16">
                {/* The CV Header Section */}
                {/* justify-between is the magic class that pushes them to opposite ends */}
                <div className="flex flex-row justify-between items-start w-full text-amber-50">
                  {/* Left Side: CV Text */}
                  <p className="text-4xl md:text-6xl font-semibold tracking-wide mt-5">
                    CV
                  </p>

                  {/* Right Side: The PDF Opener Component */}
                  <PdfOpener />
                </div>
                <div className="text-white">
                  <section id="basic" className="observe-card">
                    <BasicCards></BasicCards>
                  </section>

                  <section id="education" className="observe-card">
                    <EducationCard></EducationCard>
                  </section>

                  <section id="exp" className="observe-card">
                    <Experience></Experience>
                  </section>

                  <section id="skills" className="observe-card">
                    <Skills></Skills>
                  </section>

                  <section id="achievements" className="observe-card">
                    <Achievment></Achievment>
                  </section>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
