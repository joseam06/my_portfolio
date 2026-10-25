"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-10">
      <div className="mx-auto max-w-6xl">

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
        >

          {/* Marca */}
          <div>
            <p className="text-lg font-semibold tracking-tight">
              José Miguel Avilés Mogollón<span className="text-white/25">.</span>
            </p>

            <p className="mt-2 text-xs text-white/30">
              Ingeniero de Sistemas · Desarrollador de Software
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/joseam06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/jose-miguel-aviles-mogollon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              LinkedIn ↗
            </a>

            <a
              href="mailto:joseavmo60@gmail.com"
              className="text-xs text-white/35 transition-colors hover:text-white"
            >
              Email ↗
            </a>
          </div>
        </motion.div>

        {/* Línea inferior */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/[0.05] pt-5 text-[10px] uppercase tracking-[0.15em] text-white/20 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} José Avilés
          </span>

          <span>
            Built with Next.js · React · TypeScript · Tailwind CSS
          </span>
        </div>

      </div>
    </footer>
  );
}