// Sum of Array Elements
// Write a function that calculates the sum of all elements in a given array.

// sumArray([1, 2, 3, 4]); // 10

function sumArray(numbers) {
  return numbers.reduce((sum, number) => (sum += number), 0);
}

console.log(sumArray([1, 2, 3, 4]));
