//https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem

/* 
Given an array of integers, where all elements but one occur twice, find the unique element.
Example arr = [1,1,2,2,3,3,4,4,5]
The unique element is 5.
 */

const testArr = [1, 1, 2, 2, 3, 3, 4, 4, 5];
const lonelyinteger = (a) => {
  const hash = {};
  for (let number of a) {
    if (!hash[number]) {
      hash[number] = 1;
    } else {
      hash[number]++;
    }
  }
  for (let element in hash) {
    if (hash[element] === 1) return element;
  }
};

const result = lonelyinteger(testArr);
console.log(result);
