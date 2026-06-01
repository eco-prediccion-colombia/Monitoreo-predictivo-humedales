# Metodología

## Introducción

El Sistema de Inteligencia Ambiental Predictiva para Humedales Colombianos utiliza técnicas de análisis geoespacial, datos abiertos e inteligencia artificial para monitorear y analizar la dinámica ecológica de la Laguna de Fúquene.

La metodología integra imágenes satelitales, variables climáticas y modelos de clasificación supervisada para identificar patrones ambientales y generar información útil para procesos de monitoreo y gestión territorial.

---

# Área de estudio

La Laguna de Fúquene se localiza entre los departamentos de Cundinamarca y Boyacá, Colombia.

Es uno de los humedales altoandinos más importantes del país y presenta procesos de transformación asociados a:

* expansión de vegetación invasora;
* sedimentación;
* presión agropecuaria;
* alteraciones hidrológicas;
* cambio climático.

La región de interés (ROI) fue delimitada mediante geometrías geoespaciales específicas para el ecosistema lagunar.

---

# Fuentes de datos

## Imágenes satelitales

### Sentinel-2

Utilizado para el monitoreo reciente debido a su resolución espacial de 10 metros.

Principales bandas utilizadas:

* Azul (B2)
* Verde (B3)
* Rojo (B4)
* Infrarrojo Cercano (B8)
* SWIR 1 (B11)
* SWIR 2 (B12)

### Landsat

Utilizado para ampliar la cobertura temporal histórica del análisis.

Sensores empleados:

* Landsat 8
* Landsat 9

---

## Datos climáticos

### CHIRPS

Fuente global de precipitación satelital utilizada para estimar acumulados mensuales de lluvia.

### ERA5-Land

Base de datos climática utilizada para obtener:

* temperatura;
* velocidad del viento;
* dirección del viento.

---

# Preprocesamiento

Antes del análisis se aplican procesos de limpieza y armonización de imágenes.

## Enmascaramiento de nubes

Se eliminan píxeles afectados por:

* nubes;
* sombras;
* cirros;
* artefactos atmosféricos.

## Armonización multisensor

Las bandas espectrales de Landsat y Sentinel-2 son transformadas a una estructura común para permitir análisis multitemporales consistentes.

Este procedimiento permite construir una serie histórica homogénea utilizando sensores diferentes.

---

# Cálculo de índices espectrales

A partir de las bandas satelitales se calculan diversos índices ambientales.

## NDVI

Utilizado para caracterizar cobertura vegetal y actividad fotosintética.

## NDWI

Orientado a la detección de cuerpos de agua.

## MNDWI

Utilizado para mejorar la separación entre agua y superficie terrestre.

## FAI

Índice diseñado para detectar vegetación flotante y concentraciones asociadas a especies invasoras como el buchón de agua.

---

# Construcción de muestras de entrenamiento

Se generaron muestras representativas para tres clases ambientales principales:

| Clase | Descripción             |
| ----- | ----------------------- |
| 0     | Agua                    |
| 1     | Buchón de agua          |
| 2     | Tierra firme y juncales |

Las muestras fueron construidas mediante interpretación visual sobre imágenes satelitales de referencia.

---

# Clasificación supervisada

## Algoritmo utilizado

Se implementó un modelo Random Forest debido a:

* robustez frente a ruido;
* capacidad para manejar múltiples variables;
* buen desempeño en clasificación ambiental;
* interpretabilidad de resultados.

## Variables predictoras

El modelo utiliza:

* bandas espectrales;
* NDVI;
* NDWI;
* MNDWI;
* FAI.

---

# Validación

La evaluación del modelo se realiza mediante división de muestras en conjuntos de entrenamiento y prueba.

Las métricas calculadas incluyen:

* matriz de confusión;
* exactitud global (Accuracy);
* Precisión (Precision);
* Sensibilidad (Recall);
* F1-Score;
* Coeficiente Kappa.

Estas métricas permiten cuantificar el desempeño del clasificador y estimar su capacidad de generalización.

---

# Generación de series temporales

Se construye una serie histórica mensual para el periodo 2016–2025.

Para cada mes se estiman:

* área de agua;
* área cubierta por buchón;
* área de tierra firme y juncales;
* superficie observable;
* áreas afectadas por nubosidad.

Los resultados son exportados para análisis estadístico posterior.

---

# Integración climática

Las variables climáticas son integradas a las series temporales ambientales con el fin de analizar posibles relaciones entre:

* precipitación;
* temperatura;
* dinámica del viento;
* expansión de vegetación invasora.

---

# Visualización

El sistema incorpora herramientas de visualización desarrolladas en Google Earth Engine que permiten:

* exploración temporal;
* inspección espacial;
* visualización de resultados clasificados;
* control de calidad visual.

---

# Escenarios futuros

La arquitectura desarrollada permitirá implementar modelos predictivos orientados a construir escenarios prospectivos para:

* 2030;
* 2040;
* 2050.

Estos escenarios buscarán apoyar procesos de monitoreo ambiental y toma de decisiones basadas en evidencia.

---

# Reproducibilidad

El proyecto utiliza exclusivamente herramientas de acceso abierto, datos abiertos y metodologías reproducibles.

La estructura modular del repositorio permite la reutilización y adaptación del flujo metodológico en otros humedales y ecosistemas acuáticos de Colombia.
