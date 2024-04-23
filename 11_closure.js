var global = 300;
function outer() {
  let num2 = 200;
  let inner = function () {
    let num1 = 100;
    console.log(`Inner Function Expression`);
    console.log(`num1: ${num1}`);
    console.log(`num2: ${num2}`);
    console.log(`global: ${global}`);
  };
  return inner;
}
outer()();
// let result = outer();
// result();
