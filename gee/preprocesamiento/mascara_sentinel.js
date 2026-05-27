function maskS2(image) {
  var scl = image.select('SCL');

  var mask = scl.neq(3)
    .and(scl.neq(8))
    .and(scl.neq(9))
    .and(scl.neq(10))
    .and(scl.neq(11));

  return image.updateMask(mask)
    .divide(10000)
    .copyProperties(image, ['system:time_start']);
}


/*
SCL Classes removidas:
3  = cloud shadow
8  = cloud medium probability
9  = cloud high probability
10 = cirrus
11 = snow
*/
