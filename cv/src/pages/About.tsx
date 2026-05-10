import profileImg from "../assets/ProtfolioPic.jpg"; // swap with your actual image path
import blogLogo from "../assets/PortfolioLogo.jpg"; // swap with your actual blog logo path

// ─── Reusable inline styles ───────────────────────────────
const S = {
  page: {
    minHeight: "100vh",
    backgroundColor: "var(--bg-primary)",
    paddingTop: "5.5rem",
    paddingBottom: "5rem",
  } as React.CSSProperties,

  inner: {
    maxWidth: "860px",
    margin: "0 auto",
    padding: "0 2rem",
  } as React.CSSProperties,

  // Thin accent rule above page title
  pageLabel: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "2.5rem",
  } as React.CSSProperties,

  pageLabelLine: {
    flex: 1,
    height: "1px",
    background: "var(--border-color)",
  } as React.CSSProperties,

  // Card
  card: {
    background: "var(--bg-card)",
    border: "1px solid var(--border-color)",
    borderRadius: "16px",
    padding: "2.5rem",
    backdropFilter: "blur(8px)",
    marginBottom: "1.5rem",
    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
  } as React.CSSProperties,

  // Two-column layout
  row: {
    display: "flex",
    gap: "2.5rem",
    alignItems: "flex-start",
  } as React.CSSProperties,

  // Image wrapper
  imgWrap: {
    flexShrink: 0,
    width: "160px",
  } as React.CSSProperties,

  img: {
    width: "160px",
    height: "160px",
    objectFit: "cover" as const,
    borderRadius: "12px",
    border: "1px solid var(--border-color)",
    display: "block",
  } as React.CSSProperties,

  // Text column
  textCol: {
    flex: 1,
    minWidth: 0,
  } as React.CSSProperties,

  name: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "1.05rem",
    fontWeight: 400,
    color: "var(--text-primary)",
    letterSpacing: "0.04em",
    marginBottom: "0.3rem",
  } as React.CSSProperties,

  role: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.7rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--accent)",
    marginBottom: "1rem",
  } as React.CSSProperties,

  divider: {
    height: "1px",
    background: "var(--border-color)",
    marginBottom: "1rem",
  } as React.CSSProperties,

  body: {
    fontFamily: "'Lora', serif",
    fontSize: "0.9rem",
    lineHeight: "1.85",
    color: "var(--text-secondary)",
  } as React.CSSProperties,

  // Section header
  sectionTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    marginBottom: "1.5rem",
  } as React.CSSProperties,

  // Blog logo
  blogLogoImg: {
    width: "140px",
    height: "140px",
    objectFit: "contain" as const,
    borderRadius: "12px",
    border: "1px solid var(--border-color)",
    display: "block",
    background: "var(--bg-secondary)",
    padding: "12px",
  } as React.CSSProperties,

  blogTitle: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "1rem",
    fontWeight: 400,
    color: "var(--text-primary)",
    letterSpacing: "0.04em",
    marginBottom: "0.25rem",
  } as React.CSSProperties,

  blogSub: {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    color: "var(--accent)",
    marginBottom: "1rem",
  } as React.CSSProperties,

  tag: {
    display: "inline-flex",
    alignItems: "center",
    padding: "0.2rem 0.6rem",
    borderRadius: "100px",
    border: "1px solid rgba(38,152,186,0.25)",
    background: "var(--accent-glow)",
    color: "var(--accent)",
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.04em",
    marginRight: "0.35rem",
    marginBottom: "0.35rem",
  } as React.CSSProperties,

  link: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.35rem",
    marginTop: "1.25rem",
    padding: "0.4rem 0.9rem",
    borderRadius: "6px",
    border: "1px solid var(--accent)",
    color: "var(--accent)",
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.68rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    textDecoration: "none",
    transition: "background 0.2s, color 0.2s",
  } as React.CSSProperties,
};

// ─── Hover helper ─────────────────────────────────────────
function hoverCard(e: React.MouseEvent<HTMLDivElement>, enter: boolean) {
  const el = e.currentTarget as HTMLDivElement;
  if (enter) {
    el.style.boxShadow =
      "0 8px 32px rgba(0,0,0,0.25), 0 0 0 1px rgba(38,152,186,0.3)";
    el.style.borderColor = "rgba(38,152,186,0.3)";
  } else {
    el.style.boxShadow = "";
    el.style.borderColor = "var(--border-color)";
  }
}

function hoverLink(e: React.MouseEvent<HTMLAnchorElement>, enter: boolean) {
  const el = e.currentTarget as HTMLAnchorElement;
  if (enter) {
    el.style.background = "var(--accent)";
    el.style.color = "#0a0a0a";
  } else {
    el.style.background = "transparent";
    el.style.color = "var(--accent)";
  }
}

// ─── Component ────────────────────────────────────────────
function About() {
  const blogTags = [
    "Programming",
    "CS Theory",
    "System Design",
    "Career",
    "Learning",
  ];

  return (
    <div style={S.page}>
      <div style={S.inner}>
        {/* Page label */}
        <div style={S.pageLabel}>
          <span>About</span>
          <div style={S.pageLabelLine} />
        </div>

        {/* ── Section 1: About Me ─────────────────────────── */}
        <div style={S.sectionTitle}>
          <span
            style={{
              width: "18px",
              height: "1px",
              background: "var(--accent)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          About Me
        </div>

        <div
          style={S.card}
          onMouseEnter={(e) => hoverCard(e, true)}
          onMouseLeave={(e) => hoverCard(e, false)}
        >
          {/* Responsive: stacks on mobile, row on md+ */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2.5rem",
              alignItems: "flex-start",
            }}
            className="about-row"
          >
            {/* Image — LEFT */}
            <div style={S.imgWrap}>
              <img
                src={profileImg}
                alt="Mohaimin Hossain"
                style={S.img}
                onError={(e) => {
                  // Fallback placeholder if image not found
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const parent = el.parentElement!;
                  const placeholder = document.createElement("div");
                  placeholder.style.cssText = `
                    width:160px; height:160px; border-radius:12px;
                    border:1px solid var(--border-color);
                    background:var(--bg-secondary);
                    display:flex; align-items:center; justify-content:center;
                    font-family:'DM Mono',monospace; font-size:2rem; color:var(--text-muted);
                  `;
                  placeholder.textContent = "MH";
                  parent.appendChild(placeholder);
                }}
              />
              {/* Name tag below image */}
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  marginTop: "0.6rem",
                  textAlign: "center",
                }}
              >
                Mohaimin Hossain
              </p>
            </div>

            {/* Text — RIGHT */}
            <div style={S.textCol}>
              <p style={S.name}>Mohaimin Hossain</p>
              <p style={S.role}>
                CS Student · Competitive Programmer · Instructor
              </p>
              <div style={S.divider} />
              <p style={S.body}>
                I'm a final-year Computer Science student at United
                International University, Dhaka. My work sits at the
                intersection of competitive programming, algorithms, and
                building things on the web.
              </p>
              <p style={{ ...S.body, marginTop: "0.85rem" }}>
                I've competed in ICPC Asia Dhaka and multiple IUPCs, and I spend
                a lot of time thinking about elegant solutions to hard problems.
                Beyond contests, I teach beginner competitive programming at UIU
                — designing problems, running contests, and mentoring students
                who are just starting out.
              </p>
              <p style={{ ...S.body, marginTop: "0.85rem" }}>
                When I'm not writing code, I'm writing about the things no one
                explicitly teaches you in a CS degree.
              </p>
            </div>
          </div>
        </div>

        {/* ── Section 2: Blog ─────────────────────────────── */}
        <div style={{ ...S.sectionTitle, marginTop: "3rem" }}>
          <span
            style={{
              width: "18px",
              height: "1px",
              background: "var(--accent)",
              display: "inline-block",
              flexShrink: 0,
            }}
          />
          Blog
        </div>

        <div
          style={S.card}
          onMouseEnter={(e) => hoverCard(e, true)}
          onMouseLeave={(e) => hoverCard(e, false)}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2.5rem",
              alignItems: "flex-start",
            }}
            className="about-row"
          >
            {/* Text — LEFT (opposite side from profile) */}
            <div style={S.textCol}>
              <p style={S.blogTitle}>Not Taught in Class</p>
              <p style={S.blogSub}>A blog about what school doesn't cover</p>
              <div style={S.divider} />
              <p style={S.body}>
                A blog for CS students and early engineers. The curriculum
                covers data structures and theory — but it rarely covers how to
                navigate a codebase, how to communicate technical ideas, how to
                fail at a contest and come back stronger, or how to think about
                your career.
              </p>
              <p style={{ ...S.body, marginTop: "0.85rem" }}>
                That's what <em>Not Taught in Class</em> is for. Honest,
                practical writing from someone still figuring it out.
              </p>

              {/* Tags */}
              <div style={{ marginTop: "1.1rem" }}>
                {blogTags.map((t) => (
                  <span key={t} style={S.tag}>
                    {t}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <a
                href="#" // replace with actual blog URL
                target="_blank"
                rel="noopener noreferrer"
                style={S.link}
                onMouseEnter={(e) => hoverLink(e, true)}
                onMouseLeave={(e) => hoverLink(e, false)}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Visit Blog
              </a>
            </div>

            {/* Logo — RIGHT */}
            <div style={{ flexShrink: 0, width: "140px" }}>
              <img
                src={blogLogo}
                alt="Not Taught in Class — Blog Logo"
                style={S.blogLogoImg}
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const parent = el.parentElement!;
                  const placeholder = document.createElement("div");
                  placeholder.style.cssText = `
                    width:140px; height:140px; border-radius:12px;
                    border:1px solid var(--border-color);
                    background:var(--bg-secondary);
                    display:flex; align-items:center; justify-content:center;
                    font-family:'DM Mono',monospace; font-size:0.6rem;
                    color:var(--text-muted); text-align:center; padding:12px;
                    letter-spacing:0.06em; text-transform:uppercase; line-height:1.6;
                  `;
                  placeholder.textContent = "Not Taught\nin Class";
                  parent.appendChild(placeholder);
                }}
              />
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.58rem",
                  letterSpacing: "0.08em",
                  color: "var(--text-muted)",
                  marginTop: "0.6rem",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          .about-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
