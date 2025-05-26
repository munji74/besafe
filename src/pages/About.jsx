import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16">
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-blue-400 mb-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About The E-Safety Tool Kit
      </motion.h1>

      {/* Paragraphs */}
      <div className="max-w-5xl mx-auto space-y-8 text-lg leading-relaxed text-gray-200">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          This Toolkit has been designed to help young people in Uganda stay safe while confidently engaging online resources for productive and entertainment purposes. In this day and age, it is quite clear that emerging technologies have fundamentally transformed how children relate with the wide and wild world, with deep integration into almost every aspect of life. Children today are growing up in a hyper-connected realm, with early access to the internet, easily navigating platforms with confidence. While the digital space offers immense learning and development opportunities, it also brings inappropriate content and risks—most of which can jeopardize safety.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Information access and fast sharing across diverse channels has redefined social interaction and reshaped relationships. Platforms commonly used by young Ugandans—such as Facebook, Instagram, TikTok, WhatsApp, and X—are not inherently dangerous, but the anonymity they offer can foster risk. The ease of account creation and remote interaction creates a vulnerable space for children and young adults, increasing their exposure to inappropriate behavior and online threats.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          With the right knowledge and tools, both children and adults can navigate technology safely, mitigate risks, and respond to digital threats effectively. Adults who are informed about online dangers play a key role in creating a safe online environment for younger users.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          This E-Safety Toolkit was originally developed in 2019 and updated in 2025 with the help of online safety experts. It aims to empower Ugandan youth with practical skills for using the internet responsibly—helping them avoid exposure to harmful content while still enjoying online learning, communication, and entertainment.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
