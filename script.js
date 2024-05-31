let previousValue  = '';
let operator       = '';
let currentValue   = '';
let hasResult = false;
let previousScreen = '';
let currentScreen = '';

// Setup when HTML document has been completely parsed
document.addEventListener("DOMContentLoaded", function() {

  let numbers = document.querySelectorAll(".number");
  let operators = document.querySelectorAll(".operator");
  let equal = document.querySelector(".equal");
  let clear = document.querySelector("#clear-button")

  currentScreen = document.querySelector(".current");
  previousScreen = document.querySelector(".previous");

  numbers.forEach((number) => number.addEventListener("click", function(e){
    handleNumber(e.target.textContent);
    currentScreen.textContent = currentValue;
  }));

  operators.forEach((op) => op.addEventListener("click", function(e){
    if (operator !== "") {
      operate(Number(previousValue), Number(currentValue), operator);
      currentScreen.textContent = currentValue;
    } 

    handleOperator(e.target.textContent);
    previousScreen.textContent = previousValue + " " + operator;
  
  }));

  equal.addEventListener("click", function(e){
    if (previousValue !== '' && currentValue !== '' && operator !== '') {
      let currentOld = currentValue;
      operate(Number(previousValue), Number(currentValue), operator);
      currentScreen.textContent = currentValue;
      previousScreen.textContent = previousValue + " " + operator + " " + currentOld + " " + "=";
      hasResult = true;
    }
    
  });

  clear.addEventListener("click", function(e){
    clearScreen();
  })

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
function operate(num1, num2, op) {
  let result = 0;
  switch (op) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "x":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
  }
  currentValue = roundNumber(result).toString();
}


function handleNumber(num) {
  if (hasResult) {
    hasResult = false;
    clearScreen();
  }
  currentValue += num;
}

function handleOperator(op) {
  operator = op;
  previousValue = currentValue;
  currentValue = '';

}

function clearScreen() {
    previousValue = '';
    previousScreen.textContent = '';
    currentValue = '';
    currentScreen.textContent = 0;
    operator = '';
}

function roundNumber(num) {
  return Math.round(num * 1000) / 1000;
}