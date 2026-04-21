function Experience() {
  return (
    // The Card Container: Added a dark background, rounded corners, and a subtle border
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8  shadow-lg mt-6">
      {/* Optional: A clean header for the card */}
      <h2 className="text-2xl font-bold text-amber-50 mb-6 border-b border-gray-800 pb-4">
        Experience
      </h2>

      {/* The Content Wrapper: flex-col with gap-6 creates perfect vertical spacing */}
      <div className="flex flex-col gap-1 text-lg">
        {/* Row 1: Name (Not clickable) */}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-1">
          {/* Left Section: Degree and University */}
          {/* Added flex-col for mobile to prevent text squishing, kept flex-row for desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-start">
            <p className="w-auto md:w-30 font-semibold text-gray-400">Title</p>

            {/* This flex-col div stacks the University and Computer Science */}
            <div className="flex flex-col">
              <p className="text-white font-medium border-gray-700">
                Beginner Competitive Programming Instructor
              </p>
              <p className="text-sm text-gray-400">
                United International University
              </p>
            </div>
          </div>

          {/* Right Section: The Blue Badge */}
          {/* Kept exactly as you wrote it */}
          <div className="flex flex-col items-center justify-center w-fit px-4 py-1 rounded-lg text-sm bg-[#2698BA] text-gray-900 font-medium">
            <span>2026.03 - 2026.07</span>
            <div className="flex items-center gap-1 text-[10px] opacity-90">
              <span>Dhaka, Bangladesh</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-0 mt-1">
        <p className="font-semibold w-30 text-gray-400"></p>

        <div>
          <ul className="list-disc pl-6 text-gray-300">
            <li className="font-light text-sm">
              Designed and delivered weekly lesson
            </li>
            <li className="font-light text-sm">
              Mentored and guided students in solving algorithmic problems
            </li>
            <li className="font-light w-[80%] text-sm">
              Organized multiple competitive programming contests with over 100
              participants, including setting and testing original problem sets
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experience;
