#!/usr/bin/env node
// Script real que respalda la skill stock-report.
// Lee data/catalog.json y genera el reporte de precios/stock.
// La lógica de clasificación y agrupado vive en shared/catalog-utils.js,
// compartida con el MCP server (ver decisión 2 en CLAUDE.md): así el
// umbral de "stock bajo" se define una sola vez para todo el repo.

import { fileURLToPath } from "url";
import path from "path";
import { loadCatalog, groupByStockStatus } from "../../../shared/catalog-utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.resolve(__dirname, "../../../data/catalog.json");

function buildReport(products) {
  const { sinStock, stockBajo, ok } = groupByStockStatus(products);
  const today = new Date().toISOString().slice(0, 10);

  let out = `📦 Reporte de stock — TechStore (${today})\n\n`;

  out += `🔴 SIN STOCK (${sinStock.length})\n`;
  for (const p of sinStock) {
    out += `- ${p.sku} — ${p.name} — proveedor: ${p.supplier}\n`;
  }

  out += `\n🟡 STOCK BAJO (${stockBajo.length})\n`;
  for (const p of stockBajo) {
    out += `- ${p.sku} — ${p.name} — ${p.stock} unidad(es) — ${p.supplier}\n`;
  }

  out += `\n🟢 OK (${ok.length} productos restantes)\n`;

  return out;
}

const products = loadCatalog(catalogPath);
console.log(buildReport(products));
