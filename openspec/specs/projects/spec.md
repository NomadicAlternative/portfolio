# Projects Specification

## Purpose

Tarjetas de proyecto que muestran los dos trabajos principales del desarrollador:
BeepDash (IoT SaaS) y Leadership Planning System (planificación empresarial).
Cada tarjeta incluye captura de pantalla, stack tecnológico y enlaces de acción.

## Requirements

### Requirement: Dos tarjetas de proyecto

El sistema DEBE renderizar exactamente 2 tarjetas de proyecto: BeepDash y
Leadership Planning System (LPS). Ambas DEBEN ser visibles sin scroll excesivo
en viewport de escritorio.

#### Scenario: Tarjetas renderizadas

- **GIVEN** que el usuario navega a la sección Projects
- **WHEN** la sección se monta
- **THEN** se muestran 2 tarjetas: BeepDash y LPS
- **AND** cada tarjeta es visualmente distinta de la otra

### Requirement: Contenido de cada tarjeta

Cada tarjeta DEBE incluir: título del proyecto, descripción de una línea,
insignias del stack tecnológico utilizado, captura de pantalla y enlaces de acción
(GitHub y demo en vivo).

| Campo         | BeepDash                                                   | LPS                                              |
|---------------|------------------------------------------------------------|--------------------------------------------------|
| Título        | BeepDash                                                   | Leadership Planning System                       |
| Descripción   | IoT SaaS platform for vehicle fleet monitoring             | Franklin Covey-based leadership planner          |
| Stack         | React, Node.js, MQTT, ESP32                                | Next.js, Supabase, Drizzle ORM                   |
| Enlaces       | GitHub + Demo                                              | GitHub + Demo                                    |

#### Scenario: Campos completos en BeepDash

- **GIVEN** que la tarjeta de BeepDash está renderizada
- **WHEN** se inspecciona su contenido
- **THEN** muestra título, descripción, insignias de stack, captura y enlaces
- **AND** los enlaces de GitHub y demo apuntan a URLs externas

#### Scenario: Campos completos en LPS

- **GIVEN** que la tarjeta de LPS está renderizada
- **WHEN** se inspecciona su contenido
- **THEN** muestra título, descripción, insignias de stack, captura y enlaces
- **AND** los enlaces de GitHub y demo apuntan a URLs externas

### Requirement: Captura de pantalla

Cada tarjeta DEBE incluir una imagen de captura de pantalla del proyecto en formato
WebP, con dimensiones fijas y carga lazy.

#### Scenario: Imagen cargada correctamente

- **GIVEN** que la tarjeta del proyecto está en el viewport
- **WHEN** la imagen termina de cargar
- **THEN** se muestra la captura de pantalla del proyecto
- **AND** la imagen no excede 1200px de ancho
