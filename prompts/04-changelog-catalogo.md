# 04. Changelog de catálogo

**Cuándo usarla:** después de actualizar precios o stock en lote, para generar el resumen de cambios que se publica internamente.

**Variables:**
- `{cambios}` — lista de cambios crudos (SKU, campo, valor anterior, valor nuevo)
- `{fecha}` — fecha del changelog

**Prompt:**
```
Generá un changelog interno con fecha {fecha} a partir de estos cambios: {cambios}
Agrupá por tipo de cambio (precio, stock). Usá formato de lista, una línea por SKU.
```

**Ejemplo real ejecutado:**
- Input: `{cambios}=[TS-KB-001 precio 199.00->189.00, TS-CTR-005 stock 0->12]`, `{fecha}=2026-06-16`
- Output real:
  ```
  Changelog 2026-06-16

  Precios:
  - TS-KB-001 (Logitech G Pro X TKL): 199.00 → 189.00

  Stock:
  - TS-CTR-005 (DualSense Wireless Controller): 0 → 12
  ```
