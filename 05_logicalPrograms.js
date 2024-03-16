// WA FE with one argument for values .. "JavaScript", "I am hero"
// Inside the FE check whether given word is even or odd length

var result = function (word) {
  var result = word.length % 2 == 0 ? "EVEN " : "ODD";
  console.log(`Given word ${word} is with ${result} length`);
};
result("JavaScript");
result("I am hero");

console.log("=======================");
// FE to check whether number is multiple of 3 or not
var multiple = function(num){
    var result = num%3==0 ? "Yes" : "No";
    console.log(`Given number ${num} is multiple of 3 ==> ${result}`);
}
multiple(9);
multiple(11);
