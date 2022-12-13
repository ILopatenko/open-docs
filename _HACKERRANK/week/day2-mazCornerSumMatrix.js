//https://www.hackerrank.com/challenges/flipping-the-matrix/problem
//https://www.youtube.com/watch?v=4rin1enhuQQ&t=65s

const generateSquareMatrix = x => {
   const getNumber = (min = 10, max = 99) => Math.floor(Math.random() * (max + 1 - min) + min);

   const genArr = x => {
      const arr = [];
      for (let i = 0; i < x; i++) {
         arr.push(getNumber());
      }
      return arr;
   };

   const genSquareMatrix = x => {
      const matrix = [];
      for (let i = 0; i < x; i++) {
         matrix.push(genArr(x));
      }
      return matrix;
   };
   return genSquareMatrix(x);
};

const flippingMatrix = matrix => {
   const length = matrix.length;
   const limit = matrix.length / 2;
   let maxSum = 0;
   for (let i = 0; i < limit; i++) {
      for (let j = 0; j < limit; j++) {
         const checkIfBigger = (x, max) => (x > max ? x : max);
         let first = matrix[i][j];
         let max = first;
         let second = matrix[i][length - 1 - j];
         max = checkIfBigger(second, max);
         let third = matrix[length - 1 - i][j];
         max = checkIfBigger(third, max);
         let fourth = matrix[length - 1 - i][length - 1 - j];
         max = checkIfBigger(fourth, max);
         maxSum += max;
      }
   }
   return maxSum;
};

const testMatrix = generateSquareMatrix(6);
console.log(testMatrix);
const result = flippingMatrix(testMatrix);
console.log(result);

//Refactored
const flippingMatrix = matrix => {
   const length = matrix.length;
   const halfLength = length / 2;
   let maxSum = 0;
   const returnBigger = (a, b) => (a >= b ? a : b);
   for (let i = 0; i < halfLength; i++) {
      for (let j = 0; j < halfLength; j++) {
         let first = matrix[i][j];
         let second = matrix[i][length - j - 1];
         let topMax = returnBigger(first, second);
         let third = matrix[length - i - 1][j];
         let fourth = matrix[length - 1 - i][length - j - 1];
         let bottomMax = returnBigger(third, fourth);
         let max = returnBigger(topMax, bottomMax);
         maxSum += max;
      }
   }
   return maxSum;
};
