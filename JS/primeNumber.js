// Is Prime Number
// Create a function isPrime(num) that checks if a given number is prime.

// isPrime(7); // true
// isPrime(10); // false

function checkIfNumberPrime(number) {
  if (number <= 1) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }

  return true;
}

console.log(checkIfNumberPrime(7));
console.log(checkIfNumberPrime(10));
