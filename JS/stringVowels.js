// Count Vowels in a String
// Implement a function countVowels(str) that counts the number of vowels (a, e, i, o, u) in a string.

// countVowels("hello");

function countVowels(string) {
  const vowels = ["a", "e", "i", "o", "u"];

  return string
    .split("")
    .reduce((acc, letter) => (vowels.includes(letter) ? acc + 1 : acc), 0);
}

console.log(countVowels("Hello, world!"));
