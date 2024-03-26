const arrayNumber = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("%c1. Find the total elements in arrayNumber", "color: pink");
process.stdout.write("-> ");
for (let i = 0; i < arrayNumber.length; i++) {
  process.stdout.write(`${arrayNumber[i]} `);
}
console.log("Total elements in arrayNumber is:", arrayNumber.length);

console.log("%c2. Log the first & last element", "color: pink");
// process.stdout.write("-> ");
console.log(`First element - ${arrayNumber[0]}`);
console.log(`Last element  - ${arrayNumber[arrayNumber.length - 1]}`);

console.log("%c3. Log the third last element", "color: pink");
process.stdout.write("-> ");
console.log("The third last element is:", arrayNumber[arrayNumber.length - 3]);

console.log("%c4. Find all even numbers using for loop", "color:pink");
process.stdout.write("-> ");
arrayNumber.forEach((n) => {
  if (n % 2 == 0) {
    process.stdout.write(`${n} `);
  }
});
console.log();

console.log("%c5. Find all odd numbers using for of loop", "color: pink");
process.stdout.write("-> ");
for (const i of arrayNumber) {
  if (i % 2 !== 0) {
    process.stdout.write(`${i} `);
  }
}
console.log();

console.log("%c6. Find all even positioned elements & sum it", "color: pink");
process.stdout.write("-> ");
let sum1 = 0;
for (let i = 0; i < arrayNumber.length; i += 2) {
  sum1 += arrayNumber[i];
}
console.log(sum1);

console.log("%c7. Find all odd positioned elements & sum it", "color: pink");
process.stdout.write("-> ");

let sum2 = 0;
for (let i = 1; i < arrayNumber.length; i += 2) {
  sum2 += arrayNumber[i];
}
console.log(sum2);

console.log("%c8. Find sum of all elements from arrayNumber", "color: pink");
process.stdout.write("-> ");

let sum = 0;
for (let i = 0; i < arrayNumber.length; i++) {
  sum += arrayNumber[i];
}
console.log(sum);

console.log("%c9. Find the numbers which are multiple of 5", "color: pink");
process.stdout.write("-> ");

arrayNumber.forEach((num) => {
  if (num % 5 == 0) {
    process.stdout.write(`${num} `);
  }
});

console.log();
console.log("%c10. Is number 115 available in array?", "color: pink");
process.stdout.write("-> ");

let isPresent = false;

arrayNumber.forEach((a) => {
  if (a == 115) {
    isPresent = true;
  }
});
console.log(isPresent);

console.log("%c11. Is number 23 available in array?", "color: pink");
process.stdout.write("-> ");
arrayNumber.forEach((a) => {
  if (a == 23) {
    isPresent = true;
  }
});
console.log(isPresent);

console.log("%c12. insert 55, 66 at index 3 in array", "color: pink");
arrayNumber.splice(3, 0, 55, 66);
console.log(arrayNumber);

console.log(
  "%c13. delete 3 elements starting from index 4 & log it",
  "color: pink"
);
arrayNumber.splice(4, 3);
console.log(arrayNumber);
