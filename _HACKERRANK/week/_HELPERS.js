const reverseNumber = number => {
   if (number < 10) return number;
   let reversed = null;
   while (number > 0) {
      let currentDigit = number % 10;
      if (reversed) {
         reversed *= 10;
         reversed += currentDigit;
      } else {
         if (currentDigit !== 0) {
            reversed = currentDigit;
         }
      }
      number -= currentDigit;
      number /= 10;
   }
   return reversed;
};

/* const result = reverseNumber(1020304000);
console.log(result); */

//Get access to each digit (reverse order - right to left)
const separateEachDigit = number => {
   while (number > 0) {
      let currentDigit = number % 10;
      console.log(currentDigit);
      number -= currentDigit;
      number /= 10;
   }
};

separateEachDigit(124568);
