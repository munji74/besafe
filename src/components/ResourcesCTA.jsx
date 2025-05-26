import React from "react";

const ResourcesCTA = () => {
  return (
    <section className="py-20 bg-slate-800 text-white px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-400 mb-4">
        Explore Our Resources
      </h2>
      <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
        Discover age-appropriate activities, tips, and educational materials.
      </p>
      <button className="bg-green-300 hover:bg-green-400 text-slate-900 font-semibold py-3 px-6 rounded-full transition duration-300">
        View Resources
      </button>
    </section>
  );
};

export default ResourcesCTA;
