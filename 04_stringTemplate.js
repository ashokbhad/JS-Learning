console.log(`I am "Software" Developer`);
var city = "Pune";
var firstName = "Ashok";
//console.log("My name is: ", firstName, " and city is: ", city);
console.log(` My name is: ${firstName} and city is: ${city} `);

console.log("========== replace() ==================");
var greet = "Good Morning";
const afterReplace = greet.replace("Morning", "Afternoon");
console.log(`After replace string is: ${afterReplace}`);

console.log(` ======= toUpperCase() =========`);
var greet = "Good Morning";
var greetInUpperCase = greet.toUpperCase();
console.log(`${greet} in upper case is : ${greetInUpperCase}`);

console.log(` ======= toLowerCase() =========`);
var greet = "GOOD MORNING";
var greetInLowerCase = greet.toLocaleLowerCase();
console.log(`${greet} in lower case is : ${greetInLowerCase}`);

console.log(` ======= trim() =========`);
var str = "   Trim Both Side   ";
console.log(` ${str} it's length is :${str.length}`);

console.log(` ======= includes() =====`);
var greet = "My name is ashok.";
console.log(greet.includes("name"));

console.log(` ======= slice() =========`);
var str = "Developers World!";
console.log(str.slice(0, 10));
