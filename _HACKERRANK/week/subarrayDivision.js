//https://www.hackerrank.com/challenges/the-birthday-bar/problem
//Subarray Division

const testArray = [2, 2, 1, 3, 2];
const sum = 4;
const length = 2;

const birthday = (array, sum, length) => {
   console.clear();
   console.log('===> START HERE <===');
   console.log('Test aruments are: ', { array, sum, length });
   let currentSum = 0;
   let currentLength = 0;
   let result = 0;
   for (let i = 0; i < array.length; i++) {
      const current = array[i];
      console.log('\n New iteration', { i, current, currentLength, length, currentSum, sum });
      currentLength++;
      currentSum += current;
      console.log('add currentValue to sum and increase current length', {
         currentLength,
         currentSum,
      });
      if (currentLength === length) {
         console.log(
            'current length is equal to given - need to check if current sum is equal to given'
         );
         if (currentSum === sum) {
            console.log('current sum is equal to given - increase result');
            result++;
            console.log({ result });
         }
         console.log(
            'default action when current length is equal to given - decrease current sum by 1st value and decrease current length by 1'
         );
         currentSum -= array[i - currentLength + 1];
         currentLength--;
         console.log({ currentLength, currentSum });
      }
   }

   return result;
};

const answer = birthday(testArray, sum, length);
console.log(`Final answer is "${answer}"`);

//////SUBMISSION
const birthday = (array, sum, length) => {
   let currentSum = 0;
   let currentLength = 0;
   let result = 0;
   for (let i = 0; i < array.length; i++) {
      const current = array[i];
      currentLength++;
      currentSum += current;
      if (currentLength === length) {
         if (currentSum === sum) result++;
         currentSum -= array[i - currentLength + 1];
         currentLength--;
      }
   }
   return result;
};
