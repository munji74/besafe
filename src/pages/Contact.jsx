import { motion as Motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="bg-slate-800 text-white px-6 py-16 min-h-[80vh]">
      <Motion.h1
        className="text-4xl md:text-5xl font-bold text-blue-400 text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </Motion.h1>

      <Motion.p
        className="text-center text-gray-300 max-w-2xl mx-auto mb-12 text-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We'd love to hear from you. Whether you have a question, feedback, or need help — just fill out the form below and we’ll respond soon.
      </Motion.p>

      <Motion.form
        className="max-w-xl mx-auto space-y-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Form submission feature coming soon!");
        }}
      >
        <div>
          <label className="block text-sm mb-1 text-gray-300" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            required
            placeholder="Your name"
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="block text-sm mb-1 text-gray-300" htmlFor="message">Message</label>
          <textarea
            id="message"
            rows="5"
            required
            placeholder="How can we help you?"
            className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Send Message
        </button>
      </Motion.form>
    </div>
  );
};

export default Contact;
