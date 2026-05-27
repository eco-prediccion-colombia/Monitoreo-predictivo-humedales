/****************************************************
 * ARMONIZACIÓN DE SENSORES
 * Proyecto:
 * Monitoreo Predictivo de Humedales Colombianos
 *
 * OBJETIVO:
 * Estandarizar bandas espectrales entre sensores
 * Landsat y Sentinel-2 para garantizar compatibilidad
 * en análisis multitemporal y clasificación IA.
 ****************************************************/


/****************************************************
 * LANDSAT 5/7
 ****************************************************/
function armonizarL57(image) {

  return image.select(
    ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'],
    ['B2', 'B3', 'B4', 'B8', 'B11', 'B12']
  )
  .multiply(0.0000275)
  .add(-0.2)
  .copyProperties(image, image.propertyNames());
}


/****************************************************
 * LANDSAT 8/9
 ****************************************************/
function armonizarL89(image) {

  return image.select(
    ['SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B6', 'SR_B7'],
    ['B2', 'B3', 'B4', 'B8', 'B11', 'B12']
  )
  .multiply(0.0000275)
  .add(-0.2)
  .copyProperties(image, image.propertyNames());
}


/****************************************************
 * SENTINEL-2
 ****************************************************/
function armonizarS2(image) {

  return image.select(
    ['B2', 'B3', 'B4', 'B8', 'B11', 'B12']
  )
  .divide(10000)
  .copyProperties(image, ['system:time_start']);
}
