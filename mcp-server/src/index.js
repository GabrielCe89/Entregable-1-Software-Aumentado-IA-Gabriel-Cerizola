// MCP server de TechStore.
// Expone una tool: get_product_info, que consulta stock y precio
// de un producto por SKU o por nombre (búsqueda parcial, case-insensitive).
//
// La carga del catálogo, la búsqueda y la clasificación de stock viven en
// shared/catalog-utils.js, compartido con la skill stock-report (ver
// decisión 2 en CLAUDE.md) — el umbral de "stock bajo" se define una sola
// vez para todo el repo.

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  ListToolsRequestSchema,
  CallToolRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { fileURLToPath } from "url";
import path from "path";
import {
  loadCatalog,
  findProduct,
  classifyLabel,
} from "../../shared/catalog-utils.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const catalogPath = path.resolve(__dirname, "../../data/catalog.json");

const server = new Server(
  { name: "techstore-mcp-server", version: "0.1.0" },
  { capabilities: { tools: {} } }
);

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: "get_product_info",
      description:
        "Consulta stock y precio actual de un producto del catálogo de TechStore, por SKU exacto (ej. 'TS-005') o por nombre parcial (ej. 'monitor samsung').",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "SKU exacto o parte del nombre del producto",
          },
        },
        required: ["query"],
      },
    },
  ],
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name !== "get_product_info") {
    throw new Error(`Tool no encontrada: ${request.params.name}`);
  }

  const { query } = request.params.arguments;
  const products = loadCatalog(catalogPath);
  const product = findProduct(products, query);

  if (!product) {
    return {
      content: [
        {
          type: "text",
          text: `No se encontró ningún producto que coincida con "${query}".`,
        },
      ],
    };
  }

  return {
    content: [
      {
        type: "text",
        text: JSON.stringify(
          {
            sku: product.sku,
            nombre: product.name,
            precio: product.price,
            stock: product.stock,
            estado: classifyLabel(product),
            proveedor: product.supplier,
          },
          null,
          2
        ),
      },
    ],
  };
});

const transport = new StdioServerTransport();
await server.connect(transport);
