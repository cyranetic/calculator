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
let equalsClicked = false;

let display = document.querySelector(".display");
display.textContent = "";
let buttonsArray = document.querySelectorAll("button");

function getNum1() {
  buttonsArray.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (e.target.className === "number" && operator === null) {
        if (num1 === null) {
          num1 = e.target.textContent;
          display.textContent += num1;
          return num1;
        } else if (num1 !== null) {
          num1 += e.target.textContent;
          display.textContent += e.target.textContent;
          return num1;
        }
      }
    });
  });
}
num1 = getNum1();
console.log(num1);

function getOperator() {
  buttonsArray.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (e.target.className === "operator") {
        if (num1 === null) {
          return;
        } else if (operator !== null) {
          return;
        } else if (num1 !== null) {
          operator = e.target.textContent;
          display.textContent += operator;
          return operator;
        }
      }
    });
  });
}

function getNum2() {
  buttonsArray.forEach(function (button) {
    button.addEventListener("click", (e) => {
      if (e.target.className === "number" && operator !== null) {
        if (num2 === null) {
          num2 = e.target.textContent;
          display.textContent += e.target.textContent;
          return num2;
        } else if (num2 !== null) {
          num2 += e.target.textContent;
          display.textContent += e.target.textContent;
          return num2;
        }
      }
    });
  });
}

// function operate() {
//   //calculate the expression
//   buttonsArray.forEach(function (button) {
//     button.addEventListener("click", (e) => {
//       if (e.target.textContent === "=") {
//         if (operator() === "+") {
//           result = add(num1(), num2());
//           display.textContent = result;
//           num1 = result;
//           console.log(result);
//           return result;
//         } else if (operator() === "−") {
//           result = subtract(num1(), num2());
//           display.textContent = result;
//           num1 = result;
//           return result;
//         } else if (operator() === "×") {
//           result = multiply(num1(), num2());
//           display.textContent = result;
//           num1 = result;
//           return result;
//         } else if (operator() === "÷") {
//           result = divide(num1(), num2());
//           display.textContent = result;
//           num1 = result;
//           return result;
//         }
//       }
//     });
//   });
// }

// //math
// function add(number1, number2) {
//   return Number(number1) + Number(number2);
// }
// function subtract(number1, number2) {
//   return Number(number1) - Number(number2);
// }
// function multiply(number1, number2) {
//   return Number(number1) * Number(number2);
// }
// function divide(number1, number2) {
//   if (number1 === 0 || number2 === 0) {
//     return "Nope";
//   } else {
//     return Number(number1) / Number(number2);
//   }
// }

// operate();
