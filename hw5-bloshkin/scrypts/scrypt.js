function numCheck(messega) {
  let num;
  do {
    num = +prompt(messega);
  } while (Number.isNaN(num));
  return num;
}

function numberArray(length) {
  let array = [];
  for (let i = 0; i < length; i++) {
    array[i] = numCheck("Incert number");
  }
  return array;
}

function sortArray(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

function printArray(array) {
  let arrayTemplate = "";
  for (let i = 0; i < array.length; i++) {
    arrayTemplate += `${array[i]} `;
  }
  console.log(arrayTemplate);
  alert(arrayTemplate);
}

alert("Aloha");
let length = numCheck("Incert leight of a new array");

let newArray = numberArray(length);
newArray = sortArray(newArray);
printArray(newArray);
