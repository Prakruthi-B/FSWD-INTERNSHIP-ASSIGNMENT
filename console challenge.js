const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Enter first number: ", (a) => {
  readline.question("Enter second number: ", (b) => {
    a = Number(a);
    b = Number(b);

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
    console.log("Division:", b !== 0 ? a / b : "Cannot divide by zero");

    readline.close();
  });
});