import React from "react";
import { motion } from "framer-motion";
import { FaCommentDots } from "react-icons/fa";

const UnwantedRequests = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* Title and Intro */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Unwanted Sexual Requests
        </h1>
        <p className="text-gray-300 text-justify">
          While online, young people may receive unwanted requests from adults asking them for nude images,
          to have a sexual conversation, or to meet offline for sex. These requests may come from people
          they’ve met online or know in real life. They may also come from their peers or young adults.
          Most kids and teens are smart about dealing with sexual requests. They remove themselves from
          the situation, ask the people to stop, or change their personal information. But receiving these
          requests can still be distressing. You should never respond to any requests you receive.
          Instead, report them to the website and an adult you trust immediately.
        </p>
        <br />
        <p className="text-gray-300 text-justify">
          In some cases, adults may target kids and teens for months before making a request.
          These adults are often called “online predators.” They use a process called “grooming” to gain
          their victims’ trust and form a relationship with them. Adults should not pursue any kid or teen
          romantically. If an adult acts interested in a romantic relationship with you or your peers,
          it’s a red flag signalling they cannot be trusted. You should not engage them, refuse to talk
          to them about sex or meet them offline and tell an adult you trust.
        </p>
      </motion.div>

      {/* SINGLE Gradient Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="my-12 h-1 w-full max-w-4xl mx-auto bg-gradient-to-r from-purple-500 via-yellow-400 to-teal-300 rounded-full origin-left"
      />

      {/* Grooming Tactics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-xl font-bold mb-3 text-white">
          Someone trying to groom kids and teens may:
        </h2>
        <ul className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>Flatter them.</li>
          <li>Talk to them about sex.</li>
          <li>Send them gifts, such as cell phones or bus tickets.</li>
          <li>Ask them to keep secrets.</li>
          <li>Try to isolate them from family and friends.</li>
        </ul>
      </motion.div>

      {/* Discussion Prompts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <FaCommentDots className="text-2xl text-white" />
          <h2 className="text-xl font-bold">Discussion Prompts</h2>
        </div>
        <ul className="list-decimal ml-6 text-gray-300 space-y-2">
          <li>Do you know anyone who has received an unwanted sexual request? How did they respond?</li>
          <li>Why do you think teens are tempted to meet offline?</li>
          <li>Who would you tell if you received an unwanted sexual request?</li>
          <li>What advice would you give a peer who received an unwanted sexual request?</li>
          <li>Would you be bothered by an unwanted sexual request? Why or why not?</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default UnwantedRequests;
