# How I Work Specification

## Purpose

Visualización del pipeline de trabajo del desarrollador: Spec → Design → Review → Ship.
Esta sección diferencia el flujo estructurado y asistido por IA que utiliza Diego,
comunicando profesionalismo y metodología a reclutadores y clientes.

## Requirements

### Requirement: Pipeline de 4 pasos

El sistema DEBE mostrar un pipeline visual de exactamente 4 pasos en orden secuencial.
Cada paso DEBE incluir: un icono representativo y una descripción de una línea.

| Paso   | Icono sugerido     | Descripción                                          |
|--------|---------------------|------------------------------------------------------|
| Spec   | Documento/lista     | Requirements and acceptance criteria defined first   |
| Design | Diagrama/arquitectura | Architecture and component tree planned before code |
| Review | Ojo/lupa            | AI-assisted code review catches issues early         |
| Ship   | Cohete/check        | Tested, documented, and deployed with confidence     |

#### Scenario: Cuatro pasos renderizados en orden

- **GIVEN** que el usuario navega a la sección How I Work
- **WHEN** la sección se renderiza
- **THEN** los 4 pasos (Spec → Design → Review → Ship) son visibles en orden
- **AND** cada paso muestra su icono y descripción

#### Scenario: Orden secuencial claro

- **GIVEN** que los 4 pasos están renderizados
- **WHEN** el usuario lee de izquierda a derecha (o arriba hacia abajo en móvil)
- **THEN** el orden Spec → Design → Review → Ship es inequívoco

### Requirement: Líneas de conexión sutiles

El sistema DEBE conectar visualmente los pasos consecutivos mediante líneas o
flechas sutiles que indiquen flujo, sin dominar sobre el contenido de los pasos.

#### Scenario: Conexiones entre pasos

- **GIVEN** que los 4 pasos están renderizados
- **WHEN** se observa el espacio entre pasos consecutivos
- **THEN** existe una línea o flecha de conexión entre Spec→Design, Design→Review y Review→Ship
- **AND** las líneas usan opacidad reducida o el color de acento de forma tenue

### Requirement: Adaptación responsiva del pipeline

El sistema DEBE adaptar la disposición del pipeline para viewports móviles.

#### Scenario: Pipeline en móvil

- **GIVEN** que el viewport es < 768px de ancho
- **WHEN** la sección se renderiza
- **THEN** los 4 pasos se apilan verticalmente
- **AND** las líneas de conexión se orientan verticalmente entre pasos
