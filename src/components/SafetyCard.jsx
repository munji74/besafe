import { motion as Motion } from "framer-motion";

const SafetyCard = ({ icon, title, description }) => {
  return (
    <Motion.div
      className="bg-white rounded-xl p-6 shadow hover:shadow-lg text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </Motion.div>
  );
};

export default SafetyCard;
