// Flatten a Nested Array
// Write a function that flattens a nested array into a single-level array.

// flattenArray([1, [2, [3, 4], 5]]); // [1, 2, 3, 4, 5]

function flattenArray(arr) {
  let flatArray = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      flatArray.push(...flattenArray(element));
    } else flatArray.push(element);
  }
  return flatArray;
}

console.log(flattenArray([1, [2, [3, [4, 6, [4, 6, 2, 1]], 4], 5]]));
