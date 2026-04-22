import AUST_PDF from "../assets/Certificates/AUST IUPC 2025.pdf";
import UIU_PDF from "../assets/Certificates/Mohaimin Hossain United International University Team Name_ UIU_UwU .pdf";
import ICPC_2024 from "../assets/Certificates/ICPC Asia Dhaka 2024-Mohaimin Hossain-HONORABLE.pdf";

function Achievment() {
  return (
    // The Card Container: Added a dark background, rounded corners, and a subtle border
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8  shadow-lg mt-6">
      {/* Optional: A clean header for the card */}
      <h2 className="text-2xl font-bold text-amber-50 mb-6 border-b border-gray-800 pb-4"></h2>

      {/* The Content Wrapper: flex-col with gap-6 creates perfect vertical spacing */}

      <div className="flex flex-col gap-1 text-lg">
        {/* Row 1: Name (Not clickable) */}

        {/* IUPC */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-1">
          {/* Left Section: Degree and University */}
          {/* Added flex-col for mobile to prevent text squishing, kept flex-row for desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-start">
            <p className="w-auto md:w-30 font-semibold text-gray-400">IUPC</p>

            {/* This flex-col div stacks the University and Computer Science */}
            <div className="flex flex-col">
              <p className="text-white font-medium border-gray-700">
                Participated in UIU IUPC 2025 Onsite Contest
              </p>
              <p className="text-sm text-gray-400">
                Ranked 55 out of 150 Teams
              </p>
            </div>
            <div className="flex justify-center items-center sm:mt-1">
              <a
                href={UIU_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm sm:ml-2 hover:text-blue-300 hover:underline transition-colors"
              >
                [View Certificate]
              </a>
            </div>
          </div>
        </div>

        {/* IUPC 2*/}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-1">
          {/* Left Section: Degree and University */}
          {/* Added flex-col for mobile to prevent text squishing, kept flex-row for desktop */}
          <div className="flex flex-col md:flex-row items-start md:items-start">
            <p className="w-auto md:w-30 font-semibold text-gray-400"></p>

            {/* This flex-col div stacks the University and Computer Science */}
            <div className="flex flex-col">
              <p className="text-white font-medium border-gray-700">
                Participated in AUST IUPC 2025 Onsite Contest
              </p>
              <p className="text-sm text-gray-400"></p>
            </div>
            <div className="flex justify-center items-center sm:mt-1">
              <a
                href={AUST_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm sm:ml-2 hover:text-blue-300 hover:underline transition-colors"
              >
                [View Certificate]
              </a>
            </div>
          </div>
        </div>

        {/* ICPC */}

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-1">
          {/* Left Section: Degree and University */}
          {/* Added flex-col for mobile to prevent text squishing, kept flex-row for desktop */}

          <div className="flex flex-col mt-4 md:flex-row items-start md:items-start">
            <p className="w-auto md:w-30 font-semibold text-gray-400">ICPC</p>

            {/* This flex-col div stacks the University and Computer Science */}
            <div className="flex flex-col">
              <p className="text-white font-medium border-gray-700">
                Participated in ICPC 2024 Onsite Contest
              </p>

              <p className="text-sm text-gray-400"></p>
            </div>

            <div className="flex justify-center items-center sm:mt-1">
              <a
                href={ICPC_2024}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 text-sm sm:ml-2 hover:text-blue-300 hover:underline transition-colors"
              >
                [View Certificate]
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Achievment;
