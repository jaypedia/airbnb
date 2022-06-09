function getNumDigit(num) {
  const result = num.toString().length;
  return result;
}
function getRangeArrInd(num, min, d) {
  const result = Math.floor((num - min) / d);
  return result;
}
function getRangeSliderValues(priceData) {
  const NUM_OF_RANGE_BARS = 29;
  const RANGE_PRICE_MAX = 0.05;
  const rangePriceCnt = priceData.length;
  const priceMaxBoundary = Math.round(rangePriceCnt * RANGE_PRICE_MAX);

  const min = priceData[0];
  const max = priceData[rangePriceCnt - priceMaxBoundary];

  const rangeAvg = Math.floor(priceData.reduce((result, curr) => result + curr) / rangePriceCnt);

  const rangeMin = Math.floor(min / 10 ** (getNumDigit(min) - 1)) * 10 ** (getNumDigit(min) - 1);
  const rangeMax = Math.floor(max / 10 ** (getNumDigit(max) - 1)) * 10 ** (getNumDigit(max) - 1);
  const rangeGap = Math.floor((rangeMax - rangeMin) / NUM_OF_RANGE_BARS);

  const graphBarCntObj = {};
  for (let i = 0; i < NUM_OF_RANGE_BARS + 1; i++) {
    graphBarCntObj[i] = 0;
  }

  priceData.forEach(el => {
    const idx = getRangeArrInd(el, rangeMin, rangeGap);
    if (idx >= NUM_OF_RANGE_BARS) {
      graphBarCntObj[NUM_OF_RANGE_BARS]++;
    } else {
      graphBarCntObj[idx]++;
    }
  });

  return { graphBarCntObj, rangeMin, rangeMax, rangeGap, rangeAvg };
}

export default getRangeSliderValues;
