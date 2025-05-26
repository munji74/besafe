import React from "react";

const SafetyCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg hover:scale-[1.02] transition-all text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default SafetyCard;
