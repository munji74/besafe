import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300 py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold text-white mb-2">BESAFE</h3>
          <p className="text-sm">
            A safe digital space for young people to explore, connect, and grow — responsibly and safely.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Goals</a></li>
            <li><a href="#" className="hover:underline">Resources</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">Email: hello@besafe.ug</p>
          <p className="text-sm">Phone: +256 123 456 789</p>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} BESAFE. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
