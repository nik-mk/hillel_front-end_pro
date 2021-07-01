// window.onload = arrayIn;
// ввод чисел для массива

const CHOISE_SORT = 1;
const CHOISE_ODD = 2;
const CHOISE_SUM = 3;

function arrayIn(message, separator) {
  if (!separator) {
    separator = " ";
  }
  const result = prompt(message);
  return result
    .trim()
    .split(separator)
    .map((e) => +e)
    .filter((e) => !Number.isNaN(e));
}
// дать список операций над массивом
function getOperation() {
  const operation = 1 - sortArray;
  2 - odd / event;
  3 - sum, avg;
  let operationChoise;
  do {
    operationChoise = +prompt(operation);
  } while (!operationChoise || (operationChoise > 3 && operationChoise < 1));
  return operationChoise;
}
// вывести сумму всех чисел
function arraySum(array) {
  const sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i++];
  }
  return +sum;
}
// отсортировать по убыванию возрастанию
function sortNum(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function sortArray() {
  arrayIn(sortNum);
}

function userProcessChoise(choise, array) {
  switch (choise) {
    case CHOISE_SORT:
      break;
    case CHOISE_ODD:
      break;
    case CHOISE_SUM:
      break;
  }

  function main(arr) {
    let userArray = arrayIn("Insert array number");
    let choise = getOperation();

    userProcessChoise(choise, userArray);
  }

  main(arr);
  // сделать из чиссел массива
  // const array = arrayIn.split(" ", " ");

  // getOperation

  // вывести четные/нечетные
}
