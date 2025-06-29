import { motion as Motion } from "framer-motion";

// Images stored in: public/images/goals/
const goals = [
  {
    icon: "⚠️",
    number: "1",
    title:
      "Equip young people with knowledge to navigate the internet safely and avoid potential risks.",
    image: "/images/goals/goal1.jpg",
  },
  {
    icon: "📄",
    number: "2",
    title:
      "Raise awareness of dangers like inappropriate content and risky online behaviors due to perceived anonymity.",
    image: "/images/goals/goal2.jpg",
  },
  {
    icon: "📢",
    number: "3",
    title:
      "Encourage the active involvement of parents and teachers to promote online safety and guide young people.",
    image: "/images/goals/goal3.jpg",
  },
  {
    icon: "💻",
    number: "4",
    title:
      "Provide tools to help young people use technology safely and respond to threats.",
    image: "/images/goals/goal4.jpg",
  },
];

const Goals = () => {
  return (
    <div className="bg-slate-800 text-white py-20 px-6 space-y-24">
      {/* Title */}
      <Motion.h1
        className="text-4xl font-bold text-blue-400 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Toolkit Goals
      </Motion.h1>

      {/* Goals Grid */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
        {goals.map((goal, index) => (
          <Motion.div
            key={index}
            className="bg-white bg-opacity-5 backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition hover:scale-105 cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <img
              src={goal.image}
              alt={`Goal ${goal.number}`}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mx-auto mb-4 text-white text-2xl">
                {goal.icon}
              </div>
              <h3 className="text-center text-base text-gray-200">{goal.title}</h3>
            </div>
          </Motion.div>
        ))}
      </div>

      {/* Who Should Use This Kit */}
      <Motion.div
        className="max-w-4xl mx-auto text-center space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-bold text-blue-400">Who should use this Kit?</h2>
        <p className="text-gray-300 text-lg">
          This kit is crafted for young people aged 5 to 20 years. Whether you're
          using the internet at school, home, or on a friend’s phone, this kit provides
          practical tools to help you stay safe.
        </p>
      </Motion.div>

      {/* What’s Inside the Kit */}
      <Motion.div
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
      </Motion.div>
    </div>
  );
};

export default Goals;
