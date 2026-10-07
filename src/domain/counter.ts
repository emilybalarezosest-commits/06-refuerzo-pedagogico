/**
 * ============================================================================
 * 🥊 RETO 01 — Dominio del Contador (TypeScript puro)
 * Módulo: Programación Móvil — 3° Bachillerato Técnico (UETS)
 * Docente: Ing. Milton Velásquez
 * ============================================================================
 *
 * 📖 CONTEXTO (BASE PARA EL SCREENCAST):
 * El Bar Salesiano necesita contadores de productos (sanduches, empanadas,
 * jugos). Este archivo es el "motor" lógico: no usa React Native, solo
 * TypeScript puro, por eso se puede probar sin encender la app.
 *
 * 🛠️ RETO (responde con código, no con texto):
 *  1. En `calcularValor`: ¿qué operación aplicas al subir? ¿y al bajar? ¿cómo evitas
 *     salirte de `minimo`/`maximo`?
 *  2. En `estadoUI`: ¿cuándo el contador está en un extremo? ¿y cuándo no?
 *  3. Ejecuta en tu terminal: `pnpm run start:01`
 */

export type Direccion = 'incrementar' | 'decrementar';
export type EstadoUI = 'NORMAL' | 'MINIMO' | 'MAXIMO';

export function calcularNuevoValor(
  valorActual: number,
  paso: number,
  direccion: Direccion,
  minimo: number,
  maximo: number
): number {
  const cambio = direccion === 'incrementar' ? paso : -paso;
  const candidato = valorActual + cambio;
  
  // Clamping en una sola línea:
  return Math.max(minimo, Math.min(maximo, candidato));
}

export function obtenerEstadoUI(
  valor: number,
  minimo: number,
  maximo: number
): EstadoUI {
  if (valor >= maximo) return 'MAXIMO';
  if (valor <= minimo) return 'MINIMO';
  return 'NORMAL';
}
