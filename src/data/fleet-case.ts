export const fleetCasePage = {
  title: "Sistema de gestión de flotas",
  description:
    "Caso de estudio: cómo apliqué el método Full Stack a un producto de operaciones de transporte — demo pública con datos sintéticos.",
  demoUrl: "https://fleet-ops-demo-azure.vercel.app/app/login",
  repoUrl: "https://github.com/nahuelRo/fleet-ops-demo",
  demoCredentials: {
    email: "demo@fleetops.dev",
    password: "FleetOpsDemo2026!",
  },
  hero: {
    eyebrow: "Caso de estudio",
    title: "Gestión de flotas, de punta a punta",
    subtitle:
      "Un sistema real de operaciones de transporte (viajes, flota, choferes, documentos, facturación) convertido en demo pública con datos ficticios. Sin marca ni datos de clientes.",
  },
  closing: {
    title: "El mismo método, otro dominio",
    body: "Operación, datos, permisos, stack y entrega. La demo muestra el producto navegable; este caso explica por qué se armó así.",
  },
} as const;

export type FleetCaseStage = {
  id: string;
  number: string;
  label: string;
  title: string;
  body: string;
  points: string[];
};

export const fleetCaseStages: FleetCaseStage[] = [
  {
    id: "operacion",
    number: "01",
    label: "Operación",
    title: "Mapear el día a día del transporte",
    body: "El producto no es un CRUD de camiones: es el camino crítico entre despacho, viaje, documentación y cobranza.",
    points: [
      "Roles: admin, operador, chofer (vista operativa).",
      "Viaje como unidad central: estado, cliente operativo, flota y gastos.",
      "Documentos con vencimiento (VTV, seguro, licencia) que bloquean o alertan.",
    ],
  },
  {
    id: "datos",
    number: "02",
    label: "Datos",
    title: "Modelo que separa operación y facturación",
    body: "Clientes de viaje vs clientes de facturación, vehículos/acoplados, choferes, gastos por viaje y proformas.",
    points: [
      "PostgreSQL en Supabase con migraciones versionadas.",
      "Soft delete y auditoría para no perder historial operativo.",
      "Seed demo 100% sintético — sin CUIT/DNI/patentes reales de producción.",
    ],
  },
  {
    id: "permisos",
    number: "03",
    label: "Límites",
    title: "Auth, roles y modo demo",
    body: "Login con Supabase Auth, perfiles con rol, y un modo demo que desactiva WhatsApp y subida de archivos externos.",
    points: [
      "RLS habilitado en tablas de dominio.",
      "Credenciales públicas solo para la demo (datos ficticios).",
      "Sin secretos de clientes ni buckets de producción.",
    ],
  },
  {
    id: "stack",
    number: "04",
    label: "Stack",
    title: "Next.js + Supabase para entregar rápido",
    body: "App Router, Server Actions y TypeScript. El stack sirve a la operación; no al revés.",
    points: [
      "Next.js App Router + Server Actions.",
      "Supabase Auth + Postgres (proyecto personal Forge).",
      "Deploy en Vercel con crons opcionales de alertas.",
    ],
  },
  {
    id: "entrega",
    number: "05",
    label: "Entrega",
    title: "Demo pública y caso en portfolio",
    body: "Repo público sanitizado, seed reproducible y landing de caso que explica el método aplicado.",
    points: [
      "Repo: nahuelRo/fleet-ops-demo.",
      "Demo live con login visible en pantalla.",
      "Portfolio: este caso + card con CTA a la demo.",
    ],
  },
];
