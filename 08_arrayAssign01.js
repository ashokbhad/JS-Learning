const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log("%c1. First & last element", "color: purple");
console.log(`-> First Element - ${fruits_seasonal[0]}`);
console.log(`-> Last Element - ${fruits_seasonal[fruits_seasonal.length - 1]}`);

console.log("%c2. 'Papaya' before 'Banana'", "color: purple");
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log("%c3. Remove 'Mango' from array", "color: purple");
fruits_seasonal.splice(4, 1);
console.log(fruits_seasonal);

console.log("%c4. Add 'Pineapple' at last position", "color: purple");
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log("%c5. Add 'Dragon Fruit' before 'Water Melon'", "color: purple");
fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log("%c6. Replace 'Orange' with 'Kiwi'", "color: purple");
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);

console.log("%c7. Log elements starting from 1 to 4", "color: purple");
const from1to4 = fruits_seasonal.slice(1, 5);
console.log(from1to4);

console.log("%c8. Only select last 3 elements", "color: purple");
const last3 = fruits_seasonal.splice(fruits_seasonal.length - 3);
console.log(last3);
