// Remove Specific Elements from Array
// Write a function that removes all occurrences of a specified element from an array.
// removeElement([1, 2, 3, 2, 4], 2); // [1, 3, 4]

function removeElement(arr, removeValue) {
  return arr.filter((element) => element !== removeValue);
}

console.log(removeElement([1, 2, 3, 2, 4], 2));
