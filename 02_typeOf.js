console.log("%c<=== Step 1 ===>", "color: pink");
var bankName;
console.log("%c<=== Before Initialization ===>", "color: yellow");
console.log("%cBank name : " + typeof bankName, "color: red");
console.log("%cData Type : " + typeof bankName, "color: red");

bankName = "SBI Bank";
console.log("%c<=== After Initialization ===>", "color: yellow");
console.log("%cBank name : " + bankName, "color: blue");
console.log("%cData Type : " + typeof bankName, "color: blue");

console.log("%c<=== Step 2 ===>", "color: pink");
var marks = "90%";
console.log("%cMarks     : " + marks, "color: blue");
console.log("%cData Type : " + typeof marks, "color: blue");

console.log("%c<=== Step 3 ===>", "color: pink");
console.log("%c<=== Before Initialization ===>", "color: yellow");
var isWorking;
console.log("%cisWorking : " + isWorking, "color: red");
console.log("%cData Type : " + typeof isWorking, "color: red");

console.log("%c<=== After Initialization ===>", "color: yellow");
isWorking = true;
console.log("%cisWorking : " + isWorking, "color: blue");
console.log("%cData Type : " + typeof isWorking, "color: blue");

console.log("%c<=== Step 4 ===>", "color: pink");
console.log("%c<=== Before Update ===>", "color: yellow");
var totalCount = "Hundred & Seven";
console.log("%cTotal count : " + totalCount, "color: blue");
console.log("%cData Type   : " + typeof totalCount, "color: blue");

console.log("%c<=== After Update ===>", "color: yellow");
totalCount = 107;
console.log("%cTotal count : " + totalCount, "color: blue");
console.log("%cData Type   : " + typeof totalCount, "color: blue");
