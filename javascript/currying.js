// let multiply = function (x, y) {
//   console.log(x * y);
// };

let multiply = function (x) {
  return function (y) {
    console.log(x * y);
  };
};

// let multiplyByTwo = multiply.bind(this, 2);
// let multiplyByThree = multiply.bind(this, 3);
// multiplyByTwo(3);
// multiplyByThree(5);

multiply(2)(3);
multiply(3)(5);
