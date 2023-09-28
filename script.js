//Add keyboard support! You might run into an issue where keys such as (/) might cause you some trouble

//Change decimal places to up to 5 IF NEEDED. I.e., 4.5 should not look like 4.50000

//math variables
let num1 = null;
let operator = null;
let num2 = null;
let result = null;
let lastModifiedVar = null;

//DOM variables
let display = document.querySelector(".display");
display.textContent = "";
let buttonsArray = document.querySelectorAll("button");

//allow user to input floating point (decimal) numbers
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "decimal-point") {
      //stop display from overflowing
      if (display.textContent.length < 17) {
        if (display.textContent === "") {
          num1 = ".";
          display.textContent = ".";
        } else if (display.textContent === num1) {
          //if there's already a decimal don't put another
          if (!num1.includes(".")) {
            num1 = num1 + ".";
            display.textContent = num1;
          } else if (num1 === null) {
            num1 = ".";
          }
        } else if (display.textContent.includes(num2)) {
          if (!num2.includes(".")) {
            num2 = num2 + ".";
            display.textContent += ".";
          } else if (num2 === null) {
            num2 = ".";
          }
        } else if (num1 && operator && num2 === null) {
          num2 = ".";
          display.textContent += ".";
        }
      }
    }
  });
});

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
        //reset num1 and the display if a number is entered right after a completed operation
        if (num1 === result) {
          num1 = e.target.textContent;
          display.textContent = num1;
          lastModifiedVar = display.textContent;
          console.log(`num1 is ${num1}`);
        } else if (display.textContent.length < 17) {
          num1 += e.target.textContent;
          display.textContent += e.target.textContent;
          lastModifiedVar = display.textContent;
          console.log(num1);
          console.log(`num1 is ${num1}`);
        }
      }
    }
  });
});

//get operator
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "operator") {
      if (display.textContent.length < 17) {
        //careful! the button is a subtract character, looks similar to negative sign but they're different characters
        if (num1 === null && e.target.textContent === "−") {
          //careful! the character used for the actual math is a "hyphen-minus" character
          num1 = "-";
          lastModifiedVar = num1;
          display.textContent = "-";
        } else if (operator === null && num1 !== null) {
          operator = e.target.textContent;
          display.textContent += operator;
          console.log(`operator is ${operator}`);
        } else if (num2 !== null) {
          operate();
          num2 = null;
          operator = e.target.textContent;
          display.textContent += operator;
        } else if (
          operator !== null &&
          num2 === null &&
          e.target.textContent === "−"
        ) {
          num2 = "-";
          lastModifiedVar = num2;
          display.textContent += "-";
        }
      }
    }
  });
});

//get num2
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.className === "number" && operator !== null) {
      if (display.textContent.length < 17) {
        if (num2 === null) {
          num2 = e.target.textContent;
          display.textContent += e.target.textContent;
          lastModifiedVar = num2;
          console.log(`num2 is ${num2}`);
        } else if (num2 !== null) {
          num2 += e.target.textContent;
          display.textContent += e.target.textContent;
          lastModifiedVar = num2;
          console.log(`num2 is ${num2}`);
        }
      }
    }
  });
});

//clicking equals sign
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "=") {
      if (num2 !== null) {
        operate();
        lastModifiedVar = display.textContent;
        num1 = lastModifiedVar;
      }
    }
  });
});

//calculate the expression
//round results to 5 decimal places
function operate() {
  console.log("running operate() function");
  if (operator === "+") {
    result = add(num1, num2);
    console.log(`the result is ${result}`);
    display.textContent = result;
    if (
      display.textContent.includes(".") &&
      display.textContent.indexOf(".") > -6
    ) {
      console.log("rounding");
      display.textContent = add(num1, num2).toFixed(5);
    }
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "−") {
    result = subtract(num1, num2);
    console.log(`the result is ${result}`);
    display.textContent = result;
    if (
      display.textContent.includes(".") &&
      display.textContent.indexOf(".") > -6
    ) {
      console.log("rounding");
      display.textContent = subtract(num1, num2).toFixed(5);
    }
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "×") {
    result = multiply(num1, num2);
    console.log(`result is ${result}`);
    display.textContent = result;
    if (
      display.textContent.includes(".") &&
      display.textContent.indexOf(".") > -6
    ) {
      console.log("rounding");
      display.textContent = multiply(num1, num2).toFixed(5);
    }
    console.log("we operated");
    num1 = result;
    operator = null;
    num2 = null;
    console.log(`result is ${result}`);
  } else if (operator === "÷") {
    if (num1 === "0" || num2 === "0") {
      console.log("dividing now");
      result = `are you sure?`;
      display.textContent = result;
      console.log("couldnt operate");
      num1 = null;
      operator = null;
      num2 = null;
      console.log("don't divide by zero, please");
    } else {
      result = divide(num1, num2);
      console.log(`result is ${result}`);
      display.textContent = result;
      if (
        display.textContent.includes(".") &&
        display.textContent.indexOf(".") > -6
      ) {
        console.log("rounding");
        display.textContent = divide(num1, num2).toFixed(5);
      }
      console.log("we operated");
      num1 = result;
      operator = null;
      num2 = null;
      console.log(`result is ${result}`);
    }
  }
}

//math helpers
function add(number1, number2) {
  console.log(`type of num1 is ${typeof Number(number1)}`);
  console.log(`type of num2 is ${typeof Number(number2)}`);
  console.log(
    `the equation results in ${Number(number1)} + ${Number(number2)}`
  );
  return Number(number1) + Number(number2);
}
function subtract(number1, number2) {
  return Number(number1) - Number(number2);
}
function multiply(number1, number2) {
  return Number(number1) * Number(number2);
}
function divide(number1, number2) {
  return Number(number1) / Number(number2);
}

//clear
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    if (e.target.textContent === "clear") {
      num1 = null;
      operator = null;
      num2 = null;
      lastModifiedVar = null;
      display.textContent = "";
    }
  });
});

//backspace
buttonsArray.forEach(function (button) {
  button.addEventListener("click", (e) => {
    //display string gets rid of last character
    if (e.target.textContent === "delete") {
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
      } else if (display.textContent.includes(num2)) {
        display.textContent = display.textContent.substring(
          0,
          display.textContent.length - 1
        );
        console.log(lastModifiedVar);
        if (operator === "÷" && num2 !== 0) {
          lastModifiedVar = num2;
          num2 = lastModifiedVar;
        } else if (operator === "÷" && num2 === 0) {
          display.textContent = `Don't divide with zeros`;
        }
      } else if (
        display.textContent[display.textContent.length - 1] === operator
      ) {
        display.textContent = display.textContent.substring(
          0,
          display.textContent.length - 1
        );
        operator === null;
      }
    }
  });
});
