# Calidad del Agua - Datos Procesados

## Descripción

Esta carpeta contiene los datasets de calidad del agua transformados y estructurados para análisis estadístico, integración de variables ambientales y modelamiento predictivo.

Los archivos almacenados aquí corresponden a la etapa final de procesamiento dentro del flujo de datos del proyecto.

---

# Objetivo

Generar conjuntos de datos listos para análisis y modelamiento a partir de registros históricos de calidad del agua.

Los datos procesados permiten:

- análisis exploratorio;
- construcción de series temporales;
- correlaciones ambientales;
- integración con variables climáticas;
- integración con variables hidrológicas;
- desarrollo de modelos predictivos.

---

# Flujo de procesamiento

```text
raw/
   ↓
limpieza inicial
   ↓
interim/
   ↓
transformación y estructuración
   ↓
procesados/
```

---

# Transformaciones realizadas

Dependiendo del dataset, los procesos aplicados pueden incluir:

- eliminación de columnas administrativas repetitivas;
- normalización de nombres de variables;
- estandarización de formatos de fecha;
- conversión de variables numéricas;
- reorganización tabular para análisis;
- agregación temporal;
- control de calidad de registros.

---

# Estructura de los datos

Los datasets procesados se organizan en formato analítico.

Ejemplo:

| fecha_muestreo | conductividad | ph | oxigeno_disuelto |
|----------------|--------------|----|------------------|
| 2005-04-02 | 130 | 7.1 | 8.3 |
| 2005-06-15 | 145 | 7.3 | 8.1 |

Este formato facilita:

- análisis temporal;
- visualización;
- cálculo de tendencias;
- integración con Machine Learning.

---

# Estación principal

## Lenguazaque

La estación Lenguazaque fue seleccionada como fuente prioritaria debido a su relevancia dentro del sistema hidrológico asociado a la Laguna de Fúquene.

Sus registros serán utilizados como potenciales variables explicativas para evaluar relaciones entre calidad del agua y dinámica ecológica del humedal.

---
