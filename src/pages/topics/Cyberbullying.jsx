import { motion } from "framer-motion";
import { FaCommentSlash, FaShieldAlt, FaPowerOff, FaComments } from "react-icons/fa";

const Cyberbullying = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cyberbullying</h1>
        <p className="text-lg text-gray-300 mb-4">
          Technology has made it easier for young people to connect—but also to hurt one another.
          Cyberbullying happens through phones, computers, webcams, or online messaging platforms,
          and can feel just as bad—or worse—than face-to-face bullying.
        </p>
        <p className="text-md text-gray-400">
          It includes sending mean messages, spreading rumors, impersonating others, or sharing
          embarrassing photos. Unlike traditional bullying, it follows the victim even at home.
        </p>
      </div>

      {/* What to do */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm md:text-base">
        <div>
          <h3 className="font-bold text-purple-400 mb-2 flex items-center gap-2">
            😢 If you're being cyberbullied
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Don't respond</li>
            <li>Block the bully</li>
            <li>Save any evidence</li>
            <li>Report the abuse</li>
            <li>Talk to an adult or friend you trust</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-yellow-400 mb-2 flex items-center gap-2">
            🤔 Thinking of bullying?
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Pause and reflect—how would it feel?</li>
            <li>Talk to a trusted adult</li>
            <li>Understand the consequences (school/law)</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-teal-400 mb-2 flex items-center gap-2">
            👀 Bystanders can help
          </h3>
          <ul className="list-disc pl-5 space-y-1 text-gray-200">
            <li>Don’t like or forward hurtful messages</li>
            <li>Support the victim with kind words</li>
            <li>Report to trusted adults or platforms</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-teal-500 w-3/4 mx-auto" />

      {/* How to Deal with Cyberbullying */}
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-white mb-4">How to Deal with Cyberbullying</h2>
        <ul className="list-decimal space-y-2 pl-6 text-gray-200">
          <li>Don’t reply to mean messages</li>
          <li>Keep records: screenshots, texts, or posts</li>
          <li>Report to a teacher, parent, or trusted adult</li>
          <li>Protect your info: strong passwords, private accounts</li>
          <li>Change passwords often and stay alert</li>
        </ul>
      </div>

      {/* Prompts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-sm">
        <div>
          <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
            💬 Discussion Prompts
          </h3>
          <ol className="list-decimal space-y-2 pl-5 text-gray-300">
            <li>Is cyberbullying a problem in your school or area?</li>
            <li>How might someone feel when cyberbullied?</li>
            <li>Have you ever witnessed it? What did you do?</li>
            <li>Have you ever reported it? What happened?</li>
            <li>What can schools or communities do to stop it?</li>
          </ol>
        </div>

        {/* Reminder tiles */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-600 rounded-lg p-4 text-center">
            <FaShieldAlt size={24} className="mx-auto mb-2" />
            <p className="font-bold">SAVE</p>
            <p className="text-sm">Keep evidence & share with a trusted adult.</p>
          </div>
          <div className="bg-blue-600 rounded-lg p-4 text-center">
            <FaCommentSlash size={24} className="mx-auto mb-2" />
            <p className="font-bold">BLOCK</p>
            <p className="text-sm">Block bullies. Don’t engage or reply.</p>
          </div>
          <div className="bg-teal-600 rounded-lg p-4 text-center">
            <FaPowerOff size={24} className="mx-auto mb-2" />
            <p className="font-bold">LOG OFF</p>
            <p className="text-sm">Step away and protect your peace.</p>
          </div>
          <div className="bg-yellow-500 rounded-lg p-4 text-center">
            <FaComments size={24} className="mx-auto mb-2" />
            <p className="font-bold">TALK</p>
            <p className="text-sm">You’re not alone—talk to someone.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cyberbullying;
