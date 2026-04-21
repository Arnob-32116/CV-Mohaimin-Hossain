function BasicsCard() {
  return (
    // The Card Container: Added a dark background, rounded corners, and a subtle border
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8  shadow-lg mt-6">
      
      {/* Optional: A clean header for the card */}
      <h2 className="text-2xl font-bold text-amber-50 mb-6 border-b border-gray-800 pb-4">
        Basics
      </h2>

      {/* The Content Wrapper: flex-col with gap-6 creates perfect vertical spacing */}
      <div className="flex flex-col gap-2 text-lg">
        
        {/* Row 1: Name (Not clickable) */}
        <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-0">
          {/* w-32 or min-w-[120px] is the secret to perfect symmetry! */}
          <p className="w-32 font-semibold text-gray-400">Name</p>
          <p className="text-white font-medium">Mohaimin Hossain</p>
        </div>

        {/* Row 2: Email (Clickable mailto) */}
        <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-0">
          <p className="w-32 font-semibold text-gray-400">Email</p>
          <a 
            href="mailto:arnob32116@gmail.com" 
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            arnob32116@gmail.com
          </a>
        </div>

        {/* Row 3: Phone (Clickable tel) */}
        <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-0">
          <p className="w-32 font-semibold text-gray-400">Phone</p>
          <a 
            href="tel:+8801863244536" 
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            +880 1863 244 536
          </a>
        </div>

        {/* Row 4: LinkedIn (Clickable external link) */}
        <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-0">
          <p className="w-32 font-semibold text-gray-400">LinkedIn</p>
          <a 
            href="https://www.linkedin.com/in/mohaimin-nimiahom/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            https://www.linkedin.com/in/mohaimin-nimiahom/
          </a>
        </div>

        {/* Row 5: GitHub (Clickable external link) */}
        <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-0">
          <p className="w-32 font-semibold text-gray-400">GitHub</p>
          <a 
            href="https://github.com/Arnob-32116" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
          >
            https://github.com/Arnob-32116
          </a>
        </div>

      </div>
    </div>
  );
}

export default BasicsCard;