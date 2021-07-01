const operation = prompt(
  "Enter required operation (+, -, *, /, cos, sin, pow):"
);

let firNum = +prompt("Write the first number");
let secNum, result;

switch (operation) {
  case "+":
  case "-":
  case "*":
  case "/":
  case "pow":
    secNum = +prompt("Write the second number");
    break;
}

switch (operation) {
  case "+":
    result = firNum + secNum;
    break;
  case "-":
    result = firNum - secNum;
    break;
  case "*":
    result = firNum * secNum;
    break;
  case "/":
    result = firNum / secNum;
    break;
  case "pow":
    result = Math.pow(firNum, secNum);
    break;
  case "cos":
    result = Math.cos(firNum);
    break;
  case "sin":
    result = Math.sin(firNum);
    break;
}

const resultFin = `Result of operation ${operation} is ${result}`;

alert(resultFin);
console.log(resultFin);
