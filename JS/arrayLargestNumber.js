// Find the Largest Number in an Array
// Write a function findLargest(arr) that takes an array of numbers and returns the largest number.
// findLargest([3, 5, 7, 2, 8]); // 8

let numbers = [3, 5, 7, 2, 8];
let emptyArray = [];

function largestNumberInArray(numbers) {
  if (!numbers.length) {
    return "Array is empty";
  }

  return numbers.reduce(
    (max, number) => (number > max ? number : max),
    numbers[0]
  );
}

console.log(largestNumberInArray(numbers));
console.log(largestNumberInArray(emptyArray));
