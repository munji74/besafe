import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Goals", to: "/goals" },
    { label: "Resources", to: "/resources" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="bg-green-200 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">BESAFE</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link to={to} className="hover:text-blue-600">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-green-100 text-center px-6 py-4 space-y-4 font-medium">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className="block hover:text-blue-600"
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
