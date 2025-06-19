import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb } from "react-icons/fa";

const OnlinePredators = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Online Predators</h1>
        <p className="text-gray-300 text-justify">
          The Internet has significantly increased the opportunities young people have to explore the world and socialize. Since the Internet allows you to talk to many different people, children may encounter people who mean them harm while trying to meet new friends.
        </p>
        <p className="text-gray-300 text-justify mt-4">
          Online predators may employ a technique called <strong>"grooming"</strong> as a means to build trust with a child and eventually lead to an offline meeting.
        </p>
        <p className="text-gray-300 text-justify mt-4">
          They usually find kids through social networking, blogs, chat rooms, instant messaging, email, discussion boards, and other websites. Young people engaged in risky behaviors are especially vulnerable to this kind of enticement.
        </p>
        <p className="text-gray-300 text-justify mt-4">
          For example, children who share inappropriate photos or engage in explicit online conversations are more likely to be groomed by a predator.
        </p>
      </motion.div>

      {/* DIVIDER LINE */}
      <motion.div
        className="my-12 h-[4px] rounded-full w-full max-w-6xl mx-auto"
        style={{
          backgroundImage: "linear-gradient(to right, #a855f7, #facc15, #14b8a6)"
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      {/* WARNING SIGNS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-2xl font-bold mb-4">How to Look for and Identify a Potential Online Predator</h2>
        <ul className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>Shows unwanted attention, affection, kindness, or sends online gifts.</li>
          <li>Knows the latest music, games, or trends to appeal to youth.</li>
          <li>Listens and sympathizes with your problems unusually closely.</li>
          <li>Tells you that no one else understands you like they do.</li>
          <li>Introduces sexual content or sends explicit material.</li>
        </ul>
      </motion.div>

      {/* SAFETY TIPS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mt-14 border-2 border-purple-500 rounded-lg p-6"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaLightbulb className="text-2xl text-purple-400" />
          <h3 className="text-xl font-bold">Tips for Dealing with Online Predators</h3>
        </div>
        <ul className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>Never download images from unknown sources. They could be explicit.</li>
          <li>Consult a trusted adult — teacher, parent, or IT admin — about using email filters.</li>
          <li>Tell a trusted adult if anything online makes you uncomfortable or afraid.</li>
          <li>Choose screen names that don’t reveal personal or suggestive information.</li>
          <li><strong>Do not reveal personal information</strong> like your age or family details to strangers online.</li>
          <li><strong>Stop communication immediately</strong> if someone starts asking inappropriate questions.</li>
          <li>Block and avoid any suspicious individuals online. <strong>Do not</strong> accept them as friends.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default OnlinePredators;
