// Remove Duplicates from Array
// Write a function removeDuplicates(arr) that takes an array and returns a new array without duplicates.

// removeDuplicates([1, 2, 2, 3, 4, 4]); // [1, 2, 3, 4]

function removeDupcilatesSet(numbers) {
  return [...new Set(numbers)];
}

function removeDupcilates(numbers) {
  let cleanArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (cleanArray.indexOf(numbers[i]) === -1) {
      cleanArray.push(numbers[i]);
    }
  }
  return cleanArray;
}

console.log(removeDupcilates([1, 2, 2, 3, 4, 4]));

console.log(removeDupcilatesSet([1, 2, 2, 3, 4, 4]));
