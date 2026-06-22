// Lógica de catálogo compartida entre la skill stock-report y el MCP server.
// Única fuente de verdad para: cómo se carga el catálogo, cómo se clasifica
// el stock, y cómo se busca un producto. Evita que ambos consumidores
// definan su propia copia del umbral o de la lógica de búsqueda.

import { readFileSync } from "fs";

export const LOW_STOCK_THRESHOLD = 5;

/**
 * Carga el catálogo desde un path absoluto a catalog.json.
 * Cada consumidor (skill, MCP server) resuelve su propio path relativo
 * y lo pasa acá, para no acoplar este módulo a una ubicación fija.
 */
export function loadCatalog(catalogPath) {
  const raw = readFileSync(catalogPath, "utf-8");
  return JSON.parse(raw).products;
}

/**
 * Clasifica un producto según su stock.
 * Devuelve "sin_stock" | "stock_bajo" | "ok".
 */
export function classify(product) {
  if (product.stock === 0) return "sin_stock";
  if (product.stock <= LOW_STOCK_THRESHOLD) return "stock_bajo";
  return "ok";
}

/**
 * Traduce la clasificación interna a una etiqueta legible en español,
 * usada tanto en el reporte de la skill como en la respuesta del MCP server.
 */
export function classifyLabel(product) {
  const c = classify(product);
  if (c === "sin_stock") return "sin stock";
  if (c === "stock_bajo") return "stock bajo";
  return "disponible";
}

/**
 * Busca un producto por SKU exacto (case-insensitive) o, si no matchea,
 * por coincidencia parcial de nombre. Usado por el MCP server y por
 * cualquier otro consumidor que necesite resolver una query de usuario
 * contra el catálogo.
 */
export function findProduct(products, query) {
  const q = query.trim().toLowerCase();
  if (!q) return null;

  const bySku = products.find((p) => p.sku.toLowerCase() === q);
  if (bySku) return bySku;

  return products.find((p) => p.name.toLowerCase().includes(q)) ?? null;
}

/**
 * Agrupa el catálogo en las tres categorías de stock, con stock_bajo
 * ordenado de menor a mayor (igual que el reporte original).
 */
export function groupByStockStatus(products) {
  const sinStock = products.filter((p) => classify(p) === "sin_stock");
  const stockBajo = products
    .filter((p) => classify(p) === "stock_bajo")
    .sort((a, b) => a.stock - b.stock);
  const ok = products.filter((p) => classify(p) === "ok");
  return { sinStock, stockBajo, ok };
}
