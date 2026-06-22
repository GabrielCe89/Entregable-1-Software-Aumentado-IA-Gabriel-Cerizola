# TechStore AI Toolkit

Sistema de asistencia mediante IA para operaciones de e-commerce.

Este repositorio contiene un ecosistema de herramientas diseñado para optimizar la gestión de una tienda de tecnología y gaming mediante Inteligencia Artificial. Incluye automatizaciones de inventario, asistentes de soporte y un servidor MCP para integración con agentes de IA.

## Checklist de entregables

- [x] 1. `CLAUDE.md` — Contexto del proyecto y decisiones de diseño documentadas.
- [x] 2. 5 plantillas de prompt individuales en `prompts/`, con ejemplos reales ejecutados.
- [x] 3. Skill `stock-report` — Audita `data/catalog.json` y genera reportes de inventario.
- [x] 4. MCP Server — Tool `get_product_info` para consulta de stock y precios en tiempo real.
- [ ] 5. Video-demo (3 min) — Pendiente de grabación. Se agregará el enlace antes de la entrega final.

## Demo Visual

🎥 Pendiente de grabación. Se agregará el enlace antes de la entrega final.

🖥️ **Dashboard Interactivo:** Abrir `techstore-presentacion.html` en el navegador para ver el panel de control y el catálogo visual.

## Cómo ejecutar el proyecto

```bash
# 1. Probar la skill de reporte de stock
node .claude/skills/stock-report/run.js

# 2. Levantar el MCP server
cd mcp-server
npm install
npm start
```

## Estructura del Repositorio

```
.
├── CLAUDE.md                     # Documentación de contexto y decisiones
├── README.md                     # Guía principal del proyecto
├── techstore-presentacion.html   # Dashboard interactivo y visualización
├── assets/
│   └── products/                 # Imágenes representativas (SVGs)
├── data/
│   └── catalog.json              # Base de datos simulada (Gaming/Tech)
├── prompts/                      # Plantillas de prompt especializadas
│   ├── 01-generador-descripcion.md
│   ├── 02-reporte-stock-bajo.md
│   ├── 03-respuesta-ticket-soporte.md
│   ├── 04-changelog-catalogo.md
│   └── 05-clasificador-categoria.md
├── .claude/
│   ├── skills/
│   │   └── stock-report/         # Skill de auditoría de stock
│   └── agents/
│       └── catalog-agent.md      # Configuración de agente IA
├── mcp-server/                   # Servidor Model Context Protocol
└── docs/                         # Documentación técnica y registros de prueba
```

## Flujo de Operación Asistida

1. **Monitoreo:** El Dashboard identifica productos con bajo stock o agotados.
2. **Auditoría:** La skill `stock-report` genera un informe detallado para el equipo.
3. **Consulta:** El agente de IA utiliza el MCP para obtener datos precisos de productos.
4. **Respuesta:** Se aplican los prompts optimizados para generar contenido o responder tickets de soporte con datos reales.
