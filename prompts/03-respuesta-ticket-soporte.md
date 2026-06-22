# 03. Respuesta a ticket de soporte (consulta de stock/precio)

**Cuándo usarla:** para redactar la respuesta a un cliente que preguntó por disponibilidad o precio de un producto puntual.

**Variables:**
- `{producto}` — nombre o SKU consultado
- `{stock_actual}` — unidades disponibles
- `{precio}` — precio actual
- `{nombre_cliente}` — nombre del cliente (opcional)

**Prompt:**
```
Redactá una respuesta corta y cordial para un ticket de soporte.
El cliente {nombre_cliente} preguntó por disponibilidad y precio de {producto}.
Datos reales: stock={stock_actual}, precio={precio}.
Si el stock es 0, ofrecé avisar cuando reingrese. No prometas fechas de reposición.
```

**Ejemplo real ejecutado:**
- Input: `{producto}=DualSense Wireless Controller`, `{stock_actual}=0`, `{precio}=74.99`, `{nombre_cliente}=Julieta`
- Output real: "Hola Julieta, gracias por consultarnos. El DualSense Wireless Controller tiene un precio de USD 74.99, pero lamentablemente se encuentra agotado en este momento. Si te parece bien, podemos anotarte para avisarte en cuanto volvamos a recibir stock. ¡Saludos!"
