function aplicarMascaraQA(image) {
  var qa = image.select('QA_PIXEL');

  var mask = qa.bitwiseAnd(1 << 3).eq(0)
    .and(qa.bitwiseAnd(1 << 4).eq(0))
    .and(qa.bitwiseAnd(1 << 5).eq(0));

  return image.updateMask(mask);
}

function maskL57(image) {
  return aplicarMascaraQA(image)
    .select(
      ['SR_B1', 'SR_B2', 'SR_B3', 'SR_B4', 'SR_B5', 'SR_B7'],
      ['BLUE', 'GREEN', 'RED', 'NIR', 'SWIR1', 'SWIR2']
    )
    .multiply(0.0000275)
    .add(-0.2)
    .copyProperties(image, image.propertyNames());
}
