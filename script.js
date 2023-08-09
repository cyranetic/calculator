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
    //clicking 'clear' clears the display and resets all variable values
    if (button.textContent === "Clear") {
      firstNumber = "";
      operator = "";
      secondNumber = "";
      display.textContent = "";
      return;
    }

    //do the operation when equals sign is clicked, but ONLY if both operands and operator have been entered already
    if (button.textContent === "=") {
      //remove operation from display
      display.textContent = "";
      //display result only (need to round long decimal numbers)
      display.textContent = operate(firstNumber, operator, secondNumber);
      return;
    }
    //store clicked button's textContent in variable
    //if it's a number, save it as firstNumber
    //also, once a result is calculated, it becomes the firstNumber to allow for processes like 1 + 13 * 2 = 28 (doesn't follow order of operations)
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
        //allow it to be more than one digit
        if (!firstNumber) {
          firstNumber = button.textContent;
        } else {
          firstNumber += button.textContent;
        }
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
    //if the secondNumber is 0 and the operator is '/', display an error (dividing by zero will crash it (why?))
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

//clicking 'delete' removes the most recent number entered (pop from array?)

//allow user to input floating point (decimal) numbers
//don't let user input more than one decimal in a number like 11.9.39.6

//Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble

//basic calculation functions
function add(operand1, operand2) {
  return Number(operand1) + Number(operand2);
}
function subtract(operand1, operand2) {
  return Number(operand1) - Number(operand2);
}
function multiply(operand1, operand2) {
  return Number(operand1) * Number(operand2);
}
function divide(operand1, operand2) {
  return Number(operand1) / Number(operand2);
}
