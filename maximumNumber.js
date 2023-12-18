function findMaxNumber(arr) {
  // Check if the array is not empty
  if (arr.length === 0) {
    return "The array is empty.";
  }

  // Assume the first element is the maximum
  let maxNumber = arr[0];

  // Iterate through the array to find the maximum
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
      maxNumber = arr[i];
    }
  }

  return `The maximum number in the array is: ${maxNumber}`;
}

// Example usage:
const numbers = [10, 5, 8, 20, 3];
console.log(findMaxNumber(numbers));
