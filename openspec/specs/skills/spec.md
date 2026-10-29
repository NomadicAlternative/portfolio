# Skills Specification

## Purpose

Matriz de habilidades técnicas agrupadas por categoría con iconos y etiquetas.
Sin barras de progreso ni porcentajes — el enfoque está en qué tecnologías domina
el desarrollador, no en cuánto.

## Requirements

### Requirement: Agrupación por categoría

El sistema DEBE agrupar las habilidades en exactamente 3 categorías:
Frontend, Backend e IoT/Firmware. Cada categoría DEBE tener un encabezado visible.

| Categoría    | Tecnologías                                                              |
|-------------|--------------------------------------------------------------------------|
| Frontend    | React, Next.js, TypeScript, Tailwind CSS, Zustand, Recharts              |
| Backend     | Node.js, Express, PostgreSQL, Drizzle ORM, Supabase, JWT                 |
| IoT/Firmware | MQTT, ESP32, C, PlatformIO, 34 drivers, OTA                             |

#### Scenario: Tres categorías visibles

- **GIVEN** que el usuario navega a la sección Skills
- **WHEN** la matriz se renderiza
- **THEN** las 3 categorías son visibles con sus encabezados
- **AND** cada categoría contiene las tecnologías listadas en la tabla anterior

### Requirement: Icono y etiqueta por skill

Cada habilidad DEBE representarse con un icono reconocible y una etiqueta de texto
con el nombre de la tecnología. El tamaño de etiqueta DEBE ser 12px.

#### Scenario: Renderizado de skill individual

- **GIVEN** que la matriz de skills está renderizada
- **WHEN** se inspecciona cualquier skill (ej. "React")
- **THEN** se muestra un icono asociado a la tecnología
- **AND** una etiqueta de texto de 12px con el nombre de la tecnología

### Requirement: Prohibición de barras de progreso

El sistema NO DEBE mostrar barras de progreso, porcentajes ni indicadores de nivel
de competencia para ninguna habilidad.

#### Scenario: Sin elementos de progreso

- **GIVEN** que la sección Skills está completamente renderizada
- **WHEN** se inspecciona el DOM de la matriz
- **THEN** no existen elementos `<progress>`, barras de ancho porcentual,
  ni textos como "90%" o "Avanzado"
- **AND** cada skill se presenta con igual jerarquía visual
