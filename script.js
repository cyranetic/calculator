// let firstNumber = null;
// let operator = null;
// let secondNumber = null;
// let lastModifiedVar = null;
// let result = null;

// const buttonsArray = document.querySelectorAll("button");
// let display = document.querySelector(".display");
// display.textContent = "";

// operate();

// //chooses and executes correct operation
// function operate(firstNumber, operator, secondNumber) {
//   buttonsArray.forEach(function (button) {
//     button.addEventListener("click", (e) => {
//       let equalsClicked = false;
//       if (result === null) {
//         if (e.target.textContent === "clear") {
//           clear();
//           return;
//         }

//         if (e.target.textContent === "backspace") {
//           backspace();
//           return;
//         }

//         if (e.target.textContent === "=") {
//           equalsClicked = true;
//           if (operator === "+") {
//             result = add(firstNumber, secondNumber);
//             firstNumber = result;
//             return result;
//           } else if (operator === "−") {
//             result = subtract(firstNumber, secondNumber);
//             firstNumber = result;
//             return result;
//           } else if (operator === "×") {
//             result = multiply(firstNumber, secondNumber);
//             firstNumber = result;
//             return result;
//           } else if (operator === "÷") {
//             result = divide(firstNumber, secondNumber);
//             firstNumber = result;
//             return result;
//           }
//         }
//         while (operator === null) {
//           if (
//             button.textContent === "0" ||
//             button.textContent === "1" ||
//             button.textContent === "2" ||
//             button.textContent === "3" ||
//             button.textContent === "4" ||
//             button.textContent === "5" ||
//             button.textContent === "6" ||
//             button.textContent === "7" ||
//             button.textContent === "8" ||
//             button.textContent === "9"
//           ) {
//             if (firstNumber === null) {
//               firstNumber = button.textContent;
//               display.textContent += button.textContent;
//             } else if (equalsClicked === false) {
//               firstNumber += button.textContent;
//               display.textContent += button.textContent;
//             }
//             lastModifiedVar = firstNumber;
//           } else if (
//             button.textContent === "+" ||
//             button.textContent === "−" ||
//             button.textContent === "×" ||
//             button.textContent === "÷"
//           ) {
//             operator = button.textContent;
//             //add operator to display
//             display.textContent += operator;
//             //save as last modified so it can be deleted
//             lastModifiedVar = operator;
//           }
//         }
//         if (secondNumber === null) {
//           secondNumber = button.textContent;
//           display.textContent += button.textContent;
//         } else if (secondNumber !== null) {
//           secondNumber += button.textContent;
//           display.textContent += button.textContent;
//         }
//         lastModifiedVar = secondNumber;
//       }
//     });
//   });
// }

// //basic calculation functions
// function add(operand1, operand2) {
//   return Number(operand1) + Number(operand2);
// }
// function subtract(operand1, operand2) {
//   return Number(operand1) - Number(operand2);
// }
// function multiply(operand1, operand2) {
//   return Number(operand1) * Number(operand2);
// }
// function divide(operand1, operand2) {
//   if (operand1 === 0 || operand2 === 0) {
//     return "Really?";
//   } else {
//     return Number(operand1) / Number(operand2);
//   }
// }

// //backspace function
// function backspace() {
//   //display string gets rid of last character
//   display.textContent = display.textContent.substring(
//     0,
//     display.textContent.length - 1
//   );
//   //the most recently modified variable needs to be reset
//   if (lastModifiedVar === firstNumber) {
//     firstNumber = null;
//   } else if (lastModifiedVar === operator) {
//     operator = null;
//   } else if (lastModifiedVar === secondNumber) {
//     secondNumber = null;
//   }
//   lastModifiedVar = null;
// }

// //clear function
// function clear() {
//   //clicking 'clear' clears the display and resets all variable values
//   firstNumber = null;
//   operator = null;
//   secondNumber = null;
//   lastModifiedVar = null;
//   display.textContent = "";
//   return;
// }

// //allow user to input floating point (decimal) numbers
// //don't let user input more than one decimal in a number like 11.9.39.6

// //Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble

let num1 = null;
let operator = null;
let num2 = null;
let result = null;

let display = document.querySelector(".display");
let button = document.querySelectorAll("button").forEach(function (button) {
  console.log(button);
  return button;
});
