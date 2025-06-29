import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-200 text-blue-800 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-extrabold text-blue-900 mb-2">BESAFE</h3>
          <p className="text-sm">
            A safe digital space for young people to explore, connect, and grow — responsibly and safely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
            <li><Link to="/goals" className="hover:text-blue-600">Goals</Link></li>
            <li><Link to="/resources" className="hover:text-blue-600">Resources</Link></li>
            <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-blue-900 mb-2">Contact</h4>
          <p className="text-sm">Email: hello@besafe.ug</p>
          <p className="text-sm">Phone: +256 123 456 789</p>
        </div>
      </div>

      {/* Logos */}
      <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-6">
        <img
          src="/partners/isoc-uganda.png"
          alt="Internet Society Uganda"
          className="h-12 object-contain"
        />
        <img
          src="/partners/isoc-foundation.png"
          alt="Internet Society Foundation"
          className="h-10 object-contain"
        />
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-blue-700">
        &copy; {new Date().getFullYear()} BESAFE. In partnership with Internet Society Uganda Chapter & Foundation.
      </div>
    </footer>
  );
};

export default Footer;
