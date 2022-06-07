import { MONTH_NAME } from '@/constants/calendar';
import { LANGUAGE } from '@/constants/constant';

const getMonthArr = (year, monthIdx) => {
  const monthArr = [];
  const lastDate = new Date(year, monthIdx + 1, 0).getDate();
  let firstDay = new Date(year, monthIdx).getDay();
  const LAST_DAY_IDX = 6;

  for (let date = 1; date <= lastDate; ) {
    const weekArr = [];

    for (let i = 0; i <= LAST_DAY_IDX; i++) {
      if (firstDay > 0) {
        weekArr.push(null);
        firstDay -= 1;
      } else if (date <= lastDate) {
        weekArr.push(date);
        date++;
      }
      if (i === LAST_DAY_IDX) {
        monthArr.push(weekArr);
      }
    }
  }

  return monthArr;
};

const getSliderMonthData = (year, monthIdx) => {
  const SliderMonthData = [];
  const MAX_MONTH_COUNT = 4;
  for (let i = monthIdx; i < monthIdx + MAX_MONTH_COUNT; i++) {
    SliderMonthData.push(getMonthArr(year, i));
  }
  return SliderMonthData;
};

const getYearMonthText = (language, monthIdx, year) => {
  const thisDay = new Date(year, monthIdx);
  const thisMonthIdx = thisDay.getMonth();
  const thisYear = thisDay.getFullYear();

  return language === LANGUAGE.en
    ? `${MONTH_NAME[thisMonthIdx][language]} ${thisYear}`
    : `${thisYear}년 ${MONTH_NAME[thisMonthIdx][language]}`;
};

export { getMonthArr, getSliderMonthData, getYearMonthText };
