---
name: stock-report
description: Audita el catálogo de TechStore (data/catalog.json) y genera un reporte de precios y stock, marcando productos con stock bajo (≤5 unidades) y sin stock (0 unidades). Usar cuando el usuario pida "revisar el stock", "armar el reporte de catálogo", "qué productos están bajos de stock" o equivalente.
---

# Stock Report

Tarea real que automatiza: antes de esta skill, alguien del equipo abría el catálogo
a mano cada semana y anotaba qué productos estaban por agotarse. Esta skill lo hace
en un paso.

## Cuándo se activa

El usuario pide algo como: "revisá el stock", "armame el reporte semanal del catálogo",
"qué productos están bajos" o "necesito el estado de precios y stock".

## Pasos

1. Leer `data/catalog.json` (o el path que indique el usuario).
2. Calcular, para cada producto: estado = "sin stock" si `stock == 0`,
   "stock bajo" si `stock <= 5`, "ok" en otro caso.
3. Ejecutar `run.js` para generar el reporte determinístico (no recalcular a mano:
   el script ya hace el cruce de datos correctamente).
4. Presentar el resultado ordenado: primero "sin stock", luego "stock bajo", luego un
   resumen de cuántos productos están "ok".
5. Si el usuario pide acción sobre algún producto (ej. "pedile más al proveedor X"),
   usar el dato de `supplier` del catálogo para identificarlo, pero no generar la
   orden de compra automáticamente — eso queda fuera del alcance de esta skill.

## Salida esperada

```
📦 Reporte de stock — TechStore (2026-06-16)

🔴 SIN STOCK (1)
- TS-005 — SSD Kingston NV2 1TB — proveedor: Kingston Tech

🟡 STOCK BAJO (4)
- TS-007 — Webcam Logitech C920 — 1 unidad — Logitech Uruguay
- TS-010 — Memoria RAM Kingston Fury 16GB — 2 unidades — Kingston Tech
- TS-003 — Teclado mecánico Redragon K552 — 3 unidades — Redragon Import
- TS-008 — Notebook ASUS Vivobook 14" — 5 unidades — ASUS LATAM

🟢 OK (5 productos restantes)
```
