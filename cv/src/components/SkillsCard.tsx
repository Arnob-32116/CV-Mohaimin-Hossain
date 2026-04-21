function Skills() {
  return (
    // The Card Container: Added a dark background, rounded corners, and a subtle border
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8  shadow-lg mt-6">
      {/* Optional: A clean header for the card */}
      <h2 className="text-2xl font-bold text-amber-50 mb-6 border-b border-gray-800 pb-4">
        Skills
      </h2>

      <div className="mt-8">
        {/* Section Header */}
        {/* Grid Container: 1 col on mobile, 2 cols on small screens and up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
          {/* Skill Item: Linux */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            {/* Icon Placeholder */}
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">Linux</span>
          </div>

          {/* Skill Item: Java */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">Java</span>
          </div>

          {/* Skill Item: Python */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">Python</span>
          </div>

          {/* Skill Item: C */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">C</span>
          </div>

          {/* Skill Item: C++ */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">C++</span>
          </div>

          {/* Skill Item: JavaScript */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">JavaScript</span>
          </div>

          {/* Skill Item: SQL */}
          <div className="flex items-center gap-3 text-[#2698BA]">
            <div className="w-5 h-5 flex items-center justify-center">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="8" />
              </svg>
            </div>
            <span className="text-lg font-light">SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
