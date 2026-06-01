# Datasets Utilizados

## Introducción

El Sistema de Inteligencia Ambiental Predictiva para Humedales Colombianos integra múltiples fuentes de datos abiertos, ambientales, climáticos y geoespaciales para el monitoreo y análisis de la Laguna de Fúquene.

La estrategia del proyecto consiste en combinar observación satelital, registros meteorológicos, información hidrológica y variables de calidad del agua para construir una visión integral del comportamiento ecológico del humedal.

---

# Inventario General de Datos

| Dataset | Tipo | Fuente |
|----------|----------|----------|
| Sentinel-2 | Imágenes satelitales | Copernicus / ESA |
| Landsat 8-9 | Imágenes satelitales | USGS / NASA |
| CHIRPS | Precipitación | Climate Hazards Center |
| ERA5-Land | Variables climáticas | ECMWF |
| IDEAM | Datos meteorológicos e hidrológicos | IDEAM |
| CAR | Información ambiental regional | CAR Cundinamarca |
| Datos Abiertos Colombia | Información complementaria | Gobierno de Colombia |

---

# Imágenes Satelitales

## Sentinel-2

### Descripción

Misión satelital del programa Copernicus de la Agencia Espacial Europea (ESA).

### Uso en el proyecto

- Monitoreo de la Laguna de Fúquene.
- Detección de vegetación invasora.
- Cálculo de índices espectrales.
- Clasificación supervisada.
- Generación de series temporales.

### Resolución espacial

- 10 m
- 20 m
- 60 m

### Variables utilizadas

- B2 (Azul)
- B3 (Verde)
- B4 (Rojo)
- B8 (Infrarrojo cercano)
- B11 (SWIR1)
- B12 (SWIR2)

### Periodo utilizado

2016 - Actualidad

---

## Landsat 8 y Landsat 9

### Descripción

Programa satelital operado por NASA y USGS.

### Uso en el proyecto

- Complemento histórico.
- Armonización multisensor.
- Construcción de series temporales.

### Resolución espacial

30 metros

### Variables utilizadas

- Azul
- Verde
- Rojo
- NIR
- SWIR1
- SWIR2

---

# Datos Climáticos

## CHIRPS

### Descripción

Climate Hazards Group InfraRed Precipitation with Stations.

Producto global que combina observaciones satelitales y estaciones meteorológicas.

### Uso en el proyecto

- Precipitación mensual acumulada.
- Análisis de tendencias climáticas.
- Relación entre lluvia y expansión del buchón.

### Variable utilizada

- Precipitación (mm)

### Resolución

0.05° (~5 km)

---

## ERA5-Land

### Descripción

Reanálisis climático global desarrollado por el Centro Europeo de Pronósticos Meteorológicos de Mediano Plazo (ECMWF).

### Uso en el proyecto

- Temperatura.
- Velocidad del viento.
- Dirección del viento.
- Variables climáticas auxiliares.

### Variables utilizadas

- Temperatura a 2 metros.
- Componente U del viento.
- Componente V del viento.

### Resolución

~9 km

---

# Datos Meteorológicos e Hidrológicos

## IDEAM

### Descripción

Instituto de Hidrología, Meteorología y Estudios Ambientales de Colombia.

### Uso en el proyecto

- Validación climática.
- Series históricas meteorológicas.
- Información hidrológica regional.

### Variables disponibles

- Precipitación.
- Temperatura.
- Humedad relativa.
- Velocidad del viento.
- Dirección del viento.
- Niveles hidrológicos.

### Cobertura

Estaciones cercanas a la Laguna de Fúquene.

---

# Información Ambiental Regional

## CAR

### Descripción

Corporación Autónoma Regional de Cundinamarca.

### Uso en el proyecto

- Información ambiental del humedal.
- Calidad del agua.
- Monitoreo ecológico.
- Contexto territorial.

### Aplicaciones

- Validación de resultados.
- Interpretación ambiental.
- Soporte para análisis ecosistémico.

---

# Datos Abiertos Colombia

### Descripción

Portal oficial de datos abiertos del Gobierno de Colombia.

### Uso en el proyecto

Integración de datasets complementarios relacionados con:

- Recursos hídricos.
- Medio ambiente.
- Territorio.
- Gestión ambiental.

---

# Datos Hidrológicos

## Niveles de agua

### Descripción

Registros históricos asociados al comportamiento hidrológico de la Laguna de Fúquene y su entorno.

### Uso en el proyecto

- Análisis de fluctuaciones del espejo de agua.
- Relación entre niveles y cobertura de buchón.
- Variables predictoras para modelos futuros.

### Variables

- Nivel de agua.
- Variación temporal.
- Tendencias hidrológicas.

### Fuentes

- IDEAM.
- CAR.
- Datos Abiertos Colombia.

---

# Calidad del Agua

## Variables fisicoquímicas

### Descripción

Conjunto de parámetros utilizados para evaluar el estado ecológico del ecosistema lagunar.

### Uso en el proyecto

- Análisis de condiciones ambientales.
- Relación entre nutrientes y vegetación invasora.
- Caracterización ecológica del humedal.

### Variables disponibles

Dependiendo de la disponibilidad histórica:

- Oxígeno disuelto.
- pH.
- Conductividad.
- Turbidez.
- Temperatura del agua.
- Sólidos suspendidos.
- Fósforo total.
- Nitrógeno total.
- DBO.
- DQO.
- Clorofila-a.

### Fuentes

- CAR.
- IDEAM.
- Datos Abiertos Colombia.
- Estudios técnicos y académicos.

---

# Índices Espectrales Generados

A partir de las imágenes satelitales se calculan variables derivadas utilizadas por los modelos de inteligencia artificial.

## NDVI

Índice de vegetación.

### Aplicación

- Cobertura vegetal.
- Actividad fotosintética.

---

## NDWI

Índice de agua.

### Aplicación

- Delimitación de cuerpos de agua.

---

## MNDWI

Índice mejorado de agua.

### Aplicación

- Separación entre agua y superficie terrestre.

---

## FAI

Floating Algae Index.

### Aplicación

- Detección de vegetación flotante.
- Identificación de zonas con presencia de buchón de agua.

---

# Datasets Generados por el Proyecto

Además de las fuentes externas, el proyecto genera nuevos datasets derivados mediante procesamiento geoespacial e inteligencia artificial.

---

## Series Temporales de Cobertura

Variables:

- Área de agua (ha).
- Área de buchón (ha).
- Área de tierra firme y juncales (ha).
- Área visible.
- Área afectada por nubosidad.

Periodo:

- 2016 - 2025.

---

## Series Climáticas Integradas

Variables:

- Precipitación mensual.
- Temperatura media.
- Velocidad del viento.
- Dirección del viento.

Periodo:

- 2016 - 2025.

---

## Series Hidrológicas

Variables:

- Nivel del agua.
- Tendencias hidrológicas.
- Variabilidad temporal.

---

## Series de Calidad del Agua

Variables:

- Indicadores fisicoquímicos disponibles.
- Nutrientes.
- Parámetros ecológicos.

---

## Mapas Clasificados

Productos derivados del modelo Random Forest.

Clases:

- Agua.
- Buchón de agua.
- Tierra firme y juncales.

---

# Consideraciones

Todos los datos utilizados en el proyecto provienen de fuentes abiertas, institucionales o científicas ampliamente reconocidas.

La integración de información satelital, climática, hidrológica y ecológica permite construir una base sólida para el monitoreo ambiental y el desarrollo de modelos predictivos aplicados a humedales colombianos.

La arquitectura del sistema ha sido diseñada para facilitar la incorporación de nuevas fuentes de información y su futura adaptación a otros ecosistemas acuáticos del país.
