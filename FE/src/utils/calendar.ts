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

export { getMonthArr };
