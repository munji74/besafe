import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-green-200 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">BESAFE</Link>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
          <li><Link to="/goals" className="hover:text-blue-600">Goals</Link></li>
          <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
