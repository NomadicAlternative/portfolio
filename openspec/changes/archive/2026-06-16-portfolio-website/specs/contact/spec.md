# Contact Specification

## Purpose

Sección de contacto mínima con exactamente 3 enlaces directos: GitHub, LinkedIn
y correo electrónico. Sin formulario de contacto ni campos de entrada.

## Requirements

### Requirement: Tres enlaces de contacto

El sistema DEBE mostrar exactamente 3 enlaces de contacto, cada uno con un icono
representativo y el texto del destino.

| Enlace   | Icono         | Destino                                      |
|----------|---------------|----------------------------------------------|
| GitHub   | Logo GitHub   | `github.com/NomadicAlternative`              |
| LinkedIn | Logo LinkedIn | Perfil de LinkedIn del desarrollador          |
| Email    | Sobre/carta   | Dirección de correo electrónico del desarrollador |

#### Scenario: Tres enlaces visibles

- **GIVEN** que el usuario navega a la sección Contact
- **WHEN** la sección se renderiza
- **THEN** se muestran exactamente 3 enlaces con sus iconos
- **AND** los destinos son GitHub, LinkedIn y correo electrónico

#### Scenario: Clic en enlace de GitHub

- **GIVEN** que el enlace de GitHub está visible
- **WHEN** el usuario hace clic en él
- **THEN** se abre `github.com/NomadicAlternative` en una pestaña nueva

#### Scenario: Clic en enlace de Email

- **GIVEN** que el enlace de correo está visible
- **WHEN** el usuario hace clic en él
- **THEN** se abre el cliente de correo predeterminado con la dirección `mailto:`
  del desarrollador

### Requirement: Sin formulario de contacto

El sistema NO DEBE incluir ningún formulario de contacto, campos de entrada de
texto, textarea ni botón de envío en esta sección.

#### Scenario: Ausencia de formulario

- **GIVEN** que la sección Contact está renderizada
- **WHEN** se inspecciona el DOM de la sección
- **THEN** no existen elementos `<form>`, `<input>`, `<textarea>` ni botones
  de tipo submit
