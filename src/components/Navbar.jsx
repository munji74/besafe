import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current URL path

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Goals", to: "/goals" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-blue-200 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-800 tracking-wide"
        >
          BESAFE
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-semibold text-blue-800">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`uppercase transition-all duration-200 ${
                  isActive(to)
                    ? "font-bold underline underline-offset-4 text-blue-900"
                    : "hover:text-blue-600"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-blue-800">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-blue-100 text-center px-6 py-4 space-y-4 font-semibold text-blue-800">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`block uppercase transition-all duration-200 ${
                  isActive(to)
                    ? "font-bold underline underline-offset-4 text-blue-900"
                    : "hover:text-blue-600"
                }`}
                onClick={closeMenu}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
};

export default Navbar;
