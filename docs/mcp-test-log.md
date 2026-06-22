# Log de prueba — MCP server TechStore

Ejecutado con: `node test-client.js` (ver mcp-server/test-client.js)
Fecha: 2026-06-16
Resultado: 3/3 casos OK, sin errores de conexión ni de ejecución.

> Nota: re-verificado tras el refactor que movió `LOW_STOCK_THRESHOLD` y `classify()`
> a `shared/catalog-utils.js` (ver CLAUDE.md, decisión 2). Mismo resultado, ahora
> sin lógica duplicada entre la skill y el MCP server.

```
=== TOOLS DISPONIBLES ===
{
  "tools": [
    {
      "name": "get_product_info",
      "description": "Consulta stock y precio actual de un producto del catálogo de TechStore, por SKU exacto (ej. 'TS-005') o por nombre parcial (ej. 'monitor samsung').",
      "inputSchema": {
        "type": "object",
        "properties": {
          "query": {
            "type": "string",
            "description": "SKU exacto o parte del nombre del producto"
          }
        },
        "required": ["query"]
      }
    }
  ]
}

=== TEST 1: consulta por SKU exacto (TS-005, sin stock) ===
{
  "sku": "TS-005",
  "nombre": "SSD Kingston NV2 1TB",
  "precio": 64.9,
  "stock": 0,
  "estado": "sin stock",
  "proveedor": "Kingston Tech"
}

=== TEST 2: consulta por nombre parcial (monitor samsung) ===
{
  "sku": "TS-004",
  "nombre": "Monitor Samsung 24\" FHD",
  "precio": 159,
  "stock": 7,
  "estado": "disponible",
  "proveedor": "Samsung Electronics"
}

=== TEST 3: producto inexistente ===
No se encontró ningún producto que coincida con "tostadora".
```

## Cómo reproducir

```bash
cd mcp-server
npm install
node test-client.js
```
