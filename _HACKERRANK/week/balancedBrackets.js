//https://www.hackerrank.com/challenges/one-month-preparation-kit-balanced-brackets
//Balanced Brackets

const testString =
   '([)())(]{([[}[}[[{]]{{{][(((][{([[(([]]{{({][}(][)){]))]}}][[]}{(}[}{]](([)]{{])((()){[)}}}[[](][{]}())[([)][[[}}})}{)([)}][}[()(}]}][)]}}[[}]{(})([])()}{[{)])]}{{)]{(}}[]}((({[{]([}{[){[{]]}{{{()[){[(}(()[)[{{[{{}]](]]}[}{}{)}]][][({){{{}[]{[[{[)[(}]])]}([{(([[{(}{]([{)[[{{{{)}[{({[})[[[)]}()(}[][(([()()[{[[{](}}{({}){[]({]{)](])())]{)))[)]]]][){{[][}(}(]{}][[({]{)(][)[)])][[){[[))[][)[]())]]((]}}()]([[{}(([)(}(]([{{{((])]()[}}{)({}[{(())({[()())}]{(}){[)}{}][}}}[]){]}[]{[]{))((([))()){)}(}{{){}]{}]){{}}({((([}[)((]{)[[())]({(])[{[))(]][[})}]]][[({]}}]({}{][()[{{[]{{}[(}}{}]]))){}';

const isBalanced = arg => {
   console.clear();
   console.log('===> START HERE <===');
   console.log('Test arument is: ', arg);
   const length = arg.length;
   if (length % 2 !== 0) return 'NO';
   const all = '([{)]}';
   let result;
   let stack = [];
   for (let i = 0; i < arg.length; i++) {
      const current = arg[i];
      const indexOfCurrent = all.indexOf(current);
      console.log('\n New iteration', {
         i,
         current,
         indexOfCurrent,
         stack,
      });
      if (stack.length === 0) {
         console.log('stack is empty');
         if (indexOfCurrent > 2) {
            console.log('this is close');
            return 'NO';
         }
         console.log('this is open. push to stack');

         stack.push(current);
         console.log('new stack is', stack);
      } else {
         console.log('stack is not empty');
         const indexOfprevious = all.indexOf(stack[stack.length - 1]);
         if (indexOfCurrent < 3) {
            console.log('this is open. push to stack');

            stack.push(current);
            console.log('new stack is', stack);
         } else {
            console.log('this is close');
            if (indexOfCurrent - indexOfprevious !== 3) {
               console.log(
                  `this close and previous open arent a pair`
               );
               return 'NO';
            } else {
               console.log(
                  `this close and previous open are a pair - delete from stack the last one`
               );
               stack.pop();
               console.log('new stack is', stack);
            }
         }
      }
   }

   return 'YES';
};

const answer = isBalanced(testString);
console.log(`Final answer is "${answer}"`);

//////SUBMISSION
const isBalanced1 = arg => {
   const length = arg.length;
   if (length % 2 !== 0) return 'NO';
   const all = '([{)]}';
   const last = arg[length - 1];
   if (all.indexOf(last) < 3) {
      return 'NO';
   }
   let result;
   let stack = [];
   for (let i = 0; i < arg.length; i++) {
      const current = arg[i];
      const indexOfCurrent = all.indexOf(current);
      if (stack.length === 0) {
         if (indexOfCurrent > 2) {
            return 'NO';
         }
         stack.push(current);
      } else {
         const indexOfprevious = all.indexOf(stack[stack.length - 1]);
         if (indexOfCurrent < 3) {
            stack.push(current);
         } else {
            if (indexOfCurrent - indexOfprevious !== 3) {
               return 'NO';
            } else {
               stack.pop();
            }
         }
      }
   }

   return 'YES';
};

////SHORT
const isBalanced = arg => {
   const length = arg.length;
   const all = '([{)]}';
   if (length % 2 !== 0 || all.indexOf(arg[length - 1]) < 3)
      return 'NO';
   let stack = [];
   for (let bracket of arg) {
      const indexOfCurrent = all.indexOf(bracket);
      if (stack.length === 0) {
         if (indexOfCurrent > 2) {
            return 'NO';
         }
         stack.push(bracket);
      } else {
         const indexOfprevious = all.indexOf(stack[stack.length - 1]);
         if (indexOfCurrent < 3) {
            stack.push(bracket);
         } else {
            if (indexOfCurrent - indexOfprevious !== 3) {
               return 'NO';
            } else {
               stack.pop();
            }
         }
      }
   }
   return 'YES';
};
