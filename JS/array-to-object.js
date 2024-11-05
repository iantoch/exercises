// Convert Array to Object
// Write a function that converts an array of key-value pairs into an object.

// arrayToObject([['a', 1], ['b', 2]]); // { a: 1, b: 2 }

function simpleArrayToObject(arr) {
  return Object.fromEntries(arr);
}

function harderArrayToObject(arr) {
  return arr.reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
}

console.log(
  simpleArrayToObject([
    ["a", 1],
    ["b", 2],
  ])
);

console.log(
  harderArrayToObject([
    ["a", 1],
    ["b", 2],
  ])
);
