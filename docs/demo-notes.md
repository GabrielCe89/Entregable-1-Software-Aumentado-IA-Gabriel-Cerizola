# Notas para el video-demo (3 min) — TechStore

Checklist antes de grabar:

- [ ] Terminal/IDE en vivo, no slides.
- [ ] Se ve la skill `stock-report` corriendo sobre el catálogo real.
- [ ] Se ve el MCP server respondiendo a una consulta real de producto.
- [ ] Se ve una plantilla de prompt usada para redactar la respuesta final al cliente.
- [ ] Dura ~3 minutos, sin cortes que oculten errores.
- [ ] Link subido al README.

## Guion sugerido (180s)

- 0:00–0:15 — "TechStore, tienda online de tecnología. Esto es el flujo real."
- 0:15–1:00 — correr `node .claude/skills/stock-report/run.js`, mostrar el reporte,
  señalar el producto sin stock (TS-005).
- 1:00–1:50 — simular que un cliente pregunta por ese mismo producto. Usar el
  `catalog-agent` (o llamar directo a `get_product_info` vía `test-client.js`)
  y mostrar que devuelve el mismo dato: sin stock.
- 1:50–2:30 — usar la plantilla "Respuesta a ticket de soporte" de `prompts/`
  para generar la respuesta al cliente con ese dato real.
- 2:30–3:00 — cierre: mencionar la decisión de catálogo simulado (CLAUDE.md,
  decisión 1) y dónde está el repo.
