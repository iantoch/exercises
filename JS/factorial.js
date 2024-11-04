// Implement a function factorial(n) that calculates the factorial of the number n recursively.

// factorial(5); // 120

let exampleNumberOne = 5;
let exampleNumberTwo = 12;

function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(exampleNumberOne));

console.log(factorial(exampleNumberTwo));
