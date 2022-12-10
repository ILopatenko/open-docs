//https://www.hackerrank.com/challenges/three-month-preparation-kit-breaking-best-and-worst-records
//Breaking the Records

const testArray = [12, 24, 10, 24];

const breakingRecords = arg => {
   let max = arg[0];
   let min = arg[0];
   let maxCounter = 0;
   let minCounter = 0;

   for (let score of arg) {
      if (score > max) {
         max = score;
         maxCounter++;
      }
      if (score < min) {
         min = score;
         minCounter++;
      }
   }
   return [maxCounter, minCounter];
};

const answer = breakingRecords(testArray);
console.log(`Final answer is "${answer}"`);
