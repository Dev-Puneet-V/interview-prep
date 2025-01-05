const str = "123";
const num = Number(str);
const newStr = String(num);
console.log(typeof newStr);
console.log(Boolean(0));

//array manipulation
//push, pop, shift, unshift, slice, splice
const arr = [1, 2, 3, 4, 5, 6];
arr.push("ash");
console.log(arr);
console.log(arr.pop());
console.log(arr);
arr.reverse();
console.log(arr);
arr.unshift(8, 9);
console.log(arr);
arr.shift();
console.log(arr);
const arr1 = [9, 10];
console.log(arr.concat(arr1));
console.log(arr.slice(1, 5));
console.log(arr.splice(4));
console.log(arr);
console.log(arr.indexOf(6));
console.log(arr.lastIndexOf(5));
console.log(arr.join());
console.log(arr.sort());
arr.forEach((curr) => {
  console.log(curr);
});

console.log(
  arr.reduce((curr, acc) => {
    return acc + curr;
  }, 0)
);

console.log(arr.every((curr) => curr > 1));
console.log(arr.some((curr) => curr > 8));
const arr2 = [1, 2, [78, 29], [9, 9, 2, [6, 77]]];
console.log(arr2.flat());
console.log(arr2.flat(Infinity));

const sentences = [
  "JavaScript is awesome",
  "I love coding",
  "Arrays are powerful",
];

// Using flatMap to split sentences into words
const words = sentences.flatMap((sentence) => sentence.split(" "));
console.log(words);
// const newArr = Array.fill(8)

const products = [
  { name: "Product 1", tags: ["electronics", "sale"] },
  { name: "Product 2", tags: ["clothing", "sale"] },
  { name: "Product 3", tags: ["electronics", "new"] },
];

const tags = products.flatMap((tag) => tag.tags);
console.log(tags);
