
# Matriz de trazabilidad y análisis de problemas

| ID | Problema | Impacto | Propuesta | Artefacto | Estado |
|---|---|---|---|---|---|
| R-01 | No se define qué significa calcular el descuento rápidamente. | No existe un criterio objetivo para evaluar el rendimiento. | Establecer un tiempo máximo de respuesta medible. | requisitos.md | Pendiente de confirmación |
| R-02 | No se define quién es un cliente importante ni el beneficio que recibe. | El descuento VIP puede aplicarse incorrectamente. | Definir los criterios de identificación VIP y el tipo de beneficio. | requisitos.md | Pendiente de confirmación |
| R-03 | No se especifican las condiciones de las promociones que permiten excepciones. | Existe riesgo de aplicar descuentos superiores al precio sin autorización. | Documentar las condiciones y límites de las promociones. | requisitos.md | Pendiente de confirmación |
| R-04 | No se define cómo se calcula, redondea y entrega el resultado. | Puede haber diferencias entre el resultado esperado y el obtenido. | Especificar el cálculo y la política de precisión monetaria. | requisitos.md | Pendiente de confirmación |
| C-01 | El código utiliza declaraciones var. | Puede dificultar el control del alcance de las variables. | Evaluar su sustitución por const o let. | src/descuentos.js | Por inspeccionar |
| C-02 | Se utiliza el operador == para comparar el estado VIP. | Puede producir comparaciones con conversión implícita de tipos. | Utilizar comparación estricta cuando corresponda. | src/descuentos.js | Por inspeccionar |
| C-03 | El condicional VIP no utiliza llaves. | Reduce la claridad y mantenibilidad del código. | Incorporar llaves en las estructuras condicionales. | src/descuentos.js | Por inspeccionar |
| C-04 | No existe una validación explícita de los valores de entrada. | Se pueden procesar precios o porcentajes no válidos. | Definir y documentar las validaciones necesarias. | src/descuentos.js | Por inspeccionar |
| C-05 | El beneficio VIP se agrega como una cantidad fija sin especificación de negocio. | El cálculo puede no corresponder con el beneficio esperado. | Confirmar si el beneficio es porcentual o una cantidad fija. | src/descuentos.js | Pendiente de confirmación |
| C-06 | No se encuentra definida la lógica para autorizar excepciones promocionales. | El descuento podría superar el precio sin una condición controlada. | Definir las reglas promocionales antes de modificar la lógica. | src/descuentos.js | Pendiente de confirmación |

## Observación

Los problemas identificados se encuentran relacionados con los requisitos originales y el código inicial proporcionado en la actividad. Los estados reflejan que todavía no se han realizado las inspecciones técnicas ni confirmado las reglas de negocio. Las propuestas representan acciones preventivas y no autorizan por sí solas modificaciones del comportamiento del módulo.
