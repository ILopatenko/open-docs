//https://www.hackerrank.com/challenges/append-and-delete
//Append and Delete

const startStr = 'qwerasdf';
const finishStr = 'qwerbsdf';
const steps = 6;

const appendAndDelete = (str1, str2, steps) => {
   console.clear();
   const correctLength = str2.length;
   const wrongLength = str1.length;
   let fix = 888;
   if (Math.abs(correctLength - wrongLength) > steps) return 'No';
   const checkFix = count => {
      if ((steps >= count && (steps - count) % 2 === 0) || steps > correctLength + wrongLength) {
         return 'Yes';
      } else return 'No';
   };

   for (let i = 0; i < correctLength; i++) {
      let correctLetter = str2[i];
      let wrongLetter = str1[i];
      console.log('\nNew iteration', { i, correctLetter, wrongLetter });

      if (correctLetter !== wrongLetter) {
         console.log('problem. Checking what is wrong');

         if (!wrongLetter) {
            console.log('wrong word is shorter');
            fix = correctLength - wrongLength;
            console.log({ fix });
            return checkFix(fix);
         } else {
            console.log('letters are different');
            fix = wrongLength - i + correctLength - i;
            console.log({ fix });
            return checkFix(fix);
         }
      }
   }
   console.log('in this point or words are equal or correct is shorter. Checking');
   if (str1[correctLength]) {
      console.log('correct word is shorter');
      fix = wrongLength - correctLength;
      console.log({ fix });
      return checkFix(fix);
   } else {
      console.log('words are the same');
      fix = 0;
      console.log({ fix });
      return checkFix(fix);
   }
};

const answer = appendAndDelete(startStr, finishStr, steps);
console.log(`Final answer is "${answer}"`);

/////
const appendAndDelete = (str1, str2, steps) => {
   const correctLength = str2.length;
   const wrongLength = str1.length;
   if (Math.abs(correctLength - wrongLength) > steps) return 'No';
   const checkFix = count => {
      if ((steps >= count && (steps - count) % 2 === 0) || steps > correctLength + wrongLength) {
         return 'Yes';
      } else return 'No';
   };
   for (let i = 0; i < correctLength; i++) {
      let correctLetter = str2[i];
      let wrongLetter = str1[i];

      if (correctLetter !== wrongLetter) {
         return !wrongLetter
            ? checkFix(correctLength - wrongLength)
            : checkFix(wrongLength - i + correctLength - i);
      }
   }
   return str1[correctLength] ? checkFix(wrongLength - correctLength) : checkFix(0);
};
