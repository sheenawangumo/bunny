//creating a history log for my calculator functions, so that i can see previous calculations and their results 
var calculationHistory = [];
function addToHistory(a, b, symbol, total) {
  var record = {
    operands: [a, b],
    operator: symbol,
    result: total
  };
  calculationHistory.push(record);
}
//  creating the calculator functions, and calling the addToHistory function to store the calculations in the history log
//add function
function add(a, b) {
  var result = a + b;
  addToHistory(a, b, "+", result);
  return result;
}
//subtract function
function subtract(a, b) {
  var result = a - b;
  addToHistory(a, b, "-", result);
  return result;
}
//multiply function
function multiply(a, b) {
  var result = a * b;
  addToHistory(a, b, "*", result);
  return result;
}
//function divide
function divide(a, b) {
  var result = a / b;
  addToHistory(a, b, "/", result);
  return result;
}
//function to show the history log of calculations to my users
function showHistory() {
  if (calculationHistory.length === 0) {
    console.log("no stored calculations");
  } else {
    console.log("History Log:");
    console.log(calculationHistory);
  }
}