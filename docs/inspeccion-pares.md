# Inspección por pares del módulo de descuentos

## 1. Participantes y roles

- **Autor:** responsable del código original.
- **Revisor:** encargado de analizar el código y detectar posibles defectos.
- **Registrador:** responsable de documentar los hallazgos y su seguimiento.

Para esta actividad académica se realiza una inspección documentada, utilizando los roles establecidos como parte del proceso de revisión.

## 2. Registro de hallazgos

| ID | Severidad | Evidencia | Problema identificado | Acción propuesta | Estado |
|---|---|---|---|---|---|
| H-01 | Baja | Línea 2: uso de `var` | Se utiliza una declaración de variable que no sigue las convenciones actuales de JavaScript. | Sustituir por `const` o `let`, según corresponda. | Pendiente |
| H-02 | Media | Línea 3: `esVip == true` | Se utiliza una comparación no estricta, que puede generar conversiones automáticas de tipos. | Utilizar una comparación estricta o evaluar directamente la condición. | Pendiente |
| H-03 | Baja | Líneas 3 y 4: estructuras `if` | Los condicionales no utilizan llaves, lo que reduce la claridad del código. | Incorporar llaves en ambos bloques. | Pendiente |
| H-04 | Alta | Línea 4: `if (porcentaje > 100)` | Se informa que el descuento es inválido, pero el cálculo continúa y se devuelve un resultado. | Definir con el responsable del negocio cómo debe manejarse un porcentaje inválido. | Pendiente |
| H-05 | Alta | Línea 3: `descuento = descuento + 10` | El beneficio VIP agrega 10 unidades sin especificar si representa dinero o puntos porcentuales. | Solicitar aclaración y documentar la regla de negocio. | Pendiente |
| H-06 | Alta | Requisito R-03 y cálculo de la línea 5 | No se controla que el descuento supere el precio ni se identifica cómo deben aplicarse las excepciones por promociones. | Definir las condiciones de validación y las promociones autorizadas antes de modificar la lógica. | Pendiente |
| H-07 | Media | Función completa | No se especifican validaciones para valores negativos, entradas no numéricas o porcentajes fuera del rango permitido. | Definir las reglas de validación de los parámetros de entrada. | Pendiente |
| H-08 | Media | Línea 5: `var total = precio - descuento` | No se especifica si el resultado debe redondearse o manejar una cantidad determinada de decimales. | Confirmar la política de precisión monetaria. | Pendiente |

## 3. Análisis de los resultados

La inspección permitió identificar ocho hallazgos. Algunos corresponden a problemas de estilo y legibilidad que también fueron detectados por ESLint, mientras que otros requieren una revisión humana porque están relacionados con la lógica del descuento y la falta de precisión de los requisitos.

Los hallazgos H-04, H-05 y H-06 representan riesgos importantes porque pueden provocar resultados incorrectos o comportamientos que no corresponden a las reglas comerciales esperadas.

## 4. Decisiones de la revisión

Se propone corregir los problemas de estilo y sintaxis confirmados mediante las reglas configuradas en ESLint.

Los problemas relacionados con el beneficio VIP, las promociones, las entradas inválidas y el redondeo permanecerán pendientes hasta contar con una definición clara de las reglas de negocio.

La revisión no debe introducir comportamientos nuevos basados en suposiciones.