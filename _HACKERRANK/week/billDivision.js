//https://www.hackerrank.com/challenges/bon-appetit
//Bill Division

const bonAppetit = (b, k, c) => {
   let t = 0;
   for (let price of b) total += price;
   console.log((t - b[k]) / 2 === c ? 'Bon Appetit' : c - (t - b[k]) / 2);
};
