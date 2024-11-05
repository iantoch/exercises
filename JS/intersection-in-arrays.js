// Find Intersection of Two Arrays
// Write a function that finds the common elements between two arrays.

// intersection([1, 2, 3], [2, 3, 4]); // [2, 3]

function intersection(firstArray, secondArray) {
  let result = [];

  for (let element1 of firstArray) {
    for (let element2 of secondArray) {
      if (element1 === element2) {
        result.push(element1);
      }
    }
  }
  return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));
