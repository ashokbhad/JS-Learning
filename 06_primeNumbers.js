// // 7
// function isPrime(num) {
//   for (let index = 2; index < num.length; index++) {
//     if (num%index == 0) {
//       return false;
//     }
//   }
//   return true;
// }
// const result = isPrime(7);
// console.log(`Is 7 Prime Number: ${result}`);

// const result1 = isPrime(9);
// console.log(`Is 9 Prime Number: ${result1}`);

// const array = [3, 9, 6, 19, 29, 53];
// console.log(`Total Prime Numbers in the list: ${array}`);


console.log();
console.log("1. Program to count prime numbers in [3, 9, 7, 6, 19, 29, 53].");
const arr = [3, 9, 7, 6, 19, 29, 53];
let count = 0;

function isPrime(num){
    for(let i=2; i< num; i++) {
        if(num % i == 0) 
            return false;
    }
    return true;
}

for(let i=0; i<arr.length; i++) {
    if(isPrime(i))
        count++;
}

console.log(`-> Prime number count in array is '${count}'.`);
console.log();

console.log("2. Write a program to count the spaces.");

function spaceCount(sentence) {
    let spaces = 0;
    for(let i=0; i<sentence.length; i++) {
        if(sentence.charAt(i) == " ") {
            spaces++;
        }
    }
    return `The space count in "${sentence}" is '${spaces}'.`;
}

console.log(`-> ${spaceCount("Revision is the mother of success")}`);
console.log(`-> ${spaceCount("JavaScript is the language of internet world")}`);
console.log();