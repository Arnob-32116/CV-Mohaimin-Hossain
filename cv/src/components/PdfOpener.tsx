import PdfIcon from "../assets/icons/PdfIcon.png";
import CV from "../assets/cv.pdf";

function PdfOpener() {
  return (
    // Slightly reduced the gap between icon and text from gap-2 to gap-1
    <div className="flex flex-col items-center gap-1 group cursor-pointer">
      
      {/* Icon Container 
          CHANGED: Mobile w-16 h-16 -> w-12 h-12
          CHANGED: Desktop md:w-20 md:h-20 -> md:w-16 md:h-16 
      */}
      <div className="w-12 h-12 md:w-16 md:h-16">
        <a 
          href={CV} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full h-full"
        >
          <img 
            src={PdfIcon}
            alt="View CV"
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
          />
        </a> 
      </div>

      {/* Text below the icon 
          CHANGED: Added text-sm to shrink the font size
      */}
      <p className="text-sm text-amber-50 font-medium whitespace-nowrap group-hover:text-blue-400 transition-colors">
        Download CV
      </p>  

    </div>
  );
}

export default PdfOpener;