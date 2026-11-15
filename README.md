# Auditoría estática de un módulo de descuentos

## Descripción

Este proyecto desarrolla una auditoría estática de un módulo JavaScript encargado de calcular descuentos para clientes, incluyendo un beneficio especial para clientes VIP.

El objetivo es identificar problemas de calidad del código, analizar la claridad de los requisitos y documentar los hallazgos mediante inspección humana y la herramienta ESLint.

## Objetivos

- Analizar los requisitos originales y proponer requisitos verificables.
- Identificar problemas de calidad mediante inspección estática.
- Configurar ESLint y aplicar reglas de calidad.
- Documentar hallazgos y evidencias antes y después de las correcciones.
- Aplicar control de versiones mediante Git y GitHub.

## Tecnologías utilizadas

- JavaScript
- Node.js
- npm
- ESLint 10.15.0
- Git
- GitHub
- Visual Studio Code

## Estructura del proyecto

```text
Auditoria-Descuentos/
├── src/
│   └── descuentos.js
├── docs/
│   ├── requisitos.md
│   ├── checklist.md
│   ├── matriz-trazabilidad.md
│   └── inspeccion-pares.md
├── evidencias/
│   ├── lint-inicial.txt
│   └── lint-final.txt
├── eslint.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Instalación

Clonar el repositorio y ejecutar:

```bash
npm install
```

## Análisis estático

Para ejecutar ESLint:

```bash
npm run lint
```

## Resultados

En el análisis inicial se identificaron cinco errores relacionados con las reglas de calidad configuradas.

Después de aplicar las correcciones de estilo, el análisis finalizó con cero errores y cero advertencias.

## Observaciones

Las ambigüedades relacionadas con el beneficio VIP, las promociones y las validaciones de entrada se mantienen documentadas como aspectos pendientes de definición.

El análisis estático permite identificar problemas de calidad, pero no garantiza por sí solo el cumplimiento de todos los requisitos funcionales.

## Autor

Alan Jair Juiña Pillajo

Proyecto académico de Verificación y Validación de Software.