import React from "react";
import SafetyCard from "./SafetyCard";

const tips = [
  {
    icon: "😤",
    title: "CyberBullying",
    description: "Bullying can now occur through a phone, a computer, or webcam, as well as in person."
  },
  {
    icon: "📲",
    title: "Digital Ethics",
    description: "Digital ethics is about following online rules — even if no one is there to catch you."
  },
  {
    icon: "💬",
    title: "Inappropriate Content",
    description: "You can find almost anything online — including content with violent, hateful, or sexual themes."
  },
  {
    icon: "💼",
    title: "Online Privacy",
    description: "Once you share personal info online, it’s easy to lose control of it."
  },
  {
    icon: "🗑️",
    title: "Unwanted Requests",
    description: "Adults may ask young people for inappropriate chats, images, or meetings offline."
  },
  {
    icon: "🚫",
    title: "Online Predators",
    description: "Children may encounter harmful people online while trying to make friends."
  },
  {
    icon: "🎮",
    title: "Online Gaming",
    description: "Gaming can be fun, but may expose users to inappropriate content or overspending."
  },
  {
    icon: "🤖",
    title: "AI Dangers",
    description: "AI tools can mislead, invade privacy, or manipulate users if misused."
  },
];

const SafetyTips = () => {
  return (
    <section className="py-16 bg-slate-800 text-white px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-6">
        Online Risks and Safety Tips for Young People
      </h2>
      <p className="text-center text-gray-300 max-w-3xl mx-auto mb-10">
        ISOC Toolkit is designed with both children and adults in mind, creating a digital environment everyone can trust.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tips.map((tip, idx) => (
          <SafetyCard
            key={idx}
            icon={tip.icon}
            title={tip.title}
            description={tip.description}
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyTips;
