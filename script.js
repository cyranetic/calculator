function add(num1, num2) {
  return num1 + num2;
}

console.log(add(4, 5));

function subtract(num1, num2) {
  return num1 - num2;
}

console.log(subtract(4, 1));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(3, 4));

function divide(num1, num2) {
  return num1 / num2;
}

console.log(divide(15, 2));

const firstNumber;
const operator;
const secondNumber;

function operate(firstNumber, operator, secondNumber) {
  if (operator === '+') {
    return add(firstNumber, secondNumber);
  } else if (operator === '-') {
    return subtract(firstNumber, secondNumber);
  } else if (operator === '*') {
    return multiply(firstNumber, secondNumber);
  } else if (operator === '/') {
    return divide(firstNumber, secondNumber);
  }
}