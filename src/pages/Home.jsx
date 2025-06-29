import React from "react";
import { motion as Motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-b from-sky-200 to-indigo-200 text-slate-900 min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      
      {/* Decorative Background Bubbles */}
      <div className="absolute top-8 left-8 w-32 h-32 bg-pink-400 opacity-20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-12 w-44 h-44 bg-blue-400 opacity-20 rounded-full blur-2xl animate-ping"></div>
      <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-teal-400 opacity-10 rounded-full blur-2xl animate-pulse"></div>

      {/* Main Heading */}
      <Motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-700 leading-tight drop-shadow"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Safe Space for Young People <br className="hidden sm:block" />
        to Learn & Grow
      </Motion.h1>

      {/* Subheading */}
      <Motion.p
        className="max-w-2xl text-lg text-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Young people can explore, learn, and connect in a safe, supervised environment.
        Content is approved by parents and teachers, with moderated interactions to ensure safety.
      </Motion.p>
    </section>
  );
};

export default Home;
