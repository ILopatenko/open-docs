//https://www.hackerrank.com/challenges/angry-professor
//Angry Professor
const testString =
   '-39 -30 -62 30 -6 -86 -19 -70 66 -99 -12 -69 79 14 64 -86 -96 25 68 -67 20 -31 -36 6 97 -3 44 64 43 -6 -56 63 8 14 47 -55 -38 10 40 80 74 0 8 98 -47 -11 -49 59 66 -38 -58 -84 32 74 15 -62 -43 63 -31 7 19 34 96 -30 71 -79 -66 -78 61 75 63 -69 4 -10 -47 -17 39 -38 -97 -1 42 49 95 -11 84 37 -27 58 -91 70 37 56 91 -63 68 8 96 22 -89 -3 -71 25 -99 -34 3 -33 45 -20 88 -77 99 -18 -95 -90 -74 -10 86 -1 -18 -27 -92 13 -54 -26 68 -99 -40 -66 10 73 -2 -35 71 25 -75 15 17 9 -66 -65 90 6 -34 71 81 81 -31 23 8 96 4 -4 -43 -44 -1 96 -26 74 26 -9 -41 42 -63 -27 -17 -55 86 -95 73 91 2 -17 93 45 89 31 -48 4 -43 -83 -7 35 -50 27 -74 -1 62 9 62 80 60 -83 37 -72 -22 -42 -45 -27 -59 22 29 -14 94 -52 29 8 -95 -2 -82 14 -81 86 37 -26 20 34 -76 -93 24 -26 29 -99 -78 -58 -27 18 84 91 -18 -73 69 91 -9 -15 -82 91 81 -89 -44 -24 75 84 -47 -84 -96 -59 17 63 87 -16 25 -86 2 -17 -74 23 -36 -60 -87 52 -53 -1 -66 -1 -96 -27 -77 -79 -40 78 42 -67 -61 -14 23 -83 -82 0 50 -54 71 -71 99 79 -50 58 -11 -72 5 72 5 9 41 -88 -67 41 28 38 -14 -18 79 57 -54 -15 -68 43 -96 -65 -18 32 -48 -23 89 -55 -83 19 2 -53 10 -71 9 -56 -72 -46 27 76 7 -56 65 51 38 62 3 1 89 96 91 59 -78 -54 -87 85 33 94 6 -98 19 -88 -33 -89 66 -24 -90 -73 92 -77 -61 -77 9 -45 -68 -63 -8 -14 -97 -15 -41 -24 -26 -55 28 49 -47 88 1 -75 -28 61 -46 -78 -83 58 37 11 84 34 98 58 14 6 31 37 -24 96 30 -65 -73 -89 62 26 66 -62 97 14 -70 -79 -55 -61 -19 -54 -88 -14 -47 -24 -55 7 -63 -90 46 76 77 -18 24 -16 92 97 -41 94 67 1 -21 48 82 49 43 -96 32 5 -49 -57 43 75 18 -29 40 13 -91 -49 0 5 -27 -67 20 21 -97 63 84 29 -60 93 40 65 -19 8 -69 -18 19 60 -62 -60 11 52 62 -3 39 26 6 -63 -58 1 -89 -27 9 47 21 32 -84 33 18 73 -88 -41 91 -75 -81 80 0 -79 -47 33';
const testArray = testString.split(' ');
const testTarget = 248;

const angryProfessor = (target, array) => {
   let counter = 0;
   for (let arrT of array) {
      if (arrT <= 0) counter++;
      if (counter === target) return 'NO';
   }
   return 'YES';
};

const answer = angryProfessor(testArray, testTarget);
console.log(`Final answer is "${answer}"`);
