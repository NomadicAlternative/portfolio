# Layout Specification

## Purpose

Estructura visual persistente del sitio: barra de navegación fija, pie de página con iconos de stack,
alternador de tema oscuro, contenedor responsivo centrado y carga de fuente Inter.

## Requirements

### Requirement: Barra de navegación fija (sticky)

El sistema DEBE mostrar una barra de navegación fija en la parte superior de la ventana que
permanezca visible durante el desplazamiento vertical.

#### Scenario: Visibilidad en escritorio

- **GIVEN** que el usuario accede a cualquier sección del sitio
- **WHEN** la página termina de cargar
- **THEN** la barra de navegación es visible en la parte superior
- **AND** permanece fija al hacer scroll hacia abajo

#### Scenario: Adaptación móvil

- **GIVEN** que el usuario accede desde un dispositivo con ancho < 768px
- **WHEN** la página se renderiza
- **THEN** la barra se adapta al ancho disponible sin desbordamiento

### Requirement: Pie de página con iconos de stack

El sistema DEBE mostrar un pie de página con iconos representativos del stack tecnológico
del desarrollador al final del contenido.

#### Scenario: Iconos visibles al final

- **GIVEN** que el usuario hace scroll hasta el final de la página
- **WHEN** el pie de página entra en el viewport
- **THEN** se muestran los iconos del stack tecnológico
- **AND** cada icono es visualmente reconocible

### Requirement: Alternador de tema oscuro

El sistema DEBE permitir alternar entre tema oscuro (#000000 fondo) y claro mediante un
control interactivo. La preferencia DEBE persistir en `localStorage`. El sistema
NO DEBE mostrar un destello (flash) del tema incorrecto durante la carga inicial.

#### Scenario: Alternancia de tema

- **GIVEN** que el tema actual es oscuro
- **WHEN** el usuario activa el toggle de tema
- **THEN** el sitio cambia a tema claro inmediatamente
- **AND** la preferencia se guarda en `localStorage`

#### Scenario: Persistencia entre sesiones

- **GIVEN** que el usuario seleccionó tema claro en una sesión anterior
- **WHEN** el usuario vuelve a cargar el sitio
- **THEN** el tema claro se aplica sin flash visible
- **AND** el toggle refleja el estado guardado

#### Scenario: Sin flash en carga inicial

- **GIVEN** cualquier preferencia de tema guardada
- **WHEN** el HTML inicial se renderiza
- **THEN** no se muestra un destello del tema opuesto antes de hidratar React

### Requirement: Contenedor responsivo centrado

El sistema DEBE centrar todo el contenido de la página en un contenedor con ancho máximo
`max-w-6xl` y márgenes automáticos horizontales. DEBE mantener padding lateral adecuado
en todos los breakpoints.

#### Scenario: Contenedor en viewport ancho (≥1280px)

- **GIVEN** que el viewport mide ≥1280px de ancho
- **WHEN** el contenido se renderiza
- **THEN** el contenedor está centrado horizontalmente con `mx-auto`
- **AND** su ancho no excede `max-w-6xl`

#### Scenario: Contenedor en móvil (320px)

- **GIVEN** que el viewport mide 320px de ancho
- **WHEN** el contenido se renderiza
- **THEN** el contenedor usa padding lateral sin causar overflow horizontal

### Requirement: Carga de fuente Inter

El sistema DEBE cargar la fuente Inter desde Google Fonts en los pesos 400 (regular),
500 (medium) y 700 (bold) mediante un `<link>` en el `<head>`.

#### Scenario: Fuente aplicada

- **GIVEN** que el sitio se carga en un navegador moderno
- **WHEN** los estilos se aplican
- **THEN** todo el texto renderiza con la familia tipográfica Inter
- **AND** los pesos 400, 500 y 700 están disponibles y se distinguen visualmente
