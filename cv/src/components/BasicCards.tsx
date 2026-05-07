function BasicsCard() {
  const rows = [
    { label: "Name",     content: "Mohaimin Hossain",                             href: undefined },
    { label: "Email",    content: "arnob32116@gmail.com",                          href: "mailto:arnob32116@gmail.com" },
    { label: "Phone",    content: "+880 1863 244 536",                             href: "tel:+8801863244536" },
    { label: "LinkedIn", content: "linkedin.com/in/mohaimin-nimiahom",             href: "https://www.linkedin.com/in/mohaimin-nimiahom/" },
    { label: "GitHub",   content: "github.com/Arnob-32116",                        href: "https://github.com/Arnob-32116" },
  ];

  return (
    <div className="cv-card" style={{ marginTop: "1.5rem" }}>
      <h2 className="section-title">Basics</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
        {rows.map(({ label, content, href }) => (
          <div key={label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
            <span className="row-label">{label}</span>
            {href ? (
              <a href={href} className="cv-link" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                {content}
              </a>
            ) : (
              <span style={{ color: "var(--text-primary)", fontFamily: "'Lora', serif", fontSize: "0.95rem" }}>{content}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BasicsCard;
