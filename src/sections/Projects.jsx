import { motion } from "framer-motion";

const projects = [
  {
    title: "UAE VAT ERP System",
    desc: "Full-scale MERN ERP with VAT automation, dashboards, and secure authentication.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/erp.png",
    live: "https://uae-quotation-vat-builder.vercel.app",
    // github: "https://github.com/yourrepo"
  },
  {
    title: "Trip Point Travel Website",
    desc: "Modern travel platform with smooth animations, responsive UI and optimized performance.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/travel.png",
    live: "https://trippointtour.com",
    // github: "https://github.com/yourrepo"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32">
      <div className="container-custom">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            My Work
          </h2>
          <p className="text-gray-400 mt-4">
            Real-world projects showcasing development & UI skills
          </p>
        </motion.div>

        {/* Projects */}
        <div className="flex flex-col gap-16">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="group"
            >

              <div className="grid md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-6">

                {/* IMAGE */}
            <div className="relative overflow-hidden rounded-xl">
  <img
    src={p.image}
    alt={p.title}
    className="w-full h-[200px] sm:h-[250px] md:h-[280px] object-cover transition duration-500 group-hover:scale-105"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition"></div>

  {/* View button on hover */}
  <a
    href={p.live}
    target="_blank"
    className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition text-sm"
  >
    🔗 View Project
  </a>
</div>

                {/* CONTENT */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {p.title}
                  </h3>

                  <p className="text-gray-400 text-sm sm:text-base">
                    {p.desc}
                  </p>

                  {/* Tech */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 bg-white/10 border border-white/20 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">

                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 bg-yellow-400 text-black rounded-lg text-sm font-semibold text-center hover:scale-105 transition"
                    >
                      🔗 Live Demo
                    </a>
{/* 
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2 border border-white/30 rounded-lg text-sm text-center hover:bg-white/10 transition"
                    >
                      💻 View Code
                    </a> */}

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}