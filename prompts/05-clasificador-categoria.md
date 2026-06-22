# 05. Clasificador de categoría para producto nuevo

**Cuándo usarla:** al cargar un producto y no está claro en qué categoría del catálogo entra.

**Variables:**
- `{nombre_producto}` — nombre del producto a clasificar
- `{categorias_existentes}` — lista de categorías ya usadas en el catálogo

**Prompt:**
```
Dado el producto "{nombre_producto}", elegí la categoría más adecuada de esta lista: {categorias_existentes}.
Si ninguna encaja bien, proponé una categoría nueva y justificá en una línea.
Respondé solo con: categoría elegida + justificación de una línea.
```

**Ejemplo real ejecutado:**
- Input: `{nombre_producto}=Silla Razer Iskur X`, `{categorias_existentes}=notebooks, perifericos, monitores, almacenamiento, audio, redes, componentes`
- Output real: "Categoría nueva: mobiliario. La Iskur X es una silla ergonómica, por lo que mobiliario es más preciso que periféricos para el orden del almacén."
