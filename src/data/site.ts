export const site = {
  name: "Nahuel Rodriguez",
  role: "Full Stack Developer",
  tagline:
    "Construyo productos operativos end-to-end: SaaS, logística, salud y e-commerce. El stack lo elijo según el problema.",
  location: "San Pedro, Buenos Aires",
  avatar: "/avatar.jpg",
  avatarAlt: "Foto de Nahuel Rodriguez",
  email: "nahuelr.developer@gmail.com",
  linkedin: "https://www.linkedin.com/in/nahuelro/",
  github: "https://github.com/nahuelRo",
  cvUrl: "/cv.pdf",
  cvFilename: "Nahuel_Rodriguez_Full_Stack_Developer.pdf",
  url: "https://nahuel-rodriguez.vercel.app",
  description:
    "Portfolio de Nahuel Rodriguez, Full Stack Developer. Productos en producción con TypeScript, Next.js, NestJS, Vue, Laravel, AWS y PostgreSQL.",
  about: [
    "Llevo 3 años en producción armando software que una operación usa de verdad: hoteles, hospitales, depósitos y logística.",
    "Trabajo fullstack de punta a punta y también lideré un equipo técnico de 3 personas. Priorizo claridad de dominio, modelos de datos sólidos y entrega verificable.",
  ],
  education: {
    school: "Plataforma 5",
    program: "Full Stack Web Development Bootcamp",
    period: "Jul 2023 – Oct 2023",
    note: "Incluyó experiencia práctica con First Plug, que continuó como trabajo part-time.",
  },
  skills: [
    {
      category: "Frontend",
      items: ["TypeScript", "React", "Next.js", "Vue", "Astro", "Tailwind CSS"],
    },
    {
      category: "Backend",
      items: ["NestJS", "Node.js", "Laravel", "PHP", "APIs REST"],
    },
    {
      category: "Datos",
      items: ["PostgreSQL", "MySQL", "Supabase", "Prisma"],
    },
    {
      category: "Cloud & Dev",
      items: ["AWS", "Docker", "Git", "CI básico"],
    },
    {
      category: "IA aplicada",
      items: ["MCP", "Cursor", "Claude", "desarrollo asistido por IA"],
    },
  ],
} as const;
