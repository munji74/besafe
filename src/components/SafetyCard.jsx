import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const SafetyCard = ({ emoji, title, description, link }) => {
  return (
    <Link to={link}>
      <Motion.div
        className="
          flex flex-col items-center justify-start
          bg-white text-slate-900
          rounded-3xl p-5 shadow-md h-full
          transition-all duration-300 ease-out cursor-pointer
          hover:shadow-xl hover:ring-2 hover:ring-blue-300/60 hover:bg-sky-50
          group
        "
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ y: -6, scale: 1.03 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut", type: "spring", bounce: 0.3 }}
      >
        <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:animate-wiggle">
          {emoji}
        </div>
        <h3 className="text-lg font-extrabold text-center mb-2">{title}</h3>
        <p className="text-sm text-gray-700 text-center">{description}</p>
      </Motion.div>
    </Link>
  );
};

export default SafetyCard;
