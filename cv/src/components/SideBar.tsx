import { useState, useEffect, useRef } from "react";

interface MenuItem {
  id: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { id: "basic", label: "Basics" },
  { id: "education", label: "Education" },
  { id: "exp", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "achievements", label: "Achievements" },
];

function SideBar() {
  const [activeId, setActiveId] = useState<string>("");
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratiosRef.current[e.target.id] = e.intersectionRatio;
        });
        let maxRatio = 0,
          bestId = "";
        for (const [id, ratio] of Object.entries(ratiosRef.current)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = id;
          }
        }
        if (bestId && maxRatio > 0) setActiveId(bestId);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0] },
    );
    document
      .querySelectorAll(".observe-card")
      .forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <aside
      className="sidebar"
      style={{
        position: "fixed",
        top: "57px",
        left: 0,
        zIndex: 40,
        width: "13rem",
        height: "calc(100vh - 57px)",
        paddingTop: "2rem",
        transform: "translateX(-100%)",
      }}
      // Show on md+: handled via a style tag below
    >
      {/* Inline responsive override — works without Tailwind md: prefix */}
      <style>{`@media (min-width: 768px) { aside#cv-sidebar { transform: translateX(0) !important; } }`}</style>

      <div style={{ padding: "0 0.75rem", overflowY: "auto", height: "100%" }}>
        {/* Section label */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.6rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "0.75rem",
            paddingLeft: "0.6rem",
          }}
        >
          Contents
        </p>

        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            display: "flex",
            flexDirection: "column",
            gap: "2px",
          }}
        >
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                className={`sidebar-btn${activeId === item.id ? " active" : ""}`}
                onClick={() => scrollTo(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

// Attach id so CSS media query can target it
const SideBarWrapper = () => {
  return (
    <div>
      <SideBar />
      {/* Invisible element to carry the id for CSS targeting */}
      <style>{`
        aside.sidebar { } 
      `}</style>
    </div>
  );
};

// Simpler: just add id directly
function SideBarFinal() {
  const [activeId, setActiveId] = useState<string>("");
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          ratiosRef.current[e.target.id] = e.intersectionRatio;
        });
        let maxRatio = 0,
          bestId = "";
        for (const [id, ratio] of Object.entries(ratiosRef.current)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            bestId = id;
          }
        }
        if (bestId && maxRatio > 0) setActiveId(bestId);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.5, 0.7, 1.0] },
    );
    document
      .querySelectorAll(".observe-card")
      .forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          #cv-sidebar { transform: translateX(0) !important; }
        }
      `}</style>
      <aside
        id="cv-sidebar"
        className="sidebar"
        style={{
          position: "fixed",
          top: "57px",
          left: 0,
          zIndex: 40,
          width: "13rem",
          height: "calc(100vh - 57px)",
          paddingTop: "2rem",
          transform: "translateX(-100%)",
          transition: "transform 0.3s ease, background 0.4s ease",
        }}
      >
        <div
          style={{ padding: "0 0.75rem", overflowY: "auto", height: "100%" }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "0.75rem",
              paddingLeft: "0.6rem",
            }}
          ></p>
          <ul
            style={{
              listStyle: "none",
              margin: 0,
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "2px",
            }}
          >
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`sidebar-btn${activeId === item.id ? " active" : ""}`}
                  onClick={() => scrollTo(item.id)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBarFinal;
