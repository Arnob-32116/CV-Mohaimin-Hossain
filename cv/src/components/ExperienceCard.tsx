function Experience() {
  const bullets = [
    "Designed and delivered weekly lessons on competitive programming fundamentals",
    "Mentored and guided students in solving algorithmic problems",
    "Organized multiple programming contests with 100+ participants, including setting and testing original problem sets",
  ];

  return (
    <div className="cv-card" style={{ marginTop: "1.5rem" }}>
      <h2 className="section-title">Experience</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Header row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span className="row-label">Role</span>
            <div>
              <p style={{ color: "var(--text-primary)", fontFamily: "'Lora', serif", fontSize: "0.95rem", fontWeight: 500, margin: 0 }}>
                Beginner CP Instructor
              </p>
              <p style={{ color: "var(--text-secondary)", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", marginTop: "0.2rem" }}>
                United International University
              </p>
            </div>
          </div>

          <div className="date-badge">
            <span>2026.03 — 2026.07</span>
            <span style={{ fontSize: "0.6rem", opacity: 0.75, marginTop: "1px" }}>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Bullets */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span className="row-label" style={{ paddingTop: "0.15rem" }}>Work</span>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {bullets.map((b, i) => (
              <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                <span style={{ color: "var(--accent)", fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", paddingTop: "0.15rem", flexShrink: 0 }}>—</span>
                <span style={{ color: "var(--text-secondary)", fontFamily: "'Lora', serif", fontSize: "0.85rem", lineHeight: "1.6" }}>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
