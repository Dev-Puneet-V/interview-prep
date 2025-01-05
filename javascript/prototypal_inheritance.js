// let object = {
//   name: "a",
//   city: "d",
//   getIntro: function () {
//     console.log(this.name + " from " + this.city);
//   },
// };

// let object2 = {
//   name: "adi",
// };

// //prototypal inheritance
// object2.__proto__ = object;

// console.log(object2.getIntro());

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const john = new Person("John");
const john1 = new Person("john1");
john.sayHello();
john1.__proto__.value = 5;

console.log(
  john.__proto__ === Person.prototype,
  Person.prototype === john1.__proto__,
  john1.__proto__,
  Person.prototype,
  john.__proto__
);
