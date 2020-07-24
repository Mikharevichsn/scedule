// const db = require('./models/bd');
const Entry = require('./models/entry');

async function getBusyTime(day) {
  const dateDiapasonBegin = new Date(`${day}T00:00:00`);
  const dateDiapasonEnd = new Date(`${day}T23:59:59`);
  const entriesOfDay = await Entry.find()
    .where('dateBegin')
    .gt(dateDiapasonBegin)
    .lte(dateDiapasonEnd)
    .sort('dateBegin');

  // console.log(entriesOfDay);
  return entriesOfDay;
}

// getBusyTime('2020-07-25');

async function makeArrOfBusyPeriods(day) {
  const entriesOfDay = await getBusyTime(day);
  let arrResult = [];
  let currentDate;
  for (let date of entriesOfDay) {
    currentDate = new Date(date.dateBegin);
    arrResult.push(new Date(currentDate.setMinutes(currentDate.getMinutes())));
    while (currentDate <= date.dateEnd) {
      // console.log(currentDate, date.dateEnd);
      arrResult.push(
        new Date(currentDate.setMinutes(currentDate.getMinutes() + 15))
      );
    }
    arrResult.pop();
  }
  // console.log(arrResult);
  return arrResult;
}

// makeArrOfBusyPeriods('2020-07-25');

async function checkDate(day, duration) {
  let arrResult = [];
  arrBusyTimeOfDay = await makeArrOfBusyPeriods(day);
  // arrBusyTimeOfDay.unshift(new Date(`${day}T08:45:00`));
  arrBusyTimeOfDay.push(new Date(`${day}T19:15:00`));

  for (let date of arrBusyTimeOfDay) {
    console.log(`${date}\n`);
  }

  // let tryDate = new Date(arr[0]);
  let tryDate = new Date(`${day}T08:45:00`); //начало рабочего дня
  while (tryDate < arrBusyTimeOfDay[arrBusyTimeOfDay.length - 1]) {
    // console.log(123);
    const checkDate = new Date(tryDate);
    checkDate.setHours(tryDate.getHours() + duration);
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
      var options = {
        era: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        timezone: 'UTC',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };

      let str = `с ${tryDate.getHours()}:${tryDate.getMinutes()} до ${finishDate.getHours()}:${finishDate.getMinutes()}`;
      // console.log(str);
      arrResult.push(str);
    }
    tryDate = new Date(tryDate.setMinutes(tryDate.getMinutes() + 15));
  }
  return arrResult;
}

checkDate('2020-07-28', 1).then((data) => console.log(data));

module.exports = checkDate;
