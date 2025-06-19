// src/pages/topics/InappropriateContent.jsx

import React from "react";
import { FaComments } from "react-icons/fa";

const InappropriateContent = () => {
  return (
    <section className="bg-slate-800 text-white px-6 py-12 space-y-12">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Inappropriate Content
        </h1>
        <p className="text-lg leading-relaxed text-justify text-gray-300">
          You can find almost anything online – from videos about kittens to mature content with violent, hateful, or sexual themes.
          A lot of this mature content is inappropriate for young people under 18. It can be especially disturbing for younger children,
          but even older teens may be bothered if they come across this content unintentionally. It is important to remember that it is
          not your fault if you accidentally come across inappropriate content online. Try to avoid inappropriate content by double checking
          the URLs you type and being careful about clicking on unknown links. In addition to encountering inappropriate content online,
          kids and teens may also share and post inappropriate comments and images. While it is best to refrain from illegal or inappropriate
          actions in the first place, some people have gotten into more trouble by sharing comments or images about them online.
        </p>
        <div className="h-1 mt-8 w-2/3 mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-4 text-xl font-semibold text-white">
          <FaComments className="text-2xl" />
          <span>Discussion Prompts</span>
        </div>
        <ol className="list-decimal list-inside text-gray-200 space-y-2 pl-4 text-base">
          <li>Have you come across any content online that bothered you?</li>
          <li>Who would you talk to if you came across any content online that bothered you?</li>
          <li>Would you be embarrassed or hurt by the content you share online?</li>
          <li>Have you ever seen posts from friends that changed the way you thought?</li>
        </ol>
      </div>
    </section>
  );
};

export default InappropriateContent;
