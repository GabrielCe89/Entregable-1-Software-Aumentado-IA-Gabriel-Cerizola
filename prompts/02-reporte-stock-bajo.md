# 02. Reporte de stock bajo (versión prompt, sin tool)

**Cuándo usarla:** cuando se quiere una lectura rápida del catálogo sin correr la skill, pegando el JSON directo.

**Variables:**
- `{catalogo_json}` — el contenido de catalog.json (o un subconjunto)
- `{umbral}` — número de unidades bajo el cual se considera "stock bajo"

**Prompt:**
```
Tenés este catálogo: {catalogo_json}
Listá los productos con stock menor o igual a {umbral} unidades.
Para cada uno: SKU, nombre, stock actual, proveedor.
Ordená de menor a mayor stock.
```

**Ejemplo real ejecutado:**
- Input: catálogo de 10 productos (ver `data/catalog.json`), `{umbral}=5`
- Output real:
  - TS-CTR-005 — DualSense Wireless Controller — stock 0 — Sony PlayStation
  - TS-WC-008 — Razer Kiyo Pro — stock 1 — Razer Store
  - TS-NB-007 — ASUS ROG Zephyrus G14 — stock 3 — ASUS LATAM
  - TS-SSD-004 — Samsung 990 EVO 1TB — stock 4 — Samsung Electronics
