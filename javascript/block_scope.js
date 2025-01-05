// {
//   var a = 10; // 10
//   let b = 20; // in block space
//   const c = 30; // in block space
// }

// console.log(a);
// console.log(b);
// console.log(c);

// this code will give errror because a is already declarwd and when we do var a, in global it tries create which say redeclaration not allowed
// const a = 20;
// {
//   var a = 100;
//   {
//     const a = 200;
//     console.log(a);
//   }
// }

var a = 100;
{
  const a = 20;
  {
    const a = 200;
    console.log(a);
  }
}
