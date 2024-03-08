var sweety = "Sweety";
var cutie = "Cutie";


console.log("=========== Before swap ==========");
console.log("sweety  :", sweety);
console.log("cutie   :", cutie);

var temp = sweety;
sweety = cutie;
cutie = temp;


console.log("=========== After swap ===========");
console.log("sweety  :", sweety);
console.log("cutie   :", cutie);
console.log();

// Swap 3 numbers
var num1 = 100;
var num2 = 200;
var num3 = 300;
var temp;


console.log("=========== Before swap ===========");
console.log("num1  :", num1);
console.log("num2  :", num2);
console.log("num3  :", num3);

temp = num1;
num1 = num2;
num2 = num3;
num3 = temp;


console.log("=========== After swap ============");
console.log("num1  :", num1);
console.log("num2  :", num2);
console.log("num3  :", num3);
