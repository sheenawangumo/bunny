var calculationHistory = [];
function addToHistory(number1, number2, symbol, total) {
  var item = {
    operands: [number1, number2],
    operator: symbol,
    result: total
  };
  calculationHistory.push(item);
}
function add(num1, num2) {
  var result = num1 + num2;
  addToHistory(num1, num2, "+", result);
  return result;
}

function subtract(num1, num2) {
  var result = num1 - num2;
  addToHistory(num1, num2, "-", result);
  return result;
}

function multiply(num1, num2) {
  var result = num1 * num2;
  addToHistory(num1, num2, "*", result);
  return result;
}

function divide(num1, num2) {
  var result = num1 / num2;
  addToHistory(num1, num2, "/", result);
  return result;
}

function showHistory() {
  if (calculationHistory.length === 0) {
    console.log("no stored calculations");
  } else {
    console.log("History Log:");
    console.log(calculationHistory);
  }
}

// --- Examples of using the program ---
add(10, 5);
subtract(20, 10);
multiply(4, 5);
divide(100, 2);

// Request to see the history
showHistory();