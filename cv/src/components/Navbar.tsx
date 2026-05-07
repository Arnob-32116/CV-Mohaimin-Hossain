import { Link } from "react-router-dom";
import { useTheme } from "../App";
import "../App.css";

function NavBar() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="navbar">
      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0.9rem 1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        {/* Logo */}
        <h1 style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
          color: "var(--text-primary)",
          letterSpacing: "0.08em",
          fontWeight: 400,
        }}>
          MOHAIMIN HOSSAIN
        </h1>

        {/* Right: Nav links + toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <ul style={{ display: "flex", gap: "clamp(1rem, 3vw, 2rem)", listStyle: "none", margin: 0, padding: 0 }}>
            {[
              { to: "/",        label: "Home"     },
              { to: "/about",   label: "About"    },
              { to: "/projects",label: "Projects" },
              { to: "/contact", label: "Contact"  },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.72rem",
                    letterSpacing: "0.06em",
                    color: "var(--text-secondary)",
                    textDecoration: "none",
                    textTransform: "uppercase",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--text-secondary)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Theme Toggle */}
          <button
            className="theme-toggle"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            <div className="theme-toggle-knob">
              {theme === "dark" ? "☽" : "☀"}
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
