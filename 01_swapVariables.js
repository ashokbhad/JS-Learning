console.log("WAP to swap variable values using third variable");
var n1 = 100; // 200
var n2 = 200; // 100
console.log("======== Before Swap ==========");
console.log("n1:", n1, " n2:", n2);

console.log("======== After Swap ==========");
var temp = n1;
n1 = n2;
n2 = temp;
console.log("n1:", n1, " n2:", n2);


console.log("==== Variable Re-declaration ======");
var pinCode = "411057";
console.log(pinCode);
pinCode  = "112233"; // Variable update

var pinCode = "445533"; // Variable re-declaration
