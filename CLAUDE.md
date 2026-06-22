# CLAUDE.md - TechStore AI Toolkit

## 1. Contexto del proyecto

TechStore AI Toolkit es un sistema de asistencia mediante IA para operaciones de e-commerce especializado en hardware de alto rendimiento y gaming. Este repositorio constituye un toolkit de asistencia mediante IA para operaciones de e-commerce que integra:
- Auditoría automática de catálogo (skills).
- Interfaz de datos para agentes externos (MCP).
- Plantillas de prompt optimizadas para e-commerce.

El catálogo se gestiona mediante `data/catalog.json`, que actúa como fuente de verdad simulada para el entorno de desarrollo.

## 2. Stack y estructura

- **Backend:** Node.js (MCP Server, Scripts de Auditoría).
- **Frontend:** HTML5/CSS3/JS (Dashboard Interactivo en `techstore-presentacion.html`).
- **Activos:** SVGs en `assets/products/` asociados a cada SKU.
- **IA:** Carpeta `prompts/` con 5 plantillas especializadas y numeradas.

## 3. Comandos frecuentes

```bash
# Servidor MCP
cd mcp-server && npm install && npm start

# Reporte de Auditoría (Skill)
node .claude/skills/stock-report/run.js
```

## 4. Convenciones

- **SKUs:** Formato profesional `TS-[CATEGORÍA]-[ID]` (ej. `TS-KB-001`).
- **Imágenes:** Referenciadas en `catalog.json`, almacenadas en `assets/products/`.
- **Precios:** USD, dos decimales.

## 5. Decisiones de diseño

### Decisión 1: Catálogo simulado con SKUs profesionales
Se optó por una estructura de SKU categórica para facilitar la identificación de productos por parte de agentes de IA y herramientas de auditoría, mejorando la legibilidad técnica.

### Decisión 2: Visualización vía Dashboard Estático
Se desarrolló `techstore-presentacion.html` como una herramienta de visualización sin dependencias externas, permitiendo mostrar el estado del inventario (Stock Bajo, Agotado) de forma inmediata tras cambios en el JSON.

## 6. Restricciones del Agente

- No modificar la lógica de consulta del servidor MCP sin validación previa.
- Mantener la coherencia entre los SKUs de `catalog.json` y los ejemplos en los prompts.

## 7. Entrega Final

Video demostrativo: Pendiente de grabación. Se agregará el enlace antes de la entrega final.
