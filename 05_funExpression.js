var n1 = 5;
var result = n1++ + ++n1 + n1++;

console.log(result);

var a = 2;
var b =++a + ++a + a++ - --a;
console.log(a,b);


// Ternary Operator
var a = 7;

var result = a%2 ==0 ? "EVEN":"ODD";
console.log(result);
