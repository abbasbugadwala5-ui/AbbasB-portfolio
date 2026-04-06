import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 text-center overflow-hidden"
    >

      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-yellow-500 blur-[120px] opacity-20 rounded-full top-10 left-1/2 -translate-x-1/2"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-3xl mx-auto"
      >

        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Let’s Build Something <br />
          <span className="text-yellow-400">Amazing Together</span>
        </h2>

        <p className="text-gray-400 mb-10 text-lg">
          I'm currently in Dubai and open to frontend or MERN roles.  
          If you're looking for someone who can build real-world applications — let's connect.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">

          <a
            href="mailto:abbasbugadwala5@gmail.com"
            className="px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            Email Me
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            className="px-8 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            LinkedIn
          </a>

        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-sm text-gray-400">Email</p>
            <p className="mt-2 font-medium">abbasbugadwala5@gmail.com</p>
          </div>

          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10">
            <p className="text-sm text-gray-400">Phone</p>
            <p className="mt-2 font-medium">+91 9586520971</p>
          </div>

        </div>

        {/* Availability */}
        <p className="mt-10 text-yellow-400 font-semibold text-lg">
          🚀 Immediate Joiner | Dubai Based
        </p>

      </motion.div>
    </section>
  );
}