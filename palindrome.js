function isPalindrome(number) {
  // Convert the number to a string
  const numStr = number.toString();

  // Compare characters from the start and end of the string
  for (let i = 0; i < Math.floor(numStr.length / 2); i++) {
    if (numStr[i] !== numStr[numStr.length - 1 - i]) {
      return false; // Not a palindrome
    }
  }

  return true; // Palindrome
}

// Example usage:
const number1 = 121;
const number2 = 12345;

console.log(`${number1} is a palindrome: ${isPalindrome(number1)}`); // Output: true
console.log(`${number2} is a palindrome: ${isPalindrome(number2)}`); // Output: false
