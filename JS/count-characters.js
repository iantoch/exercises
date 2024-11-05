// Count Character Occurrences in a String
// Write a function that counts the occurrences of each character in a given string.

// countCharacters("hello"); // { h: 1, e: 1, l: 2, o: 1 }

function countCharacters(text) {
  const formatedText = text.toLowerCase().split("");

  return formatedText.reduce((counter, letter) => {
    counter.hasOwnProperty(letter) ? counter[letter]++ : (counter[letter] = 1);
    return counter;
  }, {});
}

console.log(countCharacters("hello"));
