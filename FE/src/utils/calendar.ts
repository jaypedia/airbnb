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

const checkDateIsPast = ({ year, monthIdx, date, today }) => {
  const thisDate = new Date(year, monthIdx, date);
  if (today.toString().slice(0, 10) === thisDate.toString().slice(0, 10)) {
    return false;
  }
  return today > thisDate;
};

const getKoreanMonthDateString = (date, monthIdx) => {
  const month = (monthIdx % 12) + 1;
  return `${month}월 ${date}일`;
};

const getEnglishMonthDateString = (date, monthIdx) => {
  const month = monthIdx % 12;
  return `${MONTH_NAME[month].slice(0, 3)} ${date}`;
};

const getLanguageButtonString = (language: string) => {
  return language.slice(0, 2).toUpperCase();
};

export {
  getMonthArr,
  getSliderMonthData,
  getYearMonthText,
  checkDateIsPast,
  getKoreanMonthDateString,
  getEnglishMonthDateString,
  getLanguageButtonString,
};
