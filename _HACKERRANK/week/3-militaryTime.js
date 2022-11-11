//https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem
/* Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock. */

const testString = '04:05:45AM';

const timeConversion = (s) => {
  console.clear();
  let hours = s[0] + s[1];
  const rest = s.slice(2, 8);
  const isAM = s[8] === 'A' ? true : false;
  if (+hours === 12) {
    if (isAM) {
      hours = '00';
    }
  } else {
    if (!isAM) {
      hours = +hours + 12;
    }
  }
  return hours + rest;
};

const result = timeConversion(testString);
console.log(result);
