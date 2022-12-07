//https://www.hackerrank.com/challenges/one-month-preparation-kit-drawing-book
//Drawing Book

const testNpages = 5;
const testPtarget = 5;

const pageCount = (n, p) => {
   const makeOdd = x => (x % 2 === 0 ? x + 1 : x);
   const pOdd = makeOdd(p);
   const left = (makeOdd(n) - pOdd) / 2;
   const right = (pOdd - 1) / 2;
   return left <= right ? left : right;
};
const result = pageCount(testNpages, testPtarget);
console.log(result);
