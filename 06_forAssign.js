
console.log("%cA. WAP to print numbers from 5 to 15 by incrementing 1", "color: purple");
process.stdout.write("--> ")
for(let i=5; i<=15; i++){
    process.stdout.write(`${i}  `);
}
console.log();
console.log();

console.log("%cB. WAP to print numbers from 50 to 40 by decrementing 1", "color: purple");
process.stdout.write("--> ")
for(let i=50; i>=40; i--){
    process.stdout.write(`${i}  `);
}
console.log();
console.log();

console.log("%cC. WAP to find first 15 odd numbers", "color: purple");
process.stdout.write("--> ")
for(let i=1; i<=30; i++) {
    process.stdout.write(`${i++}  `);
}
console.log();
console.log();

console.log("%cD. WAP to find first 10 even numbers", "color: purple");
process.stdout.write("--> ")
for(let i=2; i<=20; i++) {
    process.stdout.write(`${i++}  `);
}
console.log();
console.log();

console.log("%cE. WAP to print table of 5 like -> 5 10 15 20 25 ... 50", "color: purple");
process.stdout.write("--> ")
let num = 5;
for(let i=1; i<=10; i++) {
    process.stdout.write(`${num * i}  `);
}
console.log();
console.log();

console.log("%cF. WAP to print table of 10 like -> 10 20 30 40 ... 100", "color: purple");
process.stdout.write("--> ")
let num1 = 10;

for(let i=1; i<=10; i++) {
    process.stdout.write(`${num1 * i}  `)
}
console.log();
console.log();

console.log("%cG. WAP to print table of 10 in reverse order like -> 100 90 80 70 ... 10", "color: purple");
process.stdout.write("--> ")
let num2 = 10;
for(let i=10; i>=1; i--) {
    process.stdout.write(`${num2 * i}  `)
}