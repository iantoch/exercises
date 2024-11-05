// Find Missing Number in an Array
// Given an array of integers from 1 to n with one number missing, find the missing number.

// findMissingNumber([1, 2, 4, 5, 6]); // 3

function findMissingNumber(arr) {
  for (let [index, number] of arr.entries()) {
    if (number !== index + 1) {
      return `Missing number is ${index + 1}`;
    }
  }
}

console.log(findMissingNumber([1, 2, 4, 5, 6]));
