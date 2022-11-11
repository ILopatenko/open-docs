//https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem
/* Given an array of integers, calculate the ratios of its elements that are positive, 
negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal. */

const testArr = [-4, 3, -9, 0, 4, 1];

//This is a solution with 2 inner functions (helpers)
const plusMinus = (arr) => {
  const length = arr.length;

  const counter = (array) => {
    const counterResult = [0, 0, 0];
    for (let number of array) {
      if (number > 0) counterResult[0]++;
      if (number < 0) counterResult[1]++;
    }
    counterResult[2] = length - counterResult[0] - counterResult[1];
    return counterResult;
  };

  const analyzer = (counterArray) => {
    for (let result of counterArray) {
      console.log((result / length).toFixed(6));
    }
  };

  analyzer(counter(arr));
};

plusMinus(testArr);
