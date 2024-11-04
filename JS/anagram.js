// Anagram Check
// Create a function isAnagram(str1, str2) that checks if two strings are anagrams.

// isAnagram("listen", "silent"); // true

function isAnagram(str1, str2) {
  if (!str1.length || !str2.length) return "Empty string";

  if (str1.length != str2.length) return false;

  let sortedStr1 = str1.toLowerCase().split("").sort().join("");
  let sortedStr2 = str2.toLowerCase().split("").sort().join("");
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram("listen", "silent"));
