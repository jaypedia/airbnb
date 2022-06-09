import { useState, useEffect } from 'react';

import { Box, Typography, Stack, Grid } from '@mui/material';

import { AirbnbSlider } from './AirbnbSlider.style';

import searchBarData from '@/apis/searchBar';
import AirbnbThumbComponent from '@/components/RangeSlider/AirbnbThumb';
import * as S from '@/components/RangeSlider/RangeSlider.style';
import getRangeSliderValues from '@/utils/rangeSlider';
import updateData from '@/utils/updateData';

const RangeSlider = () => {
  const [priceData, setPriceData] = useState([]);
  const [priceDataLoading, setPriceDataLoading] = useState(false);

  const minDistance = 10000;
  const [rangePrice, setRangePrice] = useState([100000, 800000]);

  const result = priceData.prices ? getRangeSliderValues(priceData.prices) : null;
  const rangePriceCntObj = priceData.prices ? result.graphBarCntObj : {};
  const resultArr = [];
  const rangeMin = priceData.prices ? result.rangeMin : null;
  const rangeMax = priceData.prices ? result.rangeMax : null;
  const rangeGap = priceData.prices ? result.rangeGap : null;
  const rangeAvg = priceData.prices ? result.rangeAvg : 0;

  for (const key in rangePriceCntObj) {
    resultArr.push(rangePriceCntObj[key]);
  }

  const graphBars = resultArr.map((el, idx) => {
    const isInRange =
      idx * rangeGap + rangeMin >= rangePrice[0] && idx * rangeGap + rangeMin <= rangePrice[1];
    return <S.GraphBar barHeight={el} isInRange={isInRange} key={idx} />;
  });

  const handleChange = (event, newRangePrice, activeThumb) => {
    if (!Array.isArray(newRangePrice)) {
      return;
    }

    if (activeThumb === 0) {
      setRangePrice([Math.min(newRangePrice[0], rangePrice[1] - minDistance), rangePrice[1]]);
    } else {
      setRangePrice([rangePrice[0], Math.max(newRangePrice[1], rangePrice[0] + minDistance)]);
    }
  };

  useEffect(() => {
    updateData(setPriceDataLoading, searchBarData.getRangePriceData, setPriceData);
  }, []);

  return (
    <Box sx={{ width: '600px', height: '100%', margin: 7 }}>
      <Stack>
        <Typography variant="h6" component="span">
          가격범위
        </Typography>
        <Typography variant="subtitle1" component="span" color="gray">
          {`평균 1박 요금은 ₩${rangeAvg.toLocaleString()} 입니다.`}
        </Typography>
      </Stack>
      <S.GraphBox>{graphBars}</S.GraphBox>
      <AirbnbSlider
        max={rangeMax}
        min={rangeMin}
        value={rangePrice}
        onChange={handleChange}
        components={{ Thumb: AirbnbThumbComponent }}
        getAriaValueText={val => `₩${val}`}
        defaultValue={[20000, 80000]}
        disableSwap
      />

      <Grid container rowSpacing={2} columnSpacing={1}>
        <Grid item xs={12} sm={6}>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="subtitle1"
              component="span"
            >{`최저 요금: ₩ ${rangePrice[0].toLocaleString()}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center">
            <Typography
              variant="subtitle1"
              component="span"
            >{`최고 요금: ₩ ${rangePrice[1].toLocaleString()}`}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RangeSlider;
