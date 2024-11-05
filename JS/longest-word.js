// Find the Longest Word in a Sentence
// Write a function that returns the longest word in a given sentence.

// findLongestWord("The quick brown fox jumped over the lazy dog"); // "jumped"

function findLongestWord(text) {
  return text
    .split(" ")
    .reduce(
      (longestWord, word) =>
        longestWord.length < word.length ? (longestWord = word) : longestWord,
      ""
    );
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
