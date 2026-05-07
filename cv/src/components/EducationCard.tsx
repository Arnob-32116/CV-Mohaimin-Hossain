function Education() {
  const courses = [
    "Data Structures and Algorithms",
    "Object Oriented Programming",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Programming",
    "Artificial Intelligence",
    "Machine Learning",
  ];

  return (
    <div className="cv-card" style={{ marginTop: "1.5rem" }}>
      <h2 className="section-title">Education</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Header row */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span className="row-label">B.Sc.</span>
            <div>
              <p style={{ color: "var(--text-primary)", fontFamily: "'Lora', serif", fontSize: "0.95rem", fontWeight: 500, margin: 0 }}>
                United International University
              </p>
              <p style={{ color: "var(--text-secondary)", fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", marginTop: "0.2rem" }}>
                Computer Science and Engineering
              </p>
            </div>
          </div>

          <div className="date-badge">
            <span>2023.01 — 2026.08</span>
            <span style={{ fontSize: "0.6rem", opacity: 0.75, marginTop: "1px" }}>Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Courses */}
        <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
          <span className="row-label" style={{ paddingTop: "0.15rem" }}>Courses</span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
            {courses.map((c) => (
              <span key={c} style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                color: "var(--text-secondary)",
                padding: "0.2rem 0.55rem",
                borderRadius: "4px",
                border: "1px solid var(--border-color)",
                backgroundColor: "var(--bg-secondary)",
              }}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
