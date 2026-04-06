import { motion } from "framer-motion";

const navItems = ["Home", "About", "Projects", "Contact"];

export default function Navbar() {
  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50 px-4">

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="flex items-center justify-between w-full max-w-3xl px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/10"
      >

        <h1 className="text-sm font-semibold">Abbas.dev</h1>

        <div className="hidden md:flex gap-6 text-sm">
          {navItems.map((item, i) => (
            <a key={i} href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white">
              {item}
            </a>
          ))}
        </div>

      </motion.div>
    </div>
  );
}