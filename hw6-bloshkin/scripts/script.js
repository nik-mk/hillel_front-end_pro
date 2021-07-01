function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

function factorialLoop(n) {
  let result = 1;
  if (n <= 1) return result;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(8));
console.log(factorialLoop(8));

function compareArray(array, num) {
  for (let i = 0; i < array.length; i++) {
    if (num > array[i]) return true;
  }
  return false;
}

function cleverArrayPush(arr, num) {
  if (compareArray(arr, num)) {
    arr.shift();
    arr.push(num);
  } else {
    arr.pop();
    arr.unshift(num);
  }
  return arr;
}

console.log(cleverArrayPush([23, 35, 6567, 65, 67], 45));
console.log(cleverArrayPush([23, 35, 6567, 65, 67], 13));
