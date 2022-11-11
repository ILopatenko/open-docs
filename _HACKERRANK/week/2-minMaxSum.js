//https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
/* Given five positive integers, find the minimum and maximum values that can be calculated 
by summing exactly four of the five integers. Then print the respective minimum and maximum 
values as a single line of two space-separated long integers. */
const testArray = [1, 2, 3, 4, 5];

const miniMaxSum = (arr) => {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let current;
  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current < min) min = current;
    if (current > max) max = current;
    sum += current;
  }
  return `${sum - max} ${sum - min}`;
};

const result = miniMaxSum(testArray);
console.log(result);
