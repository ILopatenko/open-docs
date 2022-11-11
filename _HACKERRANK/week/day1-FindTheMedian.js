//The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median
const testArray = [5, 3, 2, 1, 4];
const findMedian = (arr) => arr.sort((a, b) => a - b)[(arr.length - 1) / 2];
console.log(findMedian(testArray));
