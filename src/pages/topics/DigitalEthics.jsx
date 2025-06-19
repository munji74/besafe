import React from "react";
import { motion } from "framer-motion";
import { FaComments } from "react-icons/fa";

const DigitalEthics = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-white">
          Digital Ethics
        </h1>
        <p className="text-lg text-gray-200 leading-relaxed mb-6 text-justify">
          Digital ethics is about following the online rules — even if no one is there to catch you breaking them.
          One of the most important online rules is respecting content posted by other people. This includes not pirating
          (stealing) copyrighted content like movies and music; and giving credit to the creators of any text, images,
          or music that you use. If you quote an online article in a paper, you should credit the author. Failure to do so
          is called plagiarism — which is a type of cheating.
        </p>
        <p className="text-lg text-gray-200 leading-relaxed mb-10 text-justify">
          The Internet has made it easier to plagiarize and cheat in other ways, such as posting homework solutions online
          and texting each other test answers. Sometimes the line between cheating and using the Internet for “help”
          may seem blurry, so it is important to talk to teachers about their expectations for each assignment.
        </p>

        <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-teal-400 rounded-full my-12"></div>

        <div className="flex items-start gap-4 mb-4">
          <FaComments size={32} className="text-white mt-1" />
          <h2 className="text-2xl font-semibold text-white">
            Discussion Prompts
          </h2>
        </div>
        <ul className="text-gray-300 space-y-4 list-decimal list-inside ml-2 text-justify">
          <li>
            Do you think digital ethics is a problem in your school/community? Why or why not?
          </li>
          <li>
            Why is it important to give credit to online content creators?
          </li>
          <li>
            Have you ever seen someone use digital content without permission or credit? How did that make you feel?
          </li>
          <li>
            How can schools encourage responsible digital behavior?
          </li>
          <li>
            Brainstorm ways students can promote ethical online habits among their peers.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default DigitalEthics;
