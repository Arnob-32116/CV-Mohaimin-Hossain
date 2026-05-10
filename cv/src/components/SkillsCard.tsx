const skills = [
  { name: "C++", note: "" },
  { name: "C", note: "" },
  { name: "Java", note: "" },
  { name: "Python", note: "" },
  { name: "JavaScript", note: "" },
  { name: "SQL", note: "" },
  { name: "Linux", note: "" },
];

function Skills() {
  return (
    <div className="cv-card" style={{ marginTop: "1.5rem" }}>
      <h2 className="section-title">Skills</h2>

      <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
        <span className="row-label" style={{ paddingTop: "0.3rem" }}>
          Languages
        </span>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {skills.map(({ name, note }) => (
            <span key={name} className="skill-pill">
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  backgroundColor:
                    note === "primary" ? "var(--accent)" : "currentColor",
                  display: "inline-block",
                  flexShrink: 0,
                }}
              />
              {name}
              {note === "primary" && (
                <span
                  style={{
                    fontSize: "0.6rem",
                    opacity: 0.6,
                    marginLeft: "2px",
                  }}
                >
                  ★
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
