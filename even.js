let arr = [1, 2, 3, 4, 5, 6];
console.log("even numbers");
for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 === 0) {
    console.log(arr[index]);
  }
}

console.log("odd numbers");

for (let index = 0; index < arr.length; index++) {
  if (arr[index] % 2 !== 0) {
    console.log(arr[index]);
  }
}
