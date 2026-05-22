# Datos Hidrológicos

Esta carpeta contiene los datasets hidrológicos utilizados en el proyecto **Monitoreo Predictivo de Humedales**.

La información almacenada aquí permite analizar la dinámica hídrica de la Laguna de Fúquene y su relación con la expansión del buchón de agua.

---

# Objetivo

Centralizar datos relacionados con:

- niveles de agua
- comportamiento hidrológico
- variabilidad temporal de la laguna
- conectividad hídrica
- análisis de inundación y reducción del espejo de agua

---

# Variables hidrológicas actuales

## Niveles de agua
Series históricas provenientes de estaciones hidrológicas de la CAR.

Incluye:
- niveles mínimos
- niveles medios
- niveles máximos

---

# Estaciones principales

## Chalet Norte
Estación hidrológica utilizada para monitoreo de niveles en la Laguna de Fúquene.

---

## Isla del Santuario
Estación hidrometeorológica clave para el análisis local de la laguna.

Incluye variables relacionadas con:
- precipitación
- niveles hídricos

---

# Importancia ecológica

Las variables hidrológicas son fundamentales debido a que afectan directamente:

- expansión o reducción del espejo de agua
- zonas de colonización del buchón
- dinámica de inundación
- acumulación de sedimentos
- conectividad ecológica del humedal

---

# Fuentes principales

- CAR
- IDEAM
- Datos Abiertos Colombia

---

# Estructura sugerida

```text id="e6v4m3"
hidrologia/
├── niveles/
│   ├── chalet_norte/
│   └── isla_santuario/
│
├── precipitacion/
│   └── isla_santuario/
