# i18n Specification

## Purpose

Soporte de internacionalización inglés/español mediante i18next + react-i18next,
con namespaces JSON de carga lazy por sección, detección de idioma del navegador
y persistencia de preferencia sin recarga de página.

## Requirements

### Requirement: Soporte bilingüe EN/ES

El sistema DEBE soportar dos idiomas: inglés (`en`) y español (`es`).
Todas las cadenas de UI (etiquetas, encabezados, descripciones, botones)
DEBEN existir en ambos idiomas.

#### Scenario: Cambio a español

- **GIVEN** que el sitio está en inglés
- **WHEN** el usuario selecciona español en el switcher
- **THEN** todas las cadenas visibles cambian a español inmediatamente
- **AND** la interfaz no se recarga

#### Scenario: Cambio a inglés

- **GIVEN** que el sitio está en español
- **WHEN** el usuario selecciona inglés en el switcher
- **THEN** todas las cadenas visibles cambian a inglés inmediatamente

### Requirement: Namespaces lazy por sección

El sistema DEBE organizar las traducciones en namespaces JSON separados por
sección del sitio. Cada namespace DEBE cargarse de forma lazy (bajo demanda)
cuando la sección correspondiente entra en viewport o se navega a ella.

#### Scenario: Carga lazy de namespace

- **GIVEN** que el sitio carga en español
- **WHEN** el usuario hace scroll hasta la sección About
- **THEN** el namespace `about` se carga desde `/locales/es/about.json`
- **AND** el contenido de About se renderiza en español

### Requirement: Detección de idioma del navegador

El sistema DEBE detectar el idioma del navegador (`navigator.language`) en la
primera visita. Si el idioma detectado es español (`es` o variantes), DEBE usarlo.
Para cualquier otro idioma, DEBE usar español como valor predeterminado.

#### Scenario: Primera visita con navegador en español

- **GIVEN** que el usuario visita el sitio por primera vez
- **WHEN** `navigator.language` es `es-MX`, `es-ES` o similar
- **THEN** el sitio se muestra en español

#### Scenario: Primera visita con navegador en otro idioma

- **GIVEN** que el usuario visita el sitio por primera vez
- **WHEN** `navigator.language` es `en-US`, `fr`, `de` o cualquier valor no español
- **THEN** el sitio se muestra en español (default)

### Requirement: Selector de idioma en NavBar

El sistema DEBE incluir un control de cambio de idioma en la barra de navegación,
accesible desde cualquier sección del sitio.

#### Scenario: Switcher visible en NavBar

- **GIVEN** que el usuario está en cualquier sección del sitio
- **WHEN** observa la barra de navegación
- **THEN** el control de idioma (EN/ES) es visible y accesible

### Requirement: Persistencia de preferencia

El sistema DEBE persistir la elección de idioma en `localStorage`.
En visitas subsecuentes, DEBE usar la preferencia guardada en lugar de
la detección del navegador.

#### Scenario: Preferencia persiste entre sesiones

- **GIVEN** que el usuario seleccionó inglés en una visita anterior
- **WHEN** vuelve a cargar el sitio en otra sesión
- **THEN** el sitio se muestra en inglés
- **AND** no se aplica la detección del navegador
