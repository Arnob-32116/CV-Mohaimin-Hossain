import CV from "../assets/cv.pdf";

function PdfOpener() {
  return (
    <a
      href={CV}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.5rem",
        padding: "0.45rem 1rem",
        borderRadius: "6px",
        border: "1px solid var(--accent)",
        color: "var(--accent)",
        fontFamily: "'DM Mono', monospace",
        fontSize: "0.72rem",
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        textDecoration: "none",
        marginTop: "0.6rem",
        transition: "background 0.2s, color 0.2s",
        backgroundColor: "transparent",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "var(--accent)";
        (e.currentTarget as HTMLAnchorElement).style.color = "#0a0a0a";
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
        (e.currentTarget as HTMLAnchorElement).style.color = "var(--accent)";
      }}
    >
      {/* PDF icon */}
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      Download CV
    </a>
  );
}

export default PdfOpener;
