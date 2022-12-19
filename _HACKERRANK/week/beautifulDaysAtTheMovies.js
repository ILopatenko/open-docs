//LINK
//Beautiful Days at the Movies

const beautifulDays = (s, f, d) => {
   let counter = 0;
   const reverseNumber = number => {
      if (number < 10) return number;
      let reversed = null;
      while (number > 0) {
         let currentDigit = number % 10;
         if (reversed) {
            reversed *= 10;
            reversed += currentDigit;
         } else if (currentDigit !== 0) reversed = currentDigit;
         number -= currentDigit;
         number /= 10;
      }
      return reversed;
   };
   const checker = (number, divider) => Math.abs(number - reverseNumber(number)) % divider === 0;
   for (let i = s; i <= f; i++) {
      if (checker(i, d)) counter++;
   }
   return counter;
};

/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////
/////////////////////////////

const something = (s, f, d) => {
   let c = 0;
   const f1 = y => {
      if (y < 10) return y;
      let t = null;
      while (y > 0) {
         let d = y % 10;
         if (t) {
            t *= 10;
            t += d;
         } else if (d !== 0) t = d;
         y -= d;
         y /= 10;
      }
      return t;
   };
   const f2 = (a, b) => Math.abs(a - f1(a)) % b === 0;
   for (let i = s; i <= f; i++) if (f2(i, d)) c++;
   return c;
};
