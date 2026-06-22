// Cliente de prueba: levanta el MCP server vía stdio, lista tools
// y llama get_product_info para verificar que responde sin errores.
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const transport = new StdioClientTransport({
  command: "node",
  args: ["src/index.js"],
});

const client = new Client({ name: "test-client", version: "0.1.0" });
await client.connect(transport);

const tools = await client.listTools();
console.log("=== TOOLS DISPONIBLES ===");
console.log(JSON.stringify(tools, null, 2));

console.log("\n=== TEST 1: consulta por SKU exacto (TS-005, sin stock) ===");
const r1 = await client.callTool({
  name: "get_product_info",
  arguments: { query: "TS-005" },
});
console.log(r1.content[0].text);

console.log("\n=== TEST 2: consulta por nombre parcial (monitor samsung) ===");
const r2 = await client.callTool({
  name: "get_product_info",
  arguments: { query: "monitor samsung" },
});
console.log(r2.content[0].text);

console.log("\n=== TEST 3: producto inexistente ===");
const r3 = await client.callTool({
  name: "get_product_info",
  arguments: { query: "tostadora" },
});
console.log(r3.content[0].text);

await client.close();
process.exit(0);
