///https://www.hackerrank.com/challenges/one-week-preparation-kit-caesar-cipher-1/problem
//Caesar Cipher

const testSting = 'X%^c-Xyz';
const rotationFactor = 5;

const caesarCipher0 = (string, factor) => {
   console.clear();
   console.log('===> START HERE <===');
   console.log({ string, factor });
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let result = '';
   for (let i = 0; i < string.length; i++) {
      let current = string[i];
      let isCurrentLower = current === current.toLowerCase();
      current = current.toLowerCase();
      let initialIndex = alphabet.indexOf(current);
      if (initialIndex === -1) {
         console.log('it is a symbol');
         result += current;
      } else {
         let newIndex = (initialIndex + factor) % alphabet.length;
         let newLetter = alphabet[newIndex];
         result += isCurrentLower
            ? newLetter
            : newLetter.toUpperCase();
      }
      console.log(`New iteration is ended`, {
         i,
         current,
         isCurrentLower,
         initialIndex,

         result,
      });
   }
   return result;
};

const answer0 = caesarCipher0(testSting, rotationFactor);
//console.log(answer0);

//////SUBMISSION

const caesarCipher = (string, factor) => {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
   let result = '';
   for (let i = 0; i < string.length; i++) {
      let current = string[i];
      let isCurrentLower = current === current.toLowerCase();
      current = current.toLowerCase();
      let initialIndex = alphabet.indexOf(current);
      if (initialIndex === -1) {
         result += current;
      } else {
         let newIndex = (initialIndex + factor) % alphabet.length;
         let newLetter = alphabet[newIndex];
         result += isCurrentLower
            ? newLetter
            : newLetter.toUpperCase();
      }
   }
   return result;
};

const answer = caesarCipher(testSting, rotationFactor);
//console.log(answer);
