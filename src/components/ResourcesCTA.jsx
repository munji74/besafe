import React from "react";
import { Link } from "react-router-dom";

const ResourcesCTA = () => {
  return (
    <section className="py-20 bg-blue-100 text-slate-900 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        Explore Our Resources
      </h2>
      <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
        Discover age-appropriate activities, tips, and educational materials.
      </p>
      <Link to="/resources">
        <button className="bg-green-300 hover:bg-green-400 text-slate-900 font-semibold py-3 px-6 rounded-full transition duration-300">
          View Resources
        </button>
      </Link>
    </section>
  );
};

export default ResourcesCTA;
