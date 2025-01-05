const user = {
  name: "Alice",
  greet: function () {
    console.log(this.name + " " + "jgjjhg");
  },
};

const greet = user.greet; //here it looses context
console.log(greet);
greet();

const person = {
  firstName: "abc",
  lastName: "def",
  fullName(a, b) {
    return this.firstName + " " + this.lastName + " " + a + " " + b;
  },
};

const newPerson = {
  firstName: "mno",
  lastName: "pqr",
};

console.log(person.fullName.call(newPerson, "annd", "fjjf"));
console.log(person.fullName.apply(newPerson, ["annd", "fjjf"]));
const newBindImp = person.fullName.bind(newPerson, "annd", "fjjf");
console.log(newBindImp());

//polyfill in bind
person.fullName.myBind(newPerson, "hhr", "jjfjfj");
//return after adding new this context

Function.prototype.myBind = (...args) => {
  const firstElement = args.shift(); // Removes and returns the first element
  console.log(firstElement);
  let obj = this;
  return function () {
    obj.call(args[0], ...args);
  };
};
