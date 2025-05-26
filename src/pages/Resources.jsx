import { motion as Motion } from "framer-motion";

const pledges = [
  { age: "2–6yrs", link: "#", delay: 0 },
  { age: "6–13yrs", link: "#", delay: 0.1 },
  { age: "13–18yrs", link: "#", delay: 0.2 },
];

const smartRules = [
  {
    letter: "S",
    label: "SAFE",
    color: "text-purple-500",
    text: "Keep safe by not giving out personal information online. This includes your email, phone number, and password."
  },
  {
    letter: "M",
    label: "MEETING",
    color: "text-blue-400",
    text: "Meeting someone in person from online can be dangerous. Only do so with a parent’s permission and presence."
  },
  {
    letter: "A",
    label: "ACCEPTING",
    color: "text-orange-500",
    text: "Accepting files or messages from strangers can lead to problems. They may contain viruses or inappropriate content."
  },
  {
    letter: "R",
    label: "RELIABLE",
    color: "text-yellow-400",
    text: "People online might lie about who they are. Always check facts with trusted sources or adults."
  },
  {
    letter: "T",
    label: "TELL",
    color: "text-teal-400",
    text: "If anything online makes you uncomfortable, tell a parent, guardian, or trusted adult immediately."
  }
];

const Resources = () => {
  return (
    <div className="bg-slate-800 text-white px-6 py-16 space-y-24">

      {/* Section 1: Downloadables */}
      <section className="text-center">
        <Motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-400 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Downloadable Resources
        </Motion.h1>
        <p className="text-gray-300 text-lg mb-10">
          Access our collection of helpful PDFs for young people.
        </p>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl mx-auto">
          {pledges.map((pledge, index) => (
            <Motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow text-center text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: pledge.delay, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-4">Pledge (Age {pledge.age})</h3>
              <a
                href={pledge.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600"
              >
                Download Pledge
              </a>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* Section 2: SMART Rules */}
      <section>
        <Motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-green-300">SMART Rules to Help You!</h2>
          <p className="text-gray-300 mt-3">A quick guide to staying safe and responsible online.</p>
        </Motion.div>

        <div className="max-w-4xl mx-auto space-y-10">
          {smartRules.map((rule, idx) => (
            <Motion.div
              key={rule.letter}
              className="flex items-start gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl font-extrabold ${rule.color} w-10`}>{rule.letter}</div>
              <div>
                <h3 className={`font-bold ${rule.color} text-xl`}>{rule.label}:</h3>
                <p className="text-gray-300 mt-1">{rule.text}</p>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
