var a = 0;
var b = 0;
var result = a / b;
console.log(`a divide by b is : ${result}`);

console.log(`Type of ==> ${typeof result}`);

var n1 = "10";
console.log(`value of n1 is ${n1} and it's type is: ${typeof n1}`);

var n2 = +n1;
console.log(`value of n2 is ${n2} and it's type is: ${typeof n2}`);

var num1 = "100";
var num2 = 100;
console.log(`Equality check ${num1 == num2}`);
console.log(`Strict Equality check ${num1 === num2}`);

console.log(`Addition is: ${num1 + num2}`);

console.log(`Operation: ${true + 1}`);

var n3 = "100";
var result = Number(n3);
console.log(
  `n3:${n3} type: ${typeof n3}, result: ${result} type: ${typeof result}`
);

var n4 = "My Love";
var result = Number(n4); // +
console.log(
  `n4:${n4} type: ${typeof n4}, result: ${result} type: ${typeof result}`
);

var n5 = 200;
var result = String(n5);
console.log(
  `n5:${n5} type: ${typeof n5}, result: ${result} type: ${typeof result}`
);

var n6 = true;
var result = Number(n6);
console.log(
  `n6 :${n6} type: ${typeof n6}, result: ${result} type: ${typeof result}`
);

var n7 = 40;
var result = Boolean(n7);
console.log(
  `n7 :${n7} type: ${typeof n7}, result: ${result} type: ${typeof result}`
);
