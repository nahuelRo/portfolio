export const methodPage = {
  title: "Cómo trabajo",
  description:
    "Cómo construyo software de punta a punta: operación, datos, permisos, stack, UI, APIs, testing, CI/CD y mantenimiento.",
  hero: {
    eyebrow: "Método",
    title: "Cómo construyo software de punta a punta",
    subtitle:
      "Antes de elegir un framework, ordeno el problema. El stack cambia; el método no. Este recorrido es cómo paso de una operación real a un producto mantenible.",
  },
  teaser: {
    title: "Cómo trabajo",
    body: "Ordeno la operación, el modelo de datos y los límites antes de construir. Después viene UI, API, pruebas, entrega y mantenimiento.",
    cta: "Ver cómo trabajo",
  },
  closing: {
    title: "Eso es lo que ofrezco como Full Stack",
    body: "No solo escribir features: entender el dominio, sostener el camino crítico y dejar el producto en un estado en el que se pueda seguir iterando.",
  },
} as const;

export type MethodVisual =
  | "operation"
  | "data"
  | "permissions"
  | "stack"
  | "ui"
  | "api"
  | "testing"
  | "cicd"
  | "maintenance";

export type MethodStage = {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  points: string[];
  visual: MethodVisual;
};

export const methodStages: MethodStage[] = [
  {
    id: "operacion",
    number: "01",
    label: "Operación",
    title: "Entender la operación",
    body: "Empiezo por quién usa el sistema, qué decisión toma y dónde se rompe hoy el proceso. Sin ese mapa, el código solo maquilla el caos.",
    points: [
      "Roles reales: operador, admin, cliente, chofer, médico, etc.",
      "Camino crítico del día a día, no el happy path de la demo.",
      "Fricciones actuales: planillas, chats, sistemas viejos, trabajo manual.",
    ],
    visual: "operation",
  },
  {
    id: "datos",
    number: "02",
    label: "Datos",
    title: "Modelo de datos y base",
    body: "Defino entidades, relaciones e invariantes. Un buen modelo evita reescribir el producto cuando aparece el segundo cliente o el segundo rol.",
    points: [
      "Entidades del dominio antes que tablas “técnicas”.",
      "PostgreSQL / MySQL / Supabase según el problema y la velocidad de entrega.",
      "Migraciones y consistencia como parte del diseño, no como afterthought.",
    ],
    visual: "data",
  },
  {
    id: "permisos",
    number: "03",
    label: "Límites",
    title: "Permisos, scope y fronteras",
    body: "Quién puede ver o cambiar qué. En SaaS multi-tenant eso incluye aislamiento entre empresas y límites claros de responsabilidad.",
    points: [
      "Roles y políticas explícitas (no “if admin” sueltos).",
      "Scope por tenant, organización o unidad operativa.",
      "Límites de producto: qué queda fuera para no inflar el MVP.",
    ],
    visual: "permissions",
  },
  {
    id: "stack",
    number: "04",
    label: "Stack",
    title: "Elegir el stack según el problema",
    body: "TypeScript, Next.js, NestJS, Vue, Laravel, AWS o Supabase no son identidad: son herramientas. Elijo lo que mejor sostiene el dominio y el equipo.",
    points: [
      "Frontend y backend alineados al flujo, no al hype.",
      "Cloud y servicios solo donde aportan (auth, storage, colas, CDN).",
      "Preferencia por stacks ya probados en producción cuando el riesgo es alto.",
    ],
    visual: "stack",
  },
  {
    id: "ui",
    number: "05",
    label: "UI",
    title: "Construir la interfaz del camino crítico",
    body: "La UI existe para que la operación avance. Priorizo claridad, estados vacíos/error/carga y pantallas que alguien use todos los días.",
    points: [
      "Diseño del flujo principal antes que pantallas decorativas.",
      "Estados explícitos: loading, vacío, error, éxito.",
      "Accesibilidad y responsive como parte del producto, no como checklist final.",
    ],
    visual: "ui",
  },
  {
    id: "api",
    number: "06",
    label: "API",
    title: "APIs e integraciones",
    body: "Contratos claros entre frontend, backend y sistemas externos. Las integraciones son bordes: hay que diseñar fallos, retries y ownership.",
    points: [
      "APIs REST con límites y validación en el borde.",
      "Integraciones (pagos, email, cloud, LLM/MCP) con fallos esperables.",
      "Contratos que un front y un back puedan evolucionar sin romperse a ciegas.",
    ],
    visual: "api",
  },
  {
    id: "testing",
    number: "07",
    label: "Testing",
    title: "Verificar el camino crítico",
    body: "Pruebo el caso feliz y los bordes que duelen en producción. Ajusto con evidencia, no con intuición de demo.",
    points: [
      "Recorridos end-to-end del flujo que importa a la operación.",
      "Casos de borde: permisos, datos incompletos, concurrencia.",
      "Regresión en lo que ya funcionaba antes de sumar features.",
    ],
    visual: "testing",
  },
  {
    id: "cicd",
    number: "08",
    label: "Entrega",
    title: "CI/CD y salida a producción",
    body: "Entregar no es “subir un zip”. Es poder repetir el deploy con confianza: build, checks y un camino de release predecible.",
    points: [
      "Pipelines básicos: install, lint/typecheck, build, deploy.",
      "Entornos y variables separados; secretos fuera del repo.",
      "Releases que se puedan revertir o corregir rápido.",
    ],
    visual: "cicd",
  },
  {
    id: "mantenimiento",
    number: "09",
    label: "Mantenimiento",
    title: "Operar, iterar y sostener",
    body: "El producto no termina en el launch. Monitoreo, deuda controlada y desarrollo asistido por IA con criterio técnico — no como reemplazo del juicio.",
    points: [
      "Soporte y evolución con prioridades de negocio.",
      "Observabilidad mínima: errores, logs, caminos rotos.",
      "IA (Cursor, Claude, MCP) para acelerar, con review humana.",
    ],
    visual: "maintenance",
  },
];
