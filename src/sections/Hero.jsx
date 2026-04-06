import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {

  const roles = [
    "MERN Stack Developer",
    "Frontend Specialist",
    "Problem Solver",
    "UI/UX Focused Developer"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(roles[index].slice(0, i));
      i++;
      if (i > roles[index].length) {
        clearInterval(typing);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
    >

   
      <div className="absolute w-[700px] h-[700px] bg-yellow-500 blur-[200px] opacity-20 rounded-full animate-pulse"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[180px] opacity-10 rounded-full bottom-[-100px] right-[-50px]"></div>

      <div className="relative z-10">

        {/* Dynamic Role */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-gray-400 mb-4 tracking-widest uppercase h-5"
        >
          {text}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-extrabold leading-tight"
        >
          Abbas Bugadwala
        </motion.h1>

        {/* Strong Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I don’t just build websites — I build 
          <span className="text-yellow-400"> real-world systems </span>
          that solve business problems.
        </motion.p>

        {/* CTA Badges */}
        <div className="mt-6 flex gap-3 justify-center flex-wrap text-sm">
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full">
            🚀 Dubai Based
          </span>
          <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full">
            ⚡ Immediate Joiner
          </span>
        </div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-yellow-400 text-black rounded-xl font-semibold hover:scale-105 transition"
          >
            View Work
          </a>

          <a
            href="/cv.pdf"
            className="px-8 py-3 border border-gray-600 rounded-xl hover:bg-gray-800 transition"
          >
            Download CV
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator (Animated) */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-gray-500 text-sm"
      >
        ↓ Scroll
      </motion.div>

    </section>
  );
}