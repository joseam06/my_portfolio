"use client";

import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Pantalla de carga */}
      {loading && (
        <LoadingScreen
          onComplete={() => setLoading(false)}
        />
      )}

      {/* Contenido principal */}
      {!loading && (
        <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">

          {/* Navbar */}
          <Navbar />

          {/* Inicio / Hero */}
          <Hero />

          {/* Sobre mí */}
          <About />

          {/* Proyectos */}
          <Projects />

          {/* Servicios */}
          <Services />

          {/* Contacto */}
          <Contact />

          {/* Footer */}
          <Footer />

        </main>
      )}
    </>
  );
}