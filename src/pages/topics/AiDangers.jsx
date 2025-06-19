import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaShieldAlt } from "react-icons/fa";

const AiDangers = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-4">
          AI Safety for Young People
        </h1>
        <p className="text-gray-300 text-justify">
          Artificial Intelligence is becoming a bigger part of our digital world—from chatbots to video filters.
          While it can be useful, it's important for young people to understand the risks and know how to stay
          safe when interacting with AI-powered tools online.
        </p>
      </motion.div>

      {/* Gradient Line */}
      <motion.div
        className="h-1 w-full max-w-6xl mx-auto rounded-full my-12"
        style={{
          background:
            "linear-gradient(to right, #a855f7, #ec4899, #facc15, #22d3ee)",
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      {/* AI Risks */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <div className="flex items-center gap-3 mb-3">
          <FaRobot className="text-xl text-white" />
          <h2 className="text-2xl font-bold">Understanding AI Risks</h2>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
          <li>AI-generated misleading content and deep fakes</li>
          <li>Privacy concerns with AI-powered apps and services</li>
          <li>Chatbots that might provide inappropriate information</li>
          <li>AI tools being used for manipulation or scams</li>
          <li>Over-reliance on AI for decision making</li>
        </ul>
      </motion.div>

      {/* Staying Safe */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-3">
          <FaShieldAlt className="text-xl text-white" />
          <h2 className="text-2xl font-bold">Staying Safe with AI</h2>
        </div>
        <ul className="list-disc list-inside text-gray-300 space-y-2 pl-2">
          <li>Always verify information from multiple trusted sources</li>
          <li>Be careful what personal information you share with AI tools</li>
          <li>Understand that AI can make mistakes or be biased</li>
          <li>Use AI tools only with parent or guardian supervision</li>
          <li>Know when to ask for human help instead of relying on AI</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default AiDangers;
