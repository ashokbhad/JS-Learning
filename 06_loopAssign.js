console.log(
  "%cA. Count the total number of vowels including small & capital using for loop",
  "color: purple"
);
let str = "I am very good IT Developer";
let count = 0;
const vowels = "aeiou";
for (let i = 0; i < str.length - 1; i++) {
  let ele = str.charAt(i);
  let lower = ele.toLowerCase();
  if (vowels.includes(lower)) {
    count++;
  }
}
console.log(count);

console.log(
  "%cB. Write a fn to get sum of cube of numbers from 1 to 5",
  "color: purple"
);
let n1 = 0;
for (let i = 1; i <= 5; i++) {
  n1 = n1 + i * i * i;
}
console.log(n1);

let str1 = "Hard work always pays back";
let str2 = "Soon i will be UI IT Champ";

str1 = str1.replace(/\s/g, "");
str2 = str2.replace(/\s/g, "");

function oddPositionedChars(s) {
  for (let i = 0; i < s.length; i++) {
    if (i % 2 !== 0) {
      console.log(s.charAt(i));
    }
  }
}

console.log(
  "%cC1. Odd position chars of 'Hard work always pays back'",
  "color: purple"
);
process.stdout.write(`-> `);
oddPositionedChars(str1);
console.log();
console.log(
  "%cC2. Odd position chars of 'Soon i will be UI IT Champ'",
  "color: purple"
);
process.stdout.write(`-> `);
oddPositionedChars(str2);
