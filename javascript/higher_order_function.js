const radius = [3, 1, 2, 4];

const calculateArea = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * radius[i]);
  }
  return output;
};

console.log(calculateArea(radius));

const calculateCircumference = function (radius) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(Math.PI * radius[i] * 2);
  }
  return output;
};

console.log(calculateCircumference(radius));

//upper functions are repeating

//Array.prototype.calculate
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
};

const area = (radius) => {
  return Math.PI * radius * radius;
};
//radius.calculate(radius, area) => similar to radius.map()
console.log(calculate(radius, area));
