//1.Function with no arguments and no return value

function show() {
  console.log("Inside show function");
}

show();

//2. Function with arguments and no return value

function add(n1, n2, n3) {
  console.log("Arguments: ", n1, n2, n3);

  var result = n1 + n2 + n3;

  console.log("Addition is: ", result);
}

add(3, 6, 7);

add(99.89, 67, 456789);

add(6, 7);

add(16, 9, 90, 44);

add("Hi", "Good", "Morning");

//3. Function with arguments and return value

function subtract(numOne, numTwo) {
  console.log("======== subtraction ================");

  console.log("Arguments: ", numOne, numTwo);

  var result = numOne - numTwo;

  return result;
}

var returnValue = subtract(9, 4);

console.log("Result of subtraction is: ", returnValue);

var returnValue = subtract(99, 42);

console.log("Result of subtraction is: ", returnValue);
