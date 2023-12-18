function isPrime(number) {
  // Check if the number is less than 2 (not a prime number)
  if (number < 2) {
    return false;
  }

  // Check for divisibility from 2 to the square root of the number
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // Found a divisor, not a prime number
    }
  }

  return true; // No divisors found, it's a prime number
}

// Example usage:
const num1 = 7;
const num2 = 12;

console.log(`${num1} is prime: ${isPrime(num1)}`); // Output: true
console.log(`${num2} is prime: ${isPrime(num2)}`); // Output: false
