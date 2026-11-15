
# Análisis y especificación de requisitos

## 1. Introducción

El presente documento tiene como finalidad analizar los requisitos originales del módulo JavaScript de descuentos para una tienda digital. Se busca identificar ambigüedades, inconsistencias y aspectos que dificultan su verificación, proponiendo requisitos funcionales más claros y verificables.

## 2. Diagnóstico de los requisitos originales

| ID | Requisito original | Problema identificado | Impacto |
|---|---|---|---|
| R-01 | El descuento debe calcularse rápidamente. | No establece un tiempo máximo de respuesta. | No permite verificar el rendimiento. |
| R-02 | Los clientes importantes obtendrán un descuento especial. | No define quiénes son los clientes importantes ni el beneficio. | Puede generar resultados inconsistentes. |
| R-03 | El descuento no puede superar el precio, excepto en promociones. | No especifica las condiciones de las promociones. | Puede ocasionar descuentos incorrectos. |
| R-04 | Se debe mostrar el resultado correcto. | No define el cálculo, formato ni precisión del resultado. | No permite establecer claramente cuándo el resultado es correcto. |

## 3. Propuesta de requisitos funcionales

**RF-01. Cálculo del descuento base**

El módulo deberá calcular el descuento base aplicando el porcentaje recibido sobre el precio del producto, mediante la fórmula: precio × porcentaje / 100.

**RF-02. Descuento para clientes VIP**

El módulo deberá identificar a los clientes VIP y aplicar el beneficio correspondiente de acuerdo con una regla de negocio previamente definida y confirmada.

**RF-03. Control del descuento máximo**

El módulo deberá impedir que el descuento aplicado supere el precio del producto, excepto cuando exista una promoción autorizada y sus condiciones estén definidas.

**RF-04. Resultado del cálculo**

El módulo deberá devolver el precio final después de aplicar los descuentos correspondientes, mediante un resultado numérico válido.

## 4. Supuestos de negocio pendientes de confirmación

- S-01: Tiempo máximo permitido para realizar el cálculo.
- S-02: Valor del descuento especial para clientes VIP.
- S-03: Modalidad del beneficio VIP: porcentaje o cantidad fija.
- S-04: Condiciones y autorizaciones de las promociones especiales.
- S-05: Política de redondeo y precisión monetaria.
- S-06: Validación de precios y porcentajes de entrada.

Estos aspectos no se consideran reglas confirmadas y deberán aclararse antes de implementar cambios que dependan de ellos.

## 5. Trazabilidad de requisitos

Los requisitos funcionales propuestos se relacionan con los requisitos originales de la siguiente manera:

| Requisito original | Requisito funcional | Relación |
|---|---|---|
| R-01 | RF-01 | Define el cálculo base; el rendimiento queda pendiente. |
| R-02 | RF-02 | Establece el tratamiento de clientes VIP. |
| R-03 | RF-03 | Define el control del descuento y sus excepciones. |
| R-04 | RF-04 | Establece el resultado esperado del cálculo. |

## 6. Conclusión

El análisis permitió identificar que los requisitos originales presentan ambigüedades que dificultan su verificación objetiva. La propuesta de requisitos funcionales establece comportamientos más concretos y permite relacionar las necesidades del sistema con los aspectos que deberán inspeccionarse en el código. Los supuestos pendientes deberán confirmarse antes de realizar correcciones que impliquen decisiones de negocio.
