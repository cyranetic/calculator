// //allow user to input floating point (decimal) numbers
// //don't let user input more than one decimal in a number like 11.9.39.6

// //Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble

let num1 = null;
let operator = null;
let num2 = null;
let result = null;
let equalsClicked = false;
let lastModifiedVar = null;

let display = document.querySelector(".display");
display.textContent = "";
let buttonsArray = document.querySelectorAll("button");

//get num1
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "number" && operator === null) {
      if (num1 === null) {
        num1 = e.target.textContent;
        display.textContent += num1;
        lastModifiedVar = display.textContent;
        console.log(`num1 is ${num1}`);
      } else if (num1 !== null) {
        num1 += e.target.textContent;
        display.textContent += e.target.textContent;
        lastModifiedVar = display.textContent;
        console.log(num1);
        console.log(`num1 is ${num1}`);
      }
    }
  });
});

//get operator
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "operator") {
      if (num1 !== null) {
        if (num2 === null) {
          operator = e.target.textContent;
          display.textContent += operator;
          console.log(`operator is ${operator}`);
        } else if (num2 !== null) {
          operate();
          num2 = null;
          operator = e.target.textContent;
          display.textContent += operator;
        }
      }
    }
  });
});

//insert decimal
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "decimal-point") {
      if (display.textContent === "") {
        num1 = ".";
        display.textContent = ".";
      } else if (display.textContent === num1) {
        if (!num1.includes(".")) {
          num1 = num1 + ".";
          display.textContent = num1;
        } else if (num1 === null) {
          num1 = ".";
        }
      } else if (display.textContent === num2) {
        if (!num2.includes(".")) {
          num2 = num2 + ".";
          display.textContent = num2;
        } else if (num2 === null) {
          num2 = ".";
        }
      } else if (num1 && operator && num2 === null) {
        num2 = ".";
        display.textContent += ".";
      }
    }
  });
});
//if there's already a decimal don't put another

//get num2
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "number" && operator !== null) {
      if (num2 === null) {
        num2 = e.target.textContent;
        display.textContent += e.target.textContent;
        lastModifiedVar = display.textContent;
        console.log(`num2 is ${num2}`);
      } else if (num2 !== null) {
        num2 += e.target.textContent;
        display.textContent += e.target.textContent;
        lastModifiedVar = display.textContent;
        console.log(`num2 is ${num2}`);
      }
    }
  });
});

//clicking =
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      operate();
      lastModifiedVar = display.textContent;
      num1 = lastModifiedVar;
    }
  });
});

//calculate the expression
function operate() {
  console.log("we are operating");
  if (operator === "+") {
    result = add(num1, num2);
    display.textContent = result;
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "−") {
    result = subtract(num1, num2);
    display.textContent = result;
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "×") {
    result = multiply(num1, num2);
    display.textContent = result;
    console.log("we operated");
    num1 = result;
    console.log(`num1 is currently ${num1}`);
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "÷") {
    result = divide(num1, num2);
    display.textContent = result;
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  }
}

//clicking clear
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "clear") {
      clear();
    }
  });
});

//math
function add(number1, number2) {
  return Number(number1) + Number(number2);
}
function subtract(number1, number2) {
  return Number(number1) - Number(number2);
}
function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}
function divide(number1, number2) {
  if (number1 === 0 || number2 === 0) {
    return "Nope";
  } else {
    return Number(number1) / Number(number2);
  }
}

//clear function
function clear() {
  //clicking 'clear' clears the display and resets all variable values
  num1 = null;
  operator = null;
  num2 = null;
  lastModifiedVar = null;
  display.textContent = "";
}

//backspace function
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    //display string gets rid of last character
    if (e.target.textContent === "backspace") {
      if (display.textContent === num1) {
        console.log("this is num1");
        display.textContent = display.textContent.substring(
          0,
          display.textContent.length - 1
        );
        console.log(lastModifiedVar);
        lastModifiedVar = display.textContent;
        console.log(lastModifiedVar);
        num1 = lastModifiedVar;
      } else if (display.textContent === num2) {
        display.textContent = display.textContent.substring(
          0,
          display.textContent.length - 1
        );
        console.log(lastModifiedVar);
        lastModifiedVar = display.textContent;
        console.log(lastModifiedVar);
        num2 = lastModifiedVar;
      }
    }
  });
});
