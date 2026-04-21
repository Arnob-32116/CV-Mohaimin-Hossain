import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <nav className="fixed w-full border-b border-black bg-gray-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white tracking-wide">
          Mohaimin Hossain
        </h1>

        {/* Menu */}
        <ul className="flex gap-8 text-m">
          <li>
            <Link to="/" className="hover:text-blue-400 text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-400 text-white transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-blue-400 text-white transition">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-400 text-white transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    
  );
}

export default NavBar;