import React from "react";

const Home = () => {
  return (
    <section className="bg-slate-800 text-white min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-400">
        A Safe Space for Young People to Learn & Grow
      </h1>
      <p className="max-w-2xl text-lg text-gray-300">
        Young People can explore, learn, and connect in a safe, supervised environment. 
        Parent and Teacher-approved content and moderated interactions.
      </p>
    </section>
  );
};

export default Home;
