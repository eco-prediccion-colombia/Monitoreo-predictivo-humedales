# Preprocesamiento Geoespacial

Esta carpeta contiene los procesos de limpieza, filtrado, armonización y preparación inicial de imágenes satelitales utilizadas en el sistema de monitoreo ambiental de la Laguna de Fúquene.

## Objetivo

Garantizar la consistencia espectral y espacial de las imágenes antes de los procesos de clasificación, análisis temporal y modelado predictivo.

## Procesos implementados

- enmascaramiento de nubes
- remoción de sombras
- armonización multisentinel y landsat
- selección de bandas
- recorte por región de interés (ROI)
- normalización espectral
- filtrado temporal

## Sensores utilizados

- Sentinel-2 SR Harmonized
- Landsat 5
- Landsat 7
- Landsat 8
- Landsat 9

## Resultados esperados

- colecciones limpias
- imágenes consistentes entre sensores
- reducción de ruido atmosférico
- estabilidad para análisis multitemporal

## Importancia científica

El preprocesamiento es una etapa crítica para reducir errores de clasificación y mejorar la calidad del entrenamiento de modelos de inteligencia artificial.
