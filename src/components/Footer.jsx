import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        {/* Branding */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">BESAFE</h3>
          <p className="text-sm">
            A safe digital space for young people to explore, connect, and grow — responsibly and safely.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/goals" className="hover:underline">Goals</Link></li>
            <li><Link to="/resources" className="hover:underline">Resources</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact Us</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">Email: hello@besafe.ug</p>
          <p className="text-sm">Phone: +256 123 456 789</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BESAFE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
