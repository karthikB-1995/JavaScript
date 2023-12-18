function reverseNumber(number) {
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversedNumber = parseFloat(
    number.toString().split("").reverse().join("")
  );

  return reversedNumber;
}

// Example usage:
const originalNumber = 12345;
const reversed = reverseNumber(originalNumber);

console.log(`Original Number: ${originalNumber}`);
console.log(`Reversed Number: ${reversed}`);
