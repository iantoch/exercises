// Reverse a String
// Write a function reverseString(str) that takes a string and returns it in reverse order.

// Expected
// reverseString("hello"); // "olleh"

let stringExample = "hello";

function reverseString(string) {
  return string.split("").reverse().join("");
}

console.log(reverseString(stringExample));
