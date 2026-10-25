"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { name: "Inicio", id: "inicio" },
  { name: "Sobre mí", id: "sobre-mi" },
  { name: "Proyectos", id: "proyectos" },
  { name: "Servicios", id: "servicios" },
  { name: "Contacto", id: "contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Si estamos prácticamente arriba, Inicio siempre está activo
      if (window.scrollY < 100) {
        setActiveSection("inicio");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-15% 0px -55% 0px",
        threshold: [0.05, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    // Marcar inmediatamente la opción seleccionada
    setActiveSection(id);

    const section = document.getElementById(id);

    if (section) {
      const navbarOffset = 30;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: sectionPosition,
        behavior: "smooth",
      });
    }

    setMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        delay: 0.2,
        ease: "easeOut",
      }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
    >
      <motion.nav
        animate={{
          y: scrolled ? -2 : 0,
          scale: scrolled ? 0.98 : 1,
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className={`
          relative overflow-hidden rounded-2xl
          border border-white/[0.08]
          px-4 py-3
          shadow-2xl
          backdrop-blur-xl
          transition-all duration-500
          ${
            scrolled
              ? "bg-black/75 shadow-black/40"
              : "bg-black/45"
          }
        `}
      >
        {/* Línea de luz superior */}
        <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("inicio")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2"
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] text-xs font-bold text-white">
              <span className="relative z-10">JA</span>

              <motion.span
                className="absolute inset-0 bg-white/10"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
            </span>

            <span className="hidden text-sm font-medium text-white/90 sm:block">
              José Avilés
            </span>
          </motion.button>

          {/* Navegación desktop */}
          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative rounded-xl px-4 py-2 text-sm"
                >
                  {/* Fondo animado */}
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-xl border border-white/[0.08] bg-white/[0.08]"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Texto */}
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      active
                        ? "text-white"
                        : "text-white/45 hover:text-white/90"
                    }`}
                  >
                    {item.name}
                  </span>

                  {/* Punto inferior */}
                  <AnimatePresence>
                    {active && (
                      <motion.span
                        layoutId="activeDot"
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        exit={{
                          opacity: 0,
                          scale: 0,
                        }}
                        className="absolute bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-white"
                      />
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Menú móvil */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] md:hidden"
            aria-label="Abrir menú"
          >
            <div className="flex w-5 flex-col gap-1.5">
              <motion.span
                animate={
                  menuOpen
                    ? { rotate: 45, y: 4 }
                    : { rotate: 0, y: 0 }
                }
                className="h-px w-full bg-white"
              />

              <motion.span
                animate={
                  menuOpen
                    ? { rotate: -45, y: -3 }
                    : { rotate: 0, y: 0 }
                }
                className="h-px w-full bg-white"
              />
            </div>
          </motion.button>
        </div>

        {/* Menú móvil desplegable */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 border-t border-white/[0.08] pt-3">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const active =
                      activeSection === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        initial={{
                          opacity: 0,
                          x: -10,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.04,
                        }}
                        onClick={() =>
                          scrollToSection(item.id)
                        }
                        className={`rounded-xl px-4 py-3 text-left text-sm transition ${
                          active
                            ? "bg-white/[0.08] text-white"
                            : "text-white/50 hover:bg-white/[0.04] hover:text-white"
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}