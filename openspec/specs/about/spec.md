# About Specification

## Purpose

Línea de tiempo visual con 4 nodos que muestra la trayectoria profesional del desarrollador
desde Técnico Electrónico hasta Desarrollador Full-Stack, permitiendo una lectura rápida
en menos de 5 segundos.

## Requirements

### Requirement: Línea de tiempo con 4 nodos

El sistema DEBE mostrar una línea de tiempo visual con exactamente 4 nodos en orden
cronológico. Cada nodo DEBE incluir: rango de años, título del cargo y descripción breve.

| # | Período    | Título                        |
|---|------------|-------------------------------|
| 1 | 2014–2017 | Técnico Electrónico           |
| 2 | 2017–2020 | Especialista IoT              |
| 3 | 2020–2024 | BYU — Desarrollo de Software  |
| 4 | 2024–     | Desarrollador Full-Stack      |

#### Scenario: Cuatro nodos visibles

- **GIVEN** que el usuario navega a la sección About
- **WHEN** la sección se renderiza completamente
- **THEN** los 4 nodos son visibles con su año, título y descripción
- **AND** el orden cronológico es claro e intuitivo

#### Scenario: Lectura rápida

- **GIVEN** que un reclutador escanea la sección
- **WHEN** transcurren 5 segundos
- **THEN** puede identificar los 4 roles y su progresión sin leer texto denso

### Requirement: Conexión visual con línea de acento

El sistema DEBE conectar los 4 nodos mediante una línea vertical o curva del color
de acento (electric blue, #3B82F6) que refuerce visualmente la progresión.

#### Scenario: Línea de acento visible

- **GIVEN** que los 4 nodos están renderizados
- **WHEN** el usuario observa la línea de tiempo
- **THEN** una línea del color de acento conecta todos los nodos
- **AND** la línea es sutil, no domina sobre el contenido

### Requirement: Adaptación responsiva

El sistema DEBE adaptar el diseño de la línea de tiempo a viewports móviles sin
perder legibilidad ni orden cronológico.

#### Scenario: Línea de tiempo en móvil

- **GIVEN** que el viewport es < 768px de ancho
- **WHEN** la sección About se renderiza
- **THEN** los 4 nodos se muestran en una columna vertical
- **AND** la línea de acento se mantiene visible conectando los nodos
