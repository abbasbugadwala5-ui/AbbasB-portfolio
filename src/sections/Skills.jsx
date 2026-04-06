import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: "Frontend" },
  { name: "Node.js", level: "Backend" },
  { name: "Express.js", level: "Backend" },
  { name: "MongoDB", level: "Database" },
  { name: "JWT Auth", level: "Security" },
  { name: "REST APIs", level: "API" },
  { name: "Vercel", level: "Deployment" },
  { name: "Render", level: "Deployment" },
  { name: "Figma", level: "Design" }
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 max-w-7xl mx-auto text-center">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-transparent bg-clip-text">
          Tech Stack
        </h2>
        <p className="text-gray-400 mt-4">
          Technologies I use to build scalable and modern applications
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.08 }}
            className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden"
          >

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition"></div>

            {/* Content */}
            <div className="relative z-10">

              {/* Skill Name */}
              <h3 className="text-lg font-semibold mb-2">
                {skill.name}
              </h3>

              {/* Category */}
              <p className="text-xs text-gray-400">
                {skill.level}
              </p>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}