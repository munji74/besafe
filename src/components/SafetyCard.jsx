import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const SafetyCard = ({ IconComponent, title, description, link, iconColor = "text-blue-500" }) => {
  return (
    <Link to={link}>
      <Motion.div
        className="
          flex flex-col items-center justify-start
          bg-white/90 text-slate-800
          rounded-2xl p-6
          min-h-[320px] aspect-square
          shadow-md
          hover:shadow-xl
          hover:scale-[1.03]
          hover:brightness-105
          hover:border-[1.5px]
          hover:border-blue-300
          transition-all duration-300 ease-out
          cursor-pointer
        "
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className={`text-5xl mb-4 ${iconColor}`}>
          <IconComponent />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-sm text-gray-700 text-center">{description}</p>
      </Motion.div>
    </Link>
  );
};

export default SafetyCard;
