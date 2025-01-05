//function statement aka function declaration
function a() {
  console.log("a called");
}
a();
//function expression
var b = function () {
  console.log("b called");
};
b();

//anonymous function - doesnt have their own identity
// function() {

// }

// used as below
// setTimeout(function () {
//   console.log("Executed after 2 seconds");
// }, 2000);

// first class functions
// passing a function as argument and returning it from a function, this ability is called first class function
