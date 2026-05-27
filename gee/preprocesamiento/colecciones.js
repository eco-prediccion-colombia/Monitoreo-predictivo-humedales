/****************************************************
 * COLECCIONES SATELITALES
 * Proyecto:
 * Monitoreo Predictivo de Humedales Colombianos
 *
 * OBJETIVO:
 * Construir colecciones multitemporales armonizadas
 * para análisis ecológico y clasificación supervisada.
 ****************************************************/


/****************************************************
 * FUNCIÓN:
 * getColeccionHibrida()
 *
 * DESCRIPCIÓN:
 * Usa Landsat 8 para periodos históricos
 * y Sentinel-2 para periodos recientes.
 ****************************************************/



function getColeccionHibrida(start, end, roiGeom) {

  var fechaLimite = ee.Date('2018-12-01').millis();
  var startMillis = ee.Date(start).millis();

  return ee.ImageCollection(
    ee.Algorithms.If(

      /************************************************
       * LANDSAT 8
       ************************************************/
      startMillis.lt(fechaLimite),

      ee.ImageCollection('LANDSAT/LC08/C02/T1_L2')
        .filterDate(start, end)
        .filterBounds(roiGeom)
        .filter(ee.Filter.lt('CLOUD_COVER', 75))
        .map(maskL8)
        .map(armonizarL89),

      /************************************************
       * SENTINEL-2
       ************************************************/
      ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
        .filterDate(start, end)
        .filterBounds(roiGeom)
        .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 60))
        .map(maskS2)
        .map(armonizarS2)
    )
  );
}
