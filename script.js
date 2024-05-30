let previousValue  = '';
let operator       = '';
let currentValue   = '';

// Setup when HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function() {

  let numbers = document.querySelectorAll(".number");

  let currentScreen = document.querySelector(".current");

  numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  }));

});


/* Basic math operator functions */
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

/* Operate */
function operate(num1, num2, operator) {
  switch (operator) {
    case "add":
      return add(num1, num2);
      break;
    case "subtract":
      return subtract(num1, num2);
      break;
    case "multiply":
      return multiply(num1, num2);
      break;
    case "divide":
      return divide(num1, num2);
  }
}


function handleNumber(num) {
  currentValue += num;
}