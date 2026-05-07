import AUST_PDF from "../assets/Certificates/AUST IUPC 2025.pdf";
import UIU_PDF from "../assets/Certificates/Mohaimin Hossain United International University Team Name_ UIU_UwU .pdf";
import ICPC_2024 from "../assets/Certificates/ICPC Asia Dhaka 2024-Mohaimin Hossain-HONORABLE.pdf";

interface Achievement {
  category: string;
  title: string;
  subtitle?: string;
  pdf: string;
}

const achievements: Achievement[] = [
  {
    category: "IUPC",
    title: "UIU IUPC 2025 — Onsite",
    subtitle: "Ranked 55 / 150 teams",
    pdf: UIU_PDF,
  },
  {
    category: "",
    title: "AUST IUPC 2025 — Onsite",
    subtitle: "",
    pdf: AUST_PDF,
  },
  {
    category: "ICPC",
    title: "ICPC Asia Dhaka 2024 — Onsite",
    subtitle: "Honorable Mention",
    pdf: ICPC_2024,
  },
];

function Achievment() {
  return (
    <div className="cv-card" style={{ marginTop: "1.5rem" }}>
      <h2 className="section-title">Achievements</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {achievements.map((a, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "0.5rem",
              padding: "0.75rem 0",
              borderBottom:
                i < achievements.length - 1
                  ? "1px solid var(--border-color)"
                  : "none",
            }}
          >
            {/* Left */}
            <div
              style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}
            >
              <span className="row-label" style={{ minWidth: "3.5rem" }}>
                {a.category}
              </span>
              <div>
                <p
                  style={{
                    color: "var(--text-primary)",
                    fontFamily: "'Lora', serif",
                    fontSize: "0.9rem",
                    margin: 0,
                  }}
                >
                  {a.title}
                </p>
                {a.subtitle && (
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.68rem",
                      marginTop: "0.15rem",
                    }}
                  >
                    {a.subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Certificate link */}
            <a
              href={a.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="cv-link"
              style={{
                fontSize: "0.68rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                flexShrink: 0,
              }}
            >
              Certificate ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievment;
