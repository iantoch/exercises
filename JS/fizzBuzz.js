// FizzBuzz
// Write a function that, for numbers from 1 to 100, prints "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(`Value ${i} is FizzBuzz`);
      continue;
    }
    if (i % 3 === 0) {
      console.log(`Value ${i} is Fizz`);
    }
    if (i % 5 === 0) {
      console.log(`Value ${i} is Buzz`);
    }
  }
}

fizzBuzz();
