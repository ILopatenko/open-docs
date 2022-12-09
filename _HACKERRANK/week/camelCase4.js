//https://www.hackerrank.com/challenges/three-month-preparation-kit-camel-case
//Camel Case 4

const testString = 'S;M;sweatTea()';

const arrowFunction = arg => {
   console.clear();
   console.log('===> START HERE <===');
   console.log('Test arument is: ', arg);
   const isSplit = arg[0] === 'S';
   const isVariable = arg[2] === 'V';
   const isMethod = arg[2] === 'M';
   const isClass = arg[2] === 'M';
   console.log(isSplit);
   let result = '';
   for (let i = 4; i < arg.length; i++) {
      let current = arg[i];
      console.log({ i, current });
      if (result.length === 0) {
         if (isSplit) {
            result += arg[i].toLowerCase();
            console.log({ result });
         } else if (isVariable || isMethod) {
            result += arg[i].toLowerCase();
            console.log({ result });
         } else {
            result += arg[i].toUpperCase();
            console.log({ result });
         }
      } else if (current === ' ') {
         if (isSplit) {
            result += ' ';
            console.log({ result });
         } else {
            result += arg[i + 1].toUpperCase();
            console.log({ result });
            i++;
            continue;
         }
      } else {
         if (isSplit && current === current.toUpperCase()) {
            if (current === '(' || current === ')') {
               continue;
            }

            result += ' ' + current.toLowerCase();
            console.log({ result });
            continue;
         }
         result += current;
         console.log({ result });
      }
   }
   if (
      isMethod &&
      !isSplit &&
      result[result.length - 2] !== '(' &&
      result[result.length - 1] !== ')'
   ) {
      result += '()';
   }
   return result;
};

//const answer = arrowFunction(testString);
//console.log(`Final answer is "${answer}"`);

const processData = arg => {
   const arrowFunction = arg => {
      const isSplit = arg[0] === 'S';
      const isVariable = arg[2] === 'V';
      const isMethod = arg[2] === 'M';
      let result = '';
      for (let i = 4; i < arg.length; i++) {
         let current = arg[i];
         if (result.length === 0) {
            if (isSplit) {
               result += arg[i].toLowerCase();
            } else if (isVariable || isMethod) {
               result += arg[i].toLowerCase();
            } else {
               result += arg[i].toUpperCase();
            }
         } else if (current === ' ') {
            if (isSplit) {
               result += ' ';
            } else {
               result += arg[i + 1].toUpperCase();
               i++;
               continue;
            }
         } else {
            if (isSplit && current === current.toUpperCase()) {
               if (current === '(' || current === ')') {
                  continue;
               }
               result += ' ' + current.toLowerCase();
               continue;
            }
            result += current;
         }
      }
      if (
         isMethod &&
         !isSplit &&
         result[result.length - 2] !== '(' &&
         result[result.length - 1] !== ')'
      ) {
         result += '()';
      }
      console.log(result);
   };
   const array = arg.split('\r\n');
   array.forEach(e => arrowFunction(e));
};
