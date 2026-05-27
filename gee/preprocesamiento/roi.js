// ROI principal del proyecto

var roi = ee.FeatureCollection(
  'projects/earth-observation-fuquene/assets/roi_gee'
);

var roiGeom = roi.geometry();

Map.centerObject(roi, 11);
