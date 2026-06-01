# Calidad del Agua - Datos Intermedios

## Descripción

Esta carpeta almacena los datasets de calidad del agua que han pasado por una primera etapa de limpieza y estandarización, pero que aún no han sido transformados a su estructura analítica final.

Los archivos contenidos en esta carpeta corresponden a una etapa intermedia del flujo ETL (Extract, Transform, Load) del proyecto.

---

# Objetivo

Conservar una versión depurada de los datos originales antes de realizar procesos adicionales de transformación, agregación temporal o selección de variables para modelamiento.

Esta etapa permite:

- preservar la trazabilidad de los datos;
- documentar las transformaciones realizadas;
- facilitar auditorías y control de calidad;
- reproducir el procesamiento de manera transparente.

---

# Flujo de procesamiento

```text
raw/
   ↓
limpieza inicial
   ↓
interim/
   ↓
análisis exploratorio
   ↓
procesados/
```

---

# Fuente de los datos

Los registros provienen de estaciones de monitoreo de calidad del agua administradas por entidades oficiales.

Fuentes utilizadas:

- IDEAM
- CAR
- Datos Abiertos Colombia

---

# Estado actual

Los datasets incluidos en esta carpeta han sido sometidos a procesos de:

- eliminación de encabezados institucionales;
- estandarización de nombres de columnas;
- conversión de fechas;
- conversión de variables numéricas;
- depuración básica de registros.

No se han realizado aún procesos de:

- imputación de valores faltantes;
- agregación temporal;
- selección de variables;
- integración con otras fuentes de información.

---

# Estaciones disponibles

## Lenguazaque

La estación Lenguazaque ha sido priorizada debido a su relevancia hidrológica dentro del sistema asociado a la Laguna de Fúquene.

Sus registros serán utilizados para evaluar posibles relaciones entre la calidad del agua y la dinámica ecológica del humedal.

---
