// Sort an Array of Numbers
// Write a function that sorts an array of numbers in ascending order (without using .sort()).
// sortArray([3, 1, 4, 1, 5]); // [1, 1, 3, 4, 5]

function sortArray(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(sortArray([3, 1, 4, 1, 5]));
