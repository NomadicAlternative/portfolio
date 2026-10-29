# Hero Specification

## Purpose

Sección principal de entrada con tagline del desarrollador, insignias de stack tecnológico,
botones de llamado a la acción y animación sutil de entrada.

## Requirements

### Requirement: Tagline principal

El sistema DEBE mostrar el tagline "I build complex software from scratch.
Hardware meets software." como elemento principal de la sección hero.

#### Scenario: Tagline visible al cargar

- **GIVEN** que el usuario accede al sitio
- **WHEN** la sección hero se renderiza
- **THEN** el tagline es visible y tipográficamente destacado (32px, weight 700)

### Requirement: Insignias de stack tecnológico

El sistema DEBE mostrar insignias visuales con los nombres de las tecnologías principales:
React, Next.js, Node.js, TypeScript, PostgreSQL, MQTT, ESP32, C.

#### Scenario: Insignias renderizadas

- **GIVEN** que el usuario visualiza la sección hero
- **WHEN** el componente se monta
- **THEN** las 8 insignias de stack son visibles
- **AND** cada insignia muestra el nombre de la tecnología de forma legible

### Requirement: Botones de llamado a la acción

El sistema DEBE incluir dos botones de CTA: uno hacia el perfil de GitHub y otro hacia
el perfil de LinkedIn. Cada botón DEBE abrir el enlace en una pestaña nueva.

#### Scenario: Clic en botón GitHub

- **GIVEN** que el usuario está en la sección hero
- **WHEN** hace clic en el botón de GitHub
- **THEN** se abre el perfil `github.com/NomadicAlternative` en una pestaña nueva

#### Scenario: Clic en botón LinkedIn

- **GIVEN** que el usuario está en la sección hero
- **WHEN** hace clic en el botón de LinkedIn
- **THEN** se abre el perfil de LinkedIn del desarrollador en una pestaña nueva

### Requirement: Animación de entrada

El sistema DEBE aplicar una animación sutil de entrada tipo fade-up usando Framer Motion
al montar la sección hero.

#### Scenario: Animación al cargar

- **GIVEN** que el usuario carga el sitio por primera vez
- **WHEN** la sección hero se monta en el DOM
- **THEN** el contenido aparece con una transición fade-up
- **AND** la animación dura ≤500ms para no bloquear la interacción

### Requirement: Placeholder de foto

El sistema DEBE reservar un espacio visual para una fotografía del desarrollador.
Debe mostrar un placeholder reconocible hasta que se proporcione la imagen real.

#### Scenario: Placeholder visible

- **GIVEN** que no se ha configurado una foto real
- **WHEN** la sección hero se renderiza
- **THEN** se muestra un placeholder con silueta o iniciales
- **AND** el espacio mantiene las proporciones correctas para la imagen futura
