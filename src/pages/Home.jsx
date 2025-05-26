import React from "react";
import { motion as Motion } from "framer-motion";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white min-h-[90vh] flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Decorative Background Bubbles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 opacity-10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-2xl animate-ping"></div>

      {/* Main Content */}
      <Motion.h1
        className="text-4xl md:text-5xl font-extrabold mb-6 text-blue-400 leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        A Safe Space for Young People <br className="hidden sm:block" />
        to Learn & Grow
      </Motion.h1>

      <Motion.p
        className="max-w-2xl text-lg text-gray-300"
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
