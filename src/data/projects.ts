import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "bovisoft",
    title: "BoviSoft",
    description:
      "Sistema de gestión ganadera desarrollado en Laravel, en un contexto académico en la Universidad de Córdoba. Incluye control de animales, potreros, finanzas y reportes en PDF.",
    tags: ["Laravel", "Livewire", "PostgreSQL", "Docker"],
    image: "/projects/bovisoft.png",
    liveUrl: "https://bovisoft-oh38.onrender.com",
    githubUrl: "https://github.com/joseam06",
  },
  {
    id: "placeholder-1",
    title: "Próximo proyecto",
    description: "Aquí va la descripción de tu siguiente proyecto.",
    tags: ["Next.js", "TypeScript"],
    image: "/projects/placeholder-1.png",
    placeholder: true,
  },
  {
    id: "placeholder-2",
    title: "Próximo proyecto",
    description: "Aquí va la descripción de tu siguiente proyecto.",
    tags: ["React", "Tailwind"],
    image: "/projects/placeholder-2.png",
    placeholder: true,
  },
];