const firNum = +prompt("Enter first number");
const secNum = +prompt("Enter second number");
const result = `Calculations are finished!
Diff: ${firNum} - ${secNum} = ${firNum - secNum}
Mult: ${firNum} * ${secNum} = ${firNum * secNum}
Div: ${firNum} / ${secNum} = ${firNum / secNum}
Sum: ${firNum} + ${secNum} = ${firNum + secNum}`;

alert(`${result}`);
console.log(`${result}`);
