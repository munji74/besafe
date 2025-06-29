import React from "react";
import SafetyCard from "./SafetyCard";

const tips = [
  {
    emoji: "😤",
    title: "CyberBullying",
    description: "Bullying can now occur through a phone, a computer, or webcam, as well as in person.",
    link: "/cyberbullying",
  },
  {
    emoji: "📲",
    title: "Digital Ethics",
    description: "Digital ethics is about following online rules — even if no one is there to catch you.",
    link: "/digital-ethics",
  },
  {
    emoji: "⚠️",
    title: "Inappropriate Content",
    description: "You can find almost anything online — including content with violent, hateful, or sexual themes.",
    link: "/inappropriate-content",
  },
  {
    emoji: "💼",
    title: "Online Privacy",
    description: "Once you share personal info online, it’s easy to lose control of it.",
    link: "/online-privacy",
  },
  {
    emoji: "🗑️",
    title: "Unwanted Requests",
    description: "Adults may ask young people for inappropriate chats, images, or meetings offline.",
    link: "/unwanted-requests",
  },
  {
    emoji: "🚫",
    title: "Online Predators",
    description: "Children may encounter harmful people online while trying to make friends.",
    link: "/online-predators",
  },
  {
    emoji: "🎮",
    title: "Online Gaming",
    description: "Gaming can be fun, but may expose users to inappropriate content or overspending.",
    link: "/online-gaming",
  },
  {
    emoji: "🤖",
    title: "AI Dangers",
    description: "AI tools can mislead, invade privacy, or manipulate users if misused.",
    link: "/ai-dangers",
  },
];

const SafetyTips = () => {
  return (
    <section className="py-16 bg-blue-100 text-slate-900 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-800 mb-6">
        Online Risks and Safety Tips for Young People
      </h2>
      <p className="text-center text-slate-700 max-w-3xl mx-auto mb-10">
        ISOC Toolkit is designed with both children and adults in mind, creating a digital environment everyone can trust.
      </p>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {tips.map((tip, idx) => (
          <SafetyCard
            key={idx}
            emoji={tip.emoji}
            title={tip.title}
            description={tip.description}
            link={tip.link}
          />
        ))}
      </div>
    </section>
  );
};

export default SafetyTips;
