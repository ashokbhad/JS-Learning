// numeric string used with + gives string type
console.log("%c----- Implicit Conversions -----", "color: purple");
console.log("%c--- Implicit conversion to String -----", "color: pink");
let result;

result = "3" + 2;
console.log(result); // "32"

result = "3" + true;
console.log(result); // "3true"

result = "3" + undefined;
console.log(result); // "3undefined"

result = "3" + null;
console.log(result); // "3null"

console.log("%c--- Implicit boolean conversion to Number -----", "color: pink");

// if boolean is used, true is 1, false is 0
let num;

num = "4" - true;
console.log(num); // 3

num = 4 + true;
console.log(num); // 5

num = 4 + false;
console.log(num); // 4

console.log("%c--- implicit string conversion to Number -----", "color: pink");
// numeric string used with -,/,* results number type
let results;

results = "4" - "2";
console.log(results); // 2

results = "4" - 2;
console.log(results); // 2

results = "4" * 2;
console.log(results); // 8

results = "4" / 2;
console.log(results); // 2

console.log(
  "%c--- Undefined used with number,boolean or nill given NaN -----",
  "color: green"
);
// Arithmetic operation of undefined with number, boolean of null gives NaN
let value;

value = 4 + undefined;
console.log(value); // NaN

value = 4 - undefined;
console.log(value); // NaN

value = true + undefined;
console.log(value); // NaN

value = null + undefined;
console.log(value); // NaN

console.log("%c----- Explicit conversions -----", "color: purple");
console.log("%c=== string to Number ===", "color: green");

result = Number("324");
console.log(result); // 324

result = Number("324-1");
console.log(result); // 32.4

console.log("%c=== Boolean to Number ===", "color: green");

results = Number(true);
console.log(results); // 1

results = Number(false);
console.log(results); // 0

console.log("%c--- Invalid string to number return NaN ---", "color: pink");
console.log(
  "%c === If a string is an invalid number, the result will be NaN ===",
  "color: green"
);

let values;
values = Number("hello");
console.log(values); // NaN

values = Number(undefined);
console.log(values); // NaN

values = Number(NaN);
console.log(values); // NaN

console.log(
  "%cExplicit conversion: string to number using + operator",
  "color: green"
);

var numberInString = "200";
console.log(typeof numberInString);

var myNumber = +numberInString;
console.log(typeof myNumber);

var myNumber = "400";
console.log(typeof myNumber); // Number

var afterConversion = myNumber.toString();
console.log(typeof afterConversion); // string
