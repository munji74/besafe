import { motion } from "framer-motion";
import { FaExclamationTriangle, FaFileAlt, FaBullhorn, FaDesktop } from "react-icons/fa";

const goals = [
  {
    icon: <FaExclamationTriangle className="text-white text-2xl" />,
    color: "bg-purple-500",
    number: "1",
    title: "Equip young people with knowledge to navigate the internet safely and avoid potential risks.",
  },
  {
    icon: <FaFileAlt className="text-white text-2xl" />,
    color: "bg-orange-500",
    number: "2",
    title: "Raise awareness of dangers like inappropriate content and risky online behaviors due to perceived anonymity.",
  },
  {
    icon: <FaBullhorn className="text-white text-2xl" />,
    color: "bg-blue-500",
    number: "3",
    title: "Encourage the active involvement of parents and teachers to promote online safety and guide young people.",
  },
  {
    icon: <FaDesktop className="text-white text-2xl" />,
    color: "bg-yellow-400",
    number: "4",
    title: "Provide tools to help young people use technology safely and respond to threats.",
  },
];

const Goals = () => {
  return (
    <div className="bg-slate-800 text-white py-20 px-6 space-y-24">
      {/* Title */}
      <motion.h1
        className="text-4xl font-bold text-blue-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Toolkit Goals
      </motion.h1>

      {/* Goals Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {goals.map((goal, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-slate-700 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-full w-16 h-16 flex items-center justify-center ${goal.color} mb-4`}>
              {goal.icon}
            </div>
            <h3 className="text-base text-gray-300">{goal.title}</h3>
          </motion.div>
        ))}
      </div>

      {/* Who Should Use This Kit */}
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-blue-400">Who should use this Kit?</h2>
        <p className="text-gray-300 text-lg">
          This kit is crafted for young people aged 5 to 20 years. Whether you're using the internet at school, home, or on a friend’s phone, this kit provides practical tools to help you stay safe.
        </p>
      </motion.div>

      {/* What’s Inside the Kit */}
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">
          Within this kit, you will find the following resources:
        </h2>
        <ul className="list-disc list-inside text-lg text-gray-200 space-y-2">
          <li>
            <strong>Online Safety Resources:</strong> Guides that explain key risks and safety techniques.
          </li>
          <li>
            <strong>Online Safety Pledges:</strong> Printable pledges for different age groups with simple rules for safer internet use.
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Goals;
