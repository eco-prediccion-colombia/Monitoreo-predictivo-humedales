# Metodología

## Sistema de Inteligencia Ambiental Predictiva para Humedales Colombianos

---

# Descripción General

La metodología del proyecto integra análisis geoespacial, procesamiento satelital, inteligencia artificial y datos abiertos para monitorear dinámicas ecológicas en humedales colombianos.

El caso piloto corresponde a la Laguna de Fúquene, ecosistema afectado por procesos de degradación ambiental y expansión de vegetación invasora.

La metodología busca construir una arquitectura reproducible, escalable y orientada al análisis ambiental mediante herramientas de código abierto y procesamiento cloud.

---

# Enfoque Metodológico

El flujo metodológico se divide en siete componentes principales:

```text
Adquisición de datos
        ↓
Procesamiento satelital
        ↓
Generación de índices espectrales
        ↓
Clasificación supervisada
        ↓
Validación del modelo
        ↓
Análisis temporal
        ↓
Escenarios predictivos
```

---

# 1. Adquisición de Datos

El proyecto integra múltiples fuentes de datos abiertos ambientales y climáticos.

## Imágenes satelitales

### Sentinel-2

Utilizado para:
- monitoreo multiespectral
- análisis de vegetación
- identificación de coberturas acuáticas

### Landsat

Utilizado para:
- análisis histórico
- series temporales
- comparación multianual

---

# Datos Climáticos

## ERA5

Variables climáticas utilizadas:
- temperatura
- precipitación
- humedad
- variables atmosféricas

## CHIRPS

Utilizado para:
- análisis de precipitación histórica
- variabilidad climática

---

# Datos Institucionales

- IDEAM
- CAR
- Datos Abiertos Colombia

Estos datos complementan el análisis ambiental y territorial.

---

# 2. Procesamiento Satelital

El procesamiento principal se realiza mediante Google Earth Engine.

## Procesos implementados

- filtrado temporal
- filtrado espacial
- máscara de nubes
- limpieza de imágenes
- generación de mosaicos
- recorte por región de interés
- normalización de variables

---

# Región de Estudio

La región de análisis corresponde a la Laguna de Fúquene y áreas asociadas de influencia ecológica.

---

# 3. Índices Espectrales

Se calculan índices espectrales para mejorar diferenciación de coberturas.

## Índices implementados

### NDVI

Utilizado para:
- vigor vegetal
- cobertura vegetal

## NDWI

Utilizado para:
- detección de agua superficial

## MNDWI

Utilizado para:
- delimitación de cuerpos de agua

## FAI

Utilizado para:
- detección de vegetación flotante
- identificación de buchón de agua

---

# 4. Clasificación Supervisada

El sistema utiliza modelos de clasificación supervisada mediante Random Forest.

## Clases definidas

- agua
- buchón de agua
- tierra/juncos

---

# Variables utilizadas

## Variables espectrales

- bandas Sentinel-2
- bandas Landsat

## Variables derivadas

- NDVI
- NDWI
- MNDWI
- FAI

## Variables climáticas

- precipitación
- temperatura
- humedad

---

# Entrenamiento del Modelo

El entrenamiento incluye:

- generación de muestras
- selección de variables
- ajuste de parámetros
- clasificación supervisada
- generación de mapas temáticos

---

# 5. Validación

El proyecto incorpora validación cuantitativa del modelo.

## Métricas consideradas

- matriz de confusión
- accuracy
- precision
- recall
- F1-score

---

# Evaluación de Desempeño

La validación busca:

- evaluar consistencia técnica
- reducir errores de clasificación
- medir capacidad predictiva
- comparar desempeño entre clases

---

# 6. Análisis Temporal

El sistema construye series históricas entre 2016 y 2025.

## Objetivos del análisis temporal

- detectar expansión del buchón
- analizar cambios ecológicos
- identificar tendencias espaciales
- evaluar variabilidad temporal

---

# 7. Escenarios Predictivos

El proyecto contempla análisis prospectivos para:

- 2030
- 2040
- 2050

Los escenarios buscan estimar posibles tendencias ecológicas bajo condiciones ambientales observadas.

Nota:
Los resultados representan escenarios probabilísticos y no predicciones exactas.

---

# 8. Visualización y Dashboard

Los resultados serán integrados en una plataforma visual interactiva.

## Componentes previstos

- mapas dinámicos
- análisis temporal
- indicadores ambientales
- visualización geoespacial
- zonas críticas
- escenarios futuros

---

# Herramientas Utilizadas

## Procesamiento Geoespacial

- Google Earth Engine

## Desarrollo y análisis

- Python
- Pandas
- NumPy
- Scikit-learn

## Visualización

- dashboards interactivos
- visualización cloud

---

# Reproducibilidad

La metodología busca mantener:

- trazabilidad
- reproducibilidad
- modularidad
- escalabilidad

mediante estructuras organizadas y herramientas de código abierto.

---

# Alcance del Proyecto

El proyecto se enfoca inicialmente en la Laguna de Fúquene como caso piloto.

Sin embargo, la metodología fue diseñada para adaptarse a otros humedales y ecosistemas acuáticos colombianos.
