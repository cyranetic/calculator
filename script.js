//basic calculation functions
function add(num1, num2) {
  return Number(num1) + Number(num2);
}
function subtract(num1, num2) {
  return Number(num1) - Number(num2);
}
function multiply(num1, num2) {
  return Number(num1) * Number(num2);
}
function divide(num1, num2) {
  return Number(num1) / Number(num2);
}

//initialize parts of operation
let firstNumber;
let operator;
let secondNumber;

//get the textContent from click event
const buttonsArray = document.querySelectorAll("button");
let display = document.querySelector(".display");
display.textContent = "";

buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    //do the operation when equals sign is clicked
    if (button.textContent === "=") {
      //remove operation from display
      display.textContent = "";
      //display result only
      display.textContent = operate(firstNumber, operator, secondNumber);
      return;
    }
    //store clicked button's textContent in variable
    //if it's a number, save it as firstNumber
    if (!display.textContent.includes(operator)) {
      if (
        button.textContent === "0" ||
        button.textContent === "1" ||
        button.textContent === "2" ||
        button.textContent === "3" ||
        button.textContent === "4" ||
        button.textContent === "5" ||
        button.textContent === "6" ||
        button.textContent === "7" ||
        button.textContent === "8" ||
        button.textContent === "9"
      ) {
        firstNumber = button.textContent;
        //add it to display
        display.textContent += firstNumber;
        return;
      }
    }

    //if it's an operator, save it as operator
    if (
      button.textContent === "+" ||
      button.textContent === "-" ||
      button.textContent === "*" ||
      button.textContent === "/"
    ) {
      operator = button.textContent;
      //add operator to display
      display.textContent += operator;
      return;
    }
    //if the display already contains an operator, clicked button's textContent saved as secondNumber
    if (display.textContent.includes(operator)) {
      secondNumber = button.textContent;
      //add secondNumber to display
      display.textContent += secondNumber;
      return;
    }
  });
});

//values (shown in a string) need to show in display as soon as they're clicked
//when equals sign is clicked, string on display is removed and result is displayed

//chooses and executes correct operation
function operate(firstNumber, operator, secondNumber) {
  if (operator === "+") {
    return add(firstNumber, secondNumber);
  } else if (operator === "-") {
    return subtract(firstNumber, secondNumber);
  } else if (operator === "*") {
    return multiply(firstNumber, secondNumber);
  } else if (operator === "/") {
    return divide(firstNumber, secondNumber);
  }
}
