console.log("%c============ Step-1 =============", "color: pink");
function greaterNumber(value1, value2) {
  var result = value1 > value2 ? "YES" : "NO";
  console.log(`${value1} is greater than : ${value2}, and it's: ${result}`);
}
greaterNumber(10, -10);
greaterNumber(700, 999);

console.log("%c============ Step-2 =============", "color: pink");
function isEvenOrOddNum(number) {
  var result = number % 2 == 0 ? "EVEN" : "ODD";
  console.log(`Given number is :  ${number}, and it's: ${result}`);
}
isEvenOrOddNum(39);
isEvenOrOddNum(66);
isEvenOrOddNum(0);
isEvenOrOddNum(201);

console.log("%c============= Step-3 ============", "color: pink");
function wordLength(value) {
  var val = value.length;
  var result = val % 2 == 0 ? "EVEN" : "ODD";
  console.log(`Given word is : ${value} : ${val}, and it's : ${result}`);
}
wordLength("JavaScript");
wordLength("Developer");
wordLength("Google");
