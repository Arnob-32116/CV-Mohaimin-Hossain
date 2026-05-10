import { createContext, useContext, useEffect, useState } from "react";
import NavBar from "./Navbar";

export const ThemeContext = createContext<{
  theme: "dark" | "light";
  toggle: () => void;
}>({ theme: "dark", toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)" }}>
        <NavBar />
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
