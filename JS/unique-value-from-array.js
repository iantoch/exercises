// Get Unique Values from an Array of Objects
// Write a function that extracts unique values from a specific key in an array of objects.

// uniqueValues([{id: 1}, {id: 2}, {id: 1}]); //

function uniqueValue(arr, key) {
  let uniqueArr = [];

  for (let item of arr) {
    if (!uniqueArr.some((el) => el === item[key])) {
      uniqueArr.push(item[key]);
    }
  }
  return uniqueArr;
}

console.log(uniqueValue([{ id: 1 }, { id: 2 }, { id: 1 }], "id"));
