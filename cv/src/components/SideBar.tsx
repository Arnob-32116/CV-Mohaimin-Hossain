import { useState, useEffect, useRef } from "react";

// Optional but good practice: Define the shape of your menu items
interface MenuItem {
  id: string;
  title: string;
}

function SideBar() {
  // 1. Tell TypeScript this state will hold a string
  const [activeCardId, setActiveCardId] = useState<string>("");

  // 2. Tell TypeScript this ref holds an object with string keys and number values
  const ratiosRef = useRef<Record<string, number>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          ratiosRef.current[entry.target.id] = entry.intersectionRatio;
        });

        let maxRatio = 0;
        let mostVisibleId = "";

        for (const [id, ratio] of Object.entries(ratiosRef.current)) {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            mostVisibleId = id;
          }
        }

        if (mostVisibleId && maxRatio > 0) {
          setActiveCardId(mostVisibleId);
        }
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0] },
    );

    const cards = document.querySelectorAll(".observe-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // 3. Apply the interface to your array
  const menuItems: MenuItem[] = [
    { id: "basic", title: "Basics" },
    { id: "education", title: "Education" },
    { id: "exp", title: "Work" },
    { id: "skills", title: "Skills" },
    { id: "achievements", title: "Achievements" },
    { id: "languages", title: "Languages" },
    { id: "interests", title: "Interests" },
  ];

  // 4. Tell TypeScript that 'id' must be a string
  const handleScroll = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="fixed top-15 left-0 z-40 w-54 h-screen pt-5 transition-transform duration-300 ease-in-out -translate-x-full md:translate-x-0 bg-black border-r border-gray-800"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-transparent">
          <ul className="space-y-2 font-medium">
            {menuItems.map((item) => {
              const isActive = activeCardId === item.id;

              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleScroll(item.id)}
                    className={`w-full flex items-center p-2 rounded-lg group transition-all duration-300 ease-in-out 
                      ${
                        isActive
                          ? "text-[#2698BA] bg-blue-900/10 drop-shadow-[0_0_10px_rgba(38,152,186,0.8)] translate-x-2"
                          : "text-gray-300 hover:bg-gray-900 hover:text-blue-400"
                      }
                    `}
                  >
                    <span className="text-sm">{item.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    </div>
  );
}

export default SideBar;
