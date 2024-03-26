function factorialOfNum(num) {
  let result = 1;

  if (num == null || num == undefined) {
    console.log(`${num} - Invalid Input.`);
    return;
  }
  for (let i = num; i > 0; i--) {
    result = result * i;
  }

  console.log(`The Factorial of ${num} is: ${result}.`);

  // if(num == 0)
  //     return 1;

  // return num * factorialOfNum(num - 1);
}

factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);
