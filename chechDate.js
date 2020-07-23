function checkDate(arrBusyTimeOfDay, durotation) {
  let arrResult = [];

  // let tryDate = new Date(arr[0]);
  let tryDate = new Date(2020, 6, 23, 9, 0, 0, 0);
  while (tryDate < arrBusyTimeOfDay[arrBusyTimeOfDay.length - 1]) {
    const checkDate = new Date(tryDate);
    checkDate.setHours(tryDate.getHours() + durotation);
    const finishDate = new Date(checkDate);
    checkDate.setMinutes(checkDate.getMinutes() + 15);

    const index = arrBusyTimeOfDay.findIndex((e) => tryDate < e);
    if (
      checkDate <= arrBusyTimeOfDay[index] &&
      (index !== arrBusyTimeOfDay.length - 1
        ? checkDate < arrBusyTimeOfDay[index + 1]
        : true)
    ) {
      // arrResult.push()
      console.log(`варик встроиться с ${tryDate} до ${finishDate}`);
    }
    tryDate = new Date(tryDate.setMinutes(tryDate.getMinutes() + 15));
  }
}

const arr = [
  // new Date(2020, 6, 23, 8, 45, 0, 0),
  new Date(2020, 6, 23, 9, 0, 0, 0),
  new Date(2020, 6, 23, 13, 0, 0, 0),
  new Date(2020, 6, 23, 13, 15, 0, 0),
  new Date(2020, 6, 23, 13, 30, 0, 0),
  new Date(2020, 6, 23, 13, 45, 0, 0),
  new Date(2020, 6, 23, 14, 0, 0, 0),
  new Date(2020, 6, 23, 17, 0, 0, 0),
  new Date(2020, 6, 23, 19, 15, 0, 0),
];

checkDate(arr, 2);
