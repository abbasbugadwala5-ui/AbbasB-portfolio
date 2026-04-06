import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden"
    >

      {/* Background Glow */}
      {/* <div className="absolute w-[500px] h-[500px] bg-purple-500 blur-[150px] opacity-10 rounded-full top-0 left-[-100px]"></div> */}
{/* Shared Glow Layer */}
<div className="absolute w-[400px] h-[400px] bg-yellow-500 blur-[150px] opacity-10 rounded-full top-[-100px] left-[20%]"></div>
<div className="absolute w-[300px] h-[300px] bg-purple-500 blur-[120px] opacity-10 rounded-full bottom-[-100px] right-[10%]"></div>
      <div className="grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Title */}
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            I build systems, not just websites
          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-8 text-lg">
            I'm a <span className="text-white font-medium">MERN Stack Developer</span> 
            focused on creating scalable and production-ready applications.  
            I specialize in <span className="text-yellow-400">React.js</span>, APIs, and secure backend systems.
          </p>

          <p className="text-gray-400 leading-8 text-lg mt-6">
            From ERP systems to modern UI platforms, I have built and deployed real-world
            applications using Vercel, Render, and MongoDB Atlas.
          </p>

          {/* Stats */}
          <div className="flex gap-10 mt-10">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">2+</h3>
              <p className="text-gray-400 text-sm">Projects Built</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">100%</h3>
              <p className="text-gray-400 text-sm">Deployment Success</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">Dubai</h3>
              <p className="text-gray-400 text-sm">Available Now</p>
            </div>
          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >

          {/* Card */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">💼 Full Stack Development</h3>
            <p className="text-gray-400 text-sm">
              Building complete applications from frontend UI to backend APIs and databases.
            </p>
          </div>

          {/* Card */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">⚡ Real-World Problem Solving</h3>
            <p className="text-gray-400 text-sm">
              Developing systems that solve actual business problems like ERP and dashboards.
            </p>
          </div>

          {/* Card */}
          <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">🚀 Production Deployment</h3>
            <p className="text-gray-400 text-sm">
              Experienced in deploying and maintaining apps on modern cloud platforms.
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}