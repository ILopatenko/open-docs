//https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem

//Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const testArr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const diagonalDifference = (arr) => {
  let main = 0;
  let another = 0;
  for (let i = 0; i < arr.length; i++) {
    main += arr[i][i];
    another += arr[i][arr.length - 1 - i];
  }
  return Math.abs(main - another);
};
const result = diagonalDifference(testArr);
console.log(result);
