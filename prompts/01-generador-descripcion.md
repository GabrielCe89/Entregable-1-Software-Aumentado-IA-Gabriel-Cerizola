# 01. Generador de descripción de producto

**Cuándo usarla:** al cargar un producto nuevo al catálogo y solo se tienen specs técnicas, sin copy de venta.

**Variables:**
- `{nombre}` — nombre del producto
- `{specs}` — lista cruda de especificaciones técnicas
- `{tono}` — tono deseado (ej. "técnico y directo", "cercano y simple")

**Prompt:**
```
Escribí una descripción de producto para e-commerce.
Producto: {nombre}
Specs: {specs}
Tono: {tono}
Máximo 80 palabras. No inventes specs que no estén en la lista.
```

**Ejemplo real ejecutado:**
- Input: `{nombre}=Logitech G Pro X TKL`, `{specs}=LIGHTSPEED wireless, GX Brown switches, PBT keycaps`, `{tono}=profesional y técnico`
- Output real: "Elevá tu nivel competitivo con el Logitech G Pro X TKL. Diseñado para profesionales, cuenta con tecnología inalámbrica LIGHTSPEED para una latencia ultra baja. Sus switches táctiles GX Brown ofrecen el equilibrio perfecto entre respuesta y precisión, mientras que las teclas de PBT de doble inyección aseguran durabilidad extrema en cada partida. El teclado definitivo para quienes no aceptan compromisos."
