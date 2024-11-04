// Fibonacci Sequence
// Write a function fibonacci(n) that returns an array of the first n Fibonacci numbers.

// fibonacci(5); // [0, 1, 1, 2, 3]

function fibonacci(n) {
  let fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib.slice(0, n);
}

console.log(fibonacci(6));
console.log(fibonacci(0));
console.log(fibonacci(1));
