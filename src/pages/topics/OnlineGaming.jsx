import React from "react";
import { motion } from "framer-motion";
import { FaShieldAlt } from "react-icons/fa";
import { MdOutlineQuestionAnswer } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";

const OnlineGaming = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* Title and Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
          Online Gaming Safety
        </h1>
        <FaGamepad className="text-6xl text-purple-400 mx-auto mb-2" />
        
        <p className="text-gray-300">Play Smart, Stay Safe!</p>
      </motion.div>

      {/* Gradient Divider */}
      <motion.hr
        className="my-12 h-1 rounded-full border-0 bg-gradient-to-r from-purple-500 via-pink-400 to-cyan-400"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ transformOrigin: "left" }}
      />

      {/* Risk & Health Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6"
      >
        <div className="bg-slate-700 rounded-lg p-6 shadow">
          <div className="flex items-center gap-2 mb-4">
            <BsExclamationTriangleFill className="text-yellow-400 text-xl" />
            <h2 className="text-2xl font-semibold">Common Risks</h2>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Excessive in-game purchases and microtransactions</li>
            <li>Exposure to offensive language and behavior</li>
            <li>Gaming addiction and screen overuse</li>
            <li>Sharing personal info in multiplayer chats</li>
            <li>Potential grooming via gaming chat features</li>
          </ul>
        </div>

        <div className="bg-blue-900 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4">Gaming Health</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>
              Take 20-20-20 breaks (look 20 ft away for 20 seconds every 20
              mins)
            </li>
            <li>Stretch between gaming sessions</li>
            <li>Set and follow time limits</li>
          </ul>
        </div>
      </motion.div>

      {/* Discussion & Safety Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <FaShieldAlt className="text-sky-400 text-xl" />
            <h2 className="text-2xl font-semibold">Safety Tips</h2>
          </div>
          <ul className="list-disc ml-6 space-y-2 text-gray-300">
            <li>Use parental controls and limit time</li>
            <li>Don’t share personal info with players</li>
            <li>Review privacy settings together</li>
            <li>Report inappropriate behavior</li>
          </ul>
        </div>

        <div className="bg-slate-700 rounded-lg p-6 shadow">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Family Discussion Points
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 text-gray-300">
            <div>
              <h3 className="text-yellow-300 font-semibold mb-2">
                Questions to Ask
              </h3>
              <ul className="list-disc ml-4 space-y-1">
                <li>What games do you enjoy?</li>
                <li>Who do you play with online?</li>
                <li>Have you felt uncomfortable gaming?</li>
              </ul>
            </div>
            <div>
              <h3 className="text-yellow-300 font-semibold mb-2">
                Action Items
              </h3>
              <ul className="list-disc ml-4 space-y-1">
                <li>Create a schedule</li>
                <li>Set up parental controls</li>
                <li>Check privacy settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Checklist Section */}
      <div className="max-w-6xl mx-auto mt-12">
        <h2 className="text-2xl font-semibold text-white mb-4">
          Quick Gaming Safety Checklist
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-indigo-900 p-6 rounded-lg shadow text-gray-300">
            <h3 className="text-xl font-bold mb-2">🔒 Secure Account</h3>
            <p>Use strong passwords & enable 2FA</p>
          </div>
          <div className="bg-indigo-900 p-6 rounded-lg shadow text-gray-300">
            <h3 className="text-xl font-bold mb-2">🎭 Stay Anonymous</h3>
            <p>Never share real names or personal info</p>
          </div>
          <div className="bg-indigo-900 p-6 rounded-lg shadow text-gray-300">
            <h3 className="text-xl font-bold mb-2">💰 Money Matters</h3>
            <p>Talk to parents before buying anything</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineGaming;
