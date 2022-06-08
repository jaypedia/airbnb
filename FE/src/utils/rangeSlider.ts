function getNumDigit(num) {
  const result = num.toString().length;
  return result;
}
function getRangeArrInd(num, min, d) {
  const result = Math.floor((num - min) / d);
  return result;
}
function dividePrices(priceData) {
  const NUM_OF_RANGE_BARS = 29;
  const RANGE_PRICE_MAX = 0.05;
  const rangePriceCnt = priceData.length;
  const priceMaxBoundary = Math.round(rangePriceCnt * RANGE_PRICE_MAX);

  const min = priceData[0];
  const max = priceData[rangePriceCnt - priceMaxBoundary];

  const rangeMin = Math.floor(min / 10 ** (getNumDigit(min) - 1)) * 10 ** (getNumDigit(min) - 1);
  const rangeMax = Math.floor(max / 10 ** (getNumDigit(max) - 1)) * 10 ** (getNumDigit(max) - 1);
  const rangeGap = Math.round((rangeMax - rangeMin) / NUM_OF_RANGE_BARS);

  const rangeObj = {};
  for (let i = 0; i < NUM_OF_RANGE_BARS + 1; i++) {
    rangeObj[i] = 0;
  }

  priceData.forEach(el => {
    const idx = getRangeArrInd(el, rangeMin, rangeGap);
    if (idx >= NUM_OF_RANGE_BARS) {
      rangeObj[NUM_OF_RANGE_BARS]++;
    } else {
      rangeObj[idx]++;
    }
  });

  return { rangeObj, rangeMin, rangeMax, rangeGap };
}

export default dividePrices;
