import React from "react";
import { motion } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";

const OnlinePrivacy = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* Introduction Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Online Privacy
        </h1>
        <p className="text-gray-300 text-justify">
          Many people share information about themselves online through comments, images,
          and text messages. But once you put information online, it’s easy to lose control
          of it. Anyone with access to your social media accounts may copy, share, and alter
          the information. That’s why it’s important to take precautions to keep your
          information safe online. Create strong passwords (and don’t share them), consider
          friend requests carefully, and only accept people you know you can trust. Those who
          reveal too much personal information online have become targets for identity theft,
          scams, computer hacks, and other trouble. Before sharing personal information, it is
          important to check websites for signs that they are trustworthy. For example, before
          entering financial information like a credit card number on a website, check the URL
          for “https” or the lock symbol.
        </p>
      </motion.div>

      {/* Gradient Divider */}
      <motion.div
        className="w-[90%] h-[4px] mx-auto my-12 rounded-full bg-gradient-to-r from-purple-500 via-yellow-400 to-cyan-400"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      />

      {/* Discussion Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaCommentDots className="text-2xl text-white" />
          <h2 className="text-xl font-bold">Discussion Prompts</h2>
        </div>
        <ul className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>What do you do to keep your online information private and secure?</li>
          <li>How do you decide who to add to your friends’ list?</li>
          <li>When do you think it’s OK to share personal information online?</li>
          <li>
            How frequently do you change your passwords? Did you feel like the problem was
            solved?
          </li>
          <li>Have you ever had anyone steal a password? What happened next?</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default OnlinePrivacy;
