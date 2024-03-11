console.log(
  "%c------------- Assignment No_01 -----------------",
  "color: purple"
);
console.log(
  "%c===== Functions with No argument No return =====",
  "color: pink"
);
console.log("%c------------- Step 1 ------------", "color: green");
function bankDetails() {
  var bankName = "SBI bank";
  var branchName = "Pune";
  console.log("Bank Name is          :", bankName);
  console.log("Branch Name is        :", branchName);
}
var result = bankDetails();

console.log("%c------------- Step 2 ------------", "color: green");
function details() {
  var fullName = "Ashok Bhad";
  var bankAccountNo = "435676543";
  console.log("Full Name is          :", fullName);
  console.log("Bank Account No       :", bankAccountNo);
}
var result = details();

console.log("%c======== Function with Arguments =========", "color: pink");
function personalDetails(firstName, lastName, collegeName) {
  console.log("My First Name is      :", firstName);
  console.log("My Last Name is       :", lastName);
  console.log("My College Name is    :", collegeName);
}
personalDetails("Ashok", "Bhad", "GCOEC CHANDRAPUR");

console.log(
  "%c===== Function with argument and no return ======",
  "color: pink"
);
function swapValues(num1, num2) {
  console.log("Before the swap values is :", "num1=", num1, "num2=", num2);
  var temp = num1;
  num1 = num2;
  num2 = temp;
  console.log("After the swap values is  :", "num1=", num1, "num2=", num2);
}
console.log("%c---------- Example_1 ------------", "color: green");
swapValues("Virat", "ABdeVilliers");
console.log("%c---------- Example_2 ------------", "color: green");
swapValues(1000, 2000);
console.log("%c---------- Example_3 ------------", "color: green");
swapValues("String", 666);

console.log("%c===== Function with Three Arguments ======", "color: pink");
function addThreeValues(num1, num2, num3) {
  var result = num1 + num2 + num3;
  console.log("num1=", num1, "num2=", num2, "num3=", num3);
  console.log("Addition of three values is:", result);
}
console.log("%c---------- Example_1 ------------", "color: green");
addThreeValues(10.23, 600, 40);
console.log("%c---------- Example_2 ------------", "color: green");
addThreeValues("Hello", " Good", " Morning");
console.log("%c---------- Example_3 ------------", "color: green");
addThreeValues(34, 45, 67.78);
