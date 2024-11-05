// Check if a String is a Palindrome
// Write a function that checks if a given string is a palindrome.

// isPalindrome("racecar"); // true

function isPalindrome(string) {
  return (
    string.toLowerCase() === string.toLowerCase().split("").reverse().join("")
  );
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("home"));
